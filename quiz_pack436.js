// PuzzlePilot - The Bigggggg Quiz - Pack 436
// As Time Goes By (BBC One): Series 6-9 (1997-2002) and 2005 reunion specials.
// Completes the programme coverage begun in Pack 435.
// First ID: tv_25698. WordPad-ready CommonJS.
// Series 6-9 and 2005 reunion specials; completes the finished programme.
'use strict';

const FIRST_ID = 25698;
const programme = 'As Time Goes By';
const commonTags = [
  'Television', 'British Television', 'British Sitcom', 'BBC One',
  'As Time Goes By', 'Programme: As Time Goes By', 'Romantic Comedy',
  '1990s and 2000s Television'
];

// Question | correct answer | three distinct wrong answers | difficulty | seven specific tags.
const facts = `Who was followed on her walk home in the 1997 episode The Stalker?|Sandy|Judith|Jean|Penny|Easy|The Stalker|Series Six|Sandy Edwards|Walk Home|Suspicious Follower|1997|Protective Lionel
Who brought in a tough man called Nails when the family feared a stalker?|Alistair Deacon|Rocky Hardcastle|Stephen|Harry|Medium|The Stalker|Series Six|Alistair Deacon|Nails|Hired Tough Man|Sandy Edwards|1997
Who did the supposed stalker turn out to be in The Stalker?|A teenage boy with a crush on Sandy|An escaped prisoner|A private investigator|An ex-boyfriend of Jean|Medium|The Stalker|Series Six|Teenage Admirer|Sandy Edwards|Mistaken Threat|1997|Comic Revelation
Which object did Lionel reluctantly buy after a stallholder thought he was shoplifting?|An antique bugle|A silver teapot|A brass telescope|An old camera|Hard|The Stalker|Series Six|Market Stall|Antique Bugle|Shoplifting Suspicion|Lionel Hardcastle|1997
Who sought professional help over her mixed feelings about retiring from work?|Jean Hardcastle|Sandy Edwards|Judith Hanson|Penny|Easy|The Psychotherapist|Series Six|Jean Hardcastle|Retirement Anxiety|Therapy|Secretarial Agency|1997
Which profession did Jean consult in the 1997 episode The Psychotherapist?|A psychotherapist|An accountant|An employment lawyer|A marriage registrar|Medium|The Psychotherapist|Series Six|Private Consultation|Jean Hardcastle|Work Life|Retirement Decisions|1997
Why was Lionel upset by Jean's reluctance to retire in The Psychotherapist?|He felt her work mattered more to her than he did|He wanted to move to Canada immediately|He feared the agency would close without warning|He had accepted a job at her office|Medium|The Psychotherapist|Series Six|Lionel Hardcastle|Jean Hardcastle|Relationship Tension|Priorities|1997
What decision did Jean make after the disagreement in The Psychotherapist?|To commit to retirement|To sell the country house|To reopen the American TV project|To join the army reserve|Medium|The Psychotherapist|Series Six|Jean Hardcastle|Retirement Decision|Lionel Hardcastle|Work Change|1997
Which relatives did Jean and Lionel invite to the dinner featured in The Dinner Party?|Penny and Stephen|Rocky and Madge|Judith and Harry|Mrs Bale and Lol|Medium|The Dinner Party|Series Six|Penny|Stephen|Family Dinner|1997|London
Who was deliberately encouraged to do most of the talking at The Dinner Party?|Stephen|Rocky|Alistair|Harry|Medium|The Dinner Party|Series Six|Stephen|Conversation Diversion|Penny|Jean Hardcastle|1997
Why did Penny struggle to believe Jean's confession after The Dinner Party?|The genuine news sounded too extraordinary|Jean had previously told her she was emigrating|Stephen had secretly contradicted the story|Lionel had admitted inventing it as a joke|Medium|The Dinner Party|Series Six|Penny|Jean Hardcastle|Psychotherapist|Family Confession|1997
Which country-house employee behaved unusually in What's Wrong with Mrs Bale?|Mrs Bale|Gwen Flack|Sally Curtis|Miss Breeze|Easy|Whats Wrong With Mrs Bale|Series Six|Mrs Bale|Country House|Hampshire|Unusual Mood|1997
Who had offended Mrs Bale by making remarks about her age?|The local doctor|Alistair Deacon|Rocky Hardcastle|The village postman|Medium|Whats Wrong With Mrs Bale|Series Six|Mrs Bale|Doctor|Age Remarks|Hampshire|1997
What happened to Lionel before he could investigate Mrs Bale's gloomy mood?|He became ill with a bug|He sprained his ankle|He lost his voice completely|He was called away to Paris|Medium|Whats Wrong With Mrs Bale|Series Six|Lionel Hardcastle|Illness|Country House|Mrs Bale|1997
What unusual first name did Alistair give for his supposed new fiancee in 1997?|Mercury|Venus|Clover|Pandora|Medium|Alistairs Engagement|Series Six|Alistair Deacon|Mercury|Imaginary Fiancee|Judith Hanson|1997
What job did Judith's boyfriend Paul have in Alistair's Engagement?|Sports journalist|Airline pilot|Bookshop manager|Police detective|Medium|Alistairs Engagement|Series Six|Paul|Sports Journalist|Judith Hanson|Dating|1997
What did Judith's boyfriend Paul do on the evening the family was to meet Alistair's fiancee?|He stood her up after lying about work|He proposed in front of the family|He brought his mother to dinner|He invited Lionel on a reporting trip|Medium|Alistairs Engagement|Series Six|Paul|Judith Hanson|False Work Assignment|Dinner Plans|1997
What did Lionel suspect about Alistair's engagement announcement?|Mercury did not exist and the story was a ploy to win Judith back|Alistair was secretly marrying Sandy|The wedding had already happened abroad|Mercury was the name of a publishing firm|Medium|Alistairs Engagement|Series Six|Lionel Hardcastle|Alistair Deacon|Judith Hanson|False Engagement|1997
What caused the late-night alarm in The House Next Door?|Noises inside the supposedly empty neighbouring house|A car crash directly outside Jean's home|A burst water pipe in the kitchen|A fox trapped in the garden|Medium|The House Next Door|Series Six|Neighbouring House|Suspicious Noises|Family Alarm|1997|London
Who was actually inside the empty house in The House Next Door?|Its former owner collecting boxes|A runaway teenager|An escaped burglar|A construction surveyor|Medium|The House Next Door|Series Six|Former Owner|Boxes|False Alarm|Neighbouring Property|1997
Which policeman met Sandy after being called to investigate The House Next Door?|Harry|Nick|Paul|Kong|Easy|The House Next Door|Series Six|Harry|Police Officer|Sandy Edwards|First Meeting|1997
Which couple considered buying the house next door to Jean and Lionel?|Penny and Stephen|Rocky and Madge|Sandy and Harry|Alistair and Margaret|Medium|The House Next Door|Series Six|Penny|Stephen|House Purchase|Neighbour Dispute|1997
Who ended up buying the neighbouring property after the chaotic rival bids?|Alistair Deacon|Stephen|Harry|Rocky Hardcastle|Medium|The House Next Door|Series Six|Alistair Deacon|Property Bidding|Stephen|Neighbours|1997
To which Caribbean destination did Lionel plan a surprise holiday for Jean?|Barbados|Jamaica|St Lucia|Antigua|Medium|A Surprise For Jean|Series Six|Barbados|Surprise Holiday|Lionel Hardcastle|Jean Hardcastle|1997
At which London museum did Lionel rediscover the missing letter he had sent Jean from Korea?|Imperial War Museum|Victoria and Albert Museum|Science Museum|British Museum|Medium|A Surprise For Jean|Series Six|Imperial War Museum|Lost Letter|Korean War|Lionel And Jean|1997
What finally happened to the long-lost letter in A Surprise for Jean?|Jean was able to read it|It was auctioned to a collector|It was returned unopened to Korea|Alistair used it in a book advert|Medium|A Surprise For Jean|Series Six|Lost Letter|Jean Hardcastle|1950s Romance|Imperial War Museum|1997
What problem did Lionel resist admitting in the 1998 episode Pardon?|Difficulty hearing|Poor eyesight|A painful knee|A loss of taste|Easy|Pardon|Series Seven|Lionel Hardcastle|Hearing Problem|Ageing Comedy|1998|Medical Check
What caused Lionel's apparent hearing loss in Pardon?|A build-up of earwax|A ruptured eardrum|An ear infection|A faulty hearing aid|Medium|Pardon|Series Seven|Earwax|Hearing Specialist|Lionel Hardcastle|Medical Mix Up|1998
Which problem did Lionel wrongly think Jean needed specialist help with in Pardon?|Her eyesight|Her hearing|Her memory|Her sense of smell|Medium|Pardon|Series Seven|Jean Hardcastle|Eyesight|Mutual Concern|Alistair Deacon|1998
What was the name of Jean's former acquaintance who invited her to dinner in An Old Flame?|James Penny|Paul Davidson|Mike Barbosa|Eric Richards|Medium|An Old Flame|Series Seven|James Penny|Jean Hardcastle|Past Acquaintance|Dinner Date|1998
What problem spoiled Jean's reunion dinner with James Penny?|He drank too much and passed out|He confessed to stealing from her agency|He arrived with a television crew|He revealed he was engaged to Judith|Medium|An Old Flame|Series Seven|James Penny|Drinking Problem|Dinner|Jean Hardcastle|1998
Which profession did Sandy's boyfriend Harry work in?|Police officer|Firefighter|Solicitor|Dentist|Easy|An Old Flame|Series Seven|Harry|Sandy Edwards|Police Service|Boyfriend|1998
What was Jean curious to discover in The New Neighbours?|The identities and habits of the people next door|The price of Lionel's latest book|The location of Rocky's honeymoon|The opening date of a new office|Easy|The New Neighbours|Series Seven|Neighbour Curiosity|Jean Hardcastle|House Next Door|Snooping|1998
What sort of behaviour made the new neighbours troublesome in The New Neighbours?|They were constantly quarrelling|They held nightly orchestra rehearsals|They ran an illegal taxi service|They left a pet elephant outdoors|Medium|The New Neighbours|Series Seven|Duncan Neighbours|Arguments|House Next Door|Jean Hardcastle|1998
Who considered Alistair too flashy during a social outing in The New Neighbours?|Harry|Rocky|Stephen|Lionel|Medium|The New Neighbours|Series Seven|Harry|Alistair Deacon|Social Clash|Sandy Edwards|1998
What road project caused a controversy in the episode The Bypass?|A new village bypass|A motorway service station|A railway level crossing|A toll bridge|Easy|The Bypass|Series Seven|Road Proposal|Country Village|Hampshire|Protest|1998
What surprised Jean about the villagers' position on The Bypass?|They supported the proposed road|They were moving the village elsewhere|They wanted the road to go through Rocky's home|They had never heard of the project|Medium|The Bypass|Series Seven|Villagers Support Road|Jean Hardcastle|Mistaken Assumption|Rural Traffic|1998
Why did the villagers want the bypass in The Bypass?|To reduce traffic through their village|To create a new car-racing venue|To attract a film studio|To shorten the route to an airport|Medium|The Bypass|Series Seven|Less Traffic|Quiet Village|Local Campaign|Road Construction|1998
Which job did Penny want to take in Stephen's dental practice in Too Old... or Too Nosy?|Dental receptionist|Dental hygienist|Practice accountant|Dental surgeon|Medium|Too Old Or Too Nosy|Series Seven|Penny|Stephen|Dental Receptionist|Job Argument|1998
What had Stephen told Penny that sparked their quarrel in Too Old... or Too Nosy?|She was too old for the job|She needed to learn to drive|She must close her own business|She should retrain as a nurse|Medium|Too Old Or Too Nosy|Series Seven|Stephen|Penny|Age Remark|Dental Practice|1998
What was Sandy's supposed holiday with Harry actually connected to in Too Old... or Too Nosy?|A rugby club tour|A police training course|A wedding in Scotland|A publishing conference|Medium|Too Old Or Too Nosy|Series Seven|Sandy Edwards|Harry|Rugby Tour|Jersey Trip|1998
Where was Sandy expecting to spend a week with Harry in Too Old... or Too Nosy?|Jersey|Guernsey|Isle of Man|Isle of Wight|Medium|Too Old Or Too Nosy|Series Seven|Jersey|Sandy Edwards|Harry|Holiday Plans|1998
Which age-related charity inspired Jean's community event in The Old Folks' Party?|Help the Aged|Age Concern Scotland|Children in Need|The Salvation Army|Medium|The Old Folks Party|Series Seven|Help The Aged|Charity Shop|Jean Hardcastle|Elderly Residents|1998
What sort of gathering did Jean arrange in The Old Folks' Party?|A party for local elderly residents|A teenage disco|A retirement dinner for Stephen|A book launch for Lionel|Easy|The Old Folks Party|Series Seven|Elderly Residents|Community Party|Jean Hardcastle|Charity Event|1998
Who provided the music as DJ at The Old Folks' Party?|Alistair Deacon|Lionel Hardcastle|Harry|Rocky Hardcastle|Medium|The Old Folks Party|Series Seven|Alistair Deacon|Disc Jockey|Charity Event|Dance Music|1998
What was the surname of the particularly hard-to-please guest at The Old Folks' Party?|Thrupp|Bale|Flack|Curtis|Hard|The Old Folks Party|Series Seven|Mrs Thrupp|Unimpressed Guest|Elderly Party|Comic Character|1998
Whom did Alistair propose to in the 1998 episode The Proposal?|Judith Hanson|Sandy Edwards|Jean Hardcastle|Penny|Easy|The Proposal|Series Seven|Alistair Deacon|Judith Hanson|Marriage Proposal|Romance|1998
Why did Judith become annoyed with Alistair after accepting his proposal in The Proposal?|He proposed after seeing an old friend whose lifestyle frightened him|He wanted the wedding held in Kenya|He had already bought their wedding rings from a stranger|He had invited her mother to the honeymoon|Medium|The Proposal|Series Seven|Judith Hanson|Alistair Deacon|Old College Friend|Wrong Motivation|1998
Which nearby property did Judith suggest buying after Alistair proposed?|The house next door to Jean and Lionel|Rocky's old country house|A publishing office in Paris|Penny's dental practice building|Medium|The Proposal|Series Seven|Judith Hanson|Neighbouring House|Alistair Deacon|Marriage Plans|1998
What international city did Alistair suggest for Lionel's book-signing trip in A Deeply Personal Problem?|Tokyo|New York|Rome|Sydney|Medium|A Deeply Personal Problem|Series Eight|Tokyo|Book Signing|Alistair Deacon|Lionel Hardcastle|2000
What false explanation did Jean give for Alistair's visit in A Deeply Personal Problem?|Lionel had a deeply personal problem|Alistair had won a literary award|Lionel was planning a surprise wedding|The publishing house was closing|Medium|A Deeply Personal Problem|Series Eight|Jean Hardcastle|Invented Problem|Alistair Visit|Judith Hanson|2000
What did Judith arrange after wrongly believing Lionel had a personal problem?|A romantic weekend for Jean and Lionel|A business trip to Tokyo for herself|A charity concert at the country house|A surprise retirement dinner for Rocky|Medium|A Deeply Personal Problem|Series Eight|Judith Hanson|Romantic Weekend|Misunderstanding|Jean And Lionel|2000
What animal followed Lionel home in Animal Magnetism?|A dog|A cat|A rabbit|A parrot|Easy|Animal Magnetism|Series Eight|Stray Dog|Lionel Hardcastle|Family Pet|2000|Dog Follows Home
Why did the family have to give up the dog in Animal Magnetism?|Its rightful owner was found|Jean developed an allergy|Sandy moved abroad|Lionel discovered it belonged to Rocky|Medium|Animal Magnetism|Series Eight|Dog Owner|Reunited Pet|Harry Police|Jean Household|2000
Whom did Alistair invite out when Judith declined an evening engagement in Animal Magnetism?|Sandy|Penny|Madge|Mrs Bale|Medium|Animal Magnetism|Series Eight|Alistair Deacon|Sandy Edwards|Evening Invitation|Judith Hanson|2000
What sport featured in the film Harry took Judith to see in Animal Magnetism?|Baseball|Rugby|Football|Tennis|Medium|Animal Magnetism|Series Eight|Harry|Judith Hanson|Cinema Trip|Baseball Film|2000
What awkward incident sparked plans for another bathroom in The Bathroom?|Lionel walked in while Sandy was bathing|A guest damaged the washbasin|Alistair flooded the upstairs rooms|Rocky broke the shower door|Medium|The Bathroom|Series Eight|Sandy Edwards|Lionel Hardcastle|Privacy Incident|Household Changes|2000
Which home improvement did Jean want in The Bathroom?|A second bathroom|A rooftop conservatory|A new kitchen extension|A larger garage|Easy|The Bathroom|Series Eight|Jean Hardcastle|Second Bathroom|Home Renovation|Family Privacy|2000
What official requirement did the new bathroom project overlook in The Bathroom?|Planning permission|A television licence|A driving licence|Listed-building insurance|Medium|The Bathroom|Series Eight|Planning Permission|Building Work|Cost Escalation|Home Extension|2000
To which country did Penny and Stephen plan to retire in Surprising News?|Spain|Portugal|France|Italy|Easy|Surprising News|Series Eight|Penny And Stephen|Spain|Retirement Abroad|New House|2000
What financial issue began to worry Lionel in Surprising News?|He had no pension plan|His bank had stopped issuing cheques|The publisher had seized his royalties|His house had already been repossessed|Medium|Surprising News|Series Eight|Lionel Hardcastle|Pension|Future Finances|Retirement Worries|2000
Whom did Lionel ask for financial advice after Penny and Stephen's announcement?|Alistair Deacon|Mrs Bale|Harry|Lol Ferris|Medium|Surprising News|Series Eight|Alistair Deacon|Lionel Hardcastle|Money Advice|Financial Future|2000
Which property did Alistair suggest selling to improve Lionel's finances in Future Imperfect?|The country house|Jean's London home|The secretarial agency|A flat in Paris|Medium|Future Imperfect|Series Eight|Country House|Alistair Deacon|Property Sale|Lionel Finances|2000
Which two country-house workers faced uncertainty when Jean and Lionel considered selling?|Mrs Bale and Lol Ferris|Gwen Flack and Sally Curtis|Penny and Stephen|Judith and Sandy|Medium|Future Imperfect|Series Eight|Mrs Bale|Lol Ferris|House Staff|Possible Unemployment|2000
Who offered to buy the country house so its arrangements could continue in Future Imperfect?|Rocky Hardcastle|Alistair Deacon|Stephen|Harry|Medium|Future Imperfect|Series Eight|Rocky Hardcastle|House Purchase|Family Property|Keeping Staff|2000
What technology did Jean decide the household should try in Going Online?|The internet|Satellite navigation|Video conferencing via a mobile phone|A digital radio studio|Easy|Going Online|Series Eight|Internet|Jean Hardcastle|New Technology|Home Computer|2000
How wealthy was Alistair still said to be when he complained of financial trouble in Going Online?|Down to his last million pounds|Down to his last ten pounds|Living on a state pension|Borrowing from the girls for rent|Medium|Going Online|Series Eight|Alistair Deacon|Last Million|Wealth Joke|Money Worries|2000
What injury helped bring Sandy and Harry back together in Going Online?|Harry broke his leg|Sandy sprained her wrist|Harry fractured his arm|Sandy broke her ankle|Medium|Going Online|Series Eight|Harry|Broken Leg|Sandy Edwards|Reconciliation|2000
Which former couple also reconciled during Going Online?|Judith and Alistair|Jean and Stephen|Rocky and Margaret|Penny and Harry|Medium|Going Online|Series Eight|Judith Hanson|Alistair Deacon|Romantic Reconciliation|Series Finale|2000
What did Alistair dramatically destroy to show Judith he was ready to settle down in 2002?|His mobile phone|His luxury car|His publishing contract|His watch|Medium|Time To Settle Down|Series Nine|Alistair Deacon|Judith Hanson|Broken Mobile|Commitment Gesture|2002
Which overseas posting was Harry offered when he returned in Series 9?|Canada|Kenya|Australia|Germany|Easy|Time To Settle Down|Series Nine|Harry|Police Posting|Canada|Sandy Edwards|2002
Who agreed to marry Alistair after his renewed proposal in Series 9?|Judith Hanson|Sandy Edwards|Penny|Jean Hardcastle|Easy|Time To Settle Down|Series Nine|Judith Hanson|Alistair Deacon|Engagement|Marriage Plans|2002
Where did Judith want her wedding to Alistair to take place?|At Rocky's country house in Hampshire|At Jean's office in London|At a church in Paris|At a hotel in New York|Medium|Another Proposal|Series Nine|Judith Hanson|Rocky House|Hampshire Wedding|Alistair Deacon|2002
What problem troubled Alistair as he planned his wedding in Another Proposal?|Panic attacks|A sudden loss of hearing|A broken ankle|A problem with his eyesight|Medium|Another Proposal|Series Nine|Alistair Deacon|Panic Attacks|Wedding Nerves|Judith Hanson|2002
Which orchestra did Rocky jokingly suggest hiring for the extravagant wedding plans?|London Symphony Orchestra|BBC Scottish Symphony Orchestra|Royal Liverpool Philharmonic|Hallé Orchestra|Hard|Another Proposal|Series Nine|Rocky Hardcastle|Wedding Music|London Symphony Orchestra|Grand Plans|2002
For his services to which profession was Stephen considered for an OBE?|Dentistry|Teaching|Journalism|Publishing|Medium|Another Proposal|Series Nine|Stephen|OBE|Dentistry|Penny|2002
Who was meant to be Alistair's best man before breaking his leg?|Gaston the ski instructor|Harry the policeman|Lol the gardener|Mike the television producer|Medium|The Wedding|Series Nine|Gaston|Ski Instructor|Broken Leg|Best Man|2002
Who stepped in as best man at Judith and Alistair's wedding?|Rocky Hardcastle|Lionel Hardcastle|Stephen|Harry|Easy|The Wedding|Series Nine|Rocky Hardcastle|Replacement Best Man|Judith And Alistair|Ceremony|2002
What embarrassing effect did Alistair's medication have around his wedding?|He became excessively tearful|He kept falling asleep in the service|He forgot everyone's names|He lost his voice for a week|Medium|The Wedding|Series Nine|Alistair Deacon|Medication Side Effect|Tearfulness|Panic Attacks|2002
How did Stephen accidentally respond to his honours paperwork in The Wedding?|He declined an OBE|He requested a knighthood|He nominated Lionel for an OBE|He sent it to a wrong overseas address|Medium|The Wedding|Series Nine|Stephen|OBE Declined|Paperwork Mix Up|Dentistry|2002
What was the name of the homeless young woman Jean tried to help in What Now?|Dave|Sarah|Mercury|Ann|Medium|What Now|Series Nine|Dave|Homeless Girl|Jean Hardcastle|Household Guest|2002
What did Harry ask Sandy to do shortly before leaving for Canada in What Now?|Marry him and go with him|Take over Jean's agency|Become a police officer|Move into Rocky's house alone|Easy|What Now|Series Nine|Harry|Sandy Edwards|Marriage Proposal|Canada|2002
What travel oversight threatened Sandy's departure with Harry in What Now?|Harry had booked only one ticket|They had booked seats on different days|Sandy had left her passport in Jersey|Their plane was cancelled indefinitely|Medium|What Now|Series Nine|Airline Ticket|Harry|Sandy Edwards|Canada Flight|2002
Who used his contacts to resolve Sandy's travel problem in What Now?|Alistair Deacon|Stephen|Rocky Hardcastle|Lol Ferris|Medium|What Now|Series Nine|Alistair Deacon|Travel Arrangements|Sandy And Harry|Helpful Phone Call|2002
What kind of programme was the 2002 episode You Must Remember This...?|A retrospective featuring clips from earlier episodes|A live audience quiz|An entirely new stage musical|An animated special|Easy|You Must Remember This|Series Nine Finale|Retrospective|Archive Clips|Jean And Lionel|2002|Clip Show
Which two characters reflected on their past together in the 2002 retrospective?|Jean and Lionel|Judith and Sandy|Rocky and Madge|Penny and Stephen|Easy|You Must Remember This|Series Nine Finale|Jean Hardcastle|Lionel Hardcastle|Life Together|Memory|2002
In which year did As Time Goes By return for its two reunion specials?|2005|2001|2003|2007|Easy|Reunion Specials|2005|BBC One|Christmas Television|Series Return|Final Episodes|Broadcast History
From which country did Sandy and Harry return in the reunion specials?|Canada|Kenya|Australia|Spain|Easy|Reunion Part One|2005|Sandy Edwards|Harry|Canada Return|Family Reunion|Christmas
What was Jean especially eager to have in the reunion specials?|Grandchildren|A new publishing contract|A racing yacht|A third secretarial office|Easy|Reunion Part One|2005|Jean Hardcastle|Grandchildren|Family Expectations|Judith|Sandy
Which younger couple were worried because they had not yet conceived a baby?|Judith and Alistair|Sandy and Harry|Penny and Stephen|Rocky and Madge|Medium|Reunion Part One|2005|Judith Hanson|Alistair Deacon|Conception Worries|Young Couple|Family
Which actress's character revealed that she was pregnant in the 2005 specials?|Jenny Funnell as Sandy|Moira Brooker as Judith|Moyra Fraser as Penny|Janet Henfrey as Mrs Bale|Medium|Reunion Part One|2005|Sandy Edwards|Jenny Funnell|Pregnancy|Harry|Family News
What was the name of the visitor from Kenya who sought Lionel in the reunion specials?|Patrick|Paul|Eric|Gaston|Medium|Reunion Specials|2005|Patrick|Kenya|Lionel Hardcastle|Unexpected Visitor|Family History
Who portrayed Patrick in the 2005 As Time Goes By reunion specials?|David Oyelowo|Idris Elba|Chiwetel Ejiofor|Adrian Lester|Medium|Reunion Specials|2005|David Oyelowo|Patrick|Guest Actor|Kenya|BBC Cast
What was Lionel's real connection to Patrick, who was jokingly described as his son?|Lionel had supported Patrick's family in Kenya|Patrick was Jean's brother's child|Patrick was Lionel's publisher's nephew|Patrick was Rocky's youngest son|Hard|Reunion Specials|2005|Patrick|Kenyan Family|Lionel Hardcastle|Support|Not Biological Son
Which dance activity led to Rocky ending up in hospital in the 2005 specials?|Line dancing|Ballroom waltzing|Tap dancing|Scottish country dancing|Medium|Reunion Part Two|2005|Rocky Hardcastle|Line Dancing|Hospital|Older Character|Injury
What public event did Stephen and Penny attend in his pursuit of celebrity status?|A film premiere|A royal garden party|A charity football match|A television game-show recording|Medium|Reunion Part Two|2005|Stephen|Penny|Film Premiere|Celebrity Ambitions|Hospital
What did Judith hide in Penny and Stephen's car as a practical joke in the reunion?|Alistair's lingerie purchases|Rocky's dancing shoes|Lionel's old army medals|A stack of old love letters|Hard|Reunion Part Two|2005|Judith Hanson|Alistair Deacon|Lingerie|Penny And Stephen|Prank
Where did the extended family end up together after separate mishaps in the final reunion?|A hospital accident and emergency department|An airport departure lounge|A police station interview room|A theatre dressing room|Easy|Reunion Part Two|2005|Hospital A And E|Rocky Injury|Stephen And Penny|Family Gathering|Finale`;


// Focused audit: 1998 BAFTA nomination, supporting cast, reunion dates and production.
// Preserve the original 98 question IDs and answer data.
const AUDIT_ORIGINAL_COUNT = 98;
const AUDIT_FIRST_ID = 42473;
const auditFacts = `Which As Time Goes By actress received a BAFTA Comedy Performance nomination in 1998?|Judi Dench|Moira Brooker|Jenny Funnell|Joan Sims|Medium|1998 BAFTA TV Awards|Judi Dench|Comedy Performance|Award Nomination|Jean Hardcastle|British Academy|Series Six
Who won the 1998 BAFTA Comedy Performance award for which As Time Goes By actress Judi Dench was nominated?|Steve Coogan|Richard Wilson|David Jason|Martin Clunes|Medium|1998 BAFTA Awards|Steve Coogan|Im Alan Partridge|Comedy Performance Winner|Judi Dench Nomination|Award Results|British Comedy
Which actor portrayed policeman Harry in the later series of As Time Goes By?|David Michaels|Daniel Ryan|Philip Bretherton|Paul Chapman|Medium|David Michaels|Harry|Sandy Edwards|Policeman|Series Seven To Nine|Supporting Cast|Actor Identification
Which actor played hired tough man Nails in the As Time Goes By episode The Stalker?|Nick Bartlett|Kristopher Milnes|David Michaels|Iain Rogerson|Medium|Nick Bartlett|Nails|The Stalker|Series Six|Alistair Deacon|Guest Performer|Actor Identification
Which performer played the teenage admirer mistaken for a stalker in As Time Goes By Series 6?|Kristopher Milnes|Nick Bartlett|Mark Benton|Daniel Ryan|Medium|Kristopher Milnes|The Stalker|Teenage Admirer|Sandy Edwards|Series Six|Guest Cast|Actor Identification
Who portrayed Judith's sports-journalist boyfriend Paul in As Time Goes By Series 6?|Michael Fenton Stevens|Paul Chapman|David Michaels|Mark Benton|Medium|Michael Fenton Stevens|Paul|Judith Hanson|Sports Journalist|Series Six|Guest Role|Actor Identification
Which actress played the homeless young woman called Dave in As Time Goes By Series 9?|Lara Cazalet|Ruth Jones|Jenny Funnell|Georgie Glen|Medium|Lara Cazalet|Dave|What Now|Homeless Young Woman|Series Nine|Guest Actor|2002 Storyline
Which actress portrayed Mrs Thrupp at the charity party in As Time Goes By Series 7?|Frances Cox|Janet Henfrey|Joan Sims|Moyra Fraser|Medium|Frances Cox|Mrs Thrupp|Old Folks Party|Series Seven|Guest Actress|1998 Episode|Character Identification
Which actor played Jean's former acquaintance James in As Time Goes By Series 7?|Norman Rodway|Frank Middlemass|Paul Chapman|Philip Bretherton|Medium|Norman Rodway|James|An Old Flame|Series Seven|Jean Pargetter|Guest Cast|Actor Identification
Which actress appeared as Gilly in an episode of As Time Goes By Series 7?|Ruth Jones|Selina Cadell|Moira Brooker|Jenny Funnell|Medium|Ruth Jones|Gilly|Series Seven|1998|Guest Appearance|Comedy Actress|Early Screen Credit
What was the title of the final regular-series episode of As Time Goes By before its 2005 reunion specials?|You Must Remember This|Going Online|The Wedding|The Proposal|Medium|You Must Remember This|2002 Episode|Series Nine Finale|Clip Show|Retrospective|Special Broadcast|Original Run
In what year did the ninth regular series of As Time Goes By conclude?|2002|1998|2000|2005|Easy|2002|Series Nine|Final Regular Season|Television History|Before Reunion|BBC One|Broadcast Timeline
On which date was the first reunion special of As Time Goes By broadcast on BBC One?|26 December 2005|12 January 1992|11 August 2002|30 December 2005|Medium|26 December 2005|Reunion Part One|Christmas Broadcast|BBC One|Series Finale Return|Television Dates|Special Episodes
On which date did the final reunion special of As Time Goes By air on BBC One?|30 December 2005|26 December 2005|11 August 2002|10 January 2006|Medium|30 December 2005|Reunion Part Two|Last BBC Episode|Series Conclusion|Christmas Holiday|Broadcast Dates|Special Episodes
Which American public broadcaster aired the two As Time Goes By reunion specials made in 2005?|PBS|HBO|CBS|ABC|Medium|PBS|American Broadcaster|2005 Reunion Specials|United States|International Airing|Broadcast Partnership|British Sitcom
Which television company partnered with PBS to bring back As Time Goes By for its 2005 reunion specials?|DLT Entertainment|Hat Trick Productions|Granada Television|Tiger Aspect Productions|Medium|DLT Entertainment|PBS Partnership|2005 Reunion Specials|Transatlantic Production|Television Company|Broadcast Collaboration|BBC Sitcom`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(value => value.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields in ${id}; found ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
    throw new Error(`Empty question, option, or tag in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or question-specific tag count in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(value => value.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : 'In the sitcom As Time Goes By, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return {
    id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (questions.length !== 114 || questions[0]?.id !== 'tv_25698' ||
    questions[97]?.id !== 'tv_25795' ||
    questions[questions.length - 1]?.id !== 'tv_42488' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      q.tags.length < 14 || !q.tags.includes('Programme: As Time Goes By') ||
      q.dailyEligible !== true))
  throw new Error('Pack 436 exported question validation failed');

module.exports = questions;