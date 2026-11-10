
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
  What are Richie and Eddie secretly stealing from a neighbour in the episode Gas?|Gas|Electricity|Water|Television channels|Easy|Gas Episode|Illegal Gas Connection|Neighbour Supply|Utility Theft|Gas Man Visit|Series One|1991 Story
  In the first episode Smells, what product does Richie hope will make him attractive?|Pheromone spray|Hair dye|An expensive suit|A new aftershave advert|Medium|Smells Episode|Pheromones|Attraction Scheme|Richie Richard|Newspaper Advert|Series One Premiere|1991 Plot
  In Contest, what do Richie and Eddie argue about watching?|Television|A boxing match in person|A stage musical|An outdoor film screening|Easy|Contest Episode|Television Dispute|Flatmates Argument|Series One|Home Entertainment|Eddie Hitler|Richie Richard
  Which visitor tells Richie he will die within three days in Apocalypse?|A fairground fortune teller|A doctor|A police constable|An insurance agent|Medium|Apocalypse Episode|Fortune Teller|Three Day Prediction|Fairground Encounter|Richie Richard|Series One|Bad Luck
  What kind of shop do Richie and Eddie mind in the first-series episode 'S Up?|A newsagent's|A butcher's|A florist's|A toy shop|Medium|S Up Episode|Newsagent Shop|Mr Harrison|Temporary Shopkeepers|Series One|Landlord Favour|Retail Chaos
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
  Which official tries to close down the venue in Disco Inferno?|A fire and safety officer|A tax inspector|A health visitor|A traffic warden|Medium|Disco Inferno|Fire Safety Officer|Club Closure Threat|Series One|Health And Safety|2001 Plot|Brian Potter
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

  module.exports = questions;
