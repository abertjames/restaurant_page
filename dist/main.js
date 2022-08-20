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
    // mainContent.innerHTML = '';
    mainContent.innerText = '';

    mainContent.appendChild(createBlurb());
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
    // mainContent.innerHTML = '';
    mainContent.innerText = '';

    // mainContent.classList.add('menu');
    mainContent.appendChild(makeContactPage());
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

const createBackgroundImage = () => {
    const bkgImg = document.createElement('img');
    bkgImg.src = 'images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp';
    bkgImg.alt = 'jack rabbit slim'

    bkgImg.classList.add('bkgImg');

    return bkgImg
}





////////////////////////////////////////////////////////

const initializeWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createMainContent());
    content.appendChild(createHeader());
    // content.appendChild(createBlurb());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage());
    (0,_blurb__WEBPACK_IMPORTED_MODULE_0__["default"])();
    // loadMenuPage();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

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
    // mainContent.innerHTML = '';
    mainContent.innerText = '';

    mainContent.appendChild(createMenuPage());
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
// console.log("Hello");

//import the page load function here 

// import './style.css';

// function component() {
//     const element = document.createElement('div');
 
//     element.innerHTML = "Hello";
//     element.classList.add('hello');
 
//     return element;

    // const foodImage = document.createElement("img");
    // foodImage.src = 'images/the-slim-s-diner.jpeg'
    // foodImage.src = 'images/Jack_Rabbit_Slims_CC_Master_Squares_Layers_1200x1200.webp'
    // return foodImage;
// }
 
// document.body.appendChild(component());



(0,_initWebsite__WEBPACK_IMPORTED_MODULE_0__["default"])();

// import loadContactPage from './contact';

// loadContactPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ25DeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNFO0FBQ0M7QUFDTzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFTO0FBQ2pCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBWTtBQUNwQixLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywwQkFBMEI7O0FBRXZFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksa0RBQVM7QUFDYjtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNuR2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7VUNqRDNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEM7O0FBRTlDLHdEQUFpQjs7QUFFakI7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9ibHVyYi5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2luaXRXZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVCbHVyYiA9ICgpID0+IHtcbiAgICBjb25zdCBibHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBibHVyYi5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuXG4gICAgY29uc3QgaW1nQ3JvcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0Nyb3BwZXIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VDcm9wcGVyJyk7XG5cbiAgICBjb25zdCBjb3ZlclBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY292ZXJQaG90by5zcmMgPSAnaW1hZ2VzL3VtYV9tZW51XzIucG5nJztcbiAgICBjb3ZlclBob3RvLmFsdCA9ICd1bWEnO1xuICAgIGNvdmVyUGhvdG8uY2xhc3NMaXN0LmFkZCgnY292ZXJQaG90bycpXG5cbiAgICBmdW5jdGlvbiB3cml0ZVBhcmFncmFwaCh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHBhcmFncmFwaFxuICAgIH1cblxuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdUaGUgYmVzdCBmaXZlIGRvbGxhciBzaGFrZXMgbW9uZXkgY2FuIGJ1eScpKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnRXN0YWJsaXNoZWQgMTk4MicpKTtcbiAgICBpbWdDcm9wcGVyLmFwcGVuZENoaWxkKGNvdmVyUGhvdG8pO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKGltZ0Nyb3BwZXIpO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdUaGUgbmV4dCBiZXN0IHRoaW5nIHRvIGEgdGltZSBtYWNoaW5lIScpKTtcblxuXG4gICAgcmV0dXJuIGJsdXJiXG59XG5cbmNvbnN0IGxvYWRCbHVyYiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgLy8gbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCbHVyYigpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJsdXJiOyIsIlxuY29uc3QgbWFrZUNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZHJlc3NDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzc0NhcmQuY2xhc3NMaXN0LmFkZCgnYmx1cmInKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzk5OS05OTktOTk5OSc7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnMTQzNSBGbG93ZXIgU3QsIEdsZW5kYWxlLCBDQSA5MTIwMSc7XG5cbiAgICBjb25zdCBsb2NhdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9jYXRpb25JbWFnZS5zcmMgPSBcImltYWdlcy9sb2NhdGlvbl9pbWFnZS5wbmdcIjtcbiAgICBsb2NhdGlvbkltYWdlLmFsdCA9ICdsb2NhdGlvbiBpbWFnZSc7XG4gICAgbG9jYXRpb25JbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZUNyb3BwZXInKVxuXG5cbiAgICBhZGRyZXNzQ2FyZC5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgYWRkcmVzc0NhcmQuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG5cbiAgICByZXR1cm4gYWRkcmVzc0NhcmRcbn1cblxuY29uc3QgbG9hZENvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICAvLyBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluQ29udGVudC5pbm5lclRleHQgPSAnJztcblxuICAgIC8vIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWtlQ29udGFjdFBhZ2UoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCJpbXBvcnQgbG9hZEJsdXJiIGZyb20gXCIuL2JsdXJiXCI7XG5pbXBvcnQgbG9hZE1lbnVQYWdlIGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIC8vIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkphY2sgUmFiYml0IFNsaW0nc1wiO1xuICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+ICB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAvLyBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIC8vIGFkZCBidXR0b24gZnVuY3Rpb25hbGl0eSBldmVudCBsaXN0ZW5lciBoZXJlIFxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgbG9hZEJsdXJiKCk7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAvLyBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRNZW51UGFnZSgpO1xuICAgIH0pXG5cblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIC8vIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbG9hZENvbnRhY3RQYWdlKCk7XG4gICAgfSlcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5jb25zdCBjcmVhdGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICAgIHJldHVybiBtYWluQ29udGVudFxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCBcXHUwMEE5ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBhYmVydGphbWVzYDtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5jb25zdCBjcmVhdGVCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYmtnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmtnSW1nLnNyYyA9ICdpbWFnZXMvSmFja19SYWJiaXRfU2xpbXNfQ0NfTWFzdGVyX1NxdWFyZXNfTGF5ZXJzXzEyMDB4MTIwMC53ZWJwJztcbiAgICBia2dJbWcuYWx0ID0gJ2phY2sgcmFiYml0IHNsaW0nXG5cbiAgICBia2dJbWcuY2xhc3NMaXN0LmFkZCgnYmtnSW1nJyk7XG5cbiAgICByZXR1cm4gYmtnSW1nXG59XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCbHVyYigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZEltYWdlKCkpO1xuICAgIGxvYWRCbHVyYigpO1xuICAgIC8vIGxvYWRNZW51UGFnZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJjb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGaXZlIERvbGxhciBTaGFrZScsICdNaWxrLCBjaG9pY2Ugb2YgdmFuaWxsYSwgY2hvY29sYXRlLCBvciBzdHJhd2JlcnJ5IGljZWNyZWFtJywgJyQ1JykpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ0NoZWVzZSBCdXJnZXInLCAnQmVlZiBwYXR0eSwgbGV0dHVjZSwgdG9tYXRvLCBjaGVkZGFyIGNoZWVzZScsICckMTAnKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnUGl6emEnLCAnbWFyZ2hlcml0YSBjaGVlc2UsIHRvbWF0byBzYXVjZSwgd2l0aCBvciB3aXRob3V0IHBlcHBlcm9uaScsJyQxMicpKTtcblxuICAgIHJldHVybiBtZW51XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBpbmdyZWRpZW50cywgcHJpY2UpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgICBjb25zdCBmb29kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9vZEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcblxuICAgIGNvbnN0IHNwZWNpZmljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpZmljcy5jbGFzc0xpc3QuYWRkKCdzcGVjaWZpY3MnKTtcblxuICAgIGNvbnN0IGZvb2RJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50cztcblxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgIHNwZWNpZmljcy5hcHBlbmRDaGlsZChmb29kSW5ncmVkaWVudHMpO1xuICAgIHNwZWNpZmljcy5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuXG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSXRlbSk7XG4gICAgLy8gbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZ3JlZGllbnRzKTtcbiAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHNwZWNpZmljcyk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW1cbn1cblxuXG5cbmNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgLy8gbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJUZXh0ID0gJyc7XG5cbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51UGFnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnVQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc29sZS5sb2coXCJIZWxsb1wiKTtcblxuLy9pbXBvcnQgdGhlIHBhZ2UgbG9hZCBmdW5jdGlvbiBoZXJlIFxuXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcbi8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiSGVsbG9cIjtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAvLyBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIC8vIGZvb2RJbWFnZS5zcmMgPSAnaW1hZ2VzL3RoZS1zbGltLXMtZGluZXIuanBlZydcbiAgICAvLyBmb29kSW1hZ2Uuc3JjID0gJ2ltYWdlcy9KYWNrX1JhYmJpdF9TbGltc19DQ19NYXN0ZXJfU3F1YXJlc19MYXllcnNfMTIwMHgxMjAwLndlYnAnXG4gICAgLy8gcmV0dXJuIGZvb2RJbWFnZTtcbi8vIH1cbiBcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5pbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi9pbml0V2Vic2l0ZSc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5cbi8vIGltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcblxuLy8gbG9hZENvbnRhY3RQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9