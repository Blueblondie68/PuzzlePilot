// quiz_pack227.js
// PuzzlePilot - The Bigggggg Quiz
// Television: EastEnders - 1989, secrets and new beginnings
// 100 questions: tv_6504 to tv_6603
// Leave quiz_bank.js unchanged until the end of the session.

const facts = [
    // DEN'S CANAL-SIDE DISAPPEARANCE (8)
    ["Where was Den Watts being taken when gangsters intercepted his vehicle?", "To court", ["To hospital", "To an airport", "To the Queen Victoria"], "Medium", "Den's Disappearance"],
    ["Which resident did Den arrange to meet after escaping his kidnappers?", "Michelle Fowler", ["Angie Watts", "Kathy Beale", "Pat Butcher"], "Easy", "Den's Disappearance"],
    ["Which child did Den hope to say goodbye to before fleeing the country?", "Vicki Fowler", ["Steven Beale", "Janine Butcher", "Martin Fowler"], "Medium", "Den's Disappearance"],
    ["Where did Den's final secret meeting with Michelle take place?", "Beside a canal", ["On the roof of the Queen Vic", "At a railway station", "Inside the Dagmar"], "Easy", "Den's Disappearance"],
    ["What flowers concealed the gun used to shoot Den Watts?", "Daffodils", ["Roses", "Lilies", "Carnations"], "Easy", "Den's Disappearance"],
    ["Who unknowingly led Den's enemies to his secret meeting place?", "Michelle Fowler", ["Sharon Watts", "Pauline Fowler", "Jan Hammond"], "Medium", "Den's Disappearance"],
    ["What happened to Den after the gunman fired at him?", "He fell into the canal", ["He escaped on a train", "He drove away in a taxi", "He hid in the market"], "Easy", "Den's Disappearance"],
    ["What was missing after police searched the canal for Den?", "His body", ["His car", "His passport", "His wedding ring"], "Medium", "Den's Disappearance"],

    // KATHY, DONNA AND THE WATTS SECRET (10)
    ["Which husband did Kathy Beale leave after their marriage deteriorated?", "Pete Beale", ["Arthur Fowler", "Frank Butcher", "Den Watts"], "Easy", "Kathy and Donna"],
    ["How did Kathy get James Willmott-Brown arrested again while he was on bail?", "She arranged a meeting and brought the police", ["She secretly recorded him robbing a shop", "She found him using a false passport", "She caught him setting fire to a car"], "Medium", "Kathy and Donna"],
    ["What prison sentence did James Willmott-Brown receive for raping Kathy?", "Three years", ["Six months", "Seven years", "Ten years"], "Medium", "Kathy and Donna"],
    ["Which troubled young woman died of a heroin overdose in Dot Cotton's home?", "Donna Ludlow", ["Mary Smith", "Cindy Williams", "Tina Hopkins"], "Easy", "Kathy and Donna"],
    ["Who discovered Donna Ludlow's body after her overdose?", "Dot Cotton", ["Ian Beale", "Sue Osman", "Angie Watts"], "Medium", "Kathy and Donna"],
    ["Which of Donna Ludlow's friends blamed himself after her death?", "Rod Norman", ["Frank Butcher", "Duncan Boyd", "Simon Wicks"], "Medium", "Kathy and Donna"],
    ["What false story did Donna tell neighbours about her adoptive parents?", "That they had died in a car crash", ["That they had won the lottery", "That they had moved to America", "That they owned the Queen Victoria"], "Medium", "Kathy and Donna"],
    ["Which teenage girl discovered that her best friend Michelle's daughter was also her half-sister?", "Sharon Watts", ["Diane Butcher", "Cindy Williams", "Tina Hopkins"], "Easy", "Kathy and Donna"],
    ["What secret did Michelle finally tell Sharon about Vicki?", "Den Watts was Vicki's father", ["Vicki had been adopted", "Vicki was born abroad", "Angie was Vicki's mother"], "Easy", "Kathy and Donna"],
    ["Which member of Michelle's own family learned Den was Vicki's father soon after Sharon?", "Arthur Fowler", ["Martin Fowler", "Mark Fowler", "Lou Beale"], "Medium", "Kathy and Donna"],

    // CINDY, SIMON, IAN AND STEVEN (11)
    ["Which Beale son became engaged to Cindy Williams?", "Ian Beale", ["Pete Beale", "Mark Fowler", "Simon Wicks"], "Easy", "Cindy and Ian"],
    ["With whom did Cindy secretly sleep while engaged to Ian?", "Simon Wicks", ["Kelvin Carpenter", "Barry Clark", "Duncan Boyd"], "Easy", "Cindy and Ian"],
    ["Where did Cindy and Simon have the encounter that led to her pregnancy?", "The Queen Victoria", ["The launderette", "The Dagmar", "The surgery"], "Medium", "Cindy and Ian"],
    ["Which man was actually the biological father of Cindy's first child?", "Simon Wicks", ["Ian Beale", "Pete Beale", "Frank Butcher"], "Easy", "Cindy and Ian"],
    ["Who did Cindy allow to believe he was the father of her baby?", "Ian Beale", ["Arthur Fowler", "Den Watts", "Matthew Jackson"], "Easy", "Cindy and Ian"],
    ["Who served as Ian Beale's best man at his wedding to Cindy?", "Simon Wicks", ["Arthur Fowler", "Frank Butcher", "Lofty Holloway"], "Medium", "Cindy and Ian"],
    ["Where did Ian Beale and Cindy Williams marry?", "A register office", ["The Queen Victoria", "St Paul's Cathedral", "The Walford surgery"], "Medium", "Cindy and Ian"],
    ["Which Fowler family member attended Cindy as a friend on her wedding day?", "Michelle Fowler", ["Pauline Fowler", "Vicki Fowler", "Kathy Beale"], "Medium", "Cindy and Ian"],
    ["Which parent of Ian walked out of the wedding ceremony after arguing with Cindy?", "Pete Beale", ["Kathy Beale", "Pauline Fowler", "Lou Beale"], "Medium", "Cindy and Ian"],
    ["What was the name of Cindy's baby son born over Christmas?", "Steven", ["Peter", "Bobby", "Mark"], "Easy", "Cindy and Ian"],
    ["To which county had Cindy Williams' parents moved before her wedding to Ian?", "Devon", ["Kent", "Norfolk", "Cornwall"], "Medium", "Cindy and Ian"],

    // FRANK, PAT AND THE BUTCHERS (11)
    ["Which couple celebrated a big East End wedding with a street party?", "Frank Butcher and Pat Wicks", ["Pete Beale and Kathy Beale", "Arthur and Pauline Fowler", "Ali and Sue Osman"], "Easy", "The Butcher Wedding"],
    ["Which formidable family member organised the festivities for Frank and Pat's wedding?", "Mo Butcher", ["Dot Cotton", "Pauline Fowler", "Ethel Skinner"], "Easy", "The Butcher Wedding"],
    ["What sort of transport carried Frank and Pat away from their wedding celebrations?", "A horse-drawn cart", ["A red double-decker bus", "A speedboat", "A limousine"], "Medium", "The Butcher Wedding"],
    ["Which young Butcher daughter joined Frank's household after his wedding to Pat?", "Janine Butcher", ["Bianca Butcher", "Tiffany Butcher", "Diane Butcher"], "Easy", "The Butcher Wedding"],
    ["Which actress first played the young Janine Butcher?", "Rebecca Michael", ["Charlie Brooks", "Sophie Lawrence", "Lucy Foxell"], "Medium", "The Butcher Wedding"],
    ["Which older Butcher sister had been caring for Janine?", "Clare Butcher", ["Diane Butcher", "Carol Jackson", "Sharon Watts"], "Medium", "The Butcher Wedding"],
    ["Which character was Janine Butcher's new stepmother?", "Pat Butcher", ["Kathy Beale", "Pauline Fowler", "Cindy Beale"], "Easy", "The Butcher Wedding"],
    ["What business did Frank Butcher set up to sell second-hand vehicles?", "A car lot", ["A petrol station", "A motorbike shop", "A driving school"], "Easy", "The Butcher Wedding"],
    ["Which Square business did Pat begin running after the Butchers moved out of the Queen Vic?", "A bed and breakfast", ["A bakery", "A florist", "A record shop"], "Medium", "The Butcher Wedding"],
    ["Which Butcher sibling began a difficult romance with builder Paul Priestly?", "Diane Butcher", ["Janine Butcher", "Clare Butcher", "Ricky Butcher"], "Easy", "The Butcher Wedding"],
    ["To which city was Clare Butcher moving when Janine was left in Frank's care?", "Manchester", ["Birmingham", "Leeds", "Bristol"], "Medium", "The Butcher Wedding"],

    // THE OSMAN FAMILY CRISIS (10)
    ["Which woman told Sue Osman that Ali had been unfaithful with her?", "Donna Ludlow", ["Jan Hammond", "Pat Butcher", "Cindy Williams"], "Medium", "The Osman Family"],
    ["Which relative did Sue kiss to make Ali jealous after learning about his affair?", "Mehmet Osman", ["Saeed Jeffery", "Pete Beale", "Tony Carpenter"], "Medium", "The Osman Family"],
    ["Which woman left Walford with her three children after another Osman family argument?", "Guizin Osman", ["Naima Jeffery", "Sue Osman", "Sufia Karim"], "Medium", "The Osman Family"],
    ["At whose grave did Ali find Sue with their younger son?", "Hassan Osman's", ["Lou Beale's", "Tom Clements'", "Reg Cox's"], "Easy", "The Osman Family"],
    ["What did Ali do when he found Sue visiting Hassan's grave?", "He took Little Ali away", ["He asked her to remarry", "He offered her the café", "He called a taxi to take them on holiday"], "Medium", "The Osman Family"],
    ["Where was Sue Osman admitted after her mental health deteriorated?", "A psychiatric hospital", ["A police station", "A nursing home", "A prison"], "Medium", "The Osman Family"],
    ["Which young entrepreneur gained control of Ali Osman's café?", "Ian Beale", ["Ricky Butcher", "Simon Wicks", "Frank Butcher"], "Easy", "The Osman Family"],
    ["What crime did Ali attempt at his café as his finances collapsed?", "Arson for insurance money", ["Selling stolen jewellery", "Forging cheques", "Smuggling alcohol"], "Medium", "The Osman Family"],
    ["What expensive surprise did Ian encounter after taking over the café?", "The kitchen equipment was repossessed", ["The café had been sold to the council", "The café was flooded by a burst river", "The staff had all moved abroad"], "Medium", "The Osman Family"],
    ["To where did Ali Osman eventually leave Walford with his young son?", "Northern Cyprus", ["Spain", "Australia", "Scotland"], "Medium", "The Osman Family"],

    // ARTHUR'S TELEVISION TRIUMPH (6)
    ["What was the name of the television game show on which Arthur Fowler appeared?", "Cat and Mouse", ["The Price Is Right", "Blockbusters", "Sale of the Century"], "Easy", "Arthur's Quiz Show"],
    ["Who entered Arthur Fowler for the Cat and Mouse quiz show?", "Pauline Fowler", ["Pete Beale", "Dot Cotton", "Den Watts"], "Medium", "Arthur's Quiz Show"],
    ["Where did Albert Square's residents gather to watch Arthur on television?", "The Queen Victoria", ["The launderette", "The Dagmar", "The community centre"], "Easy", "Arthur's Quiz Show"],
    ["How did Arthur fare when he appeared on Cat and Mouse?", "He won", ["He was eliminated first", "He walked out", "He came third"], "Easy", "Arthur's Quiz Show"],
    ["Which broadcaster did Arthur identify to answer the quiz show's decisive question?", "Tony Blackburn", ["Terry Wogan", "John Peel", "Jimmy Savile"], "Medium", "Arthur's Quiz Show"],
    ["What prize did Arthur take home from Cat and Mouse?", "A holiday for two and £2,000 spending money", ["A new car and £10,000", "A house in Spain", "A television and £500"], "Medium", "Arthur's Quiz Show"],

    // CARMEL AND MATTHEW (8)
    ["Which health visitor married Matthew Jackson in a troubled Walford wedding?", "Carmel Roberts", ["Debbie Wilkins", "Kathy Beale", "Sue Osman"], "Easy", "Carmel and Matthew"],
    ["Which relative did Carmel invite to the wedding despite Matthew's objections?", "His estranged mother", ["His former wife", "His stepdaughter", "His uncle"], "Medium", "Carmel and Matthew"],
    ["What was the name of Matthew Jackson's estranged mother?", "Lynne Jackson", ["Maxine Roberts", "June Watkins", "Edie Smith"], "Medium", "Carmel and Matthew"],
    ["Which of Carmel's sisters pressured her to take responsibility for Junior and Aisha?", "Maxine Roberts", ["Diane Butcher", "Michelle Fowler", "Sharon Watts"], "Medium", "Carmel and Matthew"],
    ["What behaviour by Matthew Jackson ultimately destroyed his marriage?", "Domestic violence", ["Gambling away the family home", "Having a secret second wife", "Stealing from the surgery"], "Easy", "Carmel and Matthew"],
    ["Which young relative intervened violently to protect Carmel from her husband?", "Junior Roberts", ["Aisha Roberts", "Darren Roberts", "Kelvin Carpenter"], "Medium", "Carmel and Matthew"],
    ["What did Junior use to injure Matthew while trying to protect his aunt?", "A kitchen knife", ["A baseball bat", "A broken bottle", "A frying pan"], "Medium", "Carmel and Matthew"],
    ["What happened to Carmel's marriage after she finally decided she could no longer endure Matthew's violence?", "She threw Matthew out", ["They moved to Australia", "They renewed their wedding vows", "She bought him a car"], "Medium", "Carmel and Matthew"],

    // COLIN AND GUIDO (5)
    ["Which two EastEnders men shared a groundbreaking kiss on the lips?", "Colin Russell and Guido Smith", ["Simon Wicks and Ian Beale", "Frank Butcher and Pete Beale", "Lofty Holloway and Barry Clark"], "Easy", "Colin and Guido"],
    ["Which character was Colin Russell's boyfriend when the landmark kiss was screened?", "Guido Smith", ["Barry Clark", "Rod Norman", "Duncan Boyd"], "Medium", "Colin and Guido"],
    ["Which actor portrayed Guido Smith?", "Nicholas Donovan", ["Gary Hailes", "Michael Cashman", "Gary Webster"], "Medium", "Colin and Guido"],
    ["How did Colin and Guido's historic kiss differ from Colin's earlier kiss with Barry?", "They kissed on the lips", ["They kissed outside a church", "They kissed on a train", "They kissed during a wedding"], "Medium", "Colin and Guido"],
    ["To which city did Colin Russell move to stay with his brother?", "Bristol", ["Bath", "Cardiff", "Manchester"], "Medium", "Colin and Guido"],

    // MICHELLE AND DANNY (7)
    ["Which married computer salesman became romantically involved with Michelle Fowler?", "Danny Whiting", ["Duncan Boyd", "Paul Priestly", "Laurie Bates"], "Medium", "Michelle and Danny"],
    ["Which actor played Danny Whiting?", "Saul Jephcott", ["Phil McDermott", "Mark Thrippleton", "Gary Powell"], "Medium", "Michelle and Danny"],
    ["Where did Michelle first get to know Danny Whiting?", "At Dr Legg's surgery", ["At the Queen Victoria", "At Frank's car lot", "At the market"], "Medium", "Michelle and Danny"],
    ["What was Danny Whiting helping the surgery to install?", "A computer system", ["New telephone booths", "An X-ray machine", "A security alarm"], "Medium", "Michelle and Danny"],
    ["What did Michelle discover about Danny after telephoning his home?", "He was married", ["He was a police officer", "He was leaving for Canada", "He was her cousin"], "Easy", "Michelle and Danny"],
    ["What words did Simon and Ricky paint on Danny's car after he hurt Michelle?", "Love Rat", ["Keep Out", "Go Home", "Cheat"], "Medium", "Michelle and Danny"],
    ["What was the name of Danny Whiting's wife?", "Mandy", ["Cindy", "Angie", "Pat"], "Medium", "Michelle and Danny"],

    // JULIE, PAUL AND TREVOR (9)
    ["Which lively newcomer returned from Salford to open a business in Walford?", "Julie Cooper", ["Marge Green", "Donna Ludlow", "Naima Jeffery"], "Medium", "Julie's Salon"],
    ["Which actress played Julie Cooper?", "Louise Plowright", ["Pat Coombs", "Eleanor Rhodes", "Michelle Collins"], "Medium", "Julie's Salon"],
    ["What sort of business did Julie Cooper open in Turpin Road?", "A hair and beauty salon", ["A bakery", "A video rental shop", "A travel agency"], "Easy", "Julie's Salon"],
    ["What was the name of Julie Cooper's salon?", "Julie's", ["The Cut Above", "Beauty Spot", "The Salon"], "Medium", "Julie's Salon"],
    ["Who wrongly believed Julie was opening a brothel?", "Dot Cotton", ["Pat Butcher", "Kathy Beale", "Cindy Williams"], "Medium", "Julie's Salon"],
    ["Which young Walford resident became the receptionist at Julie's salon?", "Michelle Fowler", ["Diane Butcher", "Sharon Watts", "Cindy Williams"], "Medium", "Julie's Salon"],
    ["Which handyman renovated Julie Cooper's new premises?", "Paul Priestly", ["Frank Butcher", "Ian Beale", "Arthur Fowler"], "Medium", "Julie's Salon"],
    ["Which friend often worked alongside builder Paul Priestly?", "Trevor Short", ["Laurie Bates", "Rod Norman", "Colin Russell"], "Medium", "Julie's Salon"],
    ["Which teenage Butcher did Paul Priestly become romantically involved with?", "Diane Butcher", ["Janine Butcher", "Clare Butcher", "Sharon Watts"], "Easy", "Julie's Salon"],

    // MARGE, DOT AND ETHEL (8)
    ["Which kindly older newcomer became friends with Dot and Ethel?", "Marge Green", ["Mo Butcher", "Guizin Osman", "Pat Butcher"], "Easy", "Marge, Dot and Ethel"],
    ["Which actress played Marge Green?", "Pat Coombs", ["June Brown", "Edna Doré", "Gretchen Franklin"], "Medium", "Marge, Dot and Ethel"],
    ["Which demanding elderly relative did Marge spend much of her life caring for?", "Her mother", ["Her father", "Her grandfather", "Her uncle"], "Medium", "Marge, Dot and Ethel"],
    ["Which Queen Vic matriarch tended to boss Marge Green about?", "Mo Butcher", ["Angie Watts", "Pauline Fowler", "Kathy Beale"], "Medium", "Marge, Dot and Ethel"],
    ["Which husband of Dot Cotton was exposed as a bigamist?", "Charlie Cotton", ["Arthur Fowler", "Pete Beale", "Frank Butcher"], "Easy", "Marge, Dot and Ethel"],
    ["What was the first name of the woman who claimed to be Charlie Cotton's other wife?", "Joan", ["Hazel", "Pat", "Ethel"], "Medium", "Marge, Dot and Ethel"],
    ["What false first name had Charlie used when marrying his other wife?", "Tommy", ["Tony", "Frank", "Stan"], "Medium", "Marge, Dot and Ethel"],
    ["Which elderly gentleman abandoned Ethel Skinner as his dance partner during a seaside trip?", "Reggie Thompson", ["Tom Clements", "Benny Bloom", "Charlie Cotton"], "Medium", "Marge, Dot and Ethel"],

    // NEW RIVALS AND TROUBLEMAKERS (7)
    ["Which new market trader began selling fruit and vegetables in direct competition with Pete Beale?", "Laurie Bates", ["Vince Johnson", "Danny Whiting", "Paul Priestly"], "Medium", "New Walford Faces"],
    ["Which woman began dating market trader Laurie Bates while separated from her husband?", "Kathy Beale", ["Pat Butcher", "Michelle Fowler", "Cindy Williams"], "Medium", "New Walford Faces"],
    ["Which wheeler-dealer friend of Darren Roberts arrived in Walford?", "Vince Johnson", ["Trevor Short", "Guido Smith", "Duncan Boyd"], "Medium", "New Walford Faces"],
    ["Which actor played Vince Johnson?", "Hepburn Graham", ["Gary McDonald", "Gary Powell", "Mark Thrippleton"], "Medium", "New Walford Faces"],
    ["What sort of vehicle did Vince and Darren sell Frank that turned out to be stolen?", "A BMW car", ["A tractor", "A delivery van", "A motorbike"], "Medium", "New Walford Faces"],
    ["Which actor played market trader Laurie Bates?", "Gary Powell", ["Gary McDonald", "Phil McDermott", "Saul Jephcott"], "Medium", "New Walford Faces"],
    ["Who was Vince Johnson's young friend from the Roberts family?", "Junior Roberts", ["Martin Fowler", "Steven Beale", "Ricky Butcher"], "Medium", "New Walford Faces"],
];

const questions = facts.map(([question, correctAnswer, wrongAnswers, difficulty, topic], index) => {
    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(6504 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['British Television', 'Soaps', 'EastEnders', '1989', topic],
        dailyEligible: true
    };
});

module.exports = questions;
