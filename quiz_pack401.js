
// PuzzlePilot - Big Quiz - Pack 401
// The Missing - Series 1 (BBC One, 2014): all eight episodes.
// Complete WordPad-ready CommonJS file. First ID: tv_22210.
'use strict';

const FIRST_ID = 22210;
const commonTags = ['television', 'British TV', 'BBC One', 'The Missing', 'Series 1 (2014)', 'crime mystery'];

// Question | correct answer | three distractors | difficulty | seven specific tags.
// Every exported question identifies The Missing for standalone and mixed play.
const rows = [
  `Who plays Tony Hughes in The Missing's first series?|James Nesbitt|Jason Flemyng|Ken Stott|David Morrissey|Easy|James Nesbitt|Tony Hughes|Oliver father|lead actor|2014 cast|holiday tragedy|series 1`,
  `Which actress plays Oliver's mother Emily Hughes in The Missing?|Frances O'Connor|Keeley Hawes|Anastasia Hille|Emilie Dequenne|Easy|Frances O Connor|Emily Hughes|Oliver mother|Tony wife|casting|parental grief|series 1`,
  `Which actor portrays French detective Julien Baptiste in The Missing?|Tcheky Karyo|Said Taghmaoui|Eric Godon|Johan Leysen|Easy|Tcheky Karyo|Julien Baptiste|French detective|lead investigator|missing child|casting|series 1`,
  `Who plays the British liaison officer Mark Walsh in The Missing?|Jason Flemyng|James Nesbitt|Arsher Ali|Ken Stott|Medium|Jason Flemyng|Mark Walsh|British policeman|Emily partner|liaison officer|casting|2014`,
  `Which actor plays wealthy benefactor Ian Garrett in The Missing?|Ken Stott|Jason Flemyng|John Lynch|Clive Francis|Easy|Ken Stott|Ian Garrett|property developer|charity benefactor|casting|hidden crimes|series 1`,
  `Who portrays French police officer Laurence Relaud in The Missing?|Emilie Dequenne|Astrid Whettnall|Frances O'Connor|Anastasia Hille|Medium|Emilie Dequenne|Laurence Relaud|local police|French investigator|Tony supporter|casting|2014`,
  `Which actor plays corrupt officer Khalid Ziane in The Missing?|Said Taghmaoui|Arsher Ali|Titus De Voogdt|Eric Godon|Medium|Said Taghmaoui|Khalid Ziane|police corruption|missing evidence|actor role|Julien colleague|2014`,
  `Who portrays journalist Malik Suri in The Missing?|Arsher Ali|Jason Flemyng|Ken Stott|James Nesbitt|Medium|Arsher Ali|Malik Suri|investigative journalist|paid leaks|casting|blackmail|series 1`,
  `Which actor plays early suspect Vincent Bourg in The Missing?|Titus De Voogdt|Jean-Francois Wolff|Eric Godon|Johan Leysen|Medium|Titus De Voogdt|Vincent Bourg|local suspect|sex offender|casting|2014 storyline|investigation`,
  `Which actress plays Rini Dalca in The Missing?|Anamaria Marinca|Emilie Dequenne|Anastasia Hille|Astrid Whettnall|Medium|Anamaria Marinca|Rini Dalca|undercover contact|witness|casting|Romanian traffickers|series 1`,
  `Who portrays the town mayor Georges Deloix in The Missing?|Eric Godon|Jean-Francois Wolff|Titus De Voogdt|Ken Stott|Medium|Eric Godon|Georges Deloix|mayor|Alain brother|cover up|actor credit|2014`,
  `Who plays Julien Baptiste's wife Celia in The Missing?|Anastasia Hille|Frances O'Connor|Emilie Dequenne|Diana Quick|Medium|Anastasia Hille|Celia Baptiste|Julien wife|Sara mother|family difficulties|actor role|series 1`,
  `Which actor plays hotel owner Alain Deloix in The Missing?|Jean-Francois Wolff|Eric Godon|Johan Leysen|Titus De Voogdt|Hard|Jean-Francois Wolff|Alain Deloix|Hotel Eden|recovering alcoholic|cast|finale|2014`,
  `Who portrays Alain Deloix's wife Sylvie in The Missing?|Astrid Whettnall|Anamaria Marinca|Diana Quick|Emilie Dequenne|Hard|Astrid Whettnall|Sylvie Deloix|Alain wife|hotel family|actor credit|Chalons du Bois|series 1`,
  `Which actor plays trafficking suspect Karl Sieg in The Missing?|Johan Leysen|Eric Godon|Ken Stott|Jean-Francois Wolff|Hard|Johan Leysen|Karl Sieg|human trafficker|van evidence|casting|2014 search|Romanian gang`,
  `Which actor plays the child Oliver Hughes in The Missing?|Oliver Hunt|Macauley Keeper|Adam Thomas Wright|Conrad Khan|Medium|Oliver Hunt|Oliver Hughes|child actor|missing boy|2006 scenes|series 1 cast|family`,
  `Which brothers wrote the first series of The Missing?|Harry and Jack Williams|Anthony and Joe Russo|Steven and Mark Gatiss|Matt and Ross Duffer|Easy|Harry Williams|Jack Williams|brother writers|series creators|screenwriting|BBC drama|production`,
  `Who directed all eight episodes of The Missing's first series?|Tom Shankland|Ben Chanan|David Yates|Jakob Verbruggen|Medium|Tom Shankland|series 1 director|2014|filmmaking|eight episodes|production|direction`,
  `Which UK television channel first broadcast The Missing in 2014?|BBC One|BBC Two|ITV|Channel 4|Easy|UK network|original broadcaster|2014 debut|British television|scheduling|first transmission|series 1`,
  `How many episodes make up The Missing's first series?|Eight|Six|Ten|Twelve|Easy|eight part drama|2014|series 1|episode count|BBC commission|programme format|run length`,
  `Which month and year saw The Missing premiere on BBC One?|October 2014|October 2016|February 2015|March 2019|Medium|28 October 2014|BBC premiere|series 1|broadcast history|launch date|autumn drama|2014`,
  `Which 2019 BBC drama spun off from The Missing to follow its French detective Julien?|Baptiste|The Fall|Unforgotten|Luther|Easy|Julien Baptiste|Baptiste spin off|2019|Harry Williams|Jack Williams|character legacy|BBC franchise`,
  `Which company co-produced The Missing alongside Company Pictures?|New Pictures|Kudos|Tiger Aspect|World Productions|Medium|New Pictures|Company Pictures|original TV commission|2014 production|Two Brothers Pictures|credit|co production`,
  `Which country stood in for much of France during filming of The Missing's first series?|Belgium|Switzerland|Austria|Ireland|Medium|Belgium|filming location|Huy|Charleroi|Brussels|production geography|French setting`,
  `Which musical group performed The Missing's opening theme Come Home?|Amatorski|London Grammar|Massive Attack|Portishead|Hard|Amatorski|Come Home|theme music|opening credits|Belgian band|soundtrack|2014`,
  `Who composed the original score for The Missing?|Dominik Scherrer|Hans Zimmer|David Arnold|Michael Price|Hard|Dominik Scherrer|television score|composer|2014|original music|production credits|soundtrack`,
  `In what year does Oliver Hughes disappear at the start of The Missing?|2006|2009|2012|2014|Easy|2006|Oliver Hughes|initial disappearance|France holiday|FIFA World Cup|timeline|episode 1`,
  `Which year is the main present-day timeline of The Missing's first series?|2014|2001|2009|2018|Easy|2014 timeline|eight years later|Tony Hughes|reopened investigation|narrative structure|flashbacks|series 1`,
  `How many years have passed when Tony resumes the search in the main 2014 timeline of The Missing?|Eight|Three|Five|Twelve|Easy|2006 to 2014|eight year gap|Oliver Hughes|timeline|reopened case|Tony obsession|years missing`,
  `What is the name of the fictional French town where Oliver disappears in The Missing?|Chalons du Bois|Saint Marie|Montelimar|Montauban|Medium|Chalons du Bois|fictional town|Northern France|Hotel Eden|2006 holiday|setting|Oliver Hughes`,
  `Why does the Hughes family make an unplanned stop in Chalons du Bois in The Missing?|Their car breaks down|Their ferry is cancelled|Tony loses their passports|The hotel double books them|Medium|2006 road trip|car trouble|Chalons du Bois|French holiday|family arrival|Hotel Eden|opening episode`,
  `During which major international tournament does Oliver disappear in The Missing?|The 2006 FIFA World Cup|The 2008 Olympics|Euro 2004|The 2010 Commonwealth Games|Medium|2006 World Cup|football crowd|France|Oliver disappearance|summer holiday|setting|sport`,
  `Which two national teams are playing on television in the bar when Oliver goes missing in The Missing?|France and Brazil|England and Germany|France and Italy|Brazil and Portugal|Hard|France versus Brazil|2006 World Cup|football match|crowded bar|Oliver Hughes|disappearance scene|episode 1`,
  `What activity has Tony taken Oliver to do just before they visit the crowded bar in The Missing?|Swimming|Ice skating|Go karting|Fishing|Easy|Tony Hughes|Oliver Hughes|swimming pool|2006 holiday|father son outing|bar|disappearance`,
  `Where does Tony lose sight of Oliver in The Missing?|In a crowded bar|At a railway station|Inside a supermarket|Outside a hospital|Easy|Oliver Hughes|2006|bar crowd|football celebration|Tony father|missing boy|episode 1`,
  `What is the name of the hotel where the Hughes family stays in The Missing?|Hotel Eden|Hotel Beau Rivage|Hotel Paradis|Hotel Miramar|Medium|Hotel Eden|Alain Deloix|Chalons du Bois|France holiday|family stay|finale clue|2006`,
  `Who leads the original French police investigation into Oliver's disappearance in The Missing?|Julien Baptiste|Khalid Ziane|Mark Walsh|Georges Deloix|Easy|Julien Baptiste|French police|2006|missing child|manhunt|case leadership|original inquiry`,
  `Which couple are Oliver Hughes's parents in The Missing?|Tony and Emily Hughes|Mark and Celia Walsh|Ian and Mary Garrett|Alain and Sylvie Deloix|Easy|Tony Hughes|Emily Hughes|Oliver parents|family relationship|2006|grief|main characters`,
  `What nickname does Tony use for his missing son Oliver in The Missing?|Ollie|Ozzie|Oggy|Owen|Easy|Oliver Hughes|Ollie nickname|Tony father|missing son|family|child character|2014`,
  `Which distinctive item of Oliver's clothing appears in a new photograph in The Missing?|A knitted scarf|A leather jacket|A blue cap|Red trainers|Medium|Oliver scarf|photograph evidence|2014|Tony Hughes|reopened search|unique insignia|missing boy`,
  `Where does Tony see the photograph that rekindles his search in The Missing?|On Facebook|In a newspaper obituary|In a police annual report|On a museum poster|Medium|Facebook photograph|2014|child wearing scarf|social media clue|Tony Hughes|Oliver disappearance|digital lead`,
  `What mark makes Oliver's scarf identifiable in the new photograph in The Missing?|A unique insignia|The family's address|A sports team autograph|A gold safety pin|Medium|Oliver Hughes|unique scarf symbol|knitted item|photographic clue|2014|Tony recognition|identity`,
  `What was the name of Oliver's drawing of his father that Tony treasures in The Missing?|Daddy Big Ears|Captain Tony|The Missing Man|Father Christmas|Medium|Daddy Big Ears|Oliver drawing|Tony keepsake|2006|father son memory|emotional connection|BBC interview`,
  `What discovery on a wall strengthens the evidence that Oliver was held somewhere in The Missing?|A child's drawing scratched into the surface|A handwritten ransom demand|A police officer's name|A painted map of France|Medium|basement wall|child drawing|2006 evidence|2014 discovery|Oliver captivity|investigation|physical clue`,
  `What has happened to Tony and Emily's marriage by the 2014 events of The Missing?|They have divorced|They have moved to France together|They have adopted another son|They are celebrating their wedding anniversary|Easy|Tony Hughes|Emily Hughes|divorce|eight years later|family breakdown|2014 timeline|grief`,
  `Who becomes Emily's partner after her separation from Tony in The Missing?|Mark Walsh|Ian Garrett|Khalid Ziane|Georges Deloix|Easy|Emily Hughes|Mark Walsh|romantic relationship|British policeman|2014|new life|family grief`,
  `What is Mark Walsh's role during the original investigation in The Missing?|British liaison officer|Mayor of Chalons du Bois|Julien's police commissioner|Hotel Eden manager|Medium|Mark Walsh|police liaison|British officer|2006 manhunt|Oliver Hughes|Emily partner|professional role`,
  `Which family member of Julien is struggling with drug addiction in The Missing?|His daughter Sara|His wife Celia|His brother Alain|His son Niels|Medium|Sara Baptiste|Julien daughter|drug addiction|Celia Baptiste|family strain|2014|backstory`,
  `Which man's work as a property developer helps him fund a reward in The Missing?|Ian Garrett|Mark Walsh|Georges Deloix|Vincent Bourg|Medium|Ian Garrett|property developer|financial resources|reward offer|2006 search|public benefactor|Ken Stott`,
  `What does Ian Garrett offer to help locate Oliver in The Missing?|A financial reward|A place at an elite school|A private aircraft|A lifetime hotel stay|Easy|Ian Garrett|reward fund|Oliver Hughes|public campaign|2006 investigation|wealthy benefactor|search`,
  `Which name gives the fifth episode of The Missing its title?|Molly|Celia|Rini|Emily|Medium|Molly episode|episode 5|Ian Garrett|missing daughter|2014|episode titles|2014 BBC`,
  `What is the name of Ian and Mary Garrett's missing daughter in The Missing?|Molly|Sara|Laurence|Monique|Medium|Molly Garrett|Ian Garrett|Mary Garrett|missing daughter|family secrets|2006|backstory`,
  `What was Ian Garrett hiding behind his philanthropic image in The Missing?|His sexual abuse of children|A secret life as a pop singer|His work as an undercover judge|His purchase of the local police station|Medium|Ian Garrett|child abuse|hidden criminality|benefactor facade|videotape evidence|Tony Hughes|2014 revelation`,
  `Which object exposes Ian Garrett's abuse to Tony in The Missing?|A video camera with recorded footage|A bloodstained football|An encrypted police radio|A box of stolen passports|Medium|Ian Garrett|video camera|recorded crimes|Tony discovery|episode 5|evidence|dark secret`,
  `Who kills Ian Garrett after discovering evidence of his abuse in The Missing?|Tony Hughes|Julien Baptiste|Vincent Bourg|Khalid Ziane|Medium|Tony Hughes|Ian Garrett murder|violent confrontation|2006|concealment|episode 6|consequences`,
  `Whose alibi does Tony rely on after killing Ian Garrett in The Missing?|Emily Hughes|Malik Suri|Alain Deloix|Rini Dalca|Medium|Emily Hughes|Tony Hughes|false alibi|cover up|Ian Garrett death|marriage crisis|2006`,
  `Which woman's relationship with Tony deteriorates after he confesses to killing Garrett in The Missing?|Emily Hughes's|Celia Baptiste's|Rini Dalca's|Sylvie Deloix's|Medium|Emily Hughes|Tony confession|Ian Garrett death|marriage collapse|grief|2006|relationship`,
  `Whom does Emily turn to for comfort during the collapse of her marriage in The Missing?|Mark Walsh|Georges Deloix|Vincent Bourg|Karl Sieg|Medium|Emily Hughes|Mark Walsh|support|marriage breakdown|police liaison|romance|2006`,
  `Who is initially investigated because of an earlier conviction for sexual offences in The Missing?|Vincent Bourg|Alain Deloix|Mark Walsh|Karl Sieg|Medium|Vincent Bourg|sex offender|police suspect|2006|child disappearance|investigation|episode 2`,
  `What treatment does Vincent Bourg voluntarily undergo in The Missing?|Chemical castration|Experimental brain surgery|Electroshock therapy|Radiation treatment|Hard|Vincent Bourg|chemical castration|attempted treatment|2014|sex offender|character history|episode 2`,
  `Where is Vincent Bourg working when he is seen in the 2014 timeline of The Missing?|At a fast-food outlet|At a university library|At a luxury hotel|At a hospital reception|Medium|Vincent Bourg|fast food job|2014|former suspect|working life|eight years later|character`,
  `Which journalist uses information from a compromised police officer in The Missing?|Malik Suri|Mark Walsh|Tony Hughes|Karl Sieg|Medium|Malik Suri|police leak|Khalid Ziane|journalism|confidential evidence|2014|media ethics`,
  `Who supplies Malik Suri with secret material from Oliver's investigation in The Missing?|Khalid Ziane|Georges Deloix|Julien Baptiste|Laurence Relaud|Medium|Khalid Ziane|Malik Suri|corrupt policeman|evidence leak|2006|blackmail|concealment`,
  `Why is officer Khalid Ziane vulnerable to blackmail in The Missing?|His concealed criminal past|A gambling debt owed to Ian|A forged medical degree|An undisclosed foreign marriage|Medium|Khalid Ziane|old identity|criminal record|Malik Suri|journalistic blackmail|police career|2006`,
  `Which detective is badly injured when Khalid Ziane attacks him in The Missing?|Julien Baptiste|Mark Walsh|Laurence Relaud|Georges Deloix|Medium|Khalid Ziane|Julien Baptiste|attack|leg injury|2006|police betrayal|hospital`,
  `What lasting injury does Julien Baptiste carry after Ziane's attack in The Missing?|A damaged leg causing a limp|Partial hearing loss|Blindness in one eye|A badly burned hand|Medium|Julien Baptiste|leg injury|limp|Khalid Ziane|2006 assault|2014 mobility|police`,
  `What happens to Khalid Ziane after his corruption and attack are uncovered in The Missing?|He goes to prison|He becomes a police chief|He escapes to Canada|He takes over Hotel Eden|Medium|Khalid Ziane|imprisoned officer|assault on Julien|corrupt past|legal consequence|2014|crime`,
  `What happens to Ziane before he can explain the missing evidence in The Missing?|He is killed in prison|He is extradited to Britain|He joins the investigation again|He develops amnesia|Hard|Khalid Ziane|prison death|missing coin|2014|evidence obstruction|final episodes|murder`,
  `Who helps Julien by identifying links to a trafficking group in The Missing?|Rini Dalca|Mary Garrett|Sylvie Deloix|Celia Baptiste|Medium|Rini Dalca|Romanian gang|undercover lead|Julien Baptiste|trafficking|witness|episode 5`,
  `What is Rini Dalca's new profession when she is found years after Oliver's disappearance in The Missing?|Primary school teacher|Police commissioner|Restaurant owner|TV presenter|Medium|Rini Dalca|2014|school teacher|recovery|undercover contact|former girlfriend|new life`,
  `Which suspect's vehicle is linked to a house where Oliver was thought to be held in The Missing?|Karl Sieg's van|Ian Garrett's motorcycle|Mark Walsh's bicycle|Vincent Bourg's taxi|Medium|Karl Sieg|van sighting|Oliver captive house|trafficking trail|2006|police lead|episode 4`,
  `Which criminal activity is Karl Sieg associated with in The Missing?|Human trafficking|Art forgery|Bank robbery|Illegal gambling|Medium|Karl Sieg|trafficker|Romanian gang|Oliver Hughes|van|2014 search|criminal network`,
  `What does Karl Sieg admit doing at a location linked to Oliver in The Missing?|Cleaning up blood|Hiding a cache of jewellery|Installing surveillance cameras|Printing forged passports|Hard|Karl Sieg|blood cleanup|suspected holding house|2006|Khalid Ziane|key witness|episode 6`,
  `In which European capital do Tony and Julien seek out contacts linked to the case in The Missing?|Paris|Budapest|Rome|Madrid|Medium|Paris investigation|Julien Baptiste|Tony Hughes|Karl Sieg|2014|cross border search|episode 5`,
  `In the 2009 storyline of The Missing, which other child goes missing?|Alex Duchamps|Oliver Hunt|James Walsh|Matty Rose|Hard|Alex Duchamps|2009|child disappearance|Chalons du Bois|Tony suspicion|another case|episode 7`,
  `Which year between 2006 and 2014 is shown as an additional time jump in The Missing?|2009|2007|2011|2013|Medium|2009 flashback|three years after|Alex Duchamps|Return to Eden|marriage strain|timeline|series 1`,
  `What is the title of the first episode of The Missing's original series?|Eden|Shell|Gone Fishing|Concrete|Easy|Eden|episode 1|2006 opening|October 2014|premiere|episode title|series 1`,
  `What is the title of the second episode of The Missing's original series?|Pray for Me|The Meeting|Molly|Return to Eden|Medium|Pray for Me|episode 2|2014|Vincent Bourg|Ian Garrett introduction|episode guide|series 1`,
  `Which title belongs to the third episode of The Missing Series 1?|The Meeting|Gone Fishing|Concrete|Till Death|Medium|The Meeting|episode 3|2014|undercover lead|Tony past|episode guide|series 1`,
  `Which episode of The Missing Series 1 is titled Gone Fishing?|The fourth|The second|The sixth|The eighth|Medium|Gone Fishing|episode 4|2014|Rini Dalca|key witness|episode order|series 1`,
  `What is the title of The Missing Series 1's sixth episode?|Concrete|Eden|Pray for Me|Molly|Medium|Concrete|episode 6|2014|Ian Garrett aftermath|Karl Sieg|episode guide|series 1`,
  `Which episode title refers to returning to the place where Oliver disappeared in The Missing?|Return to Eden|The Meeting|Pray for Me|Till Death|Medium|Return to Eden|episode 7|2009 timeline|Chalons du Bois|December 2014|episode guide|series 1`,
  `Which title belongs to the eighth and final episode of The Missing Series 1?|Till Death|Gone Fishing|The Meeting|Concrete|Medium|Till Death|episode 8|finale|16 December 2014|mystery conclusion|episode guide|series 1`,
  `What type of keepsake finally identifies a man linked to Oliver's disappearance in The Missing?|A sobriety coin|A wedding ring|A police medal|A hotel keycard|Medium|sobriety coin|Alain Deloix|key evidence|2014|Hotel Eden|finale clue|twelve coins`,
  `Who owns the sobriety coin recovered in The Missing's investigation?|Alain Deloix|Ian Garrett|Mark Walsh|Vincent Bourg|Medium|Alain Deloix|sobriety token|alcohol recovery|evidence|Khalid Ziane|2014|finale`,
  `What is the significance of Alain Deloix's collection of twelve tokens in The Missing?|Each marks a year of sobriety|They record his hotel guests|They commemorate twelve police promotions|They represent twelve missing children|Hard|Alain Deloix|twelve sobriety coins|recovering alcoholic|evidence recognition|Hotel Eden|missing token|2014`,
  `How is the missing sobriety coin retrieved during the final investigation in The Missing?|From journalist Malik Suri|From Celia Baptiste|From Vincent Bourg's employer|From a Paris museum|Medium|Malik Suri|Khalid Ziane|missing evidence|Mark Walsh|sobriety token|2014|finale`,
  `Who uncovers financial records that help pressure Malik Suri into revealing evidence in The Missing?|Mark Walsh|Alain Deloix|Karl Sieg|Ian Garrett|Hard|Mark Walsh|financial records|forensic laboratory|Malik Suri|missing token|finale|2014`,
  `How does Oliver first come into Alain Deloix's path on the night he disappears in The Missing?|He follows a fox into the road|He walks into the Hotel Eden kitchen|He asks Alain for a taxi ride|He runs onto a railway track|Medium|Oliver Hughes|fox|road accident|Alain Deloix|2006|finale reconstruction|night`,
  `Who accidentally strikes Oliver with a vehicle in The Missing's finale reconstruction?|Alain Deloix|Georges Deloix|Ian Garrett|Karl Sieg|Medium|Alain Deloix|drunk driving|Oliver Hughes|road collision|2006|finale|hotel owner`,
  `What mistaken belief leads Alain to hide Oliver after the road accident in The Missing?|He believes the boy has died|He thinks Oliver is a wanted criminal|He assumes the boy is a spy|He believes the child is his son|Medium|Alain Deloix|Oliver unconscious|mistaken death|car collision|cover up|2006|finale`,
  `Which relative does Alain contact for help after the accident in The Missing?|His brother Georges|His cousin Vincent|His son Malik|His father Ian|Medium|Alain Deloix|Georges Deloix|brother relationship|accident|2006|concealment|town mayor`,
  `What public office does Georges Deloix hold in The Missing?|Mayor of Chalons du Bois|French interior minister|Paris police chief|Regional hospital director|Medium|Georges Deloix|town mayor|Chalons du Bois|political influence|Alain brother|corruption|2014`,
  `Whom does Georges Deloix enlist to dispose of Oliver after the accident in The Missing?|A Romanian criminal fixer|An English journalist|A hospital chaplain|An army sergeant|Medium|Georges Deloix|Romanian fixer|Oliver Hughes|concealment|2006|murder plot|trafficking`,
  `What terrible fact emerges about Oliver at the point Georges's fixer is called in The Missing?|Oliver is still alive|Oliver is already in Britain|Oliver has escaped to his parents|Oliver is with the police|Medium|Oliver Hughes|survives collision|fixer murder|Georges Deloix|Alain Deloix|finale|2006`,
  `Who gives the deathbed account of the road accident in The Missing?|Alain Deloix|Ian Garrett|Vincent Bourg|Khalid Ziane|Medium|Alain Deloix|hospital confession|dying patient|2006 accident|Oliver Hughes|series finale|2014`,
  `What happens to Emily in the final episode of The Missing Series 1?|She marries Mark Walsh|She marries Ian Garrett|She returns to Tony|She moves to Russia with Julien|Medium|Emily Hughes|Mark Walsh|wedding|moving on|2014|series finale|relationship`,
  `Where is Tony shown continuing to search for a boy he believes could be Oliver at the end of The Missing?|Russia|Spain|Ireland|Canada|Medium|Tony Hughes|Russia|unresolved obsession|last scene|Oliver search|2014 ending|ambiguity`,
  `What uncertainty remains in the concluding scenes of The Missing Series 1?|Tony still believes Oliver may be alive|The identity of Oliver's mother remains unknown|Julien never meets Tony|The initial disappearance date is never established|Hard|Tony Hughes|finale ambiguity|Russian child|Oliver Hughes|obsessive search|ending|2014`,
  `Which character uses his election prospects to resist reopening Oliver's case in The Missing?|Georges Deloix|Julien Baptiste|Mark Walsh|Alain Deloix|Medium|Georges Deloix|mayoral reelection|2014|political cover up|Julien Baptiste|town authority|obstruction`,
  `Which officer is responsible for secretly removing a clue from the original Oliver Hughes investigation in The Missing?|Khalid Ziane|Laurence Relaud|Mark Walsh|Julien Baptiste|Medium|Khalid Ziane|missing sobriety coin|evidence theft|Malik Suri|2006|corruption|finale`,
  `What does Julien give Tony rather than use it to prosecute him for a death in The Missing?|Evidence implicating him in Ian Garrett's murder|A forged passport in Oliver's name|An official death certificate for Oliver|The money from Ian's reward fund|Hard|Julien Baptiste|Tony Hughes|Ian Garrett evidence|mercy|2014|confession|finale`,
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 401: malformed row ${index + 1}`);
  }

  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 401: invalid difficulty at row ${index + 1}`);
  }

  const question = stem.includes('The Missing')
    ? stem
    : `In The Missing, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 401: repeated answer option at row ${index + 1}`);
  }

  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 401: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
