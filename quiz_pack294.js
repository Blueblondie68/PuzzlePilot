
// quiz_pack294.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Black Books (Channel 4, 2000-2004)
// Three series, eighteen episodes; pack length follows worthwhile verified material.
// Seven distinct, individually chosen specialist tags per question.
// Do not connect to quiz_bank.js until the agreed end-of-session update.
// Row: question | correct answer | three wrong answers | difficulty | seven specialist tags

const groups = [
  {
    topic: 'Programme Background and Regular Cast',
    facts: `In what year did the sitcom Black Books first appear on British television?|2000|1998|2002|2004|Easy|September Premiere|Series One|Original Broadcast|British Comedy History|Channel Four|Noughties Sitcom|Television Debut
Which broadcaster originally transmitted Black Books in the UK?|Channel 4|BBC Two|ITV|BBC One|Easy|Original Network|British Broadcasting|2000 Premiere|Television Distribution|Comedy Scheduling|First Transmission|Series History
How many series of Black Books were produced?|Three|Two|Four|Five|Easy|Three Series|2000 Series|2002 Series|2004 Series|Complete Run|Sitcom Production|Programme History
How many original television episodes of Black Books were made?|Eighteen|Twelve|Twenty-four|Thirty|Easy|Eighteen Episodes|Six Per Series|Complete Original Run|Episode Count|Channel Four Comedy|Programme Format|Finale
Who plays the grumpy bookshop owner Bernard Black?|Dylan Moran|Bill Bailey|Simon Pegg|Mark Heap|Easy|Dylan Moran|Bernard Black|Lead Casting|Bookshop Proprietor|Irish Comedian|Regular Character|Black Books Store
Which comedian plays Bernard's assistant Manny Bianco?|Bill Bailey|Dylan Moran|Nick Frost|Rob Brydon|Easy|Bill Bailey|Manny Bianco|Actor Casting|Bookshop Assistant|Friendly Employee|British Comedian|Regular Character
Who portrays Bernard and Manny's friend Fran Katzenjammer?|Tamsin Greig|Jessica Hynes|Katy Carmichael|Julia Deakin|Easy|Tamsin Greig|Fran Katzenjammer|Actress Casting|Neighbouring Business|Regular Character|Shopkeeper Friend|Female Lead
Which pair created Black Books?|Dylan Moran and Graham Linehan|Simon Pegg and Jessica Stevenson|Ricky Gervais and Stephen Merchant|John Cleese and Connie Booth|Medium|Dylan Moran|Graham Linehan|Show Creators|Comedy Writing|Script Development|Production Credits|Television Collaboration
What sort of business does Bernard Black own?|A bookshop|A record shop|A pub|A newsagent's|Easy|Bernard Black|Second Hand Books|Independent Retail|Black Books Shop|Bookselling|London Setting|Retail Comedy
What is the name of Fran's gift shop next to Black Books in the first series?|Nifty Gifty|Fantasy Bazaar|Goliath Gifts|Paper Planet|Medium|Nifty Gifty|Fran Katzenjammer|Neighbouring Shop|Gift Retail|First Series|Bernard Friend|Small Business
Which London area is associated with the location of Bernard's bookshop?|Bloomsbury|Greenwich|Notting Hill|Brixton|Medium|Bloomsbury|Central London|Bookshop Address|Russell Square|Shop Setting|Geography|London Neighbourhood
Which British television award did Black Books win for Best Situation Comedy?|BAFTA|National Television Award|Royal Television Society News Award|Laurence Olivier Award|Medium|BAFTA Television Awards|Best Situation Comedy|Programme Recognition|2001 Award|2005 Award|British Sitcom|Television Accolade
Who directed most episodes in the second and third series of Black Books?|Martin Dennis|Edgar Wright|Richard Curtis|John Birkin|Hard|Martin Dennis|Director|Series Two|Series Three|Sitcom Production|2002 Episodes|2004 Episodes`,
  },
  {
    topic: 'Series One - Bernard Meets Manny',
    facts: `What task is Bernard desperate to avoid in the opening episode of Black Books?|Completing his tax accounts|Training as a librarian|Hosting a literary festival|Painting the shop front|Easy|Bernard Black|Cooking The Books|Tax Return|Bookshop Accounts|Opening Episode|2000 Plot|Financial Paperwork
What is Manny's original profession before working at the bookshop?|Accountant|Chef|Journalist|Police officer|Easy|Manny Bianco|Former Accountant|Tax Assistance|Cooking The Books|Career Change|Bookshop Employment|Professional Background
Which small self-help book does Manny accidentally swallow?|The Little Book of Calm|The Little Book of Cooking|The Big Book of Dreams|The Pocket Guide to Birds|Medium|Manny Bianco|Little Book Of Calm|Swallowed Book|Self Help|Hospital Visit|First Episode|Surreal Humour
Which actor appears as the doctor treating Manny after he swallows a book?|Martin Freeman|Nick Frost|Rob Brydon|Johnny Vegas|Medium|Martin Freeman|Doctor Role|Manny Bianco|Cooking The Books|Guest Performer|Hospital Scene|2000 Cast
What role has Fran agreed to perform for a pregnant friend in the first episode?|Birth partner|Wedding celebrant|Children's tutor|Estate agent|Medium|Fran Katzenjammer|Birth Coach|Cooking The Books|Pregnant Friend|Maternity|Personal Favour|Opening Episode
Why does Bernard find Manny working in the shop after a night of drinking?|He offered Manny a job while drunk|Fran sold Manny the business|Manny won the shop in a raffle|A court ordered Bernard to hire him|Easy|Bernard Black|Manny Bianco|Drunken Job Offer|Mannys First Day|New Employee|Hiring Mistake|Series One
What does Manny do that particularly irritates Bernard during his first working day?|He actually sells books to customers|He closes the shop at lunchtime|He refuses to read anything|He gives every book away for free|Easy|Manny Bianco|Bernard Black|Successful Sales|Mannys First Day|Retail Customers|Staff Disagreement|Bookshop Service
Who helps persuade Bernard to retain Manny as an assistant?|Fran|Manny's mother|A hotel inspector|A bank manager|Easy|Fran Katzenjammer|Bernard Black|Manny Bianco|Keeping The Job|Mannys First Day|Friend Intervention|Bookshop Staff`,
  },
  {
    topic: 'Series One - Wine, Detective Fantasy and Security',
    facts: `Why do Bernard and Manny agree to house-sit for a friend in Grapes of Wrath?|To escape a disturbing cleaner at the shop|To test a new burglar alarm|To attend a family wedding|To prepare for a book signing|Medium|Bernard Black|Manny Bianco|House Sitting|Grapes Of Wrath|Cleaner|Expensive House|2000 Episode
Which expensive drink do Bernard and Manny consume while house-sitting?|A valuable bottle of wine|An antique bottle of whisky|Rare champagne from a wedding|An imported barrel of beer|Easy|Rare Wine|Grapes Of Wrath|House Sitting|Bernard Black|Manny Bianco|Accidental Consumption|Valuable Collection
Who was supposed to receive the extremely valuable wine as a gift?|The Pope|The Queen|The Prime Minister|The Archbishop of Canterbury|Medium|Pope|Expensive Wine|Grapes Of Wrath|Missing Bottle|Friend Property|Gift Destination|Wine Collection
Which actor plays the creepy cleaner whose presence drives Bernard and Manny away?|Kevin Eldon|Bill Bailey|Johnny Vegas|Peter Serafinowicz|Medium|Kevin Eldon|Cleaner|Grapes Of Wrath|Guest Actor|Bookshop Cleaning|House Sitting|2000 Cast
Which police drama inspires Manny to act like a detective after a sleepless night?|The Sweeney|The Bill|Morse|Prime Suspect|Easy|The Sweeney|Manny Bianco|The Blackout|Police Drama Marathon|Detective Fantasy|Television Influence|1970s Policing
What drink fuels Manny's manic behaviour during his all-night police-drama marathon?|Espresso coffee|Orange squash|Hot chocolate|Energy-free lemonade|Easy|Espresso|Caffeine|Manny Bianco|The Blackout|Sleepless Night|Coffee Binge|Detective Fantasy
What is Manny mistaken for after pursuing a bag-snatcher in The Blackout?|A police officer|A taxi driver|A newspaper reporter|A security guard|Medium|Manny Bianco|Mistaken Policeman|Bag Snatcher|The Blackout|Police Station|Chase|Crime Comedy
What causes a misunderstanding between Fran and her boyfriend in The Blackout?|He is seen dining with his sister|He receives a mysterious inheritance|He is photographed with a police officer|He loses her birthday present|Medium|Fran Katzenjammer|Boyfriend|The Blackout|Sister Misidentified|Jealousy|Restaurant Meeting|Relationship Trouble
What upgrade leaves Manny trapped inside the shop and Bernard locked outside?|A new security alarm and door system|An automatic sprinkler system|A lift installation|A newly installed revolving door|Easy|Shop Security|The Big Lock Out|Bernard Black|Manny Bianco|Locked Doors|Burglar Alarm|Shop Renovation
Which actor plays the technician installing the problematic security system?|Nick Frost|Simon Pegg|Rob Brydon|Martin Freeman|Medium|Nick Frost|Alarm Installer|The Big Lock Out|Guest Casting|Security System|Comedy Cameo|2000 Episode
What radio broadcast captivates Fran while Bernard is stranded outside the shop?|The shipping forecast|The football results|A radio soap opera|A gardening phone-in|Medium|Fran Katzenjammer|Shipping Forecast|The Big Lock Out|Radio Voice|Howell Granger|Distraction|Telephone Busy
Which actor provides the seductive radio voice Fran listens to?|Peter Serafinowicz|Nick Frost|Dylan Moran|Rob Brydon|Medium|Peter Serafinowicz|Howell Granger|Shipping Forecast|Voice Performance|The Big Lock Out|Radio Announcer|Guest Actor`,
  },
  {
    topic: 'Series One Finale and Series Two Opening',
    facts: `What drives Manny to leave Black Books in the first-series finale?|Bernard's relentless bullying|A job offer from the police|A move to France|Fran selling her shop|Easy|Manny Bianco|Hes Leaving Home|Bernard Black|Runaway Assistant|Workplace Conflict|Series One Finale|2000
Who offers Manny a glamorous place to stay after he runs away?|A photographer|A retired soldier|A television producer|An art dealer|Medium|Manny Bianco|Photographer|Hes Leaving Home|Street Encounter|New Accommodation|Runaway Story|Unexpected Host
What unusual personal interest causes Manny to leave the photographer's home?|The photographer has a beard fetish|The photographer keeps snakes|The photographer collects taxidermy|The photographer is a racing driver|Medium|Beard Fetish|Photographer|Manny Bianco|Hes Leaving Home|Unsettling Discovery|Runaway Assistant|Series One Finale
Which actor plays the photographer who takes Manny in?|Omid Djalili|Rob Brydon|Johnny Vegas|Keith Allen|Hard|Omid Djalili|Trebor|Photographer|Hes Leaving Home|Guest Casting|Manny Bianco|2000 Finale
Which musical instrument does Fran attempt to learn in The Entertainer?|Piano|Violin|Trumpet|Saxophone|Easy|Fran Katzenjammer|Piano Lessons|The Entertainer|Music Tuition|New Hobby|Series Two Opening|2002
What is unusual about Fran's elderly piano teacher?|He is blind|He is deaf|He is only twelve years old|He never speaks|Medium|Blind Piano Teacher|Fran Katzenjammer|The Entertainer|Music Tutor|Russian Teacher|Piano Lessons|2002 Episode
Who discovers an unexpected natural talent for playing the piano?|Manny|Bernard|Fran|Bernard's accountant|Easy|Manny Bianco|Natural Pianist|The Entertainer|Hidden Talent|Piano Music|Helping Friends|Series Two
Where does Manny hide to help Fran appear to play the piano successfully?|Inside the piano|Behind a curtain|Under the dining table|Inside a wardrobe|Medium|Manny Bianco|Piano Concealment|Fran Katzenjammer|The Entertainer|Musical Deception|Comedy Scheme|Hidden Helper`,
  },
  {
    topic: 'Series Two - Heat, Gangsters and Family',
    facts: `What weather problem troubles the characters in the episode Fever?|A heatwave|A snowstorm|Heavy fog|Torrential rain|Easy|Fever Episode|London Heatwave|Summer Weather|Hot Bookshop|Series Two|2002|Temperature
What fictional condition does Manny fear will be triggered by excessive heat?|Dave's syndrome|Bernard's disease|Black fever|Manny's chills|Medium|Manny Bianco|Daves Syndrome|Fever Episode|Heat Sensitivity|Eighty Eight Fahrenheit|Imaginary Illness|Temperature
What is Fran's landlord secretly doing to her flat during the heatwave?|Stealing space to make another flat|Turning it into a gym|Painting the walls black|Installing a swimming pool|Medium|Fran Katzenjammer|Crooked Landlord|Fever Episode|Shrinking Flat|Partition Walls|Property Scam|Extra Apartment
Which comedian plays Fran's unscrupulous landlord in Fever?|Johnny Vegas|Rob Brydon|Bill Bailey|Nick Frost|Medium|Johnny Vegas|Landlord|Fever Episode|Guest Actor|Property Scheme|Fran Apartment|2002 Cast
Why do Bernard and Manny agree to help gangster Gus in The Fixer?|To obtain a job for Fran|To buy a new shop|To secure a bank loan|To pay for a holiday|Medium|Gus|Fran Katzenjammer|The Fixer|Job Arrangement|Underworld Connections|Bernard Black|Manny Bianco
What skill must Bernard and Manny teach the threatening author Danny in The Fixer?|Reading|Driving|Swimming|Playing chess|Easy|Danny Spudge|Literacy Lessons|The Fixer|Criminal Author|Book Signing|Manny Bianco|Bernard Black
What is Danny Spudge supposed to record once he can read his book?|An audiobook|A radio news bulletin|A television advert|A court statement|Medium|Danny Spudge|Audiobook|The Fixer|Ghostwritten Memoir|Literacy Problem|Criminal Autobiography|Voice Recording
Which comedian appears as the mysterious employer Nugent in The Fixer?|Rob Brydon|Peter Kay|Johnny Vegas|Stephen Fry|Medium|Rob Brydon|Nugent|The Fixer|Guest Actor|Fran Employment|2002 Casting|Gangster Connection
What family project sends Fran in search of previously unknown relatives in Blood?|Researching her family tree|Organising a family funeral|Tracing a missing pet|Planning a cousin's wedding|Easy|Fran Katzenjammer|Genealogy|Blood Episode|Family Tree|Distant Cousins|2002 Story|Relatives
Into what type of business do Bernard and Manny try to convert the bookshop in Blood?|A café and restaurant|A travel agency|A gym|A clothes shop|Easy|Bernard Black|Manny Bianco|Blood Episode|Cafe Bookshop|Restaurant Venture|Business Reinvention|Food Service
What pest problem disrupts their attempt to turn the shop into a restaurant?|Carnivorous insects|A swarm of parrots|A family of foxes|Escaped laboratory mice|Medium|Blood Episode|Carnivorous Insects|Bookshop Infestation|Restaurant Disaster|Bernard Black|Manny Bianco|Pest Control`,
  },
  {
    topic: 'Series Two Finale and Return of Manny',
    facts: `Which wellbeing activity does Fran embrace after encouragement from her friend Eva in Hello Sun?|Yoga|Boxing|Marathon running|Sailing|Easy|Fran Katzenjammer|Yoga|Hello Sun|Healthy Living|Eva|Exercise Regime|Series Two
Which actress plays Fran's health-conscious friend Eva?|Jessica Hynes|Tamsin Greig|Lucy Davis|Olivia Colman|Medium|Jessica Hynes|Eva|Hello Sun|Guest Actor|Healthy Lifestyle|Fran Friend|Spaced Connection
Whose writings does Bernard use to psychoanalyse and torment Manny in Hello Sun?|Sigmund Freud|Charles Darwin|Karl Marx|William Shakespeare|Easy|Sigmund Freud|Bernard Black|Manny Bianco|Hello Sun|Psychoanalysis|Psychology Books|Manipulation
What disturbance next door prompts the trio to plan a holiday in A Nice Change?|Continuous building work|A new nightclub|A political rally|A loud orchestra|Easy|Building Noise|A Nice Change|Bernard Black|Fran Katzenjammer|Manny Bianco|Holiday Plans|Neighbours
Where does Fran return from at the start of the third series?|Cornwall|Spain|Scotland|Greece|Medium|Fran Katzenjammer|Cornwall Holiday|Manny Come Home|Series Three|Return Journey|2004 Premiere|Seaside Break
What is the name of the polished bookshop Manny joins after leaving Bernard?|Goliath Books|Fantasy Bazaar|Nifty Gifty|Waterstones World|Easy|Goliath Books|Manny Bianco|Manny Come Home|Rival Bookshop|Corporate Retail|New Job|2004
Which actor plays Evan, Manny's controlling manager at Goliath Books?|Simon Pegg|Nick Frost|Martin Freeman|Peter Serafinowicz|Easy|Simon Pegg|Evan|Manny Come Home|Goliath Books|Boss Character|Actor Casting|Spaced Connection
What happens to Bernard's shop while Manny works at Goliath Books?|It becomes filthy and neglected|It turns into a successful bakery|It is converted into flats|It wins a national retail award|Easy|Bernard Black|Neglected Bookshop|Manny Come Home|Shop Squalor|Missing Assistant|Poor Upkeep|Series Three`,
  },
  {
    topic: 'Series Three - Children, Parents and Gambling',
    facts: `What kind of book do Bernard and Manny decide to write in Elephants and Hens?|A children's book|A travel guide|A cookbook|A medical textbook|Easy|Bernard Black|Manny Bianco|Childrens Book|Elephants And Hens|Publishing Ambition|Creative Writing|2004
What social event takes Fran away for the weekend in Elephants and Hens?|A friend's hen party|A family christening|A university reunion|A school sports day|Easy|Fran Katzenjammer|Hen Weekend|Elephants And Hens|Friend Becky|Pre Wedding Party|Weekend Away|Series Three
Which actress plays bride-to-be Becky in the hen-party storyline?|Lucy Davis|Olivia Colman|Jessica Hynes|Tamsin Greig|Medium|Lucy Davis|Becky|Elephants And Hens|Guest Actress|Hen Party|2004 Cast|Fran Friend
Which actress appears as Tanya during the hen-party episode?|Olivia Colman|Katy Carmichael|Julia Deakin|Jessica Hynes|Medium|Olivia Colman|Tanya|Elephants And Hens|Guest Role|Hen Weekend|2004 Episode|British Actress
Who unexpectedly arrives to stay with Manny in Moo-Ma and Moo-Pa?|His parents|His former accountant|His twin brother|His old music teacher|Easy|Manny Bianco|Moo Ma And Moo Pa|Family Visit|Parents Arrival|Home Life|Series Three|2004
Which actress plays Manny's mother, known as Moo-Ma?|Annette Crosbie|Prunella Scales|Joan Sanderson|Rosalind Knight|Medium|Annette Crosbie|Moo Ma|Manny Mother|Actor Casting|Family Visit|Moo Ma And Moo Pa|Guest Star
Which actor portrays Manny's father, Moo-Pa?|Sam Kelly|Bill Bailey|John Henshaw|Ballard Berkeley|Medium|Sam Kelly|Moo Pa|Manny Father|Actor Casting|Family Visit|Moo Ma And Moo Pa|Guest Star
What has Manny exaggerated in his letters home to his parents?|His achievements and success|His height|The shop's opening hours|The number of books he owns|Medium|Manny Bianco|Letters Home|Exaggerated Achievements|Moo Ma And Moo Pa|Parents Impressed|False Success|Family Deception
Who is persuaded to pretend to be Manny's girlfriend for his parents' visit?|Fran|Moo-Ma|Becky|Tanya|Medium|Fran Katzenjammer|Manny Bianco|Pretend Girlfriend|Moo Ma And Moo Pa|Family Lies|False Relationship|Parent Visit
Which horse-racing event starts Bernard's gambling obsession in A Little Flutter?|The Grand National|Royal Ascot Gold Cup|The Derby at Epsom|Cheltenham Gold Cup|Easy|Grand National|Bernard Black|A Little Flutter|Horse Racing|Winning Bet|Gambling Addiction|2004
What card game does Bernard begin playing as his gambling spirals out of control?|Poker|Bridge|Snap|Rummy|Easy|Poker|Bernard Black|A Little Flutter|Illegal Gambling|High Stakes|Debt|2004 Episode
Which nickname do the gamblers give Bernard because he is so easy to beat?|The Gold Mine|The Professor|Lucky Black|The Bookworm|Hard|The Gold Mine|Bernard Black|Poker Table|A Little Flutter|Losing Streak|Gambling Rivals|Nickname`,
  },
  {
    topic: 'Series Three - The Cat and the Final Party',
    facts: `Who inherits the building containing Black Books after Bernard's landlord dies?|A cat|Manny Bianco|Fran Katzenjammer|A local librarian|Easy|Cat Inheritance|Travel Writer|Bernard Black|Property Ownership|New Landlord|Series Three|Animal Property
What does Bernard resent having to pay to the building's new feline owner?|Rent|Veterinary fees|A book subscription|A parking fine|Easy|Bernard Black|Cat Landlord|Rent Payment|Travel Writer|Inherited Building|Landlord Death|Bookshop Premises
What kind of event does Manny organise at the shop in Travel Writer?|A travel-writing book launch|A poetry competition|A children's spelling bee|A musical audition|Easy|Manny Bianco|Travel Writer|Book Launch|Literary Event|Bookshop Promotion|Visiting Author|2004
Which actor plays the charming travel author Jason Hamilton?|Julian Rhind-Tutt|Simon Pegg|Rob Brydon|Nick Frost|Medium|Julian Rhind Tutt|Jason Hamilton|Travel Writer|Guest Actor|Book Launch|Famous Explorer|2004 Casting
Who becomes captivated by the travel author's charm in Travel Writer?|Fran|Moo-Ma|Becky|Eva|Easy|Fran Katzenjammer|Jason Hamilton|Travel Writer|Romantic Attraction|Travelogue Author|Bookshop Event|Series Three
What sort of professional does Bernard approach over the new feline landlord?|A pest controller|An estate agent|A veterinarian|A financial auditor|Medium|Bernard Black|Pest Controller|Travel Writer|Cat Landlord|Attempted Removal|Animal Rights|Property Dispute
Whom does Manny hope to meet at the party in the final episode?|Rowena|Eva|Becky|Moo-Ma|Medium|Manny Bianco|Rowena|Party Episode|Romantic Interest|Finale|Social Gathering|2004
What surprising truth does Bernard discover about a former fiancée in the last episode?|She faked her death to escape him|She had become prime minister|She had joined a circus|She owned Goliath Books|Medium|Bernard Black|Former Fiancee|Faked Death|Party Episode|Past Romance|Final Revelation|2004 Finale
In what year was the final original episode of Black Books broadcast?|2004|2000|2002|2006|Easy|April Finale|Final Broadcast Year|Party Episode|Series Three|Channel Four|End Of Run|British Comedy History`,
  },
];

const FIRST_ID = 12337;
let index = 0;
const questions = groups.flatMap(group =>
  group.facts.trim().split('\n').map(line => {
    const parts = line.trim().split('|').map(part => part.trim());
    const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
    if (parts.length !== 13) throw new Error(`Expected seven individual tags at ${id}; got ${parts.length - 6}`);
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
    const wrongAnswers = [wrong1, wrong2, wrong3];
    if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) throw new Error(`Missing question/answer at ${id}`);
    if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) throw new Error(`Duplicate answer at ${id}`);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) throw new Error(`Invalid difficulty/tags at ${id}`);
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const tags = [...new Map([
      'British Television', 'British Sitcom', 'Black Books', 'Channel 4',
      '2000-2004', '2000s', 'Bookshop Comedy', 'Television Comedy',
      group.topic, correctAnswer, ...specificTags
    ].map(tag => [tag.toLowerCase(), tag])).values()];
    const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
    index++;
    return item;
  })
);
const EXPECTED_COUNT = 81;
if (questions.length !== EXPECTED_COUNT) throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
if (questions[0].id !== 'tv_12337' || questions[questions.length - 1].id !== 'tv_12417') throw new Error('Unexpected question ID range');
if (new Set(questions.map(q => q.id)).size !== questions.length || new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) throw new Error('Duplicate IDs or question wording');
if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) || q.tags.length < 16 || q.tags.some(tag => !tag) || q.dailyEligible !== true)) throw new Error('Incomplete exported metadata');
module.exports = questions;
