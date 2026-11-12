
// PuzzlePilot - Big Quiz - Pack 396
// Normal People (2020): complete 12-episode BBC Three / Hulu miniseries.
// Complete WordPad-ready CommonJS file. First ID: tv_21640.
'use strict';

const FIRST_ID = 21640;
const commonTags = ['television', 'British TV', 'BBC Three', 'Normal People', 'Sally Rooney', 'romantic drama'];

// Each row: question | correct answer | three distractors | difficulty | seven precise tags.
// All questions explicitly name Normal People when exported for standalone play.
const rows = [
  // Series, principal cast and production
  `Which author wrote the 2018 novel on which the TV drama Normal People is based?|Sally Rooney|Alice Birch|Anna Burns|Naoise Dolan|Easy|2020 adaptation|2018 novel|literary source|Irish author|screen adaptation|novel authorship|book origins`,
  `Who plays Connell Waldron in Normal People?|Paul Mescal|Fionn O'Shea|Desmond Eastwood|Sebastian de Souza|Easy|2020|Paul Mescal|Connell Waldron|leading actor|male protagonist|casting|student`,
  `Who plays Marianne Sheridan in Normal People?|Daisy Edgar-Jones|India Mullen|Eliot Salt|Aoife Hinds|Easy|2020|Daisy Edgar-Jones|Marianne Sheridan|leading actress|female protagonist|casting|student`,
  `Which Irish town provides the fictional home setting for Connell and Marianne?|Carricklea|Ballykissangel|Kilkenny|Letterkenny|Medium|2020|Carricklea|fictional town|County Sligo|secondary school|Irish setting|home life`,
  `Which Dublin university do Connell and Marianne both attend?|Trinity College Dublin|University College Cork|Dublin City University|Maynooth University|Easy|2020|Trinity College Dublin|university setting|Connell student|Marianne student|Dublin campus|higher education`,
  `Who plays Connell's mother Lorraine in Normal People?|Sarah Greene|Aislín McGuckin|Niamh Lynch|Leah McNamara|Easy|2020|Sarah Greene|Lorraine Waldron|Connell mother|cleaner|principal cast|family`,
  `Which actress portrays Marianne's mother Denise Sheridan?|Aislín McGuckin|Sarah Greene|India Mullen|Eliot Salt|Hard|2020|Aislin McGuckin|Denise Sheridan|Marianne mother|family tensions|casting|actor role`,
  `Who plays Marianne's brother Alan Sheridan in Normal People?|Frank Blake|Eanna Hardwicke|Sean Doyle|Kwaku Fortune|Medium|2020|Frank Blake|Alan Sheridan|Marianne brother|abusive sibling|actor role|family`,
  `Which production company made Normal People for the BBC and Hulu?|Element Pictures|Left Bank Pictures|Bad Wolf|Red Production Company|Medium|2020|Element Pictures|BBC Hulu co-production|Irish company|television production|production credits|adaptation`,
  `Who directed the first six episodes of Normal People?|Lenny Abrahamson|Hettie Macdonald|Alice Birch|Mark O'Rowe|Medium|2020|episodes 1 to 6|Lenny Abrahamson|director|first half|production team|Irish filmmaker`,
  `Who directed the final six episodes of Normal People?|Hettie Macdonald|Lenny Abrahamson|Sally Rooney|Catherine Magee|Medium|2020|episodes 7 to 12|Hettie Macdonald|director|second half|production team|British filmmaker`,
  `Which platform first carried Normal People in the United States?|Hulu|Netflix|HBO Max|Amazon Prime Video|Medium|2020|Hulu|United States|streaming release|US broadcaster|distribution|international premiere`,
  `Which screenwriter adapted Normal People alongside Sally Rooney and Mark O'Rowe?|Alice Birch|Abi Morgan|Michaela Coel|Phoebe Waller-Bridge|Hard|2020|Alice Birch|screenwriting|Sally Rooney collaborator|Mark O Rowe|adaptation credits|television scripts`,

  // Episode 1: first attraction in rural Ireland
  `What job does Lorraine do for Marianne's family when Connell and Marianne are still at school?|Cleaner|Private tutor|Gardener|Personal chef|Easy|2020|episode 1|Lorraine Waldron|Sheridan household|domestic work|class difference|first encounters`,
  `How does Connell's social standing at school contrast with Marianne's at the start of the series?|He is popular while she is isolated|He is new while she is head girl|Both are equally unpopular|She is a sports star while he is bullied|Easy|2020|episode 1|school popularity|Connell Waldron|Marianne Sheridan|peer pressure|social contrast`,
  `What kind of athlete is Connell in his school years?|A Gaelic football player|A competitive swimmer|A tennis player|A long-distance cyclist|Medium|2020|episode 1|school sports|Gaelic football|Connell Waldron|popular athlete|Irish school life`,
  `Why does Connell initially insist on keeping his relationship with Marianne secret?|He fears his school friends' reaction|He has promised to move abroad|Their families have forbidden any contact|He is engaged to someone else|Easy|2020|episode 1|Connell Waldron|Marianne Sheridan|secret relationship|classmates|fear of judgement`,
  `Which character is more willing to be open about the attraction at the beginning?|Marianne Sheridan|Connell Waldron|Rachel Moran|Lorraine Waldron|Medium|2020|episode 1|Marianne Sheridan|first attraction|relationship secrecy|school dynamics|emotional honesty`,
  `Which parent is raising Connell without a partner in Normal People?|Lorraine Waldron|Denise Sheridan|Peggy|Gillian|Medium|2020|episode 1|single mother|Lorraine Waldron|Connell upbringing|family background|social class`,

  // Episode 2: intensifying secrecy
  `What major step do Marianne and Connell take together during Episode 2?|They sleep together for the first time|They move into a Dublin flat|They get engaged|They start a joint business|Medium|2020|episode 2|first intimacy|secret romance|Connell Waldron|Marianne Sheridan|relationship development`,
  `Which girl in Connell's school friendship group is frustrated by his lack of romantic interest?|Rachel Moran|Karen|Joanna|Helen Brophy|Easy|2020|episode 2|Rachel Moran|school friend|Connell Waldron|romantic attention|peer relationships`,
  `Who plays Rachel Moran in Normal People?|Leah McNamara|Niamh Lynch|India Mullen|Aoife Hinds|Hard|2020|episode 2|Leah McNamara|Rachel Moran|school cast|Connell peer|casting`,
  `Which aspect of Connell's family life does he avoid discussing candidly with school friends?|His mother's work at Marianne's home|His father's job at the university|His parents' inherited mansion|His younger sister's career|Medium|2020|episode 2|Lorraine cleaner|Connell Waldron|class anxiety|school friends|family employment`,
  `Who questions Marianne about her unexplained absences from home during the secret affair?|Her brother Alan|Her lecturer Gareth|Her friend Joanna|Connell's housemate Niall|Medium|2020|episode 2|Alan Sheridan|Marianne Sheridan|family surveillance|private relationship|home tensions`,
  `What is the main strain on Connell and Marianne's romance in Episode 2?|Keeping it hidden from their classmates|A disagreement over their university courses|A long-distance move to Sweden|An argument about inherited property|Easy|2020|episode 2|social secrecy|school reputation|Connell Marianne|relationship pressures|teenage romance`,

  // Episode 3: the Debs betrayal
  `What Irish school social occasion is approaching in Episode 3?|The Debs|A university graduation|A Christmas formal|A school sports final|Easy|2020|episode 3|the Debs|school dance|final year|fundraising event|classmates`,
  `Which classmate shows Marianne kindness at the Debs fundraising event?|Karen|Rachel|Peggy|Helen|Medium|2020|episode 3|Karen|Niamh Lynch|fundraising night|Marianne Sheridan|school friendship`,
  `Who does Connell invite to the Debs instead of Marianne?|Rachel Moran|Karen|Joanna|Peggy|Easy|2020|episode 3|Rachel Moran|Connell betrayal|Debs invitation|Marianne heartbreak|school dance`,
  `How does Marianne respond to Connell's public snub before the Debs?|She withdraws from school|She immediately transfers to Trinity|She announces her engagement|She leaves Ireland permanently|Medium|2020|episode 3|Marianne withdrawal|Connell betrayal|school absence|friendship breakdown|social isolation`,
  `Who challenges Connell about how badly he has treated Marianne?|His mother Lorraine|Marianne's mother Denise|His friend Rob|The university counsellor|Easy|2020|episode 3|Lorraine Waldron|Connell Waldron|parental rebuke|Marianne Sheridan|moral accountability`,
  `Which school friend later tells Connell that his friends knew about the secret relationship?|Eric|Gareth|Jamie|Niall|Medium|2020|episode 3|Eric|Sean Doyle|school friends|secret affair discovered|Connell regret`,
  `What does Eric's admission reveal about Connell's fear of being judged?|His friends would not have rejected him for dating Marianne|His friends had planned to expel him|They had never heard of Marianne|They believed Marianne had left Ireland|Hard|2020|episode 3|Eric confession|peer acceptance|Connell regret|imagined rejection|Debs aftermath`,

  // Episode 4: Trinity reunion
  `Where do Connell and Marianne unexpectedly reconnect after leaving school?|At a party in Dublin|At an Italian airport|At a school reunion in Sligo|At a Swedish art exhibition|Easy|2020|episode 4|Dublin party|Trinity College|unexpected reunion|Connell Marianne|student social life`,
  `Who is Marianne dating when Connell meets her again at university?|Gareth|Jamie|Lukas|Niall|Easy|2020|episode 4|Gareth|Marianne boyfriend|Trinity social circle|relationship reunion|college life`,
  `Which student invites Connell to the party where he encounters Marianne again?|Gareth|Rob|Alan|Eric|Medium|2020|episode 4|Gareth|Connell classmate|college party|Marianne reunion|new social circle`,
  `Which actor plays Marianne's early university boyfriend Gareth?|Sebastian de Souza|Fionn O'Shea|Desmond Eastwood|Clinton Liberty|Hard|2020|episode 4|Sebastian de Souza|Gareth|college boyfriend|actor role|Dublin cast`,
  `What is the name of Connell's university housemate who helps him settle in?|Niall|Jamie|Rob|Kiernan|Easy|2020|episode 4|Niall|Trinity housemate|Connell friend|Dublin accommodation|Desmond Eastwood`,
  `What reversal of their school experience is obvious at Trinity College?|Marianne is socially confident while Connell feels isolated|Connell is a celebrity while Marianne has no friends|Both have left their studies|Marianne is expelled while Connell becomes a tutor|Medium|2020|episode 4|Trinity College|Marianne popularity|Connell isolation|class differences|social reversal`,
  `What arrangement do Connell and Marianne agree to after their university reunion?|They will try being friends|They will never speak again|They will live together immediately|They will drop out and travel|Medium|2020|episode 4|friendship agreement|Connell Waldron|Marianne Sheridan|reconnection|university years`,

  // Episode 5: apology and new romance
  `What does Connell apologise to Marianne for in Episode 5?|His treatment of her at school|Losing a borrowed necklace|Insulting her brother during a visit|Selling her university textbooks|Easy|2020|episode 5|Connell apology|school betrayal|Marianne Sheridan|past mistakes|emotional reconciliation`,
  `Which boyfriend does Marianne decide to leave as she grows closer to Connell?|Gareth|Lukas|Jamie|Rob|Easy|2020|episode 5|Gareth breakup|Marianne Sheridan|Trinity romance|Connell reconnection|relationship change`,
  `Who among Marianne's college friends is attracted to her while Connell is back in her life?|Jamie|Niall|Rob|Eric|Medium|2020|episode 5|Jamie|Fionn O Shea|Marianne admirer|student circle|romantic complication`,
  `Which actress plays Marianne's friend Peggy at Trinity?|India Mullen|Eliot Salt|Aoife Hinds|Leah McNamara|Hard|2020|episode 5|India Mullen|Peggy|Trinity friends|student social circle|cast`,
  `Which actress portrays Marianne's supportive university friend Joanna?|Eliot Salt|India Mullen|Daisy Edgar-Jones|Sarah Greene|Medium|2020|episode 5|Eliot Salt|Joanna|college friend|Trinity College|cast credit`,
  `What social obstacle remains for Connell as he joins Marianne's friends in Dublin?|He feels he does not belong among their privileged circle|He cannot speak their language|They are all practising police officers|He is forbidden from attending parties|Medium|2020|episode 5|Connell Waldron|wealth differences|Trinity friends|social discomfort|class gap`,

  // Episode 6: mistaken breakup
  `What employment setback disrupts Connell's finances in Episode 6?|He loses his job|His business closes after a fire|He is suspended without pay from the police|He loses a publishing contract|Easy|2020|episode 6|Connell job loss|Dublin rent|financial hardship|student employment|economic pressure`,
  `Why does Connell move back to Sligo during the summer in Episode 6?|He cannot afford his rent in Dublin|He has accepted a full-time teaching job|His university closes permanently|He has inherited a family farm|Medium|2020|episode 6|Connell Waldron|Sligo return|rent problem|summer break|job redundancy`,
  `What does Connell struggle to ask Marianne for when he faces the rent crisis?|A place to stay in her home|A reference for a new university|Her car for a long journey|Money to buy a train company|Hard|2020|episode 6|Connell pride|Marianne flat|accommodation request|communication failure|relationship misunderstanding`,
  `Which family member physically mistreats Marianne during a difficult visit home?|Her brother Alan|Connell's housemate Niall|Her college friend Jamie|Her lecturer Gareth|Easy|2020|episode 6|Alan Sheridan|Marianne Sheridan|family abuse|home visit|difficult relationship`,
  `What is the underlying cause of Connell and Marianne's breakup around Episode 6?|A misunderstanding about his housing and summer plans|A disagreement over having children|An argument about a missing passport|An affair with their university tutor|Medium|2020|episode 6|miscommunication|Dublin housing|summer separation|Connell Marianne|emotional distance`,
  `What area of college life has Connell become more confident in before the breakup?|Giving class presentations and performing academically|Playing on the national football team|Running the students' union|Teaching art history courses|Medium|2020|episode 6|class presentations|Connell progress|university achievement|academic confidence|Trinity College`,

  // Episode 7: scholarships and realisation
  `Which of Marianne's college friends becomes her boyfriend after she and Connell separate?|Jamie|Gareth|Niall|Rob|Easy|2020|episode 7|Jamie relationship|Marianne Sheridan|post breakup|Trinity friends|Fionn O Shea`,
  `Which woman is Connell dating by the end of Episode 7?|Helen Brophy|Rachel Moran|Joanna|Peggy|Easy|2020|episode 7|Helen Brophy|Connell girlfriend|new relationship|university romance|Aoife Hinds`,
  `Which academic achievement do both Connell and Marianne earn during Episode 7?|A Trinity College scholarship|A joint doctorate|A Fulbright fellowship|An Oxford rowing award|Medium|2020|episode 7|Trinity Scholars|academic scholarships|Connell Waldron|Marianne Sheridan|college achievement`,
  `What happens to Connell shortly before he visits Marianne's home in Episode 7?|He is mugged and injured|He falls from a bicycle during a race|He is arrested at a protest|He is hospitalised with pneumonia|Medium|2020|episode 7|Connell mugging|Dublin assault|Marianne apartment|injury|campus life`,
  `What do Connell and Marianne finally understand about their earlier split?|They each misunderstood what the other meant about his summer move|Their parents had secretly arranged the separation|Their classmates intercepted their letters|Their universities forbade their relationship|Hard|2020|episode 7|misunderstanding clarified|summer rent|Connell Marianne|relationship regret|failed communication`,
  `Which religious memorial does Connell offer to attend with Marianne back in Sligo?|A Mass marking the anniversary of her father's death|A baptism for her nephew|A wedding blessing for Lorraine|A funeral for her lecturer|Hard|2020|episode 7|Marianne father|anniversary mass|Sligo meeting|family bereavement|Connell support`,
  `Who plays Marianne's new boyfriend Jamie in Normal People?|Fionn O'Shea|Sebastian de Souza|Paul Mescal|Desmond Eastwood|Hard|2020|episode 7|Fionn O Shea|Jamie|Marianne boyfriend|college cast|actor role`,

  // Episode 8: Italy
  `In which country is Marianne staying at her family's holiday home during Episode 8?|Italy|France|Spain|Sweden|Easy|2020|episode 8|Italy|Marianne summer home|holiday visit|Connell travel|European setting`,
  `Which friend travels with Connell to Marianne's Italian holiday home?|Niall|Rob|Eric|Gareth|Easy|2020|episode 8|Niall|Connell travel companion|backpacking Europe|Italian visit|friendship`,
  `Who is Marianne dating during the strained group visit to Italy?|Jamie|Gareth|Lukas|Eric|Easy|2020|episode 8|Jamie|Marianne boyfriend|Italian villa|controlling behaviour|holiday conflict`,
  `Which of Marianne's female university friends is also visiting the Italian home?|Peggy|Rachel|Karen|Helen|Medium|2020|episode 8|Peggy|India Mullen|Italian holiday|college social circle|group dinner`,
  `What triggers the tense argument around the dinner table at Marianne's Italian home?|Jamie's controlling treatment of Marianne|Connell insulting Italian cooking|Niall losing everyone's passports|Peggy announcing a surprise wedding|Medium|2020|episode 8|dinner quarrel|Jamie|Marianne Sheridan|belittling behaviour|relationship tension`,
  `Where does Marianne turn for support after the dinner confrontation in Italy?|To Connell|To Lukas|To Gareth|To her brother Alan|Medium|2020|episode 8|Marianne Sheridan|Connell comfort|Italian villa|Jamie argument|emotional safety`,

  // Episode 9: Sweden
  `In which country does Marianne spend her exchange year in Episode 9?|Sweden|Italy|Germany|Denmark|Easy|2020|episode 9|Sweden|Erasmus exchange|Marianne Sheridan|study abroad|student life`,
  `What is the name of the photographer Marianne dates during her time abroad?|Lukas|Gareth|Jamie|Niall|Easy|2020|episode 9|Lukas|Marianne partner|student photographer|Sweden|unhealthy relationship`,
  `What is Lukas's occupation or creative pursuit in Episode 9?|Photography|Architecture|Veterinary medicine|Music production|Medium|2020|episode 9|Lukas|photography|artistic practice|portraits|Swedish student`,
  `Which actor plays Lukas, Marianne's boyfriend in Sweden?|Lancelot Ncube|Clinton Liberty|Sebastian de Souza|Fionn O'Shea|Hard|2020|episode 9|Lancelot Ncube|Lukas|Sweden cast|photographer character|actor role`,
  `What incident leads Marianne to end her relationship with Lukas?|A disturbing encounter during a photographic shoot|He sells her university textbooks|He decides to move to Dublin unexpectedly|He reveals he has been secretly married|Medium|2020|episode 9|Lukas breakup|photography session|Marianne boundaries|harmful relationship|consent`,
  `Who becomes uneasy about Connell's continuing closeness to Marianne while they are apart?|Helen Brophy|Lorraine Waldron|Peggy|Rachel Moran|Medium|2020|episode 9|Helen Brophy|Connell girlfriend|long distance friendship|jealousy|Marianne contact`,
  `How do Connell and Marianne continue supporting each other while she studies abroad?|They keep in regular contact from different countries|They work together in the same laboratory|They stop speaking for the whole year|They travel together on a school trip|Easy|2020|episode 9|long distance support|Connell Waldron|Marianne Sheridan|letters and messages|emotional bond`,

  // Episode 10: grief and mental health
  `Which friend of Connell from school dies before the events of Episode 10?|Rob Hegarty|Niall|Gareth|Jamie|Easy|2020|episode 10|Rob Hegarty|school friend|bereavement|Connell Waldron|emotional crisis`,
  `What is the cause of Rob Hegarty's death in Normal People?|Suicide|A road accident|A climbing fall|A heart condition|Medium|2020|episode 10|Rob Hegarty|suicide|mental health|school reunion|bereavement`,
  `What kind of professional help does Connell seek as he struggles after Rob's death?|University counselling|A private detective|A sports injury clinic|A financial adviser|Easy|2020|episode 10|Connell Waldron|counselling|grief|mental health support|Trinity College`,
  `Which actress plays Connell's therapist Gillian in Normal People?|Noma Dumezweni|Sarah Greene|Aislín McGuckin|Eliot Salt|Hard|2020|episode 10|Noma Dumezweni|Gillian|counsellor|mental health|actor role`,
  `What happens to Connell's relationship with Helen as his depression deepens?|Helen breaks up with him|They get engaged|They move to Sweden together|She becomes his university tutor|Medium|2020|episode 10|Helen Brophy|relationship breakup|Connell depression|Rob death|emotional withdrawal`,
  `How does Marianne continue to help Connell while living abroad in Episode 10?|She speaks with him over video calls|She takes a job at his counselling centre|She moves into his family home|She pays for his trip to America|Medium|2020|episode 10|Marianne support|video calls|Connell grief|long distance friendship|mental health`,
  `Which actor plays Connell's deceased school friend Rob?|Éanna Hardwicke|Seán Doyle|Desmond Eastwood|Kwaku Fortune|Hard|2020|episode 10|Eanna Hardwicke|Rob Hegarty|school friend cast|bereavement storyline|actor role`,

  // Episode 11: family violence and support
  `Which family member attacks Marianne and breaks her nose in Episode 11?|Alan Sheridan|Connell Waldron|Jamie|Gareth|Easy|2020|episode 11|Alan Sheridan|Marianne assault|broken nose|family abuse|home in Sligo`,
  `Who comes to Marianne's aid after her brother's attack in Episode 11?|Connell Waldron|Jamie|Lukas|Rob Hegarty|Easy|2020|episode 11|Connell Waldron|Marianne rescue|Alan confrontation|protective friendship|family crisis`,
  `What does Connell tell Alan after helping Marianne leave the family house?|He must never hurt Marianne again|He must repay a university loan|He should move to Sweden|He must stop playing football|Medium|2020|episode 11|Connell warning|Alan Sheridan|protecting Marianne|family violence|confrontation`,
  `How does Marianne's mother Denise respond to Alan's mistreatment of her daughter?|She fails to protect Marianne|She immediately has Alan arrested|She moves abroad with Marianne|She expels Alan from the house|Medium|2020|episode 11|Denise Sheridan|parental neglect|Alan Sheridan|Marianne safety|dysfunctional household`,
  `In which home region do Marianne and Connell spend much of their time together in Episode 11?|Sligo|Galway|Cork|Belfast|Medium|2020|episode 11|Sligo|summer return|Connell Marianne|Irish setting|reconnected friends`,
  `How does Marianne's experience with Alan affect her family ties by the end of Episode 11?|She becomes estranged from her family|She moves back into the house permanently|She reconciles with Alan immediately|She inherits the family business|Medium|2020|episode 11|Marianne estrangement|Alan Sheridan|Denise Sheridan|family rupture|personal boundaries`,

  // Episode 12: final choice
  `At whose home does Marianne spend Christmas in the final episode?|Connell and Lorraine's home|Jamie's family mansion|Lukas's flat in Sweden|Gareth's university house|Easy|2020|episode 12|Christmas gathering|Lorraine Waldron|Marianne Sheridan|Connell family|belonging`,
  `What is the state of Connell and Marianne's romantic relationship in the final episode?|They are together as a couple|They have never resumed speaking|They are both engaged to other people|They have married in secret|Easy|2020|episode 12|couple reunited|Connell Waldron|Marianne Sheridan|final year|relationship stability`,
  `What opportunity is Connell offered towards the end of Normal People?|A creative-writing programme in New York|A full-time football contract in London|A law scholarship in Paris|An archaeology post in Rome|Easy|2020|episode 12|writing opportunity|New York|Connell Waldron|postgraduate study|career decision`,
  `What academic subject does Connell hope to pursue in New York?|Creative writing|Biomedical science|Political economy|Architecture|Medium|2020|episode 12|creative writing|MFA programme|Connell interests|literary ambition|New York education`,
  `How long is the New York writing programme Connell is offered in the finale?|One year|Three months|Four years|Two weeks|Medium|2020|episode 12|one year|New York MFA|Connell offer|study duration|future plans`,
  `How does Marianne respond to Connell's chance to study abroad in the finale?|She encourages him to take the opportunity|She demands that he refuse it|She secretly destroys the acceptance letter|She enrols him in a different course|Medium|2020|episode 12|Marianne encouragement|Connell New York|supportive choice|relationship future|personal growth`,
  `Where does Marianne choose to remain when Connell considers his American offer?|Ireland|Sweden|United States|Italy|Medium|2020|episode 12|Marianne Sheridan|stays in Ireland|independent choice|Connell departure|open ending`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 396: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 396: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('Normal People')
    ? stem
    : `In Normal People, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 396: repeated answer at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 396: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
