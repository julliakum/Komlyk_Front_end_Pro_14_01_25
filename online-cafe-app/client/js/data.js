import carbonaraImg from '../assets/main_dishes/carbonara.png';
import rizotoImg from '../assets/main_dishes/rizoto.png';
import sobaImg from '../assets/main_dishes/lapsha_sobo.png';

import burgerKentukiImg from '../assets/burgers/burger_kentuki.png';
import burgerChizImg from '../assets/burgers/burger_chiz.png';
import sendvichPeperImg from '../assets/burgers/sendvich_peper.png';

import chizkeykNewYorkImg from '../assets/desserts/chizkeyk_new_york.png';
import chizkeykOreoImg from '../assets/desserts/chizkeyk_oreo.png';
import cherryPaiImg from '../assets/desserts/cherry_pai.png';


export const categoriesData = {
  'Основні страви': [
    {
      id: 1,
      name: 'Карбонара',
      weight: '300 г',
      price: 164,
      image: carbonaraImg,
      description: 'Паста зі смаженим беконом, чорним перцем, сиром та яйцем',
      ingredients: ['бекон', 'чорний перець', 'сир', 'яйце'],
      sauces: ['Соєвий соус (+5 ₴)']
    },
    {
      id: 2,
      name: 'Різото',
      weight: '200 г',
      price: 124,
      image: rizotoImg,
      description: 'Рис з морепродуктами та овочами',
      ingredients: ['морепродукти (креветка, кальмар, мідії)', 'овочі'],
      sauces: ['Соєвий соус (+5 ₴)']
    },
    {
      id: 3,
      name: 'Соба з куркою',
      weight: '240 г',
      price: 150,
      image: sobaImg,
      description: 'Гречана лапша, курка, овочі, кунжут',
      ingredients: ['курка', 'овочі (морква, болгарський перець)', 'кунжут'],
      sauces: ['Соєвий соус (+5 ₴)', 'Імбир (+5 ₴)', 'Васабі (+10 ₴)']
    }
  ],
  'Бургери та сендвічі': [
    {
      id: 4,
      name: 'Кентукі Бургер',
      weight: '290 г',
      price: 178,
      image: burgerKentukiImg,
      description: 'Курячий бургер з сиром Моцарела, соусом "Медово-гірчичний" і свіжим яблуком',
      ingredients: ['курка', 'сир Моцарела', 'яблуко'],
      sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)']
    },
    {
      id: 5,
      name: 'Чізбургер',
      weight: '250 г',
      price: 197,
      image: burgerChizImg,
      description: 'Яловичий бургер з сиром, салатом, огірком і цибулею',
      ingredients: ['котлета', 'салат', 'огірок', 'цибуля'],
      sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)']
    },
    {
      id: 6,
      name: 'Сендвіч Пепер Джек',
      weight: '280 г',
      price: 163,
      image: sendvichPeperImg,
      description: 'З куркою в клярі, халапеньо, сиром, салатом Айсберг та соусом Барбекю',
      ingredients: ['курка', 'халапеньо', 'сир', 'салат Айсберг'],
      sauces: ['Картопля фрі (+40 ₴)', 'Соус Дорблю (+25 ₴)']
    }
  ],
  'Десерти': [
    {
      id: 7,
      name: 'Чізкейк Нью Йорк',
      weight: '120 г',
      price: 133,
      image: chizkeykNewYorkImg,
      description: 'Класичний чізкейк з ванільним морозивом',
      ingredients: ['ванільне морозиво'],
      sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
    },
    {
      id: 8,
      name: 'Чізкейк Орео',
      weight: '120 г',
      price: 133,
      image: chizkeykOreoImg,
      description: 'Чізкейк з печивом Орео та ванільним морозивом',
      ingredients: ['ванільне морозиво'],
      sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
    },
    {
      id: 9,
      name: 'Черрі Пай',
      weight: '120 г',
      price: 125,
      image: cherryPaiImg,
      description: 'Шоколадний десерт з вишнею і сиром',
      ingredients: ['ванільне морозиво'],
      sauces: ['Шоколадний топінг (+15 ₴)', 'Карамельний топінг (+13 ₴)']
    }
  ]
};

export const additionsPrices = {
  'Соєвий соус': 5,
  'Імбир': 5,
  'Васабі': 10,
  'Картопля фрі': 40,
  'Соус Дорблю': 25,
  'Шоколадний топінг': 15,
  'Карамельний топінг': 13
};