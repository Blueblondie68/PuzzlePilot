
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

    const tags = [...new Map(['Television', 'British Sitcom', programme, era, correctAnswer, ...specificTags]
      .map(tag => [tag.toLowerCase(), tag])).values()];

    const entry = {
      id: `tv_${FIRST_ID + questions.length}`,
      category: 'Television',
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

module.exports = questions;


