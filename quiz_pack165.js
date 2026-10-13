// quiz_pack165.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1988 to 1989
// 100 questions: tv_0501 to tv_0600
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1988 - CHANGING LIVES ON THE COBBLES
    // =====================================================

    ["Which factory worker did Mike Baldwin dismiss during a wage dispute early in 1988?", "Ida Clough", ["Vera Duckworth", "Ivy Tilsley", "Emily Bishop"], "Hard", "1988", "Baldwin's Casuals"],
    ["Who was employed as the new supervisor at Baldwin's Casuals in January 1988?", "Connie Parker", ["Gloria Todd", "Alma Sedgewick", "Sandra Stubbs"], "Medium", "1988", "Baldwin's Casuals"],
    ["Which factory owner angered the machinists by cutting their pay in January 1988?", "Mike Baldwin", ["Alf Roberts", "Ken Barlow", "Alan Bradley"], "Easy", "1988", "Baldwin's Casuals"],
    ["What unusual applicant was given a newspaper delivery round by Rita in January 1988?", "Pensioner Harry Ashton", ["Mechanic Kevin Webster", "Councillor Alf Roberts", "Barmaid Gloria Todd"], "Hard", "1988", "The Kabin"],
    ["What was the name of elderly paperboy Harry Ashton's dog?", "Jimmy", ["Rover", "Lucky", "Schmeichel"], "Hard", "1988", "Animals"],
    ["Which couple planned to share the Corner Shop flat in 1988 despite objections from Alf and Emily?", "Curly Watts and Shirley Armitage", ["Kevin and Sally Webster", "Brian and Gail Tilsley", "Derek Wilton and Mavis Riley"], "Medium", "1988", "Relationships"],
    ["What financial record caused trouble when Kevin and Sally Webster applied for a mortgage in January 1988?", "A county court judgement", ["An unpaid tax bill", "A gambling debt", "An overdue council rent payment"], "Hard", "1988", "Money"],
    ["Which town did Curly Watts visit after his mother objected to his relationship with Shirley in 1988?", "Crewe", ["Bury", "Blackpool", "Bolton"], "Hard", "1988", "Locations"],
    ["Which relative of Shirley Armitage did Curly look after during August 1988?", "Her younger sister Lucy", ["Her mother", "Her cousin Sandra", "Her niece Tracy"], "Hard", "1988", "Families"],
    ["Which Coronation Street couple married each other again in February 1988?", "Gail and Brian Tilsley", ["Ken and Deirdre Barlow", "Kevin and Sally Webster", "Bet and Alec Gilroy"], "Easy", "1988", "Weddings"],
    ["Where did Gail and Brian Tilsley hold their second wedding in February 1988?", "A register office", ["All Saints Church", "The Rovers Return", "The Weatherfield Town Hall chamber"], "Medium", "1988", "Weddings"],
    ["To which country did Audrey Roberts travel in 1988 to visit the son she had given up for adoption?", "Canada", ["Australia", "Spain", "New Zealand"], "Medium", "1988", "Families"],
    ["What was the first name of Audrey Roberts' previously unknown son, revealed in 1988?", "Stephen", ["Martin", "Simon", "Paul"], "Medium", "1988", "Families"],
    ["How was Stephen, Audrey's son, related to Gail Tilsley?", "He was her half-brother", ["He was her cousin", "He was her nephew", "He was her stepfather"], "Medium", "1988", "Families"],
    ["Which couple had adopted Audrey Roberts' son Stephen?", "Malcolm and Joyce Reid", ["Alf and Renee Roberts", "Jack and Annie Walker", "Stan and Hilda Ogden"], "Hard", "1988", "Families"],
    ["What sad event affected Bet and Alec Gilroy after Bet became pregnant in 1988?", "Bet suffered a miscarriage", ["Alec was injured in a fire", "Bet lost her licence", "Their pub was demolished"], "Medium", "1988", "Storylines"],
    ["Which woman was dating Mike Baldwin when his involvement with Linda became a problem in February 1988?", "Gloria Todd", ["Ivy Tilsley", "Sally Webster", "Rita Fairclough"], "Medium", "1988", "Relationships"],
    ["Which woman left her husband Graham hoping to be with Mike Baldwin in 1988?", "Linda", ["Sandra", "Angela", "Dawn"], "Hard", "1988", "Relationships"],
    ["Who was badly beaten by Graham and his associates in March 1988?", "Mike Baldwin", ["Ken Barlow", "Alec Gilroy", "Curly Watts"], "Medium", "1988", "Storylines"],
    ["Which business did Alan Bradley begin working in during 1988 after leaving the video library?", "Burglar alarms", ["Taxi driving", "Window cleaning", "Motor repairs"], "Medium", "1988", "Businesses"],
    ["Who was Alan Bradley's employer in the alarm-fitting trade before Alan started his own venture?", "Dave Craig", ["Maurice Jones", "George Wardle", "Harry Slinger"], "Hard", "1988", "Businesses"],
    ["How much money did Rita initially lend Alan Bradley to invest in his alarm venture in 1988?", "£6,000", ["£600", "£1,000", "£10,000"], "Hard", "1988", "Money"],
    ["Which former resident's builder's yard did Rita let Alan Bradley use for his security business?", "Len Fairclough's", ["Stan Ogden's", "Albert Tatlock's", "Bert Tilsley's"], "Medium", "1988", "Businesses"],
    ["Which customer became romantically involved with Alan Bradley while he was fitting alarms in 1988?", "Carole Burns", ["Wendy Crozier", "Dawn Prescott", "Shirley Armitage"], "Medium", "1988", "Relationships"],
    ["Which factory worker was sacked by Mike Baldwin in May 1988 after he believed she had reported his drink-driving?", "Vera Duckworth", ["Ivy Tilsley", "Emily Bishop", "Gina Seddon"], "Medium", "1988", "Baldwin's Casuals"],
    ["Who admitted to Mike Baldwin that she had been the one to report his drink-driving in 1988?", "Ida Clough", ["Vera Duckworth", "Gloria Todd", "Bet Gilroy"], "Hard", "1988", "Storylines"],
    ["Which woman started working as a cleaner at the Rovers in 1988 while caring for her son Jason?", "Sandra Stubbs", ["Tina Fowler", "Linda Baldwin", "Gina Seddon"], "Medium", "1988", "Rovers Return"],
    ["What was the first name of Sandra Stubbs' son, who worked as a paperboy in 1988?", "Jason", ["Andy", "Darryl", "Simon"], "Hard", "1988", "Families"],
    ["What was the first name of Sandra Stubbs' violent estranged husband in 1988?", "Ronnie", ["Don", "Alan", "Graham"], "Hard", "1988", "Families"],
    ["Which pensioner temporarily moved in with Emily Bishop after being forced out of the Community Centre flat in 1988?", "Percy Sugden", ["Sam Tindall", "Harry Ashton", "Fred Gee"], "Easy", "1988", "Characters"],
    ["What job did Percy Sugden take in June 1988?", "School-crossing patrol officer", ["Rovers potman", "Factory supervisor", "Taxi driver"], "Medium", "1988", "Occupations"],
    ["On which Weatherfield street did Percy Sugden briefly have his own flat in July 1988?", "Parliament Street", ["Rosamund Street", "Viaduct Street", "Victoria Street"], "Hard", "1988", "Locations"],
    ["Which taxi driver married Ivy Tilsley in June 1988?", "Don Brennan", ["George Wardle", "Jack Duckworth", "Bill Webster"], "Easy", "1988", "Weddings"],
    ["Who gave Ivy Tilsley away when she married Don Brennan in 1988?", "Brian Tilsley", ["Alf Roberts", "Percy Sugden", "Ken Barlow"], "Medium", "1988", "Weddings"],
    ["Which alter ego's outfit did Jack Duckworth wear after misplacing his suit on Ivy and Don's wedding day?", "Vince St Clair", ["Reg Holdsworth", "Victor Pendlebury", "Harry Ashton"], "Medium", "1988", "Weddings"],
    ["Whose wedding ring had to be used when Jack Duckworth lost the ring at Ivy and Don's wedding?", "Bert Tilsley's", ["Stan Ogden's", "Len Fairclough's", "Jack Walker's"], "Hard", "1988", "Weddings"],
    ["Which Barlow family member was taking driving lessons in 1988?", "Deirdre Barlow", ["Tracy Barlow", "Susan Barlow", "Blanche Hunt"], "Medium", "1988", "Characters"],
    ["Which newspaper did Ken Barlow fight to keep publishing during financial turmoil in 1988?", "The Weatherfield Recorder", ["The Weatherfield Gazette", "The Daily Mirror", "The Weatherfield Advertiser"], "Medium", "1988", "Businesses"],
    ["Which woman did Jack Duckworth threaten to sue for compensation after a car accident in 1988?", "Vera Duckworth", ["Bet Gilroy", "Audrey Roberts", "Rita Fairclough"], "Medium", "1988", "Storylines"],
    ["Where did Don Brennan persuade Jack Duckworth to gamble with Vera's housekeeping money in July 1988?", "A casino", ["A bingo hall", "The bookmakers", "A snooker club"], "Medium", "1988", "Storylines"],
    ["What type of dog did Bet Gilroy take in at the Rovers in August 1988?", "An Alsatian", ["A greyhound", "A poodle", "A bulldog"], "Medium", "1988", "Animals"],
    ["What was the Rovers' stray Alsatian called in 1988?", "Rover", ["Lucky", "Jimmy", "Bouncer"], "Medium", "1988", "Animals"],
    ["To which seaside resort did Don Brennan organise a coach outing in August 1988?", "Blackpool", ["Scarborough", "Southport", "Morecambe"], "Medium", "1988", "Travel"],
    ["Which Canadian visitor caused tension between Audrey and Alf Roberts in 1988?", "Malcolm Reid", ["Stephen Reid", "Ian Latimer", "Patrice Podevin"], "Hard", "1988", "Relationships"],
    ["At which stationery firm did Mavis Riley discover that Derek Wilton would be interviewing her for a new job in 1988?", "Barkers", ["Baldwin's Casuals", "Chuckles Novelties", "Newton & Ridley"], "Medium", "1988", "Occupations"],
    ["How did Derek Wilton propose to Mavis Riley in 1988 when she refused to let him into The Kabin?", "Through the letterbox", ["By telegram", "Over the telephone", "With a newspaper advertisement"], "Medium", "1988", "Relationships"],
    ["In which month of 1988 did Mavis Riley and Derek Wilton marry?", "November", ["February", "June", "September"], "Medium", "1988", "Weddings"],
    ["Where did Mavis and Derek Wilton spend their honeymoon in 1988?", "Paris", ["Rome", "Corfu", "Majorca"], "Medium", "1988", "Travel"],
    ["Which man did Alec Gilroy send to perform at the Old Bank Club under the stage name Vince St Clair in 1988?", "Jack Duckworth", ["Curly Watts", "Percy Sugden", "Ken Barlow"], "Hard", "1988", "Entertainment"],
    ["Which Rovers landlord was mugged in 1988 and then suspected of making a dishonest insurance claim?", "Alec Gilroy", ["Jack Walker", "Billy Walker", "Fred Gee"], "Hard", "1988", "Storylines"],

    // =====================================================
    // 1989 - TRAGEDY, TROUBLE AND NEW ARRIVALS
    // =====================================================

    ["Which Seddon family member died after a lorry accident in January 1989?", "Eddie Seddon", ["Gina Seddon", "Sally Webster", "Harry Clayton"], "Medium", "1989", "Families"],
    ["Which deceased man did Alan Bradley impersonate on mortgage paperwork in January 1989?", "Len Fairclough", ["Bert Tilsley", "Stan Ogden", "Albert Tatlock"], "Medium", "1989", "Storylines"],
    ["Which property did Alan Bradley fraudulently remortgage in 1989?", "Number 7 Coronation Street", ["Number 1 Coronation Street", "Number 9 Coronation Street", "Number 13 Coronation Street"], "Medium", "1989", "Locations"],
    ["What was the name of Alan Bradley's security company launched in January 1989?", "Weatherfield Security Systems", ["Bradley's Motor Services", "Weatherfield Alarm Centre", "Fairclough Building Services"], "Hard", "1989", "Businesses"],
    ["Which secretary warned Rita about Alan Bradley's suspicious letters in March 1989?", "Dawn Prescott", ["Wendy Crozier", "Carole Burns", "Tina Fowler"], "Medium", "1989", "Characters"],
    ["Which woman discovered proof in Alan Bradley's office that he had used Len Fairclough's identity?", "Rita Fairclough", ["Jenny Bradley", "Bet Gilroy", "Emily Bishop"], "Medium", "1989", "Storylines"],
    ["What did Alan Bradley try to use to smother Rita during his violent attack in March 1989?", "A cushion", ["A blanket", "A pillowcase", "A scarf"], "Hard", "1989", "Storylines"],
    ["Which hospital treated Rita Fairclough after Alan Bradley attacked her in March 1989?", "Weatherfield General", ["Weatherfield Royal", "St Mary's Hospital", "Manchester Central Hospital"], "Medium", "1989", "Locations"],
    ["At which railway station did police arrest Alan Bradley in March 1989?", "Gatley", ["Victoria", "Piccadilly", "Stockport"], "Hard", "1989", "Storylines"],
    ["Which character told Brian Tilsley in February 1989 that she wanted a divorce?", "Gail Tilsley", ["Ivy Brennan", "Audrey Roberts", "Alma Sedgewick"], "Easy", "1989", "Relationships"],
    ["Who was fatally stabbed outside a disco on 15 February 1989?", "Brian Tilsley", ["Terry Duckworth", "Kevin Webster", "Martin Platt"], "Easy", "1989", "Storylines"],
    ["Which actress played Brian Tilsley's mother Ivy when he died in 1989?", "Lynne Perrie", ["Helen Worth", "Sue Nicholls", "Barbara Knox"], "Medium", "1989", "Actors"],
    ["In which month of 1989 was Brian Tilsley's funeral held?", "February", ["April", "June", "October"], "Medium", "1989", "Storylines"],
    ["In which year did actor Christopher Quinten leave Coronation Street following the death of Brian Tilsley?", "1989", ["1986", "1991", "1994"], "Medium", "1989", "Actors"],
    ["Which part of the world did Alec Gilroy tour as an entertainments manager in early 1989?", "The Middle East", ["South America", "Scandinavia", "Southern Africa"], "Hard", "1989", "Occupations"],
    ["Which character took over as Kevin Webster's fellow mechanic when he arrived in April 1989?", "Mark Casey", ["Martin Platt", "Terry Duckworth", "Reg Holdsworth"], "Medium", "1989", "Characters"],
    ["Who was Mark Casey's father and the new owner of Tilsley's Garage in 1989?", "Tom Casey", ["Bill Webster", "Alf Roberts", "Don Brennan"], "Medium", "1989", "Families"],
    ["Which character left Weatherfield in April 1989 after her relationship with Curly Watts ended?", "Shirley Armitage", ["Gina Seddon", "Tina Fowler", "Jenny Bradley"], "Medium", "1989", "Departures"],
    ["Which greyhound did Don Brennan receive in place of a taxi fare in May 1989?", "Lucky", ["Rover", "Jimmy", "Bouncer"], "Medium", "1989", "Animals"],
    ["Who gave Don Brennan the greyhound Lucky in lieu of paying his taxi fare?", "Harry Slinger", ["Jack Duckworth", "Reg Holdsworth", "Maurice Jones"], "Hard", "1989", "Characters"],
    ["Which woman did Alec Gilroy suspect of having a romance with Paul Rigby in May 1989?", "Bet Gilroy", ["Rita Fairclough", "Audrey Roberts", "Vera Duckworth"], "Medium", "1989", "Relationships"],
    ["Which factory owner began a relationship with Alma Sedgewick in 1989?", "Mike Baldwin", ["Ken Barlow", "Alf Roberts", "Alan Bradley"], "Easy", "1989", "Relationships"],
    ["Which woman first appeared in June 1989 and became Ken Barlow's lover?", "Wendy Crozier", ["Carole Burns", "Dawn Prescott", "Linda Baldwin"], "Easy", "1989", "Relationships"],
    ["What was Wendy Crozier's nickname during the 1989 council information-leak scandal?", "The Town Hall Mole", ["The Factory Spy", "The Kabin Informer", "The Recorder Robin"], "Medium", "1989", "Storylines"],
    ["Who exposed Wendy Crozier as the source of council leaks in September 1989?", "Deirdre Barlow", ["Rita Fairclough", "Vera Duckworth", "Bet Gilroy"], "Medium", "1989", "Storylines"],
    ["Which newspaper did Ken Barlow offer Wendy Crozier work on after she lost her council job in 1989?", "The Weatherfield Recorder", ["The Weatherfield Gazette", "The Manchester Evening News", "The Sunday Express"], "Medium", "1989", "Businesses"],
    ["Who saw Ken Barlow kissing Wendy Crozier in November 1989?", "Mike Baldwin", ["Alec Gilroy", "Curly Watts", "Brian Tilsley"], "Medium", "1989", "Storylines"],
    ["On what occasion did Wendy Crozier prepare a dinner for Ken Barlow in October 1989?", "His fiftieth birthday", ["His wedding anniversary", "His promotion", "New Year's Eve"], "Hard", "1989", "Storylines"],
    ["Who began a romantic relationship with widowed Gail Tilsley in August 1989?", "Martin Platt", ["Mark Casey", "Curly Watts", "Terry Duckworth"], "Easy", "1989", "Relationships"],
    ["To which road did Martin Platt move to live with Gail Tilsley in October 1989?", "Hammond Road", ["Rosamund Street", "Buxton Close", "Parliament Street"], "Hard", "1989", "Locations"],
    ["Which builder bought Baldwin's Casuals from Mike Baldwin in August 1989?", "Maurice Jones", ["Len Fairclough", "George Wardle", "Dave Craig"], "Medium", "1989", "Businesses"],
    ["What happened to the workers at Baldwin's Casuals after the factory was sold in August 1989?", "They were locked out", ["They received a pay rise", "They moved to a new plant", "They became shareholders"], "Medium", "1989", "Baldwin's Casuals"],
    ["Which community building was demolished alongside the former factory site in September 1989?", "The Community Centre", ["The Corner Shop", "The Kabin", "The Rovers Return"], "Medium", "1989", "Locations"],
    ["Which resident confronted builder Maurice Jones over the factory workers' redundancy money in 1989?", "Emily Bishop", ["Jenny Bradley", "Audrey Roberts", "Tracy Barlow"], "Medium", "1989", "Storylines"],
    ["Which supermarket hired Curly Watts as a trainee assistant manager in October 1989?", "Bettabuy", ["Freshco", "Costcutter", "Betterbuy's Bakery"], "Medium", "1989", "Businesses"],
    ["Which supermarket manager made his first appearance at Bettabuy in October 1989?", "Reg Holdsworth", ["Fred Elliott", "Fred Gee", "Alf Roberts"], "Easy", "1989", "Characters"],
    ["Which Bettabuy shop assistant was introduced alongside Reg Holdsworth in October 1989?", "Kimberley Taylor", ["Raquel Wolstenhulme", "Sally Seddon", "Shirley Armitage"], "Hard", "1989", "Characters"],
    ["Which married couple first appeared while viewing Number 11 in October 1989?", "Jim and Liz McDonald", ["Jack and Vera Duckworth", "Alf and Audrey Roberts", "Kevin and Sally Webster"], "Easy", "1989", "Characters"],
    ["What were the first names of the McDonald brothers who moved into Number 11 in December 1989?", "Steve and Andy", ["Jason and Simon", "Nick and David", "Kevin and Terry"], "Easy", "1989", "Families"],
    ["Which Coronation Street house did the McDonald family move into in December 1989?", "Number 11", ["Number 1", "Number 7", "Number 13"], "Medium", "1989", "Locations"],
    ["In which seaside town was Rita Fairclough discovered after going missing in December 1989?", "Blackpool", ["Southport", "Scarborough", "Brighton"], "Easy", "1989", "Locations"],
    ["What milestone did Coronation Street reach when Rita reappeared in December 1989?", "Its 3,000th episode", ["Its 1,000th episode", "Its 25th birthday special", "Its first colour episode"], "Medium", "1989", "TV History"],
    ["How did Alan Bradley die while chasing Rita Fairclough in December 1989?", "He was struck by a tram", ["He fell from a rooftop", "He was hit by a lorry", "He drowned in the sea"], "Easy", "1989", "Storylines"],
    ["Which character identified Alan Bradley's body after his death in 1989?", "Jenny Bradley", ["Rita Fairclough", "Bet Gilroy", "Dawn Prescott"], "Medium", "1989", "Families"],
    ["Which family member attended Alan Bradley's funeral in December 1989, supported by friends?", "Jenny Bradley", ["Rita Fairclough", "Carole Burns", "Wendy Crozier"], "Hard", "1989", "Storylines"],
    ["Which couple had a serious marital row after Vera discovered Jack had taken barmaid Tina Fowler out in 1989?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Don and Ivy Brennan", "Alf and Audrey Roberts"], "Medium", "1989", "Relationships"],
    ["Who was soaked when Vera threw a drink at Tina Fowler in the Rovers in July 1989?", "Alec Gilroy", ["Jack Duckworth", "Curly Watts", "Bet Gilroy"], "Medium", "1989", "Rovers Return"],
    ["Which company employed Derek Wilton to sell joke novelties during 1989?", "Chuckles Novelties", ["Barkers Stationery", "Newton & Ridley", "Baldwin's Casuals"], "Medium", "1989", "Occupations"],
    ["What bad news did Derek Wilton receive on Christmas Day 1989?", "He had lost his job", ["Mavis had left him", "The Kabin had closed", "His house had been sold"], "Medium", "1989", "Storylines"],
    ["What did Steve McDonald accidentally smash at the Corner Shop in late December 1989?", "A window with a football", ["The door with a bicycle", "The counter with a trolley", "A display case with a cricket ball"], "Medium", "1989", "Storylines"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {

    const [
        question,
        correctAnswer,
        wrongAnswers,
        difficulty,
        year,
        topic
    ] = fact;

    const answers = wrongAnswers.slice();

    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [
            'Soaps',
            'Coronation Street',
            '1980s',
            year,
            topic
        ],
        dailyEligible: true
    };

});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_0501' ||
    questions[99].id !== 'tv_0600'
) {
    throw new Error(
        'Pack 165: unexpected count or ID range'
    );
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
        new Set(
            q.answers.map(a => a.toLowerCase())
        ).size !== 4 ||
        q.answers.filter(
            a => a === q.correctAnswer
        ).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(
            q.difficulty
        ) ||
        q.category !== 'Television' ||
        !q.dailyEligible
    ) {
        throw new Error(
            'Pack 165: invalid entry ' + q.id
        );
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

// =====================================================
// EXPORT
// =====================================================

module.exports = questions;
