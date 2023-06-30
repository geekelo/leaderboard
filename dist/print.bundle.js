"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["print"],{

/***/ "./src/fetchdata.js":
/*!**************************!*\
  !*** ./src/fetchdata.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetData)
/* harmony export */ });
class GetData {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FKHju9Dj2M8LwqYT9Cgw/scores';
    this.fetchData();
  }

  async fetchData() {
    try {
      const response = await fetch(this.url);
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }
}


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PrintMe)
/* harmony export */ });
/* harmony import */ var _fetchdata_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchdata.js */ "./src/fetchdata.js");


class PrintMe {
  constructor() {
    this.container = document.querySelector('.scoreDetailsContainer');
    this.fetchedData = new _fetchdata_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.onLoad();
    this.setupEvent();
  }

  create(item) {
    const scoreDetails = document.createElement('p');
    scoreDetails.className = 'scoreDetails';
    scoreDetails.innerHTML = `<span class="fetchedData">${item.user}</span><span class="fetchedData">${item.score}</span>`;
    this.container.appendChild(scoreDetails);
  }

  display(result) {
    this.container.innerHTML = '';
    result.forEach((each) => {
      this.create(each);
    });
  }

  async onLoad() {
    const result = await this.fetchedData.fetchData();
    this.display(result.result);
  }

  setupEvent() {
    document.querySelector('.refreshBtn').addEventListener('submit', (e) => {
      e.preventDefault();
      this.onLoad();
    });
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/print.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFDO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBO0FBQ0EsMkJBQTJCLHFEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFVBQVUsbUNBQW1DLFdBQVc7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2ZldGNoZGF0YS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcHJpbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2V0RGF0YSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy9GS0hqdTlEajJNOEx3cVlUOUNndy9zY29yZXMnO1xyXG4gICAgdGhpcy5mZXRjaERhdGEoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoRGF0YSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy51cmwpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdldERhdGEgZnJvbSAnLi9mZXRjaGRhdGEuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbnRNZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZURldGFpbHNDb250YWluZXInKTtcclxuICAgIHRoaXMuZmV0Y2hlZERhdGEgPSBuZXcgR2V0RGF0YSgpO1xyXG4gICAgdGhpcy5vbkxvYWQoKTtcclxuICAgIHRoaXMuc2V0dXBFdmVudCgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKGl0ZW0pIHtcclxuICAgIGNvbnN0IHNjb3JlRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNjb3JlRGV0YWlscy5jbGFzc05hbWUgPSAnc2NvcmVEZXRhaWxzJztcclxuICAgIHNjb3JlRGV0YWlscy5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJmZXRjaGVkRGF0YVwiPiR7aXRlbS51c2VyfTwvc3Bhbj48c3BhbiBjbGFzcz1cImZldGNoZWREYXRhXCI+JHtpdGVtLnNjb3JlfTwvc3Bhbj5gO1xyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVEZXRhaWxzKTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXkocmVzdWx0KSB7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlc3VsdC5mb3JFYWNoKChlYWNoKSA9PiB7XHJcbiAgICAgIHRoaXMuY3JlYXRlKGVhY2gpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkxvYWQoKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoZWREYXRhLmZldGNoRGF0YSgpO1xyXG4gICAgdGhpcy5kaXNwbGF5KHJlc3VsdC5yZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBFdmVudCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==