
export interface Restaurant {
  id: string,
  name: string;
  seats: number;
  image: string;
  address: string;
  opening: string;
  closing: string;
}
export interface Discount {
  id: string,
  image: string
}
export interface Cuisine {
  id: string,
  title: string,
  image: string
}
const data: Restaurant[] = [
  {
    name: "Indian Accent",
    seats: 55,
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/05/02141004/aesthetic-rest-hero.jpeg?tr=w-1200,q-60",
    address: "The Lodhi, Lodhi Road, New Delhi 110003",
    opening: "11:30",
    closing: "23:00",
  },
  {

    name: "Bukhara",
    seats: 90,
    image: "https://images.surferseo.art/7d5164fa-7a4d-49bd-a811-307c98f79698.png",
    address: "ITC Maurya, Diplomatic Enclave, Chanakyapuri, New Delhi 110021",
    opening: "10:00",
    closing: "22:00",
  },
  {

    name: "Karim's",
    seats: 70,
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHN8ZW58MHx8MHx8fDA%3D",
    address: "Gali Kababian, Near Jama Masjid, Old Delhi 110006",
    opening: "11:00",
    closing: "00:00",
  },
  {

    name: "Rajinder Da Dhaba",
    seats: 120,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/5a/f5/4f/fine-dine-istanbul.jpg?w=900&h=-1&s=1",
    address: "AB-14B, Safdarjung Enclave Market, New Delhi 110029",
    opening: "09:00",
    closing: "23:30",
  },
  {

    name: "Olive Bar & Kitchen",
    seats: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCVOtSC9NZ0NskbTp7nRwmYrddXekw623U9EadOGjdCo17B0_q4k_mKLl&s=10",
    address: "One Style Mile, Kalka Das Marg, Mehrauli, New Delhi 110030",
    opening: "10:30",
    closing: "22:30",
  },
  {

    name: "Kake Da Hotel",
    seats: 40,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500",
    address: "Municipal Market, Connaught Place, New Delhi 110001",
    opening: "11:00",
    closing: "23:00",
  },
  {

    name: "Yum Yum Cha",
    seats: 35,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500",
    address: "69, First Floor, Khan Market, New Delhi 110003",
    opening: "08:30",
    closing: "21:30",
  },
  {

    name: "Diggin",
    seats: 50,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500",
    address: "Chanakyapuri Santushti Shopping Complex, New Delhi 110021",
    opening: "12:00",
    closing: "00:30",
  },
  {

    name: "Moti Mahal",
    seats: 80,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500",
    address: "Netaji Subhash Marg, Daryaganj, New Delhi 110002",
    opening: "12:00",
    closing: "00:30",
  },
  {

    name: "Gulati Restaurant",
    seats: 75,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500",
    address: "6, Pandara Road Market, New Delhi 110003",
    opening: "10:00",
    closing: "22:00",
  },
  {

    name: "Carnatic Cafe",
    seats: 30,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500",
    address: "M Block Market, Greater Kailash 2, New Delhi 110048",
    opening: "11:30",
    closing: "23:00",
  },
  {

    name: "Cafe Lota",
    seats: 45,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500",
    address: "National Crafts Museum, Bhairon Marg, Pragati Maidan, New Delhi 110001",
    opening: "09:30",
    closing: "22:00",
  },
];

const carouselImages = [
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_1",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_2",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=170.625&fit=crop&h=276.25",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&h=138.125&fit=crop&w=154.375&dpr=1",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_3",
  },
  {
    images: [
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_4",
  },
  {
    images: [
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_5",
  },
  {
    images: [
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_6",
  },
  {
    images: [
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=236.25&fit=crop&h=382.5",
    ],
    res_id: "/restaurants/restaurant_7",
  },
  {
    images: [
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_8",
  },
  {
    images: [
      "https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1819669/pexels-photo-1819669.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_9",
  },
  {
    images: [
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_10",
  },
  {
    images: [
      "https://images.pexels.com/photos/761854/pexels-photo-761854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_11",
  },
  {
    images: [
      "https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/15638789/pexels-photo-15638789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/8630151/pexels-photo-8630151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3656787/pexels-photo-3656787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    res_id: "/restaurants/restaurant_12",
  },
];

const slots = [
  {
    res_id: "/restaurants/restaurant_1",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    res_id: "/restaurants/restaurant_2",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    res_id: "/restaurants/restaurant_3",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    ref_id: "/restaurants/restaurant_4",
    slot: ["09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
  {
    res_id: "/restaurants/restaurant_5",
    slot: ["10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    res_id: "/restaurants/restaurant_6",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  },
  {
    ref_id: "/restaurants/restaurant_7",
    slot: ["08:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"],
  },
  {
    res_id: "/restaurants/restaurant_8",
    slot: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  },
  {
    res_id: "/restaurants/restaurant_9",
    slot: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
  },
  {
    res_id: "/restaurants/restaurant_10",
    slot: ["11:30", "13:30", "15:30", "17:30", "19:30", "21:30"],
  },
  {
    res_id: "/restaurants/restaurant_11",
    slot: ["09:30", "11:30", "13:30", "15:30", "17:30", "19:30"],
  },
  {
    res_id: "/restaurants/restaurant_12",
    slot: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00", "23:00"],
  },
];

const discount = [
  {
    image: "https://img.magnific.com/premium-psd/restaurant-discount-gift-voucher-template-with-grilled-meat_25996-21519.jpg"
  },
  {
    image: "https://www.shutterstock.com/image-photo/delicious-burger-50-discount-offer-260nw-2683528001.jpg"
  },
  {
    image: "https://www.shutterstock.com/shutterstock/videos/1104537387/thumb/10.jpg?ip=x480"
  },
  {
    image: "https://i.pinimg.com/736x/ab/ef/2c/abef2c8b159698d33d1f14b38ff8dfb5.jpg"
  }
]

const cuisine = [
  {
    title: "Chinese",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Shanghai_Fried_Noodles%EF%BC%88%E4%B8%8A%E6%B5%B7%E7%82%92%E9%9D%A2%29.jpg/250px-Shanghai_Fried_Noodles%EF%BC%88%E4%B8%8A%E6%B5%B7%E7%82%92%E9%9D%A2%29.jpg"
  },
  {
    title: "South Indian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3-yRg9A29R7Ko5rTa31zKPrGw5Q5V3VZ13vJ0X3zwlU236o-CUuQPNvz&s=10"
  },
  {
    title: "North Indian",
    image: "https://i.pinimg.com/736x/b0/37/cf/b037cf4b84a9f217b5576d07d4011f6a.jpg"
  },
  {
    title: "Italian",
    image: "https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg"
  },
  {
    title: "Dessert",
    image: "https://mithiyaj.com/byculla/wp-content/uploads/sites/3/2025/01/1259960057"
  },
  {
    title: "Coffee",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=w_3000,h_3074,x_0,y_0,c_fill"
  }
]



export { data, carouselImages, slots, discount, cuisine }