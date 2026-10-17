// quiz_pack207.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Family Affairs - memorable characters and stories
// 75 questions: tv_4569 to tv_4643
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The programme and its early years
    ["Which British television channel launched with the soap Family Affairs?", "Channel 5", ["Channel 4", "ITV", "BBC Two"], "Easy", "Production"],
    ["In which decade did Family Affairs begin?", "1990s", ["1980s", "2000s", "1970s"], "Easy", "Production"],
    ["What was the fictional London suburb at the centre of Family Affairs?", "Charnham", ["Walford", "Weatherfield", "Summer Bay"], "Easy", "Setting"],
    ["Which street became the main setting for Family Affairs?", "Stanley Street", ["Albert Square", "Coronation Street", "Brookside Close"], "Easy", "Setting"],
    ["What was the name of the original bar and restaurant in Family Affairs?", "The Lock", ["The Woolpack", "The Queen Victoria", "The Dog in the Pond"], "Medium", "Setting"],
    ["What was the name of Pete Callan's pub on Stanley Street?", "The Black Swan", ["The Rovers Return", "The Crown", "The Dog in the Pond"], "Easy", "Setting"],
    ["Which soap creator was behind Family Affairs?", "Mal Young", ["Tony Warren", "Phil Redmond", "Julia Smith"], "Medium", "Production"],
    ["How often was Family Affairs normally shown on weekday evenings?", "Five nights a week", ["Once a week", "Twice a week", "Three nights a week"], "Easy", "Production"],
    ["Which Australian soap was scheduled immediately before Family Affairs on Channel 5?", "Home and Away", ["Neighbours", "Sons and Daughters", "Prisoner"], "Easy", "Production"],

    // The Harts and the famous explosion
    ["Which family was the original focus of Family Affairs?", "The Harts", ["The Costellos", "The Dingles", "The Barlows"], "Easy", "Families"],
    ["What was the first name of the Hart family's builder father?", "Chris", ["Pete", "Roy", "Dave"], "Medium", "Families"],
    ["What was the name of Chris Hart's wife?", "Annie", ["Cat", "Yasmin", "Eileen"], "Medium", "Families"],
    ["What was Chris Hart's occupation?", "Builder", ["Doctor", "Solicitor", "Publican"], "Medium", "Characters"],
    ["Which Hart siblings were twins?", "Duncan and Holly", ["Melanie and Jamie", "Chris and Annie", "Roy and Pete"], "Medium", "Families"],
    ["Which Hart daughter was training to be a solicitor?", "Holly Hart", ["Annie Hart", "Melanie Hart", "Claire Toomey"], "Medium", "Characters"],
    ["Which member of the Hart family became a police officer?", "Melanie Hart", ["Annie Hart", "Holly Hart", "Maria Simons"], "Medium", "Characters"],
    ["Which future Hollywood actor appeared as Tim Webster in early Family Affairs?", "Idris Elba", ["Chiwetel Ejiofor", "Daniel Kaluuya", "David Oyelowo"], "Easy", "Actors"],
    ["What was the name of the character played by Idris Elba in Family Affairs?", "Tim Webster", ["Pete Callan", "Josh Matthews", "Duncan Hart"], "Medium", "Actors"],
    ["Which Coronation Street producer was recruited to overhaul Family Affairs?", "Brian Park", ["Tony Warren", "Phil Redmond", "Russell T Davies"], "Medium", "Production"],
    ["What disaster killed most of the original Hart family?", "A boat explosion", ["A house fire", "A train crash", "A motorway pile-up"], "Easy", "Disasters"],
    ["Where was the Hart family celebrating when the explosion happened?", "On a river boat", ["In The Black Swan", "At a seaside hotel", "In a village church"], "Easy", "Disasters"],
    ["Whose wedding reception was being held on the Hart family's boat?", "Melanie Hart and Roy Farmer's", ["Pete Callan and Eileen Day's", "Yasmin and Josh's", "Chris and Annie Hart's"], "Medium", "Marriages"],
    ["Which groom survived the Hart family's boat explosion after briefly going ashore?", "Roy Farmer", ["Chris Hart", "Pete Callan", "Josh Matthews"], "Medium", "Disasters"],
    ["What caused the explosion on the Hart family's boat?", "Leaking gas ignited by a candle", ["A bomb planted under the deck", "A lightning strike", "A collision with another boat"], "Medium", "Disasters"],
    ["Which Hart sibling escaped the explosion because he had already left the area?", "Duncan Hart", ["Holly Hart", "Jamie Hart", "Melanie Hart"], "Medium", "Families"],

    // Pete Callan, his pub and his crimes
    ["Which Family Affairs actor played the villainous Pete Callan?", "David Easter", ["Gary Webster", "Miles Petit", "Richard Hawley"], "Easy", "Actors"],
    ["In which other British soap had David Easter appeared before Family Affairs?", "Brookside", ["Coronation Street", "Emmerdale", "Crossroads"], "Medium", "Actors"],
    ["Which woman was Pete Callan's former wife when he first arrived in Charnham?", "Maria Simons", ["Chrissie Costello", "Yasmin Matthews", "Fern Derwin"], "Medium", "Relationships"],
    ["Which friend of the Harts married Pete Callan after being abandoned by Duncan?", "Claire Toomey", ["Holly Hart", "Cat Matthews", "Geri Evans"], "Medium", "Relationships"],
    ["Which member of the Gates family murdered his wife Elsa before taking his own life?", "Jack Gates", ["Angus Hart", "Nick Trip", "Dave Matthews"], "Medium", "Crime"],
    ["Which barman was secretly murdered by Pete Callan?", "Josh Matthews", ["Roy Farmer", "Marc MacKenzie", "Nick Trip"], "Easy", "Crime"],
    ["Which of Pete Callan's wives did he frame for Josh Matthews' murder?", "Siobhan Callan", ["Eileen Callan", "Maria Simons", "Claire Toomey"], "Medium", "Crime"],
    ["Who originally struck Josh Matthews, believing he was an intruder?", "Siobhan Callan", ["Cat Webb", "Chrissie Costello", "Gemma Craig"], "Medium", "Crime"],
    ["Who played Pete Callan's wife Eileen?", "Rosie Rowell", ["Gabrielle Glaister", "Kazia Pelka", "Nicola Duffett"], "Medium", "Actors"],
    ["Into which river did Pete Callan throw Eileen during a dramatic confrontation?", "River Thames", ["River Mersey", "River Tyne", "River Severn"], "Easy", "Storylines"],
    ["How did villain Pete Callan finally die?", "He was shot by armed police", ["He fell from a rooftop", "He died in a house fire", "He drowned in the river"], "Easy", "Deaths"],
    ["Which villainous woman became involved in Pete Callan's final showdown?", "Trish Wallace", ["Chrissie Costello", "Yasmin Matthews", "Sadie Hargreaves"], "Medium", "Crime"],
    ["Which actress played schemer Trish Wallace?", "Gabrielle Glaister", ["Rosie Rowell", "Barbara Young", "Laila Rouass"], "Medium", "Actors"],
    ["Which original character died in a fire at his Internet café?", "Roy Farmer", ["Pete Callan", "Dave Matthews", "Doug MacKenzie"], "Easy", "Deaths"],

    // The Matthews, Yasmin and the new street
    ["Who played Family Affairs regular Cat Matthews, later Cat Webb?", "Nicola Duffett", ["Kazia Pelka", "Ebony Thomas", "Anna Acton"], "Easy", "Actors"],
    ["What was the name of Cat Matthews' original husband?", "Dave Matthews", ["Pete Callan", "Gary Costello", "Doug MacKenzie"], "Medium", "Families"],
    ["Which actor played Dave Matthews?", "Richard Hawley", ["Gary Webster", "David Easter", "Ian Ashpitel"], "Medium", "Actors"],
    ["Which young woman was famous for her facial piercings in Family Affairs?", "Yasmin Matthews", ["Chloe Costello", "Melanie Hart", "Nikki Warrington"], "Easy", "Characters"],
    ["Which actress played Yasmin in Family Affairs?", "Ebony Thomas", ["Anna Acton", "Tanya Franks", "Nicola Duffett"], "Easy", "Actors"],
    ["What was the name of Yasmin's mother, who ran a local shop?", "Dusty McHugh", ["Sadie Hargreaves", "Myra Costello", "Fern Derwin"], "Medium", "Families"],
    ["Which Matthews man was Yasmin's first husband?", "Josh Matthews", ["Dave Matthews", "Marc MacKenzie", "Pete Callan"], "Medium", "Relationships"],
    ["Which character was Yasmin's rival for Marc MacKenzie's affections?", "Geri Evans", ["Cat Webb", "Chrissie Costello", "Melanie Hart"], "Easy", "Relationships"],
    ["What unusual method let Family Affairs viewers influence Marc MacKenzie's love triangle?", "A public phone and text vote", ["A postal referendum", "An audience vote in the studio", "A live stage performance"], "Easy", "Production"],
    ["Which actor, later seen in Emmerdale, originally played Marc MacKenzie?", "Michael Wildman", ["Mark Charnock", "Dominic Brunt", "Jeff Hordley"], "Medium", "Actors"],
    ["Which half of comedy duo Hale and Pace played Doug MacKenzie?", "Gareth Hale", ["Norman Pace", "Harry Enfield", "Paul Whitehouse"], "Easy", "Actors"],
    ["Which woman married Doug MacKenzie in Family Affairs?", "Cat Webb", ["Eileen Callan", "Chrissie Costello", "Gemma Craig"], "Medium", "Relationships"],

    // The Costellos and major later storylines
    ["Which family moved to Stanley Street after losing their comfortable lifestyle in Chigwell?", "The Costellos", ["The Harts", "The Barlows", "The Mitchells"], "Easy", "Families"],
    ["Who played Costello family father Gary?", "Gary Webster", ["David Easter", "Gareth Hale", "Richard Hawley"], "Easy", "Actors"],
    ["Which actress played Chrissie Costello?", "Kazia Pelka", ["Rosie Rowell", "Nicola Duffett", "Barbara Young"], "Easy", "Actors"],
    ["What illness did Chrissie Costello falsely claim her daughter had?", "Cancer", ["Diabetes", "Meningitis", "Epilepsy"], "Easy", "Storylines"],
    ["Which Costello daughter was at the centre of her mother's fake cancer story?", "Chloe Costello", ["Melanie Costello", "Geri Evans", "Jessica Davenport"], "Easy", "Storylines"],
    ["Which Costello daughter had stored the tablets that made Chloe ill?", "Melanie Costello", ["Chloe Costello", "Yasmin Matthews", "Kelly Boulter"], "Medium", "Storylines"],
    ["What drug did Chloe Costello take before the hospital tests that began the cancer scare?", "Ecstasy", ["Cocaine", "Heroin", "Cannabis"], "Medium", "Storylines"],
    ["Which woman first publicly challenged Chrissie Costello's claims about Chloe's illness?", "Eileen Callan", ["Yasmin Matthews", "Cat Webb", "Sadie Hargreaves"], "Medium", "Storylines"],
    ["Which family friend sexually abused Chloe Costello?", "Bradley Foster", ["Pete Callan", "Doug MacKenzie", "Josh Matthews"], "Medium", "Storylines"],
    ["Which Boulter family member had a secret relationship with Sean Steel?", "Brendan Boulter", ["Les Boulter", "Justin MacKenzie", "Gary Costello"], "Medium", "Relationships"],
    ["Which character was both a nurse and Sean Steel's close friend?", "Tanya Woods", ["Chrissie Costello", "Claire Toomey", "Geri Evans"], "Medium", "Characters"],
    ["Which Family Affairs actress later played Ruby Fox-Miligan in Emmerdale?", "Beth Cordingly", ["Nicola Duffett", "Kazia Pelka", "Rosie Rowell"], "Easy", "Actors"],
    ["Which future House of the Dragon actor played Caleb Andrews in Family Affairs?", "Steve Toussaint", ["Idris Elba", "Richard Hawley", "Gary Webster"], "Medium", "Actors"],

    // The finale and legacy
    ["In which decade did Family Affairs end?", "2000s", ["1990s", "2010s", "1980s"], "Easy", "Production"],
    ["What announcement did Eileen Callan make when she returned in the final episode?", "She had won the lottery", ["She was moving to Australia", "She was marrying Pete Callan", "She had bought a hotel"], "Easy", "Finale"],
    ["What kind of party was taking place in Family Affairs' final episode?", "A New Year's Eve party", ["A Halloween party", "A royal wedding reception", "A birthday party"], "Easy", "Finale"],
    ["Which pub did Eileen Callan sell in the Family Affairs finale?", "The Black Swan", ["The Lock", "The Queen Victoria", "The Rovers Return"], "Medium", "Finale"],
    ["Which actor played the original Family Affairs character Roy Farmer?", "Miles Petit", ["David Easter", "Gary Webster", "Gareth Hale"], "Medium", "Actors"],
    ["Which actress played Sadie Hargreaves in Family Affairs?", "Barbara Young", ["Pat Phoenix", "Doris Speed", "Kathy Staff"], "Medium", "Actors"],
    ["Which actress played doctor Tanya Ayuba in Family Affairs?", "Laila Rouass", ["Kazia Pelka", "Tanya Franks", "Rebecca Blake"], "Medium", "Actors"],
    ["Which ITV drama featured Family Affairs actor Gary Webster as Ray Daley?", "Minder", ["The Bill", "London's Burning", "Heartbeat"], "Easy", "Actors"],
    ["Which Coronation Street character was also played by Family Affairs actress Barbara Young?", "Doreen Fenwick", ["Bet Lynch", "Deirdre Barlow", "Audrey Roberts"], "Easy", "Actors"],
    ["Which character in Family Affairs was played by future Emmerdale actress Beth Cordingly?", "Sara Warrington", ["Chrissie Costello", "Yasmin Matthews", "Eileen Callan"], "Medium", "Actors"],
    ["Which former England cricketer appeared as a beauty contest judge in Family Affairs?", "Phil Tufnell", ["Ian Botham", "Andrew Flintoff", "David Gower"], "Medium", "GuestStars"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4569 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Family Affairs', 'British Television', topic],
        dailyEligible: true
    };
});

module.exports = questions;
