
// PuzzlePilot - Big Quiz - Pack 399
// Night and Day (ITV, 2001-2003): full-run story, cast, production and ending.
// Covers the soap's 80 hour-long editions and its earlier shorter broadcasts.
// Complete WordPad-ready CommonJS. First ID: tv_21981.
'use strict';

const FIRST_ID = 21981;
const commonTags = ['television', 'British TV', 'ITV', 'Night and Day', 'Caleb Ranson', 'mystery soap'];

// Question | right answer | three wrong answers | difficulty | question-specific tags.
const rows = [
  // Programme and cast
  `Who created ITV's mystery soap Night and Day?|Caleb Ranson|Phil Redmond|Tony Jordan|Russell T Davies|Easy|2001 premiere|series creator|screenwriter|British soaps|creator credit|LWT|original programme`,
  `Which part of London provides the setting for Night and Day?|Greenwich|Camden|Croydon|Notting Hill|Easy|Greenwich|south east London|main location|Thornton Street|neighbourhood|2001-2003`,
  `What is the fictional street at the heart of Night and Day?|Thornton Street|Coronation Street|Albert Square|Brookside Close|Easy|Thornton Street|Greenwich|six families|community|residential street|London`,
  `Who sang the opening theme Always & Forever for Night and Day?|Kylie Minogue|Sophie Ellis-Bextor|Dannii Minogue|Emma Bunton|Easy|Kylie Minogue|Always and Forever|opening theme|pop music|television soundtrack|credits`,
  `Which broadcaster originally screened Night and Day in the UK?|ITV|BBC One|Channel 4|Channel 5|Easy|2001|ITV daytime|UK broadcaster|soap opera|original channel|premiere`,
  `In which year did Night and Day first air?|2001|1996|2003|2006|Easy|6 November 2001|first episode|launch year|British soap|broadcast chronology|programme history`,
  `In which year did Night and Day transmit its final episode?|2003|2001|2005|2007|Easy|5 June 2003|finale|end of series|broadcast chronology|programme history|cult soap`,
  `How many hour-long Night and Day instalments make up the full story?|Eighty|Twenty|One hundred and fifty|Two hundred|Medium|80 omnibus editions|programme format|broadcast versions|2001-2003|hour long|programme history`,
  `How was Night and Day originally scheduled on weekday afternoons?|Three short episodes per week|One live hour every Sunday|Five morning episodes per week|A single monthly feature|Medium|teatime broadcasts|three weekly episodes|2001|early evening|original scheduling|programme history`,
  `What alternative edition of Night and Day was also shown during its early run?|A late-night hour-long omnibus|A Saturday cartoon remake|A daily radio play|A Sunday cooking programme|Medium|late night edition|omnibus|extra adult scenes|2001 format|two broadcast versions|programme history`,
  `Why was Night and Day moved entirely to late-night broadcasts in 2002?|Low teatime viewing figures|A dispute over the lead actor's contract|The studio was destroyed|A move to an American network|Medium|March 2002|ratings decline|schedule change|teatime removal|late night|ITV management`,
  `Which American mystery series was frequently compared with Night and Day?|Twin Peaks|The West Wing|Friends|The X-Files|Medium|Twin Peaks|surreal tone|critical comparisons|mystery television|2001 promotion|atmosphere`,
  `Which production organisations made Night and Day for ITV?|Granada Television and LWT|BBC Scotland and STV|Talkback and Channel 4|Thames Television and Netflix|Medium|Granada Television|LWT|television production|London Weekend Television|credits|2001-2003`,
  `What was an earlier proposed title for Night and Day before production?|Trafalgar Road|Sunset Beach|The Midnight Hour|London Lives|Hard|Trafalgar Road|development title|working title|Greenwich setting|production history|name change`,
  `Which British Soap Award did Night and Day win in 2002?|Hero of the Year|Best Dramatic Performance|Best Villain|Best Soap|Hard|2002 Soap Awards|Hero of the Year|Sam Armstrong|guardian of siblings|football sacrifice|award`,
  `Who plays missing schoolgirl Jane Harper in Night and Day?|Georgina Walker|Stephanie Leonidas|Phoebe Thomas|Daniella Isaacs|Easy|Georgina Walker|Jane Harper|missing teenager|lead actress|casting|central mystery`,
  `Which actress portrays Jane's mother Dr Natalie Harper in Night and Day?|Sally Dexter|Glynis Barber|Lysette Anthony|Lesley Joseph|Easy|Sally Dexter|Natalie Harper|general practitioner|Jane mother|actor role|family`,
  `Who portrays Jane's father Duncan Harper in Night and Day?|Tim Wallers|Joe McGann|Gareth Hunt|Dominic Rickhards|Medium|Tim Wallers|Duncan Harper|Natalie husband|Jane father|actor credit|family`,
  `Which actor plays Jane's older brother Ryan Harper in Night and Day?|Nick Schofield|Kevin Sacre|Stuart Manning|Adam Paul Harvey|Medium|Nick Schofield|Ryan Harper|Harper family|brother|actor role|teenage character`,
  `Which actress plays Della Wells, Jane's closest friend in Night and Day?|Stephanie Leonidas|Georgina Walker|Debbie Korley|Julia Lee Smith|Easy|Stephanie Leonidas|Della Wells|best friend|birthday|cast credit|teenage character`,
  `Who plays Roxanne Doyle, Natalie's best friend, in Night and Day?|Lysette Anthony|Cathy Tyson|Glynis Barber|Sally Dexter|Easy|Lysette Anthony|Roxanne Doyle|hairdresser|Della mother|actor role|friendship`,
  `Which actor plays Roxanne's partner Alex Wells in Night and Day?|Joe McGann|Joe Jacobs|Gareth Hunt|Shane Richie|Easy|Joe McGann|Alex Wells|Della father figure|Jane affair|cast credit|relationship`,
  `Which actor plays Roxanne's eldest son Dennis Doyle in Night and Day?|Kevin Sacre|Seb Castang|Stuart Manning|Adam Paul Harvey|Medium|Kevin Sacre|Dennis Doyle|Roxanne son|Alex stepson|actor role|family`,
  `Who plays schoolteacher Fiona Brake in Night and Day?|Glynis Barber|Lesley Joseph|Cathy Tyson|Sally Dexter|Easy|Glynis Barber|Fiona Brake|schoolteacher|Mike wife|actor role|marriage`,
  `Who portrays Fiona's colleague Rachel Culgrin in Night and Day?|Lesley Joseph|Glynis Barber|Lysette Anthony|Christianne Gadd|Easy|Lesley Joseph|Rachel Culgrin|teacher|Aunt Rachel|cast credit|school`,
  `Which actress plays Reverend Steph MacKenzie in Night and Day?|Cathy Tyson|Sally Dexter|Lysette Anthony|Glynis Barber|Medium|Cathy Tyson|Steph MacKenzie|reverend|Halfway House|actor role|return to Greenwich`,
  `Who plays footballer Sam Armstrong in Night and Day?|Stuart Manning|Kevin Sacre|Joe Jacobs|Nick Schofield|Medium|Stuart Manning|Sam Armstrong|football career|family guardian|cast credit|Jane former boyfriend`,
  `Which actor plays local publican Charlie Doyle in Night and Day?|Gareth Hunt|Joe McGann|Bradley Walsh|Sean Francis|Medium|Gareth Hunt|Charlie Doyle|pub landlord|Roxanne father|actor credit|community`,
  `Who portrays the manipulative fashion model Kate Ellis in Night and Day?|Julia Lee Smith|Georgina Walker|Phoebe Thomas|Debbie Korley|Hard|Julia Lee Smith|Kate Ellis|model|Ryan rival|cast credit|teenage intrigue`,
  `Which actor plays Josh Alexander, a resident of the Halfway House, in Night and Day?|Seb Castang|Kevin Sacre|Nick Schofield|Joe Jacobs|Medium|Seb Castang|Josh Alexander|Halfway House|Jane boyfriend|Della romance|casting`,
  `Who plays young Holly Curran in Night and Day?|Phoebe Thomas|Georgina Walker|Debbie Korley|Daniella Isaacs|Medium|Phoebe Thomas|Holly Curran|Halfway House|Alex secret|actor role|Jane mystery`,
  `Who plays Fiona and Mike Brake's son Tom in Night and Day?|Adam Paul Harvey|Stuart Manning|Seb Castang|Kevin Sacre|Medium|Adam Paul Harvey|Tom Brake|Fiona son|Mike son|filmmaking hobby|cast`,
  `Who portrays Tom's friend Frankie Radcliffe in Night and Day?|Debbie Korley|Julia Lee Smith|Phoebe Thomas|Stephanie Leonidas|Hard|Debbie Korley|Frankie Radcliffe|Tom best friend|romance|casting|teenage life`,
  `Who plays Sam's younger sister Lucy Armstrong in Night and Day?|Daniella Isaacs|Georgina Walker|Julia Lee Smith|Christianne Gadd|Medium|Daniella Isaacs|Lucy Armstrong|Sam sister|orphaned family|casting|child character`,
  `Which actor portrays Mike Brake, Fiona's husband, in Night and Day?|Dominic Rickhards|Tim Wallers|Joe McGann|Sean Francis|Hard|Dominic Rickhards|Mike Brake|Fiona husband|Tom father|sexuality storyline|actor role`,
  `Which actress portrays Charlie Doyle's Brazilian wife Donna in Night and Day?|Christianne Gadd|Cathy Tyson|Glynis Barber|Lesley Joseph|Hard|Christianne Gadd|Donna Doyle|Charlie wife|Brazilian character|family|actor role`,
  `Which actor plays Jimmy, a son of Charlie Doyle, in Night and Day?|Joe Jacobs|Joe McGann|Nick Schofield|Bradley Walsh|Hard|Joe Jacobs|Jimmy Doyle|Charlie son|teenage friend|actor role|family`,
  `Which actor portrays returning relative Woody Dexter in Night and Day?|Bradley Walsh|Shane Richie|Gareth Hunt|Joe McGann|Medium|Bradley Walsh|Woody Dexter|Danny brother|Natalie romance|cast|later storyline`,
  `Who portrays Dennis's father Danny Dexter in Night and Day?|Shane Richie|Bradley Walsh|Joe McGann|Gareth Hunt|Medium|Shane Richie|Danny Dexter|Dennis father|baby swap|guest cast|finale`,

  // Jane's disappearance and early relationships
  `What major occasion launches the plot of Night and Day?|The sixteenth birthdays of Jane and Della|A wedding between Roxanne and Alex|A new pub opening|A school graduation ceremony|Easy|opening episodes|Jane Harper|Della Wells|shared birthday|2001|party`,
  `How old is Jane Harper when she vanishes early in Night and Day?|Sixteen|Thirteen|Eighteen|Twenty-one|Easy|Jane Harper|missing teenager|sixteenth birthday|2001 storyline|disappearance|central plot`,
  `Which young woman's disappearance drives the central mystery in Night and Day?|Jane Harper|Kate Ellis|Frankie Radcliffe|Lucy Armstrong|Easy|Jane Harper|missing girl|Greenwich|initial mystery|Harper family|2001`,
  `Where is Jane last seen before mysteriously disappearing in Night and Day?|A local graveyard|Her school assembly hall|The Cutty Sark|A hospital waiting room|Medium|Jane Harper|graveyard|opening week|disappearance|Josh Alexander|Greenwich`,
  `What disturbing communication has Jane been receiving before vanishing in Night and Day?|Threatening text messages|Anonymous postcards from France|Blackmail phone calls from the police|Letters addressed to Della|Easy|Jane Harper|anonymous texts|stalker|opening mystery|mobile phone|threats`,
  `With whose father has Jane secretly been having a relationship in Night and Day?|Della Wells's father figure Alex|Sam Armstrong's father|Kate Ellis's father|Frankie Radcliffe's father|Medium|Jane Harper|Alex Wells|secret affair|Della Wells|older man|2001 plot`,
  `Which young man is Jane also romantically involved with before her disappearance in Night and Day?|Josh Alexander|Charlie Doyle|Mike Brake|Duncan Harper|Medium|Jane Harper|Josh Alexander|Halfway House|secret romance|missing girl|opening episodes`,
  `What object makes Jane suspect Josh is behind the threatening texts in Night and Day?|A secret mobile phone|A photo of her passport|A stolen necklace|A hidden tape recorder|Medium|Josh Alexander|mobile phone|threatening texts|Jane Harper|Halfway House|opening week`,
  `Which girl feels overshadowed by Jane even before the disappearance in Night and Day?|Della Wells|Lucy Armstrong|Frankie Radcliffe|Kate Ellis|Medium|Della Wells|Jane Harper|best friends|identity|shared birthday|school years`,
  `What type of medical work does Jane's mother Natalie do in Night and Day?|General practice|Veterinary surgery|Emergency paramedicine|Clinical dentistry|Medium|Natalie Harper|GP|medical career|family mother|Sally Dexter|professional life`,
  `What kind of business does Roxanne Doyle operate in Night and Day?|Hairdressing|Floristry|Bookmaking|Antiques|Medium|Roxanne Doyle|hairdresser|Greenwich|local business|Lysette Anthony|working life`,
  `Which family member initially tries to persuade the Harpers that Jane may simply be making a drama of her absence in Night and Day?|Natalie Harper|Lucy Armstrong|Aunt Begonia|Charlie Doyle|Medium|Natalie Harper|missing daughter|early reaction|denial|family concern|2001`,
  `What revelation makes Natalie rethink how well she knew her daughter in Night and Day?|Jane had concealed several relationships and secrets|Jane had been studying medicine abroad|Jane owned the family's business|Jane was already married|Medium|Natalie Harper|Jane Harper|secret life|police questioning|mother daughter|disappearance`,
  `Which character is asked to portray Jane in a police reconstruction in Night and Day?|Della Wells|Kate Ellis|Lucy Armstrong|Frankie Radcliffe|Medium|Della Wells|police reconstruction|Jane disappearance|identification|investigation|2002`,
  `Which teenage girl's boyfriend relationship with Josh becomes important after Jane disappears in Night and Day?|Della Wells|Lucy Armstrong|Kate Ellis|Frankie Radcliffe|Medium|Della Wells|Josh Alexander|new romance|Jane best friend|Halfway House|love triangle`,
  `What recurring problem makes Josh worry that he may have harmed Jane in Night and Day?|Blackouts and unsettling visions|Sleepwalking into the sea|A forgotten head injury from childhood|A diagnosis of colour blindness|Medium|Josh Alexander|blackouts|visions|Jane Harper|missing girl|uncertainty`,
  `Where does Reverend Steph provide shelter for vulnerable young people in Night and Day?|The Halfway House|The Garrison pub|Scoveston Manor|The Queen Vic|Easy|Steph MacKenzie|Halfway House|youth support|Josh Alexander|Holly Curran|Greenwich`,
  `Which character's revelations about Jane's past put Alex's secret affair at risk in Night and Day?|Holly Curran|Charlie Doyle|Lucy Armstrong|Will Radcliffe|Medium|Holly Curran|Alex Wells|Jane affair|threatened exposure|Halfway House|secrets`,
  `Whom does Roxanne suspect of sending threatening letters during her pregnancy in Night and Day?|Nurse Melanie Bradshaw|Aunt Rachel Culgrin|Joanna Hepworth|Jane's teacher Fiona|Medium|Melanie Bradshaw|Roxanne Doyle|anonymous letters|pregnancy|midwife|old secret`,
  `Which nurse had assisted at the births of Jane and Della in Night and Day?|Melanie Bradshaw|Liz Tyler|Lorraine Waldron|Vicky Fleming|Hard|Melanie Bradshaw|birth secret|Jane Harper|Della Wells|maternity|baby swap`,

  // Other families, romance and supernatural stories
  `Whose sister Lucy and brother Ben come into the care of a young footballer in Night and Day?|Sam Armstrong's|Ryan Harper's|Tom Brake's|Dennis Doyle's|Easy|Sam Armstrong|Lucy Armstrong|Ben Armstrong|guardian|parents death|siblings`,
  `Which relative contests Sam's efforts to care for his orphaned siblings in Night and Day?|Aunt Rachel Culgrin|Uncle Charlie Doyle|Aunt Begonia|Grandmother Natalie|Medium|Rachel Culgrin|Sam Armstrong|child custody|Lucy|Ben|family power`,
  `What career does Sam sacrifice to look after his younger siblings in Night and Day?|Professional football|Acting|School teaching|Journalism|Medium|Sam Armstrong|football sacrifice|Lucy and Ben|guardianship|hero award|family`,
  `What is Aunt Rachel Culgrin's job in Night and Day?|Schoolteacher|Hospital surgeon|Police inspector|Estate agent|Medium|Rachel Culgrin|Lesley Joseph|school|education|Sam guardian|profession`,
  `Which parking inspector dates Sam in Night and Day?|Lydia|Kate Ellis|Celeste Dexter|Frankie Radcliffe|Hard|Lydia|Sam Armstrong|parking inspector|romance|guilt|2002 storyline`,
  `Which character is a school science teacher married to Mike in Night and Day?|Fiona Brake|Natalie Harper|Roxanne Doyle|Steph MacKenzie|Medium|Fiona Brake|Glynis Barber|school science|Mike Brake|marriage|profession`,
  `Who is Mike Brake's wife in Night and Day?|Fiona|Rachel|Steph|Natalie|Medium|Mike Brake|Fiona Brake|marriage|Tom parents|Greenwich families|2002`,
  `What aspect of his personal identity does Mike struggle to acknowledge during Night and Day?|His sexuality|His nationality|His birth name|His age|Medium|Mike Brake|sexuality|Fiona marriage|coming out|identity|2002`,
  `Who becomes romantically involved with the much younger Dennis during Night and Day?|Fiona Brake|Steph MacKenzie|Rachel Culgrin|Natalie Harper|Medium|Fiona Brake|Dennis Doyle|age gap affair|schoolteacher|marital crisis|2003`,
  `Which former romantic interest returns to stir up Natalie's personal life in Night and Day?|Woody Dexter|Django Doyle|Gabriel Huysman|Josh Alexander|Medium|Natalie Harper|Woody Dexter|Bradley Walsh|old flame|romance|2002`,
  `Which of Woody's relatives is Dennis Doyle's father in Night and Day?|His brother Danny|His son Jimmy|His uncle Charlie|His cousin Alex|Medium|Woody Dexter|Danny Dexter|Dennis Doyle|family connection|brothers|2003`,
  `What is Tom Brake particularly interested in filming in Night and Day?|Events around his friends and neighbours|Football matches for the BBC|Wildlife documentaries in Africa|Tourist advertisements|Medium|Tom Brake|amateur filming|camera|Frankie Radcliffe|school life|hobby`,
  `Which of Tom's friends becomes his romantic interest in Night and Day?|Frankie Radcliffe|Kate Ellis|Jane Harper|Lucy Armstrong|Medium|Tom Brake|Frankie Radcliffe|friendship to romance|school|relationship|2002`,
  `What unusual episode of Night and Day features a stranger stopping time?|Time Stands Still|Gone|Old Flame|Queen of the Ball|Medium|Time Stands Still|April 2002|fantasy episode|Gabriel Huysman|alternate reality|episode title`,
  `Which actor plays mysterious visitor Gabriel Huysman in Night and Day?|Clarke Peters|Bradley Walsh|Gareth Hunt|Shane Richie|Medium|Clarke Peters|Gabriel Huysman|mysterious stranger|guest cast|Time Stands Still|2002`,
  `What does Gabriel Huysman claim to be when he arrives in Night and Day?|A private investigator|A school inspector|A prison chaplain|A talent scout|Medium|Gabriel Huysman|Clarke Peters|private investigator|Jane mystery|street residents|2002`,
  `What supernatural event surrounds Gabriel's questions to residents in Night and Day?|Time stops|All the residents swap faces|The street turns into a river|Nobody can speak aloud|Medium|Gabriel Huysman|stopped time|fantasy|Time Stands Still|secret revelations|2002`,
  `What happens to residents' memories after Gabriel's extraordinary visit in Night and Day?|Their memories of the altered events are erased|They remember every secret for the rest of their lives|They all remember only the following Christmas|They immediately tell the police everything|Hard|Gabriel Huysman|memory erased|reset timeline|Time Stands Still|parallel reality|2002`,
  `In the alternative-reality episode of Night and Day, who fatally stabs Alex?|Roxanne Doyle|Jane Harper|Della Wells|Natalie Harper|Hard|Time Stands Still|Roxanne Doyle|Alex Wells|alternate timeline|stabbing|2002`,
  `Which Night and Day episode imagines a different life in which Jane plans to marry Sam?|Alternative Days|Dark Secrets|Roxanne's Wedding Day|The Secret's Out|Medium|Alternative Days|September 2002|imagined reality|Jane Harper|Sam Armstrong|wedding`,
  `Which of Charlie Doyle's sons returns from Singapore in Night and Day?|Django|Jimmy|Dennis|Ryan|Hard|Django Doyle|Charlie Doyle|Singapore singer|return home|family tensions|2002`,
  `Which relative of Fiona arrives in Night and Day and closely resembles her?|Her identical sister Gwen|Her daughter Lucy|Her cousin Jane|Her aunt Rachel|Medium|Fiona Brake|Gwen|identical twins|family arrival|2002|schoolteacher`,
  `What kind of messages does Della receive in the Night and Day episode Cold Calling?|Spooky telephone calls|Invitation letters from Hollywood|Instructions to join the police|Anonymous wedding presents|Medium|Della Wells|Cold Calling|October 2002|strange phone calls|mystery|episode arc`,
  `Which family member's pregnancy in Night and Day leads to a secret concerning a newborn child's sex?|Roxanne Doyle's|Fiona Brake's|Rachel Culgrin's|Kate Ellis's|Medium|Roxanne Doyle|newborn baby|intersex storyline|Alex Wells|birth secret|2002-2003`,
  `Which pair become involved in a child surrogacy plan in the later episodes of Night and Day?|Charlie and Donna Doyle|Alex and Jane|Sam and Rachel|Tom and Frankie|Hard|Charlie Doyle|Donna Doyle|surrogacy|Aunt Begonia|family hopes|2003`,
  `Which character is invited to help Charlie and Donna Doyle pursue their surrogacy plan in Night and Day?|Aunt Begonia|Nurse Melanie Bradshaw|Kate Ellis|Lucy Armstrong|Medium|Aunt Begonia|Donna Doyle|Charlie Doyle|surrogacy plan|relative|2003`,

  // Jane's return and the final revelations
  `Who discovers a woman he believes is Jane working as a geisha in the later Night and Day story?|Sam Armstrong|Alex Wells|Duncan Harper|Ryan Harper|Medium|Sam Armstrong|Jane Harper|geisha|reappearance|amnesia|2003`,
  `What problem does Jane have when she is found alive in Night and Day?|She has lost her memory|She is unable to walk|She has become completely blind|She cannot recognise spoken English|Easy|Jane Harper|amnesia|return home|Sam Armstrong|missing person|2003`,
  `Which family is reunited with Jane when she is brought home in Night and Day?|The Harpers|The Brakes|The Radcliffes|The Armstrongs|Easy|Jane Harper|Natalie Harper|Duncan Harper|family reunion|return home|2003`,
  `Which man's name makes the returned Jane particularly frightened in Night and Day?|Alex Wells|Charlie Doyle|Will Radcliffe|Mike Brake|Medium|Jane Harper|Alex Wells|fear|memory|return home|2003`,
  `Which investigator takes over Jane's case in the later episodes of Night and Day?|Inspector Paisley|DI Peter Carlisle|DI Stella Gibson|DS John Wadsworth|Medium|Inspector Paisley|Jane Harper|police investigation|replacement detective|2003|disappearance`,
  `What secret about Jane and Della's infancy is finally uncovered in Night and Day?|They were switched as babies|They were born five years apart|They were identical twins|They had been adopted from the same orphanage|Easy|Jane Harper|Della Wells|switched at birth|final revelation|parents|2003`,
  `Which character carried out the switch of Jane and Della as babies in Night and Day?|Danny Dexter|Alex Wells|Duncan Harper|Charlie Doyle|Hard|Danny Dexter|baby swap|Jane Harper|Della Wells|maternity secret|Shane Richie`,
  `Which man is revealed as Jane's biological father following the baby-switch mystery in Night and Day?|Alex Wells|Duncan Harper|Sam Armstrong|Woody Dexter|Medium|Jane Harper|Alex Wells|biological father|baby swap|secret affair|finale`,
  `Who is stabbed by Jane during Night and Day's final story?|Danny Dexter|Josh Alexander|Sam Armstrong|Charlie Doyle|Medium|Jane Harper|Danny Dexter|stabbing|2003 finale|violent confrontation|Shane Richie`,
  `What legal consequence follows Jane's stabbing of Danny in Night and Day?|She is imprisoned|She is made a police officer|She is given a teaching job|She immediately moves abroad|Medium|Jane Harper|Danny Dexter|imprisonment|final episode|2003|crime`,
  `How far into the future does the final Night and Day episode jump after the stabbing?|Four years|Six months|Ten years|Twenty years|Medium|four year flashforward|future Greenwich|final episode|2003|story resolution|time jump`,
  `At what age is Jane apparently released from prison during Night and Day's final time jump?|Twenty-one|Sixteen|Eighteen|Thirty|Hard|Jane Harper|21st birthday|prison release appearance|flashforward|2003 finale|ghost`,
  `What final twist explains Jane's apparent return from prison in Night and Day?|The figure seen in Greenwich is her ghost|She escaped through a secret tunnel|It was her identical twin|She had faked her entire disappearance|Medium|Jane Harper|ghost ending|prison death|supernatural reveal|finale|2003`,
  `Where is Jane revealed to have died before appearing in the final Night and Day scenes?|In her prison cell|In the local graveyard|On a ferry to France|At the Halfway House|Medium|Jane Harper|prison cell|death|ghost reveal|Natalie discovery|2003`,
  `Which musician's recording All Is Full of Love accompanies the final Night and Day montage?|Bjork|Kylie Minogue|Dido|Annie Lennox|Medium|Bjork|All Is Full of Love|closing montage|soundtrack|final episode|2003`,
  `Which two teenage friends' shared birthday celebrations bookend Night and Day's opening and final storyline?|Jane and Della's|Lucy and Kate's|Frankie and Holly's|Ryan and Sam's|Medium|Jane Harper|Della Wells|16th birthday|17th birthday|series bookends|finale`,
  `Which former footballer's complicated later storyline includes a disappearance and a search for Jane in Night and Day?|Sam Armstrong|Charlie Doyle|Mike Brake|Duncan Harper|Medium|Sam Armstrong|Jane search|sleeping rough|stabbing injury|family responsibility|2003`,
  `Which young man becomes wealthy and starts a family with Della in the future sequence of Night and Day?|Josh Alexander|Alex Wells|Dennis Doyle|Tom Brake|Medium|Della Wells|Josh Alexander|future sequence|family|wealth|2003`,
  `Which character becomes a fireman in the final Night and Day flashforward?|Dennis Doyle|Jimmy Doyle|Tom Brake|Sam Armstrong|Hard|Dennis Doyle|fireman|future career|2003 finale|flashforward|Roxanne family`,
  `Which character's later story reveals a gender transition before the final Night and Day future sequence?|Ryan Harper|Tom Brake|Josh Alexander|Charlie Doyle|Hard|Ryan Harper|transition|finale flashforward|Celeste Dexter|character future|2003`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());

  if (![12, 13].includes(parts.length) || parts.some(part => !part)) {
    throw new Error(`Pack 399: malformed row ${index + 1}`);
  }

  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;

  if (specificTags.length === 6) specificTags.push(`answer focus: ${correctAnswer}`);

  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 399: invalid difficulty at row ${index + 1}`);
  }

  const question = stem.includes('Night and Day')
    ? stem
    : `In Night and Day, ${stem[0].toLowerCase()}${stem.slice(1)}`;

  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);

  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 399: repeated answer at row ${index + 1}`);
  }

  const tags = [...new Set([...commonTags, ...specificTags])];

  if (tags.length !== 13) {
    throw new Error(`Pack 399: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
