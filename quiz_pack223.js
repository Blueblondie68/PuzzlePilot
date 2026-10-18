// quiz_pack223.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1985, the first year in Albert Square
// 100 questions: tv_6104 to tv_6203
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // THE OPENING MYSTERY (9)
    ["Which elderly resident was discovered badly injured in EastEnders' opening episode?", "Reg Cox", ["Charlie Cotton", "Ernie Mears", "Dr Legg"], "Easy", "Opening Mystery"],
    ["Who helped Den Watts and Arthur Fowler force their way into Reg Cox's flat?", "Ali Osman", ["Pete Beale", "Tony Carpenter", "Saeed Jeffery"], "Medium", "Opening Mystery"],
    ["Which character was the first to appear on screen in EastEnders?", "Den Watts", ["Pauline Fowler", "Lou Beale", "Nick Cotton"], "Medium", "Opening Mystery"],
    ["At which Albert Square address was Reg Cox found?", "Number 23", ["Number 3", "Number 45", "Number 55"], "Medium", "Opening Mystery"],
    ["What had caused the injuries from which Reg Cox died?", "A violent beating", ["A fall down the stairs", "A road accident", "A fire in his flat"], "Easy", "Opening Mystery"],
    ["Which Walford troublemaker was responsible for Reg Cox's murder?", "Nick Cotton", ["Mark Fowler", "Ali Osman", "Tony Carpenter"], "Easy", "Opening Mystery"],
    ["What was Nick Cotton trying to steal when he attacked Reg Cox?", "War medals", ["A gold watch", "A cash box", "A collection of rare coins"], "Medium", "Opening Mystery"],
    ["Which detective investigated the death of Reg Cox during the soap's early episodes?", "Terry Rich", ["Roy Quick", "Jack Branning", "Malcolm Keeble"], "Medium", "Opening Mystery"],
    ["Which newcomer was questioned after being seen wearing a badge from Reg Cox's collection?", "Lofty Holloway", ["Simon Wicks", "Kelvin Carpenter", "Andy O'Brien"], "Medium", "Opening Mystery"],

    // THE WATTS HOUSEHOLD (12)
    ["Who was the original landlord of the Queen Victoria in EastEnders?", "Den Watts", ["Frank Butcher", "Eddie Royle", "Grant Mitchell"], "Easy", "Watts Family"],
    ["Which actor originally played Dirty Den Watts?", "Leslie Grantham", ["Mike Reid", "Larry Lamb", "John Altman"], "Easy", "Watts Family"],
    ["Who was the Queen Vic's original landlady alongside Den?", "Angie Watts", ["Kathy Beale", "Pat Wicks", "Pauline Fowler"], "Easy", "Watts Family"],
    ["Which actress played Angie Watts?", "Anita Dobson", ["Gillian Taylforth", "Wendy Richard", "Gretchen Franklin"], "Easy", "Watts Family"],
    ["What was Sharon's relationship to Den and Angie Watts?", "She was their adopted daughter", ["She was their niece", "She was Den's sister", "She was Angie's stepdaughter"], "Easy", "Watts Family"],
    ["Which actress played the teenage Sharon Watts?", "Letitia Dean", ["Susan Tully", "Linda Davidson", "Shirley Cheriton"], "Easy", "Watts Family"],
    ["What was the name of Den Watts' long-term mistress?", "Jan Hammond", ["Debbie Wilkins", "Sheena Mennell", "Hannah Carpenter"], "Medium", "Watts Family"],
    ["Which country did Den visit while pursuing his affair with Jan Hammond?", "Spain", ["France", "Italy", "Portugal"], "Medium", "Watts Family"],
    ["Which married neighbour did Angie become involved with while Den was away?", "Tony Carpenter", ["Arthur Fowler", "Pete Beale", "Ali Osman"], "Medium", "Watts Family"],
    ["What personal problem troubled Angie throughout her marriage to Den?", "Alcohol dependence", ["A gambling addiction", "Compulsive shoplifting", "A fear of leaving home"], "Easy", "Watts Family"],
    ["What was the name of the Watts family's dog?", "Roly", ["Willy", "Wellard", "Terence"], "Easy", "Watts Family"],
    ["What breed was Roly, the original Queen Vic dog?", "Poodle", ["Pug", "Alsatian", "Labrador"], "Medium", "Watts Family"],

    // THE BEALES AND LOU (10)
    ["Who was the formidable matriarch of the original Beale family?", "Lou Beale", ["Ethel Skinner", "Dot Cotton", "Pat Wicks"], "Easy", "Beale Family"],
    ["Which actress played Lou Beale?", "Anna Wing", ["June Brown", "Gretchen Franklin", "Wendy Richard"], "Medium", "Beale Family"],
    ["Who was Pete Beale's sister in the original EastEnders family?", "Pauline Fowler", ["Angie Watts", "Sue Osman", "Naima Jeffery"], "Easy", "Beale Family"],
    ["What did Pete Beale sell on his market stall?", "Fruit and vegetables", ["Flowers", "Fish", "Second-hand clothes"], "Easy", "Beale Family"],
    ["Which actor originally played Pete Beale?", "Peter Dean", ["Bill Treacher", "Oscar James", "Nick Berry"], "Medium", "Beale Family"],
    ["Which actress originally played Kathy Beale?", "Gillian Taylforth", ["Anita Dobson", "Shirley Cheriton", "Sandy Ratcliff"], "Easy", "Beale Family"],
    ["Who was Kathy Beale married to when EastEnders began?", "Pete Beale", ["Arthur Fowler", "Tony Carpenter", "Saeed Jeffery"], "Easy", "Beale Family"],
    ["Which actor played Ian Beale from the first episode?", "Adam Woodyatt", ["Paul J. Medford", "David Scarboro", "Tom Watt"], "Easy", "Beale Family"],
    ["Who were Ian Beale's parents when viewers first met him?", "Pete and Kathy", ["Arthur and Pauline", "Den and Angie", "Ali and Sue"], "Easy", "Beale Family"],
    ["What skill did young Ian Beale show an early interest in developing?", "Cooking", ["Car mechanics", "Hairdressing", "Photography"], "Medium", "Beale Family"],

    // THE FOWLER FAMILY (12)
    ["Which actress originally played Pauline Fowler?", "Wendy Richard", ["Anna Wing", "Anita Dobson", "June Brown"], "Easy", "Fowler Family"],
    ["Which actor played Pauline Fowler's husband Arthur?", "Bill Treacher", ["Peter Dean", "Leslie Grantham", "Oscar James"], "Easy", "Fowler Family"],
    ["How was Lou Beale related to Pauline Fowler?", "She was Pauline's mother", ["She was Pauline's aunt", "She was Pauline's sister", "She was Pauline's mother-in-law"], "Easy", "Fowler Family"],
    ["At which local business did Pauline Fowler work?", "The launderette", ["The café", "The bookies", "The minicab office"], "Easy", "Fowler Family"],
    ["Who was the father of Mark and Michelle Fowler?", "Arthur Fowler", ["Pete Beale", "Den Watts", "Tony Carpenter"], "Easy", "Fowler Family"],
    ["Which Fowler child was the eldest?", "Mark", ["Michelle", "Martin", "Vicki"], "Medium", "Fowler Family"],
    ["Which actor originally played the teenage Mark Fowler?", "David Scarboro", ["Todd Carty", "Adam Woodyatt", "Paul J. Medford"], "Medium", "Fowler Family"],
    ["Which teenage Fowler ran away from home during the soap's first year?", "Mark Fowler", ["Ian Beale", "Martin Fowler", "Kelvin Carpenter"], "Easy", "Fowler Family"],
    ["What was Arthur Fowler's employment situation when EastEnders began?", "He was unemployed", ["He worked at the launderette", "He ran a market stall", "He was a pub barman"], "Easy", "Fowler Family"],
    ["What was the name of the baby boy born to Arthur and Pauline?", "Martin", ["David", "Simon", "Steven"], "Easy", "Fowler Family"],
    ["Which name did Lou Beale initially insist on using for Pauline's baby?", "Albert", ["Peter", "Harold", "Walter"], "Medium", "Fowler Family"],
    ["What was Martin Fowler's full name at his christening?", "Martin Albert Fowler", ["Martin Arthur Fowler", "Martin Peter Fowler", "Martin William Fowler"], "Medium", "Fowler Family"],

    // MICHELLE'S SECRET (8)
    ["Which actress originally played Michelle Fowler?", "Susan Tully", ["Letitia Dean", "Linda Davidson", "Sandy Ratcliff"], "Easy", "Michelle's Pregnancy"],
    ["Who was Michelle Fowler's closest friend in the Watts family?", "Sharon Watts", ["Angie Watts", "Jan Hammond", "Roly"], "Easy", "Michelle's Pregnancy"],
    ["Who was secretly the father of Michelle Fowler's baby?", "Den Watts", ["Ali Osman", "Andy O'Brien", "Tony Carpenter"], "Easy", "Michelle's Pregnancy"],
    ["Where did Michelle meet the father of her baby when his identity was revealed to viewers?", "Beside a canal", ["At the launderette", "In the market", "At the railway station"], "Medium", "Michelle's Pregnancy"],
    ["Which pet's appearance helped reveal the identity of Michelle's baby's father?", "Roly the dog", ["Willy the pug", "Wellard the dog", "A stray cat"], "Medium", "Michelle's Pregnancy"],
    ["What did Michelle decide to do after discussing her pregnancy with Den?", "Keep the baby", ["Leave Walford immediately", "Give the baby to Angie", "Tell the police about Den"], "Medium", "Michelle's Pregnancy"],
    ["What did Den ask Michelle to conceal following their private meeting?", "That he was the baby's father", ["That she had been expelled from school", "That Angie owned the pub", "That Mark had gone missing"], "Easy", "Michelle's Pregnancy"],
    ["How old was Michelle Fowler when her early teenage-pregnancy storyline began?", "Sixteen", ["Fourteen", "Eighteen", "Twenty"], "Medium", "Michelle's Pregnancy"],

    // THE OSMANS AND THE CAFÉ (11)
    ["Which married couple originally ran Walford's café?", "Ali and Sue Osman", ["Pete and Kathy Beale", "Den and Angie Watts", "Saeed and Naima Jeffery"], "Easy", "Osman Family"],
    ["Which actor played café owner Ali Osman?", "Nejdet Salih", ["Haluk Bilginer", "Oscar James", "Peter Dean"], "Medium", "Osman Family"],
    ["Which actress played Sue Osman?", "Sandy Ratcliff", ["Shreela Ghosh", "Linda Davidson", "Shirley Cheriton"], "Medium", "Osman Family"],
    ["What was the name of Ali and Sue Osman's baby son?", "Hassan", ["Murat", "Rayif", "Mehmet"], "Easy", "Osman Family"],
    ["What tragedy struck Ali and Sue Osman's baby?", "He died in his sleep", ["He was abducted", "He was injured in a car crash", "He drowned on holiday"], "Easy", "Osman Family"],
    ["Which local doctor helped Sue Osman begin to face her grief?", "Dr Legg", ["Dr May Wright", "Dr Yusef Khan", "Dr Al Jenkins"], "Medium", "Osman Family"],
    ["Whose baby did Dr Legg place in Sue Osman's arms to help her confront her grief?", "Annie Smith", ["Martin Fowler", "Vicki Fowler", "Cassie Carpenter"], "Medium", "Osman Family"],
    ["Which habit repeatedly caused money problems for Ali Osman?", "Gambling", ["Collecting antiques", "Expensive holidays", "Buying racing cars"], "Easy", "Osman Family"],
    ["Which character was Ali Osman's brother?", "Mehmet Osman", ["Saeed Jeffery", "Tony Carpenter", "Andy O'Brien"], "Medium", "Osman Family"],
    ["Which actor played Mehmet Osman?", "Haluk Bilginer", ["Nejdet Salih", "Oscar James", "Paul J. Medford"], "Medium", "Osman Family"],
    ["What was the name of Mehmet Osman's wife, introduced during the first year?", "Guizin", ["Naima", "Hannah", "Debbie"], "Medium", "Osman Family"],

    // SAEED AND NAIMA JEFFERY (8)
    ["What was the name of the grocery shop run by Saeed and Naima Jeffery?", "First til Last", ["The Minute Mart", "The Corner Pantry", "Walford Stores"], "Medium", "Jeffery Family"],
    ["Who was married to shopkeeper Saeed Jeffery?", "Naima Jeffery", ["Debbie Wilkins", "Sue Osman", "Mary Smith"], "Easy", "Jeffery Family"],
    ["What kind of marriage had brought Saeed and Naima together?", "An arranged marriage", ["A secret elopement", "A marriage of convenience for a visa", "A childhood betrothal arranged by neighbours"], "Medium", "Jeffery Family"],
    ["What behaviour by Saeed helped destroy his marriage to Naima?", "Making obscene telephone calls", ["Stealing from the café", "Betting on horse races", "Selling counterfeit jewellery"], "Medium", "Jeffery Family"],
    ["Which woman was targeted by Saeed's obscene telephone calls?", "Debbie Wilkins", ["Pauline Fowler", "Angie Watts", "Ethel Skinner"], "Medium", "Jeffery Family"],
    ["Who sent Naima an anonymous warning about Saeed's activities?", "Dot Cotton", ["Lou Beale", "Mary Smith", "Kathy Beale"], "Medium", "Jeffery Family"],
    ["To which country did Saeed Jeffery leave after his marriage collapsed?", "Bangladesh", ["Pakistan", "Turkey", "India"], "Medium", "Jeffery Family"],
    ["Who continued running First til Last after Saeed departed?", "Naima Jeffery", ["Kathy Beale", "Debbie Wilkins", "Sue Osman"], "Medium", "Jeffery Family"],

    // DOT, ETHEL AND NICK (9)
    ["Which actress brought Dot Cotton to the screen?", "June Brown", ["Gretchen Franklin", "Anna Wing", "Wendy Richard"], "Easy", "Original Residents"],
    ["Who was Dot Cotton's troublesome son?", "Nick Cotton", ["Lofty Holloway", "Simon Wicks", "Mark Fowler"], "Easy", "Original Residents"],
    ["Where did Dot Cotton work alongside Pauline Fowler?", "The launderette", ["The Queen Vic", "The café", "The market flower stall"], "Easy", "Original Residents"],
    ["Which elderly neighbour was Dot Cotton's close friend?", "Ethel Skinner", ["Angie Watts", "Kathy Beale", "Sue Osman"], "Easy", "Original Residents"],
    ["Which actress played Ethel Skinner?", "Gretchen Franklin", ["June Brown", "Anna Wing", "Shirley Cheriton"], "Medium", "Original Residents"],
    ["What was the name of Ethel Skinner's beloved dog?", "Willy", ["Roly", "Wellard", "Terence"], "Easy", "Original Residents"],
    ["What breed of dog was Ethel Skinner's pet?", "Pug", ["Poodle", "Beagle", "Yorkshire Terrier"], "Medium", "Original Residents"],
    ["Which actor originally played Nick Cotton?", "John Altman", ["Leslie Grantham", "Bill Treacher", "Peter Dean"], "Easy", "Original Residents"],
    ["What habit was Dot Cotton especially associated with?", "Chain-smoking cigarettes", ["Chewing gum", "Drinking strong coffee", "Smoking a pipe"], "Easy", "Original Residents"],

    // MARY SMITH'S ARRIVAL (7)
    ["What was the name of Mary Smith's baby daughter?", "Annie", ["Vicki", "Cassie", "Michelle"], "Easy", "Mary Smith"],
    ["Which youth subculture influenced Mary Smith's appearance and style?", "Punk", ["Hippie", "Mod", "New Romantic"], "Medium", "Mary Smith"],
    ["Which actress originally played Mary Smith?", "Linda Davidson", ["Susan Tully", "Letitia Dean", "Sandy Ratcliff"], "Medium", "Mary Smith"],
    ["Whose old flat did Mary Smith move into after arriving in Walford?", "Reg Cox's", ["Lou Beale's", "Den Watts'", "Dr Legg's"], "Medium", "Mary Smith"],
    ["What was the name of Mary's father, who came looking for her?", "Chris Smith", ["Tony Smith", "Alan Smith", "Peter Smith"], "Medium", "Mary Smith"],
    ["From which town had Mary Smith moved away to escape her family?", "Stockport", ["Leicester", "Norwich", "Ipswich"], "Medium", "Mary Smith"],
    ["Which newcomer encouraged Mary Smith to consider working as a stripper?", "Sheena Mennell", ["Debbie Wilkins", "Hannah Carpenter", "Guizin Osman"], "Medium", "Mary Smith"],

    // THE CARPENTERS, ANDY AND DEBBIE (8)
    ["Which actor played Tony Carpenter, one of Albert Square's first residents?", "Oscar James", ["Paul J. Medford", "Haluk Bilginer", "Bill Treacher"], "Medium", "Other Households"],
    ["What was the name of Tony Carpenter's teenage son?", "Kelvin", ["Simon", "Mark", "Lofty"], "Easy", "Other Households"],
    ["What was the name of Tony Carpenter's estranged wife?", "Hannah", ["Guizin", "Debbie", "Naima"], "Medium", "Other Households"],
    ["What was the name of Kelvin Carpenter's younger sister?", "Cassie", ["Annie", "Sharon", "Michelle"], "Medium", "Other Households"],
    ["Which actor played Kelvin Carpenter?", "Paul J. Medford", ["Adam Woodyatt", "Tom Watt", "David Scarboro"], "Medium", "Other Households"],
    ["Who was Andy O'Brien's partner when the couple arrived in Albert Square?", "Debbie Wilkins", ["Mary Smith", "Naima Jeffery", "Angie Watts"], "Medium", "Other Households"],
    ["Which actor played Andy O'Brien?", "Ross Davidson", ["Peter Dean", "Nick Berry", "Tom Watt"], "Medium", "Other Households"],
    ["Which actress played Debbie Wilkins?", "Shirley Cheriton", ["Gillian Taylforth", "Linda Davidson", "Shreela Ghosh"], "Medium", "Other Households"],

    // OTHER EARLY ARRIVALS (6)
    ["Which actor played the awkward but good-hearted Lofty Holloway?", "Tom Watt", ["Nick Berry", "John Altman", "Bill Treacher"], "Medium", "Other Arrivals"],
    ["What had Lofty Holloway done before coming to Walford?", "Served in the army", ["Worked as a police detective", "Played professional football", "Worked as a fisherman"], "Medium", "Other Arrivals"],
    ["Where did Lofty Holloway work as a barman?", "The Queen Victoria", ["The café", "The First til Last shop", "The launderette"], "Easy", "Other Arrivals"],
    ["Which character was commonly known as Wicksy?", "Simon Wicks", ["Mark Fowler", "Tony Carpenter", "Pete Beale"], "Easy", "Other Arrivals"],
    ["Which actor first played Simon 'Wicksy' Wicks?", "Nick Berry", ["Tom Watt", "David Scarboro", "Paul J. Medford"], "Easy", "Other Arrivals"],
    ["Which police detective arrived in Walford determined to put Nick Cotton behind bars?", "Roy Quick", ["Terry Rich", "Jack Branning", "Malcolm Keeble"], "Medium", "Other Arrivals"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6104 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1985', topic],
        dailyEligible: true
    };
});

module.exports = questions;
