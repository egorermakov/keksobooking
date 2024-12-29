const adForm = document.querySelector('.ad-form');
const adFormList = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.querySelectorAll('.map__filter');

const disablePage = () => {
    adForm.classList.add('ad-form--disabled');
    adFormList.forEach((element) => {
        element.disabled = true;
    });
    mapFilters.classList.add('ad-form--disabled');
    mapFiltersList.forEach((element) => {
        element.disabled = true;
    });
}

const enablePage = () => {
    adForm.classList.remove('ad-form--disabled');
    adFormList.forEach((element) => {
        element.disabled = false;
    });
    mapFilters.classList.remove('ad-form--disabled');
    mapFiltersList.forEach((element) => {
        element.disabled = false;
    });
}

export { 
    disablePage, 
    enablePage
 }