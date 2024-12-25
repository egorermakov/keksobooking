import { createOffers } from './data.js';
import { createOffer } from './offer.js';
// import './popup.js';
const offers = createOffers();

createOffer(offers[0]);