
// PuzzlePilot - Big Quiz - Pack 419
// Albion Market (ITV/Granada, 1985-1986): the complete 100-episode series.
// Follows Pack 418. Full WordPad-ready CommonJS.
// First ID: tv_23871.
'use strict';

const FIRST_ID = 23871;
const commonTags = [
  'television', 'Albion Market', 'British soap opera',
  'Granada Television', 'ITV', '1985 to 1986'
];

// Question | correct answer | three distractors | difficulty | seven specific tags.
// The exported answer positions rotate A, B, C and D.
const rows = [
`In which year did Albion Market first air on British television?|1985|1983|1987|1989|Easy|1985 premiere|30 August|debut year|1980s drama|programme launch|first broadcast|television history`,
`In which year did the final episode of Albion Market air?|1986|1985|1987|1988|Easy|1986 finale|24 August|broadcast ending|programme cancellation|one year run|series conclusion|television chronology`,
`How many episodes of Albion Market were made?|100|52|78|156|Easy|100 episodes|single series|production total|series length|half hour episodes|completed programme|final episode count`,
`Which television network originally screened Albion Market?|ITV|BBC One|Channel 4|BBC Two|Easy|original broadcaster|UK terrestrial television|network scheduling|commercial television|Granada programmes|1980s network|broadcast platform`,
`Which broadcaster produced Albion Market?|Granada Television|Thames Television|Yorkshire Television|Central Television|Easy|production company|Manchester studios|Granada drama|programme production|northern broadcaster|1980s television|independent television`,
`In which Greater Manchester city was the fictional Albion Market located?|Salford|Bolton|Stockport|Rochdale|Medium|Salford setting|Greater Manchester|fictional market location|northern England|market traders|local geography|programme setting`,
`What kind of trading location formed the main setting of Albion Market?|A covered indoor market|An open-air car boot sale|A seaside shopping arcade|A wholesale cattle auction|Easy|indoor market|covered stalls|trading community|market setting|local commerce|workplace soap|stallholder lives`,
`Albion Market was devised as an ITV companion to which long-running soap?|Coronation Street|Crossroads|Emmerdale Farm|Brookside|Easy|Coronation Street|sister programme|ITV companion soap|Granada strategy|rival schedules|1985 launch|soap history`,
`On which two days was Albion Market originally scheduled each week?|Friday and Sunday|Monday and Wednesday|Tuesday and Thursday|Saturday and Sunday|Medium|Friday episodes|Sunday episodes|twice weekly|original schedule|evening broadcast|weekend television|network planning`,
`Who was executive producer of Albion Market?|Bill Podmore|Phil Redmond|Julia Smith|Verity Lambert|Medium|Bill Podmore|executive producer|Granada management|production leadership|Coronation Street producer|1985 launch|behind scenes`,
`Which pair of writers devised Albion Market?|Peter Whalley and Andy Lynch|Tony Warren and Kay Mellor|Phil Redmond and Jimmy McGovern|David Liddiment and Stephen Lowe|Hard|Peter Whalley|Andy Lynch|series creators|programme conception|writer partnership|development history|Granada drama`,
`Which producer was brought in to try to turn Albion Market around during its run?|David Liddiment|Phil Redmond|Tony Garnett|John Yorke|Hard|David Liddiment|revival effort|later producer|Granada appointment|production changes|ratings challenge|1986 revamp`,
`Who was the original producer of Albion Market before David Liddiment took over?|Gareth Jones|Michael Grade|Mike Scott|David Plowright|Hard|Gareth Jones|original producer|1985 production|producer succession|series launch|Granada staff|behind scenes history`,
`Which river flowed beside the actual Albion Market set?|The River Irwell|The River Mersey|The River Tame|The River Ribble|Medium|River Irwell|Salford waterfront|real filming location|market exterior|waterfront warehouse|Greater Manchester|production geography`,
`What type of building was converted into the real Albion Market set?|A warehouse|An abandoned railway station|A disused hospital|A former cinema|Medium|converted warehouse|Water Street|purpose built set|Granada location|market construction|filming premises|set design`,
`Which Coronation Street designer also designed the Albion Market set?|Denis Parkin|Tony Warren|Bill Podmore|Peter Whalley|Hard|Denis Parkin|set designer|Coronation Street connection|Granada scenery|market layout|production design|historic sets`,
`Which group performed the Albion Market theme tune released on vinyl?|Fair Deal|The Market Men|The Northern Lights|The Salford Sound|Hard|Fair Deal|theme tune|vinyl single|television music|opening theme|recording group|programme soundtrack`,
`What was the name of the local pub associated with the Albion Market set?|The Waterman's Arms|The Queen's Head|The Rover's Return|The Woolpack|Medium|Waterman's Arms|local pub|Water Street|market social life|filming exterior|public house|set geography`,
`Which actor played market superintendent Derek Owen in Albion Market?|David Hargreaves|Peter Benson|Bernard Spear|Geoffrey Leesley|Easy|David Hargreaves|Derek Owen|lead actor|market authority|cast identification|character casting|superintendent`,
`What job did Derek Owen hold in Albion Market?|Market superintendent|Café chef|Local police sergeant|Newspaper editor|Easy|Derek Owen|market superintendent|stall allocations|market management|central character|daily disputes|job responsibility`,
`Which actor played Derek Owen's assistant Keith Naylor in Albion Market?|Derek Hicks|John Michie|Jonathan Barlow|Simon Rouse|Medium|Derek Hicks|Keith Naylor|assistant role|actor casting|young employee|market office|1985 cast`,
`Which actress played stallholder Lynne Harrison in Albion Market?|Noreen Kershaw|Sally Baxter|Carol Kaye|Valerie Lilley|Easy|Noreen Kershaw|Lynne Harrison|cast identification|domestic goods stall|Harrison family|central trader|1985 actress`,
`Which actor played Lynne Harrison's husband Roy in Albion Market?|Jonathan Barlow|Geoffrey Leesley|Peter Benson|Bernard Spear|Medium|Jonathan Barlow|Roy Harrison|Harrison family|return from prison|marital storyline|actor casting|1985 cast`,
`Which actress played Lisa O'Shea in Albion Market?|Sally Baxter|Barbara Wilshere|Jane Hazlegrove|Paula Jacobs|Medium|Sally Baxter|Lisa O'Shea|daughter role|young stallholder|Harrison household|actor casting|original cast`,
`What was Lisa O'Shea's relationship to Lynne Harrison in Albion Market?|She was Lynne's daughter|She was Lynne's sister|She was Lynne's niece|She was Lynne's mother|Medium|Lisa O'Shea|Lynne Harrison|mother and daughter|family relationship|Harrison household|generational conflict|family storyline`,
`Which character was played by John Michie in Albion Market?|Tony Fraser|Keith Naylor|Roy Harrison|Geoff Travis|Easy|John Michie|Tony Fraser|actor casting|young trader|romantic storylines|market character|original cast`,
`What food did Albion Market trader Tony Fraser specialise in selling?|Cakes|Fresh fish|Cheese|Hot pies|Medium|Tony Fraser|cake seller|market merchandise|stall business|John Michie role|young entrepreneur|trader occupation`,
`Which actor played ceramics trader Morris Ransome in Albion Market?|Bernard Spear|Burt Caesar|David Hargreaves|Derek Hicks|Medium|Bernard Spear|Morris Ransome|cast identification|gossiping trader|ceramics stall|market rivalry|1985 cast`,
`What kind of goods did Morris Ransome sell in Albion Market?|China and ceramics|Fresh vegetables|Second-hand books|Electrical appliances|Medium|Morris Ransome|china dealer|ceramics stall|market merchandise|trade rivalry|china pots|stallholder occupation`,
`Which actress played Miriam Ransome in Albion Market?|Carol Kaye|Valerie Lilley|Pik-Sen Lim|Linda Polan|Medium|Carol Kaye|Miriam Ransome|cast identification|Morris Ransome|married couple|market stallholder|1985 cast`,
`Which actor played florist Geoff Travis in Albion Market?|Geoffrey Leesley|Peter Benson|Dev Sagoo|Jonathan Barlow|Medium|Geoffrey Leesley|Geoff Travis|florist role|actor casting|flower stall|family drama|market traders`,
`Which character was Geoff Travis married to in Albion Market?|Eileen Travis|Miriam Ransome|Peggy Sagar|Lynne Harrison|Medium|Geoff Travis|Eileen Travis|married couple|family conflict|Travis household|marital relationship|parenthood storyline`,
`Which actress played toy-stall trader Brenda Rigg in Albion Market?|Valerie Lilley|Noreen Kershaw|Barbara Wilshere|Carol Kaye|Medium|Valerie Lilley|Brenda Rigg|toy stall|Rigg family|cast identification|market trader|1985 actress`,
`Which actor played Brenda Rigg's husband Larry in Albion Market?|Peter Benson|Derek Hicks|John Michie|Burt Caesar|Medium|Peter Benson|Larry Rigg|Rigg family|market schemer|toy stall|actor casting|1985 character`,
`What was the first name of Larry and Brenda Rigg's teenage son in Albion Market?|Duane|Jaz|Keith|Billy|Medium|Duane Rigg|Brenda Rigg|Larry Rigg|teenage son|Rigg family|family relationship|market youth`,
`Which actor played Duane Rigg in Albion Market?|Alistair Walker|Simon Rouse|Howard Lloyd-Lewis|Dev Sagoo|Hard|Alistair Walker|Duane Rigg|teen actor|Rigg family|cast identification|market youth|1985 cast`,
`Which actor played the younger Sharma brother Jaz in Albion Market?|Paul Bhattacharjee|Dev Sagoo|Philip Tan|Burt Caesar|Medium|Paul Bhattacharjee|Jaz Sharma|younger brother|Sharma family|actor casting|fashion trader|1985 cast`,
`Which actor played Raju Sharma in Albion Market?|Dev Sagoo|Paul Bhattacharjee|Philip Tan|Jonathan Barlow|Medium|Dev Sagoo|Raju Sharma|older brother|Sharma family|actor casting|arranged marriage plot|1985 cast`,
`What kind of market stall did the Sharma brothers operate in Albion Market?|A fashion clothing stall|A pet food stall|A flower stall|A furniture stall|Medium|Jaz Sharma|Raju Sharma|fashion clothing|trader business|Sharma brothers|stall merchandise|workplace plot`,
`Which actress played Ly Nhu Chan in Albion Market?|Pik-Sen Lim|Seeta Indrani|Jamila Massey|Souad Faress|Hard|Pik-Sen Lim|Ly Nhu Chan|Vietnamese trader|cast identification|market character|actor casting|1985 drama`,
`Which actor played Lam Quoc Hoa in Albion Market?|Philip Tan|Paul Bhattacharjee|Dev Sagoo|Burt Caesar|Hard|Philip Tan|Lam Quoc Hoa|actor casting|Vietnamese character|gambling story|market trader|1985 cast`,
`Which actress played café manager Peggy Sagar in Albion Market?|Paula Jacobs|Barbara Wilshere|Noreen Kershaw|Valerie Lilley|Medium|Paula Jacobs|Peggy Sagar|cafe manager|cast identification|market cafe|community confidante|1985 actress`,
`Which actor played market café chef Phil Smith in Albion Market?|Burt Caesar|Bernard Spear|Peter Benson|Geoffrey Leesley|Medium|Burt Caesar|Phil Smith|chef role|market cafe|cast identification|kitchen staff|1985 cast`,
`Which actress played café worker Carol Broadbent in Albion Market?|Barbara Wilshere|Sally Baxter|Jane Hazlegrove|Carol Kaye|Medium|Barbara Wilshere|Carol Broadbent|cafe assistant|young employee|actor casting|romantic interest|1985 cast`,
`Which 1960s pop singer joined Albion Market as hairdresser Viv Harker?|Helen Shapiro|Sandie Shaw|Cilla Black|Lulu|Medium|Helen Shapiro|Viv Harker|guest casting|1960s singer|1986 revamp|market hairdresser|celebrity actor`,
`Which actor played pub landlord Ted Pilkington in Albion Market?|Antony Booth|David Hargreaves|Malcolm Hebden|Simon Rouse|Medium|Antony Booth|Ted Pilkington|pub landlord|cast addition|programme revamp|Till Death Us Do Part|1986 cast`,
`Which actor played the later market boss Alan Curtis in Albion Market?|Simon Rouse|John Michie|Peter Benson|Geoffrey Leesley|Medium|Simon Rouse|Alan Curtis|new superintendent|1986 revamp|corrupt boss|actor casting|market leadership`,
`Which actor played the sinister stallholder Oliver Shawcross in Albion Market?|Malcolm Hebden|Bernard Spear|Jonathan Barlow|Derek Hicks|Hard|Malcolm Hebden|Oliver Shawcross|toy stallholder|extremist plot|actor casting|villainous character|1986 story`,
`What caused Derek Owen to evacuate Albion Market in the opening episode?|A threatening telephone call|A burst water main|A gas explosion|A power cut|Easy|Derek Owen|opening episode|telephone threat|market evacuation|1985 premiere|danger warning|first storyline`,
`What crime caused a second evacuation in the first episode of Albion Market?|An arson attack on an empty stall|A robbery at the café|A raid on a jewellery stall|A break-in at the market office|Medium|1985 episode one|arson attack|empty stall|second evacuation|market fire|opening plot|criminal damage`,
`Which character returned from prison at the beginning of Albion Market?|Roy Harrison|Larry Rigg|Geoff Travis|Tony Fraser|Medium|Roy Harrison|prison release|Lynne Harrison|family reunion|1985 opening|former prisoner|backstory`,
`What was the name of Keith Naylor's escaped pet snake in Albion Market?|Boris|Sidney|Monty|George|Hard|Keith Naylor|Boris the snake|boa constrictor|escaped pet|market cafe|animal storyline|1985 episode`,
`Why did Morris Ransome repeatedly quarrel with Geoff Travis over plants in Albion Market?|Geoff sold flowers in china pots|Geoff blocked the loading bay|Morris stole Geoff's delivery van|Both wanted the same flower stall|Medium|Morris Ransome|Geoff Travis|china pots|primulas|trader rivalry|stall merchandise|flower dispute`,
`Whose stall had supplied the holiday gifts Tony Fraser gave to Lisa and Carol in Albion Market?|Brenda Rigg's|Miriam Ransome's|Lynne Harrison's|Peggy Sagar's|Hard|Tony Fraser|Brenda Rigg|Lisa O'Shea|Carol Broadbent|holiday gifts|romantic deception|1985 plot`,
`Which young character was caught taking money from his parents' till in Albion Market?|Duane Rigg|Jaz Sharma|Keith Naylor|Tony Fraser|Medium|Duane Rigg|Larry Rigg|Brenda Rigg|cash theft|family till|young offender|1985 incident`,
`Which man was exposed as having an affair while married to Lynne Harrison in Albion Market?|Roy Harrison|Derek Owen|Larry Rigg|Geoff Travis|Medium|Roy Harrison|Lynne Harrison|Kay affair|marital betrayal|relationship breakdown|1985 storyline|family turmoil`,
`Who tried to arrange a marriage for Jaz Sharma in Albion Market?|His brother Raju|His friend Keith|His employer Derek|His uncle Ralph|Medium|Raju Sharma|Jaz Sharma|arranged marriage|older brother|family expectations|Sharma family|1985 storyline`,
`What was the name of Jaz Sharma's prospective bride in Albion Market?|Meena|Carol|Sita|Anita|Hard|Meena|Jaz Sharma|Raju Sharma|prospective bride|arranged marriage|romantic storyline|family pressure`,
`Who set fire to the Sharma brothers' van after being drawn into racist extremism in Albion Market?|Keith Naylor|Larry Rigg|Alan Curtis|Roy Harrison|Hard|Keith Naylor|Sharma brothers|van arson|racist group|repentance|criminal damage|1986 storyline`,
`Which stallholder encouraged Keith Naylor's involvement with racist extremists in Albion Market?|Oliver Shawcross|Morris Ransome|Tony Fraser|Geoff Travis|Hard|Oliver Shawcross|Keith Naylor|extremist manipulation|racism storyline|market conflict|1986 plot|villain`,
`What problem affected Lam Quoc Hoa and worried his cousin Chan in Albion Market?|Problem gambling|A drinking problem|A disputed inheritance|A lost passport|Hard|Lam Quoc Hoa|Ly Nhu Chan|poker gambling|Vietnam family|financial problems|cousins|1986 storyline`,
`Which teenage character abandoned a newborn baby in Geoff Travis's van in Albion Market?|Louise Todd|Lisa O'Shea|Carol Broadbent|Debbie Taylor|Hard|Louise Todd|Geoff Travis|abandoned baby|Travis family|teenage mother|van discovery|1986 storyline`,
`What name was given to the baby found in Geoff Travis's van in Albion Market?|Jenny|Sarah|Amy|Helen|Hard|baby Jenny|Geoff Travis|Louise Todd|child naming|family storyline|abandoned infant|1986 plot`,
`Which newly arrived market boss forced the Rigg family to leave Albion Market?|Alan Curtis|Derek Owen|Ted Pilkington|Phil Smith|Hard|Alan Curtis|Larry Rigg|Brenda Rigg|corruption|market eviction|1986 revamp|management plot`,
`With which Vietnamese trader did the married Derek Owen become romantically involved in Albion Market?|Ly Nhu Chan|Sita Sharma|Peggy Sagar|Miriam Ransome|Hard|Derek Owen|Ly Nhu Chan|romantic relationship|age gap|cultural differences|unresolved ending|1986 plot`,
`Which actor from Albion Market later became widely known as Norris Cole in Coronation Street?|Malcolm Hebden|John Michie|Peter Benson|Simon Rouse|Easy|Malcolm Hebden|Norris Cole|Oliver Shawcross|later soap fame|Coronation Street casting|actor career|television crossover`,
`Which future EastEnders actress briefly played Diane Meadows in Albion Market?|Michelle Collins|Gillian Taylforth|Letitia Dean|June Brown|Medium|Michelle Collins|Diane Meadows|Cindy Beale|EastEnders actor|guest appearance|soap crossover|performer history`,
`Who wrote the three tie-in Albion Market novels?|Ray Evans|Peter Whalley|Kay Mellor|Andy Lynch|Hard|Ray Evans|tie in novels|book adaptations|television fiction|three book series|1980s publishing|programme merchandise`,
`Which title was the first Albion Market tie-in novel?|Ticket of Leave|Thorns and Roses|Settling Debts|Market Day|Hard|Ticket of Leave|Ray Evans|first novel|Roy Harrison|prison release|series adaptation|book chronology`,
`Which Albion Market novel focused on Jaz Sharma's proposed marriage?|Thorns and Roses|Settling Debts|Ticket of Leave|The Last Stall|Hard|Thorns and Roses|Ray Evans|second novel|Jaz Sharma|Meena|arranged marriage|tie in fiction`,
`Which Albion Market novel dealt with the aftermath of the Sharma brothers' van fire?|Settling Debts|Ticket of Leave|Thorns and Roses|The Market Closes|Hard|Settling Debts|Ray Evans|third novel|Sharma van arson|Keith Naylor|restitution|tie in fiction`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 419: malformed row ${index + 1} (${parts.length} fields)`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 419: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('Albion Market')
    ? stem
    : `In Albion Market, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 419: duplicate answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13 || new Set(tags.map(tag => tag.toLowerCase())).size !== 13) {
    throw new Error(`Pack 419: expected 13 distinct tags at row ${index + 1}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

module.exports = questions;
