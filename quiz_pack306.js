
// quiz_pack306.js
// PuzzlePilot - The Bigggggg Quiz
// Television: Agony (1979-1981) and Agony Again (1995)
// Original ITV comedy, all three series, and BBC One sequel.
// Seven individually selected specialist tags per question.
// quiz_bank.js stays unchanged until the agreed end-of-session connection.
// Row: question | correct | wrong1 | wrong2 | wrong3 | difficulty | seven specialist tags

const groups = [
  {
    programme: 'Agony',
    topic: 'Original series: concept, characters and production',
    year: '1979-1981',
    facts: `Who plays agony aunt Jane Lucas in the original series Agony?|Maureen Lipman|June Whitfield|Penelope Keith|Mollie Sugden|Easy|Maureen Lipman|Jane Lucas|Lead Actress|Character Casting|Advice Columnist|British Sitcom|Original Series
What is the surname of the agony aunt at the centre of Agony?|Lucas|Cooper|Fisher|Morris|Easy|Jane Lucas|Character Surname|Agony Aunt|Series Protagonist|Original Title|1970s Television|Personal Advice
For which fictional magazine does Jane Lucas write an advice column?|Person|Woman's Own|Honey|She|Medium|Person Magazine|Problem Page|Advice Column|Jane Lucas|Fictional Publication|Magazine Journalism|Workplace
Which other medium, besides magazines, does Jane use to give advice in the original Agony?|Local radio|Television news|A podcast|National newspapers|Easy|Local Radio|Agony Aunt|Callers|Advice Show|Broadcasting|Jane Lucas|1979 Setting
Who plays Jane's husband Laurence Lucas in Agony?|Simon Williams|Richard Briers|Tom Conti|Geoffrey Palmer|Easy|Simon Williams|Laurence Lucas|Jane Husband|Marriage|Actor Casting|Main Character|Original Sitcom
Which actress plays Jane's mother Bea in Agony?|Maria Charles|Patricia Hayes|Dora Bryan|Liz Smith|Medium|Maria Charles|Bea Fisher|Jane Mother|Family Relationship|Mother Daughter|Character Casting|Supporting Actress
Which actor portrays Rob, one of Jane's close friends in Agony?|Jeremy Bulloch|Peter Denyer|Peter Blake|Robert Austin|Medium|Jeremy Bulloch|Rob Illingworth|Jane Friend|Character Casting|Gay Couple|Original Cast|Supporting Actor
Which actor plays Rob's partner Michael in the original Agony?|Peter Denyer|Jeremy Bulloch|Simon Williams|Robert Austin|Medium|Peter Denyer|Michael|Rob Partner|Gay Couple|Original Series|Character Casting|Close Friend
Which actress plays Jane's secretary Val in Agony?|Diana Weston|Jan Holden|Maria Charles|Josephine Welcome|Medium|Diana Weston|Val Dunn|Secretary|Workplace Character|Jane Colleague|Actor Casting|Original Cast
Which actress plays magazine boss Diana in Agony?|Jan Holden|Diana Weston|Maria Charles|Joan Sanderson|Medium|Jan Holden|Diana|Magazine Boss|Person Magazine|Workplace Rivalry|Character Casting|Editor
Which actor plays radio presenter Andy Evol in Agony?|Peter Blake|Peter Denyer|Bill Nighy|Simon Williams|Medium|Peter Blake|Andy Evol|Radio Presenter|Jane Colleague|Character Casting|Original Series|Media Industry
Who plays Junior Truscombe, a radio presenter appearing in later series of Agony?|Robert Austin|Jeremy Bulloch|Peter Blake|Peter Denyer|Hard|Robert Austin|Junior Truscombe|Radio Presenter|Series Two|Series Three|Workplace Rival|Character Casting
Which future film star played Vincent Fish in Agony's second series?|Bill Nighy|Hugh Grant|Michael Caine|Timothy Dalton|Medium|Bill Nighy|Vincent Fish|Second Series|Character Casting|Jane Relationship|Guest Actor|1980 Television
Which ITV company produced the original Agony?|London Weekend Television|Granada Television|Thames Television|Yorkshire Television|Medium|London Weekend Television|LWT|Production Company|1979 Comedy|ITV Network|British Television History|Original Production
Which two people created the original ITV sitcom Agony?|Len Richmond and Anna Raeburn|Carla Lane and John Sullivan|Clement and La Frenais|Marks and Gran|Hard|Len Richmond|Anna Raeburn|Series Creators|Writing Partnership|Original Concept|Comedy Writing|Production Credits
Which broadcaster first showed the original Agony in 1979?|ITV|BBC One|Channel 4|BBC Two|Easy|ITV|Original Broadcaster|1979 Premiere|Commercial Television|British Sitcom History|Network Launch|Original Series`,
  },
  {
    programme: 'Agony',
    topic: 'Original series one',
    year: '1979',
    facts: `In which year was the first series of Agony broadcast?|1979|1976|1982|1985|Easy|1979 Broadcast|Series One|Premiere Year|ITV|British Television History|Sitcom Timeline|Original Run
What is the title of the very first episode of Agony?|Help|Working Girls|Back To Reality|Hospital Romances|Medium|Help|First Episode|Series Premiere|11 March 1979|Episode Title|Original Sitcom|Jane Lucas
How many episodes were in Agony's first series?|Six|Five|Seven|Eight|Medium|Six Episodes|Series One|1979 Run|Episode Count|First Series|Programme Structure|Broadcast History
In the first episode Help, who complains that Jane spends too much time working?|Her husband and mother|Her neighbours and landlord|Her children and teacher|Her sister and cousin|Medium|Help Episode|Laurence Lucas|Bea Fisher|Jane Overworked|Family Complaints|Work Life Balance|1979 Story
In An Unmarried Couple, whose departure is Jane trying to cope with?|Laurence's|Rob's|Diana's|Val's|Easy|An Unmarried Couple|Laurence Lucas|Jane Marriage|Separation|Series One|1979 Plot|Family Problems
Which kind of therapist do Jane and Laurence visit in Conjugal Wrongs?|A sex therapist|A speech therapist|A physiotherapist|A career counsellor|Medium|Conjugal Wrongs|Marriage Troubles|Sex Therapist|Jane And Laurence|Relationship Counselling|1979 Episode|Series One
In Wedlock, Deadlock, what kind of marriage does Laurence propose?|An open marriage|An arranged marriage|A trial separation abroad|A secret civil wedding|Medium|Wedlock Deadlock|Laurence Lucas|Open Marriage|New Relationship|Marital Proposal|Series One|1979 Story
Which two friends split up in the episode Forever And Never?|Rob and Michael|Andy and Val|Jane and Diana|Laurence and Indira|Medium|Forever And Never|Rob Illingworth|Michael|Relationship Split|Jane Counsellor|1979 Plot|Series One
In the first-series finale Too Much Agony, Too Little Ecstasy, what does Jane decide to do on her birthday?|Leave Laurence|Quit her magazine job|Move to New York|Marry Andy|Medium|Too Much Agony Too Little Ecstasy|Jane Birthday|Laurence Lucas|Marriage Decision|Series One Finale|1979 Plot|Personal Crisis`,
  },
  {
    programme: 'Agony',
    topic: 'Original series two',
    year: '1980',
    facts: `In which year did Agony's second series begin?|1980|1979|1981|1983|Easy|1980 Broadcast|Series Two|ITV|Second Series|Original Run|Broadcast Timeline|British Sitcom
Which Spanish resort has Jane returned from in Back To Reality?|Benidorm|Marbella|Torremolinos|Alicante|Medium|Back To Reality|Benidorm|Spanish Holiday|Jane Lucas|Series Two Premiere|Returning To London|1980 Plot
In Back To Reality, what does Diana arrange that gives Jane an unpleasant surprise?|An internal promotional video|A farewell party|A charity raffle|A television award|Medium|Back To Reality|Diana|Promotional Video|Person Magazine|Workplace Embarrassment|Series Two|1980 Story
In Working Girls, which colleague struggles to manage on her current salary?|Val|Diana|Bea|Indira|Medium|Working Girls|Val Dunn|Money Troubles|Secretary|Workplace Pressure|Series Two|1980 Plot
Which woman is romantically involved with Laurence during Agony's second series?|Indira Patel|Diana|Bea Fisher|Val Dunn|Medium|Indira Patel|Laurence Lucas|Romantic Relationship|Josephine Welcome|Series Two|Separation Story|1980 Character
In Coming Out... And Going In Again?, which profession is put at risk when Michael's real name is revealed on air?|Teaching|Medicine|Law|Architecture|Medium|Coming Out And Going In Again|Michael|Teaching Career|Radio Disclosure|Junior Truscombe|Series Two|1980 Story
In Television Can Damage Your Health, which medium does Jane decide to move into?|Television|Cinema|Print advertising|Recorded music|Easy|Television Can Damage Your Health|Jane Lucas|Television Job|Leaving Radio|Career Move|Series Two|1980 Plot
In Problem Parents, whose parents visit while he has not yet come out to them?|Rob's|Laurence's|Andy's|Vincent's|Medium|Problem Parents|Rob Illingworth|Family Visit|Coming Out|Michael|Series Two|1980 Plot
In Second Time Around, what new name does former radio presenter Andy Evol use?|Andrew Love|Anthony Lewis|Adam Lowe|Alan Evans|Hard|Second Time Around|Andy Evol|Andrew Love|Religious Conversion|Born Again Preacher|Identity Change|1980 Episode
In A Woman Alone, what alarming item has Jane received?|A threatening letter|A court summons|An eviction notice|A ransom demand|Medium|A Woman Alone|Jane Lucas|Threatening Letter|Anxiety|Series Two Finale|1980 Plot|Personal Crisis`,
  },
  {
    programme: 'Agony',
    topic: 'Original series three and finale',
    year: '1981',
    facts: `What is Jane expecting at the start of Agony's third series?|A baby|A promotion|A new radio station|A foreign posting|Easy|Series Three|Jane Pregnancy|Expectant Mother|Family Change|1981 Plot|From Here To Maternity|Parenthood
In From Here To Maternity, what does Jane announce she intends to do?|Leave work to become a full-time mother|Move to France to write a novel|Train as a doctor|Open a restaurant with Laurence|Medium|From Here To Maternity|Jane Lucas|Full Time Mother|Resigning From Work|Domestic Life|Series Three Premiere|1981 Story
In Arrivals And Departures, which career does Andy plan to pursue after leaving radio?|Pop music|Football management|Politics|Stage lighting|Medium|Arrivals And Departures|Andy Evol|Pop Career|Leaving Radio|Career Change|1981 Episode|Series Three
What name is given to Jane's baby son in Agony's third series?|Michael|Laurence|Robert|Andrew|Easy|Baby Michael|Jane Son|New Baby|Hospital Romances|Family Addition|1981 Series|Parenthood
In Hospital Romances, whom does Jane try to advise while recovering after childbirth?|Hospital staff and fellow patients|A group of journalists|Visiting politicians|Members of a jury|Medium|Hospital Romances|Jane Lucas|Hospital Ward|Advice Giving|New Mother|Patients And Staff|1981 Plot
In Communications Breakdown, who suspects Andy of having an affair?|Val|Bea|Indira|Diana|Medium|Communications Breakdown|Val Dunn|Andy Evol|Suspected Affair|Relationship Conflict|Series Three|1981 Plot
In Holy Wars, which Christian ceremony do Laurence's parents demand for the baby?|A christening|A confirmation|A church wedding|A first communion|Medium|Holy Wars|Laurence Parents|Christening|Religious Disagreement|Baby Michael|Family Tensions|1981 Story
In the episode Holy Wars, what frightening event happens to baby Michael?|He is snatched|He is lost on a train|He becomes seriously ill abroad|He is left at a nursery|Medium|Holy Wars|Baby Michael|Abduction|Jane Lucas|Laurence Lucas|Series Three|1981 Plot
In Lucas v Lucas, whom does Laurence hire during the search for the baby?|A private investigator|A television journalist|A social worker|A solicitor|Medium|Lucas V Lucas|Laurence Lucas|Private Investigator|Missing Baby|Police Enquiry|Family Crisis|1981 Episode
Which country does Rob plan to move to in the final episode Rings Off Their Fingers?|Australia|Canada|New Zealand|South Africa|Medium|Rings Off Their Fingers|Rob Illingworth|Australia|Emigration|Series Finale|1981 Plot|Farewell`,
  },
  {
    programme: 'Agony Again',
    topic: 'The sequel: new faces and the TV show',
    year: '1995',
    facts: `What was the title of the 1995 sequel to Agony?|Agony Again|Agony Returns|More Agony|Dear Jane|Easy|Agony Again|Sequel Title|1995 Revival|British Sitcom|Jane Lucas Returns|Follow Up Series|Television History
Which actress returned as Jane Lucas in Agony Again?|Maureen Lipman|Maria Charles|Prunella Scales|Samantha Bond|Easy|Maureen Lipman|Jane Lucas|Returning Star|Sequel Casting|BBC Sitcom|1995 Television|Leading Actress
On which channel did Agony Again first air?|BBC One|ITV|Channel 4|BBC Two|Easy|BBC One|Revival Broadcaster|1995 Premiere|Network Change|British Broadcasting|Television Sequel|BBC Sitcom
How many episodes of Agony Again were made?|Seven|Six|Eight|Ten|Medium|Seven Episodes|One Series|1995 Run|Episode Count|Sitcom Revival|Broadcast History|Short Series
What is the name of Jane's television chat show in Agony Again?|Lucas Live|Dear Jane|The Jane Lucas Hour|Your Problems Solved|Easy|Lucas Live|Daytime Talk Show|Jane Lucas|Fictional Programme|Television Presenter|Career Change|1995 Setting
Who plays Jane's television producer Debra in Agony Again?|Doon Mackichan|Jane Horrocks|Julia Sawalha|Arabella Weir|Medium|Doon Mackichan|Debra|TV Producer|Lucas Live|Character Casting|Workplace Pressure|1995 Cast
Which actor plays Jane's love interest Daniel in Agony Again?|David Harewood|Niall Buggy|Lenny Henry|Simon Williams|Medium|David Harewood|Daniel|Love Interest|Jane Romance|Character Casting|1995 Series|Supporting Actor
What is Daniel's profession in Agony Again?|Social worker|Police officer|Magazine editor|University lecturer|Medium|Daniel|Social Worker|David Harewood|Jane Relationship|Professional Role|1995 Character|Romance
Which actor plays Richard, the homeless man Jane takes in during Agony Again?|Niall Buggy|David Harewood|Bill Nighy|Peter Blake|Medium|Niall Buggy|Richard|Homeless Guest|Jane Household|Character Casting|1995 Revival|Supporting Actor
Which actress reprises the role of Jane's mother Bea in Agony Again?|Maria Charles|Maureen Lipman|Doon Mackichan|Valerie Edmond|Medium|Maria Charles|Bea|Returning Character|Jane Mother|Mother Daughter|Original Cast|1995 Sequel
How old is Jane's son Michael when he returns from holiday in Agony Again?|Eighteen|Sixteen|Twenty-one|Twenty-five|Medium|Michael|Jane Son|Eighteen Years Old|1995 Storyline|Family Relationships|Love Will Find A Way|Adult Child
Which actor plays Jane's son Michael in Agony Again?|Sacha Grunpeter|Peter Denyer|Robert Austin|Jeremy Bulloch|Hard|Sacha Grunpeter|Michael|Jane Son|Character Casting|1995 Revival|Second Generation|New Cast
Which actress plays Catherine in Agony Again?|Valerie Edmond|Doon Mackichan|Maria Charles|Jan Holden|Hard|Valerie Edmond|Catherine|Supporting Actress|Character Casting|1995 Television|BBC Comedy|Revival Cast`,
  },
  {
    programme: 'Agony Again',
    topic: 'The sequel: seven episodes',
    year: '1995',
    facts: `What is the title of the opening episode of Agony Again?|Heartbreak Hotel|Soap Dish|Showtime|Breaking Point|Medium|Heartbreak Hotel|First Episode|31 August 1995|Series Premiere|Episode Title|BBC One|Sequel Opening
In Heartbreak Hotel, whom does Jane invite into her home?|A homeless man|A celebrity chef|A retired actor|A visiting journalist|Easy|Heartbreak Hotel|Richard|Homeless Man|Jane Household|Hospitality|1995 Plot|Opening Episode
In Love Will Find A Way, who returns from a holiday with important news for Jane?|Her son Michael|Her ex-husband Laurence|Her mother Bea|Her producer Debra|Medium|Love Will Find A Way|Michael|Holiday Return|Jane Son|Family News|Episode Two|1995 Plot
In Dazed And Confused, what kind of guest is Jane pressured to feature on her TV show?|A hypnotist|A fortune teller|A ventriloquist|A magician|Medium|Dazed And Confused|Hypnotist|Lucas Live|TV Guest|Producer Pressure|1995 Episode|On Air Problems
In Soap Dish, Jane's romance with whom provokes racial prejudice?|Daniel|Richard|Laurence|Michael|Medium|Soap Dish|Daniel|Jane Relationship|Racial Prejudice|Social Tensions|1995 Episode|Romantic Storyline
In Breaking Point, what does Debra arrange that overwhelms Jane?|A rival as co-host|A week of overseas filming|A live wedding|A political debate|Medium|Breaking Point|Debra|Lucas Live|Rival Co Host|On Air Competition|Jane Stress|1995 Story
What milestone is Jane planning in the final Agony Again episode Showtime?|The 200th Lucas Live programme|Her tenth wedding anniversary|The 100th magazine edition|Her fiftieth birthday|Medium|Showtime|200th Episode|Lucas Live|Television Milestone|Jane Lucas|Series Finale|12 October 1995`,
  },
];

const FIRST_ID = 13268;
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
    if (!['Easy', 'Medium', 'Hard'].includes(difficulty) ||
        specificTags.length !== 7 || specificTags.some(tag => !tag)) {
      throw new Error(`Invalid difficulty or specialist tags at ${id}`);
    }

    const answers = [...wrongAnswers];
    answers.splice(index % 4, 0, correctAnswer);
    const tags = [...new Map([
      'British Television', 'Television', group.programme,
      'Agony', 'British Sitcom', 'Comedy', 'Jane Lucas',
      group.year, group.topic, correctAnswer, ...specificTags,
    ].map(tag => [tag.toLowerCase(), tag])).values()];
    const item = {
      id, category: 'Television', question, answers,
      correctAnswer, difficulty, tags, dailyEligible: true,
    };
    index++;
    return item;
  })
);

const EXPECTED_COUNT = 65;
if (questions.length !== EXPECTED_COUNT) {
  throw new Error(`Expected ${EXPECTED_COUNT} questions; got ${questions.length}`);
}
if (questions[0].id !== 'tv_13268' || questions[questions.length - 1].id !== 'tv_13332') {
  throw new Error('Unexpected question ID range');
}
if (new Set(questions.map(q => q.id)).size !== questions.length ||
    new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length) {
  throw new Error('Duplicate question IDs or wording');
}
if (questions.some(q => q.category !== 'Television' || q.answers.length !== 4 ||
    !q.answers.includes(q.correctAnswer) || q.tags.length < 13 ||
    q.tags.some(tag => !tag) || q.dailyEligible !== true)) {
  throw new Error('Incomplete exported question metadata');
}
module.exports = questions;
