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
    const content = document.getElementById('content');
    content.appendChild(makeContactPage());

    const mainContent = document.getElementById('main');
    mainContent.innerHTML = '';
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
    
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    // menuButton.classList.add('button');


    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    // contactButton.classList.add('button');

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
    // loadBlurb();
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
    menu.appendChild(createMenuItem('fart', 'lard', '$8'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ2pDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0U7QUFDQztBQUNPOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLDBCQUEwQjs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFZO0FBQ2hCOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUMxRmhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7O1VDOUMzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThDOztBQUU5Qyx3REFBaUI7O0FBRWpCOztBQUVBLHFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHBhZ2UvLi9zcmMvYmx1cmIuanMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9pbml0V2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQmx1cmIgPSAoKSA9PiB7XG4gICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgYmx1cmIuY2xhc3NMaXN0LmFkZCgnYmx1cmInKTtcblxuICAgIGNvbnN0IGltZ0Nyb3BwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDcm9wcGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ3JvcHBlcicpO1xuXG4gICAgY29uc3QgY292ZXJQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvdmVyUGhvdG8uc3JjID0gJ2ltYWdlcy91bWFfbWVudV8yLnBuZyc7XG4gICAgY292ZXJQaG90by5hbHQgPSAndW1hJztcbiAgICBjb3ZlclBob3RvLmNsYXNzTGlzdC5hZGQoJ2NvdmVyUGhvdG8nKVxuXG4gICAgZnVuY3Rpb24gd3JpdGVQYXJhZ3JhcGgodGV4dCkge1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhZ3JhcGhcbiAgICB9XG5cbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnVGhlIGJlc3QgZml2ZSBkb2xsYXIgc2hha2VzIG1vbmV5IGNhbiBidXknKSk7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ0VzdGFibGlzaGVkIDE5ODInKSk7XG4gICAgaW1nQ3JvcHBlci5hcHBlbmRDaGlsZChjb3ZlclBob3RvKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZChpbWdDcm9wcGVyKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnVGhlIG5leHQgYmVzdCB0aGluZyB0byBhIHRpbWUgbWFjaGluZSEnKSk7XG5cblxuICAgIHJldHVybiBibHVyYlxufVxuXG5jb25zdCBsb2FkQmx1cmIgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJsdXJiKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmx1cmI7IiwiXG5jb25zdCBtYWtlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkcmVzc0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRyZXNzQ2FyZC5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnOTk5LTk5OS05OTk5JztcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxNDM1IEZsb3dlciBTdCwgR2xlbmRhbGUsIENBIDkxMjAxJztcblxuICAgIGNvbnN0IGxvY2F0aW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2NhdGlvbkltYWdlLnNyYyA9IFwiaW1hZ2VzL2xvY2F0aW9uX2ltYWdlLnBuZ1wiO1xuICAgIGxvY2F0aW9uSW1hZ2UuYWx0ID0gJ2xvY2F0aW9uIGltYWdlJztcbiAgICBsb2NhdGlvbkltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ3JvcHBlcicpXG5cblxuICAgIGFkZHJlc3NDYXJkLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBhZGRyZXNzQ2FyZC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBhZGRyZXNzQ2FyZC5hcHBlbmRDaGlsZChsb2NhdGlvbkltYWdlKTtcblxuICAgIHJldHVybiBhZGRyZXNzQ2FyZFxufVxuXG5jb25zdCBsb2FkQ29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWtlQ29udGFjdFBhZ2UoKSk7XG5cbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1ha2VDb250YWN0UGFnZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3RQYWdlOyIsImltcG9ydCBsb2FkQmx1cmIgZnJvbSBcIi4vYmx1cmJcIjtcbmltcG9ydCBsb2FkTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiXG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgLy8gcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZChcInJlc3RhdXJhbnQtbmFtZVwiKTtcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiSmFjayBSYWJiaXQgU2xpbSdzXCI7XG4gIFxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdkJhcigpKTtcbiAgXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuY29uc3QgY3JlYXRlTmF2QmFyID0gKCkgPT4gIHtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIC8vIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgLy8gYWRkIGJ1dHRvbiBmdW5jdGlvbmFsaXR5IGV2ZW50IGxpc3RlbmVyIGhlcmUgXG4gICAgXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgLy8gbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcblxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgLy8gY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICBcbiAgICByZXR1cm4gbmF2QmFyO1xufVxuXG5jb25zdCBjcmVhdGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKCdibHVyYicpO1xuICAgIG1haW5Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICAgIHJldHVybiBtYWluQ29udGVudFxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY3JlZGl0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCBcXHUwMEE5ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBhYmVydGphbWVzYDtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5jb25zdCBjcmVhdGVCYWNrZ3JvdW5kSW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYmtnSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYmtnSW1nLnNyYyA9ICdpbWFnZXMvSmFja19SYWJiaXRfU2xpbXNfQ0NfTWFzdGVyX1NxdWFyZXNfTGF5ZXJzXzEyMDB4MTIwMC53ZWJwJztcbiAgICBia2dJbWcuYWx0ID0gJ2phY2sgcmFiYml0IHNsaW0nXG5cbiAgICBia2dJbWcuY2xhc3NMaXN0LmFkZCgnYmtnSW1nJyk7XG5cbiAgICByZXR1cm4gYmtnSW1nXG59XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgaW5pdGlhbGl6ZVdlYnNpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCbHVyYigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZEltYWdlKCkpO1xuICAgIC8vIGxvYWRCbHVyYigpO1xuICAgIGxvYWRNZW51UGFnZSgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJjb25zdCBjcmVhdGVNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdGaXZlIERvbGxhciBTaGFrZScsICdNaWxrLCBjaG9pY2Ugb2YgdmFuaWxsYSwgY2hvY29sYXRlLCBvciBzdHJhd2JlcnJ5IGljZWNyZWFtJywgJyQ1JykpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ2ZhcnQnLCAnbGFyZCcsICckOCcpKTtcblxuICAgIHJldHVybiBtZW51XG59XG5cbmNvbnN0IGNyZWF0ZU1lbnVJdGVtID0gKGl0ZW1OYW1lLCBpbmdyZWRpZW50cywgcHJpY2UpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtJyk7XG5cbiAgICBjb25zdCBmb29kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZm9vZEl0ZW0udGV4dENvbnRlbnQgPSBpdGVtTmFtZTtcblxuICAgIGNvbnN0IHNwZWNpZmljcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNwZWNpZmljcy5jbGFzc0xpc3QuYWRkKCdzcGVjaWZpY3MnKTtcblxuICAgIGNvbnN0IGZvb2RJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50cztcblxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb29kUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgIHNwZWNpZmljcy5hcHBlbmRDaGlsZChmb29kSW5ncmVkaWVudHMpO1xuICAgIHNwZWNpZmljcy5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuXG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSXRlbSk7XG4gICAgLy8gbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZ3JlZGllbnRzKTtcbiAgICAvLyBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKHNwZWNpZmljcyk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW1cbn1cblxuXG5cbmNvbnN0IGxvYWRNZW51UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVBhZ2UoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51UGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNvbnNvbGUubG9nKFwiSGVsbG9cIik7XG5cbi8vaW1wb3J0IHRoZSBwYWdlIGxvYWQgZnVuY3Rpb24gaGVyZSBcblxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkhlbGxvXCI7XG4vLyAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuIFxuLy8gICAgIHJldHVybiBlbGVtZW50O1xuXG4gICAgLy8gY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAvLyBmb29kSW1hZ2Uuc3JjID0gJ2ltYWdlcy90aGUtc2xpbS1zLWRpbmVyLmpwZWcnXG4gICAgLy8gZm9vZEltYWdlLnNyYyA9ICdpbWFnZXMvSmFja19SYWJiaXRfU2xpbXNfQ0NfTWFzdGVyX1NxdWFyZXNfTGF5ZXJzXzEyMDB4MTIwMC53ZWJwJ1xuICAgIC8vIHJldHVybiBmb29kSW1hZ2U7XG4vLyB9XG4gXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gJy4vaW5pdFdlYnNpdGUnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuXG4vLyBpbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XG5cbi8vIGxvYWRDb250YWN0UGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==