// quiz_pack168.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1994 and 1995
// 100 questions: tv_0801 to tv_0900
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [

    // =====================================================
    // 1994 - NEW ARRIVALS, OLD RIVALS AND CHANGING LIVES
    // =====================================================

    ["Who bought the Corner Shop from Alf Roberts in January 1994?", "Reg Holdsworth", ["Mike Baldwin", "Fred Elliott", "Maurice Jones"], "Easy", "1994", "Businesses"],
    ["Which woman married Reg Holdsworth in January 1994?", "Maureen Naylor", ["Raquel Wolstenhulme", "Denise Osbourne", "Angie Freeman"], "Easy", "1994", "Weddings"],
    ["Which city had Reg and Maureen Holdsworth planned to visit on their 1994 honeymoon?", "Paris", ["Rome", "Madrid", "Amsterdam"], "Medium", "1994", "Travel"],
    ["Whose disappearance made Reg and Maureen miss their honeymoon flight in 1994?", "Maud Grimes", ["Phyllis Pearce", "Mavis Wilton", "Emily Bishop"], "Medium", "1994", "Weddings"],
    ["Which hotel did Maud Grimes leave after overhearing Reg criticise her in January 1994?", "The Belstaff Hotel", ["The Midland Hotel", "The Queens Hotel", "The Grosvenor Hotel"], "Hard", "1994", "Locations"],
    ["Which barmaid was thrown out by her father and moved into the café flat in February 1994?", "Tanya Pooley", ["Liz McDonald", "Betty Turpin", "Raquel Wolstenhulme"], "Medium", "1994", "Homes"],
    ["Which boy was caught shoplifting at Bettabuy when he made his first appearance in March 1994?", "Jamie Armstrong", ["Nicky Platt", "Andy McDonald", "Craig Whitely"], "Medium", "1994", "Arrivals"],
    ["Who was Jamie Armstrong's mother when the family appeared in 1994?", "Tricia Armstrong", ["Liz McDonald", "Gail Platt", "Sally Webster"], "Medium", "1994", "Families"],
    ["Which actress began playing Tricia Armstrong in 1994?", "Tracy Brabin", ["Tracy Shaw", "Denise Black", "Sherrie Hewson"], "Medium", "1994", "Actors"],
    ["Which Bettabuy employee dealt with Jamie Armstrong's shoplifting in 1994?", "Curly Watts", ["Reg Holdsworth", "Vera Duckworth", "Des Barnes"], "Medium", "1994", "Businesses"],
    ["Which future Kabin assistant first appeared at Derek and Mavis Wilton's home in March 1994?", "Norris Cole", ["Fred Elliott", "Roy Cropper", "Les Battersby"], "Easy", "1994", "Arrivals"],
    ["Which resident was an old acquaintance of newcomer Norris Cole in 1994?", "Derek Wilton", ["Jack Duckworth", "Ken Barlow", "Martin Platt"], "Medium", "1994", "Characters"],
    ["Which Platt child needed an emergency operation for a ruptured appendix in March 1994?", "Sarah-Louise Platt", ["David Platt", "Nicky Platt", "Rosie Webster"], "Medium", "1994", "Families"],
    ["Which resident briefly became engaged to Maud Grimes in April 1994?", "Percy Sugden", ["Reg Holdsworth", "Jack Duckworth", "Alf Roberts"], "Medium", "1994", "Relationships"],
    ["Which clergyman broke off plans to marry Emily Bishop in April 1994?", "Bernard Morton", ["Leonard Swindley", "Harold Glanville", "Fred Gee"], "Medium", "1994", "Relationships"],
    ["Which shopkeeper became Mayor of Weatherfield for a second time in May 1994?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1994", "Politics"],
    ["Which woman enjoyed the duties of Mayoress of Weatherfield in 1994?", "Audrey Roberts", ["Deirdre Barlow", "Bet Gilroy", "Rita Sullivan"], "Easy", "1994", "Politics"],
    ["Which Duckworth spent a night trapped on a rooftop while chasing a pigeon in May 1994?", "Jack Duckworth", ["Terry Duckworth", "Vera Duckworth", "Cliff Duckworth"], "Easy", "1994", "Comedy"],
    ["What was the name of the pigeon Jack Duckworth was pursuing in the 1994 rooftop incident?", "Fergie", ["Rover", "Lucky", "Boomer"], "Medium", "1994", "Animals"],
    ["Whose observatory roof accidentally left Jack Duckworth stranded in 1994?", "Curly Watts's", ["Derek Wilton's", "Ken Barlow's", "Reg Holdsworth's"], "Medium", "1994", "Comedy"],
    ["Which woman returned in May 1994 after spending time caring for Blanche Hunt?", "Deirdre Barlow", ["Alma Baldwin", "Gail Platt", "Liz McDonald"], "Medium", "1994", "Families"],
    ["Which salon owner told Ken Barlow she was pregnant in May 1994?", "Denise Osbourne", ["Fiona Middleton", "Alma Baldwin", "Tanya Pooley"], "Easy", "1994", "Relationships"],
    ["Who was the father of Denise Osbourne's unborn baby in 1994?", "Ken Barlow", ["Mike Baldwin", "Des Barnes", "Martin Platt"], "Easy", "1994", "Families"],
    ["Where did Deirdre Barlow publicly announce Denise Osbourne's pregnancy in June 1994?", "The Rovers Return", ["The Kabin", "Bettabuy", "The Corner Shop"], "Medium", "1994", "Storylines"],
    ["Which woman had an affair with Des Barnes while he was dating Raquel in 1994?", "Tanya Pooley", ["Denise Osbourne", "Maureen Holdsworth", "Tricia Armstrong"], "Medium", "1994", "Relationships"],
    ["Which woman discovered that Des Barnes had been unfaithful in June 1994?", "Raquel Wolstenhulme", ["Liz McDonald", "Bet Gilroy", "Gail Platt"], "Medium", "1994", "Relationships"],
    ["In which country did Deirdre Barlow meet Samir Rachid while on holiday in 1994?", "Morocco", ["Spain", "Tunisia", "Turkey"], "Easy", "1994", "Travel"],
    ["What did a scan reveal after Denise Osbourne suffered a miscarriage in July 1994?", "She was still carrying a surviving twin", ["She was carrying triplets", "She had never been pregnant", "She needed an emergency transplant"], "Medium", "1994", "Families"],
    ["Which supermarket chain did Reg Holdsworth join in July 1994?", "Firman's Freezers", ["Bettabuy", "Freshco", "Costcutter"], "Medium", "1994", "Businesses"],
    ["Who opened a betting shop in Weatherfield in August 1994?", "Sean Skinner", ["Alf Roberts", "Curly Watts", "Maurice Jones"], "Medium", "1994", "Businesses"],
    ["Which resident visited Ivy Brennan at a religious retreat in August 1994?", "Gail Platt", ["Vera Duckworth", "Betty Turpin", "Emily Bishop"], "Medium", "1994", "Storylines"],
    ["Which Moroccan man arrived in Weatherfield in August 1994?", "Samir Rachid", ["Alex Christie", "Norris Cole", "Brendan Scott"], "Easy", "1994", "Arrivals"],
    ["Which actor played Samir Rachid in Coronation Street?", "Al Nedjari", ["John Savident", "Ken Morley", "Philip Middlemiss"], "Medium", "1994", "Actors"],
    ["Which future butcher first appeared at a black pudding event in August 1994?", "Fred Elliott", ["Ashley Peacock", "Reg Holdsworth", "Roy Cropper"], "Easy", "1994", "Arrivals"],
    ["Which actor began playing Fred Elliott in August 1994?", "John Savident", ["Bryan Mosley", "Roy Barraclough", "Peter Baldwin"], "Medium", "1994", "Actors"],
    ["What food was Fred Elliott promoting when he first appeared in 1994?", "Black pudding", ["Pork pies", "Bury sausages", "Steak pies"], "Medium", "1994", "Businesses"],
    ["Which character returned in September 1994 after being thrown off a modelling course in Croydon?", "Raquel Wolstenhulme", ["Fiona Middleton", "Tanya Pooley", "Denise Osbourne"], "Medium", "1994", "Storylines"],
    ["Which lorry driver was Bet Gilroy romantically involved with in 1994?", "Charlie Whelan", ["Des Barnes", "Jim McDonald", "Don Brennan"], "Medium", "1994", "Relationships"],
    ["Which former Rovers barmaid ran away with Charlie Whelan in September 1994?", "Tanya Pooley", ["Raquel Wolstenhulme", "Liz McDonald", "Betty Turpin"], "Medium", "1994", "Departures"],
    ["To which German city did Tanya Pooley and Charlie Whelan leave in 1994?", "Hamburg", ["Berlin", "Cologne", "Munich"], "Hard", "1994", "Travel"],
    ["Which Bettabuy employee was dismissed following harassment complaints in October 1994?", "Curly Watts", ["Vera Duckworth", "Reg Holdsworth", "Maureen Holdsworth"], "Medium", "1994", "Storylines"],
    ["Which of Derek Wilton's former wives visited Mavis at The Kabin in October 1994?", "Angela Hawthorne", ["Shirley Armitage", "Jackie Ingram", "Wendy Crozier"], "Medium", "1994", "Families"],
    ["What was the first name of Kevin and Sally Webster's second daughter, born in November 1994?", "Sophie", ["Rosie", "Sarah", "Amy"], "Easy", "1994", "Families"],
    ["Who proposed marriage to Samir Rachid in November 1994?", "Deirdre Barlow", ["Denise Osbourne", "Alma Baldwin", "Liz McDonald"], "Medium", "1994", "Weddings"],
    ["Which daughter objected to Deirdre's relationship with Samir in 1994?", "Tracy Barlow", ["Susan Barlow", "Rosie Webster", "Jenny Bradley"], "Easy", "1994", "Families"],
    ["In which month of 1994 did Deirdre Barlow marry Samir Rachid?", "November", ["May", "August", "December"], "Medium", "1994", "Weddings"],
    ["Which supermarket worker gave Raquel a star named Mrs Raquel Watts for Christmas 1994?", "Curly Watts", ["Reg Holdsworth", "Des Barnes", "Steve McDonald"], "Medium", "1994", "Relationships"],
    ["Which student nurse did Martin Platt kiss on Christmas Day 1994?", "Cathy Power", ["Fiona Middleton", "Maxine Heavey", "Amy Nelson"], "Hard", "1994", "Relationships"],
    ["Which Coronation Street house did Mike Baldwin buy from Deirdre Rachid in December 1994?", "Number 1", ["Number 3", "Number 7", "Number 11"], "Medium", "1994", "Homes"],
    ["Which former wife of Derek Wilton was introduced to Norris Cole at a dinner party in November 1994?", "Angela Hawthorne", ["Maureen Holdsworth", "Rita Sullivan", "Emily Bishop"], "Medium", "1994", "Relationships"],

    // =====================================================
    // 1995 - MAJOR CHANGES AT THE ROVERS AND BEYOND
    // =====================================================

    ["Which baby did Denise Osbourne give birth to in January 1995?", "Daniel", ["David", "Simon", "Peter"], "Easy", "1995", "Families"],
    ["Which two men fought over Raquel Wolstenhulme in January 1995?", "Curly Watts and Des Barnes", ["Ken Barlow and Mike Baldwin", "Steve McDonald and Andy McDonald", "Jack Duckworth and Reg Holdsworth"], "Medium", "1995", "Relationships"],
    ["Which woman rented Number 1 from Mike Baldwin in January 1995?", "Tricia Armstrong", ["Rita Sullivan", "Bet Gilroy", "Maureen Holdsworth"], "Medium", "1995", "Homes"],
    ["Which child moved into Number 1 with Tricia Armstrong in January 1995?", "Jamie Armstrong", ["Nick Platt", "Tommy Duckworth", "David Platt"], "Medium", "1995", "Families"],
    ["Which hairdresser did Steve McDonald propose to in February 1995?", "Fiona Middleton", ["Maxine Heavey", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1995", "Relationships"],
    ["Which relief manager arrived at the Rovers in February 1995?", "Rodney Bostock", ["Alec Gilroy", "Billy Walker", "Reg Holdsworth"], "Hard", "1995", "Rovers Return"],
    ["Which musical instrument did Rodney Bostock play to Jack Duckworth at the Rovers in 1995?", "Trombone", ["Trumpet", "Saxophone", "Clarinet"], "Hard", "1995", "Comedy"],
    ["What did Reg Holdsworth spend £300 on in March 1995?", "A hairpiece", ["A new suit", "A briefcase", "A watch"], "Medium", "1995", "Comedy"],
    ["Who inherited £2,000 from the late Jim Sedgewick in March 1995?", "Alma Baldwin", ["Gail Platt", "Bet Gilroy", "Deirdre Rachid"], "Medium", "1995", "Money"],
    ["Which Barlow teenager was hospitalised after taking an Ecstasy pill in March 1995?", "Tracy Barlow", ["Susan Barlow", "Rosie Webster", "Jenny Bradley"], "Easy", "1995", "Storylines"],
    ["What serious medical support did Tracy Barlow require after taking Ecstasy in 1995?", "Life support", ["A wheelchair", "Dialysis at home", "A ventilator for asthma"], "Medium", "1995", "Storylines"],
    ["Which future Coronation Street character joined Denise Osbourne's hair salon in May 1995?", "Maxine Heavey", ["Fiona Middleton", "Tanya Pooley", "Gina Seddon"], "Easy", "1995", "Arrivals"],
    ["Which actress played Maxine Heavey when she arrived in 1995?", "Tracy Shaw", ["Tracy Brabin", "Sarah Lancashire", "Denise Black"], "Medium", "1995", "Actors"],
    ["What anniversary did the Rovers mark with a party in May 1995?", "Fifty years since VE-Day", ["The pub's centenary", "Thirty-five years of Coronation Street", "Twenty-five years of decimalisation"], "Medium", "1995", "History"],
    ["Which old flame of Betty Turpin returned to Weatherfield during the VE-Day celebrations?", "Billy Williams", ["Jack Walker", "Alec Gilroy", "Fred Gee"], "Medium", "1995", "Relationships"],
    ["Which Weatherfield resident was offered an OBE in May 1995?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1995", "Honours"],
    ["Who was attacked on his way to hospital to donate a kidney to Tracy Barlow in May 1995?", "Samir Rachid", ["Ken Barlow", "Martin Platt", "Steve McDonald"], "Easy", "1995", "Storylines"],
    ["In which month of 1995 did Samir Rachid die following a violent attack?", "June", ["March", "August", "October"], "Medium", "1995", "Storylines"],
    ["Which organ from Samir Rachid was donated to Tracy Barlow after his death in 1995?", "A kidney", ["A liver", "A heart", "A lung"], "Easy", "1995", "Families"],
    ["Who gave consent for Samir Rachid's organ donation in 1995?", "Deirdre Rachid", ["Ken Barlow", "Gail Platt", "Audrey Roberts"], "Medium", "1995", "Storylines"],
    ["Which relative of Jack Duckworth died in a car crash in Malaga in June 1995?", "His brother Cliff", ["His son Terry", "His father", "His cousin Percy"], "Medium", "1995", "Families"],
    ["How much did Jack and Vera Duckworth inherit from Cliff's estate in 1995?", "£30,000", ["£3,000", "£10,000", "£100,000"], "Medium", "1995", "Money"],
    ["Which granddaughter of Alec Gilroy became engaged to Steve McDonald in 1995?", "Vicky Arden", ["Tracy Barlow", "Jenny Bradley", "Raquel Wolstenhulme"], "Medium", "1995", "Relationships"],
    ["Who returned to Weatherfield in July 1995 to oppose Vicky Arden's marriage plans?", "Alec Gilroy", ["Terry Duckworth", "Mike Baldwin", "Reg Holdsworth"], "Medium", "1995", "Arrivals"],
    ["Which future café owner made his first appearance in July 1995?", "Roy Cropper", ["Fred Elliott", "Norris Cole", "Des Barnes"], "Easy", "1995", "Arrivals"],
    ["Which street was Roy Cropper living on when Deirdre met him in 1995?", "Crimea Street", ["Rosamund Street", "Victoria Street", "Coronation Street"], "Medium", "1995", "Homes"],
    ["Which older member of the Webster family returned to Weatherfield in July 1995?", "Bill Webster", ["Debbie Webster", "Harry Clayton", "Eddie Seddon"], "Medium", "1995", "Families"],
    ["What mishap did Bill Webster cause while cooking at Number 13 in August 1995?", "A kitchen fire", ["A burst pipe", "A power cut", "A broken window"], "Medium", "1995", "Comedy"],
    ["On which Caribbean island did Steve McDonald and Vicky Arden marry in August 1995?", "St Lucia", ["Barbados", "Jamaica", "Antigua"], "Medium", "1995", "Weddings"],
    ["Which long-serving Coronation Street character died off-screen in August 1995?", "Ivy Brennan", ["Betty Turpin", "Emily Bishop", "Rita Sullivan"], "Easy", "1995", "Storylines"],
    ["Which house did Ivy Brennan leave to her grandson Nick in her 1995 will?", "Number 5", ["Number 1", "Number 7", "Number 13"], "Medium", "1995", "Homes"],
    ["What condition did Ivy Brennan put on Nick Platt's inheritance in 1995?", "He must use the surname Tilsley", ["He must leave Weatherfield", "He must marry before twenty-one", "He must sell the house"], "Medium", "1995", "Families"],
    ["Which husband of Ivy Brennan was left nothing in her 1995 will?", "Don Brennan", ["Brian Tilsley", "Bert Tilsley", "George Wardle"], "Medium", "1995", "Families"],
    ["Which Firman's Freezers employee began dating Curly Watts in September 1995?", "Anne Malone", ["Maureen Holdsworth", "Tanya Pooley", "Tricia Armstrong"], "Medium", "1995", "Relationships"],
    ["Which woman agreed to marry her old flame Billy Williams in September 1995?", "Betty Turpin", ["Bet Gilroy", "Rita Sullivan", "Emily Bishop"], "Easy", "1995", "Weddings"],
    ["Which son gave Betty Turpin away at her wedding to Billy Williams in October 1995?", "Gordon Clegg", ["Ken Barlow", "Jack Duckworth", "Alf Roberts"], "Medium", "1995", "Weddings"],
    ["Which couple first appeared while looking at Number 9 Coronation Street in October 1995?", "Gary and Judy Mallett", ["Les and Janice Battersby", "Jim and Liz McDonald", "Kevin and Sally Webster"], "Medium", "1995", "Arrivals"],
    ["Which brewery decided to sell the Rovers Return in 1995?", "Newton & Ridley", ["Boddingtons", "Hydes", "Robinsons"], "Medium", "1995", "Rovers Return"],
    ["Which newsagent withdrew her offer of a loan to Bet Gilroy to buy the Rovers in 1995?", "Rita Sullivan", ["Mavis Wilton", "Alma Baldwin", "Emily Bishop"], "Medium", "1995", "Rovers Return"],
    ["Which wealthy young woman also refused to lend Bet Gilroy money for the Rovers in 1995?", "Vicky McDonald", ["Tracy Barlow", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1995", "Rovers Return"],
    ["In which month of 1995 did Bet Gilroy leave Weatherfield after losing the Rovers?", "October", ["January", "June", "December"], "Easy", "1995", "Departures"],
    ["Which couple won the bid to take over the Rovers Return in October 1995?", "Jack and Vera Duckworth", ["Jim and Liz McDonald", "Curly Watts and Raquel Wolstenhulme", "Alf and Audrey Roberts"], "Easy", "1995", "Rovers Return"],
    ["Which longtime Rovers employee resigned after Vera Duckworth asked her to clean as well as cook?", "Betty Williams", ["Liz McDonald", "Raquel Wolstenhulme", "Tricia Armstrong"], "Medium", "1995", "Rovers Return"],
    ["To which Suffolk town did Reg Holdsworth move for a new job in November 1995?", "Lowestoft", ["Ipswich", "Bury St Edmunds", "Felixstowe"], "Medium", "1995", "Departures"],
    ["Which woman accompanied Alf Roberts to Buckingham Palace for his OBE ceremony in December 1995?", "Betty Williams", ["Audrey Roberts", "Deirdre Rachid", "Rita Sullivan"], "Medium", "1995", "Honours"],
    ["Which couple married during Coronation Street's special hour-long episode in December 1995?", "Curly Watts and Raquel Wolstenhulme", ["Steve McDonald and Vicky Arden", "Reg Holdsworth and Maureen Naylor", "Ken Barlow and Deirdre Rachid"], "Easy", "1995", "Weddings"],
    ["Which woman was attacked by Leo Firman in September 1995 but managed to escape?", "Raquel Wolstenhulme", ["Fiona Middleton", "Liz McDonald", "Maxine Heavey"], "Medium", "1995", "Storylines"],
    ["Which character married Derek Wilton's ex-wife Angela Hawthorne in December 1995?", "Norris Cole", ["Percy Sugden", "Reg Holdsworth", "Des Barnes"], "Medium", "1995", "Weddings"],
    ["What did Derek Wilton deliberately do to Norris Cole on the way to his December 1995 wedding?", "Drive him to the wrong church", ["Hide the wedding rings", "Cancel the reception", "Lock him in a garage"], "Medium", "1995", "Comedy"],
    ["Which McDonald twin was arrested with stolen whisky in December 1995?", "Steve McDonald", ["Andy McDonald", "Peter Barlow", "Nick Tilsley"], "Medium", "1995", "Storylines"]

];

// =====================================================
// BUILD QUESTIONS
// =====================================================

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(801 + index).padStart(4, '0'),
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
    questions[0].id !== 'tv_0801' ||
    questions[99].id !== 'tv_0900' ||
    questions.filter(q => q.tags.includes('1994')).length !== 50 ||
    questions.filter(q => q.tags.includes('1995')).length !== 50
) {
    throw new Error('Pack 168: incorrect count, years or ID range');
}

const seenIds = new Set();
const seenQuestions = new Set();

for (const q of questions) {
    const key = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
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
        throw new Error('Pack 168: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenQuestions.add(key);
}

module.exports = questions;
