
// quiz_pack309.js
// PuzzlePilot - The Bigggggg Quiz
// Television: 'Allo 'Allo! - Series 6 (1989) and Series 7 (1991)
// The British airmen, the Resistance, the graveyard radio,
// the LeClerc wedding, the changing cast and the later escape schemes.
// Seven individually selected specialist tags per question.
// Keep quiz_bank.js unchanged until the end-of-evening connection.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

const groups = [
  {
    topic: 'Series Six: broadcast history and changing characters',
    era: '1989',
    facts: `In which year was Series Six of 'Allo 'Allo! first broadcast?|1989|1987|1990|1992|Easy|Series Six|1989 Broadcast|BBC One|Broadcast Year|Programme Timeline|Later Series|British Comedy
How many episodes were broadcast in Series Six of 'Allo 'Allo!?|Eight|Six|Ten|Twelve|Medium|Eight Episodes|Series Six|Season Length|Programme Structure|1989 Television|Episode Count|BBC Sitcom
Which episode opens the sixth series of 'Allo 'Allo!?|Desperate Doings In The Graveyard|The Crooked Fences|The Nouvion Oars|Rising To The Occasion|Medium|Desperate Doings In The Graveyard|Opening Episode|Series Six Premiere|Graveyard Plot|1989 Television|Episode Title|Broadcast Order
What is the title of the final episode of Series Six?|Rising To The Occasion|Crabtree's Podgeon Pist|The Airmen De-Nicked|The Nicked Airmen|Medium|Rising To The Occasion|Series Six Finale|Balloon Scheme|Final Episode|October 1989|BBC Sitcom|Episode Title
Which year saw 'Allo 'Allo! return for Series Seven after a gap in broadcasting?|1991|1989|1990|1993|Easy|1991 Return|Series Seven|Broadcast Gap|Programme Comeback|BBC Television|Wartime Sitcom|Transmission Year`,
  },
  {
    topic: 'Series Six: graveyard communications and impostors',
    era: '1989',
    facts: `In Desperate Doings In The Graveyard, beneath what structure is a secret Resistance communications centre dug?|René's empty tomb|The town fountain|The café cellar floor|The village war memorial|Medium|Desperate Doings In The Graveyard|René Empty Grave|Secret Communications Centre|Resistance Tunnel|Cemetery|Series Six Premiere|1989 Plot
What is the purpose of the Resistance's new underground station in the graveyard?|To communicate despite German radio jamming|To shelter German prisoners|To store wine for the café|To print false banknotes|Medium|Graveyard Radio Station|German Jamming|Resistance Signals|Secret Transmission|Communication Workaround|1989 Episode|Underground Headquarters
Which German officer mistakes René for the ghost of his supposedly dead twin brother?|Lieutenant Gruber|Colonel von Strohm|Captain Bertorelli|Herr Flick|Easy|Hubert Gruber|René Artois|Ghostly Encounter|Twin Brother Story|Desperate Doings In The Graveyard|1989 Scene|Mistaken Identity
What lifts René above his supposed grave, giving Gruber a fright?|A radio aerial|A church bell rope|A hot-air balloon|A construction crane|Medium|René Artois|Radio Aerial|Graveyard Ghost|Hoisted Above Tomb|Communications Equipment|Series Six|1989 Plot
Which two Gestapo officers pretend to be escaped British airmen in The Gestapo For The High Jump?|Herr Flick and von Smallhausen|Gruber and von Strohm|Bertorelli and Alfonse|Fairfax and Carstairs|Easy|Herr Flick|Von Smallhausen|British Airmen Impersonation|Gestapo Deception|Resistance Infiltration|Series Six|1989 Story
What does the Gestapo hope to infiltrate by pretending to be British airmen?|The French Resistance|The Royal Navy|The Italian High Command|The village council|Easy|Gestapo Infiltration|French Resistance|Airmen Disguise|Undercover Operation|Herr Flick|Von Smallhausen|1989 Plot
In The Gestapo For The High Jump, the Gestapo are tricked into thinking the local Resistance consists of what?|Witches and monsters|German deserters|Travelling actors|French aristocrats|Medium|Witches|Monsters|Gestapo Deception|The High Jump|Resistance Trick|1989 Episode|Supernatural Ruse
Whose soldiers also parachute in disguised as British airmen during the infiltration schemes?|Captain Bertorelli's|Colonel von Strohm's|Lieutenant Gruber's|Officer Crabtree's|Medium|Captain Bertorelli|Italian Soldiers|Parachute Drop|Airmen Disguise|Competing Infiltrators|Series Six|1989 Plot`,
  },
  {
    topic: 'Series Six: a bath, a submarine and captured airmen',
    era: '1989',
    facts: `What unusual object do the British airmen use as cover while travelling along the river in The Nouvion Oars?|An upturned bathtub|A hollow wooden barrel|A small fishing boat|A horse-drawn cart|Easy|The Nouvion Oars|Upturned Bathtub|British Airmen|River Escape|Improvised Transport|1989 Episode|Resistance Plan
What British vessel is waiting in the estuary in The Nouvion Oars?|A submarine|A destroyer|An aircraft carrier|A minesweeper|Medium|British Submarine|River Estuary|The Nouvion Oars|Naval Rendezvous|Airmen Escape|Royal Navy|1989 Plot
What happens to Fairfax and Carstairs after their attempt to reach the submarine fails?|They are arrested by German officers|They arrive safely in England|They join an Italian regiment|They hide aboard a merchant ship|Medium|Fairfax|Carstairs|Failed Escape|German Arrest|The Nicked Airmen|1989 Episode|Airmen Captured
Whose Resistance codename might be revealed if the captured airmen are interrogated?|Nighthawk|Kingfisher|Red Eagle|White Rabbit|Medium|Nighthawk|René Codename|Airmen Interrogation|The Nicked Airmen|Secret Identity|Resistance Security|1989 Story
What does Michelle propose using to smuggle the captured airmen out of German headquarters in The Nicked Airmen?|Coffins|Laundry baskets|Wine casks|Milk churns|Easy|Michelle Dubois|Coffin Escape|The Nicked Airmen|Château Rescue|British Airmen|Funeral Disguise|1989 Plot
Which two characters' rivalry disrupts the coffin escape plan in The Nicked Airmen?|Monsieur Alfonse and Monsieur LeClerc|René and Gruber|Herr Flick and Helga|Yvette and Mimi|Medium|Monsieur Alfonse|Monsieur LeClerc|Duel Challenge|Rescue Disruption|The Nicked Airmen|1989 Story|Comic Rivalry
In The Airmen De-Nicked, the Resistance plans to enter German headquarters wearing what?|Stolen German uniforms|Monks' robes|French police uniforms|Theatrical costumes|Easy|The Airmen De Nicked|Stolen German Uniforms|German Headquarters|Resistance Disguise|Airmen Rescue|1989 Episode|Infiltration
Which German lieutenant suggests that the airmen could be rescued while the General is away?|Hubert Gruber|Kurt von Strohm|Hans Geering|Alberto Bertorelli|Medium|Lieutenant Gruber|Airmen Rescue|Absent General|The Airmen De Nicked|German Lieutenant|1989 Plot|Secret Assistance
To which city are the German authorities considering taking the British airmen for questioning?|Berlin|Munich|Hamburg|Cologne|Medium|Berlin|Airmen Interrogation|German Authorities|The Airmen De Nicked|Intelligence Risk|1989 Story|Transfer Threat`,
  },
  {
    topic: 'Series Six: crooked fences, the wedding and the balloon',
    era: '1989',
    facts: `What valuable painting do the officers hope to sell through a fence in The Crooked Fences?|The Fallen Madonna|The Mona Lisa|The Hay Wain|The Night Watch|Easy|The Crooked Fences|Fallen Madonna|Stolen Painting|Art Dealer|German Officers|Black Market|1989 Plot
In The Crooked Fences, what is a fence in the criminal sense?|A dealer in stolen goods|A border guard|A prison warder|A railway inspector|Medium|Criminal Fence|Stolen Goods|The Crooked Fences|Art Sale|Black Market|Underworld Contact|Wordplay
Which everyday clock contains a valuable gold weight involved in the deal in The Crooked Fences?|A cuckoo clock|A grandfather clock|A carriage clock|An alarm clock|Medium|Cuckoo Clock|Gold Weight|Hidden Treasure|The Crooked Fences|Secret Deal|1989 Story|Valuable Object
What do the anonymous participants in the secret café deal wear over their heads in The Crooked Fences?|Paper bags|Gas masks|Motorcycle helmets|Balaclavas|Easy|Paper Bag Disguises|Anonymous Dealers|Café Meeting|The Crooked Fences|Hidden Identities|1989 Episode|Secret Negotiation
Which two elderly characters marry during Crabtree's Podgeon Pist?|Madame Fanny and Monsieur LeClerc|Edith and Captain Bertorelli|Yvette and René|Helga and Herr Flick|Easy|Madame Fanny|Ernest LeClerc|Wedding Ceremony|Crabtrees Podgeon Pist|Senior Romance|Series Six|1989 Story
What threatens the village of Nouvion if the British airmen are not surrendered?|The General says he will blow it up|The Germans threaten to flood it|The Gestapo plans to evacuate everyone|The army intends to close the café|Medium|General Klinkerhoffen|Nouvion Threat|British Airmen|Crabtrees Podgeon Pist|Village Destruction|1989 Plot|Military Ultimatum
What type of balloon is central to Michelle's final escape scheme in Series Six?|A barrage balloon|A weather balloon|A hot-air racing balloon|An observation balloon|Easy|Barrage Balloon|Michelle Dubois|British Airmen|Escape Plan|Rising To The Occasion|1989 Finale|Aerial Scheme
What gas is used to lift the balloon in Rising To The Occasion?|Helium|Hydrogen|Oxygen|Nitrogen|Easy|Helium|Balloon Inflation|Rising To The Occasion|Gas Cylinders|Resistance Plan|1989 Story|Escape Equipment
The helium cylinders are disguised as which gardening competition entries?|Prize-winning marrows|Giant pumpkins|Prize roses|Oversized cabbages|Medium|Prize Marrows|Helium Cylinders|Garden Show Disguise|Rising To The Occasion|Resistance Supplies|1989 Plot|Concealed Equipment
What unexpected object goes up with the balloon at the end of Series Six?|Fanny and LeClerc's bed|The café's piano|The General's desk|A German armoured car|Easy|Flying Bed|Madame Fanny|Monsieur LeClerc|Rising To The Occasion|Balloon Mishap|Series Six Finale|1989 Cliffhanger
Which general is sent for a psychiatric assessment during the Series Six finale?|Von Klinkerhoffen|Von Flockenstuffen|Von Schmelling|Von Strohm|Medium|General Von Klinkerhoffen|Psychiatric Assessment|Rising To The Occasion|Military Leadership|General Breakdown|1989 Finale|Hospitalisation`,
  },
  {
    topic: 'Series Seven: cast and production changes',
    era: '1991',
    facts: `How many regular episodes were made for Series Seven of 'Allo 'Allo!?|Ten|Eight|Six|Thirteen|Medium|Ten Episodes|Series Seven|1991 Run|Episode Count|Programme Format|BBC One|Season Length
Which actor played Monsieur Ernest LeClerc in Series Seven?|Robin Parkinson|Derek Royle|Jack Haig|Kenneth Connor|Medium|Robin Parkinson|Ernest LeClerc|Cast Replacement|1991 Television|Resistance Forger|Character Casting|Series Seven
Which actor had played Ernest LeClerc in Series Six before Robin Parkinson took over?|Derek Royle|Jack Haig|Roger Kitter|Richard Gibson|Medium|Derek Royle|Ernest LeClerc|Series Six Actor|Recasting|1989 Cast|Resistance Member|Character History
Which actor took over the role of Italian Captain Bertorelli for Series Seven?|Roger Kitter|Gavin Richards|Sam Kelly|Louis Mansi|Medium|Roger Kitter|Captain Bertorelli|Italian Officer|Cast Change|1991 Television|Character Recast|Series Seven
Which actor plays the new General von Flockenstuffen in Series Seven?|Ken Morley|Hilary Minster|Richard Marner|David Janson|Medium|Ken Morley|General Von Flockenstuffen|Guest Actor|German General|Military Leadership|Character Casting|1991 Cast
Which character returns for a guest appearance in the episode Up The Crick Without A Piddle?|Captain Hans Geering|Roger LeClerc|Denise Laroque|Maria the waitress|Medium|Hans Geering|Return Appearance|Up The Crick Without A Piddle|Old Acquaintance|Sam Kelly|1991 Episode|Returning Character
Who co-wrote Series Seven with Jeremy Lloyd after David Croft left the writing team?|Paul Adam|Jimmy Perry|John Sullivan|Roy Clarke|Hard|Paul Adam|Jeremy Lloyd|Writing Partnership|Series Seven|Television Credits|1991 Scripts|Production Change`,
  },
  {
    topic: 'Series Seven: a honeymoon, two generals and England',
    era: '1991',
    facts: `What is the first episode of Series Seven called?|A Quiet Honeymoon|An Almighty Bang|Fleeing Monks|The Spirit Of Nouvion|Medium|A Quiet Honeymoon|Series Seven Premiere|Episode Title|1991 Return|Fanny And LeClerc|Broadcast Order|BBC Comedy
Where are Fanny and LeClerc taken after their unexpected balloon journey ends?|Into German custody|To a British naval base|To a Swiss hospital|To a French convent|Medium|Madame Fanny|Ernest LeClerc|Balloon Landing|German Arrest|A Quiet Honeymoon|1991 Plot|Newlyweds
Which German general takes command while von Klinkerhoffen is in hospital?|Von Flockenstuffen|Von Strohm|Von Schmelling|Von Kessler|Medium|General Von Flockenstuffen|District Command|Von Klinkerhoffen|Hospital Absence|A Quiet Honeymoon|Military Succession|1991 Episode
Which British wartime leader does von Flockenstuffen plan to capture in An Almighty Bang?|Winston Churchill|Neville Chamberlain|Clement Attlee|Anthony Eden|Easy|Winston Churchill|Kidnap Plot|Von Flockenstuffen|An Almighty Bang|British Leader|1991 Story|Daring Raid
Where do the newly married LeClercs become trapped in An Almighty Bang?|Inside a café wall|Inside a railway tunnel|Under a bridge|In a locked cellar|Medium|Fanny And LeClerc|Café Wall|Secret Compartment|An Almighty Bang|Newlyweds|1991 Episode|Concealed Space
What unusual objects help free Fanny and LeClerc from their hiding place?|Dynamite candles|A mechanical saw|A steam drill|Fireworks in bottles|Medium|Dynamite Candles|Secret Compartment|Rescue|An Almighty Bang|LeClerc Wedding|1991 Plot|Explosive Trick
In Fleeing Monks, what are the British airmen disguised as for another escape attempt?|Monks|Nuns|German officers|French farmers|Easy|Fleeing Monks|Monk Disguise|British Airmen|Religious Robes|Escape Scheme|1991 Episode|Resistance Plan
What honour is René desperate to avoid in Fleeing Monks?|A medal for collaboration|A military knighthood|A police promotion|An academic prize|Medium|René Artois|Collaboration Medal|Fleeing Monks|Dangerous Honour|Resistance Suspicion|1991 Plot|German Recognition
Who accidentally travels to England instead of the British airmen?|René and Edith|Yvette and Mimi|Fanny and LeClerc|Gruber and von Strohm|Easy|René Artois|Edith Artois|Unexpected Flight|England Journey|Fleeing Monks|1991 Story|Mistaken Passengers
Which British figure honours René and Edith after their unexpected arrival in England?|Winston Churchill|King George VI|Montgomery|Clement Attlee|Medium|Winston Churchill|René And Edith|British Medals|Up The Crick Without A Piddle|1991 Episode|London Visit|Wartime Honours
Which familiar German character do René and Edith meet in England in Up The Crick Without A Piddle?|Hans Geering|Herr Flick|Captain Bertorelli|Von Flockenstuffen|Medium|Hans Geering|René And Edith|Unexpected Reunion|London|Up The Crick Without A Piddle|1991 Story|Former German Captain`,
  },
  {
    topic: 'Series Seven: the newspaper, the painting and Spain',
    era: '1991',
    facts: `What local institution is reopened for German propaganda in The Gestapo Ruins A Picnic?|The town newspaper|The village cinema|The public library|The railway museum|Easy|Town Newspaper|German Propaganda|The Gestapo Ruins A Picnic|Nouvion|Media Control|1991 Plot|Occupation Press
Who is made the reluctant editor of Nouvion's reopened newspaper?|René Artois|Officer Crabtree|Monsieur Alfonse|Herr Flick|Easy|René Artois|Newspaper Editor|Propaganda Appointment|The Gestapo Ruins A Picnic|Forced Role|1991 Episode|Press Control
Which German lieutenant supervises René's newspaper work?|Gruber|Bertorelli|Von Smallhausen|Hans Geering|Medium|Hubert Gruber|Newspaper Supervision|René Artois|Propaganda Paper|German Occupation|Series Seven|1991 Plot
What wooden structures are proposed as parts for a raft to help the airmen escape in The Gestapo Ruins A Picnic?|Telegraph poles|Railway sleepers|Park benches|Church pews|Medium|Telegraph Poles|Raft Construction|British Airmen|The Gestapo Ruins A Picnic|Resistance Plan|1991 Story|Improvised Transport
Which local title does the newspaper offer in The Spirit Of Nouvion?|Spirit of Nouvion|Queen of the Café|Miss Occupied France|Lady of the Château|Easy|Spirit Of Nouvion|Local Newspaper|Beauty Competition|Village Honours|1991 Episode|Publicity Campaign|Contest Title
What does Michelle order René to retrieve from Herr Flick's safe in The Spirit Of Nouvion?|The Fallen Madonna|A coded radio set|A German battle map|The café deeds|Medium|Michelle Dubois|Herr Flick Safe|Fallen Madonna|Resistance Funding|The Spirit Of Nouvion|1991 Plot|Artwork Theft
Why does the Resistance want to steal the painting from Herr Flick's safe?|It needs money|It needs a map to London|It needs a new radio licence|It wants to furnish the café|Medium|Resistance Funding|Fallen Madonna|Herr Flick Safe|Michelle Dubois|The Spirit Of Nouvion|1991 Story|Financial Shortage
To which country does René plan to flee with the painting in Leg It To Spain!?|Spain|Portugal|Switzerland|Belgium|Easy|Spain|René Escape|Fallen Madonna|Leg It To Spain|Flight From War|1991 Episode|European Destination
Who arrives at the café and seizes the painting during René's proposed escape to Spain?|Colonel von Strohm|General von Flockenstuffen|Officer Crabtree|Captain Hans Geering|Medium|Colonel Von Strohm|Painting Seized|René Artois|Leg It To Spain|Fallen Madonna|1991 Plot|Failed Escape
Inside what are the British airmen hidden during another escape scheme in Leg It To Spain!?|Wine barrels|Empty oil drums|Bales of hay|Laundry baskets|Easy|Wine Barrels|British Airmen|Resistance Concealment|Leg It To Spain|Château Cellars|1991 Story|Failed Escape`,
  },
  {
    topic: 'Series Seven: the Spirit, the sewers and the fair',
    era: '1991',
    facts: `Who is crowned the Spirit of Nouvion before the events of Prior Engagements?|Edith Artois|Yvette Carte Blanche|Helga Geerhart|Mimi Labonq|Easy|Edith Artois|Spirit Of Nouvion|Village Contest|Newspaper Publicity|Prior Engagements|1991 Story|Beauty Title
Whom does General von Klinkerhoffen order Edith to marry in Prior Engagements?|Captain Bertorelli|Lieutenant Gruber|Monsieur Alfonse|Herr Flick|Easy|Edith Artois|Captain Bertorelli|Forced Wedding|Prior Engagements|German Italian Alliance|1991 Plot|Marriage Scheme
What is the General's aim in promoting Edith's proposed marriage to Captain Bertorelli?|To publicise harmony between occupiers and locals|To raise funds for the Resistance|To secure a British passport|To close the town newspaper|Medium|Mixed Marriage|German Propaganda|Edith Artois|Captain Bertorelli|Prior Engagements|1991 Story|Public Relations
Where do Fairfax and Carstairs become trapped after an escape plan goes wrong in Soup And Sausage?|In the sewers beneath the town square|In the café wine cellar|Under a railway platform|In the church bell tower|Easy|Fairfax|Carstairs|Town Square Sewers|Soup And Sausage|British Airmen|1991 Plot|Trapped Escapees
What problem makes it difficult to lift the grate above the trapped airmen?|Its hinges have rusted|It has been welded shut|A lorry is parked on it|The lock has been changed|Medium|Rusty Grate|Sewer Escape|Soup And Sausage|Town Square|British Airmen|1991 Episode|Mechanical Problem
What old vehicle is part of the plan to rescue the airmen in Soup And Sausage?|An ice cream van|A fire engine|A milk float|A school bus|Easy|Ice Cream Van|Sewer Rescue|René Artois|Soup And Sausage|Distraction|1991 Story|Village Square
Which food is banned in Nouvion before the Series Seven finale?|Ice cream|Bread|Chocolate|Cheese|Medium|Ice Cream Ban|Nouvion|René Of The Gypsies|Street Trading|Failed Rescue|1991 Finale|Village Order
What public event does the Resistance plan in René Of The Gypsies?|A gypsy fair|A football match|A military parade|A church concert|Easy|Gypsy Fair|Resistance Plan|Village Square|René Of The Gypsies|Airmen Rescue|Series Seven Finale|1991 Episode
What animal unexpectedly disrupts the fair arrangement in René Of The Gypsies?|A black cat|A white horse|A trained dog|A carrier pigeon|Medium|Black Cat|Gypsy Fair|Cancelled Appearance|René Of The Gypsies|1991 Plot|Finale Mishap|Animal Interference
What is the title of the final regular episode of 'Allo 'Allo! Series Seven?|René Of The Gypsies|Soup And Sausage|Prior Engagements|Leg It To Spain!|Medium|René Of The Gypsies|Series Seven Finale|1991 Broadcast|Final Episode|Episode Title|Ten Episode Series|BBC Sitcom`,
  },
];

const FIRST_ID = 13490;
let index = 0;

const questions = groups.flatMap(group =>
  group.facts.trim().split('\n').map(line => {
    const parts = line.trim().split('|').map(part => part.trim());
    const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');

    if (parts.length !== 13) {
      throw new Error(
        `Expected seven specialist tags at ${id}; got ${parts.length - 6}`
      );
    }

    const [
      question, correctAnswer, wrong1, wrong2, wrong3,
      difficulty, ...specificTags
    ] = parts;

    const wrongAnswers = [wrong1, wrong2, wrong3];

    if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
      throw new Error(`Missing question or answer at ${id}`);
    }

    if (
      new Set([correctAnswer, ...wrongAnswers]
        .map(answer => answer.toLowerCase())).size !== 4
    ) {
      throw new Error(`Repeated answer option at ${id}`);
    }

    if (
      !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
      specificTags.length !== 7 ||
      specificTags.some(tag => !tag)
    ) {
      throw new Error(`Invalid difficulty or specialist tags at ${id}`);
    }

    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    const tags = [...new Map([
      'British Television',
      'Television',
      "'Allo 'Allo!",
      'BBC One',
      'British Sitcom',
      'Wartime Comedy',
      'Second World War',
      'Occupied France',
      group.era,
      group.topic,
      correctAnswer,
      ...specificTags
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

const EXPECTED_COUNT = 71;

if (questions.length !== EXPECTED_COUNT) {
  throw new Error(
    `Expected ${EXPECTED_COUNT} questions; got ${questions.length}`
  );
}

if (
  questions[0].id !== 'tv_13490' ||
  questions[questions.length - 1].id !== 'tv_13560'
) {
  throw new Error('Unexpected question ID range');
}

if (
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length
) {
  throw new Error('Duplicate question IDs or wording');
}

if (questions.some(q =>
  q.category !== 'Television' ||
  q.answers.length !== 4 ||
  !q.answers.includes(q.correctAnswer) ||
  q.tags.length < 15 ||
  q.tags.some(tag => !tag) ||
  q.dailyEligible !== true
)) {
  throw new Error('Incomplete exported question metadata');
}

module.exports = questions;
