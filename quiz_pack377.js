
// quiz_pack377.js
// PuzzlePilot - The Bigggggg Quiz
// Television: The Upper Hand (1990-1996), Open All Hours (1973-1985),
// and Still Open All Hours (2013-2019).
// Self-contained CommonJS quiz pack; no dependencies.
// Each fact includes seven question-specific tags plus programme metadata.
// Research: British Comedy Guide programme, cast and episode guides.

const FIRST_ID = 19512;

// question | correct answer | wrong answer x3 | difficulty | seven specific tags
const upperFacts = `Who portrayed Charlie Burrows in The Upper Hand?|Joe McGann|William Puttock|John Alderton|Gary Olsen|Easy|Joe McGann|Charlie Burrows|Leading Actor|Male Housekeeper|Former Footballer|Casting|1990s ITV
Who played advertising executive Caroline Wheatley?|Diana Weston|Honor Blackman|Lynda Baron|Kellie Bright|Easy|Diana Weston|Caroline Wheatley|Businesswoman|Main Actress|Advertising Executive|Casting|Wheatley Household
Which actress played Caroline's mother Laura West?|Honor Blackman|Diana Weston|Patricia Brake|Judy Campbell|Easy|Honor Blackman|Laura West|Caroline Mother|Grandmother|Main Cast|Casting|Family Relationship
Who played Charlie's daughter Joanna Burrows?|Kellie Bright|Diana Weston|Samantha Beckinsale|Julie Dawn Cole|Easy|Kellie Bright|Joanna Burrows|Charlie Daughter|Teenage Character|Main Cast|Casting|Burrows Family
Which actor played Caroline's young son Tom Wheatley?|William Puttock|Joe McGann|Robert Beck|Peter Denyer|Medium|William Puttock|Tom Wheatley|Caroline Son|Young Actor|Wheatley Family|Original Cast|Television Casting
What position does Charlie take when he joins the Wheatley household?|Live-in housekeeper|Private chauffeur|Personal accountant|Estate gardener|Easy|Charlie Burrows|Domestic Employment|Live In Housekeeper|Role Reversal|Caroline Employer|Career Change|Household Work
In which sport was Charlie previously a professional?|Football|Rugby union|Cricket|Tennis|Easy|Charlie Burrows|Former Footballer|Professional Sport|Career History|Sports Background|New Employment|Character Biography
Which industry is Caroline's professional career associated with?|Advertising|Architecture|Veterinary medicine|Publishing|Medium|Caroline Wheatley|Creative Director|Advertising Industry|Career Woman|Business Work|Professional Background|Household Employer
What is the family relationship between Laura West and Caroline Wheatley?|Mother and daughter|Sisters|Aunt and niece|Mother-in-law and daughter-in-law|Easy|Laura West|Caroline Wheatley|Mother Daughter|Family Tree|Household Relations|Honor Blackman|Diana Weston
Who is Joanna Burrows's father?|Charlie Burrows|Tom Wheatley|Dan Thatcher|Simon Bellamy|Easy|Joanna Burrows|Charlie Burrows|Father Daughter|Single Parent|Burrows Family|Domestic Sitcom|Family Relationship
Which American sitcom supplied the premise adapted for The Upper Hand?|Who's the Boss?|Growing Pains|Family Ties|The Nanny|Medium|Whos The Boss|American Adaptation|Transatlantic Sitcom|Role Reversal|UK Remake|Programme Origins|Martin Cohan
Which television channel originally broadcast The Upper Hand?|ITV|BBC One|BBC Two|Channel 4|Easy|ITV|Original Broadcaster|British Television|1990 Premiere|Network History|UK Sitcom|Transmission
What year did The Upper Hand first air in Britain?|1990|1986|1993|1997|Easy|1990 Premiere|Opening Year|ITV Debut|First Series|Television Timeline|British Comedy|Programme Launch
In what year did The Upper Hand finish its run?|1996|1992|1999|2002|Easy|1996 Finale|Last Series|ITV Broadcast|Programme Ending|Seven Series|1990s Television|Timeline
How many television series of The Upper Hand were produced?|Seven|Five|Six|Eight|Medium|Seven Series|1990 To 1996|Series Count|Production History|ITV Sitcom|Broadcast Statistics|Programme Run
How many episodes of The Upper Hand were broadcast?|94|78|88|102|Medium|Ninety Four Episodes|Episode Count|Seven Series|ITV Programme|Production Statistics|Television Catalogue|Complete Run
Which town is the setting for the Wheatley family home?|Henley-on-Thames|Hastings|Harrogate|High Wycombe|Medium|Henley|Oxfordshire|Wheatley Household|Countryside Move|Series Setting|Thames Valley|English Town
What is the title of the first episode of The Upper Hand?|Just the Job|First Kiss|Common Entrance|Requiem|Medium|Just The Job|Series One|Pilot Episode|1990 Debut|First Episode Title|Charlie Arrival|Wheatley Family
What are Charlie and Caroline planning in the 1995 hour-long special?|Get married|Open a shop|Move to Scotland|Adopt a dog|Easy|The Wedding|1995 Special|Charlie And Caroline|Marriage Ceremony|Engaged Couple|Series Six|Romantic Storyline
Which couple eventually marries in The Upper Hand?|Charlie and Caroline|Tom and Joanna|Laura and Simon|Charlie and Laura|Easy|Charlie Burrows|Caroline Wheatley|Romantic Leads|Marriage|Housekeeper Employer|Wedding Special|Couple
In which year was the hour-long wedding special shown?|1995|1990|1992|1996|Medium|1995 Wedding|Series Six|Wedding Special|Charlie And Caroline|Hour Long Episode|ITV Broadcast|Marriage Timeline
What personal occasion helps lead to a kiss between Charlie and Caroline in the episode First Kiss?|Caroline's birthday|Charlie's retirement|A wedding anniversary|A christening|Medium|First Kiss|Caroline Birthday|Series One|1990 Episode|Romantic Turning Point|Charlie And Caroline|Party Drinks
In the opening of series three, who hopes to spend a week working alongside Charlie?|Joanna Burrows|Laura West|Caroline Wheatley|Tom Wheatley|Medium|Bedtime Story|Series Three|Joanna Burrows|Work Experience|Charlie Burrows|Family Friction|1991 Episode
Which sports team does Charlie agree to coach in Match of the Day?|Caroline's volleyball team|Tom's cricket team|Laura's tennis team|Joanna's hockey team|Medium|Match Of The Day|Series Four|Volleyball|Charlie Burrows|Caroline Wheatley|Sports Coaching|1992 Episode
In The Price Is Right, what kind of sports star angers Charlie with his attitude?|A young footballer|A professional golfer|A teenage cricketer|A touring tennis player|Medium|The Price Is Right|Series Five|Young Footballer|Charlie Burrows|Sportsmanship|Former Player|1993 Episode
Whose grandmother objects to the proposed marriage in Granny Get Your Gun?|Caroline's|Joanna's|Charlie's|Tom's|Medium|Granny Get Your Gun|Series Six|Caroline Grandmother|Family Opposition|Wedding Plans|1995 Episode|Marriage Conflict
Which actress played the visiting grandmother in Granny Get Your Gun?|Judy Campbell|Honor Blackman|Lynda Baron|Patricia Brake|Hard|Judy Campbell|Granny Get Your Gun|Visiting Grandmother|Series Six|Guest Actress|1995 Cast|Wedding Objections
What worries Charlie in the series-six episode Moonlighting?|Being seen as a kept man|Losing his football boots|Having to teach Tom maths|Buying a second home|Medium|Moonlighting|Series Six|Charlie Burrows|Kept Man|Caroline Employer|Financial Independence|1995 Story
In the 1995 wedding special, which member of the couple becomes absorbed in planning every detail?|Charlie Burrows|Caroline Wheatley|Laura West|Joanna Burrows|Medium|The Wedding|Bride Magazine|Charlie Burrows|Detailed Planning|Marriage Preparation|Series Six Special|1995 Episode
Which room does Charlie plan to turn into a nursery in A Lion Called Laura?|His old bedroom|Caroline's office|The dining room|The downstairs study|Medium|A Lion Called Laura|Series Seven|Nursery Plans|Former Bedroom|Charlie Burrows|Caroline Wheatley|Parenthood
In Nobody's Child, what kind of work is Laura offered for two years?|Going on a singing tour|Teaching at a university|Running a hotel|Working on a television drama|Medium|Nobodys Child|Series Seven|Laura West|Singing Tour|Two Year Offer|Dolly Hamp|1996 Story
Who played Laura's singing friend Dolly Hamp in Nobody's Child?|Millicent Martin|Honor Blackman|Lynda Baron|Patricia Brake|Hard|Millicent Martin|Dolly Hamp|Guest Actress|Nobodys Child|Series Seven|Old Friend|Singer Character
Which family member is revealed to be expecting a baby in the final episode?|Joanna Burrows|Caroline Wheatley|Laura West|Charlie's sister|Medium|Oh Baby Oh Baby|Series Seven Finale|Joanna Pregnancy|Surprise Ending|1996 Episode|Burrows Family|Expectant Mother
What type of specialist do Charlie and Caroline consult in the last episode?|Fertility specialist|Cardiologist|Orthopaedic surgeon|Dermatologist|Medium|Oh Baby Oh Baby|Fertility Consultation|Charlie And Caroline|Parenthood Plans|Series Seven|1996 Finale|Doctor Visit
Which actress played Charlie's Auntie Pat in several later episodes?|Lynda Baron|Diana Weston|Honor Blackman|Stephanie Cole|Hard|Lynda Baron|Auntie Pat|Recurring Guest|Series Four To Six|Charlie Family|Actor Casting|ITV Comedy
Who composed music for episodes of The Upper Hand?|Debbie Wiseman|Ronnie Hazlehurst|Max Harris|Howard Goodall|Hard|Debbie Wiseman|Television Composer|Programme Music|Production Credits|Series Soundtrack|1990s ITV|Behind The Scenes`;

const openFacts = `Which actor played grocer Albert Arkwright in Open All Hours?|Ronnie Barker|David Jason|Peter Sallis|Windsor Davies|Easy|Ronnie Barker|Albert Arkwright|Lead Actor|Corner Shop|Northern Grocer|Casting|Original Sitcom
What is Arkwright's first name in Open All Hours?|Albert|Arthur|Arnold|Alfred|Easy|Albert Arkwright|Shop Owner|Character Forename|Ronnie Barker|Grocer|Family Identity|1970s Sitcom
Who portrayed Granville in Open All Hours?|David Jason|Ronnie Barker|Bill Owen|Geoffrey Whitehead|Easy|David Jason|Granville|Shop Assistant|Main Actor|Nephew|Casting|1980s Comedy
How is Granville related to Arkwright?|He is his nephew|He is his younger brother|He is his cousin|He is his stepson|Easy|Granville|Arkwright|Uncle Nephew|Family Relationship|Shop Work|Domestic Comedy|Roy Clarke Characters
What kind of shop does Arkwright operate?|A corner grocery shop|A bookshop|A butcher's shop|A hardware warehouse|Easy|Arkwright Shop|Groceries|Corner Shop|Small Business|Local Customers|Retail Trade|Northern England
Who played Nurse Gladys Emmanuel?|Lynda Baron|Stephanie Cole|Kathy Staff|Maggie Ollerenshaw|Easy|Lynda Baron|Nurse Gladys Emmanuel|Love Interest|Actor Casting|Arkwright Romance|Nursing|Recurring Lead
What is Gladys Emmanuel's profession?|Nurse|Solicitor|Teacher|Librarian|Easy|Gladys Emmanuel|Nursing|Romantic Interest|Arkwright Courtship|Local Community|Job Role|Lynda Baron
Who wrote the scripts for Open All Hours?|Roy Clarke|David Croft|Jimmy Perry|Carla Lane|Medium|Roy Clarke|Comedy Writer|Series Creator|Scriptwriting|BBC Sitcom|1970s Television|Programme Credits
Which BBC comedy anthology included the 1973 pilot of Open All Hours?|Seven of One|Comedy Playhouse|The Two Ronnies|Not the Nine O'Clock News|Medium|Seven Of One|1973 Pilot|Ronnie Barker|BBC Anthology|Programme Origins|Series Development|Television History
In which year was the pilot of Open All Hours broadcast?|1973|1970|1976|1981|Easy|1973 Pilot|First Broadcast|Seven Of One|BBC Two|Programme Origin|Television Timeline|Original Episode
Which year saw Open All Hours begin its first regular series?|1976|1973|1979|1982|Medium|1976 First Series|BBC Sitcom|Post Pilot Run|Opening Season|Broadcast Date|Television Timeline|Series One
In which year did the last original series of Open All Hours appear?|1985|1982|1988|1991|Medium|1985 Final Series|Series Four|Original Run|Television Timeline|BBC Comedy|Programme End|Last Season
How many regular series of Open All Hours were produced?|Four|Three|Five|Six|Medium|Four Series|1976 To 1985|Programme Statistics|Original Sitcom|Episode Catalogue|BBC History|Series Count
How many original episodes were made including the 1973 pilot?|26|25|35|41|Medium|Twenty Six Episodes|Pilot Included|Four Series|Broadcast Count|BBC Catalogue|Production Statistics|Original Run
Which recurring shop mechanism snaps alarmingly at customers and staff?|The cash register|The refrigerator door|The window shutter|The weighing scales|Easy|Snapping Till|Cash Register|Arkwright Shop|Running Gag|Mechanical Trap|Customer Comedy|Shop Fixtures
Which actress played the formidable Mrs Featherstone?|Stephanie Cole|Lynda Baron|Kathy Staff|Barbara Flynn|Medium|Stephanie Cole|Mrs Featherstone|Black Widow|Supporting Actress|Casting|Original Series|Customer Character
What nickname is given to Mrs Featherstone in the shop's circle?|The Black Widow|The Red Queen|The Iron Lady|The Dragon of Doncaster|Medium|Mrs Featherstone|Black Widow|Stephanie Cole|Customer Reputation|Widow|Intimidating Personality|Recurring Character
Who portrayed the customer Mrs Blewett?|Kathy Staff|Maggie Ollerenshaw|Stephanie Cole|Lynda Baron|Medium|Kathy Staff|Mrs Blewett|Original Series|Customer Role|Actor Casting|Early Episodes|Supporting Cast
Which actress played Mavis, a customer later central to Granville's love life?|Maggie Ollerenshaw|Barbara Flynn|Lynda Baron|Kathy Staff|Medium|Maggie Ollerenshaw|Mavis|Shop Customer|Granville Romance|Returning Character|Casting|Series Two Onwards
Who played the recurring milk woman in the original series?|Barbara Flynn|Lynda Baron|Stephanie Cole|Maggie Ollerenshaw|Medium|Barbara Flynn|Milk Woman|Delivery Trade|Recurring Actor|Original Series|Shop Neighbourhood|Supporting Character
Which Yorkshire town supplied exterior filming for the corner shop?|Doncaster|Scarborough|Wakefield|Huddersfield|Medium|Doncaster|Lister Avenue|Filming Location|South Yorkshire|Shop Exterior|BBC Comedy|Television Geography
Which director and producer worked on the original series?|Sydney Lotterby|Dewi Humphreys|James Cellan Jones|John Howard Davies|Hard|Sydney Lotterby|Director|Producer|BBC Production|Behind Camera|Original Series|Television Credits
What type of stock causes trouble because it lacks labels in Full of Mysterious Promise?|Tins of food|Bottles of wine|Packets of flour|Jars of sweets|Medium|Full Of Mysterious Promise|Series One|Unlabelled Tins|Stock Control|Sales Scheme|Arkwright Groceries|1976 Episode
What fruit is Arkwright desperate to sell in the first-series finale?|Apples|Pears|Oranges|Plums|Medium|Apple And Self Service|Series One Finale|Apples|Slow Sales|Self Service|Fresh Produce|1976 Plot
What experimental selling arrangement does Arkwright try because of slow fruit sales?|Self-service shopping|Home delivery by bicycle|A mail-order catalogue|An outdoor market stall|Medium|Apple And Self Service|Self Service|Shop Innovation|Sales Experiment|1976 Episode|Arkwright|Retail Methods
What item makes Arkwright uncomfortable during his hotel trip with Gladys?|An over-tight money belt|New leather shoes|A heavy suitcase|A starched shirt collar|Medium|The Reluctant Traveller|Series Two|Money Belt|Hotel Stay|Gladys Emmanuel|Arkwright Romance|1981 Episode
What vehicle does Arkwright buy to expand his selling operation in series two?|An old ice-cream van|A second-hand milk float|A delivery lorry|A motorbike with sidecar|Medium|Arkwrights Mobile Store|Series Two|Ice Cream Van|Business Expansion|Mobile Shop|1981 Episode|Transport
During the third series, what cake does Arkwright try to sell to Nurse Gladys?|Ginger cake|Fruitcake|Chocolate sponge|Carrot cake|Medium|The Ginger Man|Series Three|Ginger Cake|Overstocked Goods|Nurse Gladys|Sales Pitch|1982 Episode
What fashionable accessory does Granville seek for his new look in The Cool Cocoa Tin Lid?|A medallion|A silk scarf|A trilby hat|A gold wristwatch|Medium|The Cool Cocoa Tin Lid|Series Three|Granville Style|Medallion|Fashion Attempt|1982 Episode|Youth Culture
What method of finding a girlfriend does Granville try in Soulmate Weekend?|Placing an advertisement|Joining a ballroom class|Buying theatre tickets|Attending a village dance|Medium|Soulmate Weekend|Series Four|Lonely Hearts Advert|Granville|Romance Search|1985 Story|Personal Life
What job does Arkwright advertise in The Housekeeper Caper?|Live-in housekeeper|Assistant manager|Part-time cleaner|Night watchman|Medium|The Housekeeper Caper|Series Four|Housekeeper Advert|Arkwright|Gladys Jealousy|1985 Episode|Domestic Help
Which widow is particularly attracted by Arkwright's housekeeper advertisement?|Mrs Featherstone|Mrs Blewett|Mavis|Mrs Tattersall|Medium|The Housekeeper Caper|Mrs Featherstone|Black Widow|Advert Response|Arkwright|Series Four|1985 Story
What item does Arkwright use to try reaching Gladys's bedroom in the last original episode?|A ladder|A rope swing|A cherry picker|A stepladder from the shop|Medium|Mystical Boudoir|Final Episode|Ladder|Gladys Emmanuel|Arkwright Courtship|1985 Finale|Bedroom Visit
Who arranged the original programme's brass-band-style theme music?|Max Harris|Ronnie Hazlehurst|Debbie Wiseman|Mike Batt|Hard|Max Harris|Theme Music|Brass Band|Opening Titles|Original Score|BBC Production|Musical Arrangement`;

const stillFacts = `Who returned to play Granville in Still Open All Hours?|David Jason|Ronnie Barker|Tim Healy|Geoffrey Whitehead|Easy|David Jason|Granville|Returning Actor|Sequel Star|Shop Owner|2013 Revival|Casting
Who runs the old corner shop in Still Open All Hours?|Granville|Arkwright|Leroy|Gastric|Easy|Granville|Shop Proprietor|Inherits Business|Uncle Arkwright|Sequel Premise|Corner Shop|Owner
What is the name of Granville's son and assistant?|Leroy|Ringo|David|Eric|Easy|Leroy|Granville Son|Shop Assistant|Family Business|Next Generation|Errand Boy|2013 Cast
Which actor played Leroy?|James Baxter|Johnny Vegas|Kulvinder Ghir|Dean Smith|Easy|James Baxter|Leroy|Son Of Granville|Young Actor|2013 Cast|Shop Assistant|Casting
Which relationship connects Granville and Leroy?|Father and son|Uncle and nephew|Brothers|Grandfather and grandson|Easy|Granville|Leroy|Father Son|Family Relationships|Corner Shop|Next Generation|Working Together
What year did Still Open All Hours first return in a special?|2013|2008|2016|2020|Easy|2013 Christmas Special|Programme Revival|BBC One|First Return|Fortieth Anniversary|Television Timeline|Sequel Launch
How many series followed the revival special?|Six|Four|Five|Seven|Medium|Six Series|2014 To 2019|Revival Run|Programme Length|BBC One|Production Statistics|Season Count
How many episodes of Still Open All Hours were broadcast in total?|41|26|35|52|Medium|Forty One Episodes|Six Series|2013 Special|Episode Count|BBC Catalogue|Programme Statistics|Sequel Run
In which year did Still Open All Hours finish broadcasting new episodes?|2019|2016|2021|2023|Easy|2019 Final Episode|Series Six|Programme Ending|Last Christmas Special|BBC Broadcast|Television Timeline|Revival Conclusion
Which BBC channel screened the revival series?|BBC One|BBC Two|ITV|Channel 4|Easy|BBC One|Original Network|2013 Premiere|Sitcom Revival|Broadcast Channel|UK Television|Series Distribution
Who continued as the writer of the revived corner-shop sitcom?|Roy Clarke|Jimmy Perry|Graham Linehan|Carla Lane|Medium|Roy Clarke|Sequel Writer|Original Series Creator|Scriptwriting|BBC Comedy|Series Continuity|2013 Return
Which actress reprised Mrs Featherstone in the revival?|Stephanie Cole|Lynda Baron|Maggie Ollerenshaw|Brigit Forsyth|Easy|Stephanie Cole|Mrs Featherstone|Returning Character|Black Widow|Sequel Actress|Casting|Revival Regular
Who reprised the role of Mavis in Still Open All Hours?|Maggie Ollerenshaw|Brigit Forsyth|Sally Lindsay|Nina Wadia|Medium|Maggie Ollerenshaw|Mavis|Returning Character|Granville Romance|Original Cast|2013 Revival|Casting
Which actress played Mavis's overprotective sister Madge?|Brigit Forsyth|Stephanie Cole|Lynda Baron|Sue Holderness|Medium|Brigit Forsyth|Madge|Mavis Sister|Overprotective|2013 Cast|Actor Casting|Romantic Obstacle
What is the relationship between Mavis and Madge?|Sisters|Mother and daughter|Cousins|Neighbours with no family link|Easy|Mavis|Madge|Sister Relationship|Overprotective Family|Granville Romance|Household Dynamic|Character Links
Which actor played the character nicknamed Wet Eric?|Johnny Vegas|Tim Healy|Geoffrey Whitehead|Kulvinder Ghir|Easy|Johnny Vegas|Wet Eric|Eric Agnew|Supporting Actor|Local Customer|2010s Comedy|Casting
Who played Eric's wife Kath Agnew?|Sally Lindsay|Brigit Forsyth|Sue Holderness|Nina Wadia|Medium|Sally Lindsay|Kath Agnew|Wet Eric Wife|Supporting Actress|Marriage|Recurring Character|Casting
Which actor played Eric's friend Cyril?|Kulvinder Ghir|Tim Healy|Johnny Vegas|Dean Smith|Medium|Kulvinder Ghir|Cyril|Local Customer|Eric Friend|Community Group|Actor Casting|Recurring Character
Which actor played the eccentric character nicknamed Gastric?|Tim Healy|Johnny Vegas|James Baxter|Geoffrey Whitehead|Medium|Tim Healy|Gastric Walter|Local Customer|Madge Romance|Recurring Actor|2014 Introduction|Casting
Who played the timid Mr Newbold in the later series?|Geoffrey Whitehead|Tim Healy|James Baxter|David Jason|Medium|Geoffrey Whitehead|Wilburn Newbold|Mrs Featherstone|Later Series|Romantic Pursuit|Casting|Supporting Actor
Which formidable widow pursues a romance with Mr Newbold?|Mrs Featherstone|Mavis|Kath Agnew|Mrs Hussein|Medium|Mrs Featherstone|Mr Newbold|Widow Romance|Black Widow|Stephanie Cole|Geoffrey Whitehead|Sequel Storyline
Which actress played Mrs Hussein in the earlier revival series?|Nina Wadia|Sally Lindsay|Sue Holderness|Maggie Ollerenshaw|Medium|Nina Wadia|Mrs Hussein|Shop Customer|Early Revival|Recurring Actress|2013 Cast|Casting
Who played Mrs Rossi in series five and six?|Sue Holderness|Brigit Forsyth|Stephanie Cole|Lynda Baron|Medium|Sue Holderness|Mrs Rossi|Later Series|Actor Casting|2018 Introduction|Supporting Character|Romance Plot
Which actress portrayed Leroy's friend Beth in the later series?|Katie Redford|Sophie Willan|Sally Lindsay|Nina Wadia|Medium|Katie Redford|Beth|Leroy Friend|Later Revival|Supporting Actress|2017 Introduction|Casting
Who played Beth's friend Ruby in the fifth and sixth series?|Sophie Willan|Katie Redford|Brigit Forsyth|Misha Timmins|Hard|Sophie Willan|Ruby|Beth Friend|Leroy Dating|Series Five Six|Young Woman|Actor Casting
Which character is encouraged to take Ruby on a date?|Leroy|Gastric|Mr Newbold|Wet Eric|Medium|Leroy|Ruby|Beth Matchmaking|Series Six|Dating Plot|Shop Assistant|Romantic Setup
What product does Granville struggle to shift in the 2013 revival special?|Anchovy paste|Marmalade|Pickled onions|Mint sauce|Medium|2013 Special|Anchovy Paste|Unsold Stock|Granville Sales Tricks|Shop Promotion|Christmas Revival|Opening Story
Which traditional delivery vehicle does Leroy resist using in the revival special?|A bicycle|A horse cart|A motor scooter|An electric milk float|Medium|2013 Christmas Special|Delivery Bicycle|Leroy|Modernisation|Shop Deliveries|Generational Conflict|New Transport
Whom does Granville hope to date while avoiding her sister's interference?|Mavis|Kath Agnew|Mrs Featherstone|Mrs Hussein|Easy|Granville|Mavis|Madge Obstacle|Old Flame|Romance|2013 Special|Revived Relationship
What sort of security item makes Granville uncomfortable in the first regular episode?|A money belt|A steel safe|A locked cash box|A hidden camera|Medium|Series One Premiere|Money Belt|Shop Takings|Security Precautions|Granville|2014 Episode|Store Finances
What stock does Granville buy cheaply and claim has remarkable medicinal uses in series three?|Turnips|Cabbages|Carrots|Parsnips|Medium|Series Three|Episode Six|Turnips|Medicinal Claims|Unsold Produce|Granville Sales Pitch|2017 Plot
What bargain item does Granville attempt to sell in the first episode of series five?|Spectacles|Umbrellas|Pocket watches|Raincoats|Medium|Series Five|Episode One|Bargain Spectacles|Granville Salesmanship|Vision Claims|2018 Story|Shop Stock
What old piece of equipment does Granville discover in the shop yard at the start of series six?|A mangle|A sewing machine|An old cash register|A washing machine|Medium|Series Six|Episode One|Old Mangle|Shop Yard|Sales Opportunity|Granville|2019 Plot
Which friend of Beth is said to have been suspended from work in series six's opening episode?|Ruby|Mavis|Cindy|Mrs Rossi|Medium|Series Six|Ruby|Beth Friend|Work Suspension|Dating Plot|Leroy|2019 Episode
In series six's opening episode, who receives romantic coaching from Eric and Cyril?|Mr Newbold|Granville|Gastric|Leroy|Medium|Series Six|Mr Newbold|Eric|Cyril|Romantic Advice|Mrs Rossi|2019 Story
Who does Granville hope can help him perform one last trick in the 2019 Christmas special?|A glamorous assistant|A visiting magician|A shop inspector|A retired schoolteacher|Medium|2019 Christmas Special|Magic Trick|Granville|Assistant Search|Final Episode|Christmas Show|Festive Story
Which original-series actress returned as the retired Nurse Gladys Emmanuel?|Lynda Baron|Stephanie Cole|Maggie Ollerenshaw|Brigit Forsyth|Medium|Lynda Baron|Nurse Gladys Emmanuel|Returning Role|Original Cast|Retired Nurse|2013 Special|Series Continuity
Which street in Doncaster was reused for exterior scenes of the shop?|Lister Avenue|Coronation Street|Victoria Road|Baker Street|Hard|Lister Avenue|Doncaster|Filming Location|Shop Exterior|Original Location|2013 Revival|South Yorkshire`;

const questions = [];

function appendFacts(block, programme, era) {
  const rows = block.trim().split('\n');
  for (const [index, row] of rows.entries()) {
    const fields = row.split('|').map(value => value.trim());
    if (fields.length !== 13 || fields.some(value => !value)) {
      throw new Error(`${programme} fact ${index + 1}: expected 13 non-empty fields, got ${fields.length}`);
    }

    const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    const question = stem.toLowerCase().includes(programme.toLowerCase())
      ? stem : `In ${programme}, ${stem[0].toLowerCase()}${stem.slice(1)}`;
    const answers = [wrong1, wrong2, wrong3];
    answers.splice(questions.length % 4, 0, correctAnswer);

    const tags = [...new Map(['Television', 'British Television', 'British Sitcom', 'Comedy', 'Sitcom', programme, 'Programme: '+programme, era, correctAnswer, ...specificTags]
      .map(tag => [tag.toLowerCase(), tag])).values()];

    const entry = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
      programme,
      question,
      answers,
      correctAnswer,
      difficulty,
      tags,
      dailyEligible: true
    };

    if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4 ||
        !answers.includes(correctAnswer) ||
        !['Easy', 'Medium', 'Hard'].includes(difficulty) || tags.length < 9) {
      throw new Error(`Invalid quiz metadata in ${entry.id}`);
    }
    questions.push(entry);
  }
}

appendFacts(upperFacts, 'The Upper Hand', '1990-1996');
appendFacts(openFacts, 'Open All Hours', '1973-1985');
appendFacts(stillFacts, 'Still Open All Hours', '2013-2019');

const wording = new Set();
for (const q of questions) {
  const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (wording.has(key)) throw new Error(`Duplicate wording in ${q.id}`);
  wording.add(key);
}



// Audited new episode-story questions - British Comedy Guide series/episode guides:
// https://www.comedy.co.uk/tv/the_upper_hand/episodes/
// https://www.comedy.co.uk/tv/open_all_hours/episodes/all/
// https://www.comedy.co.uk/tv/still_open_all_hours/episodes/
// Existing IDs tv_19512-tv_19619 retained. Fresh IDs begin at tv_40227.
const upperAudit = `In Briefless Encounter, what is the profession of the visitor who propositioned Charlie?|Laura's psychology professor|Caroline's solicitor|A nightclub singer|Joanna's teacher|Series 1|Briefless Encounter|Charlie Burrows|An unexpected caller
In Dinner For Two, who ends up sharing an intimate meal after other dinner plans collapse?|Charlie and Caroline|Tom and Joanna|Laura and Charlie's father|Laura and Tom|Series 1|Dinner For Two|Charlie and Caroline|Romantic dinner
In Common Entrance, which boarding school does Joanna want to attend on a scholarship?|St Hilda's|St Trinian's|Abbey Grange|Queen Elizabeth's|Series 2|Common Entrance|Joanna Burrows|Scholarship application
In When Worlds Collide, what regular gathering does Caroline volunteer to host?|Charlie's poker night|Laura's book club|Joanna's football practice|Tom's chess tournament|Series 2|When Worlds Collide|Caroline Wheatley|Hosting a card game
In Wedding Bells Part 1, which country is the destination for the family wedding?|France|Italy|Spain|Greece|Series 2|Wedding Bells Part 1|Family wedding|Journey to southern Europe
In Wedding Bells Part 2, which child unexpectedly helps Caroline in a custody dispute?|Tom Wheatley|Joanna Burrows|Charlie Burrows|Laura West|Series 2|Wedding Bells Part 2|Caroline Wheatley|Custody struggle
In First Date, who persuades Charlie to invite Caroline out?|Laura West|Joanna Burrows|Tom Wheatley|Michael Wheatley|Series 3|First Date|Charlie Burrows|Encouraging romance
In Once Bitten Twice Shy, what event does Charlie reluctantly allow Joanna to attend?|A party|A weekend in Paris|A late-night football match|A boarding-school interview|Series 3|Once Bitten Twice Shy|Joanna Burrows|Parental permission
In Older Than Springtime, what type of customer makes Caroline worry about her age?|A trendy fashion designer|A pop concert promoter|An antiques dealer|A famous football manager|Series 3|Older Than Springtime|Caroline Wheatley|Advertising client
In The Honeymooners, where does Charlie unexpectedly encounter a former girlfriend?|At a footballers' reunion|At a family christening|At the local theatre|At a charity auction|Series 3|The Honeymooners|Charlie Burrows|Old romance resurfacing
In The Whiz Kid, what new colleague of Caroline's makes Charlie jealous?|A director|A chauffeur|An accountant|A photographer|Series 3|The Whiz Kid|Caroline Wheatley|Workplace jealousy
In The Proposal, which professional acquaintance asks Caroline to marry him?|Her accountant|Her dentist|Her football coach|Her solicitor|Series 3|The Proposal|Caroline Wheatley|Unexpected marriage proposal
In Come Dancing, where do Charlie and Caroline discover an unusually flirtatious couple?|At a golf club dinner dance|At a church fête|At a football reunion|At a wedding in Cannes|Series 4|Come Dancing|Charlie and Caroline|Awkward dinner dance
In Sex Lies And Exercise Tape, what does Caroline claim about her relationship with Charlie?|That she is having an affair with him|That she has sacked him|That they are already married|That he is her brother|Series 4|Sex Lies And Exercise Tape|Caroline Wheatley|Romance pretence
In The Fugitive, what alarming news does Charlie give Joanna about her grandfather?|He is in prison|He has moved to Australia|He has sold the family home|He has become a politician|Series 4|The Fugitive|Joanna Burrows|Grandfather revelation
In Not In Front Of The Children, what are Charlie and Caroline unsure how to announce to the family?|Their new romance|Caroline's retirement|Charlie's transfer to France|Joanna's school results|Series 5|Not In Front Of The Children|Charlie and Caroline|Confessing love
In Misery, what injury confines Caroline to her bedroom?|An injured ankle|A broken arm|A bruised shoulder|A fractured wrist|Series 5|Misery|Caroline Wheatley|Accidental injury
In Cheers, who reveals to the household that Joanna returned home drunk?|Tom Wheatley|Laura West|Caroline Wheatley|Charlie Burrows|Series 5|Cheers|Joanna and Tom|Telling on a sibling
In Minder, who develops an awkward crush on Charlie?|An influential businessman's teenage daughter|Joanna's teacher|A visiting fashion designer|Laura's old school friend|Series 5|Minder|Charlie Burrows|Unwanted romantic attention
In Wheel Of Fortune, where does Laura lose Caroline's valuable belongings?|At a London casino|At an antiques auction|On a train to France|At a hotel in Edinburgh|Series 5|Wheel Of Fortune|Laura West|Gambling losses
In Friends, what mementoes make Charlie and Caroline reminisce about their disastrous honeymoon?|Their wedding photographs|A set of golf clubs|Letters from Tom's school|Old football programmes|Series 7|Friends|Charlie and Caroline|Honeymoon memories
In In Marriage We Trust, what event causes Charlie and Caroline to become jealous of one another?|A dinner party|A workplace promotion|A charity football match|A holiday booking|Series 7|In Marriage We Trust|Married couple|Jealousy during hosting
In The Chunnel Of Love, to which city does Charlie travel to rescue Joanna's marriage?|Paris|London|Edinburgh|Rome|Series 7|The Chunnel Of Love|Joanna Burrows|Father's rescue trip
In A Couple Of Charlies, whose objection spoils Charlie's reunion with an old girlfriend?|Her husband|Joanna's boyfriend|Laura's brother|Caroline's accountant|Series 7|A Couple Of Charlies|Charlie Burrows|Unpleasant spouse`;
const openAudit = `In A Matress On Wheels, what vehicle does Granville persuade Arkwright to consider buying?|A van|A motorcycle|A tractor|A taxi|Series 1|A Matress On Wheels|Arkwright and Granville|Travel with a lady friend
In A Nice Cosy Little Disease, why does Arkwright contemplate becoming ill?|To attract Nurse Gladys's attention|To claim an insurance payment|To avoid visiting his accountant|To make Granville work longer|Series 1|A Nice Cosy Little Disease|Arkwright|Wanting nursing care
In Beware Of The Dog, what prompts Arkwright to fortify the shop?|A local crime wave|A prolonged power cut|Flooding from the river|A council demolition order|Series 1|Beware Of The Dog|Arkwright|Worries about security
In Well Catered Funeral, what event tests Arkwright's unwillingness to spend money?|His best friend's funeral|A christening for Granville|A neighbour's birthday|Gladys's retirement party|Series 1|Well Catered Funeral|Arkwright|Costly memorial gathering
In Laundry Blues, what appliance does Nurse Gladys insist Arkwright must purchase?|A new washing machine|A refrigerator|A tumble dryer|An electric cooker|Series 2|Laundry Blues|Nurse Gladys|Household spending
In The New Suit, who insists that Arkwright replace his old clothing?|Nurse Gladys Emmanuel|Mrs Blewett|Granville|The local police officer|Series 2|The New Suit|Arkwright|Buying smarter clothes
In Shedding At The Wedding, what smell makes Arkwright's suit a problem?|Mothballs|Burnt toast|Petrol|Disinfectant|Series 2|Shedding At The Wedding|Arkwright|Unpleasant suit smell
In St Albert's Day, why does Arkwright invent a saint's day?|To investigate a possible shoplifter|To announce Granville's engagement|To impress a television crew|To avoid paying a supplier|Series 2|St Albert's Day|Arkwright|Suspicious customer
In An Errand Boy By The Ear, what behaviour upsets Arkwright's customers?|His treatment of Granville|His refusal to sell newspapers|His late opening hours|His arguments with the milkman|Series 3|An Errand Boy By The Ear|Arkwright and Granville|Complaints about the errand boy
In Duet For Solo Bicycle, what mechanical fault drives Granville to distraction?|A squeaking bicycle|A broken cash register|A leaking petrol tank|A faulty refrigerator|Series 3|Duet For Solo Bicycle|Granville|Noisy transport
In How To Ignite Your Errand Boy, what does Arkwright try to manufacture?|Firelighters|Matches|Kerosene lamps|Safety fuses|Series 3|How To Ignite Your Errand Boy|Arkwright|Dangerous production scheme
In The Man From Down Under, from which country does Gladys's admirer return?|Australia|Canada|New Zealand|South Africa|Series 3|The Man From Down Under|Nurse Gladys|Rival suitor
In The Funny Side Of Christmas sketch, why is Arkwright frustrated on Christmas Day?|He cannot open the shop|He misses the Christmas train|He has lost the shop key|He is forced to give away his stock|1982 Christmas sketch|The Funny Side Of Christmas|Arkwright|Closed shop
In Horse-trading, what goods does Arkwright sell to a local shopkeeper?|Clothes horses|Riding boots|Leather saddles|Woollen blankets|Series 4|Horse-trading|Arkwright|Unusual sale
In The Errand Boy Executive, what professional status does Granville claim to impress Stephanie?|An executive|An accountant|A university lecturer|A professional footballer|Series 4|The Errand Boy Executive|Granville|Pretending to be important
In Happy Birthday Arkwright, which visitor would Arkwright most like to avoid?|An inspector from the Good Shop Guide|A supplier from London|A relative from Australia|A television news reporter|Series 4|Happy Birthday Arkwright|Arkwright|Birthday visit`;
const stillAudit = `In Series 1 Episode Two, which reluctant local resident does Granville hope to lure into the shop?|Old Mr Bentinck|Mr Newbold|Mrs Rossi|The local vicar|Series 1|Episode Two|Granville|Attracting a new customer
In Series 1 Episode Three, which regular is tempted by a new fitness craze?|Cyril|Eric|Leroy|Mr Newbold|Series 1|Episode Three|Cyril|Workout fad
In Series 1 Episode Four, what new business does Granville dream of opening?|A coffee shop|A hardware store|A bakery|A garden centre|Series 1|Episode Four|Granville|Business expansion
In Series 1 Episode Five, from whom does Eric seek urgent advice about his marriage?|Leroy|Gastric|Mr Newbold|Mrs Hussein|Series 1|Episode Five|Eric|Marriage problems
In Series 1 Episode Six, whose ghost does Granville suspect is haunting the shop?|Arkwright's|Nurse Gladys's|A former customer|The old milkman's|Series 1|Episode Six|Granville|Haunted corner shop
In the 2015 Christmas special, what festive decoration unexpectedly causes Granville trouble?|A Christmas tree|A string of paper bells|A light-up reindeer|A large wreath|Series 2|Christmas Special|Granville|Festive shop display
In Series 2 Episode Two, what inflatable product does Granville try to market?|An underwear support system|An exercise bicycle|A travel pillow|A camping mattress|Series 2|Episode Two|Granville|Unusual new product
In Series 2 Episode Three, what machine's arrival makes Madge anxious?|A cherry picker|A cement mixer|A road roller|A forklift truck|Series 2|Episode Three|Madge|Street disturbance
In Series 2 Episode Four, what is the first name of the former patient who tries to woo Nurse Gladys?|Mick|Harry|Clive|Stanley|Series 2|Episode Four|Nurse Gladys|Former patient romance
In Series 2 Episode Five, who is the reluctant bridegroom whose wedding takes place?|Kevin|Eric|Ringo|Leroy|Series 2|Episode Five|Kevin|Unenthusiastic marriage
In Series 2 Episode Six, what name does Granville give his supposedly romantic salami product?|Yaggis|Haggis Supreme|Cupid Sausage|The Love Roll|Series 2|Episode Six|Granville|Novelty salami brand
In the 2016 Christmas special, what role do Granville and Gastric find themselves playing?|Marriage counsellors|School governors|Stage magicians|Traffic wardens|Series 3|Christmas Special|Granville and Gastric|Counselling a couple
In Series 3 Episode Two, what effect are Granville's cheap new devices supposed to produce?|Positive emotions|Clearer eyesight|Better sleep|Faster digestion|Series 3|Episode Two|Granville|Unusual mood gadgets
In Series 3 Episode Three, what out-of-date confectionery does Granville try to sell?|Mints|Chocolate bars|Toffees|Liquorice sticks|Series 3|Episode Three|Granville|Expired sweets
In Series 3 Episode Four, whose apparent supernatural powers does Granville use to calm Madge's fears?|Gastric's|Eric's|Leroy's|Mr Newbold's|Series 3|Episode Four|Madge and Gastric|Supposedly haunted home
In Series 3 Episode Five, which dairy product does Granville struggle to sell?|A large wheel of cheese|A tub of cream|Packets of butter|A crate of yoghurt|Series 3|Episode Five|Granville|Possibly spoiled stock
In Series 3 Episode Seven, what modern service does Arkwright's shop begin to offer?|Collection of internet shopping deliveries|Currency exchange|Online medical consultations|Passport processing|Series 3|Episode Seven|Granville|Internet parcel collection
In Series 4 Episode Two, what sort of lessons does Granville propose offering to expand his business?|Fitness classes|Foreign-language lessons|Cookery classes|Driving tuition|Series 4|Episode Two|Granville|Health-related sales
In Series 4 Episode Three, who barricades his home to avoid Mrs Featherstone?|Mr Newbold|Eric|Cyril|Gastric|Series 4|Episode Three|Mrs Featherstone|Unwanted attention
In Series 4 Episode Four, which contest encourages Gastric to express his creative side?|An art competition|A baking contest|A chess tournament|A gardening show|Series 4|Episode Four|Gastric|Unexpected artistry
In Series 4 Episode Five, whom does Madge intend to take away with her when she moves?|Mavis|Ruby|Kath|Mrs Featherstone|Series 4|Episode Five|Madge|Leaving the neighbourhood
In Series 4 Episode Seven, to which Yorkshire seaside resort does Granville travel?|Scarborough|Whitby|Bridlington|Filey|Series 4|Episode Seven|Granville|Business trip by the sea
In Series 5 Episode Two, whom does Granville recruit to help sell an excess of tinned beans?|Mr Machin|Mr Newbold|Cyril|Gastric|Series 5|Episode Two|Granville|Tinned-bean promotion
In Series 5 Episode Three, which character modifies his Mini to drive itself?|Gastric|Leroy|Wet Eric|Granville|Series 5|Episode Three|Car adaptation|Self-driving Mini
In Series 5 Episode Four, what oversized object is part of Granville's ill-fated advertising idea?|A balloon|A banner|A model teapot|A revolving sign|Series 5|Episode Four|Granville|Disastrous publicity
In Series 5 Episode Six, what mobile business vehicle does Leroy buy?|An ice-cream van|A fish-and-chip van|A delivery lorry|A minibus|Series 5|Episode Six|Leroy|Independent business plan
In the 2018 Christmas special, what seasonal product does Granville need to sell?|Mistletoe mince pies|Gingerbread snowmen|Chocolate oranges|Christmas puddings|Series 5|Christmas Special|Granville|Festive food stock
In Series 6 Episode Two, which hot snack does Granville plan to offer as part of a catering expansion?|Toasties|Baked potatoes|Pasties|Pizzas|Series 6|Episode Two|Granville|New catering service
In Series 6 Episode Three, which customer decides to learn to drive?|Mrs Featherstone|Mavis|Madge|Mrs Rossi|Series 6|Episode Three|Mrs Featherstone|Driving lessons
In Series 6 Episode Four, what outdoor activity do Eric and Cyril finally persuade their wives to try?|Camping|Hillwalking|Fishing|Horse riding|Series 6|Episode Four|Eric and Cyril|Couples' adventure
In Series 6 Episode Five, what product does Granville blend himself to sell?|Snuff|Herbal tea|Aftershave|Pickle|Series 6|Episode Five|Granville|Home-made tobacco blend
In Series 6 Episode Six, whose house does Gastric spend the night at?|Madge's|Mavis's|Mrs Featherstone's|Mrs Rossi's|Series 6|Episode Six|Gastric|Romantic overnight visit`;
const pack377StrictKey=x=>String(x).normalize('NFKC').toLocaleLowerCase('en-GB')
  .replace(/[^\p{L}\p{N}]/gu,'');
function addAudited377(block,programme,era){
  const rows=block.trim().split('\n');
  for(const [index,row] of rows.entries()){
    const fields=row.split('|').map(x=>x.trim());
    if(fields.length!==9||fields.some(x=>!x))throw Error('Pack 377 invalid added row: '+programme+' '+index);
    const [stem,correctAnswer,a,b,c,series,episode,focus,plot]=fields;
    const match=/^In (.+?), (.+)$/.exec(stem);
    const christmas=/^In the (\d{4}) Christmas special, (.+)$/.exec(stem);
    let question;
    if(christmas){
      question='In '+programme+'\'s '+christmas[1]+' Christmas special, '+christmas[2];
    }else if(match){
      const series=/^Series (\d+) Episode (\w+)$/i.exec(match[1]);
      if(series){
        question='In '+programme+' (Series '+series[1]+', Episode '+series[2]+'), '+match[2];
      }else if(match[1].endsWith(' sketch')){
        question='In '+programme+'\'s "'+match[1].slice(0,-7)+'" sketch, '+match[2];
      }else{
        question='In '+programme+', during "'+match[1]+'", '+match[2];
      }
    }else{
      question=stem.toLocaleLowerCase('en-GB').includes(programme.toLocaleLowerCase('en-GB'))
        ?stem:'In '+programme+', '+stem[0].toLowerCase()+stem.slice(1);
    }
    const answers=[a,b,c];answers.splice(questions.length%4,0,correctAnswer);
    const tags=[
      'Television','British Television','British Sitcom','Comedy','Sitcom',
      programme,'Programme: '+programme,era,
      'Series: '+series,'Episode: '+episode,'Focus: '+focus,
      'Storyline: '+plot,'Correct answer: '+correctAnswer,
      'Episode context: '+plot,'Character/setting: '+focus
    ];
    questions.push({
      id:'tv_'+(40227+questions.length-108),
      category:'Television',programme,question,answers,correctAnswer,
      difficulty:'Medium',tags,dailyEligible:true
    });
  }
}
addAudited377(upperAudit,'The Upper Hand','1990-1996');
addAudited377(openAudit,'Open All Hours','1973-1985');
addAudited377(stillAudit,'Still Open All Hours','2013-2019');

const ids377=new Set(),wording377=new Set();
for(const q of questions){
 const key=pack377StrictKey(q.question);
 if(!q.programme||q.category!=='Television'||!q.tags.includes('Programme: '+q.programme)||
   q.answers.length!==4||new Set(q.answers.map(pack377StrictKey)).size!==4||
   q.answers.filter(a=>a===q.correctAnswer).length!==1||
   q.tags.length<12||q.dailyEligible!==true||
   ids377.has(q.id)||wording377.has(key))throw Error('Pack 377 audit validation failed: '+q.id);
 ids377.add(q.id);wording377.add(key);
}
module.exports=questions;
