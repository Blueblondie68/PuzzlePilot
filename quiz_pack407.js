
// PuzzlePilot - Big Quiz - Pack 407
// A Country Practice (1981-1993 Seven Network; 1994 Network Ten).
// Substantial coverage: characters, relationships, medical/social issues, revival.
// Complete WordPad-ready CommonJS file. First ID: tv_22644.
'use strict';

const FIRST_ID = 22644;
const commonTags = [
  'television', 'A Country Practice', 'Australian TV drama',
  'medical soap', '1981-1994', 'rural Australian setting'
];

// Question | correct answer | three distractors | difficulty | seven question-specific tags.
// Show name is provided in every question for standalone and mixed-category play.
const rows = [
  `In what year did A Country Practice first premiere on Australian television?|1981|1977|1985|1990|Easy|1981 premiere|November launch|Seven Network|original transmission|Australian television history|1980s launch|programme chronology`,
  `Which Australian television network originally commissioned and broadcast A Country Practice?|Seven Network|Nine Network|Network Ten|ABC Television|Easy|Seven Network|original broadcaster|1981 to 1993|commercial television|James Davern commission|programme origin|Sydney production`,
  `What fictional rural town provides the setting for A Country Practice?|Wandin Valley|Summer Bay|Erinsborough|Mount Thomas|Easy|Wandin Valley|fictional town|rural community|medical drama setting|small town|local hospital|New South Wales`,
  `In which Australian state was A Country Practice originally set?|New South Wales|Queensland|Victoria|South Australia|Easy|New South Wales|Wandin Valley|original location|Australian geography|fictional rural community|1981 to 1993|hospital town`,
  `Which writer and producer created A Country Practice?|James Davern|Reg Watson|Alan Bateman|Bevan Lee|Easy|James Davern|programme creator|series producer|JNP Productions|Australian drama|pilot writer|1981`,
  `What was the original working title of A Country Practice's pilot script?|In General Practice|The Doctors of Wandin|Country Hospital|Valley Stories|Medium|In General Practice|pilot title|James Davern|1979 script competition|series development|original concept|television writing`,
  `Which Australian drama had creator James Davern previously worked on before A Country Practice?|Bellbird|The Sullivans|Home and Away|Blue Heelers|Medium|James Davern|Bellbird|earlier rural soap|ABC Television|creator career|1960s drama|programme development`,
  `Which production company made the original A Country Practice series?|JNP Productions|Grundy Television|Crawford Productions|Southern Star|Medium|JNP Productions|James Davern|production credit|Sydney studios|1980s serial|production company|television industry`,
  `Which Sydney-area community was used for many outdoor scenes of A Country Practice?|Pitt Town|Bondi Beach|Manly|Parramatta CBD|Medium|Pitt Town|filming location|Sydney outskirts|rural exteriors|Wandin Valley portrayal|Hawkesbury area|location shooting`,
  `What was the name of the bush nursing hospital at the centre of A Country Practice?|Wandin Valley Hospital|Summer Bay Hospital|St Vincent's Hospital|Mount Thomas Hospital|Easy|Wandin Valley Hospital|bush nursing|medical centre|fictional hospital|rural health|core location|1980s television`,
  `Alongside its hospital and medical clinic, which other local service features prominently in A Country Practice?|A veterinary surgery|A marine rescue station|An airport terminal|A ski school|Easy|veterinary surgery|Vicky Dean|animal medicine|community services|Wandin Valley|rural practice|story setting`,
  `What was the name of the community club frequently seen in A Country Practice?|The RSL club|The yacht club|The polo club|The stock exchange club|Medium|Returned and Services League|RSL club|local meeting place|Wandin Valley|community life|Australian culture|regular location`,
  `How many episodes aired on the Seven Network during the original run of A Country Practice?|1,058|680|1,388|750|Medium|1058 episodes|Seven Network|1981 to 1993|episode total|original run|Australian TV history|production length`,
  `Which network briefly revived A Country Practice in 1994?|Network Ten|Seven Network|Nine Network|SBS|Easy|Network Ten|1994 revival|network change|final season|television history|cancelled drama|new cast`,
  `How many seasons of A Country Practice are usually counted when the 1994 revival is included?|Fourteen|Eight|Ten|Sixteen|Medium|14 seasons|1994 revival|1981 to 1994|episode guide|series chronology|Seven and Ten|production run`,
  `Which year saw the final episodes of A Country Practice broadcast on the Seven Network?|1993|1988|1990|1996|Medium|1993 finale|Seven Network|original cancellation|Wandin Valley bushfire|network switch|broadcast history|thirteenth season`,
  `In which year was A Country Practice briefly relaunched with a largely new cast?|1994|1991|1996|1998|Easy|1994 revival|Network Ten|Melbourne production|new cast|last run|series return|Australian drama`,
  `Where did A Country Practice move its production base for the 1994 Network Ten version?|Melbourne|Perth|Canberra|Adelaide|Medium|Melbourne|Network Ten|production relocation|1994 revival|Victoria|new filming base|format change`,
  `Which Victorian locality provided exterior locations for the 1994 revival of A Country Practice?|Emerald|Bendigo|Geelong|Ballarat|Hard|Emerald Victoria|Dandenong Ranges|Network Ten locations|1994 filming|Melbourne area|Wandin Valley|outside scenes`,
  `Who composed the instrumental theme music for A Country Practice?|Mike Perjanik|Peter Best|Bruce Rowland|Brian May|Medium|Mike Perjanik|opening theme|instrumental music|series score|TV composer|1981|production credits`,
  `Which UK broadcaster carried A Country Practice when it was sold overseas?|ITV|Sky One only|BBC Four|Channel 5|Medium|ITV network|international sales|United Kingdom broadcast|Australian import|1980s television|overseas audience|distribution`,
  `Which award scheme presented A Country Practice with numerous honours during its original run?|TV Week Logie Awards|Grammy Awards|Tony Awards|Olivier Awards|Easy|Logie Awards|Australian television awards|programme success|TV Week|1980s awards|drama recognition|industry honours`,
  `How many TV Week Logie Awards did A Country Practice win during its original twelve-year Seven Network run?|29|Seven|Twelve|Forty-two|Hard|29 Logies|award total|Seven Network era|national success|TV Week|Australian television|drama honours`,
  `Which hall of fame inducted A Country Practice as a programme in August 2026?|TV Week Logie Awards Hall of Fame|ARIA Hall of Fame|Australian Sports Hall of Fame|National Film Hall of Fame|Medium|2026 induction|Logie Hall of Fame|programme recognition|August 2026|TV Week|Australian heritage|retrospective honour`,
  `In what year was A Country Practice creator James Davern inducted into the Logie Hall of Fame?|1991|1981|2005|2026|Hard|James Davern|1991 Hall of Fame|creator recognition|Logie Awards|television history|individual honour|Australian TV`,
  `Who plays Dr Terence Elliott in A Country Practice?|Shane Porteous|Grant Dodwell|Brian Wenzel|Andrew Blackman|Easy|Shane Porteous|Terence Elliott|senior doctor|original cast|medical practice|1981 debut|lead role`,
  `Which actor plays Dr Simon Bowen in A Country Practice?|Grant Dodwell|Shane Porteous|Nicholas Bufalo|Brett Climo|Easy|Grant Dodwell|Simon Bowen|junior doctor|Vicky husband|original cast|clinical storylines|actor credit`,
  `Which actress portrays veterinary surgeon Vicky Dean in A Country Practice?|Penny Cook|Anne Tenney|Lorrae Desmond|Joan Sydney|Easy|Penny Cook|Vicky Dean|veterinarian|Simon Bowen wife|original cast|animal medicine|actor credit`,
  `Who plays local police sergeant Frank Gilroy in A Country Practice?|Brian Wenzel|Gordon Piper|Syd Heylen|Shane Withington|Easy|Brian Wenzel|Frank Gilroy|country policeman|Shirley partner|original cast|police station|actor credit`,
  `Which performer portrays Shirley Dean who later becomes Shirley Gilroy in A Country Practice?|Lorrae Desmond|Joyce Jacobs|Helen Scott|Joan Sydney|Easy|Lorrae Desmond|Shirley Dean Gilroy|clinic receptionist|Frank wife|original cast|actor credit|medical team`,
  `What is Shirley Dean's main job at the medical practice when A Country Practice begins?|Receptionist|Ambulance driver|Veterinarian|Town mayor|Medium|Shirley Dean|clinic reception|Wandin Valley practice|original role|medical administration|Lorrae Desmond|town resident`,
  `How are Vicky Dean and Shirley Dean related at the beginning of A Country Practice?|Mother and daughter|Twin sisters|Aunt and niece|Cousins|Medium|Vicky Dean|Shirley Dean|mother daughter|family relationship|Penny Cook|Lorrae Desmond|original cast`,
  `Which actor plays Brendan Jones in A Country Practice?|Shane Withington|Shane Porteous|Grant Dodwell|John Tarrant|Easy|Shane Withington|Brendan Jones|Molly husband|nurse|original cast|1980s|actor role`,
  `Which actress portrays Molly Jones in A Country Practice?|Anne Tenney|Penny Cook|Kate Raison|Diane Smith|Easy|Anne Tenney|Molly Jones|leukaemia storyline|Brendan wife|original cast|actor role|1985`,
  `Which profession does Brendan Jones practise in A Country Practice?|Nursing|Veterinary surgery|Policing|Teaching|Medium|Brendan Jones|nurse|Shane Withington|medical team|Molly husband|1980s character|occupation`,
  `Who plays friendly town resident Esme Watson in A Country Practice?|Joyce Jacobs|Joan Sydney|Lorrae Desmond|Wendy Strehlow|Easy|Joyce Jacobs|Esme Watson|Wandin resident|town gossip|community character|recurring cast|actor role`,
  `Who plays the character nicknamed Cookie Locke in A Country Practice?|Syd Heylen|Gordon Piper|Brian Wenzel|Allan Penney|Medium|Syd Heylen|Vernon Locke|Cookie nickname|town regular|1980s|actor casting|comic character`,
  `What is the full first name of the A Country Practice character nicknamed Cookie Locke?|Vernon|Victor|Vincent|Virgil|Medium|Vernon Locke|Cookie Locke|Syd Heylen|character nickname|town resident|supporting character|identity`,
  `Which actor plays Bob Hatfield in A Country Practice?|Gordon Piper|Syd Heylen|Brian Moll|Mark Owen-Taylor|Medium|Gordon Piper|Bob Hatfield|town resident|Cookie friend|supporting cast|1980s series|actor role`,
  `Which actress plays Matron Maggie Sloane in the original A Country Practice?|Joan Sydney|Helen Scott|Mary Regan|Maureen Edwards|Medium|Joan Sydney|Matron Sloane|hospital matron|Maggie|recurring character|actor credit|hospital staff`,
  `What is Matron Sloane's first name in A Country Practice?|Margaret|Martha|Melissa|Marion|Medium|Margaret Sloane|Maggie nickname|hospital matron|Joan Sydney|character name|healthcare|later seasons`,
  `Which actress plays Sister Judy Loveday in A Country Practice?|Wendy Strehlow|Josephine Mitchell|Caroline Johansson|Michelle Pettigrove|Medium|Wendy Strehlow|Judy Loveday|nursing staff|medical team|actor credit|1980s character|hospital`,
  `Who portrays young Jo Loveday who later takes the surname Langley in A Country Practice?|Josephine Mitchell|Georgie Parker|Kym Wilson|Sophie Heathcote|Medium|Josephine Mitchell|Jo Loveday|Jo Langley|young character|family arc|actor credit|1980s`,
  `Which actor plays veterinary surgeon Dr Ben Green in A Country Practice?|Nicholas Bufalo|Grant Dodwell|Michael Muntz|Brett Climo|Medium|Nicholas Bufalo|Ben Green|veterinary surgeon|later cast|1980s medical animals|actor credit|1985 arrival`,
  `Who portrays Dr Alex Fraser who later uses the surname Elliott in A Country Practice?|Diane Smith|Kate Raison|Maureen Edwards|Laura Armstrong|Medium|Diane Smith|Alex Fraser Elliott|doctor|medical practice|Terence relationship|later cast|actor role`,
  `Which actor plays Michael Langley in A Country Practice?|Brett Climo|John Tarrant|Matt Day|Mark Owen-Taylor|Medium|Brett Climo|Michael Langley|Jo Langley|young man|1980s drama|actor credit|recurring cast`,
  `Which actress plays ranger Cathy Hayden in A Country Practice?|Kate Raison|Penny Cook|Georgie Parker|Kym Wilson|Medium|Kate Raison|Cathy Hayden|park ranger|wildlife|later cast|actor credit|1980s`,
  `Which professional role does Cathy Hayden have in A Country Practice?|Park ranger|Police constable|School principal|Matron|Medium|Cathy Hayden|park ranger|Kate Raison|wildlife protection|environment|Wandin Valley|occupation`,
  `Who plays veterinary surgeon Matthew Tyler in A Country Practice?|John Tarrant|Matt Day|Grant Dodwell|Brett Climo|Medium|John Tarrant|Matthew Tyler|vet|Lucy husband|later regular|actor role|1988 onward`,
  `Which actress plays nurse Lucy Gardiner who later marries Matthew Tyler in A Country Practice?|Georgie Parker|Kate Raison|Wendy Strehlow|Michelle Pettigrove|Medium|Georgie Parker|Lucy Gardiner Tyler|nurse|Matt Tyler marriage|later cast|actor role|1989 onward`,
  `Who portrays the character nicknamed Luke Ross in A Country Practice?|Matt Day|Jamie Croft|Jake Davies|John Tarrant|Medium|Matt Day|Julian Ross|Luke nickname|young regular|1989 onward|actor role|character name`,
  `Which actress plays teenager Stephanie 'Steve' Brennan in A Country Practice?|Sophie Heathcote|Kym Wilson|Josephine Mitchell|Georgina Fisher|Medium|Sophie Heathcote|Steve Brennan|Stephanie|teenage character|later seasons|actor role|young cast`,
  `Who plays Dr Cris Kouros in A Country Practice?|Michael Muntz|Andrew Blackman|Shane Porteous|Nicholas Bufalo|Medium|Michael Muntz|Cris Kouros|medical doctor|hospital staff|later cast|actor role|1989`,
  `Which actress plays Jessica 'Jessie' Kouros in A Country Practice?|Georgina Fisher|Diane Smith|Caroline Johansson|Laura Armstrong|Medium|Georgina Fisher|Jessie Kouros|character name|later cast|actor role|family story|1990`,
  `Who portrays Matron Rosemary Prior who later uses the surname Elliott in A Country Practice?|Maureen Edwards|Joan Sydney|Helen Scott|Judith McGrath|Medium|Maureen Edwards|Rosemary Prior|matron|Terence marriage|hospital management|later years|actor role`,
  `Who plays Dr Harry Morrison in the final years of A Country Practice?|Andrew Blackman|Shane Porteous|Michael Muntz|Grant Dodwell|Medium|Andrew Blackman|Harry Morrison|doctor|1994 revival|hospital staff|actor role|final cast`,
  `Who portrays nurse Kate Bryant who later marries Harry Morrison in A Country Practice?|Michelle Pettigrove|Wendy Strehlow|Caroline Johansson|Lorrae Desmond|Medium|Michelle Pettigrove|Kate Bryant Morrison|nurse|Harry marriage|1990s cast|actor role|hospital`,
  `Who plays Darcy Hudson in A Country Practice?|Kym Wilson|Georgie Parker|Kate Raison|Claudia Black|Medium|Kym Wilson|Darcy Hudson|Hudson family|1990s cast|actor role|town resident|late era`,
  `Who portrays Bernice Hudson in A Country Practice?|Judith McGrath|Joyce Jacobs|Joan Sydney|Maureen Edwards|Medium|Judith McGrath|Bernice Hudson|Hudson family|later series|actor role|1990s|Wandin resident`,
  `Who plays Dr Anna Lacey in the final Seven Network series of A Country Practice?|Anne Looby|Diane Smith|Jane Hall|Penny Cook|Medium|Anne Looby|Anna Lacey|doctor|1992 to 1993|later cast|actor role|medical staff`,
  `Which actor plays Billy Moss in A Country Practice?|Jamie Croft|Matt Day|Brett Climo|John Tarrant|Medium|Jamie Croft|Billy Moss|teenage character|later cast|1990s|actor role|young regular`,
  `Which actor plays country police officer Tom Newman in A Country Practice?|Jon Concannon|Brian Wenzel|Gordon Piper|Paul Gleeson|Hard|Jon Concannon|Tom Newman|senior constable|1990s police|later cast|actor credit|local law`,
  `Which actress played the original hospital matron Marta Kertesz in A Country Practice?|Helen Scott|Joan Sydney|Mary Regan|Lorrae Desmond|Hard|Helen Scott|Marta Kertesz|original matron|1981 cast|hospital authority|actor role|early years`,
  `How does Vicky Dean arrive at her wedding to Simon Bowen in A Country Practice?|On the back of a utility truck|In a horse drawn carriage|By helicopter|On a bicycle|Hard|Vicky Dean|Simon Bowen|wedding arrival|ute|1983|From This Day Forward|rural ceremony`,
  `Why is Vicky nearly late to her wedding in A Country Practice?|She is helping an injured horse|She has lost the wedding rings|Her car is stolen|She is attending a court hearing|Hard|Vicky Dean|veterinary emergency|injured horse|1983 wedding|Simon Bowen|country vet|rural episode`,
  `Which two characters form a prominent police officer and receptionist romance in A Country Practice?|Frank Gilroy and Shirley Dean|Bob Hatfield and Esme Watson|Simon Bowen and Molly Jones|Luke Ross and Matron Sloane|Medium|Frank Gilroy|Shirley Dean|long term romance|marriage|sergeant|receptionist|Wandin Valley couple`,
  `Which couple are parents to Chloe Jones in A Country Practice?|Molly and Brendan Jones|Simon and Vicky Bowen|Frank and Shirley Gilroy|Harry and Kate Morrison|Medium|Molly Jones|Brendan Jones|Chloe Jones|family|daughter|parenthood|1980s storyline`,
  `What illness is Molly Jones diagnosed with in A Country Practice?|Leukaemia|Motor neurone disease|Multiple sclerosis|Tuberculosis|Easy|Molly Jones|leukaemia|terminal cancer|1985|Anne Tenney|major storyline|medical drama`,
  `In which year did Molly Jones die in A Country Practice?|1985|1982|1989|1993|Medium|Molly Jones|1985 death|leukaemia storyline|iconic moment|Anne Tenney|season five|episode history`,
  `Who is Molly Jones's husband when she dies in A Country Practice?|Brendan Jones|Simon Bowen|Terence Elliott|Bob Hatfield|Easy|Molly Jones|Brendan Jones|husband|Shane Withington|bereavement|1985 finale|family`,
  `Which child is flying a kite with Brendan at the end of Molly Jones's storyline in A Country Practice?|Chloe Jones|Jo Loveday|Jessica Kouros|Darcy Hudson|Medium|Chloe Jones|Brendan Jones|Molly death|kite scene|1985|daughter|farewell sequence`,
  `What is Molly doing in the famous final scene of her illness storyline in A Country Practice?|Sitting in her garden watching her family fly a kite|Driving away from Wandin Valley|Working at the hospital reception|Walking into the local pub|Medium|Molly farewell|garden|kite scene|leukaemia|1985|Anne Tenney|Brendan and Chloe`,
  `Which two-part episode of A Country Practice marks the death of Anne Tenney's character?|Molly|The Last Goodbye|Homecoming|After the Fire|Medium|Molly episode|season five|1985|two part story|leukaemia|Anne Tenney|final scenes`,
  `For how many weeks was Molly Jones's terminal illness storyline developed in A Country Practice?|Thirteen|Two|Six|Twenty-six|Hard|Molly Jones|13 week arc|leukaemia|1985 drama|production decision|long storyline|viewing impact`,
  `Before her illness in A Country Practice, what was Molly Jones particularly known for supporting?|Environmental causes|Professional motor racing|Space exploration|Property speculation|Medium|Molly Jones|environmentalist|animal welfare|green issues|Anne Tenney|rural lifestyle|1980s`,
  `Which A Country Practice nurse dies in a road accident in the 1987 storyline?|Donna Manning|Judy Loveday|Kate Bryant|Shirley Gilroy|Medium|Donna Manning|1987 death|car crash|hospital staff|Mozart Rules|road safety|tragedy`,
  `Which two-part A Country Practice story features the car-crash death of nurse Donna Manning?|Mozart Rules|From This Day Forward|Molly|Listen to the Children|Hard|Mozart Rules|Donna Manning|1987|season seven|traffic accident|nurse death|episode title`,
  `Which longtime A Country Practice character dies off screen in a plane crash in 1992?|Shirley Gilroy|Esme Watson|Vicky Bowen|Maggie Sloane|Medium|Shirley Gilroy|plane crash|1992|Lorrae Desmond|offscreen death|Frank grief|long running role`,
  `What type of accident causes Shirley Gilroy's death in A Country Practice?|A plane crash|A train derailment|A house fire|A boating accident|Medium|Shirley Gilroy|aircraft crash|1992|offscreen story|character exit|Frank Gilroy|tragedy`,
  `Which A Country Practice doctor loses his daughter Sophie to a heroin overdose?|Terence Elliott|Simon Bowen|Harry Morrison|Cris Kouros|Medium|Terence Elliott|Sophie Elliott|heroin overdose|father daughter|Sophie episodes|1988|medical family`,
  `Who portrays Terence Elliott's daughter Sophie in A Country Practice?|Katrina Sedgwick|Georgie Parker|Josephine Mitchell|Sophie Heathcote|Hard|Katrina Sedgwick|Sophie Elliott|1988|drug addiction|guest actress|Terence daughter|story arc`,
  `Which illegal drug causes the death of Sophie Elliott in A Country Practice?|Heroin|Cocaine|Cannabis|Methamphetamine|Medium|Sophie Elliott|heroin|overdose death|1988|Terence Elliott|addiction portrayal|tragedy`,
  `In which A Country Practice storyline does the death of Terence Elliott's daughter feature?|Sophie|Molly|Mozart Rules|Birthright|Medium|Sophie episodes|season eight|Terence Elliott|daughter|heroin addiction|overdose|1988`,
  `Which Australian Indigenous activist plays pastor Steve Murray in A Country Practice?|Gary Foley|Ernie Dingo|David Gulpilil|Aaron Pedersen|Hard|Gary Foley|Steve Murray|pastor|Indigenous land rights|season nine|guest actor|1989`,
  `Whom does pastor Steve Murray encourage to work in an Indigenous community in A Country Practice?|Dr Alex Fraser|Nurse Kate Bryant|Dr Simon Bowen|Matron Maggie Sloane|Hard|Steve Murray|Alex Fraser|Indigenous healthcare|Gary Foley|1989|community doctor|social storyline`,
  `Which 1982 A Country Practice story examined a same-sex couple facing discrimination?|Mates|The Mountain|Molly|Mozart Rules|Hard|Mates|1982|Doug and Keith|gay relationship|medical rights|social issues|two part episode`,
  `What relationship do town shopkeepers Doug and Keith conceal in A Country Practice's Mates storyline?|They are partners rather than brothers|They are father and son|They are former police officers|They are business rivals|Medium|Mates|Doug and Keith|1982|same sex relationship|prejudice|community|shopkeepers`,
  `Which real-life Australian prime minister appeared as himself in a 1986 A Country Practice episode?|Bob Hawke|John Howard|Paul Keating|Malcolm Fraser|Medium|Bob Hawke|prime minister cameo|1986|anti nuclear war|Listen to the Children|political guest|school protest`,
  `What issue prompts Wandin Valley school students to organise a concert in A Country Practice's Listen to the Children?|Fear of nuclear war|A ban on school uniforms|A shortage of sporting trophies|The price of cinema tickets|Medium|Listen to the Children|nuclear war|1986|school pupils|peace campaign|Bob Hawke cameo|protest concert`,
  `Which celebrity cameo in A Country Practice occurs in the storyline Listen to the Children?|Prime Minister Bob Hawke|Prime Minister John Howard|Singer Kylie Minogue|Cricketer Don Bradman|Medium|Listen to the Children|Bob Hawke|1986|school campaign|real life politician|guest star|peace protest`,
  `Which actress appeared in an early A Country Practice guest role involving aerosol inhalation dangers?|Nicole Kidman|Cate Blanchett|Margot Robbie|Toni Collette|Medium|Nicole Kidman|guest appearance|inhalants|aerosol sniffing|early career|social issue|guest star`,
  `Which future film actress appeared in A Country Practice in an early screen role as a pregnant teenager?|Toni Collette|Nicole Kidman|Naomi Watts|Rose Byrne|Hard|Toni Collette|pregnant teenager|guest part|early screen work|teen pregnancy|Australian actors|guest star`,
  `Which theatrical star made a late screen appearance as a ballet dancer in A Country Practice?|Robert Helpmann|John Bell|Geoffrey Rush|Barry Humphries|Hard|Robert Helpmann|ballet dancer|guest role|late career|Australian stage|television guest|storyline`,
  `What type of Australian animal was the beloved character Fatso in A Country Practice?|Wombat|Koala|Kangaroo|Echidna|Easy|Fatso|wombat|native wildlife|animal star|Vicky Dean|Wandin Valley|fan favourite`,
  `What was the name of the pig that became a popular animal character in A Country Practice?|Doris|Daisy|Mabel|Rosie|Medium|Doris pig|animal character|farm life|Wandin Valley|rural animals|series mascot|original cast`,
  `What name was given to the wombat which replaced the first Fatso in A Country Practice?|George|Garth|Basil|Clive|Hard|George wombat|Fatso replacement|animal actor|1986 to 1990|wombat role|production trivia|wildlife`,
  `Which wombat took over the role of Fatso after George in A Country Practice?|Garth|Doris|Rufus|Barney|Hard|Garth wombat|Fatso character|1990 onward|third animal actor|recast|wombat|production trivia`,
  `Which natural disaster devastates Wandin Valley Hospital at the conclusion of the Seven Network run of A Country Practice?|A bushfire|An earthquake|A cyclone|A flood|Medium|1993 finale|hospital destruction|bushfire|Wandin Valley|Seven Network|disaster story|final episode`,
  `Which couple marry amid the bushfire events around A Country Practice's original Seven Network finale?|Terence Elliott and Rosemary Prior|Simon Bowen and Vicky Dean|Frank Gilroy and Esme Watson|Matthew Tyler and Cathy Hayden|Medium|Terence Elliott|Rosemary Prior|1993|wedding|bushfire|Seven finale|matron doctor`,
  `Which character marries Dr Terence Elliott in the later years of A Country Practice?|Matron Rosemary Prior|Vicky Dean|Nurse Donna Manning|Cathy Hayden|Medium|Rosemary Prior|Terence Elliott|hospital matron|marriage|1993 finale|Maureen Edwards|relationship`,
  `What happened to Wandin Valley Hospital in the final Seven Network episode of A Country Practice?|It was destroyed by fire|It was sold to a private company|It was turned into a school|It was moved across the state line|Medium|Wandin Valley Hospital|1993|bushfire|Seven Network ending|hospital loss|finale|disaster`,
  `How was the cast of A Country Practice mainly changed for its 1994 Network Ten revival?|Most regulars were replaced|Every original actor returned|The cast consisted only of children|The programme became animated|Medium|Network Ten|new cast|1994|Melbourne|programme relaunch|recasting|revival changes`,
  `Which three Seven Network regulars returned as full-time leads for the 1994 A Country Practice revival?|Joan Sydney Joyce Jacobs and Andrew Blackman|Shane Porteous Grant Dodwell and Penny Cook|Brian Wenzel Lorrae Desmond and Anne Tenney|Shane Withington Syd Heylen and Gordon Piper|Hard|Joan Sydney|Joyce Jacobs|Andrew Blackman|1994 revival|Maggie Morrison|Esme Watson|Harry Morrison`,
  `In the 1994 A Country Practice revival, which character was played by Vince Colosimo?|Danny Sabatini|Harry Morrison|Ian McIntyre|Tom Newman|Medium|Vince Colosimo|Danny Sabatini|1994|Network Ten|actor role|new cast|Wandin Valley`,
  `Which actress portrays Dr Jess Morrison in A Country Practice's 1994 Network Ten revival?|Jane Hall|Claudia Black|Laura Armstrong|Michelle Pettigrove|Medium|Jane Hall|Jess Morrison|doctor|1994|Network Ten|actor casting|medical role`,
  `Who portrays Claire Bonacci during the final original episodes and the 1994 A Country Practice revival?|Claudia Black|Georgie Parker|Kym Wilson|Kate Raison|Medium|Claudia Black|Claire Bonacci|1994 revival|crossover cast|Seven finale|actor role|Network Ten`,
  `Which actor plays Ian McIntyre in the 1994 episodes of A Country Practice?|Paul Gleeson|Andrew Blackman|Vince Colosimo|Gordon Piper|Hard|Paul Gleeson|Ian McIntyre|Network Ten|1994|crossover character|actor role|final series`,
  `Which long-established A Country Practice character remained in the 1994 Network Ten revival as the town's resident busybody?|Esme Watson|Molly Jones|Shirley Gilroy|Vicky Dean|Medium|Esme Watson|Joyce Jacobs|1994|returning character|town gossip|Network Ten|cast continuity`,
  `Which earlier A Country Practice matron returned to prominence in the 1994 revival, now known as Maggie Morrison?|Margaret Sloane|Marta Kertesz|Rosemary Prior|Ann Brennan|Medium|Maggie Morrison|Margaret Sloane|Joan Sydney|1994|Network Ten|matron|character continuity`,
  `Which actress joined the 1994 A Country Practice revival as Georgie Wilkes?|Laura Armstrong|Jane Hall|Claudia Black|Kym Wilson|Hard|Laura Armstrong|Georgie Wilkes|Network Ten|1994|new character|actor casting|revival`,
  `What was the main role of Andrew Blackman's continuing character in the 1994 A Country Practice revival?|Doctor|Police sergeant|Park ranger|Veterinarian|Medium|Andrew Blackman|Harry Morrison|medical doctor|1994|Network Ten|returning character|hospital`,
  `Which award was presented to A Country Practice's creator in 2014 for his contributions to television?|Medal of the Order of Australia|Academy Award|Booker Prize|Nobel Prize|Hard|James Davern|Order of Australia|OAM|2014 honour|creator career|national recognition|television industry`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 407: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 407: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('A Country Practice')
    ? stem
    : `In A Country Practice, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 407: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 407: expected 13 distinct tags at row ${index + 1}`);
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
