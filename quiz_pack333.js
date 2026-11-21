
 // quiz_pack333.js
 // PuzzlePilot — The Bigggggg Quiz
 // Television: Derek (Channel 4, 2012–2014).
 // Complete scripted run: 2012 pilot, two six-episode series, 2014 finale.
 // Includes a question about the separate 2013 making-of documentary.
 // No fixed question count: no padding, and no artificial limit.
 // Each line: question | correct answer | three alternatives | difficulty | seven bespoke tags.
 // Checked against Channel 4 press information, British Comedy Guide cast/episode
 // listings, TVmaze episode summaries, and Television Academy award records.

 const programme = 'Derek';
 const facts = `Which comedian played the title character Derek Noakes?|Ricky Gervais|Stephen Merchant|Karl Pilkington|David Earl|Easy|Ricky Gervais|Derek Noakes|Title Role|Lead Performer|Care Home Worker|Comedy Drama|Actor Casting
 Which actress portrayed Derek's best friend and care-home manager Hannah?|Kerry Godliman|Holli Dempsey|Vicky Hall|Ruth Bratt|Easy|Kerry Godliman|Hannah|Home Manager|Derek Best Friend|Leading Actress|Care Home Staff|Character Casting
 Who played the grumpy caretaker Dougie?|Karl Pilkington|David Earl|Brett Goldstein|Colin Hoult|Easy|Karl Pilkington|Dougie|Caretaker|Derek Landlord|First Acting Role|Supporting Cast|Maintenance Worker
 Which actor played the frequently unemployed Kev?|David Earl|Karl Pilkington|Joe Wilkinson|Brett Goldstein|Easy|David Earl|Kev|Unemployed Friend|Broad Hill Regular|Comic Character|Actor Casting|Social Outsider
 Which actress played former troubled teenager Vicky?|Holli Dempsey|Kerry Godliman|Kay Noone|Vicky Hall|Medium|Holli Dempsey|Vicky|Former Delinquent|Care Home Assistant|Character Development|Casting|Second Series
 Who portrayed Hannah's romantic interest Tom?|Brett Goldstein|Tony Rohr|Colin Hoult|David Earl|Medium|Brett Goldstein|Tom|Hannah Romance|Grandson Of Resident|Supporting Actor|Finale Wedding|Character Casting
 Which actor played Derek's estranged father Anthony?|Tony Rohr|Tim Barlow|Arthur Nightingale|Barry Martin|Medium|Tony Rohr|Anthony Noakes|Derek Father|Reconciliation|Second Series Resident|Casting|Family Story
 Who played the unpleasant replacement caretaker Geoff?|Colin Hoult|Karl Pilkington|Joe Wilkinson|David Earl|Medium|Colin Hoult|Geoff|Replacement Caretaker|Series Two|Workplace Conflict|Antagonistic Employee|Actor Casting
 Which comedian played Kev's brother Cliff?|Joe Wilkinson|Brett Goldstein|Stephen Merchant|Tony Rohr|Medium|Joe Wilkinson|Cliff|Kev Brother|Series Two Guest|Family Connection|Comic Actor|Supporting Cast
 Which actress played Derek's girlfriend Tracey?|Vicky Hall|Holli Dempsey|Kerry Godliman|Kay Noone|Medium|Vicky Hall|Tracey|Derek Girlfriend|Online Dating|Series Two|Romance|Guest Actress
 Who portrayed care-home resident Lizzie?|Kay Noone|Ninette Finch|Margaret Towner|Joan Linder|Hard|Kay Noone|Lizzie|Elderly Resident|Broad Hill|Ensemble Cast|Character Casting|Care Home Community
 Which actor played elderly resident Jack?|Tim Barlow|Tony Rohr|Barry Martin|Arthur Nightingale|Hard|Tim Barlow|Jack|Care Home Resident|Elderly Character|Broad Hill|Supporting Actor|Casting
 Which actor played care-home resident Arthur?|Arthur Nightingale|Tim Barlow|Tony Rohr|Barry Martin|Hard|Arthur Nightingale|Arthur|Broad Hill Resident|Elderly Character|Ensemble|Actor Casting|Care Home Life
 Who played Tom's grandmother Annie?|Ninette Finch|Kay Noone|Sheila Collings|Margaret Towner|Hard|Ninette Finch|Annie|Tom Grandmother|Resident|Anthony Date|Supporting Actress|Casting
 Who played resident Joan in the original Derek pilot?|Joan Linder|Kerry Godliman|Ninette Finch|Ruth Bratt|Hard|Joan Linder|Joan|2012 Pilot|Care Home Resident|First Episode|Guest Actress|Casting
 Which UK broadcaster first aired Derek?|Channel 4|BBC One|ITV|BBC Two|Easy|Channel 4|Original Broadcaster|British Television|2012 Pilot|Transmission|Network|Comedy Commission
 What is the surname of the programme's central character Derek?|Noakes|Brent|Millman|Pilkington|Easy|Derek Noakes|Character Surname|Title Character|Care Worker|Ricky Gervais|Fictional Identity|Main Role
 What is the name of the retirement home where Derek works?|Broad Hill|Sunny View|Fenchurch House|Hilltop Lodge|Easy|Broad Hill|Retirement Home|Main Setting|Care Workplace|Hannah Manager|Resident Community|Fictional Location
 What sort of workplace provides the main setting for Derek?|A retirement home|A television studio|A police station|A supermarket|Easy|Elderly Care|Retirement Home|Care Workers|Workplace Setting|Residents|British Comedy Drama|Series Premise
 What is Hannah's principal responsibility at Broad Hill?|Managing the home and caring for residents|Running the local police station|Teaching at a secondary school|Operating a film studio|Easy|Hannah|Care Home Manager|Resident Welfare|Staff Leadership|Professional Duty|Broad Hill|Workplace Role
 What is Dougie's job at Broad Hill?|Caretaker|Social worker|Visiting doctor|Solicitor|Easy|Dougie|Caretaker|Building Maintenance|Broad Hill Staff|Odd Jobs|Karl Pilkington|Occupation
 How is Dougie connected to Derek outside their jobs?|He is Derek's landlord and housemate|He is Derek's brother|He is Derek's former schoolteacher|He is Derek's son|Medium|Dougie|Derek Housemate|Landlord|Personal Friendship|Shared Home|Living Arrangements|Character Relationship
 What is Derek's favourite personal collecting hobby?|Collecting autographs|Collecting rare stamps|Collecting vintage coins|Collecting football programmes|Medium|Derek Noakes|Autograph Hunting|Personal Hobby|Celebrity Signatures|Character Interests|Collecting|Series Background
 Apart from caring for older people, what is Derek especially passionate about?|Animals|Classic motor racing|Collecting coins|Professional boxing|Easy|Derek Noakes|Animal Lover|Compassion|Wildlife Care|Pets|Character Values|Kindness
 What style of filming makes Derek resemble a documentary about its characters?|Mockumentary|Stop-motion animation|Multi-camera game show|Live news broadcast|Medium|Mockumentary|Documentary Style|Single Camera|Interview Scenes|Storytelling Format|Fictional Crew|Comedy Drama
 On which date did the original Derek pilot air in the UK?|12 April 2012|30 January 2013|23 April 2014|22 December 2014|Medium|Pilot Broadcast|12 April 2012|Channel 4|First Appearance|Programme Premiere|Broadcast Date|2012 Television
 In what year did Derek's first full six-episode series begin?|2013|2011|2014|2016|Easy|First Series|2013 Debut|Channel 4|Series Commission|Television Timeline|Programme History|Broadcast Year
 How many regular episodes were made in each full series of Derek?|Six|Four|Eight|Ten|Easy|Six Episodes|Series One|Series Two|Season Structure|Broadcast Count|Episode Format|Programme Statistics
 How many scripted Derek episodes aired including the pilot and final special?|Fourteen|Twelve|Thirteen|Sixteen|Medium|Fourteen Episodes|Pilot|Two Six Part Series|Final Special|Broadcast Total|Complete Run|Episode Count
 Which two production roles did Ricky Gervais perform in addition to starring in Derek?|Writer and director|Costume designer and cinematographer|Composer and stunt coordinator|Casting director and camera operator|Medium|Ricky Gervais|Writer|Director|Production Credits|Creative Control|Derek Scripts|Behind The Scenes
 Which production company made Derek for Channel 4?|Derek Productions|Kudos|Hat Trick Productions|Left Bank Pictures|Medium|Derek Productions|Production Company|Channel 4 Commission|Television Studio|Programme Credits|British Drama|Behind The Scenes
 Who was a credited producer of the Derek television series?|Charlie Hanson|Gill Isles|David Meanti|Jane Featherstone|Hard|Charlie Hanson|Producer|Derek Productions|Production Team|Television Credits|Programme Crew|Behind The Scenes
 What threatens Broad Hill's future at the beginning of the first series?|Local council budget cuts|An earthquake|A bank robbery|A railway strike|Easy|Broad Hill Funding|Council Cuts|Series One Opener|Home Closure Threat|Local Authority|Financial Pressure|Resident Welfare
 What milestone birthday does Derek celebrate in the second episode of series one?|His 50th|His 40th|His 60th|His 30th|Easy|Derek Birthday|Fiftieth Birthday|Series One Episode Two|Broad Hill Party|Age Milestone|Celebrations|2013 Storyline
 What brings troubled teenager Vicky into the home early in the series?|Community service|A temporary teaching placement|A police promotion|An inheritance dispute|Medium|Vicky|Community Service|Troubled Teenager|Broad Hill|Series One|Personal Growth|Care Work Introduction
 Which injured animal is Derek determined to help in the third episode of series one?|A baby bird|A rabbit|A stray cat|A hedgehog|Medium|Baby Bird|Series One Episode Three|Derek Animal Care|Rescue Attempt|Fallen From Tree|Compassion|Wildlife
 Where do Derek and friends take some residents on an outing in the first series?|The beach|A football stadium|A theatre in Paris|A shopping centre in Leeds|Medium|Beach Trip|Series One Episode Four|Residents Outing|Dougie|Kev|Seaside|Care Home Excursion
 What does Derek try to sell to raise funds for the home in series one?|His autograph collection|His second-hand car|His football boots|His computer games|Medium|Autographs|Fundraising|Series One Episode Four|Derek Collection|Broad Hill Finances|Sale Attempt|Charitable Effort
 What sort of show do the staff organise for Broad Hill in series one?|A cabaret show|A detective play|A television quiz tournament|A cookery competition|Medium|Cabaret|Series One Episode Five|Retirement Home Entertainment|Talent Show|Residents|Staff Performance|Fundraising Event
 Which 1980s band inspires Kev's proposed film script for the home cabaret?|Duran Duran|Spandau Ballet|Wham!|Culture Club|Medium|Duran Duran|Kev Screenplay|Series One Episode Five|Cabaret|Eighties Pop|Band Film|Entertainment Committee
 Who contacts Hannah near the end of the first series hoping to meet Derek?|Derek's estranged father|Derek's former school headmaster|Derek's unknown twin brother|Derek's childhood football coach|Medium|Derek Estranged Father|Hannah Phone Call|Series One Finale|Anthony|Family Reunion|Abandonment|Reconnection
 How does Derek initially react to an offer to meet his long-absent father?|He refuses to see him|He immediately moves in with him|He asks him to run the retirement home|He reports him to the police|Medium|Derek Father|Family Rejection|Series One Episode Six|Childhood Abandonment|Reunion Refusal|Emotional Story|Anthony
 What change does Derek welcome at Broad Hill in the second-series premiere?|His father moves into the home|The home becomes a hotel|Hannah leaves the country|Kev is made headmaster|Medium|Anthony Moves In|Series Two Premiere|Derek Father|Family Reconciliation|Broad Hill Resident|2014 Return|Home Life
 Which member of staff leaves Broad Hill during the second series?|Dougie|Hannah|Derek|Vicky|Medium|Dougie Departure|Series Two|Caretaker Change|Karl Pilkington|Broad Hill Staff|Character Exit|Workplace Transition
 Who takes over caretaker duties at Broad Hill following Dougie's departure?|Geoff|Kev|Tom|Cliff|Medium|Geoff|New Caretaker|Dougie Replacement|Series Two|Hostile Colleague|Building Maintenance|Workplace Change
 What does Kev try to do when job opportunities appear at Broad Hill in series two?|Clean up his act|Become a police officer|Open a nightclub|Move permanently to Spain|Medium|Kev|Job Opportunities|Series Two Episode Two|Self Improvement|Employment Ambition|Broad Hill|Personal Development
 Which relative does Kev turn to for help with his problems in series two?|His brother Cliff|His father Anthony|His uncle Tom|His nephew Jack|Medium|Kev|Cliff|Brother Relationship|Series Two Episode Three|Family Support|Personal Struggles|Joe Wilkinson
 Whom does Derek's father Anthony take on a date in series two?|Tom's grandmother Annie|Hannah's mother|Vicky's sister|Derek's former teacher|Medium|Anthony|Annie|Series Two Episode Three|Elderly Romance|Tom Grandmother|Dating|Family Connection
 Which London attraction does the Broad Hill group visit in series two?|London Zoo|Madame Tussauds|The London Eye|Wembley Stadium|Medium|London Zoo|Series Two Episode Four|Day Trip|Animal Lover|Broad Hill Outing|Giraffes|Penguins
 Which animal-rescue organisation visits Broad Hill in the fifth episode of series two?|Meadway animal rescue centre|Battersea Dogs and Cats Home|RSPB headquarters|The National Marine Aquarium|Medium|Meadway Rescue|Series Two Episode Five|Animal Centre|Broad Hill Visit|Pet Welfare|Derek Joy|Community Outreach
 What is the name of the dog Derek enjoys meeting during the animal-rescue visit?|Ivor|Oscar|Stanley|Max|Medium|Ivor|Rescue Dog|Meadway|Series Two Episode Five|Derek Animals|Pet Visitor|Dog Name
 How does Derek arrange the romantic date at the end of series two?|Through an online dating website|Through a work raffle|Through a radio phone-in|Through a television talent show|Medium|Derek Online Dating|Series Two Finale|Dating Website|New Relationship|Tracey|Romantic Hope|Internet Introduction
 Which co-worker tries to spoil Derek's date before Kev defends him?|Geoff|Dougie|Tom|Cliff|Medium|Geoff|Derek Date|Series Two Episode Six|Kev Defends Derek|Workplace Bullying|Care Home Conflict|Unkind Behaviour
 What is the name of the woman Derek begins dating near the end of the second series?|Tracey|Vicky|Lizzie|Molly|Medium|Tracey|Derek Girlfriend|Online Date|Series Two Episode Six|Romance|2014 Ending|New Relationship
 Which couple prepare to marry in Derek's final Christmas special?|Hannah and Tom|Vicky and Dougie|Derek and Tracey|Kev and Lizzie|Easy|Hannah|Tom|Christmas Finale|Wedding|Romantic Resolution|Broad Hill Celebration|2014 Special
 Which character is preparing to take over Hannah's responsibilities in the last special?|Vicky|Tracey|Lizzie|Annie|Medium|Vicky|Hannah Successor|2014 Christmas Special|Care Work Career|Staff Transition|Broad Hill Leadership|Finale Plans
 Whose behaviour pushes Hannah to throw him out during the 2014 finale?|Kev|Tom|Derek|Anthony|Medium|Kev|Hannah|Christmas Special|Disruptive Behaviour|Care Home Rules|Friendship Crisis|Finale Conflict
 What personal theme does Kev come to understand in Derek's final special?|The importance of family|The value of winning competitions|The benefits of fame|The need to travel abroad|Medium|Kev|Family Values|2014 Finale|Emotional Resolution|Relationship Growth|Christmas Special|Personal Redemption
 On what date did Derek's concluding Christmas special air on Channel 4?|22 December 2014|25 December 2013|28 May 2014|1 January 2015|Medium|22 December 2014|Final Special|Broadcast Date|Channel 4|Christmas Television|Series Conclusion|Finale Date
 What behind-the-scenes programme accompanied Derek's first series in 2013?|The Making of Derek|Derek on Tour|Inside the Whistle|The Gervais Diaries|Medium|Making Of Derek|2013 Documentary|Behind The Scenes|Production Interview|Karl Pilkington|Kerry Godliman|Channel 4 Extra
 In which 2014 Emmy acting category was Ricky Gervais nominated for Derek?|Outstanding Lead Actor in a Comedy Series|Outstanding Lead Actor in a Drama Series|Outstanding Supporting Actor in a Comedy Series|Outstanding Guest Actor in a Drama Series|Medium|2014 Emmys|Lead Comedy Actor|Ricky Gervais|Awards Nomination|Television Academy|Derek Performance|Acting Recognition
 For which 2015 Golden Globe acting category was Ricky Gervais nominated for Derek?|Best Actor in a Television Series - Musical or Comedy|Best Supporting Actor in a Motion Picture|Best Actor in a Motion Picture - Drama|Best Actor in a Limited Series - Drama|Medium|Golden Globes 2015|Ricky Gervais|Television Comedy Actor|Awards Nomination|Derek Series|Performance Recognition|US Awards`;

 const FIRST_ID = 15556;
 const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
 const questions = facts.trim().split('\n').map((line, index) => {
   const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
   const fields = line.trim().split('|').map(value => value.trim());
   if (fields.length !== 13) throw new Error(`Expected 13 fields at ${id}; found ${fields.length}`);
   const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
   if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
     throw new Error(`Missing field at ${id}`);
   if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
     throw new Error(`Difficulty or question-specific tags invalid at ${id}`);
   const answers = [wrong1, wrong2, wrong3];
   if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
     throw new Error(`Duplicate answer choice at ${id}`);
   answers.splice(index % 4, 0, correctAnswer);
   const tags = [...new Map([
     'Television', 'British Television', 'Channel 4', 'Comedy Drama',
     'Mockumentary', '2012-2014', 'Care Home', 'Elderly Care',
     'Derek', 'Programme: Derek', correctAnswer, ...specificTags
   ].map(tag => [normalise(tag), tag])).values()];
   return {id, category: 'Television', programme, question, answers,
     correctAnswer, difficulty, tags, dailyEligible: true};
 });

 // Validate the real exported objects, not merely the raw source rows.
 if (!questions.length || questions[0].id !== 'tv_15556' ||
     new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => normalise(q.question))).size !== questions.length)
   throw new Error('Pack 333 duplicate ID or question wording');
 if (questions.some((q, index) =>
     q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
     q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
     new Set(q.answers.map(normalise)).size !== 4 ||
     q.tags.length < 14 || !q.tags.includes('Programme: Derek') ||
     q.dailyEligible !== true))
   throw new Error('Pack 333 export validation failed');
// 21 November 2026 storyline audit: retain all original 62 entries and
// IDs tv_15556–tv_15617. Additional questions track the pilot, every
// series episode and the 2014 finale, with source URLs in metadata.
const auditAdditions = [
  {
    "id": "tv_37184",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what television quiz show does the title character enjoy watching with residents?",
    "answers": [
      "Deal or No Deal",
      "The Chase",
      "University Challenge",
      "Mastermind"
    ],
    "correctAnswer": "Deal or No Deal",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Pilot",
      "Episode-specific storyline",
      "Correct answer: Deal or No Deal",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/0/1/",
      "UK English",
      "Derek Favourites",
      "Care Home Television",
      "Game Show",
      "Pilot"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37185",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what embarrassing accident does Derek have after sitting down in a dessert?",
    "answers": [
      "He falls down the stairs",
      "He falls into a pond",
      "He crashes into a window",
      "He trips over a wheelchair"
    ],
    "correctAnswer": "He falls into a pond",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Pilot",
      "Episode-specific storyline",
      "Correct answer: He falls into a pond",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/0/1/",
      "UK English",
      "Dessert Accident",
      "Fishpond",
      "Pilot",
      "Physical Comedy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37186",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, who defends Derek when two unpleasant young women mock him in a pub?",
    "answers": [
      "Vicky",
      "Annie",
      "Hannah",
      "Tracey"
    ],
    "correctAnswer": "Hannah",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Pilot",
      "Episode-specific storyline",
      "Correct answer: Hannah",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/0/1/",
      "UK English",
      "Pub Confrontation",
      "Hannah Protects Derek",
      "Pilot",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37187",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what do local council officials propose to reduce running costs at Broad Hill?",
    "answers": [
      "Closing the residents' kitchen",
      "Selling the staff minibus",
      "Ending all family visits",
      "Reducing the number of employees"
    ],
    "correctAnswer": "Reducing the number of employees",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 1",
      "Episode-specific storyline",
      "Correct answer: Reducing the number of employees",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/1/",
      "UK English",
      "Budget Cuts",
      "Staff Streamlining",
      "Council Visit",
      "Threat To Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37188",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what has Derek kept in the sink to protect them from fish?",
    "answers": [
      "Tadpoles",
      "Goldfish",
      "Newts",
      "Frogs' eggs"
    ],
    "correctAnswer": "Tadpoles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 1",
      "Episode-specific storyline",
      "Correct answer: Tadpoles",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/1/",
      "UK English",
      "Tadpoles",
      "Bathroom Sink",
      "Derek Animals",
      "Council Inspection"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37189",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which visitor is found naked in a resident's bed during the council's inspection?",
    "answers": [
      "Dougie",
      "Kev",
      "Tom",
      "Anthony"
    ],
    "correctAnswer": "Kev",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 1",
      "Episode-specific storyline",
      "Correct answer: Kev",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/1/",
      "UK English",
      "Kev",
      "Naked In Bed",
      "Council Inspection",
      "Care Home Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37190",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, on which London shopping street do Derek and his friends unsuccessfully collect petition signatures?",
    "answers": [
      "Oxford Street",
      "Carnaby Street",
      "Hampstead High Street",
      "Baker Street"
    ],
    "correctAnswer": "Hampstead High Street",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 1",
      "Episode-specific storyline",
      "Correct answer: Hampstead High Street",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/1/",
      "UK English",
      "Hampstead High Street",
      "Petition",
      "Save Broad Hill",
      "Local Campaign"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37191",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what was the offence that led to Vicky being assigned community service at Broad Hill?",
    "answers": [
      "Vandalising a bus stop",
      "Shoplifting cosmetics",
      "Driving without insurance",
      "Stealing shoes from a shop"
    ],
    "correctAnswer": "Stealing shoes from a shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Stealing shoes from a shop",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/2/",
      "UK English",
      "Vicky Origins",
      "Shoe Theft",
      "Community Service",
      "Character Introduction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37192",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which former Spice Girl does Vicky think she resembles?",
    "answers": [
      "Victoria Beckham",
      "Emma Bunton",
      "Mel B",
      "Geri Halliwell"
    ],
    "correctAnswer": "Victoria Beckham",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Victoria Beckham",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/2/",
      "UK English",
      "Vicky",
      "Victoria Beckham",
      "Posh Spice",
      "Self Image"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37193",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what strong alcoholic drink does Kev give Derek during his 50th birthday party?",
    "answers": [
      "Whisky",
      "Special Brew",
      "Port",
      "Gin and tonic"
    ],
    "correctAnswer": "Special Brew",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Special Brew",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/2/",
      "UK English",
      "Birthday Party",
      "Kev",
      "Special Brew",
      "Hannah Intervention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37194",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what type of animal does Derek most enjoy reading about during his trip to the library?",
    "answers": [
      "Dogs",
      "Horses",
      "Cats",
      "Dolphins"
    ],
    "correctAnswer": "Cats",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Cats",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/2/",
      "UK English",
      "Library Excursion",
      "Cat Books",
      "Derek Animals",
      "Dougie Minibus"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37195",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which weekly outing does Dougie organise for the elderly residents?",
    "answers": [
      "A visit to the cinema",
      "An afternoon at the races",
      "A theatre matinee",
      "A trip to the library"
    ],
    "correctAnswer": "A trip to the library",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 2",
      "Episode-specific storyline",
      "Correct answer: A trip to the library",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/2/",
      "UK English",
      "Dougie",
      "Library Visit",
      "Residents Outing",
      "Care Home Routine"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37196",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what creature does Kev persuade Derek to lick in the garden?",
    "answers": [
      "A toad",
      "A snail",
      "A caterpillar",
      "A frog's egg"
    ],
    "correctAnswer": "A toad",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: A toad",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Kev Prank",
      "Toad",
      "Garden Wildlife",
      "Derek Curiosity"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37197",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what emergency service does Derek call after finding a fallen baby bird?",
    "answers": [
      "The fire brigade",
      "An ambulance",
      "The coastguard",
      "Mountain rescue"
    ],
    "correctAnswer": "An ambulance",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: An ambulance",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Baby Bird",
      "Ambulance Call",
      "Animal Welfare",
      "Misguided Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37198",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what sweet treats do Derek and Kev prepare for a fundraising jumble sale?",
    "answers": [
      "Chocolate brownies",
      "Jam doughnuts",
      "Fairy cakes",
      "Shortbread biscuits"
    ],
    "correctAnswer": "Fairy cakes",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: Fairy cakes",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Fairy Cakes",
      "Jumble Sale",
      "Broad Hill Fundraiser",
      "Derek And Kev"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37199",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what mistake does Derek make when buying a companion for his favourite frog ornament?",
    "answers": [
      "He buys a toy instead of an ornament",
      "He pays for a broken ornament",
      "He buys a ceramic toad",
      "He buys back his own frog"
    ],
    "correctAnswer": "He buys back his own frog",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: He buys back his own frog",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Frog Ornament",
      "Jumble Sale",
      "Accidental Buyback",
      "Dougie"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37200",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which resident's daughter tries to obtain her mother's engagement ring while visiting Broad Hill?",
    "answers": [
      "Marg's",
      "Lizzie's",
      "Annie's",
      "Joan's"
    ],
    "correctAnswer": "Marg's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: Marg's",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Marg",
      "Shelley",
      "Engagement Ring",
      "Family Conflict"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37201",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, to whom does the dying resident Marg offer her engagement ring?",
    "answers": [
      "Derek",
      "Tom",
      "Dougie",
      "Kev"
    ],
    "correctAnswer": "Tom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: Tom",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Marg Gift",
      "Tom",
      "Engagement Ring",
      "Last Wishes"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37202",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, why does Hannah have to interrupt her long-awaited date with Tom?",
    "answers": [
      "She is summoned to the council office",
      "A burst pipe floods the home",
      "A resident becomes seriously ill",
      "She is called to the police station"
    ],
    "correctAnswer": "A resident becomes seriously ill",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 3",
      "Episode-specific storyline",
      "Correct answer: A resident becomes seriously ill",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/3/",
      "UK English",
      "Hannah And Tom",
      "Marg Illness",
      "Interrupted Date",
      "Care Home Duty"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37203",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, why does Derek's plan to sell his autographs fail at the shop?",
    "answers": [
      "The shop is closed for refurbishment",
      "He loses the photographs on the bus",
      "The signatures have been photocopied",
      "He cannot identify many of the signatures"
    ],
    "correctAnswer": "He cannot identify many of the signatures",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 4",
      "Episode-specific storyline",
      "Correct answer: He cannot identify many of the signatures",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/4/",
      "UK English",
      "Autographs",
      "Dealer",
      "Unidentified Signatures",
      "Fundraising Failure"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37204",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which former schoolmate of Hannah's visits Broad Hill with her mother?",
    "answers": [
      "Rebecca",
      "Shelley",
      "Vicky",
      "Tracey"
    ],
    "correctAnswer": "Rebecca",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Rebecca",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/4/",
      "UK English",
      "Rebecca",
      "Old Schoolmate",
      "Hannah Past",
      "Mrs Shaw"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37205",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what age does Rebecca remind Hannah she was when she left school?",
    "answers": [
      "Fourteen",
      "Sixteen",
      "Eighteen",
      "Twenty-one"
    ],
    "correctAnswer": "Sixteen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Sixteen",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/4/",
      "UK English",
      "Rebecca",
      "Hannah Education",
      "School Leaving Age",
      "Career Doubts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37206",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what does Kev write on seaside crabs with a marker pen during the residents' beach outing?",
    "answers": [
      "His own name",
      "The residents' names",
      "Rude words",
      "Football scores"
    ],
    "correctAnswer": "Rude words",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Rude words",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/4/",
      "UK English",
      "Seaside Excursion",
      "Kev",
      "Crabs",
      "Marker Pen"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37207",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what sort of performance does Derek plan as his contribution to the care-home cabaret?",
    "answers": [
      "Juggling",
      "Stand-up comedy",
      "Tap dancing",
      "Ventriloquism"
    ],
    "correctAnswer": "Ventriloquism",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Ventriloquism",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Derek Cabaret",
      "Puppet Act",
      "Talent Show",
      "Entertainment Committee"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37208",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what is the name of the rapper sent to Broad Hill for community service?",
    "answers": [
      "Deon",
      "Cliff",
      "Pete",
      "Geoff"
    ],
    "correctAnswer": "Deon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Deon",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Deon",
      "Community Service",
      "Rapper",
      "Broad Hill"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37209",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which actor and rapper known as Doc Brown plays Deon in Derek?",
    "answers": [
      "Ashley Walters",
      "Ben Bailey Smith",
      "Richard Blackwood",
      "Lenny Henry"
    ],
    "correctAnswer": "Ben Bailey Smith",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Ben Bailey Smith",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Ben Bailey Smith",
      "Doc Brown",
      "Deon Casting",
      "Guest Performer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37210",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what title does Kev give the Duran Duran tribute performance at Broad Hill?",
    "answers": [
      "Rio Forever",
      "Hungry Like the Wolf",
      "Boys on Film",
      "The Reflex"
    ],
    "correctAnswer": "Boys on Film",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Boys on Film",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Boys On Film",
      "Kev Script",
      "Duran Duran",
      "Cabaret Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37211",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which reluctant caretaker has to join Kev's Duran Duran tribute when a performer becomes unwell?",
    "answers": [
      "Geoff",
      "Tom",
      "Derek's father",
      "Dougie"
    ],
    "correctAnswer": "Dougie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Dougie",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Dougie",
      "Replacement Performer",
      "Cabaret",
      "Last Minute Stand In"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37212",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, who returns to conclude the cabaret with a heartfelt rap?",
    "answers": [
      "Deon",
      "Kev",
      "Joe",
      "Tom"
    ],
    "correctAnswer": "Deon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Deon",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/5/",
      "UK English",
      "Deon",
      "Final Rap",
      "Cabaret Closing",
      "Community Service"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37213",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which illness causes resident Lizzie to struggle to recognise her husband?",
    "answers": [
      "Parkinson's disease",
      "Alzheimer's disease",
      "Multiple sclerosis",
      "Arthritis"
    ],
    "correctAnswer": "Alzheimer's disease",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Alzheimer's disease",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Lizzie",
      "Alzheimers",
      "Memory Loss",
      "Gerald"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37214",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what is the name of Lizzie's devoted husband who visits her every day?",
    "answers": [
      "Arthur",
      "Jack",
      "Gerald",
      "Joe"
    ],
    "correctAnswer": "Gerald",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Gerald",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Gerald",
      "Lizzie Husband",
      "Daily Visits",
      "Marriage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37215",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which elderly Broad Hill resident dies during the first-series finale?",
    "answers": [
      "Annie",
      "Jack",
      "Arthur",
      "Lizzie"
    ],
    "correctAnswer": "Lizzie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Lizzie",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Lizzie Death",
      "First Series Finale",
      "Residents",
      "Bereavement"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37216",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what issue had affected Derek's father Anthony before he abandoned the family?",
    "answers": [
      "Alcoholism",
      "Gambling debts",
      "An overseas posting",
      "An inherited illness"
    ],
    "correctAnswer": "Alcoholism",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Alcoholism",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Anthony Noakes",
      "Alcoholism",
      "Abandonment",
      "Derek Childhood"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37217",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, at which event does Derek's estranged father appear unexpectedly in the first-series finale?",
    "answers": [
      "Derek's birthday",
      "Lizzie's funeral",
      "A staff wedding",
      "The home cabaret"
    ],
    "correctAnswer": "Lizzie's funeral",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Lizzie's funeral",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Anthony Return",
      "Lizzie Funeral",
      "Derek Family",
      "Reunion Attempt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37218",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which unlikely animal pairing in an online video delights Derek early in the first-series finale?",
    "answers": [
      "A dog riding a pony",
      "A parrot playing with a cat",
      "A baby monkey riding a pig",
      "A rabbit swimming with a duck"
    ],
    "correctAnswer": "A baby monkey riding a pig",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 1 Episode 6",
      "Episode-specific storyline",
      "Correct answer: A baby monkey riding a pig",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/1/6/",
      "UK English",
      "Derek Viral Video",
      "Baby Monkey",
      "Pig",
      "Animal Fascination"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37219",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what future family plans are Hannah and Tom discussing during the second-series opening?",
    "answers": [
      "Moving to Australia",
      "Adopting a dog",
      "Starting a restaurant",
      "Having a baby"
    ],
    "correctAnswer": "Having a baby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 1",
      "Episode-specific storyline",
      "Correct answer: Having a baby",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/1/",
      "UK English",
      "Hannah Tom",
      "Baby Plans",
      "Second Series",
      "Relationship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37220",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which actor plays the visiting financial professional Pete in the second series?",
    "answers": [
      "Tony Way",
      "Joe Wilkinson",
      "Colin Hoult",
      "Brett Goldstein"
    ],
    "correctAnswer": "Tony Way",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Tony Way",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Pete",
      "Tony Way",
      "City Worker",
      "Visitor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37221",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what does Derek value above money when discussing life with visitor Pete?",
    "answers": [
      "Expensive holidays",
      "Friendship",
      "Career promotion",
      "Owning a big house"
    ],
    "correctAnswer": "Friendship",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 2",
      "Episode-specific storyline",
      "Correct answer: Friendship",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Derek Values",
      "Pete Financier",
      "Friendship",
      "Money Debate"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37222",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what secret detail about Hannah and Tom's private life does Derek inadvertently share at Broad Hill?",
    "answers": [
      "They are planning to move abroad",
      "They are getting divorced",
      "They are trying for a baby",
      "They have bought a pet dog"
    ],
    "correctAnswer": "They are trying for a baby",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 2",
      "Episode-specific storyline",
      "Correct answer: They are trying for a baby",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Derek Overshares",
      "Hannah And Tom",
      "Baby Plans",
      "Staff Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37223",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what happy news do Hannah and Tom share with their colleagues?",
    "answers": [
      "Tom has inherited a house",
      "They have won a holiday",
      "They are adopting a puppy",
      "Hannah is pregnant"
    ],
    "correctAnswer": "Hannah is pregnant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 3",
      "Episode-specific storyline",
      "Correct answer: Hannah is pregnant",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Hannah Pregnancy",
      "Tom",
      "Happy Announcement",
      "Second Series"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37224",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what does Derek excitedly show the staff when Hannah's news becomes known?",
    "answers": [
      "A pregnancy test",
      "A wedding photograph",
      "A new passport",
      "A baby's first shoes"
    ],
    "correctAnswer": "A pregnancy test",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 3",
      "Episode-specific storyline",
      "Correct answer: A pregnancy test",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Derek Enthusiasm",
      "Pregnancy Test",
      "Hannah",
      "Episode Three"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37225",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what temporary role does Hannah arrange for Derek on the London Zoo visit?",
    "answers": [
      "Ticket seller",
      "Zookeeper for the day",
      "Tour-guide driver",
      "Gift-shop cashier"
    ],
    "correctAnswer": "Zookeeper for the day",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Zookeeper for the day",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Derek Zoo",
      "Zookeeper",
      "Animal Encounter",
      "Special Day"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37226",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which young man does Vicky meet while the residents visit London Zoo?",
    "answers": [
      "Deon",
      "Pete",
      "Andy",
      "Geoff"
    ],
    "correctAnswer": "Andy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Andy",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Vicky",
      "Andy",
      "Zoo Romance",
      "Animal Trip"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37227",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what tragedy occurs in Hannah and Tom's pregnancy storyline during the zoo outing?",
    "answers": [
      "Tom is injured in an accident",
      "Their home is burgled",
      "They are forced to move away",
      "Hannah suffers a miscarriage"
    ],
    "correctAnswer": "Hannah suffers a miscarriage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 4",
      "Episode-specific storyline",
      "Correct answer: Hannah suffers a miscarriage",
      "Episode source: https://www.tvguide.com/tvshows/derek/episodes-season-2/1030503546/",
      "UK English",
      "Hannah",
      "Miscarriage",
      "Tom",
      "Emotional Story"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37228",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which career move creates tension between Hannah and Tom during the second series?",
    "answers": [
      "Tom considers returning to the merchant navy",
      "Tom is offered a post at another care home",
      "Tom applies to become a teacher",
      "Tom takes a job as a professional athlete"
    ],
    "correctAnswer": "Tom considers returning to the merchant navy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Tom considers returning to the merchant navy",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/5/",
      "UK English",
      "Tom Career",
      "Merchant Navy",
      "Hannah Relationship",
      "Separation Concern"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37229",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what does Kev use to make sculptures in the fifth episode of series two?",
    "answers": [
      "Pieces of broken computer equipment",
      "Found objects and items from the home's kitchen",
      "Old car tyres",
      "Discarded musical instruments"
    ],
    "correctAnswer": "Found objects and items from the home's kitchen",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Found objects and items from the home's kitchen",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/5/",
      "UK English",
      "Kev Sculptures",
      "Found Objects",
      "Kitchen Items",
      "Hannah Annoyance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37230",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, why does Derek have to say a painful goodbye to Ivor the dog?",
    "answers": [
      "The dog is sent to a different shelter",
      "Its owner takes it abroad",
      "The elderly dog has cancer and must be put to sleep",
      "The dog escapes during a walk"
    ],
    "correctAnswer": "The elderly dog has cancer and must be put to sleep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 5",
      "Episode-specific storyline",
      "Correct answer: The elderly dog has cancer and must be put to sleep",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/5/",
      "UK English",
      "Ivor Dog",
      "Cancer",
      "Euthanasia",
      "Animal Rescue"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37231",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what drink does Derek try to sneak to his father Anthony in the fifth episode?",
    "answers": [
      "Lemonade",
      "Tea",
      "Hot chocolate",
      "Whisky"
    ],
    "correctAnswer": "Whisky",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 5",
      "Episode-specific storyline",
      "Correct answer: Whisky",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/5/",
      "UK English",
      "Anthony",
      "Whisky",
      "Derek Sneaking Drink",
      "Father Son"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37232",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what skill does Kev try to teach Derek shortly before his big date?",
    "answers": [
      "Riding a bicycle",
      "Swimming",
      "Driving a car",
      "Playing the piano"
    ],
    "correctAnswer": "Riding a bicycle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Riding a bicycle",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/6/",
      "UK English",
      "Kev Teaches Derek",
      "Bicycle",
      "Friendship",
      "Final Regular Episode"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37233",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what French dish causes Derek concern while dining with Tracey?",
    "answers": [
      "Escargots",
      "Frogs' legs",
      "Steak tartare",
      "Coq au vin"
    ],
    "correctAnswer": "Frogs' legs",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "Series 2 Episode 6",
      "Episode-specific storyline",
      "Correct answer: Frogs' legs",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2/6/",
      "UK English",
      "Derek Tracey",
      "French Food",
      "Frogs Legs",
      "Restaurant Date"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37234",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, what career change allows Tom to spend more time close to Hannah in the final special?",
    "answers": [
      "He takes an overseas teaching post",
      "He becomes a touring musician",
      "He finds a new job near home",
      "He joins the merchant navy"
    ],
    "correctAnswer": "He finds a new job near home",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "2014 Christmas special",
      "Episode-specific storyline",
      "Correct answer: He finds a new job near home",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2014/1/",
      "UK English",
      "Tom",
      "New Local Job",
      "Hannah Relationship",
      "Christmas Special"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37235",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which member of Kev's family makes an appearance in Derek's final special?",
    "answers": [
      "His father",
      "His twin sister",
      "His uncle",
      "His mother"
    ],
    "correctAnswer": "His mother",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "2014 Christmas special",
      "Episode-specific storyline",
      "Correct answer: His mother",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2014/1/",
      "UK English",
      "Kev Mother",
      "Family Reconciliation",
      "Christmas Special",
      "Guest Character"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37236",
    "category": "Television",
    "programme": "Derek",
    "question": "In Derek, which actor plays a guest character called Des in the closing special of Derek?",
    "answers": [
      "Toby Foster",
      "Joe Wilkinson",
      "Tony Way",
      "Colin Hoult"
    ],
    "correctAnswer": "Toby Foster",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Channel 4",
      "Comedy Drama",
      "Mockumentary",
      "Derek",
      "Programme: Derek",
      "2012–2014",
      "2014 Christmas special",
      "Episode-specific storyline",
      "Correct answer: Toby Foster",
      "Episode source: https://www.comedy.co.uk/tv/derek/episodes/2014/1/",
      "UK English",
      "Toby Foster",
      "Des Character",
      "Guest Cast",
      "2014 Special"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==115||
 questions[0].id!=='tv_15556'||questions[61].id!=='tv_15617'||
 auditAdditions[0].id!=='tv_37184'||auditAdditions[auditAdditions.length-1].id!=='tv_37236'||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.trim().toLowerCase())).size!==questions.length||
 questions.some(q=>q.category!=='Television'||q.programme!=='Derek'||
 q.answers.length!==4||new Set(q.answers.map(a=>a.trim().toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 !q.tags.includes('Programme: Derek')||q.tags.length<14||q.dailyEligible!==true)||
 auditAdditions.some(q=>!q.question.startsWith('In Derek, ')||q.tags.length<17))
 throw Error('Pack 333 audit validation failed');
module.exports = questions;
