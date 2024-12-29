import { createOffers } from './data.js';
import { createOffer } from './offer.js';
import { disablePage, enablePage } from './form.js';

const offers = createOffers();

createOffer(offers[0]);