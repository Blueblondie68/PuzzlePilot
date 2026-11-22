// PuzzlePilot - The Bigggggg Quiz - Pack 432
// All Together Now (BBC One): series 1-2 (2018-2019) and celebrity special.
// Full programme coverage; begins at tv_25348, following Pack 431.
// WordPad-ready CommonJS. UK programme finished in 2019, all episodes and special covered.
// Row format: question | correct | wrong 1 | wrong 2 | wrong 3 | difficulty | 7 specific tags.
'use strict';

const FIRST_ID = 25348;
const programme = 'All Together Now';
const commonTags = [
  'Television', 'British Television', 'BBC One', 'All Together Now',
  'Programme: All Together Now', 'Reality Television', 'Singing Competition',
  'Music Talent Show', 'The 100', '2018-2019'
];

const facts = `Which comedian hosted the BBC singing competition All Together Now?|Rob Beckett|Alan Carr|Joel Dommett|Paddy McGuinness|Easy|Rob Beckett|Presenter|BBC One|Host|Both Series|Competition Format|Comedian
Which former Spice Girl led the judging group known as The 100?|Geri Horner|Melanie C|Emma Bunton|Mel B|Easy|Geri Horner|Ginger Spice|Spice Girls|The 100|Judging Captain|Both Series|Panel Leader
How many members made up the show's judging panel?|100|50|75|120|Easy|The 100|Judges|Panel Size|Score Maximum|Audience Participation|Competition Rules|Format
How did a judge indicate support for a singer?|By standing and singing along|By waving a flag|By pressing a red buzzer|By holding up a scorecard|Easy|The 100|Standing Judges|Singing Along|Scoring System|Live Performance|Competition Rules|Judging
What was the maximum possible performance score?|100|10|50|200|Easy|Maximum Score|100 Points|The 100|Scoring|Judges Standing|Competition Format|Perfect Score
What cash prize was awarded to each series champion?|£50,000|£25,000|£100,000|£10,000|Easy|Fifty Thousand Pounds|Winner Prize|Cash Award|Series Champion|BBC Competition|Final|Prize Money
How many regular series of the British All Together Now were shown?|Two|One|Three|Four|Easy|Series Count|Series One|Series Two|Programme History|BBC One|Cancellation|2018-2019
How many episodes made up each regular series of All Together Now?|Six|Eight|Ten|Twelve|Medium|Six Episodes|Five Heats|Grand Final|Series Structure|Programme Format|Broadcast Schedule|Episodes
How many heats took place before each series final?|Five|Four|Six|Eight|Medium|Five Heats|Competition Structure|Series Format|Qualifying Rounds|The 100|Grand Final|Episodes
How many acts qualified from each heat for the series final?|Two|One|Three|Four|Medium|Two Qualifiers|Heats|Finalists|Qualification|Competition Rules|Top Score|Sing Off
How did a heat's highest-scoring act reach the final?|Automatically|By audience telephone vote|By winning a second song duel|By a wildcard draw|Medium|Heat Winner|Automatic Qualification|Top Scorer|Finalist|Heats|Scoring Rules|The 100
Which acts contested the sing-off at the end of each heat?|Second and third on the podium|First and fourth on the podium|The two lowest scorers|Two acts chosen by the presenter|Medium|Sing Off|Second Place|Third Place|Podium|Heat Qualification|Competition Rules|The 100
What happened to scores before the heat sing-off?|They were reset to zero|They were doubled|They were carried forward|They were halved|Medium|Scores Reset|Sing Off|Heat Rules|New Song|Competition Mechanics|Judging|The 100
How many acts competed in each series grand final?|Ten|Five|Eight|Twelve|Medium|Ten Finalists|Grand Final|Five Heats|Two Qualifiers|Series Format|The 100|Competition Structure
How many finalists sang again in the deciding final sing-off?|Three|Two|Four|Five|Medium|Final Sing Off|Three Acts|Top Three|Winning Performance|Scores Reset|Grand Final|Competition Rules
Which production company made All Together Now for BBC One?|Remarkable Entertainment|Thames Television|Wall to Wall|Tiger Aspect|Hard|Remarkable Entertainment|Production Company|Endemol Shine|BBC One|Programme Credits|Television Production|Format
Who won the first series of All Together Now in 2018?|Michael Rice|James Thompson|Karl Lewis|Jodie Steele|Easy|Michael Rice|Series One|2018 Winner|Grand Final|Fifty Thousand Pounds|British Singer|Champion
Who finished second in the 2018 series final?|James Thompson|Michael Rice|Victoria Oruwari|Rachael Hawnt|Medium|James Thompson|Series One Final|2018 Runner Up|Final Sing Off|Second Place|Grand Final|Soul Singer
Who took third place in the 2018 series final?|Victoria Oruwari|Jodie Steele|Rachael Hawnt|Tabi Gazele|Medium|Victoria Oruwari|2018 Final|Third Place|Series One|Grand Final|Final Sing Off|Musical Theatre
Which song earned Michael Rice a perfect score in his first heat?|Proud Mary|Hallelujah|Crazy in Love|Shout|Medium|Michael Rice|Proud Mary|Tina Turner|2018 Heat One|100 Points|Perfect Score|Series One
How many of The 100 stood for Michael Rice's Proud Mary performance?|100|94|95|88|Medium|Michael Rice|Proud Mary|Perfect Score|Heat One|The 100|Series One|Performance Result
Which group joined Michael Rice from the first 2018 heat in the grand final?|The Sundaes|The Wild Tonics|Triple Fret|The Apple Blossoms|Medium|The Sundaes|Michael Rice|Heat One|Sing Off Winner|Shout|2018 Finalist|Series One
Which group earned 88 points singing No More Tears in the opening 2018 heat?|The Sundaes|Sista Sista|Triple Fret|The Wild Tonics|Hard|The Sundaes|No More Tears|Barbra Streisand|Donna Summer|Heat One|88 Points|2018
Which contestant mixed Nessun Dorma with Paradise City in the first 2018 heat?|Chrissy Caine|Chloe Griffiths|Sara Santoni|Gold Kay|Hard|Chrissy Caine|Nessun Dorma|Paradise City|Puccini|Guns N Roses|Heat One|2018 Mashup
Who won the second heat of the 2018 series with Treasure?|Tabi Gazele|Valentina|Karl Lewis|Sophie Clarke|Medium|Tabi Gazele|Treasure|Bruno Mars|Heat Two|96 Points|Series One|Automatic Qualifier
Which contestant won the second 2018 heat's sing-off with Wonderwall?|Karl Lewis|Valentina|Peter Eldridge|Jordan Yates|Medium|Karl Lewis|Wonderwall|Oasis|Heat Two|Sing Off Winner|2018 Finalist|82 Points
Who won the third heat in 2018 with I Wanna Dance with Somebody?|Jodie Steele|Norbert Bondin|Chloe Griffiths|Harriette Mullen|Medium|Jodie Steele|Whitney Houston|I Wanna Dance With Somebody|Heat Three|97 Points|2018 Finalist|Series One
Who reached the 2018 final from the third heat after singing Get Here in the sing-off?|Chloe Griffiths|Sara Santoni|Blake Anderson|Natalie Lomax|Medium|Chloe Griffiths|Get Here|Oleta Adams|Heat Three|Sing Off|2018 Finalist|31 Points
Who performed a version of Chandelier in the third 2018 heat?|Blake Anderson|Norbert Bondin|Steve Charles|Sean Murphy|Hard|Blake Anderson|Chandelier|Sia|Heat Three|2018|Performance|75 Points
Which contestant won the fourth heat of 2018 singing Climb Ev'ry Mountain?|Victoria Oruwari|Rachael Hawnt|Scott Dale|Ky Lewis|Medium|Victoria Oruwari|Climb Every Mountain|The Sound Of Music|Heat Four|95 Points|Finalist|2018
Which contestant won the fourth 2018 heat sing-off with Alone?|Rachael Hawnt|Scott Dale|Ashleigh McHugh|Elinor Fortune|Medium|Rachael Hawnt|Alone|Heart|Heat Four|97 Points|Sing Off Winner|Series One
Who earned 100 points in the fifth 2018 heat with Ordinary People?|James Thompson|Michael Rice|Lee England|Rachel Lee Stephens|Medium|James Thompson|Ordinary People|John Legend|Heat Five|Perfect Score|2018|Finalist
Who joined James Thompson in the 2018 final after singing Run in the fifth heat's sing-off?|Rachel Lee Stephens|Fay Parkinson|Lee England|Stacey Phipps|Hard|Rachel Lee Stephens|Run|Snow Patrol|Heat Five|94 Points|Sing Off Winner|Finalist
Which song did Michael Rice perform in the first round of the 2018 grand final?|Crazy in Love|Proud Mary|Hallelujah|Never Too Much|Medium|Michael Rice|Crazy In Love|Beyonce|Series One|Final First Round|95 Points|2018
Which song won Michael Rice the 2018 final sing-off?|Hallelujah|Proud Mary|Crazy in Love|Feeling Good|Easy|Michael Rice|Hallelujah|Leonard Cohen|Final Sing Off|2018 Champion|94 Points|Series One
What score did Michael Rice earn with Hallelujah to win the 2018 series?|94|100|84|95|Medium|Michael Rice|94 Points|Hallelujah|2018 Final|Winning Score|The 100|Series One
Which Luther Vandross song did James Thompson sing in the 2018 final sing-off?|Never Too Much|Here and Now|Dance with My Father|A House Is Not a Home|Medium|James Thompson|Never Too Much|Luther Vandross|2018 Final|Runner Up|84 Points|Sing Off
Which musical supplied Victoria Oruwari's first song in the 2018 final?|The Phantom of the Opera|Les Miserables|Chicago|Dreamgirls|Hard|Victoria Oruwari|All I Ask Of You|Phantom Of The Opera|Series One Final|Musical Theatre|2018|84 Points
Which competition did Michael Rice later represent the UK in during 2019?|Eurovision Song Contest|The Voice UK|Britain's Got Talent|X Factor Celebrity|Easy|Michael Rice|Eurovision 2019|United Kingdom|Career After Show|Bigger Than Us|Tel Aviv|Series One Winner
What was Michael Rice's United Kingdom Eurovision entry called?|Bigger Than Us|Hallelujah|Rise Up|Never Enough|Medium|Michael Rice|Bigger Than Us|Eurovision 2019|UK Entry|Tel Aviv|Music Career|Post Competition
Which EastEnders actress won the 2018 All Together Now celebrity special?|Laurie Brett|Alison Hammond|Gemma Collins|Amber Davies|Easy|Laurie Brett|Celebrity Winner|EastEnders|Christmas 2018|Jane Beale|Celebrity Special|Actress
On which occasion was the celebrity special broadcast?|Christmas Eve 2018|New Year's Eve 2018|Easter Sunday 2019|Boxing Day 2018|Medium|Celebrity Special|Christmas Eve|24 December 2018|BBC One|One Off Episode|Programme History|Festive Show
Which Tina Turner hit earned Laurie Brett victory in the celebrity sing-off?|The Best|Proud Mary|Private Dancer|What's Love Got to Do with It|Easy|Laurie Brett|The Best|Tina Turner|Winning Song|Celebrity Special|99 Points|Christmas 2018
What score won Laurie Brett the celebrity special sing-off?|99|92|97|100|Medium|Laurie Brett|99 Points|Final Sing Off|The Best|Celebrity Winner|Christmas Special|The 100
Which comedian finished as runner-up in the celebrity special?|Omid Djalili|Sara Pascoe|Rob Beckett|Chris Kamara|Medium|Omid Djalili|Celebrity Runner Up|Comedian|Christmas 2018|Final Sing Off|Nobody Does It Better|75 Points
Which song did Omid Djalili perform in the celebrity special's opening round?|Sway|Nobody Does It Better|Your Song|Big Spender|Medium|Omid Djalili|Sway|Dean Martin|Opening Round|97 Points|Celebrity Special|2018
Which reality TV star performed Big Spender during the celebrity special?|Gemma Collins|Amber Davies|Alison Hammond|Laurie Brett|Easy|Gemma Collins|Big Spender|Shirley Bassey|Celebrity Special|2018|88 Points|Reality Television
Which song did Gemma Collins perform in the celebrity final sing-off?|This Is Me|Big Spender|Gold|Titanium|Medium|Gemma Collins|This Is Me|The Greatest Showman|Christmas Special|Third Place|Sing Off|39 Points
Which former footballer performed Your Song in the celebrity special?|Chris Kamara|Ben Foden|Omid Djalili|Tyger Drew-Honey|Medium|Chris Kamara|Your Song|Elton John|Football Presenter|Celebrity Special|78 Points|2018
Which England rugby player sang Shotgun in the 2018 celebrity special?|Ben Foden|Chris Kamara|Tyger Drew-Honey|Omid Djalili|Medium|Ben Foden|Shotgun|George Ezra|England Rugby|Celebrity Special|2018|71 Points
Which television presenter performed the Spandau Ballet hit Gold in the celebrity special?|Alison Hammond|Sara Pascoe|Laurie Brett|Gemma Collins|Medium|Alison Hammond|Gold|Spandau Ballet|TV Presenter|Celebrity Special|2018|71 Points
Which comedian sang It Must Have Been Love in the celebrity special?|Sara Pascoe|Omid Djalili|Chris Kamara|Ben Foden|Medium|Sara Pascoe|Roxette|It Must Have Been Love|Comedian|Celebrity Special|44 Points|2018
Which Love Island winner performed Titanium in the 2018 celebrity special?|Amber Davies|Gemma Collins|Laurie Brett|Alison Hammond|Medium|Amber Davies|Titanium|David Guetta|Sia|Love Island|Celebrity Special|2018
Who won the second series of All Together Now in 2019?|Shellyann Evans|Bernadette Bangura|Southern Flavor|Anastasia Quinton-Smith|Easy|Shellyann Evans|2019 Champion|Series Two|BBC One|Final Winner|100 Points|Singer
Who finished second in the 2019 final?|Southern Flavor|Bernadette Bangura|Xavier|Lywis Cowles|Medium|Southern Flavor|Southern Flavour|2019 Runner Up|Series Two Final|Final Sing Off|Group|68 Points
Who placed third in the second series' grand final?|Bernadette Bangura|Shellyann Evans|Nicola Greenwood|Britt Lenting|Medium|Bernadette Bangura|Third Place|2019 Final|Series Two|Final Sing Off|Halo|23 Points
Which group won the first heat of 2019 singing Valerie?|Southern Flavor|Adam and Nicole|The Hurst Sisters|Liv and Oli|Medium|Southern Flavor|Valerie|The Zutons|2019 Heat One|95 Points|Automatic Qualifier|Series Two
Which performer advanced from the first 2019 heat's sing-off with Skin?|Lywis Cowles|Laura Baird|Lucy|Kike Adenowo|Medium|Lywis Cowles|Skin|Rag N Bone Man|2019 Heat One|Sing Off Winner|84 Points|Series Two
Who sang When We Were Young by Adele in the first 2019 heat?|Laura Baird|Veronica Green|Lorena Dale|Lucy|Hard|Laura Baird|When We Were Young|Adele|Heat One|85 Points|Series Two|2019
Which contestant performed Get the Party Started in the opening 2019 heat?|Veronica Green|Tara|Chelsea Smith|Nicole McNally|Hard|Veronica Green|Get The Party Started|Pink|Heat One|77 Points|2019|Series Two
Who won the second 2019 heat with Locked Out of Heaven?|Xavier|Gary Hughes|Chris|James|Medium|Xavier|Locked Out Of Heaven|Bruno Mars|Heat Two|97 Points|2019|Finalist
Which performer advanced from the second 2019 heat after the sing-off?|Bernadette Bangura|Mandi Fisher|Aimee Neill|Gary|Medium|Bernadette Bangura|Heat Two|Sing Off Winner|2019|Somebody Elses Guy|Finalist|Series Two
Who scored 92 singing I (Who Have Nothing) in the second 2019 heat?|Mandi Fisher|Whitney|Aimee Neill|Veronica Green|Hard|Mandi Fisher|I Who Have Nothing|Shirley Bassey|Heat Two|92 Points|2019|Series Two
Which singer won the third 2019 heat performing Master Blaster?|Ben Lancaster|Nicola Greenwood|Hilary John|Dale Ali|Medium|Ben Lancaster|Master Blaster|Stevie Wonder|Heat Three|86 Points|2019|Series Two
Which singer won the third 2019 heat's sing-off with Wake Me Up?|Nicola Greenwood|Carys Lloyd|Selina|Maia|Medium|Nicola Greenwood|Wake Me Up|Avicii|Heat Three|94 Points|Sing Off|2019
Which My Fair Lady song did Hilary John sing in the third 2019 heat?|I Could Have Danced All Night|On the Street Where You Live|Wouldn't It Be Loverly|Get Me to the Church on Time|Hard|Hilary John|I Could Have Danced All Night|My Fair Lady|Heat Three|64 Points|Musical Theatre|2019
Who won the fourth 2019 heat with Rise Up?|Shellyann Evans|Danny Wade|Aron Fisahaye|Kelly Agbowu|Easy|Shellyann Evans|Rise Up|Andra Day|Heat Four|98 Points|2019|Finalist
Which contestant qualified from the fourth 2019 heat sing-off with I Have Nothing?|Aron Fisahaye|Danny Wade|Kelly Agbowu|Chris Folwell|Medium|Aron Fisahaye|I Have Nothing|Whitney Houston|Heat Four|Sing Off Winner|63 Points|2019
Which Les Miserables number did Danny Wade sing in the fourth 2019 heat?|Bring Him Home|I Dreamed a Dream|One Day More|Stars|Medium|Danny Wade|Bring Him Home|Les Miserables|Musical Theatre|Heat Four|89 Points|2019
Which contestant won the fifth 2019 heat singing The Power of Love?|Anastasia Quinton-Smith|Britt Lenting|Chelsea Smith|Micaela McGillian|Medium|Anastasia Quinton Smith|The Power Of Love|Frankie Goes To Hollywood|Heat Five|96 Points|2019|Series Two
Who won the fifth 2019 heat's sing-off with Never Enough?|Britt Lenting|Micaela McGillian|Chelsea Smith|Jake|Medium|Britt Lenting|Never Enough|The Greatest Showman|2019 Heat Five|Sing Off Winner|93 Points|Series Two
Who sang a version of Drake's Hotline Bling in the fifth 2019 heat?|Micaela McGillian|Chelsea Smith|The Hurst Sisters|Anastasia Quinton-Smith|Hard|Micaela McGillian|Hotline Bling|Drake|Heat Five|66 Points|2019|Series Two
Which contestant performed I Am What I Am from La Cage aux Folles in the fifth 2019 heat?|Harrison Knights|Jake|Britt Lenting|Liv and Oli|Medium|Harrison Knights|I Am What I Am|La Cage Aux Folles|Heat Five|Musical Theatre|2019|Series Two
Which act sang Say You Won't Let Go in the fifth 2019 heat?|Liv and Oli|Southern Flavor|The Hurst Sisters|Adam and Nicole|Medium|Liv And Oli|Say You Wont Let Go|James Arthur|Heat Five|Duet|2019|Series Two
Which song did Shellyann Evans sing to top the first round of the 2019 final?|What About Us|Alive|Rise Up|Purple Rain|Medium|Shellyann Evans|What About Us|Pink|2019 Final|99 Points|First Round|Series Two
What score did Shellyann Evans achieve in the first round of the 2019 final?|99|100|96|98|Medium|Shellyann Evans|99 Points|What About Us|Final First Round|2019|The 100|Series Two
Which song won Shellyann Evans the 2019 final sing-off?|Alive|Rise Up|What About Us|Halo|Easy|Shellyann Evans|Alive|Sia|2019 Winner|Final Sing Off|100 Points|Series Two
How many judges joined Shellyann Evans for her winning performance of Alive?|100|99|96|94|Medium|Shellyann Evans|Perfect Score|Alive|Final Sing Off|2019|The 100|Winner
Which song did Southern Flavor perform in the 2019 final sing-off?|Hold Back the River|Valerie|Blame It on the Boogie|True|Medium|Southern Flavor|Hold Back The River|James Bay|Runner Up|2019 Final|Sing Off|68 Points
Which Prince song did Bernadette Bangura perform in the first round of the 2019 final?|Purple Rain|Kiss|1999|When Doves Cry|Medium|Bernadette Bangura|Purple Rain|Prince|2019 Final|96 Points|First Round|Series Two
Which Beyonce song did Bernadette Bangura sing in the 2019 final sing-off?|Halo|Listen|Single Ladies|If I Were a Boy|Medium|Bernadette Bangura|Halo|Beyonce|Third Place|2019 Final|23 Points|Sing Off
In which year did the BBC decide not to commission a third UK series?|2019|2018|2020|2021|Medium|2019 Cancellation|BBC Decision|Programme History|End Of Series|Two Series|British Format|Broadcast History`;


// Complete-show audit: format, tie-break rules, production, celebrity special and crossover careers.
// The two series and special ended in 2019. No unsupported UK awards are claimed.
const AUDIT_ORIGINAL_COUNT = 82;
const AUDIT_FIRST_ID = 42394;
const auditFacts = `How many episodes of the British All Together Now aired including the celebrity special?|13|12|14|16|Medium|Total Episode Count|Thirteen Episodes|Two Series|Celebrity Special|BBC One|Broadcast Run|2018 to 2019
On which date did All Together Now first air on BBC One?|27 January 2018|3 March 2018|24 December 2018|2 March 2019|Medium|Original Premiere|January 2018|BBC One Launch|Series One|Broadcast Date|Saturday Evening|Programme Timeline
On which date was the final regular episode of All Together Now broadcast?|13 April 2019|2 March 2019|24 December 2018|3 March 2018|Medium|Last Episode|April 2019|Series Two Finale|BBC One|Broadcast Date|Programme Ending|Series Conclusion
Approximately how long was each contestant's song performance on All Together Now?|90 seconds|30 seconds|3 minutes|5 minutes|Medium|Performance Length|Ninety Seconds|Singing Format|Timed Round|The 100|Competition Rules|BBC Talent Show
During approximately how much of a performance could The 100 join in on All Together Now?|The final 60 seconds|The first 15 seconds|The entire three minutes|Only the final ten seconds|Medium|Joining In Window|Sixty Seconds|Voting Rules|The 100|Performance Structure|Scoring Period|Format
What studio cue told The 100 that they could start joining in on All Together Now?|A change in the lighting|A bell ringing|A flashing scoreboard|A signal from Rob Beckett|Medium|Lighting Change|Voting Window|The 100|Competition Format|Studio Cue|Live Singing|Judging Process
How were tied scores resolved between contestants on All Together Now?|The 100 replayed performances and voted|The contestants answered questions|The singers competed in a dance-off|Rob Beckett tossed a coin|Medium|Score Tie|Performance Replay|Tie Break|The 100|Studio Monitors|Judging Rules|Competitive Format
What did members of The 100 use to vote in an All Together Now tie-break?|Their buttons|A paper ballot|A mobile phone app|An applause meter|Medium|Tie Break Vote|Button Voting|The 100|Replayed Performance|Studio Rules|Judges Decision|Scores
Who had the casting vote if an All Together Now tie-break vote was also tied?|Geri Horner|Rob Beckett|The studio director|The first contestant to sing|Medium|Geri Horner|Casting Vote|Tie Break Rules|The 100 Captain|Deadlock|Judging Format|Final Decision
How much more did Geri Horner's vote count than other votes in a normal All Together Now performance?|It counted the same as everyone else's|Twice as much|Ten times as much|It did not count at all|Medium|Geri Horner|Equal Votes|Judging Rules|The 100 Captain|Score Calculation|Voting Equality|Performance Format
What happened to the seating positions of The 100 between episodes of All Together Now?|The positions were reshuffled|They were fixed throughout|They were selected by the audience|They changed only for the finale|Hard|The 100|Panel Positions|Seating Changes|Studio Organisation|Judge Placement|Series Format|Production Detail
Which drag performer sat on The 100 panel in All Together Now and later appeared on RuPaul's Drag Race UK?|Divina de Campo|The Vivienne|Baga Chipz|Blu Hydrangea|Medium|Divina de Campo|The 100|Drag Performer|RuPauls Drag Race UK|Panellist|Music Talent|Later Television
Which musical member of The 100 on All Together Now was known as The Singing Dentist?|Milad Shadrooh|Paul L Martin|Georg Tormann|Dom Waugh|Hard|The Singing Dentist|Milad Shadrooh|Music Expert|The 100|Judge Identity|Panellist|British Television
Which member of The 100 was often seated beside Geri Horner on All Together Now?|Lili Davies|Divina de Campo|Talia Mar|Celestina|Hard|Lili Davies|Geri Horner|The 100|Panellist Placement|Romanian Singer|Judge Identity|Studio Cast
At which Salford television studio complex was All Together Now filmed?|dock10|Elstree Studios|Pinewood Studios|Television Centre London|Medium|dock10|Salford|Studio Complex|Filming Location|BBC One|Production Site|MediaCityUK
In which English city was the BBC version of All Together Now filmed?|Salford|Bristol|Liverpool|Birmingham|Medium|Salford|dock10|Greater Manchester|Studio Filming|BBC One|Production Geography|Television Production
Who designed the immersive studio set used for All Together Now?|Dominic Tolfts|Marc Bassett|James Fox|David Leckie|Hard|Dominic Tolfts|Set Designer|Studio Design|Lighting Production|360 Degree Set|Visual Identity|Behind the Scenes
Which company supplied LED systems for the All Together Now studio set?|LED Creative|Industrial Light and Magic|Arqiva|Red Bee Media|Hard|LED Creative|Studio Lighting|LED Systems|Sigma Equipment|Stage Set|Visual Effects|Production Technology
Which two television creatives originated the All Together Now competition format?|James Fox and Dom Waugh|Rob Beckett and Geri Horner|Marc Bassett and Kate Phillips|Simon Cowell and Nigel Lythgoe|Medium|James Fox|Dom Waugh|Remarkable Television|Format Creators|Development Team|Production Origins|BBC Singing Show
Which television production group owned Remarkable Entertainment when All Together Now launched?|Endemol Shine Group|Fremantle|ITV Studios|BBC Studios|Medium|Endemol Shine Group|Remarkable Entertainment|Parent Company|Television Format|BBC Commission|Production Company|Business History
Which composer was credited with the title music of All Together Now?|Marc Sylvan|Hans Zimmer|David Arnold|Simon May|Medium|Marc Sylvan|Title Music|Composer|Programme Theme|Music Credits|British Television|Soundtrack
Which actor sang You Need Me I Don't Need You in the All Together Now celebrity special?|Tyger Drew-Honey|Ben Foden|Chris Kamara|Omid Djalili|Medium|Tyger Drew Honey|Celebrity Special|Ed Sheeran Song|Christmas Eve|2018|Guest Performance|Actor
Which song did actress Laurie Brett sing before the final sing-off in the All Together Now celebrity special?|Wind Beneath My Wings|The Best|I Will Survive|Big Spender|Medium|Laurie Brett|Celebrity Special|First Performance|Bette Midler|2018|EastEnders Actress|Christmas Programme
How many points did Omid Djalili score singing Sway in the All Together Now celebrity special?|97|75|88|99|Hard|Omid Djalili|Sway|Celebrity Special|2018|First Round|Scoreboard|Singer Performance
What score did Gemma Collins receive for This Is Me in the All Together Now celebrity sing-off?|39|88|75|99|Hard|Gemma Collins|This Is Me|Celebrity Final|2018|The Greatest Showman|Sing Off Score|Third Place
Which BBC singing competition had All Together Now's 2019 winner Shellyann Evans previously competed in?|The Voice UK|Fame Academy|The X Factor|Stars in Their Eyes|Medium|Shellyann Evans|The Voice UK|Previous Contest|2019 Winner|Career History|Talent Competition|Singing Background
Which All Together Now contestant later appeared on RuPaul's Drag Race UK as a competitor?|Veronica Green|Bernadette Bangura|Jodie Steele|Tabi Gazele|Medium|Veronica Green|Drag Race UK|2019 Heat One|Get The Party Started|Later Career|Television Crossover|Contestant
Which country first broadcast an international adaptation of the UK All Together Now format?|Brazil|Australia|Denmark|Italy|Medium|Brazil|Canta Comigo|First Adaptation|International Franchise|Remarkable Format|2018|Global Expansion`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(value => value.trim());
  if (fields.length !== 13) throw new Error(`Expected 13 fields in ${id}; found ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(value => !value))
    throw new Error(`Empty field in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or tags in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  if (new Set([correctAnswer, ...answers].map(answer => answer.toLowerCase())).size !== 4)
    throw new Error(`Duplicate answer choice in ${id}`);
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : 'In All Together Now, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return { id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true };
});

if (
  questions.length === 0 || questions[0].id !== 'tv_25348' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q => q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Together Now') ||
    q.dailyEligible !== true)
) throw new Error('Pack 432 exported validation failed');

module.exports = questions;