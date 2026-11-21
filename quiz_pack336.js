
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
// 21 November 2026 storyline audit of Pack 336.
// The original 115 questions and IDs tv_15787–tv_15901 are unchanged.
// New entries cover all 37 Friday Night Dinner, 20 Miranda and
// 25 Father Ted scripted episodes, including original Christmas specials.
// Two separately broadcast charity sketches are covered as bonuses.
// Every new stem identifies its programme and each has a labelled source.
const auditAdditions = [
  {
    "id": "tv_37433",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what piece of furniture blocks the staircase and traps Jackie and Adam upstairs?",
    "answers": [
      "An old sofa bed",
      "A dining table",
      "A wardrobe",
      "A piano"
    ],
    "correctAnswer": "An old sofa bed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E1 The Sofabed",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: An old sofa bed",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Trapped Staircase",
      "eBay Collection",
      "Jackie Goodman"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37434",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which television cooking competition is Jackie keen to watch while trapped upstairs?",
    "answers": [
      "The Great British Bake Off",
      "MasterChef",
      "Come Dine with Me",
      "Ready Steady Cook"
    ],
    "correctAnswer": "MasterChef",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E1 The Sofabed",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: MasterChef",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "MasterChef",
      "Jackie Goodman",
      "TV Viewing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37435",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what item does Martin use to inspect the inside of his underpants?",
    "answers": [
      "A torch",
      "A camera",
      "A magnifying glass",
      "A mirror"
    ],
    "correctAnswer": "A magnifying glass",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E2 The Jingle",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A magnifying glass",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Goodman",
      "Underpants",
      "Magnifying Glass"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37436",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what homemade dish does Martin drop onto the kitchen floor?",
    "answers": [
      "Chicken soup",
      "Apple crumble",
      "Fish pie",
      "Beef casserole"
    ],
    "correctAnswer": "Beef casserole",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E3 The Curtains",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Beef casserole",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Goodman",
      "Dinner Disaster",
      "Kitchen Floor"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37437",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which pet goes missing during the evening of the new dress?",
    "answers": [
      "Wilson",
      "Milson",
      "Pandy",
      "Buggy"
    ],
    "correctAnswer": "Wilson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E4 The Dress",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Wilson",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jim Bell",
      "Missing Dog",
      "Family Search"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37438",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which woman nearly runs Adam over on his birthday?",
    "answers": [
      "Val",
      "Sheila Bloom",
      "Nellie",
      "Tanya Green"
    ],
    "correctAnswer": "Sheila Bloom",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E5 The Mercedes",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Sheila Bloom",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Adam Birthday",
      "Sheila Bloom",
      "Old Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37439",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what does Martin admit about Sheila Bloom from his past?",
    "answers": [
      "She is his secret sister",
      "She was his employer",
      "They once had a romantic relationship",
      "They were classmates"
    ],
    "correctAnswer": "They once had a romantic relationship",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E5 The Mercedes",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: They once had a romantic relationship",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Past",
      "Sheila Bloom",
      "Jackie Jealousy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37440",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which young woman does Jackie invite in an attempt to set Adam up?",
    "answers": [
      "Katie",
      "Lucy",
      "Val",
      "Tanya Green"
    ],
    "correctAnswer": "Tanya Green",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S1E6 The Date",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Tanya Green",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Tanya Green",
      "Adam Blind Date",
      "Jackie Matchmaking"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37441",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which discarded childhood toy does Jonny want revenge for Adam throwing away?",
    "answers": [
      "Pandy",
      "Wilson",
      "Lord Luck",
      "Milson"
    ],
    "correctAnswer": "Pandy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E1 Buggy",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Pandy",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Childhood Toy",
      "Pandy",
      "Sibling Rivalry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37442",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what was Adam's childhood toy called that Jonny threatens to destroy?",
    "answers": [
      "Pandy",
      "Buggy",
      "Lord Luck",
      "Tommy"
    ],
    "correctAnswer": "Buggy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E1 Buggy",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Buggy",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Adam Old Rabbit",
      "Buggy",
      "Sibling Revenge"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37443",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, who brings an irritable new male companion to Friday dinner?",
    "answers": [
      "Jackie Goodman",
      "Val",
      "Grandma Nellie",
      "Horrible Grandma"
    ],
    "correctAnswer": "Grandma Nellie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E2 Mr Morris",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Grandma Nellie",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Grandma Nellie",
      "Mr Morris",
      "New Companion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37444",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what injury does Jonny falsely claim to escape helping in the loft?",
    "answers": [
      "A sprained ankle",
      "A broken wrist",
      "A bad back",
      "A dislocated shoulder"
    ],
    "correctAnswer": "A dislocated shoulder",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E3 The Loft",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A dislocated shoulder",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Pretence",
      "Loft Cleaning",
      "Avoiding Chores"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37445",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, whose company car becomes a subject of embarrassment for the family?",
    "answers": [
      "Jonny's",
      "Adam's",
      "Martin's",
      "Jim's"
    ],
    "correctAnswer": "Jonny's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E4 The New Car",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jonny's",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Goodman",
      "Company Car",
      "Family Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37446",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, how old is the boss Jonny is afraid to break up with?",
    "answers": [
      "25",
      "43",
      "31",
      "57"
    ],
    "correctAnswer": "43",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E5 The Yoghurts",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: 43",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Girlfriend",
      "Older Boss",
      "Relationship Crisis"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37447",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, where does Jackie retreat to escape the mouse in the house?",
    "answers": [
      "The garage",
      "The bathroom",
      "The shed",
      "The caravan"
    ],
    "correctAnswer": "The shed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E6 The Mouse",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: The shed",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jackie Goodman",
      "Mouse Fear",
      "Shed"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37448",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, who unexpectedly gets to sit down for dinner with the Goodman family?",
    "answers": [
      "Mr Morris",
      "Ben",
      "Tanya Green",
      "Jim Bell"
    ],
    "correctAnswer": "Jim Bell",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S2E6 The Mouse",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jim Bell",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jim Bell",
      "Dinner Invitation",
      "Mouse Incident"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37449",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which unwelcome relative arrives alongside Grandma Nellie at the Christmas meal?",
    "answers": [
      "Horrible Grandma",
      "Uncle Saul",
      "Aunt Val",
      "Sheila Bloom"
    ],
    "correctAnswer": "Horrible Grandma",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "2012 Christmas",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Horrible Grandma",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Horrible Grandma",
      "Christmas Dinner",
      "Family Tension"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37450",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which eight-year-old develops a crush on Adam when he brings a girlfriend home?",
    "answers": [
      "Lucy",
      "Katie",
      "Tanya",
      "Rebecca"
    ],
    "correctAnswer": "Katie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E1 The Girlfriend",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Katie",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Katie",
      "Adam Girlfriend",
      "Unwanted Attention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37451",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what dead animal does Martin keep in the garage freezer?",
    "answers": [
      "A rabbit",
      "A badger",
      "A fox",
      "A squirrel"
    ],
    "correctAnswer": "A fox",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E2 The Fox",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A fox",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Goodman",
      "Freezer Secret",
      "Taxidermy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37452",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what announcement concerning Mr Morris distresses Jackie and the boys?",
    "answers": [
      "He is moving abroad",
      "He is standing for election",
      "He is taking over the house",
      "Grandma Nellie is engaged to him"
    ],
    "correctAnswer": "Grandma Nellie is engaged to him",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E3 Mr Morris Returns",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Grandma Nellie is engaged to him",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Nellie Engagement",
      "Mr Morris",
      "Family Horror"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37453",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which former prime minister does Martin's portrait of Jackie resemble?",
    "answers": [
      "Margaret Thatcher",
      "Theresa May",
      "Harold Wilson",
      "Tony Blair"
    ],
    "correctAnswer": "Margaret Thatcher",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E4 The Anniversary",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Margaret Thatcher",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jackie Portrait",
      "Martin Painting",
      "Anniversary"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37454",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what image does Jonny have tattooed for his parents' anniversary evening?",
    "answers": [
      "A heart",
      "A skull",
      "A dragon",
      "A football"
    ],
    "correctAnswer": "A skull",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E4 The Anniversary",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A skull",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Tattoo",
      "Skull",
      "Anniversary Chaos"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37455",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what secret about Aunty Val do the Goodmans discover?",
    "answers": [
      "She has won the lottery",
      "She is moving to France",
      "She is having an affair",
      "She is expecting a baby"
    ],
    "correctAnswer": "She is having an affair",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E5 The Piano",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: She is having an affair",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Val",
      "Secret Affair",
      "Piano Tuner"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37456",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, whose wedding forms the climax of the third series?",
    "answers": [
      "Adam's",
      "Jonny's",
      "Val's",
      "Grandma Nellie's"
    ],
    "correctAnswer": "Grandma Nellie's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S3E6 The Big Day",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Grandma Nellie's",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Grandma Nellie",
      "Mr Morris",
      "Wedding"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37457",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what bizarre habit does Martin's unwanted guest have when talking?",
    "answers": [
      "He keeps his eyes closed",
      "He whistles after each sentence",
      "He sings instead of speaking",
      "He only whispers"
    ],
    "correctAnswer": "He keeps his eyes closed",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E1 The Two Tonys",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: He keeps his eyes closed",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Old Friend",
      "Eyes Closed",
      "Awkward Guest"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37458",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which household maintenance task leads Martin to ruin Jackie's carpet?",
    "answers": [
      "Polishing the windows",
      "Oiling the hinges",
      "Repairing the roof",
      "Cleaning the oven"
    ],
    "correctAnswer": "Oiling the hinges",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E2 The Carpet Cleaner",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Oiling the hinges",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Goodman",
      "Hinge Oil",
      "Carpet Spill"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37459",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, where has Jonny secretly got married before arriving at Friday dinner?",
    "answers": [
      "Gretna Green",
      "Paris",
      "Las Vegas",
      "New York"
    ],
    "correctAnswer": "Las Vegas",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E3 Congratulations",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Las Vegas",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jonny Surprise Marriage",
      "Las Vegas",
      "Family Shock"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37460",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, how many attempts did Jim need before passing his driving test?",
    "answers": [
      "2",
      "5",
      "8",
      "15"
    ],
    "correctAnswer": "15",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E4 The Pyjamas",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: 15",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jim Bell",
      "Driving Test",
      "Repeated Attempts"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37461",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which relative's funeral brings Horrible Grandma back?",
    "answers": [
      "Uncle Saul's",
      "Grandma Nellie's",
      "Aunt Val's",
      "Uncle Philip's"
    ],
    "correctAnswer": "Uncle Saul's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E5 The Funeral",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Uncle Saul's",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Uncle Saul",
      "Funeral",
      "Horrible Grandma"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37462",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what sign shocks Adam and Jonny when they return to their parents' house?",
    "answers": [
      "A To Let sign",
      "A For Sale sign",
      "A No Parking sign",
      "A Road Closed sign"
    ],
    "correctAnswer": "A For Sale sign",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S4E6 For Sale",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A For Sale sign",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "House Sale",
      "Adam Jonny",
      "Family Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37463",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what is the first name of Jim's internet date whom he initially describes as his sister?",
    "answers": [
      "Val",
      "Lucy",
      "Jackie",
      "Tanya"
    ],
    "correctAnswer": "Jackie",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E1 The Other Jackie",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jackie",
      "Episode source: https://www.tvguide.com/tvshows/friday-night-dinner/episodes-season-5/1000456997/",
      "Martin Jackie",
      "Hot Tub",
      "Son Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37464",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, how old is the tinned meat Martin has been hiding in his shed?",
    "answers": [
      "3 years",
      "7 years",
      "50 years",
      "20 years"
    ],
    "correctAnswer": "20 years",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E2 The Tin of Meat",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: 20 years",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Shed",
      "Ancient Meat",
      "Val"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37465",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, who insists on organising her own surprise party?",
    "answers": [
      "Jackie Goodman",
      "Aunty Val",
      "Grandma Nellie",
      "Jim Bell"
    ],
    "correctAnswer": "Jackie Goodman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E3 The Surprise",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jackie Goodman",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jackie Party",
      "Martin Goodman",
      "Disaster"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37466",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which recently dumped friend of Jonny's comes to dinner needing cheering up?",
    "answers": [
      "Tony",
      "Ben",
      "Ricky",
      "Neil"
    ],
    "correctAnswer": "Ben",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E4 Lord Luck",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Ben",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Ben",
      "Jonny Friend",
      "Lord Luck"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37467",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which musical instrument does Adam reluctantly perform on for Jackie and Val?",
    "answers": [
      "Piano",
      "Clarinet",
      "Violin",
      "Saxophone"
    ],
    "correctAnswer": "Violin",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E5 The Violin",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Violin",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Adam Goodman",
      "Violin Performance",
      "Jackie And Val"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37468",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what happens to Jim's dog Wilson near the end of the fifth series?",
    "answers": [
      "He is rehomed",
      "He wins a pet show",
      "He moves abroad",
      "He dies"
    ],
    "correctAnswer": "He dies",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E6 Wilson",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: He dies",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Wilson Dies",
      "Jim Bell",
      "Emotional Finale"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37469",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what must the boys help Martin assemble or risk losing their crumble?",
    "answers": [
      "A wooden shelf",
      "A bookcase",
      "A dining table",
      "A garden bench"
    ],
    "correctAnswer": "A wooden shelf",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S5E6 Wilson",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A wooden shelf",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Crumble Threat",
      "Wooden Shelf",
      "Martin Goodman"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37470",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what new pet does Jim introduce after losing Wilson?",
    "answers": [
      "A cat called Watson",
      "A dog called Milson",
      "A parrot called Trevor",
      "A rabbit called Pandy"
    ],
    "correctAnswer": "A dog called Milson",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E1 The Caravan",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A dog called Milson",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jim New Dog",
      "Milson",
      "Family Neighbour"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37471",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what does Adam gaffer-tape to the ceiling during his prank war with Jonny?",
    "answers": [
      "Jonny's coat",
      "A plastic bag",
      "Jonny's phone",
      "The television remote"
    ],
    "correctAnswer": "Jonny's phone",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E2 The Plastic Bag",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jonny's phone",
      "Episode source: https://www.channel4.com/press/news/filming-commences-friday-night-dinner-series-6",
      "Martin Obsession",
      "Bag In Tree",
      "Goodman Garden"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37472",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, which former household helper arrives for an unwelcome reunion?",
    "answers": [
      "A childhood schoolteacher",
      "Their first cleaner",
      "An old piano tutor",
      "The family's former au pair"
    ],
    "correctAnswer": "The family's former au pair",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E3 The Au Pair",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: The family's former au pair",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Former Au Pair",
      "Cream Teas",
      "Family Tension"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37473",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, whose birthday is disrupted by Horrible Grandma's uninvited arrival?",
    "answers": [
      "Martin's",
      "Adam's",
      "Jonny's",
      "Jim's"
    ],
    "correctAnswer": "Martin's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E4 Dad's Birthday",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Martin's",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Martin Birthday",
      "Horrible Grandma",
      "Jim Magic"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37474",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what huge object does Jim install in the Goodmans' living room?",
    "answers": [
      "A trampoline",
      "A dog cage",
      "A chicken coop",
      "A birdcage"
    ],
    "correctAnswer": "A dog cage",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E5 The Cage",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A dog cage",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Jim Bell",
      "Milson",
      "Giant Dog Cage"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37475",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what unusual romantic description does Val give to a man she has a date with?",
    "answers": [
      "A circus clown",
      "A secret agent",
      "A sex robot",
      "A rock star"
    ],
    "correctAnswer": "A sex robot",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E5 The Cage",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A sex robot",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Val Date",
      "Sex Robot",
      "Digital Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37476",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what news do Adam and Jonny's girlfriends both reveal in the series finale?",
    "answers": [
      "They are moving abroad",
      "They have won a competition",
      "They are sisters",
      "They are pregnant"
    ],
    "correctAnswer": "They are pregnant",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E6 The Females",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: They are pregnant",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Adam Jonny",
      "Pregnancies",
      "Family Future"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37477",
    "category": "Television",
    "programme": "Friday Night Dinner",
    "question": "In Friday Night Dinner, what coincidence about Adam and Jonny's girlfriends is revealed before the final dinner?",
    "answers": [
      "They share the first name Lucy",
      "They work at the same shop",
      "They have the same birthday",
      "They were born in America"
    ],
    "correctAnswer": "They share the first name Lucy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Friday Night Dinner",
      "Programme: Friday Night Dinner",
      "S6E6 The Females",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: They share the first name Lucy",
      "Episode source: https://thetvdb.com/series/friday-night-dinner/allseasons/official",
      "Adam Girlfriend",
      "Jonny Girlfriend",
      "Lucy"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37478",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what does Miranda falsely claim she has achieved in sport to impress Gary?",
    "answers": [
      "World swimming champion",
      "Olympic gymnastics",
      "Professional tennis",
      "National figure skating"
    ],
    "correctAnswer": "Olympic gymnastics",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E1 Date",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Olympic gymnastics",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Miranda Gary",
      "Exaggerated Achievement",
      "First Meeting"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37479",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which foreign-language evening class reunites Miranda with an old teacher?",
    "answers": [
      "German",
      "Spanish",
      "French",
      "Italian"
    ],
    "correctAnswer": "French",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E2 Teacher",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: French",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "French Class",
      "Old Teacher",
      "Romantic Confidence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37480",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, why does Miranda suddenly seek a more respectable job?",
    "answers": [
      "Stevie closes the shop",
      "Gary demands she become a teacher",
      "She inherits a company",
      "Penny has exaggerated her career to an old school friend"
    ],
    "correctAnswer": "Penny has exaggerated her career to an old school friend",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E3 Job",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Penny has exaggerated her career to an old school friend",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny Hart",
      "Career Lie",
      "Job Search"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37481",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, where does Miranda actually go for her supposedly relaxing holiday?",
    "answers": [
      "A hotel across the road",
      "The south of France",
      "A caravan in Scotland",
      "A yacht in Greece"
    ],
    "correctAnswer": "A hotel across the road",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E4 Holiday",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A hotel across the road",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Holiday Across Road",
      "Hotel",
      "Miranda Escape"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37482",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what is the name of the hotel porter Miranda befriends?",
    "answers": [
      "Mike",
      "Jason",
      "Gary",
      "Clive"
    ],
    "correctAnswer": "Jason",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E4 Holiday",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Jason",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Hotel Porter",
      "Jason",
      "Holiday Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37483",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what does Miranda falsely tell Penny to avoid a matchmaking party?",
    "answers": [
      "That she is married",
      "That she is moving abroad",
      "That she is gay",
      "That she is engaged to Gary"
    ],
    "correctAnswer": "That she is gay",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E5 Excuse",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: That she is gay",
      "Episode source: https://www.tvguide.com/tvshows/miranda/episodes-season-1/1000401459/",
      "Penny Matchmaking",
      "Unwanted Date",
      "Pretence"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37484",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what forgotten property brings a handsome stranger into Miranda's shop?",
    "answers": [
      "His dog lead",
      "His mobile phone",
      "His car keys",
      "His wallet"
    ],
    "correctAnswer": "His wallet",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E6 Dog",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: His wallet",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Handsome Stranger",
      "Lost Wallet",
      "Stevie Rivalry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37485",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which famous rowing event does Tilly invite Miranda to?",
    "answers": [
      "Henley Regatta",
      "The Boat Race",
      "The Oxford Regatta",
      "The Great River Race"
    ],
    "correctAnswer": "Henley Regatta",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S1E6 Dog",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Henley Regatta",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Tilly",
      "Henley Regatta",
      "Social Invitation"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37486",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what has Miranda been spending much of her time doing since Gary went away?",
    "answers": [
      "Training for a marathon",
      "Eating biscuits and watching television",
      "Learning to sail",
      "Studying for medical school"
    ],
    "correctAnswer": "Eating biscuits and watching television",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E1 The New Me",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Eating biscuits and watching television",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Gary Absent",
      "Miranda Retreats",
      "Self Reinvention"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37487",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which fundraising challenge does Miranda sign up for after worrying about her legacy?",
    "answers": [
      "A sponsored swim",
      "A mountain climb",
      "A charity parachute jump",
      "A long-distance cycle ride"
    ],
    "correctAnswer": "A charity parachute jump",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E2 Before I Die",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A charity parachute jump",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Charity Jump",
      "Personal Legacy",
      "Miranda Self Esteem"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37488",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what new problem confronts Miranda after she finds some confidence?",
    "answers": [
      "She is unexpectedly fired",
      "Her shop is robbed",
      "She inherits a farm",
      "Several men show romantic interest"
    ],
    "correctAnswer": "Several men show romantic interest",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E3 Let's Do It",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Several men show romantic interest",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Multiple Suitors",
      "Confidence",
      "Romantic Confusion"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37489",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what sort of newcomer makes Miranda and Stevie worry about keeping up?",
    "answers": [
      "A much younger energetic woman",
      "A former school principal",
      "A retired shopkeeper",
      "An elderly fashion designer"
    ],
    "correctAnswer": "A much younger energetic woman",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E4 A New Low",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A much younger energetic woman",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Young Rival",
      "Miranda Stevie",
      "Competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37490",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which activity forces Miranda and her mother to face a silent professional?",
    "answers": [
      "A job interview",
      "A therapy assessment",
      "A courtroom appearance",
      "A radio quiz"
    ],
    "correctAnswer": "A therapy assessment",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E5 Just Act Normal",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A therapy assessment",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Miranda Penny",
      "Therapist",
      "Family Assessment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37491",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, where do Miranda and Stevie try to spend Christmas with their friends?",
    "answers": [
      "At a ski lodge",
      "At Penny's holiday villa",
      "At the joke shop",
      "At a seaside hotel"
    ],
    "correctAnswer": "At the joke shop",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S2E6 The Perfect Christmas",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: At the joke shop",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Christmas Shop",
      "Gary And Clive",
      "Friendship"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37492",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what does Penny insist Miranda undertake before Christmas can go ahead?",
    "answers": [
      "A driving test",
      "A new apprenticeship",
      "An overseas holiday",
      "A detox"
    ],
    "correctAnswer": "A detox",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E1 It Was Panning",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A detox",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny Christmas Ultimatum",
      "Detox",
      "Family Pressure"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37493",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what public role does Penny seek with Tilly's help?",
    "answers": [
      "Local councillor",
      "Mayor of London",
      "Member of Parliament",
      "Police commissioner"
    ],
    "correctAnswer": "Local councillor",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E2 What a Surprise",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Local councillor",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny Political Campaign",
      "Tilly",
      "Miranda Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37494",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, whose birthday party do Miranda and Gary both want dates for?",
    "answers": [
      "Penny's",
      "Stevie's",
      "Tilly's",
      "Clive's"
    ],
    "correctAnswer": "Stevie's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E2 What a Surprise",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Stevie's",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Stevie Birthday",
      "Miranda Gary",
      "New Dates"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37495",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what play area does Miranda find herself stuck in while looking after a toddler?",
    "answers": [
      "A ball pool at the seaside",
      "A school climbing frame",
      "A children's soft-play tunnel",
      "An adventure playground zipwire"
    ],
    "correctAnswer": "A children's soft-play tunnel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E3 The Dinner Party",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A children's soft-play tunnel",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Childcare",
      "Soft Play",
      "Miranda Mischief"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37496",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, how many guests does Miranda invite to prove she can host an adult dinner party?",
    "answers": [
      "Two",
      "Four",
      "Twelve",
      "Eight"
    ],
    "correctAnswer": "Eight",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E3 The Dinner Party",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Eight",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Adulting",
      "Dinner Party",
      "Eight Guests"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37497",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, whom does Miranda spend five days nursing before becoming ill herself?",
    "answers": [
      "Penny",
      "Stevie",
      "Gary",
      "Tilly"
    ],
    "correctAnswer": "Penny",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E4 Je Regret Nothing",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Penny",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny Illness",
      "Miranda Caregiver",
      "Regrets"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37498",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, whose restaurant prepares for a grand reopening?",
    "answers": [
      "Clive's",
      "Gary's",
      "Mike's",
      "Stevie's"
    ],
    "correctAnswer": "Gary's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E5 Three Little Words",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Gary's",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Gary Restaurant",
      "Reopening",
      "Romance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37499",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which celebrity chef does Penny become obsessed with?",
    "answers": [
      "Gordon Ramsay",
      "Jamie Oliver",
      "Raymond Blanc",
      "Nigella Lawson"
    ],
    "correctAnswer": "Raymond Blanc",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E5 Three Little Words",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Raymond Blanc",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny",
      "Raymond Blanc",
      "Celebrity Chef"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37500",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what radical plan does Miranda make when she feels fed up with her life?",
    "answers": [
      "Join the army",
      "Sell her shop to Clive",
      "Move to Cornwall permanently",
      "Go travelling"
    ],
    "correctAnswer": "Go travelling",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E6 A Brief Encounter",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Go travelling",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Miranda Travels",
      "Gary",
      "Life Choice"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37501",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, what event is Penny more focused on than her daughter's travel plans?",
    "answers": [
      "Renewing her wedding vows",
      "A council election count",
      "Stevie's birthday",
      "A television appearance"
    ],
    "correctAnswer": "Renewing her wedding vows",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "S3E6 A Brief Encounter",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Renewing her wedding vows",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Penny Wedding Vows",
      "Miranda Departure",
      "Family"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37502",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which two men both propose marriage to Miranda?",
    "answers": [
      "Gary and Clive",
      "Gary and Mike",
      "Mike and Colin",
      "Gary and Jason"
    ],
    "correctAnswer": "Gary and Mike",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "2014 I Do But To Who",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Gary and Mike",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Two Proposals",
      "Gary Preston",
      "Mike"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37503",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which man does Miranda finally marry?",
    "answers": [
      "Mike",
      "Clive",
      "Gary Preston",
      "Jason"
    ],
    "correctAnswer": "Gary Preston",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "2015 The Final Curtain",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Gary Preston",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Miranda Wedding",
      "Gary Preston",
      "Series Resolution"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37504",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, whose wedding does Miranda mistakenly interrupt because she thinks Gary is the groom?",
    "answers": [
      "Tilly's",
      "Stevie's",
      "Mike's",
      "Clive's"
    ],
    "correctAnswer": "Clive's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "2015 The Final Curtain",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Clive's",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Clive Wedding",
      "Gary Best Man",
      "Romantic Mixup"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37505",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which singer visits Pineapple Dance Studios alongside JLS and Louis Spence in the 2011 Comic Relief sketch?",
    "answers": [
      "Heather Small",
      "Annie Lennox",
      "Beverley Knight",
      "Kim Wilde"
    ],
    "correctAnswer": "Heather Small",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "2011 Comic Relief sketch",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Heather Small",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Comic Relief",
      "Pineapple Dance Studios",
      "Artistic Director"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37506",
    "category": "Television",
    "programme": "Miranda",
    "question": "In Miranda, which London venue hosts the tennis event Miranda attends?",
    "answers": [
      "Wembley Stadium",
      "Royal Albert Hall",
      "The O2 Arena",
      "Queen's Club"
    ],
    "correctAnswer": "Royal Albert Hall",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Miranda",
      "Programme: Miranda",
      "2012 Sport Relief sketch",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Royal Albert Hall",
      "Episode source: https://thetvdb.com/series/miranda/allseasons/official",
      "Sport Relief",
      "Indoor Tennis",
      "Royal Albert Hall"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37507",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what television-related opportunity initially appears to offer Ted fame?",
    "answers": [
      "A celebrity cooking contest",
      "A quiz-show hosting job",
      "An interview with Terry MacNamee",
      "A comedy audition"
    ],
    "correctAnswer": "An interview with Terry MacNamee",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E1 Good Luck Father Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: An interview with Terry MacNamee",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Terry MacNamee",
      "Television Interview",
      "Ted Ambition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37508",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which temporary attraction ruins Ted's plans to film at a local beauty spot?",
    "answers": [
      "A travelling circus",
      "A music festival",
      "A motor show",
      "Funland"
    ],
    "correctAnswer": "Funland",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E1 Good Luck Father Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Funland",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Funland",
      "Film Crew",
      "Bad Timing"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37509",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what accident makes Ted feel guilty about wishing Father Stone would go away?",
    "answers": [
      "The priest is struck by lightning",
      "He breaks a leg while jogging",
      "He falls from a boat",
      "He is hit by a golf ball"
    ],
    "correctAnswer": "The priest is struck by lightning",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E2 Entertaining Father Stone",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: The priest is struck by lightning",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Father Stone",
      "Lightning Strike",
      "Ted Guilt"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37510",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, who orders the priests to protest a controversial film?",
    "answers": [
      "Father Dick Byrne",
      "Bishop Brennan",
      "Father Stone",
      "Mrs Doyle"
    ],
    "correctAnswer": "Bishop Brennan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E3 The Passion of Saint Tibulus",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Bishop Brennan",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Bishop Brennan",
      "Film Protest",
      "Moral Crusade"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37511",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which opposing island's priests does Ted hope to defeat in a lookalike contest?",
    "answers": [
      "Mannion Island",
      "Inis Mór",
      "Rugged Island",
      "Lambay Island"
    ],
    "correctAnswer": "Rugged Island",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E4 Competition Time",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Rugged Island",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Rugged Island",
      "Priest Contest",
      "Ted Rivalry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37512",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what is the title of novelist Polly Clarke's racy book?",
    "answers": [
      "The Thorn Birds",
      "A Woman of Substance",
      "The Country Girls",
      "Bejewelled with Kisses"
    ],
    "correctAnswer": "Bejewelled with Kisses",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E5 And God Created Woman",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Bejewelled with Kisses",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Polly Clarke",
      "Romance Novel",
      "Ted Attraction"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37513",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, how much money are Ted and Dougal led to believe Father Jack has left them?",
    "answers": [
      "Half a million pounds",
      "Ten thousand pounds",
      "Five million pounds",
      "A thousand pounds"
    ],
    "correctAnswer": "Half a million pounds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S1E6 Grant Unto Him Eternal Rest",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Half a million pounds",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Jack Inheritance",
      "Will",
      "Ted Dougal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37514",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, whose caravan do Ted and the others borrow for their disastrous summer holiday?",
    "answers": [
      "Father Stone's",
      "Father O'Rourke's",
      "Bishop Brennan's",
      "Father Dick Byrne's"
    ],
    "correctAnswer": "Father O'Rourke's",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E1 Hell",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Father O'Rourke's",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Father ORourke",
      "Caravan Holiday",
      "Kilkenny"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37515",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what sort of neighbours spoil the priests' holiday?",
    "answers": [
      "A rowdy stag party",
      "A group of golfers",
      "Nudists",
      "A touring choir"
    ],
    "correctAnswer": "Nudists",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E1 Hell",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Nudists",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Nudist Neighbours",
      "Caravan Holiday",
      "Ted Embarrassment"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37516",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what household problem prompts Ted to organise a raffle?",
    "answers": [
      "A blocked chimney",
      "A burst boiler",
      "A broken staircase",
      "A leaking roof"
    ],
    "correctAnswer": "A leaking roof",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E2 Think Fast Father Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A leaking roof",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Leaky Roof",
      "Raffle Fundraiser",
      "Parochial House"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37517",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which relic are visiting bishops assessing for a higher classification?",
    "answers": [
      "The Holy Stone of Clonrickert",
      "The Book of Kells",
      "The Cross of Cong",
      "Saint Patrick's Bell"
    ],
    "correctAnswer": "The Holy Stone of Clonrickert",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E3 Tentacles of Doom",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: The Holy Stone of Clonrickert",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Clonrickert",
      "Holy Stone",
      "Bishops Visit"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37518",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, to what class are visiting bishops considering upgrading the Holy Stone?",
    "answers": [
      "Class I",
      "Class II",
      "Class III",
      "Class IV"
    ],
    "correctAnswer": "Class II",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E3 Tentacles of Doom",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Class II",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Holy Stone",
      "Class Two",
      "Relic Status"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37519",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which rebellious young priest befriends Dougal during the stolen-whistle mystery?",
    "answers": [
      "Father Fintan Stack",
      "Father Stone",
      "Father Damien Lennon",
      "Father Larry Duff"
    ],
    "correctAnswer": "Father Damien Lennon",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E4 Old Grey Whistle Theft",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Father Damien Lennon",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Father Damo Lennon",
      "Rebellious Priest",
      "Dougal"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37520",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what useful item is stolen from the local picnic supervisor Mr Benson?",
    "answers": [
      "His bicycle",
      "His telescope",
      "His radio",
      "His whistle"
    ],
    "correctAnswer": "His whistle",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E4 Old Grey Whistle Theft",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: His whistle",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Mr Benson",
      "Whistle Stolen",
      "Picnic Area"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37521",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what does Father Jack do to Ted's guitar after hearing a Eurosong rehearsal?",
    "answers": [
      "He shoots it",
      "He sets fire to it",
      "He hides it in the garden",
      "He sells it at a raffle"
    ],
    "correctAnswer": "He shoots it",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E5 A Song for Europe",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: He shoots it",
      "Episode source: https://www.rte.ie/culture/2025/0531/1515614-careful-now-the-10-best-father-ted-episodes-ranked/",
      "Eurosong",
      "Ted Dougal",
      "Song Entry"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37522",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what title do Ted and Dougal give their terrible competition song?",
    "answers": [
      "A Song for Ireland",
      "My Lovely Horse",
      "The Song of Craggy Island",
      "Lovely Girls Forever"
    ],
    "correctAnswer": "My Lovely Horse",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E5 A Song for Europe",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: My Lovely Horse",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "My Lovely Horse",
      "Eurovision Parody",
      "Song Competition"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37523",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what name does Dougal give his pet rabbit?",
    "answers": [
      "Tennis",
      "Wimbledon",
      "Sampras",
      "Flopsy"
    ],
    "correctAnswer": "Sampras",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E6 The Plague",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Sampras",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Rabbit Sampras",
      "Bishop Brennan",
      "Animal Phobia"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37524",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which visitor's fear of rabbits drives the episode's chaos?",
    "answers": [
      "Father Jack",
      "Father Dick Byrne",
      "Father Fintan Stack",
      "Bishop Brennan"
    ],
    "correctAnswer": "Bishop Brennan",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E6 The Plague",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Bishop Brennan",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Rabbit Phobia",
      "Bishop Brennan",
      "Dougal Pet"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37525",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what sort of performer is unimpressed by the Lovely Girls event?",
    "answers": [
      "A feminist protest singer",
      "A visiting opera soprano",
      "A boy-band singer",
      "A jazz pianist"
    ],
    "correctAnswer": "A feminist protest singer",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E7 Rock A Hula Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A feminist protest singer",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Protest Singer",
      "Feminism",
      "Lovely Girls"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37526",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which religious period inspires Ted and his colleagues to give up pleasures?",
    "answers": [
      "Advent",
      "Lent",
      "Easter Week",
      "Whitsun"
    ],
    "correctAnswer": "Lent",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E8 Cigarettes and Alcohol and Rollerblading",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Lent",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Lent",
      "Self Denial",
      "Priests"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37527",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what illness sends Father Jack away from the parochial house?",
    "answers": [
      "Food poisoning",
      "Double pneumonia",
      "Hairy hands syndrome",
      "Tropical fever"
    ],
    "correctAnswer": "Hairy hands syndrome",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E9 New Jack City",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Hairy hands syndrome",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Father Jack",
      "Hairy Hands",
      "Old Priests Home"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37528",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which obnoxious priest is sent as Father Jack's replacement?",
    "answers": [
      "Father Damien Lennon",
      "Father Stone",
      "Father Dick Byrne",
      "Father Fintan Stack"
    ],
    "correctAnswer": "Father Fintan Stack",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E9 New Jack City",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Father Fintan Stack",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Fintan Stack",
      "Replacement Priest",
      "Bishop Brennan"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37529",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what does Dougal do to create the plane's emergency?",
    "answers": [
      "He accidentally causes a loss of fuel",
      "He opens the emergency door",
      "He starts a fire in the kitchen",
      "He damages the landing gear"
    ],
    "correctAnswer": "He accidentally causes a loss of fuel",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S2E10 Flight Into Terror",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: He accidentally causes a loss of fuel",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Dougal Cockpit",
      "Fuel Emergency",
      "Airplane"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37530",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, where do eight priests get hopelessly lost while Christmas shopping?",
    "answers": [
      "A supermarket stockroom",
      "A department store lingerie section",
      "A hotel basement",
      "A shopping centre car park"
    ],
    "correctAnswer": "A department store lingerie section",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "1996 A Christmassy Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: A department store lingerie section",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Christmas Shopping",
      "Lingerie Department",
      "Priests Trapped"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37531",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what fundraising target must Ted and Dougal try to reach during the telethon?",
    "answers": [
      "One million pounds",
      "Five hundred thousand pounds",
      "Eight million pounds",
      "Twenty million pounds"
    ],
    "correctAnswer": "Eight million pounds",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "1997 Comic Relief sketch",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Eight million pounds",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Comic Relief",
      "Telethon",
      "Money Target"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37532",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what misunderstanding triggers accusations of racism against Ted?",
    "answers": [
      "A newspaper interview",
      "A dispute about food",
      "An argument at the pub",
      "An ill-timed impression and a dirty window"
    ],
    "correctAnswer": "An ill-timed impression and a dirty window",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E1 Are You Right There Father Ted",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: An ill-timed impression and a dirty window",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Racism Rumour",
      "Dirty Window",
      "Ill Timed Impression"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37533",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which famous sitcom catchphrase does Ted repeatedly shout at Richard Wilson?",
    "answers": [
      "I don't believe it!",
      "Don't panic!",
      "Lovely jubbly!",
      "Are you being served?"
    ],
    "correctAnswer": "I don't believe it!",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E4 The Mainland",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: I don't believe it!",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Richard Wilson",
      "One Foot In The Grave",
      "Ted Annoyance"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37534",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which rival island fields a team against the priests in the over-75s football match?",
    "answers": [
      "Mannion Island",
      "Rugged Island",
      "Craggy Island North",
      "Inis Mór"
    ],
    "correctAnswer": "Rugged Island",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E5 Escape From Victory",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Rugged Island",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Over 75s Football",
      "Dick Byrne",
      "Rival Island"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37535",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, what miraculous resemblance is said to have appeared on the parochial house skirting board?",
    "answers": [
      "The Virgin Mary's face",
      "Father Ted's face",
      "Bishop Brennan's face",
      "Father Jack's face"
    ],
    "correctAnswer": "Bishop Brennan's face",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E6 Kicking Bishop Brennan Up The Arse",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Bishop Brennan's face",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Skirting Board",
      "Bishop Brennan",
      "Bet Trap"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37536",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, which number-one novelty song is associated with visitor Eoin McLove?",
    "answers": [
      "My Lovely Horse",
      "Dirty Old Town",
      "The Craic Is Back",
      "My Lovely Mayo Mammy"
    ],
    "correctAnswer": "My Lovely Mayo Mammy",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E7 Night of the Nearly Dead",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: My Lovely Mayo Mammy",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Eoin McLove",
      "Novelty Hit",
      "Singer"
    ],
    "dailyEligible": true
  },
  {
    "id": "tv_37537",
    "category": "Television",
    "programme": "Father Ted",
    "question": "In Father Ted, where in the Los Angeles area is Ted offered a new parish?",
    "answers": [
      "Beverly Hills",
      "Hollywood Hills",
      "Santa Monica",
      "Pasadena"
    ],
    "correctAnswer": "Beverly Hills",
    "difficulty": "Medium",
    "tags": [
      "Television",
      "British Television",
      "British Comedy",
      "Sitcom",
      "Father Ted",
      "Programme: Father Ted",
      "S3E8 Going to America",
      "Episode storyline",
      "2026 TV quiz audit",
      "Answer: Beverly Hills",
      "Episode source: https://thetvdb.com/series/father-ted/allseasons/official",
      "Beverly Hills",
      "American Parish",
      "Ted Final Choice"
    ],
    "dailyEligible": true
  }
];
questions.push(...auditAdditions);
const auditedTotals = {"Friday Night Dinner":83,"Miranda":67,"Father Ted":70};
if (questions.length !== 220 ||
 questions[0].id !== 'tv_15787' || questions[114].id !== 'tv_15901' ||
 auditAdditions[0].id !== 'tv_37433' || auditAdditions[auditAdditions.length - 1].id !== 'tv_37537' ||
 new Set(questions.map(q=>q.id)).size !== questions.length ||
 new Set(questions.map(q=>normalise(q.programme+'|'+q.question))).size !== questions.length ||
 Object.entries(auditedTotals).some(([p,n]) => questions.filter(q=>q.programme===p).length!==n) ||
 questions.some(q=>q.answers.length!==4 ||
 new Set(q.answers.map(normalise)).size!==4 ||
 q.answers.filter(a=>a===q.correctAnswer).length!==1 ||
 !q.tags.includes('Programme: '+q.programme) || q.dailyEligible!==true) ||
 auditAdditions.some(q=>!q.question.startsWith('In '+q.programme+', ') || q.tags.length<14))
 throw Error('Pack 336 post-audit validation failed');
module.exports = questions;
