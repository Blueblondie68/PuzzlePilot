// quiz_pack206.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Crossroads - memorable characters and stories
// 68 questions: tv_4501 to tv_4568
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The motel and the people viewers remember
    ["What was the name of the motel at the centre of Crossroads?", "Crossroads Motel", ["The Woolpack Motel", "The King's Arms Hotel", "Weatherfield Lodge"], "Easy", "Setting"],
    ["In which fictional village was Crossroads Motel situated?", "Kings Oak", ["Emmerdale", "Beckindale", "Hollyoaks"], "Easy", "Setting"],
    ["Which part of England was Crossroads mainly set in?", "The Midlands", ["Cornwall", "Yorkshire", "East Anglia"], "Easy", "Setting"],
    ["Who was the original matriarch and owner of Crossroads Motel?", "Meg Richardson", ["Jill Chance", "Amy Turtle", "Diane Parker"], "Easy", "Characters"],
    ["Which actress played Meg Richardson, later Meg Mortimer?", "Noele Gordon", ["Pat Phoenix", "Doris Speed", "Jean Alexander"], "Easy", "Actors"],
    ["What was the surname Meg used after marrying Hugh?", "Mortimer", ["Hunter", "Chance", "Harvey"], "Easy", "Characters"],
    ["Who played Meg's daughter Jill in Crossroads?", "Jane Rossington", ["Susan Hanson", "Sue Lloyd", "Ann George"], "Easy", "Actors"],
    ["Which character was Meg Richardson's son?", "Sandy Richardson", ["Adam Chance", "Benny Hawkins", "David Hunter"], "Easy", "Families"],
    ["Which actor played Sandy Richardson?", "Roger Tonge", ["Tony Adams", "John Bentley", "Paul Henry"], "Medium", "Actors"],
    ["Which disability did Sandy Richardson live with after a car accident?", "Paralysis requiring a wheelchair", ["Blindness", "Loss of hearing", "Loss of an arm"], "Medium", "Storylines"],
    ["Which handyman in Crossroads was famous for wearing a woolly hat?", "Benny Hawkins", ["Adam Chance", "Hugh Mortimer", "David Hunter"], "Easy", "Characters"],
    ["Which actor played the much-loved Benny Hawkins?", "Paul Henry", ["Tony Adams", "Ronald Allen", "Angus Lennie"], "Easy", "Actors"],
    ["What was Benny Hawkins' usual job at the motel?", "Handyman", ["Manager", "Head chef", "Receptionist"], "Easy", "Characters"],
    ["What did Benny Hawkins affectionately call Diane Lawton?", "Miss Diane", ["Mrs Hunter", "Auntie Meg", "Miss Jill"], "Easy", "Characters"],
    ["Which actress played Diane Lawton, later Diane Parker and Hunter?", "Susan Hanson", ["Sue Nicholls", "Jane Rossington", "Kathy Staff"], "Easy", "Actors"],
    ["What job did Diane Lawton do at Crossroads Motel?", "Waitress", ["Vet", "Police officer", "Solicitor"], "Easy", "Characters"],
    ["Which actress played the gossiping Amy Turtle?", "Ann George", ["Kathy Staff", "Noele Gordon", "Sue Lloyd"], "Easy", "Actors"],
    ["Which Crossroads character was a talkative motel cleaner and kitchen helper?", "Amy Turtle", ["Barbara Hunter", "Jill Chance", "Meg Mortimer"], "Easy", "Characters"],
    ["Which actress played Doris Luke, the motel cleaner?", "Kathy Staff", ["Ann George", "Jane Rossington", "Susan Hanson"], "Easy", "Actors"],
    ["What was the name of the Scottish chef at Crossroads?", "Shughie McFee", ["Fred Gee", "Percy Sugden", "Stan Ogden"], "Easy", "Characters"],
    ["Which actor played chef Shughie McFee?", "Angus Lennie", ["John Forgeham", "Tony Adams", "Ronald Allen"], "Medium", "Actors"],
    ["Which Crossroads character was a suave motel manager and director?", "David Hunter", ["Benny Hawkins", "Sandy Richardson", "Hugh Mortimer"], "Easy", "Characters"],
    ["Which actor played David Hunter?", "Ronald Allen", ["John Bentley", "Tony Adams", "Paul Henry"], "Easy", "Actors"],
    ["Which actress played David Hunter's second wife Barbara?", "Sue Lloyd", ["Noele Gordon", "Jane Rossington", "Susan Hanson"], "Medium", "Actors"],
    ["Who was David Hunter's first wife?", "Rosemary Hunter", ["Meg Mortimer", "Jill Harvey", "Doris Luke"], "Medium", "Families"],
    ["Who played Adam Chance, the accountant who became motel manager?", "Tony Adams", ["Ronald Allen", "Paul Henry", "Roger Tonge"], "Easy", "Actors"],
    ["Which Crossroads character began as an accountant and later became motel manager?", "Adam Chance", ["Benny Hawkins", "Sandy Richardson", "Vince Parker"], "Easy", "Characters"],
    ["Which member of Meg's family ran a shop in the original series?", "Her sister Kitty Jarvis", ["Her daughter Jill", "Her son Sandy", "Her husband Hugh"], "Medium", "Families"],
    ["Which actor played Meg's husband Hugh Mortimer?", "John Bentley", ["Ronald Allen", "Roger Tonge", "Tony Adams"], "Medium", "Actors"],
    ["Which Coronation Street character is also played by former Crossroads actress Sue Nicholls?", "Audrey Roberts", ["Gail Platt", "Rita Tanner", "Bet Lynch"], "Easy", "Actors"],
    ["Who did Jill Richardson marry after her relationship with Stan Harvey ended?", "Adam Chance", ["Benny Hawkins", "David Hunter", "Shughie McFee"], "Easy", "Relationships"],
    ["What was the first name of Jill's daughter from her marriage to Stan Harvey?", "Sarah-Jane", ["Sally-Anne", "Rebecca", "Charlotte"], "Medium", "Families"],
    ["Which publican did Jill leave with at the end of the original Crossroads series?", "John Maddingham", ["David Hunter", "Paul Ross", "Hugh Mortimer"], "Medium", "Finale"],

    // The big moments, fire and later years
    ["Which disaster famously destroyed Crossroads Motel?", "A fire", ["A flood", "An earthquake", "A gas explosion at a garage"], "Easy", "Storylines"],
    ["Which character was believed to have died in the motel fire but was later revealed to be alive?", "Meg Mortimer", ["Diane Parker", "Jill Chance", "Amy Turtle"], "Easy", "Storylines"],
    ["On which famous ocean liner was Meg seen alive after the motel fire?", "QE2", ["Titanic", "Queen Mary", "Britannia"], "Easy", "Storylines"],
    ["Where was Meg Mortimer heading when she left aboard the QE2?", "Australia", ["Canada", "South Africa", "New Zealand"], "Medium", "Departures"],
    ["Which actress was controversially dismissed from Crossroads, prompting a public outcry?", "Noele Gordon", ["Susan Hanson", "Sue Nicholls", "Ann George"], "Easy", "BehindTheScenes"],
    ["Which character made a brief return during Jill and Adam's honeymoon in Venice?", "Meg Mortimer", ["Amy Turtle", "Diane Parker", "Rosemary Hunter"], "Medium", "Returns"],
    ["In which decade did the original Crossroads first appear on television?", "1960s", ["1950s", "1970s", "1980s"], "Easy", "Production"],
    ["On which British television network was Crossroads shown?", "ITV", ["BBC One", "Channel 4", "BBC Two"], "Easy", "Production"],
    ["What was the television company that originally made Crossroads?", "ATV", ["Thames Television", "Granada Television", "Yorkshire Television"], "Medium", "Production"],
    ["In which decade did the original Crossroads finish?", "1980s", ["1970s", "1990s", "2000s"], "Easy", "Production"],
    ["Which real city was closest to the fictional Kings Oak and its motel?", "Birmingham", ["Manchester", "Liverpool", "Bristol"], "Easy", "Setting"],
    ["What was the motel eventually renamed when it became a luxury hotel?", "Kings Oak Country Hotel", ["The Queen Victoria Hotel", "The Crown and Anchor", "The Weatherfield Hotel"], "Medium", "Setting"],
    ["Which two writers created Crossroads?", "Hazel Adair and Peter Ling", ["Tony Warren and John Finch", "Jimmy McGovern and Alan Bleasdale", "Carla Lane and Eric Chappell"], "Medium", "Production"],
    ["Which composer wrote the original Crossroads theme tune?", "Tony Hatch", ["Ron Grainer", "Mike Post", "John Barry"], "Easy", "Theme"],
    ["Which former Beatle's band recorded a version of the Crossroads theme?", "Wings", ["The Hollies", "The Kinks", "The Shadows"], "Medium", "Theme"],
    ["Which Victoria Wood spoof was inspired in part by Crossroads and its wobbly sets?", "Acorn Antiques", ["Dinnerladies", "The Two Ronnies", "Keeping Up Appearances"], "Easy", "Legacy"],
    ["Which actress played Mrs Overall in Acorn Antiques?", "Julie Walters", ["Victoria Wood", "Patricia Routledge", "Thora Hird"], "Easy", "Legacy"],
    ["Which television drama told the story of Noele Gordon's sacking from Crossroads?", "Nolly", ["The Road to Coronation Street", "The Reckoning", "The Long Shadow"], "Easy", "Legacy"],
    ["Who portrayed Noele Gordon in Nolly?", "Helena Bonham Carter", ["Olivia Colman", "Imelda Staunton", "Julie Walters"], "Easy", "Legacy"],
    ["Which television writer created Nolly?", "Russell T Davies", ["Sally Wainwright", "Tony Jordan", "Steven Moffat"], "Medium", "Legacy"],
    ["Which comedian and entertainer was a close friend of Noele Gordon and appeared in Crossroads?", "Larry Grayson", ["Benny Hill", "Eric Morecambe", "Tommy Cooper"], "Medium", "GuestStars"],
    ["Which actor associated with Only Fools and Horses had an early role in Crossroads?", "David Jason", ["David Tennant", "Nicholas Lyndhurst", "John Cleese"], "Easy", "GuestStars"],
    ["Which singer and stage star also appeared in Crossroads before becoming famous in musicals?", "Elaine Paige", ["Cilla Black", "Lulu", "Barbara Dickson"], "Medium", "GuestStars"],
    ["Which Australian soap did former Crossroads producer Reg Watson later help create?", "Neighbours", ["Home and Away", "Prisoner", "Sons and Daughters"], "Medium", "Legacy"],

    // The revival and its extraordinary ending
    ["In which decade did Crossroads return for a short-lived revival?", "2000s", ["1980s", "1990s", "2010s"], "Easy", "Revival"],
    ["Which character from the original Crossroads was again played by Jane Rossington in the revival?", "Jill Harvey", ["Meg Mortimer", "Amy Turtle", "Diane Hunter"], "Easy", "Revival"],
    ["Which character did Tony Adams reprise in the Crossroads revival?", "Adam Chance", ["David Hunter", "Benny Hawkins", "Hugh Mortimer"], "Easy", "Revival"],
    ["Which original motel cleaner returned in the revival, played by Kathy Staff?", "Doris Luke", ["Amy Turtle", "Diane Parker", "Kitty Jarvis"], "Easy", "Revival"],
    ["Which actress played the new hotel owner Kate Russell in the revived Crossroads?", "Jane Gurnett", ["Jane Asher", "Sherrie Hewson", "Kathy Staff"], "Medium", "Revival"],
    ["Which character was played by Sherrie Hewson in the Crossroads revival?", "Virginia Raven", ["Kate Russell", "Jill Harvey", "Doris Luke"], "Medium", "Revival"],
    ["Who played glamorous hotel character Angel Samson in the later revival?", "Jane Asher", ["Jane Rossington", "Noele Gordon", "Sue Lloyd"], "Easy", "Revival"],
    ["Which character was the womanising deputy manager in the early Crossroads revival?", "Jake Booth", ["Adam Chance", "Benny Hawkins", "Shughie McFee"], "Medium", "Revival"],
    ["What was revealed about the revived Crossroads hotel in its final episode?", "It had all been a dream", ["It was built on a disused mine", "It had been sold to a rival motel", "It was about to become a hospital"], "Easy", "Finale"],
    ["Where did the dreaming woman work in the revival's final twist?", "A supermarket", ["A school", "A hospital", "A railway station"], "Easy", "Finale"],
    ["What type of establishment replaced the original motel in the revival?", "A hotel", ["A boarding school", "A hospital", "A department store"], "Easy", "Setting"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Crossroads', 'British Television', topic],
        dailyEligible: true
    };
});

module.exports = questions;
