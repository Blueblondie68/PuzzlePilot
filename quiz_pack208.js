// quiz_pack208.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Eldorado - characters, stories and behind the scenes
// 60 questions: tv_4644 to tv_4703
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The programme and its famous troubled launch
    ["In which country was the BBC soap Eldorado set?", "Spain", ["Portugal", "Italy", "Greece"], "Easy", "Setting"],
    ["Which stretch of the Spanish coast provided the setting for Eldorado?", "Costa del Sol", ["Costa Brava", "Costa Blanca", "Costa Dorada"], "Easy", "Setting"],
    ["What was the name of Eldorado's fictional Spanish town?", "Los Barcos", ["San Esteban", "Puerto Bello", "Las Palmas"], "Easy", "Setting"],
    ["Which television channel originally broadcast Eldorado?", "BBC One", ["ITV", "Channel 4", "Channel 5"], "Easy", "Production"],
    ["In which decade did Eldorado first air?", "1990s", ["1980s", "1970s", "2000s"], "Easy", "Production"],
    ["Which group of people were central to the story of Eldorado?", "British expatriates living in Spain", ["Australian farmers", "London market traders", "Welsh mining families"], "Easy", "Premise"],
    ["What was Eldorado's original working title?", "Little England", ["The Spanish Sun", "Golden Days", "Costa Life"], "Medium", "Production"],
    ["Which EastEnders co-creator also created Eldorado?", "Tony Holland", ["Tony Warren", "Phil Redmond", "Russell T Davies"], "Easy", "Production"],
    ["Which future EastEnders writer wrote the first episode of Eldorado?", "Tony Jordan", ["Tony Holland", "Jimmy McGovern", "Paul Abbott"], "Medium", "Production"],
    ["Which former EastEnders producer was Eldorado's original producer?", "Julia Smith", ["Verity Lambert", "Katherine Kelly", "Kathleen Hutchison"], "Medium", "Production"],
    ["Who took over as Eldorado's producer after Julia Smith?", "Corinne Hollingworth", ["Jane Hudson", "Kate Oates", "Diederick Santer"], "Medium", "Production"],
    ["Which BBC One controller made the decision to cancel Eldorado?", "Alan Yentob", ["Michael Grade", "Greg Dyke", "John Birt"], "Medium", "Production"],
    ["What was specially constructed in Spain for the filming of Eldorado?", "An entire village set", ["A full-size cruise ship", "A football stadium", "An underground railway"], "Easy", "Production"],
    ["What technical problem made early Eldorado dialogue difficult to hear?", "Echoing sound on the sets", ["Faulty colour cameras", "Missing soundtracks", "Repeated power cuts"], "Medium", "Production"],
    ["Why did some early Eldorado conversations confuse English-speaking viewers?", "Some characters spoke other languages without subtitles", ["All dialogue was dubbed into German", "Episodes were broadcast without dialogue", "The characters communicated only in sign language"], "Easy", "Production"],
    ["Which ITV soap broadcast a special hour-long episode on Eldorado's opening night?", "Coronation Street", ["Brookside", "Emmerdale", "Crossroads"], "Medium", "Production"],
    ["Who composed the television theme for Eldorado?", "Simon May", ["Tony Hatch", "Ron Grainer", "John Barry"], "Easy", "Theme"],
    ["What was the title of the vocal song based on Eldorado's theme music?", "When You Go Away", ["Always There", "Anyone Can Fall in Love", "Every Loser Wins"], "Medium", "Theme"],
    ["Which soap returned for repeats on U&Drama in 2025 after its original run ended in the 1990s?", "Eldorado", ["Night and Day", "Family Affairs", "Echo Beach"], "Easy", "Legacy"],
    ["What later recreational use was made of Eldorado's abandoned Spanish set?", "Paintball and airsoft games", ["Formula One racing", "Indoor skiing", "Ice hockey"], "Easy", "Legacy"],

    // Familiar faces and the Lockhead family
    ["Which actor played Eldorado's roguish Marcus Tandy?", "Jesse Birdsall", ["Derek Martin", "Campbell Morrison", "Roland Curram"], "Easy", "Actors"],
    ["Which action-adventure television series featured Eldorado star Jesse Birdsall as Nick Beckett?", "Bugs", ["The Professionals", "Dangerfield", "Between the Lines"], "Medium", "Actors"],
    ["Which woman became Marcus Tandy's girlfriend in Eldorado?", "Pilar Moreno", ["Trish Valentine", "Gwen Lockhead", "Joy Slater"], "Easy", "Relationships"],
    ["Who played Pilar Moreno in Eldorado?", "Sandra Sandri", ["Polly Perkins", "Patricia Brake", "Hilary Crane"], "Medium", "Actors"],
    ["Which Hollyoaks villain was also played by Eldorado star Jesse Birdsall?", "Fraser Black", ["Warren Fox", "Brendan Brady", "Silas Blissett"], "Easy", "Actors"],
    ["Which football drama featured Eldorado's Jesse Birdsall as Roger Webb?", "Footballers' Wives", ["Dream Team", "The Manageress", "Playing the Field"], "Easy", "Actors"],
    ["Which actress played Gwen Lockhead in Eldorado?", "Patricia Brake", ["Leslee Udwin", "Polly Perkins", "Faith Kent"], "Easy", "Actors"],
    ["Who was Gwen Lockhead's husband in Eldorado?", "Drew Lockhead", ["Marcus Tandy", "Roberto Fernandez", "Freddie Martin"], "Easy", "Families"],
    ["What was the name of Gwen and Drew Lockhead's daughter?", "Nessa", ["Pilar", "Fizz", "Joy"], "Medium", "Families"],
    ["What was the name of Gwen and Drew Lockhead's son?", "Blair", ["Javier", "Gavin", "Arnaud"], "Medium", "Families"],
    ["Which actress played Gwen Lockhead's daughter Nessa?", "Julie Fernandez", ["Sandra Sandri", "Stella Maris", "Kathy Pitkin"], "Medium", "Actors"],
    ["What job did Gwen Lockhead do alongside producing a residents' newsletter?", "Schoolteacher", ["Police detective", "Hotel receptionist", "Airline pilot"], "Medium", "Characters"],
    ["Which prison sitcom featured Eldorado actress Patricia Brake as Fletch's daughter?", "Porridge", ["Open All Hours", "The Liver Birds", "The Good Life"], "Easy", "Actors"],
    ["Which Eldorado actor later played Charlie Slater in EastEnders?", "Derek Martin", ["Jesse Birdsall", "Campbell Morrison", "Roland Curram"], "Easy", "Actors"],
    ["What was the name of Derek Martin's gangster character in Eldorado?", "Alex Morris", ["Marcus Tandy", "Terry Flynn", "Stanley Webb"], "Medium", "Characters"],
    ["Which Eldorado character worked for gangster Alex Morris?", "Marcus Tandy", ["Blair Lockhead", "Snowy White", "Roberto Fernandez"], "Medium", "Crime"],

    // The expats and their neighbours
    ["Which Eldorado character ran Joy's Bar?", "Joy Slater", ["Olive King", "Trish Valentine", "Rosario Fernandez"], "Easy", "Characters"],
    ["Who played the bar owner Joy Slater in Eldorado?", "Leslee Udwin", ["Patricia Brake", "Faith Kent", "Framboise Gommendy"], "Medium", "Actors"],
    ["Which Eldorado character was a nightclub singer and video-shop manager?", "Trish Valentine", ["Ingrid Olsson", "Gerry Peters-Smith", "Nessa Lockhead"], "Easy", "Characters"],
    ["Which actress played Trish Valentine in Eldorado?", "Polly Perkins", ["Patricia Brake", "Julie Fernandez", "Leslee Udwin"], "Medium", "Actors"],
    ["Which Swedish character worked as a tour guide in Eldorado?", "Ingrid Olsson", ["Pilar Moreno", "Rosemary Webb", "Maria Fernandez"], "Medium", "Characters"],
    ["Who was Ingrid Olsson engaged to in Eldorado?", "Javier Fernandez", ["Marcus Tandy", "Bunny Charlson", "Drew Lockhead"], "Medium", "Relationships"],
    ["Which character was the local doctor and co-owner of Georgios restaurant?", "Roberto Fernandez", ["Freddie Martin", "Stanley Webb", "Dieter Shultz"], "Medium", "Characters"],
    ["Which Eldorado character ran the local supermarket?", "Rosario Fernandez", ["Joy Slater", "Trish Valentine", "Olive King"], "Medium", "Characters"],
    ["Which character was the famously nosy British resident of Eldorado?", "Olive King", ["Pilar Moreno", "Ingrid Olsson", "Maria Fernandez"], "Easy", "Characters"],
    ["Which aspiring writer in Eldorado based stories on her neighbours?", "Isabelle Leduc", ["Gwen Lockhead", "Fizz Charlson", "Trine Svendsen"], "Medium", "Characters"],
    ["Which Eldorado character owned the local tennis club?", "Philippe Leduc", ["Drew Lockhead", "Bunny Charlson", "Terry Flynn"], "Medium", "Characters"],
    ["Which Swedish character ran a chandlery beside the marina?", "Per Svendsen", ["Roberto Fernandez", "Marcus Tandy", "Freddie Martin"], "Medium", "Characters"],
    ["Which Eldorado character ran a health clinic?", "Lene Svendsen", ["Joy Slater", "Olive King", "Rosemary Webb"], "Medium", "Characters"],
    ["Which Eldorado character discovered he had a daughter called Natalie Jackson?", "Freddie Martin", ["Alex Morris", "Drew Lockhead", "Roberto Fernandez"], "Medium", "Families"],
    ["What was the name of the handyman in Eldorado?", "Snowy White", ["Benny Hawkins", "Stan Ogden", "Fred Gee"], "Easy", "Characters"],
    ["Which Eldorado character taught windsurfing?", "Dieter Shultz", ["Blair Lockhead", "Alex Morris", "Philippe Leduc"], "Medium", "Characters"],

    // The notorious marriage and the finale
    ["Which middle-aged Eldorado character returned from Britain with a teenage bride?", "Bunny Charlson", ["Drew Lockhead", "Freddie Martin", "Stanley Webb"], "Easy", "Storylines"],
    ["What was the name of Bunny Charlson's young bride in Eldorado?", "Fizz", ["Pilar", "Nessa", "Trine"], "Easy", "Storylines"],
    ["Which business did Bunny Charlson co-own in Eldorado?", "Georgios restaurant", ["Joy's Bar", "The tennis club", "The local supermarket"], "Medium", "Characters"],
    ["Which character was Joy Slater's troublesome former husband?", "Terry Flynn", ["Drew Lockhead", "Bunny Charlson", "Per Svendsen"], "Medium", "Relationships"],
    ["What happened to Marcus Tandy's car near the end of Eldorado?", "It was blown up", ["It was stolen by a teenager", "It sank into the sea", "It was crushed at a scrapyard"], "Easy", "Finale"],
    ["How did Marcus Tandy and Pilar Moreno leave in Eldorado's final episode?", "They sailed away on a boat", ["They boarded a train", "They flew away in a helicopter", "They drove off in a camper van"], "Easy", "Finale"],
    ["Which pioneering Doctor Who producer was also involved with Eldorado?", "Verity Lambert", ["Julia Smith", "Corinne Hollingworth", "Beryl Vertue"], "Medium", "Production"],
    ["Which soap's cancellation sparked protests by viewers who wanted it saved?", "Eldorado", ["The Archers", "Coronation Street", "EastEnders"], "Easy", "Legacy"],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4644 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Eldorado', 'British Television', topic],
        dailyEligible: true
    };
});

module.exports = questions;
