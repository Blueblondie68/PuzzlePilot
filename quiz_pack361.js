
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

  module.exports = questions;
