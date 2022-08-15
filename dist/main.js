/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initWebsite.js":
/*!****************************!*\
  !*** ./src/initWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const credit = document.createElement("p");
    // credit.textContent = `Copyright © ${new Date().getFullYear()} abertjames`;
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







const initializeWebsite = () => {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createBlurb());
    content.appendChild(createFooter());

    content.appendChild(createBackgroundImage());

    console.log("hello");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQywwQkFBMEI7QUFDckUsNkNBQTZDLDBCQUEwQjs7QUFFdkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7VUMxR2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEM7O0FBRTlDLHdEQUFpQjs7QUFFakI7O0FBRUEscUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0cGFnZS8uL3NyYy9pbml0V2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIC8vIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkphY2sgUmFiYml0IFNsaW0nc1wiO1xuICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gIFxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+ICB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICAvLyBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIC8vIGFkZCBidXR0b24gZnVuY3Rpb25hbGl0eSBldmVudCBsaXN0ZW5lciBoZXJlIFxuICAgIFxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIC8vIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG5cblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIC8vIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgXG4gICAgcmV0dXJuIG5hdkJhcjtcbn1cblxuY29uc3QgY3JlYXRlQmx1cmIgPSAoKSA9PiB7XG4gICAgY29uc3QgYmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgYmx1cmIuY2xhc3NMaXN0LmFkZCgnYmx1cmInKTtcblxuICAgIGNvbnN0IGltZ0Nyb3BwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWdDcm9wcGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlQ3JvcHBlcicpO1xuXG4gICAgY29uc3QgY292ZXJQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvdmVyUGhvdG8uc3JjID0gJ2ltYWdlcy91bWFfbWVudV8yLnBuZyc7XG4gICAgY292ZXJQaG90by5hbHQgPSAndW1hJztcbiAgICBjb3ZlclBob3RvLmNsYXNzTGlzdC5hZGQoJ2NvdmVyUGhvdG8nKVxuXG4gICAgZnVuY3Rpb24gd3JpdGVQYXJhZ3JhcGgodGV4dCkge1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhZ3JhcGhcbiAgICB9XG5cbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnVGhlIGJlc3QgZml2ZSBkb2xsYXIgc2hha2VzIG1vbmV5IGNhbiBidXknKSk7XG4gICAgYmx1cmIuYXBwZW5kQ2hpbGQod3JpdGVQYXJhZ3JhcGgoJ0VzdGFibGlzaGVkIDE5ODInKSk7XG4gICAgaW1nQ3JvcHBlci5hcHBlbmRDaGlsZChjb3ZlclBob3RvKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZChpbWdDcm9wcGVyKTtcbiAgICBibHVyYi5hcHBlbmRDaGlsZCh3cml0ZVBhcmFncmFwaCgnVGhlIG5leHQgYmVzdCB0aGluZyB0byBhIHRpbWUgbWFjaGluZSEnKSk7XG5cbiAgICByZXR1cm4gYmx1cmJcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIC8vIGNyZWRpdC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGFiZXJ0amFtZXNgO1xuICAgIGNyZWRpdC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgXFx1MDBBOSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gYWJlcnRqYW1lc2A7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuY29uc3QgY3JlYXRlQmFja2dyb3VuZEltYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJrZ0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJrZ0ltZy5zcmMgPSAnaW1hZ2VzL0phY2tfUmFiYml0X1NsaW1zX0NDX01hc3Rlcl9TcXVhcmVzX0xheWVyc18xMjAweDEyMDAud2VicCc7XG4gICAgYmtnSW1nLmFsdCA9ICdqYWNrIHJhYmJpdCBzbGltJ1xuXG4gICAgYmtnSW1nLmNsYXNzTGlzdC5hZGQoJ2JrZ0ltZycpO1xuXG4gICAgcmV0dXJuIGJrZ0ltZ1xufVxuXG5cblxuXG5cblxuXG5jb25zdCBpbml0aWFsaXplV2Vic2l0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVCbHVyYigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFja2dyb3VuZEltYWdlKCkpO1xuXG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xuXG4vL2ltcG9ydCB0aGUgcGFnZSBsb2FkIGZ1bmN0aW9uIGhlcmUgXG5cbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFxuLy8gICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXCJIZWxsb1wiO1xuLy8gICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKTtcbiBcbi8vICAgICByZXR1cm4gZWxlbWVudDtcblxuICAgIC8vIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgLy8gZm9vZEltYWdlLnNyYyA9ICdpbWFnZXMvdGhlLXNsaW0tcy1kaW5lci5qcGVnJ1xuICAgIC8vIGZvb2RJbWFnZS5zcmMgPSAnaW1hZ2VzL0phY2tfUmFiYml0X1NsaW1zX0NDX01hc3Rlcl9TcXVhcmVzX0xheWVyc18xMjAweDEyMDAud2VicCdcbiAgICAvLyByZXR1cm4gZm9vZEltYWdlO1xuLy8gfVxuIFxuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbmltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tICcuL2luaXRXZWJzaXRlJztcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKTtcblxuLy8gaW1wb3J0IGxvYWRDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QnO1xuXG4vLyBsb2FkQ29udGFjdFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=