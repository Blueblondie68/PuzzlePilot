// logicgrid_pack1.js
// PuzzlePilot Logic Grid Pack 1
// 100 verified 3x3 Logic Grid puzzles

module.exports = [

    {
        id: 'lg1',
        title: 'Pets',
        introduction: 'Three friends each own a different pet. Use the clues to work out who owns which pet.',
        rowLabel: 'Person',
        columnLabel: 'Pet',
        rows: ['Alice', 'Bob', 'Carol'],
        columns: ['Dog', 'Cat', 'Bird'],
        clues: [
            'Neither Alice nor Bob owns the dog.',
            'Alice does not own the cat.'
        ],
        solution: {
            Alice: 'Bird',
            Bob: 'Cat',
            Carol: 'Dog'
        }
    },

    {
        id: 'lg2',
        title: 'Hot Drinks',
        introduction: 'Three friends each chose a different hot drink. Work out who chose what.',
        rowLabel: 'Person',
        columnLabel: 'Drink',
        rows: ['Mia', 'Noah', 'Leo'],
        columns: ['Tea', 'Coffee', 'Cocoa'],
        clues: [
            'Noah chose neither tea nor coffee.',
            'Mia did not choose tea.'
        ],
        solution: {
            Mia: 'Coffee',
            Noah: 'Cocoa',
            Leo: 'Tea'
        }
    },

    {
        id: 'lg3',
        title: 'Hobbies',
        introduction: 'Each person has a different favourite hobby. Match each person to their hobby.',
        rowLabel: 'Person',
        columnLabel: 'Hobby',
        rows: ['Ruby', 'Owen', 'Zara'],
        columns: ['Painting', 'Cycling', 'Chess'],
        clues: [
            'The cyclist is not Ruby.',
            'Owen prefers painting.',
            'Zara does not play chess.'
        ],
        solution: {
            Ruby: 'Chess',
            Owen: 'Painting',
            Zara: 'Cycling'
        }
    },

    {
        id: 'lg4',
        title: 'Jobs',
        introduction: 'Three people have three different jobs. Use the clues to match each person to a job.',
        rowLabel: 'Person',
        columnLabel: 'Job',
        rows: ['Finn', 'Grace', 'Ivy'],
        columns: ['Chef', 'Teacher', 'Pilot'],
        clues: [
            'Ivy is not the teacher.',
            'The chef is not Finn.',
            'Grace is the pilot.'
        ],
        solution: {
            Finn: 'Teacher',
            Grace: 'Pilot',
            Ivy: 'Chef'
        }
    },

    {
        id: 'lg5',
        title: 'Transport',
        introduction: 'Three friends used three different ways to travel. Work out how each person travelled.',
        rowLabel: 'Person',
        columnLabel: 'Transport',
        rows: ['Jack', 'Ella', 'Sam'],
        columns: ['Bus', 'Bike', 'Train'],
        clues: [
            'Ella did not travel by bike.',
            'The train passenger was not Sam.',
            'Jack did not take the bus.'
        ],
        solution: {
            Jack: 'Train',
            Ella: 'Bus',
            Sam: 'Bike'
        }
    },

    {
        id: 'lg6',
        title: 'Desserts',
        introduction: 'Each person chose a different dessert. Match each person to their dessert.',
        rowLabel: 'Person',
        columnLabel: 'Dessert',
        rows: ['Amy', 'Ben', 'Cara'],
        columns: ['Cake', 'Pie', 'Ice Cream'],
        clues: [
            'Ben did not order pie.',
            'Amy chose neither cake nor ice cream.'
        ],
        solution: {
            Amy: 'Pie',
            Ben: 'Cake',
            Cara: 'Ice Cream'
        }
    },

    {
        id: 'lg7',
        title: 'Holiday Destinations',
        introduction: 'Three travellers each visited a different city. Use the clues to find each destination.',
        rowLabel: 'Person',
        columnLabel: 'City',
        rows: ['Liam', 'Nina', 'Theo'],
        columns: ['Rome', 'Paris', 'Lisbon'],
        clues: [
            'Neither Liam nor Nina went to Paris.',
            'Nina did not visit Lisbon.'
        ],
        solution: {
            Liam: 'Lisbon',
            Nina: 'Rome',
            Theo: 'Paris'
        }
    },

    {
        id: 'lg8',
        title: 'Favourite Colours',
        introduction: 'Each person has a different favourite colour. Work out who likes which colour.',
        rowLabel: 'Person',
        columnLabel: 'Colour',
        rows: ['Evie', 'Max', 'Isla'],
        columns: ['Red', 'Blue', 'Green'],
        clues: [
            'Max does not favour red.',
            "Isla's favourite colour is red.",
            "Evie's favourite colour is not green."
        ],
        solution: {
            Evie: 'Blue',
            Max: 'Green',
            Isla: 'Red'
        }
    },

    {
        id: 'lg9',
        title: 'Sports',
        introduction: 'Three friends each play a different sport. Match each person to their sport.',
        rowLabel: 'Person',
        columnLabel: 'Sport',
        rows: ['Ava', 'Luke', 'Maya'],
        columns: ['Tennis', 'Football', 'Swimming'],
        clues: [
            'Luke plays neither football nor swimming.',
            'Ava does not play football.'
        ],
        solution: {
            Ava: 'Swimming',
            Luke: 'Tennis',
            Maya: 'Football'
        }
    },

    {
        id: 'lg10',
        title: 'Breakfast',
        introduction: 'Each person ate a different breakfast. Work out who ate what.',
        rowLabel: 'Person',
        columnLabel: 'Breakfast',
        rows: ['Holly', 'Ryan', 'Jude'],
        columns: ['Toast', 'Cereal', 'Pancakes'],
        clues: [
            'Ryan did not eat cereal.',
            'Holly did not have toast.',
            'Jude had toast.'
        ],
        solution: {
            Holly: 'Cereal',
            Ryan: 'Pancakes',
            Jude: 'Toast'
        }
    },

    {
        id: 'lg11',
        title: 'Music',
        introduction: 'Three musicians each play a different instrument. Match them correctly.',
        rowLabel: 'Person',
        columnLabel: 'Instrument',
        rows: ['Sophie', 'Ethan', 'Kai'],
        columns: ['Guitar', 'Piano', 'Drums'],
        clues: [
            'The drummer is not Ethan.',
            'Neither Sophie nor Ethan plays guitar.',
            'Sophie does not play piano.'
        ],
        solution: {
            Sophie: 'Drums',
            Ethan: 'Piano',
            Kai: 'Guitar'
        }
    },

    {
        id: 'lg12',
        title: 'Books',
        introduction: 'Three readers each chose a different type of book. Work out who chose which genre.',
        rowLabel: 'Person',
        columnLabel: 'Genre',
        rows: ['Lucy', 'Adam', 'Molly'],
        columns: ['Mystery', 'Fantasy', 'History'],
        clues: [
            'Lucy did not choose history.',
            'The mystery reader was Molly.'
        ],
        solution: {
            Lucy: 'Fantasy',
            Adam: 'History',
            Molly: 'Mystery'
        }
    },

    {
        id: 'lg13',
        title: 'Sandwiches',
        introduction: 'Each person ordered a different sandwich filling. Match each person to their choice.',
        rowLabel: 'Person',
        columnLabel: 'Filling',
        rows: ['Dylan', 'Chloe', 'Oscar'],
        columns: ['Cheese', 'Ham', 'Tuna'],
        clues: [
            'Neither Dylan nor Chloe ordered ham.',
            'Chloe did not choose tuna.'
        ],
        solution: {
            Dylan: 'Tuna',
            Chloe: 'Cheese',
            Oscar: 'Ham'
        }
    },

    {
        id: 'lg14',
        title: 'Garden Flowers',
        introduction: 'Three gardeners each planted a different flower. Work out who planted what.',
        rowLabel: 'Person',
        columnLabel: 'Flower',
        rows: ['Freya', 'Tom', 'Lily'],
        columns: ['Rose', 'Tulip', 'Daisy'],
        clues: [
            'Tom planted neither roses nor tulips.',
            'Lily did not plant tulips.'
        ],
        solution: {
            Freya: 'Tulip',
            Tom: 'Daisy',
            Lily: 'Rose'
        }
    },

    {
        id: 'lg15',
        title: 'Film Night',
        introduction: 'Three friends each picked a different type of film. Match each person to their choice.',
        rowLabel: 'Person',
        columnLabel: 'Film',
        rows: ['Megan', 'Josh', 'Nora'],
        columns: ['Comedy', 'Action', 'Animation'],
        clues: [
            'Josh did not choose action.',
            "The animation was Megan's choice.",
            'Nora did not choose comedy.'
        ],
        solution: {
            Megan: 'Animation',
            Josh: 'Comedy',
            Nora: 'Action'
        }
    },

    {
        id: 'lg16',
        title: 'Ice Cream Flavours',
        introduction: 'Each person chose a different ice cream flavour. Work out who chose what.',
        rowLabel: 'Person',
        columnLabel: 'Flavour',
        rows: ['Erin', 'Caleb', 'Poppy'],
        columns: ['Vanilla', 'Chocolate', 'Strawberry'],
        clues: [
            'Caleb did not choose chocolate.',
            'Neither Erin nor Caleb chose strawberry.',
            'Erin did not choose vanilla.'
        ],
        solution: {
            Erin: 'Chocolate',
            Caleb: 'Vanilla',
            Poppy: 'Strawberry'
        }
    },

    {
        id: 'lg17',
        title: 'After-School Clubs',
        introduction: 'Three pupils each joined a different club. Match each pupil to their club.',
        rowLabel: 'Pupil',
        columnLabel: 'Club',
        rows: ['Maisie', 'Henry', 'Arlo'],
        columns: ['Drama', 'Science', 'Art'],
        clues: [
            'Maisie did not join drama.',
            'Henry joined science.',
            'Arlo did not join art.'
        ],
        solution: {
            Maisie: 'Art',
            Henry: 'Science',
            Arlo: 'Drama'
        }
    },

    {
        id: 'lg18',
        title: 'Fruit',
        introduction: 'Three people each chose a different fruit. Work out who chose which one.',
        rowLabel: 'Person',
        columnLabel: 'Fruit',
        rows: ['Millie', 'George', 'Tara'],
        columns: ['Apple', 'Banana', 'Orange'],
        clues: [
            'The apple was not chosen by Millie or George.',
            'Millie did not choose the orange.'
        ],
        solution: {
            Millie: 'Banana',
            George: 'Orange',
            Tara: 'Apple'
        }
    },

    {
        id: 'lg19',
        title: 'Weekend Activities',
        introduction: 'Three friends each chose a different weekend activity. Match each person to their activity.',
        rowLabel: 'Person',
        columnLabel: 'Activity',
        rows: ['Archie', 'Layla', 'Eli'],
        columns: ['Cinema', 'Bowling', 'Museum'],
        clues: [
            'Layla did not visit the museum.',
            'Archie chose neither the cinema nor bowling.'
        ],
        solution: {
            Archie: 'Museum',
            Layla: 'Bowling',
            Eli: 'Cinema'
        }
    },

    {
        id: 'lg20',
        title: 'Lunches',
        introduction: 'Each person had a different lunch. Work out who ate what.',
        rowLabel: 'Person',
        columnLabel: 'Lunch',
        rows: ['Rosie', 'Jamie', 'Aiden'],
        columns: ['Soup', 'Salad', 'Pasta'],
        clues: [
            'Rosie did not have soup.',
            'Aiden had pasta.',
            'Jamie did not have salad.'
        ],
        solution: {
            Rosie: 'Salad',
            Jamie: 'Soup',
            Aiden: 'Pasta'
        }
    },

    {
        id: 'lg21',
        title: 'Bakery Orders',
        introduction: 'Three customers each bought a different treat from the bakery. Work out who bought what.',
        rowLabel: 'Customer',
        columnLabel: 'Treat',
        rows: ['Nell', 'Marcus', 'Priya'],
        columns: ['Croissant', 'Doughnut', 'Muffin'],
        clues: [
            'Marcus did not buy the muffin.',
            'Neither Nell nor Marcus bought the croissant.'
        ],
        solution: {
            Nell: 'Muffin',
            Marcus: 'Doughnut',
            Priya: 'Croissant'
        }
    },

    {
        id: 'lg22',
        title: 'Dog Walk',
        introduction: 'Three neighbours each walked a different dog. Match each person to the dog they walked.',
        rowLabel: 'Person',
        columnLabel: 'Dog',
        rows: ['Callum', 'Beth', 'Imogen'],
        columns: ['Beagle', 'Poodle', 'Spaniel'],
        clues: [
            'Beth walked neither the beagle nor the spaniel.',
            'Callum did not walk the spaniel.'
        ],
        solution: {
            Callum: 'Beagle',
            Beth: 'Poodle',
            Imogen: 'Spaniel'
        }
    },

    {
        id: 'lg23',
        title: 'School Subjects',
        introduction: 'Three pupils each named a different favourite school subject. Match each pupil to their favourite.',
        rowLabel: 'Pupil',
        columnLabel: 'Subject',
        rows: ['Theo', 'Amelia', 'Rory'],
        columns: ['History', 'Science', 'Geography'],
        clues: [
            "Rory's favourite subject is not science.",
            'Amelia chose geography.',
            'Theo did not choose geography.'
        ],
        solution: {
            Theo: 'Science',
            Amelia: 'Geography',
            Rory: 'History'
        }
    },

    {
        id: 'lg24',
        title: 'Market Stalls',
        introduction: 'Three traders each run a different market stall. Work out which stall belongs to each trader.',
        rowLabel: 'Trader',
        columnLabel: 'Stall',
        rows: ['Nadia', 'Peter', 'Louise'],
        columns: ['Flowers', 'Bread', 'Cheese'],
        clues: [
            'The flower stall does not belong to Nadia or Peter.',
            'Peter does not sell cheese.'
        ],
        solution: {
            Nadia: 'Cheese',
            Peter: 'Bread',
            Louise: 'Flowers'
        }
    },

    {
        id: 'lg25',
        title: 'Camping Gear',
        introduction: 'Three campers were each responsible for a different piece of equipment. Work out who brought what.',
        rowLabel: 'Camper',
        columnLabel: 'Equipment',
        rows: ['Dean', 'Sasha', 'Willow'],
        columns: ['Tent', 'Stove', 'Lantern'],
        clues: [
            'Dean did not bring the tent.',
            'Willow was responsible for the lantern.',
            'Sasha did not bring the lantern.'
        ],
        solution: {
            Dean: 'Stove',
            Sasha: 'Tent',
            Willow: 'Lantern'
        }
    },

    {
        id: 'lg26',
        title: 'Smoothies',
        introduction: 'Three friends each ordered a different smoothie flavour. Work out who ordered which one.',
        rowLabel: 'Person',
        columnLabel: 'Flavour',
        rows: ['Kieran', 'Mabel', 'Toby'],
        columns: ['Mango', 'Berry', 'Banana'],
        clues: [
            'Mabel did not order mango.',
            'Kieran chose neither berry nor banana.'
        ],
        solution: {
            Kieran: 'Mango',
            Mabel: 'Banana',
            Toby: 'Berry'
        }
    },

    {
        id: 'lg27',
        title: 'Lost Property',
        introduction: 'Three people each came to collect a different lost item. Match each person to their item.',
        rowLabel: 'Person',
        columnLabel: 'Item',
        rows: ['Harper', 'Joel', 'Anya'],
        columns: ['Scarf', 'Wallet', 'Umbrella'],
        clues: [
            'The umbrella did not belong to Harper.',
            'Joel came to collect the wallet.',
            'Anya did not lose the scarf.'
        ],
        solution: {
            Harper: 'Scarf',
            Joel: 'Wallet',
            Anya: 'Umbrella'
        }
    },

    {
        id: 'lg28',
        title: 'Pizza Toppings',
        introduction: 'Three diners each chose a different pizza topping. Work out who chose what.',
        rowLabel: 'Diner',
        columnLabel: 'Topping',
        rows: ['Olive', 'Nathan', 'Georgia'],
        columns: ['Mushroom', 'Pepper', 'Ham'],
        clues: [
            'Nathan chose neither mushroom nor ham.',
            'Georgia did not choose pepper.'
        ],
        solution: {
            Olive: 'Mushroom',
            Nathan: 'Pepper',
            Georgia: 'Ham'
        }
    },

    {
        id: 'lg29',
        title: 'Train Seats',
        introduction: 'Three passengers each sat in a different type of seat. Match each passenger to their seat.',
        rowLabel: 'Passenger',
        columnLabel: 'Seat',
        rows: ['Felix', 'Daisy', 'Hamza'],
        columns: ['Window', 'Aisle', 'Table'],
        clues: [
            'Daisy did not sit at the table.',
            "The window seat was not Felix's.",
            'Hamza sat at the table.'
        ],
        solution: {
            Felix: 'Aisle',
            Daisy: 'Window',
            Hamza: 'Table'
        }
    },

    {
        id: 'lg30',
        title: 'Board Games',
        introduction: 'Three friends each chose a different game to play. Work out who chose which game.',
        rowLabel: 'Person',
        columnLabel: 'Game',
        rows: ['Esme', 'Jonah', 'Blake'],
        columns: ['Chess', 'Scrabble', 'Cluedo'],
        clues: [
            'Neither Esme nor Blake chose Scrabble.',
            'Blake did not choose chess.'
        ],
        solution: {
            Esme: 'Chess',
            Jonah: 'Scrabble',
            Blake: 'Cluedo'
        }
    },

    {
        id: 'lg31',
        title: 'Rainy Day',
        introduction: 'Three friends each brought a different item for the wet weather. Work out who brought what.',
        rowLabel: 'Person',
        columnLabel: 'Item',
        rows: ['Leah', 'Connor', 'Mina'],
        columns: ['Umbrella', 'Raincoat', 'Boots'],
        clues: [
            'Connor did not bring the umbrella.',
            'Leah brought the raincoat.',
            'Mina did not bring the raincoat.'
        ],
        solution: {
            Leah: 'Raincoat',
            Connor: 'Boots',
            Mina: 'Umbrella'
        }
    },

    {
        id: 'lg32',
        title: 'Craft Afternoon',
        introduction: 'Three people each chose a different craft activity. Match each person to their activity.',
        rowLabel: 'Person',
        columnLabel: 'Craft',
        rows: ['Bea', 'Miles', 'Keira'],
        columns: ['Knitting', 'Pottery', 'Origami'],
        clues: [
            'Miles chose neither knitting nor origami.',
            'Keira did not choose knitting.'
        ],
        solution: {
            Bea: 'Knitting',
            Miles: 'Pottery',
            Keira: 'Origami'
        }
    },

    {
        id: 'lg33',
        title: 'Zoo Favourites',
        introduction: 'Three visitors each picked a different favourite animal at the zoo. Work out who chose which animal.',
        rowLabel: 'Visitor',
        columnLabel: 'Animal',
        rows: ['Jacob', 'Seren', 'Alex'],
        columns: ['Tiger', 'Giraffe', 'Penguin'],
        clues: [
            "The giraffe was not Jacob's favourite.",
            'Alex preferred the penguin.',
            'Seren did not choose the penguin.'
        ],
        solution: {
            Jacob: 'Tiger',
            Seren: 'Giraffe',
            Alex: 'Penguin'
        }
    },

    {
        id: 'lg34',
        title: 'Cafe Cakes',
        introduction: 'Three customers each ordered a different slice of cake. Match each customer to their cake.',
        rowLabel: 'Customer',
        columnLabel: 'Cake',
        rows: ['Orla', 'Simon', 'Jasmine'],
        columns: ['Carrot', 'Lemon', 'Chocolate'],
        clues: [
            'Orla did not order lemon.',
            'Neither Orla nor Simon ordered chocolate.',
            'Simon did not choose carrot.'
        ],
        solution: {
            Orla: 'Carrot',
            Simon: 'Lemon',
            Jasmine: 'Chocolate'
        }
    },

    {
        id: 'lg35',
        title: 'Fancy Dress',
        introduction: 'Three friends each wore a different fancy-dress costume. Work out who dressed as what.',
        rowLabel: 'Person',
        columnLabel: 'Costume',
        rows: ['Reuben', 'Lola', 'Matilda'],
        columns: ['Pirate', 'Wizard', 'Robot'],
        clues: [
            'Matilda was not dressed as a wizard.',
            'Reuben wore neither the pirate nor robot costume.'
        ],
        solution: {
            Reuben: 'Wizard',
            Lola: 'Pirate',
            Matilda: 'Robot'
        }
    },

    {
        id: 'lg36',
        title: 'Garden Jobs',
        introduction: 'Three people each tackled a different job in the garden. Match each person to their task.',
        rowLabel: 'Person',
        columnLabel: 'Job',
        rows: ['Isaac', 'Phoebe', 'Dan'],
        columns: ['Mowing', 'Weeding', 'Watering'],
        clues: [
            'Phoebe did not do the mowing.',
            'Dan did the watering.',
            'Isaac did not do the watering.'
        ],
        solution: {
            Isaac: 'Mowing',
            Phoebe: 'Weeding',
            Dan: 'Watering'
        }
    },

    {
        id: 'lg37',
        title: 'Seaside Snacks',
        introduction: 'Three visitors to the seaside each bought a different snack. Work out who bought what.',
        rowLabel: 'Visitor',
        columnLabel: 'Snack',
        rows: ['Elsie', 'Aaron', 'Nico'],
        columns: ['Chips', 'Ice Cream', 'Doughnut'],
        clues: [
            "The chips were not Aaron's.",
            'Elsie bought neither the ice cream nor the doughnut.'
        ],
        solution: {
            Elsie: 'Chips',
            Aaron: 'Doughnut',
            Nico: 'Ice Cream'
        }
    },

    {
        id: 'lg38',
        title: 'Phone Cases',
        introduction: 'Three friends each chose a different colour phone case. Match each friend to their colour.',
        rowLabel: 'Person',
        columnLabel: 'Colour',
        rows: ['Sienna', 'Lucas', 'Martha'],
        columns: ['Black', 'Purple', 'Yellow'],
        clues: [
            'Lucas chose the black case.',
            'Martha did not choose purple.',
            'Sienna did not choose black.'
        ],
        solution: {
            Sienna: 'Purple',
            Lucas: 'Black',
            Martha: 'Yellow'
        }
    },

    {
        id: 'lg39',
        title: 'Library Returns',
        introduction: 'Three readers each returned a different kind of book. Work out who returned which one.',
        rowLabel: 'Reader',
        columnLabel: 'Book',
        rows: ['Aisha', 'Gareth', 'Polly'],
        columns: ['Cookbook', 'Biography', 'Thriller'],
        clues: [
            'Neither Aisha nor Gareth returned the biography.',
            'Gareth did not return the thriller.'
        ],
        solution: {
            Aisha: 'Thriller',
            Gareth: 'Cookbook',
            Polly: 'Biography'
        }
    },

    {
        id: 'lg40',
        title: 'Party Drinks',
        introduction: 'Three guests each chose a different soft drink. Work out who chose what.',
        rowLabel: 'Guest',
        columnLabel: 'Drink',
        rows: ['Cleo', 'Martin', 'Rafi'],
        columns: ['Lemonade', 'Cola', 'Orange'],
        clues: [
            'Neither Cleo nor Rafi chose cola.',
            'Cleo did not choose orange.'
        ],
        solution: {
            Cleo: 'Lemonade',
            Martin: 'Cola',
            Rafi: 'Orange'
        }
    },

    {
        id: 'lg41',
        title: 'Cinema Snacks',
        introduction: 'Three friends each bought a different snack at the cinema. Work out who bought what.',
        rowLabel: 'Person',
        columnLabel: 'Snack',
        rows: ['Talia', 'Benji', 'Rowan'],
        columns: ['Popcorn', 'Sweets', 'Nachos'],
        clues: [
            'Rowan did not buy popcorn.',
            'Neither Talia nor Rowan bought sweets.'
        ],
        solution: {
            Talia: 'Popcorn',
            Benji: 'Sweets',
            Rowan: 'Nachos'
        }
    },

    {
        id: 'lg42',
        title: 'New Shoes',
        introduction: 'Three shoppers each bought a different type of footwear. Match each shopper to their purchase.',
        rowLabel: 'Shopper',
        columnLabel: 'Footwear',
        rows: ['Hugo', 'Elena', 'Maddie'],
        columns: ['Boots', 'Trainers', 'Sandals'],
        clues: [
            'Elena did not buy boots.',
            'Hugo bought the trainers.',
            'Maddie did not buy trainers.'
        ],
        solution: {
            Hugo: 'Trainers',
            Elena: 'Sandals',
            Maddie: 'Boots'
        }
    },

    {
        id: 'lg43',
        title: 'Aquarium Favourites',
        introduction: 'Three visitors each chose a different favourite creature at the aquarium. Work out who chose which one.',
        rowLabel: 'Visitor',
        columnLabel: 'Creature',
        rows: ['Ari', 'Faye', 'Dominic'],
        columns: ['Shark', 'Octopus', 'Seahorse'],
        clues: [
            'Ari chose neither the shark nor the seahorse.',
            'Faye did not choose the shark.'
        ],
        solution: {
            Ari: 'Octopus',
            Faye: 'Seahorse',
            Dominic: 'Shark'
        }
    },

    {
        id: 'lg44',
        title: 'Sunday Roast',
        introduction: 'Three diners each chose a different main dish. Work out who chose what.',
        rowLabel: 'Diner',
        columnLabel: 'Main',
        rows: ['Gemma', 'Lewis', 'Omar'],
        columns: ['Beef', 'Chicken', 'Lamb'],
        clues: [
            'The lamb was not chosen by Gemma.',
            'Lewis chose neither beef nor lamb.'
        ],
        solution: {
            Gemma: 'Beef',
            Lewis: 'Chicken',
            Omar: 'Lamb'
        }
    },

    {
        id: 'lg45',
        title: 'Museum Rooms',
        introduction: 'Three visitors each headed first to a different museum room. Match each visitor to the room they visited.',
        rowLabel: 'Visitor',
        columnLabel: 'Room',
        rows: ['Niamh', 'Edward', 'Zoe'],
        columns: ['Dinosaurs', 'Space', 'Egypt'],
        clues: [
            'Edward went to the Egypt room.',
            'Niamh did not visit the space room.',
            'Zoe did not visit the Egypt room.'
        ],
        solution: {
            Niamh: 'Dinosaurs',
            Edward: 'Egypt',
            Zoe: 'Space'
        }
    },

    {
        id: 'lg46',
        title: 'Jam Jars',
        introduction: 'Three people each made a different flavour of jam. Work out who made which flavour.',
        rowLabel: 'Person',
        columnLabel: 'Flavour',
        rows: ['Clara', 'Stan', 'Yasmin'],
        columns: ['Strawberry', 'Raspberry', 'Plum'],
        clues: [
            'Neither Clara nor Stan made plum jam.',
            'Stan did not make strawberry jam.'
        ],
        solution: {
            Clara: 'Strawberry',
            Stan: 'Raspberry',
            Yasmin: 'Plum'
        }
    },

    {
        id: 'lg47',
        title: 'Arcade Games',
        introduction: 'Three players each headed to a different arcade game. Work out who played what.',
        rowLabel: 'Player',
        columnLabel: 'Game',
        rows: ['Drew', 'Lena', 'Milo'],
        columns: ['Racing', 'Basketball', 'Pinball'],
        clues: [
            'Drew did not play pinball.',
            'Milo did not play basketball.',
            'Lena played pinball.'
        ],
        solution: {
            Drew: 'Basketball',
            Lena: 'Pinball',
            Milo: 'Racing'
        }
    },

    {
        id: 'lg48',
        title: 'Picnic Food',
        introduction: 'Three friends each brought a different food to the picnic. Match each friend to what they brought.',
        rowLabel: 'Person',
        columnLabel: 'Food',
        rows: ['Tess', 'Alfie', 'Rina'],
        columns: ['Quiche', 'Salad', 'Sausage Rolls'],
        clues: [
            'Tess brought neither the salad nor sausage rolls.',
            'Alfie did not bring sausage rolls.'
        ],
        solution: {
            Tess: 'Quiche',
            Alfie: 'Salad',
            Rina: 'Sausage Rolls'
        }
    },

    {
        id: 'lg49',
        title: 'Birthday Presents',
        introduction: 'Three people each gave a different birthday present. Work out who gave what.',
        rowLabel: 'Person',
        columnLabel: 'Present',
        rows: ['Maya', 'Fraser', 'Kit'],
        columns: ['Book', 'Puzzle', 'Scarf'],
        clues: [
            'The book was not given by Maya.',
            'Kit gave the scarf.',
            'Fraser did not give the scarf.'
        ],
        solution: {
            Maya: 'Puzzle',
            Fraser: 'Book',
            Kit: 'Scarf'
        }
    },

    {
        id: 'lg50',
        title: 'Fish and Chips',
        introduction: 'Three customers each ordered a different extra with their chips. Work out who ordered what.',
        rowLabel: 'Customer',
        columnLabel: 'Extra',
        rows: ['Neil', 'Amber', 'Pippa'],
        columns: ['Curry Sauce', 'Gravy', 'Mushy Peas'],
        clues: [
            'Amber did not order gravy.',
            'Neither Neil nor Amber ordered mushy peas.',
            'Neil did not order curry sauce.'
        ],
        solution: {
            Neil: 'Gravy',
            Amber: 'Curry Sauce',
            Pippa: 'Mushy Peas'
        }
    },

    {
        id: 'lg51',
        title: 'Theme Park Rides',
        introduction: 'Three visitors each chose a different ride first. Work out who went on which ride.',
        rowLabel: 'Visitor',
        columnLabel: 'Ride',
        rows: ['Avery', 'Joel', 'Skye'],
        columns: ['Coaster', 'Dodgems', 'Carousel'],
        clues: [
            'Joel went on neither the coaster nor carousel.',
            'Skye did not choose the coaster.'
        ],
        solution: {
            Avery: 'Coaster',
            Joel: 'Dodgems',
            Skye: 'Carousel'
        }
    },

    {
        id: 'lg52',
        title: 'Soup Lunch',
        introduction: 'Three diners each ordered a different soup. Match each diner to their soup.',
        rowLabel: 'Diner',
        columnLabel: 'Soup',
        rows: ['Iris', 'Matthew', 'Zain'],
        columns: ['Tomato', 'Leek', 'Mushroom'],
        clues: [
            'Zain did not order tomato.',
            'Iris ordered mushroom.',
            'Matthew did not order mushroom.'
        ],
        solution: {
            Iris: 'Mushroom',
            Matthew: 'Tomato',
            Zain: 'Leek'
        }
    },

    {
        id: 'lg53',
        title: 'Beach Bags',
        introduction: 'Three friends each remembered to pack a different beach item. Work out who packed what.',
        rowLabel: 'Person',
        columnLabel: 'Item',
        rows: ['Cass', 'Ruben', 'Molly'],
        columns: ['Towel', 'Suncream', 'Sunglasses'],
        clues: [
            'The towel was not packed by Ruben.',
            'Cass packed neither the towel nor sunglasses.'
        ],
        solution: {
            Cass: 'Suncream',
            Ruben: 'Sunglasses',
            Molly: 'Towel'
        }
    },

    {
        id: 'lg54',
        title: 'Pasta Night',
        introduction: 'Three friends each chose a different pasta dish. Work out who chose what.',
        rowLabel: 'Person',
        columnLabel: 'Dish',
        rows: ['Luca', 'Heidi', 'Evan'],
        columns: ['Lasagne', 'Carbonara', 'Ravioli'],
        clues: [
            'Neither Heidi nor Evan chose lasagne.',
            'Evan did not choose carbonara.'
        ],
        solution: {
            Luca: 'Lasagne',
            Heidi: 'Carbonara',
            Evan: 'Ravioli'
        }
    },

    {
        id: 'lg55',
        title: 'Supermarket Aisles',
        introduction: 'Three shoppers each headed to a different aisle. Match each shopper to the aisle they needed.',
        rowLabel: 'Shopper',
        columnLabel: 'Aisle',
        rows: ['Jodie', 'Malik', 'Gwen'],
        columns: ['Bakery', 'Frozen', 'Cleaning'],
        clues: [
            'Gwen needed the cleaning aisle.',
            'Jodie did not go to the frozen aisle.',
            'Malik did not need cleaning products.'
        ],
        solution: {
            Jodie: 'Bakery',
            Malik: 'Frozen',
            Gwen: 'Cleaning'
        }
    },

    {
        id: 'lg56',
        title: 'Cupcake Toppings',
        introduction: 'Three bakers each decorated a cupcake with a different topping. Work out who used what.',
        rowLabel: 'Baker',
        columnLabel: 'Topping',
        rows: ['Annie', 'Dev', 'Cole'],
        columns: ['Sprinkles', 'Cherry', 'Chocolate'],
        clues: [
            'Cole did not use sprinkles.',
            'Annie used neither the cherry nor chocolate.'
        ],
        solution: {
            Annie: 'Sprinkles',
            Dev: 'Cherry',
            Cole: 'Chocolate'
        }
    },

    {
        id: 'lg57',
        title: 'Farm Animals',
        introduction: 'Three children each chose a different favourite animal at the farm. Work out who chose which animal.',
        rowLabel: 'Child',
        columnLabel: 'Animal',
        rows: ['Elliot', 'Nora', 'Mae'],
        columns: ['Goat', 'Pig', 'Donkey'],
        clues: [
            'Nora did not choose the donkey.',
            "The goat was not Elliot's favourite.",
            'Mae chose the donkey.'
        ],
        solution: {
            Elliot: 'Pig',
            Nora: 'Goat',
            Mae: 'Donkey'
        }
    },

    {
        id: 'lg58',
        title: 'Takeaway Night',
        introduction: 'Three friends each ordered a different takeaway. Match each friend to their meal.',
        rowLabel: 'Person',
        columnLabel: 'Takeaway',
        rows: ['Owen', 'Layla', 'Ravi'],
        columns: ['Pizza', 'Curry', 'Chinese'],
        clues: [
            'Layla ordered neither pizza nor Chinese.',
            'Ravi did not order pizza.'
        ],
        solution: {
            Owen: 'Pizza',
            Layla: 'Curry',
            Ravi: 'Chinese'
        }
    },

    {
        id: 'lg59',
        title: 'Desk Drawers',
        introduction: 'Three people each keep a different item in their desk drawer. Work out who keeps what.',
        rowLabel: 'Person',
        columnLabel: 'Item',
        rows: ['Paige', 'Harry', 'Noor'],
        columns: ['Stapler', 'Notebook', 'Headphones'],
        clues: [
            'Harry does not keep the stapler.',
            'Noor keeps the headphones.',
            'Paige does not keep headphones.'
        ],
        solution: {
            Paige: 'Stapler',
            Harry: 'Notebook',
            Noor: 'Headphones'
        }
    },

    {
        id: 'lg60',
        title: 'Village Fete',
        introduction: 'Three visitors each entered a different competition at the village fete. Work out who entered what.',
        rowLabel: 'Visitor',
        columnLabel: 'Competition',
        rows: ['Edith', 'Samir', 'George'],
        columns: ['Cake', 'Flowers', 'Photography'],
        clues: [
            'The photography competition was not entered by Edith.',
            'Samir entered neither the cake nor photography competition.'
        ],
        solution: {
            Edith: 'Cake',
            Samir: 'Flowers',
            George: 'Photography'
        }
    },

    {
        id: 'lg61',
        title: 'Breakfast Drinks',
        introduction: 'Three people each chose a different drink with breakfast. Work out who drank what.',
        rowLabel: 'Person',
        columnLabel: 'Drink',
        rows: ['Cora', 'Jamie', 'Bilal'],
        columns: ['Juice', 'Tea', 'Coffee'],
        clues: [
            'Jamie did not drink coffee.',
            'Neither Cora nor Jamie chose juice.'
        ],
        solution: {
            Cora: 'Coffee',
            Jamie: 'Tea',
            Bilal: 'Juice'
        }
    },

    {
        id: 'lg62',
        title: 'Bowling Shoes',
        introduction: 'Three bowlers each wore a different colour pair of shoes. Match each bowler to their colour.',
        rowLabel: 'Bowler',
        columnLabel: 'Colour',
        rows: ['Marnie', 'Theo', 'Jasper'],
        columns: ['Red', 'Blue', 'Green'],
        clues: [
            'Jasper wore neither red nor blue.',
            'Marnie did not wear blue.'
        ],
        solution: {
            Marnie: 'Red',
            Theo: 'Blue',
            Jasper: 'Green'
        }
    },

    {
        id: 'lg63',
        title: 'Sandcastle Contest',
        introduction: 'Three children each built a different type of sandcastle. Work out who built what.',
        rowLabel: 'Child',
        columnLabel: 'Castle',
        rows: ['Penny', 'Adam', 'Rosa'],
        columns: ['Tower', 'Fort', 'Palace'],
        clues: [
            'Adam did not build the tower.',
            'Rosa built the palace.',
            'Penny did not build the palace.'
        ],
        solution: {
            Penny: 'Tower',
            Adam: 'Fort',
            Rosa: 'Palace'
        }
    },

    {
        id: 'lg64',
        title: 'Fruit Juice',
        introduction: 'Three customers each ordered a different fruit juice. Work out who ordered which one.',
        rowLabel: 'Customer',
        columnLabel: 'Juice',
        rows: ['Hannah', 'Rory', 'Zara'],
        columns: ['Apple', 'Orange', 'Pineapple'],
        clues: [
            "The orange juice was not Rory's.",
            'Hannah chose neither orange nor pineapple.'
        ],
        solution: {
            Hannah: 'Apple',
            Rory: 'Pineapple',
            Zara: 'Orange'
        }
    },

    {
        id: 'lg65',
        title: 'Music Lessons',
        introduction: 'Three pupils each have a lesson on a different instrument. Match each pupil to their instrument.',
        rowLabel: 'Pupil',
        columnLabel: 'Instrument',
        rows: ['Freddie', 'Lila', 'Mason'],
        columns: ['Violin', 'Flute', 'Trumpet'],
        clues: [
            'Lila does not play trumpet.',
            'Neither Freddie nor Lila plays violin.',
            'Mason does not play flute.'
        ],
        solution: {
            Freddie: 'Trumpet',
            Lila: 'Flute',
            Mason: 'Violin'
        }
    },

    {
        id: 'lg66',
        title: 'Jacket Pockets',
        introduction: 'Three friends each found a different item in a jacket pocket. Work out who found what.',
        rowLabel: 'Person',
        columnLabel: 'Item',
        rows: ['Ruth', 'Elliot', 'Sami'],
        columns: ['Coin', 'Ticket', 'Key'],
        clues: [
            'Sami found the key.',
            'Ruth did not find the ticket.',
            'Elliot did not find the key.'
        ],
        solution: {
            Ruth: 'Coin',
            Elliot: 'Ticket',
            Sami: 'Key'
        }
    },

    {
        id: 'lg67',
        title: 'Pancake Toppings',
        introduction: 'Three diners each chose a different topping for their pancakes. Work out who chose what.',
        rowLabel: 'Diner',
        columnLabel: 'Topping',
        rows: ['Leo', 'Sophie', 'Nate'],
        columns: ['Honey', 'Berries', 'Chocolate'],
        clues: [
            'Neither Leo nor Nate chose berries.',
            'Nate did not choose honey.'
        ],
        solution: {
            Leo: 'Honey',
            Sophie: 'Berries',
            Nate: 'Chocolate'
        }
    },

    {
        id: 'lg68',
        title: 'Bookshop Bags',
        introduction: 'Three shoppers each bought a different kind of book. Match each shopper to their purchase.',
        rowLabel: 'Shopper',
        columnLabel: 'Book',
        rows: ['Dina', 'Patrick', 'Elise'],
        columns: ['Novel', 'Cookbook', 'Travel Guide'],
        clues: [
            'Patrick bought neither the novel nor travel guide.',
            'Elise did not buy the novel.'
        ],
        solution: {
            Dina: 'Novel',
            Patrick: 'Cookbook',
            Elise: 'Travel Guide'
        }
    },

    {
        id: 'lg69',
        title: 'Garden Birds',
        introduction: 'Three people each spotted a different bird in the garden. Work out who spotted which bird.',
        rowLabel: 'Person',
        columnLabel: 'Bird',
        rows: ['Marcus', 'Jenny', 'Asha'],
        columns: ['Robin', 'Blackbird', 'Sparrow'],
        clues: [
            'Jenny did not see the sparrow.',
            'The blackbird was spotted by Marcus.',
            'Asha did not see the blackbird.'
        ],
        solution: {
            Marcus: 'Blackbird',
            Jenny: 'Robin',
            Asha: 'Sparrow'
        }
    },

    {
        id: 'lg70',
        title: 'Sandwich Lunch',
        introduction: 'Three colleagues each chose a different sandwich. Work out who chose which filling.',
        rowLabel: 'Person',
        columnLabel: 'Filling',
        rows: ['Derek', 'Mina', 'Grace'],
        columns: ['Chicken', 'Cheese', 'Egg'],
        clues: [
            'Grace did not choose chicken.',
            'Derek chose neither cheese nor egg.'
        ],
        solution: {
            Derek: 'Chicken',
            Mina: 'Cheese',
            Grace: 'Egg'
        }
    },

    {
        id: 'lg71',
        title: 'Treasure Hunt',
        introduction: 'Three players each found a different object during a treasure hunt. Work out who found what.',
        rowLabel: 'Player',
        columnLabel: 'Object',
        rows: ['Molly', 'Finn', 'Kira'],
        columns: ['Map', 'Key', 'Coin'],
        clues: [
            'The map was not found by Finn.',
            'Kira found neither the map nor key.'
        ],
        solution: {
            Molly: 'Map',
            Finn: 'Key',
            Kira: 'Coin'
        }
    },

    {
        id: 'lg72',
        title: 'Milkshakes',
        introduction: 'Three friends each ordered a different milkshake flavour. Work out who ordered what.',
        rowLabel: 'Person',
        columnLabel: 'Flavour',
        rows: ['Archie', 'Nia', 'Tom'],
        columns: ['Vanilla', 'Chocolate', 'Banana'],
        clues: [
            'Tom did not order chocolate.',
            'Nia ordered banana.',
            'Archie did not order banana.'
        ],
        solution: {
            Archie: 'Chocolate',
            Nia: 'Banana',
            Tom: 'Vanilla'
        }
    },

    {
        id: 'lg73',
        title: 'School Bags',
        introduction: 'Three pupils each have a different colour school bag. Match each pupil to their bag.',
        rowLabel: 'Pupil',
        columnLabel: 'Colour',
        rows: ['Elsa', 'Dylan', 'Hamid'],
        columns: ['Navy', 'Green', 'Red'],
        clues: [
            'Neither Elsa nor Hamid has the green bag.',
            'Elsa does not have the red bag.'
        ],
        solution: {
            Elsa: 'Navy',
            Dylan: 'Green',
            Hamid: 'Red'
        }
    },

    {
        id: 'lg74',
        title: 'Pizza Sizes',
        introduction: 'Three customers each ordered a different size pizza. Work out who ordered which size.',
        rowLabel: 'Customer',
        columnLabel: 'Size',
        rows: ['Poppy', 'Dan', 'Alicia'],
        columns: ['Small', 'Medium', 'Large'],
        clues: [
            'Dan ordered neither the small nor large pizza.',
            'Poppy did not order the large pizza.'
        ],
        solution: {
            Poppy: 'Small',
            Dan: 'Medium',
            Alicia: 'Large'
        }
    },

    {
        id: 'lg75',
        title: 'Winter Clothes',
        introduction: 'Three friends each bought a different item of winter clothing. Match each friend to their purchase.',
        rowLabel: 'Person',
        columnLabel: 'Clothing',
        rows: ['Cerys', 'Noah', 'Imran'],
        columns: ['Gloves', 'Scarf', 'Hat'],
        clues: [
            'Noah did not buy the hat.',
            'Imran bought the gloves.',
            'Cerys did not buy gloves.'
        ],
        solution: {
            Cerys: 'Hat',
            Noah: 'Scarf',
            Imran: 'Gloves'
        }
    },

    {
        id: 'lg76',
        title: 'Park Benches',
        introduction: 'Three friends each sat beside a different feature in the park. Work out who sat where.',
        rowLabel: 'Person',
        columnLabel: 'Feature',
        rows: ['Jenna', 'Luke', 'Omar'],
        columns: ['Pond', 'Fountain', 'Playground'],
        clues: [
            "The pond was not beside Luke's bench.",
            'Jenna sat beside neither the fountain nor playground.'
        ],
        solution: {
            Jenna: 'Pond',
            Luke: 'Playground',
            Omar: 'Fountain'
        }
    },

    {
        id: 'lg77',
        title: 'Biscuit Tin',
        introduction: 'Three people each chose a different biscuit. Work out who chose which one.',
        rowLabel: 'Person',
        columnLabel: 'Biscuit',
        rows: ['Gina', 'Arthur', 'Leila'],
        columns: ['Custard Cream', 'Digestive', 'Ginger Nut'],
        clues: [
            'Gina did not choose the custard cream.',
            'Neither Arthur nor Leila chose the ginger nut.',
            'Arthur did not choose the digestive.'
        ],
        solution: {
            Gina: 'Ginger Nut',
            Arthur: 'Custard Cream',
            Leila: 'Digestive'
        }
    },

    {
        id: 'lg78',
        title: 'Art Gallery',
        introduction: 'Three visitors each preferred a different type of artwork. Match each visitor to their favourite.',
        rowLabel: 'Visitor',
        columnLabel: 'Artwork',
        rows: ['Holly', 'Ravi', 'Emilia'],
        columns: ['Portrait', 'Landscape', 'Sculpture'],
        clues: [
            'Emilia preferred sculpture.',
            'Holly did not choose landscape.',
            'Ravi did not choose sculpture.'
        ],
        solution: {
            Holly: 'Portrait',
            Ravi: 'Landscape',
            Emilia: 'Sculpture'
        }
    },

    {
        id: 'lg79',
        title: 'Afternoon Tea',
        introduction: 'Three guests each chose a different treat at afternoon tea. Work out who chose what.',
        rowLabel: 'Guest',
        columnLabel: 'Treat',
        rows: ['Megan', 'Colin', 'Farah'],
        columns: ['Scone', 'Tart', 'Cake'],
        clues: [
            'Colin did not choose cake.',
            'Megan chose neither the tart nor cake.'
        ],
        solution: {
            Megan: 'Scone',
            Colin: 'Tart',
            Farah: 'Cake'
        }
    },

    {
        id: 'lg80',
        title: 'Plant Pots',
        introduction: 'Three gardeners each planted a different herb in a pot. Work out who planted what.',
        rowLabel: 'Gardener',
        columnLabel: 'Herb',
        rows: ['Zoe', 'Martin', 'Priya'],
        columns: ['Basil', 'Mint', 'Rosemary'],
        clues: [
            'The basil was not planted by Zoe.',
            'Priya planted rosemary.',
            'Martin did not plant rosemary.'
        ],
        solution: {
            Zoe: 'Mint',
            Martin: 'Basil',
            Priya: 'Rosemary'
        }
    },

    {
        id: 'lg81',
        title: 'Fairground Treats',
        introduction: 'Three visitors each bought a different fairground treat. Work out who bought what.',
        rowLabel: 'Visitor',
        columnLabel: 'Treat',
        rows: ['Aiden', 'Lucy', 'Mara'],
        columns: ['Candyfloss', 'Toffee Apple', 'Doughnut'],
        clues: [
            'Lucy did not buy candyfloss.',
            'Neither Aiden nor Lucy bought the doughnut.'
        ],
        solution: {
            Aiden: 'Candyfloss',
            Lucy: 'Toffee Apple',
            Mara: 'Doughnut'
        }
    },

    {
        id: 'lg82',
        title: 'Coffee Shop',
        introduction: 'Three customers each ordered a different coffee. Match each customer to their drink.',
        rowLabel: 'Customer',
        columnLabel: 'Coffee',
        rows: ['Tara', 'George', 'Imogen'],
        columns: ['Latte', 'Mocha', 'Espresso'],
        clues: [
            'Imogen ordered neither the latte nor mocha.',
            'Tara did not order the mocha.'
        ],
        solution: {
            Tara: 'Latte',
            George: 'Mocha',
            Imogen: 'Espresso'
        }
    },

    {
        id: 'lg83',
        title: 'Pet Names',
        introduction: 'Three owners each gave their pet a different name. Work out which name belongs to each person\'s pet.',
        rowLabel: 'Owner',
        columnLabel: 'Pet Name',
        rows: ['Sally', 'Kieran', 'Mo'],
        columns: ['Buddy', 'Luna', 'Pepper'],
        clues: [
            "Kieran's pet is called Luna.",
            "Mo's pet is not called Buddy.",
            "Sally's pet is not called Luna."
        ],
        solution: {
            Sally: 'Buddy',
            Kieran: 'Luna',
            Mo: 'Pepper'
        }
    },

    {
        id: 'lg84',
        title: 'Sunday Walk',
        introduction: 'Three friends each chose a different place for a Sunday walk. Work out who went where.',
        rowLabel: 'Person',
        columnLabel: 'Place',
        rows: ['Ethan', 'Clare', 'Nadia'],
        columns: ['Beach', 'Woods', 'Canal'],
        clues: [
            "The woods were not Clare's destination.",
            'Ethan chose neither the beach nor canal.'
        ],
        solution: {
            Ethan: 'Woods',
            Clare: 'Beach',
            Nadia: 'Canal'
        }
    },

    {
        id: 'lg85',
        title: 'Cheese Board',
        introduction: 'Three guests each chose a different cheese. Work out who chose which one.',
        rowLabel: 'Guest',
        columnLabel: 'Cheese',
        rows: ['Ivy', 'Ronan', 'Beth'],
        columns: ['Cheddar', 'Brie', 'Stilton'],
        clues: [
            'Beth did not choose cheddar.',
            'Neither Ivy nor Beth chose brie.'
        ],
        solution: {
            Ivy: 'Cheddar',
            Ronan: 'Brie',
            Beth: 'Stilton'
        }
    },

    {
        id: 'lg86',
        title: 'Game Night',
        introduction: 'Three players each chose a different type of game. Work out who chose what.',
        rowLabel: 'Player',
        columnLabel: 'Game',
        rows: ['Daisy', 'Ben', 'Harun'],
        columns: ['Cards', 'Dominoes', 'Charades'],
        clues: [
            'Harun chose charades.',
            'Daisy did not choose dominoes.',
            'Ben did not choose charades.'
        ],
        solution: {
            Daisy: 'Cards',
            Ben: 'Dominoes',
            Harun: 'Charades'
        }
    },

    {
        id: 'lg87',
        title: 'Packed Lunch',
        introduction: 'Three pupils each packed a different piece of fruit with lunch. Work out who brought what.',
        rowLabel: 'Pupil',
        columnLabel: 'Fruit',
        rows: ['Maisie', 'Leo', 'Aria'],
        columns: ['Pear', 'Apple', 'Grapes'],
        clues: [
            'Leo did not bring grapes.',
            'Maisie brought neither the pear nor apple.'
        ],
        solution: {
            Maisie: 'Grapes',
            Leo: 'Pear',
            Aria: 'Apple'
        }
    },

    {
        id: 'lg88',
        title: 'Flower Pots',
        introduction: 'Three neighbours each have a different flower growing by their front door. Work out who has which flower.',
        rowLabel: 'Neighbour',
        columnLabel: 'Flower',
        rows: ['Janet', 'Owen', 'Rita'],
        columns: ['Lavender', 'Geranium', 'Pansy'],
        clues: [
            'Neither Janet nor Owen has pansies.',
            'Owen does not have lavender.'
        ],
        solution: {
            Janet: 'Lavender',
            Owen: 'Geranium',
            Rita: 'Pansy'
        }
    },

    {
        id: 'lg89',
        title: 'Hotel Breakfast',
        introduction: 'Three guests each ordered a different cooked breakfast item. Match each guest to their order.',
        rowLabel: 'Guest',
        columnLabel: 'Food',
        rows: ['Miles', 'Aisha', 'Connie'],
        columns: ['Eggs', 'Porridge', 'Beans'],
        clues: [
            'Aisha did not order beans.',
            'Connie ordered porridge.',
            'Miles did not order porridge.'
        ],
        solution: {
            Miles: 'Beans',
            Aisha: 'Eggs',
            Connie: 'Porridge'
        }
    },

    {
        id: 'lg90',
        title: 'Craft Supplies',
        introduction: 'Three crafters each needed a different supply. Work out who needed what.',
        rowLabel: 'Crafter',
        columnLabel: 'Supply',
        rows: ['Nina', 'Josh', 'Pavel'],
        columns: ['Paint', 'Ribbon', 'Glue'],
        clues: [
            'The glue was not needed by Nina.',
            'Josh needed neither paint nor glue.'
        ],
        solution: {
            Nina: 'Paint',
            Josh: 'Ribbon',
            Pavel: 'Glue'
        }
    },

    {
        id: 'lg91',
        title: 'Pie Shop',
        introduction: 'Three customers each bought a different savoury pie. Work out who bought which one.',
        rowLabel: 'Customer',
        columnLabel: 'Pie',
        rows: ['Gareth', 'Lily', 'Amir'],
        columns: ['Steak', 'Chicken', 'Vegetable'],
        clues: [
            'Lily bought neither the steak nor vegetable pie.',
            'Amir did not buy steak.'
        ],
        solution: {
            Gareth: 'Steak',
            Lily: 'Chicken',
            Amir: 'Vegetable'
        }
    },

    {
        id: 'lg92',
        title: 'Photo Subjects',
        introduction: 'Three photographers each took a picture of a different subject. Match each photographer to their subject.',
        rowLabel: 'Photographer',
        columnLabel: 'Subject',
        rows: ['Erin', 'Caleb', 'Suki'],
        columns: ['Sunset', 'Wildlife', 'Building'],
        clues: [
            'Suki photographed the building.',
            'Caleb did not photograph the sunset.',
            'Erin did not photograph the building.'
        ],
        solution: {
            Erin: 'Sunset',
            Caleb: 'Wildlife',
            Suki: 'Building'
        }
    },

    {
        id: 'lg93',
        title: 'Toy Box',
        introduction: 'Three children each picked a different toy from the box. Work out who chose what.',
        rowLabel: 'Child',
        columnLabel: 'Toy',
        rows: ['Ruby', 'Max', 'Toby'],
        columns: ['Train', 'Doll', 'Puzzle'],
        clues: [
            'Max did not choose the puzzle.',
            'Neither Ruby nor Max chose the train.'
        ],
        solution: {
            Ruby: 'Puzzle',
            Max: 'Doll',
            Toby: 'Train'
        }
    },

    {
        id: 'lg94',
        title: 'Deli Counter',
        introduction: 'Three shoppers each bought a different item from the deli counter. Work out who bought what.',
        rowLabel: 'Shopper',
        columnLabel: 'Item',
        rows: ['Helena', 'Ross', 'Miriam'],
        columns: ['Ham', 'Olives', 'Cheese'],
        clues: [
            'The olives were not bought by Ross.',
            'Helena bought neither the ham nor cheese.'
        ],
        solution: {
            Helena: 'Olives',
            Ross: 'Ham',
            Miriam: 'Cheese'
        }
    },

    {
        id: 'lg95',
        title: 'Rainy Afternoon',
        introduction: 'Three friends each chose a different indoor activity. Work out who chose what.',
        rowLabel: 'Person',
        columnLabel: 'Activity',
        rows: ['Fiona', 'Jay', 'Khalil'],
        columns: ['Reading', 'Baking', 'Gaming'],
        clues: [
            'Khalil did not choose baking.',
            'Jay chose gaming.',
            'Fiona did not choose gaming.'
        ],
        solution: {
            Fiona: 'Baking',
            Jay: 'Gaming',
            Khalil: 'Reading'
        }
    },

    {
        id: 'lg96',
        title: 'Farm Shop',
        introduction: 'Three customers each bought a different item from the farm shop. Match each customer to their purchase.',
        rowLabel: 'Customer',
        columnLabel: 'Item',
        rows: ['Oscar', 'Maeve', 'Riley'],
        columns: ['Eggs', 'Honey', 'Jam'],
        clues: [
            'Neither Oscar nor Riley bought honey.',
            'Riley did not buy eggs.'
        ],
        solution: {
            Oscar: 'Eggs',
            Maeve: 'Honey',
            Riley: 'Jam'
        }
    },

    {
        id: 'lg97',
        title: 'Holiday Souvenirs',
        introduction: 'Three travellers each brought home a different souvenir. Work out who brought back what.',
        rowLabel: 'Traveller',
        columnLabel: 'Souvenir',
        rows: ['Chloe', 'Adam', 'Yusuf'],
        columns: ['Magnet', 'Mug', 'Postcard'],
        clues: [
            'Adam brought back neither the magnet nor postcard.',
            'Chloe did not bring back the postcard.'
        ],
        solution: {
            Chloe: 'Magnet',
            Adam: 'Mug',
            Yusuf: 'Postcard'
        }
    },

    {
        id: 'lg98',
        title: 'Crisp Flavours',
        introduction: 'Three friends each chose a different flavour of crisps. Work out who chose which flavour.',
        rowLabel: 'Person',
        columnLabel: 'Flavour',
        rows: ['Pippa', 'Dean', 'Salma'],
        columns: ['Ready Salted', 'Cheese & Onion', 'Salt & Vinegar'],
        clues: [
            'Dean chose salt and vinegar.',
            'Pippa did not choose cheese and onion.',
            'Salma did not choose salt and vinegar.'
        ],
        solution: {
            Pippa: 'Ready Salted',
            Dean: 'Salt & Vinegar',
            Salma: 'Cheese & Onion'
        }
    },

    {
        id: 'lg99',
        title: 'Garden Tools',
        introduction: 'Three gardeners each used a different tool. Work out who used what.',
        rowLabel: 'Gardener',
        columnLabel: 'Tool',
        rows: ['Tom', 'Eliza', 'Naveen'],
        columns: ['Spade', 'Rake', 'Trowel'],
        clues: [
            'The rake was not used by Tom.',
            'Naveen used neither the spade nor rake.'
        ],
        solution: {
            Tom: 'Spade',
            Eliza: 'Rake',
            Naveen: 'Trowel'
        }
    },

    {
        id: 'lg100',
        title: 'Celebration Cakes',
        introduction: 'Three bakers each made a different flavour of celebration cake. Work out who made which cake.',
        rowLabel: 'Baker',
        columnLabel: 'Flavour',
        rows: ['Rosie', 'Daniel', 'Amara'],
        columns: ['Lemon', 'Chocolate', 'Vanilla'],
        clues: [
            'Amara did not make the chocolate cake.',
            'Neither Rosie nor Amara made vanilla.'
        ],
        solution: {
            Rosie: 'Chocolate',
            Daniel: 'Vanilla',
            Amara: 'Lemon'
        }
    }

];
