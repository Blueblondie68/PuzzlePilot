
  // quiz_pack361.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television: Jeeves and Wooster (ITV) / Citizen Smith (BBC One).
  // Both outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Checked against British Comedy Guide cast, production and episode guides.
  // Seven question-specific tags per question, in addition to programme metadata.
  // Full WordPad-ready CommonJS module. No external dependencies.

  const FIRST_ID = 17830;

  // question | correct answer | three wrong answers | difficulty | seven bespoke tags
  const jeevesFacts = `Who played the valet Jeeves in Jeeves and Wooster?|Stephen Fry|Hugh Laurie|Robert Daws|Martin Clunes|Easy|Stephen Fry|Jeeves Character|Valet Role|Lead Performer|Casting|Period Comedy|ITV Series
  Who played Bertie Wooster in Jeeves and Wooster?|Hugh Laurie|Stephen Fry|Richard Garnett|Robert Daws|Easy|Hugh Laurie|Bertie Wooster|Lead Actor|Young Aristocrat|Fry And Laurie|Casting|Main Character
  Which broadcaster originally showed Jeeves and Wooster?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Original Network|1990 First Broadcast|British Comedy Drama|Television Channel|Series Premiere|Broadcast History
  In which year did Jeeves and Wooster first air on television?|1990|1985|1993|1998|Easy|1990 Premiere|First Series|April Broadcast|ITV Schedule|Television Timeline|Programme Launch|Period Comedy
  How many television series of Jeeves and Wooster were produced?|Four|Three|Five|Six|Medium|Four Series|1990 To 1993|Production Run|Season Count|British Television|Sitcom History|Series Total
  How many episodes were made across the four series of Jeeves and Wooster?|23|18|28|32|Medium|Twenty Three Episodes|Total Episode Count|Four Series|ITV Programme Catalogue|Original Run|1990s Television|Series History
  Which author created the Jeeves and Wooster characters?|P. G. Wodehouse|Evelyn Waugh|Agatha Christie|Kingsley Amis|Easy|Jeeves Stories|Original Books|Literary Characters|Source Author|British Novelist|Fictional Valet|Television Adaptation
  Who adapted P. G. Wodehouse's stories for the TV scripts?|Clive Exton|John Sullivan|Eric Chappell|Roy Clarke|Medium|Clive Exton|Adapted Screenplays|Wodehouse Stories|Television Writer|Script Credits|ITV Production|Period Dialogue
  What is Jeeves's occupation in the series?|Valet|Butler at a hotel|Solicitor|Chauffeur|Easy|Jeeves|Gentlemans Personal Valet|Bertie Wooster|Domestic Service|Occupation|Problem Solver|Period Household
  Who portrayed Aunt Agatha during the first three series?|Mary Wimbush|Elizabeth Spriggs|Brenda Bruce|Jean Heywood|Medium|Mary Wimbush|Aunt Agatha|Series One To Three|Character Casting|Wooster Relative|Actress Role|Family Pressure
  Which actress took over the role of Aunt Agatha in series four?|Elizabeth Spriggs|Mary Wimbush|Brenda Bruce|Fiona Gillies|Medium|Elizabeth Spriggs|Aunt Agatha|Series Four|1993 Cast Change|Supporting Actress|Wooster Family|Recasting
  Who played Aunt Dahlia in the first series?|Brenda Bruce|Jean Heywood|Mary Wimbush|Elizabeth Morton|Medium|Brenda Bruce|Aunt Dahlia|First Series|1990 Casting|Wooster Relative|Actress Role|Supporting Character
  Who portrayed Aunt Dahlia in the fourth series?|Jean Heywood|Brenda Bruce|Elizabeth Spriggs|Diana Blackburn|Hard|Jean Heywood|Aunt Dahlia|Fourth Series|1993 Casting|Supporting Actress|Wooster Aunt|Cast Change
  Which actor played Bertie's friend Tuppy Glossop?|Robert Daws|Richard Dixon|Richard Braine|Martin Clunes|Medium|Robert Daws|Tuppy Glossop|Bertie Friend|Recurring Character|Actor Casting|Romantic Entanglements|Supporting Cast
  Who played Gussie Fink-Nottle in the first two series?|Richard Garnett|Richard Braine|Richard Dixon|Robert Daws|Hard|Richard Garnett|Gussie Fink Nottle|Series One And Two|Original Actor|Character Casting|1990 And 1991|Newt Enthusiast
  Which actor took over as Gussie Fink-Nottle in series three and four?|Richard Braine|Richard Garnett|Richard Dixon|Martin Clunes|Hard|Richard Braine|Gussie Fink Nottle|Series Three And Four|Recast Role|1992 And 1993|Character Casting|Newt Enthusiast
  Which actor played Barmy Fotheringay Phipps in the second series?|Martin Clunes|Hugh Laurie|Robert Daws|Richard Dixon|Medium|Martin Clunes|Barmy Fotheringay Phipps|Second Series|1991 Cast|Bertie Friend|Actor Role|Recurring Character
  Which actress portrayed Madeline Bassett during series three and four?|Elizabeth Morton|Diana Blackburn|Francesca Folan|Fiona Gillies|Hard|Elizabeth Morton|Madeline Bassett|Third And Fourth Series|1992 And 1993 Cast|Romantic Complication|Actress Casting|Recurring Character
  Who composed the music for the television series Jeeves and Wooster?|Anne Dudley|Ronnie Hazlehurst|Howard Goodall|Mike Batt|Medium|Anne Dudley|Composer Credit|TV Soundtrack|Period Music|Programme Production|Theme Music|Musical Score
  Who directed the first television series of Jeeves and Wooster?|Robert Young|Simon Langton|Ferdinand Fairfax|Ray Butt|Hard|Robert Young|Series One Director|1990 Production|Television Direction|Programme Crew|Director Credit|ITV Series
  Who directed the third and fourth television series?|Ferdinand Fairfax|Robert Young|Simon Langton|Brian Eastman|Hard|Ferdinand Fairfax|Series Three Director|Series Four Director|1992 To 1993|Production Credits|ITV Episodes|Director Role
  What sporting event precedes Bertie's court appearance in the first episode?|The Boat Race|The Grand National|The FA Cup Final|The Henley Regatta|Medium|Series One Episode One|Boat Race Celebrations|Bertie In Court|1990 Opening|Jeeves Arrival|Rowdy Festivities|Legal Trouble
  Which character comes to Bertie's aid as his new valet in the opening episode?|Jeeves|Tuppy Glossop|Oofy Prosser|Gussie Fink-Nottle|Easy|Jeeves Arrival|Series Premiere|New Valet|Bertie Wooster|Court Trouble|First Episode|1990 Story
  Whose sense of fun attracts Bertie in the first-series episode featuring Barmy Fotheringay Phipps?|Bobbie Wickham|Madeline Bassett|Aunt Agatha|Florence Craye|Medium|Bobbie Wickham|Barmy Fotheringay Phipps|Series One Episode Two|Bertie Romance|Practical Joke|Potential Bride|1990 Story
  Which village hosts the sports day attended by Bertie in series one?|Twing|Totleigh|Brinkley|Deverill|Medium|Twing|Village Sports Day|Series One Episode Three|Lord Wickhammersley|Country House|1990 Episode|Local Competition
  What small gambling game nearly costs Lord Wickhammersley an entire wing of his home?|Shove-ha'penny|Poker|Roulette|Cribbage|Hard|Lord Wickhammersley|Shove Halfpenny|Gambling Wager|Twing House|Series One Episode Three|Lady Wickhammersley|East Wing
  Which creatures does Gussie Fink-Nottle devote himself to studying?|Newts|Butterflies|Parrots|Beetles|Easy|Gussie Fink Nottle|Newts|Natural History Interest|Country Life|Character Hobby|Series One|Amateur Naturalist
  With which woman is Gussie Fink-Nottle in love in the first series?|Madeline Bassett|Florence Craye|Bobbie Wickham|Pauline Stoker|Medium|Gussie Fink Nottle|Madeline Bassett|Unrequited Affection|Series One Episode Four|Romantic Plot|Bertie Advice|Marriage Plans
  Which alarm does Bertie contemplate using to resolve a muddle at Brinkley Court?|A fire bell|A burglar alarm|A church bell|An air-raid siren|Medium|Brinkley Court|Fire Bell|Series One Episode Five|Romantic Confusion|Bertie Wooster|Rescue Scheme|1990 Episode
  What antique object does Aunt Dahlia want Bertie to acquire in the second-series opener?|A cow-shaped silver creamer|A gold pocket watch|A porcelain teapot|A bronze horse statue|Medium|Aunt Dahlia|Cow Creamer|Series Two Premiere|Uncle Tom|Antique Collecting|1991 Episode|Unusual Silverware
  Which instrument leads to a disagreement between Jeeves and Bertie in series two?|Trumpet|Banjo|Violin|Saxophone|Medium|Bertie Trumpet|Jeeves Objections|Series Two Episode Four|Musical Practice|Valet Resigns|Chuffy Story|1991 Episode
  In series two, what is the nationality of the heiress involved in Chuffy's romantic complications?|American|French|Italian|Australian|Medium|Pauline Stoker|American Heiress|Chuffy|Love Triangle|Series Two|Country Cottage|1991 Story
  To which American city do Jeeves and Bertie travel at the start of series three?|New York|Chicago|Los Angeles|Boston|Easy|New York|Manhattan|Series Three Premiere|American Episodes|Bertie Wooster|Jeeves Travels|1992 Setting
  Whom does Bertie impersonate during the visit to Deverill Hall in series three?|Gussie Fink-Nottle|Tuppy Glossop|Bingo Little|Oofy Prosser|Medium|Deverill Hall|Gussie Impersonation|Series Three Episode Four|Bertie Wooster|Mistaken Identity|Aunt Agatha|1992 Episode
  Whose memoirs is Bertie instructed to retrieve in series three?|Sir Watkyn Bassett's|Aunt Dahlia's|Lord Wickhammersley's|Jeeves's|Medium|Sir Watkyn Bassett|Unwanted Memoirs|Series Three Episode Five|Florence Craye|Totleigh Towers|Document Retrieval|1992 Story
  Which woman is Bertie attempting to court when he returns to New York in series four?|Gwladys Pendlebury|Madeline Bassett|Aunt Dahlia|Honoria Glossop|Medium|Gwladys Pendlebury|Young Artist|Series Four Premiere|New York Romance|Bertie Wooster|1993 Episode|American Visit
  Which character is Florence Craye's jealous former fiancé in the final series?|Stilton Cheesewright|Gussie Fink-Nottle|Chuffy Chuffnell|Oofy Prosser|Medium|Stilton Cheesewright|Florence Craye|Romantic Rival|Series Four|Bertie Engagement|1993 Episode|Jealous Former Fiance
  What object is believed to be cursed at Totleigh Towers in the penultimate episode?|A small statuette|An antique clock|A diamond brooch|An oil painting|Medium|Cursed Statuette|Totleigh Towers|Sir Watkyn Bassett|Stiffy Byng|Series Four Episode Five|1993 Story|Removal Plot
  What dietary change does Madeline demand of Gussie in the fourth series?|Become vegan|Eat only fish|Avoid all fruit|Stop drinking tea|Medium|Madeline Bassett|Gussie Fink Nottle|Vegan Demand|Series Four Episode Five|Romantic Disagreement|Dietary Change|1993 Episode
  Which political event is taking place at Totleigh during the final episode of Jeeves and Wooster?|A by-election|A general election count|A mayoral inauguration|A party leadership vote|Medium|Totleigh Towers|By Election Fever|Series Four Finale|1993 Episode|Madeline And Spode|Political Campaign|Last Episode`;

  const citizenFacts = `Who played the would-be revolutionary Wolfie Smith in Citizen Smith?|Robert Lindsay|Mike Grady|Tony Millan|George Sweeney|Easy|Robert Lindsay|Wolfie Smith|Leading Actor|Revolutionary Character|BBC Casting|Tooting|Main Role
  Who wrote the BBC sitcom Citizen Smith?|John Sullivan|Eric Chappell|Ray Galton|Roy Clarke|Easy|John Sullivan|Programme Writer|Sitcom Creator|BBC Scripts|1977 Debut|British Comedy|Television Credits
  What was the name of Wolfie Smith's revolutionary group?|Tooting Popular Front|Brixton Liberation Army|London Freedom League|Southwark People's Party|Easy|Tooting Popular Front|Revolutionary Movement|Wolfie Smith|South London|Political Activism|TPF|Series Premise
  In which part of London is Citizen Smith mainly set?|Tooting|Hampstead|Greenwich|Chelsea|Easy|Tooting|South London|Wolfie Smith|Local Neighbourhood|Setting|Tooting Popular Front|BBC Sitcom
  Which BBC channel originally broadcast Citizen Smith?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Broadcast|1977 Launch|Television Network|British Sitcom|Programme Premiere|BBC Schedule
  In which year did the Citizen Smith pilot first air?|1977|1974|1979|1982|Easy|1977 Pilot|April First Broadcast|Comedy Special|BBC Programme|Debut Year|Series Origin|Television Timeline
  In which year did Citizen Smith finish its original television run?|1980|1977|1982|1985|Medium|1980 Ending|Final Series|Fourth Run|BBC Television|Programme History|End Of Original Run|Sitcom Timeline
  How many regular series of Citizen Smith were made?|Four|Two|Three|Five|Medium|Four Series|1977 To 1980|Series Count|BBC Comedy|Programme Catalogue|Original Television Run|Production History
  How many Citizen Smith television episodes were made including the pilot?|30|24|28|36|Medium|Thirty Episodes|Pilot Included|Four Series|BBC Archive|Total Count|Programme History|Original Run
  Who portrayed Wolfie's girlfriend Shirley in the first two series?|Cheryl Hall|Hilda Braid|Susie Baker|Janine Duvitski|Easy|Cheryl Hall|Shirley|Wolfie Girlfriend|Series One And Two|Lead Actress|Character Casting|Romance
  Which actor played Wolfie's friend Ken?|Mike Grady|Tony Millan|Stephen Greif|Robert Lindsay|Medium|Mike Grady|Ken|Wolfie Flatmate|Tooting Popular Front|Supporting Actor|Series Regular|Casting
  Who played Wolfie's fellow activist Tucker?|Tony Millan|George Sweeney|Mike Grady|Tony Steedman|Medium|Tony Millan|Tucker|TPF Member|Wolfie Comrade|Actor Casting|Supporting Role|Recurring Character
  Which actor portrayed the revolutionary's friend Speed?|George Sweeney|Mike Grady|Robert Lindsay|Stephen Greif|Medium|George Sweeney|Speed|Prison Storylines|Tooting Popular Front|Actor Character|Recurring Friend|Sitcom Cast
  Who played Shirley's mother, known as Mum?|Hilda Braid|Cheryl Hall|Susie Baker|Rosalind Elliot|Medium|Hilda Braid|Mum|Shirley Parent|Family Household|Character Actress|BBC Cast|Recurring Character
  Which actor portrayed Shirley's father during the first two series?|Peter Vaughan|Tony Steedman|Artro Morris|Robert Lindsay|Medium|Peter Vaughan|Dad|First Two Series|Shirley Father|Original Regular Cast|Character Casting|Disapproving Parent
  Who played Dad during the third and fourth series?|Tony Steedman|Peter Vaughan|Mike Grady|Stephen Greif|Hard|Tony Steedman|Dad|Third And Fourth Series|Recast Father|Shirley Household|Actor Role|1979 To 1980
  Which actor played Harry Fenning in the first three series?|Stephen Greif|Robert Lindsay|Mike Grady|Tony Millan|Hard|Stephen Greif|Harry Fenning|Recurring Character|First Three Series|Actor Casting|Wolfie Associate|British Sitcom
  Which song provided Citizen Smith's opening title music?|The Red Flag|The Internationale|Jerusalem|Glorious Day|Medium|The Red Flag|Opening Credits|Theme Music|Robert Lindsay Vocal|Revolutionary Anthem|BBC Soundtrack|Programme Titles
  What was the title of the song used over Citizen Smith's closing credits?|Glorious Day|The Red Flag|Power to the People|Tooting Forever|Medium|Glorious Day|Closing Credits|John Sullivan Song|Robert Lindsay Singer|TV Theme|Programme Music|1970s Sitcom
  Which famous phrase was Wolfie Smith's rallying cry?|Power to the People!|Workers of the World, Relax!|Make Tooting Great Again!|The Revolution Can Wait!|Easy|People Power Slogan|Wolfie Smith|Political Slogan|Revolutionary Cry|Catchphrase|Tooting Popular Front|Audience Recognition
  What was the name of the pub frequented by the Tooting Popular Front?|The Vigilante|The Red Lion|The Lamb and Flag|The Nags Head|Medium|The Vigilante|Tooting Pub|TPF Meetings|Wolfie Smith|Regular Hangout|Local Setting|Series Location
  What item is featured in the 1977 Citizen Smith pilot's solution to Wolfie's girlfriend trouble?|A fake crocodile-tooth necklace|A silver locket|A diamond engagement ring|A gold watch|Medium|Citizen Smith Pilot|Crocodile Tooth Necklace|Wolfie Smith|Shirley|1977 Comedy Special|Romantic Trouble|First Appearance
  What does Shirley mistake Wolfie's jewellery gift for in Crocodile Tears?|A marriage proposal|A birthday present|An apology for lost keys|A farewell gift|Medium|Crocodile Tears|Shirley|Wolfie Smith|Jewellery Gift|First Regular Episode|Marriage Misunderstanding|1977 Story
  Whose parents does Wolfie meet in Guess Who's Coming To Dinner?|Shirley's|Ken's|Tucker's|Speed's|Easy|Guess Whos Coming To Dinner|Shirley Parents|Wolfie Smith|Family Meeting|First Series|1977 Episode|Dad Disapproves
  In Abide With Me, what happens to the flat shared by Wolfie and Ken?|They are evicted|It is destroyed by fire|They inherit it|It is converted into a shop|Medium|Abide With Me|Wolfie And Ken|Eviction|Shared Flat|First Series|Housing Problem|1977 Episode
  In The Weekend, whose girlfriend does Ken fall for?|Speed's|Tucker's|Wolfie's|Harry Fenning's|Medium|The Weekend|Ken|Speed Girlfriend|Romantic Trouble|First Series|1977 Episode|Prison Connection
  How many votes does Wolfie receive in the by-election before The Hostage?|Six|Sixteen|Sixty|Six Hundred|Medium|The Hostage|Six Votes|By Election|Wolfie Smith|Conservative Opponent|First Series|Political Defeat
  What kind of shop employs Shirley in The Path Of True Love?|A record shop|A bookshop|A bakery|A chemist's|Medium|The Path Of True Love|Shirley|Record Shop|Customer Flirtation|Series One|1977 Episode|Workplace
  What artistic pastime occupies Ken in But Is It Art?|Pavement art|Portrait photography|Pottery|Sculpture|Medium|But Is It Art|Ken|Pavement Artist|Creative Pastime|Series One|1977 Episode|Money Making
  Which collectible brings the TPF unexpected hope of money in A Story For Christmas?|Misprinted stamps|Rare coins|Vintage comic books|Antique postcards|Medium|A Story For Christmas|Misprinted Stamps|Tucker|1977 Christmas Special|Valuable Collectibles|Money Problems|Festive Episode
  Who is coming out of prison at the start of the second series?|Speed|Ken|Tucker|Wolfie|Easy|Speeds Return|Speed|Prison Release|Second Series Premiere|1978 Episode|Wolfie Friend|New Trouble
  Whose job loss does Wolfie try to reverse in Rebel Without A Pause?|Shirley's father|Ken's mother|Tucker's brother|Harry Fenning|Medium|Rebel Without A Pause|Dad Job Loss|Wolfie Intervention|Shirley Family|Series Two|1978 Story|Employment Dispute
  What type of premises is burgled in The Tooting Connection?|An electronics warehouse|A bank|A jeweller's shop|A music studio|Medium|The Tooting Connection|Electronics Warehouse|Burglary|Speed|Harry Fenning|Series Two|1978 Episode
  What career does Wolfie dream about after meeting an American record producer in Rock Bottom?|Rock musician|Professional boxer|Film director|Football manager|Medium|Rock Bottom|American Record Producer|Wolfie Smith|Musical Ambition|Former School Friend|Series Two|1979 Episode
  Where does Wolfie threaten to jump from in Don't Look Down?|A pub roof|A railway bridge|A tower block|A church steeple|Medium|Dont Look Down|Pub Roof|Wolfie Crisis|Shirley Leaves|Series Three Premiere|1979 Story|Threatened Jump
  What development is proposed on grassland in the episode Only Fools And Horses?|A squash court|A supermarket|A car park|A leisure pool|Medium|Only Fools And Horses Episode|Squash Court|Grassland|Eviction Protest|Town Hall|Series Three|1979 Story
  What do Wolfie and Ken declare their flat to be in We Shall Not Be Moved?|An official squat|A registered museum|A foreign embassy|An independent country|Medium|We Shall Not Be Moved|Squat Declaration|Flat Eviction|Wolfie And Ken|Series Three|Housing Protest|1979 Episode
  What military vehicle does Wolfie unexpectedly bring back from a countryside trip in The Glorious Day?|A tank|An armoured train|A helicopter|A submarine|Easy|The Glorious Day|Military Tank|Countryside Retreat|Tooting Popular Front|Series Three Finale|Revolution Scheme|1979 Episode
  Where are the Tooting Popular Front members being held at the start of series four?|An open prison|A naval base|A psychiatric hospital|A boarding school|Medium|Bigger Than Guy Fawkes|Open Prison|TPF In Custody|Series Four Premiere|1980 Episodes|Revolutionary Failure|Prison Setting
  What civic duty is Wolfie called to perform in The Letter Of The Law?|Jury service|Election counting|Traffic patrol|Census interviewing|Medium|The Letter Of The Law|Jury Service|Wolfie Smith|Ronnie Lynch|Series Four|1980 Story|Court Case
  Who forces Speed to help with an escape in the fourth-series episode Prisoners?|Mactaggart|Harry Fenning|Tofkin|Ronnie Lynch|Hard|Prisoners Episode|Mactaggart|Speed|Forced Escape|Armed Hostage|Series Four|Scottish Criminal
  What proposed road scheme does Wolfie discover in the series finale Sweet Sorrow?|A bypass through Tooting|A motorway tunnel under the Thames|A new bridge over the river|A tramline through the park|Medium|Sweet Sorrow|Tooting Bypass|Secret Council Plans|Wolfie Smith|Series Four Finale|Press Leak|1980 Ending`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, facts) {
    for (const line of facts.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) throw new Error('Pack 361: field count incorrect in ' + id);
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(v => !v)) {
        throw new Error('Pack 361: blank entry in ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
          new Set(bespokeTags.map(normalise)).size !== 7) {
        throw new Error('Pack 361: incorrect difficulty or bespoke tags in ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 361: repeated answer choice in ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...bespokeTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('Jeeves and Wooster', ['ITV', '1990-1993', 'P. G. Wodehouse', 'Literary Adaptation', 'Period Comedy'], jeevesFacts);
  addProgramme('Citizen Smith', ['BBC One', '1977-1980', 'John Sullivan', 'Political Comedy', 'Tooting Popular Front'], citizenFacts);

  // Validate the actual exported questions, not merely the source text.
  if (!questions.length || questions[0].id !== 'tv_17830' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        !Array.isArray(q.answers) || q.answers.length !== 4 ||
        !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !Array.isArray(q.tags) || q.tags.length < 14 ||
        new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true)) {
    throw new Error('Pack 361: exported question validation failed');
  }

  
// Pack 361 narrative audit (22 Nov 2026): preserve the 82 original IDs.
// New questions are checked against British Comedy Guide episode summaries.
const auditAdditions = [
  {
    "id": "tv_39182",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which relative insists that Bertie should marry in the opening episode of Jeeves and Wooster?",
    "answers": [
      "Aunt Dahlia",
      "Madeline Bassett",
      "Aunt Agatha",
      "Bobbie Wickham"
    ],
    "correctAnswer": "Aunt Agatha",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E01",
      "Story detail: Aunt Pressures Bertie To Marry",
      "Answer fact: Aunt Agatha",
      "Plot action: Aunt Pressures Bertie To Marry",
      "1990s Television",
      "Character storyline: Aunt Pressures Bertie To Marry",
      "Episode context: S1E01",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39183",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What kind of performer is Tuppy dating when Bertie tries to interfere in Jeeves and Wooster?",
    "answers": [
      "A ballet dancer",
      "A stage magician",
      "A radio comedian",
      "An opera singer"
    ],
    "correctAnswer": "An opera singer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E02",
      "Story detail: Tuppy Opera Singer Relationship",
      "Answer fact: An opera singer",
      "Plot action: Tuppy Opera Singer Relationship",
      "1990s Television",
      "Character storyline: Tuppy Opera Singer Relationship",
      "Episode context: S1E02",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39184",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whose missing dog creates more trouble for Bertie during Jeeves and Wooster series one?",
    "answers": [
      "Aunt Agatha's",
      "Aunt Dahlia's",
      "Gussie Fink-Nottle's",
      "Jeeves's"
    ],
    "correctAnswer": "Aunt Agatha's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E02",
      "Story detail: Aunt Agatha Loses Her Dog",
      "Answer fact: Aunt Agatha's",
      "Plot action: Aunt Agatha Loses Her Dog",
      "1990s Television",
      "Character storyline: Aunt Agatha Loses Her Dog",
      "Episode context: S1E02",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39185",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whose plan to marry a young waitress infuriates Aunt Agatha in Jeeves and Wooster?",
    "answers": [
      "Tuppy Glossop's",
      "Uncle George's",
      "Bingo Little's",
      "Gussie Fink-Nottle's"
    ],
    "correctAnswer": "Uncle George's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E03",
      "Story detail: Uncle George Waitress Marriage",
      "Answer fact: Uncle George's",
      "Plot action: Uncle George Waitress Marriage",
      "1990s Television",
      "Character storyline: Uncle George Waitress Marriage",
      "Episode context: S1E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39186",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What was the former job of the woman Bertie unexpectedly reunites with Uncle George in Jeeves and Wooster?",
    "answers": [
      "Nurse",
      "Schoolteacher",
      "Barmaid",
      "Actress"
    ],
    "correctAnswer": "Barmaid",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E03",
      "Story detail: Uncle George Former Barmaid Romance",
      "Answer fact: Barmaid",
      "Plot action: Uncle George Former Barmaid Romance",
      "1990s Television",
      "Character storyline: Uncle George Former Barmaid Romance",
      "Episode context: S1E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39187",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Who is secretly manipulating the competitions at Twing's sports day in Jeeves and Wooster?",
    "answers": [
      "A visiting policeman",
      "The village vicar",
      "Lord Wickhammersley's valet",
      "A local bookmaker"
    ],
    "correctAnswer": "A local bookmaker",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E03",
      "Story detail: Bookmaker Rigged Sports Day",
      "Answer fact: A local bookmaker",
      "Plot action: Bookmaker Rigged Sports Day",
      "1990s Television",
      "Character storyline: Bookmaker Rigged Sports Day",
      "Episode context: S1E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39188",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whose household cook quits while Bertie attempts to fix everyone's romance problems in Jeeves and Wooster?",
    "answers": [
      "Aunt Dahlia's",
      "Aunt Agatha's",
      "Florence Craye's",
      "Bobbie Wickham's"
    ],
    "correctAnswer": "Aunt Dahlia's",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E04",
      "Story detail: Aunt Dahlia Cook Quits",
      "Answer fact: Aunt Dahlia's",
      "Plot action: Aunt Dahlia Cook Quits",
      "1990s Television",
      "Character storyline: Aunt Dahlia Cook Quits",
      "Episode context: S1E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39189",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which acclaimed cook does Jeeves try to persuade to return to Brinkley Court in Jeeves and Wooster?",
    "answers": [
      "Pierre",
      "Anatole",
      "Escoffier",
      "Auguste"
    ],
    "correctAnswer": "Anatole",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E05",
      "Story detail: Jeeves Retrieves Anatole",
      "Answer fact: Anatole",
      "Plot action: Jeeves Retrieves Anatole",
      "1990s Television",
      "Character storyline: Jeeves Retrieves Anatole",
      "Episode context: S1E05",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39190",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which couple's disagreement does Bertie hope to settle alongside Gussie and Madeline's troubles in Jeeves and Wooster?",
    "answers": [
      "Bingo and Rosie",
      "Chuffy and Pauline",
      "Tuppy and Angela",
      "Stilton and Florence"
    ],
    "correctAnswer": "Tuppy and Angela",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S1E05",
      "Story detail: Tuppy Angela Reconciliation",
      "Answer fact: Tuppy and Angela",
      "Plot action: Tuppy Angela Reconciliation",
      "1990s Television",
      "Character storyline: Tuppy Angela Reconciliation",
      "Episode context: S1E05",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39191",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which intimidating political extremist makes Bertie's silver cow-creamer scheme harder in Jeeves and Wooster?",
    "answers": [
      "Stilton Cheesewright",
      "Chuffy Chuffnell",
      "Barmy Fotheringay-Phipps",
      "Roderick Spode"
    ],
    "correctAnswer": "Roderick Spode",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E01",
      "Story detail: Spode And Silver Cow Creamer",
      "Answer fact: Roderick Spode",
      "Plot action: Spode And Silver Cow Creamer",
      "1990s Television",
      "Character storyline: Spode And Silver Cow Creamer",
      "Episode context: S2E01",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39192",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Who ends her engagement to Harold after he refuses to steal a policeman's helmet in Jeeves and Wooster?",
    "answers": [
      "Stephanie",
      "Madeline",
      "Angela",
      "Florence"
    ],
    "correctAnswer": "Stephanie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E02",
      "Story detail: Stephanie Harold Broken Engagement",
      "Answer fact: Stephanie",
      "Plot action: Stephanie Harold Broken Engagement",
      "1990s Television",
      "Character storyline: Stephanie Harold Broken Engagement",
      "Episode context: S2E02",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39193",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "To which seaside town is Bertie sent before being drawn into a pearl theft in Jeeves and Wooster?",
    "answers": [
      "Brighton",
      "Westcombe-on-Sea",
      "Southend-on-Sea",
      "Bournemouth"
    ],
    "correctAnswer": "Westcombe-on-Sea",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E03",
      "Story detail: Westcombe Pearl Theft",
      "Answer fact: Westcombe-on-Sea",
      "Plot action: Westcombe Pearl Theft",
      "1990s Television",
      "Character storyline: Westcombe Pearl Theft",
      "Episode context: S2E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39194",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which woman is Biffy desperate to avoid marrying in Jeeves and Wooster?",
    "answers": [
      "Madeline Bassett",
      "Bobbie Wickham",
      "Honoria Glossop",
      "Pauline Stoker"
    ],
    "correctAnswer": "Honoria Glossop",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E03",
      "Story detail: Biffy Engagement To Honoria",
      "Answer fact: Honoria Glossop",
      "Plot action: Biffy Engagement To Honoria",
      "1990s Television",
      "Character storyline: Biffy Engagement To Honoria",
      "Episode context: S2E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39195",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What sort of building does Bertie retreat to after falling out with Jeeves over his trumpet in Jeeves and Wooster?",
    "answers": [
      "A city penthouse",
      "A seaside hotel",
      "A London theatre",
      "A country cottage"
    ],
    "correctAnswer": "A country cottage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E04",
      "Story detail: Bertie Trumpet Country Retreat",
      "Answer fact: A country cottage",
      "Plot action: Bertie Trumpet Country Retreat",
      "1990s Television",
      "Character storyline: Bertie Trumpet Country Retreat",
      "Episode context: S2E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39196",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which of Bertie's friends is in love with the American heiress Pauline in Jeeves and Wooster?",
    "answers": [
      "Chuffy Chuffnell",
      "Tuppy Glossop",
      "Bingo Little",
      "Gussie Fink-Nottle"
    ],
    "correctAnswer": "Chuffy Chuffnell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E04",
      "Story detail: Chuffy Loves Pauline",
      "Answer fact: Chuffy Chuffnell",
      "Plot action: Chuffy Loves Pauline",
      "1990s Television",
      "Character storyline: Chuffy Loves Pauline",
      "Episode context: S2E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39197",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What does Bingo Little's new romantic interest do for a living in Jeeves and Wooster?",
    "answers": [
      "Nurse",
      "Waitress",
      "Schoolteacher",
      "Singer"
    ],
    "correctAnswer": "Waitress",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E06",
      "Story detail: Bingo Little Waitress Romance",
      "Answer fact: Waitress",
      "Plot action: Bingo Little Waitress Romance",
      "1990s Television",
      "Character storyline: Bingo Little Waitress Romance",
      "Episode context: S2E06",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39198",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "At what type of school does Bertie deliver an ill-fated speech in Jeeves and Wooster series two?",
    "answers": [
      "A military academy",
      "A university",
      "A girls' school",
      "A primary school for boys"
    ],
    "correctAnswer": "A girls' school",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S2E06",
      "Story detail: Bertie Girls School Speech",
      "Answer fact: A girls' school",
      "Plot action: Bertie Girls School Speech",
      "1990s Television",
      "Character storyline: Bertie Girls School Speech",
      "Episode context: S2E06",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39199",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which friend does Bertie meet while crossing the Atlantic to New York in Jeeves and Wooster?",
    "answers": [
      "Gussie Fink-Nottle",
      "Stilton Cheesewright",
      "Bingo Little",
      "Tuppy Glossop"
    ],
    "correctAnswer": "Tuppy Glossop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E01",
      "Story detail: Tuppy On Atlantic Crossing",
      "Answer fact: Tuppy Glossop",
      "Plot action: Tuppy On Atlantic Crossing",
      "1990s Television",
      "Character storyline: Tuppy On Atlantic Crossing",
      "Episode context: S3E01",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39200",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What health-related obsession marks the aunt who comes to stay at Bertie's New York flat in Jeeves and Wooster?",
    "answers": [
      "Hypochondria",
      "Sleepwalking",
      "Amnesia",
      "Fear of heights"
    ],
    "correctAnswer": "Hypochondria",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E02",
      "Story detail: Rocky Hypochondriac Aunt",
      "Answer fact: Hypochondria",
      "Plot action: Rocky Hypochondriac Aunt",
      "1990s Television",
      "Character storyline: Rocky Hypochondriac Aunt",
      "Episode context: S3E02",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39201",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What kind of theatrical production takes Bertie around the United States in Jeeves and Wooster?",
    "answers": [
      "A circus",
      "A musical",
      "A pantomime",
      "An opera recital"
    ],
    "correctAnswer": "A musical",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E03",
      "Story detail: Touring American Musical",
      "Answer fact: A musical",
      "Plot action: Touring American Musical",
      "1990s Television",
      "Character storyline: Touring American Musical",
      "Episode context: S3E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39202",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whose interest in the theatre prompts a warning from Aunt Agatha in Jeeves and Wooster?",
    "answers": [
      "Gussie Fink-Nottle's",
      "Bingo Little's",
      "Cyril Bassington-Bassington's",
      "Tuppy Glossop's"
    ],
    "correctAnswer": "Cyril Bassington-Bassington's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E03",
      "Story detail: Cyril Theatrical Ambitions",
      "Answer fact: Cyril Bassington-Bassington's",
      "Plot action: Cyril Theatrical Ambitions",
      "1990s Television",
      "Character storyline: Cyril Theatrical Ambitions",
      "Episode context: S3E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39203",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whom does Aunt Agatha expect Bertie to court during his Devon visit in Jeeves and Wooster?",
    "answers": [
      "Florence Craye",
      "Madeline Bassett",
      "Pauline Stoker",
      "Gertrude Winkworth"
    ],
    "correctAnswer": "Gertrude Winkworth",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E04",
      "Story detail: Gertrude Devon Courtship",
      "Answer fact: Gertrude Winkworth",
      "Plot action: Gertrude Devon Courtship",
      "1990s Television",
      "Character storyline: Gertrude Devon Courtship",
      "Episode context: S3E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39204",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What animal ends up under arrest during Bertie's visit to Totleigh Towers in Jeeves and Wooster?",
    "answers": [
      "A dog",
      "A cat",
      "A horse",
      "A parrot"
    ],
    "correctAnswer": "A dog",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E05",
      "Story detail: Dog Arrest At Totleigh",
      "Answer fact: A dog",
      "Plot action: Dog Arrest At Totleigh",
      "1990s Television",
      "Character storyline: Dog Arrest At Totleigh",
      "Episode context: S3E05",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39205",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What does Aunt Dahlia want a bestselling novelist to write for in Jeeves and Wooster?",
    "answers": [
      "A family cookbook",
      "Her ladies' magazine",
      "An election leaflet",
      "A school prospectus"
    ],
    "correctAnswer": "Her ladies' magazine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S3E06",
      "Story detail: Author For Aunt Dahlia Magazine",
      "Answer fact: Her ladies' magazine",
      "Plot action: Author For Aunt Dahlia Magazine",
      "1990s Television",
      "Character storyline: Author For Aunt Dahlia Magazine",
      "Episode context: S3E06",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39206",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which food does Tuppy hope to license from his family's recipe in Jeeves and Wooster?",
    "answers": [
      "Mustard",
      "Marmalade",
      "Soup",
      "Pickles"
    ],
    "correctAnswer": "Soup",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E01",
      "Story detail: Family Soup Recipe Business",
      "Answer fact: Soup",
      "Plot action: Family Soup Recipe Business",
      "1990s Television",
      "Character storyline: Family Soup Recipe Business",
      "Episode context: S4E01",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39207",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Who arrives unexpectedly in New York with Bertie's twin cousins in Jeeves and Wooster?",
    "answers": [
      "Aunt Dahlia",
      "Aunt Jane",
      "Aunt Julia",
      "Aunt Agatha"
    ],
    "correctAnswer": "Aunt Agatha",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E01",
      "Story detail: Aunt Agatha And Twin Cousins",
      "Answer fact: Aunt Agatha",
      "Plot action: Aunt Agatha And Twin Cousins",
      "1990s Television",
      "Character storyline: Aunt Agatha And Twin Cousins",
      "Episode context: S4E01",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39208",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Which fictional writer's identity is involved in Bertie's New York romantic complications in Jeeves and Wooster?",
    "answers": [
      "Rosie M. Banks",
      "Eulalie Soeurs",
      "Daphne Dolores Morehead",
      "Florence Craye"
    ],
    "correctAnswer": "Rosie M. Banks",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E03",
      "Story detail: Rosie M Banks Disguise",
      "Answer fact: Rosie M. Banks",
      "Plot action: Rosie M Banks Disguise",
      "1990s Television",
      "Character storyline: Rosie M Banks Disguise",
      "Episode context: S4E03",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39209",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What does Aunt Dahlia try to sell to a wealthy Liverpudlian in Jeeves and Wooster?",
    "answers": [
      "Her country house",
      "Her magazine",
      "An antique creamer",
      "A racehorse"
    ],
    "correctAnswer": "Her magazine",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E04",
      "Story detail: Liverpudlian Magazine Buyer",
      "Answer fact: Her magazine",
      "Plot action: Liverpudlian Magazine Buyer",
      "1990s Television",
      "Character storyline: Liverpudlian Magazine Buyer",
      "Episode context: S4E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39210",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What sort of disguises do both Bertie and Jeeves adopt during Jeeves and Wooster series four?",
    "answers": [
      "Police uniforms",
      "Army officers' uniforms",
      "Women's clothing",
      "Chauffeurs' outfits"
    ],
    "correctAnswer": "Women's clothing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E04",
      "Story detail: Bertie Jeeves Cross Dress",
      "Answer fact: Women's clothing",
      "Plot action: Bertie Jeeves Cross Dress",
      "1990s Television",
      "Character storyline: Bertie Jeeves Cross Dress",
      "Episode context: S4E04",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39211",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Who bought the supposedly cursed statuette that Stiffy wants removed in Jeeves and Wooster?",
    "answers": [
      "Aunt Dahlia",
      "Roderick Spode",
      "Tuppy Glossop",
      "Sir Watkyn Bassett"
    ],
    "correctAnswer": "Sir Watkyn Bassett",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E05",
      "Story detail: Sir Watkyn Cursed Statuette Owner",
      "Answer fact: Sir Watkyn Bassett",
      "Plot action: Sir Watkyn Cursed Statuette Owner",
      "1990s Television",
      "Character storyline: Sir Watkyn Cursed Statuette Owner",
      "Episode context: S4E05",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39212",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "Whom is Madeline preparing to marry at the end of Jeeves and Wooster?",
    "answers": [
      "Roderick Spode",
      "Bertie Wooster",
      "Gussie Fink-Nottle",
      "Stilton Cheesewright"
    ],
    "correctAnswer": "Roderick Spode",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E06",
      "Story detail: Madeline Spode Wedding",
      "Answer fact: Roderick Spode",
      "Plot action: Madeline Spode Wedding",
      "1990s Television",
      "Character storyline: Madeline Spode Wedding",
      "Episode context: S4E06",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39213",
    "category": "Television",
    "programme": "Jeeves and Wooster",
    "question": "What domestic repair causes difficulties ahead of Madeline's wedding in the Jeeves and Wooster finale?",
    "answers": [
      "Electrical wiring",
      "Plumbing",
      "A leaking roof",
      "A broken front gate"
    ],
    "correctAnswer": "Plumbing",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Jeeves and Wooster",
      "Programme: Jeeves and Wooster",
      "ITV",
      "Clive Exton",
      "Episode: S4E06",
      "Story detail: Plumbing Problem Before Wedding",
      "Answer fact: Plumbing",
      "Plot action: Plumbing Problem Before Wedding",
      "1990s Television",
      "Character storyline: Plumbing Problem Before Wedding",
      "Episode context: S4E06",
      "Source: https://www.comedy.co.uk/tv/jeeves_and_wooster/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39214",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who played Shirley's father in the Citizen Smith pilot, before Peter Vaughan took over?",
    "answers": [
      "Tony Steedman",
      "Stephen Greif",
      "Artro Morris",
      "John Sullivan"
    ],
    "correctAnswer": "Artro Morris",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: Pilot",
      "Story detail: Original Pilot Father Actor",
      "Answer fact: Artro Morris",
      "Plot action: Original Pilot Father Actor",
      "1970s-1980s Television",
      "Character storyline: Original Pilot Father Actor",
      "Episode context: Pilot",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39215",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "How does Shirley's father react to Wolfie when meeting him for dinner in Citizen Smith?",
    "answers": [
      "He offers him a factory job",
      "He joins the Popular Front",
      "He asks him to move abroad",
      "He dislikes him immediately"
    ],
    "correctAnswer": "He dislikes him immediately",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E02",
      "Story detail: Dad Dislikes Wolfie At Dinner",
      "Answer fact: He dislikes him immediately",
      "Plot action: Dad Dislikes Wolfie At Dinner",
      "1970s-1980s Television",
      "Character storyline: Dad Dislikes Wolfie At Dinner",
      "Episode context: S1E02",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39216",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Whose family has the empty flat that Wolfie and Ken hope to move into in Citizen Smith?",
    "answers": [
      "Shirley's family",
      "Tucker's family",
      "Speed's family",
      "Harry Fenning's family"
    ],
    "correctAnswer": "Shirley's family",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E03",
      "Story detail: Shirley Family Spare Flat",
      "Answer fact: Shirley's family",
      "Plot action: Shirley Family Spare Flat",
      "1970s-1980s Television",
      "Character storyline: Shirley Family Spare Flat",
      "Episode context: S1E03",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39217",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What sort of performer is Speed's girlfriend, whom Ken falls for in Citizen Smith?",
    "answers": [
      "A singer",
      "A topless dancer",
      "A schoolteacher",
      "A television presenter"
    ],
    "correctAnswer": "A topless dancer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E04",
      "Story detail: Speed Girlfriend Stage Job",
      "Answer fact: A topless dancer",
      "Plot action: Speed Girlfriend Stage Job",
      "1970s-1980s Television",
      "Character storyline: Speed Girlfriend Stage Job",
      "Episode context: S1E04",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39218",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Whom does Wolfie's group kidnap in Citizen Smith when their intended target is a Member of Parliament?",
    "answers": [
      "Brian Tofkin",
      "Ronnie Lynch",
      "Harry Fenning",
      "Ken"
    ],
    "correctAnswer": "Harry Fenning",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E05",
      "Story detail: Wrong Hostage Harry Fenning",
      "Answer fact: Harry Fenning",
      "Plot action: Wrong Hostage Harry Fenning",
      "1970s-1980s Television",
      "Character storyline: Wrong Hostage Harry Fenning",
      "Episode context: S1E05",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39219",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who catches a wealthy customer's attention while working in a record shop in Citizen Smith?",
    "answers": [
      "Wolfie",
      "Ken",
      "Mum",
      "Shirley"
    ],
    "correctAnswer": "Shirley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E06",
      "Story detail: Shirley Wealthy Customer",
      "Answer fact: Shirley",
      "Plot action: Shirley Wealthy Customer",
      "1970s-1980s Television",
      "Character storyline: Shirley Wealthy Customer",
      "Episode context: S1E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39220",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What is Wolfie struggling to record in Citizen Smith while Ken works on pavement art?",
    "answers": [
      "His latest song",
      "A radio commercial",
      "A political speech",
      "An audiobook"
    ],
    "correctAnswer": "His latest song",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S1E07",
      "Story detail: Wolfie Attempts Song Recording",
      "Answer fact: His latest song",
      "Plot action: Wolfie Attempts Song Recording",
      "1970s-1980s Television",
      "Character storyline: Wolfie Attempts Song Recording",
      "Episode context: S1E07",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39221",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What is the name of Speed's pregnant girlfriend as he leaves prison in Citizen Smith?",
    "answers": [
      "Shirley",
      "Desiree",
      "Florence",
      "Janice"
    ],
    "correctAnswer": "Desiree",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E01",
      "Story detail: Desiree Speed Pregnancy",
      "Answer fact: Desiree",
      "Plot action: Desiree Speed Pregnancy",
      "1970s-1980s Television",
      "Character storyline: Desiree Speed Pregnancy",
      "Episode context: S2E01",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39222",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who do Shirley's parents mistakenly believe is pregnant after overhearing the group in Citizen Smith?",
    "answers": [
      "Desiree",
      "Mum",
      "Shirley",
      "Speed's sister"
    ],
    "correctAnswer": "Shirley",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E01",
      "Story detail: Parents Mishear Pregnancy News",
      "Answer fact: Shirley",
      "Plot action: Parents Mishear Pregnancy News",
      "1970s-1980s Television",
      "Character storyline: Parents Mishear Pregnancy News",
      "Episode context: S2E01",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39223",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Where does Wolfie protest after Shirley's father loses his job in Citizen Smith?",
    "answers": [
      "At Parliament Square",
      "At town hall steps",
      "At a railway station",
      "Outside the factory gates"
    ],
    "correctAnswer": "Outside the factory gates",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E02",
      "Story detail: Factory Gates Protest",
      "Answer fact: Outside the factory gates",
      "Plot action: Factory Gates Protest",
      "1970s-1980s Television",
      "Character storyline: Factory Gates Protest",
      "Episode context: S2E02",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39224",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What type of stolen items feature in the electronics-factory burglary in Citizen Smith?",
    "answers": [
      "Stereo equipment",
      "Television sets",
      "Refrigerators",
      "Typewriters"
    ],
    "correctAnswer": "Stereo equipment",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E03",
      "Story detail: Stolen Factory Stereos",
      "Answer fact: Stereo equipment",
      "Plot action: Stolen Factory Stereos",
      "1970s-1980s Television",
      "Character storyline: Stolen Factory Stereos",
      "Episode context: S2E03",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39225",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which public office offers Wolfie employment while he protests for the right to work in Citizen Smith?",
    "answers": [
      "The town hall",
      "The Labour Exchange",
      "The tax office",
      "The police station"
    ],
    "correctAnswer": "The Labour Exchange",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E04",
      "Story detail: Job Offered At Labour Exchange",
      "Answer fact: The Labour Exchange",
      "Plot action: Job Offered At Labour Exchange",
      "1970s-1980s Television",
      "Character storyline: Job Offered At Labour Exchange",
      "Episode context: S2E04",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39226",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who turns out to be Wolfie's new boss when he reluctantly starts work in Citizen Smith?",
    "answers": [
      "Ken",
      "Harry Fenning",
      "Shirley's father",
      "Brian Tofkin"
    ],
    "correctAnswer": "Shirley's father",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E04",
      "Story detail: Shirley Father Boss",
      "Answer fact: Shirley's father",
      "Plot action: Shirley Father Boss",
      "1970s-1980s Television",
      "Character storyline: Shirley Father Boss",
      "Episode context: S2E04",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39227",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What is the profession of Wolfie's successful American-based former school friend in Citizen Smith?",
    "answers": [
      "Radio DJ",
      "Music journalist",
      "Concert promoter",
      "Record producer"
    ],
    "correctAnswer": "Record producer",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E05",
      "Story detail: American Record Producer",
      "Answer fact: Record producer",
      "Plot action: American Record Producer",
      "1970s-1980s Television",
      "Character storyline: American Record Producer",
      "Episode context: S2E05",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39228",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "From which country does José arrive with offers of revolutionary support in Citizen Smith?",
    "answers": [
      "Spain",
      "Portugal",
      "France",
      "Italy"
    ],
    "correctAnswer": "Spain",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E06",
      "Story detail: Jose Spanish Visitor",
      "Answer fact: Spain",
      "Plot action: Jose Spanish Visitor",
      "1970s-1980s Television",
      "Character storyline: Jose Spanish Visitor",
      "Episode context: S2E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39229",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which organisation does José offer to recruit for a Tooting uprising in Citizen Smith?",
    "answers": [
      "Catalan Popular Army",
      "Bilbao Liberation Movement",
      "Basque Socialist Front",
      "Andalusian Workers Union"
    ],
    "correctAnswer": "Bilbao Liberation Movement",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S2E06",
      "Story detail: Bilbao Liberation Soldiers",
      "Answer fact: Bilbao Liberation Movement",
      "Plot action: Bilbao Liberation Soldiers",
      "1970s-1980s Television",
      "Character storyline: Bilbao Liberation Soldiers",
      "Episode context: S2E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39230",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "In which Italian city does Shirley take work before Wolfie's rooftop crisis in Citizen Smith?",
    "answers": [
      "Florence",
      "Venice",
      "Rimini",
      "Naples"
    ],
    "correctAnswer": "Rimini",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E01",
      "Story detail: Shirley Work In Rimini",
      "Answer fact: Rimini",
      "Plot action: Shirley Work In Rimini",
      "1970s-1980s Television",
      "Character storyline: Shirley Work In Rimini",
      "Episode context: S3E01",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39231",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which policeman talks Wolfie through his rooftop crisis in Citizen Smith?",
    "answers": [
      "Harry Fenning",
      "Ronnie Lynch",
      "Les Johnson",
      "Brian Tofkin"
    ],
    "correctAnswer": "Brian Tofkin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E01",
      "Story detail: Brian Tofkin Rooftop Talk",
      "Answer fact: Brian Tofkin",
      "Plot action: Brian Tofkin Rooftop Talk",
      "1970s-1980s Television",
      "Character storyline: Brian Tofkin Rooftop Talk",
      "Episode context: S3E01",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39232",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Where do the Tooting Popular Front members end up occupying instead of a council meeting in Citizen Smith?",
    "answers": [
      "A lift",
      "The mayor's office",
      "A public bus",
      "The council roof"
    ],
    "correctAnswer": "A lift",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E02",
      "Story detail: Council Lift Protest",
      "Answer fact: A lift",
      "Plot action: Council Lift Protest",
      "1970s-1980s Television",
      "Character storyline: Council Lift Protest",
      "Episode context: S3E02",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39233",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which underworld figure offers Wolfie work that requires him to find his own car in Citizen Smith?",
    "answers": [
      "Ronnie Lynch",
      "Harry Fenning",
      "Mactaggart",
      "Brian Tofkin"
    ],
    "correctAnswer": "Harry Fenning",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E03",
      "Story detail: Fenning Car Job",
      "Answer fact: Harry Fenning",
      "Plot action: Fenning Car Job",
      "1970s-1980s Television",
      "Character storyline: Fenning Car Job",
      "Episode context: S3E03",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39234",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which relative of Harry Fenning is detective Brian Tofkin pursuing in Citizen Smith?",
    "answers": [
      "His brother",
      "His father",
      "His cousin",
      "His son"
    ],
    "correctAnswer": "His cousin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E04",
      "Story detail: Tofkin Pursues Cousin Fenning",
      "Answer fact: His cousin",
      "Plot action: Tofkin Pursues Cousin Fenning",
      "1970s-1980s Television",
      "Character storyline: Tofkin Pursues Cousin Fenning",
      "Episode context: S3E04",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39235",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What kind of woman invites Wolfie into a different social world in Citizen Smith?",
    "answers": [
      "A journalist",
      "A police officer",
      "A local councillor",
      "A wealthy woman"
    ],
    "correctAnswer": "A wealthy woman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E06",
      "Story detail: Rich Woman Visits Pub",
      "Answer fact: A wealthy woman",
      "Plot action: Rich Woman Visits Pub",
      "1970s-1980s Television",
      "Character storyline: Rich Woman Visits Pub",
      "Episode context: S3E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39236",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Where in London do Wolfie and his followers take their captured tank in Citizen Smith?",
    "answers": [
      "Westminster",
      "Brixton",
      "Wembley",
      "Greenwich"
    ],
    "correctAnswer": "Westminster",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S3E07",
      "Story detail: Tank Drives To Westminster",
      "Answer fact: Westminster",
      "Plot action: Tank Drives To Westminster",
      "1970s-1980s Television",
      "Character storyline: Tank Drives To Westminster",
      "Episode context: S3E07",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39237",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which television presenter appears as a reporter interviewing Wolfie in Citizen Smith?",
    "answers": [
      "Judith Chalmers",
      "Valerie Singleton",
      "Esther Rantzen",
      "Sue Lawley"
    ],
    "correctAnswer": "Valerie Singleton",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E01",
      "Story detail: Valerie Singleton Reporter",
      "Answer fact: Valerie Singleton",
      "Plot action: Valerie Singleton Reporter",
      "1970s-1980s Television",
      "Character storyline: Valerie Singleton Reporter",
      "Episode context: S4E01",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39238",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which country's touring rugby team prompts Wolfie to organise a protest in Citizen Smith?",
    "answers": [
      "New Zealand",
      "Australia",
      "South Africa",
      "Argentina"
    ],
    "correctAnswer": "South Africa",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E03",
      "Story detail: South African Rugby Visitors",
      "Answer fact: South Africa",
      "Plot action: South African Rugby Visitors",
      "1970s-1980s Television",
      "Character storyline: South African Rugby Visitors",
      "Episode context: S4E03",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39239",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What do Wolfie's comrades threaten to do after repeated disappointments in Citizen Smith?",
    "answers": [
      "Join the Conservative Party",
      "Leave London for Scotland",
      "Join the police force",
      "Quit the Popular Front"
    ],
    "correctAnswer": "Quit the Popular Front",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E03",
      "Story detail: TPF Threaten To Quit",
      "Answer fact: Quit the Popular Front",
      "Plot action: TPF Threaten To Quit",
      "1970s-1980s Television",
      "Character storyline: TPF Threaten To Quit",
      "Episode context: S4E03",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39240",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who is on trial while Wolfie has jury duty in Citizen Smith?",
    "answers": [
      "Ronnie Lynch",
      "Harry Fenning",
      "Ken",
      "Speed"
    ],
    "correctAnswer": "Ronnie Lynch",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E04",
      "Story detail: Ronnie Lynch Jury Case",
      "Answer fact: Ronnie Lynch",
      "Plot action: Ronnie Lynch Jury Case",
      "1970s-1980s Television",
      "Character storyline: Ronnie Lynch Jury Case",
      "Episode context: S4E04",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39241",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who is held hostage at Wolfie's home by Mactaggart in Citizen Smith?",
    "answers": [
      "A visiting football team",
      "The Tooting Popular Front and Shirley's parents",
      "Local councillors",
      "The Vigilante pub customers"
    ],
    "correctAnswer": "The Tooting Popular Front and Shirley's parents",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E05",
      "Story detail: Mactaggart Hostage Siege",
      "Answer fact: The Tooting Popular Front and Shirley's parents",
      "Plot action: Mactaggart Hostage Siege",
      "1970s-1980s Television",
      "Character storyline: Mactaggart Hostage Siege",
      "Episode context: S4E05",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39242",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What is the trade of Mr Rossman, whose accusations are challenged in Citizen Smith?",
    "answers": [
      "Watchmaker",
      "Estate agent",
      "Jeweller",
      "Bookmaker"
    ],
    "correctAnswer": "Jeweller",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E06",
      "Story detail: Mr Rossman Jewellery Trade",
      "Answer fact: Jeweller",
      "Plot action: Mr Rossman Jewellery Trade",
      "1970s-1980s Television",
      "Character storyline: Mr Rossman Jewellery Trade",
      "Episode context: S4E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39243",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Which former policeman poses as private investigator Dick Diamond in Citizen Smith?",
    "answers": [
      "Harry Fenning",
      "Ronnie Lynch",
      "Mactaggart",
      "Brian Tofkin"
    ],
    "correctAnswer": "Brian Tofkin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E06",
      "Story detail: Tofkin Detective Alias",
      "Answer fact: Brian Tofkin",
      "Plot action: Tofkin Detective Alias",
      "1970s-1980s Television",
      "Character storyline: Tofkin Detective Alias",
      "Episode context: S4E06",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39244",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "How does Wolfie hope to expose secret council bypass plans in the Citizen Smith finale?",
    "answers": [
      "By leaking them to the press",
      "By staging a concert",
      "By stealing the mayor's car",
      "By petitioning Parliament"
    ],
    "correctAnswer": "By leaking them to the press",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: S4E07",
      "Story detail: Secret Bypass Press Leak",
      "Answer fact: By leaking them to the press",
      "Plot action: Secret Bypass Press Leak",
      "1970s-1980s Television",
      "Character storyline: Secret Bypass Press Leak",
      "Episode context: S4E07",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39245",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Who accompanies Wolfie on his journey to Italy in Citizen Smith's final Christmas special?",
    "answers": [
      "Speed",
      "Ken",
      "Tucker",
      "Harry Fenning"
    ],
    "correctAnswer": "Ken",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: 1980 Christmas",
      "Story detail: Ken Travels With Wolfie",
      "Answer fact: Ken",
      "Plot action: Ken Travels With Wolfie",
      "1970s-1980s Television",
      "Character storyline: Ken Travels With Wolfie",
      "Episode context: 1980 Christmas",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39246",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "Through which country and mountain range do Wolfie and Ken travel en route to Italy in Citizen Smith?",
    "answers": [
      "Germany and the Pyrenees",
      "Spain and the Apennines",
      "France and the Alps",
      "Austria and the Dolomites"
    ],
    "correctAnswer": "France and the Alps",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: 1980 Christmas",
      "Story detail: Route Through France And Alps",
      "Answer fact: France and the Alps",
      "Plot action: Route Through France And Alps",
      "1970s-1980s Television",
      "Character storyline: Route Through France And Alps",
      "Episode context: 1980 Christmas",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39247",
    "category": "Television",
    "programme": "Citizen Smith",
    "question": "What surprise does Wolfie discover after travelling to see Shirley in Italy in Citizen Smith?",
    "answers": [
      "She has returned to Britain",
      "She is engaged to Ken",
      "She has joined a political party",
      "She has a new boyfriend"
    ],
    "correctAnswer": "She has a new boyfriend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Comedy",
      "Sitcom",
      "Citizen Smith",
      "Programme: Citizen Smith",
      "BBC One",
      "John Sullivan",
      "Episode: 1980 Christmas",
      "Story detail: Shirley New Boyfriend",
      "Answer fact: She has a new boyfriend",
      "Plot action: Shirley New Boyfriend",
      "1970s-1980s Television",
      "Character storyline: Shirley New Boyfriend",
      "Episode context: 1980 Christmas",
      "Source: https://www.comedy.co.uk/tv/citizen_smith/episodes/"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if (new Set(questions.map(q=>q.id)).size!==questions.length ||
    new Set(questions.map(q=>normalise(q.question))).size!==questions.length ||
    questions.some(q=>q.answers.length!==4 ||
      new Set(q.answers.map(normalise)).size!==4 ||
      q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
      q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
      q.dailyEligible!==true)) throw Error('Pack 361 narrative audit failed');
module.exports = questions;
