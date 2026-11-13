
// PuzzlePilot - Big Quiz - Pack 402
// The Missing - Series 2 (BBC One, 2016): all eight episodes.
// Complete WordPad-ready CommonJS file. First ID: tv_22312.
'use strict';

const FIRST_ID = 22312;
const commonTags = ['television', 'British TV', 'BBC One', 'The Missing', 'Series 2 (2016)', 'crime mystery'];

// Row: question | correct answer | three distractors | difficulty | seven specific tags.
// Questions name The Missing for mixed-category and standalone play.
const rows = [
  "Who portrays the father Sam Webster in The Missing's second series?|David Morrissey|James Nesbitt|Roger Allam|Derek Riddell|Easy|Sam Webster|David Morrissey|Alice father|British Army|casting|lead actor|Webster family",
  "Which actress plays Alice's mother Gemma Webster in The Missing?|Keeley Hawes|Frances O Connor|Laura Fraser|Lia Williams|Easy|Gemma Webster|Keeley Hawes|Alice mother|lead actress|casting|family tragedy|2016 drama",
  "Who returns as French detective Julien Baptiste for The Missing's second series?|Tcheky Karyo|Jason Flemyng|Johan Leysen|Roger Allam|Easy|Tcheky Karyo|Julien Baptiste|returning detective|French investigator|recurring cast|Sophie Giroux case|2016",
  "Which actress plays the young woman who initially claims to be Alice Webster in The Missing?|Abigail Hardingham|Chelsea Edge|Keeley Hawes|Laura Fraser|Medium|Abigail Hardingham|Sophie Giroux|Alice impersonation|actress|2014 return|identity deception|casting",
  "Which actress portrays the real adult Alice Webster in The Missing?|Chelsea Edge|Abigail Hardingham|Lia Williams|Laura Fraser|Hard|Chelsea Edge|real Alice Webster|captive survivor|actor credit|finale|2016 rescue|casting",
  "Who plays the Websters' son Matthew in The Missing?|Jake Davies|Daniel Ezra|Florian Bartholomai|Conrad Khan|Medium|Jake Davies|Matthew Webster|Alice brother|Webster son|casting|teenager|family conflict",
  "Who portrays Brigadier Adrian Stone in The Missing?|Roger Allam|David Morrissey|Brian Bovell|Derek Riddell|Medium|Roger Allam|Adrian Stone|brigadier|army officer|1991 Iraq|casting|Eve father",
  "Which actress portrays Adrian Stone's daughter Eve in The Missing?|Laura Fraser|Keeley Hawes|Lia Williams|Anastasia Hille|Easy|Laura Fraser|Eve Stone|army sergeant|Adrian daughter|Sam affair|actor role|2016",
  "Which actress plays Nadia Herz in The Missing?|Lia Williams|Anastasia Hille|Keeley Hawes|Laura Fraser|Medium|Lia Williams|Nadia Herz|former commanding officer|Kristian wife|Gulf War|casting|Iraq past",
  "Who portrays the German butcher Kristian Herz in The Missing?|Filip Peeters|Florian Bartholomai|Olafur Darri Olafsson|Roger Allam|Medium|Filip Peeters|Kristian Herz|butcher|wrongly accused|Eckhausen|casting|2014",
  "Who plays German detective Jorn Lenhart in The Missing?|Florian Bartholomai|Filip Peeters|Jake Davies|Daniel Ezra|Medium|Florian Bartholomai|Jorn Lenhart|German policeman|Julien colleague|Adam Gettrick|casting|investigation",
  "Which actor plays army press officer Adam Gettrick in The Missing?|Derek Riddell|Roger Allam|Brian Bovell|David Morrissey|Medium|Derek Riddell|Adam Gettrick|army press officer|abductor|actor role|2016|Eckhausen",
  "Who portrays Lieutenant Colonel Henry Reed in The Missing?|Brian Bovell|Roger Allam|Daniel Ezra|Jason Flemyng|Hard|Brian Bovell|Henry Reed|army medic|Daniel father|1991 Iraq|actor role|death",
  "Which actor plays missing soldier Daniel Reed in The Missing?|Daniel Ezra|Jake Davies|Brian Bovell|Florian Bartholomai|Medium|Daniel Ezra|Daniel Reed|Henry son|AWOL soldier|Iraq|actor role|2016",
  "Who plays war journalist Stefan Andersen in The Missing?|Olafur Darri Olafsson|Derek Riddell|Filip Peeters|Tcheky Karyo|Hard|Olafur Darri Olafsson|Stefan Andersen|reporter|Iraq contact|actor role|Kirkuk|Julien investigation",
  "Who plays Julien Baptiste's wife Celia in The Missing's second series?|Anastasia Hille|Lia Williams|Laura Fraser|Keeley Hawes|Easy|Anastasia Hille|Celia Baptiste|Julien wife|returning character|brain tumour|actor role|family",
  "Which director handled all eight episodes of The Missing's second series?|Ben Chanan|Tom Shankland|Jakob Verbruggen|Marc Evans|Medium|Ben Chanan|director|eight episodes|production credits|2016|second series|directing credit",
  "Which writers created the two series of The Missing?|Harry and Jack Williams|Jed Mercurio and Peter Morgan|Chris Chibnall and Sally Wainwright|Mark Gatiss and Steven Moffat|Easy|Harry Williams|Jack Williams|creators|screenwriters|BBC drama|2014 to 2016|production",
  "How many episodes were shown in The Missing's second series?|Eight|Six|Ten|Twelve|Easy|episode count|eight part story|2016|original broadcast|series length|programme format|finale",
  "Which European country is the main setting for The Missing's second series?|Germany|France|Belgium|Switzerland|Easy|Germany|British army garrison|Eckhausen|2003|2014|2016|setting",
  "What fictional German town hosts the Webster family's army community in The Missing?|Eckhausen|Chalons du Bois|Vaaren|Stuttgart|Medium|Eckhausen|German setting|fictional location|British garrison|Webster family|abduction|town",
  "Which broadcaster premiered The Missing's second series in the UK?|BBC One|BBC Two|ITV|Channel 4|Easy|public broadcaster|UK broadcaster|October 2016|programme history|original network|network premiere|first run",
  "In which month of 2016 did The Missing's second series begin on BBC One?|October|January|April|December|Medium|October 2016|12 October|series premiere|broadcast date|BBC schedule|autumn drama|episode guide",
  "Which country was used to film many scenes in The Missing's second series despite its German setting?|Belgium|Sweden|Italy|Norway|Hard|Belgium|Malmedy|Ghent|filming locations|production geography|German scenes|2016",
  "What is the title of the opening episode of The Missing's second series?|Come Home|The Mountain|Statice|Saint John|Easy|Come Home|episode 1|12 October 2016|opening episode|Alice reappears|episode title|broadcast",
  "Which episode of The Missing's second series is called The Turtle and the Stick?|Episode two|Episode four|Episode six|Episode eight|Medium|The Turtle and the Stick|episode 2|19 October 2016|Adrian Stone|storytelling|episode order|German inquiry",
  "What is the title of The Missing's second-series third episode?|A Prison Without Walls|The Meeting|Gone Fishing|Into the Sand|Medium|A Prison Without Walls|episode 3|26 October 2016|Sophie Giroux|shed fire|episode title|BBC guide",
  "Which title belongs to episode four of The Missing's second series?|Statice|Molly|Concrete|Eden|Medium|Statice|episode 4|2 November 2016|flowers|Henry Reed|episode title|BBC guide",
  "What German-language title belongs to the fifth episode of The Missing's second series?|Das Vergessen|Vertrouwen|Die Reise|Der Anfang|Hard|Das Vergessen|episode 5|9 November 2016|German title|Jorn Lenhart|episode title|broadcast",
  "Which episode of The Missing's second series is called Saint John?|The sixth|The first|The third|The eighth|Medium|Saint John|episode 6|16 November 2016|health crisis|Julien Baptiste|episode order|2016",
  "What is the title of the seventh episode of The Missing's second series?|1991|2003|2014|2016|Medium|1991|episode 7|23 November 2016|Iraq flashback|military secret|episode title|timeline",
  "Which title belongs to the final episode of The Missing's second series?|The Mountain|Come Home|The Meeting|Return to Eden|Easy|The Mountain|episode 8|30 November 2016|series finale|Switzerland|episode title|ending",
  "In what year does Alice Webster originally disappear in The Missing's second series?|2003|1991|2006|2014|Easy|2003|Alice Webster|abduction year|German town|British garrison|timeline|child disappearance",
  "Which family member of Gemma Webster has been missing for eleven years at the start of The Missing's second story?|Her daughter Alice|Her son Matthew|Her husband Sam|Her sister Eve|Easy|Gemma Webster|Alice Webster|mother daughter|eleven years|2014 return|family grief|missing girl",
  "In which year does a young woman claiming to be Alice Webster reappear in The Missing?|2014|2003|2016|1991|Easy|2014|Sophie impersonation|returned girl|eleven years later|Christmas|Eckhausen|timeline",
  "In what physical state is the returning girl when she reaches Eckhausen in The Missing?|Barefoot and seriously ill|Fully fit and neatly dressed|Unconscious in a hospital bed|Wearing an army uniform|Easy|Sophie Giroux|barefoot return|illness|German streets|2014|hospitalisation|reappearance",
  "Which acute illness leads the returning girl to need urgent surgery in The Missing?|Appendicitis|Pneumonia|Meningitis|Kidney failure|Medium|Sophie Giroux|appendicitis|2014|hospital operation|medical clue|Gettrick plan|impostor",
  "Who are the parents of the girl Alice Webster whose disappearance drives The Missing's second story?|Sam and Gemma Webster|Adrian and Eve Stone|Henry and Nadia Reed|Julien and Celia Baptiste|Easy|Sam Webster|Gemma Webster|Alice parents|married couple|army family|Eckhausen|family tree",
  "What branch of the British armed forces employs Sam Webster in The Missing?|The Army|The Navy|The Royal Air Force|The Royal Marines only|Easy|Sam Webster|British Army|captain|German garrison|Eckhausen|soldier|2014",
  "Which other missing girl does the young woman claiming to be Alice say she was held with in The Missing?|Sophie Giroux|Lena Garber|Lucy Gettrick|Laura Chambers|Easy|Sophie Giroux|Alice impersonator|fellow captive|French girl|abduction|2014 statement|investigation",
  "Of which nationality is missing teenager Sophie Giroux in The Missing?|French|German|British|Dutch|Medium|Sophie Giroux|France|Remy Giroux|missing daughter|2003|Julien Baptiste|nationality",
  "Who had originally investigated Sophie Giroux's disappearance before the events of The Missing Series 2?|Julien Baptiste|Sam Webster|Jorn Lenhart|Adrian Stone|Easy|Julien Baptiste|Sophie Giroux|missing person detective|French investigation|2003|old case|connection",
  "What is the name of Sophie's father whom Julien approaches about the old case in The Missing?|Remy Giroux|Adrian Stone|Kristian Herz|Henry Reed|Hard|Remy Giroux|Sophie father|French family|Julien meeting|episode 3|reopened case|2014",
  "What unusual mark does the returned girl possess that apparently supports her claim to be Alice in The Missing?|A spider tattoo|A scar shaped like a star|A birthmark on her forehead|A dragon tattoo on her neck|Hard|spider tattoo|Alice Webster|Sophie disguise|identity claim|2014|physical resemblance|deception",
  "What is the true identity of the woman who returns to the Websters in 2014 in The Missing?|Sophie Giroux|Lena Garber|Eve Stone|Nadia Herz|Medium|Sophie Giroux|Alice Webster impersonation|identity twist|Adam Gettrick|2014|true identity|false return",
  "Where is the real Alice Webster being held while Sophie pretends to be her in The Missing?|In Adam Gettrick's captivity|In a police witness-protection house|At a Parisian boarding school|With the French Giroux family|Medium|real Alice Webster|Adam Gettrick|captive girl|secret cellar|2014|finale truth|false identity",
  "Why does Sophie briefly leave captivity and pretend to be Alice in The Missing?|She needs urgent treatment for appendicitis|She has won her freedom in court|She is recruited by undercover police|She is searching for a missing passport|Medium|Sophie Giroux|appendicitis|false Alice|Adam Gettrick|medical emergency|2014|captivity",
  "Which family member struggles with anger and isolation following the return of the supposed Alice in The Missing?|Matthew Webster|Sam Webster|Adrian Stone|Daniel Reed|Medium|Matthew Webster|anger|teenage brother|family strain|Sophie Giroux|2014|trauma",
  "What place does Sophie identify as where she and other children were kept captive in The Missing?|An abandoned wartime bunker|An empty football stadium|An underground train station|A disused lighthouse|Medium|wartime bunker|Sophie Giroux|Alice Webster|captivity claim|2014|Julien Baptiste|investigation",
  "What item found at the bunker points investigators towards local butcher Kristian Herz in The Missing?|A receipt|A gold necklace|A passport|A train ticket|Medium|bunker receipt|Kristian Herz|police clue|butcher|2014|investigation|physical evidence",
  "What is Kristian Herz's occupation in The Missing?|Butcher|Hotelier|Dentist|Journalist|Easy|Kristian Herz|butcher shop|Eckhausen|false suspect|Nadia husband|2014|employment",
  "Which local man is falsely identified as Alice's captor and imprisoned in The Missing?|Kristian Herz|Stefan Andersen|Jorn Lenhart|Daniel Reed|Medium|Kristian Herz|false identification|wrongful imprisonment|Sophie Giroux|2014|framed suspect|German police",
  "Which powerful Army officer tells Sophie a threatening fable during The Missing's investigation?|Adrian Stone|Sam Webster|Henry Reed|Daniel Reed|Medium|Adrian Stone|fable|Sophie intimidation|2014|military secret|fear|Brigadier",
  "Who tells Sophie to use a garden shed as part of the deception in The Missing?|Adam Gettrick|Julien Baptiste|Remy Giroux|Jorn Lenhart|Medium|Adam Gettrick|garden shed|Sophie Giroux|staged death|burning body|2014|plot",
  "What does Sophie ask her supposed brother Matthew to do before the shed fire in The Missing?|Lock her inside the shed|Drive her to France|Hide her passport|Introduce her to a reporter|Medium|Matthew Webster|Sophie Giroux|shed lock|2014|staged death|family manipulation|fire",
  "What happens to the garden shed at the Webster home in The Missing?|It is destroyed by fire|It collapses in a storm|It is torn down by the Army|It is flooded by a burst pipe|Easy|Webster garden|shed fire|2014|false death|Sam Webster|Sophie escape|arson",
  "Who suffers severe burns attempting to rescue the girl from the shed fire in The Missing?|Sam Webster|Matthew Webster|Julien Baptiste|Jorn Lenhart|Medium|Sam Webster|shed fire|serious burns|2014|rescue attempt|hospital|father",
  "Whose remains are actually placed in the burnt shed in The Missing?|Lena Garber's|Sophie Giroux's|Alice Webster's|Eve Stone's|Medium|Lena Garber|burned body|shed fire|Adam Gettrick|2014|forensic deception|third girl",
  "Which additional missing young woman is discovered in roller-coaster photographs in The Missing?|Lena Garber|Lucy|Eve Stone|Sara Baptiste|Medium|Lena Garber|third captive|roller coaster pictures|Gemma Webster|2016 investigation|identity clue|missing girl",
  "What kind of attraction provides photographic evidence of the three captive girls in The Missing?|A roller coaster|A Ferris wheel|A water slide|A cable car|Medium|roller coaster|holiday photographs|Alice Webster|Sophie Giroux|Lena Garber|Gemma evidence|fairground",
  "Which character spends hours checking amusement-ride photographs for evidence in The Missing?|Gemma Webster|Eve Stone|Nadia Herz|Celia Baptiste|Medium|Gemma Webster|ride photos|maternal investigation|2016|three missing girls|search|new clue",
  "What is the name of the amusement-park ride whose photographs Gemma studies in The Missing?|Der Werwolf|The Big One|Nemesis|The Smiler|Hard|Der Werwolf|roller coaster|German theme park|photographic evidence|Gemma Webster|three captives|2016",
  "Which plant gives an episode of The Missing Series 2 its title and becomes a clue near a grave?|Statice|Lavender|Foxglove|Snowdrop|Medium|statice flowers|episode 4|Henry Reed grave|Sophie Giroux|2014|cemetery clue|floral evidence",
  "At whose grave are the distinctive flowers left during the investigation in The Missing?|Henry Reed's|Adrian Stone's|Julien Baptiste's|Sam Webster's|Hard|Henry Reed|cemetery|statice|murder investigation|Sophie Giroux|2014|grave",
  "Which soldier's death is initially presented as suicide in The Missing?|Henry Reed's|Daniel Reed's|Sam Webster's|Adam Gettrick's|Medium|Henry Reed|apparent suicide|army medic|2014|concealed murder|father|investigation",
  "Who is revealed to have murdered Henry Reed to protect the abduction scheme in The Missing?|Adam Gettrick|Kristian Herz|Sam Webster|Daniel Reed|Medium|Adam Gettrick|Henry Reed|murder|cover up|2014|Iraq blackmail|army officer",
  "Who helps Julien investigate Henry Reed's suspicious death in Eckhausen in The Missing?|Jorn Lenhart|Georges Deloix|Malik Suri|Mark Walsh|Medium|Jorn Lenhart|Julien Baptiste|German detective|Reed murder|2014|partnership|police inquiry",
  "What happens to police officer Jorn Lenhart after discovering Gettrick's hidden child in The Missing?|Gettrick kills him with a drill|He is transferred to the French police|He escapes to Iraq|He is arrested as the kidnapper|Medium|Jorn Lenhart|Adam Gettrick|fatal attack|power drill|Gettrick home|2016|investigation",
  "What clue does a small child give Jorn about Gettrick's house in The Missing?|A drawing of herself and her mother in a cellar|A letter showing a Swiss address|A photograph of Remy Giroux|A recording of the Iraq mission|Medium|Lucy|drawing|cellar|Jorn Lenhart|mother|Adam Gettrick|2016 clue",
  "Which small girl lives with Adam Gettrick in the later timeline of The Missing?|Lucy|Molly|Laura|Sara|Easy|Lucy|Adam Gettrick|child|secret household|Sophie daughter|2016|captor home",
  "Who is Lucy's mother in The Missing's second series?|Sophie Giroux|Alice Webster|Gemma Webster|Eve Stone|Medium|Lucy|Sophie Giroux|mother daughter|captivity|Adam Gettrick|2016|reunion",
  "Who is the father of Sophie's young daughter Lucy in The Missing?|Adam Gettrick|Remy Giroux|Sam Webster|Kristian Herz|Hard|Lucy|Adam Gettrick|Sophie Giroux|father|sexual exploitation|captivity|family",
  "In which country does Julien travel to find soldier Daniel Reed in The Missing?|Iraq|Belgium|Morocco|Switzerland|Easy|Julien Baptiste|Iraq|Daniel Reed|missing soldier|2016 journey|investigation|Kirkuk",
  "Near which Iraqi city does Julien search for Daniel Reed in The Missing?|Kirkuk|Baghdad|Basra|Mosul|Medium|Kirkuk|Iraq setting|AWOL soldier|Julien Baptiste|Stefan Andersen|2016|wartime region",
  "Which local fighting force detains Julien during his attempt to find Daniel Reed in The Missing?|Peshmerga soldiers|French Foreign Legion|Dutch police|Swiss border guards|Hard|Peshmerga|Julien Baptiste|Kirkuk|Iraq|2016|armed group|detention",
  "What does Daniel Reed reveal his father had secretly been paying for years in The Missing?|Compensation to Mirza Barzani|An army pension for Sam Webster|School fees for Sophie|A reward for a missing dog|Hard|Daniel Reed|Henry Reed|Mirza Barzani|secret payments|1991 Iraq|compensation|family guilt",
  "Who receives regular payments from Henry Reed after the Iraq incident in The Missing?|Mirza Barzani|Kristian Herz|Remy Giroux|Stefan Andersen|Medium|Mirza Barzani|Henry Reed|Iraq 1991|compensation payments|family deaths|2016 lead|bank records",
  "Which British army officer's worsening memory makes him an unreliable witness in The Missing?|Adrian Stone|Sam Webster|Adam Gettrick|Daniel Reed|Medium|Adrian Stone|dementia|memory loss|2016|army secrets|Iraq 1991|Brigadier",
  "Which medical condition is Julien Baptiste diagnosed with in The Missing's second series?|A brain tumour|Lung cancer|Parkinson's disease|Multiple sclerosis|Easy|Julien Baptiste|brain tumour|2016|health crisis|neurology|medical treatment|finale surgery",
  "What medical procedure does Julien undergo after the final events of The Missing's second series?|Brain surgery|A kidney transplant|Knee replacement|Heart bypass surgery|Medium|Julien Baptiste|brain surgery|brain tumour|2016 finale|hospital|treatment|survival uncertainty",
  "Which conflict in the early 1990s contains the event linking Stone Reed and Gettrick in The Missing?|The Gulf War|The Falklands War|The Bosnian War|The Kosovo War|Medium|1991|Gulf War|Iraq|British Army|Adrian Stone|Henry Reed|Adam Gettrick",
  "Which year is revisited to reveal an Army cover-up behind the abductions in The Missing?|1991|1979|2006|2014|Easy|1991|Iraq flashback|military cover up|Henry Reed|Adrian Stone|Adam Gettrick|episode seven",
  "Who is the third soldier connected to the 1991 Iraq incident alongside Henry Reed and Adrian Stone in The Missing?|Adam Gettrick|Sam Webster|Daniel Reed|Kristian Herz|Medium|Adam Gettrick|Adrian Stone|Henry Reed|Iraq secret|1991|third man|Julien discovery",
  "Who was the commanding officer in Iraq who initially refused permission to search for missing soldier Gettrick in The Missing?|Nadia Herz|Eve Stone|Gemma Webster|Celia Baptiste|Hard|Nadia Herz|1991 Iraq|commanding officer|Adam Gettrick|military orders|refused search|Kristian wife",
  "Which two soldiers go to find Gettrick against orders during the Iraq flashback in The Missing?|Adrian Stone and Henry Reed|Sam Webster and Daniel Reed|Matthew Webster and Jorn Lenhart|Julien Baptiste and Stefan Andersen|Medium|Adrian Stone|Henry Reed|Iraq rescue|1991|disobey orders|Adam Gettrick|pair",
  "Why does an Iraqi father hold Adam Gettrick prisoner in the 1991 flashback of The Missing?|Gettrick sexually abused his young daughter|Gettrick stole his taxi|Gettrick destroyed his shop in an accident|Gettrick arrested his son for theft|Hard|Adam Gettrick|Iraqi father|sexual abuse|1991|captivity|Stone rescue|Henry Reed",
  "What catastrophe follows the soldiers' intervention at a house in Iraq in The Missing?|An innocent young girl dies in a fire|An army helicopter crashes nearby|A dam bursts and floods the town|An earthquake destroys the village|Medium|1991 Iraq|house fire|Mirza sister|child death|military cover up|Stone|Reed",
  "What is the name of the Iraqi man whose family tragedy Julien traces back to 1991 in The Missing?|Mirza Barzani|Kristian Herz|Stefan Andersen|Remy Giroux|Medium|Mirza Barzani|Iraq witness|1991 fire|family loss|Henry Reed|payments|Julien",
  "How old was Mirza Barzani's sister when she died in the Iraq house fire in The Missing?|Nine|Thirteen|Sixteen|Twenty-one|Hard|Mirza sister|nine years old|1991 Iraq|house fire|child victim|Stone and Reed|military secret",
  "Which military figure is revealed to have exploited the Iraq secret to frame Kristian Herz in The Missing?|Adam Gettrick|Daniel Reed|Sam Webster|Nadia Herz|Medium|Adam Gettrick|Kristian Herz|Iraq blackmail|false suspect|abduction case|Nadia Herz|revenge",
  "Who is really responsible for the abductions of Alice Webster and Sophie Giroux in The Missing?|Adam Gettrick|Kristian Herz|Adrian Stone|Henry Reed|Medium|Adam Gettrick|Alice Webster|Sophie Giroux|kidnapper|captivity|identity reveal|2016",
  "What work does Adam Gettrick do at the British army base in The Missing?|Press officer|Head surgeon|Military chaplain|Football coach|Medium|Adam Gettrick|press officer|army communications|British base|Eckhausen|cover identity|kidnapper",
  "What 2015 family secret does Sam Webster reveal to Gemma later in The Missing?|He has had an affair with Eve Stone|He is Julien Baptiste's brother|He has fathered Sophie Giroux's child|He arranged Alice's return|Hard|Sam Webster|Eve Stone|affair|Gemma marriage|2015|family conflict|Army",
  "Which character is revealed to be pregnant by Sam Webster during The Missing's later timeline?|Eve Stone|Sophie Giroux|Nadia Herz|Celia Baptiste|Medium|Eve Stone|Sam Webster|pregnancy|affair|2016|Adrian daughter|relationship",
  "Which officer's father is beaten by Matthew Webster after revelations about the old case in The Missing?|Eve Stone's|Nadia Herz's|Gemma Webster's|Celia Baptiste's|Medium|Eve Stone|Adrian Stone|Matthew Webster|care home|assault|2016|family retaliation",
  "What vehicle does Matthew steal in The Missing, prompting Sam to take the blame?|An Army Land Rover|A police motorcycle|A civilian ambulance|A school minibus|Medium|Matthew Webster|Army Land Rover|Sam Webster|2015|theft|father protects son|family",
  "Where does Adam Gettrick take Alice and Sophie as the investigation closes in during The Missing?|Switzerland|Scotland|Spain|Denmark|Easy|Switzerland|Adam Gettrick|Alice Webster|Sophie Giroux|escape|2016|finale",
  "What is the name of the fictional Swiss town linked to Gettrick's mountain hideaway in The Missing?|Vaaren|Eckhausen|Chalons du Bois|Saint Marie|Medium|Vaaren|Switzerland|mountain hideout|Adam Gettrick|final chase|2016|location",
  "Which parent joins Julien in the final search for their daughter in The Missing?|Gemma Webster|Nadia Herz|Celia Baptiste|Mary Garrett|Easy|Gemma Webster|Julien Baptiste|Alice rescue|Switzerland|finale|mother|search",
  "Who shoots Sam Webster during the pursuit in The Missing's final episode?|Adam Gettrick|Kristian Herz|Julien Baptiste|Adrian Stone|Medium|Sam Webster|Adam Gettrick|gunshot|Switzerland|finale|fatal wound|rescue",
  "What happens to Sam Webster following the shooting in The Missing's second-series finale?|He dies from his injuries|He makes a full recovery|He escapes to Iraq|He is imprisoned for fraud|Medium|Sam Webster|fatal shooting|Adam Gettrick|2016|finale death|Gemma Webster|Switzerland",
  "What happens to Adam Gettrick at the end of The Missing's second series?|Police arrest him|He escapes to Belgium|He dies in the mountain cabin|He becomes a witness in another case|Medium|Adam Gettrick|arrest|Swiss police|finale|abductor|justice|2016",
  "What happens to the real Alice Webster in The Missing's final episode?|She is rescued alive|She dies in the garden fire|She is sent to prison|She emigrates to Iraq|Easy|Alice Webster|rescue|Switzerland|2016|Gemma Webster|survivor|finale",
  "What is the fate of Sophie Giroux at the end of The Missing's second series?|She is reunited with her father|She is permanently missing|She is imprisoned for kidnapping|She marries Sam Webster|Easy|Sophie Giroux|Remy Giroux|reunion|survivor|finale|France|2016",
  "Whom does Sophie Giroux introduce to her father for the first time in The Missing's finale?|Her daughter Lucy|Her sister Lena|Her husband Adam|Her friend Gemma|Medium|Remy Giroux|Lucy|Sophie daughter|grandfather|family reunion|2016|finale",
  "What happens to the man wrongly imprisoned for the girls' abduction at the end of The Missing?|Kristian Herz is released|Kristian Herz escapes custody|He receives another prison sentence|He is appointed Army press officer|Medium|Kristian Herz|wrongful imprisonment|release|false identification|Adam Gettrick|2016|exoneration",
  "Which character reveals to investigators that Lena Garber was murdered and placed in the shed in The Missing?|Adam Gettrick|Julien Baptiste|Sam Webster|Matthew Webster|Medium|Adam Gettrick|Lena Garber|confession|shed body|murder|identity deception|finale",
  "How do Swiss police learn where to reach Julien during the final operation in The Missing?|Eve Stone traces his phone|An army helicopter spots him|Gemma sends a postcard|A television broadcast gives his address|Hard|Eve Stone|phone trace|Swiss police|Julien Baptiste|mountain rescue|2016|finale",
  "What kind of storytelling structure distinguishes The Missing's second series?|Interwoven timelines and flashbacks|A single real time overnight episode|Unconnected weekly detective cases|A documentary interview format|Easy|nonlinear storytelling|2003|2014|2015|2016|flashbacks|mystery structure"
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 402: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 402: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('The Missing')
    ? stem
    : `In The Missing, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 402: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 402: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
