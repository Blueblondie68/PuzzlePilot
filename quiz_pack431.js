// PuzzlePilot - The Bigggggg Quiz - Pack 431
// All Saints (Australia): Season 12 (2009), 37 episodes - final season.
// Follows Pack 430. First ID: tv_25245.
// Complete WordPad-ready CommonJS. Final 2009 season; the whole programme has ended.
// Each row: question | correct | three distractors | difficulty | seven individual tags.
'use strict';

const FIRST_ID = 25245;
const programme = 'All Saints';
const commonTags = [
  'Television', 'Australian Television', 'Australian Medical Drama',
  'All Saints', 'Programme: All Saints', 'Seven Network',
  'All Saints Western General Hospital', 'Medical Response Unit', 'Season 12', '2009'
];

const facts = `How many episodes were broadcast in the twelfth and final season of All Saints?|37|35|40|41|Medium|Final Season|37 Episodes|Broadcast Count|Series Conclusion|2009 Television|Season Twelve|Australian Drama
Which episode opened the final season of All Saints?|Out of the Ashes|Day One|Dreams and Nightmares|Facing the Music|Easy|Out Of The Ashes|Episode 1|Season Premiere|2009 Opening|Episode Title|Broadcast Order|Final Season
What was the title of the last-ever episode of All Saints?|Yesterday, Today and Tomorrow|Reality Check|The Two of Us|Damned If You Do|Easy|Yesterday Today And Tomorrow|Episode 37|Series Finale|2009 Ending|Episode Title|Von Ryan|Final Broadcast
How many episodes of All Saints were made in total?|493|475|500|456|Medium|493 Episodes|Series Total|1998 To 2009|Television History|Final Episode|Seven Network|Production Count
What did the letters MRU stand for in the programme's final-season format?|Medical Response Unit|Major Resuscitation Unit|Mobile Radiology Unit|Medical Rehabilitation Unit|Easy|Medical Response Unit|MRU|Emergency Rescue|2009 Revamp|New Format|Helicopter Team|Expanded Setting
Which senior surgeon led the Medical Response Unit in 2009?|Mike Vlasek|Frank Campion|Adam Rossi|Bart West|Easy|Mike Vlasek|Medical Response Unit|Unit Leader|Emergency Rescue|John Waters|2009 Story|Season Revamp
Which actress portrayed MRU paramedic Jo Mathieson?|Mirrah Foulkes|Ella Scott Lynch|Alix Bidstrup|Virginia Gay|Medium|Mirrah Foulkes|Jo Mathieson|Actress Identification|New Paramedic|Medical Response Unit|2009 Cast|Helicopter Crew
Which actress played the recurring character Katerina Ajanovic?|Anna Volska|Celeste Barber|Sibylla Budd|Jolene Anderson|Hard|Anna Volska|Katerina Ajanovic|Actress Identification|Frank Campion|Recurring Cast|2009 Story|Character Casting
Who portrayed Emergency colleague Bree Matthews in the final season?|Celeste Barber|Alix Bidstrup|Judith McGrath|Natalie Saleeba|Hard|Celeste Barber|Bree Matthews|Actress Identification|Emergency Nurse|Recurring Cast|2009 Episodes|Staff Casting
Which actor played Elliott Parker in the final season?|Jonathan Wood|Grant Bowler|Andrew Supanz|Kip Gamblin|Hard|Jonathan Wood|Elliott Parker|Actor Identification|Final Episodes|Recurring Cast|Steve Taylor|2009 Casting
What kind of accident left four people stranded without medical assistance in Out of the Ashes?|A boating accident|A light-plane crash|A bushfire|A train derailment|Easy|Out Of The Ashes|Episode 1|Boating Accident|Four Casualties|Remote River|MRU Rescue|Season Opening
How did Mike and Steve reach the remote casualties in Out of the Ashes?|By helicopter|By ferry|By train|By motorcycle|Medium|Out Of The Ashes|Episode 1|Mike Vlasek|Steve Taylor|Helicopter Transport|River Rescue|Remote Medical Care
What kind of worker had been brutally assaulted in Dreams and Nightmares?|A taxi driver|A police officer|A schoolteacher|A hospital cleaner|Medium|Dreams And Nightmares|Episode 2|Assaulted Cabbie|Steve Taylor|Emergency Patient|Attacker|Medical Mystery
What unusual patient arrived in Emergency instead of going to her church in Dreams and Nightmares?|A bride on her wedding day|A choir conductor|A Sunday-school teacher|A flower arranger|Medium|Dreams And Nightmares|Episode 2|Bride Patient|Wedding Day|Bart West|Amy Fielding|Relationship Strain
Which two colleagues had to work together over the injured bride in Dreams and Nightmares?|Bart and Amy|Frank and Von|Mike and Jo|Adam and Claire|Medium|Dreams And Nightmares|Episode 2|Bart West|Amy Fielding|Bride Patient|Emergency Colleagues|Personal Disagreement
What rescue marked the MRU's first official day in Day One?|Two paragliders on a cliff face|A flooded school bus|A capsized fishing boat|A miner trapped underground|Easy|Day One|Episode 3|First MRU Shift|Two Paragliders|Cliff Rescue|National Park|Vertical Rescue
Where were the injured paragliders stranded in Day One?|In a national park|At a racecourse|On a city rooftop|In a quarry tunnel|Medium|Day One|Episode 3|National Park|Paragliders|Remote Cliff|Medical Response Unit|First Callout
What unusual object trapped a man's arm in Day One?|An old mattress base|A folding ladder|A hospital bed rail|A metal turnstile|Hard|Day One|Episode 3|Bart West|Amy Fielding|Mattress Base|Trapped Arm|Unusual Injury
Whose family property brought Steve face to face with his past in Sins of the Past?|Gabrielle Jaeger's|Charlotte Beaumont's|Von Ryan's|Jo Mathieson's|Medium|Sins Of The Past|Episode 4|Gabrielle Jaeger|Steve Taylor|Family Property|Past Trauma|Accident Response
Which two members of Gabrielle's family were involved in the Sins of the Past accident?|Her father and brother|Her mother and sister|Her aunt and cousin|Her husband and son|Hard|Sins Of The Past|Episode 4|Gabrielle Father|Ben Jaeger|Family Road Accident|Steve Taylor|Family Crisis
What type of accident began the MRU crisis in Evil Is As Evil Does?|A cave-in|A bridge collapse|A ferry fire|A train collision|Easy|Evil Is As Evil Does|Episode 5|Cave In|MRU Callout|Underground Rescue|Emergency Medicine|Trapped Casualties
Who was discovered still trapped after a rescued man spoke up in Evil Is As Evil Does?|A child|A police officer|An elderly miner|A paramedic|Medium|Evil Is As Evil Does|Episode 5|Trapped Child|Cave Rescue|Rescued Man|New Revelation|Time Critical
What sort of patient caused Bart and Amy to clash in Evil Is As Evil Does?|A manic patient refusing treatment|An unconscious athlete|A child with a broken wrist|An elderly patient awaiting discharge|Medium|Evil Is As Evil Does|Episode 5|Bart West|Amy Fielding|Manic Patient|Treatment Refusal|Mental Health
Which musical instrument was played by Frank's admired performer Annalise Lang in Facing the Music?|Cello|Violin|Piano|Clarinet|Hard|Facing The Music|Episode 6|Annalise Lang|Cellist|Frank Campion|Music Concert|Guest Patient
What medical emergency interrupted Annalise Lang's concert in Facing the Music?|A seizure|A heart attack|A fall from the stage|An asthma attack|Medium|Facing The Music|Episode 6|Annalise Lang|Seizure|Frank Campion|Concert Interrupted|Medical Emergency
Whose controversial decision put the MRU's unity under pressure in Facing the Music?|Mike Vlasek's|Jo Mathieson's|Steve Taylor's|Frank Campion's|Medium|Facing The Music|Episode 6|Mike Vlasek|Controversial Call|MRU Teamwork|Rescue Decision|Professional Conflict
Which Emergency nurse became frightened when her past resurfaced in Awake in Fright?|Claire Anderson|Amy Fielding|Gabrielle Jaeger|Von Ryan|Easy|Awake In Fright|Episode 7|Claire Anderson|Threatening Past|Personal Safety|Emergency Nurse|Ian
What type of structure collapsed during the MRU rescue in Awake in Fright?|Scaffolding|A railway bridge|A grain silo|A factory chimney|Hard|Awake In Fright|Episode 7|Scaffolding Collapse|MRU Rescue|Pre Existing Condition|Trapped Man|Rescue Complication
Which doctor helped a critically ill woman face her guilt in Awake in Fright?|Adam Rossi|Bart West|Frank Campion|Mike Vlasek|Medium|Awake In Fright|Episode 7|Adam Rossi|Guilty Patient|Personal Revelation|Critical Illness|Clinical Support
What did Steve enter against MRU protocol in Behind Closed Doors?|A house where parents were being held hostage|A burning warehouse|A radioactive laboratory|A collapsing mine|Medium|Behind Closed Doors|Episode 8|Steve Taylor|Domestic Siege|Hostage Parents|MRU Protocol|Dangerous Entry
Who collapsed after returning to confront Claire in Behind Closed Doors?|Ian|Adam|Elliott|Ben|Medium|Behind Closed Doors|Episode 8|Ian|Claire Anderson|Former Boyfriend|Collapse|Hospital Patient
Whose sensitivity to a distressed young woman changed Amy's opinion of him in Behind Closed Doors?|Bart West's|Frank Campion's|Steve Taylor's|Mike Vlasek's|Medium|Behind Closed Doors|Episode 8|Bart West|Amy Fielding|Patient Counselling|Changing Relationship|Personal Bond
Which drug was associated with the dangerous rage in Emergency in Danger Zone?|Methamphetamine or ice|Heroin|Cannabis|Alcohol|Easy|Danger Zone|Episode 9|Ice Rage|Methamphetamine|Psychotic Patient|Frank Campion|Emergency Threat
At what type of business did an explosion challenge the MRU in Danger Zone?|A winery|A plastics factory|A bakery|A petrol station|Medium|Danger Zone|Episode 9|Winery Explosion|Jo Mathieson|MRU Teamwork|Mass Casualties|Rescue Scene
Who came under Frank's scrutiny after Bart's rejection of Amy in Danger Zone?|Bart West|Mike Vlasek|Steve Taylor|Elliott Parker|Medium|Danger Zone|Episode 9|Bart West|Amy Fielding|Frank Campion|Relationship Conflict|Staff Discipline
What machine crushed a man during the rescue in Pushed Too Far?|A car compactor|A paper baler|A grain mill|A factory mincer|Easy|Pushed Too Far|Episode 10|Car Compactor|Crush Injury|Mike Vlasek|Steve Taylor|Jo Mathieson
Which former boyfriend was a continuing threat to Claire in Pushed Too Far?|Ian|Elliott|Declan|Ben|Medium|Pushed Too Far|Episode 10|Claire Anderson|Ian|Former Boyfriend|Threats|Personal Safety
Which colleague's absence left Mike and Jo to operate the MRU alone in Handle With Care?|Steve Taylor's|Frank Campion's|Adam Rossi's|Bart West's|Medium|Handle With Care|Episode 11|Steve Taylor|Sick Leave|Mike Vlasek|Jo Mathieson|Two Person Crew
Which three staff worked together to save a young man with brain damage in Handle With Care?|Frank, Bart and Amy|Mike, Jo and Adam|Charlotte, Von and Steve|Gabrielle, Claire and Jo|Medium|Handle With Care|Episode 11|Frank Campion|Bart West|Amy Fielding|Brain Injured Patient|Family Decision
Who helped Steve care for Claire after her assault in Handle With Care?|Gabrielle Jaeger|Jo Mathieson|Von Ryan|Amy Fielding|Hard|Handle With Care|Episode 11|Gabrielle Jaeger|Steve Taylor|Claire Anderson|Assault Aftermath|Colleague Support
What did a female prisoner deliberately swallow in The Devil Within?|A toothbrush|A metal spoon|A small battery|A razor blade|Easy|The Devil Within|Episode 12|Female Prisoner|Swallowed Toothbrush|Deliberate Injury|Jail Visit|Emergency Treatment
Violence at which sport's teenage match reached Emergency in The Devil Within?|Football or soccer|Cricket|Tennis|Basketball|Medium|The Devil Within|Episode 12|Teenage Football|Match Violence|Emergency Patients|Sporting Conflict|2009 Episode
Whose anger over Claire's assault caused tension with patients in The Devil Within?|Steve Taylor's|Bart West's|Adam Rossi's|Frank Campion's|Medium|The Devil Within|Episode 12|Steve Taylor|Claire Anderson|Anger|Workplace Tension|Assault Aftermath
Which doctor's patient had a mysterious infection after extensive travel in Give and Take?|Bart West's|Frank Campion's|Mike Vlasek's|Adam Rossi's|Medium|Give And Take|Episode 13|Bart West|Well Travelled Patient|Unusual Infection|Diagnostic Challenge|Emergency Medicine
What symptom brought a young girl into Emergency before tragedy struck in Give and Take?|Breathing difficulties|Persistent hiccups|Vision loss|A broken arm|Medium|Give And Take|Episode 13|Young Girl|Respiratory Difficulty|Tragedy|Paediatric Patient|Emergency Admission
What was the setting of the rescue where Steve connected with a trapped woman in Give and Take?|A motor vehicle|A grain silo|A train carriage|A fishing boat|Medium|Give And Take|Episode 13|Steve Taylor|Trapped Woman|Car Rescue|Claire Anderson|Patient Connection
What major accident hit the MRU in When the Bough Breaks?|A bus crash|A ferry sinking|A mine collapse|A plane crash|Easy|When The Bough Breaks|Episode 14|Bus Crash|Medical Response Unit|Mass Casualties|Emergency Rescue|Trauma
Which nurse found herself caught between Adam and his mother in When the Bough Breaks?|Von Ryan|Amy Fielding|Gabrielle Jaeger|Claire Anderson|Medium|When The Bough Breaks|Episode 14|Von Ryan|Adam Rossi|Mother And Son|Family Conflict|Mediation
Which doctor's past affected his treatment of a mentally ill patient in When the Bough Breaks?|Adam Rossi's|Bart West's|Mike Vlasek's|Steve Taylor's|Medium|When The Bough Breaks|Episode 14|Adam Rossi|Psychiatric Patient|Personal History|Clinical Judgement|2009 Story
What type of storage facility was the scene of Jo's dangerous rescue in Seeing the Light?|A grain silo|A water tower|A coal bunker|A chemical tank|Easy|Seeing The Light|Episode 15|Grain Silo|Jo Mathieson|Life Threatening Rescue|MRU|Fear
What suspected condition proved misleading in a young sportswoman in Seeing the Light?|An eating disorder|A broken ankle|Diabetes|A concussion|Medium|Seeing The Light|Episode 15|Young Sportswoman|Eating Disorder Suspicion|Hidden Illness|Unexpected Diagnosis|Emergency Patient
Which former boyfriend returned and threatened the MRU in We All Fall Down?|Ian|Declan|Elliott|Ben|Easy|We All Fall Down|Episode 16|Ian|Claire Anderson|Steve Taylor|Threatening Return|MRU Danger
Which doctor's past acquaintance appeared as a patient to Amy's dismay in We All Fall Down?|Bart West's|Frank Campion's|Adam Rossi's|Mike Vlasek's|Medium|We All Fall Down|Episode 16|Bart West|Amy Fielding|Past Acquaintance|Hospital Patient|Relationship Tension
What change was Frank contemplating as his enthusiasm for the ED faded in We All Fall Down?|A different career direction|Becoming a paramedic|Retiring to become a musician|Moving to a hospital overseas|Medium|We All Fall Down|Episode 16|Frank Campion|Career Doubts|Burnout|Emergency Director|Professional Future
What dangerous electrical hazard complicated an MRU rescue in Bodies in Motion?|High-voltage cables|A faulty defibrillator|A broken generator|A lightning strike|Medium|Bodies In Motion|Episode 17|High Voltage Cables|Mike Vlasek|Electrical Hazard|Trapped Man|MRU Rescue
Which two women treated a patient with extreme environmental allergies in Bodies in Motion?|Charlotte and Von|Amy and Jo|Gabrielle and Claire|Katerina and Bree|Hard|Bodies In Motion|Episode 17|Charlotte Beaumont|Von Ryan|Environmental Allergies|Unusual Patient|Emergency Care
What problem did Bart's patient have that challenged Amy in Bodies in Motion?|A rare infection and a broken heart|A severe sports injury|A snakebite and paralysis|An inherited blood disorder|Medium|Bodies In Motion|Episode 17|Amy Fielding|Bart West|Rare Infection|Heartbreak|Patient Advice
What kind of work was the patient with a puzzling deterioration doing in On Second Thoughts...?|Home renovation|Commercial fishing|Mining|Winemaking|Medium|On Second Thoughts|Episode 18|Bart West|Home Renovator|Unexplained Deterioration|Diagnostic Puzzle|Emergency Patient
What was a woman protecting when she risked her life in On Second Thoughts...?|A tree|An animal shelter|A painting|A family photograph|Medium|On Second Thoughts|Episode 18|Amy Fielding|Charlotte Beaumont|Tree Protector|Environmental Protest|Injury
Which senior doctor launched an intern programme in Starting Over?|Frank Campion|Mike Vlasek|Adam Rossi|Bart West|Easy|Starting Over|Episode 19|Frank Campion|Intern Programme|Training Scheme|New Recruit|Emergency Leadership
Whose mother returned hoping to repair their relationship in Starting Over?|Adam Rossi's|Bart West's|Steve Taylor's|Frank Campion's|Hard|Starting Over|Episode 19|Adam Rossi|Debra Rossi|Mother Returns|Family Reconciliation|Personal History
What sort of outing ended in danger for a father and daughter in Starting Over?|A weekend away|A hospital tour|A holiday cruise|A football final|Medium|Starting Over|Episode 19|Father And Daughter|Weekend Trip|Tragic Accident|Emergency Response|Family Patient
What recreational activity left a patient at risk of paralysis in Curve Balls?|Surfing|Horse riding|Skydiving|Motor racing|Medium|Curve Balls|Episode 20|New Intern|Surfer|Paralysis Risk|Emergency Treatment|Hidden Skills
Whose professional judgement did a new intern impress while helping the injured surfer in Curve Balls?|Frank Campion's|Mike Vlasek's|Von Ryan's|Adam Rossi's|Medium|Curve Balls|Episode 20|Frank Campion|New Intern|Surfer Rescue|Medical Skill|Training Programme
Which nursing manager urged Steve to make a difficult decision in Curve Balls?|Gabrielle Jaeger|Claire Anderson|Amy Fielding|Von Ryan|Medium|Curve Balls|Episode 20|Gabrielle Jaeger|Steve Taylor|Alcohol Affected Patient|Difficult Decision|Relationship Stakes
What kind of community was a pregnant patient part of in Test of Faith?|A religious cult|A travelling circus|A football club|A university choir|Medium|Test Of Faith|Episode 21|Pregnant Cult Member|Religious Community|Medical Emergency|Rare Allergy|Maternal Health
What endangered both the mother and unborn child in Test of Faith?|A rare allergic reaction|A car accident|A fall downstairs|A snakebite|Medium|Test Of Faith|Episode 21|Pregnant Patient|Rare Allergic Reaction|Unborn Baby|Emergency Treatment|Maternal Crisis
Which pair reached a turning point in their relationship in Test of Faith?|Steve and Claire|Bart and Gabrielle|Frank and Jo|Mike and Amy|Medium|Test Of Faith|Episode 21|Steve Taylor|Claire Anderson|Relationship Ending|Different Paths|Workplace Romance
Which doctor found himself in mortal danger when violence spilled into Emergency in Blood is Thicker?|Adam Rossi|Frank Campion|Bart West|Mike Vlasek|Medium|Blood Is Thicker|Episode 22|Adam Rossi|Emergency Violence|Personal Danger|Hospital Attack|2009 Story
Who inadvertently discovered Katerina's disturbing secret in Blood is Thicker?|Frank Campion|Steve Taylor|Bart West|Von Ryan|Medium|Blood Is Thicker|Episode 22|Frank Campion|Katerina Ajanovic|Hidden Secret|Personal Relationship|Moral Dilemma
Which nurse reconsidered her bond with Adam after helping a bereaved mother in Blood is Thicker?|Von Ryan|Gabrielle Jaeger|Claire Anderson|Amy Fielding|Medium|Blood Is Thicker|Episode 22|Von Ryan|Adam Rossi|Grieving Mother|Relationship Reassessment|Patient Care
Which stunt performer attracted Jo's romantic interest in Out of Control?|Declan|Ian|Elliott|Simon|Medium|Out Of Control|Episode 23|Jo Mathieson|Declan|Stuntman|Romantic Interest|Multiple Injuries
Who missed signs of critical injury in a patient in Out of Control?|Steve Taylor|Bart West|Mike Vlasek|Adam Rossi|Medium|Out Of Control|Episode 23|Steve Taylor|Missed Injuries|Clinical Oversight|Staff Criticism|Emergency Assessment
What profession was held by the man whose actions led the MRU to the same address twice in In Trust?|Butcher|Mechanic|Pharmacist|Farmer|Medium|In Trust|Episode 24|Local Butcher|Abuse Of Power|Repeated MRU Callout|Victims|2009 Rescue
Which pair helped a pregnant schoolgirl in In Trust?|Adam and Von|Frank and Jo|Bart and Amy|Steve and Gabrielle|Medium|In Trust|Episode 24|Adam Rossi|Von Ryan|Pregnant Schoolgirl|Complicated Circumstances|Patient Welfare
What was Mike worried about regarding Jo's stuntman boyfriend in In Trust?|An undiagnosed medical condition|A missing passport|A previous marriage|A broken employment contract|Medium|In Trust|Episode 24|Mike Vlasek|Jo Mathieson|Declan|Medical Concern|Stunt Career
What occupational risk did Jo's boyfriend refuse to have assessed in In Duty Bound?|His fitness for another stunt|His driving eyesight test|His nursing registration|A hearing test for a new job|Medium|In Duty Bound|Episode 25|Jo Mathieson|Declan|Stunt Medical|Safety Assessment|Refused Examination
What kind of patient challenged Frank's objectivity about Katerina in In Duty Bound?|A punch-drunk patient|A hypothermic swimmer|A teenage surfer|A patient with dementia|Medium|In Duty Bound|Episode 25|Frank Campion|Katerina Ajanovic|Head Trauma|Professional Judgement|Boxing Injuries
Which inherited disease was Jo awaiting test results for in The Waiting Game?|Huntington's disease|Parkinson's disease|Motor neurone disease|Multiple sclerosis|Easy|The Waiting Game|Episode 26|Jo Mathieson|Genetic Testing|Huntington Disease|Family Risk|Test Results
Who needed to tell Adam the truth about his mother's reappearance in The Waiting Game?|Von Ryan|Gabrielle Jaeger|Amy Fielding|Charlotte Beaumont|Medium|The Waiting Game|Episode 26|Von Ryan|Adam Rossi|Debra Rossi|Mother Returns|Family Secret
Whose approval was Katerina desperately trying to regain in A Precious Waste?|Frank Campion's|Mike Vlasek's|Bart West's|Adam Rossi's|Medium|A Precious Waste|Episode 27|Katerina Ajanovic|Frank Campion|Damaged Trust|Drastic Measures|Personal Plot
Which paramedic re-examined her priorities after a tragedy in A Precious Waste?|Jo Mathieson|Cate McMasters|Sasha Fernandez|Bron Craig|Medium|A Precious Waste|Episode 27|Jo Mathieson|Tragic Accident|Changed Priorities|Medical Response Unit|Career Direction
Whose father suffered another heart attack in Tell-Tale Hearts?|Gabrielle Jaeger's|Amy Fielding's|Claire Anderson's|Jo Mathieson's|Easy|Tell Tale Hearts|Episode 28|Gabrielle Jaeger|Russell Jaeger|Father Heart Attack|Family Emergency|Cardiac Illness
Who suggested an unconventional solution for a patient worried about dying a virgin in Tell-Tale Hearts?|Amy Fielding|Charlotte Beaumont|Von Ryan|Bree Matthews|Medium|Tell Tale Hearts|Episode 28|Amy Fielding|Bart West|Terminal Patient|Unconventional Suggestion|Personal Dignity
Which doctor joined the MRU on the dangerous mine rescue in Moving On?|Adam Rossi|Bart West|Frank Campion|Charlotte Beaumont|Easy|Moving On|Episode 29|Adam Rossi|Medical Response Unit|Mine Rescue|Dangerous Callout|Staff Rotation
What kind of location created the emergency in Moving On?|A mine|A winery|A grain silo|A hospital laboratory|Medium|Moving On|Episode 29|Mine Shaft|Underground Rescue|Two Injured Men|MRU|September 2009
What illegal workplace deeply affected Jo in Safe Haven?|A brothel|An underground gambling room|A clandestine distillery|A counterfeit factory|Medium|Safe Haven|Episode 30|Jo Mathieson|Illegal Brothel|Abuse And Exploitation|Paramedic Danger|Rescue Ethics
Who put herself at risk after witnessing exploitation in Safe Haven?|Jo Mathieson|Von Ryan|Amy Fielding|Gabrielle Jaeger|Medium|Safe Haven|Episode 30|Jo Mathieson|Personal Danger|Illegal Brothel|Empathy|Unsafe Intervention
Where did three injuries force the MRU to triage patients in Win Some, Lose Some?|A horse-training facility|A coal mine|A plastics factory|A marina|Medium|Win Some Lose Some|Episode 31|Horse Training Facility|Three Casualties|Medical Response Unit|Mike Vlasek|Rescue Triage
What difficult decision faced Mike at the horse facility in Win Some, Lose Some?|Which injured person to save first|Whether to close the Emergency Department|Whether to resign immediately|Whether to transport a horse to hospital|Medium|Win Some Lose Some|Episode 31|Mike Vlasek|Patient Priority|Rescue Triage|Competing Casualties|Ethical Dilemma
Who had abducted the girl needing rescue in What It Takes?|Her father|Her schoolteacher|Her neighbour|Her brother|Medium|What It Takes|Episode 32|Kidnapped Girl|Father Abduction|MRU Rescue|Mike Vlasek|Child Protection
Which MRU leader faced a hazardous rescue of the kidnapped girl in What It Takes?|Mike Vlasek|Frank Campion|Bart West|Steve Taylor|Medium|What It Takes|Episode 32|Mike Vlasek|Child Kidnapping|Dangerous Rescue|Family Crisis|Medical Response Unit
What kind of factory suffered a major multi-casualty disaster in Too Close for Comfort?|A plastics factory|A glassworks|A textile mill|A paper mill|Easy|Too Close For Comfort|Episode 33|Plastics Factory|Factory Disaster|Mass Casualties|Medical Response Unit|Industrial Emergency
Whose life was endangered by his attempt to save a victim at the factory in Too Close for Comfort?|Mike Vlasek's|Adam Rossi's|Frank Campion's|Bart West's|Medium|Too Close For Comfort|Episode 33|Mike Vlasek|Rescue Risk|Factory Casualties|Personal Injury|Life Saving Attempt
What kind of location required an MRU emergency callout in Damned If You Do?|A remote farm|A city theatre|A suburban supermarket|A school gymnasium|Medium|Damned If You Do|Episode 34|Remote Farm|Serious Accident|MRU Callout|Rural Rescue|October 2009
Who continued helping a patient despite his own injuries in Damned If You Do?|Mike Vlasek|Adam Rossi|Bart West|Frank Campion|Medium|Damned If You Do|Episode 34|Mike Vlasek|Injured Rescuer|Remote Farm|Professional Dedication|Personal Risk
Who had his leadership tested while temporarily heading the rescue team in The Two of Us?|Steve Taylor|Adam Rossi|Bart West|Frank Campion|Medium|The Two Of Us|Episode 35|Steve Taylor|MRU Leadership|Temporary Team Leader|Emergency Rescue|Staff Responsibility
Which nurse had to question her own double standards after a father's decision in The Two of Us?|Gabrielle Jaeger|Amy Fielding|Claire Anderson|Von Ryan|Medium|The Two Of Us|Episode 35|Gabrielle Jaeger|Father Decision|Personal Hypocrisy|Patient Ethics|Moral Reflection
Which colleague was deeply affected by a dying father's wish to reconcile with his son in Reality Check?|Elliott Parker|Mike Vlasek|Bart West|Adam Rossi|Hard|Reality Check|Episode 36|Elliott Parker|Dying Father|Estranged Son|Reconciliation|Steve Taylor
Which doctor was also moved by the father-and-son reunion in Reality Check?|Steve Taylor|Frank Campion|Adam Rossi|Mike Vlasek|Medium|Reality Check|Episode 36|Steve Taylor|Elliott Parker|Family Reconciliation|Dying Father|End Of Life
Whose final day at All Saints is the focus of Yesterday, Today and Tomorrow?|Von Ryan's|Charlotte Beaumont's|Gabrielle Jaeger's|Amy Fielding's|Easy|Yesterday Today And Tomorrow|Episode 37|Von Ryan|Final Day|Series Finale|Long Serving Nurse|Farewell
What event brought the Emergency and MRU staff together in the series finale?|A farewell dinner for Von|A graduation ceremony for interns|A wedding for Bart and Amy|A new hospital opening|Medium|Yesterday Today And Tomorrow|Episode 37|Von Ryan|Farewell Dinner|Emergency Staff|MRU Team|Series Conclusion
On what date was the last All Saints episode first broadcast in Australia?|27 October 2009|20 October 2009|3 November 2009|25 November 2008|Medium|Yesterday Today And Tomorrow|Episode 37|27 October 2009|Final Broadcast|Series Finale|Seven Network|Television History`;


// Series 12 conclusion audit: finale, 2010 Logie nominations, original cast and production.
// All original question IDs and answer data preserved.
const AUDIT_ORIGINAL_COUNT = 103;
const AUDIT_FIRST_ID = 42369;
const auditFacts = `Which All Saints actress was nominated for Most Popular New Female Talent at the 2010 Logie Awards?|Mirrah Foulkes|Ella Scott Lynch|Alix Bidstrup|Celeste Barber|Medium|2010 Logies|Mirrah Foulkes|Jo Mathieson|Most Popular New Female Talent|award nomination|actor recognition|final series
For which audience-voted programme prize was All Saints nominated at the 2010 Logie Awards?|Most Popular Drama|Most Popular Comedy Program|Most Popular Reality Program|Most Popular Lifestyle Program|Medium|2010 Logies|Most Popular Drama|programme nomination|Seven Network|audience vote|Australian television|final season
Under what expanded title was All Saints promoted following its 2009 format change?|All Saints: Medical Response Unit|All Saints: Ward Seventeen|All Saints: The Operating Theatre|All Saints: Emergency Call|Medium|2009 revamp|Medical Response Unit|expanded series title|Seven Network|helicopter rescues|new format|final season
Which network announced the cancellation of All Saints during its final season?|Seven Network|Nine Network|Network Ten|Australian Broadcasting Corporation|Easy|Seven Network|cancellation announcement|2009|Australian drama|broadcast history|final series|television network
In which month of its final year was the cancellation of All Saints announced?|July|February|September|November|Medium|July 2009|cancellation|broadcast history|final season|network announcement|Australian television|programme ending
Which Seven Network programming executive announced the cancellation of All Saints?|Tim Worner|David Leckie|Peter Meakin|James Warburton|Medium|Tim Worner|Seven Network|director of programming|July 2009|cancellation announcement|Australian television|behind the scenes
Which two pressures did Seven Network cite when explaining the end of All Saints?|Changing audiences and higher production costs|A cast strike and studio closure|Loss of broadcast rights and new censorship laws|A merger and a shortage of scripts|Medium|cancellation decision|audience shift|production costs|Seven Network|2009 announcement|business context|programme finale
To how many episodes had Seven initially proposed cutting the final season of All Saints before settling on a longer run?|Twenty-four|Eighteen|Thirty-seven|Forty-six|Medium|initial season order|twenty four episodes|2009 cancellation|revised production|final season|Seven Network|broadcast planning
Who directed the final All Saints episode Yesterday Today and Tomorrow?|Marcus Cole|Jet Wilkinson|Di Drew|Ian Gilmour|Medium|Marcus Cole|series finale|Yesterday Today and Tomorrow|2009|episode director|production credit|final episode
Who wrote the final All Saints episode Yesterday Today and Tomorrow?|Louise Crane-Bowes|Sean Nash|Lily Taylor|Trent Atkinson|Medium|Louise Crane Bowes|series finale|Yesterday Today and Tomorrow|2009|episode writer|production credit|final episode
Which director was credited with the All Saints final-season premiere Out of the Ashes?|Ian Gilmour|Marcus Cole|Samantha Lang|Jet Wilkinson|Medium|Ian Gilmour|Out of the Ashes|2009 premiere|episode director|production credit|season twelve|opening episode
Who wrote the All Saints final-season premiere Out of the Ashes?|Louise Crane-Bowes|Sean Nash|Jeff Truman|Sally Webb|Medium|Louise Crane Bowes|Out of the Ashes|2009 premiere|episode writer|production credit|season twelve|opening episode
Which actor portrayed Ian Kingsley in All Saints final-season episodes?|Tom Oakley|Jonathan Wood|John Sheerin|Curtis Oakes|Medium|Tom Oakley|Ian Kingsley|2009 recurring cast|Claire Anderson|actor identification|series twelve|dramatic role
Which actress portrayed Debra Rossi during the final All Saints series?|Sarah Woods|Anna Volska|Genevieve Hegney|Ella Scott Lynch|Medium|Sarah Woods|Debra Rossi|Adam Rossi|2009 recurring cast|actor identification|family story|series twelve
Who played the All Saints character Russell Jaeger in the 2009 series?|John Sheerin|Curtis Oakes|Tom Oakley|Jonathan Wood|Medium|John Sheerin|Russell Jaeger|Gabrielle Jaeger|2009 guest cast|father character|actor identification|heart attack
Which actor portrayed Ben Jaeger in the final All Saints series?|Curtis Oakes|John Sheerin|Jonathan Wood|Tom Oakley|Medium|Curtis Oakes|Ben Jaeger|Gabrielle Jaeger|2009 guest cast|brother character|actor identification|family accident
Which actress returned as Juliet Martin in the final season of All Saints?|Genevieve Hegney|Sarah Woods|Anna Volska|Renee Lim|Medium|Genevieve Hegney|Juliet Martin|2009 guest cast|Mike Vlasek|recurring romantic story|actor identification|series twelve
Which actress played Suzi Lau in a guest appearance during All Saints final season?|Renee Lim|Celeste Barber|Alix Bidstrup|Sarah Woods|Medium|Renee Lim|Suzi Lau|2009 guest cast|performer identification|returning character|medical drama|series twelve
In All Saints Series 12 what sort of romance developed between Bart West and Amy Fielding?|A secret relationship|A long-distance marriage|An arranged engagement|An open relationship|Medium|Bart West|Amy Fielding|secret love affair|colleague relationship|final season|romantic storyline|character development
Which All Saints character joined the new Medical Response Unit while confronting his troubled past?|Steve Taylor|Frank Campion|Bart West|Elliott Parker|Medium|Steve Taylor|Medical Response Unit|2009|personal demons|paramedic rescues|series overhaul|character progression
Which colleague's death cast a shadow over the All Saints Emergency team at the start of the final series?|Erica Templeton's|Terri Sullivan's|Amy Fielding's|Von Ryan's|Medium|Erica Templeton|season opening|colleague bereavement|2009 aftermath|Emergency Department|cast departure|series continuity
In All Saints episode On Second Thoughts what sort of embarrassing incident triggered an MRU rescue?|A man's sexual fantasy had left him trapped|A surgeon locked himself out of an ambulance|A wedding guest fell into a fountain|A football fan was stuck in a turnstile|Medium|On Second Thoughts|unusual rescue|sexual fantasy|Medical Response Unit|2009|remote callout|episode eighteen
In All Saints episode In Trust which troublesome visitor complicated life for the Emergency staff?|A journalist|A professional footballer|A visiting senator|A television magician|Medium|In Trust|journalist|Emergency Department|difficult visitor|2009|episode twenty four|staff conflict
In All Saints episode Test of Faith what happened to the relationship between Steve Taylor and Claire Anderson?|Their relationship ended|They announced their engagement|They moved abroad together|They discovered they were cousins|Medium|Test of Faith|Steve Taylor|Claire Anderson|relationship breakdown|2009|episode twenty one|character departure
In All Saints episode Out of the Ashes how many people were stranded after an accident on a remote river?|Four|Two|Six|Eight|Medium|Out of the Ashes|boating accident|remote river|helicopter rescue|2009 premiere|Medical Response Unit|four casualties`;

let sequence = 0;
const questions = [...facts.trim().split('\n'), ...auditFacts.trim().split('\n')].map(line => {
  const id = 'tv_' + String(sequence < AUDIT_ORIGINAL_COUNT ? FIRST_ID + sequence : AUDIT_FIRST_ID + sequence - AUDIT_ORIGINAL_COUNT).padStart(5, '0');
  const fields = line.trim().split('|').map(s => s.trim());
  if (fields.length !== 13)
    throw new Error(`Expected 13 fields for ${id}; got ${fields.length}`);
  const [question, correctAnswer, wrong1, wrong2, wrong3, difficulty, ...specificTags] = fields;
  if (!question || [correctAnswer, wrong1, wrong2, wrong3, ...specificTags].some(v => !v))
    throw new Error(`Empty field in ${id}`);
  if (!['Easy', 'Medium', 'Hard'].includes(difficulty) || specificTags.length !== 7)
    throw new Error(`Invalid difficulty or question-specific tags in ${id}`);
  if (new Set([correctAnswer, wrong1, wrong2, wrong3].map(s => s.toLowerCase())).size !== 4)
    throw new Error(`Repeated answer option in ${id}`);
  const answers = [wrong1, wrong2, wrong3];
  answers.splice(sequence % 4, 0, correctAnswer);
  const tags = [...new Map([...commonTags, correctAnswer, ...specificTags]
    .map(tag => [tag.toLowerCase(), tag])).values()];
  const contextualQuestion = question.includes(programme)
    ? question
    : question.startsWith('In which ')
      ? 'In All Saints, which ' + question.slice(9)
      : question.startsWith('In ')
        ? 'In All Saints episode ' + question.slice(3)
        : 'In All Saints, ' + question[0].toLowerCase() + question.slice(1);
  sequence++;
  return {
    id, category: 'Television', programme, question: contextualQuestion, answers,
    correctAnswer, difficulty, tags, dailyEligible: true
  };
});

if (
  !questions.length || questions[0].id !== 'tv_25245' ||
  new Set(questions.map(q => q.id)).size !== questions.length ||
  new Set(questions.map(q => q.question.toLowerCase())).size !== questions.length ||
  questions.some(q =>
    q.answers.length !== 4 || !q.answers.includes(q.correctAnswer) ||
    q.tags.length < 14 || !q.tags.includes('Programme: All Saints') ||
    q.dailyEligible !== true
  )
) throw new Error('Pack 431 exported question validation failed');

module.exports = questions;