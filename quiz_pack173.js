// quiz_pack173.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2004 and 2005
// 100 questions: tv_1301 to tv_1400
// Year balance: 48 from 2004 and 52 from 2005.
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2004
    // =====================================================

    ["Which of Bethany Platt's grandmothers kidnapped her in January 2004?", "Brenda Fearns", ["Audrey Roberts", "Eileen Grimshaw", "Deirdre Barlow"], "Medium", "2004", "Families"],
    ["Who persuaded Brenda Fearns not to jump from a church tower with Bethany Platt?", "Emily Bishop", ["Rita Sullivan", "Gail Platt", "Betty Williams"], "Medium", "2004", "Storylines"],
    ["Which young man proposed to Sarah Platt in January 2004?", "Todd Grimshaw", ["Jason Grimshaw", "Nick Tilsley", "Aidan Critchley"], "Easy", "2004", "Relationships"],
    ["Which youngster got Rita Sullivan into trouble after she clipped him round the ear?", "Chesney Brown", ["David Platt", "Craig Harris", "Joshua Peacock"], "Easy", "2004", "Comedy"],
    ["How much was Rita Sullivan fined for hitting Chesney Brown in 2004?", "£500", ["£50", "£100", "£1,000"], "Hard", "2004", "Money"],
    ["Why was Peter Barlow's marriage to Shelley Unwin annulled in 2004?", "He was already married to Lucy", ["He had used a false name", "They were first cousins", "Their wedding licence was invalid"], "Easy", "2004", "Weddings"],
    ["What name did Tracy Barlow give the daughter she gave birth to in February 2004?", "Amy", ["Abbie", "Alice", "Annie"], "Easy", "2004", "Families"],
    ["What name did Roy and Hayley Cropper initially choose for Tracy Barlow's baby?", "Patience", ["Prudence", "Grace", "Hope"], "Medium", "2004", "Families"],
    ["Who was revealed as the biological father of Tracy Barlow's baby at Steve and Karen's wedding?", "Steve McDonald", ["Roy Cropper", "Peter Barlow", "Dev Alahan"], "Easy", "2004", "Families"],
    ["Who secretly cancelled arrangements for Steve and Karen McDonald's wedding in 2004?", "Tracy Barlow", ["Liz McDonald", "Bev Unwin", "Shelley Unwin"], "Medium", "2004", "Weddings"],
    ["Which comedian played Shelley's disastrous date Eric Garside in 2004?", "Peter Kay", ["Johnny Vegas", "Lee Mack", "John Bishop"], "Medium", "2004", "Actors"],
    ["Whom did Karen McDonald confront during baby Amy's christening?", "Tracy Barlow", ["Shelley Unwin", "Geena Gregory", "Violet Wilson"], "Medium", "2004", "Rovers Return"],
    ["Which hospital porter began a relationship with Todd Grimshaw in 2004?", "Karl Foster", ["Martin Platt", "Nick Tilsley", "Jason Grimshaw"], "Easy", "2004", "Relationships"],
    ["Which actor played Todd Grimshaw's boyfriend Karl Foster?", "Chris Finch", ["Rupert Hill", "Bruno Langley", "Adam Rickitt"], "Medium", "2004", "Actors"],
    ["To which family member did Todd Grimshaw first confide that he was gay?", "His mother Eileen", ["His brother Jason", "His fiancée Sarah", "His grandmother"], "Medium", "2004", "Families"],
    ["What name was given to Sarah Platt and Todd Grimshaw's baby son in 2004?", "Billy", ["Ben", "Bobby", "Brad"], "Easy", "2004", "Families"],
    ["What happened to Sarah and Todd's son Billy shortly after his premature birth?", "He died", ["He was adopted", "He was taken overseas", "He underwent a heart transplant"], "Medium", "2004", "Storylines"],
    ["Which two mothers fought in the street after Todd Grimshaw admitted his affair in 2004?", "Gail Platt and Eileen Grimshaw", ["Sally Webster and Angela Harris", "Audrey Roberts and Blanche Hunt", "Janice Battersby and Cilla Brown"], "Medium", "2004", "Families"],
    ["With whose mother did Charlie Stubbs sleep while dating Shelley Unwin?", "Bev Unwin", ["Eileen Grimshaw", "Liz McDonald", "Deirdre Barlow"], "Easy", "2004", "Relationships"],
    ["Which character was briefly engaged to Maria Sutherland before leaving Weatherfield in 2004?", "Nick Tilsley", ["Jamie Baldwin", "Tyrone Dobbs", "Ciaran McCarthy"], "Medium", "2004", "Relationships"],
    ["To which city did Nick Tilsley move when he left in July 2004?", "Nottingham", ["Leeds", "Liverpool", "Birmingham"], "Medium", "2004", "Departures"],
    ["Which new Baldwin began helping Mike run Underworld in May 2004?", "Danny Baldwin", ["Warren Baldwin", "Jamie Baldwin", "Adam Barlow"], "Easy", "2004", "Arrivals"],
    ["Who was Danny Baldwin's wife when the family arrived in Weatherfield?", "Frankie Baldwin", ["Carol Baldwin", "Linda Baldwin", "Susan Baldwin"], "Easy", "2004", "Families"],
    ["Which Baldwin was a professional footballer when he arrived in 2004?", "Warren Baldwin", ["Jamie Baldwin", "Danny Baldwin", "Adam Barlow"], "Medium", "2004", "Occupations"],
    ["Which television presenter and comedian began playing Danny Baldwin in 2004?", "Bradley Walsh", ["Shane Richie", "Paddy McGuinness", "Vernon Kay"], "Easy", "2004", "Actors"],
    ["Which Battersby daughter returned to Weatherfield after living away for several years in 2004?", "Leanne Battersby", ["Toyah Battersby", "Janice Battersby", "Tracy Barlow"], "Easy", "2004", "Returns"],
    ["Which flamboyant new lodger moved into Eileen Grimshaw's home in 2004?", "Sean Tully", ["Ciaran McCarthy", "Joe Carter", "Harry Flagg"], "Easy", "2004", "Arrivals"],
    ["Which actor made Sean Tully a Coronation Street regular in 2004?", "Antony Cotton", ["Keith Duffy", "Charlie Condou", "Craig Charles"], "Medium", "2004", "Actors"],
    ["Which new Underworld machinist arrived in September 2004?", "Kelly Crabtree", ["Joanne Jackson", "Jessie Jackson", "Sonia Marshall"], "Medium", "2004", "Arrivals"],
    ["Which newcomer played by Jenny Platt became a Rovers barmaid in 2004?", "Violet Wilson", ["Shelley Unwin", "Geena Gregory", "Sunita Parekh"], "Medium", "2004", "Arrivals"],
    ["Which legendary comedian appeared as pensioner Ernie Crabbe in July 2004?", "Norman Wisdom", ["Eric Sykes", "Ken Dodd", "Freddie Starr"], "Medium", "2004", "Actors"],
    ["What did Jack Duckworth sell to Ernie Crabbe when Norman Wisdom guest-starred?", "An exercise bike", ["A lawnmower", "A racing pigeon", "A garden gnome"], "Medium", "2004", "Comedy"],
    ["A proposed memorial to which former Weatherfield councillor sparked a protest in 2004?", "Alf Roberts", ["Percy Sugden", "Reg Holdsworth", "Len Fairclough"], "Medium", "2004", "Community"],
    ["What kind of memorial to Alf Roberts upset some of the Street's older residents?", "A fountain", ["A clock tower", "A bronze statue", "A stained-glass window"], "Medium", "2004", "Community"],
    ["Which butcher was tricked into believing he was courting a Thai woman named Orchid?", "Fred Elliott", ["Ashley Peacock", "Mike Baldwin", "Duggie Ferguson"], "Easy", "2004", "Comedy"],
    ["What name did the fraudster pretending to be Fred Elliott's Thai bride use?", "Orchid Pattaya", ["Lotus Bangkok", "Jasmine Niran", "Lily Somchai"], "Medium", "2004", "Comedy"],
    ["Which solicitor plotted revenge after Dev Alahan chose Sunita over her?", "Maya Sharma", ["Rebecca Hopkins", "Nita Desai", "Colette Graham"], "Easy", "2004", "Crime"],
    ["What false charge did Maya Sharma arrange to have brought against Sunita in 2004?", "Bigamy", ["Arson", "Shoplifting", "Blackmail"], "Medium", "2004", "Crime"],
    ["Which shopkeeper married Sunita Parekh in October 2004?", "Dev Alahan", ["Vikram Desai", "Steve McDonald", "Ciaran McCarthy"], "Easy", "2004", "Weddings"],
    ["What did Maya Sharma set fire to as part of her revenge against Dev in 2004?", "His shops", ["Underworld factory", "The Rovers Return", "Weatherfield's town hall"], "Easy", "2004", "Crime"],
    ["Which couple did Maya Sharma imprison and try to kill in a fire in 2004?", "Dev and Sunita Alahan", ["Roy and Hayley Cropper", "Steve and Karen McDonald", "Ashley and Claire Peacock"], "Medium", "2004", "Crime"],
    ["Who accompanied Norris Cole to a dinner party that turned out to be a swingers' gathering?", "Rita Sullivan", ["Emily Bishop", "Blanche Hunt", "Betty Williams"], "Medium", "2004", "Comedy"],
    ["What went wrong when Les Battersby and Cilla Brown enjoyed a jacuzzi bath in 2004?", "The floor collapsed beneath it", ["The plumbing flooded the Rovers", "The hot water stopped working", "The bath crashed through a window"], "Medium", "2004", "Comedy"],
    ["What name did Jack Duckworth use when disguised as a woman for a bowls match?", "Ida Fagg", ["Dora Flagg", "Ena Banks", "Mavis Long"], "Hard", "2004", "Comedy"],
    ["Which couple married on Christmas Day 2004?", "Ashley Peacock and Claire Casey", ["Steve McDonald and Karen Phillips", "Dev Alahan and Sunita Parekh", "Kevin Webster and Sally Webster"], "Easy", "2004", "Weddings"],
    ["Which wife of Steve McDonald left Weatherfield on Boxing Day 2004?", "Karen McDonald", ["Tracy Barlow", "Vicky McDonald", "Becky McDonald"], "Easy", "2004", "Departures"],
    ["Which game show did the Barlows appear on with Steve McDonald in November 2004?", "Top of the Tree", ["Family Fortunes", "The Weakest Link", "Who Wants to Be a Millionaire?"], "Medium", "2004", "TV History"],
    ["Which son of Mike Baldwin returned to the Street in December 2004, now played by Sam Robertson?", "Adam Barlow", ["Danny Baldwin", "Mark Redman", "Jamie Baldwin"], "Medium", "2004", "Returns"],

    // =====================================================
    // YEAR 2005
    // =====================================================

    ["With which car dealer did Sally Webster have an affair in 2005?", "Ian Davenport", ["Danny Baldwin", "Joe Carter", "Phil Nail"], "Easy", "2005", "Relationships"],
    ["Which teenage couple embraced a gothic fashion and music style in 2005?", "Rosie Webster and Craig Harris", ["Sophie Webster and Chesney Brown", "Sarah Platt and Todd Grimshaw", "Maria Sutherland and Tyrone Dobbs"], "Medium", "2005", "Relationships"],
    ["Who was the father of the baby Katy Harris was expecting in early 2005?", "Martin Platt", ["Craig Harris", "David Platt", "Tommy Harris"], "Easy", "2005", "Families"],
    ["Which member of the Harris family was killed by Katy in March 2005?", "Her father Tommy", ["Her brother Craig", "Her mother Angela", "Her grandfather Keith"], "Easy", "2005", "Crime"],
    ["Which tool did Katy Harris use when she killed her father Tommy?", "A wrench", ["A spade", "A crowbar", "A hammer"], "Medium", "2005", "Crime"],
    ["Who tried to cover up Tommy Harris's murder to protect Katy?", "Angela Harris", ["Rosie Webster", "Gail Platt", "Claire Peacock"], "Easy", "2005", "Crime"],
    ["Where was Tommy Harris's body discovered in 2005?", "Websters' Auto Centre", ["The Rovers Return", "Underworld", "The Kabin"], "Medium", "2005", "Locations"],
    ["Who was arrested on suspicion of killing Tommy Harris before the truth emerged?", "Martin Platt", ["Steve McDonald", "Kevin Webster", "Danny Baldwin"], "Medium", "2005", "Crime"],
    ["Where did Angela Harris conceal the murder weapon during Tommy's funeral arrangements?", "Inside his coffin", ["In the canal", "Beneath the garage floor", "In a wall cavity"], "Medium", "2005", "Crime"],
    ["How did Katy Harris deliberately endanger her health after killing her father?", "She stopped taking her insulin", ["She refused a blood transfusion", "She took an overdose of sleeping pills", "She jumped into the canal"], "Medium", "2005", "Storylines"],
    ["What was the name of Craig and Katy Harris's grandfather who came to Weatherfield in 2005?", "Keith Appleyard", ["Jack Duckworth", "Fred Elliott", "Archie Shuttleworth"], "Medium", "2005", "Families"],
    ["Which former husband of Deirdre returned after twenty-seven years in March 2005?", "Ray Langton", ["Samir Rachid", "Mike Baldwin", "Ken Barlow"], "Easy", "2005", "Returns"],
    ["Which country had Ray Langton been living in before his 2005 return?", "The Netherlands", ["Spain", "France", "Canada"], "Medium", "2005", "Returns"],
    ["Which long-standing couple married again in April 2005?", "Ken and Deirdre Barlow", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Steve and Karen McDonald"], "Easy", "2005", "Weddings"],
    ["What happened to Ray Langton during Ken and Deirdre's wedding reception?", "He died", ["He proposed to Tracy", "He was arrested", "He announced he was moving abroad"], "Easy", "2005", "Storylines"],
    ["What illness was Ray Langton suffering from when he returned to Weatherfield?", "Stomach cancer", ["Lung cancer", "Motor neurone disease", "Kidney failure"], "Medium", "2005", "Storylines"],
    ["Which celebrated film and stage actor guest-starred as the supposed writer Mel Hutchwright?", "Ian McKellen", ["Patrick Stewart", "Michael Gambon", "Derek Jacobi"], "Easy", "2005", "Actors"],
    ["What was the real name of the conman posing as author Mel Hutchwright?", "Lionel Hipkis", ["Leonard Barlow", "Leslie Higgins", "Laurence Hill"], "Hard", "2005", "Comedy"],
    ["Which group of Weatherfield residents did Mel Hutchwright swindle in 2005?", "The book club", ["The bowling team", "The church choir", "The football supporters' club"], "Medium", "2005", "Comedy"],
    ["What was the title of the fictitious Mel Hutchwright novel used in his book club scam?", "The Canary's Last Song", ["The Sparrow's Last Flight", "The Raven's Return", "The Nightingale's Dream"], "Hard", "2005", "Books"],
    ["Which takeaway employed Cilla Brown in May 2005?", "Wong's Chippy", ["Roy's Rolls", "The Corner Shop", "The Flying Horse"], "Medium", "2005", "Occupations"],
    ["Who opened a bakery called Comptons on Victoria Street in 2005?", "Diggory Compton", ["Fred Elliott", "Roy Cropper", "Ashley Peacock"], "Medium", "2005", "Businesses"],
    ["What was the name of Diggory Compton's daughter, introduced in 2005?", "Molly Compton", ["Candice Compton", "Maria Compton", "Fiz Compton"], "Medium", "2005", "Arrivals"],
    ["What had actually caused money to go missing from Diggory Compton's till when Sarah Platt was blamed?", "Mice", ["A broken cash register", "An employee's theft", "A bookkeeping error"], "Medium", "2005", "Comedy"],
    ["Which dog did Claire Peacock accidentally run over on her first day as a bus driver?", "Schmeichel", ["Eccles", "Monica", "Cerberus"], "Easy", "2005", "Comedy"],
    ["Which actor joined Coronation Street as cab driver Lloyd Mullaney in 2005?", "Craig Charles", ["Chris Barrie", "Robert Llewellyn", "Danny John-Jules"], "Easy", "2005", "Actors"],
    ["At which taxi company did newcomer Lloyd Mullaney work in 2005?", "Street Cars", ["Weatherfield Cabs", "Metro Minicabs", "City Cars"], "Easy", "2005", "Businesses"],
    ["Which resident became a Rovers barman in August 2005 after working at Underworld?", "Sean Tully", ["Jamie Baldwin", "Kirk Sutherland", "Ciaran McCarthy"], "Easy", "2005", "Rovers Return"],
    ["Which builder bullied Roy Cropper at the café until Charlie Stubbs sacked him?", "Vince", ["Gary", "Darren", "Keith"], "Medium", "2005", "Storylines"],
    ["Who was responsible for the controlling and abusive treatment of Shelley Unwin in 2005?", "Charlie Stubbs", ["Peter Barlow", "Ciaran McCarthy", "Danny Baldwin"], "Easy", "2005", "Storylines"],
    ["What did Shelley Unwin do at the altar rather than marry Charlie Stubbs?", "Refused to say her vows", ["Fainted", "Ran away with Ciaran", "Announced she was pregnant"], "Easy", "2005", "Weddings"],
    ["Which former Rovers employee left the Street in 2005 after becoming disillusioned with Charlie's treatment of Shelley?", "Ciaran McCarthy", ["Harry Flagg", "Sean Tully", "Fred Elliott"], "Medium", "2005", "Departures"],
    ["Which rock band played at Les Battersby and Cilla Brown's wedding celebrations?", "Status Quo", ["Slade", "The Sweet", "Mud"], "Easy", "2005", "Weddings"],
    ["Which Status Quo singer recognised Les Battersby as a troublesome fan from years earlier?", "Francis Rossi", ["Rick Parfitt", "Alan Lancaster", "John Coghlan"], "Medium", "2005", "Popular Culture"],
    ["Who did Les Battersby marry on Halloween 2005?", "Cilla Brown", ["Janice Battersby", "Yana Lumb", "Bev Unwin"], "Easy", "2005", "Weddings"],
    ["Who went on Cilla's honeymoon with her after she fell out with Les over the wedding presents?", "Yana Lumb", ["Janice Battersby", "Fiz Brown", "Bev Unwin"], "Medium", "2005", "Comedy"],
    ["Which young hairdresser left Weatherfield to join Status Quo on tour in 2005?", "Candice Stowe", ["Maria Sutherland", "Sarah Platt", "Violet Wilson"], "Medium", "2005", "Departures"],
    ["Who was revealed to be Danny Baldwin's biological father in 2005?", "Mike Baldwin", ["Harry Baldwin", "Fred Elliott", "Ken Barlow"], "Easy", "2005", "Families"],
    ["Which woman was Jamie Baldwin dating when she began an affair with his father Danny?", "Leanne Battersby", ["Maria Sutherland", "Kelly Crabtree", "Violet Wilson"], "Easy", "2005", "Relationships"],
    ["Which woman discovered her husband Danny was having an affair with Leanne in 2005?", "Frankie Baldwin", ["Carol Baldwin", "Viv Baldwin", "Linda Baldwin"], "Medium", "2005", "Relationships"],
    ["Which Baldwin family member told Mike the truth about Danny's parentage?", "Viv Baldwin", ["Frankie Baldwin", "Carol Baldwin", "Susan Barlow"], "Medium", "2005", "Families"],
    ["Which daughter was at the centre of a bitter access dispute between Steve McDonald and Tracy Barlow in 2005?", "Amy", ["Bethany", "Sophie", "Rosie"], "Easy", "2005", "Families"],
    ["What was the name of Betty Williams's cat who was put to sleep in 2005?", "Marmaduke", ["Morris", "Milo", "Monty"], "Medium", "2005", "Animals"],
    ["Which young girl was revealed as another of Dev Alahan's children in 2005?", "Amber Kalirai", ["Amy Barlow", "Asha Alahan", "Sophie Webster"], "Medium", "2005", "Families"],
    ["Which reflexologist became romantically involved with Gail Platt in 2005?", "Phil Nail", ["Ian Davenport", "Matt Ramsden", "Joe Carter"], "Medium", "2005", "Relationships"],
    ["To which city did Martin Platt move when he left Weatherfield in November 2005?", "Liverpool", ["Leeds", "Nottingham", "Newcastle"], "Medium", "2005", "Departures"],
    ["Which Rovers barmaid dumped Jason Grimshaw after learning he had slept with Sarah Platt?", "Violet Wilson", ["Shelley Unwin", "Bev Unwin", "Geena Gregory"], "Medium", "2005", "Relationships"],
    ["Who was the young mechanic employed at Websters' Auto Centre who accidentally injured Ashley Peacock in 2005?", "Nathan Cooper", ["Tyrone Dobbs", "Kirk Sutherland", "Jamie Baldwin"], "Medium", "2005", "Occupations"],
    ["Which businesswoman offered Norris Cole a junior partnership in her shop in 2005?", "Rita Sullivan", ["Audrey Roberts", "Emily Bishop", "Sally Webster"], "Medium", "2005", "Businesses"],
    ["Which factory worker was reinstated after the Underworld staff went on strike in October 2005?", "Janice Battersby", ["Fiz Brown", "Hayley Cropper", "Kelly Crabtree"], "Medium", "2005", "Businesses"],
    ["Which man approached Emily Bishop at the end of 2005, years after killing her husband Ernest?", "Ed Jackson", ["Phil Nail", "Archie Shuttleworth", "Jimmy Clayton"], "Medium", "2005", "Returns"],
    ["What illness was Mike Baldwin showing signs of when he forgot what he'd done with factory cheques in 2005?", "Alzheimer's disease", ["Parkinson's disease", "Multiple sclerosis", "Epilepsy"], "Medium", "2005", "Storylines"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1301 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1301' ||
    questions[99].id !== 'tv_1400' ||
    questions.filter(q => q.tags.includes('2004')).length !== 48 ||
    questions.filter(q => q.tags.includes('2005')).length !== 52
) {
    throw new Error('Pack 173: incorrect count, years or ID range');
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
        throw new Error('Pack 173: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
