// quiz_pack175.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2008 and 2009
// 100 questions: tv_1501 to tv_1600
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2008
    // =====================================================

    ["Which long-serving Coronation Street resident died peacefully in her armchair in January 2008?", "Vera Duckworth", ["Betty Williams", "Emily Bishop", "Rita Sullivan"], "Easy", "2008", "Departures"],
    ["Who discovered his wife Vera had died after coming home to their house in 2008?", "Jack Duckworth", ["Tyrone Dobbs", "Terry Duckworth", "Roy Cropper"], "Easy", "2008", "Families"],
    ["Which actress had played Vera Duckworth for more than thirty years before her 2008 exit?", "Liz Dawn", ["Jean Alexander", "Julie Goodyear", "Barbara Knox"], "Easy", "2008", "Actors"],
    ["Which estranged son returned to Weatherfield for Vera Duckworth's funeral in 2008?", "Terry Duckworth", ["Paul Clayton", "Jack Duckworth", "Tommy Duckworth"], "Medium", "2008", "Returns"],
    ["Which businessman fell into a gorge while walking in the Lake District in January 2008?", "Liam Connor", ["Tony Gordon", "Paul Connor", "Steve McDonald"], "Medium", "2008", "Storylines"],
    ["Who went for help when Liam Connor fell during a Lake District trip in 2008?", "Maria Sutherland", ["Carla Connor", "Michelle Connor", "Leanne Battersby"], "Medium", "2008", "Relationships"],
    ["Whose name did an injured Liam Connor call out in hospital, upsetting Maria, in 2008?", "Carla Connor", ["Michelle Connor", "Leanne Battersby", "Rosie Webster"], "Medium", "2008", "Relationships"],
    ["Which character played by Michelle Keegan first arrived in Coronation Street in January 2008?", "Tina McIntyre", ["Sian Powers", "Tara Mandal", "Julie Carp"], "Easy", "2008", "Arrivals"],
    ["Who told Ryan Connor in 2008 that he had been swapped with another baby at birth?", "Nick Neeson", ["Tony Gordon", "Dev Alahan", "Lloyd Mullaney"], "Medium", "2008", "Families"],
    ["What was the first name of Michelle Connor's biological son, revealed by DNA testing in 2008?", "Alex", ["Ryan", "Adam", "Daniel"], "Easy", "2008", "Families"],
    ["Which mechanic received a custodial sentence in 2008 for attacking teacher John Stape?", "Kevin Webster", ["Tyrone Dobbs", "Nathan Cooper", "Bill Webster"], "Medium", "2008", "Crime"],
    ["Which couple married in February 2008 after a turbulent engagement?", "Liam Connor and Maria Sutherland", ["Tony Gordon and Carla Connor", "Steve McDonald and Becky Granger", "Tyrone Dobbs and Molly Compton"], "Easy", "2008", "Weddings"],
    ["Which Rovers barmaid gave birth to Sean Tully's son Dylan in February 2008?", "Violet Wilson", ["Michelle Connor", "Becky Granger", "Poppy Morales"], "Easy", "2008", "Families"],
    ["What was the name of Sean Tully and Violet Wilson's baby son?", "Dylan", ["Ryan", "Ben", "Freddie"], "Easy", "2008", "Families"],
    ["Which former Baldwin left Weatherfield with Violet Wilson and baby Dylan in 2008?", "Jamie Baldwin", ["Danny Baldwin", "Adam Barlow", "Warren Baldwin"], "Medium", "2008", "Departures"],
    ["Which Platt accompanied Tina McIntyre to an abortion clinic in March 2008?", "Gail Platt", ["Sarah Platt", "Audrey Roberts", "David Platt"], "Medium", "2008", "Families"],
    ["Which of Gail Platt's children pushed her down the stairs after a row in 2008?", "David Platt", ["Nick Tilsley", "Sarah Platt", "Bethany Platt"], "Easy", "2008", "Storylines"],
    ["Where was David Platt sent after his 2008 rampage and criminal damage?", "A young offenders institution", ["A psychiatric hospital", "A boarding school", "An army training centre"], "Medium", "2008", "Crime"],
    ["Which Battersby-Brown child was taken into care in March 2008?", "Chesney", ["Fiz", "Leanne", "Toyah"], "Medium", "2008", "Families"],
    ["Which Duckworth grandson set fire to Leanne Battersby's restaurant in a 2008 insurance scam?", "Paul Clayton", ["Terry Duckworth", "Tyrone Dobbs", "Jamie Baldwin"], "Medium", "2008", "Crime"],
    ["What tragedy did Maria and Liam Connor suffer during her pregnancy in 2008?", "Their baby was stillborn", ["Their baby was kidnapped", "Their baby needed a transplant", "They learnt they were expecting twins"], "Medium", "2008", "Families"],
    ["What was the name of Gail Platt's long-lost father who appeared in 2008?", "Ted Page", ["Archie Shuttleworth", "Colin Grimshaw", "Harry Mason"], "Medium", "2008", "Families"],
    ["Which actress played Gail Platt when she met her long-lost father Ted Page in 2008?", "Helen Worth", ["Sue Nicholls", "Anne Kirkbride", "Sally Dynevor"], "Medium", "2008", "Actors"],
    ["Which local newsagent was attacked when a gang robbed The Kabin in 2008?", "Norris Cole", ["Roy Cropper", "Ken Barlow", "Jack Duckworth"], "Medium", "2008", "Crime"],
    ["Who was the father of newcomer Tina McIntyre, introduced in 2008?", "Joe McIntyre", ["Colin Grimshaw", "Bill Webster", "Harry Mason"], "Easy", "2008", "Families"],
    ["Which member of the Morton family had a heart attack in May 2008?", "Jerry Morton", ["Darryl Morton", "Wilf Morton", "Mel Morton"], "Medium", "2008", "Families"],
    ["Who secretly poisoned Jerry Morton with his medication in 2008?", "Teresa Bryant", ["Jodie Morton", "Mel Morton", "Eileen Grimshaw"], "Medium", "2008", "Crime"],
    ["Which cab driver did Teresa Bryant falsely tell was the father of her son Finlay?", "Lloyd Mullaney", ["Steve McDonald", "Dev Alahan", "Peter Barlow"], "Medium", "2008", "Comedy"],
    ["Which bookies' employee was locked in the Rovers cellar by Steve McDonald during a 2008 feud?", "Dan Mason", ["Harry Mason", "Tony Gordon", "Liam Connor"], "Medium", "2008", "Crime"],
    ["With whom did Steve McDonald have a secret one-night stand in June 2008?", "Becky Granger", ["Michelle Connor", "Leanne Battersby", "Violet Wilson"], "Easy", "2008", "Relationships"],
    ["Which character became the Rovers Return's fiftieth barmaid in June 2008?", "Becky Granger", ["Tina McIntyre", "Julie Carp", "Poppy Morales"], "Medium", "2008", "Rovers Return"],
    ["Which husband of Liz McDonald left Weatherfield in September 2008 after their marriage broke down?", "Vernon Tomlin", ["Jim McDonald", "Harry Mason", "Lloyd Mullaney"], "Medium", "2008", "Departures"],
    ["Which mechanic refused Tony Gordon's offer to buy his garage in 2008?", "Kevin Webster", ["Bill Webster", "Tyrone Dobbs", "Nathan Cooper"], "Easy", "2008", "Businesses"],
    ["Which new block of luxury flats opened in Weatherfield in August 2008?", "Victoria Court", ["The Ridings", "Weatherfield Quays", "Granada Court"], "Medium", "2008", "Locations"],
    ["Which former teacher kidnapped Rosie Webster and imprisoned her in an attic in 2008?", "John Stape", ["Tony Gordon", "Charlie Stubbs", "Gary Windass"], "Easy", "2008", "Crime"],
    ["Who discovered Rosie Webster in captivity after going to John Stape's house to feed a cat?", "Fiz Brown", ["Sally Webster", "Sophie Webster", "Julie Carp"], "Medium", "2008", "Storylines"],
    ["Which Webster daughter secretly filmed Carla and Liam Connor kissing in 2008?", "Rosie Webster", ["Sophie Webster", "Bethany Platt", "Tina McIntyre"], "Easy", "2008", "Storylines"],
    ["Who secretly ordered Liam Connor's killing in October 2008?", "Tony Gordon", ["Paul Connor", "Danny Baldwin", "Dev Alahan"], "Easy", "2008", "Crime"],
    ["Who drove the car that killed Liam Connor in the 2008 hit-and-run?", "Jimmy Dockerson", ["Tony Gordon", "Steve McDonald", "Kevin Webster"], "Medium", "2008", "Crime"],
    ["Who married Carla Connor in December 2008, despite having arranged Liam's murder?", "Tony Gordon", ["Peter Barlow", "Liam Connor", "Luke Strong"], "Easy", "2008", "Weddings"],
    ["Who showed Maria Connor video evidence of Liam and Carla's affair at Tony's wedding?", "Sally Webster", ["Rosie Webster", "Michelle Connor", "Leanne Battersby"], "Medium", "2008", "Storylines"],
    ["Which long-serving factory machinist confessed to taking a lottery syndicate win in 2008?", "Janice Battersby", ["Hayley Cropper", "Fiz Brown", "Kelly Crabtree"], "Medium", "2008", "Crime"],
    ["Which newcomer, introduced in 2008, later became Norris Cole's close friend and competition partner?", "Mary Taylor", ["Julie Carp", "Tara Mandal", "Natasha Blakeman"], "Easy", "2008", "Arrivals"],
    ["Which family moved into Number 6 Coronation Street in December 2008?", "The Windasses", ["The Mortons", "The Connors", "The Harrises"], "Easy", "2008", "Arrivals"],
    ["Which businessman tried to force elderly Jed Stone out of his home in 2008?", "Tony Gordon", ["Luke Strong", "Dev Alahan", "Joe McIntyre"], "Medium", "2008", "Storylines"],
    ["Which former character, last seen in the 1960s, returned to Weatherfield in 2008?", "Jed Stone", ["Harry Flagg", "Archie Shuttleworth", "Ray Langton"], "Medium", "2008", "Returns"],
    ["Which resident proposed to boyfriend Tyrone Dobbs in July 2008?", "Molly Compton", ["Maria Connor", "Becky Granger", "Tina McIntyre"], "Easy", "2008", "Relationships"],
    ["Which married couple swapped homes with the Peacocks in June 2008?", "Kevin and Sally Webster", ["Ken and Deirdre Barlow", "Roy and Hayley Cropper", "Steve and Michelle Connor"], "Medium", "2008", "Homes"],

    // =====================================================
    // YEAR 2009
    // =====================================================

    ["Who married Tyrone Dobbs in January 2009?", "Molly Compton", ["Maria Connor", "Tina McIntyre", "Becky Granger"], "Easy", "2009", "Weddings"],
    ["Who stole Tyrone and Molly's honeymoon tickets to Paris in 2009?", "Jackie Dobbs", ["Pam Hobsworth", "Teresa Bryant", "Cilla Brown"], "Medium", "2009", "Comedy"],
    ["What substitute holiday did Pam arrange for Tyrone and Molly after their 2009 wedding?", "A caravan holiday", ["A cruise", "A week in Paris", "A camping trip to France"], "Medium", "2009", "Comedy"],
    ["Which cab driver was revealed to be in a relationship with Liz McDonald in January 2009?", "Lloyd Mullaney", ["Steve McDonald", "Jim McDonald", "Dev Alahan"], "Easy", "2009", "Relationships"],
    ["Who told Michelle Connor about Steve McDonald's affair with Becky in January 2009?", "Lloyd Mullaney and Blanche Hunt", ["Ken Barlow and Deirdre Barlow", "Roy Cropper and Hayley Cropper", "Peter Barlow and Leanne Battersby"], "Medium", "2009", "Relationships"],
    ["Which builder proposed to Becky Granger just before she chose Steve McDonald in 2009?", "Jason Grimshaw", ["Tony Gordon", "Joe McIntyre", "Bill Webster"], "Medium", "2009", "Relationships"],
    ["Why did Steve McDonald and Becky Granger's planned March 2009 wedding fail to go ahead?", "Becky was too drunk to marry", ["Steve was already married", "The registrar failed to arrive", "The church was flooded"], "Easy", "2009", "Weddings"],
    ["Which couple finally married in August 2009 after an earlier wedding attempt failed?", "Steve McDonald and Becky Granger", ["Kevin Webster and Molly Dobbs", "Peter Barlow and Leanne Battersby", "Roy Cropper and Hayley Cropper"], "Easy", "2009", "Weddings"],
    ["Who was arrested on her wedding day in August 2009 after drugs were planted in her bag?", "Becky Granger", ["Leanne Battersby", "Rosie Webster", "Michelle Connor"], "Medium", "2009", "Crime"],
    ["What was the job of Becky's old enemy DC Hooch, who arranged her arrest in 2009?", "Police officer", ["Solicitor", "Journalist", "Private detective"], "Medium", "2009", "Occupations"],
    ["Which actor played Steve McDonald's brother Andy on his 2009 return?", "Nicholas Cochrane", ["Simon Gregson", "Charles Lawson", "Chris Gascoyne"], "Medium", "2009", "Actors"],
    ["With whose wife did Kevin Webster begin a secret affair in 2009?", "Tyrone Dobbs's", ["Peter Barlow's", "Steve McDonald's", "Roy Cropper's"], "Easy", "2009", "Relationships"],
    ["Which woman discovered Kevin Webster and Molly Dobbs's affair in 2009 and confronted them?", "Pam Hobsworth", ["Sally Webster", "Jackie Dobbs", "Maria Connor"], "Medium", "2009", "Relationships"],
    ["What diagnosis did Sally Webster reveal to Kevin on Christmas Day 2009?", "Breast cancer", ["Diabetes", "Leukaemia", "Multiple sclerosis"], "Easy", "2009", "Storylines"],
    ["Which businessman confessed to Roy Cropper that he had arranged Liam Connor's murder?", "Tony Gordon", ["Luke Strong", "Dev Alahan", "Peter Barlow"], "Easy", "2009", "Crime"],
    ["What medical emergency prompted Tony Gordon's confession to Roy in 2009?", "A heart attack", ["A stroke", "A road accident", "An allergic reaction"], "Medium", "2009", "Storylines"],
    ["What was Roy Cropper doing near the canal when Tony Gordon attacked him in 2009?", "Watching bats", ["Fishing", "Walking a dog", "Collecting litter"], "Medium", "2009", "Storylines"],
    ["Where did Tony Gordon push Roy Cropper during their confrontation in 2009?", "Into the canal", ["Down a staircase", "Into a cellar", "Onto a railway line"], "Easy", "2009", "Crime"],
    ["What did Tony Gordon do after rescuing Roy Cropper from the canal in 2009?", "Confessed his crime to the police", ["Fled to Spain", "Set fire to Underworld", "Returned to the Rovers"], "Medium", "2009", "Crime"],
    ["Which widow began a relationship with Tony Gordon in 2009, unaware he had killed her husband?", "Maria Connor", ["Carla Connor", "Michelle Connor", "Leanne Battersby"], "Easy", "2009", "Relationships"],
    ["What name did Maria Connor give her baby son born in July 2009?", "Liam", ["Paul", "Ryan", "Adam"], "Easy", "2009", "Families"],
    ["At which seaside location did Maria Connor give birth in July 2009?", "Ainsdale Beach", ["Blackpool Pleasure Beach", "Southport Pier", "Brighton Beach"], "Medium", "2009", "Locations"],
    ["Who helped deliver Maria Connor's son on the beach in 2009?", "Tony Gordon", ["Tom Kerrigan", "Steve McDonald", "Roy Cropper"], "Medium", "2009", "Families"],
    ["Who learnt in February 2009 that husband Tony Gordon had paid a man to kill Liam Connor?", "Carla Gordon", ["Michelle Connor", "Maria Connor", "Sally Webster"], "Easy", "2009", "Crime"],
    ["To which American city did Carla Connor flee in February 2009 after Tony's confession?", "Los Angeles", ["New York", "Miami", "Chicago"], "Medium", "2009", "Departures"],
    ["Which businessman arrived as an Underworld manager in February 2009 and later bought Carla's share?", "Luke Strong", ["Danny Baldwin", "Joe Carter", "Tony Gordon"], "Medium", "2009", "Businesses"],
    ["Which former elderly resident reappeared in Coronation Street's 7,000th episode in 2009?", "Jed Stone", ["Percy Sugden", "Alf Roberts", "Reg Holdsworth"], "Medium", "2009", "TV History"],
    ["Which actor reprised his role as Jed Stone in Coronation Street in 2009?", "Kenneth Cope", ["Roy Hudd", "Peter Baldwin", "John Savident"], "Medium", "2009", "Actors"],
    ["Which member of the Barlow family accidentally started a fire while drunk in March 2009?", "Peter Barlow", ["Ken Barlow", "Tracy Barlow", "Adam Barlow"], "Easy", "2009", "Storylines"],
    ["Which young boy was trapped in his father's flat during a 2009 fire?", "Simon Barlow", ["Ryan Connor", "Chesney Brown", "Joshua Peacock"], "Easy", "2009", "Families"],
    ["Which two businessmen rescued Peter Barlow and Simon from their burning flat in 2009?", "Tony Gordon and Luke Strong", ["Steve McDonald and Lloyd Mullaney", "Roy Cropper and Ken Barlow", "Dev Alahan and Joe McIntyre"], "Medium", "2009", "Storylines"],
    ["Which actress living on a canal barge had an affair with Ken Barlow in 2009?", "Martha Fraser", ["Denise Osbourne", "Deirdre Barlow", "Marian Lund"], "Easy", "2009", "Relationships"],
    ["Which actress guest-starred as barge-dwelling Martha Fraser in 2009?", "Stephanie Beacham", ["Joan Collins", "Honor Blackman", "Joanna Lumley"], "Medium", "2009", "Actors"],
    ["What kind of home did Martha Fraser live in during her relationship with Ken Barlow?", "A canal barge", ["A caravan", "A penthouse flat", "A converted mill"], "Easy", "2009", "Homes"],
    ["Which dog was involved in Ken Barlow first meeting Martha Fraser in 2009?", "Eccles", ["Schmeichel", "Ozzy", "Monica"], "Medium", "2009", "Animals"],
    ["Which estranged half-brother of Norris Cole arrived in 2009 seeking reconciliation?", "Ramsay Clegg", ["Colin Grimshaw", "Archie Shuttleworth", "Ted Page"], "Medium", "2009", "Families"],
    ["Which actor, famous for playing Manuel in Fawlty Towers, played Ramsay Clegg?", "Andrew Sachs", ["John Cleese", "Prunella Scales", "Roy Hudd"], "Easy", "2009", "Actors"],
    ["Which illness claimed Norris Cole's half-brother Ramsay Clegg in 2009?", "A brain tumour", ["A heart condition", "Lung cancer", "Pneumonia"], "Medium", "2009", "Storylines"],
    ["Which relative of Eileen Grimshaw was exposed for abusing Paula Carp when she was a girl?", "Her father Colin Grimshaw", ["Her brother Jason", "Her son Todd", "Her uncle George"], "Medium", "2009", "Families"],
    ["Which Corrie newcomer discovered she was Eileen Grimshaw's half-sister in 2009?", "Julie Carp", ["Paula Carp", "Tara Mandal", "Mary Taylor"], "Medium", "2009", "Families"],
    ["Which businessman was humiliated when Tara Mandal unveiled a huge nude photograph of him in 2009?", "Dev Alahan", ["Steve McDonald", "Tony Gordon", "Peter Barlow"], "Medium", "2009", "Comedy"],
    ["Which woman took revenge on Dev Alahan after discovering his affair with Lisa Dalton in 2009?", "Tara Mandal", ["Nina Mandal", "Sunita Alahan", "Leanne Battersby"], "Medium", "2009", "Relationships"],
    ["Which resident won the Mr Gay Weatherfield contest in September 2009 despite being straight?", "Jason Grimshaw", ["Sean Tully", "Todd Grimshaw", "Graeme Proctor"], "Medium", "2009", "Comedy"],
    ["Which Windass son fought with David Platt and stood trial in 2009?", "Gary Windass", ["Eddie Windass", "Ryan Connor", "Darryl Morton"], "Easy", "2009", "Crime"],
    ["Whose truthful testimony helped Gary Windass be acquitted in 2009?", "Tina McIntyre", ["Gail Platt", "Anna Windass", "Sarah Platt"], "Medium", "2009", "Crime"],
    ["Which couple bought Number 12 Coronation Street in 2009?", "Tina McIntyre and Jason Grimshaw", ["Molly and Tyrone Dobbs", "Steve and Becky McDonald", "Ken and Deirdre Barlow"], "Medium", "2009", "Homes"],
    ["Where did Fiz Brown propose to John Stape in June 2009?", "At a prison", ["At the Rovers", "At the registry office", "At the factory"], "Medium", "2009", "Relationships"],
    ["Why was John Stape serving a prison sentence during 2009?", "Kidnapping Rosie Webster", ["Assaulting Kevin Webster", "Stealing from Underworld", "Attempted murder of Tony Gordon"], "Easy", "2009", "Crime"],
    ["Which addict broke into Weatherfield's medical centre searching for painkillers in 2009?", "Joe McIntyre", ["Peter Barlow", "Steve McDonald", "David Platt"], "Medium", "2009", "Storylines"],
    ["What did Joe McIntyre name the boat on which he proposed to Gail in 2009?", "Gail Force", ["Gail's Dream", "The Weatherfield Belle", "Sea Breeze"], "Medium", "2009", "Relationships"],
    ["Which former resident returned to Weatherfield in December 2009 for Gail's wedding plans?", "Nick Tilsley", ["Martin Platt", "Todd Grimshaw", "Jamie Baldwin"], "Easy", "2009", "Returns"],
    ["Which actress began playing Sophie Webster's friend Sian Powers in January 2009?", "Sacha Parkinson", ["Brooke Vincent", "Helen Flanagan", "Michelle Keegan"], "Medium", "2009", "Actors"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '2000s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_1501' ||
    questions[99].id !== 'tv_1600' ||
    questions.filter(q => q.tags.includes('2008')).length !== 48 ||
    questions.filter(q => q.tags.includes('2009')).length !== 52
) {
    throw new Error('Pack 175: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (
        seenIds.has(q.id) ||
        seenQuestions.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        q.category !== 'Television' ||
        !q.dailyEligible
    ) {
        throw new Error('Pack 175: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
