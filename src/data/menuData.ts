import { MenuData } from '../types/menu';

export const menuData: MenuData = {
  categories: [
    {
      id: 'pije-freskuese',
      name: {
        en: 'Refreshing Drinks',
        al: 'Pije Freskuese'
      },
      items: [
        {
          id: 'ujë-natyral',
          name: {
            en: 'Natural Water',
            al: 'Uje Natyral'
          },
          description: {
            en: 'Fresh still water, sourced from natural springs',
            al: 'Ujë i freskët natyral'
          },
          price: 0.70,
          imageUrl: '/images/ujë-natyral.PNG'
        },
        {
          id: 'ujë-mineral',
          name: {
            en: 'Mineral Water',
            al: 'Ujë Mineral'
          },
          description: {
            en: 'Sparkling water with natural minerals, perfectly refreshing.',
            al: 'Ujë me gaz dhe minerale natyrale për freski'
          },
          price: 0.80,
          imageUrl: '/images/UjeMineralDea.PNG'
        },
        {
          id: 'Laçin',
          name: {
            en: 'Laçin',
            al: 'Laçin'
          },
          description: {
            en: 'Sparkling water with lemon',
            al: 'Pije e gazuar me limon'
          },
          price: 0.80,
          imageUrl: '/images/Laqin.PNG'
        },
        {
          id: 'coca-cola',
          name: {
            en: 'Coca Cola',
            al: 'Coca Cola'
          },
          description: {
            en: 'Classic cola drink',
            al: 'Pije klasike cola'
          },
          price: 1.30,
          imageUrl: '/images/Coca cola.PNG'
        },
        {
          id: 'fanta',
          name: {
            en: 'Fanta',
            al: 'Fanta'
          },
          description: {
            en: 'Orange flavored drink',
            al: 'Pije me shije portokalli'
          },
          price: 1.30,
          imageUrl: '/images/Fanta.PNG'
        },
        {
          id: 'schweppes',
          name: {
            en: 'Schweppes',
            al: 'Schweppes'
          },
          description: {
            en: 'Carbonated drink with lemon or tonic flavor',
            al: 'Pije e gazuar me aromë limoni ose toniku'
          },
          price: 1.30,
          imageUrl: '/images/Schweppes.PNG'
        },
        {
          id: 'ice Tea',
          name: {
            en: 'Ice Tea',
            al: 'Çaj i ftohtë'
          },
          description: {
            en: 'Sweetened iced tea with lemon or peach',
            al: 'Çaj i ftohtë i ëmbëlsuar me limon apo pjeshkë'
          },
          price: 1.30,
          imageUrl: '/images/Ice Tea.PNG'
        },
        {
          id: 'redbull',
          name: {
            en: 'Red Bull',
            al: 'Red Bull'
          },
          description: {
            en: 'Energy drink with caffeine for instant boost.',
            al: 'Pije energjike me kafeinë për energji të menjëhershme'
          },
          price: 2.50,
          imageUrl: '/images/redbull.PNG'
        },
        {
          id: 'Lengje',
          name: {
            en: 'Juices',
            al: 'Lengje'
          },
          description: {
            en: 'Fresh fruit juices for every taste',
            al: 'Lëngje të freskëta frutash për çdo shije'
          },
          price: 1.30,
          imageUrl: '/images/Lengje.jpg' // No file provided, left as placeholder
        },
        {
          id: 'Lemonadë',
          name: {
            en: 'Lemonade',
            al: 'Lemonadë'
          },
          description: {
            en: 'Refreshing drink made with lemon and sugar',
            al: 'Pije freskuese me limon dhe sheqer'
          },
          price: 1.00,
          imageUrl: '/images/Lemonadë.jpg' // No file provided, left as placeholder
        },
        {
          id: 'Boronicë',
          name: {
            en: 'Blueberry',
            al: 'Boronicë'
          },
          description: {
            en: 'Blueberry juice with sweet, natural flavor.',
            al: 'Lëng boronice me shije të ëmbël dhe natyrale'
          },
          price: 1.00,
          imageUrl: '/images/Boronicë.PNG'
        }
      ]
    },
    {
      id: 'pije-te-ngrohta',
      name: {
        en: 'Hot Drinks',
        al: 'Pije të Ngrohta'
      },
      items: [
        {
          id: 'espresso',
          name: {
            en: 'Espresso',
            al: 'Espresso'
          },
          description: {
            en: 'Short, strong and aromatic coffee served in a small cup',
            al: 'Kafe e shkurtër, e fortë dhe aromatike, e servuar në gotë të vogël'
          },
          price: 1.00
        },
        {
          id: 'macchiato',
          name: {
            en: 'Macchiato',
            al: 'Macchiato'
          },
          description: {
            en: 'Espresso with milk foam',
            al: 'Espresso me shkumë qumështi'
          },
          price: 1.00
        },
        {
          id: 'Bambi',
          name: {
            en: 'Bambi',
            al: 'Bambi'
          },
          description: {
            en: 'Milk and cocoa drink, sweet and loved by kids and adults alike',
            al: 'Pije me qumësht dhe kakao, e ëmbël dhe e dashur për fëmijë e të rritur.'
          },
          price: 1.20
        },
        {
          id: 'caffe-latte',
          name: {
            en: 'Caffe Latte',
            al: 'Caffe Latte'
          },
          description: {
            en: 'Qumësht i ngrohtë me dozë të butë kafeje për një shije kremoze',
            al: 'Warm milk with a mild dose of coffee for a creamy flavor'
          },
          price: 1.20
        },
        {
          id: 'nescafe',
          name: {
            en: 'Nescafe Classic',
            al: 'Nescafe Klasik'
          },
          description: {
            en: 'Classic instant coffee, quick and easy to prepare.',
            al: 'Kafe e tretshme klasike, e shpejtë për përgatitje'
          },
          price: 1.00
        },
        {
          id: 'turkish coffe',
          name: {
            en: 'Turkish coffe',
            al: 'Kafe Turke'
          },
          description: {
            en: 'Finely ground coffee brewed in a cezve for a strong, authentic taste',
            al: 'Kafe e bluar imët, e zier në xhezve për një shije të fortë dhe autentike'
          },
          price: 1.00
        },
        {
          id: 'double espresso',
          name: {
            en: 'Double Espresso',
            al: 'Espreso e dyfishte'
          },
          description: {
            en: 'Double shot of espresso for extra strength and flavor',
            al: 'Dyfish espresso për më shumë fuqi dhe aromë'
          },
          price: 1.80
        },
        {
          id: 'Filter Tea',
          name: {
            en: 'Filter Tea',
            al: 'Çaj Filter'
          },
          description: {
            en: 'Mixed fruit tea',
            al: 'Çaj frutash të përziera'
          },
          price: 1.00
        },
        {
          id: 'çaj rusi',
          name: {
            en: 'Black Tea',
            al: 'Çaj Rusi'
          },
          description: {
            en: 'Strong black tea, traditional in Albanian culture.',
            al: 'Çaj i zi i fortë, tradicional në kulturën shqiptare'
          },
          price: 0.50
        }
      ]
    },
    {
      id: 'mëngjes',
      name: {
        en: 'Breakfast',
        al: 'Mëngjes'
      },
      items: [
        {
          id: 'supe-pule',
          name: {
            en: 'Chicken Soup',
            al: 'Supe Pule'
          },
          description: {
            en: 'Warm chicken broth with vegetables, perfect for a light start',
            al: 'Supë e ngrohtë me mish pule dhe perime, për fillim të lehtë të ditës'
          },
          price: 1.50
        },
        {
          id: 'supe-vici',
          name: {
            en: 'Beef Soup',
            al: 'Supe Vici'
          },
          description: {
            en: 'Beef soup with rich traditional flavors',
            al: 'Supë e pasur me mish viçi dhe aroma tradicionale'
          },
          price: 1.50
        },
        {
          id: 'supe-perimesh',
          name: {
            en: 'Vegetable Soup',
            al: 'Supe Perimesh'
          },
          description: {
            en: 'Light soup made with fresh vegetables, suitable for every taste',
            al: 'Supë e lehtë me perime të freskëta, e përshtatshme për çdo shije'
          },
          price: 1.50
        },
        {
          id: 'omlet-me-Pershute',
          name: {
            en: 'Omelet with Ham',
            al: 'Omlet me Proshutë'
          },
          description: {
            en: 'Tasty omelet with eggs and grilled ham',
            al: 'Omlet i shijshëm me vezë dhe proshutë të pjekur'
          },
          price: 3.00
        },
        
        {
          id: 'omlet-suxhuk',
          name: {
            en: 'Sausage Omelet',
            al: 'Omlet Suxhuk'
          },
          description: {
            en: 'Bold-flavored omelet made with traditional sausage',
            al: 'Omlet me shije të fortë, i përgatitur me suxhuk tradicional'
          },
          price: 3.00
        },
        {
          id: 'omlet-shtepiak',
          name: {
            en: 'Homemade Omelet',
            al: 'Omlet Shtëpiak'
          },
          description: {
            en: 'Classic omelet with eggs, cheese, and local ingredients.',
            al: 'Omlet klasik me vezë, djathë dhe përbërës vendas'
          },
          price: 3.50
        },
        {
          id: 'llokuma',
          name: {
            en: 'Fried Dough',
            al: 'LLokuma'
          },
          description: {
            en: 'Soft fried dough bites, served warm and delightful',
            al: 'Petulla të skuqura të buta dhe të lehta, të shërbyera të ngrohta'
          },
          price: 3.00
        },
        {
          id: 'long me Pogaçe',
          name: {
            en: 'Cold cream with Pogaça',
            al: 'Long me Pogaçe'
          },
          description: {
            en: 'Fresh cold cream served with soft traditional pogaça bread.',
            al: 'Long i freskët i shoqëruar me pogaçe të butë tradicionale'
          },
          price: 3.00
        },
        {
          id: 'Speca në Kajmak',
          name: {
            en: 'Peppers in Kajmak',
            al: 'Speca në Kajmak'
          },
          description: {
            en: 'Peppers filled with fresh kajmak, a true Balkan flavor',
            al: 'Speca të mbushur me kajmak të freskët, shije autentike ballkanike'
          },
          price: 3.50
        },
        {
          id: 'Mëngjes Shtëpiak',
          name: {
            en: 'Homemade Breakfast',
            al: 'Mëngjes Shtëpiak'
          },
          description: {
            en: 'Ham, sausage, hot dogs, mushrooms, white sauce, cheese, cream cheese, pepper and red pepper sauce',
            al: 'Pershute, suxhuk, virshlle, kerpudha, long, djath, zdenke, spec dhe ajvar.'
          },
          price: 4.50
        }
      ]
    },
    {
      id: 'sallatat',
      name: {
        en: 'Salads',
        al: 'Sallatat'
      },
      items: [
        {
          id: 'sallata-me-mish-pule',
          name: {
            en: 'Chicken Salad',
            al: 'Sallata me Mish Pule'
          },
          description: {
            en: 'Fresh salad with grilled chicken',
            al: 'Sallatë e freskët me mish pule në skarë'
          },
          price: 3.50
        },
        {
          id: 'sallata-tuna',
          name: {
            en: 'Tuna Salad',
            al: 'Sallata Tuna'
          },
          description: {
            en: 'Fresh salad with tuna',
            al: 'Sallatë e freskët me tuna'
          },
          price: 3.50
        },
        {
          id: 'sallata-greke',
          name: {
            en: 'Greek Salad',
            al: 'Sallata Greke'
          },
          description: {
            en: 'Traditional Greek salad',
            al: 'Sallatë greke tradicionale'
          },
          price: 4.00
        },
        {
          id: 'sallata-mixe',
          name: {
            en: 'Mixed Salad',
            al: 'Sallatë Mixe'
          },
          description: {
            en: 'Fresh mix of vegetables: tomato, cucumber, green salad, and more.',
            al: 'Përzierje e perimeve të freskëta: domate, kastravec, sallatë jeshile, etj'
          },
          price: 2.50
        },
        {
          id: 'sallata-me-mish-viqi',
          name: {
            en: 'Beef Salad', 
            al: 'Sallatë me Mish Viçi'
          },
          description: {
            en: 'Salad with grilled beef pieces and fresh veggies.',
            al: 'Sallatë me copëza mishi viçi të pjekur, e shoqëruar me perime të freskëta'
          },
          price: 4.50
        },
        {
          id: 'sallata-shopska',
          name: {
            en: 'Shopska Salad',
            al: 'Sallata Shope'
          },
          description: {
            en: 'Balkan-style salad with tomato, cucumber, onion, and grated white cheese',
            al: 'Sallatë ballkanike me domate, kastravec, qepë dhe djathë të bardhë të grirë'
          },
          price: 3.00
        },
        {
          id: 'chef-salad',
          name: {
            en: 'Chef Salad',
            al: 'Shef Sallate'
          },
          description: {
            en: 'Rich salad with selected ingredients: meat, cheese, eggs, and vegetables',
            al: 'Sallatë e pasur me përbërës të zgjedhur: mish, djathë, vezë dhe perime'
          },
          price: 4.00
        },
        {
          id: 'sallata-gjelbert',
          name: {
            en: 'Green Salad',
            al: 'Sallata e Gjelbert'
          },
          description: {
            en: 'Simple salad with fresh greens, light and healthy.',
            al: 'Sallatë e thjeshtë me gjethe të freskëta, e lehtë dhe e shëndetshme'
          },
          price: 2.00
        }
      ]
    },
    {
      id: 'sanduiqet',
      name: {
        en: 'Sandwiches',
        al: 'Sanduiqet'
      },
      items: [
        {
          id: 'sandwiç-me-proshutë',
          name: {
            en: 'Ham Sandwich',
            al: 'Sanduiq me Proshutë'
          },
          description: {
            en: 'Fresh sandwich with ham',
            al: 'Sanduiq i freskët me proshutë'
          },
          price: 3.00
        },
        {
          id: 'sandwiç-me-suxhuk',
          name: {
            en: 'Sausage Sandwich',
            al: 'Sanduiq me Suxhuk'
          },
          description: {
            en: 'Grilled sausage sandwich',
            al: 'Sanduiq me suxhuk në skarë'
          },
          price: 3.00
        },
        {
          id: 'sanduiq-me-mish-pule',
          name: {
            en: 'Chicken Sandwich',
            al: 'Sanduiq me Pule'
          },
          description: {
            en: 'Grilled chicken sandwich',
            al: 'Sanduiq me mish pule ne skarë'
          },
          price: 3.50
        },
        {
          id: 'sanduiq-tuna',
          name: {
            en: 'Tuna Sandwich',
            al: 'Sanduiq Tuna'
          },
          description: {
            en: 'Fresh tuna sandwich',
            al: 'Sanduiq i freskët me tuna'
          },
          price: 3.50
        },
        {
          id: 'sanduiq-shtepiak',
          name: {
            en: 'Homemade Sandwich',
            al: 'Sanduiq Shtepiak'
          },
          description: {
            en: 'Fresh bread filled with ham, cheese, eggs, and seasonal veggies — warm and homemade flavor',
            al: 'Bukë e freskët e mbushur me proshutë, djathë, vezë dhe perime sezonale — shije tradicionale dhe e ngrohtë'
          },
          price: 3.50
        }
      ]
    },
    {
      id: 'hamburgerët',
      name: {
        en: 'Hamburgers',
        al: 'Hamburgerët'
      },
      items: [
        {
          id: 'hamburger-classic',
          name: {
            en: 'Classic Hamburger',
            al: 'Hamburger Klasik'
          },
          description: {
            en: 'Classic beef hamburger with french fries',
            al: 'Hamburger klasik me mish viçi dhe pomfrit'
          },
          price: 2.50
        },
        {
          id: 'hamburger shtëpiak',
          name: {
            en: 'Homemade Hamburger',
            al: 'Hamburger Shtëpiak'
          },
          description: {
            en: 'Soft bun filled with grilled beef patty, lettuce, tomato, and homemade sauces.',
            al: 'Bukë e butë e mbushur me mish të pjekur viçi, sallatë, domate dhe salca shtëpiake'
          },
          price: 3.00
        },
        {
          id: 'chicken-burger-classic',
          name: {
            en: 'Chicken Burger Classic',
            al: 'Chicken Burger Classic'
          },
          description: {
            en: 'Classic burger with grilled chicken fillet, lettuce, and mayo.',
            al: 'Burger klasik me fileto pule të pjekur, sallatë dhe majonezë.'
          },
          price: 2.50
        },
        {
          id: 'chicken-Burger-shtëpiak',
          name: {
            en: 'Homemade Chicken Burger',
            al: 'Chicken Burger Shtëpiak'
          },
          description: {
            en: 'Simple chicken burger',
            al: 'Burger i thjeshtë me mish pule'
          },
          price: 3.00
        },
        {
          id: 'double-burger',
          name: {
            en: 'Double Burger',
            al: 'Double Burger'
          },
          description: {
            en: 'Double beef burger',
            al: 'Burger i dyfishtë me mish'
          },
          price: 4.50
        },
        {
          id: 'pomfrit',
          name: {
            en: 'French Fries',
            al: 'Pomfrit'
          },
          description: {
            en: 'Golden crispy fries, served warm and tasty',
            al: 'Patate të skuqura të arta dhe krokante, të shërbyera të ngrohta'
          },
          price: 2.50
        },
        {
          id: 'suxhuk-shtëpiak',
          name: {
            en: 'Homemade Sausage',
            al: 'Suxhuk Shtëpiak'
          },
          description: {
            en: 'Grilled homemade sausage with selected spices and authentic flavor',
            al: 'Suxhuk i pjekur me përbërës të zgjedhur dhe shije autentike tradicionale'
          },
          price: 3.00
        },
        {
          id: 'cheese-burger',
          name: {
            en: 'Cheeseburger',
            al: 'Cheese Burger'
          },
          description: {
            en: 'Beef burger with melted cheese, served with vegetables and sauce.',
            al: 'Burger me mish viçi dhe djathë të shkrirë, i shoqëruar me perime dhe salcë.'
          },
          price: 2.80
        }
      ]
    },
    {
      id: 'grillada',
      name: {
        en: 'Grilled',
        al:'Specialitete nga Skara'
      },
      items: [
        {
          id: 'Specialitet Shtëpiak',
          name: {
            en: 'Homemade Specialty',
            al: 'Specialitet Shtëpiak'
          },
          description: {
            en: 'Grilled meat selection, prepared with a homemade recipe',
            al: 'Përzgjedhje mishi nga skara, e përgatitur sipas recetës shtëpiake.'
          },
          price: 9.00
        },
        {
          id: 'Ramstek me Sos',
          name: {
            en: 'Rump Steak with Sauce',
            al: 'Ramstek me Sos'
          },
          description: {
            en: 'Grilled rump steak served with special sauce.',
            al: 'Ramstek i pjekur në skarë, i shërbyer me sos special.'
          },
          price: 9.00
        },
        {
          id: 'Mish Viçi',
          name: {
            en: 'Baked Calf',
            al: 'Pjekurine Viçi'
          },
          description: {
            en: 'Fresh beef steak grilled to perfection with classic taste',
            al: 'Copë mish viçi i freskët i pjekur në skarë për një shije klasike'
          },
          price: 9.00
        },
        {
          id: 'Mish i Kombinuar',
          name: {
            en: 'Mixed Grill',
            al: 'Mish i Kombinuar'
          },
          description: {
            en: 'Mixed grilled meat varieties — rich in flavor.',
            al: 'Kombinim i llojeve të ndryshme mishi të pjekur — për shije të pasur.'
          },
          price: 9.00
        },
        {
          id: 'File Pule Natyrale',
          name: {
            en: 'Natural Chicken Fillet',
            al: 'File Pule Natyrale'
          },
          description: {
            en: 'Grilled chicken fillet without sauce — light and natural flavor',
            al: 'File pule i pjekur pa sos, me shije të pastër dhe të lehtë'
          },
          price: 4.50
        },
        {
          id: 'File Pule me Sos',
          name: {
            en: 'Chicken Fillet with Sauce',
            al: 'File Pule me Sos'
          },
          description: {
            en: 'Grilled chicken fillet served with special sauce for deeper flavor.',
            al: 'File pule i pjekur, i shoqëruar me sos të veçantë për shije më të thellë'
          },
          price: 5.00
        },
        {
          id: 'Kaqik Pule',
          name: {
            en: 'Chicken Skewers',
            al: 'Kaqik Pule'
          },
          description: {
            en: 'Chicken skewers with marinated grilled chunks on wooden sticks.',
            al: 'Kaqik pule me copëza të marinuara dhe të pjekura në shkopinj druri'

          },
          price: 5.00
        },
        {
          id: 'Shnicell Pule',
          name: {
            en: 'Chicken Schnitzel',
            al: 'Shnicell Pule'
          },
          description: {
            en: 'Breaded and fried chicken fillet — crispy and golden',
            al: 'File pule i paniruar dhe i skuqur, i shërbyer krokant dhe i artë'

          },
          price: 5.00
        }
      ]
    },
    {
      id: 'pizza',
      name: {
        en: 'Pizza',
        al: 'Pizza'
      },
      items: [
        {
          id: 'pizza-margherita',
          name: {
            en: 'Margherita Pizza',
            al: 'Pizza Margarita'
          },
          description: {
            en: 'Classic pizza with tomato sauce, mozzarella, and fresh basil.',
            al: 'Pizza klasike me salcë domate, mocarela dhe borzilok të freskët.'
          },
          sizes: [
            { size: 'Small', price: 3.00 },
            { size: 'Medium', price: 3.50 },
            { size: 'Large', price: 4.00}
          ]
        },
        {
          id: 'pizza-vegetariane',
          name: {
            en: 'Vegetarian Pizza',
            al: 'Pizza Vegjetariane'
          },
          description: {
            en: 'Pizza with a mix of fresh vegetables: mushrooms, peppers, onions, tomatoes.',
            al: 'Pizza me përzierje perimesh të freskëta: kërpudha, speca, qepë, domate'
          },
          sizes: [
            { size: 'Small', price: 3.50 },
            { size: 'Medium', price: 4.00 },
            { size: 'Large', price: 5.00 }
          ]
        },
        {
          id: 'pizza-proshute',
          name: {
            en: 'Ham Pizza',
            al: 'Pizza Proshute'
          },
          description: {
            en: 'Pizza with baked ham and soft cheese',
            al: 'Pizza me proshutë të pjekur dhe djathë të butë'
          },
          sizes: [
            { size: 'Small', price: 3.50 },
            { size: 'Medium', price: 4.00 },
            { size: 'Large', price: 5.00  }
          ]
        },
        {
          id: 'pizza-salami',
          name: {
            en: 'Sausage Pizza',
            al: 'Pizza Salami'
          },
          description: {
            en: 'Pizza with spicy salami slices and melted cheese.',
            al: 'Pizza me feta sallami pikant dhe djathë të shkrirë'
          },
          sizes: [
            { size: 'Small', price: 3.50 },
            { size: 'Medium', price: 4.00 },
            { size: 'Large', price: 5.00  }
          ]
        },
        {
          id: 'pizza-fungi',
          name: {
            en: 'Fungi Pizza',
            al: 'Pizza me kerpudha'
          },
          description: {
            en: 'Pizza with fungi and melted cheese.',
            al: 'Pizza kerpudha dhe djathë të shkrirë'
          },
          sizes: [
            { size: 'Small', price: 3.50 },
            { size: 'Medium', price: 4.00 },
            { size: 'Large', price: 5.00  }
          ]
        },
        {
          id: 'pizza-familix',
          name: {
            en: 'Familx-Pizza',
            al: 'Pizza Familix'
          },
          description: {
            en: 'Pizza with mushrooms, ham and olives',
            al: 'Pice me kerpudha , proshute dhe ullinje'
          },
          sizes: [
            { size: 'Small', price: 4.00 },
            { size: 'Medium', price: 4.50 },
            { size: 'Large', price: 5.50 }
          ]
        },
        {
          id: 'pizza-shtepie',
          name: {
            en: 'Homemade Pizza',
            al: 'Pizza Shtëpie'
          },
          description: {
            en: 'Homemade-style pizza with fresh ingredients and authentic taste.',
            al: 'Recetë e shtëpisë me përbërës të freskët dhe shije autentike.'
          },
          sizes: [
           { size: 'Small', price: 3.50 },
            { size: 'Medium', price: 4.00 },
            { size: 'Large', price: 5.00  }
          ]
        },
        {
          id: 'pizza-Tuna',
          name: {
            en: 'Tuna Pizza',
            al: 'Pizza Tuna'
          },
          description: {
            en: 'Pizza with tuna, onions, and tomato sauce.',
            al: 'Pizza me tuna, qepë dhe salcë domate.'
          },
          sizes: [
            { size: 'Small', price: 4.00 },
            { size: 'Medium', price: 4.50 },
            { size: 'Large', price: 5.50 }
          ]
        },
        {
          id: 'pizza-boloneze',
          name: {
            en: 'Bolognese Pizza',
            al: 'Pizza Boloneze'
          },
          description: {
            en: 'Tomato, garlic, oregano',
            al: 'Pizza me salcë mishi të grirë në stil bolonez dhe djathë'
          },
          sizes: [
            { size: 'Small', price: 4.00 },
            { size: 'Medium', price: 4.50 },
            { size: 'Large', price: 5.50 }
          ]
        },
        {
          id: 'pizza-me-mish-pule',
          name: {
            en: 'Chicken Pizza',
            al: 'Pizza me Mish Pule'
          },
          description: {
            en: 'Pizza with grilled chicken pieces and selected ingredients.',
            al: 'Pizza me copa mishi pule të pjekur dhe përbërës të tjerë të zgjedhur.'
          },
          sizes: [
            { size: 'Small', price: 4.00 },
            { size: 'Medium', price: 4.50 },
            { size: 'Large', price: 5.50 }
          ]
        },
        {
          id: 'pizza-gamberini',
          name: {
            en: 'Gamberini Pizza',
            al: 'Pizza Gamberini'
          },
          description: {
            en: 'Pizza with prawns',
            al: 'Pizza me karkaleca.'
          },
          sizes: [
            { size: 'Small', price: 7.00 },
            { size: 'Medium', price: 8.00 },
            { size: 'Large', price: 9.00 }
          ]
        },
        {
          id: 'pizza-familjare',
          name: {
            en: 'Family Pizza (collective)',
            al: 'Pizza Familjare'
          },
          description: {
            en: '60cm based on your will',
            al: '60cm sipas deshires'
          },
          price : 16
        }
      ]
    },
    {
      id: 'Pastas  ',
      name: {
        en: 'Pastas',
        al: 'Pastas'
      },
      items: [
        {
          id: 'pene-napoli',
          name: {
            en: 'Penne Napoli',
            al: 'Pene Napoli'
          },
          description: {
            en: 'Penne pasta with fresh tomato sauce and light Mediterranean herbs.',
            al: 'Pene me salcë domate të freskët dhe erëza të lehta mesdhetare.'
          },
          price: 3.50
        },
        {
          id: 'pene-Arabiata',
          name: {
            en: 'Penne Arrabbiata',
            al: 'Pene Arabiata'
          },
          description: {
            en: 'Spicy penne with tomato sauce and dried chili pepper',
            al: 'Pene pikante me salcë domate dhe spec të kuq të tharë'
          },
          price: 4.00
        },
        {
          id: 'pene-Carbonara',
          name: {
            en: 'Penne Carbonara',
            al: 'Pene Carbonara'
          },
          description: {
            en: 'Penne with eggs, cheese, and pancetta — a classic Italian recipe',
            al: 'Pene me vezë, djathë dhe pancetë — recetë klasike italiane.'
          },
          price: 4.00
        },
        {
          id: 'pene-me-Mish-Pule',
          name: {
            en: 'Penne with Chicken',
            al: 'Pene me Mish Pule'
          },
          description: {
            en: 'Penne with with grilled chicken chunks and creamy sauce',
            al: 'Pene me copa mishi pule të pjekur dhe salcë kremoze.'
          },
          price: 4.00
        },
        {
          id: 'Rigatoni al Frono',
          name: {
            en: 'Rigatoni Al Frono',
            al: 'Rigatoni Al Frono'
          },
          description: {
            en: 'Oven-baked rigatoni with sauce and melted cheese',
            al: 'Rigatoni të pjekur në furrë me salcë dhe djathë të shkrirë.'
          },
          price: 5.00
        },
        {
          id: 'Shpageti Boloneze',
          name: {
            en: 'Spaghetti Bolognese',
            al: 'Shpageti Boloneze'
          },
          description: {
            en: 'Spaghetti with minced meat sauce, tomato, and herbs',
            al: 'Shpageti me salcë mishi të grirë, domate dhe erëza'
          },
          price: 4.00
        },
        {
          id: 'Shpageti Napoli',
          name: {
            en: 'Spaghetti Napoli',
            al: 'Shpageti Napoli'
          },
          description: {
            en: 'Spaghetti with fresh tomato sauce and basil.',
            al: 'Shpageti me salcë domate të freskët dhe borzilok'
          },
          price: 3.50
        },
        {
          id: 'Tagliatele me Kërpudha',
          name: {
            en: 'Tagliatelle Fungi',
            al: 'Tagliatele me Kërpudha'
          },
          description: {
            en: 'Fresh tagliatelle with aromatic mushroom sauce',
            al: 'Tagliatele të freskëta me salcë kërpudhash aromatike'
          },
          price: 4.50
        },
        {
          id: 'Lasagna',
          name: {
            en: 'Lasagna',
            al: 'Lasagna'
          },
          description: {
            en: 'Layers of pasta, meat, and béchamel sauce baked to perfection',
            al: 'Shtresa pastash, mishi dhe salce bechamel të pjekura në furrë'
          },
          price: 5.00
        }
        
      ]
    }

    
  ]
};