// quiz_pack163.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - The Early 1980s (1980-1984)
// 100 questions: tv_0301 to tv_0400
// Keep quiz_bank.js unchanged until the end of this session.

// Each row: question, correct answer, three distractors, difficulty, year, topic.
const facts = [

    // 1980

    ["Which café was renamed Jim's Café in 1980?", "Dawson's Café", ["The Royle Café", "Rosamund Café", "The Corner Café"], "Medium", "1980", "Businesses"],
    ["Who bought the café and renamed it Jim's Café in 1980?", "Jim Sedgewick", ["Alf Roberts", "Mike Baldwin", "Len Fairclough"], "Medium", "1980", "Businesses"],
    ["Which lorry driver caused a falling-out between Elsie Tanner and Bet Lynch in 1980?", "Dan Johnson", ["Bill Gregory", "Alan Howard", "Harry Redman"], "Hard", "1980", "Relationships"],
    ["Where did Elsie Tanner and Bet Lynch have a public confrontation over Dan Johnson?", "The Rovers Return", ["The Kabin", "Jim's Café", "Baldwin's Casuals"], "Medium", "1980", "Storylines"],
    ["What accidentally started a fire in Elsie Tanner's home in 1980?", "A lit cigarette", ["An electric heater", "A chip pan", "A faulty television"], "Medium", "1980", "Storylines"],
    ["Who rescued Elsie Tanner from her burning home in 1980?", "Hilda Ogden", ["Bet Lynch", "Emily Bishop", "Annie Walker"], "Medium", "1980", "Storylines"],
    ["Which Coronation Street shopkeeper died following a car crash in 1980?", "Renee Roberts", ["Maggie Clegg", "Florrie Lindley", "Rita Fairclough"], "Medium", "1980", "Storylines"],
    ["What type of vehicle collided with the car in which Renee Roberts was fatally injured?", "A lorry", ["A motorcycle", "A bus", "A tram"], "Hard", "1980", "Storylines"],
    ["What was the name of Renee Roberts's mother, who blamed Alf after the crash?", "Daisy Hibbert", ["Blanche Hunt", "Eunice Nuttall", "Phyllis Pearce"], "Hard", "1980", "Families"],
    ["Who helped Alf Roberts run the Corner Shop after Renee's death?", "Deirdre Langton", ["Gail Tilsley", "Mavis Riley", "Ivy Tilsley"], "Medium", "1980", "Businesses"],
    ["Which man did Emily Bishop marry in 1980, before discovering he was already married?", "Arnold Swain", ["Ernest Bishop", "Fred Gee", "Bill Gregory"], "Medium", "1980", "Relationships"],
    ["What type of shop did Arnold Swain run when he met Emily Bishop in 1980?", "A pet shop", ["A flower shop", "A newsagent's", "A hardware shop"], "Medium", "1980", "Businesses"],
    ["Which Coronation Street mechanic was sacked in 1980 for taking a customer's car without permission?", "Brian Tilsley", ["Kevin Webster", "Terry Duckworth", "Bill Webster"], "Medium", "1980", "Occupations"],
    ["To which road did Brian and Gail Tilsley move in 1980, leaving Ivy's house?", "Buxton Close", ["Rosamund Street", "Hammond Road", "Omdurman Street"], "Medium", "1980", "Locations"],
    ["Which baby was born to Gail and Brian Tilsley on New Year's Eve 1980?", "Nick Tilsley", ["David Platt", "Sarah-Louise Tilsley", "Terry Duckworth"], "Easy", "1980", "Families"],
    ["Which grandson of Elsie Tanner briefly lived at Number 11 in 1980?", "Martin Cheveski", ["Nick Tilsley", "Craig Whitely", "Darren Barlow"], "Hard", "1980", "Families"],
    ["Which new assistant did Mavis Riley employ at The Kabin in March 1980?", "Louise Clayton", ["Suzie Birchall", "Sharon Gaskell", "Marion Willis"], "Hard", "1980", "Businesses"],

    // 1981

    ["In which year did Ken Barlow and Deirdre Langton marry?", "1981", ["1978", "1983", "1985"], "Easy", "1981", "Weddings"],
    ["During which month of 1981 did Ken Barlow marry Deirdre Langton?", "July", ["March", "September", "December"], "Medium", "1981", "Weddings"],
    ["At which Weatherfield church did Ken Barlow and Deirdre Langton marry?", "All Saints", ["St. Luke's", "St. Peter's", "St. Mary's"], "Hard", "1981", "Weddings"],
    ["Which Coronation Street resident was best man at Ken and Deirdre's 1981 wedding?", "Len Fairclough", ["Mike Baldwin", "Alf Roberts", "Fred Gee"], "Medium", "1981", "Weddings"],
    ["Where did Ken and Deirdre go on honeymoon after their 1981 wedding?", "Corfu", ["Majorca", "Malta", "Tenerife"], "Hard", "1981", "Weddings"],
    ["Who appeared as the bride's daughter at Ken and Deirdre's wedding in 1981?", "Tracy Langton", ["Susan Barlow", "Jenny Bradley", "Debbie Webster"], "Easy", "1981", "Families"],
    ["Which Coronation Street character threatened Emily with a murder-suicide pact in 1981?", "Arnold Swain", ["Joe Donelli", "George Wardle", "Terry Goodwin"], "Medium", "1981", "Storylines"],
    ["Which actor played the bigamist Arnold Swain?", "George Waring", ["Peter Adamson", "Stephen Hancock", "Fred Feast"], "Hard", "1981", "Actors"],
    ["Whom did Fred Gee marry in May 1981?", "Eunice Nuttall", ["Bet Lynch", "Betty Turpin", "Annie Walker"], "Medium", "1981", "Weddings"],
    ["Which actress played Eunice Nuttall, later Gee?", "Meg Johnson", ["Jill Summers", "Doris Speed", "Veronica Doran"], "Hard", "1981", "Actors"],
    ["Which community building did Fred and Eunice Gee briefly look after as caretakers?", "The Community Centre", ["The Kabin", "The Rovers Return", "The Mission of Glad Tidings"], "Medium", "1981", "Occupations"],
    ["Which teenager did Len and Rita Fairclough foster during 1981?", "John Spencer", ["Craig Whitely", "Terry Duckworth", "Martin Platt"], "Hard", "1981", "Families"],
    ["What house number did Len Fairclough plan to rebuild in Coronation Street during 1981?", "Number 7", ["Number 1", "Number 9", "Number 13"], "Medium", "1981", "Locations"],
    ["Which character, played by Amanda Barrie, appeared as Elsie Tanner's boss at Jim's Café in 1981?", "Alma Sedgewick", ["Renee Roberts", "Blanche Hunt", "Phyllis Pearce"], "Medium", "1981", "Characters"],
    ["Which Coronation Street actress marked the start of construction of the new outdoor set in November 1981?", "Doris Speed", ["Patricia Phoenix", "Julie Goodyear", "Violet Carson"], "Hard", "1981", "Production"],
    ["Which long-serving Coronation Street character was first paired romantically with Audrey Potter in 1981?", "Alf Roberts", ["Len Fairclough", "Mike Baldwin", "Fred Gee"], "Easy", "1981", "Relationships"],
    ["Who played the baby Nick Tilsley on Coronation Street in 1981?", "Warren Jackson", ["Christopher Quinten", "Mark Price", "Michael Le Vell"], "Hard", "1981", "Actors"],

    // 1982

    ["Which member of the Royal Family officially opened Coronation Street's new outdoor set in 1982?", "Queen Elizabeth II", ["Princess Margaret", "The Princess Royal", "Queen Elizabeth The Queen Mother"], "Medium", "1982", "Production"],
    ["What year did Coronation Street begin using its new brick-built outdoor set?", "1982", ["1979", "1985", "1988"], "Medium", "1982", "Production"],
    ["Which Coronation Street house was newly rebuilt as part of the set and storylines in 1982?", "Number 7", ["Number 3", "Number 11", "Number 15"], "Medium", "1982", "Locations"],
    ["Which couple moved into the rebuilt Number 7 Coronation Street in 1982?", "Len and Rita Fairclough", ["Ken and Deirdre Barlow", "Brian and Gail Tilsley", "Stan and Hilda Ogden"], "Medium", "1982", "Locations"],
    ["Which new resident took over Number 9 after Len and Rita moved next door?", "Chalkie Whitely", ["Fred Gee", "Bill Webster", "Curly Watts"], "Hard", "1982", "Locations"],
    ["What was the name of Chalkie Whitely's young grandson who lived with him?", "Craig", ["Nick", "Terry", "John"], "Hard", "1982", "Families"],
    ["Which actress portrayed the gravel-voiced Phyllis Pearce?", "Jill Summers", ["Meg Johnson", "Veronica Doran", "Thelma Barlow"], "Medium", "1982", "Actors"],
    ["In which year did Phyllis Pearce make her first Coronation Street appearance?", "1982", ["1976", "1985", "1988"], "Hard", "1982", "History"],
    ["Which teenage girl did Len and Rita Fairclough foster in 1982?", "Sharon Gaskell", ["Suzie Birchall", "Tricia Hopkins", "Jenny Bradley"], "Medium", "1982", "Families"],
    ["Who played teenage foster daughter Sharon Gaskell during the 1980s?", "Tracie Bennett", ["Sue Devaney", "Cheryl Murray", "Lynsay King"], "Hard", "1982", "Actors"],
    ["Which married man did foster daughter Sharon Gaskell flirt with in 1982?", "Brian Tilsley", ["Ken Barlow", "Mike Baldwin", "Fred Gee"], "Hard", "1982", "Relationships"],
    ["To which English city did Sharon Gaskell move in December 1982?", "Sheffield", ["Leeds", "Liverpool", "Birmingham"], "Hard", "1982", "Storylines"],
    ["Which woman became romantically involved with Eddie Yeats in 1982?", "Marion Willis", ["Eunice Nuttall", "Phyllis Pearce", "Maggie Dunlop"], "Medium", "1982", "Relationships"],
    ["Which actress played Eddie Yeats's girlfriend Marion Willis?", "Veronica Doran", ["Jill Summers", "Sue Nicholls", "Meg Johnson"], "Hard", "1982", "Actors"],
    ["What false impression did Eddie Yeats initially give Marion Willis about his career?", "That he was a successful businessman", ["That he was a doctor", "That he was a police officer", "That he was a teacher"], "Medium", "1982", "Storylines"],
    ["Which woman told Mike Baldwin in 1982 that she was pregnant with his baby?", "Maggie Dunlop", ["Deirdre Barlow", "Bet Lynch", "Elsie Tanner"], "Medium", "1982", "Storylines"],
    ["Whom did Maggie Dunlop marry late in 1982?", "Harry Redman", ["Mike Baldwin", "Brian Tilsley", "Len Fairclough"], "Hard", "1982", "Weddings"],
    ["What did Ken Barlow tell Deirdre in 1982 that upset her about their future?", "He did not want another child", ["He wanted to move abroad", "He planned to retire", "He was selling Number 1"], "Medium", "1982", "Relationships"],
    ["Which student joined Mavis Riley in entering a radio short-story competition in 1982?", "Victor Pendlebury", ["Derek Wilton", "Percy Sugden", "Curly Watts"], "Hard", "1982", "Storylines"],
    ["Which family employed Hilda Ogden to clean their home in late 1982?", "Doctor and Mrs Lowther", ["Ken and Deirdre Barlow", "Alf and Audrey Roberts", "Bill and Debbie Webster"], "Hard", "1982", "Occupations"],

    // 1983

    ["What type of bet made Chalkie Whitely a winner of more than £3,500 in 1983?", "A five-horse accumulator", ["Football pools", "The National Lottery", "A bingo jackpot"], "Hard", "1983", "Storylines"],
    ["Which businessman had an affair with Deirdre Barlow in 1983?", "Mike Baldwin", ["Alf Roberts", "Len Fairclough", "Fred Gee"], "Easy", "1983", "Relationships"],
    ["Whom did Deirdre choose to stay with when her affair with Mike Baldwin ended in 1983?", "Ken Barlow", ["Mike Baldwin", "Len Fairclough", "Alf Roberts"], "Easy", "1983", "Relationships"],
    ["Who first discovered that Deirdre and Mike had been seeing each other in January 1983?", "Emily Bishop", ["Bet Lynch", "Hilda Ogden", "Rita Fairclough"], "Hard", "1983", "Storylines"],
    ["Which resident became caretaker of the Community Centre in August 1983?", "Percy Sugden", ["Curly Watts", "Fred Gee", "Alf Roberts"], "Medium", "1983", "Occupations"],
    ["Which character returned to Coronation Street in January 1983 after leaving in 1979?", "Suzie Birchall", ["Lucille Hewitt", "Minnie Caldwell", "Linda Cheveski"], "Medium", "1983", "Characters"],
    ["Which former husband physically attacked Suzie Birchall in 1983?", "Terry Goodwin", ["Ray Langton", "Dan Johnson", "Alan Howard"], "Hard", "1983", "Storylines"],
    ["Whose car rolled into a lake during an outing with Bet Lynch and Betty Turpin in 1983?", "Fred Gee", ["Mike Baldwin", "Ken Barlow", "Alf Roberts"], "Medium", "1983", "Storylines"],
    ["Which fake name did Jack Duckworth use when secretly signing up to a video dating agency?", "Vince St. Clair", ["Ronnie Barker", "Steve Tanner", "Tony Parsons"], "Medium", "1983", "Storylines"],
    ["What was the name of the video dating agency Jack Duckworth secretly joined?", "Bill & Coo", ["Matchmaker International", "Date-A-Mate", "Cupid's Corner"], "Hard", "1983", "Storylines"],
    ["Who turned up as Jack Duckworth's unsuspected date after his video dating scheme?", "Vera Duckworth", ["Bet Lynch", "Rita Fairclough", "Elsie Tanner"], "Medium", "1983", "Storylines"],
    ["Which well-known Coronation Street character made his debut as a young binman in 1983?", "Curly Watts", ["Martin Platt", "Reg Holdsworth", "Percy Sugden"], "Medium", "1983", "Characters"],
    ["Which actor played Curly Watts?", "Kevin Kennedy", ["Michael Le Vell", "Sean Wilson", "Mark Eden"], "Easy", "1983", "Actors"],
    ["Which Coronation Street couple married on 31 October 1983?", "Eddie Yeats and Marion Willis", ["Ken and Deirdre Barlow", "Fred and Eunice Gee", "Alf and Audrey Roberts"], "Medium", "1983", "Weddings"],
    ["Which town did Eddie and Marion Yeats move to after their 1983 wedding?", "Bury", ["Bolton", "Blackpool", "Rochdale"], "Medium", "1983", "Storylines"],
    ["Who acted as a mother figure to Eddie Yeats at his wedding to Marion?", "Hilda Ogden", ["Annie Walker", "Mavis Riley", "Emily Bishop"], "Hard", "1983", "Relationships"],
    ["Whose window-cleaning round did Eddie Yeats take over in 1983?", "Stan Ogden", ["Jack Duckworth", "Alf Roberts", "Fred Gee"], "Hard", "1983", "Businesses"],
    ["Which Coronation Street resident sold Number 1 to Ken Barlow in 1983?", "Albert Tatlock", ["Mike Baldwin", "Rita Fairclough", "Bill Webster"], "Medium", "1983", "Locations"],
    ["Which daughter of Albert Tatlock objected when she heard he had sold Number 1?", "Beattie Pearson", ["Linda Cheveski", "Susan Barlow", "Tricia Hopkins"], "Hard", "1983", "Families"],
    ["Which couple celebrated their ruby wedding anniversary on the night Len Fairclough died?", "Stan and Hilda Ogden", ["Ken and Deirdre Barlow", "Jack and Vera Duckworth", "Alf and Renee Roberts"], "Medium", "1983", "Storylines"],
    ["What caused Len Fairclough's death in December 1983?", "A road accident", ["A heart attack", "A fall from a ladder", "A factory fire"], "Easy", "1983", "Storylines"],
    ["Whose affair with Len Fairclough was uncovered after his death?", "Marjorie Proctor", ["Bet Lynch", "Mavis Riley", "Phyllis Pearce"], "Hard", "1983", "Relationships"],
    ["Which long-standing Coronation Street landlady made her final screen appearance in October 1983?", "Annie Walker", ["Bet Lynch", "Rita Fairclough", "Betty Turpin"], "Medium", "1983", "History"],
    ["Which family moved into Number 9 Coronation Street in 1983?", "The Duckworths", ["The Websters", "The Barlows", "The Tilsleys"], "Easy", "1983", "Locations"],
    ["Which character discovered he was three years older than he had thought in 1983?", "Stan Ogden", ["Albert Tatlock", "Fred Gee", "Len Fairclough"], "Hard", "1983", "Storylines"],
    ["Who first appeared in Coronation Street as a young mechanic in October 1983?", "Kevin Webster", ["Martin Platt", "Curly Watts", "Terry Duckworth"], "Easy", "1983", "Characters"],

    // 1984

    ["Which Coronation Street icon left Weatherfield for Portugal with Bill Gregory in January 1984?", "Elsie Tanner", ["Annie Walker", "Rita Fairclough", "Emily Bishop"], "Easy", "1984", "Departures"],
    ["What type of business was Elsie Tanner planning to run in Portugal with Bill Gregory?", "A wine bar", ["A hotel", "A newsagent's", "A clothing factory"], "Medium", "1984", "Businesses"],
    ["At which bar did Elsie Tanner work shortly before her final departure in 1984?", "The Tropicana", ["The Flying Horse", "The Queen Victoria", "The Woolpack"], "Hard", "1984", "Occupations"],
    ["Which member of the Tilsley family died in January 1984?", "Bert Tilsley", ["Brian Tilsley", "Ivy Tilsley", "Nick Tilsley"], "Medium", "1984", "Storylines"],
    ["Which original Coronation Street character died while staying with daughter Beattie Pearson in 1984?", "Albert Tatlock", ["Stan Ogden", "Frank Barlow", "Jack Walker"], "Medium", "1984", "Storylines"],
    ["Which resident bought Number 11 from Elsie Tanner's family in 1984?", "Bill Webster", ["Kevin Webster", "Mike Baldwin", "Percy Sugden"], "Medium", "1984", "Locations"],
    ["Which actor played builder Bill Webster when he arrived in 1984?", "Peter Armitage", ["Michael Le Vell", "Bryan Mosley", "Peter Adamson"], "Medium", "1984", "Actors"],
    ["Which actress played Bill Webster's daughter Debbie on her 1984 arrival?", "Sue Devaney", ["Sally Whittaker", "Tracie Bennett", "Jill Summers"], "Medium", "1984", "Actors"],
    ["Who was Debbie Webster's older brother when the Websters arrived?", "Kevin Webster", ["Terry Duckworth", "Nick Tilsley", "Curly Watts"], "Easy", "1984", "Families"],
    ["What unusual event took place on Mavis Riley and Derek Wilton's planned wedding day in 1984?", "They both failed to turn up", ["The church flooded", "Derek married someone else", "The registrar went missing"], "Medium", "1984", "Weddings"],
    ["Which man was Mavis Riley due to marry in September 1984?", "Derek Wilton", ["Victor Pendlebury", "Percy Sugden", "Alf Roberts"], "Easy", "1984", "Relationships"],
    ["Which actor played the former soldier Percy Sugden?", "Bill Waddington", ["Peter Armitage", "Fred Feast", "Geoffrey Hughes"], "Medium", "1984", "Actors"],
    ["Which two rival pubs competed in the Street's Pub Olympics in 1984?", "The Rovers Return and the Flying Horse", ["The Rovers Return and the Woolpack", "The Flying Horse and the Queen Victoria", "The Woolpack and the Queen Victoria"], "Medium", "1984", "Storylines"],
    ["Which character began an affair with Sally Waterman in October 1984?", "Ken Barlow", ["Mike Baldwin", "Alf Roberts", "Bill Webster"], "Hard", "1984", "Relationships"],
    ["Which Coronation Street resident died in hospital in November 1984, leaving Hilda widowed?", "Stan Ogden", ["Eddie Yeats", "Fred Gee", "Percy Sugden"], "Easy", "1984", "Storylines"],
    ["Which personal possession made Hilda Ogden break down after Stan's funeral?", "His spectacles", ["His cap", "His wedding ring", "His watch"], "Easy", "1984", "Storylines"],
    ["Which man returned to run the Rovers after Annie Walker's departure in 1984?", "Billy Walker", ["Alec Gilroy", "Fred Gee", "Jack Duckworth"], "Medium", "1984", "Rovers Return"],
    ["Which brewery bought back the Rovers licence from Billy Walker in December 1984?", "Newton & Ridley", ["Baldwin's Casuals", "Boddingtons", "Hydes"], "Medium", "1984", "Rovers Return"],
    ["Which Rovers barmaid applied to become pub manager at the end of 1984?", "Bet Lynch", ["Betty Turpin", "Gloria Todd", "Suzie Birchall"], "Easy", "1984", "Rovers Return"],
    ["Who was the temporary manager of the Rovers when its leadership was in turmoil during 1984?", "Fred Gee", ["Martin Platt", "Terry Duckworth", "Ken Barlow"], "Medium", "1984", "Rovers Return"],
];

// Build the normal quiz-bank format, rotating the answer position.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(301 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Coronation Street', '1980s', year, topic],
        dailyEligible: true
    };
});

// Validate every entry at load time.
if (
    questions.length !== 100 ||
    questions[0].id !== 'tv_0301' ||
    questions[99].id !== 'tv_0400'
) {
    throw new Error('Pack 163: unexpected count or ID range');
}

const seen = new Set();

for (const q of questions) {
    const key = q.question
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    if (
        seen.has(key) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty)
    ) {
        throw new Error('Pack 163: invalid entry ' + q.id);
    }

    seen.add(key);
}

module.exports = questions;
