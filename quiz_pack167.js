// quiz_pack167.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1992 and 1993
// 100 questions: tv_0701 to tv_0800
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1992 - WEDDINGS, DEPARTURES AND NEW ARRIVALS
    // =====================================================

    ["What was the name of Jim and Liz McDonald's baby daughter born prematurely in January 1992?", "Katie", ["Amy", "Sarah", "Rosie"], "Medium", "1992", "Families"],
    ["What tragedy struck Jim and Liz McDonald shortly after their daughter Katie was born in 1992?", "She died", ["She was kidnapped", "She was taken abroad", "She went missing from hospital"], "Medium", "1992", "Storylines"],
    ["Which Rovers barmaid moved in with Des Barnes at Number 6 in January 1992?", "Raquel Wolstenhulme", ["Betty Turpin", "Liz McDonald", "Tina Fowler"], "Easy", "1992", "Homes"],
    ["What was the name of Terry Duckworth's pregnant girlfriend who appeared in February 1992?", "Lisa Horton", ["Jackie Ingram", "Kimberley Taylor", "Steph Barnes"], "Medium", "1992", "Arrivals"],
    ["Which actress played Lisa Horton, later Duckworth, in Coronation Street?", "Caroline Milmoe", ["Amelia Bullmore", "Deborah McAndrew", "Catherine Cusack"], "Hard", "1992", "Actors"],
    ["Which Coronation Street couple's divorce became final in February 1992?", "Ken and Deirdre Barlow", ["Kevin and Sally Webster", "Jack and Vera Duckworth", "Derek and Mavis Wilton"], "Easy", "1992", "Relationships"],
    ["Which businessman began courting Rita Fairclough in February 1992?", "Ted Sullivan", ["Reg Holdsworth", "Maurice Jones", "Des Barnes"], "Medium", "1992", "Relationships"],
    ["Which actor portrayed Rita's husband Ted Sullivan in 1992?", "William Russell", ["Roy Barraclough", "Peter Baldwin", "Mark Eden"], "Hard", "1992", "Actors"],
    ["What sort of work brought Ted Sullivan into contact with Rita and Mavis at The Kabin in 1992?", "Supplying the newsagent's", ["Repairing the roof", "Delivering milk", "Installing alarms"], "Hard", "1992", "Occupations"],
    ["Which American state did Ted Sullivan hope to retire to with Rita in 1992?", "Florida", ["California", "Arizona", "Texas"], "Medium", "1992", "Travel"],
    ["What serious illness did Ted Sullivan reveal to Rita in April 1992?", "An inoperable brain tumour", ["A heart condition", "Kidney failure", "Lung disease"], "Medium", "1992", "Storylines"],
    ["In which month of 1992 did Rita Fairclough marry Ted Sullivan?", "June", ["March", "August", "November"], "Medium", "1992", "Weddings"],
    ["Which Coronation Street character lost her husband Ted to illness in September 1992?", "Rita Sullivan", ["Mavis Wilton", "Bet Gilroy", "Emily Bishop"], "Easy", "1992", "Storylines"],
    ["What was Percy Sugden doing in the park when Ted Sullivan died nearby in September 1992?", "Playing bowls", ["Walking a dog", "Reading a newspaper", "Feeding ducks"], "Hard", "1992", "Storylines"],
    ["In which Manchester prison was Terry Duckworth being held during 1992?", "Strangeways", ["Holloway", "Wormwood Scrubs", "Pentonville"], "Medium", "1992", "Storylines"],
    ["Who married Terry Duckworth during his day release from prison in May 1992?", "Lisa Horton", ["Raquel Wolstenhulme", "Flick Khan", "Angie Freeman"], "Easy", "1992", "Weddings"],
    ["What did Terry Duckworth do while the photographs were being taken after his wedding in 1992?", "Ran away from custody", ["Fainted", "Stole the wedding car", "Punched his best man"], "Medium", "1992", "Storylines"],
    ["At which supermarket was the escaped Terry Duckworth apprehended in June 1992?", "Bettabuy", ["Freshco", "Costcutter", "Alf's Corner Shop"], "Medium", "1992", "Businesses"],
    ["How long a prison sentence did Terry Duckworth receive for grievous bodily harm in July 1992?", "Three years", ["Six months", "One year", "Five years"], "Hard", "1992", "Storylines"],
    ["What were the first names of Lisa Horton's parents, introduced in 1992?", "Jeff and Doreen", ["Jack and Vera", "Stan and Hilda", "Alf and Audrey"], "Medium", "1992", "Families"],
    ["What name did Lisa Duckworth give to her son born in September 1992?", "Tommy", ["Terry", "Jason", "Simon"], "Easy", "1992", "Families"],
    ["Which Rovers facility was condemned after a health and safety inspection in March 1992?", "The kitchen", ["The cellar", "The toilets", "The snug"], "Medium", "1992", "Rovers Return"],
    ["Which Kabin employee faced industrial action by the paperboys in April 1992?", "Derek Wilton", ["Mavis Wilton", "Rita Fairclough", "Ken Barlow"], "Medium", "1992", "The Kabin"],
    ["Which couple announced their engagement in April and married in June 1992?", "Mike Baldwin and Alma Sedgewick", ["Des Barnes and Raquel Wolstenhulme", "Reg Holdsworth and Maureen Naylor", "Ken Barlow and Wendy Crozier"], "Easy", "1992", "Weddings"],
    ["Which actress played Alma Sedgewick when she married Mike Baldwin in 1992?", "Amanda Barrie", ["Sue Nicholls", "Sally Whittaker", "Julie Goodyear"], "Medium", "1992", "Actors"],
    ["Which Weatherfield taxi driver had a serious car accident in June 1992?", "Don Brennan", ["Des Barnes", "Jim McDonald", "Jack Duckworth"], "Medium", "1992", "Storylines"],
    ["What operation did Don Brennan need after his 1992 car accident?", "Amputation of his lower right leg", ["A heart transplant", "Removal of an eye", "A hip replacement"], "Medium", "1992", "Storylines"],
    ["Which Coronation Street resident bought Number 7 from Rita Sullivan in July 1992?", "Curly Watts", ["Reg Holdsworth", "Martin Platt", "Des Barnes"], "Medium", "1992", "Homes"],
    ["To which English city was Alec Gilroy offered an entertainments job in August 1992?", "Southampton", ["Bristol", "Birmingham", "Newcastle"], "Medium", "1992", "Occupations"],
    ["Who decided not to leave the Rovers Return with Alec Gilroy in September 1992?", "Bet Gilroy", ["Liz McDonald", "Betty Turpin", "Raquel Wolstenhulme"], "Easy", "1992", "Relationships"],
    ["How long was Bet Gilroy's initial probation as manager of the Rovers in September 1992?", "Six months", ["One month", "One year", "Two years"], "Hard", "1992", "Rovers Return"],
    ["Which newcomer became friends with Nicky Tilsley at Weatherfield Comprehensive in September 1992?", "Mark Redman", ["Andy McDonald", "Jason Stubbs", "Craig Whitely"], "Medium", "1992", "Arrivals"],
    ["What did Ted Sullivan's relatives accuse Rita of after his death in 1992?", "Marrying him for his money", ["Stealing from The Kabin", "Selling his house secretly", "Hiding his medical records"], "Medium", "1992", "Storylines"],
    ["Which character developed a drinking problem as her marriage to Don Brennan faltered in 1992?", "Ivy Brennan", ["Audrey Roberts", "Emily Bishop", "Alma Baldwin"], "Medium", "1992", "Storylines"],
    ["Which supermarket dismissed Ivy Brennan in October 1992 because of her unreliability?", "Bettabuy", ["Freshco", "Spar", "Costcutter"], "Medium", "1992", "Businesses"],
    ["Which businessman did Ken Barlow publicly accuse of cheating Emily Bishop out of money in July 1992?", "Mike Baldwin", ["Reg Holdsworth", "Ted Sullivan", "Alec Gilroy"], "Medium", "1992", "Storylines"],
    ["What escaped pet sent customers fleeing from the Rovers Return in July 1992?", "A large spider", ["A python", "A ferret", "A parrot"], "Medium", "1992", "Animals"],
    ["Which former girlfriend unexpectedly appeared as Curly Watts's blind date in August 1992?", "Kimberley Taylor", ["Shirley Armitage", "Raquel Wolstenhulme", "Angie Freeman"], "Medium", "1992", "Relationships"],
    ["What possession did Kimberley Taylor demand Curly Watts get rid of before ending their engagement in November 1992?", "His telescope", ["His motorbike", "His record collection", "His computer"], "Medium", "1992", "Relationships"],
    ["Which McDonald twin returned home in November 1992 after dropping out of university?", "Andy McDonald", ["Steve McDonald", "Peter Barlow", "Nicky Tilsley"], "Medium", "1992", "Families"],
    ["Who invited nanny Carmel Finnan to live with the Platt family in November 1992?", "Gail Platt", ["Ivy Brennan", "Audrey Roberts", "Alma Baldwin"], "Medium", "1992", "Storylines"],
    ["Which member of the Platt family became the object of Carmel Finnan's obsession in 1992?", "Martin Platt", ["Nicky Platt", "David Platt", "Brian Tilsley"], "Medium", "1992", "Storylines"],
    ["Which future salon owner made her first appearance on the Street in December 1992?", "Denise Osbourne", ["Maureen Naylor", "Tanya Pooley", "Fiona Middleton"], "Medium", "1992", "Arrivals"],
    ["Which actress played Denise Osbourne when she joined Coronation Street in 1992?", "Denise Black", ["Sherrie Hewson", "Deborah McAndrew", "Eva Pope"], "Medium", "1992", "Actors"],
    ["At which Coronation Street house did Denise Osbourne establish a hair and beauty salon?", "Number 2", ["Number 6", "Number 9", "Number 13"], "Medium", "1992", "Businesses"],
    ["Which McDonald brother crashed Mike Baldwin's car during a drive in December 1992?", "Steve McDonald", ["Andy McDonald", "Jim McDonald", "Nicky Tilsley"], "Medium", "1992", "Storylines"],
    ["Who told Ken Barlow in December 1992 that Mike Baldwin was Mark Redman's father?", "Tracy Barlow", ["Deirdre Barlow", "Alma Baldwin", "Rita Sullivan"], "Medium", "1992", "Families"],
    ["Which BBC soap did Coronation Street's first hour-long transmission in July 1992 compete against?", "Eldorado", ["EastEnders", "Brookside", "Neighbours"], "Hard", "1992", "TV History"],
    ["Which actress played the troubled nanny Carmel Finnan in 1992?", "Catherine Cusack", ["Caroline Milmoe", "Lisa Lewis", "Sarah Lancashire"], "Hard", "1992", "Actors"],
    ["Which Bettabuy area manager hinted at promotion when Curly proposed to Kimberley in August 1992?", "Brendan Scott", ["Reg Holdsworth", "Alf Roberts", "Maurice Jones"], "Hard", "1992", "Businesses"],

    // =====================================================
    // 1993 - NEW BUSINESSES AND FAMILY TROUBLES
    // =====================================================

    ["Which young man learnt in January 1993 that Mike Baldwin was his father?", "Mark Redman", ["Nicky Platt", "Andy McDonald", "Tommy Duckworth"], "Medium", "1993", "Families"],
    ["Who was driving the car that struck Lisa Duckworth in February 1993?", "John Hargreaves", ["Don Brennan", "Des Barnes", "Kevin Webster"], "Hard", "1993", "Storylines"],
    ["Which young mother died following a road accident in February 1993?", "Lisa Duckworth", ["Sally Webster", "Angie Freeman", "Tanya Pooley"], "Easy", "1993", "Storylines"],
    ["Whom was Lisa Duckworth planning a future with before her fatal accident in 1993?", "Des Barnes", ["Curly Watts", "Reg Holdsworth", "Mark Casey"], "Medium", "1993", "Relationships"],
    ["Who won the 1993 court dispute over the late Ted Sullivan's will?", "Rita Sullivan", ["Mavis Wilton", "Ted's nephews", "Emily Bishop"], "Medium", "1993", "Storylines"],
    ["Which fashion designer moved out of Number 7 in March 1993?", "Angie Freeman", ["Raquel Wolstenhulme", "Denise Osbourne", "Jenny Bradley"], "Medium", "1993", "Departures"],
    ["Which nanny falsely told Martin Platt that she was pregnant with his child in March 1993?", "Carmel Finnan", ["Amy Nelson", "Maureen Naylor", "Tanya Pooley"], "Easy", "1993", "Storylines"],
    ["Who told Gail Platt that Martin had spent the night with Carmel Finnan in March 1993?", "Ivy Brennan", ["Audrey Roberts", "Alma Baldwin", "Rita Sullivan"], "Medium", "1993", "Families"],
    ["What happened to Carmel Finnan during a confrontation with Gail Platt in March 1993?", "She fell down stairs", ["She was knocked down by a car", "She fainted in the Rovers", "She fled to Canada"], "Medium", "1993", "Storylines"],
    ["What truth about Carmel Finnan's supposed pregnancy was revealed in March 1993?", "She was not pregnant", ["She was expecting twins", "Martin was not the father", "She had given birth secretly"], "Medium", "1993", "Storylines"],
    ["What was the first name of Carmel Finnan's grandfather, who arrived in Weatherfield in March 1993?", "John", ["Peter", "George", "Harry"], "Hard", "1993", "Families"],
    ["To which country did Carmel Finnan return with her grandfather in 1993?", "Ireland", ["Scotland", "Canada", "Australia"], "Medium", "1993", "Departures"],
    ["Which future wife of Reg Holdsworth began working at Bettabuy in March 1993?", "Maureen Naylor", ["Denise Osbourne", "Tanya Pooley", "Fiona Middleton"], "Easy", "1993", "Arrivals"],
    ["Which actress began playing Maureen Naylor in 1993?", "Sherrie Hewson", ["Amanda Barrie", "Elizabeth Bradley", "Sue Nicholls"], "Medium", "1993", "Actors"],
    ["What was the name of Maureen Naylor's formidable mother, introduced in April 1993?", "Maud Grimes", ["Blanche Hunt", "Phyllis Pearce", "Eunice Gee"], "Medium", "1993", "Families"],
    ["Which actress played Maud Grimes when she arrived in 1993?", "Elizabeth Bradley", ["Jill Summers", "Doris Speed", "Eileen Derbyshire"], "Hard", "1993", "Actors"],
    ["What was the outcome of John Hargreaves' dangerous-driving case following Lisa Duckworth's death in 1993?", "He was cleared", ["He was jailed", "He was fined", "He pleaded guilty"], "Medium", "1993", "Storylines"],
    ["Which McDonald brother tried to tackle the armed robbers at Bettabuy in April 1993?", "Andy McDonald", ["Steve McDonald", "Jim McDonald", "Kevin Webster"], "Medium", "1993", "Storylines"],
    ["What job was Jim McDonald doing when he attacked an intruder at a building site in April 1993?", "Nightwatchman", ["Foreman", "Electrician", "Security salesman"], "Medium", "1993", "Occupations"],
    ["Which Bettabuy shop assistant became Andy McDonald's girlfriend in 1993?", "Amy Nelson", ["Kimberley Taylor", "Fiona Middleton", "Shirley Armitage"], "Medium", "1993", "Relationships"],
    ["What was the first name of Amy Nelson's young son in 1993?", "Dominic", ["Daniel", "David", "Darren"], "Hard", "1993", "Families"],
    ["Which Caribbean country did Amy Nelson return to in October 1993?", "Trinidad", ["Jamaica", "Barbados", "Grenada"], "Medium", "1993", "Travel"],
    ["Which future Spice Girl made an uncredited appearance as Amy Nelson in October 1993?", "Melanie Brown", ["Emma Bunton", "Melanie Chisholm", "Geri Halliwell"], "Medium", "1993", "Actors"],
    ["What did Derek Wilton accidentally puncture while drilling through the Kabin ceiling in April 1993?", "Reg Holdsworth's waterbed", ["A water tank", "A gas pipe", "A television set"], "Medium", "1993", "Comedy"],
    ["Which woman turned down Percy Sugden's marriage proposal in May 1993?", "Olive Clarke", ["Phyllis Pearce", "Emily Bishop", "Maud Grimes"], "Medium", "1993", "Relationships"],
    ["Which former sweetheart of Reg Holdsworth became engaged to him again in May 1993?", "Maureen Naylor", ["Bet Gilroy", "Denise Osbourne", "Tanya Pooley"], "Medium", "1993", "Relationships"],
    ["How much did Reg Holdsworth offer Alf Roberts for the Corner Shop in May 1993?", "£68,000", ["£28,000", "£48,000", "£88,000"], "Hard", "1993", "Businesses"],
    ["Which pub offered Liz McDonald a landlady's job in May 1993?", "The Queens", ["The Flying Horse", "The Rovers Return", "The White Swan"], "Medium", "1993", "Occupations"],
    ["Which sharp-tongued barmaid first appeared at The Queens pub in 1993?", "Tanya Pooley", ["Raquel Wolstenhulme", "Gloria Todd", "Tina Fowler"], "Medium", "1993", "Arrivals"],
    ["Which actress played the barmaid Tanya Pooley from 1993?", "Eva Pope", ["Sarah Lancashire", "Sherrie Hewson", "Deborah McAndrew"], "Medium", "1993", "Actors"],
    ["Which businessman bought Alf Roberts' Corner Shop in July 1993, outbidding Reg Holdsworth?", "Brendan Scott", ["Maurice Jones", "Peter Ingram", "Mike Baldwin"], "Medium", "1993", "Businesses"],
    ["What name did Brendan Scott give the Corner Shop during his brief ownership in 1993?", "Scott's Provisions", ["Weatherfield Stores", "Bettabuy Express", "Scott's Bargain Mart"], "Hard", "1993", "Businesses"],
    ["Which shop assistant had to wear a frilly apron and mop cap when the Corner Shop changed hands in 1993?", "Deirdre Barlow", ["Vera Duckworth", "Mavis Wilton", "Ivy Brennan"], "Medium", "1993", "Businesses"],
    ["What was the first name of Des Barnes's brother, who arrived in 1993?", "Colin", ["Tony", "Graham", "Paul"], "Medium", "1993", "Families"],
    ["Which separated McDonald became romantically involved with Colin Barnes in 1993?", "Liz McDonald", ["Vera Duckworth", "Alma Baldwin", "Audrey Roberts"], "Medium", "1993", "Relationships"],
    ["Which seaside town did Alf and Audrey Roberts consider moving to in 1993?", "Lytham St Annes", ["Blackpool", "Southport", "Morecambe"], "Medium", "1993", "Homes"],
    ["Where did Brendan Scott collapse and die in August 1993?", "The Corner Shop", ["The Rovers Return", "Bettabuy", "The Kabin"], "Medium", "1993", "Storylines"],
    ["How did Alf Roberts regain ownership of the Corner Shop in September 1993?", "He bought it at auction", ["He inherited it", "Reg gave it to him", "He won it in a raffle"], "Medium", "1993", "Businesses"],
    ["What name did Raquel Wolstenhulme use when applying to a modelling academy in 1993?", "Nadia", ["Claudia", "Natasha", "Roxanne"], "Hard", "1993", "Characters"],
    ["What breed of dog did Jenny Bradley bring back to Weatherfield in September 1993?", "Japanese Akita", ["Alsatian", "Greyhound", "Border collie"], "Hard", "1993", "Animals"],
    ["How much money did Rita Sullivan give Jenny Bradley to leave Weatherfield in October 1993?", "£1,000", ["£100", "£500", "£5,000"], "Medium", "1993", "Money"],
    ["Which clergyman did Emily Bishop meet at Olive Clarke's wedding in September 1993?", "Reverend Bernard Morton", ["Reverend Lionel Grant", "Father James Byrne", "Reverend Eric Ashton"], "Hard", "1993", "Relationships"],
    ["Which supermarket manager's former girlfriend spent a drunken night with Curly Watts in September 1993?", "Maureen Naylor", ["Kimberley Taylor", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1993", "Relationships"],
    ["Which man was Sally Webster suspected of having an affair with in October 1993?", "Joe Broughton", ["Des Barnes", "Martin Platt", "Colin Barnes"], "Medium", "1993", "Relationships"],
    ["What did the Platt children burn on their bonfire in November 1993, to Percy's horror?", "An effigy of Percy Sugden", ["A model of the Rovers", "A stack of schoolbooks", "A neighbour's garden gnome"], "Medium", "1993", "Comedy"],
    ["Which elderly relative of Vera Duckworth died in November 1993?", "Joss Shackleton", ["Amy Burton", "Eunice Gee", "Fred Gee"], "Medium", "1993", "Families"],
    ["To whom did Terry Duckworth hand over his son Tommy in exchange for money at Christmas 1993?", "Jeff and Doreen Horton", ["Jack and Vera Duckworth", "Jim and Liz McDonald", "Kevin and Sally Webster"], "Medium", "1993", "Storylines"],
    ["Who disowned Terry Duckworth after discovering he had sold his son in December 1993?", "Jack Duckworth", ["Mike Baldwin", "Don Brennan", "Des Barnes"], "Easy", "1993", "Families"],
    ["Which taxi driver spent the night with Bet Gilroy in December 1993?", "Don Brennan", ["Des Barnes", "Jim McDonald", "Reg Holdsworth"], "Medium", "1993", "Relationships"],
    ["What was Charlie Whelan's occupation when he first arrived in December 1993?", "Lorry driver", ["Mechanic", "Police officer", "Factory manager"], "Medium", "1993", "Arrivals"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(701 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '1990s', year, topic],
        dailyEligible: true
    };
});

// =====================================================
// VALIDATION
// =====================================================

if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_0701' ||
    questions[99].id !== 'tv_0800' ||
    questions.filter(q => q.tags.includes('1992')).length !== 50 ||
    questions.filter(q => q.tags.includes('1993')).length !== 50
) {
    throw new Error('Pack 167: incorrect count, years or ID range');
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
        throw new Error('Pack 167: invalid question ' + q.id);
    }

    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
