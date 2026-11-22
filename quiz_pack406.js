
// PuzzlePilot - Big Quiz - Pack 406
// 60 Minute Makeover (ITV 2004-2014; Quest Red revival 2018).
// Complete WordPad-ready CommonJS file. First ID: tv_22592.
'use strict';

const FIRST_ID = 22592;
const PROGRAMME='60 Minute Makeover';
const commonTags=['Television',PROGRAMME,'Programme: '+PROGRAMME,'ITV',
 'Quest Red','British Lifestyle Television','Home Makeover','Interior Design',
 'Original run: 2004–2014','2018 revival'];

// Question | correct answer | three distractors | difficulty | seven precise tags.
// Original timed challenge and later full-day version are kept distinct.
const rows = [
  `In which year did the British television series 60 Minute Makeover first air?|2004|1998|2009|2013|Easy|19 April 2004|premiere|first series|British daytime TV|original broadcast|programme launch|2000s`,
  `Which television channel originally showed 60 Minute Makeover?|ITV1|BBC One|Channel 4|Five|Easy|ITV1 network|original channel|2004 to 2014|daytime programming|first broadcast|television network|UK TV`,
  `Who was the original presenter of 60 Minute Makeover in 2004?|Claire Sweeney|Terri Dwyer|Catherine Gee|Peter Andre|Easy|Claire Sweeney|first presenter|2004 to 2006|host history|original format|casting|launch`,
  `Which presenter took over 60 Minute Makeover after Claire Sweeney?|Terri Dwyer|Catherine Gee|Anna Ryder Richardson|Linda Barker|Easy|Terri Dwyer|presenter succession|2007 to 2009|hosting|ITV daytime|cast|programme chronology`,
  `Who fronted the designer-led period of 60 Minute Makeover in 2010 as a well-known interior designer?|Linda Barker|Claire Sweeney|Sophie Robinson|Anna Ryder Richardson|Medium|Linda Barker|2010|designer presenter|series seven|hosting role|television career|format change`,
  `Who became the regular presenter of 60 Minute Makeover in 2011?|Catherine Gee|Terri Dwyer|Sally Gray|Anna Ryder Richardson|Easy|Catherine Gee|series eight|2011 to 2012|presenter|revised format|host succession|daytime schedule`,
  `Which pop singer became the main presenter of 60 Minute Makeover in 2013?|Peter Andre|Duncan James|Ronan Keating|Shane Richie|Easy|Peter Andre|2013 appointment|celebrity presenter|host history|rebrand|music crossover|song career`,
  `Under what name was 60 Minute Makeover broadcast after its 2013 presenter change?|Peter Andre's 60 Minute Makeover|Celebrity 60 Minute Makeover|60 Minute Makeover Live|The Great British Makeover|Medium|Peter Andres 60 Minute Makeover|2013|title change|presenter name|rebrand|series ten|programme branding`,
  `Which soap opera is original 60 Minute Makeover host Claire Sweeney particularly associated with?|Brookside|EastEnders|Emmerdale|Hollyoaks|Medium|Claire Sweeney|Brookside|Lindsey Corkhill|acting background|soap opera|presenter career|1990s`,
  `Which soap opera featured former 60 Minute Makeover host Terri Dwyer as Ruth Osborne?|Hollyoaks|Coronation Street|Doctors|Brookside|Medium|Terri Dwyer|Hollyoaks|Ruth Osborne|soap acting|presenter career|Channel 4 drama|casting`,
  `Which earlier home-improvement show helped make 60 Minute Makeover presenter Linda Barker well known?|Changing Rooms|Ground Force|DIY SOS|The House That 100k Built|Medium|Linda Barker|Changing Rooms|interior designer|BBC home show|presenter career|design television|career connection`,
  `Which hit single is associated with singer and 60 Minute Makeover presenter Peter Andre?|Mysterious Girl|Flying Without Wings|When You Say Nothing at All|Evergreen|Easy|Peter Andre|Mysterious Girl|music career|1990s pop|singer presenter|artist connection|UK singles`,
  `In which year did the original ITV run of 60 Minute Makeover finish?|2014|2008|2011|2018|Easy|December 2014|original run ending|ITV schedule|series eleven|Peter Andre period|broadcast history|2010s`,
  `On which television channel did 60 Minute Makeover return in 2018?|Quest Red|ITV2|BBC Two|Really|Medium|Quest Red|2018 revival|digital channel|new network|home programming|relaunch|broadcast history`,
  `Who presented the 2018 revival of 60 Minute Makeover?|Peter Andre|Claire Sweeney|Terri Dwyer|Catherine Gee|Easy|Peter Andre|Quest Red|2018|returning host|revival|presenter continuity|series twelve`,
  `Which interior designer spoke about the full-day makeover format of the 2018 60 Minute Makeover revival?|Anna Ryder Richardson|Julia Kendell|Alison Cork|Linda Barker|Medium|Anna Ryder Richardson|2018 interview|designer|House Beautiful|production change|full day|Quest Red`,
  `How long did the decorating team have for the actual makeover work in the 2018 revival of 60 Minute Makeover?|One working day|Exactly ten minutes|One full week|Three complete months|Medium|2018 revival|one day makeover|Anna Ryder Richardson|real work time|format change|Quest Red|filming schedule`,
  `How was the full-day makeover presented to viewers in the 2018 version of 60 Minute Makeover?|As a one-hour television programme|As a live 24-hour broadcast|As a five-part drama|As a ten-minute web clip only|Medium|2018 format|hour long programme|edited highlights|full day work|television runtime|Quest Red|production`,
  `Into how many timed working sessions was the original 60 Minute Makeover television challenge divided?|Two half-hour sessions|Three twenty-minute sessions|Four quarter-hour sessions|Six ten-minute sessions|Medium|original timed challenge|two 30 minute halves|stopwatch|midpoint break|production format|ITV era|contest clock`,
  `What happened halfway through the original timed challenge on 60 Minute Makeover?|The team stopped for a break and progress check|The homeowner returned for the reveal|A panel of judges awarded points|The designers swapped houses|Medium|midpoint break|30 minutes|designer review|tea break|original format|time pressure|team coordination`,
  `Which timekeeping object was used to emphasise the deadline on 60 Minute Makeover?|A stopwatch|An hourglass only|A chess clock|A kitchen egg timer only|Medium|stopwatch|presenter|timed challenge|format identity|countdown|original era|work sessions`,
  `What sound signalled changes in the timed work period on 60 Minute Makeover?|A whistle|A gong|A police siren|A bicycle horn|Medium|whistle|start and stop|timekeeping|team cue|original challenge|presenter signal|production style`,
  `Who generally nominated a homeowner to receive a surprise makeover in 60 Minute Makeover?|A friend or family member|A television critic|A building inspector|A rival decorator|Easy|nomination|friend or relative|surprise gift|family involvement|beneficiary|programme premise|application`,
  `Where was the homeowner usually during the transformation in 60 Minute Makeover?|Away from the house|Supervising every paintbrush stroke|Sitting beside the cameraman|Judging a contest in the garden|Easy|homeowner absent|surprise reveal|renovation period|family arrangement|secret project|programme format|return home`,
  `What happened when the homeowner returned at the end of 60 Minute Makeover?|The presenter showed them the transformed rooms|They received a cash prize instead|They had to paint another room|They selected a competing design team|Easy|homecoming|room reveal|presenter tour|reaction|before and after|surprise makeover|episode ending`,
  `What information was normally revealed about a 60 Minute Makeover renovation near the end of an episode?|The cost of the makeover|The television ratings|The camera crew's salaries|The host's home address|Medium|makeover costs|episode ending|budget|production format|home furnishings|price reveal|renovation details`,
  `Which team led the decorating work on 60 Minute Makeover?|Interior designers and tradespeople|Professional footballers|School examiners|Restaurant chefs|Easy|interior designers|decorators|tradespeople|team production|home improvements|practical labour|show premise`,
  `Which type of household work was central to 60 Minute Makeover?|Redecorating and refurnishing rooms|Rebuilding railway bridges|Installing traffic lights|Repairing fishing boats|Easy|redecorating|furniture|wall treatments|rooms|home improvement|makeover task|practical design`,
  `How many rooms were usually made over in the streamlined 2011 format of 60 Minute Makeover?|Three|One|Seven|Ten|Medium|three rooms|2011 format|Catherine Gee|series eight|production change|design scope|room count`,
  `What change did 60 Minute Makeover make to the presenting format during its seventh series?|Designers fronted and timed their own projects|Viewers voted for a winner by telephone|Every episode was hosted from a studio|The presenter was replaced by a puppet|Medium|series seven|designer led|format experiment|2009 to 2010|presenter duties|stopwatch|programme evolution`,
  `Which presenter helped restore a distinct hosting role to 60 Minute Makeover in its eighth series?|Catherine Gee|Peter Andre|Terri Dwyer|Claire Sweeney|Medium|Catherine Gee|series eight|2011 reboot|presenter role|designer separation|format return|ITV daytime`,
  `Which television production company is credited with producing 60 Minute Makeover?|Shiver Productions|The Garden|Kudos|Wall to Wall|Medium|Shiver Productions|ITV Studios|production credits|daytime factual|programme producer|company history|lifestyle TV`,
  `Which Cheshire town gave the very first episode of 60 Minute Makeover its title?|Congleton|Macclesfield|Warrington|Crewe|Medium|Congleton|first episode|April 2004|Cheshire|terraced house|opening programme|episode title`,
  `Which style was used in the first 60 Minute Makeover episode set in Congleton?|Shabby chic|Art deco cinema|Industrial steampunk|Medieval Gothic|Medium|Congleton|shabby chic|episode one|two bedroom terrace|design style|2004|first project`,
  `Which London district featured in the second episode of 60 Minute Makeover in 2004?|Docklands|Soho|Brixton|Notting Hill|Medium|Docklands|episode two|April 2004|London townhouse|early series|location|ITV listings`,
  `From which decade was the townhouse transformed in 60 Minute Makeover's early Docklands episode?|The 1980s|The 1920s|The 1950s|The 2010s|Hard|Docklands|1980s townhouse|opening series|home age|London property|design refresh|2004 episode`,
  `Which designer took on a centuries-old Lake District cottage during 60 Minute Makeover's first series?|John Amabile|Ben Hillman|Linda Barker|Leah Hughes|Medium|John Amabile|Lake District|old cottage|2004 series|designer credit|rural property|early episodes`,
  `Approximately how old was the Lake District cottage featured in an early 60 Minute Makeover episode?|300 years|30 years|60 years|900 years|Hard|Lake District cottage|300 year property|period home|2004 episode|restoration challenge|older building|first series`,
  `Which designer tackled a bachelor pad in Barnet during the first series of 60 Minute Makeover?|Julia Kendell|Anna Ryder Richardson|Sophie Robinson|Linda Barker|Medium|Julia Kendell|Barnet|bachelor pad|2004|first series|designer appearance|London home`,
  `In a first-series 60 Minute Makeover episode from Leicestershire, designer Derek Taylor was challenged to transform what kind of home?|A Grade II listed Georgian house|A seaside caravan|A converted lighthouse|A canal narrowboat|Hard|Derek Taylor|Leicestershire|listed Georgian home|six rooms|historic property|2004|design challenge`,
  `Which designer worked with Peter Andre on a Moulin Rouge-inspired home in Kingsthorpe on 60 Minute Makeover?|Julia Kendell|Anna Ryder Richardson|Alison Cork|Derek Taylor|Medium|Julia Kendell|Peter Andre|Kingsthorpe|Moulin Rouge style|drama teacher|series ten|2013`,
  `Which Northampton location featured a Moulin Rouge-inspired lounge and diner on 60 Minute Makeover?|Kingsthorpe|Daventry|Towcester|Corby|Medium|Kingsthorpe|Northampton|Moulin Rouge decor|drama teacher|Peter Andre|2013 episode|French cabaret style`,
  `Which designer joined Peter Andre for an Africa-inspired project in Eltham on 60 Minute Makeover?|Leah Hughes|Ann Hazell|Derek Taylor|Anna Ryder Richardson|Medium|Leah Hughes|Eltham|African theme|stepfather Trevor|Peter Andre|series ten|designer project`,
  `Which designer worked with Peter Andre on a dining room and kitchen in Welwyn on 60 Minute Makeover?|Ben Hillman|John Amabile|Julia Kendell|Linda Barker|Medium|Ben Hillman|Welwyn|dining room|kitchen makeover|Peter Andre|2013|designer credit`,
  `Which designer joined Peter Andre to transform a loft conversion in Blackpool on 60 Minute Makeover?|John Amabile|Ben Hillman|Leah Hughes|Ann Hazell|Medium|John Amabile|Blackpool|loft conversion|Peter Andre|series ten|designer credit|Lancashire`,
  `In the 2018 60 Minute Makeover revival, which designer helped redesign former police officer Steve Barron's home?|Ben Hillman|John Amabile|Derek Taylor|Julia Kendell|Hard|Ben Hillman|Steve Barron|former police officer|2018|Quest Red|designer|revival episode`,
  `Which unusual wall treatment did designer Ben Hillman plan for dance teacher Sophie Edwards in a 2018 60 Minute Makeover episode?|Multicoloured felt|Mirrored tiles|Black marble|Recycled cork only|Hard|Sophie Edwards|Ben Hillman|felt wall|Welwyn Garden City|dance teacher|2018|revival project`,
  `Which 2018 60 Minute Makeover participant was described as an airport worker from West London?|Sereta Thomson|Angie Franco|Joanne Clark|Jayne Gibbins|Hard|Sereta Thomson|airport worker|Northolt|West London|Anna Ryder Richardson|2018|makeover recipient`,
  `Which 2018 60 Minute Makeover participant was described as a charity fundraiser?|Angie Franco|Sophie Edwards|Joanne Clark|Steve Barron|Hard|Angie Franco|charity fundraising|Gravesend|Quest Red|2018|makeover recipient|episode story`,
  `Which designer worked on widow Joanne Clark's home in the 2018 version of 60 Minute Makeover?|John Amabile|Derek Taylor|Linda Barker|Leah Hughes|Hard|John Amabile|Joanne Clark|Clifton|widow|2018|revival|designer appearance`,
  `Which former Big Brother winner also worked on 60 Minute Makeover as a builder and DIY expert?|Craig Phillips|Brian Dowling|Anthony Hutton|Pete Bennett|Medium|Craig Phillips|Big Brother winner|builder|DIY expert|television crossover|behind the scenes|crew`,
  `For the original 60 Minute Makeover television challenge, which statement best describes work outside the timed segments?|Preparation and finishing work could take place off camera|Absolutely no preparation was permitted|The homeowners did all the decorating themselves|Every item was built from scratch during the credits|Medium|preparation|off camera finishing|two half hour periods|Craig Phillips|production reality|renovation logistics|format distinction`
];

const questions = rows.map((row, index) => {
  const parts = row.split('|').map(part => part.trim());
  if (parts.length !== 13 || parts.some(part => !part)) {
    throw new Error(`Pack 406: malformed row ${index + 1}`);
  }
  const [stem, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = parts;
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty)) {
    throw new Error(`Pack 406: invalid difficulty at row ${index + 1}`);
  }
  const question = stem.includes('60 Minute Makeover')
    ? stem
    : `In 60 Minute Makeover, ${stem[0].toLowerCase()}${stem.slice(1)}`;
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(index % 4, 0, correctAnswer);
  if (new Set(answers.map(a => a.toLowerCase())).size !== 4) {
    throw new Error(`Pack 406: repeated answer option at row ${index + 1}`);
  }
  const tags = [...new Set([...commonTags, ...specificTags])];
  if (tags.length < 12) {
    throw new Error(`Pack 406: expected at least 12 distinct tags at row ${index + 1}, got ${tags.length}`);
  }
  return {
    id: `tv_${FIRST_ID + index}`,
    category: 'Television',
    programme: PROGRAMME,
    question,
    answers,
    correctAnswer,
    difficulty,
    tags,
    dailyEligible: true
  };
});



// 60 MINUTE MAKEOVER audit: 2004–2014 ITV editions + 2018 Quest Red revival.
// Original IDs tv_22592–tv_22643 unchanged. Added IDs begin tv_41513.
// Story gaps: episode-specific renovations, recipients, design concepts and
// changes in production format. Not all historical episodes individually covered.
// A new ITV revival was reported in March 2024, but no later broadcast run
// was verified during the Nov 2026 audit. Check for confirmed future releases.
// Original 2004 series: https://tubitv.com/en-gb/series/0300004151/60-minute-makeover
// ITV Peter Andre episode listings: https://www.itv.com/watch/60-minute-makeover/1a4698
// ITV Series 11 episodes: https://www.itv.com/watch/60-minute-makeover/1a4698/1a4698a0548
// Official 2018 Discovery archive: https://www.discoveryuk.com/series/60-minute-makeover-with-peter-andre/
// 2018 commission: https://www.c21media.net/news/quest-returns-to-shiver-for-makeover/
// 2018 format interview: https://www.housebeautiful.com/uk/decorate/looks/news/a3242/anna-ryder-richardson-60-minute-makeover/
// 2024 prospective revival (not counted as a broadcast):
// https://www.tvzoneuk.com/post/60minutemakeover-itvreboot-report
const audit406Rows=[["2004 — Series 1 E3 North Finchley","Which interior designer renovated Natasha and Richard's home in North Finchley?","Stephanie Dunning","Sophie Robinson","Linda Barker","Julia Kendell","Original series casting and North Finchley","Designer"],["2004 — Series 1 E4 Warwick","What American television series inspired Richard Randall's decorating theme in Warwick?","Sex and the City","Friends","The Sopranos","Will and Grace","Warwick design brief","Makeover story"],["2004 — Series 1 E8 Chertsey","Which fictional spy provided the inspiration for Richard Randall's Chertsey bachelor pad?","James Bond","Jason Bourne","George Smiley","Jack Reacher","Chertsey flat design theme","Makeover story"],["2004 — Series 1 E9 New Mills","Which father and daughter were the recipients of the surprise makeover in New Mills?","Dave and Emma","Paul and Andy","Doug and Brenda","Tim and Tracey","New Mills family","Makeover story"],["2004 — Series 1 E10 Milton Keynes","What was the first name of the single mother whose two-bedroom home was renovated in Milton Keynes?","Kayti","Rachel","Natasha","Joanne","Milton Keynes homeowner","Makeover story"],["2004 — Series 1 E12 High Wycombe","What kind of single-storey property was the team transforming in High Wycombe?","A bungalow","A barn conversion","A houseboat","A terraced townhouse","High Wycombe home type","Makeover story"],["2004 — Series 1 E13 Birmingham","Which couple welcomed a home makeover in Birmingham before their baby's arrival?","Surinda and Bhutta","Paul and Andy","Ashley and Nadine","Barbara and Michael","Birmingham family preparing for a baby","Makeover story"],["2004 — Series 1 E14 Caterham","How many rabbits lived with the young couple helped by the team in Caterham?","Five rabbits","Two rabbits","Three rabbits","Ten rabbits","Caterham family pets","Makeover story"],["2004 — Series 1 E16 Brighton","Which interior designer led the makeover of a student house in Brighton?","Orianna Fielding-Banks","Stephanie Dunning","Anna Ryder Richardson","Linda Barker","Brighton student property","Designer"],["2004 — Series 1 E18 Salford","What atmosphere did Richard Randall create for Ashley and Nadine's terrace in Salford?","A party palace","A French farmhouse","A seaside cottage","A minimalist office","Salford entertaining space","Makeover story"],["2004 — Series 1 E19 Southport","Which interior designer renovated a dated house in Southport?","Derek Taylor","Ben Hillman","John Amabile","Sophie Robinson","Southport timewarp property","Designer"],["2004 — Series 1 E20 Knebworth","What sort of historic property featured in the Knebworth renovation?","A 400-year-old thatched cottage","A Victorian railway station","A Georgian town hall","A modern concrete apartment","Knebworth listed historic house","Makeover story"],["2013 — ITV Series 10 E8 Tollesbury","What decorative style was chosen for a former serviceman's lounge and bedroom in Tollesbury?","An oriental haven","A Nordic chalet","A Hollywood cinema","An industrial loft","Tollesbury style brief","Makeover story"],["2013 — ITV Series 10 E9 Bracknell","Which foster-carer couple received a bedroom and bathroom transformation in Bracknell?","Barbara and Michael","Doug and Brenda","Tim and Tracey","Ashley and Nadine","Bracknell foster carers","Makeover story"],["2013 — ITV Series 10 E10 Faversham","Which retired publicans were surprised with a lounge, dining room and kitchen makeover in Faversham?","Doug and Brenda","Dave and Emma","Surinda and Bhutta","Paul and Andy","Faversham retired publicans","Makeover story"],["2013 — ITV Series 10 E13 Liverpool","Which science-fiction fan had his bedroom and lounge revamped in Liverpool?","Ian Sime","David Sibley","Andy Smith","Steve Barron","Liverpool sci-fi fan","Makeover story"],["2013 — ITV Series 10 E14 Herne Bay","Which regional American decorating style did Ben Hillman introduce to a bedroom and office in Herne Bay?","New England","Tex-Mex","Art Deco Miami","California mid-century","Herne Bay design style","Makeover story"],["2013 — ITV Series 10 E15 Maidstone","Which two rooms did Linda Barker swap around in Linda Wheatley's Maidstone home?","The lounge and dining room","The bathroom and loft","The kitchen and garage","The hall and conservatory","Maidstone room layout","Makeover story"],["2013 — ITV Series 10 E16 Huntingdon","Which part of the world inspired the tropical makeover in Huntingdon?","The Caribbean","Scandinavia","The Alps","East Asia","Huntingdon tropical scheme","Makeover story"],["2013 — ITV Series 10 E20 Earls Barton","Which firefighter and 1940s enthusiast received a nostalgic makeover in Earls Barton?","David Sibley","Ian Sime","Barry Toon","Steve Barron","Earls Barton 1940s home","Makeover story"],["2014 — ITV Series 11 E12 Wandsworth","What surprising material did Ben Hillman use to replace a sofa in Wandsworth?","Wooden pallets","Glass bricks","Paving slabs","Metal fencing","Wandsworth furniture experiment","Makeover story"],["2014 — ITV Series 11 Accrington","For how many relatives did Linda Barker have to provide seating in the Accrington project?","A family of sixteen","A family of four","A family of eight","A family of thirty","Accrington family seating","Makeover story"],["2014 — ITV Series 11 Forest Hill","Which foster carer in Forest Hill received a colourful renovation designed by Linda Barker?","Catherine Bademosi","Claire Brown","Joanne Clark","Jayne Gibbins","Forest Hill foster carer","Makeover story"],["2018 — Quest Red Episode 1","Which cancer survivor who helps women in need received a Greater Manchester makeover?","Sam Morris","Caroline Hills","Kay Brown-Sarr","Nicki Price","Manchester charity supporter","Makeover story"],["2018 — Quest Red Episode 2","Approximately how many foster children had lived in Kay Brown-Sarr's house over the years?","More than 200 children","Around 20 children","Around 50 children","More than 500 children","South Wales foster-family history","Makeover story"],["2018 — Quest Red Episode 3","What was Andy Smith's role in the Armed Forces before the team helped him in Kent?","Army sergeant","Royal Navy admiral","RAF pilot","Army surgeon","Andy Smith forces and community work","Makeover story"],["2018 — Quest Red Episode 4","What practical need drove the renovation of Debbie Holloway's West London home?","Wheelchair accessibility","A professional music studio","A home bakery kitchen","Childproofing for newborn twins","Debbie Holloway accessible home","Makeover story"],["2018 — Quest Red Episode 5","Which medical condition was Val Liles living with when her bungalow was renovated?","Multiple sclerosis","Parkinson's disease","Rheumatoid arthritis","Cystic fibrosis","Val Liles East Sussex bungalow","Makeover story"],["2018 — Quest Red Episode 6","Which Staffordshire charity fundraiser was given a family retreat with his sons?","Barry Toon","Tim Sandy","Ian Sime","David Sibley","Barry Toon with his sons","Makeover story"],["2018 — Quest Red Episode 7","In which Greater Manchester town did the team surprise fundraiser Angela Wild?","Stalybridge","Stockport","Bolton","Wigan","Angela Wild living room","Makeover story"],["2018 — Quest Red Episode 8","Where did Peter Andre and Anna Ryder Richardson renovate Tim and Tracey Sandy's living-dining room?","Sittingbourne","Tunbridge Wells","Basingstoke","Dartford","Tim and Tracey Sandy cancer charity","Makeover story"],["2018 — Quest Red Episode 9","What hotel-inspired style did John Amabile create for widow Joanne Clark's bedroom?","Boutique hotel style","A budget hostel style","A cruise-ship cabin","A country pub snug","Joanne Clark bedroom design","Makeover story"],["2018 — Quest Red Episode 11","What New York-inspired feature did Ben Hillman plan for former police officer Steve Barron's garden?","A garden man cave","A rooftop greenhouse","A subway-themed tunnel","A bicycle repair garage","Steve Barron New York style garden","Makeover story"],["2018 — Quest Red Episode 13","Which interior finish did Linda Barker incorporate into expectant mother Jayne Gibbins's makeover?","Wood panelling","Mirrored tiles","Exposed concrete","Metal shutters","Jayne Gibbins cosy family interior","Makeover story"],["2018 — Quest Red Episode 15","Which Hampshire homeowner received a modernisation of her cluttered lounge and bedroom?","Caroline Hills","Sam Morris","Debbie Holloway","Angela Wild","Hampshire decluttering project","Makeover story"],["2018 — Quest Red Episode 16","Which pair of styles did John Amabile envision for Laura Flaherty's home in Leigh?","Scandi shabby chic and Oriental opulence","Victorian Gothic and Regency formal","Tuscan rustic and nautical industrial","Minimalist white and American diner","Laura Flaherty design themes","Makeover story"],["2018 — Quest Red Episode 17","Which part of Claire Brown's house was Linda Barker challenged to rethink in the Midlands?","The entire ground floor","The roof and attic","The basement only","The front garden","Claire Brown full-floor renewal","Makeover story"],["2018 — Quest Red Episode 18","How many bedrooms did John Amabile plan to renovate for Andrea and Paul Elliott in Salford?","Three bedrooms","One bedroom","Two bedrooms","Five bedrooms","Salford rugby family top-floor makeover","Makeover story"],["2018 — Quest Red Episode 19","Who received a wheelchair-friendly kitchen and updated bedroom in a Kent makeover?","Nicki Price","Val Liles","Sophie Edwards","Angie Franco","Kent accessible kitchen","Makeover story"],["2018 — Quest Red Episode 20","For roughly how long had Christine Rogers's West Sussex home gone without major updating?","More than twenty years","About two years","About five years","Over sixty years","Christine Rogers long-overdue refurbishment","Makeover story"],["2018 — Broadcast history","How many episodes were commissioned for the Peter Andre-led Quest Red revival?","Twenty","Six","Twelve","Forty","Quest Red 2018 series length","Broadcast"]];
const audit406Norm=x=>String(x).normalize('NFKC').toLowerCase('en-GB')
  .replace(/[^\p{L}\p{N}]/gu,'');
for(const [episode,stem,correctAnswer,w1,w2,w3,focus,type] of audit406Rows){
 const question='In '+PROGRAMME+', '+stem[0].toLowerCase()+stem.slice(1);
 const answers=[w1,w2,w3];answers.splice(questions.length%4,0,correctAnswer);
 if(new Set(answers.map(audit406Norm)).size!==4)throw Error('Pack 406 duplicate options for '+stem);
 const tags=['Television','British Lifestyle Television','Home Makeover',
   PROGRAMME,'Programme: '+PROGRAMME,'ITV and Quest Red','Interior Design',
   'Episode: '+episode,'Question category: '+type,
   'Individual story: '+focus,'Correct answer: '+correctAnswer,
   'Themed room makeover','Presenter and designers','Format history: 2004–2018'];
 questions.push({id:'tv_'+(41513+questions.length-52),
  category:'Television',programme:PROGRAMME,
  question,answers,correctAnswer,difficulty:'Medium',tags,dailyEligible:true});
}
const allIDs406=new Set(),allStems406=new Set();
for(const q of questions){
 const stem=audit406Norm(q.question);
 const isNew=Number(q.id.slice(3))>=41513;
 if(q.category!=='Television'||q.programme!==PROGRAMME||
 !q.tags.includes('Programme: '+PROGRAMME)||!stem.includes(audit406Norm(PROGRAMME))||
 q.answers.length!==4||new Set(q.answers.map(audit406Norm)).size!==4||
 q.answers.filter(a=>a===q.correctAnswer).length!==1||
 q.tags.length<12||q.dailyEligible!==true||
 allIDs406.has(q.id)||allStems406.has(stem)||
 (isNew&&stem.includes(audit406Norm(q.correctAnswer))))
 throw Error('Pack 406 module audit failed at '+q.id);
 allIDs406.add(q.id);allStems406.add(stem);
}
module.exports=questions;
