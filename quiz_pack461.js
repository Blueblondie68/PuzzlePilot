// PuzzlePilot - The Bigggggg Quiz - Pack 461
// General Knowledge: Wedding Anniversaries & Traditional Gifts (UK).
// One question for each not-yet-covered milestone in Debrett's British list.
// Excluded duplicate facts: 25th = silver (Pack 12, general_0095)
// and 40th = ruby (Pack 8, general_0023), already in mixed Packs 1-20.
// Less-standardised 65th, 75th, 80th, 85th and 90th are held for review.
// Historical ivory and coral are symbols ONLY, not gift recommendations.
// Primary source: https://debretts.com/marital-milestones-how-to-celebrate-a-wedding-anniversary/
// Source comparison: https://bespokegiftingcompany.co.uk/anniversaries/
// WordPad-ready CommonJS. Check saved copy before committing to GitHub.
'use strict';

const commonTags = [
  'General Knowledge', 'Wedding Anniversaries', 'Wedding Anniversary Gifts',
  'UK Wedding Traditions', 'Traditional Anniversary Symbols',
  'Marriage Milestones', 'Written Questions'
];

// Year | question | four choices | correct choice | difficulty | specific tags.
const facts = [
  [1,
   "What material traditionally represents the first wedding anniversary?",
   ["Cotton", "Paper", "Wood", "Leather"],
   "Paper", "Easy",
   ["1st Anniversary", "First Wedding Anniversary", "First Year Married", "Paper Anniversary", "Paper Gifts", "Year One"]],
  [2,
   "A cotton wedding anniversary celebrates how many years of marriage?",
   ["Three", "Five", "Two", "Four"],
   "Two", "Easy",
   ["2nd Anniversary", "Second Wedding Anniversary", "Two Years Married", "Cotton Anniversary", "Cotton Gifts", "Year Two"]],
  [3,
   "Which material traditionally represents three years of marriage in the UK?",
   ["Leather", "Lace", "Linen", "Wool"],
   "Leather", "Easy",
   ["3rd Anniversary", "Third Wedding Anniversary", "Three Years Married", "Leather Anniversary", "Leather Gifts", "Year Three"]],
  [4,
   "According to Debrett's British list, flowers and fruit are associated with which anniversary?",
   ["Sixth", "Ninth", "Eighth", "Fourth"],
   "Fourth", "Medium",
   ["4th Anniversary", "Fourth Wedding Anniversary", "Four Years Married", "Flowers And Fruit", "Fruit Anniversary", "Floral Anniversary"]],
  [5,
   "Which material traditionally marks five years of marriage in the UK?",
   ["Tin", "Wood", "Steel", "Bronze"],
   "Wood", "Easy",
   ["5th Anniversary", "Fifth Wedding Anniversary", "Five Years Married", "Wooden Anniversary", "Wood Gifts", "Year Five"]],
  [6,
   "In Debrett's British list, what represents the sixth wedding anniversary?",
   ["Crystal", "Sugar", "Tin", "Pearl"],
   "Sugar", "Medium",
   ["6th Anniversary", "Sixth Wedding Anniversary", "Six Years Married", "Sugar Anniversary", "Sugar Gifts", "British Sixth Anniversary"]],
  [7,
   "In Debrett's British list, wool is paired with which metal for the seventh anniversary?",
   ["Bronze", "Silver", "Gold", "Copper"],
   "Copper", "Medium",
   ["7th Anniversary", "Seventh Wedding Anniversary", "Seven Years Married", "Wool Anniversary", "Copper Anniversary", "Wool And Copper"]],
  [8,
   "In Debrett's British anniversary list, bronze is a traditional symbol for which year?",
   ["Eighth", "Seventh", "Ninth", "Eleventh"],
   "Eighth", "Medium",
   ["8th Anniversary", "Eighth Wedding Anniversary", "Eight Years Married", "Bronze Anniversary", "Pottery And Bronze", "Bronze Symbol"]],
  [9,
   "Which tree is listed alongside pottery for the ninth anniversary in Debrett's British list?",
   ["Oak", "Ash", "Willow", "Maple"],
   "Willow", "Medium",
   ["9th Anniversary", "Ninth Wedding Anniversary", "Nine Years Married", "Willow Anniversary", "Pottery And Willow", "Willow Gifts"]],
  [10,
   "How many years of marriage does a traditional tin wedding anniversary celebrate?",
   ["Fifteen", "Twenty", "Five", "Ten"],
   "Ten", "Easy",
   ["10th Anniversary", "Tenth Wedding Anniversary", "Ten Years Married", "Tin Anniversary", "Tin Gifts", "One Decade Married"]],
  [11,
   "Which metal is traditionally associated with the 11th wedding anniversary?",
   ["Steel", "Tin", "Bronze", "Copper"],
   "Steel", "Medium",
   ["11th Anniversary", "Eleventh Wedding Anniversary", "Eleven Years Married", "Steel Anniversary", "Steel Gifts", "Year Eleven"]],
  [12,
   "In Debrett's British list, silk is paired with which fabric for the 12th anniversary?",
   ["Velvet", "Cotton", "Satin", "Linen"],
   "Linen", "Medium",
   ["12th Anniversary", "Twelfth Wedding Anniversary", "Twelve Years Married", "Silk Anniversary", "Linen Anniversary", "Silk And Linen"]],
  [13,
   "The traditional lace anniversary marks how many years of marriage?",
   ["Twelve", "Thirteen", "Eleven", "Fourteen"],
   "Thirteen", "Medium",
   ["13th Anniversary", "Thirteenth Wedding Anniversary", "Thirteen Years Married", "Lace Anniversary", "Lace Gifts", "Year Thirteen"]],
  [14,
   "Which material was historically associated with the 14th wedding anniversary in traditional British lists?",
   ["Jade", "Amber", "Ivory", "Quartz"],
   "Ivory", "Hard",
   ["14th Anniversary", "Fourteenth Wedding Anniversary", "Fourteen Years Married", "Historical Ivory Symbol", "Ivory Anniversary", "Historical Tradition Only"]],
  [15,
   "How many years of marriage are represented by a traditional crystal anniversary?",
   ["Fifteen", "Thirteen", "Twenty", "Thirty"],
   "Fifteen", "Easy",
   ["15th Anniversary", "Fifteenth Wedding Anniversary", "Fifteen Years Married", "Crystal Anniversary", "Crystal Gifts", "Year Fifteen"]],
  [20,
   "Which material is the traditional UK symbol of a twentieth wedding anniversary?",
   ["Pearl", "Crystal", "Lace", "China"],
   "China", "Easy",
   ["20th Anniversary", "Twentieth Wedding Anniversary", "Twenty Years Married", "China Anniversary", "China Gifts", "Two Decades Married"]],
  [30,
   "The pearl wedding anniversary celebrates how many years of marriage?",
   ["Twenty", "Forty-five", "Thirty", "Fifty-five"],
   "Thirty", "Easy",
   ["30th Anniversary", "Thirtieth Wedding Anniversary", "Thirty Years Married", "Pearl Anniversary", "Pearl Gifts", "Three Decades Married"]],
  [35,
   "What traditional material gives its name to the 35th wedding anniversary?",
   ["Jade", "Coral", "Garnet", "Topaz"],
   "Coral", "Medium",
   ["35th Anniversary", "Thirty Fifth Wedding Anniversary", "Thirty Five Years Married", "Coral Anniversary", "Coral Symbol", "Historical Coral Tradition"]],
  [45,
   "A sapphire wedding anniversary traditionally marks how many years of marriage?",
   ["Thirty", "Fifty-five", "Seventy", "Forty-five"],
   "Forty-five", "Medium",
   ["45th Anniversary", "Forty Fifth Wedding Anniversary", "Forty Five Years Married", "Sapphire Anniversary", "Sapphire Gemstone", "Year Forty Five"]],
  [50,
   "Which precious metal traditionally represents fifty years of marriage in the UK?",
   ["Gold", "Silver", "Platinum", "Copper"],
   "Gold", "Easy",
   ["50th Anniversary", "Fiftieth Wedding Anniversary", "Fifty Years Married", "Golden Anniversary", "Gold Symbol", "Half Century Married"]],
  [55,
   "Which gemstone traditionally represents fifty-five years of marriage?",
   ["Ruby", "Opal", "Emerald", "Sapphire"],
   "Emerald", "Medium",
   ["55th Anniversary", "Fifty Fifth Wedding Anniversary", "Fifty Five Years Married", "Emerald Anniversary", "Emerald Gemstone", "Year Fifty Five"]],
  [60,
   "Which milestone is most widely known in the UK as the diamond wedding anniversary?",
   ["Fortieth", "Sixtieth", "Fiftieth", "Seventieth"],
   "Sixtieth", "Easy",
   ["60th Anniversary", "Sixtieth Wedding Anniversary", "Sixty Years Married", "Diamond Anniversary", "Diamond Gemstone", "Six Decades Married"]],
  [70,
   "Which metal traditionally represents the 70th wedding anniversary in the British list?",
   ["Gold", "Silver", "Tin", "Platinum"],
   "Platinum", "Medium",
   ["70th Anniversary", "Seventieth Wedding Anniversary", "Seventy Years Married", "Platinum Anniversary", "Platinum Metal", "Seven Decades Married"]]
];

const questions = facts.map(([year, question, answers, correctAnswer, difficulty, specificTags], i) => ({
  id: 'anniv_' + String(i + 1).padStart(5, '0'),
  category: 'General Knowledge',
  topic: 'Wedding Anniversaries',
  question,
  answers,
  correctAnswer,
  difficulty,
  tags: [...commonTags, ...specificTags],
  dailyEligible: true
}));

const expectedYears = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,20,30,35,45,50,55,60,70];
if (questions.length !== expectedYears.length ||
    new Set(facts.map(f => f[0])).size !== expectedYears.length ||
    facts.some((f, i) => f[0] !== expectedYears[i]) ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase().trim())).size !== questions.length ||
    questions.some((q, i) =>
      q.id !== 'anniv_' + String(i + 1).padStart(5, '0') ||
      q.category !== 'General Knowledge' || q.topic !== 'Wedding Anniversaries' ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
      new Set(q.answers.map(a => a.toLowerCase().trim())).size !== 4 ||
      !Array.isArray(q.tags) || q.tags.length < 13 ||
      new Set(q.tags).size !== q.tags.length ||
      q.dailyEligible !== true || !['Easy', 'Medium', 'Hard'].includes(q.difficulty))) {
  throw new Error('Pack 461: anniversary question validation failed');
}

module.exports = questions;
