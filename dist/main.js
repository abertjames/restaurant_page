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
    const main = document.getElementById('main');
    main.innerHTML = '';

    main.appendChild(createBlurb());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadBlurb);

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
    (0,_blurb__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ1E7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMsMEJBQTBCOztBQUV2RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGtEQUFTO0FBQ2I7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7VUN2RmhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEM7O0FBRTlDLHdEQUFpQjs7QUFFakI7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9ibHVyYi5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9pbml0V2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUJsdXJiID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsdXJiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIGJsdXJiLmNsYXNzTGlzdC5hZGQoJ2JsdXJiJyk7XG5cbiAgICBjb25zdCBpbWdDcm9wcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nQ3JvcHBlci5jbGFzc0xpc3QuYWRkKCdpbWFnZUNyb3BwZXInKTtcblxuICAgIGNvbnN0IGNvdmVyUGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb3ZlclBob3RvLnNyYyA9ICdpbWFnZXMvdW1hX21lbnVfMi5wbmcnO1xuICAgIGNvdmVyUGhvdG8uYWx0ID0gJ3VtYSc7XG4gICAgY292ZXJQaG90by5jbGFzc0xpc3QuYWRkKCdjb3ZlclBob3RvJylcblxuICAgIGZ1bmN0aW9uIHdyaXRlUGFyYWdyYXBoKHRleHQpIHtcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gcGFyYWdyYXBoXG4gICAgfVxuXG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ1RoZSBiZXN0IGZpdmUgZG9sbGFyIHNoYWtlcyBtb25leSBjYW4gYnV5JykpO1xuICAgIGJsdXJiLmFwcGVuZENoaWxkKHdyaXRlUGFyYWdyYXBoKCdFc3RhYmxpc2hlZCAxOTgyJykpO1xuICAgIGltZ0Nyb3BwZXIuYXBwZW5kQ2hpbGQoY292ZXJQaG90byk7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQoaW1nQ3JvcHBlcik7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ1RoZSBuZXh0IGJlc3QgdGhpbmcgdG8gYSB0aW1lIG1hY2hpbmUhJykpO1xuXG5cbiAgICByZXR1cm4gYmx1cmJcbn1cblxuY29uc3QgbG9hZEJsdXJiID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUJsdXJiKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmx1cmI7IiwiaW1wb3J0IGxvYWRCbHVyYiBmcm9tIFwiLi9ibHVyYlwiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAvLyByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKFwicmVzdGF1cmFudC1uYW1lXCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJKYWNrIFJhYmJpdCBTbGltJ3NcIjtcbiAgXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICBcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiAge1xuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgLy8gaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICAvLyBhZGQgYnV0dG9uIGZ1bmN0aW9uYWxpdHkgZXZlbnQgbGlzdGVuZXIgaGVyZSBcbiAgICBcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICAvLyBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICAvLyBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gIFxuICAgIHJldHVybiBuYXZCYXI7XG59XG5cbmNvbnN0IGNyZWF0ZU1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ2JsdXJiJyk7XG4gICAgbWFpbkNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG4gICAgcmV0dXJuIG1haW5Db250ZW50XG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBjcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjcmVkaXQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IFxcdTAwQTkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGFiZXJ0amFtZXNgO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNyZWRpdCk7XG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmNvbnN0IGNyZWF0ZUJhY2tncm91bmRJbWFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBia2dJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBia2dJbWcuc3JjID0gJ2ltYWdlcy9KYWNrX1JhYmJpdF9TbGltc19DQ19NYXN0ZXJfU3F1YXJlc19MYXllcnNfMTIwMHgxMjAwLndlYnAnO1xuICAgIGJrZ0ltZy5hbHQgPSAnamFjayByYWJiaXQgc2xpbSdcblxuICAgIGJrZ0ltZy5jbGFzc0xpc3QuYWRkKCdia2dJbWcnKTtcblxuICAgIHJldHVybiBia2dJbWdcbn1cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluQ29udGVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJsdXJiKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCYWNrZ3JvdW5kSW1hZ2UoKSk7XG4gICAgbG9hZEJsdXJiKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc29sZS5sb2coXCJIZWxsb1wiKTtcblxuLy9pbXBvcnQgdGhlIHBhZ2UgbG9hZCBmdW5jdGlvbiBoZXJlIFxuXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gZnVuY3Rpb24gY29tcG9uZW50KCkge1xuLy8gICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiBcbi8vICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiSGVsbG9cIjtcbi8vICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gXG4vLyAgICAgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAvLyBjb25zdCBmb29kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIC8vIGZvb2RJbWFnZS5zcmMgPSAnaW1hZ2VzL3RoZS1zbGltLXMtZGluZXIuanBlZydcbiAgICAvLyBmb29kSW1hZ2Uuc3JjID0gJ2ltYWdlcy9KYWNrX1JhYmJpdF9TbGltc19DQ19NYXN0ZXJfU3F1YXJlc19MYXllcnNfMTIwMHgxMjAwLndlYnAnXG4gICAgLy8gcmV0dXJuIGZvb2RJbWFnZTtcbi8vIH1cbiBcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG5pbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSAnLi9pbml0V2Vic2l0ZSc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG5cbi8vIGltcG9ydCBsb2FkQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcblxuLy8gbG9hZENvbnRhY3RQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9