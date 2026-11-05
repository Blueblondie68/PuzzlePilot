
 // quiz_pack301.js
 // PuzzlePilot - The Bigggggg Quiz
 // Television: 30 Rock - Series Six (2012)
 // Covers all 22 broadcast episodes.
 // Seven individually chosen specialist tags per question.
 // Keep quiz_bank.js unchanged until the end-of-session connection.
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
 module.exports = questions;
