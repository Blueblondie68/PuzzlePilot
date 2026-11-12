
// PuzzlePilot - Big Quiz - Pack 392
// Fat Friends (ITV, 2000-2005): complete four-series television coverage.
// 25 episodes: Series 1 (6), Series 2 (7), Series 3 (6), Series 4 (6).
// Complete WordPad-ready CommonJS file. Starting ID: tv_21253.
'use strict';

const FIRST_ID = 21253;
const commonTags = ['television', 'British TV', 'ITV', 'Fat Friends', 'Kay Mellor', 'comedy drama'];

// Each row: question | correct answer | three incorrect answers | difficulty | seven question-specific tags.
const rows = [
  // Programme, characters and production
  `Who created the ITV comedy drama Fat Friends?|Kay Mellor|Sally Wainwright|Debbie Horsfield|Lynda La Plante|Easy|2000-2005|series creator|Kay Mellor writing|Rollem Productions|production history|British drama|creator credit`,
  `In which English city is Fat Friends set?|Leeds|Manchester|Sheffield|Liverpool|Easy|2000-2005|Leeds setting|West Yorkshire|slimming club|northern England|series setting|locations`,
  `Which Leeds district is the main setting for the slimming club in Fat Friends?|Headingley|Chapel Allerton|Horsforth|Morley|Medium|2000-2005|Headingley|Leeds neighbourhood|club location|West Yorkshire|series premise|setting`,
  `Which song by The Beautiful South is the opening theme of Fat Friends?|Perfect 10|Rotterdam|A Little Time|Song for Whoever|Easy|2000-2005|Perfect 10|The Beautiful South|opening credits|theme music|1998 song|soundtrack`,
  `What is the original slimming-club programme followed by the Fat Friends characters?|Super Slimmers|Slimming World|Weight Watchers|Count with Carol|Easy|series 1|Super Slimmers|slimming group|original programme|weight-loss meetings|Carol McGary|club identity`,
  `Who plays the formidable slimming-club organiser Carol McGary?|Janet Dibley|Ruth Jones|Kathryn Hunt|Josie Lawrence|Easy|2000-2005|Janet Dibley|Carol McGary|club leader|principal cast|weekly weigh-in|weight-loss organiser`,
  `Which actress portrays Betty Simpson throughout Fat Friends?|Alison Steadman|Lynda Baron|Rita May|Meera Syal|Easy|2000-2005|Alison Steadman|Betty Simpson|principal cast|Simpson family|mother of Kelly|actor role`,
  `Which actress plays Betty's daughter Kelly in Fat Friends?|Ruth Jones|Gaynor Faye|Lisa Riley|Janet Dibley|Easy|2000-2005|Ruth Jones|Kelly Chadwick|Kelly Simpson|principal cast|Simpson family|actor role`,
  `Which actor plays schoolboy Jamie Rymer in Fat Friends?|James Corden|Lee Ingleby|Jason Merrells|Jonathan Ryland|Easy|2000-2005|James Corden|Jamie Rymer|teenage character|principal cast|school bullying|actor role`,
  `Who plays aspiring actress Lauren Harris in Fat Friends?|Gaynor Faye|Ruth Jones|Lisa Riley|Josie Lawrence|Easy|2000-2005|Gaynor Faye|Lauren Harris|aspiring actress|principal cast|career ambitions|actor role`,
  `Which actress joins Fat Friends as Rebecca Patterson in Series 2?|Lisa Riley|Alison Steadman|Kathryn Hunt|Eleanor Bron|Easy|2002|series 2|Lisa Riley|Rebecca Patterson|new cast member|garden centre|actor role`,
  `Who plays Rebecca's mother Norma Patterson in Fat Friends?|Lynda Baron|Rita May|Alison Steadman|Doreen Mantle|Easy|2002-2005|Norma Patterson|Lynda Baron|Patterson family|mother and daughter|series 2 arrival|actor role`,
  `Which actor plays Kelly's husband Kevin Chadwick in Fat Friends?|Jonathan Ryland|Barrie Rutter|Richard Ridings|Jason Merrells|Medium|2000-2005|Jonathan Ryland|Kevin Chadwick|Kelly husband|fish and chip shop|principal cast|actor role`,
  `Which actor plays Douglas Simpson, Betty's husband, in Fat Friends?|Barrie Rutter|Richard Ridings|David Harewood|Paul Warriner|Medium|2000-2005|Barrie Rutter|Douglas Simpson|Betty husband|Simpson household|family life|actor role`,
  `Which actor plays fitness instructor Max Robertson in the later series?|David Harewood|Jonathan Ryland|James Corden|Allan Corduner|Medium|2004-2005|series 3 and 4|David Harewood|Max Robertson|fitness instructor|Carol McGary romance|actor role`,
  `Which two Fat Friends cast members later co-created Gavin & Stacey?|James Corden and Ruth Jones|Gaynor Faye and Lisa Riley|Alison Steadman and Janet Dibley|David Harewood and Jonathan Ryland|Medium|2000-2005|James Corden|Ruth Jones|Gavin and Stacey|later collaboration|television history|cast reunion`,

  // Series 1 (2000), Episode 1: Love Me Slender
  `Whose impending wedding drives the first Fat Friends episode, Love Me Slender?|Kelly Simpson's|Lauren Harris's|Val Lorrimer's|Carol McGary's|Easy|2000|series 1|Love Me Slender|Kelly Simpson|wedding preparations|bridal storyline|opening episode`,
  `What problem does Kelly have with her wedding dress in Love Me Slender?|It is two dress sizes too small|Its train has been damaged|The bridal shop has lost it|Its sleeves are the wrong colour|Medium|2000|series 1|Love Me Slender|Kelly Simpson|dress too small|bridal fittings|weight loss pressure`,
  `For which competition's regional finals does Betty qualify in the first Fat Friends episode?|Superslimmers 2000|Miss Leeds 2000|Yorkshire Woman of the Year|Leeds Fit for Life|Medium|2000|series 1|Love Me Slender|Betty Simpson|regional finals|slimming competition|achievement`,
  `Which family member is unhappy about Betty losing weight in Love Me Slender?|Her husband Douglas|Her daughter Kelly|Her sister Joan|Her son Jamie|Medium|2000|series 1|Love Me Slender|Douglas Simpson|Betty Simpson|marital tension|weight loss response`,

  // Series 1, Episode 2: Fat Chance
  `Which slimming-club member is the focus of the episode Fat Chance?|Alan Ashburn|Jamie Rymer|Val Lorrimer|Kevin Chadwick|Easy|2000|series 1|Fat Chance|Alan Ashburn|anniversary dinner|marriage difficulties|episode focus`,
  `How many years of marriage is Alan Ashburn preparing to celebrate in Fat Chance?|Twenty|Ten|Fifteen|Twenty-five|Medium|2000|series 1|Fat Chance|Alan Ashburn|20th anniversary|marriage milestone|romantic dinner`,
  `What is the first name of Alan Ashburn's wife in Fat Friends?|Liz|Joan|Marilyn|Aisling|Medium|2000|series 1|Fat Chance|Liz Ashburn|Barbara Marten|Alan wife|marital breakdown`,
  `Which actor plays Alan Ashburn in Fat Friends?|Richard Ridings|Barrie Rutter|Jason Merrells|David Harewood|Medium|2000|series 1|Fat Chance|Richard Ridings|Alan Ashburn|bus driver|actor role`,

  // Series 1, Episode 3: Fat Free
  `Which member of the slimming club has won a television soap role in Fat Free?|Lauren Harris|Kelly Simpson|Carol McGary|Val Lorrimer|Easy|2000|series 1|Fat Free|Lauren Harris|soap role|acting career|television audition`,
  `How much weight does Lauren believe she must lose to improve her acting in Fat Free?|Five pounds|Two stone|One stone|Half a pound|Medium|2000|series 1|Fat Free|Lauren Harris|five pounds|body image|career pressure`,
  `What nickname does Lauren's boyfriend Gareth use for her in Fat Free?|Pudding|Peaches|Darling Duck|Angel|Medium|2000|series 1|Fat Free|Gareth|Lauren Harris|Pudding nickname|boyfriend relationship`,
  `Which actor plays Lauren's boyfriend Gareth in the first series?|Will Mellor|James Corden|Jonathan Ryland|Jason Merrells|Medium|2000|series 1|Fat Free|Will Mellor|Gareth|Lauren boyfriend|guest actor`,

  // Series 1, Episode 4: Growing Pains
  `How old is Jamie Rymer in the Fat Friends episode Growing Pains?|Fifteen|Seventeen|Thirteen|Nineteen|Medium|2000|series 1|Growing Pains|Jamie Rymer|15 years old|school pupil|teenage struggles`,
  `Which difficulty is Jamie facing at school in Growing Pains?|Being bullied over his weight|Failing all his examinations|Expulsion for fighting|Being forced to change schools|Easy|2000|series 1|Growing Pains|Jamie Rymer|weight bullying|school harassment|teen mental health`,
  `What health problem affects Jamie's mother Aisling in Growing Pains?|Depression|Asthma|Diabetes|A broken leg|Medium|2000|series 1|Growing Pains|Aisling Rymer|Ger Ryan|maternal depression|family stress`,
  `Which crisis does Jamie experience amid the pressures shown in Growing Pains?|He contemplates suicide|He moves abroad alone|He is arrested for shoplifting|He runs away to join a circus|Hard|2000|series 1|Growing Pains|Jamie Rymer|emotional distress|suicidal thoughts|family responsibilities`,

  // Series 1, Episode 5: Face the Fat
  `Which member of the slimming club is launching a weekend magazine supplement in Face the Fat?|Val Lorrimer|Joan Kirk|Aysha Kapoor|Lauren Harris|Easy|2000|series 1|Face the Fat|Val Lorrimer|magazine supplement|launch party|journalism`,
  `What does Val arrange to accompany her to the launch party in Face the Fat?|A male escort|A personal trainer|Her estranged brother|A former teacher|Medium|2000|series 1|Face the Fat|Val Lorrimer|escort agency|launch partner|social appearance`,
  `What name does Val's escort use in Face the Fat?|Carl|Sean|Craig|Paul|Medium|2000|series 1|Face the Fat|Carl Whittaker|Val Lorrimer|Jason Merrells|escort relationship`,
  `Which actress plays Val Lorrimer in the first two series of Fat Friends?|Kathryn Hunt|Josie Lawrence|Rita May|Janet Dibley|Medium|2000|series 1|Face the Fat|Kathryn Hunt|Val Lorrimer|journalist character|actor role`,

  // Series 1, Episode 6: When the Fat Lady Sings
  `Which celebration takes centre stage in When the Fat Lady Sings?|Kelly's hen night|Betty's retirement party|Lauren's birthday|Carol's business launch|Easy|2000|series 1|When the Fat Lady Sings|Kelly Simpson|hen party|wedding countdown|night out`,
  `Which combination contributes to Kelly losing her inhibitions during her hen night?|Diet pills and alcohol|A sleeping tablet and coffee|An energy drink and painkillers|Cold medicine and lemonade|Medium|2000|series 1|When the Fat Lady Sings|Kelly Simpson|diet pills|alcohol|hen party danger`,
  `Who is Kelly preparing to marry at the end of the first series?|Kevin Chadwick|Alan Ashburn|Carl Whittaker|Craig Porter|Easy|2000|series 1|When the Fat Lady Sings|Kelly Simpson|Kevin Chadwick|wedding|relationship`,

  // Series 2 (2002), Episode 1: Full Belly
  `What is the new name of Carol's independent slimming programme in Series 2?|Count with Carol|Super Slimmers 2000|Slim and Happy|The Weight Circle|Easy|2002|series 2|Full Belly|Count with Carol|Carol McGary|new business|slimming club`,
  `Which kind of dance class appears at the start of the second series?|Salsa|Tap|Flamenco|Line dancing|Medium|2002|series 2|Full Belly|salsa class|Lauren Harris|Betty Simpson|group activity`,
  `Which former slimming-club figure returns and causes difficulties for Carol in Full Belly?|Julia Fleshman|Val Lorrimer|Joan Kirk|Aysha Kapoor|Medium|2002|series 2|Full Belly|Julia Fleshman|Josie Lawrence|Carol McGary|club rivalry`,
  `What family upheaval has Carol recently experienced at the beginning of Series 2?|Her husband has left her|Her sister has moved abroad|Her son has emigrated|Her father has remarried|Medium|2002|series 2|Full Belly|Carol McGary|marital separation|single parent|family stress`,

  // Series 2, Episode 2: Peaches and Dreams
  `What kind of sales gathering does Lauren hold in Peaches and Dreams?|A lingerie party|A cosmetics demonstration|A jewellery auction|A handbag sale|Easy|2002|series 2|Peaches and Dreams|Lauren Harris|lingerie party|social gathering|home sale`,
  `Which relative unexpectedly appears at Lauren's lingerie party?|Her father|Her grandfather|Her cousin|Her uncle|Medium|2002|series 2|Peaches and Dreams|Leonard Harris|Lauren Harris|family interruption|lingerie party`,
  `Which occupation does Lauren's new romantic interest have in Peaches and Dreams?|Vicar|Policeman|Footballer|Chef|Medium|2002|series 2|Peaches and Dreams|Paul Thompson|vicar|Lauren romance|new boyfriend`,
  `Which actors portray Lauren's parents Marilyn and Leonard Harris?|Eleanor Bron and Allan Corduner|Lynda Baron and Barrie Rutter|Alison Steadman and Richard Ridings|Rita May and Jonathan Ryland|Hard|2002|series 2|Peaches and Dreams|Eleanor Bron|Allan Corduner|Marilyn Harris|Leonard Harris`,

  // Series 2, Episode 3: Forty and In-Fat-uated
  `Which birthday is Val dreading in Forty and In-Fat-uated?|Her fortieth|Her thirtieth|Her fiftieth|Her twenty-fifth|Easy|2002|series 2|Forty and In-Fat-uated|Val Lorrimer|40th birthday|age anxieties|relationship`,
  `Who unexpectedly takes Val out with her slimming-club friends on her birthday?|Alan Ashburn|Kevin Chadwick|Jamie Rymer|Douglas Simpson|Medium|2002|series 2|Forty and In-Fat-uated|Alan Ashburn|Val Lorrimer|birthday surprise|friendship`,
  `What upsets Val when she sees her boyfriend Carl at a restaurant?|He is with a paying client|He is announcing an engagement|He is arguing with her father|He is working as a waiter|Medium|2002|series 2|Forty and In-Fat-uated|Val Lorrimer|Carl Whittaker|escort work|jealousy`,

  // Series 2, Episode 4: Sweet and Sour
  `What documents shatter Alan's hopes of reconciling with Liz in Sweet and Sour?|Divorce papers|A new mortgage agreement|A bankruptcy notice|Adoption papers|Easy|2002|series 2|Sweet and Sour|Alan Ashburn|Liz Ashburn|divorce papers|marital separation`,
  `What job does Alan Ashburn lose after failing a medical examination?|Bus driver|Taxi dispatcher|Train guard|Lorry mechanic|Easy|2002|series 2|Sweet and Sour|Alan Ashburn|bus driver|medical assessment|employment`,
  `Which health measurement causes Alan to fail his workplace medical?|Blood pressure|Blood sugar|Cholesterol|Body temperature|Medium|2002|series 2|Sweet and Sour|Alan Ashburn|high blood pressure|occupational health|divorce stress`,
  `Who makes a pact with Alan that encourages him to return to the slimming group?|His daughter|His sister|His mother|His employer|Medium|2002|series 2|Sweet and Sour|Alan Ashburn|daughter|slimming club return|family support`,

  // Series 2, Episode 5: Sticky Fingers
  `Which new acquaintance seems to offer Jamie a glamorous life in Sticky Fingers?|Craig, a second-hand car dealer|Carl, a male escort|Paul, a vicar|Sean, a gardener|Easy|2002|series 2|Sticky Fingers|Jamie Rymer|Craig Porter|car dealer|dangerous friendship`,
  `How old is Jamie when he spends his birthday money trying to impress Craig's friends?|Seventeen|Sixteen|Eighteen|Twenty|Medium|2002|series 2|Sticky Fingers|Jamie Rymer|17th birthday|flash clothes|peer pressure`,
  `What two purchases does Jamie make to fit in with Craig's crowd?|Flashy clothes and a mobile phone|A scooter and a laptop|Designer shoes and a bicycle|A watch and an expensive camera|Medium|2002|series 2|Sticky Fingers|Jamie Rymer|mobile phone|new clothing|Craig Porter`,
  `Which actor plays dubious car dealer Craig Porter in Sticky Fingers?|Lee Ingleby|Jason Merrells|Will Mellor|Julian Kerridge|Medium|2002|series 2|Sticky Fingers|Lee Ingleby|Craig Porter|guest actor|car sales`,

  // Series 2, Episode 6: In Full Bloom
  `Where does Rebecca Patterson work in In Full Bloom?|A garden centre|A bookshop|A bakery|A gymnasium|Easy|2002|series 2|In Full Bloom|Rebecca Patterson|garden centre|assistant manager|workplace`,
  `Which job does Rebecca hold at the garden centre?|Assistant manager|Head chef|Cashier only|Delivery driver|Medium|2002|series 2|In Full Bloom|Rebecca Patterson|assistant manager|garden centre|employment`,
  `What threatens Rebecca's happiness when someone from her past returns?|Psychological bullying|An unpaid parking fine|A disputed lottery ticket|An old sporting injury|Hard|2002|series 2|In Full Bloom|Rebecca Patterson|past acquaintance|psychological cruelty|emotional abuse`,

  // Series 2, Episode 7: Hunger Pangs
  `Who unexpectedly rejoins Betty's life at the slimming club in Hunger Pangs?|Her childhood sweetheart Ian|Her former schoolteacher|Her first employer|Her estranged brother|Easy|2002|series 2|Hunger Pangs|Betty Simpson|Ian Smithson|former boyfriend|reunion`,
  `Which actor plays Betty's former sweetheart Ian Smithson in Hunger Pangs?|James Hazeldine|Barrie Rutter|Richard Ridings|Allan Corduner|Hard|2002|series 2|Hunger Pangs|James Hazeldine|Ian Smithson|guest actor|Betty past`,
  `What sort of secret surfaces when Betty's old flame returns?|A long-buried family secret|The theft of a priceless painting|A fabricated school qualification|An undisclosed inheritance from an aunt|Medium|2002|series 2|Hunger Pangs|Betty Simpson|Ian Smithson|past relationship|family revelation`,

  // Series 3 (2004), Episode 1: Eat Your Heart Out
  `On which television chat show does the Count with Carol group appear in Eat Your Heart Out?|Trisha|Loose Women|This Morning|Kilroy|Easy|2004|series 3|Eat Your Heart Out|Trisha Goddard|Carol McGary|television appearance|slimming debate`,
  `On what festive date does the group appear on live television in Eat Your Heart Out?|Christmas Eve|New Year's Eve|Boxing Day|Christmas Day|Medium|2004|series 3|Eat Your Heart Out|Christmas Eve|live television|holiday special|Count with Carol`,
  `What does Betty accidentally reveal on national television in Eat Your Heart Out?|She has a secret son|She has won the lottery|She is secretly divorced|She owns a second house|Easy|2004|series 3|Eat Your Heart Out|Betty Simpson|secret son|live confession|family history`,
  `Which husband has concealed financial problems from Betty in Eat Your Heart Out?|Douglas Simpson|Kevin Chadwick|Alan Ashburn|Paul Thompson|Medium|2004|series 3|Eat Your Heart Out|Douglas Simpson|family income|financial secrecy|marriage`,

  // Series 3, Episode 2: Leggs Over Easy
  `At which event does Kelly attempt to rekindle romance with Kevin in Leggs Over Easy?|The annual Fish Fryers' Ball|A village harvest fair|A television awards dinner|A charity bingo night|Medium|2004|series 3|Leggs Over Easy|Kelly Chadwick|Kevin Chadwick|Fish Fryers Ball|marriage`,
  `What complicates Kelly's marriage in Leggs Over Easy?|She sleeps with Kevin's brother|Kevin joins an overseas tour|Their shop is destroyed by fire|Her husband leaves to become a vicar|Hard|2004|series 3|Leggs Over Easy|Kelly Chadwick|Kevin brother|affair|marital crisis`,
  `Which discovery leaves Kelly uncertain about the father of her baby?|She finds she is pregnant|She receives a divorce decree|She learns Kevin is adopted|She discovers an old family letter|Medium|2004|series 3|Leggs Over Easy|Kelly Chadwick|pregnancy|paternity uncertainty|family tension`,
  `What food business is central to Kelly and Kevin's working lives?|Fish and chip shop|Pizza takeaway|Chinese restaurant|Sandwich bar|Easy|2004|series 3|Leggs Over Easy|Kevin Chadwick|Kelly Chadwick|fish fryers|family business`,

  // Series 3, Episode 3: Food for Thought
  `Which relative does Carol reconnect with in Food for Thought?|Her estranged sister Mandy|Her long-lost son Simon|Her mother-in-law Norma|Her cousin Lauren|Medium|2004|series 3|Food for Thought|Carol McGary|Mandy|estranged sisters|family reconciliation`,
  `What illness is Carol's sister Mandy being treated for in Food for Thought?|Breast cancer|Leukaemia|Kidney disease|Pneumonia|Medium|2004|series 3|Food for Thought|Mandy|breast cancer|family illness|hospital treatment`,
  `Which earlier family member died from the same illness affecting Mandy?|Carol and Mandy's mother|Their grandmother|Their aunt|Their cousin|Hard|2004|series 3|Food for Thought|Carol McGary|Mandy|mother death|cancer history`,
  `With which fitness instructor does Carol become romantically involved in Series 3?|Max Robertson|Sean Hurst|Carl Whittaker|Craig Porter|Easy|2004|series 3|Food for Thought|Carol McGary|Max Robertson|romance|fitness classes`,

  // Series 3, Episode 4: Bacon, Bagels and the Bishop
  `At which theatre does Lauren find acting work in Bacon, Bagels and the Bishop?|West Yorkshire Playhouse|Royal Exchange Manchester|Leeds Grand Theatre|National Theatre London|Medium|2004|series 3|Bacon Bagels and the Bishop|Lauren Harris|West Yorkshire Playhouse|stage acting|career`,
  `Which man proposes marriage to Lauren in Bacon, Bagels and the Bishop?|Paul Thompson|Gareth|Sean Hurst|Max Robertson|Easy|2004|series 3|Bacon Bagels and the Bishop|Lauren Harris|Paul Thompson|engagement|vicar romance`,
  `What challenge faces Lauren as her acting career advances?|Choosing between career ambitions and people she loves|Training as a long-distance runner|Taking over the slimming club|Selling her parents' house|Medium|2004|series 3|Bacon Bagels and the Bishop|Lauren Harris|career dilemma|relationships|acting success`,

  // Series 3, Episode 5: Afters
  `Which couple are planning a more independent life together in Afters?|Rebecca and Sean|Kelly and Max|Val and Carl|Carol and Alan|Easy|2004|series 3|Afters|Rebecca Patterson|Sean Hurst|moving out|relationship`,
  `What major step does Rebecca want to take in Afters?|Move away from her parents' home|Emigrate to Australia|Open a new slimming business|Start acting classes|Medium|2004|series 3|Afters|Rebecca Patterson|independence|leaving home|Sean Hurst`,
  `Who needs Rebecca's support when tragedy interrupts her plans in Afters?|Her mother Norma|Carol McGary|Lauren Harris|Betty Simpson|Medium|2004|series 3|Afters|Norma Patterson|Rebecca Patterson|family tragedy|emotional support`,

  // Series 3, Episode 6: Food of Love
  `What job is Jamie doing successfully by the time of Food of Love?|Junior chef|Driving instructor|Car salesman|Radio presenter|Easy|2004|series 3|Food of Love|Jamie Rymer|junior chef|restaurant career|love life`,
  `What makes Jamie's new romance complicated in Food of Love?|The woman has a daughter and a former partner with a prison history|She lives abroad and speaks no English|She is his school's headteacher|Her brother owns a rival restaurant|Hard|2004|series 3|Food of Love|Jamie Rymer|new girlfriend|single mother|former prisoner`,
  `Which TV host welcomes the slimming group back for their final weigh-in in Food of Love?|Trisha Goddard|Richard Madeley|Judy Finnigan|Richard Whiteley|Medium|2004|series 3|Food of Love|Trisha Goddard|final weigh-in|group appearance|daytime television`,
  `What does Kelly give birth to during the Series 3 finale of Fat Friends?|A baby boy|Twin girls|A baby girl|Twin boys|Medium|2004|series 3|Food of Love|Kelly Chadwick|childbirth|baby son|family storyline`,

  // Series 4 (2005), Episode 1: Enough to Go Round
  `From which country do the Fat Friends group return at the start of Series 4?|Spain|Portugal|Greece|France|Easy|2005|series 4|Enough to Go Round|Spain holiday|group trip|series opening|travel`,
  `Why had the slimming group won its holiday to the Costa del Sol?|Their appearance and achievement on Trisha|A workplace raffle|An airline competition|A radio phone-in prize|Medium|2005|series 4|Enough to Go Round|Costa del Sol|Trisha|holiday prize|slimming success`,
  `Whom is Betty especially eager to see after returning from Spain?|Her long-lost son Simon|Her estranged sister Mandy|Her father Leonard|Her former employer Alan|Easy|2005|series 4|Enough to Go Round|Betty Simpson|Simon de Vier|reunion|family ties`,
  `Which actor plays Betty's son Simon de Vier in the later series?|Ian Kershaw|Jonathan Ryland|Jason Merrells|James Quinn|Hard|2005|series 4|Enough to Go Round|Ian Kershaw|Simon de Vier|Betty son|guest actor`,

  // Series 4, Episode 2: Second Helpings
  `Which instructor tempts Kelly into extra aerobics sessions in Second Helpings?|Max Robertson|Alan Ashburn|Sean Hurst|Kevin Chadwick|Medium|2005|series 4|Second Helpings|Max Robertson|Kelly Chadwick|aerobics classes|temptation`,
  `Which relative's growing friendship with Betty makes Kelly feel neglected in Second Helpings?|Betty's son Simon|Betty's cousin Norma|Kelly's brother Jamie|Betty's aunt Joan|Medium|2005|series 4|Second Helpings|Kelly Chadwick|Betty Simpson|Simon de Vier|family jealousy`,
  `Who is left running the chip shop and caring for the baby when Kelly walks out in Second Helpings?|Kevin Chadwick|Douglas Simpson|Paul Thompson|Jamie Rymer|Medium|2005|series 4|Second Helpings|Kevin Chadwick|chip shop|childcare|marriage strain`,

  // Series 4, Episode 3: Angel's Delight
  `Which older slimming-club member looks for romance in Angel's Delight?|Norma Patterson|Betty Simpson|Val Lorrimer|Marilyn Harris|Easy|2005|series 4|Angels Delight|Norma Patterson|older romance|dating|loneliness`,
  `What modern dating activity does Norma try in Angel's Delight?|Speed dating for pensioners|Online video dates|A matchmaking television contest|A singles walking holiday|Medium|2005|series 4|Angels Delight|Norma Patterson|speed dating|older adults|romance`,
  `Which medium does Norma use to advertise for a companion in Angel's Delight?|A local radio lonely-hearts phone-in|A national television news show|An advert in a cinema|A poster in the fish shop|Medium|2005|series 4|Angels Delight|Norma Patterson|radio phone-in|lonely hearts|dating search`,
  `Where does Norma plan a romantic weekend with Eddie in Angel's Delight?|Filey|Whitby|Scarborough|Bridlington|Medium|2005|series 4|Angels Delight|Norma Patterson|Eddie Monkford|Filey|weekend away`,

  // Series 4, Episode 4: Get Out of the Kitchen
  `Which girlfriend moves in with Jamie along with her young daughter in Get Out of the Kitchen?|Clare|Lauren|Rebecca|Mercedes|Easy|2005|series 4|Get Out of the Kitchen|Jamie Rymer|Clare|young daughter|shared home`,
  `Which actress plays Jamie's girlfriend Clare in the later series?|Christine Tremarco|Gaynor Faye|Lisa Riley|Josie Lawrence|Medium|2005|series 4|Get Out of the Kitchen|Christine Tremarco|Clare|Jamie girlfriend|guest actress`,
  `What happens to Clare in Get Out of the Kitchen?|She is fatally hit by a car|She wins a television talent contest|She leaves for a job in France|She is arrested for theft|Hard|2005|series 4|Get Out of the Kitchen|Clare|road accident|Jamie Rymer|tragic death`,
  `What does Jamie seek after Clare's death in Get Out of the Kitchen?|Custody of her daughter|Ownership of her restaurant|A place on a dating show|Guardianship of her brother|Hard|2005|series 4|Get Out of the Kitchen|Jamie Rymer|Clare daughter|custody fight|parenting`,

  // Series 4, Episode 5: Healthy Options
  `Where does the slimming-club group go for a weekend in Healthy Options?|A health spa|A ski lodge|A seaside caravan park|A country music festival|Easy|2005|series 4|Healthy Options|health spa|group weekend|wellness retreat|friends`,
  `What unwelcome activity does Carol's questionable arrangement impose on the group in Healthy Options?|A photo shoot|An aerobics marathon|A television cooking competition|A swimming race|Medium|2005|series 4|Healthy Options|Carol McGary|photo shoot|unpopular booking|spa weekend`,
  `What does Carol discover that makes her reconsider a romance with Max in Healthy Options?|Troubling details about his past|A secret second marriage abroad|He owns the rival slimming club|He is moving to America|Medium|2005|series 4|Healthy Options|Carol McGary|Max Robertson|past revelations|relationship doubts`,
  `Why is Lauren especially interested in the spa weekend in Healthy Options?|She wants beauty treatments before her wedding|She hopes to become a spa manager|She has entered a weightlifting contest|She wants to meet an ex-boyfriend there|Medium|2005|series 4|Healthy Options|Lauren Harris|pre-wedding beauty|spa treatments|marriage preparations`,

  // Series 4, Episode 6: Icing on the Cake
  `Whose wedding is at the heart of the final Fat Friends episode Icing on the Cake?|Lauren Harris's|Kelly Chadwick's|Carol McGary's|Rebecca Patterson's|Easy|2005|series 4|Icing on the Cake|Lauren Harris|wedding finale|Paul Thompson|final episode`,
  `What television job does Lauren get ahead of her wedding in Icing on the Cake?|Weather presenter|Children's television host|Television newsreader|Sports commentator|Medium|2005|series 4|Icing on the Cake|Lauren Harris|weathergirl|television career|acting ambition`,
  `Which issue causes friction between Lauren and her fiancé Paul before their wedding?|His jealousy of her career success|A dispute over the wedding cake|A secret house purchase|A disagreement about their surname|Medium|2005|series 4|Icing on the Cake|Paul Thompson|Lauren Harris|career jealousy|relationship test`,
  `Which family problem makes Lauren's wedding particularly painful in the series finale?|Her parents refuse to attend|Her sister cancels the reception|Her father loses the wedding rings|Her mother becomes the officiant|Hard|2005|series 4|Icing on the Cake|Lauren Harris|Marilyn Harris|Leonard Harris|parents absent`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(value => value.trim());
  if (parts.length !== 13 || parts.some(value => value.length === 0)) {
    throw new Error(`Pack 392: malformed row ${index + 1}`);
  }
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 392: invalid difficulty at row ${index + 1}`);
  }
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 392: duplicate answer at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 392: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});

module.exports = questions;
