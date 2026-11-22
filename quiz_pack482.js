
 // PuzzlePilot — The Bigggggg Quiz — Pack 482: Another World, Part 2 (1975–1980)
 // Audited: 76 original + 25 new storyline, cast, production and awards questions.
 // Original IDs tv_26900–tv_26975; new audit IDs tv_42795–tv_42819.
 // The hour-long era: Mac and Rachel, Iris, the Randolphs, Janice, Mitch and Sally.
 // Continues directly after Pack 481 (tv_26820–tv_26899).
 // The programme is NOT fully covered: keep TV master row PARTIAL, not purple.
 // Original research 18 Nov 2026; audit extended 22 Nov 2026.
 // Additional sources: Soap Opera Digest; Paley Center 1976 episode record;
 // Television Academy Irene Dailey biography; 1978 Daytime Emmys; TV Guide history;
 // Alice Matthews casting and storyline history; daytime ratings records.
 // Sources:
 // https://www.soapoperadigest.com/content/remembering-another-world-on-the-25th-anniversary-of-its-finale/
 // https://www.encyclopedia.com/media/encyclopedias-almanacs-transcripts-and-maps/another-world
 // https://interviews.televisionacademy.com/shows/another-world
 // https://www.welovesoaps.tv/2009/07/harding-lemay-interview-part-one.html
 // https://www.fact-archive.com/encyclopedia/Another_World_%28TV_series%29
 // https://www.soapoperadigest.com/content/remembering-another-world/
'use strict';

const raw = [
// FORMAT AND PRODUCTION
["For which achievement did Another World's writing team receive a Daytime Emmy in 1975?","Outstanding Writing for a Drama Series","Outstanding Costume Design","Outstanding Talk Show Writing","Outstanding Original Song","Medium","1975 Emmy|Drama Writing|Harding Lemay|Douglas Marland|Script Team|Television Awards"],
["On which date did Another World switch to regular hour-long broadcasts?","6 January 1975","4 May 1974","5 March 1979","4 August 1980","Hard","6 January 1975|Hour Expansion|NBC Daytime|Scheduling|Regular Episodes|1970s Production"],
["In its newly expanded 1975 format, what was Another World's regular US Eastern weekday slot?","3–4 pm","12–1 pm","1–2 pm","4–5 pm","Hard","1975|US Eastern Time|Three PM|One Hour Slot|NBC Afternoon|Broadcast Scheduling"],
["At what Eastern US time did Another World's 90-minute broadcasts begin in 1979?","2:30 pm","12:30 pm","1:30 pm","4:30 pm","Hard","1979|Ninety Minutes|Afternoon Start Time|NBC Daytime|Two Thirty|Network Schedule"],
["Which date saw the start of Another World's 90-minute weekday broadcasts?","5 March 1979","6 January 1975","3 May 1974","25 June 1980","Hard","5 March 1979|Ninety Minute Debut|NBC Schedule|Daytime TV|1979 Expansion|Soap Milestone"],
["In August 1980, Another World returned from its extended format to episodes lasting how long?","60 minutes","30 minutes","45 minutes","90 minutes","Easy","August 1980|Return To One Hour|End Of Ninety Minutes|NBC Timeslot|Programme Format|Texas Spin Off"],
["Which new daytime programme took over part of the NBC schedule when Another World was shortened in 1980?","Texas","Somerset","Santa Barbara","Search for Tomorrow","Medium","1980|Texas|Spin Off Scheduling|One Hour Return|NBC Daytime|Iris Departure"],
["Which Daytime Emmy award did Another World win in 1976?","Outstanding Drama Series","Outstanding Game Show","Outstanding Talk Show","Outstanding Animated Series","Medium","1976 Emmys|Outstanding Drama|Awards|Paul Rauch|Harding Lemay Era|Daytime Television"],
["What is the title of Harding Lemay's memoir about writing Another World?","Eight Years in Another World","The Bay City Files","A Thousand Other Worlds","Soap Stories from NBC","Medium","Harding Lemay|1981 Memoir|Eight Years in Another World|Behind The Scenes|Soap Writing|Daytime Author"],
["Which rival ABC soap increasingly challenged Another World for viewers towards the end of the 1970s?","General Hospital","Ryan's Hope","Dark Shadows","All My Children","Medium","Late 1970s|General Hospital|ABC Competition|Ratings|Audience Shift|NBC Rivalry"],

// MAC AND RACHEL
["Who became Rachel's chief romantic partner as Another World moved beyond the Steve–Alice triangle?","Mackenzie Cory","John Randolph","Robert Delaney","Brian Bancroft","Easy","Rachel Davis|Mac Cory|1975 Romance|New Love|Cory Family|Reformed Rachel"],
["Which holiday did Mac and Rachel choose for their 1975 wedding?","Valentine's Day","Christmas Day","New Year's Day","Thanksgiving","Medium","Mac And Rachel|14 February 1975|Valentines Wedding|Marriage|Cory Family|Romance"],
["Where did Mac and Rachel marry in February 1975?","Mac's New York City townhouse","The Bay City courthouse","Ada's house","The Frame family farm","Medium","1975 Wedding|New York Townhouse|Mac Cory|Rachel Davis|Valentines Day|Marriage Venue"],
["About how much older than Rachel was publishing magnate Mac Cory?","25 years","5 years","10 years","50 years","Medium","Mac Cory|Rachel Davis|Age Gap|Older Husband|Class Difference|Cory Marriage"],
["Before developing Mac's romance with Rachel, which Matthews character was considered as his love interest?","Liz Matthews","Pat Matthews","Alice Matthews","Susan Matthews","Hard","Mac Cory|Liz Matthews|Unrealised Match|Harding Lemay|Story Development|1970s Romance"],
["What helped inspire the writers to turn Mac and Rachel into a couple?","The on-screen chemistry of their actors","A viewer telephone vote","A change of network","A crossover with Somerset","Medium","Douglass Watson|Victoria Wyndham|Actor Chemistry|Harding Lemay|Mac Rachel Origin|Creative Decision"],
["What industry made Mac Cory a rich businessman in Another World?","Publishing","Shipbuilding","Oil drilling","Airlines","Easy","Mac Cory|Publishing Magnate|Cory Enterprises|Business|Wealth|1970s"],
["What major transformation did Rachel undergo during her relationship with Mac?","From schemer to sympathetic heroine","From lawyer to police officer","From doctor to journalist","From singer to politician","Easy","Rachel Davis|Redemption|Mac Cory|Character Arc|Former Villain|1970s"],
["Which of Rachel's children from an earlier relationship was raised in Mac's household?","Jamie Frame","Dennis Carrington","Michael Randolph","Joey Perrini","Medium","Rachel Davis|Jamie Frame|Mac Cory|Stepfather Figure|Cory Home|Family Relationships"],
["What art form became an important creative pursuit for Rachel Cory in the late 1970s?","Sculpture","Ballet","Pottery painting","Opera singing","Medium","Rachel Cory|Sculpting|Artist|Creative Career|Late 1970s|Mac And Rachel"],
["What was the name of the daughter born to Mac and Rachel in 1978?","Amanda","Marianne","Sharlene","Cecile","Easy","Mac Cory|Rachel Cory|Amanda Cory|1978 Birth|Cory Daughter|Family Expansion"],
["Which of Rachel's relatives was Amanda Cory's maternal grandmother?","Ada Hobson","Liz Matthews","Emily Cory","Mary Matthews","Medium","Amanda Cory|Ada Hobson|Rachel Davis|Maternal Grandmother|Family Tree|1978"],
["What accusation damaged Mac and Rachel's marriage before Janice became involved?","Rachel accused Mac of infidelity","Mac accused Rachel of embezzlement","Rachel accused Mac of theft","Mac accused Rachel of kidnapping","Medium","Mac Rachel Split|Infidelity Accusation|1979|Marriage Breakdown|Janice Frame Setup|Cory Conflict"],
["Which woman became close to Mac while his marriage to Rachel was breaking down?","Janice Frame","Olive Randolph","Gwen Parrish","Lenore Delaney","Medium","Mac Cory|Janice Frame|Rachel Separation|Late 1970s|Romantic Rival|Cory Drama"],
["What year did Rachel seek a divorce from Mac during the Janice storyline?","1979","1974","1983","1987","Medium","1979 Divorce|Rachel Cory|Mac Cory|Janice Frame|Marital Crisis|Cory History"],

// IRIS AND THE CORY HOUSEHOLD
["What was Iris's chief objection to Rachel joining the Cory family?","She was jealous of Rachel's closeness to Mac","Rachel had stolen Iris's job","Rachel had married Iris's son","Rachel planned to buy Iris's home","Easy","Iris Cory|Rachel Rivalry|Father Daughter Jealousy|Mac Cory|1970s Feud|Cory Household"],
["What did Iris do with Rachel's Christmas presents to Mac in the lead-up to their marriage?","Returned them","Sold them at auction","Burned them","Gave them to Dennis","Hard","Iris Cory|Rachel Presents|Christmas 1974|Mac Cory|Sabotage|Pre Wedding Dispute"],
["Which attorney did Iris marry in 1977?","Brian Bancroft","John Randolph","Jeff Stone","Mitchell Dru","Medium","Iris Cory|Brian Bancroft|1977 Wedding|Attorney|Iris Marriage|Bancroft Family"],
["Which actor played lawyer Brian Bancroft during the 1970s?","Paul Stevens","David Canary","Michael M. Ryan","Ted Shackelford","Hard","Paul Stevens|Brian Bancroft|Actor Casting|1977|Iris Husband|Lawyer"],
["What revelation about Iris's early life distressed her in 1978?","She had been adopted","She had been born overseas","She was not married legally","Her son was adopted","Medium","Iris Cory|1978 Adoption Reveal|Mac Cory|Emily Cory|Family Secret|Identity Crisis"],
["What effect did the adoption revelation have on Iris's marriage to Brian?","It strained the marriage","They immediately renewed their vows","It led them to adopt twins","They both moved to Australia","Medium","Iris Cory|Brian Bancroft|Adoption Shock|1978|Marriage Strain|Cory Secret"],
["Which housekeeper provided a lighter, comic presence in the Cory home during the 1970s?","Louise Goddard","Helga Lindeman","Rose Perrini","Madge Murray","Medium","Louise Goddard|Cory Household|Housekeeper|Comic Relief|1970s|Mac Cory"],
["Which actress played long-serving Cory housekeeper Louise Goddard?","Anne Meacham","Constance Ford","Dorothy Lyman","Beverly Penberthy","Medium","Anne Meacham|Louise Goddard|Actress|Cory Household|1970s Cast|Domestic Staff"],
["Which character was served by the comedic maid Vivien Gorrow, who first appeared in 1978?","Iris Cory","Alice Matthews","Ada Hobson","Sharlene Frame","Medium","Vivien Gorrow|Iris Cory|Maid|1978 Introduction|Household Comedy|Servant"],
["Which actress became known for playing Vivien Gorrow on Another World?","Gretchen Oehler","Jennifer Leak","Maeve Kinkead","Judith Barcroft","Hard","Gretchen Oehler|Vivien Gorrow|Casting|Iris Maid|1978|Comedy"],
["Which Another World character departed for the Texas spin-off in 1980?","Iris Cory","Dennis Carrington","Mac Cory","Amanda Cory","Easy","Iris Cory|Texas Spin Off|1980 Exit|Houston|Another World|Beverlee McKinsey"],
["Which city was Iris planning to move to as her departure from Another World was developed?","Houston","Dallas","Chicago","Boston","Medium","Iris Cory|Houston Texas|1980 Storyline|Texas Spin Off|Relocation|Cory Exit"],

// MATTHEWS, RANDOLPHS AND FRAMES
["What were the names of John and Pat Randolph's twins?","Michael and Marianne","Jamie and Amanda","Dennis and Blaine","Alice and Russ","Medium","John Randolph|Pat Matthews|Twin Children|Michael Randolph|Marianne Randolph|Family Tree"],
["What personal problem did Pat Randolph develop after her husband's infidelity?","Alcohol dependence","Gambling addiction","Amnesia","Compulsive stealing","Medium","Pat Randolph|John Randolph|Affair Aftermath|Alcoholism|Family Breakdown|1970s"],
["Which woman did John Randolph marry after his marriage to Pat ended?","Olive Gordon","Janice Frame","Regine Lindeman","Carol Lamont","Medium","John Randolph|Olive Gordon|Second Marriage|Pat Matthews|1970s Storyline|Olive Randolph"],
["Which actress played the dangerous Olive Randolph in the late 1970s?","Jennifer Leak","Laurie Heineman","Christine Jones","Dorothy Lyman","Medium","Jennifer Leak|Olive Randolph|Actress|1976-1979|John Randolph|Villain"],
["Who caused the fire that ultimately led to John Randolph's death?","Olive Randolph","Rachel Cory","Iris Cory","Janice Frame","Medium","John Randolph|Olive|Arson|1979 Fire|Cottage|Tragic Death"],
["Whom was John Randolph trying to rescue from a burning building when he died?","Alice Matthews","Pat Matthews","Marianne Randolph","Liz Matthews","Hard","John Randolph|Alice Matthews|Rescue|1979 Fire|Sacrifice|Olive Plot"],
["In which year did John Randolph die following the fire storyline?","1979","1975","1982","1986","Medium","John Randolph|1979 Death|Olive Fire|Randolph Family|Tragic Exit|Storyline"],
["What tragedy was reported to have killed Steve Frame in 1975?","A helicopter crash","A train derailment","A house fire","A boating accident","Medium","Steve Frame|1975|Presumed Death|Helicopter Crash|Alice Frame|Australia"],
["In which country was Steve Frame's supposedly fatal accident reported?","Australia","Canada","France","Brazil","Medium","Steve Frame|Australia|Helicopter|Presumed Dead|1975|Soap Mystery"],
["Which actress left the role of Alice Matthews in 1975 after years at the centre of the soap?","Jacqueline Courtney","Victoria Wyndham","Irene Dailey","Beverlee McKinsey","Medium","Jacqueline Courtney|Alice Matthews|1975 Exit|Original Actress|Casting Changes|Love Triangle Aftermath"],
["To which other soap did Jacqueline Courtney later move in the 1970s?","One Life to Live","The Young and the Restless","General Hospital","Days of Our Lives","Medium","Jacqueline Courtney|One Life to Live|ABC Soap|1970s Move|Pat Ashley|Post Another World"],
["Which actor joined Jacqueline Courtney on One Life to Live after leaving Another World?","George Reinholt","Douglass Watson","Michael M. Ryan","Paul Stevens","Medium","George Reinholt|Jacqueline Courtney|One Life to Live|1975 Departures|Tony Lord|ABC"],
["Which actress portrayed Sharlene Frame in the mid-1970s and later won a Daytime Emmy?","Laurie Heineman","Maeve Kinkead","Anne Meacham","Christine Jones","Hard","Laurie Heineman|Sharlene Frame|1978 Emmy|Actress|1975-1977|Russ Matthews"],
["What former occupation disrupted Sharlene Frame's marriage to Russ Matthews?","Sex work","Police work","Professional boxing","Politics","Hard","Sharlene Frame|Russ Matthews|Past Revealed|Marriage Collapse|1970s|Character History"],
["Which actor played Joey Perrini on Another World beginning in 1978?","Ray Liotta","Al Pacino","Robert De Niro","Tom Selleck","Easy","Ray Liotta|Joey Perrini|1978 Debut|Actor Career|Perrini Family|Early Television"],
["What was the name of Joey Perrini's sister, involved in stories with Vince Frame?","Angie","Iris","Pat","Lenore","Medium","Angie Perrini|Joey Perrini|Vince Frame|Siblings|Late 1970s|Perrini Family"],
["Which actress became associated with the role of Angie Perrini during the later 1970s?","Maeve Kinkead","Jennifer Leak","Gretchen Oehler","Dorothy Lyman","Medium","Maeve Kinkead|Angie Perrini|Actress|Late 1970s|Vince Frame|Casting"],
["Which Frame brother became involved in business disputes surrounding Frame Enterprises?","Willis Frame","Jamie Frame","Vince Frame","Steven Frame Jr.","Medium","Willis Frame|Frame Enterprises|Business Disputes|Steve Frame|Frame Clan|1970s"],
["Which actor played Willis Frame from 1976 to 1980?","Leon Russom","David Bailey","Ray Liotta","Richard Bekins","Hard","Leon Russom|Willis Frame|1976-1980|Actor|Frame Family|Businessman"],

// SVEN AND REGINE
["What was the surname of the menacing servant Sven in Another World's 1977–78 storyline?","Petersen","Bancroft","Carrington","Delaney","Medium","Sven Petersen|1977-1978|Cory Household|Villain|Regine Lindeman|Murder Plot"],
["Which actor portrayed Sven Petersen?","Roberts Blossom","William Gray Espy","Paul Stevens","Dolph Sweet","Hard","Roberts Blossom|Sven Petersen|1977|1978|Villain Actor|Cory Story"],
["Which young woman became the focus of Sven's schemes?","Regine Lindeman","Marianne Randolph","Gwen Parrish","Carol Lamont","Medium","Regine Lindeman|Sven Petersen|Cory Staff|1977|1978|Coercion Plot"],
["What was the occupation of Rocky Olsen in the Cory household?","Chauffeur","Gardener","Magazine editor","Solicitor","Medium","Rocky Olsen|Mac Cory|Chauffeur|Cory Estate|Sven Petersen|1977"],
["Which villain murdered chauffeur Rocky Olsen?","Sven Petersen","John Randolph","Brian Bancroft","Willis Frame","Medium","Rocky Olsen|Sven Petersen|1978|Murder|Cory Household|Crime Story"],
["Which three youngsters found Rocky Olsen's remains in the 1978 storyline?","Jamie, Dennis and Regine","Russ, John and Pat","Alice, Iris and Liz","Mitch, Janice and Mac","Hard","Rocky Olsen|Jamie Frame|Dennis Carrington|Regine Lindeman|1978 Discovery|Sven Crime"],
["Whose child was Regine Lindeman revealed to be carrying during the Cory household scandal?","Cliff Tanner's","Mac Cory's","Brian Bancroft's","Steve Frame's","Hard","Regine Lindeman|Cliff Tanner|Pregnancy|1977-1978|Sven Plot|Cory Household"],

// JANICE, MITCH AND THE CLIMAX
["What was Janice Frame's family relationship to Steve Frame?","His sister","His daughter","His aunt","His mother","Medium","Janice Frame|Steve Frame|Siblings|Frame Family|1979|Mac Cory"],
["Which actress portrayed the scheming Janice Frame during the Mac–Rachel break-up?","Christine Jones","Beverlee McKinsey","Maeve Kinkead","Jennifer Leak","Medium","Christine Jones|Janice Frame|1978-1980|Actress|Mac Cory|Mitch Blake"],
["Which magazine connected to Mac's publishing empire did Janice Frame help run?","Brava","Vogue","Time","People","Medium","Janice Frame|Brava Magazine|Cory Publishing|Editor|Mac Cory|1979"],
["Which man secretly worked with Janice Frame against Mac Cory?","Mitch Blake","Brian Bancroft","John Randolph","Dennis Carrington","Medium","Janice Frame|Mitch Blake|Conspiracy|Mac Cory|1979|Cory Fortune"],
["What was Mitch Blake's profession in the late-1970s Mac–Janice storyline?","Photographer","Surgeon","Police detective","Schoolteacher","Medium","Mitch Blake|Photographer|1979 Arrival|Janice Frame|Nightclub|Career"],
["Which kind of entertainment venue was Mitch Blake associated with?","A discotheque","A bowling alley","A cinema","An opera house","Medium","Mitch Blake|Nightclub|Discotheque|1979|Venue Owner|Photographer"],
["Which actor first played photographer Mitch Blake?","William Gray Espy","Leon Russom","George Reinholt","Douglass Watson","Medium","William Gray Espy|Mitch Blake|Actor|1979|Janice Plot|Photographer Role"],
["What was Janice and Mitch's real motive for targeting Mac?","To seize his fortune","To take over the police force","To win a court election","To gain custody of Dennis","Medium","Janice Frame|Mitch Blake|Mac Estate|Financial Plot|1979-1980|Conspiracy"],
["What did Rachel do with Mitch while investigating the plot against Mac?","She slept with him","She married him","She sent him to Australia","She hired him as her lawyer","Hard","Rachel Cory|Mitch Blake|Investigation|Infidelity|1979-1980|Janice Scheme"],
["Which Caribbean island was the setting for the showdown involving Janice, Mac and Rachel?","St Croix","Barbados","Aruba","Jamaica","Medium","St Croix|Caribbean|1980 Climax|Janice Frame|Mac Cory|Rachel Cory"],
["What did Janice secretly use against Mac during the Caribbean plot?","Poison","A forged passport","A stolen painting","A hidden camera","Medium","Janice Frame|Mac Cory|Poisoning|St Croix|1980|Murder Attempt"],
["Who ultimately killed Janice Frame during the 1980 St Croix climax?","Rachel Cory","Iris Cory","Mitch Blake","Ada Hobson","Medium","Janice Frame|Rachel Cory|1980 Death|St Croix|Mac Rescue|Showdown"],
["Which successful daytime writer left Another World in 1979 amid disputes about the show's direction?","Harding Lemay","Irna Phillips","William J. Bell","Agnes Nixon","Medium","Harding Lemay|1979 Exit|Head Writer|Creative Disagreement|Young Audience|End Of Era"]
];

const baseTags = [
  'Television', 'American Television', 'Programme: Another World',
  'Another World (NBC)', '1975–1980 Storylines', 'Daytime Soap Opera',
  'Bay City', 'Written Quiz'
];

const questions = raw.map((r,i)=>{
  let [question,correctAnswer,a,b,c,difficulty,keywords] = r;
  if (!question.toLowerCase().includes('another world')) {
    question='In Another World, '+question[0].toLowerCase()+question.slice(1);
  }
  const answers=[a,b,c];
  answers.splice((i*3+1)%4,0,correctAnswer);
  return {
    id:'tv_'+(26900+i),
    category:'TV',
    topic:'Another World',
    question,
    answers,
    correctAnswer,
    difficulty,
    dailyEligible:true,
    tags:[...baseTags,...keywords.split('|')]
  };
});

// Audit questions appended after the original 76, preserving every original ID.
const AUDIT_ORIGINAL_COUNT=76;
const AUDIT_FIRST_ID=42795;
const auditQuestions=[
  {
    "id": "tv_42795",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, who took over the role of Alice Matthews after Jacqueline Courtney's departure?",
    "answers": [
      "Wesley Ann Pfenning",
      "Susan Harney",
      "Victoria Wyndham",
      "Beverly Penberthy"
    ],
    "correctAnswer": "Susan Harney",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Cast",
      "Alice Matthews",
      "Susan Harney",
      "1975 Recast",
      "Jacqueline Courtney Exit",
      "Soap Cast",
      "Early Hour Era"
    ]
  },
  {
    "id": "tv_42796",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which actress succeeded Susan Harney as Alice Matthews in 1979?",
    "answers": [
      "Wesley Ann Pfenning",
      "Jacqueline Courtney",
      "Vana Tribbey",
      "Linda Borgeson"
    ],
    "correctAnswer": "Wesley Ann Pfenning",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Cast",
      "Alice Matthews",
      "Wesley Ann Pfenning",
      "1979 Recast",
      "Susan Harney",
      "Cast Succession",
      "Hour Era"
    ]
  },
  {
    "id": "tv_42797",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, what medical emergency caused Mary Matthews's death in 1975?",
    "answers": [
      "A stroke",
      "A brain tumour",
      "A car accident",
      "A heart attack"
    ],
    "correctAnswer": "A heart attack",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Mary Matthews",
      "1975 Death",
      "Heart Attack",
      "Matthews Family",
      "Cast Departure",
      "Family Tragedy"
    ]
  },
  {
    "id": "tv_42798",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, what revelation about Marianne caused John Randolph to leave Pat in a 1976 storyline?",
    "answers": [
      "Marianne was secretly married",
      "Marianne had forged a will",
      "Marianne had undergone an abortion",
      "Marianne had emigrated to Italy"
    ],
    "correctAnswer": "Marianne had undergone an abortion",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "John Randolph",
      "Pat Randolph",
      "Marianne Randolph",
      "1976 Abortion Story",
      "Marriage Breakdown",
      "Family Conflict"
    ]
  },
  {
    "id": "tv_42799",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which Matthews family doctor was once engaged to Iris Carrington?",
    "answers": [
      "Steve Frame",
      "Russ Matthews",
      "John Randolph",
      "Brian Bancroft"
    ],
    "correctAnswer": "Russ Matthews",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Iris Carrington",
      "Russ Matthews",
      "Former Engagement",
      "1975 Relationship",
      "Mac Cory",
      "Family Romance"
    ]
  },
  {
    "id": "tv_42800",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, whom did Iris Carrington marry despite his unresolved relationship with Clarice Hobson?",
    "answers": [
      "Robert Delaney",
      "Eliot Carrington",
      "Russ Matthews",
      "Mitch Blake"
    ],
    "correctAnswer": "Robert Delaney",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Iris Carrington",
      "Robert Delaney",
      "Clarice Hobson",
      "Marriage Intrigue",
      "1970s Iris",
      "Architect"
    ]
  },
  {
    "id": "tv_42801",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, who was the father of Clarice Hobson's child during the Iris Delaney marriage storyline?",
    "answers": [
      "Mac Cory",
      "Russ Matthews",
      "John Randolph",
      "Robert Delaney"
    ],
    "correctAnswer": "Robert Delaney",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Clarice Hobson",
      "Robert Delaney",
      "Pregnancy Story",
      "Iris Carrington",
      "Child Paternity",
      "Mid 1970s"
    ]
  },
  {
    "id": "tv_42802",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, how did Iris Carrington intimidate Clarice Hobson over her pregnancy?",
    "answers": [
      "She threatened to destroy Clarice's house",
      "She had Clarice arrested for fraud",
      "She threatened to take Clarice's child away",
      "She threatened to revoke Clarice's nursing licence"
    ],
    "correctAnswer": "She threatened to take Clarice's child away",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Iris Carrington",
      "Clarice Hobson",
      "Child Custody Threat",
      "Robert Delaney",
      "Pregnancy Cover Up",
      "Villainous Scheme"
    ]
  },
  {
    "id": "tv_42803",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, why did Robert Delaney finally leave Iris Carrington after their marriage?",
    "answers": [
      "He learned Iris had joined a rival publisher",
      "He discovered she had concealed Clarice's pregnancy",
      "He discovered Iris had remarried Eliot",
      "He was offered a job in Sydney"
    ],
    "correctAnswer": "He discovered she had concealed Clarice's pregnancy",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Robert Delaney",
      "Iris Carrington",
      "Clarice Hobson",
      "Pregnancy Secret",
      "Marriage Collapse",
      "Story Revelation"
    ]
  },
  {
    "id": "tv_42804",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which actress played Clarice Hobson in the 1970s?",
    "answers": [
      "Gail Brown",
      "Susan Harney",
      "Gretchen Oehler",
      "Laurie Heineman"
    ],
    "correctAnswer": "Gail Brown",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Cast",
      "Gail Brown",
      "Clarice Hobson",
      "1970s Cast",
      "Robert Delaney",
      "Romantic Story",
      "Actress"
    ]
  },
  {
    "id": "tv_42805",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which actress originally played Janice Frame before Christine Jones took over?",
    "answers": [
      "Victoria Wyndham",
      "Susan Sullivan",
      "Beverlee McKinsey",
      "Victoria Thompson"
    ],
    "correctAnswer": "Victoria Thompson",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Cast",
      "Victoria Thompson",
      "Janice Frame",
      "Christine Jones",
      "Early Portrayal",
      "Frame Family",
      "Casting History"
    ]
  },
  {
    "id": "tv_42806",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which former Sharlene Frame actress won the 1978 Daytime Emmy for Outstanding Actress?",
    "answers": [
      "Beverlee McKinsey",
      "Susan Harney",
      "Laurie Heineman",
      "Victoria Wyndham"
    ],
    "correctAnswer": "Laurie Heineman",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Awards",
      "Laurie Heineman",
      "Sharlene Frame",
      "1978 Daytime Emmy",
      "Outstanding Actress",
      "Award Winner",
      "1970s Recognition"
    ]
  },
  {
    "id": "tv_42807",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which Liz Matthews actress won the 1979 Daytime Emmy for Outstanding Actress?",
    "answers": [
      "Audra Lindley",
      "Irene Dailey",
      "Susan Sullivan",
      "Virginia Dwyer"
    ],
    "correctAnswer": "Irene Dailey",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Awards",
      "Irene Dailey",
      "Liz Matthews",
      "1979 Daytime Emmy",
      "Outstanding Actress",
      "Award Winner",
      "1970s Recognition"
    ]
  },
  {
    "id": "tv_42808",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which Mac Cory actor won the Daytime Emmy for Outstanding Actor in 1980?",
    "answers": [
      "Douglass Watson",
      "Robert Emhardt",
      "George Reinholt",
      "Nicolas Coster"
    ],
    "correctAnswer": "Douglass Watson",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Awards",
      "Douglass Watson",
      "Mac Cory",
      "1980 Daytime Emmy",
      "Outstanding Actor",
      "Award Winner",
      "Cory Family"
    ]
  },
  {
    "id": "tv_42809",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, how many Daytime Emmy nominations did Beverlee McKinsey receive for playing Iris Carrington from 1977 through 1980?",
    "answers": [
      "One",
      "Seven",
      "Ten",
      "Four"
    ],
    "correctAnswer": "Four",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Awards",
      "Beverlee McKinsey",
      "Iris Carrington",
      "1977 1980 Awards",
      "Four Nominations",
      "Lead Actress",
      "Award History"
    ]
  },
  {
    "id": "tv_42810",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, with which CBS soap did Another World share first place in the 1977–78 US daytime ratings?",
    "answers": [
      "Guiding Light",
      "The Young and the Restless",
      "As the World Turns",
      "The Edge of Night"
    ],
    "correctAnswer": "As the World Turns",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "As The World Turns",
      "1977 1978 Season",
      "Ratings Tie",
      "Top Rated Soaps",
      "CBS",
      "NBC Competition"
    ]
  },
  {
    "id": "tv_42811",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, to what position did Another World fall in the US daytime soap ratings in 1978–79?",
    "answers": [
      "First",
      "Eighth",
      "Second",
      "Fifteenth"
    ],
    "correctAnswer": "Eighth",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "1978 1979 Ratings",
      "Eighth Position",
      "Audience Decline",
      "NBC Performance",
      "Daytime Television",
      "90 Minute Format"
    ]
  },
  {
    "id": "tv_42812",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which writing duo took over as Another World's head writers late in 1979 after Harding Lemay?",
    "answers": [
      "Tom King and Robert Soderberg",
      "Agnes Nixon and William J Bell",
      "Irna Phillips and Doug Marland",
      "Michael Malone and Peggy Sloane"
    ],
    "correctAnswer": "Tom King and Robert Soderberg",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "Tom King",
      "Robert Soderberg",
      "1979 Head Writers",
      "Harding Lemay Successors",
      "Production Credits",
      "Editorial Transition"
    ]
  },
  {
    "id": "tv_42813",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, what first for US daytime soap operas did Another World's January 1975 expansion achieve?",
    "answers": [
      "The first broadcast in colour",
      "The first programme with a female lead",
      "The first soap to run at weekends",
      "The first regularly scheduled one-hour serial"
    ],
    "correctAnswer": "The first regularly scheduled one-hour serial",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "January 1975",
      "One Hour Soap First",
      "NBC Television History",
      "Broadcast Innovation",
      "Expansion",
      "Daily Schedule"
    ]
  },
  {
    "id": "tv_42814",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, what US daytime soap milestone was achieved by Another World's March 1979 expansion?",
    "answers": [
      "The first soap with a live audience",
      "The first soap broadcast entirely from California",
      "The first regularly scheduled 90-minute serial",
      "The first soap with simultaneous subtitles"
    ],
    "correctAnswer": "The first regularly scheduled 90-minute serial",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "March 1979",
      "Ninety Minute First",
      "NBC Daytime",
      "Soap Opera Milestone",
      "Extended Format",
      "Broadcast Innovation"
    ]
  },
  {
    "id": "tv_42815",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which NBC soap was moved out of its 3:30pm slot when Another World expanded in 1975?",
    "answers": [
      "Days of Our Lives",
      "How to Survive a Marriage",
      "Somerset",
      "The Doctors"
    ],
    "correctAnswer": "How to Survive a Marriage",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "How To Survive A Marriage",
      "1975 Schedule Shift",
      "NBC 330 PM",
      "Hour Expansion",
      "Afternoon Lineup",
      "Daytime Programming"
    ]
  },
  {
    "id": "tv_42816",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, what proposed storyline subject did Harding Lemay say television executives vetoed during his Another World tenure?",
    "answers": [
      "Introducing a gay character",
      "Having a character become a doctor",
      "Introducing an interracial friendship",
      "Making a character leave Bay City"
    ],
    "correctAnswer": "Introducing a gay character",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Production",
      "Harding Lemay",
      "Vetoed Story Idea",
      "Gay Character",
      "1970s Network Decisions",
      "Writing History",
      "Creative Constraints"
    ]
  },
  {
    "id": "tv_42817",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which young girl did Alice Matthews adopt during the latter 1970s?",
    "answers": [
      "Amanda Cory",
      "Josie Watts",
      "Marianne Randolph",
      "Sally Spencer"
    ],
    "correctAnswer": "Sally Spencer",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Alice Matthews",
      "Sally Spencer",
      "Adoption Story",
      "1970s Child Character",
      "Frame Family",
      "Nursing Work"
    ]
  },
  {
    "id": "tv_42818",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which man, the son of Beatrice Gordon, married Alice Matthews after Steve Frame's presumed death?",
    "answers": [
      "Robert Delaney",
      "John Randolph",
      "Raymond Gordon",
      "Willis Frame"
    ],
    "correctAnswer": "Raymond Gordon",
    "difficulty": "Medium",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Raymond Gordon",
      "Alice Matthews",
      "Beatrice Gordon",
      "1970s Marriage",
      "Sally Spencer",
      "Later Romance"
    ]
  },
  {
    "id": "tv_42819",
    "category": "TV",
    "topic": "Another World",
    "question": "In Another World, which grandmother briefly abducted Alice Matthews's newly adopted daughter Sally?",
    "answers": [
      "Liz Matthews",
      "Beatrice Gordon",
      "Ada Hobson",
      "Helen Moore"
    ],
    "correctAnswer": "Beatrice Gordon",
    "difficulty": "Hard",
    "dailyEligible": true,
    "tags": [
      "Television",
      "American Television",
      "Programme: Another World",
      "Another World (NBC)",
      "1975–1980 Storylines",
      "Daytime Soap Opera",
      "Bay City",
      "Written Quiz",
      "Section: Story",
      "Beatrice Gordon",
      "Sally Spencer",
      "Alice Matthews",
      "Grandmother",
      "Child Abduction",
      "Raymond Gordon"
    ]
  }
];
questions.push(...auditQuestions);

if(questions.length!==101) throw new Error('Pack 482 count check failed');
const ids=new Set(), facts=new Set();
for(let i=0;i<questions.length;i++){
  const q=questions[i];
  const key=q.question.toLowerCase().replace(/[^a-z0-9]/g,'');
  if(q.id!==(i<AUDIT_ORIGINAL_COUNT?'tv_'+(26900+i):'tv_'+(AUDIT_FIRST_ID+i-AUDIT_ORIGINAL_COUNT))||
     ids.has(q.id)||facts.has(key)||
     q.answers.length!==4||
     new Set(q.answers.map(x=>x.toLowerCase())).size!==4||
     q.answers.filter(x=>x===q.correctAnswer).length!==1||
     q.tags.length<14||
     new Set(q.tags).size!==q.tags.length||
     !['Easy','Medium','Hard'].includes(q.difficulty)||
     !q.dailyEligible){
    throw new Error('Pack 482 validation failed at '+q.id);
  }
  ids.add(q.id);
  facts.add(key);
}

module.exports=questions;