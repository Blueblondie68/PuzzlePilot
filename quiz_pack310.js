
// quiz_pack310.js
// PuzzlePilot - The Bigggggg Quiz
// Television: 'Allo 'Allo! - Series 8-9 and later specials (1991-2022)
// The Christmas special, late war, liberation, finale and reunions.
// Seven individually selected specialist tags per question.
// Keep quiz_bank.js unchanged until the end-of-evening connection.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Christmas 1991: A Bun in the Oven',
    era: '1991',
    facts: `What is the title of the Christmas 1991 'Allo 'Allo! special?|A Bun in the Oven|A Fishful of Francs|The Gâteau from the Château|A Winkle in Time|Medium|A Bun in the Oven|Christmas Special|1991 Broadcast|Episode Title|Festive Television|Late Series|BBC Sitcom
In which month of 1991 was A Bun in the Oven first broadcast?|December|October|November|August|Easy|December 1991|A Bun in the Oven|Christmas Broadcast|BBC One|Special Episode|Broadcast Month|Television Schedule
Which waitress tells René she is pregnant in A Bun in the Oven?|Yvette|Mimi|Maria|Helga|Easy|Yvette Carte Blanche|René Artois|Pregnancy Announcement|A Bun in the Oven|Café Waitress|1991 Story|Romantic Complications
Which two British airmen have finally escaped by the time of the Christmas 1991 special?|Fairfax and Carstairs|Crabtree and Geering|LeClerc and Alfonse|Gruber and Bertorelli|Medium|Fairfax|Carstairs|British Airmen|Successful Escape|A Bun in the Oven|RAF Officers|1991 Story
Which Axis country's troops have left Nouvion by the Christmas 1991 special?|Italy|Japan|Hungary|Romania|Medium|Italian Troops|Captain Bertorelli|Nouvion Garrison|A Bun in the Oven|Army Departure|Christmas 1991|Wartime Allies
Whom do von Strohm and Gruber persuade to take the Fallen Madonna from Herr Flick?|Helga|Mimi|Edith|Michelle|Medium|Helga Geerhart|Colonel Von Strohm|Lieutenant Gruber|Herr Flick|Stolen Painting|A Bun in the Oven|Secret Theft
What does Helga remove from the painting as insurance that she receives a share of its sale?|One of the painted boobies|The ornate frame|The artist's signature|A strip from the canvas edge|Medium|Helga Geerhart|Fallen Madonna|Missing Booby|Bargaining Chip|Painting Theft|1991 Special|Art Sale
What does René contemplate after Yvette announces her pregnancy?|Fleeing to England|Joining the Gestapo|Becoming village mayor|Enlisting with the Italians|Easy|René Artois|Yvette Pregnancy|Flight To England|A Bun in the Oven|Domestic Crisis|Christmas Special|Escape Plan`,
  },
  {
    topic: 'Series Eight: the mobile radio station',
    era: '1992',
    facts: `How many regular episodes were produced for 'Allo 'Allo! Series Eight?|Seven|Six|Eight|Ten|Medium|Seven Episodes|Series Eight|1992 Broadcast|Episode Count|Programme Structure|Final Years|BBC Comedy
In which year did 'Allo 'Allo! Series Eight air?|1992|1990|1991|1993|Easy|Series Eight|1992 Broadcast|BBC One|Programme Chronology|Late Series|Broadcast Year|Television History
What is the title of the first regular episode of Series Eight?|Arousing Suspicions|A Woman Never Lies|Swan Song|A Bun in the Oven|Medium|Arousing Suspicions|Series Eight Premiere|1992 Episode|Opening Story|Episode Title|Broadcast Order|BBC Sitcom
What does Michelle want to establish in Arousing Suspicions?|A mobile propaganda radio station|An underground hospital|A secret printing school|A floating prison|Easy|Michelle Dubois|Mobile Radio Station|Resistance Propaganda|Arousing Suspicions|Wartime Broadcasts|1992 Plot|Clandestine Equipment
Where does the parachuted radio equipment accidentally land in Arousing Suspicions?|In a château chimney|In the café's wine cellar|In a church bell tower|On a railway platform|Medium|Château Chimney|Parachute Drop|Radio Equipment|Arousing Suspicions|Resistance Supplies|British Aircraft|1992 Story
What type of performers do René and the café staff impersonate to retrieve the radio equipment?|Flamenco dancers|Ballet dancers|Opera singers|A brass band|Easy|Flamenco Dancers|Spanish Troupe|Château Infiltration|Arousing Suspicions|René Artois|Café Staff|1992 Disguise
From which country does the art expert in the flamenco troupe come?|Spain|Sweden|Portugal|Switzerland|Medium|Spanish Art Expert|Flamenco Troupe|Lieutenant Gruber|Fallen Madonna|Painting Photograph|Arousing Suspicions|Art Appraisal
Whom does Gruber mistake for the Spanish art expert when he hands over a photograph?|Monsieur Alfonse|Officer Crabtree|Monsieur LeClerc|General von Klinkerhoffen|Medium|Monsieur Alfonse|Mistaken Identity|Gruber|Art Photograph|Arousing Suspicions|Flamenco Disguise|1992 Plot
What evidence does Michelle use to blackmail the Germans in A Woman Never Lies?|A photograph of Gruber with the painting|A recording of the General singing|A captured military order|A stolen passport|Medium|Michelle Dubois|Blackmail Photograph|Hubert Gruber|Fallen Madonna|A Woman Never Lies|German Officers|1992 Story
How much money does Michelle demand for the incriminating photograph?|Ten million francs|One million francs|Five hundred thousand francs|Fifty million francs|Medium|Ten Million Francs|Blackmail Ransom|A Woman Never Lies|Michelle Dubois|Fallen Madonna|1992 Plot|German Funds
Which German vehicle do von Strohm and Gruber plan to rob to raise the blackmail money?|A garrison pay truck|An armoured ambulance|A fuel tanker|An officers' staff car|Medium|Garrison Pay Truck|Colonel Von Strohm|Lieutenant Gruber|Blackmail Payment|A Woman Never Lies|German Payroll|1992 Plot
What does Herr Flick give Helga to make her reveal the robbery plan?|A truth drug|A sleeping tablet|A coded telegram|A forged letter|Easy|Herr Flick|Helga Geerhart|Truth Drug|A Woman Never Lies|Gestapo Interrogation|Robbery Plot|1992 Story`,
  },
  {
    topic: 'Series Eight: Hitler doubles and the fish ransom',
    era: '1992',
    facts: `What present does Edith buy René for his birthday in Hitler's Last Heil?|A car|A bicycle|A gramophone|A gold watch|Easy|René Birthday|Edith Artois|New Car|Hitlers Last Heil|1992 Episode|Birthday Gift|Café Household
Which two Nazi leaders are supposedly due to visit the district in Hitler's Last Heil?|Hitler and Göring|Himmler and Goebbels|Hess and Speer|Rommel and Keitel|Medium|Hitler|Hermann Göring|Hitlers Last Heil|VIP Visit|German Decoys|Series Eight|1992 Plot
What is the truth about the visiting Hitler and Göring in Hitler's Last Heil?|They are doubles sent as decoys|They are actors from the village theatre|They are prisoners in disguise|They are Resistance members|Medium|German Doubles|Decoy Leaders|Hitlers Last Heil|Assassination Plot|False Identities|General Klinkerhoffen|1992 Story
What explodes on the visitors' lunch table in Hitler's Last Heil?|Dynamite intended for the prison|A booby-trapped sausage|An exploding gramophone|A bomb-filled birthday cake|Medium|Dynamite|Lunch Table Explosion|Hitlers Last Heil|Helga Geerhart|Prison Rescue|Decoy Leaders|1992 Plot
Which two German officers must subsequently impersonate Hitler and Göring?|Colonel von Strohm and Lieutenant Gruber|Herr Flick and von Smallhausen|Captain Bertorelli and Hans Geering|General von Klinkerhoffen and Gruber|Easy|Colonel Von Strohm|Hubert Gruber|Hitler And Göring Disguise|Forced Impersonation|German Command|Series Eight|1992 Story
What material does the Resistance try to steal from a church roof in Awful Wedded Wife?|Lead|Copper|Slate|Iron|Medium|Church Roof|Lead Theft|Radio Batteries|Awful Wedded Wife|Mobile Transmitter|Resistance Equipment|1992 Plot
Which faction captures the disguised Colonel and Gruber in Awful Wedded Wife?|The Communist Resistance|The British Army|The Italian military police|The French fire brigade|Medium|Communist Resistance|Kidnapped Doubles|Colonel Von Strohm|Hubert Gruber|Awful Wedded Wife|1992 Story|False Nazi Leaders
Which two Gestapo men narrowly escape a firing squad in Firing Squashed?|Herr Flick and von Smallhausen|Gruber and von Strohm|René and Alfonse|Fairfax and Carstairs|Easy|Herr Flick|Von Smallhausen|Firing Squad|Firing Squashed|Gestapo Officers|1992 Plot|Near Execution
What sort of fish conceals the ransom money in A Fishful of Francs?|A dogfish|A salmon|A cod|A trout|Medium|Dogfish|Ten Million Francs|Hidden Money|A Fishful Of Francs|Ransom Exchange|River|1992 Plot
Who unexpectedly catches the money-filled fish in A Fishful of Francs?|Monsieur Alfonse|Officer Crabtree|René Artois|Monsieur LeClerc|Medium|Monsieur Alfonse|Dogfish Catch|Ransom Money|A Fishful Of Francs|Fishing Mishap|1992 Episode|Undertaker
Who discovers the concealed banknotes when the fish reaches Herr Flick's table?|Helga|Edith|Mimi|Yvette|Medium|Helga Geerhart|Hidden Banknotes|Herr Flick Dinner|Dogfish|A Fishful Of Francs|1992 Story|Money Recovered
Which two characters are forced to dress as Hitler and Göring in A Fishful of Francs?|René and Edith|Yvette and Mimi|Fanny and LeClerc|Fairfax and Carstairs|Easy|René Artois|Edith Artois|Dictator Disguises|General Klinkerhoffen|A Fishful Of Francs|1992 Plot|Ambush Bait`,
  },
  {
    topic: 'Series Eight finale: Swan Song',
    era: '1992',
    facts: `What is the title of the final episode of Series Eight?|Swan Song|A Fishful of Francs|A Winkle in Time|Gone with the Windmill|Medium|Swan Song|Series Eight Finale|March 1992|Episode Title|Final Episode|BBC One|Programme Timeline
Who rescues René and Edith just before their intended execution in Swan Song?|British troops|The Italian army|The French police|The Communist Resistance|Medium|British Troops|René And Edith|Execution Rescue|Swan Song|1992 Plot|Wartime Intervention|Unexpected Salvation
Believing René and Edith dead in Swan Song, where do Fanny and LeClerc decide to go?|Paris|London|Geneva|Madrid|Easy|Madame Fanny|Ernest LeClerc|Paris Trip|Swan Song|False Death|1992 Story|Café Money
What do Fanny and LeClerc take from the café before heading to Paris?|The money in the till|René's old bicycle|The cellar's wine barrels|A German radio transmitter|Medium|Café Till|Madame Fanny|Ernest LeClerc|Paris Journey|Swan Song|1992 Story|Cash Taken
Which country do von Strohm and Gruber hope to reach with a flamenco troupe in Swan Song?|Spain|Italy|Portugal|Belgium|Easy|Spain|Flamenco Troupe|Colonel Von Strohm|Lieutenant Gruber|Swan Song|1992 Escape|Art Sale
What worthless substitute does Herr Flick hand over during the painting exchange in Swan Song?|A bundle of newspapers|A box of postcards|A packet of blank paper|An empty photograph album|Medium|Herr Flick|Newspaper Bundle|Painting Swap|Fallen Madonna|Swan Song|Deception|1992 Finale
What piece of the painting do the officers hand to Herr Flick during the exchange?|The missing booby|The painted signature|The wooden frame|The damaged corner|Medium|Fallen Madonna|Missing Booby|Herr Flick|Colonel Von Strohm|Art Exchange|Swan Song|1992 Plot`,
  },
  {
    topic: 'Series Nine: the windmill and René presumed dead',
    era: '1992',
    facts: `How many episodes are there in the ninth and final regular series?|Six|Seven|Eight|Ten|Medium|Six Episodes|Series Nine|Final Series|1992 Television|Episode Count|BBC One|Programme Ending
In which month of 1992 did the ninth series of 'Allo 'Allo! begin?|November|January|March|September|Medium|November 1992|Series Nine Premiere|BBC One|Transmission Month|Final Run|Broadcast Schedule|Television History
Which episode opens Series Nine?|Gone with the Windmill|A Tour de France|Dead Man Marching|Tarts and Flickers|Medium|Gone With The Windmill|Series Nine Premiere|1992 Episode|Broadcast Order|Episode Title|Windmill Story|Final Series
What building does René suggest as a hiding place for von Strohm and Gruber in Gone with the Windmill?|A windmill|A water tower|A barn|A village school|Easy|Windmill Hiding Place|Colonel Von Strohm|Hubert Gruber|Fake Kidnapping|Gone With The Windmill|1992 Plot|German Deserters
What has the General ordered to be used as a target for German artillery?|The windmill|The village church|Café René|The railway station|Medium|German Artillery|Windmill Target|General Klinkerhoffen|Gone With The Windmill|Training Exercise|1992 Story|Military Danger
Who captures René after he rescues the German officers from the windmill?|The Communist Resistance|Herr Flick|British commandos|The Italian army|Medium|Communist Resistance|René Captured|Windmill Escape|Gone With The Windmill|1992 Plot|Kidnapping|German Officers
What has Herr Flick undergone to change his appearance in Series Nine?|Plastic surgery|A hair transplant|Dental reconstruction|A new voice treatment|Easy|Herr Flick|Plastic Surgery|Gestapo Escape|Disguised Identity|Gone With The Windmill|1992 Change|Appearance
Which actor took over the role of Herr Flick in Series Nine?|David Janson|Richard Gibson|Guy Siner|Sam Kelly|Medium|David Janson|Herr Otto Flick|Actor Replacement|Series Nine|1992 Casting|Plastic Surgery Explanation|Gestapo Officer
What kind of monument is Monsieur Alfonse commissioned to make for the supposedly dead René?|A statue|A stained-glass window|A bronze plaque|A stone fountain|Easy|Monsieur Alfonse|René Statue|Town Square|A Tour De France|False Death|Memorial|1992 Story
What animal does René impersonate to escape the Communists in A Tour de France?|An elk|A cow|A horse|A bear|Medium|Elk Disguise|René Artois|Communist Resistance|A Tour De France|Animal Costume|1992 Plot|Failed Escape
Who shoots at the elk-disguised René during a hunting trip?|German soldiers|British airmen|French policemen|Italian officers|Medium|German Hunters|René Elk Disguise|Hunting Party|A Tour De France|1992 Episode|Mistaken Animal|Comic Injury
Which episode shows the people of Nouvion marching in honour of the supposedly dead René?|Dead Man Marching|Tarts and Flickers|Swan Song|A Fishy Send-Off|Medium|Dead Man Marching|René Memorial Parade|False Death|Nouvion Town|Series Nine|1992 Plot|Funeral Honours
As which familiar policeman does René disguise himself to reach the museum in Dead Man Marching?|Officer Crabtree|Inspector Maigret|Inspector Clouseau|A local gendarme|Easy|Officer Crabtree|René Disguise|Town Museum|Dead Man Marching|False Identity|1992 Episode|British Agent
What condition does René pretend to have when explaining his reappearance to the Germans?|Amnesia|Blindness|Deafness|Sleepwalking|Medium|Amnesia|René Return|Windmill Explosion|Dead Man Marching|False Explanation|1992 Story|Memory Loss`,
  },
  {
    topic: 'Series Nine: fishmongers, final schemes and liberation',
    era: '1992',
    facts: `What bird does Michelle first try to use to send microfilm to England in Tarts and Flickers?|A homing pigeon|A racing duck|A trained raven|A messenger gull|Easy|Michelle Dubois|Homing Pigeon|Microfilm|Tarts And Flickers|Resistance Communications|1992 Plot|Failed Delivery
Which two café waitresses are kidnapped by Herr Flick and von Smallhausen in Tarts and Flickers?|Yvette and Mimi|Edith and Helga|Maria and Yvette|Mimi and Michelle|Easy|Yvette Carte Blanche|Mimi Labonq|Gestapo Kidnapping|Tarts And Flickers|Café Waitresses|Painting Search|1992 Episode
What annual event offers a cover for an escape to England in Tarts and Flickers?|The fishmongers' parade|The harvest fair|The village carnival|The regimental ball|Medium|Fishmongers Parade|Motorised Float|Escape Cover|Tarts And Flickers|Nouvion Festival|1992 Story|Channel Crossing
What explosive object does von Klinkerhoffen plan to use against Hitler?|A picture frame|A fountain pen|A cigar box|A pocket watch|Medium|Exploding Picture Frame|General Klinkerhoffen|Hitler Plot|Assassination Scheme|Tarts And Flickers|1992 Episode|Concealed Bomb
During what sport does General von Klinkerhoffen discuss the plot with the Colonel and Gruber?|Golf|Tennis|Shooting|Croquet|Medium|Golf Course|General Klinkerhoffen|Colonel Von Strohm|Hubert Gruber|A Fishy Send Off|1992 Story|Secret Meeting
What item does Herr Flick use to overhear the General's golfing conversation?|A bugged golf club|A hidden radio in a golf ball|An earpiece inside a cap|A microphone on a golf trolley|Medium|Bugged Golf Club|Herr Flick|Gestapo Surveillance|A Fishy Send Off|Assassination Plot|1992 Episode|Eavesdropping
What does Herr Flick mistake the explosive picture frame for in A Fishy Send-Off?|The Fallen Madonna painting|A coded German map|A royal portrait|A photograph of René|Medium|Explosive Frame|Fallen Madonna|Herr Flick|Railway Interception|A Fishy Send Off|1992 Plot|Mistaken Parcel
What do René and the others discover when they reach the coast in A Fishy Send-Off?|Allied troops are landing|The submarine has sunk|The border is closed|The Germans have built a new port|Easy|Allied Landings|French Coast|A Fishy Send Off|Final War Days|René Artois|1992 Story|Liberation Approaching
What is the title of the final regular 'Allo 'Allo! episode?|A Winkle in Time|A Swan Song|Gone with the Windmill|The Best of 'Allo 'Allo!|Easy|A Winkle In Time|Series Finale|December 1992|Final Episode|Nine Series|Episode Title|Programme Conclusion
Which military force arrives to liberate Nouvion in A Winkle in Time?|The Allies|The Italian army|The German navy|The French Vichy militia|Easy|Allied Liberation|Nouvion|A Winkle In Time|End Of War|Final Episode|1992 Story|French Village
Why have Fairfax and Carstairs unexpectedly returned to Café René in the last episode?|They have been shot down again|They missed their train home|They are collecting the painting|They are working for the Gestapo|Medium|Fairfax|Carstairs|Shot Down Again|A Winkle In Time|British Airmen|1992 Finale|Recurring Misfortune
How do von Strohm and Gruber try to evade capture as the Allies enter Nouvion?|By dressing as British airmen|By posing as priests|By joining the French police|By hiding in the café piano|Medium|Colonel Von Strohm|Hubert Gruber|British Airmen Disguise|Allied Advance|A Winkle In Time|1992 Finale|Failed Escape
What underwater craft do Herr Flick and von Smallhausen use in a failed escape attempt in the finale?|A midget submarine|A diving bell|A motorised bathtub|A torpedo boat|Medium|Midget Submarine|Herr Flick|Von Smallhausen|Gestapo Escape|A Winkle In Time|1992 Finale|Capture
What honour do the Allies give René after the liberation of Nouvion?|A medal|A knighthood|A military commission|A parliamentary seat|Easy|René Artois|Allied Medal|Nouvion Liberation|A Winkle In Time|Wartime Service|1992 Finale|Hero Recognition`,
  },
  {
    topic: 'The final scene and the post-war specials',
    era: '1992-2022',
    facts: `What profession has Lieutenant Gruber taken up by the time of the finale's flash-forward?|International art dealer|Restaurant inspector|Airline pilot|Police commissioner|Medium|Hubert Gruber|Art Dealer|Postwar Years|A Winkle In Time|Flash Forward|Character Future|1992 Finale
Who accompanies Gruber on his visit to René's café in the finale's later-years scenes?|Helga|Mimi|Michelle|Denise|Medium|Helga Geerhart|Hubert Gruber|Café Reunion|Postwar Visit|A Winkle In Time|Flash Forward|1992 Finale
Where is the long-lost Fallen Madonna discovered at the end of the original series?|Inside the statue of René|Under the café floorboards|Behind a church painting|Inside a grandfather clock|Easy|Fallen Madonna|René Statue|Town Square|Hidden Painting|A Winkle In Time|1992 Finale|Art Discovery
Which part of René's statue is broken to reveal the hidden painting?|An arm|Its head|A foot|Its nose|Medium|Statue Arm|René Monument|Fallen Madonna|Hidden Art|A Winkle In Time|Final Revelation|1992 Plot
Who does René attempt to elope with at the very end of the original series?|Yvette|Mimi|Helga|Michelle|Easy|René Artois|Yvette Carte Blanche|Final Elopement|A Winkle In Time|Postwar Romance|1992 Ending|Gruber Car
In which year was the retrospective The Best of 'Allo 'Allo! broadcast?|1994|1992|1998|2007|Medium|1994 Retrospective|The Best Of Allo Allo|BBC Special|Archive Clips|Programme Anniversary|Television History|Compilation
Where do René and Edith reminisce about the war in the 1994 retrospective?|The Alps|The French Riviera|The Scottish Highlands|The Spanish coast|Medium|René Artois|Edith Artois|Alpine Holiday|1994 Special|War Memories|Archive Highlights|Retrospective Setting
Whose birthday are René and Edith celebrating in the 1994 retrospective?|Edith's|René's|Yvette's|Fanny's|Medium|Edith Birthday|Alpine Celebration|1994 Retrospective|René And Edith|Archive Clips|Postwar Setting|The Best Of Allo Allo
In which year was The Return of 'Allo 'Allo! broadcast?|2007|1994|2002|2012|Easy|2007 Reunion|The Return Of Allo Allo|Twenty Fifth Anniversary|BBC Two|Television Special|Return Programme|Broadcast Year
What project is René working on in the 2007 reunion special?|Writing his memoirs|Opening a hotel|Painting a portrait|Recording a radio advert|Easy|René Memoirs|2007 Reunion|The Return Of Allo Allo|Postwar Café|Life Story|War Reminiscences|New Scenes
Which original creator wrote the new scenes for the 2007 reunion special?|Jeremy Lloyd|Jimmy Perry|Roy Clarke|John Sullivan|Medium|Jeremy Lloyd|2007 Script|Programme Creator|The Return Of Allo Allo|Reunion Writing|British Sitcom|Television Production
Which channel first aired the 2007 reunion special?|BBC Two|BBC One|ITV1|Channel 4|Medium|BBC Two|The Return Of Allo Allo|2007 Broadcast|Reunion Special|Original Channel|Programme History|Television Transmission
What mixture of material makes up The Return of 'Allo 'Allo!?|New scenes with archive clips and interviews|Only a live stage performance|An animated version of the series|An entirely new six-part drama|Medium|Reunion Format|New Scenes|Archive Clips|Cast Interviews|2007 Special|Television Documentary|Programme History
Which actress returned as Yvette in the 2007 reunion?|Vicki Michelle|Sue Hodge|Kirsten Cooke|Kim Hartman|Easy|Vicki Michelle|Yvette Carte Blanche|2007 Cast|The Return Of Allo Allo|Original Actress|Café René|Character Reunion
What was the title of the 2022 television tribute marking four decades of 'Allo 'Allo!?|'Allo 'Allo!: 40 Years of Laughter|The Return of Café René|The Best of Wartime Comedy|Listen Very Carefully|Medium|Fortieth Anniversary|40 Years Of Laughter|2022 Tribute|Channel 5|Television Retrospective|Original Cast Interviews|Programme Legacy`,
  },
];

const FIRST_ID = 13561;
let index = 0;

const questions = groups.flatMap(group =>
  group.facts.trim().split('\n').map(line => {
    const parts = line.trim().split('|').map(part => part.trim());
    const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');

    if (parts.length !== 13) {
      throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
    }

    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
    const wrongAnswers = [wrong1, wrong2, wrong3];

    if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
      throw new Error(`Missing question or answer at ${id}`);
    }

    if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
      throw new Error(`Repeated answer option at ${id}`);
    }

    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        specificTags.length !== 7 || specificTags.some(tag => !tag)) {
      throw new Error(`Invalid difficulty or specialist tags at ${id}`);
    }

    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    const tags = [...new Map([
      'British Television', 'Television', "'Allo 'Allo!", 'British Comedy',
      'British Sitcom', 'Wartime Comedy', 'Second World War', 'Occupied France',
      group.era, group.topic, correctAnswer, ...specificTags
    ].map(tag => [tag.toLowerCase(), tag])).values()];

    const item = {
      id,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };

    index++;
    return item;
  })
);

const EXPECTED_COUNT = 82;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}

if (questions[0].id !== 'tv_13561' || questions[questions.length - 1].id !== 'tv_13642') {
  throw new Error('Unexpected question ID range');
}

if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error('Duplicate question IDs or wording');
}

if (questions.some(q => q.category !== 'Television' ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 15 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
  throw new Error('Incomplete exported question metadata');
}

module.exports = questions;
