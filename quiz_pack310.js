
// quiz_pack310.js
// PuzzlePilot - The Bigggggg Quiz
// Television: 'Allo 'Allo! - Series 8-9 and later specials (1991-2022)
// The Christmas special, late war, liberation, finale and reunions.
// Seven individually selected specialist tags per question.
// Pack 310 already connects through quiz_bank.js (live packs 1–558).
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


// 21 November 2026 editorial audit: Series 8–9 and 1994, 2007, 2022 specials.
// Original IDs tv_13561–tv_13642 retained. Additional IDs tv_36136–tv_36167.
// Sources: British Comedy Guide episode and full cast/crew records, original David Croft episode
// archive, TVmaze 1994 retrospective, The Return of 'Allo 'Allo! programme synopsis,
// and British Comedy Guide 2022 Comedy Gold retrospective synopsis.
// https://www.comedy.co.uk/tv/allo_allo/episodes/8/
// https://www.comedy.co.uk/tv/allo_allo/episodes/9/
// https://www.comedy.co.uk/tv/allo_allo/cast_crew/full/
// https://www.davidcroft.co.uk/Allo-Allo/Episodes/
// https://www.comedy.co.uk/tv/the_return_of_allo_allo/
// https://www.comedy.co.uk/tv/comedy-gold-allo-allo/
const auditAdditions = [
  {
    "id": "tv_36136",
    "category": "Television",
    "question": "On what date during the Second World War is the story of the 'Allo 'Allo! special A Bun in the Oven set?",
    "answers": [
      "13 September 1943",
      "24 December 1941",
      "6 June 1944",
      "1 January 1945"
    ],
    "correctAnswer": "13 September 1943",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Christmas 1991",
      "Specific subject: Story's fictional date",
      "Story or production context: Late-war café stories",
      "Answer: 13 September 1943",
      "Verified reference: British Comedy Guide Christmas 1991",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36137",
    "category": "Television",
    "question": "How long was the original BBC broadcast of the 'Allo 'Allo! Christmas special A Bun in the Oven?",
    "answers": [
      "20 minutes",
      "45 minutes",
      "30 minutes",
      "60 minutes"
    ],
    "correctAnswer": "45 minutes",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Christmas 1991",
      "Specific subject: Extended festive instalment",
      "Story or production context: BBC One 1991",
      "Answer: 45 minutes",
      "Verified reference: British Comedy Guide Christmas 1991",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36138",
    "category": "Television",
    "question": "Which actor portrays the Pope in the 1991 'Allo 'Allo! Christmas special?",
    "answers": [
      "John Cater",
      "Paul Cooper",
      "Michael Cotterill",
      "Robin Parkinson"
    ],
    "correctAnswer": "Michael Cotterill",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Christmas 1991",
      "Specific subject: The Pope guest casting",
      "Story or production context: Supporting guest actor",
      "Answer: Michael Cotterill",
      "Verified reference: British Comedy Guide Christmas 1991 cast",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36139",
    "category": "Television",
    "question": "Which television director also produced both Series 8 and Series 9 of 'Allo 'Allo!?",
    "answers": [
      "David Croft",
      "Martin Dennis",
      "Mike Stephens",
      "John B Hobbs"
    ],
    "correctAnswer": "John B Hobbs",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Later-series production",
      "Specific subject: Director-producer of final two series",
      "Story or production context: John B Hobbs",
      "Answer: John B Hobbs",
      "Verified reference: British Comedy Guide full crew",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36140",
    "category": "Television",
    "question": "Who was production designer for Series 8 of 'Allo 'Allo!?",
    "answers": [
      "John Stout",
      "Shaun Moore",
      "Roger Harris",
      "Gary Williamson"
    ],
    "correctAnswer": "John Stout",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Later-series production",
      "Specific subject: Eighth-series set design",
      "Story or production context: John Stout production credit",
      "Answer: John Stout",
      "Verified reference: British Comedy Guide full crew",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36141",
    "category": "Television",
    "question": "Who was production designer for Series 9 of 'Allo 'Allo!?",
    "answers": [
      "John Stout",
      "Shaun Moore",
      "Janet Budden",
      "David Buckingham"
    ],
    "correctAnswer": "Shaun Moore",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Later-series production",
      "Specific subject: Ninth-series set design",
      "Story or production context: Shaun Moore production credit",
      "Answer: Shaun Moore",
      "Verified reference: British Comedy Guide full crew",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36142",
    "category": "Television",
    "question": "Which composer shares the final-series music credit with David Croft on 'Allo 'Allo!?",
    "answers": [
      "Howard Goodall",
      "Ronnie Hazlehurst",
      "Roy Moore",
      "Simon Brint"
    ],
    "correctAnswer": "Roy Moore",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Later-series production",
      "Specific subject: Later-series music",
      "Story or production context: Roy Moore composer credit",
      "Answer: Roy Moore",
      "Verified reference: British Comedy Guide episode credits",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36143",
    "category": "Television",
    "question": "Which actor plays the guest character Juan Garcia in 'Allo 'Allo!'s A Woman Never Lies?",
    "answers": [
      "Gavin Richards",
      "John D. Collins",
      "Michael Cotterill",
      "Geoff Garratt"
    ],
    "correctAnswer": "Geoff Garratt",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 8 A Woman Never Lies",
      "Specific subject: Juan Garcia guest performer",
      "Story or production context: 1992 Spanish subplot",
      "Answer: Geoff Garratt",
      "Verified reference: British Comedy Guide episode 8.02 cast",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36144",
    "category": "Television",
    "question": "Approximately how much of the café's takings must René surrender after the failed radio plan in 'Allo 'Allo!'s Awful Wedded Wife?",
    "answers": [
      "67,000 francs",
      "7,000 francs",
      "670 francs",
      "670,000 francs"
    ],
    "correctAnswer": "67,000 francs",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 8 Awful Wedded Wife",
      "Specific subject: Radio-station financial penalty",
      "Story or production context: René's café finances",
      "Answer: 67,000 francs",
      "Verified reference: British Comedy Guide episode 8.04",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36145",
    "category": "Television",
    "question": "Which group tries to seize the two impostors dressed as Hitler and Göring from the Communists in 'Allo 'Allo!'s Firing Squashed?",
    "answers": [
      "The Italian army",
      "Michelle's Resistance",
      "The British Royal Navy",
      "The local police union"
    ],
    "correctAnswer": "Michelle's Resistance",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 8 Firing Squashed",
      "Specific subject: Rival Resistance groups",
      "Story or production context: Disguised German officers",
      "Answer: Michelle's Resistance",
      "Verified reference: British Comedy Guide episode 8.05",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36146",
    "category": "Television",
    "question": "Who takes over running Café René when René and Edith are mistakenly presumed dead in 'Allo 'Allo!'s Swan Song?",
    "answers": [
      "The Italian garrison",
      "The local fire brigade",
      "The French Resistance",
      "The British military police"
    ],
    "correctAnswer": "The French Resistance",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 8 Swan Song",
      "Specific subject: Café changes hands",
      "Story or production context: René's presumed execution",
      "Answer: The French Resistance",
      "Verified reference: British Comedy Guide episode 8.07",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36147",
    "category": "Television",
    "question": "What does Yvette discover about her earlier pregnancy scare by the end of 'Allo 'Allo! Series 8?",
    "answers": [
      "She is expecting twins",
      "The baby is due the following day",
      "She has been carrying another woman's medical notes",
      "She is not pregnant"
    ],
    "correctAnswer": "She is not pregnant",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 8 Swan Song",
      "Specific subject: Yvette's pregnancy reversal",
      "Story or production context: Resolution of 1991 special story",
      "Answer: She is not pregnant",
      "Verified reference: Rotten Tomatoes series 8 overview",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36148",
    "category": "Television",
    "question": "Which Communist Resistance fighter holds René captive as her unwilling lover in 'Allo 'Allo!'s A Tour de France?",
    "answers": [
      "Louise",
      "Michelle Dubois",
      "Mimi Labonq",
      "Helga Geerhart"
    ],
    "correctAnswer": "Louise",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 A Tour de France",
      "Specific subject: René's captor",
      "Story or production context: Communist Resistance underground bunker",
      "Answer: Louise",
      "Verified reference: David Croft episode guide",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36149",
    "category": "Television",
    "question": "Which two pieces of René's clothing are carried through Nouvion to honour him in 'Allo 'Allo!'s Dead Man Marching?",
    "answers": [
      "His apron and cap",
      "His boots and beret",
      "His gloves and scarf",
      "His coat and umbrella"
    ],
    "correctAnswer": "His boots and beret",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 Dead Man Marching",
      "Specific subject: Commemoration procession",
      "Story or production context: Town thinks René is dead",
      "Answer: His boots and beret",
      "Verified reference: British Comedy Guide series 9 guide",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36150",
    "category": "Television",
    "question": "Why does Herr Flick kidnap Yvette and Mimi in 'Allo 'Allo!'s Tarts and Flickers?",
    "answers": [
      "To force René to surrender his café licence",
      "To obtain the town newspaper",
      "To search Café René for the Fallen Madonna",
      "To recruit them to the German army"
    ],
    "correctAnswer": "To search Café René for the Fallen Madonna",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 Tarts and Flickers",
      "Specific subject: Gestapo's intended search",
      "Story or production context: Stolen painting in Nouvion",
      "Answer: To search Café René for the Fallen Madonna",
      "Verified reference: British Comedy Guide series 9 guide",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36151",
    "category": "Television",
    "question": "Who is mistakenly caught in a broom-cupboard rendezvous with René in 'Allo 'Allo!'s Tarts and Flickers?",
    "answers": [
      "Michelle Dubois",
      "Helga Geerhart",
      "Madame Fanny",
      "Edith Artois"
    ],
    "correctAnswer": "Edith Artois",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 Tarts and Flickers",
      "Specific subject: Mistaken romantic meeting",
      "Story or production context: Broom-cupboard confusion",
      "Answer: Edith Artois",
      "Verified reference: British Comedy Guide series 9 guide",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36152",
    "category": "Television",
    "question": "What sort of parade float is used for another cross-Channel escape plan in 'Allo 'Allo!'s A Fishy Send-Off?",
    "answers": [
      "A fishmongers' float",
      "A wedding float",
      "A carnival dragon",
      "A giant clockwork tank"
    ],
    "correctAnswer": "A fishmongers' float",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 A Fishy Send-Off",
      "Specific subject: Fishmongers' parade escape craft",
      "Story or production context: Attempt to cross to England",
      "Answer: A fishmongers' float",
      "Verified reference: British Comedy Guide series 9 guide",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36153",
    "category": "Television",
    "question": "What dance are the café waitresses practising as liberation approaches in 'Allo 'Allo!'s A Winkle in Time?",
    "answers": [
      "The waltz",
      "The jive",
      "The tango",
      "The minuet"
    ],
    "correctAnswer": "The jive",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 A Winkle in Time",
      "Specific subject: Girls prepare for Allied arrival",
      "Story or production context: Final episode in Nouvion",
      "Answer: The jive",
      "Verified reference: British Comedy Guide episode 9.06",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36154",
    "category": "Television",
    "question": "What does General von Klinkerhoffen ultimately have to do when the Allies arrive in 'Allo 'Allo!'s final episode?",
    "answers": [
      "Destroy the café",
      "Escape to Spain",
      "Surrender",
      "Take command of the Resistance"
    ],
    "correctAnswer": "Surrender",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: Series 9 A Winkle in Time",
      "Specific subject: General's fate during liberation",
      "Story or production context: Allied advance into Nouvion",
      "Answer: Surrender",
      "Verified reference: David Croft finale summary",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36155",
    "category": "Television",
    "question": "What milestone was the 1994 retrospective The Best of 'Allo 'Allo! made to celebrate?",
    "answers": [
      "Twenty years since the pilot",
      "The 100th regular episode",
      "A decade since the last episode",
      "Ten years since the first full series"
    ],
    "correctAnswer": "Ten years since the first full series",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 1994 retrospective",
      "Specific subject: Anniversary programme purpose",
      "Story or production context: The Best of 'Allo 'Allo!",
      "Answer: Ten years since the first full series",
      "Verified reference: British Comedy Guide and TVmaze",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36156",
    "category": "Television",
    "question": "What age does Edith jokingly claim to be during her birthday celebrations in The Best of 'Allo 'Allo!?",
    "answers": [
      "35",
      "40",
      "50",
      "60"
    ],
    "correctAnswer": "35",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 1994 retrospective",
      "Specific subject: Edith understates her age",
      "Story or production context: Alpine holiday retrospective",
      "Answer: 35",
      "Verified reference: 1994 retrospective plot record",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36157",
    "category": "Television",
    "question": "Which nostalgic song sung by René and Edith appears in the closing montage of The Best of 'Allo 'Allo!?",
    "answers": [
      "We'll Meet Again",
      "When You Were Sweet Sixteen",
      "La Vie en Rose",
      "Don't Sit Under the Apple Tree"
    ],
    "correctAnswer": "When You Were Sweet Sixteen",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 1994 retrospective",
      "Specific subject: Closing romantic musical clip",
      "Story or production context: René and Edith reminisce",
      "Answer: When You Were Sweet Sixteen",
      "Verified reference: 1994 retrospective plot record",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36158",
    "category": "Television",
    "question": "In which decade are the newly scripted scenes in The Return of 'Allo 'Allo! set?",
    "answers": [
      "The 1930s",
      "The 1970s",
      "The 1950s",
      "The 1990s"
    ],
    "correctAnswer": "The 1950s",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: Postwar time setting",
      "Story or production context: René writes his memoirs",
      "Answer: The 1950s",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36159",
    "category": "Television",
    "question": "Who delivers a long-delayed Légion d'honneur medal to René in The Return of 'Allo 'Allo!?",
    "answers": [
      "Edith Artois",
      "Lieutenant Gruber",
      "Officer Crabtree",
      "Michelle Dubois"
    ],
    "correctAnswer": "Michelle Dubois",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: French honour delivered",
      "Story or production context: Recognition for wartime bravery",
      "Answer: Michelle Dubois",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36160",
    "category": "Television",
    "question": "Where had René's medal been mislaid before its delivery in The Return of 'Allo 'Allo!?",
    "answers": [
      "At Nouvion's post office",
      "In the café cellar",
      "In the local museum",
      "At the château"
    ],
    "correctAnswer": "At Nouvion's post office",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: Missing gallantry medal",
      "Story or production context: A gap at the post office",
      "Answer: At Nouvion's post office",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36161",
    "category": "Television",
    "question": "Why did Officer Crabtree remain in France after the war according to The Return of 'Allo 'Allo!?",
    "answers": [
      "He became a professional footballer",
      "He liked his life there and believed his French was fluent",
      "He won ownership of the château",
      "He was appointed British ambassador"
    ],
    "correctAnswer": "He liked his life there and believed his French was fluent",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: Crabtree's post-war choice",
      "Story or production context: His famously poor French",
      "Answer: He liked his life there and believed his French was fluent",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36162",
    "category": "Television",
    "question": "What gambling destination made Ernest LeClerc wealthy in The Return of 'Allo 'Allo!?",
    "answers": [
      "Las Vegas",
      "Deauville",
      "Monte Carlo",
      "Montevideo"
    ],
    "correctAnswer": "Monte Carlo",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: LeClerc's winnings",
      "Story or production context: Changes since the war",
      "Answer: Monte Carlo",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36163",
    "category": "Television",
    "question": "Which former café waitress is married to Ernest LeClerc in The Return of 'Allo 'Allo!?",
    "answers": [
      "Yvette Carte-Blanche",
      "Maria Recamier",
      "Helga Geerhart",
      "Mimi Labonq"
    ],
    "correctAnswer": "Mimi Labonq",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: Later fictional marriage",
      "Story or production context: Reunion's alternative postwar circumstances",
      "Answer: Mimi Labonq",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36164",
    "category": "Television",
    "question": "What job is the former Lieutenant Gruber doing in The Return of 'Allo 'Allo!?",
    "answers": [
      "Chauffeur for Mimi and LeClerc",
      "Mayor of Nouvion",
      "Proprietor of Café René",
      "Police commissioner"
    ],
    "correctAnswer": "Chauffeur for Mimi and LeClerc",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2007 reunion",
      "Specific subject: Gruber's new livelihood",
      "Story or production context: Former German officer's postwar work",
      "Answer: Chauffeur for Mimi and LeClerc",
      "Verified reference: The Return of 'Allo 'Allo! synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36165",
    "category": "Television",
    "question": "Which British broadcaster showed the 2022 documentary 'Allo 'Allo!: 40 Years of Laughter?",
    "answers": [
      "BBC One",
      "Channel 5",
      "ITV",
      "Channel 4"
    ],
    "correctAnswer": "Channel 5",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2022 tribute",
      "Specific subject: Anniversary documentary broadcaster",
      "Story or production context: Comedy Gold tribute",
      "Answer: Channel 5",
      "Verified reference: British Comedy Guide 2022 broadcast",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36166",
    "category": "Television",
    "question": "Which famous BBC soap's set did the 'Allo 'Allo! cast secretly visit, as recalled in the 2022 anniversary documentary?",
    "answers": [
      "Coronation Street",
      "Emmerdale",
      "EastEnders",
      "Hollyoaks"
    ],
    "correctAnswer": "EastEnders",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2022 tribute",
      "Specific subject: Comedy cast visits another TV set",
      "Story or production context: Documentary anecdote",
      "Answer: EastEnders",
      "Verified reference: British Comedy Guide Comedy Gold synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36167",
    "category": "Television",
    "question": "What event in 1990 injured Gorden Kaye and is discussed in 'Allo 'Allo!: 40 Years of Laughter?",
    "answers": [
      "A car-racing accident",
      "A stage fire",
      "A theatre collapse",
      "A severe storm"
    ],
    "correctAnswer": "A severe storm",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "British Television",
      "British Sitcom",
      "BBC comedy series",
      "Occupied France",
      "Second World War",
      "René Artois",
      "Café René",
      "Late series and television reunions",
      "Television history",
      "UK English",
      "Section: 2022 tribute",
      "Specific subject: Gorden Kaye's accident",
      "Story or production context: Programme nearly halted",
      "Answer: A severe storm",
      "Verified reference: British Comedy Guide Comedy Gold synopsis",
      "1990s British television",
      "1982–1992 sitcom",
      "2007 revival when relevant",
      "2022 anniversary when relevant",
      "November 2026 quiz audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==114||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<15||!q.tags.includes("'Allo 'Allo!")||q.dailyEligible!==true)||
 auditAdditions.some(q=>q.tags.length<18||!q.question.includes("'Allo 'Allo!")))
 throw Error('Pack 310 editorial audit failed');

module.exports = questions;
