
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

 module.exports = questions;
