// PuzzlePilot - The Bigggggg Quiz - Pack 433
// Any Dream Will Do (BBC One, 2007) - complete one-series talent competition.
// Follows Pack 432. First ID: tv_25430.
// WordPad-ready CommonJS. Saved WordPad copy must be checked before GitHub.
// Row format: question | correct answer | 3 distractors | difficulty | 7 specific tags.
'use strict';

const FIRST_ID = 25430;
const programme = 'Any Dream Will Do';
const commonTags = [
  'Television', 'British Television', 'BBC One', 'Any Dream Will Do',
  'Programme: Any Dream Will Do', '2007', 'Reality Television',
  'Talent Competition', 'Musical Theatre', 'Joseph and the Amazing Technicolor Dreamcoat'
];

const facts = `What West End role were the contestants competing to play?|Joseph|Pharaoh|Judas|Marius|Easy|Joseph Role|Casting Competition|Andrew Lloyd Webber|West End Revival|Leading Man|Biblical Musical|Prize
Which musical was being revived as the competition's prize production?|Joseph and the Amazing Technicolor Dreamcoat|Jesus Christ Superstar|The Phantom of the Opera|Evita|Easy|Joseph Musical|West End Revival|Andrew Lloyd Webber|Tim Rice|Title Role|Casting Search|Stage Production
Who presented the BBC's Joseph casting competition?|Graham Norton|Terry Wogan|Alan Titchmarsh|Bruce Forsyth|Easy|Graham Norton|Presenter|BBC One|Casting Show|Live Finals|Television Host|2007 Series
Which composer had the deciding vote in the contestants' weekly sing-offs?|Andrew Lloyd Webber|Tim Rice|Cameron Mackintosh|Stephen Sondheim|Easy|Andrew Lloyd Webber|Sing Off Decision|Composer|Head Judge|Joseph Musical|Elimination|Panel
Who sat on the judging panel as a theatre producer and Joseph co-producer?|Bill Kenwright|David Ian|Nigel Wright|Cameron Mackintosh|Medium|Bill Kenwright|Theatre Producer|Adelphi Theatre|Expert Panel|Joseph Co Producer|Musical Casting|Judge
Which judge was the contestants' vocal coach?|Zoë Tyler|Denise van Outen|Connie Fisher|Elaine Paige|Medium|Zoe Tyler|Vocal Coach|Expert Panel|Singing Technique|Joseph Contestants|Television Judge|2007
Which actor and musical-theatre performer returned as a judge after the BBC's Maria competition?|John Barrowman|Jason Donovan|Philip Schofield|Donny Osmond|Easy|John Barrowman|Expert Panel|Maria Talent Show|Musical Theatre Actor|Returning Judge|Joseph Search|BBC Competition
Which actress and presenter joined the judging panel?|Denise van Outen|Connie Fisher|Melanie Sykes|Elaine Paige|Easy|Denise Van Outen|Expert Panel|Actress|Television Presenter|Musical Theatre|Joseph Auditions|2007 Judge
Which producer from How Do You Solve a Problem Like Maria? was replaced by Bill Kenwright?|David Ian|Nigel Wright|Steven Pimlott|Tim Rice|Hard|David Ian|Bill Kenwright|Previous Format|Panel Change|Maria Show|Production History|Judging Panel
Which earlier Andrew Lloyd Webber casting competition preceded the Joseph search?|How Do You Solve a Problem Like Maria?|Over the Rainbow|I'd Do Anything|Grease Is the Word|Medium|Maria Competition|Predecessor Programme|Connie Fisher|Andrew Lloyd Webber|BBC Musical Search|The Sound Of Music|Format History
How many contestants reached the live studio stage of the Joseph competition?|Twelve|Eight|Ten|Sixteen|Easy|Twelve Finalists|Joseph Contestants|Live Shows|Joseph School|Selection Process|Competition Format|Dreamcoats
What was the training and selection stage before the live shows called?|Joseph School|Dreamcoat Academy|Musical Bootcamp|Theatre Workshop|Easy|Joseph School|Auditions|Training Stage|Singing Acting Dancing|Finalist Selection|Andrew Lloyd Webber|Competition Format
Which former Joseph star advised contestants during Joseph School?|Jason Donovan|Donny Osmond|Lee Mead|Phillip Schofield|Medium|Jason Donovan|Joseph School|Guest Mentor|Former Joseph|Australian Performer|Auditions Stage|Training
In which country did the last twenty hopefuls perform at Andrew Lloyd Webber's castle?|Ireland|Wales|Scotland|France|Medium|Ireland|Andrew Lloyd Webber Castle|Final Auditions|Twenty Hopefuls|Live Audience|Joseph School|Selection
Which music-industry manager watched the audition performances at the Irish castle?|Louis Walsh|Simon Cowell|Pete Waterman|Nick Knowles|Medium|Louis Walsh|Ireland Auditions|Industry Professional|Joseph School|Casting Selection|Live Audience|Music Manager
How many potential Josephs were chosen to wear individual coloured dreamcoats for the live finals?|Twelve|Ten|Six|Fifteen|Medium|Twelve Josephs|Coloured Dreamcoats|Live Finals|Contestants|Final Selection|Stage Costume|Format
How did the audience take part in deciding which contestant might be eliminated each week?|Telephone voting|Online-only voting|A postal ballot|Text messages only|Easy|Public Telephone Vote|Viewer Participation|Weekly Results|Bottom Two|2007 Voting|Contestants|Elimination
What happened when two contestants received the fewest public votes?|They sang again for Lloyd Webber|Both automatically went home|The judges held a secret ballot|They competed in a dance-off|Medium|Bottom Two|Sing Off|Andrew Lloyd Webber|Public Vote|Weekly Elimination|Musical Performance|Format
Who chose which contestant to save after the weekly sing-off?|Andrew Lloyd Webber|Graham Norton|Denise van Outen|Bill Kenwright|Medium|Andrew Lloyd Webber|Saved Contestant|Sing Off|Head Judge|Elimination Decision|Joseph Casting|Format
Which musical number accompanied a departing contestant handing back his dreamcoat?|Poor, Poor Joseph and Close Every Door|Go, Go, Go Joseph and Any Dream Will Do|One More Angel in Heaven and Song of the King|Jacob and Sons and Pharaoh's Dream Explained|Medium|Farewell Song|Poor Poor Joseph|Close Every Door|Dreamcoat Removal|Eliminated Contestant|Joseph Score|Weekly Results
Which colour coat did eventual winner Lee Mead wear during the competition?|Red|Purple|Yellow|Green|Medium|Lee Mead|Red Dreamcoat|Winner|Costume Colour|Live Finalist|Stage Identity|2007
Which colour coat was worn by runner-up Keith Jack?|Yellow|Red|Turquoise|Orange|Medium|Keith Jack|Yellow Dreamcoat|Runner Up|Costume Colour|Scottish Finalist|Live Shows|2007
Which finalist wore the purple dreamcoat?|Daniel Boys|Lee Mead|Keith Jack|Craig Chalmers|Medium|Daniel Boys|Purple Dreamcoat|Costume Colour|Week Six Exit|Live Finalist|2007 Contestants|West End
Which finalist wore an orange dreamcoat?|Ben Ellis|Lewis Bradley|Chris Barton|Seamus Cullen|Medium|Ben Ellis|Orange Dreamcoat|Costume Colour|Semi Finalist|Scarborough|2007 Finalist|Week Eight
Who became the first contestant eliminated during the live shows?|Chris Crosby|Johndeep More|Chris Barton|Antony Hansen|Easy|Chris Crosby|First Elimination|Week One|Nottingham|Bottom Two|Ben Ellis|Live Shows
Which contestant did Lloyd Webber save over Chris Crosby in the first sing-off?|Ben Ellis|Daniel Boys|Keith Jack|Rob McVeigh|Medium|Ben Ellis|Week One Sing Off|Chris Crosby|Bridge Over Troubled Water|Saved Contestant|Lloyd Webber|First Result
What song did Lee Mead sing during the very first live show?|Mack the Knife|Paint It Black|All Right Now|Daydream Believer|Medium|Lee Mead|Mack The Knife|Week One|Solo Performance|Live Debut|2007|Song Choice
Who performed Crazy Little Thing Called Love during the first live show?|Keith Jack|Lewis Bradley|Ben Ellis|Daniel Boys|Medium|Keith Jack|Crazy Little Thing Called Love|Queen|Week One|Solo Song|Live Finals|2007
Which song did Rob McVeigh perform in Week 1?|Summer of '69|Born to Run|Back for Good|Piano Man|Medium|Rob McVeigh|Summer Of 69|Bryan Adams|Week One|Solo Song|2007|Contestant
Who was eliminated after the Week 2 sing-off?|Johndeep More|Chris Barton|Antony Hansen|Seamus Cullen|Medium|Johndeep More|Week Two|Eliminated Contestant|Chris Barton|Let It Be|Bottom Two|2007
Which musician's concert gave the contestants a Week 2 stage-entrance challenge?|McFly|Take That|Westlife|The Feeling|Medium|McFly|Week Two Mission|Concert Entrance|Stage Presence|Performance Challenge|Live Audience|2007
Which Elton John song did Lewis Bradley perform in Week 2?|Sorry Seems to Be the Hardest Word|Crocodile Rock|Your Song|I'm Still Standing|Hard|Lewis Bradley|Sorry Seems To Be The Hardest Word|Elton John|Week Two|Pop Classics|Solo Performance|2007
Which contestant sang Piano Man in Week 2?|Rob McVeigh|Craig Chalmers|Chris Barton|Keith Jack|Medium|Rob McVeigh|Piano Man|Billy Joel|Week Two|Solo Performance|2007|Contestant
How many contestants were eliminated in Week 3?|Two|One|Three|Four|Easy|Week Three|Double Elimination|28 April 2007|Live Results|Joseph Finalists|Competition Format|BBC One
Who was the first of the two contestants eliminated in Week 3?|Antony Hansen|Seamus Cullen|Chris Barton|Rob McVeigh|Medium|Antony Hansen|Week Three|First Double Elimination|Craig Chalmers|Bryan Adams|Sing Off|2007
Who was the second contestant eliminated during the Week 3 double elimination?|Seamus Cullen|Ben Ellis|Daniel Boys|Lewis Bradley|Medium|Seamus Cullen|Week Three|Second Double Elimination|Ben Ellis|He Aint Heavy Hes My Brother|Sing Off|2007
Which contestant changed the lyrics of his farewell song after being eliminated in Week 3?|Seamus Cullen|Johndeep More|Chris Crosby|Rob McVeigh|Hard|Seamus Cullen|Changed Lyrics|Farewell Song|Week Three|Conspiracy Theory Remark|Elimination Reaction|Live Television
Which musical supplied the barricade-climbing mission in Week 4?|Les Misérables|The Phantom of the Opera|Wicked|The Lion King|Medium|Les Miserables|Barricade Climb|Week Four Mission|Do You Hear The People Sing|Performance Challenge|2007|Musical Theatre
Who was eliminated in Week 4 after singing against Craig Chalmers?|Chris Barton|Daniel Boys|Rob McVeigh|Ben Ellis|Medium|Chris Barton|Week Four|Craig Chalmers|The Long And Winding Road|Sing Off|Elimination|2007
Which contestant sang All Right Now in the Week 4 decades-themed show?|Lee Mead|Keith Jack|Daniel Boys|Lewis Bradley|Medium|Lee Mead|All Right Now|Free|Week Four|Decades Theme|Solo Song|2007
Who sang Dancing in the Moonlight in the Week 4 decades-themed show?|Lewis Bradley|Rob McVeigh|Craig Chalmers|Chris Barton|Medium|Lewis Bradley|Dancing In The Moonlight|Toploader|Week Four|2000s Decade|Solo Performance|2007
Which contestant was eliminated after the Week 5 sing-off?|Rob McVeigh|Craig Chalmers|Ben Ellis|Daniel Boys|Medium|Rob McVeigh|Week Five|Eliminated Contestant|Lewis Bradley|Tell Me Its Not True|Sing Off|2007
Which musical supplied the Week 5 sing-off song Tell Me It's Not True?|Blood Brothers|Les Misérables|Miss Saigon|Chess|Medium|Blood Brothers|Tell Me Its Not True|Week Five|Rob McVeigh|Sing Off|Willy Russell|Musical Theatre
Which contestant sang Leave Right Now in Week 5?|Lee Mead|Keith Jack|Ben Ellis|Daniel Boys|Medium|Lee Mead|Leave Right Now|Will Young|Week Five|Solo Performance|2007|2000s Pop
Which theatrical skill did the contestants practise with John Barrowman in Week 5?|Showing aggression|Stage sword-fighting|Tap dancing|Speaking in accents|Medium|John Barrowman|Week Five Mission|Aggression Exercise|Acting Skills|Contestant Training|Stage Performance|2007
Which contestant was eliminated in Week 6 despite strong earlier public support?|Daniel Boys|Craig Chalmers|Keith Jack|Ben Ellis|Medium|Daniel Boys|Week Six|Unexpected Elimination|Lewis Bradley|Bring Him Home|Sing Off|2007
Who was saved when Daniel Boys was eliminated in Week 6?|Lewis Bradley|Keith Jack|Lee Mead|Craig Chalmers|Medium|Lewis Bradley|Week Six Sing Off|Daniel Boys|Bring Him Home|Lloyd Webber Decision|Survival|2007
Which Rolling Stones song did Lee Mead perform in Week 6?|Paint It Black|Start Me Up|Satisfaction|Angie|Medium|Lee Mead|Paint It Black|Rolling Stones|Week Six|Colours Theme|Solo Performance|2007
Which trio sang That's Life during the Week 6 group performances?|Keith, Lewis and Ben|Lee, Craig and Daniel|Lee, Keith and Craig|Rob, Ben and Daniel|Hard|Thats Life|Frank Sinatra|Week Six Trio|Keith Jack|Lewis Bradley|Ben Ellis|Group Performance
Which guest singer chose Lee Mead to join him for You Raise Me Up in Week 7?|Josh Groban|Michael Ball|Jason Donovan|Donny Osmond|Easy|Josh Groban|Lee Mead|You Raise Me Up|Week Seven|Guest Duet|Special Performance|2007
Which contestant was eliminated in Week 7 after a sing-off with Ben Ellis?|Craig Chalmers|Lewis Bradley|Keith Jack|Daniel Boys|Medium|Craig Chalmers|Week Seven|Ben Ellis|I Made It Through The Rain|Sing Off|Elimination|2007
What song did Keith Jack sing as his Week 7 solo?|Let Me Entertain You|Could It Be Magic|Love Is All Around|Brown Eyed Girl|Medium|Keith Jack|Let Me Entertain You|Robbie Williams|Week Seven|Solo Performance|2007|Joseph Finalist
Which Andrew Lloyd Webber musical supplied Lee and Lewis's semi-final duet Oh What a Circus?|Evita|Starlight Express|Cats|Aspects of Love|Medium|Evita|Oh What A Circus|Lee Mead|Lewis Bradley|Week Eight|Semi Final Duet|Musical Theatre
Which Andrew Lloyd Webber musical supplied the semi-final duet I Am the Starlight?|Starlight Express|Evita|The Phantom of the Opera|Sunset Boulevard|Medium|Starlight Express|I Am The Starlight|Keith Jack|Ben Ellis|Semi Final|Week Eight|Musical Theatre
Who left in the semi-final after losing the Week 8 sing-off?|Ben Ellis|Lewis Bradley|Keith Jack|Lee Mead|Easy|Ben Ellis|Semi Final|Week Eight|I Dreamed A Dream|Lewis Bradley|Elimination|2007
Which Les Misérables song did Ben Ellis and Lewis Bradley sing in the semi-final sing-off?|I Dreamed a Dream|Bring Him Home|One Day More|Empty Chairs at Empty Tables|Medium|I Dreamed A Dream|Les Miserables|Ben Ellis|Lewis Bradley|Week Eight|Semi Final Sing Off|2007
Which contestant performed Livin' on a Prayer in the semi-final?|Lee Mead|Keith Jack|Lewis Bradley|Ben Ellis|Medium|Lee Mead|Livin On A Prayer|Bon Jovi|Week Eight|Solo Song|Semi Final|2007
Which three contestants reached the grand final?|Lee Mead, Keith Jack and Lewis Bradley|Lee Mead, Daniel Boys and Ben Ellis|Keith Jack, Craig Chalmers and Ben Ellis|Lee Mead, Rob McVeigh and Daniel Boys|Easy|Three Finalists|Lee Mead|Keith Jack|Lewis Bradley|Grand Final|9 June 2007|Final Line Up
Which finalist was eliminated first on the final night, finishing third?|Lewis Bradley|Keith Jack|Lee Mead|Ben Ellis|Easy|Lewis Bradley|Third Place|Final Night|Grand Final|Eliminated First|Public Vote|2007
Which song did Lewis Bradley sing as his first solo in the grand final?|Kiss|Faith|Hero|Sweet Caroline|Medium|Lewis Bradley|Kiss|Prince|Grand Final|Opening Solo|2007|Third Place
Which song did Keith Jack perform as his big-band number in the final?|Moondance|Beyond the Sea|New York New York|Mack the Knife|Medium|Keith Jack|Moondance|Van Morrison|Big Band Round|Grand Final|Runner Up|2007
Which song did Lee Mead perform as his big-band number in the final?|New York, New York|Beyond the Sea|Moondance|For Once in My Life|Medium|Lee Mead|New York New York|Big Band Round|Grand Final|Frank Sinatra|Winner|2007
Which earlier performance did Lee Mead reprise in the final?|Paint It Black|Mack the Knife|Leave Right Now|All Right Now|Medium|Lee Mead|Paint It Black|Rolling Stones|Grand Final|Favourite Song Reprise|Winner|2007
Which earlier performance did Keith Jack reprise in the final?|Always on My Mind|Brown Eyed Girl|Crocodile Rock|Who Am I|Medium|Keith Jack|Always On My Mind|Grand Final|Favourite Song Reprise|Runner Up|2007|Final Duet
Which song from Jesus Christ Superstar did the final two perform together?|Superstar|I Don't Know How to Love Him|Heaven on Their Minds|Gethsemane|Medium|Superstar|Jesus Christ Superstar|Lee Mead|Keith Jack|Grand Final Duet|Andrew Lloyd Webber|Tim Rice
Which school choir joined all twelve Josephs for Go, Go, Go Joseph at the final?|Brampton Primary School|St Mary's Primary Choir|Millfield School Choir|St Paul's Cathedral Choir|Hard|Brampton Primary School|East Ham|Go Go Go Joseph|School Choir|Grand Final|National Choir Search|2007
Who won the final public vote to play Joseph in the West End?|Lee Mead|Keith Jack|Lewis Bradley|Ben Ellis|Easy|Lee Mead|Winner|Final Vote|9 June 2007|Joseph Role|West End|Television Finale
Who finished runner-up to Lee Mead in the final?|Keith Jack|Lewis Bradley|Daniel Boys|Craig Chalmers|Easy|Keith Jack|Runner Up|Grand Final|Second Place|Lee Mead|Scottish Singer|2007
Roughly how many votes were cast during the grand final?|More than three million|About one hundred thousand|About five hundred thousand|More than ten million|Medium|Final Vote Count|Three Million Votes|Grand Final|Telephone Voting|Audience Participation|2007|Results
At which West End theatre did Lee Mead win the chance to play Joseph?|Adelphi Theatre|London Palladium|Drury Lane Theatre|Lyceum Theatre|Easy|Adelphi Theatre|Lee Mead|West End Revival|Joseph Musical|Prize Contract|London Stage|2007
Who wrote the lyrics for Joseph and the Amazing Technicolor Dreamcoat?|Tim Rice|Stephen Sondheim|Lionel Bart|Don Black|Medium|Tim Rice|Joseph Lyrics|Andrew Lloyd Webber|Musical Writing|Theatre History|Stage Production|Songwriter
In which month of 2007 did Lee Mead's Joseph revival open at the Adelphi?|July|May|September|November|Medium|July 2007|Adelphi Theatre|Lee Mead|West End Opening|Joseph Revival|Stage Debut|Prize
Which former musical casting show winner starred with Lee Mead in the Christmas special When Joseph Met Maria?|Connie Fisher|Jodie Prenger|Danielle Hope|Jessie Buckley|Medium|Connie Fisher|When Joseph Met Maria|Christmas Special|How Do You Solve A Problem Like Maria|Lee Mead|BBC One|December 2007
Which BBC charity benefited from Lee Mead's post-show Any Dream Will Do single?|Children in Need|Comic Relief|Sport Relief|The Prince's Trust|Medium|Children In Need|Lee Mead Single|Charity Release|Close Every Door|2007 Recording|BBC Fundraising|Musical Song
What was the highest UK Singles Chart position reached by Lee Mead's Any Dream Will Do single?|Number two|Number one|Number five|Number ten|Medium|Number Two|UK Singles Chart|Lee Mead Single|2007|Children In Need|Music Charts|Post Show Success
Who joined Lee Mead on the single's Close Every Door recording?|Keith Jack and Lewis Bradley|Daniel Boys and Ben Ellis|Craig Chalmers and Rob McVeigh|Chris Barton and Seamus Cullen|Medium|Close Every Door|Keith Jack|Lewis Bradley|Lee Mead|Charity Single|Recording|2007
Which former Joseph actors performed with Lee Mead at the Concert for Diana?|Donny Osmond and Jason Donovan|Michael Ball and John Barrowman|Robson Green and Jerome Flynn|Bill Kenwright and Tim Rice|Medium|Concert For Diana|Donny Osmond|Jason Donovan|Lee Mead|Wembley Stadium|2007|Post Show Appearance
Which finalist went on to play Joseph in Bill Kenwright's touring production in 2007?|Craig Chalmers|Daniel Boys|Rob McVeigh|Johndeep More|Medium|Craig Chalmers|Touring Joseph|Bill Kenwright|2007|Fifth Place|Post Show Casting|Stage Career
Which role did runner-up Keith Jack initially take in the touring production of Joseph?|The Narrator|Pharaoh|Potiphar|Jacob|Medium|Keith Jack|The Narrator|Touring Production|Bill Kenwright|Joseph Musical|Runner Up Career|2007
Which boy band of former Joseph contestants was formed under Bill Kenwright?|Dream On|The Josephs|Stage Five|The Dreamcoats|Hard|Dream On|Bill Kenwright|Antony Hansen|Craig Chalmers|Former Contestants|Musical Group|2008
Which programme's final was broadcast against the Any Dream Will Do finale?|Grease Is the Word|Britain's Got Talent|The X Factor|Soapstar Superstar|Medium|Grease Is The Word|ITV Rival|Grand Final Scheduling|9 June 2007|BBC Ratings|Talent Television|Competition
Which two televised stages preceded the live studio competition?|Auditions and Joseph School|The Grand Final and Winners Story|Semi Final and Results|West End Opening and Rehearsals|Medium|Audition Episodes|Joseph School|31 March 2007|7 April 2007|Pre Live Stage|Competition Structure|BBC One
Which farewell special followed the winner's journey later in December 2007?|Joseph, The Winner's Story|When Joseph Met Maria|The Search for Nancy|Dreamcoat Rehearsals Live|Medium|Joseph The Winners Story|Lee Mead|December 2007|Follow Up Special|BBC One|Post Final|Programme History`;


// Full 2007 audit: 2007 NTA nominations, early audition stages, finale and stage careers.
// Original question IDs and answers remain unchanged.
const AUDIT_ORIGINAL_COUNT = 83;
const AUDIT_FIRST_ID = 42422;
const auditFacts = `For which award was Any Dream Will Do nominated at the 2007 National Television Awards?|Most Popular Talent Show|Most Popular Drama|Most Popular Reality Programme|Most Popular Comedy Programme|Medium|2007 National Television Awards|Talent Show Nomination|Royal Albert Hall|Viewer Voting|Awards Shortlist|BBC One|UK Television Awards
Which competing programme won the 2007 National Television Award in Any Dream Will Do's nominated category?|The X Factor|Britain's Got Talent|Strictly Come Dancing|Dancing on Ice|Medium|The X Factor|2007 National Television Awards|Most Popular Talent Show|Award Winner|BBC ITV Rivalry|Audience Voting|Competition Award
On what date was the final of Any Dream Will Do first broadcast?|9 June 2007|2 June 2007|31 March 2007|17 July 2007|Medium|June Ninth|2007 Finale|BBC One Broadcast|Competition End|Lee Mead Winner|Final Vote|Television Schedule
On what date did Any Dream Will Do first air on BBC One?|31 March 2007|14 April 2007|9 June 2007|1 September 2007|Medium|March Thirty First|BBC Debut|2007 Launch|Joseph Casting|Programme Premiere|Auditions|Broadcast History
How many singers were called back to London after the opening auditions for Any Dream Will Do?|100|20|12|52|Medium|Hundred Hopefuls|London Recall|Initial Auditions|Casting Funnel|Joseph Hopefuls|2007 Selection|First Stage
How many hopefuls entered Joseph School in Any Dream Will Do after two additional singers were selected?|52|50|28|20|Hard|Joseph School|Fifty Two Hopefuls|Additional Entrants|Casting Selection|BBC Competition|Audition Stage|Training Week
How many contestants remained after the third day of Joseph School on Any Dream Will Do?|20|28|12|50|Medium|Twenty Contestants|Joseph School|Third Day|Competition Selection|Final Recall|Ireland Castle|Audition Stages
Who headed the live band for the studio performances on Any Dream Will Do?|Nigel Wright|Tim Rice|Bill Kenwright|David Ian|Medium|Nigel Wright|Musical Director|Live Band|Studio Performances|Backing Singers|BBC Entertainment|Series Music
Which musical supplied Maria sung by the three finalists of Any Dream Will Do?|West Side Story|Joseph and the Amazing Technicolor Dreamcoat|Les Miserables|The Sound of Music|Medium|West Side Story|Maria Song|Finalists Trio|Lee Keith Lewis|Musical Theatre|2007 Final|Group Song
Which Thin Lizzy hit did returning eliminated contestants sing in the Any Dream Will Do finale?|The Boys Are Back in Town|Dancing in the Moonlight|Whiskey in the Jar|Rosalie|Medium|Thin Lizzy|The Boys Are Back in Town|Former Contestants|Group Performance|2007 Final|Reunion Song|Grand Finale
Which song did Connie Fisher perform during the final of Any Dream Will Do?|The Sound of Music|My Favourite Things|Somewhere Over the Rainbow|Defying Gravity|Medium|Connie Fisher|The Sound of Music|Final Guest Performance|Maria Winner|BBC Casting Shows|Guest Solo|2007 Finale
What alteration did the BBC make to the run of Any Dream Will Do as the finale approached?|Extend it by one week|Bring back all eliminated singers to compete|Add another judging panel|Replace the final with two heats|Medium|Extra Week|Live Shows|Schedule Change|Double Elimination Avoided|BBC Decision|2007 Final|Broadcast Extension
Around how many viewers watched the results programme of the Any Dream Will Do final?|Nearly eight million|Around two million|Fewer than one million|Over twenty million|Medium|Final Results|Nearly Eight Million|2007 Viewing Figures|BBC Ratings|ITV Competition|Final Audience|Television Popularity
How long was the initial Joseph role contract awarded to the winner of Any Dream Will Do?|Six months|Three weeks|Two years|Five years|Medium|Lee Mead|Initial Contract|Six Months|Joseph Role|West End Prize|Production Agreement|Later Extension
Which Any Dream Will Do finalist later played Link Larkin in the West End premiere of Hairspray?|Ben James-Ellis|Craig Chalmers|Keith Jack|Lewis Bradley|Medium|Ben James Ellis|Hairspray|Link Larkin|Shaftesbury Theatre|Post Show Career|2007 West End|Musical Casting
Which role in Avenue Q was later played by Any Dream Will Do finalist Daniel Boys?|Princeton|Nicky|Rod|Brian|Medium|Daniel Boys|Avenue Q|Princeton|Noel Coward Theatre|Post Show Career|London Stage|Musical Theatre
Which Any Dream Will Do finalist covered the role of Joseph during Lee Mead's holiday absences?|Lewis Bradley|Keith Jack|Rob McVeigh|Daniel Boys|Medium|Lewis Bradley|Joseph Understudy|Adelphi Theatre|Lee Mead Absence|West End Cover|Finalist Career|Post Competition
Which role did Any Dream Will Do contestant Antony Hansen play in the 2008 touring production of Joseph?|Pharaoh|Jacob|The Narrator|Potiphar|Medium|Antony Hansen|Pharaoh|Joseph Tour|Bill Kenwright|2008 Theatre|Post Show Career|Musical Stage
Which Any Dream Will Do finalist tried to represent the United Kingdom at Eurovision in 2008?|Rob McVeigh|Keith Jack|Ben Ellis|Craig Chalmers|Medium|Rob McVeigh|Eurovision Selection|2008|Song For Europe|Post Show Career|Contestant Path|Musical Competition
Which country launched a similar Joseph casting programme to Any Dream Will Do in 2008?|The Netherlands|Australia|Canada|Germany|Medium|Netherlands|International Adaptation|Op Zoek Naar Joseph|2008 Format|Dutch Theatre|Joseph Search|BBC Format
What was the Dutch Joseph casting series adapted from Any Dream Will Do called?|Op zoek naar Joseph|Deutschland sucht Joseph|Joseph Superstar|Wie wordt Joseph|Hard|Op Zoek Naar Joseph|Dutch Adaptation|Netherlands|Musical Casting|International Version|2008 Show|Franchise History
Who won the Dutch Joseph casting competition that adapted Any Dream Will Do in 2008?|Freek Bartels|Lee Mead|Keith Jack|Willemijn Verkaik|Hard|Freek Bartels|Dutch Winner|Op Zoek Naar Joseph|Netherlands|2008 Champion|Joseph Role|International Casting`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(s => s.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields for ${id}; got ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(v => !v))
    throw new Error(`Empty field in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or specific tags in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  if (new Set([correctAnswer, ...answers].map(s => s.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : question.startsWith('In which ')
      ? 'In Any Dream Will Do, which ' + question.slice(9)
      : 'In Any Dream Will Do, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return {
    id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (
  !questions.length || questions[0].id !== 'tv_25430' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: Any Dream Will Do') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 433 exported question validation failed');

module.exports = questions;