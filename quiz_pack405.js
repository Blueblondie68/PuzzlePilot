
// PuzzlePilot - Big Quiz - Pack 405
// 50/50 (BBC children's game show, 1997-2005): complete programme coverage.
// Complete WordPad-ready CommonJS file. First ID: tv_22552.
'use strict';

const FIRST_ID = 22552;
const commonTags = [
  'television', '50/50', 'CBBC',
  'BBC Scotland', 'British game show', 'children television'
];

// Question | correct answer | three distractors | difficulty | seven specific tags.
// Each question identifies 50/50 for mixed-category and specialist quiz play.
const rows = [
  `In which year did the children's game show 50/50 first air on BBC television?|1997|1993|2000|2004|Easy|7 April 1997|debut year|first transmission|1990s television|BBC One|premiere|show history`,
  `In which year did the BBC game show 50/50 end its original run?|2005|2001|2008|2010|Easy|12 July 2005|final year|2000s television|programme ending|final series|broadcast dates|show history`,
  `Who was the original presenter of the BBC children's game show 50/50?|Sally Gray|Angellica Bell|Sophie McDonnell|Kirsten O'Brien|Easy|Sally Gray|original presenter|1997 to 2002|first host|presenting career|on screen talent|casting`,
  `Which presenter succeeded Sally Gray on the children's game show 50/50?|Angellica Bell|Sophie McDonnell|Fearne Cotton|Konnie Huq|Easy|Angellica Bell|second presenter|2003 to 2004|host succession|presenting career|BBC children|casting`,
  `Who presented the final series of the children's game show 50/50 in 2005?|Sophie McDonnell|Sally Gray|Angellica Bell|Anna Williamson|Easy|Sophie McDonnell|2005 presenter|final host|ninth series|presenting career|BBC children|casting`,
  `Which part of the BBC produced the children's game show 50/50?|BBC Scotland|BBC Wales|BBC Northern Ireland|BBC West Midlands|Medium|Scottish production|regional BBC|television production|programme credits|Glasgow connection|1990s BBC|production origin`,
  `Which BBC television network first broadcast 50/50 in April 1997?|BBC One|BBC Two|BBC Three|BBC Four|Easy|BBC One|first broadcaster|1997 launch|children schedule|network history|UK television|original channel`,
  `How many series did the BBC children's game show 50/50 produce?|Nine|Five|Seven|Twelve|Easy|nine series|1997 to 2005|programme run|series count|television history|episode guide|broadcast chronology`,
  `How many episodes are commonly listed for the nine-series run of 50/50?|118|64|96|150|Medium|118 episodes|total programme count|nine series|Christmas editions|broadcast listings|programme statistics|BBC history`,
  `How many Christmas specials of 50/50 aired during its original run?|Four|One|Two|Eight|Medium|four Christmas specials|holiday programmes|1998 to 2001|festive editions|special broadcasts|episode history|BBC scheduling`,
  `What was the name of the computer that selected contestants in 50/50?|Flynn|Eddie|Ziggy|Dexter|Easy|Flynn computer|random selection|on screen character|game coordinator|electronic voice|number display|quiz format`,
  `What did the computer Flynn do before many physical rounds of 50/50?|Randomly selected numbered pupils|Judged the schools' homework|Chose a famous guest singer|Set the studio lighting colours|Medium|Flynn computer|number generator|random contestants|physical rounds|selection process|number display|game rules`,
  `How many schools competed against each other in a typical episode of 50/50?|Two|Three|Four|Five|Easy|two school teams|head to head|school competition|programme structure|studio teams|match format|pupil contestants`,
  `How many pupils represented each school on the BBC children's game show 50/50?|50|10|25|75|Easy|fifty pupils|team size|school representatives|programme title meaning|large teams|pupil contestants|audience`,
  `What number range was assigned to each school's pupils in 50/50?|1 to 50|1 to 20|1 to 75|1 to 100|Medium|numbered badges|one to fifty|individual contestants|Flynn selection|random numbers|team organisation|gameplay`,
  `What age group were most pupil contestants drawn from in the BBC game show 50/50?|11 and 12 year olds|Five and six year olds|16 and 17 year olds|University students|Medium|preteen pupils|ages eleven and twelve|school teams|casting age|child contestants|game show audience|eligibility`,
  `Which two colours identified the school teams in the first series of 50/50?|Orange and green|Blue and yellow|Red and white|Purple and black|Medium|orange team|green team|1997|original colour scheme|team shirts|first series|studio design`,
  `Which team colours were adopted by the children's game show 50/50 from its second series onward?|Blue and yellow|Orange and green|Red and black|Pink and silver|Easy|blue team|yellow team|team colours|1998 onwards|second series|costume design|studio competition`,
  `In which year did 50/50 switch its school team colours from orange and green to blue and yellow?|1998|1999|2002|2005|Medium|1998 colour change|second series|team shirts|visual identity|broadcast history|blue and yellow|format update`,
  `Where did the school teams sit during the games on 50/50?|In raised seating on opposite sides of the studio|Around one circular table|Behind identical closed doors|In separate outdoor tents|Medium|raised seating|studio layout|opposing sides|school audience|team positions|physical games|set design`,
  `Which type of activity was a regular feature of the physical challenges on 50/50?|Inflatable obstacle courses|Cooking full meals|Driving racing cars|Building garden sheds|Easy|inflatable games|obstacle courses|physical challenges|skills tests|school contestants|studio equipment|game format`,
  `What type of video did contestants watch in 50/50's observational quiz rounds?|A pop music video|A silent nature documentary|A television news bulletin|A feature film trailer|Medium|music video|observation task|pop culture|video clues|memory questions|all pupils|quiz round`,
  `What answers did pupils commonly give by keypad after watching a video on 50/50?|True or false|Yes no or maybe|One to ten|Left centre or right|Medium|true or false|keypad voting|observation round|individual responses|pop video|quiz mechanics|studio audience`,
  `How could all 100 pupils contribute to the quiz sections of 50/50?|By using their own answer buttons|By writing a joint letter|By taking a turn at a microphone each|By ringing a shared telephone|Medium|answer buttons|mass participation|hundred contestants|electronic keypads|quiz scoring|team points|audience involvement`,
  `What sound warned against teammates helping a pupil during an individual 50/50 quiz question?|A loud klaxon|A church bell|A drum roll|A whistle from the audience|Medium|klaxon|no prompting|individual quiz round|team help forbidden|game rule|studio sound|wrongful assistance`,
  `What scoring twist could make the final round particularly important on 50/50?|The points could be doubled|Every earlier score was cancelled|Only the losing team could score|Scores were converted into seconds|Medium|double points|final round|comeback opportunity|scoring twist|game structure|team totals|winning school`,
  `What kind of trophy was presented to the winning school in later series of 50/50?|A glass trophy|A golden microphone|A wooden shield|A silver football boot|Medium|glass trophy|winning school|school prize|later series|victory|award presentation|programme tradition`,
  `From which series did the winners of 50/50 receive a trophy?|Series five|Series two|Series seven|Series nine|Hard|series five|2001|trophy introduced|winning school|format evolution|prize history|glass award`,
  `Which dedicated children's channel also carried 50/50 in 2002?|CBBC Channel|BBC Four|ITV2|Channel 5|Medium|2002 broadcast|dedicated children channel|network scheduling|channel move|BBC platform|series six|UK transmission`,
  `Which 50/50 challenge involved collecting pieces to complete a puzzle after negotiating obstacles?|The Spike|The Pulse|The Observator|The Avalanche|Medium|The Spike|puzzle pieces|obstacle course|team builder|inflatable spikes|physical challenge|2005 games`,
  `In the 50/50 challenge The Spike, what was handed to a team's builder after a contestant completed the obstacles?|A puzzle piece|A musical instrument|A written exam paper|A trophy|Medium|The Spike|builder role|puzzle assembly|spike obstacles|teamwork|physical challenge|round rules`,
  `Which 50/50 quiz challenge let a randomly picked pupil risk a high individual score or pass to the whole team?|The Pulse|The Spike|The Cube|The Avalanche|Medium|The Pulse|risk or pass|general knowledge|individual contestant|team vote|scoring decision|quiz round`,
  `How many points could a pupil win by correctly answering alone in 50/50's The Pulse?|100|10|25|50|Hard|The Pulse|one hundred points|risk or pass|individual answer|scoring|quiz challenge|gamble`,
  `Which pair of physical challenges featured in the 2005 description of the game show 50/50?|The Cube and The Avalanche|The Eliminator and The Wall|The Crystal Dome and The Aztec Zone|The Gunge Tank and The Gauntlet|Medium|The Cube|The Avalanche|2005 format|named challenges|Sophie McDonnell|BBC archive|physical games`,
  `What animation technique was used for the opening titles of 50/50's original 1997 series?|Three-dimensional computer graphics|Traditional hand-drawn cel animation|Live-action stop-motion puppets|Black-and-white film montage|Hard|1997 titles|3D CGI|opening sequence|BBC Motion Graphics Archive|digital animation|design process|Clyde Lawson`,
  `What did the computer-animated opening titles of 50/50's 2005 series depict?|Examples of the programme's challenges|A map of British school districts|A history of the BBC|Photographs of past presenters only|Hard|2005 opening titles|3D animation|game challenges|Simon Smith|visual design|BBC archive|computer graphics`,
  `Which designer is credited for 50/50's 1997 opening titles in the BBC Motion Graphics Archive?|Clyde Lawson|Simon Smith|Saul Bass|Oliver Postgate|Hard|Clyde Lawson|1997 titles|opening credits|motion graphics|design attribution|archive credit|visual branding`,
  `Who is credited with the opening-title design of 50/50's 2005 series in the BBC Motion Graphics Archive?|Simon Smith|Clyde Lawson|Peter Firmin|John Halas|Hard|Simon Smith|2005 titles|opening credits|motion graphics|design attribution|archive credit|visual branding`,
  `Who began voicing 50/50's computer Flynn in 1998?|Matthew Davies|Dave Kelly|Gary Martin|Sally Gray|Hard|Matthew Davies|Flynn voice|1998 to 2000|computer character|voice actor|early series|role credits`,
  `Which performer voiced 50/50's computer Flynn for the final years of the series?|Dave Kelly|Matthew Davies|Gary Martin|Angellica Bell|Medium|Dave Kelly|Flynn voice|2002 to 2005|computer character|voice performer|final series|role credits`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 405: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 405: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('50/50')
    ? stem
    : `In 50/50, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(answer => answer.toLowerCase())).size !== 4) {
    throw new Error(`Pack 405: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length !== 13) {
    throw new Error(`Pack 405: expected 13 distinct tags at row ${index + 1}, got ${tags.length}`);
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
