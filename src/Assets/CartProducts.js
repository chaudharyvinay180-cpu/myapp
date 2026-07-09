import Kurti from "../Assets/Kurti.jpg"
import T_Shirt from "../Assets/T_Shirt.jpg"
import Tank_Top from "../Assets/Tank_Top.jpg"
import Shirt from "../Assets/Shirt.jpg"
import Sweater from "../Assets/Sweater.jpg"
import Shorts from "../Assets/Shorts.jpg"
import Suit from "../Assets/Suit.jpg"
import Jean from "../Assets/Jean.jpg"
import Trouser from "../Assets/Trouser.jpg"
import Jacket from "../Assets/Jacket.jpg"
import Iphone from "../Assets/Iphone.jpg"
import Washing_Machine from "../Assets/Washing_Machine.jpg"
import Fridge from "../Assets/Fridge.jpg"
import Ipad from "../Assets/Ipad.jpg"
import LED_TV from "../Assets/LED_TV.jpg"
import Speakers from "../Assets/Speakers.jpg"
import Airpods from "../Assets/Airpods.jpg"
import Watch from "../Assets/Watch.jpg"
import Air_Conditioner from "../Assets/Air_Conditioner.jpg"
import Laptop from "../Assets/Laptop.jpg"
import Sofa from "../Assets/Sofa.jpg"
import King_Bed from "../Assets/King_Bed.jpg"
import Coffee_Table from "../Assets/Coffee_Table.jpg"
import Lamp from "../Assets/Lamp.jpg"
import Chair from "../Assets/Chair.jpg"
import Computer_Table from "../Assets/Computer_Table.jpg"
import Wardrobe from "../Assets/Wardrobe.jpg"
import Bedside_Table from "../Assets/Bedside_Table.jpg"
import Gaming_Chair from "../Assets/Gaming_Chair.jpg"
import Dressing_Table from "../Assets/Dressing_Table.jpg"
import Cricket_Bat from "../Assets/Cricket_Bat.jpg"
import Basketball from "../Assets/Basketball.jpg"
import Football from "../Assets/Football.jpg"
import Baseball_Bat from "../Assets/Baseball_Bat.jpg"
import Roller_Skate from "../Assets/Roller_Skate.jpg"
import Badminton_Racket from "../Assets/Badminton_Racket.jpg"
import Gym_Bag from "../Assets/Gym_Bag.jpg"
import Hockey from "../Assets/Hockey.jpg"
import Bicycle_Air_Pump from "../Assets/Bicycle_Air_Pump.jpg"
import Tennis_Racket from "../Assets/Tennis_Racket.jpg"

let CartProducts = [
    
{
    id: 1,
    name: "Elegant Designer Kurti",
    category: "Clothing",
    img: Kurti,
    new_price: 50.0,
    old_price: 80.5,
    description: "A stylish and comfortable kurti perfect for casual outings and festive occasions. Made with soft fabric for all-day comfort.",
    des: "Upgrade your wardrobe with this elegant kurti designed for both comfort and style. Crafted from soft, breathable fabric, it keeps you comfortable throughout the day. Its modern design makes it suitable for casual outings, festive celebrations, and family gatherings. The premium stitching ensures durability and long-lasting wear. Pair it effortlessly with leggings, jeans, or palazzos for different looks. A perfect choice for anyone who values fashion, versatility, and everyday comfort."
},
{
    id: 2,
    name: "Premium Cotton T-Shirt",
    category: "Clothing",
    img: T_Shirt,
    new_price: 40.0,
    old_price: 73.5,
    description: "A classic T-shirt crafted from breathable cotton for everyday wear. Pairs effortlessly with jeans and shorts.",
    des: "Enjoy everyday comfort with this premium cotton T-shirt designed for daily wear. The breathable fabric keeps you cool and relaxed in every season. Its classic fit complements both casual and sporty outfits with ease. Durable stitching ensures it maintains its shape after repeated washes. Pair it with jeans, shorts, or joggers for a stylish look. An essential wardrobe staple for people of all ages."
},
{
    id: 3,
    name: "Comfort Fit Tank Top",
    category: "Clothing",
    img: Tank_Top,
    new_price: 42.0,
    old_price: 75.5,
    description: "Lightweight tank top designed for workouts and warm-weather comfort. Keeps you cool throughout the day.",
    des: "Stay cool and comfortable with this lightweight tank top made for active lifestyles. The breathable material provides excellent airflow during workouts and outdoor activities. Its flexible fit allows unrestricted movement for maximum comfort. Perfect for gym sessions, jogging, or relaxing during hot weather. The high-quality fabric is soft against the skin and easy to maintain. A stylish and practical choice for everyday use."
},
{
    id: 4,
    name: "Classic Formal Shirt",
    category: "Clothing",
    img: Shirt,
    new_price: 45.0,
    old_price: 76.5,
    description: "A premium shirt suitable for office, business, and casual occasions. Offers a modern fit with lasting comfort.",
    des: "Look polished and confident with this premium shirt designed for every occasion. Its modern fit provides a smart appearance without compromising comfort. Made from quality fabric, it remains breathable and soft throughout the day. Suitable for office meetings, formal events, and casual outings alike. Durable stitching ensures long-lasting performance and easy maintenance. A timeless addition to every wardrobe."
},
{
    id: 5,
    name: "Soft Knitted Sweater",
    category: "Clothing",
    img: Sweater,
    new_price: 38.0,
    old_price: 55.5,
    description: "Soft knitted sweater that provides warmth without compromising style. Perfect for chilly days.",
    des: "Keep yourself warm with this soft knitted sweater crafted for comfort and elegance. The premium fabric provides excellent insulation during cold weather. Its stylish design pairs perfectly with jeans, trousers, or skirts. Lightweight construction ensures you stay comfortable without feeling bulky. Built with durable materials for long-lasting wear through multiple seasons. An ideal choice for everyday winter fashion."
},
{
    id: 6,
    name: "Casual Summer Shorts",
    category: "Clothing",
    img: Shorts,
    new_price: 20.0,
    old_price: 35.5,
    description: "Comfortable shorts made for everyday wear and outdoor activities. Lightweight fabric ensures maximum mobility.",
    des: "Experience unrestricted movement with these lightweight and comfortable shorts. Designed for outdoor adventures, workouts, and casual daily wear. The breathable fabric keeps you cool even on warm summer days. An elastic and comfortable fit provides excellent flexibility throughout the day. High-quality stitching offers durability for regular use. A practical addition to every casual wardrobe."
},
{
    id: 7,
    name: "Premium Formal Suit",
    category: "Clothing",
    img: Suit,
    new_price: 99.0,
    old_price: 119.5,
    description: "Elegant formal suit tailored for weddings, parties, and business events. Delivers a sharp and sophisticated look.",
    des: "Make a lasting impression with this elegant formal suit tailored to perfection. Designed for weddings, business meetings, and special occasions, it offers a refined appearance. The premium fabric provides exceptional comfort throughout long events. Its modern cut creates a sharp and sophisticated silhouette. Durable construction ensures years of reliable use with proper care. A must-have outfit for every gentleman's collection."
},
{
    id: 8,
    name: "Stylish Denim Jeans",
    category: "Clothing",
    img: Jean,
    new_price: 49.0,
    old_price: 79.5,
    description: "Durable denim jeans with a modern fit and premium finish. A wardrobe essential for every season.",
    des: "These premium denim jeans combine durability with timeless everyday style. Crafted from quality denim, they offer lasting comfort and flexibility. The modern fit complements a wide range of casual outfits. Easy to pair with T-shirts, shirts, or jackets for different occasions. Strong stitching ensures they withstand regular wear and washing. A reliable wardrobe essential suitable for every season."
},
{
    id: 9,
    name: "Modern Fit Trousers",
    category: "Clothing",
    img: Trouser,
    new_price: 25.0,
    old_price: 33.5,
    description: "Versatile trousers designed for work and casual outings. Comfortable fabric with a tailored appearance.",
    des: "Upgrade your wardrobe with these versatile trousers suitable for both work and leisure. The comfortable fabric offers all-day ease without sacrificing style. Their tailored fit provides a neat and professional appearance. Easy to pair with shirts, polos, or casual T-shirts for different looks. Durable construction ensures dependable everyday performance. A perfect balance of elegance, comfort, and practicality."
},
{
    id: 10,
    name: "Fashion Winter Jacket",
    category: "Clothing",
    img: Jacket,
    new_price: 55.0,
    old_price: 85.5,
    description: "Fashionable jacket that provides warmth and protection from cool weather. Ideal for everyday styling.",
    des: "Stay warm and stylish with this fashionable jacket designed for everyday wear. Its comfortable inner lining provides insulation during cool weather. The modern design easily complements both casual and semi-formal outfits. Durable materials ensure long-lasting protection against everyday use. Convenient pockets add functionality while enhancing the overall style. An excellent choice for anyone seeking comfort, warmth, and timeless fashion."
},
{
    id: 11,
    name: "Latest Generation iPhone",
    category: "Electronics",
    img: Iphone,
    new_price: 1199.0,
    old_price: 1300.5,
    description: "Powerful smartphone with an advanced camera, stunning display, and smooth performance. Perfect for work and entertainment.",
    des: "Experience advanced technology with this powerful smartphone designed for modern users. It features a high-quality camera system for capturing detailed photos and videos. The stunning display provides an immersive experience for entertainment and daily tasks. Smooth performance allows easy multitasking, gaming, and productivity. Built with premium materials for durability and a stylish appearance. A perfect device for work, communication, and entertainment needs."
},
{
    id: 12,
    name: "Automatic Washing Machine",
    category: "Electronics",
    img: Washing_Machine,
    new_price: 300.0,
    old_price: 350.5,
    description: "Efficient washing machine with multiple wash programs for everyday laundry. Saves time while delivering excellent cleaning.",
    des: "Make laundry easier with this efficient washing machine designed for modern homes. It offers multiple wash programs to handle different types of fabrics effectively. The powerful cleaning performance removes dirt while protecting your clothes. Its energy-efficient design helps save water and electricity during use. Built with reliable technology for long-lasting performance. A convenient appliance that saves time and delivers excellent washing results."
},
{
    id: 13,
    name: "Energy Efficient Refrigerator",
    category: "Electronics",
    img: Fridge,
    new_price: 350.0,
    old_price: 700.0,
    description: "Energy-efficient refrigerator with spacious storage to keep food fresh. Designed for modern kitchens.",
    des: "Keep your food fresh and organized with this spacious refrigerator built for modern kitchens. It provides efficient cooling to preserve freshness for longer periods. The large storage capacity allows you to store groceries, beverages, and essentials easily. Designed with energy-saving technology to reduce power consumption. Its stylish appearance adds a premium touch to your kitchen. A reliable appliance combining convenience, performance, and efficiency."
},
{
    id: 14,
    name: "Portable iPad Tablet",
    category: "Electronics",
    img: Ipad,
    new_price: 800.0,
    old_price: 1600.0,
    description: "Portable tablet ideal for productivity, entertainment, and creative work. Features a vibrant display and fast performance.",
    des: "Discover a powerful tablet designed for creativity, productivity, and entertainment. Its vibrant display delivers clear visuals for movies, games, and professional work. The fast processor ensures smooth performance while handling multiple tasks. Its portable design makes it convenient for use anywhere. Perfect for students, professionals, and creative users. A versatile device that combines performance, portability, and modern technology."
},
{
    id: 15,
    name: "Smart LED Television",
    category: "Electronics",
    img: LED_TV,
    new_price: 900.0,
    old_price: 1800.0,
    description: "Crystal-clear LED TV with immersive picture quality and smart features. Enjoy movies and games like never before.",
    des: "Enjoy an enhanced entertainment experience with this crystal-clear LED TV. It delivers impressive picture quality with vibrant colors and sharp details. Smart features provide easy access to your favorite content and applications. The large display creates an immersive experience for movies, sports, and gaming. Designed with modern technology for smooth and enjoyable viewing. A perfect addition to any living room entertainment setup."
},
{
    id: 16,
    name: "Premium Bluetooth Speakers",
    category: "Electronics",
    img: Speakers,
    new_price: 250.0,
    old_price: 500.0,
    description: "High-quality speakers delivering rich and powerful sound. Perfect for music, movies, and gaming.",
    des: "Enjoy powerful and immersive audio with these high-quality speakers. Designed to deliver rich sound with clear tones and strong bass. Perfect for listening to music, watching movies, or enhancing gaming experiences. The durable build ensures reliable performance for everyday entertainment. Easy to use and suitable for different setups at home or office. A great choice for anyone who values excellent sound quality."
},
{
    id: 17,
    name: "AirPods Pro 2",
    category: "Electronics",
    img: Airpods,
    new_price: 200.0,
    old_price: 220.5,
    description: "Wireless earbuds with clear audio and long battery life. Comfortable fit for all-day listening.",
    des: "Experience wireless freedom with these comfortable earbuds designed for everyday listening. They provide clear audio quality with balanced sound performance. The long-lasting battery allows extended usage without frequent charging. Their lightweight design ensures a comfortable fit throughout the day. Perfect for music, calls, workouts, and entertainment on the go. A stylish audio accessory combining convenience and performance."
},
{
        id: 18,
        name: "Old Money Luxury Watch",
        category: "Electronics",
        img: Watch,
        new_price: 510.0,
        old_price: 540.5,
        description: "Elegant old money style watch featuring a premium design, timeless appearance, and sophisticated look. Perfect for formal occasions and everyday luxury wear.",
        des: "Elevate your style with this classic old money inspired luxury watch designed for elegance and sophistication. Its timeless design adds a refined touch to both formal and casual outfits. Crafted with attention to detail, it offers a premium appearance that reflects confidence and class. The comfortable design makes it suitable for all-day wear without compromising style. Perfect for business meetings, special occasions, and everyday fashion. A must-have accessory for those who appreciate luxury, simplicity, and timeless elegance."
    },
{
    id: 19,
    name: "Energy Saving Air Conditioner",
    category: "Electronics",
    img: Air_Conditioner,
    new_price: 290.0,
    old_price: 320.5,
    description: "Powerful air conditioner that cools your room quickly while saving energy. Ideal for year-round comfort.",
    des: "Stay comfortable in every season with this powerful air conditioner. It provides fast and efficient cooling to maintain a pleasant indoor environment. The energy-saving technology helps reduce electricity usage while delivering strong performance. Designed for modern homes with easy operation and reliable functionality. Its efficient cooling system ensures comfort during hot weather. A smart choice for creating a refreshing and relaxing space."
},
{
    id: 20,
    name: "High Performance Laptop",
    category: "Electronics",
    img: Laptop,
    new_price: 800.0,
    old_price: 900.5,
    description: "Reliable laptop built for work, study, and entertainment. Delivers fast performance and long-lasting battery life.",
    des: "Boost your productivity with this reliable laptop designed for work, study, and entertainment. It delivers fast performance for multitasking, browsing, and creative applications. The long-lasting battery allows you to stay productive throughout the day. Its portable design makes it convenient for home, office, or travel use. Built with dependable hardware for smooth and efficient performance. A versatile device suitable for students, professionals, and everyday users."
},
{
    id: 21,
    name: "Luxury Comfort Sofa",
    category: "Furnitures",
    img: Sofa,
    new_price: 199.0,
    old_price: 220.5,
    description: "Relax in comfort with this spacious and stylish sofa. Designed with premium cushioning to complement any modern living room.",
    des: "Transform your living room with this stylish and comfortable sofa designed for modern homes. It features premium cushioning that provides excellent relaxation and support. The spacious seating area makes it perfect for family gatherings and entertaining guests. Crafted with durable materials, it ensures long-lasting performance and everyday comfort. Its elegant design blends easily with different interior styles. A perfect combination of luxury, comfort, and functionality for your home."
},
{
    id: 22,
    name: "Premium King Size Bed",
    category: "Furnitures",
    img: King_Bed,
    new_price: 230.0,
    old_price: 289.5,
    description: "Experience luxurious sleep with this king-size bed. Built with a sturdy frame for lasting comfort and support.",
    des: "Enjoy peaceful and comfortable sleep with this premium king-size bed. Designed with a strong and durable frame, it provides excellent stability and support. The spacious design offers plenty of room for a relaxing sleeping experience. Its elegant appearance adds a luxurious touch to your bedroom décor. Built with quality materials for long-lasting use and reliability. An ideal choice for creating a stylish and comfortable bedroom space."
},
{
    id: 23,
    name: "Modern Wooden Coffee Table",
    category: "Furnitures",
    img: Coffee_Table,
    new_price: 150.0,
    old_price: 200.5,
    description: "A modern coffee table that adds elegance to your living space. Perfect for serving guests or displaying decorative items.",
    des: "Add a modern touch to your living room with this elegant coffee table. Designed to combine beauty and functionality, it enhances your home décor effortlessly. The spacious tabletop provides enough room for serving guests or displaying accessories. Its sturdy construction ensures durability and everyday reliability. The stylish finish complements various furniture arrangements and interiors. A practical and attractive addition to any contemporary living space."
},
{
    id: 24,
    name: "Decorative Table Lamp",
    category: "Furnitures",
    img: Lamp,
    new_price: 69.0,
    old_price: 79.5,
    description: "Brighten your room with this stylish table lamp. Provides warm lighting while enhancing your home décor.",
    des: "Create a warm and inviting atmosphere with this stylish table lamp. It provides soft lighting that enhances the comfort and beauty of your room. The elegant design makes it suitable for bedrooms, offices, and living areas. Built with quality materials for reliable and long-lasting performance. Its compact size allows easy placement on tables, desks, or shelves. A perfect decorative piece that combines lighting and style."
},
{
    id: 25,
    name: "Comfortable Office Chair",
    category: "Furnitures",
    img: Chair,
    new_price: 10.0,
    old_price: 15.5,
    description: "Comfortable and durable chair suitable for home or office use. Its sturdy construction ensures long-lasting performance.",
    des: "Enjoy comfortable seating with this durable chair designed for everyday use. Its strong construction provides excellent stability and support for long hours. Suitable for homes, offices, study areas, and dining spaces. The simple yet stylish design fits easily with different interiors. Made from quality materials to ensure reliable performance over time. A practical seating solution that offers comfort, strength, and value."
},
{
    id: 26,
    name: "Gaming & Work Table",
    category: "Furnitures",
    img: Computer_Table,
    new_price: 99.0,
    old_price: 110.5,
    description: "A spacious computer table designed for work and gaming setups. Offers ample room for your devices and accessories.",
    des: "Build your perfect workspace with this spacious computer table designed for productivity. It provides enough surface area for computers, monitors, and accessories. The strong structure ensures stability during work or gaming sessions. Its modern design adds a professional look to your room. Suitable for students, professionals, and gaming enthusiasts. A smart furniture choice for an organized and comfortable workspace."
},
{
    id: 27,
    name: "Spacious Storage Wardrobe",
    category: "Furnitures",
    img: Wardrobe,
    new_price: 299.0,
    old_price: 350.5,
    description: "Keep your clothes organized with this spacious wardrobe. Features a sleek design and generous storage compartments.",
    des: "Organize your clothing collection with this spacious and stylish wardrobe. Designed with multiple storage compartments, it keeps your belongings neatly arranged. The sleek appearance adds elegance to modern bedrooms. Its durable construction provides reliable storage for years. The practical design makes organizing clothes, accessories, and essentials easier. A perfect combination of storage capacity, style, and convenience."
},
{
    id: 28,
    name: "Compact Bedside Table",
    category: "Furnitures",
    img: Bedside_Table,
    new_price: 25.0,
    old_price: 30.5,
    description: "Compact bedside table with convenient storage for your essentials. A perfect addition to any bedroom.",
    des: "Keep your bedroom organized with this compact and functional bedside table. It provides convenient storage space for books, lamps, and personal items. The stylish design complements different bedroom furniture styles. Its durable build ensures dependable everyday use. The compact size makes it ideal for both small and large rooms. A useful addition that brings comfort and organization beside your bed."
},
{
    id: 29,
    name: "Ergonomic Gaming Chair",
    category: "Furnitures",
    img: Gaming_Chair,
    new_price: 22.0,
    old_price: 25.5,
    description: "Ergonomic gaming chair built for long hours of comfort. Adjustable features provide excellent back and neck support.",
    des: "Experience superior comfort during gaming and work sessions with this ergonomic chair. Designed for long hours of use, it provides excellent back and neck support. Adjustable features allow you to customize your sitting position easily. The comfortable design helps improve posture and reduce fatigue. Built with durable materials for reliable long-term performance. A perfect choice for gamers, streamers, and professionals."
},
{
    id: 30,
    name: "Elegant Mirror Dressing Table",
    category: "Furnitures",
    img: Dressing_Table,
    new_price: 25.0,
    old_price: 30.5,
    description: "Elegant dressing table with a spacious mirror and storage drawers. Perfect for organizing cosmetics and accessories.",
    des: "Add elegance and functionality to your bedroom with this stylish dressing table. It features a spacious mirror and convenient storage drawers for daily essentials. The beautiful design enhances your room décor while providing practical organization. Its durable construction ensures long-lasting use and reliability. Perfect for storing cosmetics, accessories, and personal items neatly. A stylish furniture piece that combines beauty, comfort, and convenience."
},
{
    id: 31,
    name: "Professional Cricket Bat",
    category: "Sports",
    img: Cricket_Bat,
    new_price: 199.0,
    old_price: 250.5,
    description: "High-quality cricket bat crafted for powerful shots and better control. Suitable for practice sessions and competitive matches.",
    des: "Improve your cricket performance with this high-quality bat designed for power and precision. It offers excellent balance and control for better shot-making during games. The strong construction provides durability for regular practice and competitive matches. Its lightweight design allows comfortable handling and quick movement. Suitable for beginners as well as experienced players looking for reliable equipment. A perfect choice for enhancing confidence and performance on the cricket field."
},
{
    id: 32,
    name: "Premium Match Basketball",
    category: "Sports",
    img: Basketball,
    new_price: 399.0,
    old_price: 450.5,
    description: "Premium basketball designed for excellent grip and durability. Ideal for indoor and outdoor games.",
    des: "Enjoy an exciting basketball experience with this premium-quality ball designed for all players. It provides excellent grip for better handling and accurate control during games. The durable outer material makes it suitable for both indoor and outdoor courts. Its strong construction ensures consistent performance over time. Perfect for practice sessions, friendly matches, and competitive games. A reliable choice for basketball enthusiasts of all skill levels."
},
{
    id: 33,
    name: "Durable Training Football",
    category: "Sports",
    img: Football,
    new_price: 100.0,
    old_price: 110.5,
    description: "Durable football with superior bounce and control. Perfect for training sessions and competitive play.",
    des: "Take your football games to the next level with this durable and high-performance football. Designed with excellent bounce and control for accurate passes and shots. The strong outer layer provides durability during intense matches and training sessions. Its balanced design ensures smooth movement on different playing surfaces. Suitable for beginners, athletes, and professional practice. A great sports essential for every football lover."
},
{
    id: 34,
    name: "Professional Baseball Bat",
    category: "Sports",
    img: Baseball_Bat,
    new_price: 150.0,
    old_price: 200.5,
    description: "Strong and lightweight baseball bat built for maximum performance. Offers excellent balance and hitting power.",
    des: "Achieve better performance on the field with this strong and lightweight baseball bat. Designed for excellent balance, it helps players deliver powerful and accurate hits. The durable material provides long-lasting reliability during regular use. Its comfortable grip allows better control and handling. Suitable for training sessions, practice games, and competitive matches. A dependable choice for players who want strength and precision."
},
{
    id: 35,
    name: "Comfort Roller Skates",
    category: "Sports",
    img: Roller_Skate,
    new_price: 110.0,
    old_price: 120.5,
    description: "Comfortable roller skates designed for smooth rides and better stability. Great for beginners and experienced skaters alike.",
    des: "Experience fun and smooth rides with these comfortable roller skates designed for all skill levels. They provide excellent stability and control for safe skating sessions. The comfortable design helps reduce fatigue during longer rides. Built with durable materials to handle regular outdoor and indoor use. Perfect for beginners learning skating and experienced users improving their skills. A great combination of comfort, safety, and performance."
},
{
    id: 36,
    name: "Lightweight Badminton Racket",
    category: "Sports",
    img: Badminton_Racket,
    new_price: 110.0,
    old_price: 130.5,
    description: "Lightweight badminton racket offering excellent grip and precision. Perfect for practice and competitive matches.",
    des: "Enhance your badminton gameplay with this lightweight racket designed for speed and accuracy. It offers a comfortable grip for better control during intense matches. The balanced frame helps players make powerful and precise shots. Its durable construction ensures reliable performance for regular practice. Suitable for beginners and professional players alike. A perfect sports accessory for improving your skills on the court."
},
{
    id: 37,
    name: "Multi Purpose Gym Bag",
    category: "Sports",
    img: Gym_Bag,
    new_price: 9.0,
    old_price: 11.5,
    description: "Spacious gym bag with multiple compartments for all your workout essentials. Durable and easy to carry.",
    des: "Carry your workout essentials conveniently with this spacious and durable gym bag. It features multiple compartments to organize clothes, shoes, and accessories. The strong material ensures reliable use during daily activities and travel. Its lightweight design makes it easy to carry wherever you go. Perfect for gym sessions, sports activities, and outdoor adventures. A practical companion for maintaining an active lifestyle."
},
{
    id: 38,
    name: "Professional Hockey Stick",
    category: "Sports",
    img: Hockey,
    new_price: 99.0,
    old_price: 120.5,
    description: "Premium hockey stick built for accuracy, control, and durability. Suitable for training and professional matches.",
    des: "Improve your hockey skills with this premium hockey stick designed for performance. It provides excellent control and accuracy for better passes and shots. The durable construction makes it suitable for regular training and competitive matches. Its balanced design allows comfortable handling during intense gameplay. Built to support players of different experience levels. A reliable choice for anyone passionate about hockey."
},
{
    id: 39,
    name: "Portable Bicycle Air Pump",
    category: "Sports",
    img: Bicycle_Air_Pump,
    new_price: 12.0,
    old_price: 15.5,
    description: "Portable bicycle air pump that inflates tires quickly and efficiently. Lightweight design makes it easy to carry on every ride.",
    des: "Keep your bicycle ready for every journey with this portable air pump. It provides quick and efficient tire inflation whenever needed. The lightweight design makes it easy to carry during cycling trips and outdoor adventures. Built with durable materials for reliable long-term use. Its convenient size allows easy storage in bags or bicycle accessories. A useful tool for cyclists who value safety and preparedness."
},
{
    id: 40,
    name: "Professional Tennis Racket",
    category: "Sports",
    img: Tennis_Racket,
    new_price: 119.0,
    old_price: 130.5,
    description: "Professional tennis racket designed for powerful shots and precise control. Lightweight frame ensures excellent handling on the court.",
    des: "Elevate your tennis performance with this professional-quality racket designed for control and power. Its lightweight frame allows quick movement and comfortable handling during matches. The balanced structure helps players deliver accurate and powerful shots. Built with durable materials to provide consistent performance over time. Suitable for training sessions and competitive games. A great choice for players aiming to improve their skills on the court."
}


]

export default CartProducts