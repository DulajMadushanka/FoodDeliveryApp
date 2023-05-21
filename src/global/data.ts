const FastFoodImage = require('../../assets/images/seafood.jpeg');
const BurgursImage = require('../../assets/images/burgers.jpeg');
const SaladsImage = require('../../assets/images/salads.jpeg');
const HotdogsImage = require('../../assets/images/hotdogs.jpeg');
const ChineseImage = require('../../assets/images/chineese.jpeg');
const SeafoodImage = require('../../assets/images/seafood.jpeg');
const MexicanImage = require('../../assets/images/mexican.jpeg');
const FreeseImage = require('../../assets/images/freese.jpeg');
const KfcImage = require('../../assets/images/kfc.jpeg');
const McdonaldImage = require('../../assets/images/mcdonald.jpeg');
const PizahutImage = require('../../assets/images/pizzahut.jpeg');
const DominosImage = require('../../assets/images/dominos.jpeg');

export const filterData = [
  {
    name: "Fast food",
    id: "1",
    image: FastFoodImage
  },
  {
    name: "Bugers",
    id: "2",
    image: BurgursImage
  },
  {
    name: "Salads",
    id: "3",
    image: SaladsImage
  },
  {
    name: "Hotdog",
    id: "4",
    image: HotdogsImage
  },
  {
    name: "Chinese",
    id: "5",
    image: ChineseImage
  },
  {
    name: "Mexican",
    id: "6",
    image: MexicanImage
  },
  {
    name: "Sea food",
    id: "7",
    image: SeafoodImage
  }
];

export const restaurantData = [
  {
    restaurantName: "Mc Donalds",
    farAway: "21.2",
    businessAddress: "22 Bassie street, Cape Town",
    images: McdonaldImage,
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {
      lat: -26.1888612,
      lng: 28.246325
    },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: "Burgers, Wraps, Milkshakes...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.30,
        image: "",

      },
      {
        name: "Big mac",
        price: 50.80,
        image: "",

      },
      {
        name: "Chicken burger",
        price: 70,
        image: "",

      }
    ],
    id: 0
  },
  {
    restaurantName: "KFC",
    farAway: "12.7",
    businessAddress: "22 Bassie street, Cape Town",
    images: KfcImage,
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {
      lat: -26.1891648,
      lng: 28.2441808
    },
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: "Chicken, Chicken wings...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.30,
        image: "",

      },
      {
        name: "Big mac",
        price: 50.80,
        image: "",

      },
      {
        name: "Chicken burger",
        price: 70,
        image: "",

      }
    ],
    id: 1
  },
  {
    restaurantName: "Steers",
    farAway: "5",
    businessAddress: "17 OliviaRd, Johannesburg",
    images: FreeseImage,
    averageReview: 4.9,
    numberOfReview: 1272,
    coordinates: {
      lat: -26.1886781,
      lng: 28.244879
    },
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: "Flame grilled beef Burgers...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.30,
        image: "",

      },
      {
        name: "Big mac",
        price: 50.80,
        image: "",

      },
      {
        name: "Chicken burger",
        price: 70,
        image: "",

      }
    ],
    id: 2
  },
  {
    restaurantName: "Dominos Pizza",
    farAway: "7",
    businessAddress: "15 Atlas Rd, Kempton Park",
    images: DominosImage,
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {
      lat: -26.1845336,
      lng: 28.2481691
    },
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: "Chicken pizza, Vegitarian pizza...",
    productData: [
      {
        name: "Hand cut chips",
        price: 29.30,
        image: "",

      },
      {
        name: "Big mac",
        price: 50.80,
        image: "",

      },
      {
        name: "Chicken burger",
        price: 70,
        image: "",

      }
    ],
    id: 3
  }
];

export const markers = [
  {
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486
    },
    image: DominosImage,
    title: "Amazing food place",
    description: "This is the best food place",
    rating: 4,
    reviews: 99
  },
  {
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279
    },
    image: McdonaldImage,
    title: "Second Amazing food place",
    description: "This is the second best food place",
    rating: 5,
    reviews: 102
  },
  {
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113
    },
    image: PizahutImage,
    title: "Third Amazing food place",
    description: "This is the third best food place",
    rating: 3,
    reviews: 220
  },
  {
    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463
    },
    image: FreeseImage,
    title: "Fourth Amazing food place",
    description: "This is the fourth best food place",
    rating: 4,
    reviews: 48
  },
  {
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781
    },
    image: PizahutImage,
    title: "Fifth Amazing food place",
    description: "This is the fifth best food place",
    rating: 4,
    reviews: 178
  }
];

export const mapStandardStyle = [
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
]
