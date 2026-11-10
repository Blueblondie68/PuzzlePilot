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

module.exports = questions;