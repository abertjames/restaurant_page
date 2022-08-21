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

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '999-999-9999';

    const address = document.createElement('p');
    address.textContent = '1435 Flower St, Glendale, CA 91201';

    const locationImage = document.createElement('img');
    locationImage.src = "images/location_image.png";
    locationImage.alt = 'location image';
    locationImage.classList.add('imageCropper')


    addressCard.appendChild(phoneNumber);
    addressCard.appendChild(address);
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
    // homeButton.classList.add('button');
    // add button functionality event listener here 
    homeButton.addEventListener('click', () =>{
        (0,_blurb__WEBPACK_IMPORTED_MODULE_0__["default"])();
    })
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    // menuButton.classList.add('button');
    menuButton.addEventListener('click', () => {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    })


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    // contactButton.classList.add('button');
    contactButton.addEventListener('click', () => {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    })

    navBar.appendChild(homeButton);
    navBar.appendChild(menuButton);
    navBar.appendChild(contactButton);
  
    return navBar;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0U7QUFDQztBQUNPOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVM7QUFDakIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFZO0FBQ3BCLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLDBCQUEwQjs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksa0RBQVM7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR3NEOztBQUV0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDdEQzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmdEOztBQUVoRCwrREFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9ibHVyYi5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2luaXRXZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVCbHVyYiA9ICgpID0+IHtcbiAgICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBibHVyYi5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuXG4gICAgY29uc3QgaW1nQ3JvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0Nyb3BwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VDcm9wcGVyJyk7XG5cbiAgICBjb25zdCBjb3ZlclBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY292ZXJQaG90by5zcmMgPSAnaW1hZ2VzL3VtYV9tZW51XzIucG5nJztcbiAgICBjb3ZlclBob3RvLmFsdCA9ICd1bWEnO1xuICAgIGNvdmVyUGhvdG8uY2xhc3NMaXN0LmFkZCgnY292ZXJQaG90bycpXG5cbiAgICBmdW5jdGlvbiB3cml0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHBhcmFncmFwaFxuICAgIH1cblxuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdUaGUgYmVzdCBmaXZlIGRvbGxhciBzaGFrZXMgbW9uZXkgY2FuIGJ1eScpKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnRXN0YWJsaXNoZWQgMTk4MicpKTtcbiAgICBpbWdDcm9wcGVyLmFwcGVuZENoaWxkKGNvdmVyUGhvdG8pO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKGltZ0Nyb3BwZXIpO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdUaGUgbmV4dCBiZXN0IHRoaW5nIHRvIGEgdGltZSBtYWNoaW5lIScpKTtcblxuXG4gICAgcmV0dXJuIGJsdXJiXG59XG5cbmNvbnN0IGxvYWRCbHVyYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gbWFpbkNvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmx1cmIoKSk7XG5cbiAgICBjb25zdCBia2dJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZEltYWdlJyk7XG4gICAgYmtnSW1nLnNyYyA9J2ltYWdlcy9KYWNrX1JhYmJpdF9TbGltc19DQ19NYXN0ZXJfU3F1YXJlc19MYXllcnNfMTIwMHgxMjAwLndlYnAnO1xuICAgIGJrZ0ltZy5hbHQgPSAnamFjayByYWJiaXQgc2xpbSc7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJsdXJiOyIsIlxuY29uc3QgbWFrZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzc0NhcmQuY2xhc3NMaXN0LmFkZCgnYmx1cmInKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzk5OS05OTktOTk5OSc7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTQzNSBGbG93ZXIgU3QsIEdsZW5kYWxlLCBDQSA5MTIwMSc7XG5cbiAgICBjb25zdCBsb2NhdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9jYXRpb25JbWFnZS5zcmMgPSBcImltYWdlcy9sb2NhdGlvbl9pbWFnZS5wbmdcIjtcbiAgICBsb2NhdGlvbkltYWdlLmFsdCA9ICdsb2NhdGlvbiBpbWFnZSc7XG4gICAgbG9jYXRpb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZUNyb3BwZXInKVxuXG5cbiAgICBhZGRyZXNzQ2FyZC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG5cbiAgICByZXR1cm4gYWRkcmVzc0NhcmRcbn1cblxuY29uc3QgbG9hZENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAvLyBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gbWFpbkNvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQobWFrZUNvbnRhY3RQYWdlKCkpO1xuXG4gICAgY29uc3QgYmtnSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmRJbWFnZScpO1xuICAgIGJrZ0ltZy5zcmMgPSAnaW1hZ2VzL2phY2stcmFiYml0LXNsaW1zLVJFRy13ZWJfODY0eC53ZWJwJztcbiAgICBia2dJbWcuYWx0ID0gJ3VtYSBkYW5jaW5nJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlOyIsImltcG9ydCBsb2FkQmx1cmIgZnJvbSBcIi4vYmx1cmJcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiXG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgLy8gcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiSmFjayBSYWJiaXQgU2xpbSdzXCI7XG4gIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbiAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4gIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIC8vIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgLy8gYWRkIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGV2ZW50IGxpc3RlbmVyIGhlcmUgXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBsb2FkQmx1cmIoKTtcbiAgICB9KVxuICAgIFxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIC8vIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZE1lbnVQYWdlKCk7XG4gICAgfSlcblxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgLy8gY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkQ29udGFjdFBhZ2UoKTtcbiAgICB9KVxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIFxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2JsdXJiJyk7XG4gICAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgcmV0dXJuIG1haW5Db250ZW50XG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IFxcdTAwQTkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGFiZXJ0amFtZXNgO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmNvbnN0IGNyZWF0ZUJhY2tncm91bmRJbWFnZSA9IChzb3VyY2UsIGFsdGVybmF0ZSkgPT4ge1xuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJrZ0ltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2tncm91bmRJbWFnZScpO1xuICAgIGJrZ0ltZy5jbGFzc0xpc3QuYWRkKCdia2dJbWcnKTtcblxuICAgIGJrZ0ltZy5zcmMgPSBzb3VyY2U7XG4gICAgYmtnSW1nLmFsdCA9IGFsdGVybmF0ZTtcblxuICAgIHJldHVybiBia2dJbWdcbn1cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZEltYWdlKCdpbWFnZXMvSmFja19SYWJiaXRfU2xpbXNfQ0NfTWFzdGVyX1NxdWFyZXNfTGF5ZXJzXzEyMDB4MTIwMC53ZWJwJywnamFjayByYWJiaXQgc2xpbScpKTtcblxuICAgIGxvYWRCbHVyYigpO1xufVxuXG5leHBvcnQge2luaXRpYWxpemVXZWJzaXRlLCBjcmVhdGVCYWNrZ3JvdW5kSW1hZ2V9OyIsImltcG9ydCB7IGNyZWF0ZUJhY2tncm91bmRJbWFnZSB9IGZyb20gXCIuL2luaXRXZWJzaXRlXCI7XG5cbmNvbnN0IGNyZWF0ZU1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0ZpdmUgRG9sbGFyIFNoYWtlJywgJ01pbGssIGNob2ljZSBvZiB2YW5pbGxhLCBjaG9jb2xhdGUsIG9yIHN0cmF3YmVycnkgaWNlY3JlYW0nLCAnJDUnKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnQ2hlZXNlIEJ1cmdlcicsICdCZWVmIHBhdHR5LCBsZXR0dWNlLCB0b21hdG8sIGNoZWRkYXIgY2hlZXNlJywgJyQxMCcpKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdQaXp6YScsICdtYXJnaGVyaXRhIGNoZWVzZSwgdG9tYXRvIHNhdWNlLCB3aXRoIG9yIHdpdGhvdXQgcGVwcGVyb25pJywnJDEyJykpO1xuXG4gICAgcmV0dXJuIG1lbnVcbn1cblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAoaXRlbU5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSkgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IGZvb2RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kSXRlbS50ZXh0Q29udGVudCA9IGl0ZW1OYW1lO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3BlY2lmaWNzLmNsYXNzTGlzdC5hZGQoJ3NwZWNpZmljcycpO1xuXG4gICAgY29uc3QgZm9vZEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzO1xuXG4gICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgc3BlY2lmaWNzLmFwcGVuZENoaWxkKGZvb2RJbmdyZWRpZW50cyk7XG4gICAgc3BlY2lmaWNzLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG5cblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJdGVtKTtcbiAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW5ncmVkaWVudHMpO1xuICAgIC8vIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoc3BlY2lmaWNzKTtcblxuICAgIHJldHVybiBtZW51SXRlbVxufVxuXG5cblxuY29uc3QgbG9hZE1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBtYWluQ29udGVudC5pbm5lclRleHQgPSAnJztcblxuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVQYWdlKCkpO1xuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kSW1hZ2UnKTtcbiAgICBia2dJbWcuc3JjID0gJ2ltYWdlcy90aGUtc2xpbS1zLWRpbmVyLmpwZWcnO1xuICAgIGJrZ0ltZy5hbHQgPSAndGhlIHNsaW1zIGRpbmVyJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbml0aWFsaXplV2Vic2l0ZX0gZnJvbSAnLi9pbml0V2Vic2l0ZSc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=