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



let Allproducts =[
    {id: 1, name: "Kurti", category : "Cloths", img : Kurti , new_price : 50.0, old_price : 80.5},
    {id: 2, name: "T-Shirt", category : "Cloths", img : T_Shirt, new_price : 40.0, old_price : 73.5},
    {id: 3, name: "Tank Top", category : "Cloths", img : Tank_Top, new_price : 42.0, old_price : 75.5},
    {id: 4, name: "Shirt", category : "Cloths", img : Shirt, new_price : 45.0, old_price : 76.5},
    {id: 5, name: "Sweater", category : "Cloths", img : Sweater, new_price : 38.0, old_price : 55.5},
    {id: 6, name: "Shorts", category : "Cloths", img : Shorts, new_price : 20.0, old_price : 35.5},
    {id: 7, name: "Suit", category : "Cloths", img : Suit, new_price : 99.0, old_price : 119.5},
    {id: 8, name: "Jean", category : "Cloths", img : Jean, new_price : 49.0, old_price : 79.5},
    {id: 9, name: "Trouser", category : "Cloths", img : Trouser, new_price : 25.0, old_price : 33.5},
    {id: 10, name: "Jacket", category : "Cloths", img : Jacket, new_price : 55.0, old_price : 85.5},
    {id: 11, name: "Iphone", category : "Electronics", img : Iphone, new_price : 1199.0, old_price : 1300.5},
    {id: 12, name: "Washing Machine", category : "Electronics", img : Washing_Machine, new_price : 300.0, old_price : 350.5},
    {id: 13, name: "Fridge", category : "Electronics", img : Fridge, new_price : 350.0, old_price : 700.0},
    {id: 14, name: "Ipad", category : "Electronics", img : Ipad, new_price : 800.0, old_price : 1600.0},
    {id: 15, name: "LED TV", category : "Electronics", img : LED_TV, new_price : 900.0, old_price : 1800.0},
    {id: 16, name: "Speakers", category : "Electronics", img : Speakers, new_price : 250.0, old_price : 500.0},
    {id: 17, name: "Airpods", category : "Electronics", img : Airpods, new_price : 200.0, old_price : 220.5},
    {id: 18, name: "Watch", category : "Electronics", img : Watch, new_price : 510.0, old_price : 540.5},
    {id: 19, name: "Air Conditioner", category : "Electronics", img :Air_Conditioner , new_price : 290.0, old_price : 320.5},
    {id: 20, name: "Laptop", category : "Electronics", img : Laptop, new_price : 800.0, old_price : 900.5},
    {id: 21, name: "Sofa", category : "Furnitures", img : Sofa, new_price : 199.0, old_price : 220.5},
    {id: 22, name: "King Bed", category : "Furnitures", img : King_Bed, new_price : 230.0, old_price : 289.5},
    {id: 23, name: "Coffee Table", category : "Furnitures", img : Coffee_Table, new_price : 150.0, old_price : 200.5},
    {id: 24, name: "Lamp", category : "Furnitures", img : Lamp, new_price : 69.0, old_price : 79.5},
    {id: 25, name: "Chair", category : "Furnitures", img : Chair, new_price : 10.0, old_price : 15.5},
    {id: 26, name: "Computer Table", category : "Furnitures", img : Computer_Table, new_price : 99.0, old_price : 110.5},
    {id: 27, name: "Wardrobe", category : "Furnitures", img : Wardrobe, new_price : 299.0, old_price : 350.5},
    {id: 28, name: "Bedside Table", category : "Furnitures", img : Bedside_Table, new_price : 25.0, old_price : 30.5},
    {id: 29, name: "Gaming Chair", category : "Furnitures", img : Gaming_Chair, new_price : 22.0, old_price : 25.5},
    {id: 30, name: "Dressing Table", category : "Furnitures", img : Dressing_Table, new_price : 25.0, old_price : 30.5},
    {id: 31, name: "Cricket Bat", category : "Sports", img : Cricket_Bat, new_price : 199.0, old_price : 250.5},
    {id: 32, name: "Basketball", category : "Sports", img : Basketball, new_price : 399.0, old_price : 450.5},
    {id: 33, name: "Football", category : "Sports", img : Football, new_price : 100.0, old_price : 110.5},
    {id: 34, name: "Baseball Bat", category : "Sports", img : Baseball_Bat, new_price : 150.0, old_price : 200.5},
    {id: 35, name: "Roller Skate", category : "Sports", img :Roller_Skate , new_price : 110.0, old_price : 120.5},
    {id: 36, name: "Bandminton Racket", category : "Sports", img : Badminton_Racket, new_price : 110.0, old_price : 130.5},
    {id: 37, name: "Gym Bag", category : "Sports", img : Gym_Bag, new_price : 9.0, old_price : 11.5},
    {id: 38, name: "Hockey", category : "Sports", img : Hockey, new_price : 99.0, old_price : 120.5},
    {id: 39, name: "Bicycle Air Pump", category : "Sports", img : Bicycle_Air_Pump, new_price : 12.0, old_price : 15.5},
    {id: 40, name: "Tennis Racket", category : "Sports", img : Tennis_Racket, new_price : 119.0, old_price : 130.5},
    
]

export default Allproducts