/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blurb.js":
/*!**********************!*\
  !*** ./src/blurb.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createBlurb = () => {
    const blurb = document.createElement('main');
    blurb.classList.add('blurb');

    const imgCropper = document.createElement('div');
    imgCropper.classList.add('imageCropper');

    const coverPhoto = document.createElement('img');
    coverPhoto.src = 'images/uma_menu_2.png';
    coverPhoto.alt = 'uma';
    coverPhoto.classList.add('coverPhoto')

    function writeParagraph(text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph
    }

    blurb.appendChild(writeParagraph('The best five dollar shakes money can buy'));
    blurb.appendChild(writeParagraph('Established 1982'));
    imgCropper.appendChild(coverPhoto);
    blurb.appendChild(imgCropper);
    blurb.appendChild(writeParagraph('The next best thing to a time machine!'));


    return blurb
}

const loadBlurb = () => {
    const mainContent = document.getElementById('main');
    mainContent.innerHTML = '';
    // mainContent.innerText = '';
    mainContent.appendChild(createBlurb());

    const bkgImg = document.getElementById('backgroundImage');
    bkgImg.src ='images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp';
    bkgImg.alt = 'jack rabbit slim';

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBlurb);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const makeContactPage = () => {
    const addressCard = document.createElement('div');
    addressCard.classList.add('blurb');

    const phone = document.createElement('div');
    phone.classList.add('contactInfo');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '999-999-9999';
    const phoneIcon = document.createElement('img');
    phoneIcon.src = 'icons/phone.svg';
    phoneIcon.classList.add('icon');
    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNumber);

    const home = document.createElement('div');
    home.classList.add('contactInfo');
    const address = document.createElement('p');
    address.textContent = '1435 Flower St, Glendale, CA 91201';
    const homeIcon = document.createElement('img');
    homeIcon.src = 'icons/home.svg';
    homeIcon.classList.add('icon');
    home.appendChild(homeIcon);
    home.appendChild(address);

    const locationImage = document.createElement('img');
    locationImage.src = "images/location_image.png";
    locationImage.alt = 'location image';
    locationImage.classList.add('imageCropper')


    // addressCard.appendChild(phoneNumber);
    // addressCard.appendChild(address);
    addressCard.appendChild(phone);
    addressCard.appendChild(home);
    addressCard.appendChild(locationImage);

    return addressCard
}

const loadContactPage = () => {
    const mainContent = document.getElementById('main');
    // mainContent.classList.add('menu');
    mainContent.innerHTML = '';
    // mainContent.innerText = '';
    mainContent.appendChild(makeContactPage());

    const bkgImg = document.getElementById('backgroundImage');
    bkgImg.src = 'images/jack-rabbit-slims-REG-web_864x.webp';
    bkgImg.alt = 'uma dancing';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/initWebsite.js":
/*!****************************!*\
  !*** ./src/initWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBackgroundImage": () => (/* binding */ createBackgroundImage),
/* harmony export */   "initializeWebsite": () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _blurb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blurb */ "./src/blurb.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    // restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Jack Rabbit Slim's";
  
    header.appendChild(restaurantName);
    header.appendChild(createNavBar());
  
    return header;
}

const createNavBar = () =>  {
    const navBar = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) =>{
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        (0,_blurb__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
  
    return navBar;
}

const setActiveButton = (button) => { 
    const buttonList = Array.from(document.querySelectorAll('button'));

    buttonList.forEach((button) => {
        if (button.classList.contains('active')){
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

const createMainContent = () => {
    const mainContent = document.createElement('main');
    mainContent.classList.add('blurb');
    mainContent.setAttribute('id', 'main');
    return mainContent
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const credit = document.createElement("p");
    credit.textContent = `Copyright \u00A9 ${new Date().getFullYear()} abertjames`;

    footer.appendChild(credit);

    return footer
}

const createBackgroundImage = (source, alternate) => {
    const bkgImg = document.createElement('img');
    bkgImg.setAttribute('id', 'backgroundImage');
    bkgImg.classList.add('bkgImg');

    bkgImg.src = source;
    bkgImg.alt = alternate;

    return bkgImg
}





////////////////////////////////////////////////////////

const initializeWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createMainContent());
    content.appendChild(createHeader());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage('images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp','jack rabbit slim'));

    (0,_blurb__WEBPACK_IMPORTED_MODULE_0__["default"])();
    setActiveButton(document.querySelector('button'));
    // homeButton.classList.add('active');
    // loadContactPage();
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _initWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initWebsite */ "./src/initWebsite.js");


const createMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem('Five Dollar Shake', 'Milk, choice of vanilla, chocolate, or strawberry icecream', '$5'));
    menu.appendChild(createMenuItem('Cheese Burger', 'Beef patty, lettuce, tomato, cheddar cheese', '$10'));
    menu.appendChild(createMenuItem('Pizza', 'margherita cheese, tomato sauce, with or without pepperoni','$12'));

    return menu
}

const createMenuItem = (itemName, ingredients, price) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const foodItem = document.createElement('h2');
    foodItem.textContent = itemName;

    const specifics = document.createElement('div');
    specifics.classList.add('specifics');

    const foodIngredients = document.createElement('p');
    foodIngredients.textContent = ingredients;

    const foodPrice = document.createElement('p');
    foodPrice.textContent = price;

    specifics.appendChild(foodIngredients);
    specifics.appendChild(foodPrice);


    menuItem.appendChild(foodItem);
    // menuItem.appendChild(foodIngredients);
    // menuItem.appendChild(foodPrice);
    menuItem.appendChild(specifics);

    return menuItem
}



const loadMenuPage = () => {
    const mainContent = document.getElementById('main');
    mainContent.innerHTML = '';
    // mainContent.innerText = '';

    mainContent.appendChild(createMenuPage());
    const bkgImg = document.getElementById('backgroundImage');
    bkgImg.src = 'images/the-slim-s-diner.jpeg';
    bkgImg.alt = 'the slims diner';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initWebsite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initWebsite */ "./src/initWebsite.js");


(0,_initWebsite__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERTtBQUNDO0FBQ087O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBUztBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBWTtBQUNwQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsMEJBQTBCOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxrREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7VUN0RDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0Q7O0FBRWhELCtEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2JsdXJiLmpzIiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2UvLi9zcmMvaW5pdFdlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUJsdXJiID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGJsdXJiLmNsYXNzTGlzdC5hZGQoJ2JsdXJiJyk7XG5cbiAgICBjb25zdCBpbWdDcm9wcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQ3JvcHBlci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNyb3BwZXInKTtcblxuICAgIGNvbnN0IGNvdmVyUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb3ZlclBob3RvLnNyYyA9ICdpbWFnZXMvdW1hX21lbnVfMi5wbmcnO1xuICAgIGNvdmVyUGhvdG8uYWx0ID0gJ3VtYSc7XG4gICAgY292ZXJQaG90by5jbGFzc0xpc3QuYWRkKCdjb3ZlclBob3RvJylcblxuICAgIGZ1bmN0aW9uIHdyaXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gcGFyYWdyYXBoXG4gICAgfVxuXG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ1RoZSBiZXN0IGZpdmUgZG9sbGFyIHNoYWtlcyBtb25leSBjYW4gYnV5JykpO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdFc3RhYmxpc2hlZCAxOTgyJykpO1xuICAgIGltZ0Nyb3BwZXIuYXBwZW5kQ2hpbGQoY292ZXJQaG90byk7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQoaW1nQ3JvcHBlcik7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ1RoZSBuZXh0IGJlc3QgdGhpbmcgdG8gYSB0aW1lIG1hY2hpbmUhJykpO1xuXG5cbiAgICByZXR1cm4gYmx1cmJcbn1cblxuY29uc3QgbG9hZEJsdXJiID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBtYWluQ29udGVudC5pbm5lclRleHQgPSAnJztcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCbHVyYigpKTtcblxuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW1hZ2UnKTtcbiAgICBia2dJbWcuc3JjID0naW1hZ2VzL0phY2tfUmFiYml0X1NsaW1zX0NDX01hc3Rlcl9TcXVhcmVzX0xheWVyc18xMjAweDEyMDAud2VicCc7XG4gICAgYmtnSW1nLmFsdCA9ICdqYWNrIHJhYmJpdCBzbGltJztcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmx1cmI7IiwiXG5jb25zdCBtYWtlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkcmVzc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRyZXNzQ2FyZC5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzk5OS05OTktOTk5OSc7XG4gICAgY29uc3QgcGhvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcGhvbmVJY29uLnNyYyA9ICdpY29ucy9waG9uZS5zdmcnO1xuICAgIHBob25lSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgcGhvbmUuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0SW5mbycpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxNDM1IEZsb3dlciBTdCwgR2xlbmRhbGUsIENBIDkxMjAxJztcbiAgICBjb25zdCBob21lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVJY29uLnNyYyA9ICdpY29ucy9ob21lLnN2Zyc7XG4gICAgaG9tZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICBjb25zdCBsb2NhdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9jYXRpb25JbWFnZS5zcmMgPSBcImltYWdlcy9sb2NhdGlvbl9pbWFnZS5wbmdcIjtcbiAgICBsb2NhdGlvbkltYWdlLmFsdCA9ICdsb2NhdGlvbiBpbWFnZSc7XG4gICAgbG9jYXRpb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZUNyb3BwZXInKVxuXG5cbiAgICAvLyBhZGRyZXNzQ2FyZC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgLy8gYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICAgIGFkZHJlc3NDYXJkLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGFkZHJlc3NDYXJkLmFwcGVuZENoaWxkKGxvY2F0aW9uSW1hZ2UpO1xuXG4gICAgcmV0dXJuIGFkZHJlc3NDYXJkXG59XG5cbmNvbnN0IGxvYWRDb250YWN0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgLy8gbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIC8vIG1haW5Db250ZW50LmlubmVyVGV4dCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1ha2VDb250YWN0UGFnZSgpKTtcblxuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW1hZ2UnKTtcbiAgICBia2dJbWcuc3JjID0gJ2ltYWdlcy9qYWNrLXJhYmJpdC1zbGltcy1SRUctd2ViXzg2NHgud2VicCc7XG4gICAgYmtnSW1nLmFsdCA9ICd1bWEgZGFuY2luZyc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCJpbXBvcnQgbG9hZEJsdXJiIGZyb20gXCIuL2JsdXJiXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIC8vIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkphY2sgUmFiYml0IFNsaW0nc1wiO1xuICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+ICB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAgICAgbG9hZEJsdXJiKCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgfSlcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5jb25zdCBzZXRBY3RpdmVCdXR0b24gPSAoYnV0dG9uKSA9PiB7IFxuICAgIGNvbnN0IGJ1dHRvbkxpc3QgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpKTtcblxuICAgIGJ1dHRvbkxpc3QuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuY29uc3QgY3JlYXRlTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYmx1cmInKTtcbiAgICBtYWluQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICByZXR1cm4gbWFpbkNvbnRlbnRcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgXFx1MDBBOSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gYWJlcnRqYW1lc2A7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuY29uc3QgY3JlYXRlQmFja2dyb3VuZEltYWdlID0gKHNvdXJjZSwgYWx0ZXJuYXRlKSA9PiB7XG4gICAgY29uc3QgYmtnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmtnSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja2dyb3VuZEltYWdlJyk7XG4gICAgYmtnSW1nLmNsYXNzTGlzdC5hZGQoJ2JrZ0ltZycpO1xuXG4gICAgYmtnSW1nLnNyYyA9IHNvdXJjZTtcbiAgICBia2dJbWcuYWx0ID0gYWx0ZXJuYXRlO1xuXG4gICAgcmV0dXJuIGJrZ0ltZ1xufVxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmNvbnN0IGluaXRpYWxpemVXZWJzaXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Db250ZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kSW1hZ2UoJ2ltYWdlcy9KYWNrX1JhYmJpdF9TbGltc19DQ19NYXN0ZXJfU3F1YXJlc19MYXllcnNfMTIwMHgxMjAwLndlYnAnLCdqYWNrIHJhYmJpdCBzbGltJykpO1xuXG4gICAgbG9hZEJsdXJiKCk7XG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpKTtcbiAgICAvLyBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIC8vIGxvYWRDb250YWN0UGFnZSgpO1xufVxuXG5leHBvcnQge2luaXRpYWxpemVXZWJzaXRlLCBjcmVhdGVCYWNrZ3JvdW5kSW1hZ2V9OyIsImltcG9ydCB7IGNyZWF0ZUJhY2tncm91bmRJbWFnZSB9IGZyb20gXCIuL2luaXRXZWJzaXRlXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0ZpdmUgRG9sbGFyIFNoYWtlJywgJ01pbGssIGNob2ljZSBvZiB2YW5pbGxhLCBjaG9jb2xhdGUsIG9yIHN0cmF3YmVycnkgaWNlY3JlYW0nLCAnJDUnKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ2hlZXNlIEJ1cmdlcicsICdCZWVmIHBhdHR5LCBsZXR0dWNlLCB0b21hdG8sIGNoZWRkYXIgY2hlZXNlJywgJyQxMCcpKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdQaXp6YScsICdtYXJnaGVyaXRhIGNoZWVzZSwgdG9tYXRvIHNhdWNlLCB3aXRoIG9yIHdpdGhvdXQgcGVwcGVyb25pJywnJDEyJykpO1xuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IGZvb2RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kSXRlbS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlY2lmaWNzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpZmljcycpO1xuXG4gICAgY29uc3QgZm9vZEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzO1xuXG4gICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgc3BlY2lmaWNzLmFwcGVuZENoaWxkKGZvb2RJbmdyZWRpZW50cyk7XG4gICAgc3BlY2lmaWNzLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJdGVtKTtcbiAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW5ncmVkaWVudHMpO1xuICAgIC8vIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoc3BlY2lmaWNzKTtcblxuICAgIHJldHVybiBtZW51SXRlbVxufVxuXG5cblxuY29uc3QgbG9hZE1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBtYWluQ29udGVudC5pbm5lclRleHQgPSAnJztcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVQYWdlKCkpO1xuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW1hZ2UnKTtcbiAgICBia2dJbWcuc3JjID0gJ2ltYWdlcy90aGUtc2xpbS1zLWRpbmVyLmpwZWcnO1xuICAgIGJrZ0ltZy5hbHQgPSAndGhlIHNsaW1zIGRpbmVyJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbml0aWFsaXplV2Vic2l0ZX0gZnJvbSAnLi9pbml0V2Vic2l0ZSc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=