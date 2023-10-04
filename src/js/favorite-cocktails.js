import './mob-menu';
import './modal-coctail';
import './modal-igridients';
import { favorites } from './utilities/local-storage';
import { haventAddedFavoriteCoctails } from './no-cocktails';
import { renderADrink } from './favorite';
import { modalCall } from './modalCallDrink';
import { renderDrink } from './modal';
import { favoriteCoctailsList } from './favorite';
const contNoCoctails = document.querySelector('.container-non-photos');
const titleGalleryEl = document.querySelector('.gallery-header');
const gelleryListEl = document.querySelector('.gallery-list');
const desc = document.querySelector('.description-no-coctails');
const span = document.querySelector('span-no-coctails');
console.log('fav: ', favorites);


if (favorites.length === 0 || !favorites) {
  haventAddedFavoriteCoctails(contNoCoctails, titleGalleryEl, desc, span);
} else {
  favorites.forEach(item => {
    renderADrink(item);
    console.log(item);
  });
}
if(favoriteCoctailsList){
  modalCall(favoriteCoctailsList, renderDrink)
}

