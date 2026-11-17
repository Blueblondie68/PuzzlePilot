// PuzzlePilot Bigggggg Quiz — Pack 465: Western Zodiac
// Twelve traditional tropical sun signs: dates, symbols, elements, modalities, traditional rulers.
// Exclude existing Pack 6 fact general_0076: Libra is represented by scales.
// Typical birthday examples avoid cusp dates that can vary by year.
// Cultural astrological traditions, not scientific predictions.
// Source: https://production.royalmint.com/gifts/zodiac/a-guide-to-the-zodiac/
// Source: https://www.timeanddate.com/astronomy/zodiac-guide.html
'use strict';
const signs=[["Aries","21 March","19 April","4 April","Ram","Fire","Cardinal","Mars"],["Taurus","20 April","20 May","3 May","Bull","Earth","Fixed","Venus"],["Gemini","21 May","20 June","7 June","Twins","Air","Mutable","Mercury"],["Cancer","21 June","22 July","5 July","Crab","Water","Cardinal","Moon"],["Leo","23 July","22 August","9 August","Lion","Fire","Fixed","Sun"],["Virgo","23 August","22 September","8 September","Maiden","Earth","Mutable","Mercury"],["Libra","23 September","22 October","10 October","Scales","Air","Cardinal","Venus"],["Scorpio","23 October","21 November","11 November","Scorpion","Water","Fixed","Mars"],["Sagittarius","22 November","21 December","6 December","Archer","Fire","Mutable","Jupiter"],["Capricorn","22 December","19 January","7 January","Sea-goat","Earth","Cardinal","Saturn"],["Aquarius","20 January","18 February","5 February","Water-bearer","Air","Fixed","Saturn"],["Pisces","19 February","20 March","5 March","Two fishes","Water","Mutable","Jupiter"]];
const BASE=['General Knowledge','Western Zodiac','Astrology Traditions','Tropical Zodiac','Twelve Signs','Traditional Zodiac','Written Questions'];
const questions=[];
const coveredFacts=new Set();
function add(key,question,correct,wrong,difficulty,tags){
 if(coveredFacts.has(key))throw Error('Repeated zodiac fact '+key);
 coveredFacts.add(key);
 const answers=wrong.slice();answers.splice((questions.length*3+1)%4,0,correct);
 questions.push({id:'zodiac_w_'+String(questions.length+1).padStart(5,'0'),
  category:'General Knowledge',topic:'Western Zodiac Signs',question,answers,
  correctAnswer:correct,difficulty,tags:[...new Set([...BASE,...tags])],dailyEligible:true});
}
for(let i=0;i<signs.length;i++){
 const [name,start,end,birth]=signs[i];
 add('date-'+name,`In the usual Western sun-sign date ranges, which sign includes a birthday on ${birth}?`,
  name,[signs[(i+1)%12][0],signs[(i+3)%12][0],signs[(i+7)%12][0]],
  i<5?'Easy':'Medium',[`Sign: ${name}`,`Birthday: ${birth}`,`Typical Dates: ${start} to ${end}`,'Birth-date Identification','Sun Signs','Date Range']);
}
for(let i=0;i<signs.length;i++){
 const [name,start,end,birth,icon]=signs[i];
 if(name==='Libra')continue;
 add('symbol-'+name,`Which Western zodiac sign is traditionally represented by the ${icon.toLowerCase()}?`,
  name,[signs[(i+1)%12][0],signs[(i+4)%12][0],signs[(i+8)%12][0]],'Easy',
  [`Sign: ${name}`,`Symbol: ${icon}`,'Traditional Emblems','Zodiac Imagery','Sign Symbol','Classical Zodiac']);
}
const groups={Fire:['Aries','Leo','Sagittarius'],Earth:['Taurus','Virgo','Capricorn'],Air:['Gemini','Libra','Aquarius'],Water:['Cancer','Scorpio','Pisces']};
for(const name of Object.keys(groups)){
 add('element-'+name,`Which three Western zodiac signs are traditionally grouped under ${name.toLowerCase()}?`,
  groups[name].join(', '),Object.keys(groups).filter(k=>k!==name).map(k=>groups[k].join(', ')), 'Medium',
  [`Element: ${name}`,'Elemental Triplicities','Classical Four Elements',...groups[name].map(x=>'Sign: '+x)]);
}
const modes={Cardinal:['Aries','Cancer','Libra','Capricorn'],Fixed:['Taurus','Leo','Scorpio','Aquarius'],Mutable:['Gemini','Virgo','Sagittarius','Pisces']};
for(const name of Object.keys(modes)){
 const invalid=name==='Cardinal'?['Aries','Taurus','Virgo','Pisces']:name==='Fixed'?['Cancer','Leo','Virgo','Aquarius']:['Gemini','Cancer','Libra','Pisces'];
 add('modality-'+name,`In traditional Western astrology, which four signs are classified as ${name.toLowerCase()}?`,
  modes[name].join(', '),[...Object.keys(modes).filter(k=>k!==name).map(k=>modes[k].join(', ')),invalid.join(', ')], 'Hard',
  [`Modality: ${name}`,'Zodiac Qualities','Sign Groupings',...modes[name].map(x=>'Sign: '+x)]);
}
const rulers=[
 ['Mars','Aries and Scorpio'],['Venus','Taurus and Libra'],['Mercury','Gemini and Virgo'],
 ['Moon','Cancer'],['Sun','Leo'],['Jupiter','Sagittarius and Pisces'],['Saturn','Capricorn and Aquarius']
];
for(const [body,ruled] of rulers){
 const wrong=rulers.filter(x=>x[0]!==body).slice(0,3).map(x=>x[0]);
 add('ruler-'+body,`Which celestial body is the traditional astrological ruler of ${ruled}?`,
  body,wrong,'Medium',[`Traditional Ruler: ${body}`,`Signs: ${ruled}`,'Traditional Planetary Rulers','Classical Astrology','Ruling Body','Zodiac Associations']);
}
add('number-of-signs','How many signs are in the traditional Western tropical zodiac?',
 'Twelve',['Ten','Thirteen','Fourteen'],'Easy',
 ['Twelve Signs','Zodiac Circle','Standard Western Astrology','Twelvefold Division','Sign Count','Tropical Astrology']);
add('degrees-per-sign','In the tropical zodiac, each of the twelve sign sectors spans how many degrees?',
 '30 degrees',['15 degrees','24 degrees','45 degrees'],'Hard',
 ['Zodiac Division','Ecliptic Longitude','Thirty Degrees','Circle Geometry','Astrological Sectors','Twelve Part Circle']);
add('ophiuchus','Which constellation is sometimes discussed as an additional zodiac constellation but is not one of the twelve tropical astrological signs?',
 'Ophiuchus',['Orion','Ursa Major','Cassiopeia'],'Hard',
 ['Ophiuchus','Zodiac Constellations','Tropical Zodiac','Astrology Versus Astronomy','Astronomical Constellations','Thirteenth Constellation']);
if(questions.length!==40||new Set(questions.map(q=>q.id)).size!==40||
 new Set(questions.map(q=>q.question.toLowerCase())).size!==40||
 questions.some((q,i)=>q.id!=='zodiac_w_'+String(i+1).padStart(5,'0')||
 q.answers.length!==4||new Set(q.answers.map(x=>x.toLowerCase())).size!==4||
 q.answers.filter(x=>x===q.correctAnswer).length!==1||
 q.tags.length<12||new Set(q.tags).size!==q.tags.length||
 q.category!=='General Knowledge'||q.dailyEligible!==true||
 !['Easy','Medium','Hard'].includes(q.difficulty)))throw Error('Pack 465 validation failed');
module.exports=questions;
