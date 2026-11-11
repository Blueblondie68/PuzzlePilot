
// quiz_pack379.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Men Behaving Badly (1992-1998) and Outnumbered (2007-2024).
// WordPad-ready CommonJS module. No external dependencies.
// Includes original Men Behaving Badly specials and Outnumbered specials to 2024.
// Each row has seven question-specific tags plus core programme metadata.
// Research: British Comedy Guide programme, cast and episode guides; Hat Trick Productions.

const FIRST_ID = 19731;

// question | correct answer | three distractors | difficulty | seven subject-specific tags
const menFacts = `Who played Gary Strang in Men Behaving Badly?|Martin Clunes|Neil Morrissey|Harry Enfield|John Thomson|Easy|Gary Strang|Martin Clunes|Lead Actor|Flat Owner|Original Cast|Character Casting|1990s Comedy
Who played Tony Smart, the lodger who joined in the second series?|Neil Morrissey|Martin Clunes|Harry Enfield|Ian Lindsay|Easy|Tony Smart|Neil Morrissey|Series Two Arrival|New Flatmate|Casting Change|Gary Strang|BBC Era
Who portrayed Gary's original flatmate Dermot?|Harry Enfield|Neil Morrissey|John Thomson|David Swift|Easy|Dermot|Harry Enfield|Original Flatmate|Series One|1992 Cast|Actor Casting|Gary Strang
Which actress played Gary's girlfriend Dorothy?|Caroline Quentin|Leslie Ash|Valerie Minifie|Haydn Gwynne|Easy|Dorothy|Caroline Quentin|Gary Girlfriend|Nurse|Leading Actress|Character Casting|Romance
Which actress played upstairs neighbour Deborah?|Leslie Ash|Caroline Quentin|Valerie Minifie|Susannah Doyle|Easy|Deborah|Leslie Ash|Upstairs Neighbour|Tony Romantic Interest|Main Actress|Character Casting|Flat Share
Which actor played Gary's colleague George?|Ian Lindsay|John Thomson|Dave Atkins|Harry Enfield|Medium|George|Ian Lindsay|Office Assistant|Security Firm|Supporting Actor|Character Casting|Workplace
Who played Gary's secretary Anthea?|Valerie Minifie|Caroline Quentin|Leslie Ash|Janet Dibley|Medium|Anthea|Valerie Minifie|Office Secretary|Security Business|Supporting Actress|1990s Cast|Casting
Who portrayed the original pub landlord Les?|Dave Atkins|John Thomson|Ian Lindsay|Harry Enfield|Medium|Les|Dave Atkins|Pub Landlord|Early Series|The Crown|Casting|Local Pub
Which actor played the later pub landlord Ken?|John Thomson|Dave Atkins|Ian Lindsay|Martin Clunes|Medium|Ken|John Thomson|Series Five|Series Six|New Landlord|The Crown|Character Casting
What is the name of Gary and Tony's regular pub?|The Crown|The Queen's Head|The Red Lion|The Dog and Duck|Easy|The Crown|Local Pub|Gary And Tony|Drinking Place|Landlords Les And Ken|Neighbourhood Setting|Social Life
What kind of business employs Gary as an office manager?|Security equipment|Estate agency|Car insurance|Computer repairs|Easy|Gary Strang|Security Company|Burglar Alarms|Locks|Office Manager|Employment|Workplace Comedy
Which colleague assists Gary at the security company?|George|Ken|Dermot|Tony|Medium|George|Gary Strang|Security Office|Ian Lindsay|Assistant|Work Relationship|Office Staff
What office job does Anthea perform for Gary?|Secretary|Accountant|Sales representative|Reception security guard|Medium|Anthea|Secretary|Valerie Minifie|Office Administration|Gary Strang|Security Firm|Job Role
Which medical profession does Dorothy work in?|Nursing|Dentistry|Physiotherapy|Pharmacy|Easy|Dorothy|Nurse|Caroline Quentin|Hospital|Workplace|Girlfriend|Character Occupation
Where does Deborah live in relation to Gary's flat?|Upstairs|Next door across the street|In the basement|At the end of the road|Easy|Deborah|Upstairs Flat|Gary Home|Neighbour|Leslie Ash|Residential Setting|Tony Romance
Which character replaces Dermot as Gary's lodger?|Tony Smart|Ken|George|Clive|Easy|Dermot Departure|Tony Smart|Gary Flat|Series Two|New Lodger|Flat Share|Cast Transition
In which series does Tony Smart first appear?|Series two|Series one|Series four|Series six|Medium|Tony Smart|Series Two|1992|Neil Morrissey|Cast Debut|Dermot Replacement|Programme Timeline
In which series is Harry Enfield's character the regular flatmate?|Series one|Series two|Series three|Series five|Medium|Dermot|Harry Enfield|Series One|Original Run|1992|Flatmate History|Cast Change
What sort of business did Tony run before his stall was blown down?|A music stall|A fruit stall|A book kiosk|A flower shop|Medium|Tony Smart|Music Stall|Former Business|High Wind|Lost Livelihood|Character Backstory|Neil Morrissey
What postal occupation does Tony take up later in the series?|Postman|Parcel sorter|Courier dispatcher|Post office manager|Medium|Tony Smart|Postman|Later Career|Postal Service|Employment|Nobby No Mates|Character Change
Which nickname does Tony acquire after becoming a postman?|Nobby No-mates|Speedy Smart|The Postmaster|Mr Special Delivery|Hard|Tony Smart|Nobby No Mates|Postman|Work Nickname|Neil Morrissey|Later Episodes|Character Humour
What kind of drinking establishment did Deborah once manage?|Wine bar|Country pub|Cocktail lounge on a ship|Hotel nightclub|Medium|Deborah|Wine Bar Manager|Former Career|Leslie Ash|Unemployment|Work History|Character Biography
Which board game is Gary said to have made himself?|What's That Smell?|Monopoly Madness|Guess The Celebrity|Pub Quiz Panic|Hard|Gary Strang|Whats That Smell|Homemade Board Game|Hobbies|Martin Clunes|Character Quirk|Household Games
What is the first name of George's wife?|Marjorie|Mavis|Dorothy|Deborah|Hard|George|Marjorie|Married Couple|Ian Lindsay|Office Colleague|Supporting Character|Family Life
Who takes over the pub from Les in the later series?|Ken|George|Dermot|Clive|Medium|Les Departure|Ken|Pub Ownership|The Crown|Series Five|John Thomson|Landlord Change
Which recurring employer is constantly rude to George and Anthea?|Gary Strang|Tony Smart|Ken|Dermot|Easy|Gary Strang|Security Company|George|Anthea|Office Management|Rudeness|Workplace Satire
Which character repeatedly tries to impress Deborah romantically?|Tony Smart|George|Ken|Gary Strang|Easy|Tony Smart|Deborah|Unrequited Romance|Flatmate|Neil Morrissey|Leslie Ash|Relationship Arc
Who wrote and created the original British sitcom?|Simon Nye|Ben Elton|Richard Curtis|John Esmonde|Medium|Simon Nye|Creator|Scriptwriter|British Sitcom|Programme Origins|1992|Comedy Writing
In which year was the novel on which the sitcom was based published?|1989|1983|1992|1996|Hard|Simon Nye|Original Novel|1989 Publication|Book Adaptation|Literary Origin|Comedy Writing|Pre Television
Which television producer developed Simon Nye's story into a series?|Beryl Vertue|Verity Lambert|Beryl Bainbridge|Jane Tranter|Hard|Beryl Vertue|Series Producer|Book Adaptation|Hartswood Films|Television Development|Simon Nye|Behind The Scenes
Which production company made Men Behaving Badly?|Hartswood Films|Hat Trick Productions|Talkback Productions|Red Production Company|Medium|Hartswood Films|Production Company|Beryl Vertue|Behind The Scenes|Sitcom Production|British Television|1990s
Which channel first broadcast Men Behaving Badly?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|First Broadcast|Series One|1992|Original Channel|Television History|Network Launch
Which broadcaster aired the third series after the programme changed networks?|BBC One|Channel 4|ITV|BBC Two|Medium|BBC One|Channel Switch|Series Three|1994|Post ITV|Broadcast History|Network Move
In what year was the first episode screened?|1992|1989|1994|1997|Easy|1992 Premiere|Series One|Original Broadcast|ITV|Television Timeline|Programme Start|February
In what year did the original television run conclude?|1998|1995|2001|2003|Easy|1998 Finale|Farewell Specials|Programme End|BBC One|Television Timeline|Final Run|1990s
How many regular series were produced?|Six|Four|Five|Eight|Medium|Six Series|1992 To 1997|Programme Count|British Comedy|Television Catalogue|Broadcast Statistics|Original Run
How many regular episodes does the British Comedy Guide count, excluding short specials?|42|36|48|52|Medium|Forty Two Episodes|Episode Count|Six Series|BCG Listing|Production Statistics|Sitcom Catalogue|Regular Run
What was the title of the very first episode?|Intruders|The Bet|Lovers|Gary and Tony|Medium|Intruders|Series One|1992 Premiere|Pilot Story|First Episode|ITV|Episode Title
Which episode closes the first television series?|My Brilliant Career|Sex and Violence|The Bet|Going Nowhere|Medium|My Brilliant Career|Series One Finale|1992|Episode Sequence|Harry Enfield|Early Series|Episode Title
What is the title of the first episode with Tony as the regular new flatmate?|Gary and Tony|Lovers|Rent Boy|Three Girlfriends|Medium|Gary And Tony|Series Two Premiere|New Lodger|Neil Morrissey|1992|Cast Change|Episode Title
What is the title of the first episode of the BBC-era third series?|Lovers|Babies|Wedding|Intruders|Medium|Lovers|Series Three Premiere|1994|BBC One|New Series|Broadcast Sequence|Episode Title
Which episode concludes the third series?|Marriage|Weekend|Bed|Cleaning Lady|Medium|Marriage|Series Three Finale|1994|Episode Title|BBC One|Season Ending|Relationships
How many episodes are in the fourth regular series?|Seven|Five|Six|Eight|Hard|Series Four|Seven Episodes|1995|Programme Structure|Broadcast Run|BBC One|Season Count
What is the title of the fifth series' opening episode?|Hair|Cardigan|Cowardice|Rich and Fat|Medium|Hair|Series Five Premiere|1996|Episode Title|BBC One|Season Opening|Programme Timeline
Which episode opens the sixth regular series?|Stag Night|Watching TV|Jealousy|Sofa|Medium|Stag Night|Series Six Premiere|1997|Episode Sequence|BBC One|Wedding Preparations|Season Opening
In the sixth-series episode that largely stays in one living room, what delivery are the four friends waiting for?|Pizza|Chinese takeaway|A new sofa|A television set|Medium|Watching TV|Series Six|Pizza Delivery|Living Room|Bottle Episode|Four Friends|1997
Which science-fiction series is playing in the background of the sixth-series episode Watching TV?|Star Trek|Doctor Who|Babylon 5|The X-Files|Hard|Watching TV|Star Trek|Science Fiction|Living Room|1997 Episode|Television Within Television|Series Six
Which Christmas was the festive special Jingle Balls broadcast?|1997|1992|1995|1999|Medium|Jingle Balls|Christmas Special|1997|Holiday Episode|BBC One|Festive Broadcast|Programme Chronology
Which year saw the three final full-length specials Performance, Gary in Love and Delivery?|1998|1994|1996|2000|Medium|Performance|Gary In Love|Delivery|Farewell Trilogy|1998|Christmas Specials|Programme Ending
What was the title of the final episode in the 1998 farewell trilogy?|Delivery|Performance|Gary in Love|Jingle Balls|Medium|Delivery|1998 Finale|Third Special|Episode Title|BBC One|Programme Farewell|Series Conclusion
In the final stories, which couple have a baby together?|Gary and Dorothy|Tony and Deborah|George and Marjorie|Ken and Deborah|Medium|Gary Strang|Dorothy|New Baby|Parenthood|1998 Specials|Relationship Development|Family Ending
Which director is credited with overseeing the original sitcom?|Martin Dennis|Martin Clunes|John Howard Davies|Dewi Humphreys|Hard|Martin Dennis|Television Director|Production Credits|Behind Camera|British Sitcom|Hartswood Films|1990s Direction`;

const outFacts = `Which actor played father Pete Brockman in Outnumbered?|Hugh Dennis|Andy Hamilton|David Ryall|Tyger Drew-Honey|Easy|Hugh Dennis|Pete Brockman|Father|Lead Actor|Family Sitcom|Casting|2007 Debut
Who portrayed mother Sue Brockman?|Claire Skinner|Samantha Bond|Lorraine Pilkington|Rosalind Ayres|Easy|Claire Skinner|Sue Brockman|Mother|Lead Actress|Family Sitcom|Casting|BBC One
Who played the eldest child Jake Brockman?|Tyger Drew-Honey|Daniel Roche|Ramona Marquez|Hugh Dennis|Easy|Tyger Drew Honey|Jake Brockman|Eldest Child|Teenager|Main Cast|Character Casting|Brockman Siblings
Who played the mischievous son Ben Brockman?|Daniel Roche|Tyger Drew-Honey|David Ryall|Jacob Anderson|Easy|Daniel Roche|Ben Brockman|Middle Child|Tall Tales|Child Actor|Character Casting|Brockman Family
Which actress played daughter Karen Brockman?|Ramona Marquez|Samantha Bond|Claire Skinner|Lorraine Pilkington|Easy|Ramona Marquez|Karen Brockman|Youngest Child|Questioning Personality|Child Actress|Character Casting|Main Cast
What surname is shared by Pete, Sue and their three children?|Brockman|Buckman|Brennan|Baxter|Easy|Brockman Family|Pete And Sue|Family Surname|London Household|Main Characters|Three Children|Sitcom Setting
Which Brockman child is the eldest?|Jake|Ben|Karen|They are triplets|Easy|Jake Brockman|Eldest Sibling|Teenage Son|Birth Order|Tyger Drew Honey|Family Relationships|Brockman Children
Which child is the middle sibling?|Ben|Jake|Karen|The family has only two children|Easy|Ben Brockman|Middle Child|Family Birth Order|Daniel Roche|Sibling Relationships|Household|Character Identity
Who is the youngest of the three Brockman siblings?|Karen|Ben|Jake|Sue|Easy|Karen Brockman|Youngest Child|Birth Order|Ramona Marquez|Sister|Family Relationships|Original Cast
Which channel originally screened Outnumbered?|BBC One|ITV|BBC Two|Channel 4|Easy|BBC One|Broadcast Network|2007 Premiere|Family Comedy|Original Channel|Television History|UK Sitcom
In which year did the first regular series begin?|2007|2005|2009|2011|Easy|2007 Premiere|Series One|Television Timeline|BBC One|Programme Debut|First Broadcast|August
Which year marked the end of the fifth regular series?|2014|2010|2016|2020|Easy|2014|Series Five|Regular Run End|BBC One|Programme Timeline|Final Regular Episode|Original Series
How many regular series were made, excluding the later one-off reunions?|Five|Three|Four|Six|Medium|Five Series|2007 To 2014|Regular Series|Programme Count|Broadcast Statistics|BBC One|Sitcom Run
How many episodes does the British Comedy Guide list for the show, including its principal Christmas specials?|36|30|42|48|Medium|Thirty Six Episodes|Episode Count|BCG Listing|Five Series|Christmas Specials|Programme Statistics|2007 To 2024
Which writers created the programme?|Andy Hamilton and Guy Jenkin|Jimmy Perry and David Croft|Simon Nye and John Sullivan|Richard Curtis and Ben Elton|Medium|Andy Hamilton|Guy Jenkin|Series Creators|Writers|Comedy Partnership|Family Sitcom|Programme Origins
Which production company made the Brockman family comedy?|Hat Trick Productions|Hartswood Films|Granada Television|Talkback Productions|Medium|Hat Trick Productions|Production Company|BBC Comedy|Programme Credits|Andy Hamilton|Guy Jenkin|Behind The Scenes
What approach to dialogue made the children's performances especially spontaneous?|Semi-improvisation|Live studio audience voting|Animated voice dubbing|Script reading from cue cards|Medium|Semi Improvised|Child Performers|Natural Dialogue|Comedy Method|Production Technique|Family Interactions|BBC Format
In which London area was the Brockman family home filmed?|Wandsworth|Camden|Greenwich|Hampstead|Medium|Wandsworth|Dempster Road|South London|Filming Location|Family House|BBC Production|Location Shooting
Which actress played Sue's sister Auntie Angela?|Samantha Bond|Lorraine Pilkington|Claire Skinner|Rosalind Ayres|Medium|Samantha Bond|Auntie Angela|Sue Sister|Family Relative|Actor Casting|Recurring Character|Brockman Family
Which actor portrayed Grandad Frank Morrison?|David Ryall|Hugh Dennis|Andy Hamilton|John Thomson|Medium|David Ryall|Frank Morrison|Grandad|Sue Father|Older Relative|Actor Casting|Family Support
What is Grandad's first name?|Frank|George|Henry|Arthur|Medium|Frank Morrison|Grandad|Sue Father|Family Tree|David Ryall|Older Generation|Character Name
Which actress played the neighbour Barbara in the second series?|Lorraine Pilkington|Samantha Bond|Claire Skinner|Rosalind Ayres|Hard|Lorraine Pilkington|Barbara|Neighbour|Series Two|Actor Casting|Household Rivalry|Supporting Actress
What health difficulty increasingly affects Grandad's memory?|Dementia|Poor eyesight|Arthritis|Hearing loss|Medium|Frank Morrison|Memory Loss|Dementia|Grandad|Older Generation|Family Care|Character Arc
How is Auntie Angela related to Sue?|She is Sue's sister|She is Sue's mother|She is Sue's cousin|She is Sue's aunt|Easy|Auntie Angela|Sue Brockman|Sisters|Samantha Bond|Family Relationship|Visiting Relative|Brockman Household
Which child is famous for persistent imaginative fibbing?|Ben|Jake|Karen|None of them|Easy|Ben Brockman|Invented Stories|Tall Tales|Daniel Roche|School Trouble|Character Habit|Childhood Mischief
Which child is particularly known for interrogating adults with awkward questions?|Karen|Ben|Jake|All three equally|Easy|Karen Brockman|Questions|Ramona Marquez|Child Curiosity|Interrogation|Comic Dialogue|Character Traits
Which Brockman child is navigating the move to secondary school at the beginning?|Jake|Karen|Ben|None of them|Medium|Jake Brockman|First Day|Secondary School|Series One|Teenage Transition|2007|Eldest Sibling
On which main road does the family get stuck in traffic during the first series?|The A3|The M25|The A40|The M1|Medium|A3|Series One Episode Three|Traffic Jam|Sue Brockman|Family Car|Road Journey|2007 Story
Which politician does Ben boast that his father knows in the first-series school football story?|Gordon Brown|Tony Blair|John Major|David Cameron|Medium|Gordon Brown|Ben Brockman|Tall Tales|School Football|Series One|Pete Brockman|Political Name
What excuse does Ben invent to avoid attending school in the fifth episode?|A mystery illness|A broken bicycle|A lost school uniform|A family wedding|Medium|Ben Brockman|Pretend Illness|Series One Episode Five|Skipping School|Child Deception|Sue And Pete|Schoolday
Which two possible destinations does Karen mention when threatening to leave home in the first-series finale?|Spain or Greenland|France or Belgium|Italy or Greece|Scotland or Wales|Hard|Karen Brockman|Leaving Home|Spain|Greenland|Series One Finale|2007 Episode|Child Independence
What event dominates the Brockmans' visit in the opening episode of series two?|A wedding|A funeral|A christening|A school concert|Medium|Series Two Premiere|Wedding|Family Relatives|Disruptive Children|2008|Event Attendance|Domestic Chaos
For what school position does Ben stand in the second-series episode about a mouse?|Class representative|Head boy|Sports captain|School librarian|Medium|Ben Brockman|Class Representative|Mouse Death|Series Two|School Election|2008|Child Ambition
What household activity do Pete and Sue ban to attempt an old-fashioned Sunday in series two?|Watching television|Playing football|Reading comic books|Eating sweets|Medium|Series Two Episode Three|Television Ban|Old Fashioned Sunday|Parlour Games|Pete And Sue|2008|Family Experiment
Where are the family stranded with three bored children during a second-series holiday problem?|A foreign airport|A ferry terminal|A railway tunnel|A holiday campsite|Medium|Series Two Episode Four|Airport Delay|Bored Children|Travel Chaos|Grandad|2008|Family Holiday
Which religious figure fascinates Karen in the sixth episode of series two?|Satan|Noah|Saint Peter|Moses|Hard|Karen Brockman|Satan|Series Two Episode Six|Religion Questions|2008|Child Curiosity|Family Conversations
What household problem keeps everyone restless in the final episode of series two?|Noise from next door|A burst water pipe|A heatwave|A broken front door|Medium|Series Two Finale|Noisy Neighbours|Sleepless Night|Brockman Family|2008|Police Visit|Home Disturbance
Which holiday period is the setting for the Brockmans' 2009 Christmas special?|Boxing Day|New Year's Eve|Easter Sunday|Bonfire Night|Easy|2009 Christmas Special|Boxing Day|Family Christmas|Festive Episode|BBC One|December|Household Celebrations
What crime causes trouble at the Brockman house during the 2009 festive story?|Burglary|Car theft|Credit card fraud|Vandalism|Medium|2009 Christmas Special|Burglars|Boxing Day|Home Security|Family Holiday|Festive Mishap|Brockman House
Who takes the Brockmans sightseeing in London at the start of series three?|Gran|Auntie Angela|Barbara|A school teacher|Medium|Series Three Premiere|London Sightseeing|Gran|Family Day Out|2010|Tourist Attractions|Older Relative
Which reality-TV business competition does Karen recreate in series three?|The Apprentice|Dragon's Den|The X Factor|Britain's Got Talent|Medium|Karen Brockman|The Apprentice|Series Three|Reality TV Parody|2010|Business Competition|Role Play
Which relation visits during series three with an American therapist husband?|Auntie Angela|Barbara|Gran|Deborah|Medium|Auntie Angela|American Therapist|Series Three Episode Five|Visiting Family|Sue Sister|2010|New Husband
What family gathering causes problems at the opening of the fourth series?|A funeral|A retirement party|A school reunion|An engagement celebration|Medium|Series Four Premiere|Funeral|2011|Family Gathering|Children Behaviour|Brockman Relatives|Vicar
What kind of animal do Pete and Sue temporarily care for while two children are away in series four?|Labrador dog|Tabby cat|Rabbit|Parrot|Medium|Series Four Episode Three|Labrador|Pet Sitting|Parents Alone|2011|Dog|Family Home
Whose school parents' evening creates problems in series four?|Ben's|Karen's|Jake's|All three on one night|Medium|Ben Brockman|Parents Evening|Series Four Episode Four|School Meeting|Dangerous Chemicals|2011|Teacher Relations
Which warm-weather plan goes badly wrong for the Brockmans in the 2011 Christmas special?|An overseas holiday|A trip to a theme park|A seaside picnic|A garden barbecue|Medium|2011 Christmas Special|Escape To Sun|Holiday Problems|Christmas Day|Family Travel|Festive Plans|Delayed Journey
Which footballer appears in the 2012 Sport Relief sketch with Karen as a match mascot?|Frank Lampard|Wayne Rooney|Steven Gerrard|David Beckham|Medium|Frank Lampard|Chelsea FC|Karen Brockman|Sport Relief 2012|Football Mascot|Charity Sketch|Guest Star
What occasion brings neighbours into the Brockman home in the 2012 Christmas special?|A Christmas party|A summer barbecue|A birthday lunch|A retirement dinner|Medium|2012 Christmas Special|Neighbour Party|Festive Hosting|2012|Brockman Home|Family Guests|Holiday Gathering
From which country does Pete's goddaughter Stacey visit in series five?|Australia|Canada|New Zealand|South Africa|Medium|Stacey|Australian Goddaughter|Series Five|2014|Pete Brockman|Visiting Guest|Family Disruption
In which stage production does Ben have a role during series five?|Spartacus - The Musical|Oliver!|Joseph and the Amazing Technicolor Dreamcoat|The Sound of Music|Hard|Ben Brockman|Spartacus The Musical|School Production|Series Five|2014|Drama Role|Rehearsals
What kind of trip do Pete and Ben take during the fifth series?|Winter camping|Mountain skiing|A seaside cruise|A cycling tour|Medium|Pete Brockman|Ben Brockman|Winter Camping|Series Five|2014|Survival Skills|Father Son Time
Which future travel plan does Jake consider in the fifth series?|A gap year|A working holiday in Spain|A cruise with friends|A school exchange|Medium|Jake Brockman|Gap Year|Series Five|2014|Young Adult|Future Plans|Education Decision
What everyday gadget causes Pete frustration during the fifth series?|His mobile phone|A new television|A digital camera|A tablet computer|Medium|Pete Brockman|Mobile Phone|Series Five Episode Five|Technology Trouble|2014|Family Communication|Everyday Frustration
Whose illness brings Auntie Angela back in the last regular episode of 2014?|Grandad's|Karen's|Pete's|Ben's|Medium|Grandad Frank|Auntie Angela|Series Five Finale|2014|Family Illness|Return Visit|Older Generation
Whose final wish sends the family on a mission in the 2016 Christmas special?|Grandad's|Karen's|Auntie Angela's|Pete's|Medium|2016 Christmas Special|Grandad Last Wish|Boxing Day|Family Mission|Frank Morrison|Festive Return|2016 Plot
On which date was the 2016 reunion special broadcast?|26 December|24 December|31 December|1 January|Medium|2016 Christmas Special|Boxing Day|26 December|BBC One|Broadcast Date|Family Reunion|Festive Television
In which year did the Brockmans return after eight years for another Christmas special?|2024|2018|2020|2022|Easy|2024 Christmas Special|Eight Year Gap|Television Comeback|BBC One|Programme Return|Family Reunion|December
What family role have Pete and Sue acquired by the 2024 Christmas special?|Grandparents|Great-grandparents|Foster parents|Godparents only|Easy|Pete Brockman|Sue Brockman|Grandparents|2024 Reunion|Adult Children|Family Generations|Later Life
How many grandchildren are invited to the Brockmans' 2024 Christmas gathering?|One|Two|Three|Four|Medium|2024 Christmas|One Grandchild|Brockman Family|New Generation|Holiday Gathering|Programme Continuation|Family Tree
How has the parents' home changed by the 2024 festive reunion?|They have downsized|They have moved into a castle|They live abroad|They have bought a hotel|Medium|2024 Christmas Special|Downsized Home|Pete And Sue|Smaller House|Adult Children|New Living Arrangements|Family Life
Which transport disruption features in the 2024 Christmas reunion?|Bus replacement services|A cancelled ferry crossing|A railway strike|An airport baggage failure|Medium|2024 Christmas Special|Bus Replacement|Travel Disruption|Family Christmas|Festive Complications|BBC One|Modern Life
What medical diagnosis does Pete discuss with his adult children in the 2024 special?|Prostate cancer|Type 2 diabetes|Asthma|Appendicitis|Medium|Pete Brockman|Prostate Cancer|2024 Special|Family Conversation|Medical News|Adult Children|Emotional Storyline
What is the first name of the young grandchild featured in the 2024 special?|Zara|Olivia|Molly|Sophie|Hard|Zara|2024 Christmas Special|Grandchild|Aurora Skarli|Young Performer|Brockman Family|New Generation`;

const questions = [];
function appendFacts(block, programme, era) {
  const rows = block.trim().split('\n');
  for (const [index, row] of rows.entries()) {
    const fields = row.split('|').map(s => s.trim());
    if (fields.length !== 13 || fields.some(x => !x)) {
      throw new Error(`${programme} row ${index + 1}: expected 13 nonempty fields, got ${fields.length}`);
    }
    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const question = stem.toLowerCase().includes(programme.toLowerCase())
      ? stem : `In ${programme}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map(['Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags]
      .map(tag => [tag.toLowerCase().replace(/[^a-z0-9]/g, ''), tag])).values()];
    const item = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };
    if (new Set(answers.map(a => a.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy', 'Medium', 'Hard'].includes(difficulty) || tags.length < 9) {
      throw new Error(`Invalid metadata in ${item.id}`);
    }
    questions.push(item);
  }
}
appendFacts(menFacts, 'Men Behaving Badly', '1992-1998');
appendFacts(outFacts, 'Outnumbered', '2007-2024');
const wordings = new Set();
for (const q of questions) {
  const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (wordings.has(key)) throw new Error(`Duplicate question wording in ${q.id}`);
  wordings.add(key);
}
module.exports = questions;
