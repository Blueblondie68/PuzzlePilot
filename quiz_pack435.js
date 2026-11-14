// PuzzlePilot - The Bigggggg Quiz - Pack 435
// As Time Goes By (BBC One): Series 1-5, 1992-1996.
// Forty episodes; Pack 436 will cover Series 6-9 and the 2005 reunion specials.
// Begins at tv_25593, following Pack 434. WordPad-ready CommonJS.
// Verify the user's saved WordPad copy before any GitHub/Render upload.
'use strict';

const FIRST_ID = 25593;
const programme = 'As Time Goes By';
const commonTags = [
  'Television', 'British Television', 'British Sitcom', 'BBC One',
  'As Time Goes By', 'Programme: As Time Goes By', 'Romantic Comedy',
  '1990s Television', 'Series 1-5', 'Jean Pargetter', 'Lionel Hardcastle'
];

// Question | correct answer | three wrong options | difficulty | seven specific tags.
const facts = `Which actress played Jean Pargetter in As Time Goes By?|Judi Dench|Penelope Keith|Patricia Routledge|Prunella Scales|Easy|Judi Dench|Jean Pargetter|Leading Actress|Main Cast|1992 Debut|Widow|London
Which actor played Lionel Hardcastle?|Geoffrey Palmer|Richard Briers|John Thaw|Paul Eddington|Easy|Geoffrey Palmer|Lionel Hardcastle|Leading Actor|Main Cast|Retired Army Officer|Writer|Kenya
Who wrote the episodes of As Time Goes By?|Bob Larbey|Richard Curtis|John Sullivan|Roy Clarke|Easy|Bob Larbey|Comedy Writer|Scriptwriter|BBC Sitcom|Programme Credits|Television Writing|1992 To 1996
Who is credited with creating the television series As Time Goes By?|Colin Bostock-Smith|Bob Larbey|David Croft|Jimmy Perry|Hard|Colin Bostock Smith|Creator Credit|BBC Sitcom|Production History|British Comedy|Programme Development|Credits
What was Jean's secretarial agency called?|Type for You|The Typing Pool|Write Away|Perfect Pages|Easy|Type For You|Jean Pargetter|Secretarial Agency|London Business|Employment|Office|Series One
Which actress played Jean's daughter Judith Hanson?|Moira Brooker|Jenny Funnell|Joan Sims|Moyra Fraser|Easy|Moira Brooker|Judith Hanson|Daughter|Cast|Secretary|Jean Family|1992
What was the name of Judith's colleague at Jean's agency?|Sandy|Daisy|Madge|Penny|Easy|Sandy|Type For You|Jenny Funnell|Office Colleague|Judith Hanson|Secretary|1992
Who played the energetic publisher Alistair Deacon?|Philip Bretherton|Frank Middlemass|Paul Chapman|Tim Wylton|Easy|Philip Bretherton|Alistair Deacon|Publisher|Main Cast|Book Marketing|Judith Romance|1992
What war-era posting separated Jean and Lionel when they were young?|The Korean War|The Second World War|The Falklands War|The Gulf War|Easy|Korean War|1950s Romance|National Service|Separated Lovers|Army Officer|Lost Contact|Backstory
What was Lionel's book about his years overseas called?|My Life in Kenya|Out of Africa|A Journey to Nairobi|The White Hunter|Easy|My Life In Kenya|Lionel Book|Memoir|Publisher Alistair|Kenya|Writing Career|Running Plot
Who played Lionel's eccentric father, Rocky Hardcastle?|Frank Middlemass|Geoffrey Palmer|Paul Chapman|Michael Aldridge|Medium|Frank Middlemass|Rocky Hardcastle|Lionel Father|Cast|Elderly Character|Hampshire|Family
Which actress played Rocky's second wife, Madge?|Joan Sims|Hattie Jacques|June Whitfield|Patricia Hayes|Medium|Joan Sims|Madge Hardcastle|Rocky Wife|Wedding|Carry On Actress|Cast|1994
Which actor played Jean's brother-in-law Stephen?|Paul Chapman|Philip Bretherton|Tim Wylton|Geoffrey Palmer|Medium|Paul Chapman|Stephen|Penny Husband|Dental Practice|Supporting Cast|Family Visits|1990s
Which actress portrayed Jean's sister-in-law Penny?|Moyra Fraser|Janet Henfrey|Jenny Funnell|Joan Sims|Medium|Moyra Fraser|Penny|Stephen Wife|Sister In Law|Supporting Cast|Family Comedy|1990s
Who directed the early BBC series of As Time Goes By?|Sydney Lotterby|John Howard Davies|James Cellan Jones|David Croft|Medium|Sydney Lotterby|Director|Production Credits|BBC One|Series One To Five|1990s Sitcom|Behind The Scenes
Who performed the sitcom's version of the song As Time Goes By over the opening credits?|Joe Fagin|Michael Ball|Harry Connick Jr.|Frank Sinatra|Medium|Joe Fagin|Theme Song|Opening Credits|Herman Hupfeld|Music Recording|Television Theme|British Singer
What chance encounter reunited Jean and Lionel in the first episode?|Lionel requested a secretary from Jean's firm|They met at an army reunion|They boarded the same holiday cruise|They attended Rocky's wedding|Easy|You Must Remember This|Series One|1992|Secretarial Agency|Chance Reunion|Type For You|Lionel Book
Who initially went out to dinner with Lionel before Jean recognised him as her former sweetheart?|Judith Hanson|Sandy|Penny|Madge|Medium|You Must Remember This|Series One|Judith Hanson|Client Dinner|Lionel Hardcastle|First Episode|Reunion
Why had Jean and Lionel lost touch after his departure for Korea?|A letter went missing in the post|Jean moved to America|Lionel changed his surname|Both families forbade their marriage|Easy|You Must Remember This|Series One|Korean War|Lost Letter|1953|Misunderstanding|Past Romance
What type of event did Lionel invite Jean to after Alistair encouraged him to socialise in Getting to Know You - Again?|A party to promote contacts for his book|Rocky's birthday party|A West End premiere|A charity garden party|Medium|Getting To Know You Again|Series One|Alistair Deacon|Book Promotion|Publisher Party|Jean Pargetter|Rekindled Romance
What disappointed Jean and Lionel on revisiting their old haunts in The Copper Kettle?|Much of the countryside had changed|The hotel had become a hospital|All the roads had been flooded|The village was closed for filming|Medium|The Copper Kettle|Series One|Buckinghamshire|Old Haunts|1950s Memories|Countryside|Changed Landscape
What was The Copper Kettle in the episode of that name?|A hotel they had known as young lovers|Jean's former nursing school|A pub owned by Rocky|Alistair's publishing office|Medium|The Copper Kettle|Series One|Hotel|Past Romance|Young Lovers|Revisited Building|Buckinghamshire
To which city did Jean and Judith make a surprise visit to hear Lionel lecture?|Norwich|York|Oxford|Cambridge|Medium|Surprise Surprise|Series One|Norwich|Lionel Lecture|Jean And Judith|University Trip|1992
What reputation had Alistair's publicity given Lionel at the lecture in Surprise, Surprise?|An elephant hunter|A famous mountaineer|A spy in Kenya|A big-game photographer|Medium|Surprise Surprise|Series One|Elephant Hunter|Alistair Publicity|Kenya Memoir|Lecture|Exaggerated Blurb
What did Alistair say Lionel's Kenya memoir needed in Relationships?|More human interest|More maps of Africa|An extra chapter on hunting|A fictional detective|Medium|Relationships|Series One|Alistair Deacon|Humanising Memoir|Book Revisions|Publisher Advice|My Life In Kenya
Who received flowers and chocolates from Alistair in Relationships?|Jean Pargetter|Judith Hanson|Sandy|Penny|Medium|Relationships|Series One|Alistair Deacon|Romantic Gesture|Flowers And Chocolates|Jean Pargetter|Courtship
What outing did Jean organise in The Picnic to encourage Judith and Alistair to get together?|A picnic for the four of them|A weekend in Paris|An evening at the opera|A boat trip down the Thames|Medium|The Picnic|Series One Finale|Jean Pargetter|Judith And Alistair|Matchmaking|Outdoor Outing|Lionel
What did Jean and Lionel end up doing on the grass during The Picnic?|Falling asleep|Playing cricket|Losing a dog|Arguing with a park ranger|Medium|The Picnic|Series One Finale|Falling Asleep|Ageing Comedy|Rekindled Couple|Outdoor Afternoon|1992
How was Lionel dressed for the book-cover photographs in White Hunter?|As a white hunter with a rifle|In an army dress uniform|As a safari tourist in shorts|In a dinner jacket with a bow tie|Medium|White Hunter|Series Two|Book Cover|Photographic Shoot|Safari Costume|Rifle|Publisher Plan
What did Jean miss by leaving work to support Lionel's White Hunter photo shoot?|A valuable prospective client|Her daughter's wedding|A meeting with a television producer|The arrival of a new secretary|Medium|White Hunter|Series Two|Jean Agency|Lost Business|Photo Shoot|Judith And Sandy|Work Commitment
Why did Judith go away alone in A Weekend Away?|To give Jean and Lionel time together|To interview for a job in Paris|To help Rocky with a wedding|To inspect a new office in Kenya|Medium|A Weekend Away|Series Two|Judith Hanson|Pangbourne|Romantic Privacy|Weekend Absence|Mother And Daughter
Where had Judith actually spent her weekend in A Weekend Away?|Pangbourne|Paris|Brighton|Oxford|Hard|A Weekend Away|Series Two|Judith Hanson|Pangbourne|Weekend Trip|Misunderstanding|1993
Which family member did Jean first meet in the episode Visiting Rocky?|Lionel's father|Lionel's uncle|Lionel's brother|Lionel's nephew|Easy|Visiting Rocky|Series Two|Rocky Hardcastle|First Meeting|Lionel Family|Hampshire|1993
Whom did Rocky announce he planned to marry during Jean's first visit?|Madge|Mrs Bale|Penny|Margaret|Medium|Visiting Rocky|Series Two|Rocky Hardcastle|Madge|Wedding Announcement|Elderly Romance|Family Surprise
Who was asked to be a bridesmaid at Rocky's forthcoming wedding?|Jean|Judith|Sandy|Penny|Medium|Visiting Rocky|Series Two|Jean Pargetter|Bridesmaid|Rocky And Madge|Wedding Plans|Hampshire
Why had Alistair taken a special interest in publishing Lionel's book, as revealed in Why??|Rocky had helped Alistair's father start his business|Lionel had promised him a share of a Kenyan mine|Jean owned part of the publishing house|Alistair was Lionel's secret half-brother|Medium|Why|Series Two|Alistair Deacon|Rocky Hardcastle|Family Debt|Publishing Business|Repaid Favour
How much had Rocky lent Alistair's father to start his publishing business?|£500|£5,000|£50|£10,000|Hard|Why|Series Two|1947 Loan|Five Hundred Pounds|Rocky Hardcastle|Publishing Origins|Alistair Family
What profession did Jean pretend Lionel practised while visiting Penny in Misunderstandings?|Psychiatry|Dentistry|Architecture|Journalism|Medium|Misunderstandings|Series Two|Penny|Lionel Hardcastle|Pretended Psychiatrist|Cover Story|Family Visit
What was the name of Penny's husband in Misunderstandings?|Stephen|Rocky|Alistair|Mike|Easy|Misunderstandings|Series Two|Stephen|Penny Husband|Family Connection|House Visit|Jean In Laws
Why was Lionel offered a holiday at sea in The Cruise?|He was to give a lecture about his book|He had won a travel competition|His publisher owned a ship|The cruise line wanted to film his wedding|Medium|The Cruise|Series Two|Lecture|My Life In Kenya|Book Publicity|Free Voyage|Lionel Hardcastle
How did Jean react when Lionel offered to bring her on his free cruise?|She was offended by the way he presented the invitation|She booked immediately without hesitation|She demanded to captain the ship|She insisted Judith take her place|Medium|The Cruise|Series Two|Jean Pargetter|Free Holiday|Romantic Misunderstanding|Lionel Invitation|Relationship
How did Alistair try to make the queue look busy at Lionel's book signing?|He hired people to stand in it|He gave away free plane tickets|He sent everyone to the wrong store|He asked a TV crew to bring extras from a sitcom|Medium|The Book Signing|Series Two Finale|Alistair Deacon|Paid Queue|Publicity Stunt|My Life In Kenya|London Bookshop
What affectionate name did Lionel write in a copy of his memoir for Jean?|Pooh|Darling Duck|Sunshine|Bunny|Medium|The Book Signing|Series Two Finale|Jean Nickname|Pooh|Book Dedication|Lionel Memoir|Private Romance
To which European capital did Lionel book tickets at the end of The Book Signing?|Paris|Rome|Vienna|Madrid|Easy|The Book Signing|Series Two Finale|Paris Tickets|Romantic Holiday|Lionel And Jean|1993 Ending|Surprise Trip
In Series 3's We'll Always Have Paris, what problem affected the young couple Jean and Lionel met?|The newlyweds had quarrelled on their honeymoon|They had lost their passports|They had missed a flight home|Their luggage had been stolen|Medium|Well Always Have Paris|Series Three|Ann And Terry|Honeymoon Quarrel|French Holiday|Young Couple|1994
Which city provided the romantic setting for We'll Always Have Paris?|Paris|Venice|Prague|Barcelona|Easy|Well Always Have Paris|Series Three Premiere|France|Jean And Lionel|European Holiday|Trip|1994
What apparently unreasonable demand had Terry made of his new wife in We'll Always Have Paris?|To open a window|To cancel their honeymoon|To sell her wedding ring|To move to Kenya|Hard|Well Always Have Paris|Series Three|Terry|Ann|Honeymoon Misunderstanding|Open Window|Quarrel
Who married Madge in the 1994 episode Rocky's Wedding Day?|Rocky Hardcastle|Lionel Hardcastle|Alistair Deacon|Stephen|Easy|Rockys Wedding Day|Series Three|Rocky And Madge|Marriage|Older Couple|1994|Family Celebration
What unexpected duty did Lionel take on at Rocky and Madge's wedding?|Best man|Organist|Registrar|Photographer|Medium|Rockys Wedding Day|Series Three|Lionel Hardcastle|Best Man|Injured Original|Wedding Ceremony|Family Obligation
Who had to give Madge away after the original best man was injured?|Alistair Deacon|Stephen|Lionel Hardcastle|Rocky's doctor|Medium|Rockys Wedding Day|Series Three|Alistair Deacon|Madge|Wedding Roles|Best Man Injury|Family Ceremony
What misunderstanding caused trouble when Jean and Lionel agreed to live together?|Each expected the other to move house|Both had secretly sold their homes|Judith had already rented their new flat|Alistair had misplaced the house keys|Medium|Living Together But Where|Series Three|Moving Homes|Jean And Lionel|Co Habitation|Misunderstanding|1994
Why did the police question Lionel outside Jean's house in Living Together, But Where?|He appeared to be acting suspiciously|He was accused of stealing a car|He had parked on a double yellow line|He had lost his passport|Medium|Living Together But Where|Series Three|Lionel Hardcastle|Police Station|Suspicious Behaviour|Street Incident|Household Dispute
What injury did Jean invent for Lionel during Penny's visit in Covering Up?|A broken ankle|A broken wrist|A sprained neck|A fractured rib|Medium|Covering Up|Series Three|Broken Ankle|Penny And Stephen|Pretend Injury|Cover Story|Jean Lie
What class did Jean claim she needed to attend to escape the awkward visit in Covering Up?|Judo|Pottery|French conversation|Ballroom dancing|Hard|Covering Up|Series Three|Jean Pargetter|Judo Class|Penny Visit|Quick Excuse|Family Comedy
In Moving In, whose photograph did Jean initially want to put away from her bedside?|Her first husband David's|Her father-in-law Rocky's|Her daughter Judith's|Her sister-in-law Penny's|Medium|Moving In|Series Three|David Pargetter|Bedside Photo|Jean Widowhood|Lionel Advice|Respecting Past
Where did Jean and Lionel end up eating after her carefully prepared meal went wrong in Moving In?|A fish-and-chip restaurant|A hotel ballroom|An Indian takeaway|A French bistro|Medium|Moving In|Series Three|Fish And Chips|Dinner Disaster|New Household|Restaurant Meal|Domestic Comedy
Whose career ambitions complicated the appointment of a manager for Jean's new office in Branching Out?|Judith and Sandy's|Rocky and Madge's|Penny and Stephen's|Lionel and Alistair's|Medium|Branching Out|Series Three|Type For You|Branch Manager|Judith Hanson|Sandy|Office Politics
What job did Alistair offer Sandy in Branching Out?|His personal assistant|A receptionist at a hospital|A part in an American TV series|A manager at a bookshop|Medium|Branching Out|Series Three|Alistair Deacon|Sandy|Personal Assistant|Job Offer|Publishing Office
Which American television network became interested in Lionel's proposed mini-series?|CBS|NBC|ABC|Fox|Medium|The Mini Series|Series Three|CBS|American Television|Lionel Story|Alistair Deal|Development
What happened to Lionel's written treatment just before an important mini-series meeting?|He shredded it by accident|A courier took it to the wrong city|It was destroyed in a hotel fire|He left it on an aeroplane|Medium|The Mini Series|Series Three|Shredded Treatment|Lionel Hardcastle|Office Mishap|American Pitch|Script Development
Who was the American television representative enthusiastic about Jean and Lionel's verbal pitch?|Mike Barbosa|Cy Lieberman|Sally Curtis|Alistair Deacon|Hard|The Mini Series|Series Three|Mike Barbosa|CBS Executive|Pitch Meeting|Television Adaptation|Los Angeles Deal
In which American city did Jean and Lionel meet television executives in A Trip to Los Angeles?|Los Angeles|New York|Chicago|Boston|Easy|A Trip To Los Angeles|Series Three|California|American Producers|Mini Series|Jean And Lionel|Travel
How did Lionel respond to the armed intruder during the American TV meeting?|He disarmed him|He escaped through a window|He hid in a wardrobe|He called for a security guard|Medium|A Trip To Los Angeles|Series Three|Lionel Hardcastle|Armed Writer|Cy Lieberman|Dangerous Meeting|American Studio
Why did Jean refuse to lie on the floor during the armed confrontation in A Trip to Los Angeles?|She was wearing a new dress|She was protecting her handbag|She had a painful knee|She thought it was an acting exercise|Hard|A Trip To Los Angeles|Series Three|Jean Pargetter|New Dress|Gunman|Comic Defiance|CBS Office
What nickname did Judith and Sandy give the new branch manager Sally Curtis?|Miss Ice-Cubes|Mrs Sunshine|The Dragon Lady|Queen of Hearts|Medium|Dealing With Sally|Series Three|Sally Curtis|Miss Ice Cubes|Office Nickname|Judith And Sandy|Branch Management
Why was Jean especially uncomfortable with the secretary Sally assigned to Lionel in Dealing with Sally?|The secretary was an attractive young woman|The secretary refused to type anything|The secretary was Jean's former teacher|The secretary was related to Rocky|Medium|Dealing With Sally|Series Three|Lionel Secretary|Sally Curtis|Jean Jealousy|Office Staff|1994
Who became Lionel's talkative new secretary in Problems, Problems?|Gwen Flack|Sally Curtis|Mrs Bale|Penny|Medium|Problems Problems|Series Three Finale|Gwen Flack|Lionel Secretary|Talkative Assistant|Office Work|1994
Which couple's accident took Lionel and Jean to hospital in Problems, Problems?|Rocky and Madge|Penny and Stephen|Judith and Alistair|Ann and Terry|Medium|Problems Problems|Series Three Finale|Rocky Hardcastle|Madge|Hospital Incident|Family Scare|1994
Who moved into Jean and Lionel's home after splitting from a boyfriend in A House Full of Women?|Sandy|Penny|Madge|Daisy|Easy|A House Full Of Women|Series Four|Sandy|Breakup|Shared Home|Jean Household|1995
What room did Lionel lose as a prospective study when Sandy moved in?|The spare bedroom|The dining room|The attic|The conservatory|Medium|A House Full Of Women|Series Four|Lionel Study|Spare Bedroom|Sandy Moving In|House Arrangement|Office Space
What changes did the American producers demand from Lionel in Rewrites?|A more intimate and sensational script|More detailed African wildlife descriptions|A musical ending|An entirely silent film|Medium|Rewrites|Series Four|American Producers|Script Changes|Mini Series|Lionel Writer|Creative Interference
What made Jean and Lionel reluctant to dismiss Gwen Flack in Rewrites?|She arrived on crutches|She had inherited the agency|She was about to marry Rocky|She was their landlord|Medium|Rewrites|Series Four|Gwen Flack|Crutches|Dismissal Difficulties|Lionel Secretary|Kindness
What pet was central to Jean's plan for easing Gwen Flack out of her job?|Her Yorkshire terrier|Her pet parrot|Her goldfish|Her tabby cat|Medium|Getting Rid Of Gwen|Series Four|Gwen Flack|Herriot|Yorkshire Terrier|Pet Dog|Secretary Departure
Why did Gwen Flack ultimately leave her job before Jean's plan could be used?|She was invited to help a relative|She won the lottery|She became an actress|She was hired by CBS|Medium|Getting Rid Of Gwen|Series Four|Gwen Flack|Relative|Resignation|Lionel Secretary|Office Changes
What did Penny wrongly suspect Stephen was doing in The Affair?|Having an affair with his dental nurse|Buying a house without telling her|Leaving his dental practice|Planning to move to America|Easy|The Affair|Series Four|Penny And Stephen|Miss Breeze|Dental Nurse|Marital Misunderstanding|1995
What was Stephen really arranging behind Penny's back in The Affair?|A surprise anniversary party|A secret holiday in Kenya|A house sale|A publishing contract|Medium|The Affair|Series Four|Stephen|Penny|Anniversary Surprise|Marriage Celebration|Secret Plans
What property did Rocky and Madge offer Lionel in Welcome News?|Their country house|Their London flat|Their holiday boat|A cottage in France|Medium|Welcome News|Series Four|Rocky And Madge|Country House|Family Gift|Hampshire Property|Lionel Hardcastle
Which important question did Lionel ask Jean in Welcome News?|Will you marry me?|Will you publish my book?|Will you move to Kenya?|Will you open a third office?|Easy|Welcome News|Series Four|Lionel Proposal|Jean Pargetter|Engagement|Country House Gift|Romantic Turning Point
What role did American producer Mike Barbosa suggest for Mrs Bale in the mini-series?|Lionel's childhood nanny|Jean's headmistress|A hotel receptionist|An army nurse|Hard|Welcome News|Series Four|Mrs Bale|Mike Barbosa|Nanny Role|American Production|Casting Suggestion
What caused chaos at Penny and Stephen's 25th anniversary celebration?|Guests and venue were booked for different dates|The cake was delivered to the wrong country|The marquee collapsed in a storm|Their marriage certificate went missing|Medium|The Anniversary Party|Series Four|Stephen|Penny|Dates Mixed Up|Silver Wedding|Party Disaster
Who stepped in to help salvage Penny and Stephen's bungled anniversary party?|Alistair Deacon|Rocky Hardcastle|Sally Curtis|Mrs Bale|Medium|The Anniversary Party|Series Four|Alistair Deacon|Celebration Rescue|Penny And Stephen|Organising|25 Years
What accusation embarrassed Jean while shopping for a wedding dress in Wedding Preparations?|Shoplifting|Using a forged cheque|Stealing a handbag|Impersonating a celebrity|Medium|Wedding Preparations|Series Four|Jean Pargetter|Wedding Dress|Shoplifting Suspicion|Bridal Shopping|Marriage Plans
What writing task did Lionel complete as Jean planned their wedding in Wedding Preparations?|The mini-series script|A new African memoir|A book of poetry|His father's biography|Medium|Wedding Preparations|Series Four|Lionel Hardcastle|Finished Script|Television Adaptation|Jean Wedding Plans|1995
Who searched for Rocky and Madge after they got lost in Chiswick on Jean and Lionel's wedding day?|Kong|Stephen|Mike Barbosa|Lol Ferris|Hard|Wedding Day Nerves|Series Four|Kong|Rocky And Madge|Chiswick|Wedding Day Search|Alistair Friend
Which couple married in the 1995 episode Wedding Day Nerves?|Jean and Lionel|Judith and Alistair|Penny and Stephen|Sandy and Nick|Easy|Wedding Day Nerves|Series Four|Jean Pargetter|Lionel Hardcastle|Wedding|Marriage|1995
What was the occupation of Judith's new boyfriend Eric in Judith's New Romance?|Bookshop owner|Dentist|TV producer|Airline pilot|Medium|Judiths New Romance|Series Four|Eric|Judith Hanson|Bookshop|New Boyfriend|1995
What had Jean and Lionel just returned from when they learned about Judith's new romance?|Their honeymoon|A publishing tour|Rocky's birthday|A holiday in Kenya|Medium|Judiths New Romance|Series Four|Honeymoon|Newlyweds|Eric|Judith Hanson|Family News
What did Lionel dislike when he visited the filming of the mini-series in Improvements??|The casting, costumes and script rewrites|The lack of enough cameras|The weather alone|The decision to film in colour|Medium|Improvements|Series Four Finale|Lionel Writer|Mini Series Filming|Cast And Costumes|Script Changes|Country House
What major change to her working life was Jean considering in Improvements??|Retirement|Becoming a television producer|Closing the agency at once|Taking over Alistair's publishing company|Medium|Improvements|Series Four|Jean Pargetter|Retirement Thoughts|Type For You|Career Decision|1995
Why were Jean and Lionel unable to enjoy a quiet country weekend in The County Set?|Overenthusiastic local visitors kept arriving|The country house had no electricity|A television crew followed them|Rocky had rented the property to students|Medium|The County Set|Series Five Premiere|Country House|Local Visitors|Weekend Disrupted|Hampshire|1996
Where had Rocky and Madge gone during Jean and Lionel's first encounter with the County Set?|Mongolia|Australia|Canada|France|Hard|The County Set|Series Five|Rocky And Madge|Mongolia Holiday|Country House|Visitors|1996
What was the name of Lionel's former wife who sought a meeting in Lionel's Ex-Wife?|Margaret|Denise|Sally|Daisy|Medium|Lionels Ex Wife|Series Five|Margaret|Lionel Divorce|Former Marriage|Unexpected Meeting|1996
What surprised Jean about Margaret when they met in Lionel's Ex-Wife?|She was glamorous, wealthy and had a much younger partner|She had become a nun|She was now working for Jean's agency|She was secretly engaged to Rocky|Medium|Lionels Ex Wife|Series Five|Margaret|Wealthy Ex Wife|Younger Boyfriend|Jean Expectations|Changed Appearance
Which model-building project did Lionel struggle to finish in Lionel's New Hobby?|A model ship|A model railway|A miniature aeroplane|A doll's house|Easy|Lionels New Hobby|Series Five|Model Ship|Lionel Pastime|Tiny Pieces|Hobby|1996
Who helped complete Lionel's difficult model ship in Lionel's New Hobby?|Judith and Sandy|Rocky and Madge|Penny and Stephen|Jean and Alistair|Medium|Lionels New Hobby|Series Five|Judith Hanson|Sandy|Model Ship Finished|Helping Lionel|Family Teamwork
How did Jean and Lionel try to avoid the County Set on their next rural visit?|They arrived at four in the morning|They disguised themselves as tourists|They pretended the house was sold|They stayed in a neighbouring hotel|Medium|Avoiding The County Set|Series Five|4 AM Arrival|Avoiding Locals|Country Retreat|Weekend Plan|1996
Which gardener had been mistreated by members of the County Set?|Lol Ferris|Mike Barbosa|Kong|Stephen|Medium|Avoiding The County Set|Series Five|Lol Ferris|Gardener|Local Bullying|Country House|Rural Neighbours
What was the title of the American mini-series based on Lionel's story?|Just Two People|My Life in Kenya|Forever and Always|A Love Rekindled|Medium|Broadcast Plans|Series Five|Just Two People|American Adaptation|Mini Series Title|Lionel Script|TV Premiere
Who flew to New York for the mini-series screening when Jean and Lionel declined?|Judith and Sandy|Rocky and Madge|Penny and Stephen|Mrs Bale and Gwen Flack|Medium|Broadcast Plans|Series Five|Judith Hanson|Sandy|New York Trip|Alistair Invitation|American Premiere
What happened to the American mini-series after its disappointing broadcast?|It was cancelled|It won a major television award|It was renewed for three seasons|It became a stage musical|Medium|Broadcast Plans|Series Five|Just Two People|Poor Ratings|American Television|Series Cancellation|Lionel Disappointment
Who feared she was at death's door despite needing only minor surgery?|Penny|Madge|Sandy|Mrs Bale|Medium|At Deaths Door|Series Five|Penny|Minor Surgery|Health Anxiety|Hospital Stay|Family Drama
Which celebrity did Penny's hospital roommate mistakenly think Jean was?|Cilla Black|Judi Dench|Barbara Windsor|Gloria Hunniford|Medium|At Deaths Door|Series Five|Cilla Black|Jean Pargetter|Confused Patient|Hospital Roommate|Mistaken Identity
What exaggerated honour did villagers wrongly believe Lionel had received in Showered with Gifts?|The Victoria Cross|A knighthood|The Booker Prize|The Nobel Peace Prize|Medium|Showered With Gifts|Series Five Finale|Victoria Cross|Lionel Hardcastle|Village Rumour|Country Set|Misunderstanding
What did the grateful villagers bring Jean and Lionel in Showered with Gifts?|Numerous presents|Invitations to join the army|Hundreds of books to sign|A new office computer|Medium|Showered With Gifts|Series Five Finale|Villagers|Presents|Country House|Overblown Story|Rural Community
At which country pub did Sandy spend an evening with the Ferris brothers in Showered with Gifts?|The Stag and Huntsmen|The Red Lion|The King's Head|The White Hart|Hard|Showered With Gifts|Series Five|Stag And Huntsmen|Sandy|Ferris Brothers|Village Pub|Country Evening`;

let sequence = 0;
const questions = facts.trim().split('\n').map(line => {
  const id = 'tv_' + String(FIRST_ID + sequence).padStart(5, '0');
  const fields = line.trim().split('|').map(s => s.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields in ${id}; found ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(v => !v))
    throw new Error(`Empty field in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or question-specific tags in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(a => a.toLowerCase())).size !== 4)
    throw new Error(`Duplicate answer option in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  sequence++;
  return { id, category: 'Television', programme, question, answers,
    correctAnswer, difficulty, tags, dailyEligible: true };
});

if (questions.length !== 105 || questions[0].id !== 'tv_25593' ||
    questions[questions.length - 1].id !== 'tv_25697' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
    questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
      q.tags.length < 14 || !q.tags.includes('Programme: As Time Goes By') ||
      q.dailyEligible !== true))
  throw new Error('Pack 435 exported question validation failed');

module.exports = questions;