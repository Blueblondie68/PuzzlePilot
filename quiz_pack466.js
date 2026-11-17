// PuzzlePilot — The Bigggggg Quiz — Pack 466: Chinese Zodiac & Calendar
// 12 animals, five-element cycle, dates, traditional sequence, New Year and calendar history.
// Year questions specify the lunar year BEGINNING in the named Gregorian year.
// Goat / sheep / ram names are alternatives for the Chinese sign, not different animals.
// Chinese zodiac conventions may differ between regions and some specialist solar-year systems.
// Primary sources: https://www.vam.ac.uk/articles/the-lunar-zodiac
// https://www.si.edu/es/node/677077
// https://www.hko.gov.hk/en/gts/time/stemsandbranches.htm
// Dates: https://www.timeanddate.com/holidays/uk/lunar-new-year
'use strict';
const years=[[2020,"Rat","Metal"],[2021,"Ox","Metal"],[2022,"Tiger","Water"],[2023,"Rabbit","Water"],[2024,"Dragon","Wood"],[2025,"Snake","Wood"],[2026,"Horse","Fire"],[2027,"Goat","Fire"],[2028,"Monkey","Earth"],[2029,"Rooster","Earth"],[2030,"Dog","Metal"],[2031,"Pig","Metal"]];
const extra=[["animalcycle","How many different animals occur in the traditional Chinese zodiac cycle?","Twelve",["Eight","Ten","Sixteen"],"Easy",["Twelve Animal Cycle","Zodiac Animal Count","Chinese Zodiac","Cycle Length","Lunar Years","Calendar Traditions"]],["fullcycle","After how many years does the same animal-and-element combination repeat in the traditional Chinese zodiac?","Sixty",["Twelve","Twenty-four","One hundred"],"Medium",["Sexagenary Cycle","Animal Element Pairing","Sixty Year Cycle","Gan Zhi","Chinese Timekeeping","Cyclical Years"]],["fiveelements","Which list contains all five traditional elements used with Chinese zodiac animal years?","Wood, Fire, Earth, Metal and Water",["Fire, Air, Earth, Water and Ice","Wood, Air, Sun, Moon and Metal","Earth, Wind, Air, Stone and Light"],"Medium",["Five Elements","Wu Xing","Wood Fire Earth Metal Water","Chinese Cosmology","Animal Year Elements","Traditional Element Set"]],["stems","How many Heavenly Stems are used in the traditional Chinese sexagenary calendar?","Ten",["Six","Twelve","Twenty-four"],"Hard",["Heavenly Stems","Ten Stems","Chinese Calendar System","Gan Zhi","Sexagenary Calendar","Cycle Components"]],["branches","How many Earthly Branches are used in the traditional Chinese sexagenary calendar?","Twelve",["Ten","Six","Twenty"],"Hard",["Earthly Branches","Twelve Branches","Chinese Calendar System","Gan Zhi","Sexagenary Calendar","Cycle Components"]],["yinyang","Which pair of concepts is used alongside the five elements in traditional Chinese cyclical thought?","Yin and Yang",["Sun and Moon","East and West","Dragon and Phoenix"],"Medium",["Yin Yang","Duality","Chinese Cosmology","Paired Polarity","Traditional Calendar Ideas","Chinese Philosophy"]],["lunisolar","Which description best fits the traditional Chinese calendar?","Lunisolar: it takes account of both the Moon and the Sun",["Purely solar: based only on the Sun","Purely lunar: no adjustment to seasons","Based on the seven-day week alone"],"Medium",["Lunisolar Calendar","Moon Phases","Solar Seasons","Calendar System","Timekeeping","Astronomical Calendar"]],["newyearboundary","In the popular Chinese zodiac calendar, what event changes the animal sign of the year?","Chinese New Year",["1 January","The summer solstice","The first full moon of September"],"Easy",["Chinese New Year","Year Boundary","Animal Year Transition","Gregorian Versus Chinese Calendar","Spring Festival","Lunar Year"]],["springfestival","Which festival is also known as Chinese Lunar New Year?","Spring Festival",["Mid-Autumn Festival","Dragon Boat Festival","Qingming Festival"],"Easy",["Spring Festival","Lunar New Year","Chinese Festivals","New Year Name","Traditional Celebrations","Annual Festival"]],["ratfolk","In the traditional Great Race folklore explaining the Chinese zodiac order, which animal carried the rat across the water?","Ox",["Tiger","Horse","Dragon"],"Medium",["Great Race Folklore","Rat","Ox","Origin Story","Animal Order Legend","Folklore Traditions"]],["dragonmyth","Which of the twelve Chinese zodiac animals is mythical rather than a real-world animal?","Dragon",["Tiger","Snake","Rooster"],"Easy",["Dragon","Mythical Creature","Zodiac Animals","Chinese Legends","Chinese Folklore","Imaginary Animal"]],["vietnamcat","In the Vietnamese zodiac, which animal traditionally replaces the Chinese zodiac's rabbit?","Cat",["Fox","Deer","Elephant"],"Medium",["Vietnamese Zodiac","Chinese Rabbit","Vietnamese Cat","East Asian Variants","Comparative Traditions","Animal Variation"]],["goatalternative","The Chinese zodiac animal often called the Goat is also commonly translated into English as which animal?","Sheep",["Deer","Buffalo","Camel"],"Medium",["Goat","Sheep","Ram","English Translations","Animal Names","Chinese Zodiac Terminology"]],["lanternfestival","Which festival is traditionally celebrated on the fifteenth day of the first Chinese lunar month?","Lantern Festival",["Dragon Boat Festival","Mid-Autumn Festival","Double Ninth Festival"],"Medium",["Lantern Festival","First Lunar Month","Fifteenth Day","Spring Festival End","Traditional Calendar Festivals","Lunar Calendar"]]];
const BASE=['General Knowledge','Chinese Zodiac','Chinese Calendar','Lunar New Year','East Asian Traditions','Traditional Calendar','Written Questions'];
const questions=[];
const factsUsed=new Set();
function add(key,question,correctAnswer,wrong,difficulty,specific){
 if(factsUsed.has(key))throw Error('Repeated Chinese calendar fact '+key);
 factsUsed.add(key);
 const answers=wrong.slice();answers.splice((questions.length*3+2)%4,0,correctAnswer);
 questions.push({id:'zodiac_c_'+String(questions.length+1).padStart(5,'0'),
  category:'General Knowledge',topic:'Chinese Zodiac & Calendar',
  question,answers,correctAnswer,difficulty,
  tags:[...new Set([...BASE,...specific])],dailyEligible:true});
}
const animals=years.map(y=>y[1]);
years.forEach(([year,animal,element],i)=>{
 add('animal-'+year,`Which Chinese zodiac animal is associated with the lunar year beginning in ${year}?`,
  animal,[animals[(i+1)%12],animals[(i+4)%12],animals[(i+8)%12]],i<4?'Easy':'Medium',
  [`Lunar Year: ${year}`,`Animal: ${animal}`,'Animal-Year Matching','Twelve-Year Cycle','Year Identification','Chinese Zodiac Chronology']);
});
for(const year of [2020,2022,2024,2026,2028]){
 const [,animal,element]=years.find(y=>y[0]===year);
 const wrong=['Wood','Fire','Earth','Metal','Water'].filter(e=>e!==element).slice(0,3);
 add('element-'+year,`In the traditional Chinese five-element zodiac, which element is paired with the ${animal} in the lunar year beginning in ${year}?`,
  element,wrong,'Medium',
  [`Lunar Year: ${year}`,`Animal: ${animal}`,`Element: ${element}`,'Animal-Element Combination','Five Element Cycle','Sexagenary Year']);
}
const order=[
 ['first','Which animal comes first in the traditional order of the twelve Chinese zodiac animals?','Rat',['Ox','Tiger','Dragon'],'Easy','First Animal'],
 ['afterdragon','Which animal follows the Dragon in the traditional Chinese zodiac sequence?','Snake',['Horse','Rabbit','Goat'],'Medium','After Dragon'],
 ['beforerabbit','Which animal comes immediately before the Rabbit in the Chinese zodiac order?','Tiger',['Rat','Ox','Dragon'],'Medium','Before Rabbit'],
 ['afterrooster','Which animal comes immediately after the Rooster in the Chinese zodiac order?','Dog',['Pig','Monkey','Horse'],'Medium','After Rooster'],
 ['last','Which animal is the last of the twelve in the traditional Chinese zodiac sequence?','Pig',['Dog','Rooster','Rat'],'Easy','Twelfth Animal']
];
for(const [key,question,correct,wrong,difficulty,note] of order){
 add('sequence-'+key,question,correct,wrong,difficulty,
  ['Chinese Zodiac Sequence',`Sequence: ${note}`,`Animal: ${correct}`,'Traditional Twelve Animal Order','Cyclical Years','Animal Position']);
}
const dates=[
 [2025,'29 January',['17 February','10 February','6 February']],
 [2026,'17 February',['29 January','6 February','26 January']],
 [2027,'6 February',['17 February','26 January','10 February']],
 [2028,'26 January',['6 February','17 February','29 January']]
];
for(const [year,day,wrong] of dates){
 add('new-year-date-'+year,`On what date does Chinese Lunar New Year fall in ${year} (Gregorian calendar)?`,
  day,wrong,'Hard',
  [`Lunar New Year: ${year}`,`Date: ${day}`,'Gregorian Date','Chinese New Year Date','Calendar Conversion','Year Transition']);
}
for(const [key,question,answer,wrong,difficulty,tags] of extra)
 add('cultural-'+key,question,answer,wrong,difficulty,tags);
if(questions.length!==40||new Set(questions.map(q=>q.id)).size!==40||
 new Set(questions.map(q=>q.question.toLowerCase())).size!==40||
 questions.some((q,i)=>q.id!=='zodiac_c_'+String(i+1).padStart(5,'0')||
 q.answers.length!==4||new Set(q.answers.map(x=>x.toLowerCase())).size!==4||
 q.answers.filter(x=>x===q.correctAnswer).length!==1||
 q.tags.length<12||new Set(q.tags).size!==q.tags.length||
 q.category!=='General Knowledge'||q.dailyEligible!==true||
 !['Easy','Medium','Hard'].includes(q.difficulty)))throw Error('Pack 466 validation failed');
module.exports=questions;
