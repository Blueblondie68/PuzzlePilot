
 // quiz_pack336.js
 // PuzzlePilot — The Bigggggg Quiz
 // CORRECTED British Sitcom Collection
 // Friday Night Dinner (2011–2020)
 // Miranda (2009–2015)
 // Father Ted (1995–1998)
 //
 // 115 questions: 38 + 38 + 39.
 // Replaces previously duplicated IT Crowd and Black Books.
 // IDs tv_15787 through tv_15901.
 // Individually selected specialist tags for every question.

 const facts = `
 Friday Night Dinner|Who played the father Martin Goodman?|Paul Ritter|Simon Bird|Mark Heap|Tom Rosenthal|Easy|Martin Goodman|Paul Ritter|Family Father|Main Cast|Character Casting|Goodman Family|Parental Role
 Friday Night Dinner|Which actress portrayed Jackie Goodman?|Tamsin Greig|Tracy-Ann Oberman|Frances Cuka|Sally Phillips|Easy|Jackie Goodman|Tamsin Greig|Family Mother|Main Cast|Character Casting|Goodman Household|Parental Role
 Friday Night Dinner|Who played the older Goodman brother Adam?|Simon Bird|Tom Rosenthal|Paul Ritter|Mark Heap|Easy|Adam Goodman|Simon Bird|Older Brother|Main Cast|Character Casting|Family Dinner|Goodman Sons
 Friday Night Dinner|Which actor played younger brother Jonny Goodman?|Tom Rosenthal|Simon Bird|Paul Ritter|James Buckley|Easy|Jonny Goodman|Tom Rosenthal|Younger Brother|Main Cast|Character Casting|Family Dinner|Sibling Rivalry
 Friday Night Dinner|Who portrayed the eccentric neighbour Jim Bell?|Mark Heap|Paul Ritter|Simon Bird|Jonny Sweet|Easy|Jim Bell|Mark Heap|Eccentric Neighbour|Main Cast|Character Casting|Goodman Neighbour|Running Joke
 Friday Night Dinner|Which actress portrayed Jackie's friend Val?|Tracy-Ann Oberman|Tamsin Greig|Frances Cuka|Patricia Hodge|Medium|Val|Tracy Ann Oberman|Jackie Friend|Recurring Character|Character Casting|Goodman Visitors|Supporting Cast
 Friday Night Dinner|Who played Grandma Nellie, Jackie's mother?|Frances Cuka|Rosalind Knight|Tracy-Ann Oberman|Tamsin Greig|Medium|Nellie|Frances Cuka|Grandma|Jackie Mother|Goodman Family|Recurring Cast|Character Casting
 Friday Night Dinner|Which actress played Martin's mother, nicknamed Horrible Grandma?|Rosalind Knight|Frances Cuka|Tamsin Greig|Tracy-Ann Oberman|Medium|Horrible Grandma|Rosalind Knight|Martin Mother|Grandmother|Recurring Character|Family Conflict|Casting
 Friday Night Dinner|Who created and wrote Friday Night Dinner?|Robert Popper|Graham Linehan|Simon Bird|Jesse Armstrong|Medium|Robert Popper|Series Creator|Screenwriter|Production Credits|British Sitcom|Comedy Writing|Programme Origins
 Friday Night Dinner|On which channel did Friday Night Dinner originally air?|Channel 4|BBC Two|ITV|Sky One|Easy|Original Network|Original Broadcaster|British Television|Network Comedy|Transmission|2011 Premiere|Series History
 Friday Night Dinner|In which year did Friday Night Dinner first air?|2011|2008|2014|2016|Easy|2011 Premiere|Series One|Channel 4|Television Debut|Broadcast Year|Programme History|Series Launch
 Friday Night Dinner|How many series of Friday Night Dinner were made?|Six|Four|Five|Seven|Easy|Six Series|Series Count|2011 To 2020|Channel 4|Completed Sitcom|Programme History|Production Run
 Friday Night Dinner|In which year did the final regular series of Friday Night Dinner air?|2020|2018|2016|2022|Medium|2020 Finale|Sixth Series|Final Regular Series|Broadcast History|Programme Ending|Channel 4|Television Year
 Friday Night Dinner|What is the surname of the family at the centre of the sitcom?|Goodman|Goldman|Greenwood|Goldberg|Easy|Goodman Family|Family Surname|Martin Goodman|Jackie Goodman|Adam And Jonny|Family Sitcom|Character Names
 Friday Night Dinner|On which day do the two sons traditionally visit their parents for dinner?|Friday|Sunday|Saturday|Thursday|Easy|Friday Dinner|Weekly Tradition|Goodman Family|Family Meal|Series Premise|Weekly Visits|Dinner Gathering
 Friday Night Dinner|Which brother is older, Adam or Jonny?|Adam|Jonny|They are twins|Neither is related to the other|Medium|Adam Goodman|Jonny Goodman|Older Brother|Family Relationship|Sibling Order|Goodman Sons|Character Detail
 Friday Night Dinner|What is the name of Jim's dog during the earlier series?|Wilson|Milo|Buster|Rufus|Easy|Wilson|Jim Bell|Pet Dog|Neighbourhood|Recurring Animal|Mark Heap|Character Companion
 Friday Night Dinner|What kind of food is Martin particularly associated with eating from the rubbish bin?|Out-of-date food|Fresh fruit|Cooked vegetables|Frozen desserts|Medium|Martin Goodman|Out Of Date Food|Food Habits|Family Kitchen|Running Joke|Father Behaviour|Workplace Free Humour
 Friday Night Dinner|Which character is notorious for appearing without a shirt around the house?|Martin Goodman|Adam Goodman|Jonny Goodman|Jim Bell|Easy|Martin Goodman|Shirtless Father|Paul Ritter|Goodman Household|Running Joke|Family Behaviour|Character Habit
 Friday Night Dinner|Which neighbour repeatedly appears unexpectedly at the Goodman front door?|Jim Bell|Val|Nellie|Horrible Grandma|Easy|Jim Bell|Front Door Visits|Neighbour Interruptions|Goodman House|Mark Heap|Running Character|Unwelcome Guest
 Friday Night Dinner|What type of meal forms the central family tradition in the programme?|A Friday evening dinner|A Sunday breakfast|A Saturday barbecue|A weekday office lunch|Easy|Family Dinner|Friday Night Tradition|Goodman Household|Shared Meal|Series Premise|Domestic Sitcom|Family Gathering
 Friday Night Dinner|Which brother is played by Simon Bird?|Adam Goodman|Jonny Goodman|Martin Goodman|Jim Bell|Easy|Simon Bird|Adam Goodman|Older Son|Character Casting|Brother|Goodman Family|Main Cast
 Friday Night Dinner|Which character is played by Tom Rosenthal?|Jonny Goodman|Adam Goodman|Martin Goodman|Jim Bell|Easy|Tom Rosenthal|Jonny Goodman|Younger Son|Character Casting|Brother|Goodman Family|Main Cast
 Friday Night Dinner|Who is Jackie's close friend and regular dinner guest?|Val|Nellie|Sheila|Liz|Easy|Val|Jackie Goodman|Friendship|Tracy Ann Oberman|Dinner Guest|Recurring Cast|Family Visits
 Friday Night Dinner|Which family member is particularly obsessed with science and unusual facts?|Martin Goodman|Jackie Goodman|Adam Goodman|Jonny Goodman|Medium|Martin Goodman|Science Obsession|Strange Facts|Paul Ritter|Father Character|Running Joke|Family Conversations
 Friday Night Dinner|Which character frequently exclaims 'Shit on it!' when frustrated?|Martin Goodman|Jim Bell|Adam Goodman|Jonny Goodman|Medium|Martin Goodman|Shit On It Catchphrase|Paul Ritter|Frustration|Family Dinner|Running Joke|Character Dialogue
 Friday Night Dinner|In which series does the family encounter Martin's battered old caravan in the driveway?|Series six|Series one|Series three|Series four|Medium|Series Six|The Caravan|Martin Goodman|Old Caravan|Driveway|2020 Episodes|Episode Storyline
 Friday Night Dinner|What object stuck in a tree becomes Martin's obsession in a sixth-series episode?|A plastic bag|A football|A kite|A newspaper|Medium|Plastic Bag|Series Six|Martin Goodman|Garden Tree|2020 Episodes|Household Obsession|Episode Storyline
 Friday Night Dinner|Which series features Jonny returning from Las Vegas with a wife?|Series four|Series one|Series two|Series six|Medium|Jonny Goodman|Las Vegas Marriage|Series Four|2016 Episodes|Surprise Wife|Family Shock|Episode Storyline
 Friday Night Dinner|Which character buys a terrifying old ventriloquist dummy during series five?|Martin Goodman|Jim Bell|Adam Goodman|Jonny Goodman|Medium|Martin Goodman|Ventriloquist Dummy|Series Five|2018 Episodes|Family Fright|Strange Possession|Episode Storyline
 Friday Night Dinner|What unusual outdoor bathing item do Jackie and Martin acquire in series five?|A hot tub|A swimming pool|A sauna|A garden shower|Medium|Jackie Goodman|Martin Goodman|Hot Tub|Series Five|Garden|2018 Episodes|Household Purchase
 Friday Night Dinner|Which brother is involved in a car fire during series five?|Adam Goodman|Jonny Goodman|Martin Goodman|Neither brother|Medium|Adam Goodman|Car Fire|Series Five|2018 Episodes|Vehicle Mishap|Family Chaos|Episode Storyline
 Friday Night Dinner|Which character becomes obsessed with drying fish in a cupboard during series two?|Martin Goodman|Jim Bell|Adam Goodman|Jonny Goodman|Medium|Martin Goodman|Drying Fish|Cupboard|Series Two|Household Habits|2012 Episodes|Strange Behaviour
 Friday Night Dinner|Which series features Jim making a birthday cake for his dog Wilson?|Series two|Series four|Series five|Series six|Medium|Jim Bell|Wilson Dog|Birthday Cake|Series Two|2012 Episodes|Neighbour Storyline|Pet Celebration
 Friday Night Dinner|In which series does Martin invite over a friend who speaks with his eyes closed?|Series four|Series one|Series three|Series five|Medium|Martin Goodman|Eyes Closed|Unusual Friend|Series Four|2016 Episodes|Dinner Guest|Social Awkwardness
 Friday Night Dinner|Which series includes Adam finding himself outside wearing a pyjama top but no bottoms?|Series four|Series two|Series five|Series six|Medium|Adam Goodman|Pyjama Top|Series Four|2016 Episodes|Household Embarrassment|Episode Event|Clothing Mishap
 Friday Night Dinner|Which series features a storyline about Jonny's unusual coat?|Series six|Series one|Series three|Series five|Medium|Jonny Goodman|Unusual Coat|Series Six|2020 Episodes|Clothing Joke|Family Teasing|Episode Storyline
 Friday Night Dinner|What is the title of the first episode of the sixth series?|The Caravan|The Plastic Bag|The Au Pair|The Females|Medium|The Caravan|Series Six Premiere|2020 Broadcast|Martin Goodman|Old Caravan|Episode Title|Channel 4

 Miranda|Which actress created and starred in the sitcom Miranda?|Miranda Hart|Sarah Hadland|Sally Phillips|Patricia Hodge|Easy|Miranda Hart|Series Creator|Lead Actress|Title Character|BBC Comedy|Production|Character Casting
 Miranda|Who played Miranda's childhood friend Stevie?|Sarah Hadland|Sally Phillips|Patricia Hodge|Katy Wix|Easy|Sarah Hadland|Stevie|Childhood Friend|Shop Manager|Main Cast|Character Casting|Joke Shop
 Miranda|Which actress played Miranda's mother Penny?|Patricia Hodge|Sarah Hadland|Sally Phillips|Tamsin Greig|Easy|Patricia Hodge|Penny|Miranda Mother|Main Cast|Character Casting|Family Relationship|Social Ambition
 Miranda|Who portrayed Miranda's romantic interest Gary Preston?|Tom Ellis|James Holmes|Bo Poraj|Richard Armitage|Easy|Tom Ellis|Gary Preston|Romantic Interest|Chef|Main Cast|Character Casting|Miranda Romance
 Miranda|Which actress portrayed Miranda's school friend Tilly?|Sally Phillips|Sarah Hadland|Katy Wix|Patricia Hodge|Medium|Sally Phillips|Tilly|School Friend|Sloane Ranger|Supporting Cast|Character Casting|Social Circle
 Miranda|Who played Clive, the restaurant owner appearing in the early series?|James Holmes|Tom Ellis|Bo Poraj|Simon Bird|Medium|James Holmes|Clive|Restaurant Owner|Early Series|Supporting Cast|Character Casting|Gary Colleague
 Miranda|Which actress played Miranda's friend Fanny?|Katy Wix|Sarah Hadland|Sally Phillips|Patricia Hodge|Medium|Katy Wix|Fanny|School Friend|First Series|Supporting Actress|Character Casting|Social Circle
 Miranda|Which actor played Mike, a romantic possibility in series three?|Bo Poraj|Tom Ellis|James Holmes|Mark Heap|Medium|Bo Poraj|Mike|Series Three|Romantic Interest|New Character|Character Casting|Love Triangle
 Miranda|On which channel did Miranda originally premiere in 2009?|BBC Two|Channel 4|BBC One|ITV|Easy|BBC Two|Original Broadcaster|2009 Premiere|British Television|Broadcast History|Sitcom Debut|Television Channel
 Miranda|Which channel became Miranda's home for its third series?|BBC One|BBC Two|Channel 5|ITV|Medium|BBC One|Series Three|Channel Move|2012 Broadcast|BBC Television|Programme Success|Broadcast History
 Miranda|In which year did the original sitcom Miranda premiere?|2009|2005|2012|2015|Easy|2009 Premiere|BBC Two|Series One|Programme Debut|Miranda Hart|Broadcast Year|Television History
 Miranda|How many regular series of Miranda were produced?|Three|Four|Five|Two|Easy|Three Series|Series Count|2009 To 2013|BBC Sitcom|Production History|Completed Series|British Comedy
 Miranda|Which year saw Miranda conclude with its final special?|2015|2012|2017|2010|Medium|2015 Finale|Final Curtain|Programme Conclusion|BBC One|Series Ending|Broadcast History|Final Special
 Miranda|What kind of shop does Miranda operate with Stevie?|A joke shop|A clothes shop|A bookshop|A florist|Easy|Miranda Shop|Joke Shop|Stevie|Retail Setting|Practical Jokes|Character Employment|Comedy Premise
 Miranda|Which character regularly tries to find a suitable husband for Miranda?|Penny|Stevie|Tilly|Fanny|Easy|Penny|Miranda Mother|Matchmaking|Patricia Hodge|Family Pressure|Marriage Ambition|Recurring Storyline
 Miranda|Which character is Miranda's long-standing crush and works as a chef?|Gary Preston|Clive|Mike|Orlando|Easy|Gary Preston|Tom Ellis|Chef|Long Term Crush|Restaurant|Romantic Relationship|Character Occupation
 Miranda|Which friend helps Miranda run her joke shop?|Stevie|Penny|Tilly|Fanny|Easy|Stevie|Sarah Hadland|Shop Manager|Business Partner|Miranda Friend|Retail Employment|Character Role
 Miranda|Which character frequently breaks the fourth wall by addressing the audience?|Miranda|Penny|Gary|Tilly|Easy|Miranda Hart|Direct Audience Address|Fourth Wall|Comedy Technique|Main Character|Sitcom Format|Narration
 Miranda|What is the first name of Miranda's mother?|Penny|Tilly|Stevie|Rose|Easy|Penny|Patricia Hodge|Miranda Mother|Character Name|Family Relationship|Main Cast|Parental Character
 Miranda|In the first episode, what is the name of Miranda's crush who has returned from travelling?|Gary|Mike|Clive|Robert|Easy|Gary Preston|Date Episode|First Series|Romance|Travelling Return|2009 Premiere|Character Introduction
 Miranda|Which episode opens the very first series of Miranda?|Date|Teacher|Job|Holiday|Medium|Date|Series One Premiere|2009 Broadcast|Episode Title|Gary Preston|Miranda Hart|BBC Two
 Miranda|Which episode centres on Miranda attending a French class and tango lessons?|Teacher|Holiday|Dog|Job|Medium|Teacher Episode|French Lessons|Tango|Series One|Gary Preston|Self Improvement|2009 Broadcast
 Miranda|In which first-series episode does Miranda try to find a more respectable career?|Job|Date|Excuse|Dog|Medium|Job Episode|Career Change|Joke Shop|Penny|Series One|Work Ambition|Episode Title
 Miranda|Which first-series episode features Miranda attempting to take a holiday?|Holiday|Teacher|Dog|Date|Medium|Holiday Episode|Miranda Hart|Travel Plans|Series One|2009 Broadcast|Break Away|Episode Title
 Miranda|Which episode features Miranda inventing a misleading excuse to avoid a possible suitor?|Excuse|Job|Dog|Holiday|Medium|Excuse Episode|Matchmaking|Penny|Series One|Unwanted Date|White Lie|Episode Title
 Miranda|What is the title of the final regular episode of Miranda's first series?|Dog|Holiday|Excuse|Date|Medium|Dog Episode|Series One Finale|2009 Broadcast|Shop Customer|Stevie|Romantic Competition|Episode Title
 Miranda|What is the opening episode of Miranda's second series called?|The New Me|Before I Die|Let's Do It|A New Low|Medium|The New Me|Series Two Premiere|2010 Broadcast|BBC Two|Gary Preston|Personal Reinvention|Episode Title
 Miranda|Which second-series episode is named Before I Die?|Before I Die|The Perfect Christmas|Just Act Normal|The New Me|Medium|Before I Die|Series Two|2010 Episodes|Life Ambitions|Episode Title|Miranda Hart|BBC Two
 Miranda|What is the title of the second-series episode involving Miranda's efforts to act normally?|Just Act Normal|Teacher|Job|The New Me|Medium|Just Act Normal|Therapy|Miranda And Penny|Series Two|2010 Broadcast|Social Behaviour|Episode Title
 Miranda|In Just Act Normal, which family member attends therapy with Miranda?|Penny|Stevie|Gary|Tilly|Medium|Penny|Miranda Hart|Therapy Session|Just Act Normal|Series Two|Family Relationship|Episode Plot
 Miranda|What is the title of the Christmas-themed finale of Miranda's second series?|The Perfect Christmas|A Christmassy Miranda|A Family Christmas|Christmas at the Shop|Medium|The Perfect Christmas|Series Two Finale|2010 Broadcast|Festive Episode|Joke Shop|Gary And Stevie|Episode Title
 Miranda|Which series begins with the 2012 Christmas-themed return of Miranda?|Series three|Series one|Series two|A fourth series|Medium|Series Three|2012 Christmas|BBC One|Programme Return|Festive Premiere|Broadcast History|Season Opening
 Miranda|Which charity event featured Miranda in a special sketch set at Pineapple Dance Studios?|Comic Relief|Children in Need|Sport Relief|Stand Up to Cancer|Medium|Comic Relief 2011|Pineapple Dance Studios|Charity Sketch|Miranda And Friends|Television Special|Fundraising|Broadcast Event
 Miranda|Which charity's 2012 sketch featured Miranda attending an indoor tennis event?|Sport Relief|Comic Relief|Children in Need|Band Aid|Medium|Sport Relief 2012|Indoor Tennis|Royal Albert Hall|Charity Sketch|Television Special|Miranda Hart|Fundraising
 Miranda|What is the title of Miranda's 2014 Christmas finale special?|I Do, But to Who?|The Final Curtain|The Perfect Christmas|The Last Date|Medium|I Do But To Who|Christmas 2014|Final Specials|BBC One|Romantic Decision|Programme Ending|Episode Title
 Miranda|What is the title of Miranda's final television episode, broadcast on New Year's Day 2015?|The Final Curtain|I Do, But to Who?|A Brief Encounter|The Perfect Christmas|Medium|The Final Curtain|2015 Finale|New Years Day|BBC One|Series Conclusion|Final Special|Episode Title
 Miranda|Which character is introduced as a romantic possibility alongside Gary in the third series?|Mike|Clive|Orlando|Richard|Medium|Mike|Bo Poraj|Series Three|Romance|Gary Rival|Love Triangle|New Character
 Miranda|What were the names of the two imaginary children Miranda claims to have in the first episode?|Orlando and Bloom|Jack and Jill|Romeo and Juliet|Tom and Jerry|Hard|Orlando And Bloom|Date Episode|Miranda Lie|Gary Preston|Series One|Pretend Children|Comic Embarrassment

 Father Ted|Who portrayed Father Ted Crilly?|Dermot Morgan|Ardal O'Hanlon|Frank Kelly|Graham Norton|Easy|Father Ted Crilly|Dermot Morgan|Lead Actor|Irish Priest|Main Cast|Character Casting|Craggy Island
 Father Ted|Which actor played Father Dougal McGuire?|Ardal O'Hanlon|Dermot Morgan|Frank Kelly|Jim Norton|Easy|Father Dougal McGuire|Ardal OHanlon|Young Priest|Main Cast|Character Casting|Ted Colleague|Craggy Island
 Father Ted|Who played Father Jack Hackett?|Frank Kelly|Dermot Morgan|Ardal O'Hanlon|Graham Norton|Easy|Father Jack Hackett|Frank Kelly|Elderly Priest|Main Cast|Character Casting|Parochial House|Character Behaviour
 Father Ted|Which actress portrayed housekeeper Mrs Doyle?|Pauline McLynn|Tamsin Greig|Dervla Kirwan|Brenda Fricker|Easy|Mrs Doyle|Pauline McLynn|Housekeeper|Main Cast|Character Casting|Tea Service|Parochial House
 Father Ted|What is the name of the fictional island where Ted and his fellow priests live?|Craggy Island|Father Island|Holy Island|Lambay Island|Easy|Craggy Island|Fictional Location|Irish Coast|Priests Residence|Series Setting|Remote Island|Parochial House
 Father Ted|On which channel did Father Ted first air?|Channel 4|BBC Two|RTÉ One|ITV|Easy|Channel 4|1995 Premiere|Original Broadcaster|British Irish Comedy|Broadcast History|Television Channel|Programme Launch
 Father Ted|In which year did Father Ted first appear on television?|1995|1992|1998|2000|Easy|1995 Premiere|Series One|Channel 4|Broadcast Year|Programme Debut|Irish Comedy|Television History
 Father Ted|How many regular series of Father Ted were produced?|Three|Four|Two|Five|Easy|Three Series|1995 To 1998|Series Count|Completed Sitcom|Programme History|Production Format|Channel 4
 Father Ted|Who co-wrote Father Ted with Graham Linehan?|Arthur Mathews|Dylan Moran|Steve Coogan|Armando Iannucci|Medium|Arthur Mathews|Graham Linehan|Co Writers|Series Creators|Comedy Writing|Production Credits|Irish Television Comedy
 Father Ted|Which character is particularly associated with offering visitors cups of tea?|Mrs Doyle|Father Jack|Bishop Brennan|Father Dougal|Easy|Mrs Doyle|Tea Service|Housekeeper|Pauline McLynn|Hospitality|Running Joke|Character Habit
 Father Ted|Which priest is known for regularly shouting the word DRINK?|Father Jack Hackett|Father Ted Crilly|Father Dougal McGuire|Father Larry Duff|Easy|Father Jack|Drink Catchphrase|Frank Kelly|Alcohol|Character Behaviour|Running Gag|Parochial House
 Father Ted|Who is the fearsome bishop who regularly visits and reprimands Father Ted?|Bishop Brennan|Bishop Jordan|Bishop O'Reilly|Bishop Collins|Easy|Bishop Brennan|Len Brennan|Ted Superior|Church Hierarchy|Disciplinary Visits|Recurring Character|Priest Conflict
 Father Ted|Which episode introduces Ted's hopes of escaping Craggy Island through a television opportunity?|Good Luck, Father Ted|Competition Time|Hell|New Jack City|Medium|Good Luck Father Ted|Series One Premiere|Television Producer|Ted Ambition|Craggy Island Escape|Publicity Opportunity|Episode Title
 Father Ted|Which visiting priest is notoriously boring in Entertaining Father Stone?|Father Stone|Father Stack|Father Fintan|Father Larry Duff|Medium|Father Stone|Entertaining Father Stone|Visiting Priest|Series One|Ted And Dougal|Unwelcome Guest|Episode Storyline
 Father Ted|What is the title of the fictional controversial film Ted is ordered to protest against?|The Passion of Saint Tibulus|The Life of Saint Patrick|The Last Confession|The Miracle of Craggy Island|Medium|Passion Of Saint Tibulus|Bishop Brennan|Film Protest|Series One|Ted And Dougal|Cinema Picket|Episode Title
 Father Ted|Which first-series episode centres on an all-priests lookalike competition?|Competition Time|And God Created Woman|Grant Unto Him Eternal Rest|Good Luck, Father Ted|Medium|Competition Time|Priest Lookalikes|Series One|Father Ted|Costumes|Contest|Episode Title
 Father Ted|Which novelist visits Ted in the episode And God Created Woman?|Polly Clarke|Niamh Connolly|Assumpta Fitzgerald|Fran Katzenjammer|Medium|Polly Clarke|And God Created Woman|Novelist|Father Ted|Series One|Visiting Author|Episode Storyline
 Father Ted|What household cleaning liquid causes Father Jack's apparent death in the first-series finale?|Floor polish|Washing-up liquid|Bleach|Furniture wax|Medium|Father Jack|Floor Polish|Grant Unto Him Eternal Rest|Series One Finale|Apparent Death|Inheritance|Episode Event
 Father Ted|Which episode involves Ted, Dougal and Jack taking a disastrous caravan holiday?|Hell|The Plague|Flight Into Terror|New Jack City|Medium|Hell|Caravan Holiday|Series Two Premiere|Three Priests|Summer Holiday|Travel Disaster|Episode Title
 Father Ted|What prize does Ted obtain for the raffle in Think Fast, Father Ted?|A car|A motorcycle|A boat|A television|Medium|Think Fast Father Ted|Raffle Prize|Car|Fundraising|Parochial House|Series Two|Bishop Brennan
 Father Ted|In A Song for Europe, what competition do Ted and Dougal attempt to enter?|Eurosong|The X Factor|Stars in Their Eyes|Pop Idol|Easy|A Song For Europe|Eurosong 1996|Ted And Dougal|Song Contest|Series Two|Music Competition|Episode Title
 Father Ted|Which animal overruns the parochial house in The Plague?|Rabbits|Rats|Seagulls|Goats|Medium|The Plague|Rabbits|Bishop Brennan|Animal Phobia|Parochial House|Series Two|Episode Storyline
 Father Ted|At which event is Ted asked to judge contestants in Rock A Hula Ted?|The Lovely Girls Festival|The Rose of Tralee|The Craggy Island Marathon|The National Talent Awards|Medium|Rock A Hula Ted|Lovely Girls Festival|Beauty Contest|Father Ted|Judging Event|Series Two|Episode Title
 Father Ted|Which activity does Dougal attempt to give up for Lent in Cigarettes and Alcohol and Rollerblading?|Rollerblading|Swimming|Cycling|Playing football|Medium|Father Dougal|Rollerblading|Lent|Cigarettes And Alcohol And Rollerblading|Series Two|Self Denial|Religious Observance
 Father Ted|Which mode of transport experiences a serious fuel emergency in Flight Into Terror?|An aeroplane|A ferry|A train|A helicopter|Medium|Flight Into Terror|Aeroplane|Fuel Shortage|Series Two|Ted Dougal And Jack|Travel Emergency|Episode Title
 Father Ted|What award does Ted receive in the Christmas special after rescuing priests from an embarrassing situation?|The Golden Cleric|The Silver Chalice|The Bishop's Medal|The Craggy Cross|Medium|Golden Cleric|A Christmassy Ted|Christmas Special|Lingerie Department|Priest Rescue|1996 Broadcast|Church Award
 Father Ted|What is the name of the milkman whose dismissal sets up the danger in Speed 3?|Pat Mustard|Father Stone|Dick Byrne|Eoin McLove|Medium|Pat Mustard|Speed 3|Milkman|Father Dougal|Series Three|Bomb Plot|Character Name
 Father Ted|What vehicle does Dougal drive when he replaces the milkman in Speed 3?|A milk float|A minibus|A tractor|A delivery van|Easy|Father Dougal|Milk Float|Speed 3|Pat Mustard|Series Three|Vehicle Bomb|Episode Event
 Father Ted|What object does Pat Mustard secretly plant on Dougal's milk float?|A bomb|A tracking beacon|A sack of flour|A stolen trophy|Medium|Pat Mustard|Milk Float Bomb|Speed 3|Father Dougal|Series Three|Revenge Plot|Vehicle Danger
 Father Ted|Which sheep does Ted back in Chirpy Burpy Cheap Sheep?|Chris|Daisy|Flossie|Brian|Medium|Chris The Sheep|Chirpy Burpy Cheap Sheep|Sheep Trials|Father Ted|Series Three|Betting|Animal Character
 Father Ted|What money does Ted risk on a sheep competition in Chirpy Burpy Cheap Sheep?|The annual heating allowance|The parish roof fund|Mrs Doyle's wages|The church organ fund|Medium|Heating Allowance|Chris The Sheep|Sheep Trials|Chirpy Burpy Cheap Sheep|Series Three|Betting Risk|Parish Finances
 Father Ted|Which episode centres on Ted's visit to the mainland with the other priests?|The Mainland|Hell|Going to America|Flight Into Terror|Medium|The Mainland|Series Three|Father Ted|Father Dougal|Father Jack|Travel Misadventure|Episode Title
 Father Ted|Which famous actor does Ted encounter during the visit in The Mainland?|Richard Wilson|Michael Caine|Sean Connery|Peter O'Toole|Medium|Richard Wilson|The Mainland|Celebrity Encounter|Father Ted|Series Three|Guest Appearance|Tourist Attraction
 Father Ted|Which rival priest repeatedly competes with Ted and wagers with him?|Father Dick Byrne|Father Stone|Father Jack Hackett|Father Larry Duff|Medium|Father Dick Byrne|Father Ted|Rival Priest|Rugged Island|Competitive Rivalry|Recurring Character|Betting
 Father Ted|What sport features in the elderly priests' competition in Escape from Victory?|Five-a-side football|Cricket|Rugby union|Hurling|Medium|Escape From Victory|Five A Side Football|Over 75s|Rugged Island|Father Ted|Series Three|Sporting Contest
 Father Ted|Which bishop must Ted kick after losing a bet in the third series?|Bishop Brennan|Bishop O'Reilly|Bishop Jordan|Bishop Collins|Easy|Kicking Bishop Brennan|Len Brennan|Father Ted|Father Dick Byrne|Lost Bet|Series Three|Episode Plot
 Father Ted|Which singer visits the parochial house in Night of the Nearly Dead?|Eoin McLove|Pat Mustard|Father Stone|Richard Wilson|Medium|Eoin McLove|Night Of The Nearly Dead|Mrs Doyle|Celebrity Visitor|Series Three|Singing Sensation|Fan Obsession
 Father Ted|What competition does Mrs Doyle win to arrange a visit from Eoin McLove?|A poetry competition|A cookery competition|A raffle|A radio phone-in|Medium|Mrs Doyle|Poetry Competition|Eoin McLove|Night Of The Nearly Dead|Series Three|Prize Visit|Character Storyline
 Father Ted|Which American city offers Ted the prospect of his own parish in the series finale?|Los Angeles|Boston|Chicago|New York|Medium|Going To America|Los Angeles|Beverly Hills|Father Ted|Series Three Finale|American Parish|Career Opportunity
 `;

 const FIRST_ID = 15787;

 const programmeYears = {
   'Friday Night Dinner': '2011-2020',
   'Miranda': '2009-2015',
   'Father Ted': '1995-1998'
 };

 const normalise = value =>
   String(value).normalize('NFKC')
     .trim().toLocaleLowerCase('en-GB');

 const questions = facts.trim().split('\n')
   .map(line => line.trim())
   .filter(Boolean)
   .map((line, index) => {
     const id = 'tv_' + String(FIRST_ID + index).padStart(5, '0');
     const fields = line.split('|').map(value => value.trim());

     if (fields.length !== 14) {
       throw new Error(
         `Pack 336: expected 14 fields at ${id}, found ${fields.length}`
       );
     }

     const [
       programme,
       question,
       correctAnswer,
       wrong1,
       wrong2,
       wrong3,
       difficulty,
       ...specificTags
     ] = fields;

     if (!Object.prototype.hasOwnProperty.call(
       programmeYears, programme
     )) {
       throw new Error(`Unknown programme at ${id}`);
     }

     if (
       [question, correctAnswer, wrong1, wrong2, wrong3,
         ...specificTags].some(value => !value)
     ) {
       throw new Error(`Missing question, answer or tag at ${id}`);
     }

     if (
       !['Easy', 'Medium', 'Hard'].includes(difficulty) ||
       specificTags.length !== 7
     ) {
       throw new Error(`Invalid difficulty or specialist tags at ${id}`);
     }

     const answers = [wrong1, wrong2, wrong3];

     if (new Set([
       correctAnswer, ...answers
     ].map(normalise)).size !== 4) {
       throw new Error(`Duplicate answer option at ${id}`);
     }

     answers.splice(index % 4, 0, correctAnswer);

     const tags = [...new Map([
       'Television',
       'British Television',
       'British Comedy',
       'Sitcom',
       'Completed Series',
       'British Sitcom Collection',
       programme === 'Miranda' ? 'BBC' : 'Channel 4',
       programmeYears[programme],
       programme,
       `Programme: ${programme}`,
       ...specificTags,
       correctAnswer
     ].map(tag => [normalise(tag), tag])).values()];

     return {
       id,
       category: 'Television',
       programme,
       question,
       answers,
       correctAnswer,
       difficulty,
       tags,
       dailyEligible: true
     };
   });

 // Check the actual exported objects.

 const expectedProgrammes = {
   'Friday Night Dinner': 38,
   'Miranda': 38,
   'Father Ted': 39
 };

 if (
   questions.length !== 115 ||
   questions[0].id !== 'tv_15787' ||
   questions[questions.length - 1].id !== 'tv_15901'
 ) {
   throw new Error('Pack 336 count or ID range incorrect');
 }

 for (const [programme, count] of Object.entries(expectedProgrammes)) {
   if (questions.filter(q => q.programme === programme).length !== count) {
     throw new Error(`Wrong question count for ${programme}`);
   }
 }

 if (
   new Set(questions.map(q => q.id)).size !== questions.length ||
   new Set(questions.map(q =>
     normalise(q.programme + '|' + q.question)
   )).size !== questions.length
 ) {
   throw new Error('Duplicate question wording or IDs in Pack 336');
 }

 if (questions.some((q, index) =>
   q.id !== 'tv_' + String(FIRST_ID + index).padStart(5, '0') ||
   q.category !== 'Television' ||
   !Object.prototype.hasOwnProperty.call(
     programmeYears, q.programme
   ) ||
   q.answers.length !== 4 ||
   !q.answers.includes(q.correctAnswer) ||
   new Set(q.answers.map(normalise)).size !== 4 ||
   !q.tags.includes(`Programme: ${q.programme}`) ||
   q.tags.length < 16 ||
   !['Easy', 'Medium', 'Hard'].includes(q.difficulty) ||
   q.dailyEligible !== true
 )) {
   throw new Error('Pack 336 exported-object validation failed');
 }

 module.exports = questions;






