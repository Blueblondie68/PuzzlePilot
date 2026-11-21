
// quiz_pack307.js
// PuzzlePilot - The Bigggggg Quiz
// Television: 'Allo 'Allo! (pilot and Series 1-3, 1982-1987)
// Programme origins, principal cast, the Resistance, recurring jokes,
// the Fallen Madonna and early series storylines.
// Seven individually chosen specialist tags on each question.
// Pack 307 is already connected via quiz_bank.js (packs 1–558).
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Programme origins and the 1982 pilot',
    era: '1982',
    facts: `On which BBC channel was 'Allo 'Allo! originally broadcast?|BBC One|BBC Two|BBC Four|BBC Three|Easy|BBC One|Original Broadcaster|BBC Sitcom|Programme Launch|British Broadcasting|Television Network|Original Transmission
In which year was the pilot of 'Allo 'Allo! first broadcast?|1982|1980|1984|1986|Easy|1982 Pilot|First Broadcast|Programme Origins|British Comedy|Broadcast Year|Early Television|Pilot Episode
During which conflict is 'Allo 'Allo! set?|The Second World War|The First World War|The Korean War|The Cold War|Easy|Second World War|Wartime France|Occupied Territory|Historical Setting|Nazi Occupation|1940s Fiction|Comedy Backdrop
In which country does most of 'Allo 'Allo! take place?|France|Belgium|Germany|Italy|Easy|France|Occupied France|Wartime Europe|Geographical Setting|French Village|Nouvion|Second World War
What is the name of the French village in 'Allo 'Allo!?|Nouvion|Calais|Arras|Dieppe|Easy|Nouvion|Fictional Village|French Setting|Cafe Rene|Occupied France|Provincial Town|Programme Geography
What is the name of René Artois's establishment?|Café René|Café Paris|Café de la Paix|Café Bonaparte|Easy|Cafe Rene|René Artois|Restaurant Setting|French Cafe|Local Business|Village Meeting Place|Series Setting
What is the title of the 1982 'Allo 'Allo! pilot?|The British Are Coming|The Fallen Madonna|Pigeon Post|The Great Un-Escape|Medium|The British Are Coming|Pilot Title|1982 Episode|BBC Premiere|Early Story|Programme Beginning|Opening Episode
Which writing partnership created 'Allo 'Allo!?|David Croft and Jeremy Lloyd|John Sullivan and Carla Lane|Ray Galton and Alan Simpson|Dick Clement and Ian La Frenais|Medium|David Croft|Jeremy Lloyd|Comedy Creators|Writing Partnership|BBC Production|Programme Origins|Sitcom Writers
Which serious BBC wartime drama was a particular inspiration for the parody in 'Allo 'Allo!?|Secret Army|Colditz|Warship|The Onedin Line|Medium|Secret Army|Wartime Drama|BBC Parody|Genre Satire|Television Inspiration|Resistance Stories|1970s Drama
Members of which country's air force are hidden at Café René?|Britain's Royal Air Force|France's Air Force|The United States Air Force|Germany's Luftwaffe|Easy|Royal Air Force|British Airmen|RAF Officers|Escaped Servicemen|Resistance Safe House|Wartime Plot|Pilot Premise
Why does the French Resistance want to use Café René?|To hide stranded British airmen|To open a military hospital|To train German recruits|To organise village elections|Easy|French Resistance|Safe House|British Airmen|René Reluctance|Escape Network|Occupied Village|Café Operations
How many main series of 'Allo 'Allo! were produced?|Nine|Seven|Eight|Ten|Medium|Nine Series|Programme Length|1982 To 1992|BBC Television|Production History|Sitcom Run|Series Count`,
  },
  {
    topic: 'The original ensemble and their performers',
    era: '1982-1987',
    facts: `Who plays café owner René Artois in 'Allo 'Allo!?|Gorden Kaye|Richard Marner|Guy Siner|Sam Kelly|Easy|Gorden Kaye|René François Artois|Lead Actor|Cafe Proprietor|Character Casting|Main Role|British Comedy
Which actress plays René's wife Edith Artois?|Carmen Silvera|Vicki Michelle|Kirsten Cooke|Kim Hartman|Easy|Carmen Silvera|Edith Melba Artois|René Wife|Main Cast|Character Casting|Café Performer|Marriage
Who portrays café waitress Yvette Carte-Blanche?|Vicki Michelle|Francesca Gonshaw|Sue Hodge|Kirsten Cooke|Easy|Vicki Michelle|Yvette Carte Blanche|Café Waitress|René Love Interest|Character Casting|Original Cast|French Character
Which actress plays waitress Maria in the first three series?|Francesca Gonshaw|Kim Hartman|Sue Hodge|Carmen Silvera|Medium|Francesca Gonshaw|Maria|Café Waitress|Series One To Three|René Affair|Character Casting|Original Ensemble
Who plays Resistance organiser Michelle Dubois?|Kirsten Cooke|Vicki Michelle|Rose Hill|Carole Ashby|Easy|Kirsten Cooke|Michelle Dubois|Resistance Leader|French Resistance|Casting|Secret Operations|Main Character
Which actor plays Colonel Kurt von Strohm?|Richard Marner|Sam Kelly|Hilary Minster|Guy Siner|Medium|Richard Marner|Colonel Von Strohm|German Army|Commanding Officer|Character Casting|Occupied France|Military Role
Who portrays Captain Hans Geering?|Sam Kelly|Guy Siner|Richard Gibson|Louis Mansi|Medium|Sam Kelly|Hans Geering|German Captain|Colonel Assistant|Original Ensemble|Character Casting|Military Comedy
Which actress plays German Private Helga Geerhart?|Kim Hartman|Carmen Silvera|Francesca Gonshaw|Rose Hill|Medium|Kim Hartman|Helga Geerhart|German Military|Herr Flick|Secretarial Duties|Character Casting|Recurring Cast
Who first played Gestapo officer Herr Otto Flick?|Richard Gibson|David Janson|Guy Siner|Hilary Minster|Medium|Richard Gibson|Herr Otto Flick|Original Performer|Gestapo Officer|First Casting|Series One To Eight|German Security
Which actor plays Lieutenant Hubert Gruber?|Guy Siner|Sam Kelly|Richard Marner|Kenneth Connor|Easy|Guy Siner|Hubert Gruber|German Lieutenant|Little Tank|René Admirer|Character Casting|Main Ensemble
Who plays the British agent posing as Officer Crabtree?|Arthur Bostrom|Jack Haig|John D Collins|Nicholas Frankau|Easy|Arthur Bostrom|Officer Crabtree|British Spy|French Policeman|Character Casting|Language Comedy|Introduced Series Two
Which actor plays Resistance forger Roger LeClerc?|Jack Haig|Kenneth Connor|Louis Mansi|Hilary Minster|Medium|Jack Haig|Roger LeClerc|Resistance Forger|Disguises|Character Casting|Underground Network|Series One To Five
Who plays Edith's elderly mother Madame Fanny?|Rose Hill|Carmen Silvera|Dora Bryan|June Whitfield|Medium|Rose Hill|Madame Fanny|Edith Mother|Attic Resident|Family Relationship|Character Casting|Older Generation
Which actor portrays undertaker Monsieur Alfonse?|Kenneth Connor|Jack Haig|Richard Marner|Sam Kelly|Medium|Kenneth Connor|Monsieur Alfonse|Undertaker|Edith Suitor|Character Casting|Recurring Comic Role|Funeral Trade
Who portrays General von Klinkerhoffen?|Hilary Minster|Richard Gibson|Gorden Kaye|Guy Siner|Medium|Hilary Minster|General Von Klinkerhoffen|German General|Military Commander|Character Casting|Authority Figure|Early Series
Who plays British airman Flight Lieutenant Fairfax?|John D. Collins|Nicholas Frankau|Arthur Bostrom|Roger Kitter|Medium|John D Collins|Fairfax|RAF Airman|British Escapee|Character Casting|Café Hideout|Air Force
Which actor plays Fairfax's fellow airman, Carstairs?|Nicholas Frankau|John D. Collins|Jack Haig|Sam Kelly|Medium|Nicholas Frankau|Carstairs|British Airman|RAF Officer|Fairfax Companion|Character Casting|Resistance Rescue
What is the first name of Herr Flick's subordinate von Smallhausen?|Engelbert|Erich|Hubert|Kurt|Hard|Engelbert Von Smallhausen|Gestapo Aide|Herr Flick Deputy|Louis Mansi|Recurring Character|German Officer|Character Name`,
  },
  {
    topic: 'Recurring characters, their roles and famous jokes',
    era: '1982-1987',
    facts: `What codename does the Resistance use for René Artois?|Nighthawk|Red Fox|Kingfisher|Black Eagle|Medium|Nighthawk|René Artois|Resistance Codename|Secret Identity|French Underground|Wartime Espionage|Recurring Plot
Which character repeatedly calls his wife a stupid woman?|René Artois|Colonel von Strohm|Herr Flick|Monsieur Alfonse|Easy|René Artois|Edith Artois|Marriage Comedy|Recurring Catchphrase|Comic Insult|Husband And Wife|Series Dialogue
Who is known for announcing that she will speak only once?|Michelle Dubois|Yvette Carte Blanche|Edith Artois|Helga Geerhart|Easy|Michelle Dubois|Resistance Leader|Secret Briefing|Catchphrase|Clandestine Meetings|Urgent Instructions|Series Dialogue
Which character famously greets people with the words Good moaning?|Officer Crabtree|Monsieur LeClerc|Captain Geering|Lieutenant Gruber|Easy|Officer Crabtree|Good Moaning|British Spy|Faulty French|Comic Accent|Famous Greeting|Catchphrase
What is Officer Crabtree pretending to be in occupied France?|A French policeman|A German army major|A café waiter|A British airman|Easy|Officer Crabtree|French Police Disguise|British Intelligence|Undercover Agent|Poor French|Occupied France|Espionage
Which character announces his identity by lifting his disguise and saying It is I?|Monsieur LeClerc|Monsieur Alfonse|General von Klinkerhoffen|Captain Geering|Easy|Roger LeClerc|It Is I LeClerc|Resistance Forger|Comic Disguise|Recognition Joke|Signature Gesture|Familiar Character
What feature of Edith's performances causes customers to block their ears?|Her dreadful singing|Her loud tap dancing|Her trumpet playing|Her poetry recitals|Easy|Edith Artois|Off Key Singing|Café Entertainment|Cabaret Performer|Audience Reaction|Running Gag|Musical Comedy
Which vehicle is Lieutenant Gruber particularly fond of?|A small tank|An armoured train|A military motorcycle|A patrol boat|Easy|Hubert Gruber|Little Tank|Armoured Vehicle|German Lieutenant|Transport Gag|René Friendship|Military Equipment
Which Nazi organisation employs Herr Flick?|The Gestapo|The Luftwaffe|The Kriegsmarine|The Hitler Youth|Easy|Herr Otto Flick|Gestapo|Nazi Security|Secret Police|Military Occupation|Villainous Officer|German Organisation
How is Madame Fanny related to René Artois?|She is his mother-in-law|She is his aunt|She is his sister|She is his grandmother|Medium|Madame Fanny|Edith Mother|René Mother In Law|Artois Household|Family Relationship|Attic Resident|Café Residents
Where does Madame Fanny live in the café building?|In the attic|In the wine cellar|In the kitchen|In the garage|Easy|Madame Fanny|Café Attic|Edith Mother|Residence|British Airmen|Hidden Radio|Café Setting
What is Monsieur Alfonse's trade?|Undertaker|Baker|Solicitor|Tailor|Easy|Monsieur Alfonse|Undertaker|Funeral Business|Edith Suitor|Kenneth Connor|Village Tradesman|Recurring Character
What weakness is Monsieur Alfonse known for?|A delicate heart|Poor eyesight|A fear of heights|Seasickness|Medium|Monsieur Alfonse|Dicky Ticker|Heart Condition|Edith Courtship|Comedy Malady|Undertaker Character|Running Joke`,
  },
  {
    topic: 'Pilot and first series: painting, pigeons and René’s funeral',
    era: '1982-1984',
    facts: `What type of artwork is repeatedly smuggled and forged in the early 'Allo 'Allo! stories?|A painting|A bronze statue|A tapestry|A porcelain vase|Easy|Fallen Madonna|Stolen Artwork|Wartime Loot|Smuggling|Forged Copies|Colonel Von Strohm|Series One
What is the name of the famous fictional picture sought by the Germans?|The Fallen Madonna with the Big Boobies|The Weeping Lady of Nouvion|The Sleeping Duchess|The Golden Lady of Paris|Easy|Fallen Madonna|Big Boobies|Iconic Painting|German Loot|Recurring Treasure|Visual Comedy|Art Plot
Which fictional Dutch artist supposedly painted The Fallen Madonna?|Van Clomp|Van Gogh|Rembrandt|Vermeer|Medium|Van Clomp|Fictional Painter|Fallen Madonna|Art Forgery|Dutch Artist|Series MacGuffin|Stolen Masterpiece
In the first series, who wants The Fallen Madonna for his personal collection?|Adolf Hitler|Winston Churchill|Charles de Gaulle|Benito Mussolini|Easy|Adolf Hitler|Fallen Madonna|Nazi Leadership|Art Collection|Herr Flick|Stolen Painting|Series One Plot
In Pigeon Post, what birds are used to order replacement German uniforms?|Carrier pigeons|Owls|Canaries|Seagulls|Easy|Pigeon Post|Carrier Pigeons|Uniform Order|German Officers|Resistance Delivery|1984 Episode|Wartime Communications
Why do Colonel von Strohm and Captain Geering need fresh uniforms in Pigeon Post?|Their uniforms are accidentally burnt|They lose them in a card game|They are stolen from a train|They swap them for civilian clothes|Medium|Pigeon Post|Burnt Uniforms|Colonel Von Strohm|Captain Geering|British Airmen|Clothing Mix Up|1984 Plot
Which London tailoring street is involved in the replacement-uniform scheme?|Savile Row|Baker Street|Fleet Street|Carnaby Street|Medium|Savile Row|London Tailoring|German Uniforms|Pigeon Post|British Resistance|Series One|1984 Story
In Savile Row To The Rescue, a dangerous substance is hidden in a bottle labelled as what drink?|Gin|Whisky|Brandy|Rum|Medium|Savile Row To The Rescue|Explosives|Gin Bottle|René Artois|Resistance Scheme|Series One|1984 Plot
In The Execution, who is chosen to be executed as an example to the town?|René Artois|Herr Flick|Monsieur Alfonse|Lieutenant Gruber|Easy|The Execution|René Artois|General Klinkerhoffen|Death Sentence|Railway Sabotage|Series One|1984 Plot
In The Funeral, René has to pose as whose twin?|His own|Colonel von Strohm's|Monsieur LeClerc's|Captain Geering's|Easy|The Funeral|René Twin|False Death|Identity Deception|Edith Artois|Empty Coffin|1984 Episode
What dangerous items are hidden in René's supposedly empty coffin in The Funeral?|Anti-tank mines|Stolen gold bars|Military radios|Secret passports|Medium|The Funeral|Anti Tank Mines|René Coffin|Resistance Supplies|Explosives|Series One|1984 Plot
Which faction captures Colonel von Strohm and Captain Geering in Red Nick's Colonel?|The Communist Resistance|The British Royal Navy|The Italian army|The French police|Medium|Red Nicks Colonel|Communist Resistance|Captured Officers|Colonel Von Strohm|Captain Geering|Series One|1984 Episode
In The Dance Of Hitler Youth, why is Herr Flick drawn to a party at the café?|To keep him away while his apartment is searched|To celebrate his promotion|To meet a British spy|To inspect a new café licence|Medium|The Dance Of Hitler Youth|Herr Flick|Café Party|Apartment Search|Distraction Plan|Series One Finale|Resistance Plot`,
  },
  {
    topic: 'Second series and the 1985 Christmas special',
    era: '1985',
    facts: `In which year did 'Allo 'Allo! Series Two first air?|1985|1983|1987|1989|Easy|Series Two|1985 Broadcast|BBC Comedy|Second Series|Programme Timeline|Original Run|Episode History
In Six Big Boobies, how many versions of The Fallen Madonna trouble Herr Flick?|Three|Two|Four|Five|Medium|Six Big Boobies|Three Paintings|Herr Flick|Forged Art|Original Copy|Series Two Premiere|1985 Plot
Who becomes the object of several suitors' attention in The Wooing Of Widow Artois?|Edith Artois|Yvette Carte Blanche|Helga Geerhart|Michelle Dubois|Easy|Wooing Of Widow Artois|Edith Artois|Marriage Proposal|René Presumed Dead|Romantic Rivalry|Series Two|1985 Story
In which episode does Officer Crabtree arrive as a new British intelligence agent?|The Policeman Cometh|The Duel|Pigeon Post|The Nicked Knockwurst|Medium|The Policeman Cometh|Officer Crabtree|First Appearance|British Intelligence|French Police Disguise|Series Two|1985 Episode
Whose armoured car do René and Hans plan to borrow in The Policeman Cometh?|Lieutenant Gruber's|Herr Flick's|General von Klinkerhoffen's|Monsieur Alfonse's|Medium|The Policeman Cometh|Hubert Gruber|Armoured Car|René Artois|Captain Geering|Train Sabotage|1985 Plot
Which character challenges René to a duel in Swiftly And With Style?|Monsieur Alfonse|Herr Flick|Captain Geering|Monsieur LeClerc|Easy|Swiftly And With Style|Monsieur Alfonse|René Artois|Duel Challenge|Edith Artois|Romantic Rival|1985 Story
In The Duel, which character runs away before a shot is fired?|René Artois|Colonel von Strohm|Lieutenant Gruber|Officer Crabtree|Easy|The Duel|René Artois|Flight From Duel|Monsieur Alfonse|Cowardice|Series Two|1985 Plot
Where are René, the Colonel and Hans held in Herr Flick's Revenge?|Herr Flick's cellar|The café attic|The town hall|A military hospital|Medium|Herr Flicks Revenge|Gestapo Cellar|René Artois|Colonel Von Strohm|Captain Geering|Captivity|1985 Episode
What is the title of the 1985 'Allo 'Allo! Christmas special?|The Gâteau From The Château|Flight Of Fancy|The Great Un-Escape|The Last Shout|Medium|Gateau From Chateau|Christmas 1985|Special Episode|Episode Title|BBC Festive Schedule|General Klinkerhoffen|Television History
Which German commander takes control of the district in The Gâteau From The Château?|General von Klinkerhoffen|Lieutenant Gruber|Herr von Smallhausen|Captain Geering|Medium|General Von Klinkerhoffen|District Commander|Christmas Special|Occupied Town|German Command|Military Authority|1985 Story
Which dessert becomes part of a plan against the General in the 1985 Christmas special?|An exploding gâteau|A poisoned trifle|A stolen Christmas pudding|A burning pancake|Medium|Gateau From Chateau|Exploding Cake|Assassination Plot|General Klinkerhoffen|Christmas Episode|Wartime Farce|1985 Scheme`,
  },
  {
    topic: 'Third series: the stolen sausage and escape attempts',
    era: '1986-1987',
    facts: `In which year did 'Allo 'Allo! Series Three begin broadcasting?|1986|1985|1988|1990|Easy|Series Three|1986 Premiere|BBC One|Broadcast History|Episode Timeline|Christmas Run|British Sitcom
Which group steals the sausage holding a portrait in The Nicked Knockwurst?|The Communist Resistance|The Italian army|The Royal Navy|The French fire brigade|Medium|Nicked Knockwurst|Communist Resistance|Stolen Sausage|Portrait Hiding Place|Series Three Premiere|1986 Plot|Ransom
Which artwork is concealed inside the much-contested sausage?|The Fallen Madonna|The Mona Lisa|The Hay Wain|The Night Watch|Easy|Fallen Madonna|Knockwurst|Hidden Painting|Smuggling Scheme|Sausage Plot|Series Three|1986 Story
In Gruber Does Some Mincing, which animal gets hold of the stolen sausage?|An Alsatian dog|A horse|A carrier pigeon|A cat|Medium|Gruber Does Some Mincing|Alsatian Dog|Hubert Gruber|Stolen Sausage|Fallen Madonna|1986 Episode|Animal Mishap
Which machine's engine does the Resistance steal in Gruber Does Some Mincing?|A lawnmower|A tractor|A washing machine|A motorbike|Medium|Gruber Does Some Mincing|Lawnmower Engine|Resistance Theft|Mechanical Equipment|Escape Plans|Series Three|1986 Plot
Where does the sausage containing the painting end up in The Sausage In The Wardrobe?|The General's wardrobe|The café pantry|The church bell tower|The railway signal box|Medium|Sausage In Wardrobe|General Klinkerhoffen|Wardrobe|Hidden Painting|Château|Series Three|1986 Story
Which café waitress is in the General's room during The Sausage In The Wardrobe?|Maria|Yvette|Mimi|Louise|Medium|Maria|General Klinkerhoffen|Château Room|Sausage In Wardrobe|Café Waitress|Series Three|1986 Plot
What type of aircraft is central to the escape scheme in Flight Of Fancy?|An antique aeroplane|A jet fighter|A helicopter|A seaplane|Easy|Flight Of Fancy|Antique Aeroplane|Airmen Escape|Resistance Plan|Vintage Transport|Christmas 1986|Wartime Comedy
What unusual elastic material helps launch the aircraft in Flight Of Fancy?|Knicker elastic|Bicycle inner tubes|Rubber washing lines|Car fan belts|Medium|Flight Of Fancy|Knicker Elastic|Aircraft Catapult|Absurd Invention|Resistance Scheme|British Airmen|1986 Special
Towards which English port is the aircraft intended to fly in Flight Of Fancy?|Dover|Portsmouth|Plymouth|Harwich|Medium|Flight Of Fancy|Dover|Escape To England|English Channel|British Airmen|Antique Plane|1986 Plot
In Pretty Maids All In A Row, the General notices a genuine painting by which artist at the café?|Vincent van Gogh|Claude Monet|Pablo Picasso|Paul Cézanne|Medium|Pretty Maids All In A Row|Van Gogh Painting|General Klinkerhoffen|Café Wall|Stolen Artwork|January 1987|Series Three
In The Great Un-Escape, what are Fairfax and Carstairs trying to tunnel into?|A prisoner-of-war camp|A bank vault|A railway station|A government bunker|Easy|Great Un Escape|Fairfax|Carstairs|POW Camp|Tunnel In|Resistance Rescue|Series Three Finale`,
  },
];

const FIRST_ID = 13333;
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
      group.era, group.topic, correctAnswer, ...specificTags,
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

const EXPECTED_COUNT = 79;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}

if (questions[0].id !== 'tv_13333' || questions[questions.length - 1].id !== 'tv_13411') {
  throw new Error('Unexpected question ID range');
}

if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error('Duplicate question IDs or wording');
}

if (questions.some(q => q.category !== 'Television' ||
    q.answers.length !== 4 ||
    !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 15 ||
    q.tags.some(tag => !tag) ||
    q.dailyEligible !== true)) {
  throw new Error('Incomplete exported question metadata');
}


// TV audit 21 Nov 2026. Original questions tv_13333–tv_13411 are unchanged.
// 33 researched additions tv_36042–tv_36074.
// Sources: https://www.comedy.co.uk/tv/allo_allo/episodes/1/
// https://www.comedy.co.uk/tv/allo_allo/episodes/2/
// https://www.comedy.co.uk/tv/allo_allo/episodes/3/
// https://www.comedy.co.uk/tv/allo_allo/cast_crew/full/
// https://www.davidcroft.co.uk/Allo-Allo/Episodes/
// https://richardgibson.org/allo-allo.html
const auditAdditions = [
  {
    "id": "tv_36042",
    "category": "Television",
    "question": "On what exact date was the original pilot of 'Allo 'Allo! first broadcast?",
    "answers": [
      "30 December 1982",
      "7 September 1984",
      "26 December 1985",
      "5 December 1986"
    ],
    "correctAnswer": "30 December 1982",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: The 1982 pilot",
      "Specific fact: Pilot transmission",
      "Story or production: BBC One Christmas-period pilot",
      "Answer: 30 December 1982",
      "Research: David Croft official episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: On what exact date was the original pilot of 'Allo 'Allo! first broadcast?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36043",
    "category": "Television",
    "question": "In which year did the first regular series of 'Allo 'Allo! begin on BBC One?",
    "answers": [
      "1982",
      "1984",
      "1985",
      "1986"
    ],
    "correctAnswer": "1984",
    "difficulty": "Easy",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1",
      "Specific fact: Series-one year",
      "Story or production: First full series after the pilot",
      "Answer: 1984",
      "Research: British Comedy Guide series-one listings",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: In which year did the first regular series of 'Allo 'Allo! begin on BBC One?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36044",
    "category": "Television",
    "question": "How many episodes were in the first regular series of 'Allo 'Allo!?",
    "answers": [
      "Six",
      "Eight",
      "Seven",
      "Ten"
    ],
    "correctAnswer": "Seven",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1",
      "Specific fact: First-series episode count",
      "Story or production: 1984 run",
      "Answer: Seven",
      "Research: British Comedy Guide episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: How many episodes were in the first regular series of 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36045",
    "category": "Television",
    "question": "How many regular 1985 episodes preceded the Christmas special in Series 2 of 'Allo 'Allo!?",
    "answers": [
      "Five",
      "Seven",
      "Nine",
      "Six"
    ],
    "correctAnswer": "Six",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2",
      "Specific fact: 1985 episode count",
      "Story or production: Christmas special counted separately",
      "Answer: Six",
      "Research: British Comedy Guide series-two episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: How many regular 1985 episodes preceded the Christmas special in Series 2 of 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36046",
    "category": "Television",
    "question": "Which earlier BBC sitcom had been the previous major collaboration between the creators of 'Allo 'Allo!?",
    "answers": [
      "Are You Being Served?",
      "Dad's Army",
      "Porridge",
      "Only Fools and Horses"
    ],
    "correctAnswer": "Are You Being Served?",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Programme origins",
      "Specific fact: Croft and Lloyd previous collaboration",
      "Story or production: Earlier television comedy partnership",
      "Answer: Are You Being Served?",
      "Research: Richard Gibson programme history",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which earlier BBC sitcom had been the previous major collaboration between the creators of 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36047",
    "category": "Television",
    "question": "How long did Jeremy Lloyd and David Croft reportedly take to write the first 'Allo 'Allo! script?",
    "answers": [
      "Three weeks",
      "Three days",
      "Six months",
      "One year"
    ],
    "correctAnswer": "Three days",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Programme origins",
      "Specific fact: Pilot writing time",
      "Story or production: Rapid development of initial script",
      "Answer: Three days",
      "Research: Richard Gibson account",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: How long did Jeremy Lloyd and David Croft reportedly take to write the first 'Allo 'Allo! script?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36048",
    "category": "Television",
    "question": "For which actor was the part of René Artois in 'Allo 'Allo! written specifically?",
    "answers": [
      "Sam Kelly",
      "Guy Siner",
      "Gorden Kaye",
      "Kenneth Connor"
    ],
    "correctAnswer": "Gorden Kaye",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Programme origins",
      "Specific fact: Original role conception",
      "Story or production: David Croft developed René around the actor",
      "Answer: Gorden Kaye",
      "Research: Richard Gibson account",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: For which actor was the part of René Artois in 'Allo 'Allo! written specifically?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36049",
    "category": "Television",
    "question": "Which 'Allo 'Allo! character was initially devised for just one scene in the pilot but became a regular?",
    "answers": [
      "Herr Flick",
      "Officer Crabtree",
      "Monsieur Alfonse",
      "Lieutenant Gruber"
    ],
    "correctAnswer": "Lieutenant Gruber",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Programme origins",
      "Specific fact: Unexpectedly expanded character",
      "Story or production: Gruber created for a pilot misunderstanding",
      "Answer: Lieutenant Gruber",
      "Research: Richard Gibson account",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which 'Allo 'Allo! character was initially devised for just one scene in the pilot but became a regular?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36050",
    "category": "Television",
    "question": "In which English county was most location filming for the pilot of 'Allo 'Allo! carried out?",
    "answers": [
      "Suffolk",
      "Kent",
      "Somerset",
      "Yorkshire"
    ],
    "correctAnswer": "Suffolk",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Pilot production",
      "Specific fact: Pilot filming location",
      "Story or production: August 1982 location shooting",
      "Answer: Suffolk",
      "Research: Richard Gibson account",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: In which English county was most location filming for the pilot of 'Allo 'Allo! carried out?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36051",
    "category": "Television",
    "question": "Which East London sports centre supplied the prison exterior in the 'Allo 'Allo! pilot?",
    "answers": [
      "Crystal Palace National Sports Centre",
      "Wapping sports centre",
      "Mile End Stadium",
      "Copper Box Arena"
    ],
    "correctAnswer": "Wapping sports centre",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Pilot production",
      "Specific fact: LeClerc prison escape location",
      "Story or production: Exterior filmed separately from studio interior",
      "Answer: Wapping sports centre",
      "Research: Richard Gibson account",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which East London sports centre supplied the prison exterior in the 'Allo 'Allo! pilot?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36052",
    "category": "Television",
    "question": "Which two scarce wartime supplies do the German officers provide René in exchange for access to his waitresses in 'Allo 'Allo!?",
    "answers": [
      "Petrol and coal",
      "Bread and champagne",
      "Butter and paraffin",
      "Eggs and tobacco"
    ],
    "correctAnswer": "Butter and paraffin",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Pilot story",
      "Specific fact: Café René's barter arrangements",
      "Story or production: Colonel and Hans supply the café",
      "Answer: Butter and paraffin",
      "Research: Richard Gibson pilot synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which two scarce wartime supplies do the German officers provide René in exchange for access to his waitresses in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36053",
    "category": "Television",
    "question": "Which château loses The Fallen Madonna painting early in 'Allo 'Allo!?",
    "answers": [
      "Château de Chambord",
      "Château de Chenonceau",
      "Château de Versailles",
      "Château Fontenac"
    ],
    "correctAnswer": "Château Fontenac",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Pilot story",
      "Specific fact: Original stolen painting location",
      "Story or production: Herr Flick investigates the theft",
      "Answer: Château Fontenac",
      "Research: Richard Gibson pilot synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which château loses The Fallen Madonna painting early in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36054",
    "category": "Television",
    "question": "What is René Artois's middle name in 'Allo 'Allo!?",
    "answers": [
      "François",
      "Henri",
      "Louis",
      "Michel"
    ],
    "correctAnswer": "François",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Characters",
      "Specific fact: Full character name",
      "Story or production: René François Artois",
      "Answer: François",
      "Research: British Comedy Guide cast credits",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What is René Artois's middle name in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36055",
    "category": "Television",
    "question": "What middle name does Edith Artois have in 'Allo 'Allo!?",
    "answers": [
      "Marie",
      "Melba",
      "Louise",
      "Fifi"
    ],
    "correctAnswer": "Melba",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Characters",
      "Specific fact: Full character name",
      "Story or production: Edith Melba Artois",
      "Answer: Melba",
      "Research: British Comedy Guide cast credits",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What middle name does Edith Artois have in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36056",
    "category": "Television",
    "question": "Which actor played Herr Flick's subordinate Engelbert von Smallhausen in 'Allo 'Allo!?",
    "answers": [
      "Richard Gibson",
      "Gavin Richards",
      "Louis Mansi",
      "Jack Haig"
    ],
    "correctAnswer": "Louis Mansi",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Characters",
      "Specific fact: Early Gestapo supporting cast",
      "Story or production: Von Smallhausen credited from Series 2",
      "Answer: Louis Mansi",
      "Research: British Comedy Guide full cast",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which actor played Herr Flick's subordinate Engelbert von Smallhausen in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36057",
    "category": "Television",
    "question": "Which 'Allo 'Allo! co-creator directed the first regular series?",
    "answers": [
      "Jeremy Lloyd",
      "Robin Carr",
      "Martin Dennis",
      "David Croft"
    ],
    "correctAnswer": "David Croft",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Production",
      "Specific fact: Early series directing credit",
      "Story or production: Director and producer of first-series episodes",
      "Answer: David Croft",
      "Research: British Comedy Guide cast and crew",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which 'Allo 'Allo! co-creator directed the first regular series?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36058",
    "category": "Television",
    "question": "Who directed five of the six episodes of 'Allo 'Allo! Series 3?",
    "answers": [
      "Robin Carr",
      "David Croft",
      "Martin Dennis",
      "Susan Belbin"
    ],
    "correctAnswer": "Robin Carr",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Production",
      "Specific fact: Series-three direction",
      "Story or production: 1986–87 episode production",
      "Answer: Robin Carr",
      "Research: British Comedy Guide full credits",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Who directed five of the six episodes of 'Allo 'Allo! Series 3?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36059",
    "category": "Television",
    "question": "Which actor played the tailor in the first-series 'Allo 'Allo! episode Saville Row To The Rescue?",
    "answers": [
      "Jack Haig",
      "John Bluthal",
      "John D. Collins",
      "Kenneth Connor"
    ],
    "correctAnswer": "John Bluthal",
    "difficulty": "Hard",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1, Saville Row To The Rescue",
      "Specific fact: Saville Row guest casting",
      "Story or production: Uniform-replacement tailor",
      "Answer: John Bluthal",
      "Research: British Comedy Guide episode credits",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which actor played the tailor in the first-series 'Allo 'Allo! episode Saville Row To The Rescue?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36060",
    "category": "Television",
    "question": "What are Colonel von Strohm and Hans forced to dress as in 'Allo 'Allo!'s Pigeon Post?",
    "answers": [
      "French farmers",
      "British railway guards",
      "French onion sellers",
      "Village priests"
    ],
    "correctAnswer": "French onion sellers",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1, Pigeon Post",
      "Specific fact: Disguised officers",
      "Story or production: Their uniforms were destroyed",
      "Answer: French onion sellers",
      "Research: British Comedy Guide episode details",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What are Colonel von Strohm and Hans forced to dress as in 'Allo 'Allo!'s Pigeon Post?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36061",
    "category": "Television",
    "question": "Why do the British airmen destroy the borrowed German uniforms in 'Allo 'Allo!'s Pigeon Post?",
    "answers": [
      "They want to protest a new German rule",
      "The uniforms are contaminated with paint",
      "They cannot find a laundry",
      "They fear being executed as spies if caught wearing them"
    ],
    "correctAnswer": "They fear being executed as spies if caught wearing them",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1, Pigeon Post",
      "Specific fact: Reason uniforms were burnt",
      "Story or production: Airmen mistake German disguises for danger",
      "Answer: They fear being executed as spies if caught wearing them",
      "Research: British Comedy Guide episode details",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Why do the British airmen destroy the borrowed German uniforms in 'Allo 'Allo!'s Pigeon Post?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36062",
    "category": "Television",
    "question": "Whose premature destruction of a railway line leads to René's arrest in 'Allo 'Allo!'s The Execution?",
    "answers": [
      "Captain Hans Geering's",
      "Herr Flick's",
      "Monsieur LeClerc's",
      "Lieutenant Gruber's"
    ],
    "correctAnswer": "Captain Hans Geering's",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1, The Execution",
      "Specific fact: Blown-up railway ahead of schedule",
      "Story or production: René threatened with execution",
      "Answer: Captain Hans Geering's",
      "Research: British Comedy Guide episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Whose premature destruction of a railway line leads to René's arrest in 'Allo 'Allo!'s The Execution?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36063",
    "category": "Television",
    "question": "Which historic German parliament building supplies the ostensible reason for the café party in 'Allo 'Allo!'s The Dance Of Hitler Youth?",
    "answers": [
      "The Brandenburg Gate",
      "The Reichstag",
      "The Berliner Dom",
      "The Bundestag"
    ],
    "correctAnswer": "The Reichstag",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 1, The Dance Of Hitler Youth",
      "Specific fact: Fake commemoration of a fire",
      "Story or production: Cover for breaking into Flick's flat",
      "Answer: The Reichstag",
      "Research: British Comedy Guide episode synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which historic German parliament building supplies the ostensible reason for the café party in 'Allo 'Allo!'s The Dance Of Hitler Youth?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36064",
    "category": "Television",
    "question": "What religious disguise do the British airmen adopt in the early second series of 'Allo 'Allo!?",
    "answers": [
      "Monks",
      "Priests",
      "Nuns",
      "Choirboys"
    ],
    "correctAnswer": "Nuns",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2, Six Big Boobies",
      "Specific fact: Airmen disguised in convent",
      "Story or production: Series two escape plot",
      "Answer: Nuns",
      "Research: Published series-two episode history",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What religious disguise do the British airmen adopt in the early second series of 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36065",
    "category": "Television",
    "question": "Where does Herr Flick plan to send a forged Fallen Madonna painting during 'Allo 'Allo!'s The Wooing Of Widow Artois?",
    "answers": [
      "To the British Museum",
      "To the Vatican",
      "To General de Gaulle",
      "To Hitler"
    ],
    "correctAnswer": "To Hitler",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2, The Wooing Of Widow Artois",
      "Specific fact: Fake artwork destination",
      "Story or production: The real painting and copies",
      "Answer: To Hitler",
      "Research: British Comedy Guide series-two synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Where does Herr Flick plan to send a forged Fallen Madonna painting during 'Allo 'Allo!'s The Wooing Of Widow Artois?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36066",
    "category": "Television",
    "question": "How does Colonel von Strohm offer to resolve René's duel with Monsieur Alfonse in 'Allo 'Allo!?",
    "answers": [
      "By arranging for Alfonse to be accidentally shot",
      "By hiring a fencing teacher",
      "By forging a peace treaty",
      "By switching René's pistol for a toy"
    ],
    "correctAnswer": "By arranging for Alfonse to be accidentally shot",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2, The Duel",
      "Specific fact: Colonel's intervention",
      "Story or production: Alfonse challenges René",
      "Answer: By arranging for Alfonse to be accidentally shot",
      "Research: David Croft episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: How does Colonel von Strohm offer to resolve René's duel with Monsieur Alfonse in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36067",
    "category": "Television",
    "question": "Which unusual garment is part of the airmen's escape scheme in 'Allo 'Allo!'s Herr Flick's Revenge?",
    "answers": [
      "Woollen socks",
      "Silk knickers",
      "Leather boots",
      "A wedding veil"
    ],
    "correctAnswer": "Silk knickers",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2, Herr Flick's Revenge",
      "Specific fact: Silk undergarment escape scheme",
      "Story or production: British airmen's escape",
      "Answer: Silk knickers",
      "Research: British Comedy Guide series-two synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which unusual garment is part of the airmen's escape scheme in 'Allo 'Allo!'s Herr Flick's Revenge?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36068",
    "category": "Television",
    "question": "Which weapon, besides an explosive gâteau, features in the plots against General von Klinkerhoffen in 'Allo 'Allo!'s Christmas special?",
    "answers": [
      "Crossbows",
      "A flamethrower",
      "Poison darts",
      "A naval torpedo"
    ],
    "correctAnswer": "Poison darts",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 2 Christmas special",
      "Specific fact: Multiple assassination methods",
      "Story or production: The Gâteau From The Château",
      "Answer: Poison darts",
      "Research: British Comedy Guide Christmas special",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Which weapon, besides an explosive gâteau, features in the plots against General von Klinkerhoffen in 'Allo 'Allo!'s Christmas special?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36069",
    "category": "Television",
    "question": "What happens to Herr Flick's copied Fallen Madonna painting in 'Allo 'Allo!'s Gruber Does Some Mincing?",
    "answers": [
      "It burns in a fireplace",
      "It is soaked in wine",
      "It is shredded by a lawnmower",
      "It crumbles into frozen fragments"
    ],
    "correctAnswer": "It crumbles into frozen fragments",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, Gruber Does Some Mincing",
      "Specific fact: Damaged forged painting",
      "Story or production: Flick's copy of the artwork",
      "Answer: It crumbles into frozen fragments",
      "Research: British Comedy Guide series-three synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What happens to Herr Flick's copied Fallen Madonna painting in 'Allo 'Allo!'s Gruber Does Some Mincing?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36070",
    "category": "Television",
    "question": "What does Monsieur Alfonse hope to recover in 'Allo 'Allo!'s Gruber Does Some Mincing?",
    "answers": [
      "His life savings",
      "His undertaker's licence",
      "His stolen wedding ring",
      "His old military uniform"
    ],
    "correctAnswer": "His life savings",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, Gruber Does Some Mincing",
      "Specific fact: Alfonse's missing savings",
      "Story or production: Financial difficulties",
      "Answer: His life savings",
      "Research: British Comedy Guide series-three synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What does Monsieur Alfonse hope to recover in 'Allo 'Allo!'s Gruber Does Some Mincing?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36071",
    "category": "Television",
    "question": "What public event serves as cover for the aircraft escape scheme in 'Allo 'Allo!'s Flight Of Fancy?",
    "answers": [
      "A village flower show",
      "A vintage transport show",
      "A military parade",
      "A harvest festival"
    ],
    "correctAnswer": "A vintage transport show",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, Flight Of Fancy",
      "Specific fact: Transport show conceals escape",
      "Story or production: Airmen launch an antique aeroplane",
      "Answer: A vintage transport show",
      "Research: British Comedy Guide series-three synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What public event serves as cover for the aircraft escape scheme in 'Allo 'Allo!'s Flight Of Fancy?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36072",
    "category": "Television",
    "question": "What are Fairfax and Carstairs disguised as in 'Allo 'Allo!'s Pretty Maids All In A Row?",
    "answers": [
      "German soldiers",
      "Monks",
      "Women of the street",
      "Travelling salesmen"
    ],
    "correctAnswer": "Women of the street",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, Pretty Maids All In A Row",
      "Specific fact: Airmen's latest disguises",
      "Story or production: Plan to move them to the mortuary",
      "Answer: Women of the street",
      "Research: David Croft episode guide",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What are Fairfax and Carstairs disguised as in 'Allo 'Allo!'s Pretty Maids All In A Row?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36073",
    "category": "Television",
    "question": "What happens when the British airmen's tunnel is discovered in the 'Allo 'Allo! episode The Great Un-Escape?",
    "answers": [
      "The airmen reach the coast safely",
      "A prison guard escapes to England",
      "The tunnel floods and everyone returns to the café",
      "The escape party becomes trapped inside the POW camp"
    ],
    "correctAnswer": "The escape party becomes trapped inside the POW camp",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, The Great Un-Escape",
      "Specific fact: Unexpected result of tunnelling in",
      "Story or production: Colonel and Captain discover the tunnel",
      "Answer: The escape party becomes trapped inside the POW camp",
      "Research: British Comedy Guide series-three synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: What happens when the British airmen's tunnel is discovered in the 'Allo 'Allo! episode The Great Un-Escape?"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_36074",
    "category": "Television",
    "question": "Where does General von Klinkerhoffen move the genuine Van Gogh taken from Café René in 'Allo 'Allo!?",
    "answers": [
      "To his office at the château",
      "To a museum in Paris",
      "To a secret bank vault",
      "To Herr Flick's cellar"
    ],
    "correctAnswer": "To his office at the château",
    "difficulty": "Medium",
    "tags": [
      "'Allo 'Allo!",
      "BBC One",
      "British Sitcom",
      "British Television",
      "World War II Comedy",
      "1982–1987",
      "Early Series 1 to 3",
      "David Croft",
      "Jeremy Lloyd",
      "Part: Series 3, Pretty Maids All In A Row",
      "Specific fact: Confiscation of genuine Van Gogh",
      "Story or production: Suspicious café artwork",
      "Answer: To his office at the château",
      "Research: Published series-three episode synopsis",
      "Pilot and original three series",
      "French Resistance",
      "Occupied France",
      "René Artois",
      "1980s BBC Comedy",
      "UK English",
      "November 2026 TV Pack Audit",
      "Full question: Where does General von Klinkerhoffen move the genuine Van Gogh taken from Café René in 'Allo 'Allo!?"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==112||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||
 questions.some(q=>q.answers.length!==4||
 new Set(q.answers.map(a=>a.toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<15||!q.tags.includes("'Allo 'Allo!")||q.dailyEligible!==true)||
 auditAdditions.some(q=>q.tags.length<18))
 throw Error("Pack 307 audit validation failed");

module.exports = questions;
