"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["postdata"],{

/***/ "./src/postData.js":
/*!*************************!*\
  !*** ./src/postData.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SendData)
/* harmony export */ });
class SendData {
  constructor() {
    this.playerName = document.querySelector('#user');
    this.playerScore = document.querySelector('#score');
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FKHju9Dj2M8LwqYT9Cgw/scores';
    this.setupListener();
    this.postData();
  }

  async postData(playername, playerscore) {
    try {
      const data = {
        score: playerscore,
        user: playername,
      };

      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      return null;
    }
  }

  setupListener() {
    const form = document.querySelector('.postForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = this.playerName.value;
      const score = this.playerScore.value;
      await this.postData(user, score);
      form.reset();
    });
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/postData.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGRhdGEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvcG9zdERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VuZERhdGEge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKTtcclxuICAgIHRoaXMucGxheWVyU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKTtcclxuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzL0ZLSGp1OURqMk04THdxWVQ5Q2d3L3Njb3Jlcyc7XHJcbiAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcclxuICAgIHRoaXMucG9zdERhdGEoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHBvc3REYXRhKHBsYXllcm5hbWUsIHBsYXllcnNjb3JlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIHNjb3JlOiBwbGF5ZXJzY29yZSxcclxuICAgICAgICB1c2VyOiBwbGF5ZXJuYW1lLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh0aGlzLnVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0dXBMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zdEZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB1c2VyID0gdGhpcy5wbGF5ZXJOYW1lLnZhbHVlO1xyXG4gICAgICBjb25zdCBzY29yZSA9IHRoaXMucGxheWVyU2NvcmUudmFsdWU7XHJcbiAgICAgIGF3YWl0IHRoaXMucG9zdERhdGEodXNlciwgc2NvcmUpO1xyXG4gICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9