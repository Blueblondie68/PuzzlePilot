// quiz_pack229.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1991, new loves and old crimes
// 100 questions: tv_6704 to tv_6803
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // MARK FOWLER'S SECRET (12)
    ["Which friend was the first person in Walford that Mark Fowler told about his HIV diagnosis?", "Diane Butcher", ["Sharon Watts", "Michelle Fowler", "Hattie Tavernier"], "Easy", "Mark Fowler"],
    ["Which virus did Mark Fowler reveal he was living with?", "HIV", ["Hepatitis B", "Influenza", "Epstein-Barr virus"], "Easy", "Mark Fowler"],
    ["On which festive day did Mark finally tell his parents he was HIV-positive?", "Boxing Day", ["Christmas Eve", "New Year's Eve", "Christmas Day"], "Medium", "Mark Fowler"],
    ["Which couple struggled to come to terms with their son Mark's diagnosis?", "Arthur and Pauline Fowler", ["Pete and Kathy Beale", "Frank and Pat Butcher", "Celestine and Etta Tavernier"], "Easy", "Mark Fowler"],
    ["What was the name of Mark Fowler's former girlfriend who returned to see him?", "Gill Robinson", ["Rachel Kominski", "Disa O'Brien", "Lorraine Stevens"], "Medium", "Mark Fowler"],
    ["In which English city had Mark Fowler met Gill Robinson?", "Newcastle", ["Liverpool", "Bristol", "Sheffield"], "Medium", "Mark Fowler"],
    ["Which actress played Mark Fowler's former girlfriend Gill?", "Susanna Dawson", ["Jacquetta May", "Jan Graveson", "Sheila White"], "Medium", "Mark Fowler"],
    ["Which HIV and sexual health charity offered Mark Fowler counselling?", "Terrence Higgins Trust", ["British Heart Foundation", "Samaritans", "Mind"], "Medium", "Mark Fowler"],
    ["What kind of help did Diane Butcher encourage Mark to seek as he struggled with his diagnosis?", "Counselling", ["Legal representation", "Driving lessons", "Speech therapy"], "Easy", "Mark Fowler"],
    ["Which young chef Mark knew through an HIV support charity urged him to be open with his parents?", "Joe Wallace", ["Steve Elliot", "Kevin Masters", "Ricky Butcher"], "Medium", "Mark Fowler"],
    ["Which new Walford resident began a relationship with Mark Fowler while his family remained unaware of his HIV status?", "Rachel Kominski", ["Karen", "Eibhlin O'Donnell", "Lorraine Stevens"], "Medium", "Mark Fowler"],
    ["At which Walford business did Mark and Diane set up a darkroom for photography?", "The Butchers' bed and breakfast", ["The Queen Victoria", "The Arches", "Ian Beale's café"], "Medium", "Mark Fowler"],

    // DISA AND JASMINE (9)
    ["What name did Disa O'Brien give her daughter after Diane and Mark had called the baby Billie?", "Jasmine", ["Annie", "Vicki", "Rebecca"], "Easy", "Disa and Jasmine"],
    ["Which man kidnapped Disa O'Brien's infant daughter?", "Ken Raynor", ["Nick Cotton", "Kevin Masters", "Paul Priestly"], "Easy", "Disa and Jasmine"],
    ["What relationship did Ken Raynor falsely claim to have with Disa when approaching Dot?", "Her uncle", ["Her brother", "Her grandfather", "Her cousin"], "Medium", "Disa and Jasmine"],
    ["Who was looking after Disa's baby when Ken Raynor deceived her into letting him near the child?", "Dot Cotton", ["Ethel Skinner", "Pat Butcher", "Sharon Watts"], "Medium", "Disa and Jasmine"],
    ["Who helped the police trick Ken Raynor into returning Disa's kidnapped baby?", "Dot Cotton", ["Ian Beale", "Pete Beale", "Grant Mitchell"], "Medium", "Disa and Jasmine"],
    ["Which volunteer organisation provided a safe setting for Disa to talk to Kathy Beale?", "The Samaritans", ["Citizens Advice", "The Salvation Army", "Age Concern"], "Medium", "Disa and Jasmine"],
    ["What was the name of Disa O'Brien's mother, who came to Walford to take her home?", "Sandra Raynor", ["Etta Tavernier", "Joan Garwood", "Carol Hanley"], "Medium", "Disa and Jasmine"],
    ["Where did Disa and her mother confront Ken Raynor after he was arrested?", "In prison", ["At the Queen Vic", "In the market", "At the launderette"], "Medium", "Disa and Jasmine"],
    ["To which city did Disa return with her daughter after reconciling with her mother?", "Sunderland", ["Newcastle", "Manchester", "Leeds"], "Medium", "Disa and Jasmine"],

    // RICKY, SAM AND PEGGY (10)
    ["Which teenage couple secretly eloped to get married despite their families' objections?", "Ricky Butcher and Sam Mitchell", ["Ian Beale and Cindy Williams", "Mark Fowler and Diane Butcher", "Clyde Tavernier and Michelle Fowler"], "Easy", "Ricky and Sam"],
    ["To which Scottish village did Ricky and Sam travel to get married?", "Gretna Green", ["Fort William", "Pitlochry", "Ballater"], "Easy", "Ricky and Sam"],
    ["Which two Walford families raced to Scotland to try to stop Ricky and Sam's wedding?", "The Butchers and Mitchells", ["The Fowlers and Beales", "The Taverniers and Osmans", "The Carpenters and Karims"], "Easy", "Ricky and Sam"],
    ["Which newly arrived Mitchell matriarch fiercely objected to her daughter Sam marrying Ricky?", "Peggy Mitchell", ["Mo Butcher", "Etta Tavernier", "Pat Butcher"], "Easy", "Ricky and Sam"],
    ["Which actress first portrayed Peggy Mitchell before Barbara Windsor took the role?", "Jo Warne", ["Pat Coombs", "Edna Doré", "Pam St Clement"], "Easy", "Ricky and Sam"],
    ["Which couple from Ricky's family gave their blessing to the elopement?", "Frank and Pat Butcher", ["Pete and Kathy Beale", "Arthur and Pauline Fowler", "Ian and Cindy Beale"], "Medium", "Ricky and Sam"],
    ["What ceremony did Ricky and Sam later hold in Walford for friends and relatives?", "A church blessing", ["A second civil marriage", "A christening", "An engagement party"], "Medium", "Ricky and Sam"],
    ["Which minicab firm owner was Peggy Mitchell's boyfriend when she first appeared?", "Kevin Masters", ["Frank Butcher", "Eddie Royle", "Laurie Bates"], "Medium", "Ricky and Sam"],
    ["What type of transport business did Peggy's boyfriend Kevin Masters own?", "A minicab company", ["A bus company", "A motorcycle dealership", "A haulage depot"], "Medium", "Ricky and Sam"],
    ["What surname did Sam Mitchell take after her marriage to Ricky?", "Butcher", ["Beale", "Fowler", "Tavernier"], "Easy", "Ricky and Sam"],

    // EDDIE ROYLE'S FINAL YEAR (13)
    ["Which Queen Victoria landlord was fatally stabbed in Albert Square?", "Eddie Royle", ["Den Watts", "Frank Butcher", "Pete Beale"], "Easy", "Eddie Royle"],
    ["Who was responsible for the stabbing of Queen Vic landlord Eddie Royle?", "Nick Cotton", ["Grant Mitchell", "Clyde Tavernier", "Phil Mitchell"], "Easy", "Eddie Royle"],
    ["What weapon was used in Eddie Royle's killing?", "A knife", ["A gun", "A hammer", "A metal bar"], "Easy", "Eddie Royle"],
    ["Which dog was Eddie Royle walking shortly before he was killed?", "Roly", ["Willy", "Wellard", "Sugar"], "Medium", "Eddie Royle"],
    ["Which Mitchell brother seriously assaulted Eddie Royle earlier in the year?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Eddie Royle"],
    ["What had Eddie Royle done to Sharon that sparked Grant Mitchell's violent attack?", "Made a romantic advance towards her", ["Fired her for stealing", "Refused to pay her wages", "Sold her belongings"], "Medium", "Eddie Royle"],
    ["What major medical treatment did Eddie require after Grant's assault?", "Brain surgery", ["A heart transplant", "A kidney transplant", "An emergency appendicectomy"], "Medium", "Eddie Royle"],
    ["Which former Irish girlfriend returned to Eddie Royle's life?", "Eibhlin O'Donnell", ["Carol Hanley", "Rachel Kominski", "Lorraine Stevens"], "Medium", "Eddie Royle"],
    ["Which actress portrayed Eddie Royle's former girlfriend Eibhlin O'Donnell?", "Mary Conlon", ["Jacquetta May", "Louise Plowright", "Linda Henry"], "Medium", "Eddie Royle"],
    ["What did Eddie Royle propose to Eibhlin O'Donnell after his recovery?", "Marriage", ["Moving to Australia", "Opening a restaurant", "Buying a canal boat"], "Medium", "Eddie Royle"],
    ["Where did Eibhlin move in with Eddie after accepting his proposal?", "The Queen Victoria", ["The Butchers' B&B", "The Fowlers' house", "The Arches"], "Medium", "Eddie Royle"],
    ["Which Walford resident did Eddie Royle begin training as a boxer?", "Clyde Tavernier", ["Ricky Butcher", "Mark Fowler", "Ian Beale"], "Medium", "Eddie Royle"],
    ["What dishonest request did Eddie and another trainer make to Clyde before a boxing match?", "Deliberately lose the fight", ["Fight under another name", "Use an illegal weight advantage", "Pretend to be injured before the bout"], "Medium", "Eddie Royle"],

    // CLYDE, MICHELLE AND THE MURDER INVESTIGATION (10)
    ["Which Tavernier family member was wrongly accused of Eddie Royle's murder?", "Clyde Tavernier", ["Lloyd Tavernier", "Celestine Tavernier", "Jules Tavernier"], "Easy", "Clyde and Michelle"],
    ["What did Clyde do on finding Eddie Royle's body that later made him look guilty?", "Picked up the murder weapon", ["Took Eddie's wallet", "Washed blood from the pavement", "Hid Eddie's car"], "Medium", "Clyde and Michelle"],
    ["Who claimed to have seen Clyde standing over Eddie Royle's body?", "Nick Cotton", ["Arthur Fowler", "Frank Butcher", "Ethel Skinner"], "Medium", "Clyde and Michelle"],
    ["Which woman helped Clyde escape Walford after he was accused of murder?", "Michelle Fowler", ["Kathy Beale", "Sharon Watts", "Rachel Kominski"], "Easy", "Clyde and Michelle"],
    ["What was the name of Clyde Tavernier's young son who went on the run with him?", "Kofi", ["Lloyd", "Junior", "Steven"], "Easy", "Clyde and Michelle"],
    ["Which young girl accompanied Michelle Fowler during Clyde's attempt to escape?", "Vicki Fowler", ["Janine Butcher", "Hattie Tavernier", "Jasmine O'Brien"], "Medium", "Clyde and Michelle"],
    ["Which country did Clyde and Michelle hope to reach while fleeing the police?", "France", ["Spain", "Ireland", "Germany"], "Medium", "Clyde and Michelle"],
    ["In which English city was Clyde caught before he could leave the country?", "Portsmouth", ["Dover", "Southampton", "Plymouth"], "Medium", "Clyde and Michelle"],
    ["Which young man provided evidence that helped clear Clyde of Eddie Royle's murder?", "Joe Wallace", ["Steve Elliot", "Danny Whiting", "Kevin Masters"], "Medium", "Clyde and Michelle"],
    ["What did Joe Wallace say he saw Nick Cotton doing on the night Eddie was killed?", "Climbing down a drainpipe", ["Driving away in a taxi", "Jumping into the canal", "Leaving the Queen Vic cellar"], "Medium", "Clyde and Michelle"],

    // SHARON AND GRANT (9)
    ["Which Mitchell brother proposed marriage to Sharon Watts?", "Grant Mitchell", ["Phil Mitchell", "Billy Mitchell", "Jamie Mitchell"], "Easy", "Sharon and Grant"],
    ["Which pub did Sharon want to run again before agreeing to marry Grant?", "The Queen Victoria", ["The Dagmar", "The Albert", "The Prince Albert"], "Easy", "Sharon and Grant"],
    ["What legal action did Sharon take when Eddie Royle dismissed her from the pub?", "An unfair dismissal claim", ["A divorce petition", "A claim for criminal injuries", "An injunction over the market"], "Medium", "Sharon and Grant"],
    ["How did Sharon's unfair dismissal case against Eddie Royle end?", "She won her case", ["She withdrew it", "The case was dismissed", "Eddie won damages from her"], "Medium", "Sharon and Grant"],
    ["Who helped Sharon return to the Queen Vic as landlady after Eddie Royle's death?", "Grant Mitchell", ["Ian Beale", "Arthur Fowler", "Frank Butcher"], "Easy", "Sharon and Grant"],
    ["What wedding surprise did Grant arrange for Sharon over Christmas?", "A ceremony on Boxing Day", ["A wedding in Scotland", "A wedding aboard a boat", "A wedding on New Year's Day"], "Easy", "Sharon and Grant"],
    ["Where did Sharon and Grant marry in their surprise ceremony?", "A register office", ["The Queen Vic bar", "Walford's market", "The local hospital"], "Medium", "Sharon and Grant"],
    ["Which friend persuaded Sharon to go ahead with Grant's surprise wedding?", "Michelle Fowler", ["Pat Butcher", "Diane Butcher", "Kathy Beale"], "Medium", "Sharon and Grant"],
    ["Which song did Grant sing to Sharon during their wedding celebrations?", "You'll Never Walk Alone", ["Unchained Melody", "Wonderful Tonight", "Always on My Mind"], "Medium", "Sharon and Grant"],

    // THE TAVERNIERS (8)
    ["Which member of the Tavernier family discovered she was pregnant while considering sterilisation?", "Etta Tavernier", ["Hattie Tavernier", "Michelle Fowler", "Kathy Beale"], "Medium", "The Taverniers"],
    ["What decision about her unexpected pregnancy caused a rift in Etta Tavernier's marriage?", "She chose an abortion", ["She planned to give the baby up for adoption", "She decided to move abroad", "She kept the pregnancy secret until birth"], "Medium", "The Taverniers"],
    ["Which man strongly opposed Etta's decision to end her pregnancy?", "Celestine Tavernier", ["Clyde Tavernier", "Pete Beale", "Eddie Royle"], "Medium", "The Taverniers"],
    ["What beliefs influenced Celestine Tavernier's opposition to his wife's decision?", "His Christian faith", ["A family superstition", "His political party's rules", "Advice from his employer"], "Medium", "The Taverniers"],
    ["Which inherited blood condition was a concern in Etta Tavernier's pregnancy?", "Sickle-cell anaemia", ["Haemophilia", "Cystic fibrosis", "Thalassaemia"], "Medium", "The Taverniers"],
    ["Which woman from Celestine Tavernier's church showed a romantic interest in him?", "Yvonne", ["Karen", "Lorraine", "Rachel"], "Medium", "The Taverniers"],
    ["What sport brought Clyde Tavernier supporters together for a major local competition?", "Boxing", ["Cricket", "Football", "Running"], "Easy", "The Taverniers"],
    ["What happened to Celestine and Etta's marriage after their dispute over the pregnancy?", "They reconciled", ["They divorced immediately", "Celestine emigrated alone", "Etta married another man"], "Medium", "The Taverniers"],

    // RACHEL AND MICHELLE (8)
    ["Which new university lecturer became a friend and landlord to Michelle Fowler?", "Rachel Kominski", ["Eibhlin O'Donnell", "Julie Cooper", "Lorraine Stevens"], "Medium", "Rachel and Michelle"],
    ["Which actress first played Rachel Kominski?", "Jacquetta May", ["Mary Conlon", "Louise Plowright", "Susan Tully"], "Medium", "Rachel and Michelle"],
    ["At which address did Rachel Kominski own a house and take in lodgers?", "55 Victoria Road", ["45 Albert Square", "10 Turpin Road", "27 Albert Square"], "Medium", "Rachel and Michelle"],
    ["Which singer became Rachel Kominski's first lodger instead of Michelle?", "Karen", ["Eibhlin", "Gill", "Lorraine"], "Medium", "Rachel and Michelle"],
    ["Which market trader mistook Rachel's suggestion of a drink for a romantic date?", "Pete Beale", ["Frank Butcher", "Arthur Fowler", "Laurie Bates"], "Medium", "Rachel and Michelle"],
    ["What was the name of Rachel's former boyfriend who arrived while her shelves were being fitted?", "Russell Nash", ["Kevin Masters", "Eddie Royle", "George Lawler"], "Medium", "Rachel and Michelle"],
    ["What educational step did Rachel encourage Michelle Fowler to take?", "Apply to college", ["Train as a nurse", "Return to school for GCSEs", "Take a driving test"], "Medium", "Rachel and Michelle"],
    ["Which Fowler man began dating Rachel Kominski later in the year?", "Mark Fowler", ["Arthur Fowler", "Martin Fowler", "Pete Beale"], "Medium", "Rachel and Michelle"],

    // IAN'S MEAL MACHINE AND NEW CHEFS (9)
    ["Which young Tavernier worked with Ian Beale as he built up his catering business?", "Hattie Tavernier", ["Clyde Tavernier", "Lloyd Tavernier", "Jules Tavernier"], "Easy", "Ian's Meal Machine"],
    ["Which Turpin Road premises did Ian turn into a base for The Meal Machine?", "The former Dagmar premises", ["The Queen Victoria cellar", "The Arches garage", "The launderette"], "Medium", "Ian's Meal Machine"],
    ["Which young chef did Ian dismiss after learning he was HIV-positive?", "Joe Wallace", ["Steve Elliot", "Kevin Masters", "Paul Priestly"], "Medium", "Ian's Meal Machine"],
    ["How did Ian react to learning that one of his kitchen workers had HIV?", "He disinfected the kitchen", ["He gave everyone a pay rise", "He permanently closed the café", "He called the police"], "Medium", "Ian's Meal Machine"],
    ["What kind of work was Joe Wallace looking for when he first arrived in Walford?", "Labouring on a renovation site", ["Driving a delivery van", "Running a market stall", "Serving drinks in a pub"], "Medium", "Ian's Meal Machine"],
    ["To which Oxfordshire town did Joe Wallace return to live with his parents?", "Cowley", ["Witney", "Banbury", "Henley"], "Medium", "Ian's Meal Machine"],
    ["Which ambitious young cook arrived as an old school friend of Hattie and Sam?", "Steve Elliot", ["Joe Wallace", "Russell Nash", "Kevin Masters"], "Medium", "Ian's Meal Machine"],
    ["Which actor portrayed newcomer Steve Elliot?", "Mark Monero", ["Jason Rush", "Steven Woodcock", "Gary Powell"], "Medium", "Ian's Meal Machine"],
    ["What was Steve Elliot's job before Ian took an interest in his cooking?", "Pizza chef", ["Market porter", "Taxi driver", "Butcher"], "Medium", "Ian's Meal Machine"],

    // DOT, CHARLIE AND NICK (7)
    ["Which husband of Dot Cotton died in a road accident?", "Charlie Cotton", ["Nick Cotton", "Eddie Royle", "Tom Clements"], "Easy", "Dot and Nick"],
    ["What vehicle was Charlie Cotton driving when he died?", "A lorry", ["A motorbike", "A taxi", "A bus"], "Medium", "Dot and Nick"],
    ["Which addiction was Nick Cotton struggling with when he returned to Dot's life?", "Heroin", ["Alcohol", "Gambling", "Prescription sleeping pills"], "Medium", "Dot and Nick"],
    ["What did Nick Cotton fraudulently offer to sell without his mother's agreement?", "Dot's home", ["The Queen Victoria", "The café", "The Arches garage"], "Medium", "Dot and Nick"],
    ["Which couple paid Nick a deposit for a house they thought they were buying?", "Dave and Irene Carter", ["Frank and Pat Butcher", "Celestine and Etta Tavernier", "Arthur and Pauline Fowler"], "Medium", "Dot and Nick"],
    ["How much deposit did Nick take from Dave and Irene Carter?", "£300", ["£100", "£500", "£1,000"], "Medium", "Dot and Nick"],
    ["Who uncovered Nick's fraudulent house sale and promised the couple their money back?", "Dot Cotton", ["Ethel Skinner", "Sharon Watts", "Mo Butcher"], "Medium", "Dot and Nick"],

    // PAT AND LORRAINE (5)
    ["Which woman befriended Pat Butcher and then tried to blackmail her?", "Lorraine Stevens", ["Rachel Kominski", "Disa O'Brien", "Eibhlin O'Donnell"], "Medium", "Pat and Lorraine"],
    ["Which actress first played Lorraine Stevens, years before becoming known as Shirley Carter?", "Linda Henry", ["Jacquetta May", "Mary Conlon", "Pamela Salem"], "Medium", "Pat and Lorraine"],
    ["Where did Pat Butcher first meet Lorraine Stevens?", "In a bar", ["At the surgery", "On a train", "At a church service"], "Medium", "Pat and Lorraine"],
    ["What did Lorraine Stevens threaten to tell Frank about Pat?", "That Pat had been seeking other men in bars", ["That Pat had stolen money from the market", "That Pat had bought a second house", "That Pat had secretly married another man"], "Medium", "Pat and Lorraine"],
    ["What did Lorraine ask Pat to provide when she turned up at the Butchers' home?", "A place to stay", ["A job at the car lot", "A loan to buy a salon", "A ticket to Ireland"], "Medium", "Pat and Lorraine"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6704 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1991', topic],
        dailyEligible: true
    };
});

module.exports = questions;
