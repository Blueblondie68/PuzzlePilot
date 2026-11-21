'use strict';

// Shared TV programme labels for Daily Quiz and Practice.
// A title is context, not a clue: never display it if the question asks
// for a programme or if a programme title occurs among the answers.
const { getQuestionBank } = require('./quiz_bank');

const GENERIC = new Set([
  'television','tv','british television','british tv','american television',
  'us television','australian television','australian tv','uk television',
  'television history','british television history','tv history',
  'television comedy','british comedy television','sitcom','sitcoms',
  'british sitcom','british sitcoms','situation comedy','comedy','comedies',
  'british comedy','family comedy','workplace comedy','comedy television',
  'drama','dramas','crime drama','action drama','crime thriller',
  'drama series','family drama','police drama','legal drama','medical drama',
  'police procedural','procedural','political drama','thriller',
  'soap','soaps','soap opera','soap operas','game show','game shows',
  'quiz shows','quiz and game shows','quiz & game shows','reality shows',
  'documentaries','children television',"children's television",
  "children's tv",'childrens tv','documentary','historical drama',
  'period drama','period comedy','wartime comedy','sketch comedy',
  'science fiction','sci fi','sci-fi','fantasy','space western',
  'space opera','ensemble drama','adventure','television film',
  'tv movie','original series','production history','series history',
  'storyline','viewer storyline','cast','characters','question focus',
  'answer focus','format written quiz','written quiz','fox us television',
  'bbc','bbc one','bbc two','bbc three','bbc four','itv','itv1',
  'itv network','channel 4','channel four','channel 5','sky one',
  'seven network','nine network','abc','nbc','cbs','fox','hbo',
  'netflix','britbox','disney plus','prime video','amazon prime video'
]);

function tidyTitle(value) {
  return String(value || '').trim()
    .replace(/\s*\((?:18|19|20)\d{2}(?:\s*[-–]\s*(?:(?:18|19|20)\d{2}|present))?\)\s*$/, '')
    .trim();
}

function normalise(value) {
  return tidyTitle(value).toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ').trim()
    .replace(/^the /, '');
}

function isTelevision(question) {
  return /^(?:tv|television)$/i.test(String(question && question.category || '').trim());
}

function usefulTitle(value) {
  const name = String(value || '').trim();
  const normal = normalise(name);
  if (!name || !normal || GENERIC.has(normal)) return false;
  if (/^(?:18|19|20)\d{2}(?:s)?(?:\s+television)?$/.test(normal)) return false;
  if (/^(?:series|season|episode|day|year|hour)\s+\w+/.test(normal)) return false;
  if (/\b(?:season|series|episode|day)\s+\d+\b/.test(normal)) return false;
  if (/^(?:question focus|answer focus|storyline|characters|format|genre|network|location)\s*[:=]/i.test(name)) return false;
  if (/^(?:tv|television|programme|program|show|year)\s*[:=]/i.test(name)) return false;
  if (/^(?:19|20)\d{2}s?\s+(?:television|tv)$/.test(normal)) return false;
  return true;
}

function tagsOf(question) {
  return Array.isArray(question && question.tags)
    ? question.tags.filter(t => typeof t === 'string' && t.trim())
    : [];
}

function explicitTitle(question) {
  for (const field of ['programme', 'program', 'show']) {
    if (typeof question[field] === 'string' && usefulTitle(question[field])) {
      return tidyTitle(question[field]);
    }
  }
  for (const tag of tagsOf(question)) {
    const match = /^\s*(?:programme|program|show)\s*[:=]\s*(.+)\s*$/i.exec(tag);
    if (match && usefulTitle(match[1])) return tidyTitle(match[1]);
  }
  return null;
}

let indexById = null;
let bank = null;
const titleCache = new WeakMap();
const tagCache = new WeakMap();
let explicitNames = null;

function ensureIndex() {
  if (indexById) return;
  bank = getQuestionBank();
  indexById = new Map();
  bank.forEach((question, i) => {
    if (question && typeof question.id === 'string') indexById.set(question.id, i);
  });
}

function normalisedTags(question) {
  if (tagCache.has(question)) return tagCache.get(question);
  const result = new Set(tagsOf(question).map(normalise));
  tagCache.set(question, result);
  return result;
}

function legacyTitle(question) {
  ensureIndex();
  const pos = indexById.get(question.id);
  if (pos === undefined) return null;

  // Ignore generic genres/networks even if every question in a pack shares them.
  // Only select a specific tag repeated by a majority of nearby TV questions.
  const possible = tagsOf(question).slice(0, 18)
    .map((name, rank) => ({ name: name.trim(), rank }))
    .filter(entry => usefulTitle(entry.name));
  const choices = [];
  for (const entry of possible) {
    const key = normalise(entry.name);
    let compared = 0;
    let shared = 0;
    for (let d = -5; d <= 5; d++) {
      if (!d) continue;
      const neighbour = bank[pos + d];
      if (!isTelevision(neighbour)) continue;
      compared++;
      if (normalisedTags(neighbour).has(key)) shared++;
    }
    if (shared >= 3 && shared >= Math.ceil(compared * 0.6)) {
      choices.push({ ...entry, shared });
    }
  }
  if (!choices.length) return null;
  choices.sort((a, b) => b.shared - a.shared || a.rank - b.rank || a.name.length - b.name.length);
  return tidyTitle(choices[0].name);
}

function candidateTitle(question) {
  if (!isTelevision(question)) return null;
  if (titleCache.has(question)) return titleCache.get(question);
  const title = explicitTitle(question) || legacyTitle(question);
  titleCache.set(question, title);
  return title;
}

function knownExplicitTitles() {
  if (explicitNames) return explicitNames;
  ensureIndex();
  const found = new Map();
  for (const question of bank) {
    if (!isTelevision(question)) continue;
    const title = explicitTitle(question);
    if (title) found.set(normalise(title), title);
  }
  explicitNames = [...found.values()];
  return explicitNames;
}

function titleInChoices(title, question) {
  const key = normalise(title);
  if (!key) return false;
  const answers = [
    ...(Array.isArray(question.answers) ? question.answers : []),
    question.correctAnswer
  ];
  return answers.some(choice => {
    const value = normalise(choice);
    return value === key || ((' ' + value + ' ').includes(' ' + key + ' '));
  });
}

function asksForProgramme(question) {
  const wording = String(question.question || '').trim();
  return /^(?:(?:in|from)\s+)?(?:which|what)\s+(?:(?:tv|television|bbc|itv|british|american)\s+)*(?:programme|program|show|sitcom|soap|drama|series)\b/i.test(wording) ||
    /^(?:name|identify)\s+(?:the|a)\s+(?:tv\s+|television\s+)?(?:programme|program|show|sitcom|soap|drama|series)\b/i.test(wording) ||
    /\b(?:which|what)\s+(?:(?:tv|television)\s+)?(?:programme|program|show|sitcom|soap|series)\b/i.test(wording) ||
    /^(?:in|from)\s+(?:which|what)\s+(?:(?:tv|television)\s+)?(?:programme|program|show|sitcom|soap|series)\b/i.test(wording);
}

function getTelevisionProgramme(question) {
  if (!isTelevision(question) || asksForProgramme(question)) return null;
  const title = candidateTitle(question);
  if (!title || titleInChoices(title, question)) return null;

  // If any other known programme is offered as a choice, displaying a
  // different programme would also give the answer away by elimination.
  if (knownExplicitTitles().some(name => titleInChoices(name, question))) {
    return null;
  }
  return title;
}

module.exports = { getTelevisionProgramme };
