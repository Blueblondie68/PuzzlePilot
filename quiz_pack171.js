// quiz_pack171.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 2000 and 2001
// 100 questions: tv_1101 to tv_1200
// Year balance: 45 from 2000, 55 from 2001.
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // YEAR 2000
    // =====================================================

    ["Which former Coronation Street barmaid returned for a final visit at New Year 2000?", "Raquel Watts", ["Bet Gilroy", "Tanya Pooley", "Gloria Todd"], "Easy", "2000", "Returns"],
    ["What was the name of Curly Watts and Raquel's daughter, revealed in January 2000?", "Alice", ["Amy", "Becky", "Katie"], "Medium", "2000", "Families"],
    ["Which country was Raquel living in when she returned to ask Curly for a divorce in 2000?", "France", ["Canada", "Germany", "Australia"], "Medium", "2000", "Departures"],
    ["What was the name of Raquel's French partner mentioned during her 2000 return?", "Armand de Beaux", ["Jacques Laurent", "Pierre Dubois", "Jean Moreau"], "Hard", "2000", "Relationships"],
    ["What television first did Raquel's private conversation with Curly achieve in January 2000?", "Coronation Street's first two-hander", ["Its first colour episode", "Its first outdoor broadcast", "Its first musical episode"], "Medium", "2000", "TV History"],
    ["Which mechanic married Alison Wakefield in January 2000?", "Kevin Webster", ["Chris Collins", "Martin Platt", "Jim McDonald"], "Easy", "2000", "Weddings"],
    ["Which region did Kevin and Alison visit on their honeymoon in 2000?", "The Lake District", ["The Scottish Highlands", "The Yorkshire Dales", "The Peak District"], "Medium", "2000", "Travel"],
    ["What was the name of Kevin and Alison Webster's baby son, born in June 2000?", "Jake", ["Jack", "Jamie", "Jason"], "Medium", "2000", "Families"],
    ["What happened to baby Jake Webster shortly after his birth in 2000?", "He died from an infection", ["He was adopted", "He was taken abroad", "He needed a heart transplant"], "Medium", "2000", "Storylines"],
    ["Whose newborn baby did the grieving Alison Webster take in June 2000?", "Bethany Platt", ["Becky Mallett", "Rosie Webster", "Alice Watts"], "Medium", "2000", "Storylines"],
    ["How did Alison Webster die following the death of her son in 2000?", "She ran in front of a lorry", ["She drowned in the canal", "She fell from a balcony", "She died in a house fire"], "Medium", "2000", "Storylines"],
    ["Which Rovers landlady's sister Debs Brownlow arrived in February 2000?", "Natalie Barnes", ["Liz McDonald", "Betty Williams", "Vera Duckworth"], "Medium", "2000", "Families"],
    ["What was Debs Brownlow's job when she arrived in Weatherfield in 2000?", "Hairdresser", ["Nurse", "Teacher", "Police officer"], "Medium", "2000", "Occupations"],
    ["Which businessman became romantically involved with Debs Brownlow in 2000?", "Duggie Ferguson", ["Fred Elliott", "Roy Cropper", "Mike Baldwin"], "Medium", "2000", "Relationships"],
    ["Which former wife of Mike Baldwin began using the surname Halliwell again in 2000?", "Alma", ["Linda", "Susan", "Jackie"], "Easy", "2000", "Characters"],
    ["Which new barmaid first appeared in February 2000 and later dated Dev Alahan?", "Geena Gregory", ["Shelley Unwin", "Karen Phillips", "Sunita Parekh"], "Medium", "2000", "Arrivals"],
    ["Which Platt teenager discovered she was pregnant at the age of thirteen in February 2000?", "Sarah-Louise", ["Rosie", "Leanne", "Toyah"], "Easy", "2000", "Families"],
    ["Which doctor told Gail Platt that Sarah-Louise was pregnant in 2000?", "Dr Wilson", ["Dr Gaddas", "Dr Matt Ramsden", "Dr Carter"], "Medium", "2000", "Storylines"],
    ["Who was the father of Sarah-Louise Platt's baby, born in June 2000?", "Neil Fearns", ["Todd Grimshaw", "Nick Tilsley", "Jason Grimshaw"], "Easy", "2000", "Families"],
    ["What name did Sarah-Louise Platt give her daughter born in June 2000?", "Bethany", ["Britney", "Becky", "Bella"], "Easy", "2000", "Families"],
    ["Which pop star's first name did Sarah briefly consider using for baby Bethany in 2000?", "Britney Spears", ["Christina Aguilera", "Kylie Minogue", "Melanie Brown"], "Medium", "2000", "Popular Culture"],
    ["Which young Platt went shoplifting because he felt overlooked after Bethany's birth?", "David Platt", ["Nick Tilsley", "Martin Platt", "Peter Barlow"], "Medium", "2000", "Families"],
    ["Which woman was Martin Platt's secret lover during 2000?", "Rebecca Hopkins", ["Alison Wakefield", "Linda Sykes", "Fiona Middleton"], "Medium", "2000", "Relationships"],
    ["To which city did nurse Rebecca Hopkins leave Weatherfield in June 2000?", "Dubai", ["Edinburgh", "Barcelona", "Amsterdam"], "Medium", "2000", "Departures"],
    ["Which newcomer began dating Tyrone Dobbs in May 2000?", "Maria Sutherland", ["Candice Stowe", "Fiz Brown", "Geena Gregory"], "Easy", "2000", "Relationships"],
    ["What was the name of Maria Sutherland's brother, introduced in 2000?", "Kirk", ["Karl", "Keith", "Kevin"], "Easy", "2000", "Families"],
    ["At which famous seaside landmark did Tyrone Dobbs propose to Maria in July 2000?", "Blackpool Tower", ["Brighton Pier", "Southend Pier", "Scarborough Castle"], "Medium", "2000", "Relationships"],
    ["Which actress began playing Maria Sutherland in 2000?", "Samia Ghadie", ["Jane Danson", "Georgia Taylor", "Nikki Sanderson"], "Medium", "2000", "Actors"],
    ["Which businessman married machinist Linda Sykes in September 2000?", "Mike Baldwin", ["Fred Elliott", "Duggie Ferguson", "Roy Cropper"], "Easy", "2000", "Weddings"],
    ["Which of Mike Baldwin's sons had secretly been involved with Linda Sykes before Mike married her?", "Mark Redman", ["Adam Barlow", "Danny Baldwin", "Peter Barlow"], "Medium", "2000", "Relationships"],
    ["Who unexpectedly acted as Mike Baldwin's best man when Mark went missing in September 2000?", "Roy Cropper", ["Ken Barlow", "Fred Elliott", "Jack Duckworth"], "Medium", "2000", "Weddings"],
    ["At which hotel did Mike Baldwin marry Linda Sykes in 2000?", "De Lisle House", ["The Belstaff Hotel", "The Midland Hotel", "The Grand Hotel"], "Hard", "2000", "Locations"],
    ["Which supermarket was the setting for an armed hostage siege in October 2000?", "Freshco", ["Bettabuy", "Firman's Freezers", "Costcutter"], "Easy", "2000", "Crime"],
    ["Which young gunman was fatally shot by police during the Freshco siege?", "Dean Sykes", ["Jez Quigley", "Greg Kelly", "Jon Lindsay"], "Medium", "2000", "Crime"],
    ["Which police sergeant shot Dean Sykes during the 2000 Freshco siege?", "Emma Taylor", ["Maya Desai", "Colette Graham", "Geena Gregory"], "Medium", "2000", "Crime"],
    ["What was Dean Sykes's relationship to Mike Baldwin's new wife Linda?", "He was her brother", ["He was her son", "He was her cousin", "He was her nephew"], "Medium", "2000", "Families"],
    ["Which Weatherfield butcher was taken hostage during the 2000 Freshco siege?", "Fred Elliott", ["Alec Gilroy", "Jack Walker", "Billy Walker"], "Medium", "2000", "Crime"],
    ["Which couple moved back into Number 9 Coronation Street in October 2000?", "Jack and Vera Duckworth", ["Ken and Deirdre Barlow", "Curly and Emma Watts", "Martin and Gail Platt"], "Medium", "2000", "Homes"],
    ["To which seaside town did Gary Mallett move with his twins in 2000?", "Blackpool", ["Southport", "Morecambe", "Skegness"], "Medium", "2000", "Departures"],
    ["Which important anniversary did Coronation Street celebrate in December 2000?", "Its fortieth", ["Its thirtieth", "Its fiftieth", "Its sixtieth"], "Easy", "2000", "TV History"],
    ["What unusual broadcasting format was used for Coronation Street's anniversary episode on 8 December 2000?", "It was broadcast live", ["It was fully animated", "It was shown without dialogue", "It was filmed in 3D"], "Medium", "2000", "TV History"],
    ["Which royal appeared as himself in a news report during Coronation Street's live 2000 anniversary episode?", "Prince Charles", ["Prince Andrew", "Prince Edward", "Prince Philip"], "Medium", "2000", "TV History"],
    ["Which police sergeant married Curly Watts on Christmas Eve 2000?", "Emma Taylor", ["Colette Graham", "Geena Gregory", "Anne Malone"], "Medium", "2000", "Weddings"],
    ["Which Coronation Street resident left Weatherfield on New Year's Eve 2000?", "Natalie Barnes", ["Audrey Roberts", "Rita Sullivan", "Emily Bishop"], "Medium", "2000", "Departures"],
    ["Which veteran singer appeared as Stan Potter in the show's live fortieth-anniversary episode?", "Noddy Holder", ["Paul McCartney", "Cliff Richard", "Mick Hucknall"], "Hard", "2000", "TV History"],

    // =====================================================
    // YEAR 2001
    // =====================================================

    ["Which man became engaged to Sally Webster at the start of 2001?", "Danny Hargreaves", ["Chris Collins", "Martin Platt", "Kevin Webster"], "Medium", "2001", "Relationships"],
    ["Which daughter of Ken Barlow had secretly raised Mike Baldwin's son Adam?", "Susan Barlow", ["Tracy Barlow", "Denise Osbourne", "Deirdre Rachid"], "Easy", "2001", "Families"],
    ["What was the name of Susan Barlow and Mike Baldwin's son, revealed in 2001?", "Adam", ["Daniel", "Simon", "Peter"], "Easy", "2001", "Families"],
    ["How did Susan Barlow die in February 2001?", "A car crash", ["A house fire", "A fall down stairs", "A heart attack"], "Medium", "2001", "Storylines"],
    ["Which two men fought a custody battle over Adam Barlow in 2001?", "Ken Barlow and Mike Baldwin", ["Peter Barlow and Steve McDonald", "Fred Elliott and Ashley Peacock", "Roy Cropper and Duggie Ferguson"], "Medium", "2001", "Families"],
    ["Who won the March 2001 custody hearing involving Adam Barlow?", "Mike Baldwin", ["Ken Barlow", "Peter Barlow", "Steve McDonald"], "Medium", "2001", "Families"],
    ["Which family moved into Number 11 Coronation Street in January 2001?", "The Grimshaws", ["The Harrises", "The Peacocks", "The Malletts"], "Easy", "2001", "Arrivals"],
    ["What was the name of Todd and Jason Grimshaw's mother?", "Eileen", ["Evelyn", "Edna", "Emily"], "Easy", "2001", "Families"],
    ["Which younger Grimshaw brother made his first appearance in January 2001?", "Todd", ["Jason", "Charlie", "Kirk"], "Easy", "2001", "Arrivals"],
    ["Which actress began playing Eileen Grimshaw?", "Sue Cleaver", ["Sally Lindsay", "Denise Welch", "Sherrie Hewson"], "Medium", "2001", "Actors"],
    ["Which girl was hurt when a shelf collapsed while she was in Danny Hargreaves's care in February 2001?", "Sophie Webster", ["Rosie Webster", "Sarah Platt", "Amy Barlow"], "Medium", "2001", "Families"],
    ["Which former Rovers landlady gave birth to a daughter named Laura in February 2001?", "Natalie Barnes", ["Liz McDonald", "Betty Williams", "Vera Duckworth"], "Medium", "2001", "Families"],
    ["What was the first name of Natalie Barnes's daughter born in February 2001?", "Laura", ["Lucy", "Lily", "Louise"], "Medium", "2001", "Families"],
    ["What family milestone did Roy and Hayley Cropper achieve in January 2001?", "Approval as foster parents", ["Adoption of a son", "A legal marriage", "Opening a second café"], "Medium", "2001", "Families"],
    ["Which teenage girl did Roy and Hayley Cropper foster in April 2001?", "Fiz Brown", ["Toyah Battersby", "Candice Stowe", "Leanne Tilsley"], "Easy", "2001", "Arrivals"],
    ["Which actress began playing Fiz Brown in 2001?", "Jennie McAlpine", ["Georgia Taylor", "Nikki Sanderson", "Jane Danson"], "Medium", "2001", "Actors"],
    ["What false allegation did Fiz Brown make about foster father Roy Cropper in April 2001?", "That he had been violent towards her", ["That he stole her money", "That he had sold the café", "That he had kidnapped her brother"], "Medium", "2001", "Storylines"],
    ["Which boy did Roy and Hayley Cropper later try to protect from his abusive stepfather in 2001?", "Wayne Hayes", ["Adam Barlow", "David Platt", "Brad Armstrong"], "Medium", "2001", "Storylines"],
    ["What was the name of Wayne Hayes's abusive stepfather?", "Alex Swinton", ["Greg Kelly", "Jon Lindsay", "Danny Hargreaves"], "Medium", "2001", "Families"],
    ["How much did Roy and Hayley agree to pay to secure Wayne Hayes's custody in June 2001?", "£5,000", ["£500", "£2,000", "£10,000"], "Hard", "2001", "Money"],
    ["Why were Roy and Hayley Cropper arrested in August 2001?", "They took foster child Wayne away without permission", ["They robbed a bank", "They set fire to the café", "They helped a prisoner escape"], "Medium", "2001", "Storylines"],
    ["Which member of the Cropper household was held on remand for refusing a bail condition in August 2001?", "Hayley Cropper", ["Roy Cropper", "Fiz Brown", "Blanche Hunt"], "Medium", "2001", "Storylines"],
    ["Which woman admitted that Wayne Hayes's stepfather was abusing him in August 2001?", "Sheila Hayes", ["Sally Webster", "Eileen Grimshaw", "Janice Battersby"], "Medium", "2001", "Storylines"],
    ["Which Battersby teenager was sexually assaulted in an April 2001 storyline?", "Toyah Battersby", ["Leanne Battersby", "Candice Stowe", "Tracy Barlow"], "Easy", "2001", "Storylines"],
    ["Who found Toyah Battersby after the 2001 attack in the ginnel?", "Jason Grimshaw", ["Todd Grimshaw", "Peter Barlow", "Dennis Stringer"], "Medium", "2001", "Storylines"],
    ["Which man was eventually identified as Toyah Battersby's attacker in 2001?", "Phil Simmonds", ["Jez Quigley", "Greg Kelly", "Fraser Henderson"], "Medium", "2001", "Crime"],
    ["Which member of the Barlow family was initially suspected of Toyah's attack?", "Peter Barlow", ["Ken Barlow", "Adam Barlow", "Mike Baldwin"], "Medium", "2001", "Crime"],
    ["Which couple were officially divorced in April 2001?", "Gail and Martin Platt", ["Sally and Kevin Webster", "Ken and Deirdre Barlow", "Jack and Vera Duckworth"], "Easy", "2001", "Relationships"],
    ["Which barmaid joined the Rovers Return in May 2001 and later became a landlady?", "Shelley Unwin", ["Geena Gregory", "Tanya Pooley", "Samantha Failsworth"], "Easy", "2001", "Arrivals"],
    ["Which actress played Shelley Unwin when she arrived in 2001?", "Sally Lindsay", ["Angela Griffin", "Vicky Entwistle", "Denise Welch"], "Medium", "2001", "Actors"],
    ["Which future Corner Shop assistant fled an arranged marriage and appeared in March 2001?", "Sunita Parekh", ["Nita Desai", "Geena Gregory", "Karen Phillips"], "Easy", "2001", "Arrivals"],
    ["Which actress played Sunita Parekh in Coronation Street?", "Shobna Gulati", ["Nina Wadia", "Indira Joshi", "Mina Anwar"], "Medium", "2001", "Actors"],
    ["Which McDonald married Karen Phillips for a bet in May 2001?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Peter Barlow"], "Easy", "2001", "Weddings"],
    ["Who played the fiery Karen Phillips when she joined Coronation Street?", "Suranne Jones", ["Sally Lindsay", "Tracy Shaw", "Tina Hobley"], "Medium", "2001", "Actors"],
    ["What was Steve and Karen McDonald's unusual reason for their May 2001 marriage?", "A wager between factory colleagues", ["An inheritance condition", "A television competition", "A misunderstanding at the registry office"], "Medium", "2001", "Weddings"],
    ["Which long-serving character learnt she had terminal cervical cancer in 2001?", "Alma Halliwell", ["Audrey Roberts", "Rita Sullivan", "Emily Bishop"], "Easy", "2001", "Storylines"],
    ["In which month of 2001 did Alma Halliwell die?", "June", ["March", "September", "December"], "Medium", "2001", "Storylines"],
    ["Which former husband of Alma Halliwell pledged to support her during her final weeks in 2001?", "Mike Baldwin", ["Don Brennan", "Ken Barlow", "Reg Holdsworth"], "Medium", "2001", "Relationships"],
    ["Which future serial killer was introduced at cousin Alma's funeral in June 2001?", "Richard Hillman", ["Jez Quigley", "Greg Kelly", "Jon Lindsay"], "Easy", "2001", "Arrivals"],
    ["Which actor began playing Richard Hillman in 2001?", "Brian Capron", ["John Bowe", "Lee Boardman", "Matthew Marsden"], "Medium", "2001", "Actors"],
    ["What did Curly Watts agree to stand for in a Weatherfield election in May 2001?", "The local council", ["Parliament", "Mayor of Greater Manchester", "Police commissioner"], "Medium", "2001", "Politics"],
    ["Which online acquaintance trapped Sarah Platt before Dennis Stringer rescued her in July 2001?", "Gary Adams", ["Todd Grimshaw", "Aiden Critchley", "Neil Fearns"], "Medium", "2001", "Crime"],
    ["Who rescued Sarah Platt from an internet stalker in July 2001?", "Dennis Stringer", ["Martin Platt", "Peter Barlow", "Jason Grimshaw"], "Medium", "2001", "Storylines"],
    ["Which boy was revealed to be Sarah Platt's online friend 'TJ' in July 2001?", "Todd Grimshaw", ["Jason Grimshaw", "Nick Tilsley", "Aiden Critchley"], "Medium", "2001", "Relationships"],
    ["Which butcher married Eve Sykes in September 2001?", "Fred Elliott", ["Ashley Peacock", "Duggie Ferguson", "Mike Baldwin"], "Easy", "2001", "Weddings"],
    ["What was the name of Linda Baldwin's mother, who married Fred Elliott in 2001?", "Eve Sykes", ["Doreen Heavey", "Maud Grimes", "Audrey Roberts"], "Medium", "2001", "Families"],
    ["Which doctor did Maxine Peacock become involved with in September 2001?", "Matt Ramsden", ["Dr Wilson", "Martin Platt", "Roy Cropper"], "Medium", "2001", "Relationships"],
    ["Which Rovers landlord discovered Edna Miller dead in his bed in September 2001?", "Duggie Ferguson", ["Fred Elliott", "Alec Gilroy", "Jack Duckworth"], "Medium", "2001", "Rovers Return"],
    ["What was the name of Peter Barlow's betting shop opened in October 2001?", "Barlow's Bookies", ["Peter's Palace", "Weatherfield Wagers", "The Winning Post"], "Medium", "2001", "Businesses"],
    ["Which Rovers barmaid was romantically involved with Dev Alahan in 2001?", "Geena Gregory", ["Shelley Unwin", "Karen McDonald", "Liz McDonald"], "Medium", "2001", "Relationships"],
    ["What happened to Jack Duckworth's home-brewed poteen in August 2001?", "It exploded in his allotment shed", ["It won a drinks competition", "It was stolen by a neighbour", "It was accidentally served at the Rovers"], "Medium", "2001", "Comedy"],
    ["Which resident helped Emma Watts deliver her baby on Boxing Day 2001?", "Norris Cole", ["Fred Elliott", "Ken Barlow", "Roy Cropper"], "Medium", "2001", "Families"],
    ["What name did Curly and Emma Watts choose for their son born in December 2001?", "Ben", ["Billy", "Brad", "Bobby"], "Easy", "2001", "Families"],
    ["Who bought the Rovers Return at auction at the end of 2001?", "Fred Elliott", ["Duggie Ferguson", "Mike Baldwin", "Steve McDonald"], "Medium", "2001", "Rovers Return"],
    ["Which resident spent Christmas night 2001 with Dev Alahan?", "Deirdre Rachid", ["Liz McDonald", "Rita Sullivan", "Sunita Parekh"], "Medium", "2001", "Relationships"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(1101 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_1101' ||
    questions[99].id !== 'tv_1200' ||
    questions.filter(q => q.tags.includes('2000')).length !== 45 ||
    questions.filter(q => q.tags.includes('2001')).length !== 55
) {
    throw new Error('Pack 171: incorrect count, years or ID range');
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
        throw new Error('Pack 171: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
