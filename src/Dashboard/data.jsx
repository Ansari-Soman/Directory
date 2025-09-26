
import photo from "./../Images/photo.png"
import { Home, ShoppingBag, Utensils, Hospital, School, Dumbbell, Theater, Plane, Heart, Car } from "lucide-react";


// Gemini City
export const cities = [
    {
        name: "Bhiwandi",
        area: [
            {
                name: "Gaibi Nagar",
                subArea: ["Gulzar Nagar", "Sai Nagar", "Kacheri Pada"],
                road: {
                    name: "Maulana Azaad Road",
                    subRoads: ["Noorani Masjid Road", "Anand Talkies Road", "Pipeline Road"]
                }
            },
            {
                name: "Nizampur",
                subArea: ["Idgah Road", "Chhatrapati Chowk"],
                road: {
                    name: "Thane Road",
                    subRoads: ["Vada Pav Galli", "Market Road"]
                }
            }
        ],
        businesses: ["Noble Supermarket", "Noorani Electronics", "Minara Restaurant", "Royal Sweets"]
    },
    {
        name: "Mumbai",
        area: [
            {
                name: "Dadar",
                subArea: ["Shivaji Park", "Kabutar Khana"],
                road: {
                    name: "Senapati Bapat Road",
                    subRoads: ["Ranade Road", "Tilak Road", "Gokhale Road"]
                }
            },
            {
                name: "Andheri",
                subArea: ["Versova", "Lokhandwala", "Juhu"],
                road: {
                    name: "Link Road",
                    subRoads: ["SV Road", "Yari Road"]
                }
            },
            {
                name: "Bandra",
                subArea: ["Pali Hill", "Chapel Road"],
                road: {
                    name: "Hill Road",
                    subRoads: ["Linking Road", "Carter Road"]
                }
            }
        ],
        businesses: ["A1 Bakery", "Bombay Biryani", "Fashion Street", "Elite Books"]
    },
    {
        name: "Pune",
        area: [
            {
                name: "Kothrud",
                subArea: ["Paud Road", "Karve Nagar"],
                road: {
                    name: "FC Road",
                    subRoads: ["JM Road", "Law College Road", "Deccan Road"]
                }
            },
            {
                name: "Hadapsar",
                subArea: ["Magarpatta City", "Amanora Park Town"],
                road: {
                    name: "Pune-Solapur Road",
                    subRoads: ["Saswad Road", "Service Road"]
                }
            }
        ],
        businesses: ["Vaishali Cafe", "Goodluck Restaurant", "Kaka Halwai", "Modern Photo Studio"]
    },
    {
        name: "Delhi",
        area: [
            {
                name: "Connaught Place",
                subArea: ["Outer Circle", "Inner Circle", "Radial Road"],
                road: {
                    name: "Janpath Road",
                    subRoads: ["KG Marg", "Barakhamba Road", "Sansad Marg"]
                }
            },
            {
                name: "Saket",
                subArea: ["Malviya Nagar", "Pushp Vihar"],
                road: {
                    name: "Press Enclave Road",
                    subRoads: ["Mehrauli-Badarpur Road", "Garden of Five Senses Road"]
                }
            }
        ],
        businesses: ["Haldiram’s", "Saravana Bhavan", "Khan Market Books", "Delhi Art Gallery"]
    },
    {
        name: "Bengaluru",
        area: [
            {
                name: "Koramangala",
                subArea: ["Ejipura", "Indiranagar 1st Stage"],
                road: {
                    name: "100 Feet Road",
                    subRoads: ["Sarjapur Road", "80 Feet Road"]
                }
            },
            {
                name: "Whitefield",
                subArea: ["Kadugodi", "Varthur"],
                road: {
                    name: "ITPL Road",
                    subRoads: ["Whitefield Main Road", "Graphite India Road"]
                }
            }
        ],
        businesses: ["Empire Restaurant", "Third Wave Coffee", "Orion Mall", "Phoenix Marketcity"]
    },
    {
        name: "Chennai",
        area: [
            {
                name: "Anna Nagar",
                subArea: ["Thirumangalam", "Mogappair"],
                road: {
                    name: "2nd Avenue",
                    subRoads: ["Shanti Colony Main Road", "Ambattur Road"]
                }
            },
            {
                name: "T. Nagar",
                subArea: ["Mambalam", "Kodambakkam"],
                road: {
                    name: "Usman Road",
                    subRoads: ["Ranganathan Street", "North Usman Road"]
                }
            }
        ],
        businesses: ["Saravana Stores", "Pothy's", "GRT Jewellers", "Sangeetha Veg Restaurant"]
    },
    {
        name: "Hyderabad",
        area: [
            {
                name: "Gachibowli",
                subArea: ["Kondapur", "Nanakramguda"],
                road: {
                    name: "Old Mumbai Road",
                    subRoads: ["Financial District Road", "Botanical Garden Road"]
                }
            },
            {
                name: "Banjara Hills",
                subArea: ["Jubilee Hills", "Khairtabad"],
                road: {
                    name: "Road No. 1",
                    subRoads: ["Road No. 12", "MLA Colony Road"]
                }
            }
        ],
        businesses: ["Paradise Biryani", "Pista House", "City Centre Mall", "Shopper Stop"]
    },
    {
        name: "Kolkata",
        area: [
            {
                name: "Park Street",
                subArea: ["Free School Street", "Middleton Row"],
                road: {
                    name: "Chowringhee Road",
                    subRoads: ["Sudder Street", "Theatre Road"]
                }
            },
            {
                name: "Salt Lake City",
                subArea: ["Sector V", "New Town"],
                road: {
                    name: "EM Bypass",
                    subRoads: ["Salt Lake Bypass", "Ring Road"]
                }
            }
        ],
        businesses: ["Flury's", "Peter Cat", "Quest Mall", "Starmark Bookstore"]
    },
    {
        name: "Ahmedabad",
        area: [
            {
                name: "Satellite",
                subArea: ["Prahladnagar", "Vastrapur"],
                road: {
                    name: "SG Highway",
                    subRoads: ["132 Feet Ring Road", "Drive-in Road"]
                }
            },
            {
                name: "Navrangpura",
                subArea: ["Usmanpura", "Paldi"],
                road: {
                    name: "CG Road",
                    subRoads: ["Ashram Road", "Stadium Road"]
                }
            }
        ],
        businesses: ["Agashiye", "Manekchowk Food Street", "AlphaOne Mall", "Vijay Sales"]
    },
    {
        name: "Jaipur",
        area: [
            {
                name: "Malviya Nagar",
                subArea: ["JLN Marg", "Durgapura"],
                road: {
                    name: "Gopalpura Bypass",
                    subRoads: ["Tonk Road", "Airport Road"]
                }
            },
            {
                name: "C-Scheme",
                subArea: ["Civil Lines", "Bani Park"],
                road: {
                    name: "Bhagwan Das Road",
                    subRoads: ["Ashok Marg", "Church Road"]
                }
            }
        ],
        businesses: ["Lassiwala", "Rawat Misthan Bhandar", "World Trade Park", "Johari Bazaar"]
    },
    {
        name: "Surat",
        area: [
            {
                name: "Adajan",
                subArea: ["Pal", "Rander"],
                road: {
                    name: "TP Scheme Road",
                    subRoads: ["Ring Road", "Ambika Niketan Road"]
                }
            },
            {
                name: "Piplod",
                subArea: ["Vesu", "Dumas"],
                road: {
                    name: "VR Mall Road",
                    subRoads: ["Airport Road", "University Road"]
                }
            }
        ],
        businesses: ["Bombay Bakery", "J.P. Chenoy", "VR Surat", "Textile Market"]
    },
    {
        name: "Lucknow",
        area: [
            {
                name: "Hazratganj",
                subArea: ["Aminabad", "Indira Nagar"],
                road: {
                    name: "MG Marg",
                    subRoads: ["Vidhan Sabha Marg", "Sikandar Bagh Road"]
                }
            },
            {
                name: "Gomti Nagar",
                subArea: ["Vibhuti Khand", "Janakipuram"],
                road: {
                    name: "Shaheed Path",
                    subRoads: ["Faizabad Road", "Amar Shaheed Path"]
                }
            }
        ],
        businesses: ["Tunday Kababi", "Hazratganj Market", "Phoenix Palassio", "Universal Books"]
    },
    {
        name: "Chandigarh",
        area: [
            {
                name: "Sector 17",
                subArea: ["Sector 22", "Sector 35"],
                road: {
                    name: "Madhya Marg",
                    subRoads: ["Jan Marg", "Himalaya Marg"]
                }
            },
            {
                name: "Mohali",
                subArea: ["Phase 7", "Phase 11"],
                road: {
                    name: "Airport Road",
                    subRoads: ["National Highway 5", "Industrial Area Road"]
                }
            }
        ],
        businesses: ["Sector 17 Plaza", "Elante Mall", "Dada Junglee Jalebi", "Nik Bakers"]
    },
    {
        name: "Goa",
        area: [
            {
                name: "Panjim",
                subArea: ["Fontainhas", "Miramar"],
                road: {
                    name: "18th June Road",
                    subRoads: ["Dr. Dada Vaidya Road", "M.G. Road"]
                }
            },
            {
                name: "Calangute",
                subArea: ["Baga", "Candolim"],
                road: {
                    name: "Calangute-Baga Road",
                    subRoads: ["Tito's Lane", "Beach Road"]
                }
            }
        ],
        businesses: ["Souza Lobo", "Britto's", "Anjuna Flea Market", "Goa Fish Thali"]
    },
    {
        name: "Nagpur",
        area: [
            {
                name: "Dharampeth",
                subArea: ["Ramdaspeth", "Civil Lines"],
                road: {
                    name: "W.H.C. Road",
                    subRoads: ["North Ambazari Road", "Medical College Road"]
                }
            },
            {
                name: "Sitabuldi",
                subArea: ["Mahal", "Gandhibagh"],
                road: {
                    name: "Main Road",
                    subRoads: ["Central Avenue Road", "Ambedkar Road"]
                }
            }
        ],
        businesses: ["Haldiram's", "Saoji Restaurant", "Eternity Mall", "Sitabuldi Market"]
    },
    {
        name: "Indore",
        area: [
            {
                name: "Palasia",
                subArea: ["New Palasia", "Old Palasia"],
                road: {
                    name: "AB Road",
                    subRoads: ["Race Course Road", "Manorama Ganj Road"]
                }
            },
            {
                name: "Sarafa Bazaar",
                subArea: ["Chappan Dukan"],
                road: {
                    name: "Rajwada Road",
                    subRoads: ["Maharani Road", "Jail Road"]
                }
            }
        ],
        businesses: ["Johny Hot Dog", "Vijay Chaat House", "Sarafa Night Market", "Treasure Island Mall"]
    },
    {
        name: "Bhopal",
        area: [
            {
                name: "Arera Colony",
                subArea: ["Shahpura", "Bawaria Kalan"],
                road: {
                    name: "Hoshangabad Road",
                    subRoads: ["Shahpura Road", "Misrod Road"]
                }
            },
            {
                name: "MP Nagar",
                subArea: ["Zone-I", "Zone-II"],
                road: {
                    name: "Jyoti Talkies Road",
                    subRoads: ["Board Office Road", "Link Road No. 1"]
                }
            }
        ],
        businesses: ["Manohar Dairy and Restaurant", "DB Mall", "Sagar Gaire Fast Food", "New Market"]
    },
    {
        name: "Patna",
        area: [
            {
                name: "Fraser Road",
                subArea: ["Exhibition Road", "Dak Bunglow Road"],
                road: {
                    name: "Gandhi Maidan Road",
                    subRoads: ["Station Road", "Bailey Road"]
                }
            },
            {
                name: "Kankarbagh",
                subArea: ["Rajendra Nagar", "Lohianagar"],
                road: {
                    name: "Main Road",
                    subRoads: ["Bypass Road", "Pani Tanki Road"]
                }
            }
        ],
        businesses: ["Maurya Lok Complex", "Pind Balluchi", "Patna Central", "Loyola High School"]
    },
    {
        name: "Ranchi",
        area: [
            {
                name: "Main Road",
                subArea: ["Lalpur", "Doranda"],
                road: {
                    name: "Ranchi Road",
                    subRoads: ["Albert Ekka Chowk", "Kutchery Road"]
                }
            },
            {
                name: "Harmu",
                subArea: ["Morabadi", "Hindpiri"],
                road: {
                    name: "Harmu Road",
                    subRoads: ["Ratu Road", "Bariatu Road"]
                }
            }
        ],
        businesses: ["Kaveri Restaurant", "Big Bazaar", "Nucleus Mall", "Ranchi Lake"]
    },
    {
        name: "Bhubaneswar",
        area: [
            {
                name: "Jayadev Vihar",
                subArea: ["Nayantapalli", "Sahid Nagar"],
                road: {
                    name: "NH 16",
                    subRoads: ["KIIT Road", "Infocity Road"]
                }
            },
            {
                name: "Khandagiri",
                subArea: ["Chandaka", "Baramunda"],
                road: {
                    name: "National Highway 5",
                    subRoads: ["Jagannath Prasad Road", "Patrapada Road"]
                }
            }
        ],
        businesses: ["Dalma Restaurant", "Odisha Modern Art Gallery", "Esplanade Mall", "Kalinga Hospital"]
    },
    {
        name: "Guwahati",
        area: [
            {
                name: "Fancy Bazaar",
                subArea: ["Paltan Bazaar", "Latasil"],
                road: {
                    name: "MG Road",
                    subRoads: ["AT Road", "HB Road"]
                }
            },
            {
                name: "Zoo Road",
                subArea: ["Chandmari", "Geetanagar"],
                road: {
                    name: "RG Baruah Road",
                    subRoads: ["Nalapara Road", "Namghar Path"]
                }
            }
        ],
        businesses: ["Reboti Chat House", "Pantaloons", "City Centre Mall", "Assam State Museum"]
    },
    {
        name: "Shillong",
        area: [
            {
                name: "Police Bazaar",
                subArea: ["Laitumkhrah", "Mawlai"],
                road: {
                    name: "GS Road",
                    subRoads: ["Jail Road", "Wards Lake Road"]
                }
            }
        ],
        businesses: ["Cafe Shillong", "Lewduh Market", "Highlander's Food", "Shillong Times"]
    },
    {
        name: "Agartala",
        area: [
            {
                name: "Battala",
                subArea: ["Lichu Bagan", "Krishna Nagar"],
                road: {
                    name: "Paradise Chowmuhani Road",
                    subRoads: ["Akhaura Road", "Colonel Chowmuhani Road"]
                }
            }
        ],
        businesses: ["Hotel Sonali", "Big Bazar", "Geddu Mia Sweet Shop", "Tripura University"]
    },
    {
        name: "Imphal",
        area: [
            {
                name: "Thangal Bazaar",
                subArea: ["Paona Bazaar", "Sagolband"],
                road: {
                    name: "NH 2",
                    subRoads: ["Airport Road", "Khuman Lampak Road"]
                }
            }
        ],
        businesses: ["Ema Keithel", "Classic Hotel", "Manipur State Museum", "Imphal Market"]
    },
    {
        name: "Aizawl",
        area: [
            {
                name: "Zarkawt",
                subArea: ["Chanmari", "Mission Veng"],
                road: {
                    name: "Main Road",
                    subRoads: ["MG Road", "Electric Veng Road"]
                }
            }
        ],
        businesses: ["Millennium Centre", "Solomon's Cave", "Aizawl Market", "Falkland Restaurant"]
    },
    {
        name: "Kohima",
        area: [
            {
                name: "Bazaar",
                subArea: ["PR Hill", "Midland"],
                road: {
                    name: "NH 29",
                    subRoads: ["Kohima War Cemetery Road", "PWD Road"]
                }
            }
        ],
        businesses: ["Hornbill Festival Ground", "Big Bazaar", "Fusion Cafe", "Kohima Museum"]
    },
    {
        name: "Itanagar",
        area: [
            {
                name: "Bank Tinali",
                subArea: ["Naharlagun", "Nirjuli"],
                road: {
                    name: "NH 415",
                    subRoads: ["C-Sector Road", "Zero Point Road"]
                }
            }
        ],
        businesses: ["Ganga Lake", "Itanagar Zoo", "Polo Park", "Arunachal Museum"]
    },
    {
        name: "Gangtok",
        area: [
            {
                name: "MG Marg",
                subArea: ["Tibet Road", "Deorali"],
                road: {
                    name: "National Highway 10",
                    subRoads: ["Lall Bazaar Road", "Development Area Road"]
                }
            }
        ],
        businesses: ["MG Marg Market", "Baker's Cafe", "Hotel Sonam Delek", "Namgyal Institute"]
    },
    {
        name: "Dibrugarh",
        area: [
            {
                name: "New Market",
                subArea: ["Chowkidinghee", "Khalihamari"],
                road: {
                    name: "NH 37",
                    subRoads: ["RKB Path", "Amolapatty Road"]
                }
            }
        ],
        businesses: ["K.C. Sen Road Market", "Cafe Coffee Day", "Junction Mall", "Dibrugarh University"]
    },
    {
        name: "Siliguri",
        area: [
            {
                name: "Sevoke Road",
                subArea: ["Pradhan Nagar", "Hashmi Chowk"],
                road: {
                    name: "Hill Cart Road",
                    subRoads: ["Bidhan Road", "Hospital Road"]
                }
            }
        ],
        businesses: ["Hong Kong Market", "City Centre Siliguri", "Momo Gali", "Salugara Monastery"]
    },
    {
        name: "Darjeeling",
        area: [
            {
                name: "Mall Road",
                subArea: ["Chowrasta", "Gandhi Road"],
                road: {
                    name: "Nehru Road",
                    subRoads: ["Rockville Road", "CR Das Road"]
                }
            }
        ],
        businesses: ["Glenary's", "Keventer's", "Mall Market", "Happy Valley Tea Estate"]
    },
    {
        name: "Varanasi",
        area: [
            {
                name: "Lanka",
                subArea: ["Assi Ghat", "Durgakund"],
                road: {
                    name: "BHU Road",
                    subRoads: ["Luxa Road", "Malviya Road"]
                }
            },
            {
                name: "Sigra",
                subArea: ["Mahmoorganj", "Rath Yatra"],
                road: {
                    name: "Cantt Road",
                    subRoads: ["Lahartara Road", "Shivpur Bypass"]
                }
            }
        ],
        businesses: ["Kashi Vishwanath Temple", "Pizzeria Vaatika Cafe", "JHV Mall", "Banaras Silk Emporium"]
    },
    {
        name: "Allahabad",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Tagore Town", "George Town"],
                road: {
                    name: "MG Marg",
                    subRoads: ["University Road", "High Court Road"]
                }
            },
            {
                name: "Chowk",
                subArea: ["Kareli", "Naini"],
                road: {
                    name: "Leader Road",
                    subRoads: ["Katra Road", "Zero Road"]
                }
            }
        ],
        businesses: ["Netram Moolchand & Sons", "Khusro Bagh", "Prayagraj Museum", "Holy Family Hospital"]
    },
    {
        name: "Kanpur",
        area: [
            {
                name: "Mall Road",
                subArea: ["Civil Lines", "Swaroop Nagar"],
                road: {
                    name: "Birhana Road",
                    subRoads: ["Khalasi Line Road", "Parade Road"]
                }
            },
            {
                name: "Kakadeo",
                subArea: ["Pandu Nagar", "Govind Nagar"],
                road: {
                    name: "GT Road",
                    subRoads: ["Rawatpur Road", "IIT Road"]
                }
            }
        ],
        businesses: ["Thaggu Ke Laddu", "Z Square Mall", "Phool Bagh", "Kanpur Zoological Park"]
    },
    {
        name: "Agra",
        area: [
            {
                name: "Fatehabad Road",
                subArea: ["Tajganj", "Sikandra"],
                road: {
                    name: "NH 19",
                    subRoads: ["Ring Road", "Yamuna Expressway"]
                }
            },
            {
                name: "Sadar Bazaar",
                subArea: ["Raja Ki Mandi"],
                road: {
                    name: "MG Road",
                    subRoads: ["Taj Road", "Naulakha Road"]
                }
            }
        ],
        businesses: ["Panchhi Petha", "Mama Chicken Mama Franky", "TDI Mall", "Agra Fort"]
    },
    {
        name: "Meerut",
        area: [
            {
                name: "Cantt",
                subArea: ["Civil Lines", "Gandhi Bagh"],
                road: {
                    name: "Mall Road",
                    subRoads: ["Delhi Road", "Garh Road"]
                }
            },
            {
                name: "Modipuram",
                subArea: ["Pallavpuram"],
                road: {
                    name: "NH 58",
                    subRoads: ["Roorkee Road", "Shatabdi Nagar Road"]
                }
            }
        ],
        businesses: ["Bravura Gold Resort", "Abu Lane Market", "The Grand Venus", "Surajkund Park"]
    },
    {
        name: "Dehradun",
        area: [
            {
                name: "Rajpur Road",
                subArea: ["Astley Hall", "Clock Tower"],
                road: {
                    name: "Paltan Bazaar Road",
                    subRoads: ["Gandhi Road", "Chakrata Road"]
                }
            },
            {
                name: "Clement Town",
                subArea: ["Prem Nagar"],
                road: {
                    name: "NH 7",
                    subRoads: ["Haridwar Road", "Saharanpur Road"]
                }
            }
        ],
        businesses: ["Pacific Mall", "Cheta Ram Sweets", "Robber's Cave", "Forest Research Institute"]
    },
    {
        name: "Haridwar",
        area: [
            {
                name: "Har Ki Pauri",
                subArea: ["Moti Bazaar", "Bhimagoda"],
                road: {
                    name: "Upper Road",
                    subRoads: ["Vishnu Ghat Road", "Railway Road"]
                }
            }
        ],
        businesses: ["Ganga Aarti", "Chotiwala Restaurant", "Haridwar Market", "Mansa Devi Temple"]
    },
    {
        name: "Rishikesh",
        area: [
            {
                name: "Laxman Jhula",
                subArea: ["Ram Jhula", "Tapovan"],
                road: {
                    name: "Badrinath Road",
                    subRoads: ["Neelkanth Road", "Swargashram Road"]
                }
            }
        ],
        businesses: ["Chotiwala Restaurant", "German Bakery", "Beatles Ashram", "Ganga Beach"]
    },
    {
        name: "Nainital",
        area: [
            {
                name: "Mall Road",
                subArea: ["Tallital", "Mallital"],
                road: {
                    name: "Naini Lake Road",
                    subRoads: ["Thandi Road", "Bara Bazaar Road"]
                }
            }
        ],
        businesses: ["Sher-e-Punjab", "Boat House Club", "Naina Devi Temple", "The Mall"]
    },
    {
        name: "Shimla",
        area: [
            {
                name: "Mall Road",
                subArea: ["The Ridge", "Lakka Bazaar"],
                road: {
                    name: "Cart Road",
                    subRoads: ["Circular Road", "Lower Bazaar Road"]
                }
            }
        ],
        businesses: ["Indian Coffee House", "Combermere", "Scandal Point", "Christ Church"]
    },
    {
        name: "Manali",
        area: [
            {
                name: "Old Manali",
                subArea: ["Vashisht", "Naggar"],
                road: {
                    name: "Manali-Leh Highway",
                    subRoads: ["Hadimba Temple Road", "Club House Road"]
                }
            }
        ],
        businesses: ["German Bakery", "Lazy Dog Cafe", "Mall Road Market", "Solang Valley"]
    },
    {
        name: "Amritsar",
        area: [
            {
                name: "Hall Bazaar",
                subArea: ["Katara Ahluwalia", "Lohgarh"],
                road: {
                    name: "Golden Temple Road",
                    subRoads: ["Lawrence Road", "Ranjit Avenue"]
                }
            }
        ],
        businesses: ["Bharawan Da Dhaba", "Kesar Da Dhaba", "Golden Temple", "Jallianwala Bagh"]
    },
    {
        name: "Ludhiana",
        area: [
            {
                name: "Sarabha Nagar",
                subArea: ["Model Town", "Civil Lines"],
                road: {
                    name: "Ferozepur Road",
                    subRoads: ["Pakhowal Road", "Malhar Road"]
                }
            }
        ],
        businesses: ["Bikaner Sweets", "Flamez Mall", "Grand Walk Mall", "Punjab Agricultural University"]
    },
    {
        name: "Jalandhar",
        area: [
            {
                name: "Model Town",
                subArea: ["Urban Estate", "GT Road"],
                road: {
                    name: "NH 44",
                    subRoads: ["Nakodar Road", "Hoshiarpur Road"]
                }
            }
        ],
        businesses: ["Haveli Restaurant", "Viva Collage Mall", "Lovely Professional University", "Devi Talab Mandir"]
    },
    {
        name: "Bikaner",
        area: [
            {
                name: "Station Road",
                subArea: ["Kote Gate", "Junagarh Fort"],
                road: {
                    name: "Road No. 1",
                    subRoads: ["Public Park Road", "Ganga Singh Marg"]
                }
            }
        ],
        businesses: ["Laxmi Niwas Palace", "Chotu Motu Joshi Sweet Shop", "Junagarh Fort", "Karni Mata Temple"]
    },
    {
        name: "Jodhpur",
        area: [
            {
                name: "Sardarpura",
                subArea: ["Ratanada", "Chopasni Road"],
                road: {
                    name: "Clock Tower Road",
                    subRoads: ["NH 62", "Old City Road"]
                }
            }
        ],
        businesses: ["Mehrangarh Fort", "Om Banna Temple", "Clock Tower Market", "Indique Restaurant"]
    },
    {
        name: "Udaipur",
        area: [
            {
                name: "Fateh Sagar Lake",
                subArea: ["Pichola Lake", "Hiran Magri"],
                road: {
                    name: "Lake Palace Road",
                    subRoads: ["Rani Road", "Old City Road"]
                }
            }
        ],
        businesses: ["City Palace", "Jag Mandir", "Ambrai Restaurant", "Jagdish Temple"]
    },
    {
        name: "Kota",
        area: [
            {
                name: "Talwandi",
                subArea: ["Kunhadi", "Jawahar Nagar"],
                road: {
                    name: "Dadabari Road",
                    subRoads: ["Allen Road", "Vigyan Nagar Road"]
                }
            }
        ],
        businesses: ["Kota Coaching", "Seven Wonders Park", "City Mall", "Garadia Mahadev Temple"]
    },
    {
        name: "Ajmer",
        area: [
            {
                name: "Dargah Sharif",
                subArea: ["Ana Sagar Lake", "Pushkar Road"],
                road: {
                    name: "Naya Bazaar Road",
                    subRoads: ["Station Road", "Diggi Bazaar Road"]
                }
            }
        ],
        businesses: ["Ajmer Sharif Dargah", "Ambrosia Restaurant", "Pushkar Lake", "Soni Ji Ki Nasiyan"]
    },
    {
        name: "Ambala",
        area: [
            {
                name: "Cantt",
                subArea: ["Sadar Bazaar", "Ambala City"],
                road: {
                    name: "NH 44",
                    subRoads: ["Ambala-Chandigarh Highway", "Mahesh Nagar Road"]
                }
            }
        ],
        businesses: ["Kingfisher Bar", "Puran Singh Ka Dhaba", "Galaxy Mall", "Ranjit Avenue"]
    },
    {
        name: "Panipat",
        area: [
            {
                name: "GT Road",
                subArea: ["Model Town", "Sector 11"],
                road: {
                    name: "NH 44",
                    subRoads: ["Assandh Road", "Sanoli Road"]
                }
            }
        ],
        businesses: ["Panipat Battleground", "Fun City Mall", "Grand Trunk Restaurant", "Kabuli Bagh Mosque"]
    },
    {
        name: "Hisar",
        area: [
            {
                name: "Camp",
                subArea: ["Civil Lines", "Model Town"],
                road: {
                    name: "Delhi Road",
                    subRoads: ["Rajgarh Road", "Sirsa Road"]
                }
            }
        ],
        businesses: ["Agroha Dham", "Firoz Shah Palace Complex", "Urban Square Mall", "Omaxe City"]
    },
    {
        name: "Rohtak",
        area: [
            {
                name: "Delhi Road",
                subArea: ["Civil Lines", "Model Town"],
                road: {
                    name: "NH 9",
                    subRoads: ["Jind Road", "Sonipat Road"]
                }
            }
        ],
        businesses: ["Tilyar Lake", "Maham Masjid", "Sheela Bypass", "Rohtak Central Park"]
    },
    {
        name: "Sonipat",
        area: [
            {
                name: "Model Town",
                subArea: ["Sector 14", "Rajeev Colony"],
                road: {
                    name: "NH 44",
                    subRoads: ["Rohtak Road", "Gohana Road"]
                }
            }
        ],
        businesses: ["Murthal Dhaba", "Tau Devi Lal Park", "Jat Bhavan", "BPS Mahila Vishwavidyalaya"]
    },
    {
        name: "Bhiwani",
        area: [
            {
                name: "Meham Gate",
                subArea: ["Bank Colony", "Housing Board"],
                road: {
                    name: "Rohtak Road",
                    subRoads: ["Dadri Road", "Tosham Road"]
                }
            }
        ],
        businesses: ["Bhiwani Boxing Club", "Star Dhaba", "Huda Market", "Krishna Colony"]
    },
    {
        name: "Rewari",
        area: [
            {
                name: "Circular Road",
                subArea: ["Model Town", "Sector 1"],
                road: {
                    name: "NH 48",
                    subRoads: ["Garhi Bolni Road", "Bawal Road"]
                }
            }
        ],
        businesses: ["Rewari Railway Heritage Museum", "Bawal Industrial Area", "Jain Sweets", "Brass Market"]
    },
    {
        name: "Gurugram",
        area: [
            {
                name: "Cyber Hub",
                subArea: ["DLF Phase 3", "Sector 29"],
                road: {
                    name: "NH 48",
                    subRoads: ["Golf Course Road", "Sohna Road"]
                }
            },
            {
                name: "Sector 54",
                subArea: ["Sector 55", "Sector 56"],
                road: {
                    name: "Golf Course Extension Road",
                    subRoads: ["Southern Peripheral Road", "Arjun Marg"]
                }
            }
        ],
        businesses: ["Cyber Hub Restaurants", "Ambience Mall", "Kingdom of Dreams", "Leisure Valley Park"]
    },
    {
        name: "Faridabad",
        area: [
            {
                name: "Sector 15",
                subArea: ["Sector 16", "Sector 21"],
                road: {
                    name: "Mathura Road",
                    subRoads: ["Badkal Road", "NH 44"]
                }
            },
            {
                name: "Neelam Bata Road",
                subArea: ["NIT", "Mujesar"],
                road: {
                    name: "Old Faridabad Road",
                    subRoads: ["Ballabgarh Road", "Palwal Road"]
                }
            }
        ],
        businesses: ["Crown Plaza", "Sector 15 Market", "Surajkund Lake", "Town Park"]
    },
    {
        name: "Noida",
        area: [
            {
                name: "Sector 18",
                subArea: ["Sector 62", "Atta Market"],
                road: {
                    name: "Dadri Road",
                    subRoads: ["NH 24", "Ambedkar Marg"]
                }
            },
            {
                name: "Greater Noida",
                subArea: ["Pari Chowk", "Knowledge Park"],
                road: {
                    name: "Yamuna Expressway",
                    subRoads: ["Noida-Greater Noida Expressway", "Surajpur-Kasna Road"]
                }
            }
        ],
        businesses: ["DLF Mall of India", "Worlds of Wonder", "Sector 18 Market", "Botanical Garden"]
    },
    {
        name: "Ghaziabad",
        area: [
            {
                name: "Indirapuram",
                subArea: ["Vaishali", "Vasundhara"],
                road: {
                    name: "NH 24",
                    subRoads: ["Link Road", "Hindon Bypass"]
                }
            },
            {
                name: "Raj Nagar Extension",
                subArea: ["Chiranjiv Vihar", "Shastri Nagar"],
                road: {
                    name: "NH 58",
                    subRoads: ["Meerut Road", "Delhi-Meerut Expressway"]
                }
            }
        ],
        businesses: ["Shipra Mall", "Pacific Mall", "Swarn Jayanti Park", "Akshardham Temple"]
    },
    {
        name: "Aligarh",
        area: [
            {
                name: "Civil Lines",
                subArea: ["University Road", "Centre Point"],
                road: {
                    name: "GT Road",
                    subRoads: ["Ramghat Road", "Kanpur Road"]
                }
            }
        ],
        businesses: ["Aligarh Muslim University", "Dadi Ma Ki Rasoi", "Great Value Mall", "Aligarh Fort"]
    },
    {
        name: "Mathura",
        area: [
            {
                name: "Vrindavan",
                subArea: ["Banke Bihari Mandir", "Prem Mandir"],
                road: {
                    name: "NH 19",
                    subRoads: ["Mathura Bypass", "Agra Road"]
                }
            }
        ],
        businesses: ["Krishna Janmabhoomi", "Prem Mandir", "Brijwasi Mithai Wala", "Yamuna Ghat"]
    },
    {
        name: "Vrindavan",
        area: [
            {
                name: "Banke Bihari Colony",
                subArea: ["ISKCON Temple Area", "Radha Raman Temple"],
                road: {
                    name: "Parikrama Marg",
                    subRoads: ["Bhaktivedanta Swami Marg", "Chattikara Road"]
                }
            }
        ],
        businesses: ["Banke Bihari Temple", "ISKCON Vrindavan", "Govinda's Restaurant", "Prem Mandir"]
    },
    {
        name: "Bareilly",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Rajendra Nagar", "Stadium Road"],
                road: {
                    name: "DD Puram Road",
                    subRoads: ["Pilibhit Road", "Airport Road"]
                }
            }
        ],
        businesses: ["Phoenix United Mall", "Bareilly Haat", "Alakhnath Temple", "Sanjeevani Hospital"]
    },
    {
        name: "Moradabad",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Kanth Road", "Ram Ganga Vihar"],
                road: {
                    name: "Delhi Road",
                    subRoads: ["Sambhal Road", "Chandausi Road"]
                }
            }
        ],
        businesses: ["Brass City", "Wave Mall", "Sai Temple", "Moradabad Market"]
    },
    {
        name: "Saharanpur",
        area: [
            {
                name: "Gill Colony",
                subArea: ["Court Road", "Mission Compound"],
                road: {
                    name: "Ambala Road",
                    subRoads: ["Delhi Road", "Dehradun Road"]
                }
            }
        ],
        businesses: ["Shri Baba Laldas Ji Mandir", "Company Bagh", "Clock Tower", "Saharanpur Wood Carving"]
    },
    {
        name: "Haldwani",
        area: [
            {
                name: "Kaladhungi Road",
                subArea: ["Lal Kuan", "Kathgodam"],
                road: {
                    name: "NH 109",
                    subRoads: ["Bareilly Road", "Rampur Road"]
                }
            }
        ],
        businesses: ["Gaula Barrage", "Sheetla Devi Temple", "Walkway Mall", "Himalayan Botanics"]
    },
    {
        name: "Rampur",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Shahbad", "Dungarpur"],
                road: {
                    name: "Bareilly Road",
                    subRoads: ["Moradabad Road", "Swar Road"]
                }
            }
        ],
        businesses: ["Rampur Raza Library", "Kothi Khas Bagh", "Ambassador Hotel", "Jauhar University"]
    },
    {
        name: "Pilibhit",
        area: [
            {
                name: "Chowk",
                subArea: ["Station Road", "Tanda Road"],
                road: {
                    name: "Bareilly Road",
                    subRoads: ["Lakhimpur Road", "Shahjahanpur Road"]
                }
            }
        ],
        businesses: ["Pilibhit Tiger Reserve", "Gauri Shankar Temple", "Shah Ji Sweets", "Pilibhit Market"]
    },
    {
        name: "Shahjahanpur",
        area: [
            {
                name: "Katra",
                subArea: ["Chowk", "Town Hall"],
                road: {
                    name: "NH 24",
                    subRoads: ["Hardoi Road", "Palia Road"]
                }
            }
        ],
        businesses: ["Shahjahanpur Fort", "Gola Gokaran Nath", "Gandhi Stadium", "Shaheed Udyan"]
    },
    {
        name: "Hardoi",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Ashraf Tola", "Lucknow Road"],
                road: {
                    name: "Sitapur Road",
                    subRoads: ["Shahjahanpur Road", "Kannauj Road"]
                }
            }
        ],
        businesses: ["Hardoi Park", "Mangal Pandey Chowk", "Railway Station Market", "Shri Krishna Mandir"]
    },
    {
        name: "Sitapur",
        area: [
            {
                name: "Eye Hospital Road",
                subArea: ["Civil Lines", "Bus Stand"],
                road: {
                    name: "Lucknow Road",
                    subRoads: ["Hardoi Road", "Biswan Road"]
                }
            }
        ],
        businesses: ["Naimisharanya", "Chakra Tirth", "Sitapur Eye Hospital", "Maheshwari Devi Temple"]
    },
    {
        name: "Lakhimpur Kheri",
        area: [
            {
                name: "Dahwa",
                subArea: ["Gola Gokarannath", "Palia Kalan"],
                road: {
                    name: "NH 730",
                    subRoads: ["Pilibhit Road", "Hardoi Road"]
                }
            }
        ],
        businesses: ["Dudhwa National Park", "Kheri Town", "Guru Nanak Dev Market", "Lal Bahadur Shastri Park"]
    },
    {
        name: "Bahraich",
        area: [
            {
                name: "Ghasiyari Mandi",
                subArea: ["Dargah Sharif", "Malkauli"],
                road: {
                    name: "Nanpara Road",
                    subRoads: ["Sitapur Road", "Lucknow Road"]
                }
            }
        ],
        businesses: ["Dargah Shareef", "Chittaura Lake", "Kali Mandir", "Bahraich City"]
    },
    {
        name: "Gonda",
        area: [
            {
                name: "Maharajganj",
                subArea: ["Civil Lines", "Bus Stand"],
                road: {
                    name: "Ayodhya Road",
                    subRoads: ["Faizabad Road", "Balrampur Road"]
                }
            }
        ],
        businesses: ["Swaminarayan Chhapaiya", "Pragya Park", "Shri Ram Janki Temple", "Gonda Market"]
    },
    {
        name: "Basti",
        area: [
            {
                name: "Gandhi Nagar",
                subArea: ["Malviya Road", "Station Road"],
                road: {
                    name: "NH 28",
                    subRoads: ["Gorakhpur Road", "Faizabad Road"]
                }
            }
        ],
        businesses: ["Bhadeshwar Nath Temple", "Chandra Shekhar Azad Park", "Basti Market", "Sugar Mill"]
    },
    {
        name: "Faizabad",
        area: [
            {
                name: "Ayodhya",
                subArea: ["Ram Ki Paidi", "Hanuman Garhi"],
                road: {
                    name: "NH 28",
                    subRoads: ["Faizabad Bypass", "Gorakhpur Road"]
                }
            }
        ],
        businesses: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan", "Gulab Bari"]
    },
    {
        name: "Gorakhpur",
        area: [
            {
                name: "Gorakhnath Temple Area",
                subArea: ["Bank Road", "Civil Lines"],
                road: {
                    name: "NH 28",
                    subRoads: ["Airport Road", "Kushinagar Road"]
                }
            }
        ],
        businesses: ["Gorakhnath Temple", "Rail Museum", "City Mall", "Ramgarh Tal"]
    },
    {
        name: "Deoria",
        area: [
            {
                name: "Civil Lines",
                subArea: ["Station Road", "Malviya Road"],
                road: {
                    name: "NH 28B",
                    subRoads: ["Gorakhpur Road", "Padrauna Road"]
                }
            }
        ],
        businesses: ["Deoria Market", "Baitalpur Sugar Mill", "Hanuman Mandir", "Gandhi Ashram"]
    },
    {
        name: "Kushinagar",
        area: [
            {
                name: "Mahaparinirvana Temple Area",
                subArea: ["Ramabhar Stupa", "Matha Kuar Shrine"],
                road: {
                    name: "NH 28",
                    subRoads: ["Gorakhpur Road", "Padrauna Road"]
                }
            }
        ],
        businesses: ["Mahaparinirvana Temple", "Ramabhar Stupa", "Japanese Temple", "Kushinagar Museum"]
    },
    {
        name: "Ghazipur",
        area: [
            {
                name: "Collectorate",
                subArea: ["Jangipur", "Mianpura"],
                road: {
                    name: "NH 24",
                    subRoads: ["Varanasi Road", "Ballia Road"]
                }
            }
        ],
        businesses: ["Ghazipur Fort", "Lord Cornwallis Tomb", "Ganga Bridge", "Ghazipur Market"]
    },
    {
        name: "Ballia",
        area: [
            {
                name: "Station Road",
                subArea: ["Tadi Bazar", "Jamalpur"],
                road: {
                    name: "NH 31",
                    subRoads: ["Bansdih Road", "Rasra Road"]
                }
            }
        ],
        businesses: ["Surha Tal", "Bhrigu Temple", "Ballia Market", "Sahid Smarak"]
    },
    {
        name: "Chhapra",
        area: [
            {
                name: "Dahiyawan",
                subArea: ["Sahebganj", "Bhagwan Bazar"],
                road: {
                    name: "NH 19",
                    subRoads: ["Saran Road", "Garkha Road"]
                }
            }
        ],
        businesses: ["Gautam Asthan", "Chhapra Civil Court", "Kali Mandir", "Gandak Riverfront"]
    },
    {
        name: "Muzaffarpur",
        area: [
            {
                name: "Motijheel",
                subArea: ["Mithanpura", "Club Road"],
                road: {
                    name: "NH 77",
                    subRoads: ["Chhata Chowk Road", "Akharaghat Road"]
                }
            }
        ],
        businesses: ["Litchi Gardens", "Garibnath Temple", "Jubba Sahni Park", "Muzaffarpur Market"]
    },
    {
        name: "Darbhanga",
        area: [
            {
                name: "Lalbagh",
                subArea: ["Allalpatti", "Benipur"],
                road: {
                    name: "NH 57",
                    subRoads: ["Tower Chowk Road", "Kadira Bad Road"]
                }
            }
        ],
        businesses: ["Darbhanga Raj Palace", "Maharaja Lakshmishwar Singh Museum", "Kameshwar Singh Darbhanga Sanskrit University", "Manokamna Mandir"]
    },
    {
        name: "Begusarai",
        area: [
            {
                name: "Barouni",
                subArea: ["Teghra", "Begusarai Town"],
                road: {
                    name: "NH 31",
                    subRoads: ["Lakhminia Road", "Barauni Refinery Road"]
                }
            }
        ],
        businesses: ["Kanwar Lake Bird Sanctuary", "Naulakha Temple", "Begusarai Market", "Simaria Ghat"]
    },
    {
        name: "Bhagalpur",
        area: [
            {
                name: "Khalifabagh",
                subArea: ["Tatarpur", "Sultanganj"],
                road: {
                    name: "NH 80",
                    subRoads: ["Zero Mile Road", "Nathnagar Road"]
                }
            }
        ],
        businesses: ["Vikramshila Ancient University", "Maharshi Mehi Ashram", "Bhagalpur Silk Institute", "Kahalgaon Super Thermal Power Project"]
    },
    {
        name: "Gaya",
        area: [
            {
                name: "Bodh Gaya",
                subArea: ["Mahabodhi Temple", "Falgu River"],
                road: {
                    name: "NH 22",
                    subRoads: ["Dahiyawan Road", "Gaya-Bodhgaya Road"]
                }
            }
        ],
        businesses: ["Mahabodhi Temple", "Vishnupad Temple", "Mangla Gauri Temple", "Dungeshwari Caves"]
    },
    {
        name: "Rourkela",
        area: [
            {
                name: "Chhend",
                subArea: ["Basanti Colony", "Civil Township"],
                road: {
                    name: "Ring Road",
                    subRoads: ["Bondamunda Road", "Panposh Road"]
                }
            }
        ],
        businesses: ["Rourkela Steel Plant", "Hanuman Vatika", "Indira Gandhi Park", "Sector 19 Market"]
    },
    {
        name: "Cuttack",
        area: [
            {
                name: "Buxi Bazaar",
                subArea: ["Badambadi", "College Square"],
                road: {
                    name: "Ring Road",
                    subRoads: ["Jobra Road", "Mangalabag Road"]
                }
            }
        ],
        businesses: ["Barabati Fort", "Dhabaleshwar Temple", "Odisha High Court", "Cuttack Chandi Temple"]
    },
    {
        name: "Puri",
        area: [
            {
                name: "Grand Road",
                subArea: ["Chakratirtha Road", "Swargadwar"],
                road: {
                    name: "Marine Drive",
                    subRoads: ["VIP Road", "Market Road"]
                }
            }
        ],
        businesses: ["Jagannath Temple", "Puri Beach", "Konark Sun Temple", "Raghurajpur Artist Village"]
    },
    {
        name: "Visakhapatnam",
        area: [
            {
                name: "Rushikonda",
                subArea: ["Madhurawada", "Bheemunipatnam"],
                road: {
                    name: "Beach Road",
                    subRoads: ["NH 16", "Sagarnagar Road"]
                }
            },
            {
                name: "Dwaraka Nagar",
                subArea: ["Maddilapalem", "Akkayyapalem"],
                road: {
                    name: "Diamond Park Road",
                    subRoads: ["Gopalapatnam Road", "NAD Kothar Road"]
                }
            }
        ],
        businesses: ["RK Beach", "Kailasagiri", "Vizag Zoo", "INS Kursura Submarine Museum"]
    },
    {
        name: "Vijayawada",
        area: [
            {
                name: "Gandhinagar",
                subArea: ["Benz Circle", "MG Road"],
                road: {
                    name: "NH 16",
                    subRoads: ["Eluru Road", "Prakasam Barrage Road"]
                }
            }
        ],
        businesses: ["Kanaka Durga Temple", "Prakasam Barrage", "Bhavani Island", "Undavalli Caves"]
    },
    {
        name: "Guntur",
        area: [
            {
                name: "Brodipet",
                subArea: ["Arundelpet", "Kothapeta"],
                road: {
                    name: "Main Road",
                    subRoads: ["NH 16", "Amaravati Road"]
                }
            }
        ],
        businesses: ["Undavalli Caves", "Kondaveedu Fort", "Amaravati Buddhist Stupa", "Guntur Mirchi Yard"]
    },
    {
        name: "Tirupati",
        area: [
            {
                name: "Alipiri",
                subArea: ["Tirumala", "Chandragiri"],
                road: {
                    name: "Tirupati-Tirumala Ghat Road",
                    subRoads: ["SV Zoo Road", "Airport Road"]
                }
            }
        ],
        businesses: ["Tirumala Venkateswara Temple", "Sri Govindaraja Swamy Temple", "Talakona Waterfalls", "Chandragiri Fort"]
    },
    {
        name: "Nellore",
        area: [
            {
                name: "AC Subba Reddy Road",
                subArea: ["Magunta Layout", "Stonehousepet"],
                road: {
                    name: "NH 16",
                    subRoads: ["Kovur Road", "Mypadu Road"]
                }
            }
        ],
        businesses: ["Sri Ranganathaswamy Temple", "Nellore Beach", "Pulicat Lake", "Barapukari Dargah"]
    },
    {
        name: "Kakinada",
        area: [
            {
                name: "Jagannadhapuram",
                subArea: ["Sambamurthy Nagar", "Gandhi Nagar"],
                road: {
                    name: "Main Road",
                    subRoads: ["Port Road", "NH 16"]
                }
            }
        ],
        businesses: ["Coringa Wildlife Sanctuary", "Hope Island", "Godavari Arch Bridge", "Kakinada Beach"]
    },
    {
        name: "Rajahmundry",
        area: [
            {
                name: "Morampudi",
                subArea: ["Bommur", "Aryapuram"],
                road: {
                    name: "NH 16",
                    subRoads: ["Godavari Bund Road", "Dowleswaram Road"]
                }
            }
        ],
        businesses: ["Godavari River", "Pushkar Ghat", "Cotton Museum", "Papikondalu"]
    },
    {
        name: "Warangal",
        area: [
            {
                name: "Hanamkonda",
                subArea: ["Kazipet", "Mills Colony"],
                road: {
                    name: "NH 163",
                    subRoads: ["Warangal-Kazipet Road", "Narsampet Road"]
                }
            }
        ],
        businesses: ["Warangal Fort", "Thousand Pillar Temple", "Bhadrakali Temple", "Ramappa Temple"]
    },
    {
        name: "Karimnagar",
        area: [
            {
                name: "Kaman",
                subArea: ["Civil Hospital Road", "Mukarampura"],
                road: {
                    name: "NH 563",
                    subRoads: ["Hyderabad Road", "Manthani Road"]
                }
            }
        ],
        businesses: ["Elgandal Fort", "Lower Manair Dam", "Vemulawada Temple", "Deer Park"]
    },
    {
        name: "Kochi",
        area: [
            {
                name: "Fort Kochi",
                subArea: ["Mattancherry", "Vypin"],
                road: {
                    name: "Princess Street",
                    subRoads: ["Burgher Street", "Rose Street"]
                }
            },
            {
                name: "Marine Drive",
                subArea: ["MG Road", "Kakkanad"],
                road: {
                    name: "Shanmugham Road",
                    subRoads: ["Chittoor Road", "Banerji Road"]
                }
            }
        ],
        businesses: ["Chinese Fishing Nets", "Jew Town", "Mattancherry Palace", "Lulu Mall"]
    },
    {
        name: "Thiruvananthapuram",
        area: [
            {
                name: "Kowdiar",
                subArea: ["Pattom", "Vattiyoorkavu"],
                road: {
                    name: "Kowdiar Road",
                    subRoads: ["Vellayambalam Road", "MG Road"]
                }
            },
            {
                name: "East Fort",
                subArea: ["Chalakkudy", "Fort Area"],
                road: {
                    name: "Manjalikulam Road",
                    subRoads: ["Attukal Road", "Padmanabhaswamy Temple Road"]
                }
            }
        ],
        businesses: ["Padmanabhaswamy Temple", "Napier Museum", "Kovalam Beach", "Lulu Mall"]
    },
    {
        name: "Kozhikode",
        area: [
            {
                name: "Mananchira",
                subArea: ["SM Street", "Mavoor Road"],
                road: {
                    name: "Beach Road",
                    subRoads: ["Link Road", "Mini Bypass"]
                }
            }
        ],
        businesses: ["Kozhikode Beach", "Mishkal Mosque", "Sweet Meat Street", "Thusharagiri Waterfalls"]
    },
    {
        name: "Thrissur",
        area: [
            {
                name: "Swaraj Round",
                subArea: ["Sakthan Thampuran Nagar", "Mannuthy"],
                road: {
                    name: "Palace Road",
                    subRoads: ["MG Road", "Shakthan Thampuran Palace Road"]
                }
            }
        ],
        businesses: ["Vadakkunnathan Temple", "Thrissur Zoo", "Sakthan Thampuran Palace", "Bible Tower"]
    },
    {
        name: "Kannur",
        area: [
            {
                name: "Thalassery",
                subArea: ["Payyanur", "Muzhappilangad"],
                road: {
                    name: "NH 66",
                    subRoads: ["Stadium Road", "Fort Road"]
                }
            }
        ],
        businesses: ["St. Angelo Fort", "Payyambalam Beach", "Muzhappilangad Beach", "Arakkal Museum"]
    },
    {
        name: "Mangaluru",
        area: [
            {
                name: "Light House Hill Road",
                subArea: ["Kadri", "Bondel"],
                road: {
                    name: "MG Road",
                    subRoads: ["KS Rao Road", "Attavar Road"]
                }
            }
        ],
        businesses: ["Kadri Manjunath Temple", "Panambur Beach", "Sultan Battery", "St. Aloysius Chapel"]
    },
    {
        name: "Mysuru",
        area: [
            {
                name: "Jayalakshmipuram",
                subArea: ["Kuvenpunagar", "Vijayanagar"],
                road: {
                    name: "Ring Road",
                    subRoads: ["Bogadi Road", "Hunsur Road"]
                }
            }
        ],
        businesses: ["Mysore Palace", "Chamundi Hills", "Mysore Zoo", "Brindavan Gardens"]
    },
    {
        name: "Hubballi",
        area: [
            {
                name: "Dharwad",
                subArea: ["Keshwapur", "Gokul Road"],
                road: {
                    name: "NH 48",
                    subRoads: ["Station Road", "Lamington Road"]
                }
            }
        ],
        businesses: ["Unkal Lake", "Nrupatunga Betta", "Siddharoodh Math", "Kittur Rani Chennamma Circle"]
    },
    {
        name: "Belagavi",
        area: [
            {
                name: "Shahapur",
                subArea: ["Tilakwadi", "Azam Nagar"],
                road: {
                    name: "NH 4",
                    subRoads: ["Khanapur Road", "Shivaji Road"]
                }
            }
        ],
        businesses: ["Belagavi Fort", "Kapileshwar Temple", "Mahantesh Nagar", "Kamala Basti"]
    }
];

// Gemini Category
export const businessCategory = [
    {
        name: "Test",
        subCategory: []
    },
    {
        name: "Food",
        subCategory: [
            {
                name: "Sweets",
                type: ["Bengali Sweets", "Ajmer Sweets", "Matheran Sweets", "Dry Fruits Sweets", "Milk Cakes", "Halwa", "Laddoo", "Barfi"]
            },
            {
                name: "Drinks",
                type: ["Soft Drinks", "Fresh Juices", "Milkshakes", "Mocktails", "Coffee", "Tea", "Smoothies", "Energy Drinks"]
            },
            {
                name: "Chinese",
                type: ["Noodles", "Manchurian", "Spring Rolls", "Fried Rice", "Soups", "Dim Sum", "Chilli Chicken", "Hakka Noodles"]
            },
            {
                name: "Fruits",
                type: ["Apple", "Mango", "Banana", "Orange", "Grapes", "Pineapple", "Watermelon", "Papaya", "Kiwi", "Strawberry"]
            },
            {
                name: "Bakery",
                type: ["Cakes", "Pastries", "Cookies", "Bread", "Donuts", "Muffins", "Pies", "Tarts", "Croissants"]
            },
            {
                name: "Indian Cuisine",
                type: ["Curries", "Biryani", "Naan", "Roti", "Thali", "Dosa", "Idli", "Vada", "Samosa", "Pakora"]
            },
            {
                name: "Fast Food",
                type: ["Burgers", "Pizzas", "Sandwiches", "Fries", "Hot Dogs", "Wraps", "Kebabs", "Pasta"]
            },
            {
                name: "Dairy Products",
                type: ["Milk", "Curd", "Butter", "Ghee", "Cheese", "Paneer", "Yogurt", "Cream"]
            }
        ]
    },
    {
        name: "Clothing",
        subCategory: [
            {
                name: "Men",
                type: ["Shirts", "Trousers", "Kurta", "Jeans", "T-Shirts", "Jackets", "Suits", "Shorts", "Sweaters"]
            },
            {
                name: "Women",
                type: ["Sarees", "Salwar Kameez", "Western Wear", "Dresses", "Skirts", "Tops", "Leggings", "Kurtis", "Gowns"]
            },
            {
                name: "Kids",
                type: ["T-Shirts", "Shorts", "Frocks", "Rompers", "Jeans", "Pants", "Dresses", "Sets"]
            },
            {
                name: "Accessories",
                type: ["Belts", "Wallets", "Hats", "Scarves", "Gloves", "Ties", "Socks"]
            }
        ]
    },
    {
        name: "Electronics",
        subCategory: [
            {
                name: "Mobile",
                type: ["Smartphones", "Accessories", "Chargers", "Headphones", "Power Banks", "Cases"]
            },
            {
                name: "Home Appliances",
                type: ["Fridge", "Washing Machine", "Microwave", "AC", "TV", "Water Purifier", "Vacuum Cleaner", "Dishwasher"]
            },
            {
                name: "Computers",
                type: ["Laptops", "Keyboards", "Monitors", "Mice", "Printers", "External Drives", "Routers", "Webcams"]
            },
            {
                name: "Cameras",
                type: ["DSLR", "Mirrorless", "Point & Shoot", "Action Cameras", "Drones", "Tripods"]
            },
            {
                name: "Audio Systems",
                type: ["Speakers", "Soundbars", "Home Theatres", "Headsets", "Earbuds", "Amplifiers"]
            }
        ]
    },
    {
        name: "Home Decor",
        subCategory: [
            {
                name: "Furniture",
                type: ["Sofas", "Beds", "Tables", "Chairs", "Wardrobes", "Cabinets", "Bookcases", "Dressers"]
            },
            {
                name: "Lighting",
                type: ["Lamps", "Chandeliers", "Wall Lights", "LED Strips", "Floor Lamps", "Spotlights"]
            },
            {
                name: "Furnishings",
                type: ["Curtains", "Rugs", "Cushions", "Bed Sheets", "Blankets", "Table Cloths"]
            },
            {
                name: "Kitchenware",
                type: ["Cookware", "Dinnerware", "Glassware", "Cutlery", "Storage Containers", "Bakeware"]
            }
        ]
    },
    {
        name: "Health & Beauty",
        subCategory: [
            {
                name: "Skincare",
                type: ["Face Wash", "Moisturizers", "Sunscreen", "Serums", "Masks", "Toners"]
            },
            {
                name: "Haircare",
                type: ["Shampoo", "Conditioner", "Hair Oil", "Hair Gel", "Hair Serum", "Hair Masks"]
            },
            {
                name: "Makeup",
                type: ["Foundation", "Concealer", "Lipstick", "Mascara", "Eyeliner", "Eyeshadow", "Blush"]
            },
            {
                name: "Fragrances",
                type: ["Perfumes", "Deodorants", "Body Mists", "Colognes"]
            },
            {
                name: "Personal Care",
                type: ["Soap", "Body Wash", "Toothpaste", "Shaving Cream", "Lotion", "Hand Sanitizer"]
            }
        ]
    },
    {
        name: "Automotive",
        subCategory: [
            {
                name: "Car Accessories",
                type: ["Car Mats", "Seat Covers", "Steering Covers", "Air Fresheners", "Infotainment Systems"]
            },
            {
                name: "Bike Accessories",
                type: ["Helmets", "Gloves", "Jackets", "Bike Covers", "Mobile Holders"]
            },
            {
                name: "Repair & Services",
                type: ["Oil Change", "Wheel Alignment", "Dent Repair", "Painting", "Engine Servicing", "Tire Repair"]
            },
            {
                name: "Vehicle Parts",
                type: ["Brakes", "Filters", "Batteries", "Spark Plugs", "Wipers", "Lights"]
            }
        ]
    },
    {
        name: "Books & Stationery",
        subCategory: [
            {
                name: "Books",
                type: ["Fiction", "Non-Fiction", "Self-Help", "Children's Books", "Educational", "Comics", "Magazines"]
            },
            {
                name: "Stationery",
                type: ["Pens", "Notebooks", "Pencils", "Erasers", "Staplers", "Files", "Folders", "Art Supplies"]
            }
        ]
    },
    {
        name: "Sports & Fitness",
        subCategory: [
            {
                name: "Sports Equipment",
                type: ["Cricket Bats", "Football", "Basketball", "Badminton Rackets", "Tennis Rackets", "Yoga Mats"]
            },
            {
                name: "Fitness Gear",
                type: ["Dumbbells", "Treadmills", "Exercise Bikes", "Resistance Bands", "Jump Ropes"]
            },
            {
                name: "Apparel",
                type: ["Tracksuits", "T-Shirts", "Shorts", "Running Shoes", "Sports Bras"]
            }
        ]
    },
    {
        name: "Footwear",
        subCategory: [
            {
                name: "Men's Footwear",
                type: ["Sneakers", "Formal Shoes", "Sandals", "Flip-Flops", "Boots", "Sports Shoes"]
            },
            {
                name: "Women's Footwear",
                type: ["Heels", "Flats", "Sandals", "Sneakers", "Boots", "Wedges", "Sports Shoes"]
            },
            {
                name: "Kids' Footwear",
                type: ["School Shoes", "Casual Shoes", "Sandals", "Sport Shoes"]
            }
        ]
    },
    {
        name: "Jewelry",
        subCategory: [
            {
                name: "Gold Jewelry",
                type: ["Necklaces", "Earrings", "Rings", "Bracelets", "Chains", "Pendants"]
            },
            {
                name: "Silver Jewelry",
                type: ["Anklets", "Earrings", "Rings", "Pendants", "Bracelets"]
            },
            {
                name: "Fashion Jewelry",
                type: ["Costume Jewelry", "Beaded Necklaces", "Statement Earrings", "Imitation Jewelry"]
            }
        ]
    }
];

//Gemini Businesses
export const businesses = [
    // --- Bhiwandi ---
    {
        name: "Noble Sweets",
        city: "Bhiwandi",
        area: "Gaibi Nagar",
        road: {
            name: "Maulana Azaad Road",
            subRoads: ["Noorani Masjid Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Bengali Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Rasgulla", "Sandesh", "Mishti Doi"],
        img: photo
    },
    {
        name: "Noorani Bakery",
        city: "Bhiwandi",
        area: "Gaibi Nagar",
        road: {
            name: "Maulana Azaad Road",
            subRoads: ["Anand Talkies Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cakes",
        class: "Standard",
        establishment: "Storefront",
        items: ["Black Forest Cake", "Pineapple Pastry", "Cookies"],
        img: photo
    },
    {
        name: "Minara Collection",
        city: "Bhiwandi",
        area: "Gaibi Nagar",
        road: {
            name: "Maulana Azaad Road",
            subRoads: ["Pipeline Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Storefront",
        items: ["Formal Shirts", "Casual Shirts", "T-Shirts"],
        img: photo
    },
    {
        name: "Bhiwandi Hardware Mart",
        city: "Bhiwandi",
        area: "Nizampur",
        road: {
            name: "Thane Road",
            subRoads: ["Market Road"]
        },
        category: "Automotive", // Changed to match example structure
        subCategory: "Vehicle Parts",
        categoryType: "Batteries",
        class: "Standard",
        establishment: "Workshop",
        items: ["Cement Bags", "Bricks", "Sand"],
        img: photo
    },
    {
        name: "Padma Medical",
        city: "Bhiwandi",
        area: "Nizampur",
        road: {
            name: "Thane Road",
            subRoads: ["Nizampur Naka"]
        },
        category: "Health & Beauty",
        subCategory: "Personal Care",
        categoryType: "Soap",
        class: "Standard",
        establishment: "Storefront",
        items: ["Medicines", "First Aid Kits", "Personal Hygiene Products"],
        img: photo
    },
    {
        name: "Royal Electronics Bhiwandi",
        city: "Bhiwandi",
        area: "Shanti Nagar",
        road: {
            name: "Kalyan Road",
            subRoads: ["Temghar Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Storefront",
        items: ["Samsung Phones", "Redmi Phones", "Mobile Accessories"],
        img: photo
    },
    {
        name: "Shanti Nagar Foods",
        city: "Bhiwandi",
        area: "Shanti Nagar",
        road: {
            name: "Kalyan Road",
            subRoads: ["Shiv Mandir Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Economy",
        establishment: "Storefront",
        items: ["Veg Burger", "French Fries", "Cold Drinks"],
        img: photo
    },
    {
        name: "Purna Book Store",
        city: "Bhiwandi",
        area: "Shanti Nagar",
        road: {
            name: "Kalyan Road",
            subRoads: ["Temghar Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Fiction",
        class: "Standard",
        establishment: "Storefront",
        items: ["Novels", "Textbooks", "Notebooks"],
        img: photo
    },

    // --- Mumbai ---
    {
        name: "A1 Bakery",
        city: "Mumbai",
        area: "Dadar",
        road: {
            name: "Senapati Bapat Road",
            subRoads: ["Ranade Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Pastries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Chocolate Pastry", "Croissants", "Fresh Bread"],
        img: photo
    },
    {
        name: "Bombay Biryani Centre",
        city: "Mumbai",
        area: "Dadar",
        road: {
            name: "Senapati Bapat Road",
            subRoads: ["Tilak Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Standard",
        establishment: "Storefront",
        items: ["Chicken Biryani", "Veg Biryani", "Mutton Biryani"],
        img: photo
    },
    {
        name: "ElectroHub Andheri",
        city: "Mumbai",
        area: "Andheri",
        road: {
            name: "Link Road",
            subRoads: ["SV Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Storefront",
        items: ["iPhone", "Samsung Galaxy", "OnePlus"],
        img: photo
    },
    {
        name: "Fashion Street Bandra",
        city: "Mumbai",
        area: "Bandra",
        road: {
            name: "Hill Road",
            subRoads: ["Linking Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Storefront",
        items: ["Dresses", "Tops", "Jeans"],
        img: photo
    },
    {
        name: "Leopold Cafe",
        city: "Mumbai",
        area: "Colaba",
        road: {
            name: "Shahid Bhagat Singh Road",
            subRoads: ["Apollo Bunder Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Storefront",
        items: ["Burgers", "Sandwiches", "Beer"],
        img: photo
    },
    {
        name: "Global Computers Mumbai",
        city: "Mumbai",
        area: "Andheri",
        road: {
            name: "Link Road",
            subRoads: ["Yari Road"]
        },
        category: "Electronics",
        subCategory: "Computers",
        categoryType: "Laptops",
        class: "Premium",
        establishment: "Storefront",
        items: ["HP Laptops", "Dell Laptops", "Apple MacBooks"],
        img: photo
    },
    {
        name: "Sea View Hotel",
        city: "Mumbai",
        area: "Colaba",
        road: {
            name: "Shahid Bhagat Singh Road",
            subRoads: ["Wodehouse Road"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Luxury Hotels",
        class: "Luxury",
        establishment: "Hotel",
        items: ["Luxury Suites", "Sea View Rooms", "Conference Hall"],
        img: photo
    },
    {
        name: "Marine Drive Juice Centre",
        city: "Mumbai",
        area: "Nariman Point",
        road: {
            name: "Netaji Subhash Chandra Bose Road",
            subRoads: ["Barrister Rajni Patel Marg"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Orange Juice", "Pineapple Juice", "Watermelon Juice"],
        img: photo
    },
    {
        name: "Shivaji Park Sports",
        city: "Mumbai",
        area: "Dadar",
        road: {
            name: "Senapati Bapat Road",
            subRoads: ["Gokhale Road"]
        },
        category: "Sports & Fitness",
        subCategory: "Sports Equipment",
        categoryType: "Cricket Bats",
        class: "Standard",
        establishment: "Storefront",
        items: ["Cricket Bats", "Cricket Balls", "Stumps"],
        img: photo
    },
    {
        name: "Lokhandwala Cafe",
        city: "Mumbai",
        area: "Andheri",
        road: {
            name: "Link Road",
            subRoads: ["SV Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Sandwiches",
        class: "Standard",
        establishment: "Storefront",
        items: ["Veg Sandwich", "Chicken Sandwich", "Coffee"],
        img: photo
    },
    {
        name: "Juhu Books",
        city: "Mumbai",
        area: "Andheri",
        road: {
            name: "Link Road",
            subRoads: ["Yari Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Storefront",
        items: ["Biographies", "History Books", "Magazines"],
        img: photo
    },
    {
        name: "Colaba Jewelers",
        city: "Mumbai",
        area: "Colaba",
        road: {
            name: "Shahid Bhagat Singh Road",
            subRoads: ["Apollo Bunder Road"]
        },
        category: "Jewelry",
        subCategory: "Gold Jewelry",
        categoryType: "Rings",
        class: "Premium",
        establishment: "Storefront",
        items: ["Gold Rings", "Diamond Rings", "Engagement Rings"],
        img: photo
    },
    {
        name: "Marine Drive Fashion",
        city: "Mumbai",
        area: "Nariman Point",
        road: {
            name: "Netaji Subhash Chandra Bose Road",
            subRoads: ["Barrister Rajni Patel Marg"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Gowns",
        class: "Luxury",
        establishment: "Storefront",
        items: ["Evening Gowns", "Party Dresses", "Designer Wear"],
        img: photo
    },

    // --- Pune ---
    {
        name: "Vaishali Cafe",
        city: "Pune",
        area: "Kothrud",
        road: {
            name: "FC Road",
            subRoads: ["JM Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Standard",
        establishment: "Storefront",
        items: ["Mango Juice", "Mosambi Juice", "Cold Coffee"],
        img: photo
    },
    {
        name: "Goodluck Restaurant",
        city: "Pune",
        area: "Kothrud",
        road: {
            name: "FC Road",
            subRoads: ["Law College Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cookies",
        class: "Premium",
        establishment: "Storefront",
        items: ["Bun Maska", "Irani Chai", "Biscuits"],
        img: photo
    },
    {
        name: "Trendz Fashion Pune",
        city: "Pune",
        area: "Kothrud",
        road: {
            name: "FC Road",
            subRoads: ["Deccan Gymkhana Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Sarees",
        class: "Premium",
        establishment: "Storefront",
        items: ["Silk Sarees", "Cotton Sarees", "Designer Sarees"],
        img: photo
    },
    {
        name: "Kaka Halwai",
        city: "Pune",
        area: "Hadapsar",
        road: {
            name: "Pune-Solapur Road",
            subRoads: ["Saswad Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Milk Cakes",
        class: "Standard",
        establishment: "Storefront",
        items: ["Petha", "Milk Cake", "Barfi"],
        img: photo
    },
    {
        name: "Modern Photo Studio",
        city: "Pune",
        area: "Hadapsar",
        road: {
            name: "Pune-Solapur Road",
            subRoads: ["Manjari Road"]
        },
        category: "Electronics",
        subCategory: "Cameras",
        categoryType: "DSLR",
        class: "Standard",
        establishment: "Office",
        items: ["DSLR Cameras", "Lenses", "Tripods"],
        img: photo
    },
    {
        name: "University Books & Stationery Pune",
        city: "Pune",
        area: "Shivajinagar",
        road: {
            name: "University Road",
            subRoads: ["Ganeshkhind Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Educational",
        class: "Economy",
        establishment: "Storefront",
        items: ["Textbooks", "Notebooks", "Pens"],
        img: photo
    },
    {
        name: "High Spirits Cafe",
        city: "Pune",
        area: "Koregaon Park",
        road: {
            name: "North Main Road",
            subRoads: ["Lane No. 1"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Premium",
        establishment: "Storefront",
        items: ["Craft Beer", "Gourmet Burgers", "Live Music"],
        img: photo
    },
    {
        name: "Deccan Furniture",
        city: "Pune",
        area: "Shivajinagar",
        road: {
            name: "University Road",
            subRoads: ["JM Road"]
        },
        category: "Home Decor",
        subCategory: "Furniture",
        categoryType: "Sofas",
        class: "Standard",
        establishment: "Storefront",
        items: ["Wooden Sofas", "Recliners", "Coffee Tables"],
        img: photo
    },
    {
        name: "Sports Hub Pune",
        city: "Pune",
        area: "Hadapsar",
        road: {
            name: "Pune-Solapur Road",
            subRoads: ["Saswad Road"]
        },
        category: "Sports & Fitness",
        subCategory: "Sports Equipment",
        categoryType: "Football",
        class: "Standard",
        establishment: "Storefront",
        items: ["Football", "Basketball", "Volleyball"],
        img: photo
    },
    {
        name: "Fitness First Pune",
        city: "Pune",
        area: "Koregaon Park",
        road: {
            name: "North Main Road",
            subRoads: ["Lane No. 1"]
        },
        category: "Sports & Fitness",
        subCategory: "Fitness Gear",
        categoryType: "Dumbbells",
        class: "Premium",
        establishment: "Gym",
        items: ["Dumbbells", "Treadmills", "Exercise Bikes"],
        img: photo
    },

    // --- Delhi ---
    {
        name: "Haldiram’s Connaught Place",
        city: "Delhi",
        area: "Connaught Place",
        road: {
            name: "Janpath Road",
            subRoads: ["KG Marg"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Premium",
        establishment: "Storefront",
        items: ["Rasgulla", "Gulab Jamun", "Soan Papdi"],
        img: photo
    },
    {
        name: "Saravana Bhavan Delhi",
        city: "Delhi",
        area: "Connaught Place",
        road: {
            name: "Janpath Road",
            subRoads: ["Barakhamba Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Dosa",
        class: "Standard",
        establishment: "Storefront",
        items: ["Masala Dosa", "Idli", "Vada", "Uttapam"],
        img: photo
    },
    {
        name: "TechZone Delhi",
        city: "Delhi",
        area: "Connaught Place",
        road: {
            name: "Janpath Road",
            subRoads: ["Sansad Marg"]
        },
        category: "Electronics",
        subCategory: "Computers",
        categoryType: "Laptops",
        class: "Standard",
        establishment: "Storefront",
        items: ["Dell Laptops", "HP Laptops", "Lenovo Laptops"],
        img: photo
    },
    {
        name: "Khan Market Books",
        city: "Delhi",
        area: "Saket",
        road: {
            name: "Press Enclave Road",
            subRoads: ["Mehrauli-Badarpur Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Fiction",
        class: "Premium",
        establishment: "Storefront",
        items: ["Novels", "Best Sellers", "Magazines"],
        img: photo
    },
    {
        name: "Delhi Art Gallery",
        city: "Delhi",
        area: "Saket",
        road: {
            name: "Press Enclave Road",
            subRoads: ["Garden of Five Senses Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Rugs",
        class: "Luxury",
        establishment: "Office",
        items: ["Art Prints", "Sculptures", "Paintings"],
        img: photo
    },
    {
        name: "Karol Bagh Saree House",
        city: "Delhi",
        area: "Karol Bagh",
        road: {
            name: "Ajmal Khan Road",
            subRoads: ["Pusa Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Sarees",
        class: "Standard",
        establishment: "Storefront",
        items: ["Traditional Sarees", "Silk Sarees", "Lehengas"],
        img: photo
    },
    {
        name: "Hauz Khas Social",
        city: "Delhi",
        area: "Hauz Khas",
        road: {
            name: "Aurobindo Marg",
            subRoads: ["Deer Park Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Premium",
        establishment: "Storefront",
        items: ["Craft Cocktails", "Global Cuisine", "Live Music"],
        img: photo
    },
    {
        name: "Qutub Minar Cafe",
        city: "Delhi",
        area: "Hauz Khas",
        road: {
            name: "Aurobindo Marg",
            subRoads: ["Hauz Khas Village Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Tea", "Snacks"],
        img: photo
    },
    {
        name: "Gaffar Market Mobiles",
        city: "Delhi",
        area: "Karol Bagh",
        road: {
            name: "Ajmal Khan Road",
            subRoads: ["DB Gupta Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Accessories",
        class: "Economy",
        establishment: "Storefront",
        items: ["Mobile Covers", "Screen Protectors", "Headphones"],
        img: photo
    },
    {
        name: "Green Park Salon",
        city: "Delhi",
        area: "Hauz Khas",
        road: {
            name: "Aurobindo Marg",
            subRoads: ["Deer Park Road"]
        },
        category: "Health & Beauty",
        subCategory: "Haircare",
        categoryType: "Hair Oil",
        class: "Standard",
        establishment: "Storefront",
        items: ["Haircuts", "Hair Coloring", "Facials"],
        img: photo
    },

    // --- Bengaluru ---
    {
        name: "Empire Restaurant Koramangala",
        city: "Bengaluru",
        area: "Koramangala",
        road: {
            name: "100 Feet Road",
            subRoads: ["Sarjapur Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Standard",
        establishment: "Storefront",
        items: ["Biryani", "Kebabs", "Parathas"],
        img: photo
    },
    {
        name: "Third Wave Coffee Roasters",
        city: "Bengaluru",
        area: "Koramangala",
        road: {
            name: "100 Feet Road",
            subRoads: ["80 Feet Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Premium",
        establishment: "Storefront",
        items: ["Espresso", "Latte", "Cold Brew"],
        img: photo
    },
    {
        name: "Orion Mall",
        city: "Bengaluru",
        area: "Whitefield",
        road: {
            name: "ITPL Road",
            subRoads: ["Whitefield Main Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Designer Brands", "Casual Wear", "Accessories"],
        img: photo
    },
    {
        name: "Phoenix Marketcity",
        city: "Bengaluru",
        area: "Whitefield",
        road: {
            name: "ITPL Road",
            subRoads: ["Graphite India Road"]
        },
        category: "Electronics",
        subCategory: "Home Appliances",
        categoryType: "TV",
        class: "Luxury",
        establishment: "Large",
        items: ["LED TVs", "Smart TVs", "Home Theatres"],
        img: photo
    },
    {
        name: "Toit Brewery",
        city: "Bengaluru",
        area: "Indiranagar",
        road: {
            name: "12th Main Road",
            subRoads: ["CMH Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Pizzas",
        class: "Premium",
        establishment: "Storefront",
        items: ["Craft Beer", "Wood-fired Pizzas", "Appetizers"],
        img: photo
    },
    {
        name: "Hard Rock Cafe Bengaluru",
        city: "Bengaluru",
        area: "Indiranagar",
        road: {
            name: "12th Main Road",
            subRoads: ["Double Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Premium",
        establishment: "Storefront",
        items: ["Classic Burgers", "Cocktails", "Live Music"],
        img: photo
    },
    {
        name: "Forum Mall Shops",
        city: "Bengaluru",
        area: "Koramangala",
        road: {
            name: "100 Feet Road",
            subRoads: ["Intermediate Ring Road"]
        },
        category: "Footwear",
        subCategory: "Men's Footwear",
        categoryType: "Sneakers",
        class: "Standard",
        establishment: "Large",
        items: ["Sport Shoes", "Casual Shoes", "Formal Shoes"],
        img: photo
    },
    {
        name: "Jayanagar Books",
        city: "Bengaluru",
        area: "JP Nagar",
        road: {
            name: "Ring Road",
            subRoads: ["Bannerghatta Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Self-Help",
        class: "Standard",
        establishment: "Storefront",
        items: ["Self-Help Books", "Fiction Novels", "Stationery"],
        img: photo
    },
    {
        name: "Bannerghatta Sports",
        city: "Bengaluru",
        area: "JP Nagar",
        road: {
            name: "Ring Road",
            subRoads: ["Outer Ring Road"]
        },
        category: "Sports & Fitness",
        subCategory: "Fitness Gear",
        categoryType: "Yoga Mats",
        class: "Economy",
        establishment: "Storefront",
        items: ["Yoga Mats", "Dumbbells", "Resistance Bands"],
        img: photo
    },
    {
        name: "Kadugodi Hardware",
        city: "Bengaluru",
        area: "Whitefield",
        road: {
            name: "ITPL Road",
            subRoads: ["EPIP Area Road"]
        },
        category: "Automotive",
        subCategory: "Vehicle Parts",
        categoryType: "Brakes",
        class: "Standard",
        establishment: "Workshop",
        items: ["Car Brakes", "Bike Brakes", "Engine Oil"],
        img: photo
    },

    // --- Chennai ---
    {
        name: "Saravana Stores Anna Nagar",
        city: "Chennai",
        area: "Anna Nagar",
        road: {
            name: "2nd Avenue",
            subRoads: ["Shanti Colony Main Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Sarees",
        class: "Economy",
        establishment: "Storefront",
        items: ["Silk Sarees", "Cotton Sarees", "Kanjeevaram Sarees"],
        img: photo
    },
    {
        name: "Pothy's T. Nagar",
        city: "Chennai",
        area: "T. Nagar",
        road: {
            name: "Usman Road",
            subRoads: ["Ranganathan Street"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Salwar Kameez",
        class: "Standard",
        establishment: "Storefront",
        items: ["Salwar Suits", "Lehengas", "Kurtis"],
        img: photo
    },
    {
        name: "GRT Jewellers Chennai",
        city: "Chennai",
        area: "Anna Nagar",
        road: {
            name: "2nd Avenue",
            subRoads: ["Ambattur Road"]
        },
        category: "Jewelry",
        subCategory: "Gold Jewelry",
        categoryType: "Necklaces",
        class: "Premium",
        establishment: "Storefront",
        items: ["Gold Necklaces", "Diamond Necklaces", "Gemstone Jewelry"],
        img: photo
    },
    {
        name: "Sangeetha Veg Restaurant Adyar",
        city: "Chennai",
        area: "Adyar",
        road: {
            name: "Sardar Patel Road",
            subRoads: ["Elliot's Beach Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Dosa",
        class: "Standard",
        establishment: "Storefront",
        items: ["Dosa", "Idli", "Vada", "Filter Coffee"],
        img: photo
    },
    {
        name: "Murugan Idli Shop",
        city: "Chennai",
        area: "T. Nagar",
        road: {
            name: "Usman Road",
            subRoads: ["North Usman Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Idli",
        class: "Economy",
        establishment: "Storefront",
        items: ["Idli", "Vada", "Pongal"],
        img: photo
    },
    {
        name: "Amelie's Adyar",
        city: "Chennai",
        area: "Adyar",
        road: {
            name: "Sardar Patel Road",
            subRoads: ["TTK Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Pastries",
        class: "Premium",
        establishment: "Storefront",
        items: ["French Pastries", "Cakes", "Macarons"],
        img: photo
    },
    {
        name: "Mogappair Electronics",
        city: "Chennai",
        area: "Anna Nagar",
        road: {
            name: "2nd Avenue",
            subRoads: ["Anna Nagar East Road"]
        },
        category: "Electronics",
        subCategory: "Home Appliances",
        categoryType: "Fridge",
        class: "Standard",
        establishment: "Storefront",
        items: ["Refrigerators", "Washing Machines", "Microwaves"],
        img: photo
    },
    {
        name: "Besant Nagar Books",
        city: "Chennai",
        area: "Adyar",
        road: {
            name: "Sardar Patel Road",
            subRoads: ["Elliot's Beach Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Children's Books",
        class: "Standard",
        establishment: "Storefront",
        items: ["Children's Stories", "Comics", "Coloring Books"],
        img: photo
    },

    // --- Hyderabad ---
    {
        name: "Paradise Biryani Gachibowli",
        city: "Hyderabad",
        area: "Gachibowli",
        road: {
            name: "Old Mumbai Road",
            subRoads: ["Financial District Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Premium",
        establishment: "Storefront",
        items: ["Chicken Biryani", "Mutton Biryani", "Veg Biryani"],
        img: photo
    },
    {
        name: "Pista House Banjara Hills",
        city: "Hyderabad",
        area: "Banjara Hills",
        road: {
            name: "Road No. 1",
            subRoads: ["Road No. 12"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cookies", // Assuming this is where their famous Haleem or cookies fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Haleem", "Cookies", "Bakery Items"],
        img: photo
    },
    {
        name: "City Centre Mall Hyderabad",
        city: "Hyderabad",
        area: "Secunderabad",
        road: {
            name: "MG Road",
            subRoads: ["SD Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["International Brands", "Fashion Wear", "Accessories"],
        img: photo
    },
    {
        name: "Karachi Bakery Begumpet",
        city: "Hyderabad",
        area: "Secunderabad",
        road: {
            name: "MG Road",
            subRoads: ["Clock Tower Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cookies",
        class: "Premium",
        establishment: "Storefront",
        items: ["Fruit Biscuits", "Osmania Biscuits", "Cakes"],
        img: photo
    },
    {
        name: "Ohri's Gachibowli",
        city: "Hyderabad",
        area: "Gachibowli",
        road: {
            name: "Old Mumbai Road",
            subRoads: ["ISB Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Premium",
        establishment: "Storefront",
        items: ["North Indian Thali", "South Indian Thali", "Desserts"],
        img: photo
    },
    {
        name: "Jubilee Hills Auto",
        city: "Hyderabad",
        area: "Banjara Hills",
        road: {
            name: "Road No. 1",
            subRoads: ["Road No. 36"]
        },
        category: "Automotive",
        subCategory: "Repair & Services",
        categoryType: "Oil Change",
        class: "Deluxe",
        establishment: "Workshop",
        items: ["Car Servicing", "Oil Change", "Wheel Alignment"],
        img: photo
    },
    {
        name: "Begumpet Electronics",
        city: "Hyderabad",
        area: "Secunderabad",
        road: {
            name: "MG Road",
            subRoads: ["Begumpet Road"]
        },
        category: "Electronics",
        subCategory: "Home Appliances",
        categoryType: "AC",
        class: "Standard",
        establishment: "Storefront",
        items: ["Air Conditioners", "Refrigerators", "Washing Machines"],
        img: photo
    },

    // --- Kolkata ---
    {
        name: "Flury's Park Street",
        city: "Kolkata",
        area: "Park Street",
        road: {
            name: "Chowringhee Road",
            subRoads: ["Sudder Street"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Pastries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Cakes", "Pastries", "Tea/Coffee"],
        img: photo
    },
    {
        name: "Peter Cat",
        city: "Kolkata",
        area: "Park Street",
        road: {
            name: "Chowringhee Road",
            subRoads: ["Theatre Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Deluxe",
        establishment: "Storefront",
        items: ["Chelo Kebab", "Sizzlers", "Steaks"],
        img: photo
    },
    {
        name: "Quest Mall",
        city: "Kolkata",
        area: "Park Street",
        road: {
            name: "Chowringhee Road",
            subRoads: ["Little Russell Street"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Luxury",
        establishment: "Large",
        items: ["Luxury Brands", "Apparel", "Accessories"],
        img: photo
    },
    {
        name: "Starmark Bookstore Salt Lake",
        city: "Kolkata",
        area: "Salt Lake City",
        road: {
            name: "EM Bypass",
            subRoads: ["Salt Lake Bypass"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Fiction",
        class: "Standard",
        establishment: "Storefront",
        items: ["Fiction", "Non-Fiction", "Children's Books"],
        img: photo
    },
    {
        name: "Aaheli Esplanade",
        city: "Kolkata",
        area: "Esplanade",
        road: {
            name: "Jawaharlal Nehru Road",
            subRoads: ["Lenin Sarani"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Bengali Thali", "Seafood Curries", "Traditional Desserts"],
        img: photo
    },
    {
        name: "Arsalan Biryani",
        city: "Kolkata",
        area: "Park Street",
        road: {
            name: "Chowringhee Road",
            subRoads: ["Sudder Street"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Standard",
        establishment: "Storefront",
        items: ["Mutton Biryani", "Chicken Biryani", "Chaap"],
        img: photo
    },
    {
        name: "Sector V Electronics",
        city: "Kolkata",
        area: "Salt Lake City",
        road: {
            name: "EM Bypass",
            subRoads: ["New Town Arterial Road"]
        },
        category: "Electronics",
        subCategory: "Computers",
        categoryType: "Laptops",
        class: "Standard",
        establishment: "Storefront",
        items: ["Gaming Laptops", "Workstation PCs", "Accessories"],
        img: photo
    },

    // --- Ahmedabad ---
    {
        name: "Agashiye",
        city: "Ahmedabad",
        area: "Satellite",
        road: {
            name: "SG Highway",
            subRoads: ["132 Feet Ring Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Luxury",
        establishment: "Hotel",
        items: ["Gujarati Thali", "Traditional Sweets", "Fine Dining"],
        img: photo
    },
    {
        name: "Manekchowk Food Street",
        city: "Ahmedabad",
        area: "Manekchowk",
        road: {
            name: "Manekchowk Road",
            subRoads: ["Gandhi Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Sandwiches",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Bhurji", "Golas", "Pav Bhaji"],
        img: photo
    },
    {
        name: "AlphaOne Mall",
        city: "Ahmedabad",
        area: "Satellite",
        road: {
            name: "SG Highway",
            subRoads: ["Iskcon Temple Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Jeans",
        class: "Premium",
        establishment: "Large",
        items: ["Fashion Apparel", "Accessories", "Footwear"],
        img: photo
    },
    {
        name: "Vijay Sales Navrangpura",
        city: "Ahmedabad",
        area: "Navrangpura",
        road: {
            name: "CG Road",
            subRoads: ["Ashram Road"]
        },
        category: "Electronics",
        subCategory: "Home Appliances",
        categoryType: "TV",
        class: "Standard",
        establishment: "Storefront",
        items: ["LED TVs", "Washing Machines", "Refrigerators"],
        img: photo
    },
    {
        name: "Karnavati Dabeli Centre",
        city: "Ahmedabad",
        area: "Manekchowk",
        road: {
            name: "Manekchowk Road",
            subRoads: ["Rani No Hajiro Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers", // Closest category type
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Dabeli", "Vada Pav", "Khaman"],
        img: photo
    },
    {
        name: "Ambika Dalwada",
        city: "Ahmedabad",
        area: "Navrangpura",
        road: {
            name: "CG Road",
            subRoads: ["Vijay Char Rasta"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Samosa", // Closest category type
        class: "Economy",
        establishment: "Storefront",
        items: ["Dalwada", "Khandvi", "Fafda"],
        img: photo
    },

    // --- Jaipur ---
    {
        name: "Lassiwala Jaipur",
        city: "Jaipur",
        area: "Malviya Nagar",
        road: {
            name: "Gopalpura Bypass",
            subRoads: ["Tonk Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Milkshakes", // Assuming lassi falls under milkshakes/fresh juices
        class: "Economy",
        establishment: "Kiosk",
        items: ["Sweet Lassi", "Salted Lassi", "Mango Lassi"],
        img: photo
    },
    {
        name: "Rawat Misthan Bhandar",
        city: "Jaipur",
        area: "Malviya Nagar",
        road: {
            name: "Gopalpura Bypass",
            subRoads: ["Airport Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Pyaaz Kachori", "Mirchi Vada", "Ghewar"],
        img: photo
    },
    {
        name: "World Trade Park",
        city: "Jaipur",
        area: "Malviya Nagar",
        road: {
            name: "Gopalpura Bypass",
            subRoads: ["Malviya Nagar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["International Brands", "Fashion Apparel", "Jewelry"],
        img: photo
    },
    {
        name: "Johari Bazaar Jewellers",
        city: "Jaipur",
        area: "Johari Bazaar",
        road: {
            name: "Hawa Mahal Road",
            subRoads: ["Maniharon Ka Rasta"]
        },
        category: "Jewelry",
        subCategory: "Gold Jewelry",
        categoryType: "Necklaces",
        class: "Luxury",
        establishment: "Storefront",
        items: ["Traditional Jewelry", "Gemstone Jewelry", "Gold Ornaments"],
        img: photo
    },
    {
        name: "Tapri Central",
        city: "Jaipur",
        area: "C-Scheme",
        road: {
            name: "Bhagwan Das Road",
            subRoads: ["Ashok Marg"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Sandwiches",
        class: "Standard",
        establishment: "Storefront",
        items: ["Tea", "Maggi", "Local Snacks"],
        img: photo
    },
    {
        name: "Handi Restaurant",
        city: "Jaipur",
        area: "C-Scheme",
        road: {
            name: "Bhagwan Das Road",
            subRoads: ["Church Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Laal Maas", "Dal Baati Churma", "Rajasthani Thali"],
        img: photo
    },
    {
        name: "Civil Lines Boutique",
        city: "Jaipur",
        area: "C-Scheme",
        road: {
            name: "Bhagwan Das Road",
            subRoads: ["Ambedkar Circle Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Gowns",
        class: "Premium",
        establishment: "Storefront",
        items: ["Ethnic Wear", "Bridal Wear", "Party Dresses"],
        img: photo
    },

    // --- Surat ---
    {
        name: "Bombay Bakery Surat",
        city: "Surat",
        area: "Adajan",
        road: {
            name: "TP Scheme Road",
            subRoads: ["Ring Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cakes",
        class: "Standard",
        establishment: "Storefront",
        items: ["Cakes", "Biscuits", "Puffs"],
        img: photo
    },
    {
        name: "J.P. Chenoy Jewellers",
        city: "Surat",
        area: "Adajan",
        road: {
            name: "TP Scheme Road",
            subRoads: ["Ambika Niketan Road"]
        },
        category: "Jewelry",
        subCategory: "Gold Jewelry",
        categoryType: "Rings",
        class: "Premium",
        establishment: "Storefront",
        items: ["Diamond Rings", "Gold Rings", "Earrings"],
        img: photo
    },
    {
        name: "VR Surat Mall",
        city: "Surat",
        area: "Piplod",
        road: {
            name: "VR Mall Road",
            subRoads: ["Airport Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Jeans",
        class: "Standard",
        establishment: "Large",
        items: ["Fashion Apparel", "Electronics", "Footwear"],
        img: photo
    },
    {
        name: "Gopal Locho Centre",
        city: "Surat",
        area: "Varachha",
        road: {
            name: "Surat-Bardoli Road",
            subRoads: ["Katargam Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Samosa", // Best fit
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Locho", "Khaman", "Bhajiya"],
        img: photo
    },
    {
        name: "L.P. Savani Restaurant",
        city: "Surat",
        area: "Varachha",
        road: {
            name: "Surat-Bardoli Road",
            subRoads: ["Amroli Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["Gujarati Thali", "Kathiyawadi Thali", "Punjabi Dishes"],
        img: photo
    },
    {
        name: "Dumas Beach Cafe",
        city: "Surat",
        area: "Piplod",
        road: {
            name: "VR Mall Road",
            subRoads: ["Dumas Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Sandwiches",
        class: "Economy",
        establishment: "Storefront",
        items: ["Chai", "Bhajiya", "Corn"],
        img: photo
    },

    // --- Lucknow ---
    {
        name: "Tunday Kababi",
        city: "Lucknow",
        area: "Chowk",
        road: {
            name: "Nakhas Road",
            subRoads: ["Rumi Darwaza Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Kebabs",
        class: "Standard",
        establishment: "Storefront",
        items: ["Galawati Kebab", "Kakori Kebab", "Biryani"],
        img: photo
    },
    {
        name: "Hazratganj Market",
        city: "Lucknow",
        area: "Hazratganj",
        road: {
            name: "MG Marg",
            subRoads: ["Vidhan Sabha Marg"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Salwar Kameez",
        class: "Premium",
        establishment: "Storefront",
        items: ["Chikan Suits", "Sarees", "Western Wear"],
        img: photo
    },
    {
        name: "Phoenix Palassio",
        city: "Lucknow",
        area: "Gomti Nagar",
        road: {
            name: "Shaheed Path",
            subRoads: ["Faizabad Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Luxury",
        establishment: "Large",
        items: ["Apple Store", "Samsung Store", "OnePlus Store"],
        img: photo
    },
    {
        name: "Universal Books Lucknow",
        city: "Lucknow",
        area: "Hazratganj",
        road: {
            name: "MG Marg",
            subRoads: ["Sikandar Bagh Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Educational",
        class: "Standard",
        establishment: "Storefront",
        items: ["Novels", "Children's Books", "Stationery"],
        img: photo
    },
    {
        name: "Royal Cafe",
        city: "Lucknow",
        area: "Hazratganj",
        road: {
            name: "MG Marg",
            subRoads: ["Cantt Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Chaats",
        class: "Standard",
        establishment: "Storefront",
        items: ["Basket Chaat", "Kulfi", "Snacks"],
        img: photo
    },
    {
        name: "The Urban Dhaba",
        city: "Lucknow",
        area: "Gomti Nagar",
        road: {
            name: "Shaheed Path",
            subRoads: ["Gomti Nagar Bypass"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["Punjabi Food", "North Indian Cuisine", "Desserts"],
        img: photo
    },

    // --- Chandigarh ---
    {
        name: "Sector 17 Plaza Shops",
        city: "Chandigarh",
        area: "Sector 17",
        road: {
            name: "Madhya Marg",
            subRoads: ["Jan Marg"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Premium",
        establishment: "Storefront",
        items: ["Formal Wear", "Casual Wear", "Accessories"],
        img: photo
    },
    {
        name: "Elante Mall",
        city: "Chandigarh",
        area: "Mohali",
        road: {
            name: "Airport Road",
            subRoads: ["National Highway 5"]
        },
        category: "Electronics",
        subCategory: "Computers",
        categoryType: "Laptops",
        class: "Luxury",
        establishment: "Large",
        items: ["Apple Store", "Dell Store", "HP Store"],
        img: photo
    },
    {
        name: "Dada Junglee Jalebi",
        city: "Chandigarh",
        area: "Sector 17",
        road: {
            name: "Madhya Marg",
            subRoads: ["Himalaya Marg"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Economy",
        establishment: "Kiosk",
        items: ["Jalebi", "Imarti", "Samosa"],
        img: photo
    },
    {
        name: "Nik Bakers",
        city: "Chandigarh",
        area: "Sector 17",
        road: {
            name: "Madhya Marg",
            subRoads: ["Dakshin Marg"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cakes",
        class: "Premium",
        establishment: "Storefront",
        items: ["Cakes", "Pastries", "Breads"],
        img: photo
    },
    {
        name: "Cafe J.C.'s",
        city: "Chandigarh",
        area: "Sector 17",
        road: {
            name: "Madhya Marg",
            subRoads: ["Jan Marg"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Sandwiches", "Snacks"],
        img: photo
    },
    {
        name: "Swagath Restaurant",
        city: "Chandigarh",
        area: "Mohali",
        road: {
            name: "Airport Road",
            subRoads: ["IT City Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["South Indian Food", "North Indian Food", "Sea Food"],
        img: photo
    },

    // --- Goa ---
    {
        name: "Souza Lobo",
        city: "Goa",
        area: "Calangute",
        road: {
            name: "Calangute-Baga Road",
            subRoads: ["Beach Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Seafood",
        class: "Premium",
        establishment: "Storefront",
        items: ["Goan Seafood", "Curries", "Cocktails"],
        img: photo
    },
    {
        name: "Britto's Beach Shack",
        city: "Goa",
        area: "Calangute",
        road: {
            name: "Calangute-Baga Road",
            subRoads: ["Tito's Lane"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Storefront",
        items: ["Continental Food", "Drinks", "Live Music"],
        img: photo
    },
    {
        name: "Anjuna Flea Market",
        city: "Goa",
        area: "Calangute",
        road: {
            name: "Calangute-Baga Road",
            subRoads: ["Calangute Market Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Bohemian Clothes", "Jewelry", "Souvenirs"],
        img: photo
    },
    {
        name: "Goa Fish Thali House",
        city: "Goa",
        area: "Panjim",
        road: {
            name: "18th June Road",
            subRoads: ["Dr. Dada Vaidya Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["Fish Thali", "Prawn Curry", "Rice"],
        img: photo
    },
    {
        name: "Thalassa Morjim",
        city: "Goa",
        area: "Calangute", // Assuming a broader Calangute or nearby area for this example
        road: {
            name: "Calangute-Baga Road",
            subRoads: ["Beach Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Mediterranean",
        class: "Premium",
        establishment: "Storefront",
        items: ["Greek Food", "Cocktails", "Sunset Views"],
        img: photo
    },
    {
        name: "Curlies Beach Shack",
        city: "Goa",
        area: "Calangute", // Assuming a broader Calangute or nearby area for this example
        road: {
            name: "Calangute-Baga Road",
            subRoads: ["Tito's Lane"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Storefront",
        items: ["Seafood", "Drinks", "Parties"],
        img: photo
    },

    // --- Nagpur ---
    {
        name: "Haldiram's Sweets Dharampeth",
        city: "Nagpur",
        area: "Dharampeth",
        road: {
            name: "W.H.C. Road",
            subRoads: ["North Ambazari Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Petha", "Rasgulla", "Namkeens"],
        img: photo
    },
    {
        name: "Saoji Restaurant Sitabuldi",
        city: "Nagpur",
        area: "Sitabuldi",
        road: {
            name: "Main Road",
            subRoads: ["Central Avenue Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Economy",
        establishment: "Storefront",
        items: ["Saoji Mutton", "Saoji Chicken", "Bhakri"],
        img: photo
    },
    {
        name: "Eternity Mall Shops",
        city: "Nagpur",
        area: "Sitabuldi",
        road: {
            name: "Main Road",
            subRoads: ["Ambedkar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Fashion Brands", "Apparel", "Footwear"],
        img: photo
    },
    {
        name: "Sitabuldi Market Electronics",
        city: "Nagpur",
        area: "Sitabuldi",
        road: {
            name: "Main Road",
            subRoads: ["Variety Square Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Accessories",
        class: "Economy",
        establishment: "Storefront",
        items: ["Mobile Covers", "Chargers", "Headphones"],
        img: photo
    },
    {
        name: "The Breakfast Story",
        city: "Nagpur",
        area: "Dharampeth",
        road: {
            name: "W.H.C. Road",
            subRoads: ["Medical College Road"]
        },
        category: "Food",
        subCategory: "Bakery", // Best fit for breakfast items
        categoryType: "Bread",
        class: "Standard",
        establishment: "Storefront",
        items: ["Pancakes", "Waffles", "Sandwiches"],
        img: photo
    },
    {
        name: "Veeraswami Restaurant",
        city: "Nagpur",
        area: "Dharampeth",
        road: {
            name: "W.H.C. Road",
            subRoads: ["Amravati Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Dosa",
        class: "Standard",
        establishment: "Storefront",
        items: ["South Indian Thali", "Biryani", "Meals"],
        img: photo
    },

    // --- Indore ---
    {
        name: "Johny Hot Dog",
        city: "Indore",
        area: "Sarafa Bazaar",
        road: {
            name: "Rajwada Road",
            subRoads: ["Maharani Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Hot Dogs",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Hot Dogs", "Burgers", "Patties"],
        img: photo
    },
    {
        name: "Vijay Chaat House",
        city: "Indore",
        area: "Sarafa Bazaar",
        road: {
            name: "Rajwada Road",
            subRoads: ["Jail Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Chaats", // Best fit
        class: "Economy",
        establishment: "Storefront",
        items: ["Pani Puri", "Dahi Vada", "Aloo Tikki"],
        img: photo
    },
    {
        name: "Sarafa Night Market Food Stalls",
        city: "Indore",
        area: "Sarafa Bazaar",
        road: {
            name: "Rajwada Road",
            subRoads: ["Sarafa Night Market Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali", // Diverse food, but can use a general type
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Bhutte Ka Kees", "Garadu", "Jalebi"],
        img: photo
    },
    {
        name: "Treasure Island Mall Shops",
        city: "Indore",
        area: "Palasia",
        road: {
            name: "AB Road",
            subRoads: ["Race Course Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Accessories", "Footwear"],
        img: photo
    },
    {
        name: "Nafees Restaurant",
        city: "Indore",
        area: "Palasia",
        road: {
            name: "AB Road",
            subRoads: ["Manorama Ganj Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Standard",
        establishment: "Storefront",
        items: ["Mutton Biryani", "Chicken Biryani", "Kebabs"],
        img: photo
    },
    {
        name: "Guru Kripa Restaurant",
        city: "Indore",
        area: "Palasia",
        road: {
            name: "AB Road",
            subRoads: ["LIG Colony Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["North Indian Food", "South Indian Food", "Snacks"],
        img: photo
    },

    // --- Bhopal ---
    {
        name: "Manohar Dairy and Restaurant",
        city: "Bhopal",
        area: "MP Nagar",
        road: {
            name: "Jyoti Talkies Road",
            subRoads: ["Board Office Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Milk Cakes",
        class: "Standard",
        establishment: "Storefront",
        items: ["Sweets", "Snacks", "Indian Meals"],
        img: photo
    },
    {
        name: "DB Mall Stores",
        city: "Bhopal",
        area: "MP Nagar",
        road: {
            name: "Jyoti Talkies Road",
            subRoads: ["Link Road No. 1"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Phones", "Accessories", "Gadgets"],
        img: photo
    },
    {
        name: "Sagar Gaire Fast Food",
        city: "Bhopal",
        area: "Arera Colony",
        road: {
            name: "Hoshangabad Road",
            subRoads: ["Shahpura Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Sandwiches",
        class: "Economy",
        establishment: "Storefront",
        items: ["Sandwiches", "Pizzas", "Milkshakes"],
        img: photo
    },
    {
        name: "New Market Shops",
        city: "Bhopal",
        area: "MP Nagar",
        road: {
            name: "Jyoti Talkies Road",
            subRoads: ["Chetek Centre Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Salwar Kameez",
        class: "Standard",
        establishment: "Storefront",
        items: ["Ethnic Wear", "Dresses", "Footwear"],
        img: photo
    },
    {
        name: "Under the Mango Tree Cafe",
        city: "Bhopal",
        area: "Arera Colony",
        road: {
            name: "Hoshangabad Road",
            subRoads: ["Chunabhatti Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Sandwiches", "Desserts"],
        img: photo
    },
    {
        name: "Wind and Waves Restaurant",
        city: "Bhopal",
        area: "Arera Colony",
        road: {
            name: "Hoshangabad Road",
            subRoads: ["Misrod Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Indian Food", "Continental Food", "Lake View"],
        img: photo
    },

    // --- Patna ---
    {
        name: "Maurya Lok Complex Shops",
        city: "Patna",
        area: "Fraser Road",
        road: {
            name: "Gandhi Maidan Road",
            subRoads: ["Station Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Accessories"],
        img: photo
    },
    {
        name: "Pind Balluchi Patna",
        city: "Patna",
        area: "Fraser Road",
        road: {
            name: "Gandhi Maidan Road",
            subRoads: ["Bailey Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Premium",
        establishment: "Storefront",
        items: ["Punjabi Food", "North Indian Food", "Kebabs"],
        img: photo
    },
    {
        name: "Patna Central Mall",
        city: "Patna",
        area: "Kankarbagh",
        road: {
            name: "Main Road",
            subRoads: ["Bypass Road"]
        },
        category: "Electronics",
        subCategory: "Home Appliances",
        categoryType: "Washing Machine",
        class: "Standard",
        establishment: "Large",
        items: ["Electronics", "Clothing", "Footwear"],
        img: photo
    },
    {
        name: "Yellow Chilli Patna",
        city: "Patna",
        area: "Kankarbagh",
        road: {
            name: "Main Road",
            subRoads: ["Pani Tanki Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Premium",
        establishment: "Storefront",
        items: ["North Indian", "Chinese", "Desserts"],
        img: photo
    },
    {
        name: "Biryani Ghar Patna",
        city: "Patna",
        area: "Kankarbagh",
        road: {
            name: "Main Road",
            subRoads: ["Chitragupta Nagar Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Biryani",
        class: "Standard",
        establishment: "Storefront",
        items: ["Chicken Biryani", "Mutton Biryani", "Veg Biryani"],
        img: photo
    },

    // --- Ranchi ---
    {
        name: "Kaveri Restaurant Ranchi",
        city: "Ranchi",
        area: "Main Road",
        road: {
            name: "Ranchi Road",
            subRoads: ["Albert Ekka Chowk"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["North Indian", "South Indian", "Chinese"],
        img: photo
    },
    {
        name: "Big Bazaar Ranchi",
        city: "Ranchi",
        area: "Main Road",
        road: {
            name: "Ranchi Road",
            subRoads: ["Kutchery Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Large",
        items: ["Groceries", "Apparel", "Home Needs"],
        img: photo
    },
    {
        name: "Nucleus Mall Ranchi",
        city: "Ranchi",
        area: "Harmu",
        road: {
            name: "Harmu Road",
            subRoads: ["Ratu Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Stores", "Electronics Outlets", "Food Courts"],
        img: photo
    },
    {
        name: "Ranchi Lake Boating",
        city: "Ranchi",
        area: "Harmu",
        road: {
            name: "Harmu Road",
            subRoads: ["Bariatu Road"]
        },
        category: "Sports & Fitness", // Best fit
        subCategory: "Fitness Gear", // Best fit
        categoryType: "Dumbbells", // General fitness item
        class: "Economy",
        establishment: "Outdoor Activity",
        items: ["Boating", "Walking Trails", "Food Stalls"],
        img: photo
    },

    // --- Bhubaneswar ---
    {
        name: "Dalma Restaurant Bhubaneswar",
        city: "Bhubaneswar",
        area: "Jayadev Vihar",
        road: {
            name: "NH 16",
            subRoads: ["KIIT Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["Odia Cuisine", "Seafood", "Thalis"],
        img: photo
    },
    {
        name: "Odisha Modern Art Gallery",
        city: "Bhubaneswar",
        area: "Jayadev Vihar",
        road: {
            name: "NH 16",
            subRoads: ["Infocity Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints", // Best fit
        class: "Luxury",
        establishment: "Office",
        items: ["Paintings", "Sculptures", "Exhibitions"],
        img: photo
    },
    {
        name: "Esplanade Mall",
        city: "Bhubaneswar",
        area: "Khandagiri",
        road: {
            name: "National Highway 5",
            subRoads: ["Jagannath Prasad Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Fashion Apparel", "Food Court", "Entertainment"],
        img: photo
    },
    {
        name: "Kalinga Hospital Pharmacy",
        city: "Bhubaneswar",
        area: "Khandagiri",
        road: {
            name: "National Highway 5",
            subRoads: ["Patrapada Road"]
        },
        category: "Health & Beauty",
        subCategory: "Personal Care",
        categoryType: "Soap",
        class: "Standard",
        establishment: "Storefront",
        items: ["Medicines", "Health Supplements", "Cosmetics"],
        img: photo
    },

    // --- Guwahati ---
    {
        name: "Reboti Chat House",
        city: "Guwahati",
        area: "Fancy Bazaar",
        road: {
            name: "MG Road",
            subRoads: ["AT Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Chaats",
        class: "Economy",
        establishment: "Storefront",
        items: ["Pani Puri", "Aloo Tikki", "Papdi Chaat"],
        img: photo
    },
    {
        name: "Pantaloons Guwahati",
        city: "Guwahati",
        area: "Fancy Bazaar",
        road: {
            name: "MG Road",
            subRoads: ["HB Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Standard",
        establishment: "Storefront",
        items: ["Formal Wear", "Casual Wear", "Accessories"],
        img: photo
    },
    {
        name: "City Centre Mall Guwahati",
        city: "Guwahati",
        area: "Zoo Road",
        road: {
            name: "RG Baruah Road",
            subRoads: ["Nalapara Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Stores", "Electronic Gadgets", "Food Outlets"],
        img: photo
    },
    {
        name: "Assam State Museum Shop",
        city: "Guwahati",
        area: "Zoo Road",
        road: {
            name: "RG Baruah Road",
            subRoads: ["Namghar Path"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Storefront",
        items: ["Assamese Books", "History Books", "Souvenirs"],
        img: photo
    },

    // --- Shillong ---
    {
        name: "Cafe Shillong",
        city: "Shillong",
        area: "Police Bazaar",
        road: {
            name: "GS Road",
            subRoads: ["Jail Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Light Meals"],
        img: photo
    },
    {
        name: "Lewduh Market",
        city: "Shillong",
        area: "Police Bazaar",
        road: {
            name: "GS Road",
            subRoads: ["Wards Lake Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Local Crafts", "Apparel", "Fresh Produce"],
        img: photo
    },
    {
        name: "Highlander's Food",
        city: "Shillong",
        area: "Police Bazaar",
        road: {
            name: "GS Road",
            subRoads: ["Jail Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Noodles",
        class: "Standard",
        establishment: "Storefront",
        items: ["Momos", "Noodles", "Thukpa"],
        img: photo
    },

    // --- Agartala ---
    {
        name: "Hotel Sonali Restaurant",
        city: "Agartala",
        area: "Battala",
        road: {
            name: "Paradise Chowmuhani Road",
            subRoads: ["Akhaura Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Hotel",
        items: ["North Indian Cuisine", "Bengali Cuisine", "Meals"],
        img: photo
    },
    {
        name: "Big Bazar Agartala",
        city: "Agartala",
        area: "Battala",
        road: {
            name: "Paradise Chowmuhani Road",
            subRoads: ["Colonel Chowmuhani Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "T-Shirts",
        class: "Economy",
        establishment: "Large",
        items: ["Groceries", "Apparel", "Home Needs"],
        img: photo
    },
    {
        name: "Geddu Mia Sweet Shop",
        city: "Agartala",
        area: "Battala",
        road: {
            name: "Paradise Chowmuhani Road",
            subRoads: ["Akhaura Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Bengali Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Rasgulla", "Sweets", "Snacks"],
        img: photo
    },

    // --- Imphal ---
    {
        name: "Ema Keithel Market Stalls",
        city: "Imphal",
        area: "Thangal Bazaar",
        road: {
            name: "NH 2",
            subRoads: ["Airport Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear", // Best fit
        class: "Economy",
        establishment: "Market",
        items: ["Local Handlooms", "Fresh Produce", "Crafts"],
        img: photo
    },
    {
        name: "Classic Hotel Restaurant",
        city: "Imphal",
        area: "Thangal Bazaar",
        road: {
            name: "NH 2",
            subRoads: ["Khuman Lampak Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Premium",
        establishment: "Hotel",
        items: ["Local Cuisine", "Indian Food", "Continental"],
        img: photo
    },

    // --- Aizawl ---
    {
        name: "Millennium Centre Shops",
        city: "Aizawl",
        area: "Zarkawt",
        road: {
            name: "Main Road",
            subRoads: ["MG Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Footwear", "Electronics"],
        img: photo
    },
    {
        name: "Falkland Restaurant",
        city: "Aizawl",
        area: "Zarkawt",
        road: {
            name: "Main Road",
            subRoads: ["Electric Veng Road"]
        },
        category: "Food",
        subCategory: "Chinese",
        categoryType: "Noodles",
        class: "Standard",
        establishment: "Storefront",
        items: ["Chinese Food", "Indian Food", "Local Dishes"],
        img: photo
    },

    // --- Kohima ---
    {
        name: "Hornbill Festival Ground Stalls",
        city: "Kohima",
        area: "Bazaar",
        road: {
            name: "NH 29",
            subRoads: ["Kohima War Cemetery Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Local Cuisine", // Custom type for local food
        class: "Economy",
        establishment: "Outdoor Activity",
        items: ["Naga Food", "Local Crafts", "Souvenirs"],
        img: photo
    },
    {
        name: "Fusion Cafe Kohima",
        city: "Kohima",
        area: "Bazaar",
        road: {
            name: "NH 29",
            subRoads: ["PWD Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Continental Food"],
        img: photo
    },

    // --- Itanagar ---
    {
        name: "Polo Park Market",
        city: "Itanagar",
        area: "Bank Tinali",
        road: {
            name: "NH 415",
            subRoads: ["C-Sector Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Local Handicrafts", "Apparel", "Souvenirs"],
        img: photo
    },
    {
        name: "Arunachal Museum Shop",
        city: "Itanagar",
        area: "Bank Tinali",
        road: {
            name: "NH 415",
            subRoads: ["Zero Point Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["Local History Books", "Cultural Artifacts", "Souvenirs"],
        img: photo
    },

    // --- Gangtok ---
    {
        name: "MG Marg Market Stalls",
        city: "Gangtok",
        area: "MG Marg",
        road: {
            name: "National Highway 10",
            subRoads: ["Lall Bazaar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Standard",
        establishment: "Market",
        items: ["Woolen Clothes", "Local Crafts", "Jewelry"],
        img: photo
    },
    {
        name: "Baker's Cafe Gangtok",
        city: "Gangtok",
        area: "MG Marg",
        road: {
            name: "National Highway 10",
            subRoads: ["Development Area Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cakes",
        class: "Premium",
        establishment: "Storefront",
        items: ["Cakes", "Pastries", "Coffee"],
        img: photo
    },

    // --- Dibrugarh ---
    {
        name: "K.C. Sen Road Market",
        city: "Dibrugarh",
        area: "New Market",
        road: {
            name: "NH 37",
            subRoads: ["RKB Path"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Accessories"],
        img: photo
    },
    {
        name: "Junction Mall Dibrugarh",
        city: "Dibrugarh",
        area: "New Market",
        road: {
            name: "NH 37",
            subRoads: ["Amolapatty Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Standard",
        establishment: "Large",
        items: ["Mobile Stores", "Food Court", "Entertainment"],
        img: photo
    },

    // --- Siliguri ---
    {
        name: "Hong Kong Market Siliguri",
        city: "Siliguri",
        area: "Sevoke Road",
        road: {
            name: "Hill Cart Road",
            subRoads: ["Bidhan Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Imported Goods", "Electronics", "Apparel"],
        img: photo
    },
    {
        name: "City Centre Siliguri",
        city: "Siliguri",
        area: "Sevoke Road",
        road: {
            name: "Hill Cart Road",
            subRoads: ["Hospital Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Large",
        items: ["Food Court", "Shopping", "Entertainment"],
        img: photo
    },

    // --- Darjeeling ---
    {
        name: "Glenary's",
        city: "Darjeeling",
        area: "Mall Road",
        road: {
            name: "Nehru Road",
            subRoads: ["Rockville Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Cakes",
        class: "Premium",
        establishment: "Storefront",
        items: ["Cakes", "Pastries", "Tea/Coffee"],
        img: photo
    },
    {
        name: "Keventer's",
        city: "Darjeeling",
        area: "Mall Road",
        road: {
            name: "Nehru Road",
            subRoads: ["CR Das Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Hot Dogs",
        class: "Standard",
        establishment: "Storefront",
        items: ["Breakfast", "Sausages", "Tea/Coffee"],
        img: photo
    },

    // --- Varanasi ---
    {
        name: "Pizzeria Vaatika Cafe",
        city: "Varanasi",
        area: "Lanka",
        road: {
            name: "BHU Road",
            subRoads: ["Luxa Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Pizzas",
        class: "Standard",
        establishment: "Storefront",
        items: ["Pizzas", "Pasta", "Italian Food"],
        img: photo
    },
    {
        name: "JHV Mall Varanasi",
        city: "Varanasi",
        area: "Sigra",
        road: {
            name: "Cantt Road",
            subRoads: ["Lahartara Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Premium",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Food Court"],
        img: photo
    },

    // --- Allahabad ---
    {
        name: "Netram Moolchand & Sons",
        city: "Allahabad",
        area: "Chowk",
        road: {
            name: "Leader Road",
            subRoads: ["Katra Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Sweets", "Namkeens", "Chaat"],
        img: photo
    },
    {
        name: "Prayagraj Museum Shop",
        city: "Allahabad",
        area: "Civil Lines",
        road: {
            name: "MG Marg",
            subRoads: ["University Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["History Books", "Souvenirs", "Art Books"],
        img: photo
    },

    // --- Kanpur ---
    {
        name: "Thaggu Ke Laddu",
        city: "Kanpur",
        area: "Mall Road",
        road: {
            name: "Birhana Road",
            subRoads: ["Khalasi Line Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Milk Cakes", // Best fit
        class: "Economy",
        establishment: "Storefront",
        items: ["Laddoo", "Namkeen", "Samosa"],
        img: photo
    },
    {
        name: "Z Square Mall",
        city: "Kanpur",
        area: "Mall Road",
        road: {
            name: "Birhana Road",
            subRoads: ["Parade Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Food Court"],
        img: photo
    },

    // --- Agra ---
    {
        name: "Panchhi Petha",
        city: "Agra",
        area: "Fatehabad Road",
        road: {
            name: "NH 19",
            subRoads: ["Ring Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Petha", "Gajak", "Namkeen"],
        img: photo
    },
    {
        name: "Mama Chicken Mama Franky",
        city: "Agra",
        area: "Sadar Bazaar",
        road: {
            name: "MG Road",
            subRoads: ["Taj Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Wraps",
        class: "Economy",
        establishment: "Storefront",
        items: ["Chicken Rolls", "Frankies", "Kathi Rolls"],
        img: photo
    },

    // --- Meerut ---
    {
        name: "Bravura Gold Resort",
        city: "Meerut",
        area: "Cantt",
        road: {
            name: "Mall Road",
            subRoads: ["Delhi Road"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Luxury Hotels",
        class: "Luxury",
        establishment: "Hotel",
        items: ["Resort", "Banquet Hall", "Swimming Pool"],
        img: photo
    },
    {
        name: "Abu Lane Market",
        city: "Meerut",
        area: "Cantt",
        road: {
            name: "Mall Road",
            subRoads: ["Garh Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Accessories"],
        img: photo
    },

    // --- Dehradun ---
    {
        name: "Pacific Mall Dehradun",
        city: "Dehradun",
        area: "Rajpur Road",
        road: {
            name: "Paltan Bazaar Road",
            subRoads: ["Gandhi Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Stores", "Fashion Outlets", "Food Court"],
        img: photo
    },
    {
        name: "Cheta Ram Sweets",
        city: "Dehradun",
        area: "Rajpur Road",
        road: {
            name: "Paltan Bazaar Road",
            subRoads: ["Chakrata Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Sweets", "Namkeens", "Chaat"],
        img: photo
    },

    // --- Haridwar ---
    {
        name: "Chotiwala Restaurant Haridwar",
        city: "Haridwar",
        area: "Har Ki Pauri",
        road: {
            name: "Upper Road",
            subRoads: ["Vishnu Ghat Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["North Indian Thali", "Sweets", "Snacks"],
        img: photo
    },
    {
        name: "Haridwar Market Shops",
        city: "Haridwar",
        area: "Har Ki Pauri",
        road: {
            name: "Upper Road",
            subRoads: ["Railway Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Religious Items", "Apparel", "Souvenirs"],
        img: photo
    },

    // --- Rishikesh ---
    {
        name: "German Bakery Rishikesh",
        city: "Rishikesh",
        area: "Laxman Jhula",
        road: {
            name: "Badrinath Road",
            subRoads: ["Neelkanth Road"]
        },
        category: "Food",
        subCategory: "Bakery",
        categoryType: "Bread",
        class: "Standard",
        establishment: "Storefront",
        items: ["Brown Bread", "Cakes", "Coffee"],
        img: photo
    },
    {
        name: "Ganga Beach Cafe",
        city: "Rishikesh",
        area: "Laxman Jhula",
        road: {
            name: "Badrinath Road",
            subRoads: ["Swargashram Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Storefront",
        items: ["Fresh Juices", "Smoothies", "Snacks"],
        img: photo
    },

    // --- Nainital ---
    {
        name: "Sher-e-Punjab Nainital",
        city: "Nainital",
        area: "Mall Road",
        road: {
            name: "Naini Lake Road",
            subRoads: ["Thandi Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["North Indian Food", "Tandoori Dishes", "Desserts"],
        img: photo
    },
    {
        name: "The Mall Shops Nainital",
        city: "Nainital",
        area: "Mall Road",
        road: {
            name: "Naini Lake Road",
            subRoads: ["Bara Bazaar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Market",
        items: ["Woolen Clothes", "Souvenirs", "Apparel"],
        img: photo
    },

    // --- Shimla ---
    {
        name: "Indian Coffee House Shimla",
        city: "Shimla",
        area: "Mall Road",
        road: {
            name: "Cart Road",
            subRoads: ["Circular Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Tea", "Snacks"],
        img: photo
    },
    {
        name: "Combermere Hotel",
        city: "Shimla",
        area: "Mall Road",
        road: {
            name: "Cart Road",
            subRoads: ["Lower Bazaar Road"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Budget Hotels",
        class: "Standard",
        establishment: "Hotel",
        items: ["Rooms", "Restaurant", "Conference Facilities"],
        img: photo
    },

    // --- Manali ---
    {
        name: "Lazy Dog Cafe Manali",
        city: "Manali",
        area: "Old Manali",
        road: {
            name: "Manali-Leh Highway",
            subRoads: ["Hadimba Temple Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Storefront",
        items: ["Continental Food", "Drinks", "Live Music"],
        img: photo
    },
    {
        name: "Mall Road Market Manali",
        city: "Manali",
        area: "Old Manali",
        road: {
            name: "Manali-Leh Highway",
            subRoads: ["Club House Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Woolen Clothes", "Souvenirs", "Local Crafts"],
        img: photo
    },

    // --- Amritsar ---
    {
        name: "Bharawan Da Dhaba",
        city: "Amritsar",
        area: "Hall Bazaar",
        road: {
            name: "Golden Temple Road",
            subRoads: ["Lawrence Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["Amritsari Kulcha", "Dal Makhani", "Lassi"],
        img: photo
    },
    {
        name: "Kesar Da Dhaba",
        city: "Amritsar",
        area: "Hall Bazaar",
        road: {
            name: "Golden Temple Road",
            subRoads: ["Ranjit Avenue"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["Dal Makhani", "Palak Paneer", "Lachha Paratha"],
        img: photo
    },

    // --- Ludhiana ---
    {
        name: "Bikaner Sweets Ludhiana",
        city: "Ludhiana",
        area: "Sarabha Nagar",
        road: {
            name: "Ferozepur Road",
            subRoads: ["Pakhowal Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Sweets", "Namkeens", "Chaat"],
        img: photo
    },
    {
        name: "Flamez Mall",
        city: "Ludhiana",
        area: "Sarabha Nagar",
        road: {
            name: "Ferozepur Road",
            subRoads: ["Malhar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Food Court"],
        img: photo
    },

    // --- Jalandhar ---
    {
        name: "Haveli Restaurant Jalandhar",
        city: "Jalandhar",
        area: "Model Town",
        road: {
            name: "NH 44",
            subRoads: ["Nakodar Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Punjabi", // Custom type for Punjabi food
        class: "Standard",
        establishment: "Storefront",
        items: ["Punjabi Thali", "Sarson Da Saag", "Makki Di Roti"],
        img: photo
    },
    {
        name: "Viva Collage Mall",
        city: "Jalandhar",
        area: "Model Town",
        road: {
            name: "NH 44",
            subRoads: ["Hoshiarpur Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Standard",
        establishment: "Large",
        items: ["Mobile Stores", "Fashion Outlets", "Multiplex"],
        img: photo
    },

    // --- Bikaner ---
    {
        name: "Chotu Motu Joshi Sweet Shop",
        city: "Bikaner",
        area: "Station Road",
        road: {
            name: "Road No. 1",
            subRoads: ["Public Park Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Kachori", "Samosa", "Sweets"],
        img: photo
    },
    {
        name: "Laxmi Niwas Palace Hotel",
        city: "Bikaner",
        area: "Station Road",
        road: {
            name: "Road No. 1",
            subRoads: ["Ganga Singh Marg"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Luxury Hotels",
        class: "Luxury",
        establishment: "Hotel",
        items: ["Heritage Rooms", "Fine Dining", "Royal Experience"],
        img: photo
    },

    // --- Jodhpur ---
    {
        name: "Indique Restaurant Jodhpur",
        city: "Jodhpur",
        area: "Sardarpura",
        road: {
            name: "Clock Tower Road",
            subRoads: ["NH 62"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Rajasthani", // Custom type
        class: "Premium",
        establishment: "Storefront",
        items: ["Rajasthani Thali", "Laal Maas", "Drinks"],
        img: photo
    },
    {
        name: "Clock Tower Market",
        city: "Jodhpur",
        area: "Sardarpura",
        road: {
            name: "Clock Tower Road",
            subRoads: ["Old City Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Spices", "Textiles", "Handicrafts"],
        img: photo
    },

    // --- Udaipur ---
    {
        name: "Ambrai Restaurant Udaipur",
        city: "Udaipur",
        area: "Fateh Sagar Lake",
        road: {
            name: "Lake Palace Road",
            subRoads: ["Rani Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Rajasthani",
        class: "Luxury",
        establishment: "Storefront",
        items: ["Lake View Dining", "Indian Cuisine", "Continental Food"],
        img: photo
    },
    {
        name: "City Palace Shops",
        city: "Udaipur",
        area: "Fateh Sagar Lake",
        road: {
            name: "Lake Palace Road",
            subRoads: ["Old City Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Sarees",
        class: "Premium",
        establishment: "Storefront",
        items: ["Traditional Wear", "Souvenirs", "Art Pieces"],
        img: photo
    },

    // --- Kota ---
    {
        name: "Kota Coaching Institute",
        city: "Kota",
        area: "Talwandi",
        road: {
            name: "Dadabari Road",
            subRoads: ["Allen Road"]
        },
        category: "Education",
        subCategory: "Schools", // Best fit for coaching
        categoryType: "Educational",
        class: "Standard",
        establishment: "Office",
        items: ["JEE Coaching", "NEET Coaching", "Study Materials"],
        img: photo
    },
    {
        name: "City Mall Kota",
        city: "Kota",
        area: "Talwandi",
        road: {
            name: "Dadabari Road",
            subRoads: ["Vigyan Nagar Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Jeans",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Food Court", "Entertainment"],
        img: photo
    },

    // --- Ajmer ---
    {
        name: "Ambrosia Restaurant Ajmer",
        city: "Ajmer",
        area: "Dargah Sharif",
        road: {
            name: "Naya Bazaar Road",
            subRoads: ["Station Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["Indian Food", "Continental Food", "Desserts"],
        img: photo
    },
    {
        name: "Soni Ji Ki Nasiyan",
        city: "Ajmer",
        area: "Dargah Sharif",
        road: {
            name: "Naya Bazaar Road",
            subRoads: ["Diggi Bazaar Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Premium",
        establishment: "Office", // Considered as a place for artifacts
        items: ["Architectural Models", "Religious Artifacts", "Souvenirs"],
        img: photo
    },

    // --- Ambala ---
    {
        name: "Kingfisher Bar Ambala",
        city: "Ambala",
        area: "Cantt",
        road: {
            name: "NH 44",
            subRoads: ["Ambala-Chandigarh Highway"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Mocktails",
        class: "Standard",
        establishment: "Storefront",
        items: ["Alcoholic Beverages", "Snacks", "Music"],
        img: photo
    },
    {
        name: "Puran Singh Ka Dhaba",
        city: "Ambala",
        area: "Cantt",
        road: {
            name: "NH 44",
            subRoads: ["Mahesh Nagar Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Economy",
        establishment: "Storefront",
        items: ["Dal Makhani", "Chicken Curry", "Tandoori Roti"],
        img: photo
    },

    // --- Panipat ---
    {
        name: "Fun City Mall Panipat",
        city: "Panipat",
        area: "GT Road",
        road: {
            name: "NH 44",
            subRoads: ["Assandh Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Footwear", "Entertainment"],
        img: photo
    },
    {
        name: "Grand Trunk Restaurant Panipat",
        city: "Panipat",
        area: "GT Road",
        road: {
            name: "NH 44",
            subRoads: ["Sanoli Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Standard",
        establishment: "Storefront",
        items: ["North Indian Food", "Snacks", "Beverages"],
        img: photo
    },

    // --- Hisar ---
    {
        name: "Urban Square Mall Hisar",
        city: "Hisar",
        area: "Camp",
        road: {
            name: "Delhi Road",
            subRoads: ["Rajgarh Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Stores", "Fashion Outlets", "Food Court"],
        img: photo
    },
    {
        name: "Omaxe City Restaurant",
        city: "Hisar",
        area: "Camp",
        road: {
            name: "Delhi Road",
            subRoads: ["Sirsa Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Pizzas",
        class: "Standard",
        establishment: "Storefront",
        items: ["Pizzas", "Burgers", "Milkshakes"],
        img: photo
    },

    // --- Rohtak ---
    {
        name: "Tilyar Lake Cafe",
        city: "Rohtak",
        area: "Delhi Road",
        road: {
            name: "NH 9",
            subRoads: ["Jind Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Snacks", "Coffee", "Tea"],
        img: photo
    },
    {
        name: "Sheela Bypass Food",
        city: "Rohtak",
        area: "Delhi Road",
        road: {
            name: "NH 9",
            subRoads: ["Sonipat Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Economy",
        establishment: "Storefront",
        items: ["Local Dhaba Food", "Parathas", "Tea"],
        img: photo
    },

    // --- Sonipat ---
    {
        name: "Murthal Dhaba Sonipat",
        city: "Sonipat",
        area: "Model Town",
        road: {
            name: "NH 44",
            subRoads: ["Rohtak Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Parathas", // Custom type for Parathas
        class: "Standard",
        establishment: "Storefront",
        items: ["Parathas", "Dal Makhani", "Lassi"],
        img: photo
    },
    {
        name: "Tau Devi Lal Park Cafe",
        city: "Sonipat",
        area: "Model Town",
        road: {
            name: "NH 44",
            subRoads: ["Gohana Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Fresh Juices", "Snacks", "Ice Cream"],
        img: photo
    },

    // --- Bhiwani ---
    {
        name: "Bhiwani Boxing Club Shop",
        city: "Bhiwani",
        area: "Meham Gate",
        road: {
            name: "Rohtak Road",
            subRoads: ["Dadri Road"]
        },
        category: "Sports & Fitness",
        subCategory: "Fitness Gear",
        categoryType: "Dumbbells", // Best fit
        class: "Standard",
        establishment: "Office",
        items: ["Boxing Gear", "Fitness Apparel", "Supplements"],
        img: photo
    },
    {
        name: "Star Dhaba Bhiwani",
        city: "Bhiwani",
        area: "Meham Gate",
        road: {
            name: "Rohtak Road",
            subRoads: ["Tosham Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Economy",
        establishment: "Storefront",
        items: ["Dhaba Food", "Parathas", "Tea"],
        img: photo
    },

    // --- Rewari ---
    {
        name: "Rewari Railway Museum Shop",
        city: "Rewari",
        area: "Circular Road",
        road: {
            name: "NH 48",
            subRoads: ["Garhi Bolni Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["Railway Memorabilia", "Books", "Souvenirs"],
        img: photo
    },
    {
        name: "Jain Sweets Rewari",
        city: "Rewari",
        area: "Circular Road",
        road: {
            name: "NH 48",
            subRoads: ["Bawal Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Sweets", "Namkeens", "Chaat"],
        img: photo
    },

    // --- Gurugram ---
    {
        name: "Cyber Hub Restaurants",
        city: "Gurugram",
        area: "Cyber Hub",
        road: {
            name: "NH 48",
            subRoads: ["Golf Course Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Premium",
        establishment: "Large",
        items: ["Global Cuisine", "Bars", "Fine Dining"],
        img: photo
    },
    {
        name: "Ambience Mall Gurugram",
        city: "Gurugram",
        area: "Cyber Hub",
        road: {
            name: "NH 48",
            subRoads: ["Sohna Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Luxury",
        establishment: "Large",
        items: ["International Brands", "Fashion Apparel", "Electronics"],
        img: photo
    },
    {
        name: "Kingdom of Dreams",
        city: "Gurugram",
        area: "Sector 54",
        road: {
            name: "Golf Course Extension Road",
            subRoads: ["Southern Peripheral Road"]
        },
        category: "Food", // Food available, primary is entertainment
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Premium",
        establishment: "Large",
        items: ["Live Shows", "Culture", "Food Stalls"],
        img: photo
    },

    // --- Faridabad ---
    {
        name: "Crown Plaza Faridabad",
        city: "Faridabad",
        area: "Sector 15",
        road: {
            name: "Mathura Road",
            subRoads: ["Badkal Road"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Luxury Hotels",
        class: "Luxury",
        establishment: "Hotel",
        items: ["Rooms", "Restaurant", "Banquet Hall"],
        img: photo
    },
    {
        name: "Sector 15 Market Shops",
        city: "Faridabad",
        area: "Sector 15",
        road: {
            name: "Mathura Road",
            subRoads: ["NH 44"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Standard",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Accessories"],
        img: photo
    },

    // --- Noida ---
    {
        name: "DLF Mall of India",
        city: "Noida",
        area: "Sector 18",
        road: {
            name: "Dadri Road",
            subRoads: ["NH 24"]
        },
        category: "Electronics",
        subCategory: "Computers",
        categoryType: "Laptops",
        class: "Luxury",
        establishment: "Large",
        items: ["International Brands", "Food Court", "Multiplex"],
        img: photo
    },
    {
        name: "Worlds of Wonder",
        city: "Noida",
        area: "Sector 18",
        road: {
            name: "Dadri Road",
            subRoads: ["Ambedkar Marg"]
        },
        category: "Food", // Food available, primary is entertainment
        subCategory: "Fast Food",
        categoryType: "Burgers",
        class: "Standard",
        establishment: "Large",
        items: ["Amusement Park Rides", "Water Park", "Food Stalls"],
        img: photo
    },
    {
        name: "Sector 18 Market",
        city: "Noida",
        area: "Sector 18",
        road: {
            name: "Dadri Road",
            subRoads: ["NH 24"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Street Food"],
        img: photo
    },

    // --- Ghaziabad ---
    {
        name: "Shipra Mall",
        city: "Ghaziabad",
        area: "Indirapuram",
        road: {
            name: "NH 24",
            subRoads: ["Link Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Standard",
        establishment: "Large",
        items: ["Fashion Brands", "Food Court", "Multiplex"],
        img: photo
    },
    {
        name: "Pacific Mall Ghaziabad",
        city: "Ghaziabad",
        area: "Indirapuram",
        road: {
            name: "NH 24",
            subRoads: ["Hindon Bypass"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Premium",
        establishment: "Large",
        items: ["Mobile Stores", "Electronics Outlets", "Food Court"],
        img: photo
    },

    // --- Aligarh ---
    {
        name: "Great Value Mall Aligarh",
        city: "Aligarh",
        area: "Civil Lines",
        road: {
            name: "GT Road",
            subRoads: ["Ramghat Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["Fashion Brands", "Food Court", "Entertainment"],
        img: photo
    },
    {
        name: "Aligarh Muslim University Bookstore",
        city: "Aligarh",
        area: "Civil Lines",
        road: {
            name: "GT Road",
            subRoads: ["Kanpur Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Educational",
        class: "Standard",
        establishment: "Office",
        items: ["Academic Books", "Novels", "Stationery"],
        img: photo
    },

    // --- Mathura ---
    {
        name: "Brijwasi Mithai Wala",
        city: "Mathura",
        area: "Vrindavan",
        road: {
            name: "NH 19",
            subRoads: ["Mathura Bypass"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Peda", "Laddoo", "Namkeen"],
        img: photo
    },
    {
        name: "Yamuna Ghat Food Stalls",
        city: "Mathura",
        area: "Vrindavan",
        road: {
            name: "NH 19",
            subRoads: ["Agra Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Chaats",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Pani Puri", "Aloo Tikki", "Jalebi"],
        img: photo
    },

    // --- Vrindavan ---
    {
        name: "Govinda's Restaurant Vrindavan",
        city: "Vrindavan",
        area: "Banke Bihari Colony",
        road: {
            name: "Parikrama Marg",
            subRoads: ["Bhaktivedanta Swami Marg"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Thali",
        class: "Standard",
        establishment: "Storefront",
        items: ["Vegetarian Thali", "Sweets", "Drinks"],
        img: photo
    },
    {
        name: "Prem Mandir Souvenir Shop",
        city: "Vrindavan",
        area: "Banke Bihari Colony",
        road: {
            name: "Parikrama Marg",
            subRoads: ["Chattikara Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Artifacts", "Souvenirs", "Books"],
        img: photo
    },

    // --- Bareilly ---
    {
        name: "Phoenix United Mall Bareilly",
        city: "Bareilly",
        area: "Civil Lines",
        road: {
            name: "DD Puram Road",
            subRoads: ["Pilibhit Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Jeans",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Food Court"],
        img: photo
    },
    {
        name: "Bareilly Haat Crafts",
        city: "Bareilly",
        area: "Civil Lines",
        road: {
            name: "DD Puram Road",
            subRoads: ["Airport Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Rugs",
        class: "Economy",
        establishment: "Market",
        items: ["Handicrafts", "Local Art", "Souvenirs"],
        img: photo
    },

    // --- Moradabad ---
    {
        name: "Brass City Exports",
        city: "Moradabad",
        area: "Civil Lines",
        road: {
            name: "Delhi Road",
            subRoads: ["Sambhal Road"]
        },
        category: "Home Decor",
        subCategory: "Lighting",
        categoryType: "Lamps",
        class: "Premium",
        establishment: "Office",
        items: ["Brass Items", "Handicrafts", "Decor"],
        img: photo
    },
    {
        name: "Wave Mall Moradabad",
        city: "Moradabad",
        area: "Civil Lines",
        road: {
            name: "Delhi Road",
            subRoads: ["Chandausi Road"]
        },
        category: "Electronics",
        subCategory: "Mobile",
        categoryType: "Smartphones",
        class: "Standard",
        establishment: "Large",
        items: ["Mobile Stores", "Fashion Outlets", "Multiplex"],
        img: photo
    },

    // --- Saharanpur ---
    {
        name: "Company Bagh Cafe",
        city: "Saharanpur",
        area: "Gill Colony",
        road: {
            name: "Ambala Road",
            subRoads: ["Delhi Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Light Meals"],
        img: photo
    },
    {
        name: "Saharanpur Wood Carving",
        city: "Saharanpur",
        area: "Gill Colony",
        road: {
            name: "Ambala Road",
            subRoads: ["Dehradun Road"]
        },
        category: "Home Decor",
        subCategory: "Furniture",
        categoryType: "Tables",
        class: "Premium",
        establishment: "Workshop",
        items: ["Wooden Furniture", "Handicrafts", "Decor Items"],
        img: photo
    },

    // --- Haldwani ---
    {
        name: "Walkway Mall Haldwani",
        city: "Haldwani",
        area: "Kaladhungi Road",
        road: {
            name: "NH 109",
            subRoads: ["Bareilly Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Footwear", "Food Court"],
        img: photo
    },
    {
        name: "Himalayan Botanics",
        city: "Haldwani",
        area: "Kaladhungi Road",
        road: {
            name: "NH 109",
            subRoads: ["Rampur Road"]
        },
        category: "Health & Beauty",
        subCategory: "Skincare",
        categoryType: "Moisturizers",
        class: "Premium",
        establishment: "Storefront",
        items: ["Organic Skincare", "Herbal Products", "Essential Oils"],
        img: photo
    },

    // --- Rampur ---
    {
        name: "Rampur Raza Library Shop",
        city: "Rampur",
        area: "Civil Lines",
        road: {
            name: "Bareilly Road",
            subRoads: ["Moradabad Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["Rare Manuscripts", "Books", "Stationery"],
        img: photo
    },
    {
        name: "Ambassador Hotel Rampur",
        city: "Rampur",
        area: "Civil Lines",
        road: {
            name: "Bareilly Road",
            subRoads: ["Swar Road"]
        },
        category: "Hospitality",
        subCategory: "Hotels",
        categoryType: "Budget Hotels",
        class: "Standard",
        establishment: "Hotel",
        items: ["Rooms", "Restaurant", "Banquet Hall"],
        img: photo
    },

    // --- Pilibhit ---
    {
        name: "Pilibhit Tiger Reserve Souvenirs",
        city: "Pilibhit",
        area: "Chowk",
        road: {
            name: "Bareilly Road",
            subRoads: ["Lakhimpur Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Wildlife Souvenirs", "Local Crafts", "Books"],
        img: photo
    },
    {
        name: "Shah Ji Sweets Pilibhit",
        city: "Pilibhit",
        area: "Chowk",
        road: {
            name: "Bareilly Road",
            subRoads: ["Shahjahanpur Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Sweets", "Namkeens", "Dairy Products"],
        img: photo
    },

    // --- Shahjahanpur ---
    {
        name: "Gandhi Stadium Canteen",
        city: "Shahjahanpur",
        area: "Katra",
        road: {
            name: "NH 24",
            subRoads: ["Hardoi Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Samosa", "Tea", "Cold Drinks"],
        img: photo
    },
    {
        name: "Shaheed Udyan Cafe",
        city: "Shahjahanpur",
        area: "Katra",
        road: {
            name: "NH 24",
            subRoads: ["Palia Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Tea", "Light Snacks"],
        img: photo
    },

    // --- Hardoi ---
    {
        name: "Hardoi Park Shop",
        city: "Hardoi",
        area: "Civil Lines",
        road: {
            name: "Sitapur Road",
            subRoads: ["Shahjahanpur Road"]
        },
        category: "Sports & Fitness",
        subCategory: "Sports Equipment",
        categoryType: "Football",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Balls", "Small Toys", "Snacks"],
        img: photo
    },
    {
        name: "Railway Station Market Hardoi",
        city: "Hardoi",
        area: "Civil Lines",
        road: {
            name: "Sitapur Road",
            subRoads: ["Kannauj Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Market",
        items: ["Samosa", "Chai", "Biscuits"],
        img: photo
    },

    // --- Sitapur ---
    {
        name: "Naimisharanya Souvenir",
        city: "Sitapur",
        area: "Eye Hospital Road",
        road: {
            name: "Lucknow Road",
            subRoads: ["Hardoi Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Artifacts", "Souvenirs", "Books"],
        img: photo
    },
    {
        name: "Sitapur Eye Hospital Pharmacy",
        city: "Sitapur",
        area: "Eye Hospital Road",
        road: {
            name: "Lucknow Road",
            subRoads: ["Biswan Road"]
        },
        category: "Health & Beauty",
        subCategory: "Personal Care",
        categoryType: "Soap",
        class: "Standard",
        establishment: "Storefront",
        items: ["Eye Drops", "Medicines", "Health Products"],
        img: photo
    },

    // --- Lakhimpur Kheri ---
    {
        name: "Dudhwa National Park Shop",
        city: "Lakhimpur Kheri",
        area: "Dahwa",
        road: {
            name: "NH 730",
            subRoads: ["Pilibhit Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Wildlife Souvenirs", "Books", "Local Crafts"],
        img: photo
    },
    {
        name: "Guru Nanak Dev Market",
        city: "Lakhimpur Kheri",
        area: "Dahwa",
        road: {
            name: "NH 730",
            subRoads: ["Hardoi Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Household Items"],
        img: photo
    },

    // --- Bahraich ---
    {
        name: "Dargah Shareef Bazaar",
        city: "Bahraich",
        area: "Ghasiyari Mandi",
        road: {
            name: "Nanpara Road",
            subRoads: ["Sitapur Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Religious Items", "Attar", "Local Clothes"],
        img: photo
    },
    {
        name: "Chittaura Lake Cafe",
        city: "Bahraich",
        area: "Ghasiyari Mandi",
        road: {
            name: "Nanpara Road",
            subRoads: ["Lucknow Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Tea"],
        img: photo
    },

    // --- Gonda ---
    {
        name: "Swaminarayan Chhapaiya Shop",
        city: "Gonda",
        area: "Maharajganj",
        road: {
            name: "Ayodhya Road",
            subRoads: ["Faizabad Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Books", "Idols", "Souvenirs"],
        img: photo
    },
    {
        name: "Gonda Market Apparel",
        city: "Gonda",
        area: "Maharajganj",
        road: {
            name: "Ayodhya Road",
            subRoads: ["Balrampur Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Home Goods"],
        img: photo
    },

    // --- Basti ---
    {
        name: "Basti Market Groceries",
        city: "Basti",
        area: "Gandhi Nagar",
        road: {
            name: "NH 28",
            subRoads: ["Gorakhpur Road"]
        },
        category: "Food",
        subCategory: "Dairy Products",
        categoryType: "Milk",
        class: "Economy",
        establishment: "Market",
        items: ["Fresh Produce", "Dairy", "Spices"],
        img: photo
    },
    {
        name: "Sugar Mill Canteen",
        city: "Basti",
        area: "Gandhi Nagar",
        road: {
            name: "NH 28",
            subRoads: ["Faizabad Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Tea", "Samosa", "Jalebi"],
        img: photo
    },

    // --- Faizabad ---
    {
        name: "Hanuman Garhi Prasad Shop",
        city: "Faizabad",
        area: "Ayodhya",
        road: {
            name: "NH 28",
            subRoads: ["Faizabad Bypass"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets", // Best fit
        class: "Economy",
        establishment: "Storefront",
        items: ["Laddoo", "Pedas", "Religious Offerings"],
        img: photo
    },
    {
        name: "Kanak Bhawan Souvenirs",
        city: "Faizabad",
        area: "Ayodhya",
        road: {
            name: "NH 28",
            subRoads: ["Gorakhpur Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Books", "Souvenirs"],
        img: photo
    },

    // --- Gorakhpur ---
    {
        name: "Gorakhnath Temple Prasad",
        city: "Gorakhpur",
        area: "Gorakhnath Temple Area",
        road: {
            name: "NH 28",
            subRoads: ["Airport Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Pedas", "Sweets", "Offerings"],
        img: photo
    },
    {
        name: "City Mall Gorakhpur",
        city: "Gorakhpur",
        area: "Gorakhnath Temple Area",
        road: {
            name: "NH 28",
            subRoads: ["Kushinagar Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Standard",
        establishment: "Large",
        items: ["Apparel", "Electronics", "Food Court"],
        img: photo
    },

    // --- Deoria ---
    {
        name: "Deoria Market Clothes",
        city: "Deoria",
        area: "Civil Lines",
        road: {
            name: "NH 28B",
            subRoads: ["Gorakhpur Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Accessories"],
        img: photo
    },
    {
        name: "Hanuman Mandir Shop",
        city: "Deoria",
        area: "Civil Lines",
        road: {
            name: "NH 28B",
            subRoads: ["Padrauna Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Religious",
        class: "Economy",
        establishment: "Storefront",
        items: ["Religious Books", "Idols", "Pooja Items"],
        img: photo
    },

    // --- Kushinagar ---
    {
        name: "Mahaparinirvana Temple Shop",
        city: "Kushinagar",
        area: "Mahaparinirvana Temple Area",
        road: {
            name: "NH 28",
            subRoads: ["Gorakhpur Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Buddhist Artifacts", "Souvenirs", "Books"],
        img: photo
    },
    {
        name: "Kushinagar Museum Shop",
        city: "Kushinagar",
        area: "Mahaparinirvana Temple Area",
        road: {
            name: "NH 28",
            subRoads: ["Padrauna Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["History Books", "Artifact Replicas", "Souvenirs"],
        img: photo
    },

    // --- Ghazipur ---
    {
        name: "Ghazipur Market",
        city: "Ghazipur",
        area: "Collectorate",
        road: {
            name: "NH 24",
            subRoads: ["Varanasi Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Local Goods"],
        img: photo
    },
    {
        name: "Ganga Bridge Dhaba",
        city: "Ghazipur",
        area: "Collectorate",
        road: {
            name: "NH 24",
            subRoads: ["Ballia Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Curries",
        class: "Economy",
        establishment: "Storefront",
        items: ["Dhaba Food", "Parathas", "Tea"],
        img: photo
    },

    // --- Ballia ---
    {
        name: "Ballia Market Apparel",
        city: "Ballia",
        area: "Station Road",
        road: {
            name: "NH 31",
            subRoads: ["Bansdih Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Accessories"],
        img: photo
    },
    {
        name: "Surha Tal Foods",
        city: "Ballia",
        area: "Station Road",
        road: {
            name: "NH 31",
            subRoads: ["Rasra Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Local Snacks", "Tea", "Cold Drinks"],
        img: photo
    },

    // --- Chhapra ---
    {
        name: "Chhapra Civil Court Canteen",
        city: "Chhapra",
        area: "Dahiyawan",
        road: {
            name: "NH 19",
            subRoads: ["Saran Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Samosa", "Tea", "Jalebi"],
        img: photo
    },
    {
        name: "Gautam Asthan Sweets",
        city: "Chhapra",
        area: "Dahiyawan",
        road: {
            name: "NH 19",
            subRoads: ["Garkha Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Bengali Sweets",
        class: "Standard",
        establishment: "Storefront",
        items: ["Rasgulla", "Sweets", "Namkeens"],
        img: photo
    },

    // --- Muzaffarpur ---
    {
        name: "Litchi Gardens Cafe",
        city: "Muzaffarpur",
        area: "Motijheel",
        road: {
            name: "NH 77",
            subRoads: ["Chhata Chowk Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Storefront",
        items: ["Litchi Juice", "Fresh Juices", "Snacks"],
        img: photo
    },
    {
        name: "Muzaffarpur Market Apparel",
        city: "Muzaffarpur",
        area: "Motijheel",
        road: {
            name: "NH 77",
            subRoads: ["Akharaghat Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Ethnic Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Local Sarees", "Salwar Suits", "Accessories"],
        img: photo
    },

    // --- Darbhanga ---
    {
        name: "Darbhanga Raj Palace Shop",
        city: "Darbhanga",
        area: "Lalbagh",
        road: {
            name: "NH 57",
            subRoads: ["Tower Chowk Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Souvenirs", "Books", "Local Crafts"],
        img: photo
    },
    {
        name: "Manokamna Mandir Prasad",
        city: "Darbhanga",
        area: "Lalbagh",
        road: {
            name: "NH 57",
            subRoads: ["Kadira Bad Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Pedas", "Sweets", "Offerings"],
        img: photo
    },

    // --- Begusarai ---
    {
        name: "Begusarai Market General",
        city: "Begusarai",
        area: "Barouni",
        road: {
            name: "NH 31",
            subRoads: ["Lakhminia Road"]
        },
        category: "Clothing",
        subCategory: "Men",
        categoryType: "Shirts",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Home Goods"],
        img: photo
    },
    {
        name: "Simaria Ghat Food",
        city: "Begusarai",
        area: "Barouni",
        road: {
            name: "NH 31",
            subRoads: ["Barauni Refinery Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Chaat", "Samosa", "Tea"],
        img: photo
    },

    // --- Bhagalpur ---
    {
        name: "Bhagalpur Silk Institute Shop",
        city: "Bhagalpur",
        area: "Khalifabagh",
        road: {
            name: "NH 80",
            subRoads: ["Zero Mile Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Sarees",
        class: "Premium",
        establishment: "Storefront",
        items: ["Bhagalpuri Silk Sarees", "Dress Materials", "Scarves"],
        img: photo
    },
    {
        name: "Vikramshila University Bookstore",
        city: "Bhagalpur",
        area: "Khalifabagh",
        road: {
            name: "NH 80",
            subRoads: ["Nathnagar Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Educational",
        class: "Standard",
        establishment: "Office",
        items: ["Academic Books", "Novels", "Stationery"],
        img: photo
    },

    // --- Gaya ---
    {
        name: "Mahabodhi Temple Souvenirs",
        city: "Gaya",
        area: "Bodh Gaya",
        road: {
            name: "NH 22",
            subRoads: ["Dahiyawan Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Buddhist Artifacts", "Books", "Souvenirs"],
        img: photo
    },
    {
        name: "Vishnupad Temple Shop",
        city: "Gaya",
        area: "Bodh Gaya",
        road: {
            name: "NH 22",
            subRoads: ["Gaya-Bodhgaya Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Pedas", "Sweets", "Religious Offerings"],
        img: photo
    },

    // --- Rourkela ---
    {
        name: "Rourkela Steel Plant Souvenirs",
        city: "Rourkela",
        area: "Chhend",
        road: {
            name: "Ring Road",
            subRoads: ["Bondamunda Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Office",
        items: ["Industrial Souvenirs", "Books", "Models"],
        img: photo
    },
    {
        name: "Sector 19 Market",
        city: "Rourkela",
        area: "Chhend",
        road: {
            name: "Ring Road",
            subRoads: ["Panposh Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Apparel", "Footwear", "Home Goods"],
        img: photo
    },

    // --- Cuttack ---
    {
        name: "Barabati Fort View Cafe",
        city: "Cuttack",
        area: "Buxi Bazaar",
        road: {
            name: "Ring Road",
            subRoads: ["Jobra Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Light Meals"],
        img: photo
    },
    {
        name: "Cuttack Chandi Temple Shop",
        city: "Cuttack",
        area: "Buxi Bazaar",
        road: {
            name: "Ring Road",
            subRoads: ["Mangalabag Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Economy",
        establishment: "Storefront",
        items: ["Religious Idols", "Pooja Items", "Souvenirs"],
        img: photo
    },

    // --- Puri ---
    {
        name: "Jagannath Temple Prasad",
        city: "Puri",
        area: "Grand Road",
        road: {
            name: "Marine Drive",
            subRoads: ["VIP Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Mahaprasad", "Khaja", "Sweets"],
        img: photo
    },
    {
        name: "Puri Beach Snacks",
        city: "Puri",
        area: "Grand Road",
        road: {
            name: "Marine Drive",
            subRoads: ["Market Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Seafood Snacks", "Chaat", "Cold Drinks"],
        img: photo
    },

    // --- Visakhapatnam ---
    {
        name: "RK Beach Cafe",
        city: "Visakhapatnam",
        area: "Rushikonda",
        road: {
            name: "Beach Road",
            subRoads: ["NH 16"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Sea View"],
        img: photo
    },
    {
        name: "Kailasagiri Souvenirs",
        city: "Visakhapatnam",
        area: "Rushikonda",
        road: {
            name: "Beach Road",
            subRoads: ["Sagarnagar Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Souvenirs", "Local Crafts", "Books"],
        img: photo
    },

    // --- Vijayawada ---
    {
        name: "Kanaka Durga Temple Shop",
        city: "Vijayawada",
        area: "Gandhinagar",
        road: {
            name: "NH 16",
            subRoads: ["Eluru Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Economy",
        establishment: "Storefront",
        items: ["Religious Idols", "Pooja Items", "Souvenirs"],
        img: photo
    },
    {
        name: "Prakasam Barrage Food Stalls",
        city: "Vijayawada",
        area: "Gandhinagar",
        road: {
            name: "NH 16",
            subRoads: ["Prakasam Barrage Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Corn", "Chaat", "Cold Drinks"],
        img: photo
    },

    // --- Guntur ---
    {
        name: "Guntur Mirchi Yard Store",
        city: "Guntur",
        area: "Brodipet",
        road: {
            name: "Main Road",
            subRoads: ["NH 16"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Spices", // Custom type
        class: "Standard",
        establishment: "Market",
        items: ["Chilies", "Spices", "Local Produce"],
        img: photo
    },
    {
        name: "Kondaveedu Fort Souvenirs",
        city: "Guntur",
        area: "Brodipet",
        road: {
            name: "Main Road",
            subRoads: ["Amaravati Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "History",
        class: "Economy",
        establishment: "Storefront",
        items: ["History Books", "Local Crafts", "Souvenirs"],
        img: photo
    },

    // --- Tirupati ---
    {
        name: "Tirumala Temple Shop",
        city: "Tirupati",
        area: "Alipiri",
        road: {
            name: "Tirupati-Tirumala Ghat Road",
            subRoads: ["SV Zoo Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Souvenirs", "Books"],
        img: photo
    },
    {
        name: "Talakona Waterfalls Snacks",
        city: "Tirupati",
        area: "Alipiri",
        road: {
            name: "Tirupati-Tirumala Ghat Road",
            subRoads: ["Airport Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Kiosk",
        items: ["Maggi", "Tea", "Cold Drinks"],
        img: photo
    },

    // --- Nellore ---
    {
        name: "Sri Ranganathaswamy Temple Shop",
        city: "Nellore",
        area: "AC Subba Reddy Road",
        road: {
            name: "NH 16",
            subRoads: ["Kovur Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Pooja Items", "Books"],
        img: photo
    },
    {
        name: "Nellore Beach Food Stalls",
        city: "Nellore",
        area: "AC Subba Reddy Road",
        road: {
            name: "NH 16",
            subRoads: ["Mypadu Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Seafood",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Fish Fry", "Prawn Fry", "Snacks"],
        img: photo
    },

    // --- Kakinada ---
    {
        name: "Coringa Wildlife Sanctuary Shop",
        city: "Kakinada",
        area: "Jagannadhapuram",
        road: {
            name: "Main Road",
            subRoads: ["Port Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Non-Fiction",
        class: "Standard",
        establishment: "Office",
        items: ["Wildlife Books", "Souvenirs", "Maps"],
        img: photo
    },
    {
        name: "Kakinada Beach Cafe",
        city: "Kakinada",
        area: "Jagannadhapuram",
        road: {
            name: "Main Road",
            subRoads: ["NH 16"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Storefront",
        items: ["Fresh Juices", "Snacks", "Ice Cream"],
        img: photo
    },

    // --- Rajahmundry ---
    {
        name: "Godavari Riverfront Food",
        city: "Rajahmundry",
        area: "Morampudi",
        road: {
            name: "NH 16",
            subRoads: ["Godavari Bund Road"]
        },
        category: "Food",
        subCategory: "Indian Cuisine",
        categoryType: "Andhra Cuisine", // Custom type
        class: "Economy",
        establishment: "Storefront",
        items: ["Local Food", "Snacks", "Drinks"],
        img: photo
    },
    {
        name: "Cotton Museum Shop",
        city: "Rajahmundry",
        area: "Morampudi",
        road: {
            name: "NH 16",
            subRoads: ["Dowleswaram Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Office",
        items: ["Cotton Artifacts", "Books", "Souvenirs"],
        img: photo
    },

    // --- Warangal ---
    {
        name: "Warangal Fort Cafe",
        city: "Warangal",
        area: "Hanamkonda",
        road: {
            name: "NH 163",
            subRoads: ["Warangal-Kazipet Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Cold Drinks"],
        img: photo
    },
    {
        name: "Thousand Pillar Temple Shop",
        city: "Warangal",
        area: "Hanamkonda",
        road: {
            name: "NH 163",
            subRoads: ["Narsampet Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Souvenirs", "Books"],
        img: photo
    },

    // --- Karimnagar ---
    {
        name: "Elgandal Fort Souvenirs",
        city: "Karimnagar",
        area: "Kaman",
        road: {
            name: "NH 563",
            subRoads: ["Hyderabad Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Historical Souvenirs", "Books", "Local Crafts"],
        img: photo
    },
    {
        name: "Vemulawada Temple Shop",
        city: "Karimnagar",
        area: "Kaman",
        road: {
            name: "NH 563",
            subRoads: ["Manthani Road"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Ajmer Sweets",
        class: "Economy",
        establishment: "Storefront",
        items: ["Pedas", "Sweets", "Offerings"],
        img: photo
    },

    // --- Kochi ---
    {
        name: "Chinese Fishing Nets Cafe",
        city: "Kochi",
        area: "Fort Kochi",
        road: {
            name: "Princess Street",
            subRoads: ["Burgher Street"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Seafood",
        class: "Standard",
        establishment: "Storefront",
        items: ["Fresh Seafood", "Drinks", "Snacks"],
        img: photo
    },
    {
        name: "Jew Town Antiques",
        city: "Kochi",
        area: "Fort Kochi",
        road: {
            name: "Princess Street",
            subRoads: ["Rose Street"]
        },
        category: "Home Decor",
        subCategory: "Furniture",
        categoryType: "Tables", // Best fit for antiques
        class: "Luxury",
        establishment: "Storefront",
        items: ["Antiques", "Handicrafts", "Souvenirs"],
        img: photo
    },
    {
        name: "Lulu Mall Kochi",
        city: "Kochi",
        area: "Marine Drive",
        road: {
            name: "Shanmugham Road",
            subRoads: ["Chittoor Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Premium",
        establishment: "Large",
        items: ["Fashion Brands", "Electronics", "Food Court"],
        img: photo
    },

    // --- Thiruvananthapuram ---
    {
        name: "Padmanabhaswamy Temple Shop",
        city: "Thiruvananthapuram",
        area: "East Fort",
        road: {
            name: "Manjalikulam Road",
            subRoads: ["Attukal Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Souvenirs", "Books"],
        img: photo
    },
    {
        name: "Kovalam Beach Cafe",
        city: "Thiruvananthapuram",
        area: "Kowdiar",
        road: {
            name: "Kowdiar Road",
            subRoads: ["Vellayambalam Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Seafood",
        class: "Standard",
        establishment: "Storefront",
        items: ["Seafood", "Snacks", "Drinks"],
        img: photo
    },

    // --- Kozhikode ---
    {
        name: "Kozhikode Beach Snacks",
        city: "Kozhikode",
        area: "Mananchira",
        road: {
            name: "Beach Road",
            subRoads: ["Link Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Snacks",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Seafood Snacks", "Chaat", "Cold Drinks"],
        img: photo
    },
    {
        name: "Sweet Meat Street Sweets",
        city: "Kozhikode",
        area: "Mananchira",
        road: {
            name: "Beach Road",
            subRoads: ["Mini Bypass"]
        },
        category: "Food",
        subCategory: "Sweets",
        categoryType: "Bengali Sweets", // Best fit
        class: "Standard",
        establishment: "Storefront",
        items: ["Halwa", "Sweets", "Local Delicacies"],
        img: photo
    },

    // --- Thrissur ---
    {
        name: "Vadakkunnathan Temple Shop",
        city: "Thrissur",
        area: "Swaraj Round",
        road: {
            name: "Palace Road",
            subRoads: ["MG Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Pooja Items", "Books"],
        img: photo
    },
    {
        name: "Thrissur Zoo Souvenirs",
        city: "Thrissur",
        area: "Swaraj Round",
        road: {
            name: "Palace Road",
            subRoads: ["Shakthan Thampuran Palace Road"]
        },
        category: "Books & Stationery",
        subCategory: "Books",
        categoryType: "Children's Books",
        class: "Economy",
        establishment: "Storefront",
        items: ["Wildlife Books", "Souvenirs", "Toys"],
        img: photo
    },

    // --- Kannur ---
    {
        name: "St. Angelo Fort Cafe",
        city: "Kannur",
        area: "Thalassery",
        road: {
            name: "NH 66",
            subRoads: ["Stadium Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Standard",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Sea Views"],
        img: photo
    },
    {
        name: "Payyambalam Beach Market",
        city: "Kannur",
        area: "Thalassery",
        road: {
            name: "NH 66",
            subRoads: ["Fort Road"]
        },
        category: "Clothing",
        subCategory: "Women",
        categoryType: "Western Wear",
        class: "Economy",
        establishment: "Market",
        items: ["Beach Wear", "Souvenirs", "Local Crafts"],
        img: photo
    },

    // --- Mangaluru ---
    {
        name: "Kadri Manjunath Temple Shop",
        city: "Mangaluru",
        area: "Light House Hill Road",
        road: {
            name: "MG Road",
            subRoads: ["KS Rao Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Idols", "Pooja Items", "Souvenirs"],
        img: photo
    },
    {
        name: "Panambur Beach Food Stalls",
        city: "Mangaluru",
        area: "Light House Hill Road",
        road: {
            name: "MG Road",
            subRoads: ["Attavar Road"]
        },
        category: "Food",
        subCategory: "Fast Food",
        categoryType: "Seafood",
        class: "Economy",
        establishment: "Thela/Cart",
        items: ["Fish Fry", "Prawn Fry", "Snacks"],
        img: photo
    },

    // --- Mysuru ---
    {
        name: "Mysore Palace Souvenirs",
        city: "Mysuru",
        area: "Jayalakshmipuram",
        road: {
            name: "Ring Road",
            subRoads: ["Bogadi Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Premium",
        establishment: "Storefront",
        items: ["Mysore Silk", "Souvenirs", "Books"],
        img: photo
    },
    {
        name: "Mysore Zoo Cafe",
        city: "Mysuru",
        area: "Jayalakshmipuram",
        road: {
            name: "Ring Road",
            subRoads: ["Hunsur Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Fresh Juices",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Cold Drinks"],
        img: photo
    },

    // --- Hubballi ---
    {
        name: "Unkal Lake Cafe",
        city: "Hubballi",
        area: "Dharwad",
        road: {
            name: "NH 48",
            subRoads: ["Station Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Tea"],
        img: photo
    },
    {
        name: "Siddharoodh Math Shop",
        city: "Hubballi",
        area: "Dharwad",
        road: {
            name: "NH 48",
            subRoads: ["Lamington Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Religious Items", "Souvenirs", "Books"],
        img: photo
    },

    // --- Belagavi ---
    {
        name: "Belagavi Fort Cafe",
        city: "Belagavi",
        area: "Shahapur",
        road: {
            name: "NH 4",
            subRoads: ["Khanapur Road"]
        },
        category: "Food",
        subCategory: "Drinks",
        categoryType: "Coffee",
        class: "Economy",
        establishment: "Storefront",
        items: ["Coffee", "Snacks", "Cold Drinks"],
        img: photo
    },
    {
        name: "Kamala Basti Handicrafts",
        city: "Belagavi",
        area: "Shahapur",
        road: {
            name: "NH 4",
            subRoads: ["Shivaji Road"]
        },
        category: "Home Decor",
        subCategory: "Furnishings",
        categoryType: "Art Prints",
        class: "Standard",
        establishment: "Storefront",
        items: ["Local Crafts", "Souvenirs", "Textiles"],
        img: photo
    }
];


export const gridCategoryData = [
    { name: "Shops", path: "/shops", icon: <ShoppingBag size={28} /> },
    { name: "Housing Societies", path: "/housing", icon: <Home size={28} /> },
    { name: "Restaurants", path: "/restaurants", icon: <Utensils size={28} /> },
    { name: "Hospitals & Clinics", path: "/hospitals", icon: <Hospital size={28} /> },
    { name: "Schools & Colleges", path: "/schools", icon: <School size={28} /> },
    { name: "Sports & Gyms", path: "/sports", icon: <Dumbbell size={28} /> },
    { name: "Events & Entertainment", path: "/events", icon: <Theater size={28} /> },
    { name: "Travel & Tourism", path: "/travel", icon: <Plane size={28} /> },
    { name: "Beauty & Wellness", path: "/wellness", icon: <Heart size={28} /> },
    { name: "Automobile Services", path: "/automobile", icon: <Car size={28} /> },
];
