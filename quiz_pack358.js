
  // quiz_pack358.js
  // PuzzlePilot — The Bigggggg Quiz
  // Television sitcoms: Bottom (BBC Two) and Phoenix Nights (Channel 4).
  // Both outstanding in PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
  // Source checks: British Comedy Guide cast, character and episode guides;
  // BBC / Royal Television Society production coverage.
  // Seven bespoke, question-specific tags on each item plus programme metadata.
  // Complete WordPad-ready CommonJS file; no external dependencies.

  const FIRST_ID = 17617;

  // question | right answer | three distinct wrong answers | difficulty | seven bespoke tags
  const bottomFacts = `Who played Richie Richard in the BBC sitcom Bottom?|Rik Mayall|Adrian Edmondson|Christopher Ryan|Lee Cornes|Easy|Rik Mayall|Richie Richard|Lead Actor|Flatmate Character|BBC Sitcom Cast|Physical Comedy|Main Role
  Who played Eddie Hitler in Bottom?|Adrian Edmondson|Rik Mayall|Steven O'Donnell|Brian Glover|Easy|Adrian Edmondson|Eddie Hitler|Lead Actor|Flatmate Character|Comic Double Act|BBC Cast|Physical Comedy
  Which BBC channel first broadcast Bottom?|BBC Two|BBC One|ITV|Channel 4|Easy|BBC Two|Original Broadcaster|1991 Debut|British Sitcom|Television Network|Programme Premiere|Early Nineties
  In which year did Bottom first air?|1991|1985|1995|2001|Easy|1991 Premiere|17 September 1991|First Television Series|BBC Two|Programme Launch|Original Transmission|Sitcom History
  How many television series of Bottom were made?|Three|Two|Four|Five|Medium|Three Series|1991 To 1995|Production History|Series Count|BBC Comedy|Original Episodes|Programme Run
  How many television episodes are in the three original series of Bottom?|18|12|24|30|Medium|Eighteen Episodes|Six Episodes Per Series|Series Total|Original Television Run|BBC Comedy Archive|Episode Count|Nineties Sitcom
  In which London district do Richie and Eddie share a flat?|Hammersmith|Greenwich|Brixton|Camden|Easy|Hammersmith|London Setting|Shared Flat|Richie Richard|Eddie Hitler|Sitcom Location|West London
  Who co-wrote Bottom with Rik Mayall?|Adrian Edmondson|Ben Elton|Richard Curtis|Simon Nye|Medium|Adrian Edmondson|Rik Mayall|Writing Partnership|Programme Creators|Sitcom Scripts|BBC Credits|Comic Collaboration
  Which actor played Richie and Eddie's friend Spudgun?|Steven O'Donnell|Christopher Ryan|Lee Cornes|Brian Glover|Medium|Steven O'Donnell|Spudgun|Recurring Friend|Supporting Actor|Character Casting|Eddie Circle|Bottom Cast
  Who played the recurring character Dave Hedgehog?|Christopher Ryan|Steven O'Donnell|Rik Mayall|Mark Lambert|Medium|Christopher Ryan|Dave Hedgehog|Supporting Cast|Recurring Character|Actor Identification|Richie And Eddie Friends|Sitcom Regular
  What is the name of Richie and Eddie's regular pub?|The Lamb and Flag|The Red Lion|The Queen Victoria|The Nags Head|Medium|Lamb And Flag|Regular Pub|Richie And Eddie|London Local|Pub Setting|Sitcom Hangout|Recurring Location
  Which actor portrayed pub landlord Dick Head?|Lee Cornes|Roger Sloman|Ed Bye|Brian Glover|Hard|Lee Cornes|Dick Head|Pub Landlord|Lamb And Flag|Supporting Actor|Recurring Role|Bottom Cast
  In Bottom's Gas episode, whose gas supply have Richie and Eddie illegally tapped into?|Mr Rottweiler's|Dick Head's|Dave Hedgehog's|Mr Harrison's|Medium|Gas Episode|Mr Rottweiler Neighbour|Illegal Gas Supply|Hammersmith Flat|Gas Meter Inspection|Richie and Eddie|BBC Series One
  In the first episode Smells, what product does Richie hope will make him attractive?|Pheromone spray|Hair dye|An expensive suit|A new aftershave advert|Medium|Smells Episode|Pheromones|Attraction Scheme|Richie Richard|Newspaper Advert|Series One Premiere|1991 Plot
  In Contest, what do Richie and Eddie argue about watching?|Television|A boxing match in person|A stage musical|An outdoor film screening|Easy|Contest Episode|Television Dispute|Flatmates Argument|Series One|Home Entertainment|Eddie Hitler|Richie Richard
  Which visitor tells Richie he will die within three days in Apocalypse?|A fairground fortune teller|A doctor|A police constable|An insurance agent|Medium|Apocalypse Episode|Fortune Teller|Three Day Prediction|Fairground Encounter|Richie Richard|Series One|Bad Luck
  Why does Mr Harrison ask Richie and Eddie to mind his newsagent's shop in Bottom?|He must attend his mother's funeral|He needs an emergency hospital appointment|He has won a free holiday|He has been called for jury service|Medium|S Up Episode|Mr Harrison|Newsagent Shop|Mother's Funeral|Richie and Eddie Cover|First Series Story|Local Community
  Which occasion is Richie celebrating in the first-series episode Accident?|His birthday|Christmas Eve|A wedding anniversary|New Year's Day|Easy|Accident Episode|Richie Birthday|Birthday Party|Series One|1991 Storyline|Lonely Celebration|Injury Comedy
  Which service do Richie and Eddie use to seek a date in Digger?|Video dating|Internet dating|A newspaper pen-pal club|Speed dating|Medium|Digger Episode|Video Dating|Romantic Search|Series Two Opening|Richie Richard|1992 Television|Dating Service
  What happens to Richie and Eddie's television before the episode Culture?|It is repossessed|It is stolen by a burglar|It explodes in a storm|It is sold at auction|Medium|Culture Episode|Television Repossession|Rumbelows|Series Two|Flatmates Boredom|1992 Story|Household Possessions
  Which board game do Richie and Eddie try playing in Culture?|Chess|Scrabble|Monopoly|Cluedo|Easy|Culture Episode|Chess Game|Indoor Pastime|No Television|Richie Richard|Eddie Hitler|Series Two
  What do Richie and Eddie hear downstairs in Burglary?|A burglar|A delivery driver|A visiting landlord|A police dog|Easy|Burglary Episode|Intruder Downstairs|Flat Security|Series Two|Nighttime Disturbance|1992 Plot|Richie And Eddie
  In Parade, what police-related activity earns Richie and Eddie money?|Taking part in an identity parade|Guarding a police station|Washing police cars|Giving evidence in court|Medium|Parade Episode|Police Identity Parade|Paid Line Up|Eight Pounds Each|Series Two|1992 Episode|Police Procedure
  In the Christmas-themed episode Holy, what is left at Richie and Eddie's front door?|A baby|A Christmas tree|A sack of coal|A lost puppy|Medium|Holy Episode|Baby At Door|Christmas Dinner|Richie Richard|Second Coming Idea|Series Two|Festive Story
  In 'S Out, where do Richie and Eddie attempt to survive in the wilderness?|Wimbledon Common|Epping Forest|Hyde Park|Hampstead Heath|Medium|S Out Episode|Wimbledon Common|Camping Challenge|Outdoor Survival|Series Two|Mad Ken Stalin|Bet With Friend
  On what attraction are Richie and Eddie stranded overnight in Hole?|A Ferris wheel|A roller coaster|A chairlift|A cable car|Easy|Hole Episode|Ferris Wheel|Funfair Ride|Trapped Overnight|Series Three Premiere|1995 Story|Heights
  Which two friends visit for a Halloween party in Terror?|Spudgun and Dave Hedgehog|Dick Head and Mr Harrison|Mr Rottweiler and the Gas Man|Les and Young Kenny|Medium|Terror Episode|Halloween Party|Spudgun|Dave Hedgehog|Richie And Eddie|Series Three|1995 Episode
  To which Yorkshire seaside town do Richie and Eddie plan a holiday in Break?|Bridlington|Whitby|Scarborough|Filey|Medium|Break Episode|Bridlington Holiday|Seaside Trip|Travel Plans|Series Three|1995 Comedy|Yorkshire Resort
  What unusual denomination of forged note does Eddie produce in Dough?|Twenty-seven pounds|Seventeen pounds|Forty-three pounds|Ninety-nine pounds|Hard|Dough Episode|Twenty Seven Pound Notes|Counterfeiting|Printing Machine|Eddie Hitler|Series Three|1995 Story
  In Finger, whose wedding day gives Richie and Eddie the chance to take a honeymoon trip?|Taffy O'Jones's|Dick Head's|Mr Harrison's|Spudgun's|Hard|Finger Episode|Taffy O Jones|Stolen Car|Wedding Day|Honeymoon Trip|Series Three|Revenge Plot
  In Carnival, what filming equipment do Richie and Eddie take from a BBC van?|A video camera|A film projector|A sound mixer|A television aerial|Medium|Carnival Episode|BBC Van|Video Camera|Filmmaking Scheme|Local Riot|Series Three Finale|1995 Story
  Who directed the third television series of Bottom?|Bob Spiers|Ed Bye|Jon Plowman|Ray Butt|Hard|Bob Spiers|Series Three Director|Production Credits|1995 BBC Series|Director Change|Behind The Scenes|Bottom Crew
  Which feature film reunited the Bottom stars in a similar style of slapstick comedy?|Guest House Paradiso|The Full Monty|The Parole Officer|The Witches|Medium|Guest House Paradiso|Rik Mayall|Adrian Edmondson|Feature Film|Comedy Collaboration|1999 Release|Big Screen Follow Up`;

  const phoenixFacts = `Who played Phoenix Club owner Brian Potter in Phoenix Nights?|Peter Kay|Dave Spikey|Neil Fitzmaurice|Justin Moorhouse|Easy|Peter Kay|Brian Potter|Club Owner|Lead Actor|Phoenix Club|Main Character|Channel Four Cast
  Which channel first broadcast Phoenix Nights?|Channel 4|BBC Two|ITV|BBC One|Easy|Channel Four|Original Broadcaster|British Sitcom|2001 Premiere|Comedy Series|Television Network|Peter Kay Show
  In which year did Phoenix Nights first air?|2001|1997|2004|2008|Easy|2001 Premiere|14 January 2001|First Series|Channel Four|Original Launch|Noughties Comedy|Broadcast Date
  How many series of Phoenix Nights were broadcast?|Two|Three|Four|Five|Medium|Two Series|2001 And 2002|Production Run|Sitcom Series Count|Channel Four|Programme History|Twelve Episodes
  How many television episodes make up the original run of Phoenix Nights?|12|18|24|30|Medium|Twelve Episodes|Six Per Series|Programme Catalogue|Original Run|British Comedy|Episode Count|Two Series
  In which Greater Manchester town is the Phoenix Club set?|Bolton|Oldham|Wigan|Stockport|Easy|Bolton|Phoenix Club Setting|Greater Manchester|Social Club|Northern Comedy|Brian Potter|Location
  What type of venue is the Phoenix at the centre of Phoenix Nights?|A social club|A nightclub on a cruise ship|A motorway hotel|A football stadium|Easy|Social Club|Phoenix Venue|Live Entertainment|Brian Potter|Bolton Community|Club Business|Sitcom Setting
  Which actor played club entertainer Jerry St Clair?|Dave Spikey|Paddy McGuinness|Peter Kay|Ted Robbins|Easy|Dave Spikey|Jerry St Clair|Club Compere|Entertainment Host|Cast Member|Phoenix Regular|Character Casting
  Who played the doorman Max in Phoenix Nights?|Peter Kay|Paddy McGuinness|Steve Edge|Neil Fitzmaurice|Easy|Peter Kay|Max|Doorman Character|Double Role|Club Security|Phoenix Cast|Bouncer
  Who played Max's fellow doorman Paddy?|Paddy McGuinness|Justin Moorhouse|Toby Foster|Dave Spikey|Easy|Paddy McGuinness|Paddy|Doorman Character|Max Partnership|Club Security|Actor Role|Phoenix Cast
  Which actor portrayed the Phoenix's DJ and handyman Ray Von?|Neil Fitzmaurice|Dave Spikey|Ted Robbins|Steve Edge|Medium|Neil Fitzmaurice|Ray Von|Club DJ|Handyman|Character Casting|Sound And Lighting|Supporting Cast
  Who played the staff member known as Young Kenny?|Justin Moorhouse|Archie Kelly|Toby Foster|Daniel Kitson|Medium|Justin Moorhouse|Young Kenny|Club Worker|Character Nickname|Cast Role|Phoenix Staff|Supporting Actor
  Who played Kenny Senior in Phoenix Nights?|Archie Kelly|Justin Moorhouse|Peter Kay|Ted Robbins|Medium|Archie Kelly|Kenny Senior|Older Kenny|Actor Role|Club Regular|Supporting Cast|Character Casting
  Which actress played the club regular Holy Mary?|Janice Connolly|Enid Dunn|Beatrice Kelley|Rachel Bell|Medium|Janice Connolly|Holy Mary|Club Regular|Supporting Actress|Character Casting|Phoenix Cast|Bolton Comedy
  Who played club rival Den Perry?|Ted Robbins|Peter Kay|Toby Foster|Steve Edge|Medium|Ted Robbins|Den Perry|Rival Club Owner|Recurring Antagonist|Actor Identification|Phoenix Competitor|Cast Credits
  Which actor portrayed Phoenix staff member Alan Johnson?|Steve Edge|Toby Foster|Daniel Kitson|Justin Moorhouse|Hard|Steve Edge|Alan Johnson|Staff Member|Supporting Actor|Character Casting|Club Worker|Phoenix Ensemble
  Who played the club worker Les?|Toby Foster|Steve Edge|Archie Kelly|Dave Spikey|Hard|Toby Foster|Les|Phoenix Employee|Supporting Actor|Cast Identification|Club Staff|2001 Television
  Which three performers co-wrote Phoenix Nights?|Peter Kay, Dave Spikey and Neil Fitzmaurice|Peter Kay, Paddy McGuinness and Steve Edge|Rik Mayall, Adrian Edmondson and Ben Elton|John Sullivan, Ray Butt and Roger Sloman|Hard|Peter Kay|Dave Spikey|Neil Fitzmaurice|Writing Trio|Programme Creators|Script Credits|Production Team
  Phoenix Nights grew out of which earlier Peter Kay television programme?|That Peter Kay Thing|Max and Paddy's Road to Nowhere|The Peter Kay Show Live|Car Share|Medium|That Peter Kay Thing|In The Club Episode|Spin Off Origin|Peter Kay|Earlier Programme|Series Development|Comedy History
  What disrupts the Phoenix Club's reopening in the first episode Opening Night?|A power cut|A flood|A burglary|A burst water main|Easy|Opening Night|Power Cut|Club Reopening|First Episode|January 2001|Brian Potter|Opening Disaster
  Which animal adds to the chaos in Wild West Night?|A horse|A llama|A donkey|A camel|Medium|Wild West Night|Horse|Theme Night|Club Entertainment|Series One|2001 Episode|Animal Mishap
  What is the name of the fire-safety officer who threatens to close the Phoenix Club in Phoenix Nights?|Keith Lard|Clinton Baptiste|Den Perry|Ray Von|Medium|Disco Inferno Episode|Keith Lard|Fire Safety Inspection|Phoenix Closure Threat|Brian Potter|Club Licensing|Channel Four Comedy
  Which talent contest reaches its final at the Phoenix Club at the end of series one?|Talent Trek|The X Factor|Stars in Their Eyes|Opportunity Knocks|Medium|Talent Trek Finals|Series One Finale|Amateur Performers|Club Entertainment|2001 Episode|Talent Competition|Brian Potter
  What happens to the Phoenix Club at the start of series two?|It burns down|It is sold to a hotel chain|It is flooded by a river|It becomes a library|Easy|Series Two Opening|Club Fire|Rebuilding|Brian Potter|Jerry St Clair|2002 Return|Phoenix Premises
  In Family Fun Day, where do Max and Paddy go to buy cheaper alcohol?|France|Belgium|Ireland|Spain|Medium|Family Fun Day|Max And Paddy|French Trip|Cheap Alcohol|Stock Supplies|Series Two|Club Reopening
  Which broadcaster and music journalist presents the televised Crimetime reconstruction in Phoenix Nights?|Stuart Maconie|Jim Bowen|Tony Blackburn|Richard Madeley|Hard|Stuart Maconie|Crimetime Episode|TV Presenter Cameo|Fire Reconstruction|Series Two|2002 Guest Appearance|Club Publicity
  Whose Free 'n' Easy entertainment night clashes with Brian's plans for the quiz?|Jerry St Clair's|Max's|Ray Von's|Kenny Senior's|Medium|Quiz Episode|Jerry St Clair|Free And Easy Night|Clashing Events|Club Entertainment|Series Two|Brian Potter
  Which two Phoenix Nights doormen later starred in their own Road to Nowhere spin-off?|Max and Paddy|Ray Von and Les|Jerry and Alan|Kenny Senior and Young Kenny|Easy|Max And Paddy|Road To Nowhere|Doorman Duo|Spin Off Characters|Channel Four|Comedy Continuation|2004 Series
  In which year did the spin-off Max and Paddy's Road to Nowhere first air?|2004|2002|2006|2010|Medium|2004 Spin Off|Max And Paddys Road To Nowhere|Channel Four|Peter Kay|Paddy McGuinness|Later Comedy|Programme Timeline`;

  const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
  const questions = [];

  function addProgramme(programme, sharedTags, factText) {
    for (const line of factText.trim().split('\n')) {
      const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
      const fields = line.trim().split('|').map(value => value.trim());
      if (fields.length !== 13) {
        throw new Error('Pack 358: field count invalid for ' + id);
      }
      const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
      if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value)) {
        throw new Error('Pack 358: blank field for ' + id);
      }
      if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
          specificTags.length !== 7 || new Set(specificTags.map(normalise)).size !== 7) {
        throw new Error('Pack 358: difficulty or bespoke tags invalid for ' + id);
      }
      const answers = [wrong1, wrong2, wrong3];
      if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4) {
        throw new Error('Pack 358: repeated option in ' + id);
      }
      answers.splice(questions.length % 4, 0, correctAnswer);
      const tags = [...new Map([
        'Television', 'British Television', 'Comedy', 'Sitcom',
        ...sharedTags, programme, 'Programme: ' + programme,
        correctAnswer, ...specificTags
      ].map(tag => [normalise(tag), tag])).values()];
      questions.push({
        id, category: 'Television', programme, question, answers,
        correctAnswer, difficulty, tags, dailyEligible: true
      });
    }
  }

  addProgramme('Bottom', ['BBC Two', 'Rik Mayall', 'Adrian Edmondson', '1991-1995', 'Slapstick Comedy'], bottomFacts);
  addProgramme('Phoenix Nights', ['Channel 4', 'Peter Kay', '2001-2002', 'Social Club Comedy'], phoenixFacts);

  // Validate the ACTUAL exported objects, not just the question templates.
  if (!questions.length || questions[0].id !== 'tv_17617' ||
      new Set(questions.map(q => q.id)).size !== questions.length ||
      new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
      questions.some((q, i) =>
        q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
        q.category !== 'Television' || !q.programme ||
        q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
        new Set(q.answers.map(normalise)).size !== 4 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.tags.length < 14 || new Set(q.tags.map(normalise)).size !== q.tags.length ||
        !q.tags.includes('Programme: ' + q.programme) || q.dailyEligible !== true)) {
    throw new Error('Pack 358: exported question validation failed');
  }

  
  // Full Pack 358 editorial audit: researched episode-specific additions.
  // Existing historical IDs are preserved; new IDs begin after Pack 357 audit.
  const auditAdditions = [
  {
    "id": "tv_39043",
    "category": "Television",
    "programme": "Bottom",
    "question": "How much time do the flatmates have to disconnect the illegal gas supply before their inspection in Bottom?",
    "answers": [
      "Twenty-four hours",
      "Three days",
      "Forty-five minutes",
      "Six hours and twenty-seven minutes"
    ],
    "correctAnswer": "Six hours and twenty-seven minutes",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Gas",
      "Storyline: Gas inspection deadline",
      "Correct: Six hours and twenty-seven minutes",
      "Subject: Gas inspection deadline",
      "1991-1995 BBC Comedy",
      "Character or scene: Gas inspection deadline",
      "Specific plot: Gas",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39044",
    "category": "Television",
    "programme": "Bottom",
    "question": "How much money do Eddie and Richie have left between them for the next two months in Bottom's Contest?",
    "answers": [
      "Thirty pence",
      "Eleven pounds eighty",
      "Two pounds fifty",
      "Five pounds"
    ],
    "correctAnswer": "Thirty pence",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Contest",
      "Storyline: Flatmates' remaining funds",
      "Correct: Thirty pence",
      "Subject: Flatmates' remaining funds",
      "1991-1995 BBC Comedy",
      "Character or scene: Flatmates' remaining funds",
      "Specific plot: Contest",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39045",
    "category": "Television",
    "programme": "Bottom",
    "question": "On which televised beauty contest does Eddie stake money in Bottom?",
    "answers": [
      "Miss Universe",
      "Miss World",
      "Miss Great Britain",
      "Miss Europe"
    ],
    "correctAnswer": "Miss World",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Contest",
      "Storyline: Eddie's beauty pageant bet",
      "Correct: Miss World",
      "Subject: Eddie's beauty pageant bet",
      "1991-1995 BBC Comedy",
      "Character or scene: Eddie's beauty pageant bet",
      "Specific plot: Contest",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39046",
    "category": "Television",
    "programme": "Bottom",
    "question": "How much money does Richie inherit from his aunt before the fortune-teller's prediction in Bottom?",
    "answers": [
      "One hundred pounds",
      "Fifty pounds",
      "Six hundred pounds",
      "Two thousand pounds"
    ],
    "correctAnswer": "Six hundred pounds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Apocalypse",
      "Storyline: Aunt's inheritance",
      "Correct: Six hundred pounds",
      "Subject: Aunt's inheritance",
      "1991-1995 BBC Comedy",
      "Character or scene: Aunt's inheritance",
      "Specific plot: Apocalypse",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39047",
    "category": "Television",
    "programme": "Bottom",
    "question": "Where does Richie hide to protect himself after a fortune-teller warns he is going to die?",
    "answers": [
      "Inside a wardrobe in the kitchen",
      "In the cellar of the pub",
      "At the local police station",
      "Inside a makeshift den in the living room"
    ],
    "correctAnswer": "Inside a makeshift den in the living room",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Apocalypse",
      "Storyline: Makeshift protective shelter",
      "Correct: Inside a makeshift den in the living room",
      "Subject: Makeshift protective shelter",
      "1991-1995 BBC Comedy",
      "Character or scene: Makeshift protective shelter",
      "Specific plot: Apocalypse",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39048",
    "category": "Television",
    "programme": "Bottom",
    "question": "What birthday disappointment awaits Richie in the Bottom episode Accident?",
    "answers": [
      "No one attends his party or sends him a card",
      "Eddie forgets to book the restaurant",
      "His cake gets delivered to the wrong address",
      "His present is stolen from a bus"
    ],
    "correctAnswer": "No one attends his party or sends him a card",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Accident",
      "Storyline: Empty birthday party",
      "Correct: No one attends his party or sends him a card",
      "Subject: Empty birthday party",
      "1991-1995 BBC Comedy",
      "Character or scene: Empty birthday party",
      "Specific plot: Accident",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39049",
    "category": "Television",
    "programme": "Bottom",
    "question": "Which flatmate suffers a broken leg during the disastrous birthday events in Bottom?",
    "answers": [
      "Richie",
      "Eddie",
      "Dave Hedgehog",
      "Spudgun"
    ],
    "correctAnswer": "Eddie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Accident",
      "Storyline: Birthday injury",
      "Correct: Eddie",
      "Subject: Birthday injury",
      "1991-1995 BBC Comedy",
      "Character or scene: Birthday injury",
      "Specific plot: Accident",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39050",
    "category": "Television",
    "programme": "Bottom",
    "question": "What social status does Richie falsely claim when using a video dating agency in Bottom?",
    "answers": [
      "Professional footballer",
      "Film director",
      "Aristocrat",
      "Millionaire businessman"
    ],
    "correctAnswer": "Aristocrat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Digger",
      "Storyline: False dating agency identity",
      "Correct: Aristocrat",
      "Subject: False dating agency identity",
      "1991-1995 BBC Comedy",
      "Character or scene: False dating agency identity",
      "Specific plot: Digger",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39051",
    "category": "Television",
    "programme": "Bottom",
    "question": "Which retailer takes Richie and Eddie's television away, forcing them to find other entertainment in Bottom?",
    "answers": [
      "Woolworths",
      "Comet",
      "Dixons",
      "Rumbelows"
    ],
    "correctAnswer": "Rumbelows",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Culture",
      "Storyline: Repossessed television retailer",
      "Correct: Rumbelows",
      "Subject: Repossessed television retailer",
      "1991-1995 BBC Comedy",
      "Character or scene: Repossessed television retailer",
      "Specific plot: Culture",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39052",
    "category": "Television",
    "programme": "Bottom",
    "question": "What takeaway does Eddie go out to fetch before the flatmates discover an intruder in Bottom?",
    "answers": [
      "Fish and chips",
      "Chinese noodles",
      "Pizza",
      "Chicken kebabs"
    ],
    "correctAnswer": "Fish and chips",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Burglary",
      "Storyline: Takeaway before burglar",
      "Correct: Fish and chips",
      "Subject: Takeaway before burglar",
      "1991-1995 BBC Comedy",
      "Character or scene: Takeaway before burglar",
      "Specific plot: Burglary",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39053",
    "category": "Television",
    "programme": "Bottom",
    "question": "How much are Richie and Eddie each paid for appearing in a police identity parade in Bottom?",
    "answers": [
      "Twenty pounds",
      "Eight pounds",
      "Five pounds",
      "Fifty pounds"
    ],
    "correctAnswer": "Eight pounds",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Parade",
      "Storyline: Identity parade payment",
      "Correct: Eight pounds",
      "Subject: Identity parade payment",
      "1991-1995 BBC Comedy",
      "Character or scene: Identity parade payment",
      "Specific plot: Parade",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39054",
    "category": "Television",
    "programme": "Bottom",
    "question": "Which pub regular gives Richie and Eddie apparently promising betting tips in Bottom?",
    "answers": [
      "Dick Head the landlord",
      "Mad Ken Stalin",
      "Larry the bookmaker",
      "Mr Rottweiler"
    ],
    "correctAnswer": "Larry the bookmaker",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Parade",
      "Storyline: Betting tips from Larry",
      "Correct: Larry the bookmaker",
      "Subject: Betting tips from Larry",
      "1991-1995 BBC Comedy",
      "Character or scene: Betting tips from Larry",
      "Specific plot: Parade",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39055",
    "category": "Television",
    "programme": "Bottom",
    "question": "What does Richie believe the abandoned baby at his door represents in Bottom's Christmas episode?",
    "answers": [
      "A secret adoption scheme",
      "A neighbour's practical joke",
      "A television prank",
      "The Second Coming"
    ],
    "correctAnswer": "The Second Coming",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Holy",
      "Storyline: Baby mistaken for religious event",
      "Correct: The Second Coming",
      "Subject: Baby mistaken for religious event",
      "1991-1995 BBC Comedy",
      "Character or scene: Baby mistaken for religious event",
      "Specific plot: Holy",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39056",
    "category": "Television",
    "programme": "Bottom",
    "question": "What body part does Richie accidentally cut off while preparing for Christmas in Bottom?",
    "answers": [
      "A finger",
      "An ear",
      "A toe",
      "His nose"
    ],
    "correctAnswer": "A finger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Holy",
      "Storyline: Christmas kitchen injury",
      "Correct: A finger",
      "Subject: Christmas kitchen injury",
      "1991-1995 BBC Comedy",
      "Character or scene: Christmas kitchen injury",
      "Specific plot: Holy",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39057",
    "category": "Television",
    "programme": "Bottom",
    "question": "With whom do Richie and Eddie make a bet that they can survive in the wild on Wimbledon Common in Bottom?",
    "answers": [
      "Dave Hedgehog",
      "'Mad' Ken Stalin",
      "Dick Head",
      "Mr Rottweiler"
    ],
    "correctAnswer": "'Mad' Ken Stalin",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: 'S Out",
      "Storyline: Wilderness bet",
      "Correct: 'Mad' Ken Stalin",
      "Subject: Wilderness bet",
      "1991-1995 BBC Comedy",
      "Character or scene: Wilderness bet",
      "Specific plot: 'S Out",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39058",
    "category": "Television",
    "programme": "Bottom",
    "question": "What is due to happen to the Ferris wheel on which Richie and Eddie become stranded in Bottom?",
    "answers": [
      "It is to be shipped overseas",
      "It will be moved to a new fairground",
      "It is scheduled for demolition the next morning",
      "It is due to be repainted"
    ],
    "correctAnswer": "It is scheduled for demolition the next morning",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Hole",
      "Storyline: Ferris wheel demolition",
      "Correct: It is scheduled for demolition the next morning",
      "Subject: Ferris wheel demolition",
      "1991-1995 BBC Comedy",
      "Character or scene: Ferris wheel demolition",
      "Specific plot: Hole",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39059",
    "category": "Television",
    "programme": "Bottom",
    "question": "What device do Richie and Eddie use to make trick-or-treaters more cooperative in Bottom's Halloween episode?",
    "answers": [
      "A powerful torch",
      "A handbell",
      "A fog machine",
      "An electric cattle prod"
    ],
    "correctAnswer": "An electric cattle prod",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Terror",
      "Storyline: Aggressive trick or treating",
      "Correct: An electric cattle prod",
      "Subject: Aggressive trick or treating",
      "1991-1995 BBC Comedy",
      "Character or scene: Aggressive trick or treating",
      "Specific plot: Terror",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39060",
    "category": "Television",
    "programme": "Bottom",
    "question": "Which supernatural figure does Richie consider summoning at his Halloween party in Bottom?",
    "answers": [
      "The Devil",
      "A vampire",
      "A ghost of a king",
      "A werewolf"
    ],
    "correctAnswer": "The Devil",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Terror",
      "Storyline: Richie seeks infernal deal",
      "Correct: The Devil",
      "Subject: Richie seeks infernal deal",
      "1991-1995 BBC Comedy",
      "Character or scene: Richie seeks infernal deal",
      "Specific plot: Terror",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39061",
    "category": "Television",
    "programme": "Bottom",
    "question": "What device has Eddie been secretly building to try to make the flatmates rich in Bottom?",
    "answers": [
      "A fruit vending machine",
      "A banknote printing machine",
      "A metal detector",
      "A slot machine"
    ],
    "correctAnswer": "A banknote printing machine",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Dough",
      "Storyline: Counterfeit money production",
      "Correct: A banknote printing machine",
      "Subject: Counterfeit money production",
      "1991-1995 BBC Comedy",
      "Character or scene: Counterfeit money production",
      "Specific plot: Dough",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39062",
    "category": "Television",
    "programme": "Bottom",
    "question": "Who alerts a professional forger after Eddie displays strange banknotes at the pub in Bottom?",
    "answers": [
      "Larry the bookmaker",
      "Mr Harrison",
      "Dick Head",
      "Spudgun"
    ],
    "correctAnswer": "Dick Head",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Dough",
      "Storyline: Pub landlord alerts forger",
      "Correct: Dick Head",
      "Subject: Pub landlord alerts forger",
      "1991-1995 BBC Comedy",
      "Character or scene: Pub landlord alerts forger",
      "Specific plot: Dough",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39063",
    "category": "Television",
    "programme": "Bottom",
    "question": "At which hotel do Richie and Eddie impersonate honeymooners after stealing Taffy O'Jones's tickets in Bottom?",
    "answers": [
      "Savoy Hotel",
      "Queen's Hotel",
      "Grand Brighton Hotel",
      "Marvelloso Spendido Hotel"
    ],
    "correctAnswer": "Marvelloso Spendido Hotel",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Finger",
      "Storyline: Impersonated newlyweds' hotel",
      "Correct: Marvelloso Spendido Hotel",
      "Subject: Impersonated newlyweds' hotel",
      "1991-1995 BBC Comedy",
      "Character or scene: Impersonated newlyweds' hotel",
      "Specific plot: Finger",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39064",
    "category": "Television",
    "programme": "Bottom",
    "question": "What does Richie try to blackmail a political leader with after making amateur films using a stolen camera in Bottom?",
    "answers": [
      "Embarrassing footage",
      "Unpaid tax bills",
      "A forged bank statement",
      "A stolen passport"
    ],
    "correctAnswer": "Embarrassing footage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Bottom",
      "Programme: Bottom",
      "BBC Two",
      "Rik Mayall and Adrian Edmondson",
      "Episode: Carnival",
      "Storyline: Scheme targeting Prime Minister",
      "Correct: Embarrassing footage",
      "Subject: Scheme targeting Prime Minister",
      "1991-1995 BBC Comedy",
      "Character or scene: Scheme targeting Prime Minister",
      "Specific plot: Carnival",
      "Source: https://www.tvmaze.com/shows/6081/bottom/episodeguide"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39065",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What is the name of the horse which gets drunk at the Phoenix Club's western-themed night?",
    "answers": [
      "Silver",
      "Trigger",
      "Black Beauty",
      "Thunder"
    ],
    "correctAnswer": "Trigger",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Wild West Night",
      "Storyline: Drunken horse character",
      "Correct: Trigger",
      "Subject: Drunken horse character",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Drunken horse character",
      "Specific plot: Wild West Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39066",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What western attraction does Brian bring to the Phoenix after the snooker table breaks?",
    "answers": [
      "A mechanical shooting gallery",
      "A miniature train",
      "A bucking bronco",
      "A rodeo arena"
    ],
    "correctAnswer": "A bucking bronco",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Wild West Night",
      "Storyline: Replacement for snooker table",
      "Correct: A bucking bronco",
      "Subject: Replacement for snooker table",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Replacement for snooker table",
      "Specific plot: Wild West Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39067",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Which psychic entertainer offends the Phoenix Club audience during a disastrous show?",
    "answers": [
      "Jerry St Clair",
      "Roy Walker",
      "Jim Bowen",
      "Clinton Baptiste"
    ],
    "correctAnswer": "Clinton Baptiste",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Disco Inferno",
      "Storyline: Psychic performance",
      "Correct: Clinton Baptiste",
      "Subject: Psychic performance",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Psychic performance",
      "Specific plot: Disco Inferno",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39068",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What is the unsuspected job of the woman Brian Potter starts dating in Phoenix Nights?",
    "answers": [
      "Council investigator looking into his disability claims",
      "Travel agent selling club trips",
      "Local radio announcer",
      "New social club licence officer"
    ],
    "correctAnswer": "Council investigator looking into his disability claims",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Singles Night",
      "Storyline: Brian's date has another purpose",
      "Correct: Council investigator looking into his disability claims",
      "Subject: Brian's date has another purpose",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Brian's date has another purpose",
      "Specific plot: Singles Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39069",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What piece of bedroom furniture does Brian Potter buy when he imagines a new romance in Phoenix Nights?",
    "answers": [
      "A four-poster bed",
      "A water bed",
      "A rocking chair",
      "A dressing table"
    ],
    "correctAnswer": "A water bed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Singles Night",
      "Storyline: Brian's optimistic purchase",
      "Correct: A water bed",
      "Subject: Brian's optimistic purchase",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Brian's optimistic purchase",
      "Specific plot: Singles Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39070",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Who builds the robot for Max and Paddy's competition entry at the Phoenix Club?",
    "answers": [
      "Brian Potter",
      "Jerry St Clair",
      "Ray Von",
      "Young Kenny"
    ],
    "correctAnswer": "Ray Von",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Comedy Robot Wars",
      "Storyline: Robot Wars construction",
      "Correct: Ray Von",
      "Subject: Robot Wars construction",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Robot Wars construction",
      "Specific plot: Comedy Robot Wars",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39071",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What new job opportunity is offered to Jerry after his comedy performance in Phoenix Nights?",
    "answers": [
      "Hosting a breakfast radio show",
      "Managing a rival nightclub",
      "Joining a travelling circus",
      "Working as a singer on a cruise ship"
    ],
    "correctAnswer": "Working as a singer on a cruise ship",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Comedy Robot Wars",
      "Storyline: Jerry's cruise job offer",
      "Correct: Working as a singer on a cruise ship",
      "Subject: Jerry's cruise job offer",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Jerry's cruise job offer",
      "Specific plot: Comedy Robot Wars",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39072",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What does Brian Potter falsely claim about Jerry's health to help secure the Talent Trek final for the club?",
    "answers": [
      "That Jerry is dying",
      "That Jerry has lost his voice",
      "That Jerry is recovering from surgery",
      "That Jerry has been declared disabled"
    ],
    "correctAnswer": "That Jerry is dying",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Talent Trek Finals",
      "Storyline: Sympathy used to get talent competition",
      "Correct: That Jerry is dying",
      "Subject: Sympathy used to get talent competition",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Sympathy used to get talent competition",
      "Specific plot: Talent Trek Finals",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39073",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Which rival club owner discards a cigar that starts the blaze which destroys the Phoenix Club?",
    "answers": [
      "Brian Potter",
      "Den Perry",
      "Keith Lard",
      "Ray Von"
    ],
    "correctAnswer": "Den Perry",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Talent Trek Finals",
      "Storyline: Rival causes club fire",
      "Correct: Den Perry",
      "Subject: Rival causes club fire",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Rival causes club fire",
      "Specific plot: Talent Trek Finals",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39074",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Where has Jerry St Clair been reduced to working when Brian tries to reassemble the Phoenix Club team?",
    "answers": [
      "Tesco",
      "Morrisons",
      "Asda",
      "The council offices"
    ],
    "correctAnswer": "Asda",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Brian Gets Everyone Back Together",
      "Storyline: Jerry's temporary retail job",
      "Correct: Asda",
      "Subject: Jerry's temporary retail job",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Jerry's temporary retail job",
      "Specific plot: Brian Gets Everyone Back Together",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39075",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Which TV quiz presenter appears as Brian Potter's old friend Hoss Cartwright in Phoenix Nights?",
    "answers": [
      "Roy Walker",
      "Les Dennis",
      "Bob Holness",
      "Jim Bowen"
    ],
    "correctAnswer": "Jim Bowen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Brian Gets Everyone Back Together",
      "Storyline: Friend with Blackpool club",
      "Correct: Jim Bowen",
      "Subject: Friend with Blackpool club",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Friend with Blackpool club",
      "Specific plot: Brian Gets Everyone Back Together",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39076",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What fruity costume is Jerry forced to wear during the Phoenix Club's fundraising fun day?",
    "answers": [
      "A giant red berry",
      "A banana",
      "A pineapple",
      "A strawberry milkshake"
    ],
    "correctAnswer": "A giant red berry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Family Fun Day",
      "Storyline: Jerry's fruit costume",
      "Correct: A giant red berry",
      "Subject: Jerry's fruit costume",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Jerry's fruit costume",
      "Specific plot: Family Fun Day",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39077",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What event is recreated for television when Brian Potter gets the Phoenix Club featured on Crimetime?",
    "answers": [
      "The theft of the club's cash box",
      "The fire at the Phoenix Club",
      "A fight involving a visiting horse",
      "A robbery in the car park"
    ],
    "correctAnswer": "The fire at the Phoenix Club",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Crimetime",
      "Storyline: Crime programme reconstruction",
      "Correct: The fire at the Phoenix Club",
      "Subject: Crime programme reconstruction",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Crime programme reconstruction",
      "Specific plot: Crimetime",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39078",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Who is hired to work behind the bar while Brian is arranging the Phoenix's television publicity?",
    "answers": [
      "Kenny Senior",
      "Den Perry",
      "Spencer",
      "Hoss Cartwright"
    ],
    "correctAnswer": "Spencer",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Crimetime",
      "Storyline: New barman during reconstruction",
      "Correct: Spencer",
      "Subject: New barman during reconstruction",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: New barman during reconstruction",
      "Specific plot: Crimetime",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39079",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Under which stage name does Paddy perform his striptease at the Phoenix Club in Phoenix Nights?",
    "answers": [
      "Lord Love Rocket",
      "Captain Romance",
      "Mr Midnight",
      "Prince of Passion"
    ],
    "correctAnswer": "Lord Love Rocket",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Ladies' Night",
      "Storyline: Paddy's stage identity",
      "Correct: Lord Love Rocket",
      "Subject: Paddy's stage identity",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Paddy's stage identity",
      "Specific plot: Ladies' Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39080",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "What dangerous favour does a woman ask Max to perform during a ladies' night at the Phoenix Club?",
    "answers": [
      "Steal her car",
      "Kill her husband",
      "Hide her jewels",
      "Forge her signature"
    ],
    "correctAnswer": "Kill her husband",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Ladies' Night",
      "Storyline: Max asked to do a crime",
      "Correct: Kill her husband",
      "Subject: Max asked to do a crime",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Max asked to do a crime",
      "Specific plot: Ladies' Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_39081",
    "category": "Television",
    "programme": "Phoenix Nights",
    "question": "Where is Brian Potter trapped when the electricity fails during the Phoenix Club's ladies' night?",
    "answers": [
      "Inside a lift",
      "In the cellar",
      "On a stairlift",
      "Inside the club's toilets"
    ],
    "correctAnswer": "On a stairlift",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Sitcom",
      "Comedy",
      "Phoenix Nights",
      "Programme: Phoenix Nights",
      "Channel 4",
      "Peter Kay",
      "Episode: Ladies' Night",
      "Storyline: Brian trapped during power cut",
      "Correct: On a stairlift",
      "Subject: Brian trapped during power cut",
      "2001-2002 Channel 4 Comedy",
      "Character or scene: Brian trapped during power cut",
      "Specific plot: Ladies' Night",
      "Source: https://thetvdb.com/series/phoenix-nights/allseasons/official"
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
        q.dailyEligible!==true)) throw Error('Pack 358 full audit validation failed');
module.exports = questions;
