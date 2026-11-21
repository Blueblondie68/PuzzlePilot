
 // quiz_pack301.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Six (2012)
 // Covers all 22 broadcast episodes.
 // Seven individually chosen specialist tags per question.
 // This pack is already connected in quiz_bank.js (packs 1–558).
 // Format: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven tags

 const groups = [
   {
     topic: 'New Year, Tracy and the Best Friends Gang',
     facts: `In which year did the sixth series of 30 Rock begin airing in the United States?|2012|2010|2011|2013|Easy|January Premiere|Season Six|NBC Broadcast|Original Run|American Sitcom|Television Chronology|Midseason Launch
 Which new competition show features Jenna as a harsh judge at the start of Series Six?|America's Kidz Got Singing|The Voice|American Idol|The X Factor|Easy|Jenna Maroney|Talent Competition|Dance Like Nobodys Watching|Child Performers|Television Judge|NBC Show Within Show|2012 Premiere
 What apocalyptic event does Kenneth believe is approaching in Dance Like Nobody's Watching?|The Rapture|An asteroid collision|A solar eclipse|A volcanic eruption|Easy|Kenneth Parcell|The Rapture|End Of The World|Dance Like Nobodys Watching|Religious Belief|Dream Chores|Season Premiere
 What surprises Tracy about Liz when he tries to upset her after the Christmas break?|She remains unusually happy|She announces she is leaving NBC|She refuses to speak to Jack|She joins his film crew|Easy|Tracy Jordan|Liz Lemon|Unusual Happiness|Dance Like Nobodys Watching|Failed Provocation|New Outlook|2012 Story
 Who plays Liz's new boyfriend Criss Chros in Series Six?|James Marsden|Jon Hamm|Jason Sudeikis|Matt Damon|Medium|James Marsden|Criss Chros|Actor Casting|Liz Lemon|New Boyfriend|Romantic Partner|Season Six
 What causes a public relations crisis for Tracy in Idiots Are People Two!?|An offensive rant captured on a phone|A leaked tax return|A disputed awards speech|A cancelled theatre performance|Easy|Tracy Jordan|Mobile Phone Video|Idiots Are People Two|Offensive Remarks|Public Controversy|Viral Recording|Image Crisis
 Whose approval does Liz try to avoid seeking for her relationship with Criss?|Jack Donaghy's|Kenneth Parcell's|Pete Hornberger's|Tracy Jordan's|Easy|Liz Lemon|Criss Chros|Jack Donaghy|Idiots Are People Two|Disapproval|Relationship Secrecy|Romance
 Which former Frasier star helps Jenna and Kenneth with a problem in Idiots Are People Two!?|Kelsey Grammer|David Hyde Pierce|John Mahoney|Peri Gilpin|Medium|Kelsey Grammer|Best Friends Gang|Jenna Maroney|Kenneth Parcell|Idiots Are People Two|Guest Star|Comic Scheme
 Which corporate rival reappears to challenge Jack in Idiots Are People Three!?|Devon Banks|Don Geiss|Milton Greene|Gavin Volure|Easy|Devon Banks|Jack Donaghy|Idiots Are People Three|Corporate Rivalry|NBC Executive|Returning Character|2012 Episode
 Which character organises a campaign in defence of people he considers idiots?|Tracy Jordan|Pete Hornberger|Kenneth Parcell|Danny Baker|Easy|Tracy Jordan|Idiots Are People Three|Public Protest|Defence Of Idiots|Liz Lemon|Media Backlash|Celebrity Activism
 Who tries to interfere with Liz's relationship by pressuring Criss in Idiots Are People Three!?|Jack Donaghy|Frank Rossitano|Dennis Duffy|Devon Banks|Easy|Jack Donaghy|Criss Chros|Liz Lemon|Idiots Are People Three|Ultimatum|Relationship Interference|Corporate Mentor`,
   },
   {
     topic: 'Kenneth, Contracts and Valentines',
     facts: `Which friend does Liz believe has abandoned their friendship for greater fame in The Ballad of Kenneth Parcell?|Jenna Maroney|Cerie Xerox|Angie Jordan|Avery Jessup|Medium|Liz Lemon|Jenna Maroney|The Ballad Of Kenneth Parcell|Friendship Strain|Celebrity Status|Search For New Friend|2012 Episode
 Which long-running NBC staff programme does Jack decide to end in The Ballad of Kenneth Parcell?|The page programme|The news division|The wardrobe department|The radio service|Medium|Jack Donaghy|NBC Pages|The Ballad Of Kenneth Parcell|Programme Closure|Hank Hooper|Cost Cutting|Kenneth Parcell
 Who is particularly affected by the proposed cancellation of the NBC page programme?|Kenneth Parcell|Frank Rossitano|Toofer Spurlock|Pete Hornberger|Easy|Kenneth Parcell|NBC Page Career|The Ballad Of Kenneth Parcell|Workplace Change|Jack Donaghy|Programme Closure|Staff Identity
 What do Jack and Liz negotiate over in Today You Are a Man?|Liz's employment contract|Ownership of her apartment|Tracy's film rights|Jenna's recording deal|Easy|Jack Donaghy|Liz Lemon|Employment Contract|Today You Are A Man|Salary Negotiation|Workplace Power|2012 Story
 At what kind of celebration are Tracy and Jenna hired to perform in Today You Are a Man?|A bar mitzvah|A wedding reception|A retirement party|A university graduation|Easy|Tracy Jordan|Jenna Maroney|Bar Mitzvah|Today You Are A Man|Outside Performance|Paid Entertainment|2012 Episode
 What does Kenneth request after feeling mistreated by his colleagues in Today You Are a Man?|A new page assignment|A promotion to head writer|A job in London|Early retirement|Easy|Kenneth Parcell|Today You Are A Man|Page Reassignment|Workplace Resentment|TGS Staff|New Department|NBC Pages
 Which furniture retailer causes Liz and Criss difficulty on Valentine's Day in Hey, Baby, What's Wrong?|IKEA|Habitat|DFS|John Lewis|Easy|Liz Lemon|Criss Chros|IKEA|Hey Baby Whats Wrong|Valentines Day|Furniture Shopping|Relationship Test
 What piece of furniture are Liz and Criss trying to buy in Hey, Baby, What's Wrong?|A dining table|A sofa bed|A wardrobe|A bookcase|Easy|Dining Table|Liz Lemon|Criss Chros|Hey Baby Whats Wrong|Flat Pack Furniture|Valentines Day|Home Life
 Which actress plays Avery's mother Diana Jessup, who visits Jack in Hey, Baby, What's Wrong?|Mary Steenburgen|Megan Mullally|Julianne Moore|Elaine Stritch|Medium|Mary Steenburgen|Diana Jessup|Avery Jessup|Jack Donaghy|Hey Baby Whats Wrong|Mother In Law|Guest Casting
 Which TGS writer is helped in his search for a Valentine's Day date by Tracy and Frank?|J. D. Lutz|Toofer Spurlock|Josh Girard|Pete Hornberger|Medium|J D Lutz|Tracy Jordan|Frank Rossitano|Valentines Date|Hey Baby Whats Wrong|Writers Room|Matchmaking
 What campaign does Jack consider after being mugged in The Tuxedo Begins?|Running for mayor of New York|Standing for Congress|Becoming an NBC union representative|Running for state governor|Easy|Jack Donaghy|New York Mayoral Race|The Tuxedo Begins|Street Mugging|Political Ambition|Wealthy Citizens|City Politics
 Which couple experiment with behaving like an ordinary pair in The Tuxedo Begins?|Jenna and Paul|Liz and Criss|Tracy and Angie|Jack and Avery|Easy|Jenna Maroney|Paul Lastname|The Tuxedo Begins|Unconventional Couple|Everyday Behaviour|Relationship Experiment|2012 Plot`,
   },
   {
     topic: 'Leap Day, Missing Whisky and Network Standards',
     facts: `Which unusual calendar date forms the setting of the Series Six episode Leap Day?|29 February|1 April|31 October|21 June|Medium|Leap Day|29 February|Leap Year|2012 Calendar|Holiday Celebration|Episode Setting|Intercalary Day
 What gift does Tracy try to use before it expires in Leap Day?|A restaurant gift card|A theatre voucher|An airline credit|A spa membership|Easy|Tracy Jordan|Restaurant Gift Card|Leap Day|TGS Writers|Expiring Voucher|Food Spending|2012 Episode
 Whom does Jenna try to attract with Liz's help in Leap Day?|An internet billionaire|A Broadway producer|A television chef|A newspaper columnist|Easy|Jenna Maroney|Liz Lemon|Internet Billionaire|Leap Day|Romantic Pursuit|Wealthy Admirer|2012 Story
 Which film star appears in the fictional Leap Day television movie within 30 Rock?|Jim Carrey|Steve Martin|Matt Damon|Will Arnett|Medium|Jim Carrey|Leap Day Movie|Dave Williams|Guest Cameo|Fictional Holiday Film|2012 Episode|Actor Appearance
 Who directed the 30 Rock episode Leap Day?|Steve Buscemi|Tina Fey|Alec Baldwin|Lorne Michaels|Hard|Steve Buscemi|Leap Day|Episode Director|Behind The Scenes|February 2012|Television Direction|Production Credit
 Whose mother does Frank try to deceive by pretending that Liz is his girlfriend?|His own mother|Liz's mother|Jenna's mother|Kenneth's mother|Easy|Frank Rossitano|Sylvia Rossitano|Liz Lemon|Fake Relationship|Alexis Goodlooking|Family Deception|2012 Plot
 Which actress plays Frank's mother Sylvia Rossitano?|Patti LuPone|Anita Gillette|Jan Hooks|Elaine Stritch|Medium|Patti LuPone|Sylvia Rossitano|Alexis Goodlooking|Broadway Actress|Guest Casting|Frank Rossitano|2012 Episode
 What missing item do Tracy and Jenna investigate in Alexis Goodlooking and the Case of the Missing Whisky?|Pete's whisky|Jack's watch|Liz's laptop|Kenneth's uniform|Easy|Pete Hornberger|Missing Whisky|Tracy Jordan|Jenna Maroney|Amateur Detectives|Alexis Goodlooking|Office Mystery
 Which new department gives Kenneth the authority to police the content of TGS?|Standards and Practices|Network News|Audience Research|Human Resources|Easy|Kenneth Parcell|Standards And Practices|Content Regulation|NBC Department|Liz Lemon|Workplace Authority|2012 Episode
 Which young corporate rival causes trouble for Jack in Standards and Practices?|Kaylie Hooper|Kathy Geiss|Cerie Xerox|Abby Flynn|Medium|Kaylie Hooper|Jack Donaghy|Standards And Practices|Kabletown Heir|Teenage Rival|Corporate Succession|2012 Plot
 Which actress plays Jack's teenage rival Kaylie Hooper?|Chloë Grace Moretz|Elle Fanning|Dakota Fanning|Emma Roberts|Hard|Chloe Grace Moretz|Kaylie Hooper|Standards And Practices|Guest Actress|Jack Donaghy|Young Rival|2012 Casting
 Which former boyfriend returns to disrupt Liz's St. Patrick's Day with Criss?|Dennis Duffy|Floyd DeBarber|Carol Burnett|Drew Baird|Easy|Dennis Duffy|Liz Lemon|Criss Chros|St Patricks Day|Ex Boyfriend|Unwanted Visit|2012 Episode
 What type of game does Jack play with the writers in St. Patrick's Day?|A fantasy strategy board game|A televised poker game|A word-search tournament|An online football game|Medium|Jack Donaghy|Strategy Board Game|St Patricks Day|TGS Writers|Competitive Play|Personal Challenge|2012 Story`,
   },
   {
     topic: 'Hazel, Avery and the Search for Inspiration',
     facts: `Which newcomer does Liz agree to mentor in Grandmentor?|Hazel Wassername|Abby Flynn|Kaylie Hooper|Nancy Donovan|Easy|Liz Lemon|Hazel Wassername|Grandmentor|Career Mentoring|New Page|Showbusiness Advice|2012 Episode
 Which actress plays Hazel Wassername in Series Six?|Kristen Schaal|Jenny Slate|Ellie Kemper|Aubrey Plaza|Medium|Kristen Schaal|Hazel Wassername|Guest Casting|NBC Page|Grandmentor|Recurring Character|2012 Arrival
 Whose well-being does Kenneth worry about when Hazel takes on responsibilities in Grandmentor?|Tracy Jordan's|Jack Donaghy's|Floyd DeBarber's|Don Geiss's|Easy|Kenneth Parcell|Hazel Wassername|Tracy Jordan|Grandmentor|Page Duties|Protective Friendship|Workplace Mistakes
 What sort of programme does Jack commission to keep his absent wife in the public eye in Grandmentor?|A television film about her kidnapping|A new reality dating show|A nightly political news show|An international travel documentary|Medium|Jack Donaghy|Avery Jessup|Television Film|Grandmentor|North Korea|Kidnapping Story|Publicity Strategy
 Who writes the television film about Avery's ordeal in Kidnapped by Danger?|Liz Lemon|Jenna Maroney|Angie Jordan|Diana Jessup|Easy|Liz Lemon|Avery Jessup|Kidnapped By Danger|Screenplay|Television Film|Jack Donaghy|2012 Episode
 Who plays Jack's character in the television film within Kidnapped by Danger?|Lance Drake Mandrell|Carol Burnett|Gavin Volure|Dennis Duffy|Medium|Lance Drake Mandrell|Jack Donaghy|Kidnapped By Danger|Television Film Casting|Fictional Actor|Avery Kidnapping|2012 Story
 Which actor portrays Lance Drake Mandrell in Kidnapped by Danger?|William Baldwin|Alec Baldwin|Stephen Baldwin|Daniel Baldwin|Hard|William Baldwin|Lance Drake Mandrell|Kidnapped By Danger|Baldwin Brother|Guest Casting|Film Within Show|2012 Episode
 Which musician do Jenna and Tracy try to outsmart in Kidnapped by Danger?|Weird Al Yankovic|Jon Bon Jovi|Elton John|Clay Aiken|Medium|Weird Al Yankovic|Jenna Maroney|Tracy Jordan|Kidnapped By Danger|Song Parody|Celebrity Rivalry|Music Guest
 What new role does Kenneth take at NBC in Kidnapped by Danger?|Janitor|Studio director|News presenter|Chief executive|Easy|Kenneth Parcell|Janitorial Job|Kidnapped By Danger|NBC Building|Career Change|Former Page|2012 Episode
 What everyday activity is linked to Jack's quest for a breakthrough idea in The Shower Principle?|Taking a shower|Playing tennis|Cooking breakfast|Driving to work|Easy|Jack Donaghy|Shower Principle|Inspiration|Kabletown|Business Innovation|Hank Hooper|2012 Episode
 Why does Tracy accept a new film job in The Shower Principle?|To pay a large tax bill|To impress Liz's parents|To fulfil a charity promise|To win a music award|Easy|Tracy Jordan|Tax Bill|The Shower Principle|Film Work|Financial Pressure|Income|2012 Plot
 Which character tries to escape her repetitive habits by taking up a new hobby in The Shower Principle?|Liz Lemon|Jenna Maroney|Avery Jessup|Angie Jordan|Easy|Liz Lemon|The Shower Principle|New Hobby|Personal Routine|Self Reinvention|Stagnation|2012 Story`,
   },
   {
     topic: 'Scents, The Woggels and a New Business',
     facts: `Which sense does Tracy unexpectedly recover in Nothing Left to Lose?|Smell|Hearing|Taste|Sight|Easy|Tracy Jordan|Sense Of Smell|Nothing Left To Lose|Recovered Sense|Sensory Memory|Personal Change|2012 Episode
 Whose scent becomes strangely important to Tracy after his sense of smell returns?|Liz Lemon's|Jenna Maroney's|Angie Jordan's|Avery Jessup's|Easy|Liz Lemon|Tracy Jordan|Familiar Scent|Nothing Left To Lose|Emotional Attachment|Recovered Smell|2012 Story
 Whose lack of ambition does Jack attempt to cure in Nothing Left to Lose?|Pete Hornberger's|Frank Rossitano's|Danny Baker's|Kenneth Parcell's|Easy|Jack Donaghy|Pete Hornberger|Nothing Left To Lose|Career Ambition|Executive Mentoring|Personal Reinvention|2012 Episode
 Who engages in a prank war with the TGS writers in Nothing Left to Lose?|Jenna Maroney|Cerie Xerox|Angie Jordan|Diana Jessup|Easy|Jenna Maroney|TGS Writers|Nothing Left To Lose|Prank War|Workplace Rivalry|Comedic Revenge|2012 Story
 Which Australian children's music group is parodied by the fictional Woggels?|The Wiggles|Hi-5|The Doodlebops|The Fresh Beat Band|Medium|The Wiggles|The Woggels|Meet The Woggels|Australian Music|Children Entertainment|Fictional Band|2012 Episode
 Which TGS performer gets romantically involved with a member of The Woggels?|Jenna Maroney|Liz Lemon|Cerie Xerox|Angie Jordan|Easy|Jenna Maroney|The Woggels|Band Member|Meet The Woggels|Sexual Walkabout|Music Industry|2012 Story
 Which relative disrupts Jack's ribbon-cutting ceremony in Meet the Woggels!?|His mother Colleen|His father Milton|His brother Eddie|His daughter Liddy|Medium|Colleen Donaghy|Jack Donaghy|Meet The Woggels|Ribbon Cutting|Mother Son Conflict|New Business|2012 Episode
 Which family decision is Tracy unhappy about in Meet the Woggels!?|His son wants to attend college|His wife plans to move abroad|His daughter wants to become a pilot|His father wants to remarry|Easy|Tracy Jordan|College Decision|Meet The Woggels|Parenting Disagreement|Tracy Son|Higher Education|2012 Plot
 What does Jack arrange for Liz in Murphy Brown Lied to Us?|A blind date|A former TGS writer|An NBC newsreader|A retired astronaut|Easy|Jack Donaghy|Liz Lemon|Blind Date|Murphy Brown Lied To Us|Criss Chros|Dating Intervention|2012 Episode
 What does Jenna stage to win back her boyfriend Paul in Murphy Brown Lied to Us?|A public breakdown|A fake wedding|A televised singing contest|A political protest|Easy|Jenna Maroney|Paul Lastname|Staged Breakdown|Murphy Brown Lied To Us|Publicity Stunt|Romantic Reconciliation|2012 Story
 What product does Jack attempt to manufacture as part of a new business venture in Murphy Brown Lied to Us?|Couches|Microwave ovens|Smartphones|Kitchen blenders|Medium|Jack Donaghy|Couch Factory|Murphy Brown Lied To Us|Kabletown Business|Manufacturing|Corporate Innovation|2012 Episode`,
   },
   {
     topic: 'Live Television and Queen of Jordan Returns',
     facts: `Which character argues in favour of keeping TGS live in Live from Studio 6H?|Kenneth Parcell|Devon Banks|Floyd DeBarber|Criss Chros|Easy|Kenneth Parcell|Live From Studio 6H|Live Television|Broadcast History|TGS Production|Defending Live Shows|2012 Episode
 What change does Kabletown consider making to TGS in Live from Studio 6H?|Ending live performances|Moving the show to London|Replacing the entire cast|Turning it into a sports programme|Easy|Kabletown|TGS Live Production|Live From Studio 6H|Budget Decision|Broadcast Format|Network Policy|2012 Episode
 How many live versions of Live from Studio 6H were performed for American audiences?|Two|One|Three|Four|Easy|East Coast Version|West Coast Version|Live From Studio 6H|Broadcast Time Zones|Live Performances|2012 Television|Episode Production
 Which former Beatle makes an appearance in the East Coast version of Live from Studio 6H?|Paul McCartney|Ringo Starr|George Harrison|John Lennon|Medium|Paul McCartney|Live From Studio 6H|East Coast Broadcast|Musical Cameo|Beatles Member|Celebrity Appearance|2012 Special
 Which reality television programme takes over TGS again in Queen of Jordan 2?|Queen of Jordan|America's Kidz Got Singing|MILF Island|Dealbreakers|Medium|Queen Of Jordan|Angie Jordan|Reality Television|Second Appearance|TGS Filming|Show Within Show|2012 Episode
 Whose wife is the star of Queen of Jordan?|Tracy Jordan's|Jack Donaghy's|Pete Hornberger's|Kenneth Parcell's|Easy|Angie Jordan|Tracy Jordan|Queen Of Jordan Two|Reality Star|Marriage|Television Publicity|2012 Story
 Which family member of Avery's continues to complicate Jack's personal life in Queen of Jordan 2?|Her mother Diana|Her father Hank|Her sister Nancy|Her brother Devon|Medium|Diana Jessup|Jack Donaghy|Avery Jessup|Queen Of Jordan Two|Family Complication|Romantic Tension|2012 Episode
 What unusual mystery is named in the subtitle of the second Queen of Jordan episode?|The Phantom Pooper|The Missing Emmy|The Vanishing Page|The Stolen Necklace|Medium|Phantom Pooper|Queen Of Jordan Two|Episode Subtitle|Reality Show Spoof|Mystery Theme|2012 Broadcast|Television Satire`,
   },
   {
     topic: 'Avery Returns and the Series Six Finale',
     facts: `From which country does Avery Jessup return in the penultimate episode of Series Six?|North Korea|China|Russia|Cuba|Easy|Avery Jessup|North Korea|The Return Of Avery Jessup|Hostage Release|Jack Donaghy|Reunion|2012 Episode
 Who is Avery Jessup's mother, portrayed by Mary Steenburgen?|Diana Jessup|Nancy Donovan|Colleen Donaghy|Bianca Donaghy|Medium|Diana Jessup|Mary Steenburgen|Avery Jessup|The Return Of Avery Jessup|Mother Daughter Relationship|Guest Character|2012 Story
 What does Jack suspect about Avery's time in captivity after she returns?|She had a relationship with another man|She became a television producer|She trained as a doctor|She wrote a bestselling novel|Easy|Jack Donaghy|Avery Jessup|Captivity Suspicions|The Return Of Avery Jessup|Jealousy|Marriage Trust|2012 Plot
 What change in their household roles causes friction between Liz and Criss in The Return of Avery Jessup?|Liz earns more money|Criss becomes head writer|Liz stops working|Criss becomes a television actor|Easy|Liz Lemon|Criss Chros|Breadwinner|The Return Of Avery Jessup|Gender Roles|Relationship Tension|2012 Episode
 Whose wedding does Jenna seek sponsorship for in The Return of Avery Jessup?|Her own wedding to Paul|Liz's wedding to Criss|Tracy's wedding anniversary|Kenneth's fictional wedding|Easy|Jenna Maroney|Paul Lastname|Wedding Sponsorship|The Return Of Avery Jessup|Tracy Jordan|Kenneth Parcell|2012 Plot
 What ceremony do Jack and Avery plan in What Will Happen to the Gang Next Year?|A renewal of their wedding vows|A christening|A divorce hearing|A graduation|Easy|Jack Donaghy|Avery Jessup|Vow Renewal|Season Six Finale|Marriage Ceremony|Reconciliation|2012 Story
 Whom does Jack ask to officiate his vow-renewal ceremony with Avery?|Liz Lemon|Kenneth Parcell|Tracy Jordan|Diana Jessup|Easy|Jack Donaghy|Liz Lemon|Avery Jessup|Wedding Officiant|Season Six Finale|Vow Renewal|2012 Episode
 Who tries to prove to Liz that he is a suitable long-term partner in the Series Six finale?|Criss Chros|Dennis Duffy|Floyd DeBarber|Wesley Snipes|Easy|Criss Chros|Liz Lemon|Season Six Finale|Committed Relationship|Future Plans|Romantic Ambition|2012 Story
 Which academic and activist meets Tracy in the Series Six finale?|Cornel West|Henry Louis Gates Jr|Michael Eric Dyson|Ta-Nehisi Coates|Medium|Cornel West|Tracy Jordan|Season Six Finale|Guest Appearance|Public Intellectual|Celebrity Influence|2012 Episode
 How many episodes make up the sixth series of 30 Rock in their original broadcast order?|22|15|13|25|Easy|Twenty Two Episodes|Series Six|Broadcast Order|2012 Season|NBC Television|Episode Count|Production Record
 Which month and year saw the original American finale of 30 Rock Series Six?|May 2012|November 2011|April 2013|January 2012|Medium|May 2012|Season Six Finale|Original Airdate|NBC Broadcast|2012 Television|Series Timeline|Final Episode Date`,
   },
 ];

 const FIRST_ID = 12910;
 let index = 0;
 const questions = groups.flatMap(group =>
   group.facts.trim().split('\n').map(line => {
     const parts = line.trim().split('|').map(part => part.trim());
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     if (parts.length !== 13) {
       throw new Error(`Expected seven specialist tags at ${id}; got ${parts.length - 6}`);
     }
     const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
     const wrongAnswers = [wrong1, wrong2, wrong3];
     if (!question || !correctAnswer || wrongAnswers.some(answer => !answer)) {
       throw new Error(`Missing question or answer at ${id}`);
     }
     if (new Set([correctAnswer, ...wrongAnswers].map(answer => answer.toLowerCase())).size !== 4) {
       throw new Error(`Repeated answer option at ${id}`);
     }
     if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.some(tag => !tag)) {
       throw new Error(`Invalid difficulty or tags at ${id}`);
     }
     const answers = [...wrongAnswers];
     answers.splice(index % 4, 0, correctAnswer);
     const tags = [...new Map([
       'American Television', 'American Sitcom', '30 Rock', 'NBC',
       '2012', '2010s', 'Season Six', 'Workplace Comedy',
       'Sketch Comedy', 'Comedy Series', group.topic, correctAnswer, ...specificTags
     ].map(tag => [tag.toLowerCase(), tag])).values()];
     const item = { id, category: 'Television', question, answers, correctAnswer, difficulty, tags, dailyEligible: true };
     index++;
     return item;
   })
 );

 const EXPECTED_COUNT = 78;
 if (questions.length !== EXPECTED_COUNT) {
   throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
 }
 if (questions[0].id !== 'tv_12910' ||
     questions[questions.length - 1].id !== 'tv_12987') {
   throw new Error('Unexpected question ID range');
 }
 if (new Set(questions.map(q => q.id)).size !== questions.length ||
     new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
   throw new Error('Duplicate question IDs or wording');
 }
 if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
     !q.answers.includes(q.correctAnswer) || q.tags.length < 16 ||
     q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
   throw new Error('Incomplete exported question metadata');
 }

// 21 November 2026: Season 6 audit, existing IDs tv_12910–tv_12987 retained.
// Additional 29 distinct questions with IDs tv_35855–tv_35883.
// Fact-check sources: https://en.wikipedia.org/wiki/30_Rock_season_6
// https://static.rottentomatoes.com/tv/30-rock/s06
// https://www.rottentomatoes.com/tv/30-rock/s06/e19/cast-and-crew
// https://en.wikipedia.org/wiki/What_Will_Happen_to_the_Gang_Next_Year
const auditAdditions = [
  {
    "id": "tv_35855",
    "category": "Television",
    "question": "Which actor plays talent-show judge D'Fwan in 30 Rock's sixth season?",
    "answers": [
      "Tituss Burgess",
      "Billy Porter",
      "Wayne Brady",
      "Donald Glover"
    ],
    "correctAnswer": "Tituss Burgess",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Dance Like Nobody's Watching",
      "Question focus: D'Fwan acting credit",
      "Guest or character: America's Kidz Got Singing",
      "Correct answer: Tituss Burgess",
      "Specific question: Which actor plays talent-show judge D'Fwan in 30 Rock's sixth season?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35856",
    "category": "Television",
    "question": "What happens to Pete Hornberger that leads Jenna and Kenneth to seek Kelsey Grammer's help in 30 Rock?",
    "answers": [
      "He loses his wedding ring",
      "He becomes unconscious",
      "He gets stranded in Canada",
      "He accidentally starts a fire"
    ],
    "correctAnswer": "He becomes unconscious",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Idiots Are People Two!",
      "Question focus: Best Friends Gang crisis",
      "Guest or character: Pete Hornberger",
      "Correct answer: He becomes unconscious",
      "Specific question: What happens to Pete Hornberger that leads Jenna and Kenneth to seek Kelsey Grammer's help in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35857",
    "category": "Television",
    "question": "Why does Jack want to abolish NBC's page programme in 30 Rock?",
    "answers": [
      "To turn the pages into writers",
      "To pay for a new talent show",
      "To impress Kabletown owner Hank Hooper",
      "To recruit a celebrity contestant"
    ],
    "correctAnswer": "To impress Kabletown owner Hank Hooper",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: The Ballad of Kenneth Parcell",
      "Question focus: Page programme cancellation",
      "Guest or character: Hank Hooper",
      "Correct answer: To impress Kabletown owner Hank Hooper",
      "Specific question: Why does Jack want to abolish NBC's page programme in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35858",
    "category": "Television",
    "question": "Which professional wrestler appears as Mankind in the 30 Rock episode The Ballad of Kenneth Parcell?",
    "answers": [
      "The Undertaker",
      "Hulk Hogan",
      "Chris Jericho",
      "Mick Foley"
    ],
    "correctAnswer": "Mick Foley",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: The Ballad of Kenneth Parcell",
      "Question focus: Mankind cameo",
      "Guest or character: Wrestling guest",
      "Correct answer: Mick Foley",
      "Specific question: Which professional wrestler appears as Mankind in the 30 Rock episode The Ballad of Kenneth Parcell?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35859",
    "category": "Television",
    "question": "Which two celebrities appear as themselves alongside Andy Samberg in 30 Rock's The Ballad of Kenneth Parcell?",
    "answers": [
      "Emma Stone and Nick Cannon",
      "Mila Kunis and Ashton Kutcher",
      "Tina Turner and Lenny Kravitz",
      "Anna Kendrick and Seth Rogen"
    ],
    "correctAnswer": "Emma Stone and Nick Cannon",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: The Ballad of Kenneth Parcell",
      "Question focus: Celebrity cameo pair",
      "Guest or character: Emma Stone and Nick Cannon",
      "Correct answer: Emma Stone and Nick Cannon",
      "Specific question: Which two celebrities appear as themselves alongside Andy Samberg in 30 Rock's The Ballad of Kenneth Parcell?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35860",
    "category": "Television",
    "question": "Which personal-finance television personality appears as herself in the 30 Rock episode Today You Are a Man?",
    "answers": [
      "Jean Chatzky",
      "Suze Orman",
      "Martha Stewart",
      "Barbara Corcoran"
    ],
    "correctAnswer": "Suze Orman",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Today You Are a Man",
      "Question focus: Finance expert guest",
      "Guest or character: Suze Orman",
      "Correct answer: Suze Orman",
      "Specific question: Which personal-finance television personality appears as herself in the 30 Rock episode Today You Are a Man?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35861",
    "category": "Television",
    "question": "Which actor portrays the mysterious Leap Day William in the 30 Rock episode Leap Day?",
    "answers": [
      "Steve Little",
      "Alan Alda",
      "John Cullum",
      "John Goodman"
    ],
    "correctAnswer": "John Cullum",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Leap Day",
      "Question focus: Holiday folklore guest actor",
      "Guest or character: Leap Day William",
      "Correct answer: John Cullum",
      "Specific question: Which actor portrays the mysterious Leap Day William in the 30 Rock episode Leap Day?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35862",
    "category": "Television",
    "question": "Which actor plays Liz's billionaire former college classmate Thad Warmald in 30 Rock?",
    "answers": [
      "John Cullum",
      "Will Forte",
      "Bill Hader",
      "Steve Little"
    ],
    "correctAnswer": "Steve Little",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Leap Day",
      "Question focus: Internet billionaire casting",
      "Guest or character: Thad Warmald",
      "Correct answer: Steve Little",
      "Specific question: Which actor plays Liz's billionaire former college classmate Thad Warmald in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35863",
    "category": "Television",
    "question": "Which actress appears as Claire Williams, wife of the fictional Leap Dave Williams, in 30 Rock?",
    "answers": [
      "Andie MacDowell",
      "Julianne Moore",
      "Mary Steenburgen",
      "Megan Mullally"
    ],
    "correctAnswer": "Andie MacDowell",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Leap Day",
      "Question focus: Fictional movie wife casting",
      "Guest or character: Claire Williams",
      "Correct answer: Andie MacDowell",
      "Specific question: Which actress appears as Claire Williams, wife of the fictional Leap Dave Williams, in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35864",
    "category": "Television",
    "question": "Who plays nanny Sherry, hired to help care for Jack's daughter, in 30 Rock?",
    "answers": [
      "Sherri Shepherd",
      "Adriane Lenox",
      "Anita Gillette",
      "Nina Conti"
    ],
    "correctAnswer": "Adriane Lenox",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Leap Day",
      "Question focus: Childcare guest casting",
      "Guest or character: Sherry",
      "Correct answer: Adriane Lenox",
      "Specific question: Who plays nanny Sherry, hired to help care for Jack's daughter, in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35865",
    "category": "Television",
    "question": "Which former teacher's relationship with Frank does he try to keep secret from his mother in 30 Rock?",
    "answers": [
      "Gretchen Thomas",
      "Abby Flynn",
      "Lynn Onkman",
      "Phoebe"
    ],
    "correctAnswer": "Lynn Onkman",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Alexis Goodlooking and the Case of the Missing Whisky",
      "Question focus: Frank's hidden relationship",
      "Guest or character: Lynn Onkman",
      "Correct answer: Lynn Onkman",
      "Specific question: Which former teacher's relationship with Frank does he try to keep secret from his mother in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35866",
    "category": "Television",
    "question": "Which actor plays Jack's former colleague Henry Warren in 30 Rock?",
    "answers": [
      "Steve Buscemi",
      "Alan Alda",
      "John Slattery",
      "Stanley Tucci"
    ],
    "correctAnswer": "Stanley Tucci",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Alexis Goodlooking and the Case of the Missing Whisky",
      "Question focus: Guest actor casting",
      "Guest or character: Henry Warren",
      "Correct answer: Stanley Tucci",
      "Specific question: Which actor plays Jack's former colleague Henry Warren in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35867",
    "category": "Television",
    "question": "How is Kaylie Hooper related to Kabletown owner Hank Hooper in 30 Rock?",
    "answers": [
      "She is his granddaughter",
      "She is his niece",
      "She is his younger sister",
      "She is his stepdaughter"
    ],
    "correctAnswer": "She is his granddaughter",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Standards and Practices",
      "Question focus: Kabletown family relationship",
      "Guest or character: Kaylie Hooper",
      "Correct answer: She is his granddaughter",
      "Specific question: How is Kaylie Hooper related to Kabletown owner Hank Hooper in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35868",
    "category": "Television",
    "question": "Which television weather presenter makes a guest appearance in 30 Rock's St. Patrick's Day?",
    "answers": [
      "Jim Cantore",
      "Al Roker",
      "Sam Champion",
      "Willard Scott"
    ],
    "correctAnswer": "Al Roker",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: St. Patrick's Day",
      "Question focus: Meteorologist guest",
      "Guest or character: Al Roker",
      "Correct answer: Al Roker",
      "Specific question: Which television weather presenter makes a guest appearance in 30 Rock's St. Patrick's Day?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35869",
    "category": "Television",
    "question": "Which Sex and the City actress guest-stars as herself in 30 Rock's Kidnapped by Danger?",
    "answers": [
      "Sarah Jessica Parker",
      "Kristin Davis",
      "Cynthia Nixon",
      "Kim Cattrall"
    ],
    "correctAnswer": "Cynthia Nixon",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Kidnapped by Danger",
      "Question focus: Guest actress cameo",
      "Guest or character: Cynthia Nixon",
      "Correct answer: Cynthia Nixon",
      "Specific question: Which Sex and the City actress guest-stars as herself in 30 Rock's Kidnapped by Danger?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35870",
    "category": "Television",
    "question": "Which political television commentator appears as herself in 30 Rock's Meet the Woggels!?",
    "answers": [
      "Megyn Kelly",
      "Rachel Nichols",
      "Greta Van Susteren",
      "Rachel Maddow"
    ],
    "correctAnswer": "Rachel Maddow",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Meet the Woggels!",
      "Question focus: News commentator guest",
      "Guest or character: Rachel Maddow",
      "Correct answer: Rachel Maddow",
      "Specific question: Which political television commentator appears as herself in 30 Rock's Meet the Woggels!?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35871",
    "category": "Television",
    "question": "Which Saturday Night Live comedian plays couch-factory foreman Stewart Derr in 30 Rock?",
    "answers": [
      "Bobby Moynihan",
      "Fred Armisen",
      "Bill Hader",
      "Taran Killam"
    ],
    "correctAnswer": "Bobby Moynihan",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Murphy Brown Lied to Us",
      "Question focus: Couch factory casting",
      "Guest or character: Stewart Derr",
      "Correct answer: Bobby Moynihan",
      "Specific question: Which Saturday Night Live comedian plays couch-factory foreman Stewart Derr in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35872",
    "category": "Television",
    "question": "Which comedian portrays a young Liz Lemon in 30 Rock's second live episode?",
    "answers": [
      "Rachel Dratch",
      "Amy Poehler",
      "Kristen Wiig",
      "Maya Rudolph"
    ],
    "correctAnswer": "Amy Poehler",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Live from Studio 6H",
      "Question focus: Young Liz casting",
      "Guest or character: Live show flashback",
      "Correct answer: Amy Poehler",
      "Specific question: Which comedian portrays a young Liz Lemon in 30 Rock's second live episode?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35873",
    "category": "Television",
    "question": "Which comedian portrays young Jack Donaghy in 30 Rock's second live episode?",
    "answers": [
      "Seth Meyers",
      "Andy Samberg",
      "Jimmy Fallon",
      "Bill Hader"
    ],
    "correctAnswer": "Jimmy Fallon",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Live from Studio 6H",
      "Question focus: Young Jack casting",
      "Guest or character: Live show flashback",
      "Correct answer: Jimmy Fallon",
      "Specific question: Which comedian portrays young Jack Donaghy in 30 Rock's second live episode?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35874",
    "category": "Television",
    "question": "Which Community actor plays a young Tracy Jordan in the 30 Rock live special?",
    "answers": [
      "Joel McHale",
      "Danny Pudi",
      "Ken Jeong",
      "Donald Glover"
    ],
    "correctAnswer": "Donald Glover",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Live from Studio 6H",
      "Question focus: Young Tracy casting",
      "Guest or character: Live show flashback",
      "Correct answer: Donald Glover",
      "Specific question: Which Community actor plays a young Tracy Jordan in the 30 Rock live special?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35875",
    "category": "Television",
    "question": "Which reality television celebrity appears in the West Coast version of 30 Rock's Live from Studio 6H?",
    "answers": [
      "Kim Kardashian",
      "Paris Hilton",
      "Nicole Richie",
      "Khloé Kardashian"
    ],
    "correctAnswer": "Kim Kardashian",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Live from Studio 6H",
      "Question focus: West Coast live guest",
      "Guest or character: Kim Kardashian",
      "Correct answer: Kim Kardashian",
      "Specific question: Which reality television celebrity appears in the West Coast version of 30 Rock's Live from Studio 6H?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35876",
    "category": "Television",
    "question": "Which director directed 30 Rock's second live special, Live from Studio 6H?",
    "answers": [
      "Steve Buscemi",
      "Beth McCarthy-Miller",
      "Jeff Richmond",
      "John Riggi"
    ],
    "correctAnswer": "Beth McCarthy-Miller",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Live from Studio 6H",
      "Question focus: Live special director",
      "Guest or character: Live broadcast",
      "Correct answer: Beth McCarthy-Miller",
      "Specific question: Which director directed 30 Rock's second live special, Live from Studio 6H?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35877",
    "category": "Television",
    "question": "Which actress portrays North Korean dictator Kim Jong-il in 30 Rock's sixth season?",
    "answers": [
      "Sandra Oh",
      "Awkwafina",
      "Margaret Cho",
      "Lucy Liu"
    ],
    "correctAnswer": "Margaret Cho",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: The Return of Avery Jessup",
      "Question focus: North Korean leader portrayal",
      "Guest or character: Margaret Cho",
      "Correct answer: Margaret Cho",
      "Specific question: Which actress portrays North Korean dictator Kim Jong-il in 30 Rock's sixth season?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35878",
    "category": "Television",
    "question": "Which actor plays reporter Scott Scottsman, who was held captive with Avery, in 30 Rock?",
    "answers": [
      "Michael Sheen",
      "Michael Smiley",
      "Mark Heap",
      "Michael Mosley"
    ],
    "correctAnswer": "Michael Mosley",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: The Return of Avery Jessup",
      "Question focus: Reporter guest casting",
      "Guest or character: Scott Scottsman",
      "Correct answer: Michael Mosley",
      "Specific question: Which actor plays reporter Scott Scottsman, who was held captive with Avery, in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35879",
    "category": "Television",
    "question": "What happens to Jack and Avery's marriage during their planned vow renewal in 30 Rock?",
    "answers": [
      "They decide to divorce",
      "They renew their vows as planned",
      "They elope to Las Vegas",
      "They adopt another child"
    ],
    "correctAnswer": "They decide to divorce",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: What Will Happen to the Gang Next Year?",
      "Question focus: Vow renewal ending",
      "Guest or character: Jack and Avery",
      "Correct answer: They decide to divorce",
      "Specific question: What happens to Jack and Avery's marriage during their planned vow renewal in 30 Rock?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35880",
    "category": "Television",
    "question": "What does Criss sell to raise money for nursery renovations in the 30 Rock season-six finale?",
    "answers": [
      "His hot-dog stand",
      "His van",
      "His television set",
      "His engagement ring"
    ],
    "correctAnswer": "His van",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: What Will Happen to the Gang Next Year?",
      "Question focus: Financing nursery renovations",
      "Guest or character: Criss Chros",
      "Correct answer: His van",
      "Specific question: What does Criss sell to raise money for nursery renovations in the 30 Rock season-six finale?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35881",
    "category": "Television",
    "question": "Who takes in Hazel Wassername when she needs somewhere to live in 30 Rock's sixth-season finale?",
    "answers": [
      "Jack Donaghy",
      "Tracy Jordan",
      "Kenneth Parcell",
      "Pete Hornberger"
    ],
    "correctAnswer": "Kenneth Parcell",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: What Will Happen to the Gang Next Year?",
      "Question focus: Hazel's housing",
      "Guest or character: Kenneth Parcell",
      "Correct answer: Kenneth Parcell",
      "Specific question: Who takes in Hazel Wassername when she needs somewhere to live in 30 Rock's sixth-season finale?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35882",
    "category": "Television",
    "question": "Why did the sixth season of 30 Rock begin in January rather than autumn 2011?",
    "answers": [
      "The studio closed for renovation",
      "A network actors' strike delayed shooting",
      "NBC was awaiting a new streaming deal",
      "To accommodate Tina Fey's pregnancy"
    ],
    "correctAnswer": "To accommodate Tina Fey's pregnancy",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Season six production",
      "Question focus: Delayed season start",
      "Guest or character: Tina Fey",
      "Correct answer: To accommodate Tina Fey's pregnancy",
      "Specific question: Why did the sixth season of 30 Rock begin in January rather than autumn 2011?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_35883",
    "category": "Television",
    "question": "How many Emmy Award nominations did the sixth season of 30 Rock receive?",
    "answers": [
      "Thirteen",
      "Nine",
      "Twenty-two",
      "Sixteen"
    ],
    "correctAnswer": "Thirteen",
    "difficulty": "Medium",
    "tags": [
      "30 Rock",
      "30 Rock Season Six",
      "American Television",
      "American Sitcom",
      "NBC",
      "2012",
      "TGS",
      "Tina Fey",
      "Workplace Comedy",
      "22 Episode Season",
      "Episode: Awards",
      "Question focus: Season six nominations",
      "Guest or character: Emmy Awards",
      "Correct answer: Thirteen",
      "Specific question: How many Emmy Award nominations did the sixth season of 30 Rock receive?",
      "Series Six Cast",
      "Storylines and Production",
      "UK English TV Questions",
      "Original NBC Broadcast",
      "21 November 2026 Audit"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
if(questions.length!==107||
 new Set(questions.map(q=>q.id)).size!==questions.length||
 new Set(questions.map(q=>q.question.toLowerCase())).size!==questions.length||
 questions.some(q=>q.answers.length!==4||new Set(q.answers.map(x=>x.toLowerCase())).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<16||!q.tags.includes('30 Rock')||q.dailyEligible!==true))
 throw Error('Pack 301 audit validation failed');

 module.exports = questions;
