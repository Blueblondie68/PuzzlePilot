// quiz_pack353.js
// PuzzlePilot — The Bigggggg Quiz
// Television / Children's TV: Playdays (originally Playbus) and Rosie and Jim.
// Outstanding entries checked against PP_Quiz_Master_Through_Pack_351_Corrected.xlsx.
// Factual sources: Ravensbourne BBC Motion Graphics Archive; Memorable TV;
// Nostalgia Central; Ragdoll Productions (official history); British Puppet Guild.
// Dates and production totals were cross-checked; uncertain episode-list trivia excluded.
// Each question has seven BESPOKE, question-specific tags plus programme metadata.
// No fixed target question count. WordPad-ready CommonJS file; no dependencies.

const FIRST_ID = 17262;

const playdaysFacts = `On which British broadcaster did Playdays originally air?|BBC|ITV|Channel 4|Sky One|Easy|BBC Children's Programming|Original Broadcaster|Preschool Television|Public Service Television|Playdays Transmission|UK Broadcasting|1980s Television
What was Playdays originally called when it first aired?|Playbus|Playbox|Playtime|Playaway|Easy|Playbus|Original Programme Title|Series Rebranding|BBC Preschool|1988 Launch|Title Change|Early Episodes
In which year did Playbus, later renamed Playdays, first air?|1988|1985|1991|1994|Medium|1988 Debut|Playbus Premiere|17 October 1988|Original Series|BBC History|First Broadcast|Television Timeline
In which year did Playdays finish its original BBC run?|1997|1993|2000|2004|Medium|1997 Finale|28 March 1997|BBC Preschool|Final Broadcast|Programme Run|1990s Television|Series Ending
Which organisation's complaint helped prompt Playbus to change its name to Playdays?|The National Playbus Association|The National Trust|The British Toy and Hobby Association|The Children's Society|Hard|National Playbus Association|Naming Complaint|Programme Rebranding|Playbus Title|1989 Name Change|BBC Decision|Broadcast History
During which month and year was Playbus renamed Playdays?|December 1989|January 1988|September 1992|March 1995|Hard|December 1989|Playbus Rebranding|BBC Programme Title|Broadcast Timeline|National Playbus Association|Name Change|Programme History
Who created the BBC preschool programme Playdays?|Cynthia Felgate|Anne Wood|Biddy Baxter|Anna Home|Medium|Cynthia Felgate|Programme Creator|BBC Production|Preschool Format|Playbus Origin|Television Producer|Children's Series Development
On which earlier BBC preschool programme had Playdays creator Cynthia Felgate been an executive producer?|Play School|Blue Peter|The Really Wild Show|Newsround|Medium|Cynthia Felgate|Play School|Executive Producer|BBC Preschool Heritage|Production Career|Children's TV History|Programme Connection
Which Playdays stop was traditionally visited on Mondays?|The Why Bird Stop|The Patch Stop|The Playground Stop|The Tent Stop|Easy|Why Bird Stop|Monday Schedule|Weekly Stop Pattern|Why Bird|Playbus Route|Lost Property Office|Episode Format
Where did Why Bird live and help sort items in Playdays?|The Lost Property Office|The town library|The railway signal box|The school canteen|Easy|Why Bird|Lost Property Office|Missing Belongings|Monday Stop|Playbus Setting|Object Sorting|Puppet Workplace
What was the name of Why Bird's special machine in Playdays?|Why-Tech|Dot-O-Matic|Play-O-Tron|Patchputer|Medium|Why-Tech|Why Bird|Special Computer|Story Pictures|Song Music|Lost Property Office|Puppet Technology
Which Playdays stop usually featured on Tuesdays?|The Playground Stop|The Why Bird Stop|The Poppy Stop|The Patch Stop|Easy|Playground Stop|Tuesday Schedule|Playbus Timetable|Children's Games|Weekly Format|Preschool Play|Stop Location
What was the original name of the Wednesday stop that was later replaced by the Roundabout Stop?|The Dot Stop|The Tent Stop|The Patch Stop|The Why Bird Stop|Medium|Dot Stop|Original Wednesday Stop|Roundabout Replacement|Playdays History|Weekly Timetable|1990s Format|Stop Transition
Which Playdays stop replaced the Dot Stop on Wednesdays?|The Roundabout Stop|The Poppy Stop|The Playground Stop|The Tent Stop|Easy|Roundabout Stop|Wednesday Schedule|Dot Stop Replacement|Mr Jolly|Rosie Roundabout|Playdays Format|New Setting
Around which year was the Roundabout Stop introduced to replace the Dot Stop?|1992|1988|1995|1997|Hard|1992 Change|Roundabout Stop|Dot Stop|Wednesday Schedule|BBC Format Revision|Playdays History|Nineties Episodes
Who was the musical host associated with the Playdays Roundabout Stop?|Mr Jolly|Mr Tumble|Mr Spoon|Mr Benn|Easy|Mr Jolly|Roundabout Stop|Musical Presenter|Wednesday Episodes|Playdays Character|Songs And Rhymes|Roundabout Host
What was the name of the magic roundabout featured at the Playdays Roundabout Stop?|Rosie|Daisy|Maisie|Polly|Medium|Rosie Roundabout|Roundabout Stop|Mr Jolly|Magic Ride|Wednesday Episodes|Named Attraction|Playdays Setting
Which Playdays stop was traditionally visited on Thursdays?|The Patch Stop|The Why Bird Stop|The Tent Stop|The Playground Stop|Easy|Patch Stop|Thursday Schedule|Peggy Patch|Playbus Stops|Rag Doll|Preschool Activities|Weekly Format
Which little rag doll became a central character at the Playdays Patch Stop?|Peggy Patch|Rosie|Milly Sprocket|Lizzie|Easy|Peggy Patch|Rag Doll|Patch Stop|Thursday Character|Puppet Friend|BBC Children's TV|Playdays Cast
Which Playdays stop was originally associated with Fridays before the Poppy Stop took over?|The Tent Stop|The Dot Stop|The Patch Stop|The Roundabout Stop|Medium|Tent Stop|Friday Schedule|Costume Play|Preschool Drama|Poppy Stop Replacement|Playbus Format|Early Episodes
What was the name of the stop that replaced the Tent Stop on Fridays?|The Poppy Stop|The Why Bird Stop|The Dot Stop|The Playground Stop|Easy|Poppy Stop|Friday Schedule|Poppy House|Tent Stop Replacement|Playdays Setting|Later Episodes|Weekly Route
What kind of animal was the Playdays character Poppy?|A cat|A rabbit|A parrot|A dog|Easy|Poppy The Cat|Animal Puppet|Playdays Character|Poppy Stop|BBC Preschool|Children's Puppet|Character Identity
Who provided the voice of Poppy the Cat in Playdays?|Sue Monroe|Sally Preisig|Ellie Darvill|Rebecca Nagan|Medium|Sue Monroe|Poppy The Cat|Voice Performance|Puppet Casting|Playdays Cast|Children's Television Actor|BBC Programme
Who voiced Peggy Patch in Playdays?|Sally Preisig|Sue Monroe|Fiona Beynon Brown|Pat Hutchins|Medium|Sally Preisig|Peggy Patch|Voice Actor|Rag Doll Puppet|Patch Stop|Playdays Performer|BBC Cast
Which performer was a later voice of Why Bird in Playdays?|Ellie Darvill|Sally Preisig|Rebecca Nagan|Trish Cooke|Hard|Ellie Darvill|Why Bird|Voice Performer|Puppet Casting|Later Episodes|Lost Property Office|Playdays Cast
Which presenter of Playdays later became a well-known BBC radio and television host?|Zoë Ball|Davina McCall|Anthea Turner|Cat Deeley|Medium|Zoë Ball|Playdays Presenter|BBC Career|Children's Presenter|Radio And Television|1990s Casting|Familiar Host
Which of these children's television presenters appeared on Playdays?|Dave Benson Phillips|Andi Peters|Mark Speight|Simon Groom|Medium|Dave Benson Phillips|Playdays Presenter|BBC Children's TV|Live Action Host|Preschool Programme|Presenter Credits|Television Career
Which performer appeared as a bus driver in the first Playbus episode in October 1988?|Brian Jameson|Neil Brewer|John Cunliffe|Nick Baker|Hard|Brian Jameson|Playbus Driver|First Episode|17 October 1988|Why Bird Stop|Opening Cast|Programme Debut
Who composed the music for the original Playbus and Playdays opening titles?|Richard Brown|Andrew McCrorie-Shand|Ron Grainer|Mike Batt|Hard|Richard Brown|Opening Titles Music|Playbus Theme|BBC Children's Television|Programme Credits|1988 Titles|Music Composer
Who designed the Playdays opening titles preserved in the BBC Motion Graphics Archive?|Paul Johnson|Alan Rogers|Peter Lang|Gordon Murray|Hard|Paul Johnson|Opening Titles Design|BBC Motion Graphics Archive|Playdays Branding|Graphic Design|Television Ident|1990 Titles
Who played Mr Jolly in the later 1995–1997 Roundabout Stop episodes?|Andy Hockley|Robin Fritz|Clive Duncan|Nick Mercer|Hard|Andy Hockley|Mr Jolly|Roundabout Stop|1995-1997|Musical Host|Later Casting|Playdays Performance`;

const rosieFacts = `On which broadcaster did Rosie and Jim originally appear?|ITV|BBC Two|Channel 4|Sky One|Easy|ITV Children's Programming|Children's ITV|Original Network|Preschool Broadcasting|1990s TV|UK Television|Series Premiere
Which production company made Rosie and Jim?|Ragdoll Productions|Cosgrove Hall Films|Aardman Animations|HIT Entertainment|Easy|Ragdoll Productions|Children's Producer|Programme Credits|Rosie And Jim Production|British Television Studio|Puppet Series|Anne Wood Company
In which year did Rosie and Jim first air?|1990|1985|1995|2001|Easy|1990 Premiere|3 September 1990|ITV Children's Television|Original Release|Nineties Programmes|Broadcast History|Series Launch
In which year did the original run of Rosie and Jim end?|2000|1995|2004|2010|Medium|2000 Final Year|Original Broadcast Run|ITV Series|1990s To 2000|Programme Timeline|Ragdoll History|Series Completion
What kind of toys are Rosie and Jim in the television series?|Rag dolls|Clockwork robots|Teddy bears|Wooden soldiers|Easy|Rosie Doll|Jim Doll|Rag Dolls|Puppet Characters|Children's Fiction|Character Design|Series Premise
What is the name of the narrowboat that Rosie and Jim live on?|Ragdoll|Waterlily|Canal Queen|Little Star|Easy|Ragdoll Narrowboat|Home Afloat|Rosie And Jim Setting|Boat Name|Canal Adventures|Live Action Filming|Series Premise
Along which kind of waterways do Rosie and Jim mainly travel?|Canals and rivers|Open ocean shipping lanes|Mountain ski slopes|Underground railway tunnels|Easy|British Canals|River Travel|Narrowboat Journeys|Waterways Of England|Location Filming|Exploration|Boat Adventures
Which friend aboard their narrowboat helps Rosie and Jim avoid being spotted?|Duck|Poppy the Cat|Why Bird|Bagpuss|Easy|Duck Character|Boat Companion|Lookout|Ragdoll Narrowboat|Wooden Duck|Secret Adventures|Puppet Friend
Where does Duck usually sit on the Ragdoll narrowboat?|On the roof|Inside the engine room|Under the kitchen table|In the towpath shed|Easy|Duck Lookout|Boat Roof|Ragdoll Narrowboat|Watchful Friend|Puppet Position|Canal Boat|Character Setting
What sound does Duck use to warn Rosie and Jim when a person might see them?|Quacking|Barking|Whistling|Ringing a bell|Easy|Duck Quacking|Warning Signal|Lookout Role|Secret Doll Adventures|Human Approaches|Canal Journey|Puppet Behaviour
Who performed and voiced Rosie in Rosie and Jim?|Rebecca Nagan|Sue Monroe|Sally Preisig|Pat Hutchins|Medium|Rebecca Nagan|Rosie Puppet|Voice Performance|Puppeteer|Lead Character|ITV Cast|Character Casting
Who performed and voiced Jim in Rosie and Jim?|Robin Stevens|John Cunliffe|Neil Brewer|Andy Hockley|Medium|Robin Stevens|Jim Puppet|Voice Performance|Puppeteer|Lead Character|ITV Cast|Character Casting
Which Rosie and Jim performer also supplied Duck's voice?|Robin Stevens|Rebecca Nagan|Pat Hutchins|John Cunliffe|Hard|Robin Stevens|Duck Voice|Multiple Character Performance|Jim Puppeteer|Puppet Sound|Ragdoll Cast|Voice Work
What does Rosie usually carry on her adventures away from the narrowboat?|A bag bearing her name|A suitcase of musical instruments|A red umbrella|A toy telescope|Medium|Rosie Bag|Name Label|Rag Doll Accessories|Character Props|Secret Outings|Puppet Costume|Adventures Ashore
Which object does Jim carry to make drawings of things he sees?|A notebook|A camera tripod|A sketching easel|A typewriter|Easy|Jim Notebook|Drawing|Observed Sights|Character Possessions|Canal Excursions|Puppet Props|Children's Exploration
What colour is Jim's short hair in Rosie and Jim?|Red|Black|Silver|Green|Medium|Jim Appearance|Red Hair|Rag Doll Design|Main Puppet|Character Features|Costume Recognition|ITV Children's TV
Who was the first human owner and presenter of the Ragdoll narrowboat?|John Cunliffe|Neil Brewer|Pat Hutchins|Brian Jameson|Easy|John Cunliffe|First Boat Owner|Original Presenter|Series One And Two|Narrowboat Skipper|1990s Cast|Author
What nickname do Rosie and Jim use for John Cunliffe's character?|Fizzgog|Tootle|Loopy Lobes|Mr Jolly|Medium|Fizzgog|John Cunliffe|Rosie And Jim Nickname|Original Boat Owner|Character Language|Series One And Two|Ragdoll Presenter
What was John Cunliffe's real-life profession reflected in his Rosie and Jim appearances?|Author|Professional chef|Motor racing driver|Opera singer|Medium|John Cunliffe|Author|Storytelling|Original Presenter|Occupation|Boat Owner|Children's Literature
Which other famous children's television character was created by Rosie and Jim presenter John Cunliffe?|Postman Pat|Fireman Sam|Thomas the Tank Engine|Basil Brush|Easy|John Cunliffe|Postman Pat|Children's TV Creator|Television Career|British Animation|Author Credits|Programme Connection
Who took over as the second human presenter and narrowboat owner in Rosie and Jim?|Pat Hutchins|Anne Wood|Rebecca Nagan|Sue Monroe|Medium|Pat Hutchins|Second Boat Owner|Series Three And Four|Presenter Succession|Illustrator|Ragdoll Narrowboat|1990s Television
What nickname do Rosie and Jim give to presenter Pat Hutchins?|Loopy Lobes|Fizzgog|Tootle|Peggy Patch|Medium|Loopy Lobes|Pat Hutchins|Boat Owner Nickname|Character Language|Illustrator Presenter|Series Three And Four|Ragdoll Voyages
What was Pat Hutchins' creative profession, which she brought into Rosie and Jim?|Illustrator|Orchestra conductor|Gardener|Football commentator|Medium|Pat Hutchins|Illustration|Children's Book Art|Drawing Pictures|Creative Profession|Boat Owner|On-Screen Artwork
In Pat Hutchins' episodes, which character was hidden for Rosie and Jim to find in a drawing?|Duck|Poppy|Peggy Patch|Mr Jolly|Medium|Duck Hidden In Artwork|Pat Hutchins|Picture Search|End Of Episode|Illustrator|Visual Puzzle|Series Three And Four
Who was the third and final human presenter and narrowboat owner in Rosie and Jim?|Neil Brewer|John Cunliffe|Robin Stevens|Chris Jarvis|Easy|Neil Brewer|Third Boat Owner|Final Presenter|Series Five To Eight|Ragdoll Skipper|1997-2000|Presenter History
What nickname did Rosie and Jim give the musician Neil Brewer?|Tootle|Loopy Lobes|Fizzgog|Why Bird|Medium|Tootle|Neil Brewer|Musician Presenter|Ragdoll Owner|Character Nicknames|Later Series|Puppet Dialogue
What was Neil Brewer's profession outside his role as the boat owner?|Musician|Illustrator|Novelist|Puppeteer|Easy|Neil Brewer|Musician|Boat Presenter|Music Career|Songs And Instruments|Series Five To Eight|Occupation
Which small free-reed instrument did Neil Brewer play in Rosie and Jim?|Concertina|Tuba|Bagpipes|Harp|Medium|Neil Brewer|Concertina|On-Screen Instrument|Musical Performance|Final Presenter|End Of Episode Song|Folk Music
Which mouth-blown instrument did Neil Brewer often look for at the start of his Rosie and Jim episodes?|Harmonica|Clarinet|Flute|Trumpet|Medium|Neil Brewer|Harmonica|Episode Opening|Musical Prop|Tootle|Series Five To Eight|Recurring Routine
Which creator associated with Ragdoll Productions helped create Rosie and Jim?|Anne Wood|Cynthia Felgate|Biddy Baxter|Gordon Murray|Medium|Anne Wood|Programme Creator|Ragdoll Productions|Children's TV Producer|Series Development|Creative Leadership|British Preschool TV
Which later children's television hit also came from Rosie and Jim's production company, Ragdoll?|Teletubbies|The Simpsons|Grange Hill|Art Attack|Easy|Ragdoll Productions|Teletubbies|Children's TV Production|Programme Connection|British Preschool|Company Catalogue|Anne Wood
How many series of Rosie and Jim did Ragdoll Productions make?|Eight|Four|Six|Twelve|Medium|Eight Series|Ragdoll Production History|Series Count|1990-2000|ITV Children's Television|Programme Format|Broadcast Catalogue
According to Ragdoll Productions, how many Rosie and Jim episodes were made altogether?|175|100|130|200|Hard|175 Episodes|Official Ragdoll Figures|50 Early Episodes|125 Later Episodes|Series Total|Production Count|Television Archive
Which location in Stratford-upon-Avon served as the Ragdoll narrowboat's home mooring?|Bancroft Basin|St Katharine Docks|Salford Quays|Brighton Marina|Hard|Bancroft Basin|Stratford-Upon-Avon|Home Mooring|Ragdoll Narrowboat|Filming Location|Canal Marina|Waterways Geography`;

const normalise = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
const questions = [];

function appendProgramme(programme, baseTags, factBlock) {
  for (const line of factBlock.trim().split('\n')) {
    const id = 'tv_' + String(FIRST_ID + questions.length).padStart(5, '0');
    const fields = line.trim().split('|').map(value => value.trim());
    if (fields.length !== 13) throw new Error(`Pack 353: expected 13 fields for ${id}, got ${fields.length}`);
    const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
    if ([question, correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(v => !v))
      throw new Error(`Pack 353: blank field for ${id}`);
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty))
      throw new Error(`Pack 353: invalid difficulty for ${id}`);
    if (specificTags.length !== 7 || new Set(specificTags.map(normalise)).size < 6)
      throw new Error(`Pack 353: insufficient distinct bespoke tags for ${id}`);
    const answers = [wrong1, wrong2, wrong3];
    if (new Set([correctAnswer, ...answers].map(normalise)).size !== 4)
      throw new Error(`Pack 353: duplicate answer choice for ${id}`);
    answers.splice(questions.length % 4, 0, correctAnswer);
    const tags = [...new Map([
      'Television', 'Children\'s Television', 'British Television', 'Preschool Television',
      ...baseTags, programme, `Programme: ${programme}`, correctAnswer, ...specificTags
    ].map(tag => [normalise(tag), tag])).values()];
    questions.push({id, category: 'Television', programme, question,
      answers, correctAnswer, difficulty, tags, dailyEligible: true});
  }
}

appendProgramme('Playdays', ['BBC', 'Playbus', '1988-1997', 'Puppet Television'], playdaysFacts);
appendProgramme('Rosie and Jim', ['ITV', 'Ragdoll Productions', '1990-2000', 'Puppet Television'], rosieFacts);

// Validate the EXPORTED question objects, including the global ID sequence.
if (!questions.length || questions[0].id !== 'tv_17262' ||
    new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => normalise(q.question))).size !== questions.length)
  throw new Error('Pack 353: duplicate IDs or question wording');
if (questions.some((q, index) =>
    q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    new Set(q.answers.map(normalise)).size !== 4 ||
    q.tags.length < 14 || !q.tags.includes(`Programme: ${q.programme}`) ||
    q.dailyEligible !== true || !['Easy', 'Medium', 'Hard'].includes(q.difficulty)))
  throw new Error('Pack 353: exported object validation failed');


// 21 November 2026: evidence-based audit expansion, retaining original IDs.
// Plot details checked against episode summaries; no inferred plots or duplicate facts.
const auditAdditions = [
  {
    "id": "tv_38787",
    "category": "Television",
    "programme": "Playdays",
    "question": "In Playdays, which earlier Patch Stop doll was succeeded by Peggy Patch?",
    "answers": [
      "Milly Sprocket",
      "Sam Patch",
      "Bella Numbear",
      "Poppy"
    ],
    "correctAnswer": "Sam Patch",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Format and characters",
      "Episode or segment: Patch Stop predecessor",
      "Storyline: Original Patch Stop doll; replacement by Peggy Patch",
      "Correct: Sam Patch",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Patch Stop predecessor",
      "Character activity: Original Patch Stop doll; replacement by Peggy Patch",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38788",
    "category": "Television",
    "programme": "Playdays",
    "question": "Who originally portrayed Mr Jolly at the Playdays Roundabout Stop?",
    "answers": [
      "Clive Duncan",
      "Andy Hockley",
      "Robin Fritz",
      "Nick Mercer"
    ],
    "correctAnswer": "Robin Fritz",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: First Mr Jolly",
      "Storyline: First performer of musical host in 1992",
      "Correct: Robin Fritz",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: First Mr Jolly",
      "Character activity: First performer of musical host in 1992",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38789",
    "category": "Television",
    "programme": "Playdays",
    "question": "Which performer took over as Mr Jolly in Playdays between Robin Fritz and Andy Hockley?",
    "answers": [
      "Brian Jameson",
      "Karl Woolley",
      "Richard Brown",
      "Clive Duncan"
    ],
    "correctAnswer": "Clive Duncan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Second Mr Jolly",
      "Storyline: Second Roundabout Stop host in 1994-1995",
      "Correct: Clive Duncan",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Second Mr Jolly",
      "Character activity: Second Roundabout Stop host in 1994-1995",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38790",
    "category": "Television",
    "programme": "Playdays",
    "question": "Which performer played the musical crafts character Bitsy Bob in Playdays?",
    "answers": [
      "Michele Durler",
      "Sue Monroe",
      "Zoë Ball",
      "Sally Preisig"
    ],
    "correctAnswer": "Michele Durler",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Bitsy Bob",
      "Storyline: Character performance; songs and craftmaking",
      "Correct: Michele Durler",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Bitsy Bob",
      "Character activity: Character performance; songs and craftmaking",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38791",
    "category": "Television",
    "programme": "Playdays",
    "question": "Which two Playdays puppets presented a segment called Numerical Melodies?",
    "answers": [
      "Why Bird and Peggy Patch",
      "Morris Cog and Milly Sprocket",
      "Poppy and Dot",
      "Bella and Baxter"
    ],
    "correctAnswer": "Morris Cog and Milly Sprocket",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Numerical Melodies",
      "Storyline: Musical number-themed segment by two puppets",
      "Correct: Morris Cog and Milly Sprocket",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Numerical Melodies",
      "Character activity: Musical number-themed segment by two puppets",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38792",
    "category": "Television",
    "programme": "Playdays",
    "question": "Who performed Morris Cog in the Playdays Roundabout Stop segments?",
    "answers": [
      "Robin Fritz",
      "John Cunliffe",
      "Nick Mercer",
      "Dave Benson Phillips"
    ],
    "correctAnswer": "Nick Mercer",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Morris Cog performer",
      "Storyline: Morris Cog puppet performer",
      "Correct: Nick Mercer",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Morris Cog performer",
      "Character activity: Morris Cog puppet performer",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38793",
    "category": "Television",
    "programme": "Playdays",
    "question": "Who performed Milly Sprocket in Playdays?",
    "answers": [
      "Ellie Darvill",
      "Trish Cooke",
      "Elizabeth Fost",
      "Michele Durler"
    ],
    "correctAnswer": "Michele Durler",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Milly Sprocket performer",
      "Storyline: Milly Sprocket puppet performer",
      "Correct: Michele Durler",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Milly Sprocket performer",
      "Character activity: Milly Sprocket puppet performer",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38794",
    "category": "Television",
    "programme": "Playdays",
    "question": "What topic was celebrated in Morris and Milly's Numerical Melodies on Playdays?",
    "answers": [
      "A particular number",
      "A different animal",
      "A seasonal festival",
      "A fairy-tale villain"
    ],
    "correctAnswer": "A particular number",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Roundabout Stop",
      "Episode or segment: Numerical Melodies subject",
      "Storyline: Numerical Melodies musical education",
      "Correct: A particular number",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Numerical Melodies subject",
      "Character activity: Numerical Melodies musical education",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38795",
    "category": "Television",
    "programme": "Playdays",
    "question": "What did Why Bird and the drivers investigate with the Why-Tech machine on Playdays?",
    "answers": [
      "Train departure times",
      "Objects found in lost property",
      "Weather forecasts for the week",
      "Television ratings"
    ],
    "correctAnswer": "Objects found in lost property",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Playdays",
      "Programme: Playdays",
      "Why Bird Stop",
      "Episode or segment: Lost-property research",
      "Storyline: Investigating bus lost-property items",
      "Correct: Objects found in lost property",
      "Episode and character knowledge",
      "BBC",
      "1980s–2000s children's television",
      "Plot and setting: Lost-property research",
      "Character activity: Investigating bus lost-property items",
      "Source: https://en.wikipedia.org/wiki/Playdays"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38796",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What damaged the Ragdoll's paintwork in a Rosie and Jim adventure, prompting John to repaint it?",
    "answers": [
      "A bicycle falling against the hull",
      "Spilled cooking oil",
      "Scraping tree branches",
      "A loose lock gate"
    ],
    "correctAnswer": "Scraping tree branches",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Painting",
      "Storyline: Boat paint scraped while cruising",
      "Correct: Scraping tree branches",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Painting",
      "Character activity: Boat paint scraped while cruising",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38797",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "When the Ragdoll's tiller breaks in Rosie and Jim, how does John get the boat to a repairer?",
    "answers": [
      "A helicopter lifts it",
      "A ferry carries it",
      "A tractor pushes it",
      "A horse tows it"
    ],
    "correctAnswer": "A horse tows it",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Horse Towing",
      "Storyline: Broken tiller and horse towing",
      "Correct: A horse tows it",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Horse Towing",
      "Character activity: Broken tiller and horse towing",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38798",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What do Rosie and Jim use as windows in their sandpit boat after following John to a glassworks?",
    "answers": [
      "Glass marbles",
      "Pieces of coloured paper",
      "Bottle tops",
      "Seashells"
    ],
    "correctAnswer": "Glass marbles",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Glass",
      "Storyline: Making a model boat at the glassworks",
      "Correct: Glass marbles",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Glass",
      "Character activity: Making a model boat at the glassworks",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38799",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Where does John take his dirty clothes on a rainy day in Rosie and Jim?",
    "answers": [
      "A dry-cleaning van",
      "A launderette",
      "A monastery wash-house",
      "A ship's laundry"
    ],
    "correctAnswer": "A launderette",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Washing",
      "Storyline: Rainy-day washing trip",
      "Correct: A launderette",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Washing",
      "Character activity: Rainy-day washing trip",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38800",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "After watching sheep being shorn in Rosie and Jim, what does John trim on himself?",
    "answers": [
      "His eyebrows",
      "His moustache only",
      "His beard",
      "His fringe"
    ],
    "correctAnswer": "His beard",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Clipping",
      "Storyline: Sheep shearing inspires personal grooming",
      "Correct: His beard",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Clipping",
      "Character activity: Sheep shearing inspires personal grooming",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38801",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which farm animal does Jim mistakenly fear is a dragon in Rosie and Jim?",
    "answers": [
      "A calf",
      "A goose",
      "A donkey",
      "A sheep"
    ],
    "correctAnswer": "A sheep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Woollen Mill",
      "Storyline: Jim mistakes harmless livestock for dragon",
      "Correct: A sheep",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Woollen Mill",
      "Character activity: Jim mistakes harmless livestock for dragon",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38802",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What do Rosie and Jim secretly alter when John goes shopping for a picnic?",
    "answers": [
      "His shopping list",
      "The boat's timetable",
      "A recipe book",
      "The till receipt"
    ],
    "correctAnswer": "His shopping list",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Shopping",
      "Storyline: Picnic purchases changed by the dolls",
      "Correct: His shopping list",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Shopping",
      "Character activity: Picnic purchases changed by the dolls",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38803",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What damage do Rosie and Jim accidentally cause to John's blanket in Rosie and Jim?",
    "answers": [
      "They dye it green",
      "They tear large holes in it",
      "They shrink it in hot water",
      "They drop it into the canal"
    ],
    "correctAnswer": "They tear large holes in it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Weaving",
      "Storyline: Damaged blanket prompts weaving visit",
      "Correct: They tear large holes in it",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Weaving",
      "Character activity: Damaged blanket prompts weaving visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38804",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "When John's Ragdoll gets stuck on the River Severn in Rosie and Jim, what helps free it?",
    "answers": [
      "A passing motorbike",
      "A canal-side crane",
      "Another steam boat",
      "A team of horses"
    ],
    "correctAnswer": "Another steam boat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 1 John Cunliffe",
      "Episode or segment: Steam",
      "Storyline: Boat stranded on mud bank",
      "Correct: Another steam boat",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Steam",
      "Character activity: Boat stranded on mud bank",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38805",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What unusual instruments does John travel to Ashorne Hall to see in Rosie and Jim?",
    "answers": [
      "Instruments made of ice",
      "Instruments played underwater",
      "Instruments made only from glass",
      "Instruments that play themselves"
    ],
    "correctAnswer": "Instruments that play themselves",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Automata",
      "Storyline: Visit to see mechanical musical instruments",
      "Correct: Instruments that play themselves",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Automata",
      "Character activity: Visit to see mechanical musical instruments",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38806",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "At Netherly Farm in Rosie and Jim, John watches a dog doing what job?",
    "answers": [
      "Herding sheep",
      "Rescuing swimmers",
      "Guarding a railway crossing",
      "Finding lost luggage"
    ],
    "correctAnswer": "Herding sheep",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Sheepdog",
      "Storyline: Farm dog at work near Mathon",
      "Correct: Herding sheep",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Sheepdog",
      "Character activity: Farm dog at work near Mathon",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38807",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Why does John visit Bewdley in an episode of Rosie and Jim?",
    "answers": [
      "To repair a broken window",
      "To get a new rope for the Ragdoll",
      "To buy a second anchor",
      "To deliver a wedding cake"
    ],
    "correctAnswer": "To get a new rope for the Ragdoll",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Rope",
      "Storyline: Replacing boat rope",
      "Correct: To get a new rope for the Ragdoll",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Rope",
      "Character activity: Replacing boat rope",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38808",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does John accidentally break, leading to a timber-yard visit in Rosie and Jim?",
    "answers": [
      "A garden fence post",
      "A chair leg",
      "A wooden plank",
      "A walking stick"
    ],
    "correctAnswer": "A wooden plank",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Trees",
      "Storyline: Damaged plank replaced after timber-yard visit",
      "Correct: A wooden plank",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Trees",
      "Character activity: Damaged plank replaced after timber-yard visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38809",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What food are Rosie and Jim trying to return to John during his visit to see a brass windlass made?",
    "answers": [
      "A loaf of bread",
      "A pot of honey",
      "A bowl of custard",
      "Jelly"
    ],
    "correctAnswer": "Jelly",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Brass",
      "Storyline: Dolls return John's forgotten food",
      "Correct: Jelly",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Brass",
      "Character activity: Dolls return John's forgotten food",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38810",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What kind of small traditional boat does John learn about at Bewdley Museum in Rosie and Jim?",
    "answers": [
      "A coracle",
      "A gondola",
      "A catamaran",
      "A punt"
    ],
    "correctAnswer": "A coracle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Coracle",
      "Storyline: Museum visit about a river craft",
      "Correct: A coracle",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Coracle",
      "Character activity: Museum visit about a river craft",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38811",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which puppet performer does John watch at Stratford-upon-Avon's Swan Theatre in Rosie and Jim?",
    "answers": [
      "Mr Jolly",
      "Major Mustard",
      "Sooty",
      "Morris Cog"
    ],
    "correctAnswer": "Major Mustard",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 2 John Cunliffe",
      "Episode or segment: Puppet Show",
      "Storyline: Puppet theatre demonstration in Stratford",
      "Correct: Major Mustard",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Puppet Show",
      "Character activity: Puppet theatre demonstration in Stratford",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38812",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "How does Duck become separated from the Ragdoll while Pat cleans its roof in Rosie and Jim?",
    "answers": [
      "Duck flies away to a nearby farm",
      "A stranger takes him to a market",
      "Pat leaves him on the canal side",
      "Duck falls into a laundry basket"
    ],
    "correctAnswer": "Pat leaves him on the canal side",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: Duck Gets Lost",
      "Storyline: Duck accidentally left behind during cleaning",
      "Correct: Pat leaves him on the canal side",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Duck Gets Lost",
      "Character activity: Duck accidentally left behind during cleaning",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38813",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which baked treat does Pat watch being made at a Nuneaton bakery in Rosie and Jim?",
    "answers": [
      "Eccles cakes",
      "Jam doughnuts",
      "Chelsea buns",
      "Gingerbread men"
    ],
    "correctAnswer": "Gingerbread men",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: Gingerbread Man",
      "Storyline: Bakery visit in Nuneaton",
      "Correct: Gingerbread men",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Gingerbread Man",
      "Character activity: Bakery visit in Nuneaton",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38814",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What goes wrong with Rosie and Jim's packed luggage during a boating-holiday adventure?",
    "answers": [
      "Their suitcase gets mixed up with someone else's",
      "The boat sinks with all their belongings",
      "Their suitcase is eaten by a dog",
      "A gust of wind blows the case into a tree"
    ],
    "correctAnswer": "Their suitcase gets mixed up with someone else's",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: The Disappearing Sausages",
      "Storyline: Dolls' holiday belongings get confused",
      "Correct: Their suitcase gets mixed up with someone else's",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: The Disappearing Sausages",
      "Character activity: Dolls' holiday belongings get confused",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38815",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does Pat go to a factory to replace after it is lost in Rosie and Jim?",
    "answers": [
      "A bucket of polish",
      "A bar of soap",
      "A tin of paint",
      "A scrubbing brush"
    ],
    "correctAnswer": "A bar of soap",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: Soapy Duck",
      "Storyline: Dirty boat and visit to soap factory",
      "Correct: A bar of soap",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Soapy Duck",
      "Character activity: Dirty boat and visit to soap factory",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38816",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which traditional dancers does Pat meet in a Rosie and Jim episode at Abbey Primary School?",
    "answers": [
      "Flamenco dancers",
      "Ballet dancers",
      "Morris dancers",
      "Tap dancers"
    ],
    "correctAnswer": "Morris dancers",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: A Special Dance",
      "Storyline: Leicester Morris Men perform for pupils",
      "Correct: Morris dancers",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: A Special Dance",
      "Character activity: Leicester Morris Men perform for pupils",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38817",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does Rosie forget to turn off, accidentally flooding the Ragdoll in Rosie and Jim?",
    "answers": [
      "The engine's cooling valve",
      "A garden hose",
      "The bath overflow",
      "A water tap"
    ],
    "correctAnswer": "A water tap",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: Flood on the Boat",
      "Storyline: Dolls fetch Pat a drink; boat flooded",
      "Correct: A water tap",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Flood on the Boat",
      "Character activity: Dolls fetch Pat a drink; boat flooded",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38818",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Why does Pat arrange for the Ragdoll to be lifted out of the canal after finding water aboard?",
    "answers": [
      "She fears the hull has a hole",
      "She suspects a broken propeller",
      "She wants the boat repainted",
      "She needs to move to another canal"
    ],
    "correctAnswer": "She fears the hull has a hole",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 3 Pat Hutchins",
      "Episode or segment: Flood on the Boat inspection",
      "Storyline: Pat investigates unexpected floodwater",
      "Correct: She fears the hull has a hole",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Flood on the Boat inspection",
      "Character activity: Pat investigates unexpected floodwater",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38819",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does Pat accidentally drop into the canal, leading her to visit a jeweller in Rosie and Jim?",
    "answers": [
      "A brooch",
      "An earring",
      "A necklace",
      "A wristwatch"
    ],
    "correctAnswer": "An earring",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Earrings",
      "Storyline: Jewellery lost overboard",
      "Correct: An earring",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Earrings",
      "Character activity: Jewellery lost overboard",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38820",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Why does Pat look for a new home for a mouse found on the Ragdoll in Rosie and Jim?",
    "answers": [
      "It has chewed through the engine",
      "It belongs to a nearby school",
      "She thinks the boat is unsuitable for it",
      "It has eaten her drawings"
    ],
    "correctAnswer": "She thinks the boat is unsuitable for it",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Mouse on the Boat",
      "Storyline: Pat relocates a mouse humanely",
      "Correct: She thinks the boat is unsuitable for it",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Mouse on the Boat",
      "Character activity: Pat relocates a mouse humanely",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38821",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What food does Jim try to sneak while Pat visits a floating restaurant in Rosie and Jim?",
    "answers": [
      "Fish and chips",
      "A slice of pizza",
      "Chocolate biscuits",
      "Ice cream"
    ],
    "correctAnswer": "Ice cream",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Floating Restaurant",
      "Storyline: Jim's attempted snack during restaurant visit",
      "Correct: Ice cream",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Floating Restaurant",
      "Character activity: Jim's attempted snack during restaurant visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38822",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which lost animal does Pat help return to a family in Rosie and Jim?",
    "answers": [
      "A kitten",
      "A puppy",
      "A duckling",
      "A rabbit"
    ],
    "correctAnswer": "A kitten",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Little Lost Kitten",
      "Storyline: Lost pet returned to family",
      "Correct: A kitten",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Little Lost Kitten",
      "Character activity: Lost pet returned to family",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38823",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What kind of pet do Pat's friends bring aboard the Ragdoll for a vet appointment in Rosie and Jim?",
    "answers": [
      "A parrot",
      "A rabbit",
      "A dog",
      "A tortoise"
    ],
    "correctAnswer": "A rabbit",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Visiting the Vet",
      "Storyline: Friends travel to vet by narrowboat",
      "Correct: A rabbit",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Visiting the Vet",
      "Character activity: Friends travel to vet by narrowboat",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38824",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What remark upsets Rosie and Jim enough to race Laurence Hutchins in a Rosie and Jim adventure?",
    "answers": [
      "He says Duck cannot swim",
      "He calls their boat too noisy",
      "He says the Ragdoll is slow",
      "He says Pat cannot steer"
    ],
    "correctAnswer": "He says the Ragdoll is slow",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: Winning the Race",
      "Storyline: Race prompted by Laurence's teasing",
      "Correct: He says the Ragdoll is slow",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Winning the Race",
      "Character activity: Race prompted by Laurence's teasing",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38825",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What is wrong with Pat's umbrella before she visits a factory in Rosie and Jim?",
    "answers": [
      "Its handle has snapped off",
      "It has been stolen",
      "It will not close",
      "It has a hole"
    ],
    "correctAnswer": "It has a hole",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 4 Pat Hutchins",
      "Episode or segment: The Umbrella Factory",
      "Storyline: Rainy-day umbrella replacement",
      "Correct: It has a hole",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: The Umbrella Factory",
      "Character activity: Rainy-day umbrella replacement",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38826",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Where does Neil accidentally drop his harmonica in Rosie and Jim, making it play badly?",
    "answers": [
      "Into a children's water bowl",
      "Into a flowerpot",
      "Under the boat's engine",
      "Into a bag of flour"
    ],
    "correctAnswer": "Into a children's water bowl",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: Harmonica",
      "Storyline: Harmonica spoiled by water",
      "Correct: Into a children's water bowl",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Harmonica",
      "Character activity: Harmonica spoiled by water",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38827",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What accident prompts Neil to decorate a cake for children on another boat in Rosie and Jim?",
    "answers": [
      "Their oven stops working",
      "Their birthday cake falls into the water",
      "The baker delivers the wrong flavour",
      "Their cake is eaten by a dog"
    ],
    "correctAnswer": "Their birthday cake falls into the water",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: Cake",
      "Storyline: Replacing a lost birthday cake",
      "Correct: Their birthday cake falls into the water",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Cake",
      "Character activity: Replacing a lost birthday cake",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38828",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What personal item do Rosie and Jim chase after for Neil during a windy day?",
    "answers": [
      "His scarf",
      "His shoe",
      "His hat",
      "His concertina"
    ],
    "correctAnswer": "His hat",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: Windy Day",
      "Storyline: Wind blows Neil's clothing away",
      "Correct: His hat",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Windy Day",
      "Character activity: Wind blows Neil's clothing away",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38829",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Why does Neil visit the Woodland Workshop in Rosie and Jim?",
    "answers": [
      "A window frame has fallen out",
      "The boat's steering wheel is damaged",
      "A cupboard has lost its door",
      "Rosie and Jim have broken a chair"
    ],
    "correctAnswer": "Rosie and Jim have broken a chair",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: A New Chair",
      "Storyline: Broken chair leads to woodworking visit",
      "Correct: Rosie and Jim have broken a chair",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: A New Chair",
      "Character activity: Broken chair leads to woodworking visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38830",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What flying toy does Neil ask to have made after meeting children outdoors in Rosie and Jim?",
    "answers": [
      "A kite",
      "A model helicopter",
      "A toy aeroplane",
      "A paper glider"
    ],
    "correctAnswer": "A kite",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: A Duck Kite",
      "Storyline: Neil follows children flying toys",
      "Correct: A kite",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: A Duck Kite",
      "Character activity: Neil follows children flying toys",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38831",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What piece of furniture do Rosie and Jim accidentally damage before Neil visits a Bristol shop?",
    "answers": [
      "His desk",
      "His mattress",
      "His bedside cabinet",
      "His table"
    ],
    "correctAnswer": "His mattress",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: Bouncy Mattress",
      "Storyline: Boat bedding damaged by bouncing",
      "Correct: His mattress",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Bouncy Mattress",
      "Character activity: Boat bedding damaged by bouncing",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38832",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What sort of animal is Molly, whom Neil visits at Rode Bird Gardens in Rosie and Jim?",
    "answers": [
      "A performing seal",
      "A sheepdog",
      "A talking parrot",
      "A pony"
    ],
    "correctAnswer": "A talking parrot",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 5 Neil Brewer",
      "Episode or segment: Molly The Parrot",
      "Storyline: Neil encounters a talking bird",
      "Correct: A talking parrot",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Molly The Parrot",
      "Character activity: Neil encounters a talking bird",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38833",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which type of restaurant does Neil visit after becoming hungry in Rosie and Jim?",
    "answers": [
      "An Italian pizzeria",
      "An Indian restaurant",
      "A French bistro",
      "A Chinese restaurant"
    ],
    "correctAnswer": "A Chinese restaurant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Oodles Of Noodles",
      "Storyline: Noodles made at a restaurant",
      "Correct: A Chinese restaurant",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Oodles Of Noodles",
      "Character activity: Noodles made at a restaurant",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38834",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What item falls apart and prompts Neil to try DIY on the Ragdoll in Rosie and Jim?",
    "answers": [
      "A cabinet",
      "A bed frame",
      "A wooden door",
      "A dining table"
    ],
    "correctAnswer": "A cabinet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Do It Yourself",
      "Storyline: Broken cupboard furniture",
      "Correct: A cabinet",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Do It Yourself",
      "Character activity: Broken cupboard furniture",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38835",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "On what does Duck drift away after Rosie and Jim accidentally push him from the Ragdoll?",
    "answers": [
      "An inflatable ring",
      "A piece of driftwood",
      "An empty barrel",
      "A toy raft"
    ],
    "correctAnswer": "A piece of driftwood",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Floating Duck",
      "Storyline: Duck floating on the River Thames",
      "Correct: A piece of driftwood",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Floating Duck",
      "Character activity: Duck floating on the River Thames",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38836",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which London bridge does Neil visit to discover how its lifting mechanism works in Rosie and Jim?",
    "answers": [
      "London Bridge",
      "Westminster Bridge",
      "Tower Bridge",
      "Waterloo Bridge"
    ],
    "correctAnswer": "Tower Bridge",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Raising the Road",
      "Storyline: London bascule bridge machinery",
      "Correct: Tower Bridge",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Raising the Road",
      "Character activity: London bascule bridge machinery",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38837",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which musical group plays the Rosie and Jim theme aboard the Ragdoll in an episode with Neil?",
    "answers": [
      "The Salvation Army Band",
      "The London Symphony Orchestra",
      "The Royal Marines Band",
      "The Dulwich Junior Brass Band"
    ],
    "correctAnswer": "The Dulwich Junior Brass Band",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Music Boat",
      "Storyline: Junior brass musicians on narrowboat",
      "Correct: The Dulwich Junior Brass Band",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Music Boat",
      "Character activity: Junior brass musicians on narrowboat",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38838",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What instrument does Rosie and Jim help retrieve after a street musician loses it in the canal?",
    "answers": [
      "His drum",
      "His trumpet",
      "His accordion",
      "His guitar"
    ],
    "correctAnswer": "His drum",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: One Man Band",
      "Storyline: Busker's instrument recovered from water",
      "Correct: His drum",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: One Man Band",
      "Character activity: Busker's instrument recovered from water",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38839",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What do Rosie and Jim secretly prepare to cheer Neil up on his birthday?",
    "answers": [
      "A new concertina",
      "Party invitations",
      "A birthday cake",
      "A painting of the boat"
    ],
    "correctAnswer": "Party invitations",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 6 Neil Brewer",
      "Episode or segment: Music Party",
      "Storyline: Birthday reunion guests invited",
      "Correct: Party invitations",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Music Party",
      "Character activity: Birthday reunion guests invited",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38840",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which insect does Neil follow to learn how honey is made in Rosie and Jim?",
    "answers": [
      "A butterfly",
      "A ladybird",
      "A bee",
      "A dragonfly"
    ],
    "correctAnswer": "A bee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Sticky Honey",
      "Storyline: Honey-making discovery at farm",
      "Correct: A bee",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Sticky Honey",
      "Character activity: Honey-making discovery at farm",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38841",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What piece of boating equipment must Neil replace after losing it in a lake in Rosie and Jim?",
    "answers": [
      "The boat's rudder",
      "The mooring bollard",
      "The life ring",
      "The anchor and chain"
    ],
    "correctAnswer": "The anchor and chain",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Anchor and Chain",
      "Storyline: Lost anchor prompts chain-making visit",
      "Correct: The anchor and chain",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Anchor and Chain",
      "Character activity: Lost anchor prompts chain-making visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38842",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does a passing knight drop, which Neil returns at Belvoir Castle in Rosie and Jim?",
    "answers": [
      "A plume",
      "A sword",
      "A shield",
      "A gauntlet"
    ],
    "correctAnswer": "A plume",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Shining Armour",
      "Storyline: Knight's helmet decoration returned",
      "Correct: A plume",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Shining Armour",
      "Character activity: Knight's helmet decoration returned",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38843",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Which creature repeatedly appears in Neil's shoes, hat and biscuit box in Rosie and Jim?",
    "answers": [
      "A mouse",
      "A frog",
      "A lizard",
      "A beetle"
    ],
    "correctAnswer": "A frog",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Naughty Little Frog",
      "Storyline: Animal plays hide and seek aboard boat",
      "Correct: A frog",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Naughty Little Frog",
      "Character activity: Animal plays hide and seek aboard boat",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38844",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What do Rosie and Jim keep moving while an artist tries to draw the Ragdoll in Rosie and Jim?",
    "answers": [
      "Neil's bicycle",
      "The anchor",
      "Duck",
      "A flowerpot"
    ],
    "correctAnswer": "Duck",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Artist at Work",
      "Storyline: Puppet changes position during drawing",
      "Correct: Duck",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Artist at Work",
      "Character activity: Puppet changes position during drawing",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38845",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What does Neil mistake for a ghost when trying to keep fit in Rosie and Jim?",
    "answers": [
      "A floating white balloon",
      "A swan at the window",
      "A coat on a hook",
      "Rosie and Jim beneath a sheet"
    ],
    "correctAnswer": "Rosie and Jim beneath a sheet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Keep Fit",
      "Storyline: Disguised dolls startle Neil",
      "Correct: Rosie and Jim beneath a sheet",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Keep Fit",
      "Character activity: Disguised dolls startle Neil",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38846",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What animal is the mysterious very big baby Neil discovers at Twycross Zoo in Rosie and Jim?",
    "answers": [
      "An elephant",
      "A giraffe",
      "A rhinoceros",
      "A hippopotamus"
    ],
    "correctAnswer": "An elephant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Baby Elephant",
      "Storyline: Zoo baby needing a wash",
      "Correct: An elephant",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Baby Elephant",
      "Character activity: Zoo baby needing a wash",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38847",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What mistake leads Neil to call out lifeboat rescuers for the Ragdoll in Rosie and Jim?",
    "answers": [
      "Neil steers into a fallen tree",
      "Rosie and Jim untie the wrong mooring ropes",
      "The engine runs out of fuel",
      "Duck gets trapped in the lock"
    ],
    "correctAnswer": "Rosie and Jim untie the wrong mooring ropes",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Lifeboat Rescue",
      "Storyline: Boat drifts away after mooring mistake",
      "Correct: Rosie and Jim untie the wrong mooring ropes",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Lifeboat Rescue",
      "Character activity: Boat drifts away after mooring mistake",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38848",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "How does Neil transport the Ragdoll between waterways in a Rosie and Jim adventure?",
    "answers": [
      "By railway wagon",
      "On an ocean ferry",
      "On the back of a lorry",
      "Suspended beneath a helicopter"
    ],
    "correctAnswer": "On the back of a lorry",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 7 Neil Brewer",
      "Episode or segment: Road Boat",
      "Storyline: Narrowboat travels by road",
      "Correct: On the back of a lorry",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Road Boat",
      "Character activity: Narrowboat travels by road",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38849",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What happens to Poppy the dog after Rosie and Jim interfere with Neil's walk?",
    "answers": [
      "She falls asleep in a basket",
      "She falls into the canal",
      "She chews through a lead",
      "She runs away"
    ],
    "correctAnswer": "She runs away",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Disappearing Dog",
      "Storyline: Walk with dog disrupted",
      "Correct: She runs away",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Disappearing Dog",
      "Character activity: Walk with dog disrupted",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38850",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What important item does Neil forget before acting as best man at a wedding in Rosie and Jim?",
    "answers": [
      "The wedding ring",
      "His suit jacket",
      "The bouquet",
      "The wedding cake"
    ],
    "correctAnswer": "The wedding ring",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Where's the Wedding Ring",
      "Storyline: Rosie rescues forgotten ceremony item",
      "Correct: The wedding ring",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Where's the Wedding Ring",
      "Character activity: Rosie rescues forgotten ceremony item",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38851",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "Whose visit to lunch aboard the Ragdoll causes Rosie and Jim to make a mess while trying to help?",
    "answers": [
      "Pat Hutchins",
      "Neil's mother",
      "A local mayor",
      "The boat's mechanic"
    ],
    "correctAnswer": "Neil's mother",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Mother's Day",
      "Storyline: Family lunch preparation goes awry",
      "Correct: Neil's mother",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Mother's Day",
      "Character activity: Family lunch preparation goes awry",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38852",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What happens to Duck when Neil runs a jumble sale in Rosie and Jim?",
    "answers": [
      "He falls into the river",
      "He gets left on a train",
      "He is accidentally sold",
      "He is hidden inside a cupboard"
    ],
    "correctAnswer": "He is accidentally sold",
    "difficulty": "Hard",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Jumble Duck",
      "Storyline: Duck mistakenly included in sale",
      "Correct: He is accidentally sold",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Jumble Duck",
      "Character activity: Duck mistakenly included in sale",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38853",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What activity uses a trail of flour for runners to follow in a Rosie and Jim episode?",
    "answers": [
      "Orienteering with compasses",
      "A relay race",
      "Hopscotch",
      "Hashing"
    ],
    "correctAnswer": "Hashing",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Flour Trail",
      "Storyline: Running trail marked with flour",
      "Correct: Hashing",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Flour Trail",
      "Character activity: Running trail marked with flour",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38854",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "What piece of equipment needs replacing after catching on a lock gate in Rosie and Jim?",
    "answers": [
      "The Ragdoll's bow fender",
      "The Ragdoll's roof light",
      "The Ragdoll's rudder",
      "The Ragdoll's horn"
    ],
    "correctAnswer": "The Ragdoll's bow fender",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Lots of Knots",
      "Storyline: Boat fender damaged at lock",
      "Correct: The Ragdoll's bow fender",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Lots of Knots",
      "Character activity: Boat fender damaged at lock",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38855",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "How does Neil injure himself while mooring the Ragdoll in Rosie and Jim?",
    "answers": [
      "He breaks his wrist",
      "He sprains his ankle",
      "He burns his hand",
      "He injures his shoulder"
    ],
    "correctAnswer": "He sprains his ankle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Hop to the Hospital",
      "Storyline: Mooring accident requires hospital visit",
      "Correct: He sprains his ankle",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Hop to the Hospital",
      "Character activity: Mooring accident requires hospital visit",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_38856",
    "category": "Television",
    "programme": "Rosie and Jim",
    "question": "How many little ducklings board the Ragdoll and are returned to their mother in Rosie and Jim?",
    "answers": [
      "Two",
      "Four",
      "Three",
      "Five"
    ],
    "correctAnswer": "Three",
    "difficulty": "Easy",
    "tags": [
      "Television",
      "British Television",
      "Children's Television",
      "Rosie and Jim",
      "Programme: Rosie and Jim",
      "Series 8 Neil Brewer",
      "Episode or segment: Little Ducklings",
      "Storyline: Ducklings and mother reunited",
      "Correct: Three",
      "Episode and character knowledge",
      "ITV",
      "1980s–2000s children's television",
      "Plot and setting: Little Ducklings",
      "Character activity: Ducklings and mother reunited",
      "Source: https://en.wikipedia.org/wiki/Rosie_and_Jim"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const normaliseAudit = value => value.normalize('NFKC').trim().toLocaleLowerCase('en-GB');
if (new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normaliseAudit(q.question))).size !== questions.length ||
 questions.some(q=>q.answers.length!==4 ||
  new Set(q.answers.map(normaliseAudit)).size!==4 ||
  q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
  q.tags.length<14 || !q.tags.includes('Programme: '+q.programme) ||
  q.dailyEligible!==true))
 throw Error('Pack 353 audit addition validation failed');
module.exports = questions;