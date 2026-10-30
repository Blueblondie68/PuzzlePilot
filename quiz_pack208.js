// quiz_pack208.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Eldorado - characters, stories and behind the scenes
// 60 questions: tv_4644 to tv_4703
// Six specific tags added to each question; one historical wording correction.
// Leave quiz_bank.js unchanged until the end of the evening.

const facts = [
    // The programme and its famous troubled launch
    ["In which country was the BBC soap Eldorado set?", "Spain", ["Portugal", "Italy", "Greece"], "Easy", "Setting", ["Spain", "Spanish Setting", "British Expats", "Mediterranean Country", "Los Barcos", "Overseas Soap"]],
    ["Which stretch of the Spanish coast provided the setting for Eldorado?", "Costa del Sol", ["Costa Brava", "Costa Blanca", "Costa Dorada"], "Easy", "Setting", ["Costa del Sol", "Southern Spain", "Mediterranean Coast", "Malaga Region", "Holiday Region", "Coastal Location"]],
    ["What was the name of Eldorado's fictional Spanish town?", "Los Barcos", ["San Esteban", "Puerto Bello", "Las Palmas"], "Easy", "Setting", ["Los Barcos", "Fictional Town", "Spanish Village", "Expats Community", "Costa del Sol", "Local Setting"]],
    ["Which television channel originally broadcast Eldorado?", "BBC One", ["ITV", "Channel 4", "Channel 5"], "Easy", "Production", ["BBC One", "BBC Television", "Original Broadcaster", "1992 Launch", "British Network", "BBC Soap"]],
    ["In which decade did Eldorado first air?", "1990s", ["1980s", "1970s", "2000s"], "Easy", "Production", ["1990s", "1992 Premiere", "Original Broadcast", "Television Debut", "Series Launch", "1993 Finale"]],
    ["Which group of people were central to the story of Eldorado?", "British expatriates living in Spain", ["Australian farmers", "London market traders", "Welsh mining families"], "Easy", "Premise", ["British Expatriates", "Expat Community", "British Residents", "Moving Abroad", "Spanish Life", "Overseas Residents"]],
    ["What was Eldorado's original working title?", "Little England", ["The Spanish Sun", "Golden Days", "Costa Life"], "Medium", "Production", ["Little England", "Working Title", "Development Concept", "Original Name", "British Enclave", "Preproduction"]],
    ["Which EastEnders co-creator also created Eldorado?", "Tony Holland", ["Tony Warren", "Phil Redmond", "Russell T Davies"], "Easy", "Production", ["Tony Holland", "EastEnders", "Soap Creator", "BBC Drama", "Original Concept", "Writer Producer"]],
    ["Which EastEnders writer wrote the first episode of Eldorado?", "Tony Jordan", ["Tony Holland", "Jimmy McGovern", "Paul Abbott"], "Medium", "Production", ["Tony Jordan", "EastEnders Writer", "First Episode", "1992 Premiere", "Opening Script", "Soap Scriptwriter"]],
    ["Which former EastEnders producer was Eldorado's original producer?", "Julia Smith", ["Verity Lambert", "Katherine Kelly", "Kathleen Hutchison"], "Medium", "Production", ["Julia Smith", "Original Producer", "EastEnders Producer", "Launch Team", "BBC Production", "1992 Series"]],
    ["Who took over as Eldorado's producer after Julia Smith?", "Corinne Hollingworth", ["Jane Hudson", "Kate Oates", "Diederick Santer"], "Medium", "Production", ["Corinne Hollingworth", "Producer Replacement", "Julia Smith", "Production Changes", "Soap Revamp", "Behind The Scenes"]],
    ["Which BBC One controller made the decision to cancel Eldorado?", "Alan Yentob", ["Michael Grade", "Greg Dyke", "John Birt"], "Medium", "Production", ["Alan Yentob", "BBC One Controller", "Cancellation Decision", "1993 Axing", "Network Executive", "Programme Ending"]],
    ["What was specially constructed in Spain for the filming of Eldorado?", "An entire village set", ["A full-size cruise ship", "A football stadium", "An underground railway"], "Easy", "Production", ["Village Set", "Spanish Filming", "Purpose Built Streets", "Outdoor Location", "Los Barcos Backlot", "Production Design"]],
    ["What technical problem made early Eldorado dialogue difficult to hear?", "Echoing sound on the sets", ["Faulty colour cameras", "Missing soundtracks", "Repeated power cuts"], "Medium", "Production", ["Echoing Sound", "Set Acoustics", "Audio Problems", "Reverberation", "Early Episodes", "Recording Issues"]],
    ["Why did some early Eldorado conversations confuse English-speaking viewers?", "Some characters spoke other languages without subtitles", ["All dialogue was dubbed into German", "Episodes were broadcast without dialogue", "The characters communicated only in sign language"], "Easy", "Production", ["Unsubtitled Dialogue", "Multilingual Cast", "Foreign Languages", "Spanish Speech", "Viewer Confusion", "European Soap"]],
    ["Which ITV soap broadcast a special hour-long episode on Eldorado's opening night?", "Coronation Street", ["Brookside", "Emmerdale", "Crossroads"], "Medium", "Production", ["Coronation Street", "Hour Long Special", "ITV Competition", "Opening Night", "6 July 1992", "Ratings Rivalry"]],
    ["Who composed the television theme for Eldorado?", "Simon May", ["Tony Hatch", "Ron Grainer", "John Barry"], "Easy", "Theme", ["Simon May", "Eldorado Theme", "Theme Composer", "Opening Credits", "Television Music", "Instrumental Score"]],
    ["What was the title of the vocal song based on Eldorado's theme music?", "When You Go Away", ["Always There", "Anyone Can Fall in Love", "Every Loser Wins"], "Medium", "Theme", ["When You Go Away", "Johnny Griggs", "Vocal Theme", "Simon May", "Final Episode Credits", "1993 Single"]],
    ["Which soap returned for repeats on U&Drama in 2025 after its original run ended in the 1990s?", "Eldorado", ["Night and Day", "Family Affairs", "Echo Beach"], "Easy", "Legacy", ["U&Drama", "2025 Repeats", "Classic Soap Returns", "27 January 2025", "UKTV Channel", "Rerun Broadcast"]],
    ["What later recreational use was made of Eldorado's abandoned Spanish set?", "Paintball and airsoft games", ["Formula One racing", "Indoor skiing", "Ice hockey"], "Easy", "Legacy", ["Paintball Games", "Airsoft Games", "Abandoned Set", "Spanish Film Village", "Later Use", "Outdoor Recreation"]],

    // Familiar faces and the Lockhead family
    ["Which actor played Eldorado's roguish Marcus Tandy?", "Jesse Birdsall", ["Derek Martin", "Campbell Morrison", "Roland Curram"], "Easy", "Actors", ["Jesse Birdsall", "Marcus Tandy", "Lead Actor", "Roguish Character", "Los Barcos", "Casting"]],
    ["Which action-adventure television series featured Eldorado star Jesse Birdsall as Nick Beckett?", "Bugs", ["The Professionals", "Dangerfield", "Between the Lines"], "Medium", "Actors", ["Bugs", "Nick Beckett", "Jesse Birdsall", "Action Adventure", "1990s Television", "Actor Role"]],
    ["Which woman became Marcus Tandy's girlfriend in Eldorado?", "Pilar Moreno", ["Trish Valentine", "Gwen Lockhead", "Joy Slater"], "Easy", "Relationships", ["Pilar Moreno", "Marcus Tandy", "Romance", "Spanish Girlfriend", "Sandra Sandri", "Final Couple"]],
    ["Who played Pilar Moreno in Eldorado?", "Sandra Sandri", ["Polly Perkins", "Patricia Brake", "Hilary Crane"], "Medium", "Actors", ["Sandra Sandri", "Pilar Moreno", "Actress", "Spanish Character", "Marcus Tandy", "Casting"]],
    ["Which Hollyoaks villain was also played by Eldorado star Jesse Birdsall?", "Fraser Black", ["Warren Fox", "Brendan Brady", "Silas Blissett"], "Easy", "Actors", ["Fraser Black", "Hollyoaks", "Jesse Birdsall", "Soap Villain", "Later Acting Role", "Cross Soap Casting"]],
    ["Which football drama featured Eldorado's Jesse Birdsall as Roger Webb?", "Footballers' Wives", ["Dream Team", "The Manageress", "Playing the Field"], "Easy", "Actors", ["Footballers Wives", "Roger Webb", "Jesse Birdsall", "Football Drama", "Later Television Role", "Sports Soap"]],
    ["Which actress played Gwen Lockhead in Eldorado?", "Patricia Brake", ["Leslee Udwin", "Polly Perkins", "Faith Kent"], "Easy", "Actors", ["Patricia Brake", "Gwen Lockhead", "Actress", "Lockhead Matriarch", "Original Cast", "Casting"]],
    ["Who was Gwen Lockhead's husband in Eldorado?", "Drew Lockhead", ["Marcus Tandy", "Roberto Fernandez", "Freddie Martin"], "Easy", "Families", ["Drew Lockhead", "Gwen Lockhead", "Campbell Morrison", "Married Couple", "Lockhead Family", "Family Patriarch"]],
    ["What was the name of Gwen and Drew Lockhead's daughter?", "Nessa", ["Pilar", "Fizz", "Joy"], "Medium", "Families", ["Nessa Lockhead", "Gwen Lockhead", "Drew Lockhead", "Daughter", "Julie Fernandez", "Lockhead Family"]],
    ["What was the name of Gwen and Drew Lockhead's son?", "Blair", ["Javier", "Gavin", "Arnaud"], "Medium", "Families", ["Blair Lockhead", "Gwen Lockhead", "Drew Lockhead", "Son", "Josh Nathan", "Lockhead Family"]],
    ["Which actress played Gwen Lockhead's daughter Nessa?", "Julie Fernandez", ["Sandra Sandri", "Stella Maris", "Kathy Pitkin"], "Medium", "Actors", ["Julie Fernandez", "Nessa Lockhead", "Actress", "Gwen Lockhead", "Disabled Character", "Casting"]],
    ["What job did Gwen Lockhead do alongside producing a residents' newsletter?", "Schoolteacher", ["Police detective", "Hotel receptionist", "Airline pilot"], "Medium", "Characters", ["Gwen Lockhead", "Schoolteacher", "Residents Newsletter", "Local School", "Patricia Brake", "Community News"]],
    ["Which prison sitcom featured Eldorado actress Patricia Brake as Fletch's daughter?", "Porridge", ["Open All Hours", "The Liver Birds", "The Good Life"], "Easy", "Actors", ["Porridge", "Patricia Brake", "Ingrid Fletcher", "Fletchs Daughter", "Prison Sitcom", "BBC Comedy"]],
    ["Which Eldorado actor later played Charlie Slater in EastEnders?", "Derek Martin", ["Jesse Birdsall", "Campbell Morrison", "Roland Curram"], "Easy", "Actors", ["Derek Martin", "Charlie Slater", "EastEnders", "Alex Morris", "Cross Soap Casting", "Actor"]],
    ["What was the name of Derek Martin's gangster character in Eldorado?", "Alex Morris", ["Marcus Tandy", "Terry Flynn", "Stanley Webb"], "Medium", "Characters", ["Alex Morris", "Derek Martin", "Gangster", "Criminal Boss", "1993 Episodes", "Organised Crime"]],
    ["Which Eldorado character worked for gangster Alex Morris?", "Marcus Tandy", ["Blair Lockhead", "Snowy White", "Roberto Fernandez"], "Medium", "Crime", ["Marcus Tandy", "Alex Morris", "Criminal Employment", "Gangster Henchman", "Derek Martin", "Underworld Connections"]],

    // The expats and their neighbours
    ["Which Eldorado character ran Joy's Bar?", "Joy Slater", ["Olive King", "Trish Valentine", "Rosario Fernandez"], "Easy", "Characters", ["Joy Slater", "Joys Bar", "Local Pub", "Business Owner", "Leslee Udwin", "Expat Gathering"]],
    ["Who played the bar owner Joy Slater in Eldorado?", "Leslee Udwin", ["Patricia Brake", "Faith Kent", "Framboise Gommendy"], "Medium", "Actors", ["Leslee Udwin", "Joy Slater", "Bar Owner", "Actress", "Original Cast", "Casting"]],
    ["Which Eldorado character was a nightclub singer and video-shop manager?", "Trish Valentine", ["Ingrid Olsson", "Gerry Peters-Smith", "Nessa Lockhead"], "Easy", "Characters", ["Trish Valentine", "Nightclub Singer", "Video Shop", "Polly Perkins", "Local Entertainment", "Shop Manager"]],
    ["Which actress played Trish Valentine in Eldorado?", "Polly Perkins", ["Patricia Brake", "Julie Fernandez", "Leslee Udwin"], "Medium", "Actors", ["Polly Perkins", "Trish Valentine", "Actress", "Nightclub Performer", "Video Shop", "Casting"]],
    ["Which Swedish character worked as a tour guide in Eldorado?", "Ingrid Olsson", ["Pilar Moreno", "Rosemary Webb", "Maria Fernandez"], "Medium", "Characters", ["Ingrid Olsson", "Tour Guide", "Swedish Expat", "Bo Corre", "Tourism Job", "Los Barcos"]],
    ["Who was Ingrid Olsson engaged to in Eldorado?", "Javier Fernandez", ["Marcus Tandy", "Bunny Charlson", "Drew Lockhead"], "Medium", "Relationships", ["Javier Fernandez", "Ingrid Olsson", "Engagement", "Fernandez Family", "Swedish Spanish Couple", "Romance"]],
    ["Which character was the local doctor and co-owner of Georgios restaurant?", "Roberto Fernandez", ["Freddie Martin", "Stanley Webb", "Dieter Shultz"], "Medium", "Characters", ["Roberto Fernandez", "Local Doctor", "Georgios Restaurant", "Restaurant Co Owner", "Franco Rey", "Medical Work"]],
    ["Which Eldorado character ran the local supermarket?", "Rosario Fernandez", ["Joy Slater", "Trish Valentine", "Olive King"], "Medium", "Characters", ["Rosario Fernandez", "Supermarket Owner", "Stella Maris", "Fernandez Family", "Local Grocery", "Businesswoman"]],
    ["Which character was the famously nosy British resident of Eldorado?", "Olive King", ["Pilar Moreno", "Ingrid Olsson", "Maria Fernandez"], "Easy", "Characters", ["Olive King", "Nosy Neighbour", "Faith Kent", "British Expat", "Village Gossip", "Local Resident"]],
    ["Which aspiring writer in Eldorado based stories on her neighbours?", "Isabelle Leduc", ["Gwen Lockhead", "Fizz Charlson", "Trine Svendsen"], "Medium", "Characters", ["Isabelle Leduc", "Aspiring Author", "Residents Stories", "Framboise Gommendy", "Writing Career", "Local Inspiration"]],
    ["Which Eldorado character owned the local tennis club?", "Philippe Leduc", ["Drew Lockhead", "Bunny Charlson", "Terry Flynn"], "Medium", "Characters", ["Philippe Leduc", "Tennis Club", "Daniel Lombart", "Sports Business", "Club Owner", "French Expat"]],
    ["Which Swedish character ran a chandlery beside the marina?", "Per Svendsen", ["Roberto Fernandez", "Marcus Tandy", "Freddie Martin"], "Medium", "Characters", ["Per Svendsen", "Chandlery", "Marina", "Boat Supplies", "Kim Romer", "Svendsen Family"]],
    ["Which Eldorado character ran a health clinic?", "Lene Svendsen", ["Joy Slater", "Olive King", "Rosemary Webb"], "Medium", "Characters", ["Lene Svendsen", "Health Clinic", "Nanna Moller", "Swedish Clinic", "Shopping Centre", "Svendsen Family"]],
    ["Which Eldorado character discovered he had a daughter called Natalie Jackson?", "Freddie Martin", ["Alex Morris", "Drew Lockhead", "Roberto Fernandez"], "Medium", "Families", ["Freddie Martin", "Natalie Jackson", "Secret Daughter", "Roland Curram", "Family Revelation", "Surprise Arrival"]],
    ["What was the name of the handyman in Eldorado?", "Snowy White", ["Benny Hawkins", "Stan Ogden", "Fred Gee"], "Easy", "Characters", ["Snowy White", "Handyman", "Patch Connolly", "Village Maintenance", "Comic Character", "Local Tradesman"]],
    ["Which Eldorado character taught windsurfing?", "Dieter Shultz", ["Blair Lockhead", "Alex Morris", "Philippe Leduc"], "Medium", "Characters", ["Dieter Shultz", "Windsurfing Instructor", "Kai Maurer", "Water Sports", "Coastal Activity", "Tourist Lessons"]],

    // The notorious marriage and the finale
    ["Which middle-aged Eldorado character returned from Britain with a teenage bride?", "Bunny Charlson", ["Drew Lockhead", "Freddie Martin", "Stanley Webb"], "Easy", "Storylines", ["Bunny Charlson", "Teenage Bride", "Fizz Charlson", "Age Gap Marriage", "Roger Walker", "Controversial Storyline"]],
    ["What was the name of Bunny Charlson's young bride in Eldorado?", "Fizz", ["Pilar", "Nessa", "Trine"], "Easy", "Storylines", ["Fizz Charlson", "Bunny Charlson", "Kathy Pitkin", "Young Bride", "Teen Marriage", "Opening Storyline"]],
    ["Which business did Bunny Charlson co-own in Eldorado?", "Georgios restaurant", ["Joy's Bar", "The tennis club", "The local supermarket"], "Medium", "Characters", ["Georgios Restaurant", "Bunny Charlson", "Restaurant Co Owner", "Food Business", "Local Dining", "Los Barcos"]],
    ["Which character was Joy Slater's troublesome former husband?", "Terry Flynn", ["Drew Lockhead", "Bunny Charlson", "Per Svendsen"], "Medium", "Relationships", ["Terry Flynn", "Joy Slater", "Former Husband", "Ben Murphy", "Troublesome Ex", "Marital History"]],
    ["What happened to Marcus Tandy's car near the end of Eldorado?", "It was blown up", ["It was stolen by a teenager", "It sank into the sea", "It was crushed at a scrapyard"], "Easy", "Finale", ["Marcus Tandy", "Car Explosion", "Attempted Murder", "Final Episode", "Surprise Survival", "1993 Finale"]],
    ["How did Marcus Tandy and Pilar Moreno leave in Eldorado's final episode?", "They sailed away on a boat", ["They boarded a train", "They flew away in a helicopter", "They drove off in a camper van"], "Easy", "Finale", ["Marcus Tandy", "Pilar Moreno", "Boat Departure", "Sailing Away", "Romantic Escape", "Series Finale"]],
    ["Which pioneering Doctor Who producer was also involved with Eldorado?", "Verity Lambert", ["Julia Smith", "Corinne Hollingworth", "Beryl Vertue"], "Medium", "Production", ["Verity Lambert", "Doctor Who", "Executive Producer", "Television Pioneer", "Cinema Verity", "BBC Drama"]],
    ["Which soap's cancellation sparked protests by viewers who wanted it saved?", "Eldorado", ["The Archers", "Coronation Street", "EastEnders"], "Easy", "Legacy", ["Save Eldorado", "Viewer Protests", "Cancellation Campaign", "1993 Cancellation", "Fan Petition", "Cult Following"]],
];

const questions = facts.map((fact, index) => {
    const [question, correctAnswer, wrongAnswers, difficulty, topic, specificTags] = fact;
    const answers = wrongAnswers.slice();
    answers.splice(index % 4, 0, correctAnswer);

    return {
        id: 'tv_' + String(4644 + index).padStart(4, '0'),
        category: 'Television',
        question,
        answers,
        correctAnswer,
        difficulty,
        tags: ['Soaps', 'Eldorado', 'British Television', topic, ...specificTags],
        dailyEligible: true
    };
});

module.exports = questions;
