
// quiz_pack308.js
// PuzzlePilot - The Bigggggg Quiz
// Television: 'Allo 'Allo! — Series 4 and 5 (1987–1989)
// Storylines, cast changes, the Resistance, and German schemes.
// Seven individually selected specialist tags per question.
// Keep quiz_bank.js unchanged until end-of-evening connection.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Series Four: changes at Café René',
    era: '1987',
    facts: `In which year was the fourth series of 'Allo 'Allo! first broadcast?|1987|1985|1988|1990|Easy|Series Four|First Broadcast|BBC One|Programme Timeline|1987 Television|Broadcast History|Original Run
How many episodes make up Series Four of 'Allo 'Allo!?|Six|Eight|Ten|Twelve|Medium|Six Episodes|Series Four|1987 Broadcast|Episode Count|Programme Structure|BBC Sitcom|Television History
Which café waitress is replaced during the fourth series?|Maria|Yvette|Edith|Helga|Easy|Maria|Waitress Departure|Café Rene|Series Four|Staff Change|Character Exit|1987 Plot
What is the name of the new café waitress introduced in Good Staff Are Hard To Find?|Mimi Labonq|Louise|Denise Laroque|Catriona|Easy|Mimi Labonq|New Waitress|Resistance Member|Good Staff Are Hard To Find|Café Rene|Series Four|1987 Character
Which actress plays the new waitress Mimi Labonq?|Sue Hodge|Vicki Michelle|Francesca Gonshaw|Kirsten Cooke|Medium|Sue Hodge|Mimi Labonq|Actress|Casting|Café Waitress|1987 Debut|Series Four
What secret activity is Mimi involved in besides serving at the café?|The French Resistance|An opera company|A travelling circus|An antiques business|Easy|Mimi Labonq|French Resistance|Undercover Waitress|Michelle Dubois|Café Rene|Secret Mission|Character Role
Which officer arrives as an Italian liaison in Series Four?|Captain Alberto Bertorelli|Captain Hans Geering|General von Klinkerhoffen|Lieutenant Hubert Gruber|Easy|Alberto Bertorelli|Italian Army|Liaison Officer|New Character|Series Four|German Headquarters|1987 Arrival
Who originally played Captain Alberto Bertorelli?|Gavin Richards|Roger Kitter|Sam Kelly|Richard Marner|Medium|Gavin Richards|Alberto Bertorelli|Original Actor|Series Four|Italian Captain|Character Casting|BBC Comedy
Which German officer leaves as a regular character near the start of Series Four?|Captain Hans Geering|Lieutenant Gruber|Colonel von Strohm|Herr Flick|Medium|Hans Geering|Sam Kelly|Regular Departure|German Officer|Cast Change|Series Four|1987 Television
Which actor played Captain Hans Geering before his departure?|Sam Kelly|Guy Siner|Richard Gibson|Hilary Minster|Medium|Sam Kelly|Hans Geering|Cast Member|German Captain|Series Four|Character Exit|Original Ensemble
Which Italian leader does Captain Bertorelli name in his salute?|Benito Mussolini|Adolf Hitler|Vittorio Emanuele III|Giuseppe Garibaldi|Medium|Benito Mussolini|Bertorelli Salute|Italian Fascist Leader|Axis Powers|Character Catchphrase|Military Satire|Series Four
What phrase is particularly associated with Captain Bertorelli when things go wrong?|What a mistake-a to make-a!|Good moaning!|It is I, LeClerc!|Listen very carefully!|Easy|Bertorelli Catchphrase|What A Mistake A To Make A|Italian Accent|Comic Dialogue|Gavin Richards|Military Mishap|Recurring Joke`,
  },
  {
    topic: 'Series Four: escape and extraordinary contraptions',
    era: '1987',
    facts: `Where are René and several others being held at the start of Series Four?|A prisoner-of-war camp|A seaside hotel|A police headquarters|A mountain monastery|Easy|Prisoners Of War|Stalag Luft IV|René Captured|Camp Setting|Series Four Premiere|1987 Plot|Wartime Prison
What is the title of the first episode of Series Four?|Prisoners Of War|The Flying Nun|The Camera In The Potato|Camp Dance|Medium|Prisoners Of War|Series Four Premiere|Episode Title|7 November 1987|POW Camp|Broadcast Order|BBC One
Which officer is flung over the prison-camp fence in Prisoners Of War?|Captain Hans Geering|Lieutenant Gruber|General von Klinkerhoffen|Captain Bertorelli|Medium|Hans Geering|Camp Escape|Prisoners Of War|German Captain|Fence Escape|Series Four|1987 Story
Who helps René and his companions escape from the camp in Camp Dance?|Lieutenant Gruber|Herr Flick|Denise Laroque|General von Klinkerhoffen|Easy|Hubert Gruber|Camp Dance|POW Escape|Rescue Plan|Series Four|German Lieutenant|1987 Plot
What kind of vehicle is used for the escape from the camp in Camp Dance?|A rubbish truck|An ambulance|A fire engine|An armoured train|Medium|Camp Dance|Rubbish Truck|Escape Disguise|Prisoner Camp|1987 Episode|Rescue Vehicle|Wartime Farce
Where is waitress Maria accidentally sent during the camp escape storyline?|Switzerland|Italy|Belgium|Spain|Medium|Maria|Switzerland|Posted In The Mail|Camp Dance|Character Departure|Series Four|1987 Plot
In which episode are René and Edith recruiting a replacement waitress?|Good Staff Are Hard To Find|The Flying Nun|The Jet-Propelled Mother-In-Law|The Sausages In The Trousers|Easy|Good Staff Are Hard To Find|Staff Recruitment|Mimi Labonq|Edith Artois|Café Vacancies|1987 Broadcast|Series Four
Which device does the Resistance use as an aerial when its radio signal is jammed?|A kite|A weather balloon|A church bell|A windmill|Easy|The Flying Nun|Kite Aerial|Radio Interference|Resistance Communications|Herr Flick|Series Four|1987 Plot
In The Flying Nun, which character is suspended from the kite dressed as a nun?|Mimi|Edith|Yvette|Helga|Medium|Mimi Labonq|Nun Disguise|Kite|The Flying Nun|Resistance Scheme|1987 Episode|Comic Invention
Who interferes with the Resistance's radio transmissions in The Flying Nun?|Herr Flick|Captain Bertorelli|Monsieur Alfonse|Colonel von Strohm|Medium|Herr Flick|Gestapo|Radio Jamming|The Flying Nun|Resistance Communications|1987 Story|Signal Interference
What food causes confusion because different examples conceal explosives, paintings and batteries?|Sausages|Cheese rounds|Bread loaves|Christmas puddings|Easy|The Sausages In The Trousers|Concealed Objects|Explosives|Art Forgeries|Radio Batteries|Café Rene|1987 Plot
Who paints copies of the artwork that end up hidden in sausages in Series Four?|Lieutenant Gruber|Officer Crabtree|Monsieur Alfonse|Captain Bertorelli|Medium|Hubert Gruber|Painting Forgeries|The Sausages In The Trousers|Fallen Madonna|Art Copies|Series Four|1987 Story
What location is requisitioned by General von Klinkerhoffen in The Jet-Propelled Mother-In-Law?|A vineyard|A school|A railway depot|A bakery|Easy|Vineyard|General Klinkerhoffen|Grape Harvest|Jet Propelled Mother In Law|Series Four Finale|1987 Plot|Occupied Property
What item dropped by the RAF does the Resistance search for at the vineyard?|A spy camera|A coded map|A bag of gold|A parachute radio|Medium|Spy Camera|RAF|Vineyard|Resistance Mission|Jet Propelled Mother In Law|1987 Story|Dropped Equipment
Whose vineyard is commandeered by the General in Series Four?|Monsieur Alfonse's|René's|Lieutenant Gruber's|Herr Flick's|Medium|Monsieur Alfonse|Vineyard Ownership|General Klinkerhoffen|Jet Propelled Mother In Law|Grape Harvest|Village Business|1987 Story`,
  },
  {
    topic: 'Series Five: new schemes and the unwanted wedding',
    era: '1988',
    facts: `In which year did the fifth series of 'Allo 'Allo! begin?|1988|1987|1989|1991|Easy|Series Five|1988 Premiere|BBC One|Programme Chronology|Long Series|Broadcast Year|Sitcom History
How many episodes were made for the unusually long fifth series?|Twenty-six|Six|Twelve|Eighteen|Medium|Twenty Six Episodes|Series Five|Extended Run|1988 To 1989|Production History|Episode Count|Long Season
Which market influenced the decision to make Series Five much longer?|American television|Australian television|French television|Canadian television|Medium|American Market|Series Five|International Syndication|Production Decision|Twenty Six Episodes|TV Distribution|1988 Commission
In Desperate Doings In The Dungeon, who needs rescuing from captivity?|Herr Flick|Flight Lieutenant Fairfax|Monsieur Alfonse|Captain Bertorelli|Medium|Desperate Doings In The Dungeon|Herr Flick|Gestapo Officer|Rescue Mission|1988 Premiere|Series Five|Captivity
As whom is René disguised when helping rescue Herr Flick from the dungeon?|Heinrich Himmler|Adolf Hitler|Winston Churchill|Benito Mussolini|Medium|Himmler Disguise|René Artois|Herr Flick Rescue|Dungeon|Series Five Premiere|1988 Plan|Impersonation
In The Camera In The Potato, what vegetable conceals a spy camera?|A potato|A turnip|A carrot|A cabbage|Easy|Camera In The Potato|Potato Camera|Secret Photography|Resistance Gadget|1988 Episode|Michelle Dubois|Espionage
What does the Resistance want René to photograph in The Camera In The Potato?|A safe containing invasion plans|The town hall's basement|A secret railway timetable|An underground hospital|Medium|Invasion Plans|Safe|Spy Camera|Château|Camera In The Potato|1988 Plot|Military Intelligence
Which officer's bedroom contains the safe that René needs to photograph?|Lieutenant Gruber's|Captain Bertorelli's|Herr Flick's|Colonel von Strohm's|Medium|Hubert Gruber|Bedroom Safe|Camera In The Potato|Invasion Plans|Château|Series Five|1988 Story
How do René and LeClerc disguise themselves to reach the safe in Dinner With The General?|As firemen|As monks|As railway guards|As chefs|Easy|Firemen Disguise|René Artois|Roger LeClerc|Dinner With The General|Château Infiltration|1988 Episode|Resistance Plot
What are René and LeClerc trying to open in Dinner With The General?|A safe|A prison gate|A museum cabinet|A locked railway carriage|Easy|Château Safe|Dinner With The General|Invasion Papers|René And LeClerc|Forced Entry|1988 Plot|Secret Documents
Where are René and LeClerc imprisoned by the Communist Resistance in The Dreaded Circular Saw?|An old sawmill|A disused brewery|A church crypt|An abandoned school|Medium|Dreaded Circular Saw|Sawmill|Communist Resistance|René Captured|Roger LeClerc|Series Five|1988 Plot
What is the first name of René's childhood sweetheart who leads the Communist Resistance?|Denise|Louise|Mimi|Helga|Medium|Denise Laroque|Childhood Sweetheart|Communist Resistance|René Artois|Otherwise Engaged|1988 Character|Unwanted Romance
Which actress plays Communist Resistance leader Denise Laroque?|Moira Foot|Sue Hodge|Carole Ashby|Kim Hartman|Medium|Moira Foot|Denise Laroque|Actress|Character Casting|Communist Leader|Series Five|1988 Television
What does Denise decide she wants to do after recognising René in Otherwise Engaged?|Marry him|Recruit him as a pilot|Sell him the café|Send him to London|Easy|Denise Laroque|Marriage Plans|Otherwise Engaged|Childhood Sweethearts|René Artois|Communist Resistance|1988 Plot
Who secretly replaces Denise at the altar in A Marriage Of Inconvenience?|Edith|Yvette|Mimi|Helga|Easy|Edith Artois|Wedding Switch|A Marriage Of Inconvenience|Denise Laroque|René Artois|Resistance Plan|1988 Episode
Why is René threatened by the Communist Resistance in No Hiding Place?|Denise's wedding plans have been thwarted|He sells their radio equipment|He burns their uniforms|He betrays a British airman|Medium|No Hiding Place|Denise Laroque|Failed Wedding|Communist Revenge|René Artois|1988 Story|Retaliation
As which relative does René disguise himself in No Hiding Place?|His own father|His own son|His brother-in-law|His uncle|Medium|Father Disguise|René Artois|No Hiding Place|False Identity|Communist Pursuit|1988 Plot|Hiding Place`,
  },
  {
    topic: 'Series Five: the duck, the generals and the ransom',
    era: '1988',
    facts: `What unusual bird is intended to carry secret microfilm to England in Series Five?|A long-distance duck|A racing pigeon|A trained raven|A homing goose|Easy|Homing Duck|Microfilm|Resistance Communications|Journey To England|Series Five|1988 Scheme|Unusual Messenger
Who sends the long-distance duck intended to carry intelligence to England?|The RAF|The French police|The German army|The Italian command|Medium|Royal Air Force|Homing Duck|Resistance Message|British Airmen|Arrival Of The Homing Duck|1988 Episode|Cross Channel Courier
In The Arrival Of The Homing Duck, whom does Edith impersonate while hiding?|Monsieur LeClerc|Officer Crabtree|Colonel von Strohm|Monsieur Alfonse|Medium|Edith Artois|LeClerc Disguise|Arrival Of The Homing Duck|Hiding|1988 Episode|False Identity|Resistance
What event is being planned by the German command in Watch The Birdie?|A generals' conference|A military wedding|A village election|A harvest festival|Medium|Watch The Birdie|Generals Conference|Invasion Planning|German Command|1988 Story|Secret Meeting|Military Strategy
What country are the generals preparing to invade in Watch The Birdie?|Britain|Italy|Switzerland|Spain|Easy|Britain|Invasion Plans|Generals Conference|Watch The Birdie|German Army|1988 Plot|Wartime Strategy
What is René disguised as in René - Under An Assumed Nose?|A French general|An Italian baker|A German priest|A British soldier|Easy|French General Disguise|René Artois|Under An Assumed Nose|False Identity|Generals Conference|1988 Episode|Wartime Farce
In The Confusion Of The Generals, where is the military conference held?|Café René|The village church|The Gestapo cellar|A railway carriage|Medium|Confusion Of The Generals|Café Rene|Military Conference|Invasion Planning|Nouvion|Series Five|1988 Story
Which front does General von Klinkerhoffen threaten to send Gruber and von Strohm to in Who's For The Vatican?|The Russian front|The Italian front|The North African front|The Western Front|Medium|Russian Front|Klinkerhoffen|Gruber|Von Strohm|Threatened Transfer|Whos For The Vatican|1988 Plot
What city-state does the Colonel consider hiding in during Who's For The Vatican?|Vatican City|Monaco|San Marino|Andorra la Vella|Medium|Vatican|Colonel Von Strohm|Hiding Plan|Whos For The Vatican|Escape Scheme|Series Five|1988 Plot
Which faction captures Mimi, Gruber, Bertorelli and the Colonel in Ribbing The Bonk?|The Communist Resistance|The British Royal Navy|The French fire brigade|The Italian military police|Medium|Communist Resistance|Ribbing The Bonk|Hostages|Mimi Labonq|German Officers|1988 Story|Captivity
How large is the ransom demanded for the captives in Ribbing The Bonk?|One million francs|Ten thousand francs|Five million francs|Fifty thousand francs|Medium|One Million Francs|Ransom|Communist Resistance|Ribbing The Bonk|Captives|1988 Plot|Bank Money
What building does René rob to raise money for the ransom?|A bank|A post office|A jewellery shop|A town hall|Easy|Bank Robbery|René Artois|Ransom Money|Ribbing The Bonk|Series Five|1988 Episode|Reluctant Criminal
Who turns out to own the money taken during the bank robbery?|The Gestapo|The Resistance|The British Army|The Italian Embassy|Medium|Gestapo Funds|Stolen Money|Reluctant Millionaires|Bank Robbery|Herr Flick|1988 Story|Financial Trouble
Why is the group desperate to dispose of the stolen money in The Reluctant Millionaires?|They discover it belongs to the Gestapo|It is counterfeit foreign currency|It has been marked for a charity raffle|It is due to be collected by the town mayor|Medium|Reluctant Millionaires|Gestapo Money|René Artois|Dangerous Cash|Series Five|1988 Plot|Secret Ownership
What prevents the Resistance's feathered messenger from delivering the microfilm in A Duck For Launch?|The duck refuses to leave|The duck cannot swim|A cat steals the microfilm|The duck is mistaken for a chicken|Medium|A Duck For Launch|Homing Duck|Refuses To Depart|Microfilm|Resistance Plan|1988 Episode|Failed Mission`,
  },
  {
    topic: 'Series Five: money, explosives and an escape to Geneva',
    era: '1988-1989',
    facts: `Who suffers a heart attack while being questioned by Herr Flick in The Exploding Bedpan?|Monsieur Alfonse|Monsieur LeClerc|Colonel von Strohm|René Artois|Easy|Monsieur Alfonse|Heart Attack|Exploding Bedpan|Gestapo Interrogation|1988 Story|Captured Undertaker|Medical Emergency
Who arranges a plan to rescue Monsieur Alfonse before he reveals secrets under interrogation?|Michelle Dubois|General von Klinkerhoffen|Captain Bertorelli|Colonel von Strohm|Medium|Michelle Dubois|Monsieur Alfonse|Resistance Rescue|Gestapo Interrogation|The Exploding Bedpan|1988 Episode|Dangerous Secrets
Who is framed to be caught carrying stolen and forged money in Going Like A Bomb?|Captain Bertorelli|Officer Crabtree|Lieutenant Gruber|Flight Lieutenant Fairfax|Medium|Captain Bertorelli|Forged Money|Going Like A Bomb|Colonel Von Strohm|Framing|1988 Story|Financial Plot
Which character accidentally burns the bank money in Money To Burn?|Madame Fanny|Yvette|Mimi|Helga|Medium|Madame Fanny|Burnt Money|Money To Burn|Gestapo Funds|Series Five|1988 Story|Financial Disaster
What festive dessert is used to conceal large quantities of explosives in Puddings Can Go Off?|Christmas puddings|Mince pies|Yule logs|Trifles|Easy|Christmas Puddings|High Explosives|Puddings Can Go Off|Resistance Supplies|Café Storage|1989 Episode|Festive Disguise
Which commander orders René to store explosives disguised as Christmas puddings?|Michelle Dubois|Colonel von Strohm|General von Klinkerhoffen|Captain Bertorelli|Medium|Michelle Dubois|Explosives Storage|Christmas Puddings|Puddings Can Go Off|Resistance Orders|1989 Story|Café Rene
What containers are proposed as a way of getting British airmen to England in Land Mines For London?|Empty land mines|Wine barrels|Cargo crates|Hollow statues|Easy|Land Mines For London|Empty Land Mines|RAF Escape|Unusual Transport|Resistance Plan|1989 Plot|British Airmen
Which two Gestapo agents end up concealed inside the empty land mines?|Herr Flick and von Smallhausen|Gruber and von Strohm|Fairfax and Carstairs|René and LeClerc|Medium|Herr Flick|Von Smallhausen|Land Mine Hiding Place|Land Mines For London|1989 Episode|Gestapo Duo|Escape Confusion
Which woman does René plan to run away with in Flight To Geneva?|Yvette|Edith|Mimi|Denise|Easy|Yvette Carte Blanche|René Artois|Flight To Geneva|Planned Elopement|Romance|1989 Story|Escape Plan
To which country does René intend to escape on the Geneva Express?|Switzerland|Belgium|Italy|Austria|Easy|Switzerland|Geneva Express|René Escape|Flight To Geneva|Train Journey|1989 Plot|European Geography
What underwater vehicle is proposed in Flight To Geneva for the British airmen's escape?|A mini-submarine|A diving bell|An inflatable raft|A motor launch|Medium|Mini Submarine|British Airmen|Michelle Dubois|Flight To Geneva|Resistance Plan|1989 Episode|Sea Escape
What kind of dangerous cargo threatens the Geneva Express in Train Of Events?|Explosive Christmas puddings|Crates of fireworks|A shipment of land mines|A wagon of petrol|Medium|Train Of Events|Geneva Express|Christmas Puddings|Resistance Sabotage|Explosives|1989 Episode|Railway Danger
In An Enigma Variation, what machine is the Resistance trying to obtain?|An Enigma encoder|A radar transmitter|A printing press|An electric typewriter|Easy|Enigma Machine|Coding Equipment|Resistance Theft|An Enigma Variation|1989 Plot|Secret Communications|German Technology
Inside what object are stolen paintings hidden in An Enigma Variation?|A hollow statue|An empty wine cask|A suitcase lining|A grandfather clock|Medium|An Enigma Variation|Hollow Statue|Hidden Paintings|General Klinkerhoffen|Art Smuggling|1989 Episode|Concealed Treasure
Who plans to marry Edith, prompting René to propose again in Wedding Bloss?|Monsieur Alfonse|Lieutenant Gruber|Captain Bertorelli|Herr Flick|Easy|Monsieur Alfonse|Edith Artois|René Artois|Wedding Bloss|Marriage Proposal|1989 Plot|Romantic Rivalry
Which valuable metal does René try to take with him when planning another escape in Down The Drain?|Gold|Silver|Platinum|Copper|Easy|Gold Bars|René Artois|Down The Drain|Stolen Valuables|Geneva Escape|1989 Episode|Hidden Wealth
How does the Resistance plan to send the Enigma machine away in Down The Drain?|Through the town's drains|In a false-bottomed suitcase|By carrier pigeon|Inside a hollow loaf|Medium|Down The Drain|Enigma Machine|Town Drains|Resistance Smuggling|1989 Story|Underground Route|Secret Equipment
Which episode ends the 26-episode fifth series of 'Allo 'Allo!?|All In Disgeese|An Enigma Variation|Train Of Events|The Exploding Bedpan|Medium|All In Disgeese|Series Five Finale|Episode Twenty Six|25 February 1989|Broadcast Order|End Of Long Series|Final Episode
In All In Disgeese, why are British intelligence agents travelling to Nouvion?|To examine the Enigma machine|To inspect the café kitchen|To arrest the French mayor|To collect a stolen painting|Medium|All In Disgeese|British Intelligence|Enigma Inspection|Nouvion|Series Five Finale|1989 Plot|Secret Equipment`,
  },
];

const FIRST_ID = 13412;
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
      'British Television', 'Television', "'Allo 'Allo!", 'BBC One',
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

const EXPECTED_COUNT = 78;

if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}

if (questions[0].id !== 'tv_13412' || questions[questions.length - 1].id !== 'tv_13489') {
  throw new Error('Unexpected question ID range');
}

if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error('Duplicate question IDs or question wording');
}

if (questions.some(q => q.category !== 'Television' ||
    q.answers.length !== 4 ||
    !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 15 ||
    q.tags.some(tag => !tag) ||
    q.dailyEligible !== true)) {
  throw new Error('Incomplete exported question metadata');
}

module.exports = questions;
