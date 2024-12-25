import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement } from './util.js';

const SIMILAR_OFFER_COUNT = 10;

const AUTHOR_AVATAR = Array.from({length: SIMILAR_OFFER_COUNT}, (v,i,k) => {
  i++;
  i = i.toString().padStart(2, '0');
  return 'img/avatars/user' + i + '.png';
});

const OFFER_TITLE = [
  'Самурайский покой',
  'Токийская жемчужина',
  'Осака-Пентхаус',
  'Сад сакуры',
  'Оригами',
  'Токио-Таунхаус',
  'Фудзи-Хаус',
  'Киото-Гарден',
  'Японский стиль',
  'Традиционный дом',
  'Сидзуока-Бич',
  'Акихабара-Сьютс',
  'Киото-Хоум',
  'Татами-Хоум',
  'Саппоро-Хаус',
]

const OFFER_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_CHECKIN_CHECKOUT = ['12:00', '13:00', '14:00'];

const OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const OFFER_DESCRIPTION = [
  'Уютные номера с видом на море, частный пляж, бассейн и спа-центр.',
  'Комфортабельные номера, домашняя атмосфера, дружелюбный персонал.',
  'Великолепные виды на горы, чистый воздух, спа-процедуры и фитнес-центр.',
  'Просторные номера, сад с цветами и деревьями, ресторан с местной кухней.',
  'Современные номера, панорамные окна, центр города, развлекательные мероприятия.',
]

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
]

const  LOCATION = {
  LAT: getRandomPositiveFloat(35.65000, 35.70000, 5),
  LNG: getRandomPositiveFloat(139.70000, 139.80000, 5),
}

const createOffer = (element) => {
  return {
    author: {
      avatar: AUTHOR_AVATAR[element]
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLE),
      address: LOCATION.LAT + ', ' + LOCATION.LNG,
      price: getRandomPositiveInteger(60, 120),
      type: getRandomArrayElement(OFFER_TYPE),
      rooms: getRandomPositiveInteger(1, 50),
      guests: getRandomPositiveInteger(1, 5),
      checkin: getRandomArrayElement(OFFER_CHECKIN_CHECKOUT),
      checkout: getRandomArrayElement(OFFER_CHECKIN_CHECKOUT),
      features: Array.from({length: getRandomPositiveInteger(1, 6)}, (v,i) => OFFER_FEATURES[i]),
      description: getRandomArrayElement(OFFER_DESCRIPTION),
      photos: Array.from({length: getRandomPositiveInteger(1, 3)}, (v,i) => OFFER_PHOTOS[i]),
    },
    location: {
      lat: LOCATION.LAT,
      lng: LOCATION.LNG,
    },
  }
};

const createOffers = () => {
  const arr = [];
  for (let i = 0; i <= SIMILAR_OFFER_COUNT - 1; i++) {
    const offer = createOffer(i);
      arr.push(offer);
  }
  return arr;
};

export { createOffers };