
 // quiz_pack206.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Crossroads - memorable characters and stories
// 68 questions: tv_4501 to tv_4568
// Individually audited tags; corrected Reg Watson distractors.
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The motel and the people viewers remember
    ["What was the name of the motel at the centre of Crossroads?", "Crossroads Motel", ["The Woolpack Motel", "The King's Arms Hotel", "Weatherfield Lodge"], "Easy", "Setting", ["Crossroads Motel", "Original Motel", "Kings Oak", "Central Location", "Guest Accommodation", "Motel Setting"]],
    ["In which fictional village was Crossroads Motel situated?", "Kings Oak", ["Emmerdale", "Beckindale", "Hollyoaks"], "Easy", "Setting", ["Kings Oak", "Fictional Village", "Midlands Setting", "Village Location", "Motel Grounds", "Kings Oak Village"]],
    ["Which part of England was Crossroads mainly set in?", "The Midlands", ["Cornwall", "Yorkshire", "East Anglia"], "Easy", "Setting", ["English Midlands", "Central England", "Kings Oak", "Birmingham Area", "Regional Setting", "British Soap Setting"]],
    ["Who was the original matriarch and owner of Crossroads Motel?", "Meg Richardson", ["Jill Chance", "Amy Turtle", "Diane Parker"], "Easy", "Characters", ["Meg Richardson", "Meg Mortimer", "Motel Owner", "Family Matriarch", "Original Cast", "Noele Gordon"]],
    ["Which actress played Meg Richardson, later Meg Mortimer?", "Noele Gordon", ["Pat Phoenix", "Doris Speed", "Jean Alexander"], "Easy", "Actors", ["Noele Gordon", "Meg Richardson", "Meg Mortimer", "Leading Actress", "Original Cast", "Casting"]],
    ["What was the surname Meg used after marrying Hugh?", "Mortimer", ["Hunter", "Chance", "Harvey"], "Easy", "Characters", ["Meg Mortimer", "Hugh Mortimer", "Meg Richardson", "Married Surname", "Marriage", "Family Identity"]],
    ["Who played Meg's daughter Jill in Crossroads?", "Jane Rossington", ["Susan Hanson", "Sue Lloyd", "Ann George"], "Easy", "Actors", ["Jane Rossington", "Jill Richardson", "Jill Chance", "Meg's Daughter", "Actress", "Original Cast"]],
    ["Which character was Meg Richardson's son?", "Sandy Richardson", ["Adam Chance", "Benny Hawkins", "David Hunter"], "Easy", "Families", ["Sandy Richardson", "Meg Richardson", "Meg's Son", "Richardson Family", "Brother Of Jill", "Original Character"]],
    ["Which actor played Sandy Richardson?", "Roger Tonge", ["Tony Adams", "John Bentley", "Paul Henry"], "Medium", "Actors", ["Roger Tonge", "Sandy Richardson", "Actor", "Wheelchair User Character", "Original Cast", "Casting"]],
    ["Which disability did Sandy Richardson live with after a car accident?", "Paralysis requiring a wheelchair", ["Blindness", "Loss of hearing", "Loss of an arm"], "Medium", "Storylines", ["Sandy Richardson", "Car Accident", "Wheelchair", "Paralysis", "Disability Representation", "1970s Storyline"]],
    ["Which handyman in Crossroads was famous for wearing a woolly hat?", "Benny Hawkins", ["Adam Chance", "Hugh Mortimer", "David Hunter"], "Easy", "Characters", ["Benny Hawkins", "Woolly Hat", "Handyman", "Iconic Costume", "Motel Staff", "Paul Henry"]],
    ["Which actor played the much-loved Benny Hawkins?", "Paul Henry", ["Tony Adams", "Ronald Allen", "Angus Lennie"], "Easy", "Actors", ["Paul Henry", "Benny Hawkins", "Actor", "Motel Handyman", "Famous Character", "Casting"]],
    ["What was Benny Hawkins' usual job at the motel?", "Handyman", ["Manager", "Head chef", "Receptionist"], "Easy", "Characters", ["Benny Hawkins", "Handyman", "Maintenance Work", "Motel Employee", "Woolly Hat", "Staff Roles"]],
    ["What did Benny Hawkins affectionately call Diane Lawton?", "Miss Diane", ["Mrs Hunter", "Auntie Meg", "Miss Jill"], "Easy", "Characters", ["Benny Hawkins", "Miss Diane", "Diane Lawton", "Famous Catchphrase", "Friendship", "Motel Staff"]],
    ["Which actress played Diane Lawton, later Diane Parker and Hunter?", "Susan Hanson", ["Sue Nicholls", "Jane Rossington", "Kathy Staff"], "Easy", "Actors", ["Susan Hanson", "Diane Lawton", "Diane Parker", "Diane Hunter", "Actress", "Casting"]],
    ["What job did Diane Lawton do at Crossroads Motel?", "Waitress", ["Vet", "Police officer", "Solicitor"], "Easy", "Characters", ["Diane Lawton", "Waitress", "Motel Restaurant", "Miss Diane", "Susan Hanson", "Service Staff"]],
    ["Which actress played the gossiping Amy Turtle?", "Ann George", ["Kathy Staff", "Noele Gordon", "Sue Lloyd"], "Easy", "Actors", ["Ann George", "Amy Turtle", "Actress", "Gossiping Cleaner", "Original Series", "Casting"]],
    ["Which Crossroads character was a talkative motel cleaner and kitchen helper?", "Amy Turtle", ["Barbara Hunter", "Jill Chance", "Meg Mortimer"], "Easy", "Characters", ["Amy Turtle", "Motel Cleaner", "Kitchen Helper", "Gossip", "Ann George", "Motel Staff"]],
    ["Which actress played Doris Luke, the motel cleaner?", "Kathy Staff", ["Ann George", "Jane Rossington", "Susan Hanson"], "Easy", "Actors", ["Kathy Staff", "Doris Luke", "Actress", "Motel Cleaner", "Original Series", "Casting"]],
    ["What was the name of the Scottish chef at Crossroads?", "Shughie McFee", ["Fred Gee", "Percy Sugden", "Stan Ogden"], "Easy", "Characters", ["Shughie McFee", "Scottish Chef", "Motel Kitchen", "Cook", "Angus Lennie", "Staff Character"]],
    ["Which actor played chef Shughie McFee?", "Angus Lennie", ["John Forgeham", "Tony Adams", "Ronald Allen"], "Medium", "Actors", ["Angus Lennie", "Shughie McFee", "Actor", "Scottish Chef", "Motel Kitchen", "Casting"]],
    ["Which Crossroads character was a suave motel manager and director?", "David Hunter", ["Benny Hawkins", "Sandy Richardson", "Hugh Mortimer"], "Easy", "Characters", ["David Hunter", "Motel Director", "Manager", "Ronald Allen", "Senior Management", "Business Character"]],
    ["Which actor played David Hunter?", "Ronald Allen", ["John Bentley", "Tony Adams", "Paul Henry"], "Easy", "Actors", ["Ronald Allen", "David Hunter", "Actor", "Motel Manager", "Leading Cast", "Casting"]],
    ["Which actress played David Hunter's second wife Barbara?", "Sue Lloyd", ["Noele Gordon", "Jane Rossington", "Susan Hanson"], "Medium", "Actors", ["Sue Lloyd", "Barbara Hunter", "David Hunter", "Second Wife", "Actress", "Casting"]],
    ["Who was David Hunter's first wife?", "Rosemary Hunter", ["Meg Mortimer", "Jill Harvey", "Doris Luke"], "Medium", "Families", ["Rosemary Hunter", "David Hunter", "First Marriage", "Former Wife", "Hunter Family", "Early Storyline"]],
    ["Who played Adam Chance, the accountant who became motel manager?", "Tony Adams", ["Ronald Allen", "Paul Henry", "Roger Tonge"], "Easy", "Actors", ["Tony Adams", "Adam Chance", "Actor", "Motel Accountant", "Motel Manager", "Casting"]],
    ["Which Crossroads character began as an accountant and later became motel manager?", "Adam Chance", ["Benny Hawkins", "Sandy Richardson", "Vince Parker"], "Easy", "Characters", ["Adam Chance", "Accountant", "Motel Manager", "Tony Adams", "Business Management", "Career Progression"]],
    ["Which member of Meg's family ran a shop in the original series?", "Her sister Kitty Jarvis", ["Her daughter Jill", "Her son Sandy", "Her husband Hugh"], "Medium", "Families", ["Kitty Jarvis", "Meg Richardson", "Sister", "Village Shop", "Jarvis Family", "Family Rivalry"]],
    ["Which actor played Meg's husband Hugh Mortimer?", "John Bentley", ["Ronald Allen", "Roger Tonge", "Tony Adams"], "Medium", "Actors", ["John Bentley", "Hugh Mortimer", "Meg Mortimer", "Actor", "Husband", "Casting"]],
    ["Which Coronation Street character is also played by former Crossroads actress Sue Nicholls?", "Audrey Roberts", ["Gail Platt", "Rita Tanner", "Bet Lynch"], "Easy", "Actors", ["Sue Nicholls", "Audrey Roberts", "Coronation Street", "Marilyn Gates", "Cross Soap Actress", "ITV Casting"]],
    ["Who did Jill Richardson marry after her relationship with Stan Harvey ended?", "Adam Chance", ["Benny Hawkins", "David Hunter", "Shughie McFee"], "Easy", "Relationships", ["Jill Richardson", "Adam Chance", "Stan Harvey", "Later Marriage", "Wedding", "Chance Family"]],
    ["What was the first name of Jill's daughter from her marriage to Stan Harvey?", "Sarah-Jane", ["Sally-Anne", "Rebecca", "Charlotte"], "Medium", "Families", ["Sarah-Jane Harvey", "Jill Richardson", "Stan Harvey", "Daughter", "Harvey Family", "1970s Birth"]],
    ["Which publican did Jill leave with at the end of the original Crossroads series?", "John Maddingham", ["David Hunter", "Paul Ross", "Hugh Mortimer"], "Medium", "Finale", ["Jill Chance", "John Maddingham", "Final Episode", "Publican", "New Life", "Series Departure"]],

    // The big moments, fire and later years
    ["Which disaster famously destroyed Crossroads Motel?", "A fire", ["A flood", "An earthquake", "A gas explosion at a garage"], "Easy", "Storylines", ["Motel Fire", "Major Blaze", "Crossroads Motel", "Building Disaster", "Meg Mortimer", "1981 Storyline"]],
    ["Which character was believed to have died in the motel fire but was later revealed to be alive?", "Meg Mortimer", ["Diane Parker", "Jill Chance", "Amy Turtle"], "Easy", "Storylines", ["Meg Mortimer", "Presumed Dead", "Motel Fire", "Surprise Survival", "Noele Gordon", "1981 Departure"]],
    ["On which famous ocean liner was Meg seen alive after the motel fire?", "QE2", ["Titanic", "Queen Mary", "Britannia"], "Easy", "Storylines", ["Queen Elizabeth 2", "QE2", "Ocean Liner", "Meg Mortimer", "Surprise Reveal", "1981 Exit"]],
    ["Where was Meg Mortimer heading when she left aboard the QE2?", "Australia", ["Canada", "South Africa", "New Zealand"], "Medium", "Departures", ["Australia", "Meg Mortimer", "QE2", "Emigration", "Departure Destination", "New Life"]],
    ["Which actress was controversially dismissed from Crossroads, prompting a public outcry?", "Noele Gordon", ["Susan Hanson", "Sue Nicholls", "Ann George"], "Easy", "BehindTheScenes", ["Noele Gordon", "Controversial Sacking", "Public Outcry", "Meg Mortimer", "ITV Decision", "Behind The Camera"]],
    ["Which character made a brief return during Jill and Adam's honeymoon in Venice?", "Meg Mortimer", ["Amy Turtle", "Diane Parker", "Rosemary Hunter"], "Medium", "Returns", ["Meg Mortimer", "Venice", "Jill Chance", "Adam Chance", "Honeymoon Reunion", "1983 Appearance"]],
    ["In which decade did the original Crossroads first appear on television?", "1960s", ["1950s", "1970s", "1980s"], "Easy", "Production", ["1960s", "1964 Debut", "Original Series", "Television Launch", "ITV History", "First Broadcast"]],
    ["On which British television network was Crossroads shown?", "ITV", ["BBC One", "Channel 4", "BBC Two"], "Easy", "Production", ["ITV", "Independent Television", "British Broadcasting", "Original Run", "Commercial Television", "Network"]],
    ["What was the television company that originally made Crossroads?", "ATV", ["Thames Television", "Granada Television", "Yorkshire Television"], "Medium", "Production", ["ATV", "Associated Television", "Original Production", "Midlands Franchise", "Broadcaster", "Studio"]],
    ["In which decade did the original Crossroads finish?", "1980s", ["1970s", "1990s", "2000s"], "Easy", "Production", ["1980s", "1988 Finale", "Original Series", "Series Cancellation", "ITV History", "Final Broadcast"]],
    ["Which real city was closest to the fictional Kings Oak and its motel?", "Birmingham", ["Manchester", "Liverpool", "Bristol"], "Easy", "Setting", ["Birmingham", "Kings Oak", "West Midlands", "Nearby City", "Fictional Setting", "Regional Geography"]],
    ["What was the motel eventually renamed when it became a luxury hotel?", "Kings Oak Country Hotel", ["The Queen Victoria Hotel", "The Crown and Anchor", "The Weatherfield Hotel"], "Medium", "Setting", ["Kings Oak Country Hotel", "Luxury Hotel", "Motel Renaming", "1980s Revamp", "Hotel Rebranding", "Refurbishment"]],
    ["Which two writers created Crossroads?", "Hazel Adair and Peter Ling", ["Tony Warren and John Finch", "Jimmy McGovern and Alan Bleasdale", "Carla Lane and Eric Chappell"], "Medium", "Production", ["Hazel Adair", "Peter Ling", "Programme Creators", "Screenwriters", "1964 Launch", "Original Concept"]],
    ["Which composer wrote the original Crossroads theme tune?", "Tony Hatch", ["Ron Grainer", "Mike Post", "John Barry"], "Easy", "Theme", ["Tony Hatch", "Theme Composer", "Opening Music", "Instrumental Theme", "Original Score", "ITV Music"]],
    ["Which former Beatle's band recorded a version of the Crossroads theme?", "Wings", ["The Hollies", "The Kinks", "The Shadows"], "Medium", "Theme", ["Wings", "Paul McCartney", "Crossroads Theme", "Tony Hatch", "Venus And Mars", "1975 Recording"]],
    ["Which Victoria Wood spoof was inspired in part by Crossroads and its wobbly sets?", "Acorn Antiques", ["Dinnerladies", "The Two Ronnies", "Keeping Up Appearances"], "Easy", "Legacy", ["Acorn Antiques", "Victoria Wood", "Television Parody", "Wobbly Sets", "Comedy Spoof", "Soap Satire"]],
    ["Which actress played Mrs Overall in Acorn Antiques?", "Julie Walters", ["Victoria Wood", "Patricia Routledge", "Thora Hird"], "Easy", "Legacy", ["Julie Walters", "Mrs Overall", "Acorn Antiques", "Victoria Wood", "Comedy Actress", "Parody Character"]],
    ["Which television drama told the story of Noele Gordon's sacking from Crossroads?", "Nolly", ["The Road to Coronation Street", "The Reckoning", "The Long Shadow"], "Easy", "Legacy", ["Nolly", "Noele Gordon", "ITV Drama", "Controversial Sacking", "Biographical Drama", "Russell T Davies"]],
    ["Who portrayed Noele Gordon in Nolly?", "Helena Bonham Carter", ["Olivia Colman", "Imelda Staunton", "Julie Walters"], "Easy", "Legacy", ["Helena Bonham Carter", "Noele Gordon", "Nolly", "Lead Actress", "Biographical Role", "Casting"]],
    ["Which television writer created Nolly?", "Russell T Davies", ["Sally Wainwright", "Tony Jordan", "Steven Moffat"], "Medium", "Legacy", ["Russell T Davies", "Nolly", "Series Creator", "Screenwriter", "Noele Gordon", "ITV Drama"]],
    ["Which comedian and entertainer was a close friend of Noele Gordon and appeared in Crossroads?", "Larry Grayson", ["Benny Hill", "Eric Morecambe", "Tommy Cooper"], "Medium", "GuestStars", ["Larry Grayson", "Noele Gordon", "Celebrity Guest", "Comedian", "Friendship", "Television Appearance"]],
    ["Which actor associated with Only Fools and Horses had an early role in Crossroads?", "David Jason", ["David Tennant", "Nicholas Lyndhurst", "John Cleese"], "Easy", "GuestStars", ["David Jason", "Only Fools And Horses", "Early Acting Role", "Celebrity Guest", "Del Boy Actor", "Career Origins"]],
    ["Which singer and stage star also appeared in Crossroads before becoming famous in musicals?", "Elaine Paige", ["Cilla Black", "Lulu", "Barbara Dickson"], "Medium", "GuestStars", ["Elaine Paige", "Musical Theatre", "Singing Star", "Early TV Appearance", "Stage Actress", "Celebrity Guest"]],
    ["Which Australian soap did former Crossroads producer Reg Watson later help create?", "Neighbours", ["Home and Away", "A Country Practice", "The Sullivans"], "Medium", "Legacy", ["Reg Watson", "Neighbours", "Australian Soap", "Executive Producer", "Programme Creator", "Grundy Television"]],

    // The revival and its extraordinary ending
    ["In which decade did Crossroads return for a short-lived revival?", "2000s", ["1980s", "1990s", "2010s"], "Easy", "Revival", ["2000s", "2001 Revival", "2003 Cancellation", "Return To ITV", "Short Lived Series", "Carlton Television"]],
    ["Which character from the original Crossroads was again played by Jane Rossington in the revival?", "Jill Harvey", ["Meg Mortimer", "Amy Turtle", "Diane Hunter"], "Easy", "Revival", ["Jane Rossington", "Jill Harvey", "Jill Richardson", "Revival Cast", "Original Character", "Returning Actress"]],
    ["Which character did Tony Adams reprise in the Crossroads revival?", "Adam Chance", ["David Hunter", "Benny Hawkins", "Hugh Mortimer"], "Easy", "Revival", ["Tony Adams", "Adam Chance", "Revival Cast", "Original Character", "Returning Actor", "2001 Series"]],
    ["Which original motel cleaner returned in the revival, played by Kathy Staff?", "Doris Luke", ["Amy Turtle", "Diane Parker", "Kitty Jarvis"], "Easy", "Revival", ["Doris Luke", "Kathy Staff", "Motel Cleaner", "Revived Series", "Returning Character", "Original Cast"]],
    ["Which actress played the new hotel owner Kate Russell in the revived Crossroads?", "Jane Gurnett", ["Jane Asher", "Sherrie Hewson", "Kathy Staff"], "Medium", "Revival", ["Jane Gurnett", "Kate Russell", "Hotel Owner", "2001 Revival", "New Cast", "Actress"]],
    ["Which character was played by Sherrie Hewson in the Crossroads revival?", "Virginia Raven", ["Kate Russell", "Jill Harvey", "Doris Luke"], "Medium", "Revival", ["Sherrie Hewson", "Virginia Raven", "Hotel Receptionist", "Revival Character", "Actress", "Casting"]],
    ["Who played glamorous hotel character Angel Samson in the later revival?", "Jane Asher", ["Jane Rossington", "Noele Gordon", "Sue Lloyd"], "Easy", "Revival", ["Jane Asher", "Angel Samson", "2003 Revamp", "Glamorous Owner", "Actress", "Revival Cast"]],
    ["Which character was the womanising deputy manager in the early Crossroads revival?", "Jake Booth", ["Adam Chance", "Benny Hawkins", "Shughie McFee"], "Medium", "Revival", ["Jake Booth", "Deputy Manager", "Colin Wells", "Womaniser", "2001 Revival", "Hotel Staff"]],
    ["What was revealed about the revived Crossroads hotel in its final episode?", "It had all been a dream", ["It was built on a disused mine", "It had been sold to a rival motel", "It was about to become a hospital"], "Easy", "Finale", ["Dream Reveal", "2003 Finale", "Angel Samson", "Supermarket Fantasy", "Soap Ending", "Imagined Hotel"]],
    ["Where did the dreaming woman work in the revival's final twist?", "A supermarket", ["A school", "A hospital", "A railway station"], "Easy", "Finale", ["Supermarket", "Checkout Operator", "Angela", "Angel Samson", "2003 Finale", "Dream Twist"]],
    ["What type of establishment replaced the original motel in the revival?", "A hotel", ["A boarding school", "A hospital", "A department store"], "Easy", "Setting", ["Hotel", "2001 Revival", "Motel Replacement", "Kings Oak", "Revamped Setting", "Hospitality Business"]],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic, specificTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4501 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Crossroads', 'British Television', topic, ...specificTags],
        dailyEligible: true
    };
});

module.exports = questions;
