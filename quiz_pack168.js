// quiz_pack168.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Coronation Street - 1994 and 1995
// 100 questions: tv_0801 to tv_0900
// Wording and specialist-tag audit.
// Original IDs, answers, difficulty and daily eligibility preserved.
// quiz_bank.js is already connected and needs no changes.

// Each entry: question, correct answer, three alternatives,
// difficulty, year, original topic, specialist tags.
const facts = [

    // 1994
    ["Who bought the Corner Shop from Alf Roberts in 1994?", "Reg Holdsworth", ["Mike Baldwin", "Fred Elliott", "Maurice Jones"], "Easy", "1994", "Businesses", ["Reg Holdsworth", "Alf Roberts", "Corner Shop", "Shop sale"]],
    ["Whom did Reg Holdsworth marry in January 1994?", "Maureen Naylor", ["Raquel Wolstenhulme", "Denise Osbourne", "Angie Freeman"], "Easy", "1994", "Weddings", ["Reg Holdsworth", "Maureen Naylor", "Reg and Maureen wedding", "Holdsworth family"]],
    ["Which city had Reg and Maureen Holdsworth planned to visit on their honeymoon?", "Paris", ["Rome", "Madrid", "Amsterdam"], "Medium", "1994", "Travel", ["Reg Holdsworth", "Maureen Holdsworth", "Paris", "Honeymoon plans"]],
    ["Whose disappearance caused Reg and Maureen to miss their honeymoon flight?", "Maud Grimes", ["Phyllis Pearce", "Mavis Wilton", "Emily Bishop"], "Medium", "1994", "Weddings", ["Maud Grimes", "Reg Holdsworth", "Maureen Holdsworth", "Missed honeymoon", "Belstaff Hotel"]],
    ["Which hotel did Maud Grimes leave after overhearing Reg criticise her?", "The Belstaff Hotel", ["The Midland Hotel", "The Queens Hotel", "The Grosvenor Hotel"], "Hard", "1994", "Locations", ["Maud Grimes", "Reg Holdsworth", "Belstaff Hotel", "Wedding reception"]],
    ["Which barmaid was thrown out by her father and moved into the café flat?", "Tanya Pooley", ["Liz McDonald", "Betty Turpin", "Raquel Wolstenhulme"], "Medium", "1994", "Homes", ["Tanya Pooley", "Jim's Café", "Café flat", "Family conflict"]],
    ["Which boy was caught shoplifting at Bettabuy when he made his first appearance?", "Jamie Armstrong", ["Nicky Platt", "Andy McDonald", "Craig Whitely"], "Medium", "1994", "Arrivals", ["Jamie Armstrong", "Bettabuy", "Shoplifting", "Character debut"]],
    ["Who was Jamie Armstrong's mother?", "Tricia Armstrong", ["Liz McDonald", "Gail Platt", "Sally Webster"], "Medium", "1994", "Families", ["Jamie Armstrong", "Tricia Armstrong", "Armstrong family", "Character debuts"]],
    ["Which actress began playing Tricia Armstrong?", "Tracy Brabin", ["Tracy Shaw", "Denise Black", "Sherrie Hewson"], "Medium", "1994", "Actors", ["Tricia Armstrong", "Tracy Brabin", "Armstrong family", "Casting"]],
    ["Which Bettabuy employee dealt with Jamie Armstrong after he was caught shoplifting?", "Curly Watts", ["Reg Holdsworth", "Vera Duckworth", "Des Barnes"], "Medium", "1994", "Businesses", ["Curly Watts", "Jamie Armstrong", "Bettabuy", "Shoplifting"]],
    ["Which future Kabin assistant made his debut by visiting Derek and Mavis Wilton?", "Norris Cole", ["Fred Elliott", "Roy Cropper", "Les Battersby"], "Easy", "1994", "Arrivals", ["Norris Cole", "Derek Wilton", "Mavis Wilton", "Character debut", "EnviroSphere"]],
    ["Which resident had known newcomer Norris Cole for years?", "Derek Wilton", ["Jack Duckworth", "Ken Barlow", "Martin Platt"], "Medium", "1994", "Characters", ["Derek Wilton", "Norris Cole", "Old acquaintances", "EnviroSphere"]],
    ["Which Platt child needed emergency surgery for a ruptured appendix?", "Sarah-Louise Platt", ["David Platt", "Nicky Platt", "Rosie Webster"], "Medium", "1994", "Families", ["Sarah-Louise Platt", "Gail Platt", "Platt family", "Appendicitis", "Emergency surgery"]],
    ["Which resident got engaged to Maud Grimes after she mistook his remarks for a proposal?", "Percy Sugden", ["Reg Holdsworth", "Jack Duckworth", "Alf Roberts"], "Medium", "1994", "Relationships", ["Percy Sugden", "Maud Grimes", "Engagement", "Marriage proposal"]],
    ["Which clergyman broke off plans to marry Emily Bishop?", "Bernard Morton", ["Leonard Swindley", "Harold Glanville", "Fred Gee"], "Medium", "1994", "Relationships", ["Bernard Morton", "Emily Bishop", "Broken engagement", "Clergy"]],
    ["Which shopkeeper became Mayor of Weatherfield for a second time?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1994", "Politics", ["Alf Roberts", "Mayor of Weatherfield", "Weatherfield Council", "Second mayoralty"]],
    ["Which woman initially served as Mayoress during Alf Roberts's second term as mayor?", "Audrey Roberts", ["Deirdre Barlow", "Bet Gilroy", "Rita Sullivan"], "Easy", "1994", "Politics", ["Audrey Roberts", "Alf Roberts", "Mayoress of Weatherfield", "Civic duties"]],
    ["Which Duckworth spent a night stranded on a roof while chasing a pigeon?", "Jack Duckworth", ["Terry Duckworth", "Vera Duckworth", "Cliff Duckworth"], "Easy", "1994", "Comedy", ["Jack Duckworth", "Fergie", "Curly Watts", "Pigeon", "Rooftop"]],
    ["What was the name of the pigeon Jack Duckworth was chasing when he got stuck on a roof?", "Fergie", ["Rover", "Lucky", "Boomer"], "Medium", "1994", "Animals", ["Jack Duckworth", "Fergie", "Pigeon", "Rooftop incident"]],
    ["Whose observatory roof left Jack Duckworth stranded during his pigeon chase?", "Curly Watts's", ["Derek Wilton's", "Ken Barlow's", "Reg Holdsworth's"], "Medium", "1994", "Comedy", ["Jack Duckworth", "Curly Watts", "No. 7", "Observatory", "Rooftop incident"]],
    ["Who returned to Weatherfield after spending time caring for Blanche Hunt?", "Deirdre Barlow", ["Alma Baldwin", "Gail Platt", "Liz McDonald"], "Medium", "1994", "Families", ["Deirdre Barlow", "Blanche Hunt", "Barlow family", "Returning characters"]],
    ["Which hair salon owner told Ken Barlow that she was pregnant?", "Denise Osbourne", ["Fiona Middleton", "Alma Baldwin", "Tanya Pooley"], "Easy", "1994", "Relationships", ["Denise Osbourne", "Ken Barlow", "Pregnancy", "Hair salon"]],
    ["Who was the father of Denise Osbourne's unborn baby?", "Ken Barlow", ["Mike Baldwin", "Des Barnes", "Martin Platt"], "Easy", "1994", "Families", ["Denise Osbourne", "Ken Barlow", "Daniel Osbourne", "Pregnancy", "Barlow family"]],
    ["Where did Deirdre Barlow publicly announce Denise Osbourne's pregnancy?", "The Rovers Return", ["The Kabin", "Bettabuy", "The Corner Shop"], "Medium", "1994", "Storylines", ["Deirdre Barlow", "Denise Osbourne", "Ken Barlow", "Pregnancy revealed", "Rovers Return"]],
    ["Which woman had an affair with Des Barnes while he was dating Raquel?", "Tanya Pooley", ["Denise Osbourne", "Maureen Holdsworth", "Tricia Armstrong"], "Medium", "1994", "Relationships", ["Des Barnes", "Tanya Pooley", "Raquel Wolstenhulme", "Affairs", "Love triangles"]],
    ["Who discovered that Des Barnes had been unfaithful to her?", "Raquel Wolstenhulme", ["Liz McDonald", "Bet Gilroy", "Gail Platt"], "Medium", "1994", "Relationships", ["Raquel Wolstenhulme", "Des Barnes", "Tanya Pooley", "Affair discovered"]],
    ["In which country did Deirdre Barlow meet Samir Rachid while on holiday?", "Morocco", ["Spain", "Tunisia", "Turkey"], "Easy", "1994", "Travel", ["Deirdre Barlow", "Samir Rachid", "Morocco", "Holiday romance"]],
    ["What did a scan reveal after Denise Osbourne suffered a miscarriage?", "She was still carrying a surviving twin", ["She was carrying triplets", "She had never been pregnant", "She needed an emergency transplant"], "Medium", "1994", "Families", ["Denise Osbourne", "Ken Barlow", "Daniel Osbourne", "Miscarriage", "Surviving twin"]],
    ["Which supermarket chain did Reg Holdsworth join after leaving Bettabuy?", "Firman's Freezers", ["Bettabuy", "Freshco", "Costcutter"], "Medium", "1994", "Businesses", ["Reg Holdsworth", "Firman's Freezers", "Supermarket", "Job change"]],
    ["Who opened a betting shop in Weatherfield?", "Sean Skinner", ["Alf Roberts", "Curly Watts", "Maurice Jones"], "Medium", "1994", "Businesses", ["Sean Skinner", "Bookmakers", "Betting shop", "Rosamund Street"]],
    ["Who visited Ivy Brennan during her stay at a religious retreat?", "Gail Platt", ["Vera Duckworth", "Betty Turpin", "Emily Bishop"], "Medium", "1994", "Storylines", ["Gail Platt", "Ivy Brennan", "Religious retreat", "Family visit"]],
    ["Which Moroccan man arrived in Weatherfield to be with Deirdre Barlow?", "Samir Rachid", ["Alex Christie", "Norris Cole", "Brendan Scott"], "Easy", "1994", "Arrivals", ["Samir Rachid", "Deirdre Barlow", "Morocco", "Character debut"]],
    ["Which actor played Samir Rachid?", "Al Nedjari", ["John Savident", "Ken Morley", "Philip Middlemiss"], "Medium", "1994", "Actors", ["Samir Rachid", "Al Nedjari", "Casting"]],
    ["Which future butcher first appeared during a black pudding promotion?", "Fred Elliott", ["Ashley Peacock", "Reg Holdsworth", "Roy Cropper"], "Easy", "1994", "Arrivals", ["Fred Elliott", "Black pudding", "Butchers", "Character debut"]],
    ["Which actor played butcher Fred Elliott?", "John Savident", ["Bryan Mosley", "Roy Barraclough", "Peter Baldwin"], "Medium", "1994", "Actors", ["Fred Elliott", "John Savident", "Casting", "Butchers"]],
    ["What food was Fred Elliott promoting when he first appeared?", "Black pudding", ["Pork pies", "Bury sausages", "Steak pies"], "Medium", "1994", "Businesses", ["Fred Elliott", "Black pudding", "Butchers", "Food promotion"]],
    ["Who returned after being thrown off a modelling course in Croydon?", "Raquel Wolstenhulme", ["Fiona Middleton", "Tanya Pooley", "Denise Osbourne"], "Medium", "1994", "Storylines", ["Raquel Wolstenhulme", "Croydon", "Modelling school", "Returning characters"]],
    ["Which lorry driver became romantically involved with Bet Gilroy?", "Charlie Whelan", ["Des Barnes", "Jim McDonald", "Don Brennan"], "Medium", "1994", "Relationships", ["Bet Gilroy", "Charlie Whelan", "Rovers Return", "Romance"]],
    ["Which former Rovers barmaid left Weatherfield with Charlie Whelan?", "Tanya Pooley", ["Raquel Wolstenhulme", "Liz McDonald", "Betty Turpin"], "Medium", "1994", "Departures", ["Tanya Pooley", "Charlie Whelan", "Bet Gilroy", "Departures", "Affair"]],
    ["To which German city did Tanya Pooley and Charlie Whelan move?", "Hamburg", ["Berlin", "Cologne", "Munich"], "Hard", "1994", "Travel", ["Tanya Pooley", "Charlie Whelan", "Hamburg", "Germany", "Departures"]],
    ["Which Bettabuy employee lost his job following harassment complaints?", "Curly Watts", ["Vera Duckworth", "Reg Holdsworth", "Maureen Holdsworth"], "Medium", "1994", "Storylines", ["Curly Watts", "Bettabuy", "Harassment complaint", "Dismissal"]],
    ["Which ex-wife of Derek Wilton visited Mavis at The Kabin?", "Angela Hawthorne", ["Shirley Armitage", "Jackie Ingram", "Wendy Crozier"], "Medium", "1994", "Families", ["Angela Hawthorne", "Derek Wilton", "Mavis Wilton", "The Kabin", "Ex-spouses"]],
    ["What was the first name of Kevin and Sally Webster's second daughter?", "Sophie", ["Rosie", "Sarah", "Amy"], "Easy", "1994", "Families", ["Sophie Webster", "Kevin Webster", "Sally Webster", "Webster family", "Birth"]],
    ["Who proposed marriage to Samir Rachid?", "Deirdre Barlow", ["Denise Osbourne", "Alma Baldwin", "Liz McDonald"], "Medium", "1994", "Weddings", ["Deirdre Barlow", "Samir Rachid", "Marriage proposal", "Rachid family"]],
    ["Which of Deirdre Barlow's daughters objected to her relationship with Samir?", "Tracy Barlow", ["Susan Barlow", "Rosie Webster", "Jenny Bradley"], "Easy", "1994", "Families", ["Tracy Barlow", "Deirdre Barlow", "Samir Rachid", "Family opposition"]],
    ["In which month of 1994 did Deirdre Barlow marry Samir Rachid?", "November", ["May", "August", "December"], "Medium", "1994", "Weddings", ["Deirdre Barlow", "Samir Rachid", "Deirdre and Samir wedding", "Rachid family"]],
    ["Which supermarket worker named a star Mrs Raquel Watts as a Christmas present?", "Curly Watts", ["Reg Holdsworth", "Des Barnes", "Steve McDonald"], "Medium", "1994", "Relationships", ["Curly Watts", "Raquel Wolstenhulme", "Star naming", "Christmas present"]],
    ["Which student nurse did Martin Platt kiss on Christmas Day 1994?", "Cathy Power", ["Fiona Middleton", "Maxine Heavey", "Amy Nelson"], "Hard", "1994", "Relationships", ["Martin Platt", "Cathy Power", "Student nurse", "Hospital", "Christmas kiss"]],
    ["Which house did Mike Baldwin buy from Deirdre Rachid in December 1994?", "Number 1", ["Number 3", "Number 7", "Number 11"], "Medium", "1994", "Homes", ["Mike Baldwin", "Deirdre Rachid", "No. 1", "Property sale"]],
    ["Which ex-wife of Derek Wilton was introduced to Norris Cole at a dinner party?", "Angela Hawthorne", ["Maureen Holdsworth", "Rita Sullivan", "Emily Bishop"], "Medium", "1994", "Relationships", ["Angela Hawthorne", "Derek Wilton", "Norris Cole", "Dinner party", "Former spouses"]],

    // 1995
    ["What was the name of Denise Osbourne and Ken Barlow's son, born in 1995?", "Daniel", ["David", "Simon", "Peter"], "Easy", "1995", "Families", ["Daniel Osbourne", "Denise Osbourne", "Ken Barlow", "Birth", "Barlow family"]],
    ["Which two men came to blows over Raquel Wolstenhulme?", "Curly Watts and Des Barnes", ["Ken Barlow and Mike Baldwin", "Steve McDonald and Andy McDonald", "Jack Duckworth and Reg Holdsworth"], "Medium", "1995", "Relationships", ["Curly Watts", "Des Barnes", "Raquel Wolstenhulme", "Love rivalry", "Fight"]],
    ["Who rented No. 1 from Mike Baldwin in 1995?", "Tricia Armstrong", ["Rita Sullivan", "Bet Gilroy", "Maureen Holdsworth"], "Medium", "1995", "Homes", ["Tricia Armstrong", "Mike Baldwin", "No. 1", "Tenants"]],
    ["Which child moved into No. 1 with Tricia Armstrong?", "Jamie Armstrong", ["Nick Platt", "Tommy Duckworth", "David Platt"], "Medium", "1995", "Families", ["Jamie Armstrong", "Tricia Armstrong", "No. 1", "Armstrong family"]],
    ["To which hairdresser did Steve McDonald propose?", "Fiona Middleton", ["Maxine Heavey", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1995", "Relationships", ["Steve McDonald", "Fiona Middleton", "Engagement proposal", "Hair salon"]],
    ["Which relief manager played his trombone after arriving at the Rovers?", "Rodney Bostock", ["Alec Gilroy", "Billy Walker", "Reg Holdsworth"], "Hard", "1995", "Rovers Return", ["Rodney Bostock", "Rovers Return", "Relief manager", "Pub management"]],
    ["Which instrument did Rovers relief manager Rodney Bostock play to Jack Duckworth?", "Trombone", ["Trumpet", "Saxophone", "Clarinet"], "Hard", "1995", "Comedy", ["Rodney Bostock", "Jack Duckworth", "Trombone", "Rovers Return"]],
    ["What did Reg Holdsworth spend £300 on in 1995?", "A hairpiece", ["A new suit", "A briefcase", "A watch"], "Medium", "1995", "Comedy", ["Reg Holdsworth", "Hairpiece", "£300 purchase", "Comedy"]],
    ["Who inherited £2,000 from the late Jim Sedgewick?", "Alma Baldwin", ["Gail Platt", "Bet Gilroy", "Deirdre Rachid"], "Medium", "1995", "Money", ["Alma Baldwin", "Jim Sedgewick", "Inheritance", "£2,000 bequest"]],
    ["Which Barlow teenager was hospitalised after taking an Ecstasy pill?", "Tracy Barlow", ["Susan Barlow", "Rosie Webster", "Jenny Bradley"], "Easy", "1995", "Storylines", ["Tracy Barlow", "Ecstasy", "Drug overdose", "Hospital", "Rave"]],
    ["What medical support did Tracy Barlow need after taking an Ecstasy pill?", "Life support", ["A wheelchair", "Dialysis at home", "A ventilator for asthma"], "Medium", "1995", "Storylines", ["Tracy Barlow", "Ecstasy", "Life support", "Drug overdose", "Hospital"]],
    ["Which future Coronation Street regular joined the hair salon in 1995?", "Maxine Heavey", ["Fiona Middleton", "Tanya Pooley", "Gina Seddon"], "Easy", "1995", "Arrivals", ["Maxine Heavey", "Fiona Middleton", "Denise Osbourne", "Hair salon", "Character debut"]],
    ["Which actress first played Maxine Heavey?", "Tracy Shaw", ["Tracy Brabin", "Sarah Lancashire", "Denise Black"], "Medium", "1995", "Actors", ["Maxine Heavey", "Tracy Shaw", "Hair salon", "Casting"]],
    ["What anniversary was celebrated at the Rovers with a party in May 1995?", "Fifty years since VE-Day", ["The pub's centenary", "Thirty-five years of Coronation Street", "Twenty-five years of decimalisation"], "Medium", "1995", "History", ["Rovers Return", "VE-Day", "50th anniversary", "Second World War", "Celebrations"]],
    ["Which old flame of Betty Turpin returned during the VE-Day celebrations?", "Billy Williams", ["Jack Walker", "Alec Gilroy", "Fred Gee"], "Medium", "1995", "Relationships", ["Betty Turpin", "Billy Williams", "VE-Day", "Rovers Return", "Old flames"]],
    ["Which Weatherfield resident was offered an OBE in 1995?", "Alf Roberts", ["Ken Barlow", "Mike Baldwin", "Reg Holdsworth"], "Easy", "1995", "Honours", ["Alf Roberts", "OBE", "Weatherfield Council", "Honours", "Mayor"]],
    ["Who was assaulted on his way to hospital to donate a kidney to Tracy Barlow?", "Samir Rachid", ["Ken Barlow", "Martin Platt", "Steve McDonald"], "Easy", "1995", "Storylines", ["Samir Rachid", "Tracy Barlow", "Kidney donation", "Assault", "Hospital"]],
    ["In which month of 1995 did Samir Rachid die after a violent attack?", "June", ["March", "August", "October"], "Medium", "1995", "Storylines", ["Samir Rachid", "Deirdre Rachid", "Fatal assault", "Death", "Bereavement"]],
    ["Which organ from Samir Rachid was donated to Tracy Barlow?", "A kidney", ["A liver", "A heart", "A lung"], "Easy", "1995", "Families", ["Samir Rachid", "Tracy Barlow", "Kidney transplant", "Organ donation"]],
    ["Who consented to Samir Rachid's organ donation?", "Deirdre Rachid", ["Ken Barlow", "Gail Platt", "Audrey Roberts"], "Medium", "1995", "Storylines", ["Deirdre Rachid", "Samir Rachid", "Tracy Barlow", "Organ donation", "Kidney transplant"]],
    ["Which relative of Jack Duckworth died in a car crash in Malaga?", "His brother Cliff", ["His son Terry", "His father", "His cousin Percy"], "Medium", "1995", "Families", ["Jack Duckworth", "Cliff Duckworth", "Malaga", "Spain", "Fatal road accident"]],
    ["How much did Jack and Vera Duckworth inherit from Cliff Duckworth?", "£30,000", ["£3,000", "£10,000", "£100,000"], "Medium", "1995", "Money", ["Jack Duckworth", "Vera Duckworth", "Cliff Duckworth", "Inheritance", "£30,000"]],
    ["Which granddaughter of Alec Gilroy became engaged to Steve McDonald?", "Vicky Arden", ["Tracy Barlow", "Jenny Bradley", "Raquel Wolstenhulme"], "Medium", "1995", "Relationships", ["Vicky Arden", "Steve McDonald", "Alec Gilroy", "Engagement", "McDonald family"]],
    ["Who returned to Weatherfield to oppose Vicky Arden marrying Steve McDonald?", "Alec Gilroy", ["Terry Duckworth", "Mike Baldwin", "Reg Holdsworth"], "Medium", "1995", "Arrivals", ["Alec Gilroy", "Vicky Arden", "Steve McDonald", "Return to Weatherfield"]],
    ["Which future café owner made his Coronation Street debut in 1995?", "Roy Cropper", ["Fred Elliott", "Norris Cole", "Des Barnes"], "Easy", "1995", "Arrivals", ["Roy Cropper", "Roy's Rolls", "Character debut", "Café owner"]],
    ["On which street did Roy Cropper live when Deirdre first met him?", "Crimea Street", ["Rosamund Street", "Victoria Street", "Coronation Street"], "Medium", "1995", "Homes", ["Roy Cropper", "Crimea Street", "Deirdre Rachid", "Flats"]],
    ["Which older member of the Webster family returned to Weatherfield after a decade away?", "Bill Webster", ["Debbie Webster", "Harry Clayton", "Eddie Seddon"], "Medium", "1995", "Families", ["Bill Webster", "Kevin Webster", "Webster family", "Return to Weatherfield"]],
    ["What did Bill Webster accidentally cause while cooking at No. 13?", "A kitchen fire", ["A burst pipe", "A power cut", "A broken window"], "Medium", "1995", "Comedy", ["Bill Webster", "No. 13", "Kitchen fire", "Webster family"]],
    ["On which Caribbean island did Steve McDonald marry Vicky Arden?", "St Lucia", ["Barbados", "Jamaica", "Antigua"], "Medium", "1995", "Weddings", ["Steve McDonald", "Vicky Arden", "St Lucia", "Caribbean", "Wedding"]],
    ["Which long-serving resident died off-screen in 1995?", "Ivy Brennan", ["Betty Turpin", "Emily Bishop", "Rita Sullivan"], "Easy", "1995", "Storylines", ["Ivy Brennan", "Don Brennan", "Ivy Tilsley", "Off-screen death", "Tilsley family"]],
    ["Which house did Ivy Brennan leave to her grandson Nick?", "Number 5", ["Number 1", "Number 7", "Number 13"], "Medium", "1995", "Homes", ["Ivy Brennan", "Nick Platt", "No. 5", "Will", "Inheritance"]],
    ["What condition did Ivy Brennan put on Nick Platt's inheritance?", "He must use the surname Tilsley", ["He must leave Weatherfield", "He must marry before twenty-one", "He must sell the house"], "Medium", "1995", "Families", ["Ivy Brennan", "Nick Tilsley", "Nick Platt", "Surname change", "Will"]],
    ["Which of Ivy Brennan's husbands received nothing under her will?", "Don Brennan", ["Brian Tilsley", "Bert Tilsley", "George Wardle"], "Medium", "1995", "Families", ["Ivy Brennan", "Don Brennan", "Will", "Inheritance dispute"]],
    ["Which Firman's Freezers employee began dating Curly Watts?", "Anne Malone", ["Maureen Holdsworth", "Tanya Pooley", "Tricia Armstrong"], "Medium", "1995", "Relationships", ["Anne Malone", "Curly Watts", "Firman's Freezers", "Dating"]],
    ["Which woman agreed to marry her old flame Billy Williams?", "Betty Turpin", ["Bet Gilroy", "Rita Sullivan", "Emily Bishop"], "Easy", "1995", "Weddings", ["Betty Turpin", "Billy Williams", "Betty and Billy wedding", "Old flames"]],
    ["Which son gave Betty Turpin away at her wedding to Billy Williams?", "Gordon Clegg", ["Ken Barlow", "Jack Duckworth", "Alf Roberts"], "Medium", "1995", "Weddings", ["Betty Turpin", "Billy Williams", "Gordon Clegg", "Wedding", "Clegg family"]],
    ["Which couple made their debut while viewing No. 9 Coronation Street?", "Gary and Judy Mallett", ["Les and Janice Battersby", "Jim and Liz McDonald", "Kevin and Sally Webster"], "Medium", "1995", "Arrivals", ["Gary Mallett", "Judy Mallett", "No. 9", "Mallett family", "Character debut"]],
    ["Which brewery decided to sell the Rovers Return?", "Newton & Ridley", ["Boddingtons", "Hydes", "Robinsons"], "Medium", "1995", "Rovers Return", ["Newton & Ridley", "Rovers Return", "Brewery", "Pub sale"]],
    ["Which newsagent withdrew her offer to invest in the Rovers to help Bet Gilroy buy it?", "Rita Sullivan", ["Mavis Wilton", "Alma Baldwin", "Emily Bishop"], "Medium", "1995", "Rovers Return", ["Rita Sullivan", "Bet Gilroy", "Rovers Return", "Investment withdrawal", "Friendship breakdown"]],
    ["Which wealthy young woman refused to lend Bet Gilroy money to buy the Rovers?", "Vicky McDonald", ["Tracy Barlow", "Raquel Wolstenhulme", "Denise Osbourne"], "Medium", "1995", "Rovers Return", ["Vicky McDonald", "Bet Gilroy", "Rovers Return", "Loan refusal", "Family conflict"]],
    ["In which month of 1995 did Bet Gilroy leave Weatherfield after losing the Rovers?", "October", ["January", "June", "December"], "Easy", "1995", "Departures", ["Bet Gilroy", "Rovers Return", "October departure", "Pub sale"]],
    ["Which couple won the bid to take over the Rovers Return after Bet left?", "Jack and Vera Duckworth", ["Jim and Liz McDonald", "Curly Watts and Raquel Wolstenhulme", "Alf and Audrey Roberts"], "Easy", "1995", "Rovers Return", ["Jack Duckworth", "Vera Duckworth", "Rovers Return", "Pub takeover", "Bidding"]],
    ["Which longtime Rovers employee resigned after Vera Duckworth asked her to clean as well as cook?", "Betty Williams", ["Liz McDonald", "Raquel Wolstenhulme", "Tricia Armstrong"], "Medium", "1995", "Rovers Return", ["Betty Williams", "Vera Duckworth", "Rovers Return", "Resignation", "Hotpot"]],
    ["To which Suffolk town did Reg Holdsworth move for a new job?", "Lowestoft", ["Ipswich", "Bury St Edmunds", "Felixstowe"], "Medium", "1995", "Departures", ["Reg Holdsworth", "Lowestoft", "Firman's Freezers", "Suffolk", "Departure"]],
    ["Which woman accompanied Alf Roberts to Buckingham Palace for his OBE ceremony?", "Betty Williams", ["Audrey Roberts", "Deirdre Rachid", "Rita Sullivan"], "Medium", "1995", "Honours", ["Alf Roberts", "Betty Williams", "Buckingham Palace", "OBE", "Investiture"]],
    ["Which couple married during Coronation Street's special hour-long episode in December 1995?", "Curly Watts and Raquel Wolstenhulme", ["Steve McDonald and Vicky Arden", "Reg Holdsworth and Maureen Naylor", "Ken Barlow and Deirdre Rachid"], "Easy", "1995", "Weddings", ["Curly Watts", "Raquel Wolstenhulme", "Curly and Raquel wedding", "Hour-long episode"]],
    ["Which woman escaped an attack by Leo Firman in 1995?", "Raquel Wolstenhulme", ["Fiona Middleton", "Liz McDonald", "Maxine Heavey"], "Medium", "1995", "Storylines", ["Raquel Wolstenhulme", "Leo Firman", "Firman's Freezers", "Assault", "Escape"]],
    ["Who married Derek Wilton's ex-wife Angela Hawthorne?", "Norris Cole", ["Percy Sugden", "Reg Holdsworth", "Des Barnes"], "Medium", "1995", "Weddings", ["Norris Cole", "Angela Hawthorne", "Derek Wilton", "Norris and Angela wedding"]],
    ["What did Derek Wilton deliberately do to Norris Cole on the way to his wedding?", "Drive him to the wrong church", ["Hide the wedding rings", "Cancel the reception", "Lock him in a garage"], "Medium", "1995", "Comedy", ["Derek Wilton", "Norris Cole", "Angela Hawthorne", "Wrong church", "Wedding prank"]],
    ["Which McDonald twin was arrested in possession of stolen whisky?", "Steve McDonald", ["Andy McDonald", "Peter Barlow", "Nick Tilsley"], "Medium", "1995", "Storylines", ["Steve McDonald", "Stolen whisky", "Arrest", "McDonald family"]]

];

// Build exported quiz questions, maintaining original answer positions.
const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, year, topic, specialistTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);
    return {
        id: 'tv_' + String(801 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: [...new Set(['Soaps', 'Coronation Street', '1990s', year, topic, ...specialistTags])],
        dailyEligible: true
    };
});

// Validate actual exported objects, year balance and specialist tags.
if (questions.length !== 100 || questions[0].id !== 'tv_0801' ||
    questions[99].id !== 'tv_0900' ||
    questions.filter(q => q.tags.includes('1994')).length !== 50 ||
    questions.filter(q => q.tags.includes('1995')).length !== 50) {
    throw new Error('Pack 168: incorrect count, ID range or year split');
}

const seenIds = new Set();
const seenWording = new Set();
for (const q of questions) {
    const wording = q.question.toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
    if (
        seenIds.has(q.id) || seenWording.has(wording) ||
        q.answers.length !== 4 ||
        new Set(q.answers.map(a => a.toLowerCase())).size !== 4 ||
        q.answers.filter(a => a === q.correctAnswer).length !== 1 ||
        !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
        !q.tags.includes('Soaps') || !q.tags.includes('Coronation Street') ||
        !q.tags.includes('1990s') ||
        !['1994', '1995'].some(y => q.tags.includes(y)) ||
        q.tags.length < 7 ||
        q.dailyEligible !== true ||
        q.category !== 'Television'
    ) {
        throw new Error('Pack 168: invalid question ' + q.id);
    }
    seenIds.add(q.id);
    seenWording.add(wording);
}

module.exports = questions;
