// PuzzlePilot Bigggggg Quiz — Pack 467: Countries & Capital Cities — Africa
// 44 NEW one-to-one country/capital facts from the 195-entry (193 UN members + 2 observers) geography register.
// Excludes 24 previously asked country-capital facts in mixed Packs 1-20.
// Excludes 17 complex / changing capital situations, considered separately (not silently dropped).
// UK spellings. Source basis: UN member roster and country capital reference; reviewed 17 November 2026.
// https://www.un.org/en/about-us/member-states
// https://www.britannica.com/topic/list-of-countries-1993160
// No date-sensitive or disputed capitals are posed as simple answers.
'use strict';
const region="Africa";
const facts=[["Algeria","Algiers"],["Angola","Luanda"],["Burkina Faso","Ouagadougou"],["Cabo Verde","Praia"],["Cameroon","Yaoundé"],["Central African Republic","Bangui"],["Chad","N'Djamena"],["Comoros","Moroni"],["Republic of the Congo","Brazzaville"],["Democratic Republic of the Congo","Kinshasa"],["Djibouti","Djibouti"],["Egypt","Cairo"],["Eritrea","Asmara"],["Ethiopia","Addis Ababa"],["Gabon","Libreville"],["The Gambia","Banjul"],["Guinea","Conakry"],["Guinea-Bissau","Bissau"],["Kenya","Nairobi"],["Lesotho","Maseru"],["Liberia","Monrovia"],["Libya","Tripoli"],["Madagascar","Antananarivo"],["Malawi","Lilongwe"],["Mali","Bamako"],["Mauritania","Nouakchott"],["Mauritius","Port Louis"],["Morocco","Rabat"],["Mozambique","Maputo"],["Niger","Niamey"],["Nigeria","Abuja"],["São Tomé and Príncipe","São Tomé"],["Senegal","Dakar"],["Seychelles","Victoria"],["Sierra Leone","Freetown"],["Somalia","Mogadishu"],["South Sudan","Juba"],["Sudan","Khartoum"],["Tanzania","Dodoma"],["Togo","Lomé"],["Tunisia","Tunis"],["Uganda","Kampala"],["Zambia","Lusaka"],["Zimbabwe","Harare"]];
const pool=["Algiers","Luanda","Porto-Novo","Gaborone","Ouagadougou","Gitega","Praia","Yaoundé","Bangui","N'Djamena","Moroni","Brazzaville","Kinshasa","Yamoussoukro","Djibouti","Cairo","Ciudad de la Paz","Asmara","Mbabane","Addis Ababa","Libreville","Banjul","Accra","Conakry","Bissau","Nairobi","Maseru","Monrovia","Tripoli","Antananarivo","Lilongwe","Bamako","Nouakchott","Port Louis","Rabat","Maputo","Windhoek","Niamey","Abuja","Kigali","São Tomé","Dakar","Victoria","Freetown","Mogadishu","Pretoria","Juba","Khartoum","Dodoma","Lomé","Tunis","Kampala","Lusaka","Harare"];
const easy=new Set(["France","Germany","Italy","United Kingdom","United States","China","Japan","India","Russia","Egypt","Nigeria","South Korea","Mexico","Argentina","Chile","Peru","Thailand","Greece","Poland","Sweden","Turkey","Türkiye","Saudi Arabia","Ireland","Pakistan","Bangladesh","Kenya","Spain","Brazil","Canada","Australia","New Zealand","South Africa"]);
const hard=new Set(["Palau","Tuvalu","Kiribati","Marshall Islands","Micronesia","Tonga","Vanuatu","Comoros","São Tomé and Príncipe","Djibouti","Guinea-Bissau","Lesotho","Mauritania","Burkina Faso","Dominica","Saint Kitts and Nevis","Saint Vincent and the Grenadines","Solomon Islands","Timor-Leste","Turkmenistan","Tajikistan"]);
const questions=facts.map(([country,capital],i)=>{
 const others=[...new Set(pool.filter(x=>x!==capital))];
 const start=(i*7+3)%others.length;
 const wrong=[];
 for(let k=0;wrong.length<3&&k<others.length;k++){
   const candidate=others[(start+k*5)%others.length];
   if(candidate!==capital&&!wrong.includes(candidate))wrong.push(candidate);
 }
 if(wrong.length!==3)throw Error('Cannot create 3 distinct distractors: '+country);
 const correctAnswer=capital;
 const answers=[...wrong];
 answers.splice((i*3+2)%4,0,correctAnswer);
 const question=i%3===0?`What is the capital city of ${country}?`:i%3===1?
  `Which city is the capital of ${country}?`:`Name the national capital of ${country}.`;
 return {
  id:'geo_cap_'+String(0+i+1).padStart(5,'0'),
  category:'Geography',topic:'Countries & Capital Cities',question,answers,correctAnswer,
  difficulty:easy.has(country)?'Easy':hard.has(country)?'Hard':'Medium',
  tags:['Geography','World Geography','Capital Cities','Countries And Capitals',
   'National Capitals',`Country: ${country}`,`Capital: ${capital}`,`Region: ${region}`,
   'Sovereign States','United Nations Member Countries','Geopolitical Geography',
   'Country Capital Pair','Country-City Identification','Written Questions'],
  dailyEligible:true
 };
});
if(questions.length!==44||
  new Set(questions.map(q=>q.id)).size!==questions.length ||
  new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length ||
  questions.some(q=>q.answers.length!==4||new Set(q.answers.map(a=>a.toLowerCase())).size!==4||
    q.answers.filter(a=>a===q.correctAnswer).length!==1||q.tags.length<12||
    new Set(q.tags).size!==q.tags.length||q.dailyEligible!==true||
    q.category!=='Geography'||!['Easy','Medium','Hard'].includes(q.difficulty))){
  throw Error('Pack 467 country capital validation failed');
}
module.exports=questions;
