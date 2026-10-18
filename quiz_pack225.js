// quiz_pack225.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1987, changes across Albert Square
// 100 questions: tv_6304 to tv_6403
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // ARTHUR'S RECOVERY (6)
    ["Which Fowler family member needed hospital treatment after his Christmas breakdown?", "Arthur Fowler", ["Pete Beale", "Mark Fowler", "Lou Beale"], "Easy", "Arthur's Recovery"],
    ["Which Walford doctor urged Pauline to get Arthur specialist help?", "Dr Legg", ["Dr Singh", "Dr Jaggat Singh", "Dr May Wright"], "Medium", "Arthur's Recovery"],
    ["What type of specialist assessed Arthur Fowler during his recovery?", "A psychiatrist", ["A cardiologist", "A physiotherapist", "An optician"], "Medium", "Arthur's Recovery"],
    ["What was the surname of the psychiatrist who assessed Arthur Fowler?", "Blackburn", ["Legg", "Carter", "Trueman"], "Medium", "Arthur's Recovery"],
    ["Which Fowler son was in a detention centre while Arthur was recovering?", "Mark Fowler", ["Ian Beale", "Martin Fowler", "Simon Wicks"], "Medium", "Arthur's Recovery"],
    ["Which teenager celebrated his eighteenth birthday with a noisy party and a stripogram?", "Kelvin Carpenter", ["Ian Beale", "Simon Wicks", "Mark Fowler"], "Medium", "Arthur's Recovery"],

    // DEN, ANGIE AND TWO RIVAL PUBS (10)
    ["Which wine bar became the Queen Victoria's main business rival?", "The Dagmar", ["The Albert", "The Rovers Return", "The Prince Albert"], "Easy", "The Vic and Dagmar"],
    ["Who took charge of the Dagmar wine bar after separating from Den Watts?", "Angie Watts", ["Pat Wicks", "Kathy Beale", "Debbie Wilkins"], "Easy", "The Vic and Dagmar"],
    ["Which businessman owned the Dagmar and employed Angie?", "James Willmott-Brown", ["Reg Sparrow", "Tony Carpenter", "Frank Butcher"], "Medium", "The Vic and Dagmar"],
    ["Which former brewery manager went on to run the Dagmar?", "James Willmott-Brown", ["Den Watts", "Roy Quick", "Ali Osman"], "Medium", "The Vic and Dagmar"],
    ["Who did Den install as the new landlady of the Queen Vic after Angie left?", "Jan Hammond", ["Magda Czajkowski", "Pat Wicks", "Mary Smith"], "Easy", "The Vic and Dagmar"],
    ["Which brewery's area manager came to inspect Den's troubled pub business?", "Luxford and Copley", ["Newton and Ridley", "Davenport's", "Hopkins and Sons"], "Medium", "The Vic and Dagmar"],
    ["What was the name of the brewery representative who put pressure on Den to pay his debts?", "Reg Sparrow", ["James Willmott-Brown", "Gerry Fairweather", "Ashraf Karim"], "Medium", "The Vic and Dagmar"],
    ["What did Den Watts sell to help pay off some of his brewery debt?", "His car", ["His piano", "His house", "His market stall"], "Medium", "The Vic and Dagmar"],
    ["How did Angie sabotage Den during a visit from his brewery manager?", "She revealed where he kept the pub accounts", ["She smashed every bottle behind the bar", "She changed the locks", "She gave away all the beer"], "Medium", "The Vic and Dagmar"],
    ["What kind of customers did Angie find especially irritating at the Dagmar?", "Yuppies", ["Football hooligans", "Tourists from America", "Retired market traders"], "Medium", "The Vic and Dagmar"],

    // MAGDA AND THE LOVE TRIANGLE (8)
    ["Which caterer began a romance with both Den Watts and Simon Wicks?", "Magda Czajkowski", ["Jan Hammond", "Tina Hopkins", "Debbie Wilkins"], "Medium", "Magda and Wicksy"],
    ["Which actress played Magda Czajkowski?", "Kathryn Apanowicz", ["Jane How", "Matilda Ziegler", "Eleanor Rhodes"], "Medium", "Magda and Wicksy"],
    ["What kind of business brought Magda to the Queen Victoria?", "Catering", ["Flower arranging", "Hairdressing", "Clothes retailing"], "Easy", "Magda and Wicksy"],
    ["Which country did Den visit while Magda became close to Simon?", "Morocco", ["Spain", "Italy", "Greece"], "Medium", "Magda and Wicksy"],
    ["Which young barman left Sharon Watts for Magda?", "Simon Wicks", ["Lofty Holloway", "Kelvin Carpenter", "Ian Beale"], "Easy", "Magda and Wicksy"],
    ["How did Den react when he discovered Simon was seeing Magda?", "He punched and sacked Simon", ["He bought them an engagement ring", "He made Simon pub manager", "He immediately sold the Queen Vic"], "Medium", "Magda and Wicksy"],
    ["Where did Magda and Simon eventually move together?", "A flat in Albert Square", ["A cottage in Devon", "A houseboat on the Thames", "A hotel in Brighton"], "Medium", "Magda and Wicksy"],
    ["Which longtime Queen Vic landlady was upset by Den's attention to Magda?", "Angie Watts", ["Pat Wicks", "Sue Osman", "Naima Jeffery"], "Easy", "Magda and Wicksy"],

    // IAN AND TINA (8)
    ["What was the name of Ian Beale's teenage girlfriend who moved in with him?", "Tina Hopkins", ["Sharon Watts", "Magda Czajkowski", "Donna Ludlow"], "Easy", "Ian and Tina"],
    ["Which actress played Tina Hopkins?", "Eleanor Rhodes", ["Susan Tully", "Matilda Ziegler", "Judith Jacob"], "Medium", "Ian and Tina"],
    ["Which friend of Ian's also took a romantic interest in Tina?", "Kelvin Carpenter", ["Lofty Holloway", "Mark Fowler", "Barry Clark"], "Medium", "Ian and Tina"],
    ["Where did Tina Hopkins work while dating Ian?", "First til Last", ["The Queen Victoria", "The Dagmar", "The launderette"], "Medium", "Ian and Tina"],
    ["Whose family flat did Ian and Tina rent?", "Kelvin Carpenter's", ["Mark Fowler's", "Sharon Watts'", "Mary Smith's"], "Medium", "Ian and Tina"],
    ["Which shopkeeper wrongly accused Tina of stealing money?", "Naima Jeffery", ["Kathy Beale", "Pat Wicks", "Angie Watts"], "Medium", "Ian and Tina"],
    ["Who really took the shop's missing money that Tina was blamed for?", "Sandra, a friend of Mary Smith", ["Ian Beale", "Pete Beale", "Lofty Holloway"], "Medium", "Ian and Tina"],
    ["From which Essex town did Tina's parents come to take her home?", "Ilford", ["Romford", "Basildon", "Chelmsford"], "Medium", "Ian and Tina"],

    // THE OSMAN CHILDREN (7)
    ["Which Osman brother gambled away his family's home?", "Mehmet Osman", ["Ali Osman", "Saeed Jeffery", "Rezaul Kabir"], "Medium", "Osman Children"],
    ["Which woman moved in with Ali and Sue after her husband Mehmet disappeared?", "Guizin Osman", ["Naima Jeffery", "Carmel Roberts", "Edie Smith"], "Medium", "Osman Children"],
    ["What was the name of Mehmet and Guizin's daughter?", "Emine", ["Annie", "Vicki", "Cassie"], "Medium", "Osman Children"],
    ["Which two boys were Emine Osman's brothers?", "Rayif and Murat", ["Mark and Martin", "Ian and Simon", "Luke and Barry"], "Medium", "Osman Children"],
    ["What unusual pet did Mehmet Osman's children use to frighten neighbours?", "A boa constrictor", ["A tarantula", "A ferret", "A parrot"], "Medium", "Osman Children"],
    ["What was the name of the Osman children's pet snake?", "Crush", ["Roly", "Willy", "Sooty"], "Medium", "Osman Children"],
    ["What caused Emine Osman to be injured in a storyline warning of the danger to children?", "A firework", ["A broken window", "A bicycle accident", "An electric heater"], "Medium", "Osman Children"],

    // THE WALFORD ATTACKER (7)
    ["Which outspoken Walford woman was badly beaten by an attacker in the Square?", "Pat Wicks", ["Lou Beale", "Sharon Watts", "Naima Jeffery"], "Easy", "Walford Attacker"],
    ["Who came under suspicion following the attack on Pat Wicks?", "Pete Beale", ["Arthur Fowler", "Den Watts", "Colin Russell"], "Medium", "Walford Attacker"],
    ["What was the name of the man eventually caught over the attacks on women in Walford?", "Oxley", ["Sparrow", "Fairweather", "Clements"], "Hard", "Walford Attacker"],
    ["Which woman managed to defend herself when the Walford attacker targeted her?", "Debbie Wilkins", ["Angie Watts", "Sue Osman", "Tina Hopkins"], "Medium", "Walford Attacker"],
    ["Where did Debbie Wilkins fight off the Walford attacker?", "The launderette", ["The café", "The Dagmar", "The market"], "Medium", "Walford Attacker"],
    ["Which market trader helped restrain the attacker after hearing Debbie's screams?", "Pete Beale", ["Ali Osman", "Ian Beale", "Mehmet Osman"], "Medium", "Walford Attacker"],
    ["Which Queen Vic barman briefly mistook the attacker for a brewery manager?", "Lofty Holloway", ["Simon Wicks", "Den Watts", "Kelvin Carpenter"], "Medium", "Walford Attacker"],

    // MARY, HER MOTHER AND ROD (8)
    ["What was the name of Mary Smith's strict mother who arrived in Walford?", "Edie Smith", ["Ethel Skinner", "Lou Beale", "Hannah Carpenter"], "Medium", "Mary and Annie"],
    ["Which actress played Edie Smith?", "Eileen O'Brien", ["Gretchen Franklin", "June Brown", "Sandy Ratcliff"], "Medium", "Mary and Annie"],
    ["Whom did Edie Smith take back to Stockport against Mary's wishes?", "Her granddaughter Annie", ["Her son Brendan", "Mary's boyfriend", "The family dog"], "Easy", "Mary and Annie"],
    ["Which man had informed Edie Smith that Mary was struggling to care for Annie?", "Chris Smith", ["Rod Norman", "Tony Carpenter", "Dr Legg"], "Medium", "Mary and Annie"],
    ["Which punk friend tried to help Mary put her life back together?", "Rod Norman", ["Nick Cotton", "Barry Clark", "Graham Clark"], "Medium", "Mary and Annie"],
    ["Which actor played Rod Norman?", "Christopher McHallem", ["Gary Webster", "Gary McDonald", "David Gillespie"], "Medium", "Mary and Annie"],
    ["What job had Rod Norman previously done for rock bands?", "Roadie", ["Lead singer", "Record producer", "Disc jockey"], "Medium", "Mary and Annie"],
    ["Who eventually brought Annie back to Mary after Rod raised concerns for her safety?", "Chris Smith", ["Pete Beale", "Lofty Holloway", "James Willmott-Brown"], "Medium", "Mary and Annie"],

    // KATHY AND DONNA (8)
    ["Which mysterious newcomer was Kathy Beale's daughter from before her marriage to Pete?", "Donna Ludlow", ["Tina Hopkins", "Magda Czajkowski", "Edie Smith"], "Easy", "Kathy and Donna"],
    ["Which actress first played Donna Ludlow?", "Matilda Ziegler", ["Eleanor Rhodes", "Jane How", "Judith Jacob"], "Medium", "Kathy and Donna"],
    ["Why had Kathy been separated from Donna since she was a baby?", "Donna had been adopted", ["Donna was sent to boarding school", "Donna's father moved to Australia with her", "Donna had been kidnapped"], "Easy", "Kathy and Donna"],
    ["What was the name of Donna Ludlow's godmother who approached Kathy?", "June Watkins", ["Pat Wicks", "Edie Smith", "Angie Watts"], "Medium", "Kathy and Donna"],
    ["Which volunteer telephone support service did Kathy Beale work for?", "The Samaritans", ["Childline", "Age Concern", "The Citizens Advice Bureau"], "Medium", "Kathy and Donna"],
    ["How did Donna secretly speak with Kathy without revealing who she was?", "She telephoned the Samaritans", ["She wrote to the Queen Vic", "She used a radio phone-in", "She sent messages through Dot Cotton"], "Medium", "Kathy and Donna"],
    ["Where did Donna Ludlow find work after arriving in Walford?", "The Queen Victoria", ["First til Last", "The Dagmar", "The café"], "Medium", "Kathy and Donna"],
    ["Which Beale son attracted Donna's attention without knowing their family connection?", "Ian Beale", ["Mark Fowler", "Simon Wicks", "Kelvin Carpenter"], "Medium", "Kathy and Donna"],

    // NAIMA'S FRESH START (7)
    ["Which relative arrived from Bangladesh hoping to marry Naima Jeffery?", "Farrukh", ["Rezaul", "Ashraf", "Mehmet"], "Medium", "Naima's New Life"],
    ["What was Farrukh's profession back in Bangladesh?", "Lawyer", ["Doctor", "Musician", "Engineer"], "Medium", "Naima's New Life"],
    ["What did Farrukh support about Naima that reassured her?", "Her independence", ["Her plan to buy the Queen Vic", "Her wish to become a singer", "Her decision to become a police officer"], "Medium", "Naima's New Life"],
    ["Where did Naima marry Farrukh before they moved abroad?", "Birmingham", ["Leicester", "Cardiff", "Manchester"], "Medium", "Naima's New Life"],
    ["To which country did Naima and Farrukh move after marrying?", "Bangladesh", ["Pakistan", "Turkey", "India"], "Easy", "Naima's New Life"],
    ["Which newcomer took over the First til Last shop after Naima left?", "Ashraf Karim", ["Pete Beale", "Ali Osman", "James Willmott-Brown"], "Medium", "Naima's New Life"],
    ["Which actor played Ashraf Karim when he arrived in Walford?", "Aftab Sachak", ["Oscar James", "Nejdet Salih", "Haluk Bilginer"], "Medium", "Naima's New Life"],

    // COLIN, BARRY AND GRAHAM (8)
    ["Which two men were involved in EastEnders' landmark same-sex kiss on the forehead?", "Colin Russell and Barry Clark", ["Simon Wicks and Ian Beale", "Den Watts and James Willmott-Brown", "Lofty Holloway and Kelvin Carpenter"], "Easy", "Colin and Barry"],
    ["Where did Colin Russell kiss Barry Clark in the controversial scene?", "On the forehead", ["On the lips", "On the cheek", "On the hand"], "Medium", "Colin and Barry"],
    ["Who was Barry Clark's protective older brother?", "Graham Clark", ["Roy Quick", "Rod Norman", "Darren Roberts"], "Medium", "Colin and Barry"],
    ["Which actor played Graham Clark?", "Gary Webster", ["Gary Hailes", "Michael Cashman", "Gary McDonald"], "Medium", "Colin and Barry"],
    ["Which criminal did Graham Clark blame for letting him serve time for another man's offence?", "Nick Cotton", ["Den Watts", "Ali Osman", "Pete Beale"], "Medium", "Colin and Barry"],
    ["What was the name of Graham Clark's pet Alsatian?", "Prince", ["Roly", "Crush", "Willy"], "Medium", "Colin and Barry"],
    ["What civic duty brought Colin Russell unwanted pressure from criminals?", "Jury service", ["Serving on a school board", "Joining the local council", "Working as a magistrate"], "Medium", "Colin and Barry"],
    ["What verdict did the criminal gang want Colin to deliver on its associate?", "Not guilty", ["Guilty", "No verdict", "A suspended sentence"], "Medium", "Colin and Barry"],

    // CARMEL AND HER BROTHER (7)
    ["Which relative of Carmel Roberts arrived with two troublesome children?", "Her brother Darren", ["Her cousin Ali", "Her father Tony", "Her uncle Pete"], "Medium", "The Roberts Family"],
    ["Which actor played Darren Roberts?", "Gary McDonald", ["Gary Webster", "Oscar James", "Ross Davidson"], "Medium", "The Roberts Family"],
    ["What was the name of Darren Roberts' son?", "Junior", ["Kelvin", "Martin", "Murat"], "Medium", "The Roberts Family"],
    ["What was the name of Darren Roberts' younger daughter?", "Aisha", ["Annie", "Vicki", "Emine"], "Medium", "The Roberts Family"],
    ["Which householder agreed to let Darren and his children stay at 3b Albert Square?", "Carmel Roberts", ["Naima Jeffery", "Pat Wicks", "Lou Beale"], "Medium", "The Roberts Family"],
    ["What sort of deals often got Darren Roberts into trouble?", "Dishonest money-making schemes", ["Selling homemade preserves", "Running charity jumble sales", "Teaching evening classes"], "Easy", "The Roberts Family"],
    ["Which young Roberts family member became known for graffiti and playing truant?", "Junior Roberts", ["Aisha Roberts", "Carmel Roberts", "Darren Roberts"], "Medium", "The Roberts Family"],

    // SHARON AND DUNCAN (8)
    ["Which church worker helped Sharon Watts cope with her parents' arguments?", "Duncan Boyd", ["Roy Quick", "Dr Legg", "Tom Clements"], "Easy", "Sharon and Duncan"],
    ["Which actor played Duncan Boyd?", "David Gillespie", ["Gary Webster", "Michael Cashman", "Christopher McHallem"], "Medium", "Sharon and Duncan"],
    ["What was Duncan Boyd's role at the local church?", "Curate", ["Organist", "Caretaker", "Choirmaster"], "Medium", "Sharon and Duncan"],
    ["Where did Sharon go to find refuge from Den and Angie's constant rows?", "A church", ["A library", "The market", "The café"], "Easy", "Sharon and Duncan"],
    ["Which resident began a relationship with curate Duncan Boyd?", "Sharon Watts", ["Michelle Fowler", "Mary Smith", "Tina Hopkins"], "Easy", "Sharon and Duncan"],
    ["How did Den react to Sharon's romance with Duncan?", "He tried to break them up", ["He arranged their wedding immediately", "He gave Duncan the Queen Vic", "He moved out of London"], "Medium", "Sharon and Duncan"],
    ["Which barmaid did Den encourage to flirt with Duncan to upset Sharon?", "Donna Ludlow", ["Angie Watts", "Kathy Beale", "Pat Wicks"], "Medium", "Sharon and Duncan"],
    ["What future commitment did Sharon and Duncan begin discussing?", "Marriage", ["Running the Queen Vic", "Emigrating to Australia", "Starting a taxi business"], "Medium", "Sharon and Duncan"],

    // FRANK AND OTHER RESIDENTS (8)
    ["Which future Queen Vic landlord made his first appearance as Pat's old flame?", "Frank Butcher", ["Grant Mitchell", "Eddie Royle", "Dan Sullivan"], "Easy", "Other 1987 Stories"],
    ["Which actor played Frank Butcher on his first visit to Walford?", "Mike Reid", ["Leslie Grantham", "William Boyde", "Nick Berry"], "Easy", "Other 1987 Stories"],
    ["Who was Frank Butcher's old sweetheart in Walford?", "Pat Wicks", ["Angie Watts", "Kathy Beale", "Debbie Wilkins"], "Easy", "Other 1987 Stories"],
    ["What sport was the Walford ladies' team travelling to play when Pat met Frank again?", "Darts", ["Bowls", "Tennis", "Netball"], "Medium", "Other 1987 Stories"],
    ["Which friendly passer-by grew attracted to Pauline Fowler during the darts team's trip?", "Derek Taylor", ["Gerry Fairweather", "Rod Norman", "Reg Sparrow"], "Medium", "Other 1987 Stories"],
    ["Which television presenter portrayed a documentary-maker visiting Albert Square?", "Peter Purves", ["Michael Aspel", "John Craven", "Terry Wogan"], "Medium", "Other 1987 Stories"],
    ["What did the Walford residents dislike about the television documentary made about them?", "It misrepresented them", ["It showed no residents at all", "It was only about the weather", "It was never broadcast"], "Medium", "Other 1987 Stories"],
    ["Which Dagmar customer did Angie punch after his repeated rude remarks?", "Gerry Fairweather", ["Derek Taylor", "Reg Sparrow", "Rod Norman"], "Medium", "Other 1987 Stories"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6304 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1987', topic],
        dailyEligible: true
    };
});

module.exports = questions;
