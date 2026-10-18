// quiz_pack228.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1990, new families and fresh secrets
// 100 questions: tv_6604 to tv_6703
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // THE MITCHELLS ARRIVE (10)
    ["Which two brothers arrived in Walford and went on to become known as the Mitchell brothers?", "Phil and Grant Mitchell", ["Phil and Billy Mitchell", "Grant and Ricky Butcher", "Grant and Nigel Bates"], "Easy", "The Mitchells Arrive"],
    ["Which actor first played Phil Mitchell?", "Steve McFadden", ["Ross Kemp", "Mike Reid", "Todd Carty"], "Easy", "The Mitchells Arrive"],
    ["Which actor originally played Grant Mitchell?", "Ross Kemp", ["Steve McFadden", "Sid Owen", "Nick Berry"], "Easy", "The Mitchells Arrive"],
    ["Which Mitchell brother was the older sibling?", "Phil Mitchell", ["Grant Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Medium", "The Mitchells Arrive"],
    ["What was the name of the garage taken over by Phil and Grant Mitchell?", "The Arches", ["The Archway", "Walford Motors", "The Car Lot"], "Easy", "The Mitchells Arrive"],
    ["What was Grant Mitchell's occupation before moving into the Square?", "Soldier", ["Firefighter", "Police officer", "Merchant seaman"], "Easy", "The Mitchells Arrive"],
    ["Which military regiment had Grant Mitchell served in?", "The Parachute Regiment", ["The Royal Navy", "The Royal Engineers", "The Scots Guards"], "Medium", "The Mitchells Arrive"],
    ["Which salon owner briefly dated Grant Mitchell before his romance with Sharon?", "Julie Cooper", ["Cindy Beale", "Kathy Beale", "Pat Butcher"], "Medium", "The Mitchells Arrive"],
    ["Which Queen Vic barmaid did Grant Mitchell begin courting?", "Sharon Watts", ["Michelle Fowler", "Diane Butcher", "Hattie Tavernier"], "Easy", "The Mitchells Arrive"],
    ["Which actress first played the Mitchell brothers' younger sister Sam?", "Danniella Westbrook", ["Kim Medcalf", "Sophie Lawrence", "Michelle Gayle"], "Easy", "The Mitchells Arrive"],

    // DIANE RUNS AWAY (12)
    ["Which Butcher teenager ran away from home after feeling neglected by her family?", "Diane Butcher", ["Janine Butcher", "Ricky Butcher", "Clare Butcher"], "Easy", "Diane Runs Away"],
    ["How old was Diane Butcher when she ran away from home?", "Sixteen", ["Fourteen", "Seventeen", "Eighteen"], "Medium", "Diane Runs Away"],
    ["What did Diane wrongly believe her family had forgotten?", "Her birthday", ["Her school exams", "Her hospital appointment", "Her graduation"], "Easy", "Diane Runs Away"],
    ["What had Frank and Pat actually planned for Diane?", "A surprise party", ["A holiday in Spain", "A new car", "A visit to her boyfriend"], "Easy", "Diane Runs Away"],
    ["Which builder's departure had left Diane heartbroken before she ran away?", "Paul Priestly", ["Trevor Short", "Matthew Jackson", "Rod Norman"], "Medium", "Diane Runs Away"],
    ["Where did Diane live after leaving the Butcher household?", "On the streets of London", ["At a boarding school", "In a hotel in Brighton", "With relatives in Manchester"], "Easy", "Diane Runs Away"],
    ["Which fellow teenage runaway befriended Diane while she was homeless?", "Disa O'Brien", ["Mandy Salter", "Hattie Tavernier", "Janine Butcher"], "Easy", "Diane Runs Away"],
    ["How did Diane's homeless friend Disa earn money to survive?", "Sex work", ["Delivering newspapers", "Working in a salon", "Selling fruit at the market"], "Medium", "Diane Runs Away"],
    ["Which artist persuaded Diane to pose for photographs?", "Matthew Taylor", ["Danny Whiting", "George Lawler", "Jackie Stone"], "Medium", "Diane Runs Away"],
    ["What did the artist Matthew Taylor make of Diane?", "A life-size sculpture", ["An oil painting of the Queen Vic", "A plaster cast of her hand", "A stained-glass window"], "Medium", "Diane Runs Away"],
    ["How did Frank react when Diane's sculpture appeared in Albert Square?", "He destroyed it", ["He displayed it in the café", "He sold it at auction", "He gave it to the council"], "Medium", "Diane Runs Away"],
    ["What did Diane paint on the outside of the Butcher family home after discovering her interest in art?", "A mural", ["A shop sign", "A portrait of Frank", "A map of London"], "Medium", "Diane Runs Away"],

    // DEN AND SHARON (12)
    ["What piece of jewellery did Sharon recognise on a market stall while searching for news of Den?", "His ring", ["His necklace", "His watch", "His cufflinks"], "Easy", "Den and Sharon"],
    ["Which market trader was selling Den Watts' signet ring when Sharon spotted it?", "Jackie Stone", ["Pete Beale", "Ian Beale", "Ali Osman"], "Medium", "Den and Sharon"],
    ["What was recovered from the canal and believed to be Den Watts?", "A body", ["A suitcase", "A stolen car", "A safe"], "Easy", "Den and Sharon"],
    ["What ceremony was held for Den Watts after the body was identified?", "A funeral", ["A wedding", "A christening", "A memorial concert"], "Easy", "Den and Sharon"],
    ["What did Sharon decide to investigate after losing her adoptive father?", "The identity of her birth parents", ["Who owned the Dagmar", "Her school records", "The history of the market"], "Easy", "Den and Sharon"],
    ["What was the name of Sharon Watts' birth mother?", "Carol Hanley", ["Jan Hammond", "Etta Tavernier", "Marge Green"], "Easy", "Den and Sharon"],
    ["Which actress played Sharon's birth mother Carol Hanley?", "Sheila White", ["Anita Dobson", "Pat Coombs", "Jacqui Gordon-Lawrence"], "Medium", "Den and Sharon"],
    ["Who visited Carol Hanley before Sharon met her?", "Michelle Fowler", ["Pat Butcher", "Ethel Skinner", "Cindy Beale"], "Medium", "Den and Sharon"],
    ["What was the first name of Carol Hanley's husband?", "Ron", ["Grant", "Phil", "Pete"], "Medium", "Den and Sharon"],
    ["What were the names of Carol Hanley's two sons?", "Kristopher and Jonathan", ["Mark and Martin", "Ricky and Danny", "Clyde and Lloyd"], "Medium", "Den and Sharon"],
    ["What was the name of Sharon's baby half-sister in the Hanley family?", "Diane", ["Vicki", "Hattie", "Janine"], "Medium", "Den and Sharon"],
    ["How did Carol eventually describe her feelings towards Sharon rather than accepting a mother-daughter bond?", "She saw Sharon as a friend", ["She thought Sharon was her cousin", "She claimed Sharon was an impostor", "She offered to adopt Sharon again"], "Medium", "Den and Sharon"],

    // NICK AND DOT (8)
    ["What big prize had Dot Cotton won before her son Nick returned claiming to have changed?", "Money at bingo", ["A car in a raffle", "A holiday on television", "A supermarket shopping spree"], "Easy", "Nick and Dot"],
    ["Approximately how much had Dot Cotton won at bingo?", "£10,000", ["£1,000", "£25,000", "£100,000"], "Medium", "Nick and Dot"],
    ["What did Nick Cotton claim had transformed him into a better man?", "A religious conversion", ["A new marriage", "A spell in the army", "A new job at the café"], "Easy", "Nick and Dot"],
    ["What sort of bogus accomplice did Nick use to convince Dot he had reformed?", "A fake priest", ["A fake police officer", "A fake doctor", "A fake solicitor"], "Medium", "Nick and Dot"],
    ["What was the first name of the bogus priest helping Nick deceive Dot?", "Alister", ["Harry", "Gregory", "Arthur"], "Medium", "Nick and Dot"],
    ["What was Nick planning to do to Dot to get her winnings?", "Poison her", ["Kidnap her", "Have her arrested", "Force her to sell her house"], "Easy", "Nick and Dot"],
    ["What did Nick ultimately do before Dot ate the poisoned food?", "He stopped her", ["He threw the food in the street", "He called an ambulance", "He gave it to the dog"], "Medium", "Nick and Dot"],
    ["Where was the tense EastEnders episode about Nick's poisoning attempt set?", "Inside Dot's home", ["Inside the Queen Victoria", "At the canal", "At the garage"], "Medium", "Nick and Dot"],

    // CINDY, IAN AND WICKSY (12)
    ["Why did Cindy's parents arrive late for Steven Beale's christening?", "Their car broke down", ["They missed their train", "They went to the wrong church", "They forgot the invitation"], "Medium", "Cindy, Ian and Wicksy"],
    ["What device allowed Kathy Beale to overhear Cindy and Simon discussing Steven's parentage?", "A baby monitor", ["A police radio", "A tape recorder", "A car telephone"], "Medium", "Cindy, Ian and Wicksy"],
    ["Which Beale family member overheard the secret before Ian learned the truth?", "Kathy Beale", ["Pauline Fowler", "Pete Beale", "Martin Fowler"], "Medium", "Cindy, Ian and Wicksy"],
    ["Which friend of Cindy and Ian also discovered the truth about Steven's father?", "Sharon Watts", ["Dot Cotton", "Ethel Skinner", "Mo Butcher"], "Medium", "Cindy, Ian and Wicksy"],
    ["What did Cindy finally admit to Ian about their son Steven?", "Ian was not Steven's father", ["Steven had a twin", "Steven had been adopted", "Steven was seriously ill"], "Easy", "Cindy, Ian and Wicksy"],
    ["How did Ian react dangerously after learning Cindy loved someone else?", "He crashed his van", ["He set fire to the café", "He jumped into the canal", "He challenged Simon to a boxing match"], "Easy", "Cindy, Ian and Wicksy"],
    ["Where did Ian later discover that Simon was Steven's biological father?", "Devon", ["Norfolk", "Cornwall", "Kent"], "Medium", "Cindy, Ian and Wicksy"],
    ["Who was driving Ian's catering van when its brakes failed on Christmas Day?", "Simon Wicks", ["Ian Beale", "Phil Mitchell", "Ricky Butcher"], "Medium", "Cindy, Ian and Wicksy"],
    ["What did Cindy and Simon do with baby Steven after their relationship was exposed?", "They left Walford together", ["They gave Steven to the Fowlers", "They moved into the Queen Vic", "They opened a shop in the Square"], "Easy", "Cindy, Ian and Wicksy"],
    ["Which birthday milestone did Ian Beale celebrate during the family upheaval?", "His twenty-first", ["His eighteenth", "His thirtieth", "His sixteenth"], "Medium", "Cindy, Ian and Wicksy"],
    ["What was the name of Ian Beale's expanding catering business?", "The Meal Machine", ["The Food Factory", "Walford Bites", "The Lunch Box"], "Medium", "Cindy, Ian and Wicksy"],
    ["Which corrupt council official tried to bribe Pete Beale to abandon the fight to save the market?", "Stuart Kendle", ["Jackie Stone", "George Lawler", "Eddie Royle"], "Medium", "Cindy, Ian and Wicksy"],

    // THE TAVERNIER FAMILY (15)
    ["Which family arrived in Walford headed by Celestine and Etta?", "The Taverniers", ["The Jacksons", "The Carpenters", "The Truemans"], "Easy", "The Tavernier Family"],
    ["Who was the strict father of the original Tavernier household?", "Celestine Tavernier", ["Jules Tavernier", "Clyde Tavernier", "Lloyd Tavernier"], "Medium", "The Tavernier Family"],
    ["Which actress originally played Etta Tavernier?", "Jacqui Gordon-Lawrence", ["Michelle Gayle", "Sheila White", "Pamela Salem"], "Medium", "The Tavernier Family"],
    ["What was Etta Tavernier's profession?", "Teacher", ["Nurse", "Hairdresser", "Solicitor"], "Medium", "The Tavernier Family"],
    ["Which faith played an important part in Celestine Tavernier's strict family rules?", "Christianity", ["Hinduism", "Judaism", "Buddhism"], "Medium", "The Tavernier Family"],
    ["Which elderly Tavernier was the family patriarch and grandfather?", "Jules Tavernier", ["Eddie Royle", "Harry Osborne", "John Royle"], "Easy", "The Tavernier Family"],
    ["Which actor played the elderly Jules Tavernier?", "Tommy Eytle", ["Leroy Golding", "Steven Woodcock", "Michael Melia"], "Medium", "The Tavernier Family"],
    ["Who was the eldest son of Celestine and Etta Tavernier?", "Clyde Tavernier", ["Lloyd Tavernier", "Kofi Tavernier", "Jules Tavernier"], "Easy", "The Tavernier Family"],
    ["Which actor played Clyde Tavernier?", "Steven Woodcock", ["Leroy Golding", "Ross Kemp", "Garey Bridges"], "Medium", "The Tavernier Family"],
    ["Which two Tavernier teenagers were twins?", "Hattie and Lloyd", ["Clyde and Hattie", "Clyde and Lloyd", "Hattie and Kofi"], "Easy", "The Tavernier Family"],
    ["Which actress played Hattie Tavernier?", "Michelle Gayle", ["Letitia Dean", "Sophie Lawrence", "Danniella Westbrook"], "Easy", "The Tavernier Family"],
    ["What blood disorder affected Lloyd Tavernier?", "Sickle-cell anaemia", ["Haemophilia", "Leukaemia", "Pernicious anaemia"], "Medium", "The Tavernier Family"],
    ["Which sport was Clyde Tavernier keen to pursue?", "Boxing", ["Cricket", "Tennis", "Darts"], "Medium", "The Tavernier Family"],
    ["What was the name of Clyde Tavernier's young son?", "Kofi", ["Lloyd", "Junior", "Rayif"], "Medium", "The Tavernier Family"],
    ["From which city did Clyde bring his son Kofi back to Walford?", "Bristol", ["Cardiff", "Leeds", "Nottingham"], "Medium", "The Tavernier Family"],

    // MO AND THE BUTCHERS (9)
    ["Which elderly Butcher family member was diagnosed with Alzheimer's disease?", "Mo Butcher", ["Pat Butcher", "Ethel Skinner", "Marge Green"], "Easy", "Mo and the Butchers"],
    ["What health problem began to cause Mo Butcher serious confusion?", "Memory loss", ["Blindness", "Deafness", "Paralysis"], "Easy", "Mo and the Butchers"],
    ["Which granddaughter did Mo sometimes mistake for her daughter Joan?", "Diane Butcher", ["Janine Butcher", "Hattie Tavernier", "Sharon Watts"], "Medium", "Mo and the Butchers"],
    ["What accident did Mo cause in her flat when she dropped a cigarette?", "A fire", ["A gas explosion", "A broken water pipe", "An electrical blackout"], "Medium", "Mo and the Butchers"],
    ["Who rescued Mo Butcher when her flat caught fire?", "Mark Fowler", ["Grant Mitchell", "Pete Beale", "Eddie Royle"], "Medium", "Mo and the Butchers"],
    ["What was the name of Frank Butcher's sister who came to help care for Mo?", "Joan Garwood", ["Clare Butcher", "Julie Cooper", "Carol Hanley"], "Medium", "Mo and the Butchers"],
    ["What was the first name of Joan Garwood's husband?", "Graham", ["Ron", "John", "Derek"], "Medium", "Mo and the Butchers"],
    ["To which Essex town did Mo move to stay with Joan and her husband?", "Colchester", ["Southend", "Basildon", "Clacton"], "Medium", "Mo and the Butchers"],
    ["Which little Butcher was taken for family therapy after causing concern at home?", "Janine Butcher", ["Diane Butcher", "Ricky Butcher", "Clare Butcher"], "Medium", "Mo and the Butchers"],

    // EDDIE ROYLE AND THE QUEEN VIC (7)
    ["Who took over as landlord of the Queen Victoria after Frank Butcher?", "Eddie Royle", ["Grant Mitchell", "Phil Mitchell", "Ian Beale"], "Easy", "Eddie Royle and the Queen Vic"],
    ["Which actor played Queen Vic landlord Eddie Royle?", "Michael Melia", ["Mike Reid", "Pavel Douglas", "Ross Kemp"], "Medium", "Eddie Royle and the Queen Vic"],
    ["What job had Eddie Royle done before running the Queen Vic?", "Police officer", ["Schoolteacher", "Chef", "Taxi driver"], "Easy", "Eddie Royle and the Queen Vic"],
    ["From whom did Eddie Royle buy the Queen Victoria?", "Frank Butcher", ["Den Watts", "Pat Beale", "James Willmott-Brown"], "Medium", "Eddie Royle and the Queen Vic"],
    ["Which country was Eddie Royle born in?", "Ireland", ["Scotland", "Wales", "England"], "Medium", "Eddie Royle and the Queen Vic"],
    ["Which young barmaid rented a room from Eddie at the pub?", "Sharon Watts", ["Diane Butcher", "Hattie Tavernier", "Michelle Fowler"], "Medium", "Eddie Royle and the Queen Vic"],
    ["What was the name of Eddie Royle's father who visited the Square?", "John Royle", ["Harry Royle", "Tom Royle", "George Royle"], "Medium", "Eddie Royle and the Queen Vic"],

    // MARK RETURNS (5)
    ["Which Fowler son returned to Walford after several years away?", "Mark Fowler", ["Martin Fowler", "Ian Beale", "Simon Wicks"], "Easy", "Mark Returns"],
    ["Which actor took over the role of Mark Fowler when he returned?", "Todd Carty", ["David Scarboro", "Adam Woodyatt", "Nick Berry"], "Easy", "Mark Returns"],
    ["Which children's television drama had made Todd Carty famous before EastEnders?", "Grange Hill", ["Byker Grove", "The Bill", "Press Gang"], "Medium", "Mark Returns"],
    ["Which Butcher daughter became a close friend of Mark when he returned?", "Diane Butcher", ["Janine Butcher", "Clare Butcher", "Cindy Beale"], "Easy", "Mark Returns"],
    ["How had Mark's personality changed since he was a runaway teenager?", "He was more settled and caring", ["He became a police officer", "He refused to speak to his family", "He moved in with the Mitchells"], "Medium", "Mark Returns"],

    // DISA AT CHRISTMAS (7)
    ["Which homeless young woman returned to Diane Butcher's life while heavily pregnant?", "Disa O'Brien", ["Marge Green", "Cindy Beale", "Hattie Tavernier"], "Easy", "Disa at Christmas"],
    ["Which actress originally played Disa O'Brien?", "Jan Graveson", ["Sophie Lawrence", "Michelle Gayle", "Sheila White"], "Medium", "Disa at Christmas"],
    ["In what sort of building did Disa give birth alone?", "A derelict building", ["The Queen Victoria", "A hospital ward", "A railway carriage"], "Medium", "Disa at Christmas"],
    ["On which holiday did Disa give birth to her daughter?", "Christmas Day", ["New Year's Day", "Easter Sunday", "Boxing Day"], "Medium", "Disa at Christmas"],
    ["Where did Disa leave her newborn daughter hoping someone would care for her?", "On Diane Butcher's doorstep", ["At the Queen Vic bar", "Outside the surgery", "At Dot Cotton's launderette"], "Easy", "Disa at Christmas"],
    ["What container did Disa use when leaving her baby for Diane to find?", "A cardboard box", ["A wicker basket", "A suitcase", "A pram"], "Medium", "Disa at Christmas"],
    ["What name did Diane and Mark initially give Disa's baby?", "Billie", ["Jasmine", "Annie", "Vicki"], "Medium", "Disa at Christmas"],

    // HARRY OSBORNE (3)
    ["Which mysterious elderly visitor returned to Albert Square after decades away?", "Harry Osborne", ["John Royle", "Eddie Royle", "Benny Bloom"], "Medium", "Harry Osborne"],
    ["Which relation of Lou Beale had Harry Osborne loved before the Second World War?", "Her sister Doris", ["Her daughter Pauline", "Her cousin Ethel", "Her mother"], "Medium", "Harry Osborne"],
    ["Whose pet dog discovered Harry Osborne after he died on a bench?", "Ethel Skinner's", ["Sharon Watts'", "Frank Butcher's", "Dot Cotton's"], "Medium", "Harry Osborne"],

];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6604 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1990', topic],
        dailyEligible: true
    };
});

module.exports = questions;
