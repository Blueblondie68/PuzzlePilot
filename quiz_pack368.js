
// quiz_pack368.js
// PuzzlePilot — The Bigggggg Quiz
// Television: This Country (BBC Three, 2017-2020) / People Just Do Nothing (BBC, 2012-2018).
// Two outstanding finished mockumentary comedies on the TV master spreadsheet.
// Covers the original series, key specials and the later Kurupt FM film.
// Based on British Comedy Guide cast/episode guides, TVmaze summaries and BAFTA records.
// Seven bespoke, question-specific tags per question, plus programme metadata.
// Complete WordPad-ready CommonJS module. No external dependencies.

const FIRST_ID = 18508;

// question | correct answer | three wrong answers | difficulty | seven bespoke tags
const countryFacts = `Who played Kerry Mucklowe in This Country?|Daisy May Cooper|Charlie Cooper|Ashley McGuire|Celeste Dring|Easy|Daisy May Cooper|Kerry Mucklowe|Lead Actress|Cotswolds Village|Rural Youth|Main Character|Actor Casting
Who played Lee Kurtan Mucklowe in This Country?|Charlie Cooper|Paul Cooper|Trevor Cooper|Michael Sleggs|Easy|Charlie Cooper|Lee Kurtan Mucklowe|Lead Actor|Village Life|Kerry Companion|Main Character|Actor Casting
What is the relationship between Kerry and Kurtan within This Country?|They are cousins|They are siblings|They are married|They are neighbours with no relation|Easy|Kerry And Kurtan|Fictional Cousins|Mucklowe Family|Village Friends|Character Relationship|Mockumentary Duo|Family Connection
How are the actors who play Kerry and Kurtan related in real life?|They are brother and sister|They are cousins|They are married|They are unrelated|Medium|Daisy And Charlie Cooper|Real Life Siblings|Comedy Writers|Actor Relationship|Family Casting|Behind The Scenes|Creators
Which siblings created and wrote This Country?|Daisy May Cooper and Charlie Cooper|Phoebe Waller-Bridge and Ben Aldridge|Sharon Horgan and Rob Delaney|Ricky Gervais and Stephen Merchant|Easy|Daisy May Cooper|Charlie Cooper|Co Creators|Sibling Writers|BBC Three|Original Comedy|Writing Partnership
Which channel first released This Country?|BBC Three|ITV2|Channel 4|BBC One|Easy|BBC Three|Original Broadcaster|Online Premiere|Programme Launch|British Comedy|2017 Debut|Network
In which year did This Country begin?|2017|2013|2019|2022|Easy|2017 Premiere|February Launch|Series One|Programme Timeline|Daisy May Cooper|Rural Comedy|First Broadcast
In which year did the third and final series of This Country air?|2020|2018|2021|2023|Easy|2020 Final Series|Third Series|February March Broadcast|BBC Three|Programme Ending|Series Timeline|Rural Comedy
How many regular series of This Country were produced?|Three|Two|Four|Five|Medium|Three Series|2017 To 2020|Broadcast Count|Programme Run|British Sitcom|Production History|Series Total
How many regular episodes did This Country have across its three series, excluding specials?|18|12|19|24|Medium|Eighteen Regular Episodes|Six Episodes Per Series|Three Series|BBC Three|Episode Count|Original Run|Broadcast Catalogue
Which television style does This Country use to follow its village residents?|Mockumentary|Live sketch revue|Studio panel show|Animated sitcom|Easy|Mockumentary Format|Documentary Crew|Rural Britain|Fly On Wall Style|Comedy Form|Kerry And Kurtan|Camera Crew
In which English region is the unnamed village of This Country situated?|The Cotswolds|The Lake District|The Fens|The South Downs|Easy|Cotswolds|Rural Setting|English Villages|Kerry Home|Regional Comedy|Landscape|Village Life
Which Gloucestershire town served as a principal filming location for This Country?|Northleach|Stroud|Tewkesbury|Cheltenham|Medium|Northleach|Gloucestershire|Filming Location|Cotswolds|On Location Production|Rural Streets|Programme Setting
What is the name of the village vicar in This Country?|Reverend Francis Seaton|Father Dougal McGuire|Reverend Geraldine Granger|Reverend Adam Smallbone|Medium|Francis Seaton|Local Vicar|Parish Life|Village Church|Kurtan Mentor|Character Identity|Religious Community
Which actor played Reverend Francis Seaton?|Paul Chahidi|Trevor Cooper|Paul Cooper|Gerran Howell|Medium|Paul Chahidi|Reverend Francis Seaton|Vicar Actor|Church Character|Supporting Lead|Casting|Parish Counsellor
Who played the cantankerous village resident Len Clifton?|Trevor Cooper|Paul Cooper|Michael Sleggs|Charlie Cooper|Medium|Trevor Cooper|Len Clifton|Village Regular|Actor Casting|Cotswolds Community|Local Curmudgeon|Supporting Cast
Which relative of Daisy May Cooper plays Len Clifton in real life?|Her uncle|Her father|Her brother|Her grandfather|Medium|Trevor Cooper|Real Life Uncle|Daisy May Cooper|Family Casting|Len Clifton|Actor Relations|Behind The Scenes
Who played Kerry's father Martin Mucklowe?|Paul Cooper|Trevor Cooper|Paul Chahidi|Charlie Cooper|Medium|Paul Cooper|Martin Mucklowe|Kerry Father|Actor Casting|Mucklowe Family|Villager|Real Family Member
Which family relationship links actor Paul Cooper to the programme's creators?|He is their father|He is their uncle|He is their cousin|He is their grandfather|Medium|Paul Cooper|Daisy May Cooper|Charlie Cooper|Real Life Father|Family Acting|Martin Mucklowe|Cast Relations
Who supplies the voice of Kerry's largely unseen mother Sue?|Daisy May Cooper|Ashley McGuire|Celeste Dring|Jean Trend|Hard|Sue Mucklowe|Unseen Mother|Voice Acting|Daisy May Cooper|Ivy Woodcock Credit|Off Screen Shouting|Family Household
Which actress played the formidable neighbour Big Mandy Harris?|Ashley McGuire|Daisy May Cooper|Celeste Dring|Eliza Hunt|Medium|Ashley McGuire|Big Mandy Harris|Village Neighbour|Actress Casting|Kerry Friend|Recurring Character|Local Personality
Which character is nicknamed Big Mandy in This Country?|Mandy Harris|Kerry Mucklowe|Kayleigh Hudson|Sue Mucklowe|Easy|Mandy Harris|Big Mandy|Neighbour Nickname|Kerry Community|Recurring Character|Local Villager|Village Humour
Who played Kurtan's friend Slugs?|Michael Sleggs|Paul Chahidi|Paul Cooper|Trevor Cooper|Medium|Michael Sleggs|Slugs Character|Young Actor|Village Friend|Recurring Cast|Kurtan Rival|Character Casting
What is the full first name of the This Country character nicknamed Slugs?|Michael|Martin|Matthew|Marcus|Medium|Michael Slugett|Slugs Nickname|Village Character|Kurtan Friend|Character Identity|Young Villager|Series One
Which actress played Kayleigh Hudson in This Country?|Celeste Dring|Ashley McGuire|Daisy May Cooper|Laura Checkley|Hard|Celeste Dring|Kayleigh Hudson|Actress Casting|Village Young People|Recurring Role|Supporting Cast|Character Actress
Who directed all three regular series of This Country?|Tom George|Simon Mayhew-Archer|Jack Clough|Steve Stamp|Hard|Tom George|Series Director|Television Production|BBC Comedy|Behind The Scenes|All Three Series|Directing Credits
Which award did This Country win at the 2018 BAFTA Television Awards?|Best Scripted Comedy|Best Soap and Continuing Drama|Best Factual Series|Best International Programme|Medium|2018 BAFTA|Scripted Comedy Winner|Daisy And Charlie Cooper|British Television Award|Critical Recognition|Programme Prize|BBC Three Success
Who won the 2018 BAFTA for Female Performance in a Comedy Programme for This Country?|Daisy May Cooper|Ashley McGuire|Celeste Dring|Diane Morgan|Medium|Daisy May Cooper|2018 BAFTA|Female Comedy Performance|Kerry Mucklowe|Acting Award|Television Honour|British Academy
What competition dominates the first This Country episode Scarecrow?|The village scarecrow festival|A village baking contest|A pub darts knockout|A school sports day|Easy|Scarecrow Episode|Village Festival|Kurtan Competition|Series One Premiere|2017 Story|Community Event|Creative Display
What business does Mandy Harris start in the episode Mandy?|Tattooing|Dog grooming|Catering|Hairdressing|Easy|Mandy Episode|Tattoo Business|Big Mandy|Kerry Customer|Series One|Local Enterprise|2017 Plot
Which uncle's release from prison is anticipated in Oven Space?|Steve Nugget Nuggins|Len Clifton|Jacob Seaton|Robert Robinson|Medium|Oven Space|Uncle Nugget|Steve Nuggins|Prison Release|Mucklowe Relations|Series One|Family Story
What sort of sales job does Kerry take after a village-hall talk in King of the Nerds?|Door-to-door selling|Selling cars at a dealership|Working in a supermarket|Running a bakery stall|Medium|King Of The Nerds|Door To Door Sales|Village Hall Seminar|Kerry New Career|Series One|Business Pitch|Employment
Who is accused of peeping in the This Country episode Peeping Tom?|Martin Mucklowe|Reverend Seaton|Kurtan Mucklowe|Len Clifton|Medium|Peeping Tom|Martin Mucklowe|Village Allegation|Kerry Father|Series One|Community Rumours|2017 Episode
What educational course is Kurtan considering at the end of the first series?|A GNVQ at college|A university medicine degree|A PhD in history|An airline pilot licence|Medium|GNVQ Episode|Kurtan College|Further Education|Series One Finale|Village Departure|Career Future|Schooling
Which nearby town does Kurtan hope to attend college in?|Swindon|Bath|Oxford|Bristol|Medium|Swindon College|Kurtan Ambitions|GNVQ|Education|Moving Away|Cotswolds Transport|Series One Finale
In Random Acts of Kindness, which college decision is Kurtan regretting?|Not going to Swindon College|Declining a place in London|Dropping out of Oxford|Refusing an apprenticeship in Bristol|Medium|Random Acts Of Kindness|Kurtan Regret|Swindon College|Series Two Premiere|Missed Opportunity|Village Routine|Education Decision
Who helps Kerry cope with unsettling messages in Threatening Letters?|Big Mandy|Kayleigh Hudson|Sue Mucklowe|Florence Winwood|Medium|Threatening Letters|Mandy Harris|Kerry Mucklowe|Neighbourly Advice|Series Two|Intimidating Mail|Village Support
For whom does Kurtan take a labouring job in Threatening Letters?|Kerry's father Martin|Reverend Seaton|Len Clifton|His former teacher|Medium|Threatening Letters|Martin Mucklowe|Kurtan Labouring|Series Two|Manual Work|Family Connections|Employment
Where is Kurtan hoping to travel to buy new clothes in Minor Injuries?|Swindon|Gloucester|London|Cardiff|Medium|Minor Injuries|Swindon Shopping Trip|Transport Problems|Kurtan Clothes|Series Two|Bus Disruption|2018 Episode
Which sport is Kerry helping the vicar organise in Minor Injuries?|Football|Cricket|Tennis|Rugby|Medium|Minor Injuries|Football Practice|Reverend Seaton|Kerry Volunteer|Series Two|Youth Sport|Local Team
Which city has the vicar's son Jacob been living in before The Vicar's Son?|Bristol|Bath|London|Coventry|Medium|Vicar Son|Jacob Seaton|Bristol|Return To Village|Series Two|Family Visit|Country Adjustment
What was the name of elderly Florence's late cat in The Vicar's Son?|Tudor|Smudge|Oscar|Moby|Hard|Florence Winwood|Tudor Cat|Bereaved Pet|Kerry Visits|Series Two|Tea Talk|Village Neighbour
Which village attraction coincides with Kerry's birthday in Steam Fair?|The annual steam fair|A flower show|An agricultural sheep sale|A heritage railway opening|Easy|Steam Fair|Kerry Birthday|Village Event|Series Two|2018 Episode|Kurtan Gift|Country Traditions
What kind of storage location does Martin ask Kerry to help with in Family Loyalties?|A lock-up garage|A warehouse in London|A garden greenhouse|A caravan on a farm|Medium|Family Loyalties|Martin Mucklowe|Lock Up Garage|Kerry Assistance|Series Two Finale|Suspicious Wares|Family Loyalty
Which local club gives Kurtan a sense of purpose in Family Loyalties?|The bowls club|A rugby club|A swimming club|A running club|Medium|Family Loyalties|Kurtan Employment|Bowls Club|New Purpose|Series Two Finale|Village Job|Community Activities
What is examined in the standalone special The Aftermath?|The fallout from Kerry's criminal activities|The vicar's retirement|A cricket club election|A village flood|Medium|The Aftermath|Kerry Criminality|2018 Special|Village Fallout|Mucklowe Family|Documentary Return|Consequences
Whose memory is honoured in the third-series opener A Letter from Slugs?|Michael Slugs Slugett|Martin Mucklowe|Reverend Seaton|Florence Winwood|Medium|A Letter From Slugs|Michael Slugett|Village Loss|Series Three Premiere|2020 Story|Tribute|Friendship
Who teaches Kerry and Kurtan to drive in the episode Driving Lesson?|The vicar|Martin Mucklowe|Big Mandy|Len Clifton|Easy|Driving Lesson|Reverend Francis Seaton|Kerry And Kurtan|Driving Tuition|Series Three|Countryside Journey|2020 Episode
Who goes missing during the driving-lesson episode?|Len Clifton|Martin Mucklowe|Big Mandy|Jacob Seaton|Medium|Driving Lesson|Len Clifton|Missing Villager|Reverend Seaton|Series Three|Search|Community Concern
What activity does Kerry take up in Kurtan's Half-Brother?|Joining a book club|Learning ballroom dancing|Training as a mechanic|Running for parish council|Medium|Kurtans Half Brother|Book Club|Kerry Reading|Reverend Seaton|Series Three|New Interest|Village Group
Where do Kerry and Kurtan await the vicar's return in The Station?|At a railway station|At a ferry terminal|At an airport|At a bus depot|Medium|The Station|Vicar Return|Bristol Trip|Kerry And Kurtan|Series Three|Village Administration|Travel Arrival
Which village celebration features in the final episode of This Country?|The harvest festival|The Christmas market|The spring carnival|The bonfire parade|Medium|Harvest Finale|Annual Harvest Festival|Village Community|Series Three Ending|2020 Episode|Final Celebration|Parish Life`;

const peopleFacts = `Who played self-styled MC Grindah in People Just Do Nothing?|Allan Mustafa|Hugo Chegwin|Asim Chaudhry|Steve Stamp|Easy|Allan Mustafa|MC Grindah|Lead Actor|Pirate Radio|Kurupt FM|Main Character|Performer Casting
Who played DJ Beats in People Just Do Nothing?|Hugo Chegwin|Allan Mustafa|Dan Sylvester Woolford|Steve Stamp|Easy|Hugo Chegwin|DJ Beats|Kurupt FM|Radio DJ|Lead Cast|Actor Casting|Grindah Partner
Who portrayed entrepreneur Chabuddy G?|Asim Chaudhry|Allan Mustafa|Hugo Chegwin|George Keywood|Easy|Asim Chaudhry|Chabuddy G|Entrepreneur Character|Business Schemes|Actor Casting|Kurupt Manager|Supporting Lead
Who played Steves in People Just Do Nothing?|Steve Stamp|Hugo Chegwin|Asim Chaudhry|Dan Sylvester Woolford|Easy|Steve Stamp|Steves|Kurupt Member|Radio Crew|Actor Casting|Supporting Cast|Brentford Group
Which actor portrayed Kurupt FM member Decoy?|Daniel Sylvester Woolford|Steve Stamp|Allan Mustafa|George Keywood|Medium|Daniel Sylvester Woolford|Decoy|DJ Character|Kurupt Crew|Actor Identification|Radio Station|Music Performance
Who played Grindah's partner Michelle, usually called Miche?|Lily Brazier|Ruth Bratt|Victoria Alcock|Tiff Stevenson|Easy|Lily Brazier|Miche|Michelle Zografos|Grindah Partner|Actress Casting|Family Life|Main Ensemble
Which actress portrayed DJ Beats's partner Roche?|Ruth Bratt|Lily Brazier|Tiff Stevenson|Victoria Alcock|Medium|Ruth Bratt|Roche|Beats Partner|Actress Casting|Family Relationship|Craig Mother|Regular Cast
Who played Roche's son Craig?|George Keywood|Hugo Chegwin|Allan Mustafa|Steve Stamp|Medium|George Keywood|Craig|Roche Son|Actor Casting|Beats Family|Teenager|Recurring Character
Which actress played Grindah and Miche's daughter Angel?|Olivia Jasmine Edwards|Lily Brazier|Ruth Bratt|Tiff Stevenson|Hard|Olivia Jasmine Edwards|Angel|Grindah Daughter|Child Actor|Family Cast|Miche Child|Character Casting
Who played Miche's mother Carol?|Victoria Alcock|Lily Brazier|Ruth Bratt|Maria Louis|Medium|Victoria Alcock|Carol|Miche Mother|Actress Role|Family Ensemble|Older Generation|Character Casting
Who portrayed Chabuddy G's wife Aldona in the early episodes?|Maria Louis|Tiff Stevenson|Lily Brazier|Ruth Bratt|Hard|Maria Louis|Aldona|Chabuddy Wife|Actor Casting|Early Series|Character Marriage|Supporting Cast
Which actress played Tanya in series two to five?|Tiff Stevenson|Lily Brazier|Maria Louis|Ruth Bratt|Hard|Tiff Stevenson|Tanya|Series Two To Five|Actress Casting|Supporting Ensemble|Recurring Character|BBC Sitcom
What is the fictional pirate radio station at the centre of People Just Do Nothing called?|Kurupt FM|Kold FM|Radio One|Brentford Sound|Easy|Kurupt FM|Pirate Radio Station|Grindah And Beats|UK Garage|Series Premise|Radio Broadcasting|Fictional Organisation
Which London area is the home base of Kurupt FM?|West London|East London|North London|South London|Easy|West London|Kurupt FM|Pirate Station|Programme Setting|Urban Youth|London Geography|Music Scene
Which district is especially associated with the Kurupt FM crew?|Brentford|Camden|Peckham|Brixton|Easy|Brentford|West London|Grindah Home|Kurupt FM|Estate Life|London Neighbourhood|Series Locale
What kind of music does Kurupt FM mainly champion?|UK garage and drum and bass|Classical opera|Country and western|Heavy metal|Easy|UK Garage|Drum And Bass|Kurupt Music|Pirate Broadcast|Dance Music|Underground Scene|Station Style
What television format does People Just Do Nothing imitate?|A documentary about real people|A live quiz show|A historical costume drama|A police interrogation show|Easy|Mockumentary|Fly On Wall Camera|Kurupt Crew|Comedy Form|Faux Reality|Documentary Style|Programme Genre
In which year did the original People Just Do Nothing pilot appear?|2012|2009|2014|2017|Medium|2012 Pilot|First BBC Appearance|Feed My Funny|Online Comedy|Programme Origins|Early Kurupt|Broadcast History
When did the first full series of People Just Do Nothing appear?|2014|2012|2016|2018|Easy|2014 Series One|BBC Three|Four Episodes|Original Series|First Regular Run|Programme Timeline|UK Sitcom
In which year did the fifth and final series of People Just Do Nothing air?|2018|2016|2020|2022|Easy|2018 Final Season|Series Five|Kurupt Farewell|December Ending|Original Television Run|BBC Comedy|Programme Finale
How many regular series did People Just Do Nothing have?|Five|Three|Four|Six|Medium|Five Series|2014 To 2018|Original Run|Series Count|Pirate Radio Comedy|BBC Programme|Production History
How many episodes did People Just Do Nothing have including the 2012 pilot but excluding charity specials?|28|22|30|36|Medium|Twenty Eight Episodes|Pilot Included|Five Series|Broadcast Catalogue|Specials Excluded|BBC Television|Episode Total
Which company produced People Just Do Nothing?|Roughcut Television|Thames Television|Granada Television|World Productions|Medium|Roughcut Television|Production Company|BBC Comedy|Kurupt FM|Studio Credits|Behind The Scenes|Mockumentary Production
Who directed the People Just Do Nothing television series?|Jack Clough|Tom George|David Yates|Ben Taylor|Hard|Jack Clough|Series Director|Programme Production|Comedy Direction|Roughcut|BBC Series|Behind The Camera
Which three performers created People Just Do Nothing?|Steve Stamp, Allan Mustafa and Hugo Chegwin|Rik Mayall, Ade Edmondson and Nigel Planer|Daisy May Cooper, Charlie Cooper and Tom George|Richard Curtis, Ben Elton and Rowan Atkinson|Medium|Steve Stamp|Allan Mustafa|Hugo Chegwin|Creative Trio|Comedy Creation|Kurupt FM Origin|Programme Writers
Whom is Grindah in a relationship with at the start of the series?|Miche|Roche|Tanya|Aldona|Easy|Grindah And Miche|Michelle Zografos|Romantic Partners|Family Life|Kurupt Frontman|Series Beginning|Relationship
Who raises Angel as his daughter, despite hints about her biological father?|Grindah|Beats|Chabuddy G|Steves|Medium|Angel Zografos|MC Grindah|Miche Daughter|Parental Figure|Decoy Implication|Kurupt Household|Family Relationship
What is the name of DJ Beats's partner in People Just Do Nothing?|Roche|Miche|Aldona|Carol|Easy|DJ Beats|Roche|Family Partner|Craig Mother|Relationship|Supporting Cast|Home Life
Who is the mother of Craig in People Just Do Nothing?|Roche|Miche|Carol|Aldona|Medium|Roche|Craig|Mother And Son|Beats Household|Family Relationship|Parental Role|Main Characters
In the first episode Secret Location, what threatens Kurupt FM's broadcasting base?|Neighbours' noise complaints|A burst water main|A council fire inspection|A landlord's rent rise|Medium|Secret Location|Noise Complaints|Kurupt Headquarters|Series One Premiere|Neighbour Trouble|2014 Plot|Pirate Radio
What unusual material does Chabuddy suggest for soundproofing the radio flat?|Egg boxes|Wool blankets|Carpet tiles|Cotton wool|Medium|Secret Location|Egg Boxes|Soundproofing Scheme|Chabuddy G|Broadcast Studio|Series One|Improvised Solution
How old is Angel turning in the episode Angel's Birthday?|Five|Three|Seven|Ten|Medium|Angels Birthday|Fifth Birthday|Grindah Planning|Series One|Miche Daughter|Child Party|2014 Episode
For what type of shop does DJ Beats interview in Angel's Birthday?|A tie shop|A shoe shop|A record shop|A bakery|Medium|Angels Birthday|Beats Interview|Tie Shop|Employment Search|Series One|Roche Wants Job|Retail Work
What does Kurupt FM organise for listeners in the episode Competition?|A prize competition|A football tournament|A charity run|A cooking contest|Medium|Competition Episode|Radio Listener Prize|Kurupt Broadcast|Series One|Caller Participation|Station Promotion|2014 Story
What is Chabuddy G asked to create for the station in The Website?|A website|A record sleeve|A radio antenna|A new transmitter mast|Easy|The Website|Chabuddy Computer Skills|Internet Presence|Radio Promotion|Series One|Station Branding|Technology
Which ceremony for Angel forms the story of The Godfather?|Her christening|Her school graduation|Her wedding|Her first communion|Medium|The Godfather|Angel Christening|Godfather Decision|Series Two Premiere|Grindah|Family Occasion|2015 Episode
What new type of workplace does Miche join in The Babysitter?|A hair salon|A dental surgery|A restaurant kitchen|A travel agency|Medium|The Babysitter|Miche Career|Hair Salon|Trainee Hairdresser|Series Two|Grindah Childcare|Employment
What counterfeit clothing does Chabuddy G try to sell in Weed Drought?|Designer T-shirts|Football shirts|Leather jackets|Silk ties|Medium|Weed Drought|Counterfeit T Shirts|Chabuddy Business|Market Stall|Series Two|Fake Labels|Clothes Selling
Which activity does Beats plan with Craig in Promotion?|A fishing trip|A camping holiday|A football trial|A driving lesson|Medium|Promotion|Beats And Craig|Fishing Trip|Family Outing|Series Two|Father Son Bond|2015 Episode
What is the name of Chabuddy G's nightclub that opens in Clubnight?|Champagne Steam Rooms|Kurupt Palace|The Underground Garage|Brentford Ballroom|Medium|Clubnight|Champagne Steam Rooms|Club Opening|Chabuddy Venue|Series Two Finale|Kurupt Performance|Nightlife Business
What does Kurupt FM enter a studio to record in Dubplate?|A new track|A news bulletin|A documentary narration|A comedy audiobook|Medium|Dubplate|Recording Studio|New Song|Series Three Premiere|Grindah And Beats|Music Production|2016 Episode
What major musical opportunity is Kurupt FM seeking in Record Deal?|A recording contract|A Royal Variety Performance|A university scholarship|A radio news licence|Medium|Record Deal|Music Contract|Kurupt FM|Series Three|Industry Meeting|Band Ambitions|2016 Story
Which character faces potential imprisonment in Court Case?|Grindah|Chabuddy G|Beats|Decoy|Medium|Court Case|Grindah|Legal Trouble|Series Three|Possible Jail Sentence|Kurupt Leader|2016 Episode
What kind of business does Chabuddy turn his bar into in New Friends?|A restaurant|A gym|A betting shop|A launderette|Medium|New Friends|Chabuddy Restaurant|Bar Conversion|Steves Employed|Series Three|New Venture|2016 Episode
To which Suffolk town do the Kurupt FM crew travel for a disappointing gig?|Ipswich|Bury St Edmunds|Lowestoft|Felixstowe|Medium|Ipswich Episode|Suffolk Gig|Chabuddy Organiser|Series Three|Live Performance|Band Tour|Failed Event
Who goes into labour in the third-series episode Valentimes?|Roche|Miche|Aldona|Tanya|Medium|Valentimes|Roche Labour|Beats Called Away|Series Three Finale|New Baby|Family Birth|2016 Episode
Which rival radio station challenges Kurupt FM in the fourth series?|Kold FM|Klassic FM|Pulse FM|Rebel Radio|Medium|Kold FM|Kurupt Rival|Radio War|Series Four|Station Competition|Brentford Beef|Underground Music
What causes Grindah to spiral in the early fourth series?|His split from Miche|The closure of a university|A prison transfer|A football injury|Medium|Slipping|Grindah Breakup|Miche Relationship|Series Four|Emotional Crisis|Kurupt Drama|2017 Story
Which young child does Miche hope to turn into a star in Bosses?|Angel|Craig|Robyn|Tanya|Medium|Bosses|Angel Audition|School Play|Miche Mumager|Series Four|Child Performance|Parental Ambition
What occasion sends Kurupt FM out for a stag night in Stags and Hens?|Grindah's wedding|Beats's retirement|Chabuddy's birthday|Decoy's graduation|Medium|Stags And Hens|Grindah Stag Do|Wedding Preparations|Series Four|Miche Hen Party|2017 Episode|Night Out
Who marries Miche in the fourth-series finale The Wedding?|Grindah|Beats|Decoy|Steves|Easy|The Wedding|Miche And Grindah|Marriage Ceremony|Series Four Finale|Kurupt FM|2017 Celebration|Family Story
What happens to Kurupt FM's equipment before the final series begins?|It is seized in a raid|It is destroyed by flooding|It is stolen by another band|It is sold to the BBC|Medium|Car Boot|Police Raid|Seized Equipment|Series Five Premiere|Kurupt Crisis|Station Shutdown|2018 Episode
Where do the Kurupt FM crew raise funds in the episode Car Boot?|At a car boot sale|At a charity auction|At a football match|At a talent contest|Easy|Car Boot Sale|Equipment Replacement|Kurupt FM|Series Five|Fundraising|2018 Story|Desperate Scheme
What new broadcasting platform does Kurupt FM try in Internet Radio?|Live online streaming|Satellite television|Short-wave radio|A newspaper website|Medium|Internet Radio|Live Streaming|Kurupt FM|Widen Audience|Series Five|Digital Broadcast|Modernisation
What is the track Kurupt FM films a video for in Music Video?|Heart Monitor Riddem|The Red Flag|Glorious Day|Up to Date|Medium|Music Video|Heart Monitor Riddem|Chabuddy Director|Series Five|Music Promotion|Video Production|2018 Episode
Which county's name appears to trigger Grindah's imagined asthma in Definitely Asthma?|Essex|Kent|Surrey|Hampshire|Medium|Definitely Asthma|Essex|Grindah Illness|Doctor Appointment|Series Five|Avoiding Move|2018 Story
What sort of party do the Kurupt boys visit in Getting Old?|A student party|A children's birthday party|A retirement party|A village fête|Medium|Getting Old|Student Party|Grindah Birthday|Youth Anxiety|Series Five|Late Night Event|2018 Episode
Which London area does Grindah bid farewell to in the finale Outro?|Brentford|Camden|Whitechapel|Lewisham|Medium|Outro|Brentford Farewell|Kurupt FM End|Series Five Finale|Grindah Leaves|2018 Ending|London Estate
What is the title of the later feature film following the Kurupt FM gang to Asia?|People Just Do Nothing: Big in Japan|Kurupt FM: The Lost Tapes|Grindah Goes to Hollywood|People Just Do Nothing: Back in Brentford|Easy|Big In Japan|2021 Feature Film|Kurupt FM Cinema|Japan Journey|Movie Spin Off|Later Adaptation|Comedy Film
Which country does the Kurupt FM crew visit in their feature film?|Japan|Australia|Canada|Germany|Easy|Japan|Kurupt International Trip|Big In Japan|Film Setting|Gang Travels|Musical Opportunity|2021 Movie
What sparks the Kurupt FM band's trip to Japan in Big in Japan?|Their song is used on a Japanese game show|They win a television quiz|They are hired for the Olympics|They inherit a recording studio|Medium|Japanese Game Show|Kurupt Song|International Fame|Film Plot|Big In Japan|Unexpected Success|2021 Cinema
Who returns to manage the group in People Just Do Nothing: Big in Japan?|Chabuddy G|Craig|Roche|Aldona|Medium|Chabuddy G|Music Manager|Japan Tour|Film Story|Gang Business|Management Return|International Career
Who directed the People Just Do Nothing feature film Big in Japan?|Jack Clough|Tom George|Kevin Macdonald|David Yates|Hard|Jack Clough|Film Director|2021 Release|Big In Japan|Cinema Direction|Television Director|Movie Production`;

const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const tagKey = value => normalise(value).replace(/[^\p{L}\p{N}]/gu, '');
const questions = [];

function addProgramme(programme, sharedTags, facts) {
  for (const line of facts.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const fields = line.trim().split('|').map(value => value.trim());
    if (fields.length !== 13) throw new Error('Pack 368: wrong field count for ' + id + ': ' + fields.length);
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...bespokeTags] = fields;
    if ([question, correctAnswer, wrong1, wrong2, wrong3, ...bespokeTags].some(value => !value))
      throw new Error('Pack 368: blank field for ' + id);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || bespokeTags.length !== 7 ||
        new Set(bespokeTags.map(tagKey)).size !== 7)
      throw new Error('Pack 368: difficulty or bespoke tags invalid for ' + id);
    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
      throw new Error('Pack 368: repeated answer choice for ' + id);
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'British Television', 'Comedy', 'Mockumentary',
      ...sharedTags, programme, 'Programme: ' + programme,
      correctAnswer, ...bespokeTags
    ].map(tag => [tagKey(tag), tag])).values()];
    questions.push({ id, category: 'Television', programme, question, answers,
      correctAnswer, difficulty, tags, dailyEligible: true });
  }
}

addProgramme('This Country',
  ['BBC Three', '2017-2020', 'Rural Comedy', 'Cotswolds', 'Daisy May Cooper', 'Charlie Cooper'],
  countryFacts);
addProgramme('People Just Do Nothing',
  ['BBC Three', 'BBC Two', '2012-2018', 'Kurupt FM', 'Pirate Radio', 'UK Garage'],
  peopleFacts);

if (!questions.length || questions[0].id !== 'tv_18508' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length ||
    questions.some((q, i) =>
      q.id !== 'tv_' + String(FIRST_ID + i).padStart(5, '0') ||
      q.category !== 'Television' || !q.programme ||
      !Array.isArray(q.answers) || q.answers.length !== 4 ||
      !q.answers.includes(q.correctAnswer) ||
      new Set(q.answers.map(normalise)).size !== 4 ||
      !Array.isArray(q.tags) || q.tags.length < 14 ||
      new Set(q.tags.map(tagKey)).size !== q.tags.length ||
      !q.tags.includes('Programme: ' + q.programme) ||
      !['Easy', 'Medium', 'Hard'].includes(q.difficulty) || q.dailyEligible !== true))
  throw new Error('Pack 368: exported question validation failed');

module.exports = questions;
