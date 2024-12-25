const MAP_CANVAS =  document.querySelector('#map-canvas');
const CARD_THEMPLATE = document.querySelector('#card')
    .content
    .querySelector('.popup');

const OFFER_TYPE = {
    flat: 'Квартира',
    bungalow: 'Бунгало',
    house: 'Дом',
    palace: 'Дворец',
    hotel: 'Отель',
}

const createOffer = ({author, offer, location}) => {
    const element = CARD_THEMPLATE.cloneNode(true);
    
    const title = element.querySelector('.popup__title');
    if (offer.title) {
        title.textContent = offer.title;
    } else {
        title.remove();
    }

    const address = element.querySelector('.popup__text--address');
    if (offer.address) {
        address.textContent = offer.address;
    } else {
        address.remove();
    }

    const price = element.querySelector('.popup__text--price');
    if (offer.price) {
        price.textContent = offer.price + ' $/ночь';
    } else {
        price.remove();
    }
    
    const type = element.querySelector('.popup__type');
    if (offer.type) {
        type.textContent = OFFER_TYPE[offer.type];
    } else {
        type.remove();
    }
    
    const roomsAndGuests = element.querySelector('.popup__text--capacity');
    if (offer.rooms && offer.guests) {
        roomsAndGuests.textContent = offer.rooms + ' комнаты для ' + offer.guests + ' гостей';
    } else {
        roomsAndGuests.remove();
    }

    const checkoutAndCheckin = element.querySelector('.popup__text--time');
    if (offer.checkin && offer.checkout) {
        checkoutAndCheckin.textContent = 'Заезд после' + offer.checkin + ', выезд до ' + offer.checkout;
    } else {
        checkoutAndCheckin.remove();
    }
    
    const features =  element.querySelector('.popup__features');
    if (offer.features) {
        features.innerHTML = '';
        offer.features.forEach((feature) => {
            const featureListItem = CARD_THEMPLATE.querySelector('.popup__feature--' + feature);
            
            if (featureListItem) {
                element.querySelector('.popup__features').append(featureListItem);
            }
        });
    } else {
        offer.features.remove();
    }

    const description =  element.querySelector('.popup__description');
    if (offer.description) {
        description.textContent = offer.description;
    } else {
        description.remove();
    }

    const photos =  element.querySelector('.popup__photos');
    if (offer.photos) {
        photos.innerHTML = '';

        offer.photos.forEach( (photo) => {
            const photoListItem = CARD_THEMPLATE.querySelector('.popup__photo').cloneNode(true);
    
            photoListItem.src = photo;
            element.querySelector('.popup__photos').append(photoListItem);
        });
    } else {
        photos.remove();
    }

    const avatar = element.querySelector('.popup__avatar');
    if (author.avatar) {
        avatar.src = author.avatar;
    } else {
        avatar.remove();
    }

    MAP_CANVAS.append(element);
};

export { createOffer };