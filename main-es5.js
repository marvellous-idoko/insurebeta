function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/agri-mterics/agri-mterics.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agri-mterics/agri-mterics.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAgriMtericsAgriMtericsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section style=\"padding: 15px;\">\n    <div style=\"margin: 12px;\">\n         <h1 style=\"text-align: center;\">Here are your machines </h1>\n            <mat-card *ngFor=\"let j of this.j\" style=\"margin: 12px;\">\n                <button mat-button type=\"button\" class=\"delete\" (click)=\"delMch(j._id)\">X</button>\n                <mat-card-header>\n                    Name &nbsp; \n                    <strong> {{j.name}}</strong>\n                    <div style=\"position: absolute; right: 15px;\">Year of purchase &nbsp; &nbsp;<b>{{j.DOP.slice(0, 4)}} </b></div>\n                </mat-card-header>\n                <hr>\n                <div>Model &nbsp;<code>{{j.model}}</code></div>\n            </mat-card>\n    </div>\n    <form [formGroup]=\"machine\" validate>\n        <mat-card>\n            <h1 style=\"text-align: center;\">Add a machine to cover under your insurance</h1>\n            <mat-form-field appearance=\"fill\">\n                <mat-label> Choose Machine or Implemnt name</mat-label>\n                <mat-select formControlName=\"machineName\">\n                    <mat-option value=\"grater\"> Grater</mat-option>\n                    <mat-option value=\"Planter\">Planter</mat-option>\n                    <mat-option value=\"Harvester\">Harvester</mat-option>\n                </mat-select>\n            </mat-form-field>\n            \n            <mat-form-field appearance=\"fill\">\n                <mat-label>Model</mat-label>\n                <mat-select formControlName=\"model\">\n                    <mat-option value=\"GRA404\"> GRA404</mat-option>\n                    <mat-option value=\"PL404\">PL404</mat-option>\n                    <mat-option value=\"HA3309\">HA3309</mat-option>\n                    <mat-option value=\"HA2309\">HA2309</mat-option>\n                    <mat-option value=\"HA3009\">HA3009</mat-option>\n                    <mat-option value=\"HA3309\">HA3309</mat-option>\n                    <mat-option value=\"HA3039\"> HA3039</mat-option>\n                    <mat-option value=\"PL334\">PL334</mat-option>\n                    <mat-option value=\"PL304\">PL304</mat-option>\n                    <mat-option value=\"GRA2111B\">GRA2111B</mat-option>\n                    <mat-option value=\"GRA21AB\">GRA21AB</mat-option>\n                    <mat-option value=\"GRA211B\">GRA211B</mat-option>\n                </mat-select>\n            </mat-form-field>\n            <mat-form-field appearance=\"fill\">\n                <mat-label>Date of purchase</mat-label>\n                <input matInput [matDatepicker]=\"picker\" formControlName=\"DOP\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n        </mat-card>\n        <mat-card-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"addMachine()\">Add</button>\n        </mat-card-actions>\n    </form>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style> -->\n\n<!-- Toolbar -->\n<!-- <div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div>\n\n<div class=\"content\" role=\"main\"> -->\n\n<!-- Highlight Card -->\n<!-- <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div> -->\n\n<!-- Resources -->\n<!-- <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div> -->\n\n<!-- Next Steps -->\n<!-- <h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div>\n -->\n<!-- Terminal -->\n<!-- <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div> -->\n\n<!-- Links -->\n<!-- <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n<!-- \n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a> -->\n\n<!-- <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div>\n -->\n<!-- Footer -->\n<!-- <footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer> -->\n\n<!-- <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>\n\n</div> -->\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\">\n  <mat-drawer #drawer mode=\"over\" position=\"end\">\n    <section style=\"padding:10px 20px\">\n      <div>\n        <div id=\"uiop\" >\n          \n          <strong id=\"v\">You are logged out</strong>\n          <br><strong id=\"u\"></strong>         \n        </div>\n        <br>\n       \n        <button mat-raised-button color=\"accent\" id=\"b\" (click)=\"gotoreg()\">Log in</button>\n        <button mat-raised-button color=\"accent\" style=\"display: none;\" id=\"r\"\n         (click)=\"gotoreg()\">Log out</button>\n\n      </div>\n      <br>\n    </section>\n  </mat-drawer>\n  <mat-drawer-content>\n    <mat-toolbar matRipple color='accent'>\n      <span><strong>insureBeta</strong></span>\n      <span id=\"spacer\"></span>\n      <div (click)=\"chk()\" style=\"padding: 2px;\"><button mat-icon-button class=\"example-icon\"  (click)=\"drawer.toggle()\"\n        aria-label=\"Example icon-button with menu icon\">\n        \n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n    </mat-toolbar>\n\n    <!-- <app-nav></app-nav> -->\n    <router-outlet></router-outlet>\n    <!-- <mat-form-field>\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field> -->\n    <!-- <mat-form-field>\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field> -->\n    <!-- <button mat-raised-button>Toggle drawer</button> -->\n  </mat-drawer-content>\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n    <div id=\"cont\">\n        <div id=\"circle\">\n            <div style=\"display:flex\">\n                <b id=\"pp\">\n                    <span id=\"bigText\">Welcome to insureBeta</span>\n                    <br> . . . Your sure way to microinsurance\n                </b>\n            </div>\n        </div>\n    </div>\n</section>\n<section>\n\n    <div id=\"conu\">\n        <mat-tab-group mat-stretch-tabs [color]=\"'accent'\">\n            <mat-tab>\n                <ng-template style=\"background-color: white;\" mat-tab-label>\n                    <b style=\"color: white;\"> General</b>\n                </ng-template>\n                <div style=\"background-color: white; padding: 10px;\">\n                    <div>\n                        <div class=\"card\" matRipple (click)=\"routeTo('pay-premium')\">\n                            <div style=\"    display: flex;  align-items: center;\">\n                                <div class=\"card-img\"></div>\n                            </div>\n                            <div style=\"margin-left: 15px;\">\n                                <div><strong class=\"card-header\"> Pay Premium</strong></div>\n                                <hr>\n                                <div>Make your premium payments</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click)=\"routeTo('update-metric')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div>\n                            <strong class=\"card-header\"> Update your premium metrics</strong></div>\n                            <hr>\n                            <div>Gives us information about you to help us give you the best minimum premiums. You can also see your risk predictions</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('premium-history')\">\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View Premium History</strong></div>\n                            <hr>\n                            <div>View your premium history and see your faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('make-claims')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Make Claims</strong></div>\n                            <hr>\n                            <div>Have any damages? You can make claims here</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('claims-history')\">\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View claims History</strong></div>\n                            <hr>\n                            <div>View your claims history and see our faithfulness</div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab>\n                <ng-template style=\"background-color: white;\" mat-tab-label>\n                    <b style=\"color: white;\">Health</b>\n                </ng-template>\n                <div style=\"background-color: white; padding: 10px;\">\n                    <div>\n                        <div class=\"card\" matRipple (click)=\"routeTo('pay-premium')\">\n                            <div style=\"    display: flex;  align-items: center;\">\n                                <div class=\"card-img\"></div>\n                            </div>\n                            <div style=\"margin-left: 15px;\">\n                                <div><strong class=\"card-header\"> Pay Premium</strong></div>\n                                <hr>\n                                <div>Make your premium payments</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click)=\"routeTo('update-metric')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div>\n                            <strong class=\"card-header\"> Update your premium metrics</strong></div>\n                            <hr>\n                            <div>Gives us information about you to help us give you the best minimum premiums. You can also see your risk predictions</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('premium-history')\">\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View Premium History</strong></div>\n                            <hr>\n                            <div>View your premium history and see your faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('make-claims')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Make Claims</strong></div>\n                            <hr>\n                            <div>Have any damages? You can make claims here</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('claims-history')\">\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View claims History</strong></div>\n                            <hr>\n                            <div>View your claims history and see our faithfulness</div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <b style=\"color: white;\"> Agriculture</b>\n                </ng-template>\n                <div style=\"background-color: white; padding: 10px;\">\n                    <div>\n                        <div class=\"card\" matRipple (click)=\"routeTo('premium-history')\">\n                            <div style=\"    display: flex;  align-items: center;\">\n                                <div class=\"card-img\"></div>\n                            </div>\n                            <div style=\"margin-left: 15px;\">\n                                <div><strong class=\"card-header\"> View Premium History</strong></div>\n                                <hr>\n                                <div>View your premium history and see your faithfulness</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click)=\"routeTo('agric-metrics')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Update Premium Metric</strong></div>\n                            <hr>\n                            <div>Give us vital information about your machines, crops and livestock, to help us predict your risks annd give you the best possible premiums</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click)=\"routeTo('payAgricPrem')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\">Pay Premiums</strong></div>\n                            <hr>\n                            <div>Make your Agriculture premium payements here, to improve your claims stake</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click)=\"routeTo('make-claims')\">\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Make Claims</strong></div>\n                            <hr>\n                            <div> have you encountered any damage? Make your claims here</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple (click) = \"routeTo('claims-history')\">\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View claims History</strong></div>\n                            <hr>\n                            <div>View your claims history and see our faithfulness</div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Claims History</strong></div>\n                            <hr>\n                            <div>View your claim history and see our faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View Premium Histroy</strong></div>\n                            <hr>\n                            <div>View your premium history and see your faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View Premium Histroy</strong></div>\n                            <hr>\n                            <div>View your premium history and see your faithfulness</div>\n                        </div>\n                    </div> -->\n\n                </div>\n            </mat-tab>\n            <!-- <mat-tab>\n                <ng-template mat-tab-label>\n                    <b style=\"color: white;\"> Health</b>\n                </ng-template>\n\n                <div style=\"background-color: white; padding: 10px;\">\n                    <div>\n                        <div class=\"card\" matRipple >\n                            <div style=\"    display: flex;  align-items: center;\">\n                                <div class=\"card-img\"></div>\n                            </div>\n                            <div style=\"margin-left: 15px;\">\n                                <div><strong class=\"card-header\"> Pay Premium</strong></div>\n                                <hr>\n                                <div>Make your premium payments</div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Update your premium metrics</strong></div>\n                            <hr>\n                            <div>Gives us information about you to help us give you the best minimum premiums. You can also see your risk predictions</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View Premium Histroy</strong></div>\n                            <hr>\n                            <div>View your premium history and see your faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> Make Claims</strong></div>\n                            <hr>\n                            <div>Have any damages? You can make claims here</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"    display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                        <div style=\"margin-left: 15px;\">\n                            <div><strong class=\"card-header\"> View claims Histroy</strong></div>\n                            <hr>\n                            <div>View your claims history and see our faithfulness</div>\n                        </div>\n                    </div>\n                    <div class=\"card\" matRipple >\n                        <div style=\"display: flex;  align-items: center;\">\n                            <div class=\"card-img\"></div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab> -->\n        </mat-tab-group>\n        <!-- <div> -->\n    </div>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n    <!-- <dialog> -->\n\n    <mat-card>\n        <mat-card-header>\n            <mat-card-title>Log In</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n            <form [formGroup]=\"addressForm\" validate>\n            <!-- <mat-error *ngIf=\"err\">\n                <strong>{{err}}</strong>\n            </mat-error> -->\n\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input type=\"text\" matInput placeholder=\"Your ID Please . . .\"\n                     formControlName=\"id\" />\n                    <mat-error *ngIf=\"addressForm.controls['id'].hasError('required')\">\n                        <strong>ID is required</strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <mat-form-field class=\"full-width\">\n                    <input type=\"password\" matInput placeholder=\"Password\"\n                     formControlName=\"pwd\" />\n                    <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('required')\">\n                        <strong>Password </strong>\n                    </mat-error>\n                </mat-form-field>\n            </div>\n        </div>\n\n\n        <div style=\"display: flex\">\n            <div style=\"margin: 0 42px 0 0;\">\n                <mat-card-actions>\n                    <button mat-raised-button type=\"submit\" id=\"ppp\" (click)=\"goto()\">Create Account</button>\n                </mat-card-actions>\n            </div>\n            <div >\n                <mat-card-actions>\n                    <button mat-raised-button  id =\"bk\" color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Login</button>\n                </mat-card-actions>\n            </div>\n\n            <!-- </div> -->\n        </div>\n        \n    </form>\n</mat-card-content>\n\n    </mat-card>\n    <!-- </dialog> -->\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/make-claim-history/make-claim-history.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/make-claim-history/make-claim-history.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMakeClaimHistoryMakeClaimHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>make-claim-history works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/make-claims/make-claims.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/make-claims/make-claims.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMakeClaimsMakeClaimsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section style=\"padding:5px 10px;\">\n    <form [formGroup]=\"form\" validate>\n        <mat-card>\n          \n        </mat-card>\n    </form>\n</section> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<mat-card><mat-card-header><h1>ARERTRRR</h1></mat-card-header></mat-card> -->\n<mat-toolbar mat-ripple color='accent'></mat-toolbar>\n<button mat-button>BOKOK</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-agric-prem/pay-agric-prem.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay-agric-prem/pay-agric-prem.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPayAgricPremPayAgricPremComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>Your Total Agricultural premium is <strong style=\"color: green;\">{{this.a}}</strong></h1>\r\n<button \r\n            mat-button\r\n            angular4-paystack \r\n            color=\"accent\"\r\n            id=\"paystackButton\" \r\n            email=\"{{this.sR.u.email}}\"\r\n            amount={{this.aa}}  \r\n            ref=\"{{ref}}\"\r\n            [channels]=\"['card']\"\r\n            [class]=\"'paystackButton'\"\r\n            (close)=\"paymentCancel()\"\r\n            (callback)=\"paymentDone()\">\r\n                Make Payments\r\n</button><br>\r\n<i id=\"informer\" style=\"color: red;\"></i>\r\n            ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-premium/pay-premium.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay-premium/pay-premium.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPayPremiumPayPremiumComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\r\n    <div mat-card>\r\n        <legend>\r\n            <mat-card-header>Confirm your premium</mat-card-header>\r\n            <p>The total amount calculated for your premium this month is </p>\r\n            <h1>{{amt.toString().slice(0,5)}}</h1>\r\n            <button\r\n            mat-button\r\n            angular4-paystack \r\n            id=\"paystackButton\" \r\n            email=\"{{this.sR.u.email}}\"\r\n            amount={{amt}}  \r\n            ref=\"{{ref}}\"\r\n            [channels]=\"['card']\"\r\n            [class]=\"'paystackButton'\"\r\n            (close)=\"paymentCancel()\"\r\n            (callback)=\"paymentDone($event)\">\r\n                Make Payments\r\n            </button>\r\n        </legend>\r\n        <i id=\"informer\" style=\"color: red;\"></i>\r\n    </div>\r\n</section>\r\n\r\n<section id=\"modal\">\r\n    <mat-card style=\"width:fit-content; align-self: center;\"> \r\n        <mat-card-header>Update Metrics</mat-card-header>\r\n        <h4>OOPs it seems you've not updated your premium metrics</h4>\r\n        <button mat-button (click)=\"gotoUMT()\">Go to update metrics</button>\r\n    </mat-card>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/portal/portal.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/portal/portal.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPortalPortalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/premium-history/premium-history.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/premium-history/premium-history.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPremiumHistoryPremiumHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section>\n    <h1 style=\"text-align: center;\">Here is Your premium History </h1>\n    <mat-card *ngFor=\"let j of this.j\" style=\"margin: 12px;\">\n        <details>\n            <ul style=\"list-style: none;\">\n                <li><b>Status</b><span class=\"s\" *ngIf=\"j.status == true\"> Paid</span></li>\n                <li><b>Phone</b><span class=\"s\">{{j.phone}}</span></li>\n                <li><b>Email</b><span class=\"s\">{{j.email}}</span></li>\n                <li><b>ID</b><span class=\"s\">{{j.clId}}</span></li>\n                <li><b>Category</b><span class=\"s\">{{j.category}}</span></li>\n\n            </ul>\n            <summary>\n                <mat-card-header>\n                    <strong>Amount: {{j.amt}}</strong>\n                    <div class=\"d\">{{j.date.slice(0, 10)}} </div>\n                </mat-card-header>\n                <hr>\n                <diV><b>IRN: </b>{{j.trID}}</diV>\n            </summary>\n        </details>\n    </mat-card>\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"addressForm\" validate>\n  <mat-card class=\"shipping-card\">\n    <mat-card-header>\n      <mat-card-title>Personal Information</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n\n      <!-- <div class=\"row\">\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Company\" formControlName=\"company\">\n          </mat-form-field>\n        </div>\n      </div> -->\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"First name\" formControlName=\"firstName\">\n            <mat-error *ngIf=\"addressForm.controls['firstName'].hasError('required')\">\n              First name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n            <mat-error *ngIf=\"addressForm.controls['lastName'].hasError('required')\">\n              Last name is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"email\" type=\"email\" formControlName=\"email\">\n            <mat-error *ngIf=\"addressForm.controls['email'].hasError('required')\">\n              email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"contact\" type=\"tel\" formControlName=\"contact\">\n            <mat-error *ngIf=\"addressForm.controls['contact'].hasError('required')\">\n              email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\" formControlName=\"address\"></textarea>\n            <mat-error *ngIf=\"addressForm.controls['address'].hasError('required')\">\n              Address is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Register as a</mat-label>\n            <mat-select formControlName=\"typ\">\n              <mat-option value=\"healthPraticioner\">Health Practioner</mat-option>\n              <mat-option value=\"agent\">Agent</mat-option>\n              <mat-option value=\"client\">Client</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div><br>\n        <div>\n          <mat-form-field appearance=\"fill\">\n            <mat-label>Date of Birth</mat-label>\n            <input matInput [matDatepicker] = \"picker\" formControlName=\"DOB\">\n            <mat-datepicker-toggle matSuffix [for] = \"picker\" ></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n            <mat-error *ngIf=\"addressForm.controls['DOB'].hasError('required')\">\n              Date of Birth is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n      <div>\n        <div class=\"col\">\n          <mat-form-field class=\"full-width\">\n            <input type=\"password\" matInput placeholder=\"Password\" formControlName=\"pwd\" />\n            <mat-error *ngIf=\"addressForm.controls['pwd'].hasError('required')\">\n              <strong>Password </strong>\n            </mat-error>\n          </mat-form-field>\n        </div>\n      </div>\n\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"onSubmit()\">Submit</button>\n    </mat-card-actions>\n  </mat-card>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-metrics/update-metrics.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-metrics/update-metrics.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateMetricsUpdateMetricsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-button color=\"accent\" (click) = \"update()\" id=\"upd\"> Update </button>\r\n<section id=\"modal\">\r\n    <mat-card style=\"width:fit-content; align-self: center;\"> \r\n        <div (click)=\"hide()\" id=\"ty\"><h3 style=\"color: red;\">X</h3></div>\r\n\r\n        <h4>Little information</h4>\r\n        <p>We intend to use your health information for your metrics, but that is not \r\n            fully implemented now therefore we would be using your Age as a metric for caluculating your metric so the \r\n            older you are the higher your premium. For just click the update button to consent to this for this first time\r\n        </p>\r\n        \r\n    </mat-card>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/agri-mterics/agri-mterics.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/agri-mterics/agri-mterics.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAgriMtericsAgriMtericsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field{\r\n    margin: 10px;\r\n}\r\n.delete{\r\n    position: absolute;\r\n    right: -20px;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdyaS1tdGVyaWNzL2FncmktbXRlcmljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9hZ3JpLW10ZXJpY3MvYWdyaS1tdGVyaWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG4uZGVsZXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdG9wOiAwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/agri-mterics/agri-mterics.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/agri-mterics/agri-mterics.component.ts ***!
    \********************************************************/

  /*! exports provided: AgriMtericsComponent */

  /***/
  function srcAppAgriMtericsAgriMtericsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgriMtericsComponent", function () {
      return AgriMtericsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tortuga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tortuga.service */
    "./src/app/tortuga.service.ts");

    var AgriMtericsComponent =
    /*#__PURE__*/
    function () {
      function AgriMtericsComponent(fb, s) {
        _classCallCheck(this, AgriMtericsComponent);

        this.fb = fb;
        this.s = s;
        this.machine = this.fb.group({
          machineName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          model: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          DOP: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AgriMtericsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rtvMachs();
        }
      }, {
        key: "delMch",
        value: function delMch(d) {
          var _this = this;

          console.log(d);
          this.s.deleteMachine(d).subscribe(function (s) {
            _this.s.retrieveMachines().subscribe(function (k) {
              console.log(k);
              _this.j = k;
              console.log(_this.j);
            });
          });
        }
      }, {
        key: "addMachine",
        value: function addMachine() {
          var _this2 = this;

          // var r:string;
          // r.toLowerCase
          if (this.machine.get('machineName').value.slice(0, 2).toLowerCase() == this.machine.get('model').value.slice(0, 2).toLowerCase()) {
            this.s.agriMetrics(this.machine.value).subscribe(function (s) {
              if (s) {
                _this2.machine.reset();

                _this2.s.retrieveMachines().subscribe(function (k) {
                  console.log(k);
                  _this2.j = k;
                  console.log(_this2.j);
                });
              }
            });
          } else {}
        }
      }, {
        key: "rtvMachs",
        value: function rtvMachs() {
          var _this3 = this;

          this.s.retrieveMachines().subscribe(function (g) {
            _this3.j = g;
            console.log(g);
          });
        }
      }]);

      return AgriMtericsComponent;
    }();

    AgriMtericsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _tortuga_service__WEBPACK_IMPORTED_MODULE_3__["TortugaService"]
      }];
    };

    AgriMtericsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agri-mterics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./agri-mterics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/agri-mterics/agri-mterics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./agri-mterics.component.css */
      "./src/app/agri-mterics/agri-mterics.component.css")).default]
    })], AgriMtericsComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pay-premium/pay-premium.component */
    "./src/app/pay-premium/pay-premium.component.ts");
    /* harmony import */


    var _update_metrics_update_metrics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-metrics/update-metrics.component */
    "./src/app/update-metrics/update-metrics.component.ts");
    /* harmony import */


    var _premium_history_premium_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./premium-history/premium-history.component */
    "./src/app/premium-history/premium-history.component.ts");
    /* harmony import */


    var _agri_mterics_agri_mterics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./agri-mterics/agri-mterics.component */
    "./src/app/agri-mterics/agri-mterics.component.ts");
    /* harmony import */


    var _pay_agric_prem_pay_agric_prem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pay-agric-prem/pay-agric-prem.component */
    "./src/app/pay-agric-prem/pay-agric-prem.component.ts");
    /* harmony import */


    var _make_claim_history_make_claim_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./make-claim-history/make-claim-history.component */
    "./src/app/make-claim-history/make-claim-history.component.ts");
    /* harmony import */


    var _make_claims_make_claims_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./make-claims/make-claims.component */
    "./src/app/make-claims/make-claims.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'pay-premium',
      component: _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_6__["PayPremiumComponent"]
    }, {
      path: 'update-metric',
      component: _update_metrics_update_metrics_component__WEBPACK_IMPORTED_MODULE_7__["UpdateMetricsComponent"]
    }, {
      path: 'premium-history',
      component: _premium_history_premium_history_component__WEBPACK_IMPORTED_MODULE_8__["PremiumHistoryComponent"]
    }, {
      path: 'agric-metrics',
      component: _agri_mterics_agri_mterics_component__WEBPACK_IMPORTED_MODULE_9__["AgriMtericsComponent"]
    }, {
      path: 'payAgricPrem',
      component: _pay_agric_prem_pay_agric_prem_component__WEBPACK_IMPORTED_MODULE_10__["PayAgricPremComponent"]
    }, {
      path: 'make-claims',
      component: _make_claims_make_claims_component__WEBPACK_IMPORTED_MODULE_12__["MakeClaimsComponent"]
    }, {
      path: 'claims-history',
      component: _make_claim_history_make_claim_history_component__WEBPACK_IMPORTED_MODULE_11__["MakeClaimHistoryComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-drawer-container{\r\n    height: 100%!important;\r\n}\r\n#spacer {\r\n    flex: 1 1 auto;\r\n}\r\n#uiop{\r\n    height:50px;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    width: stretch;\r\nbackground-color: tomato; border: yellowgreen 2px solid; color: white;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBYztJQUFkLHFCQUFjO0lBQWQsY0FBYztBQUNsQix3QkFBd0IsRUFBRSw2QkFBNkIsRUFBRSxZQUFZLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuI3NwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4jdWlvcHtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgd2lkdGg6IHN0cmV0Y2g7XHJcbmJhY2tncm91bmQtY29sb3I6IHRvbWF0bzsgYm9yZGVyOiB5ZWxsb3dncmVlbiAycHggc29saWQ7IGNvbG9yOiB3aGl0ZTt9Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reg-log.service */
    "./src/app/reg-log.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(document, r, s) {
        _classCallCheck(this, AppComponent);

        this.document = document;
        this.r = r;
        this.s = s;
        this.title = 'insureBata';
      }

      _createClass(AppComponent, [{
        key: "gotoreg",
        value: function gotoreg() {
          this.r.navigateByUrl('/login');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.chk();
        }
      }, {
        key: "chk",
        value: function chk() {
          if (this.s.u.fullName != null) {
            this.document.getElementById('v').innerHTML = 'Full name: ' + this.s.u.fullName;
            this.document.getElementById('b').style.display = 'none';
            this.document.getElementById('r').style.display = 'block';
            this.document.getElementById('u').innerHTML = 'Your ID: ' + this.s.u.id;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular4_paystack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular4-paystack */
    "./node_modules/angular4-paystack/fesm2015/angular4-paystack.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _portal_portal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./portal/portal.component */
    "./src/app/portal/portal.component.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pay-premium/pay-premium.component */
    "./src/app/pay-premium/pay-premium.component.ts");
    /* harmony import */


    var _premium_history_premium_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./premium-history/premium-history.component */
    "./src/app/premium-history/premium-history.component.ts");
    /* harmony import */


    var _make_claims_make_claims_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./make-claims/make-claims.component */
    "./src/app/make-claims/make-claims.component.ts");
    /* harmony import */


    var _update_metrics_update_metrics_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./update-metrics/update-metrics.component */
    "./src/app/update-metrics/update-metrics.component.ts");
    /* harmony import */


    var _agri_mterics_agri_mterics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./agri-mterics/agri-mterics.component */
    "./src/app/agri-mterics/agri-mterics.component.ts");
    /* harmony import */


    var _pay_agric_prem_pay_agric_prem_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pay-agric-prem/pay-agric-prem.component */
    "./src/app/pay-agric-prem/pay-agric-prem.component.ts");
    /* harmony import */


    var _make_claim_history_make_claim_history_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./make-claim-history/make-claim-history.component */
    "./src/app/make-claim-history/make-claim-history.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _portal_portal_component__WEBPACK_IMPORTED_MODULE_8__["PortalComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _pay_premium_pay_premium_component__WEBPACK_IMPORTED_MODULE_23__["PayPremiumComponent"], _premium_history_premium_history_component__WEBPACK_IMPORTED_MODULE_24__["PremiumHistoryComponent"], _make_claims_make_claims_component__WEBPACK_IMPORTED_MODULE_25__["MakeClaimsComponent"], _update_metrics_update_metrics_component__WEBPACK_IMPORTED_MODULE_26__["UpdateMetricsComponent"], _agri_mterics_agri_mterics_component__WEBPACK_IMPORTED_MODULE_27__["AgriMtericsComponent"], _pay_agric_prem_pay_agric_prem_component__WEBPACK_IMPORTED_MODULE_28__["PayAgricPremComponent"], _make_claim_history_make_claim_history_component__WEBPACK_IMPORTED_MODULE_29__["MakeClaimHistoryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"], // MatBadgeModule,
      // MatBottomSheetModule,
      _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], // MatButtonToggleModule,
      _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"], // MatCheckboxModule,
      // MatChipsModule,
      _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], // MatInputModule,
      // MatListModule,
      // MatMenuModule,  
      // MatProgressBarModule,
      // MatProgressSpinnerModule,
      // MatRadioModule,
      _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], // Angular4PaystackModule.forRoot('pk_test_c5bc80647b60c1bf05f3f6fdac32a99f82b598ce'),
      angular4_paystack__WEBPACK_IMPORTED_MODULE_3__["Angular4PaystackModule"].forRoot('sk_live_5982eaee1af838320d2271f04411a36dafe4e264')],
      // exports: [ MatButtonModule ],
      providers: [_angular_material__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"]],
      // providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#cont{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 40vh;\r\n    background-color: #590759;;\r\n}\r\n#bigText{\r\n    font-size: 30px;\r\n}\r\n@media screen and (max-width:400px){\r\n    #bigText{\r\n        font-size: 25px!important;\r\n    }\r\n}\r\n#pp{   \r\n    transform: translateY(45%);\r\n     height: -webkit-fit-content;\r\n     height: -moz-fit-content;\r\n     height: fit-content;\r\n}\r\n#circle{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-content: center;\r\n    height: 30vh;\r\n    width: 30vh;\r\n    background: #590759;\r\n    color: lightsteelblue;\r\n    border-radius: 50%;\r\n    padding: 2vh;\r\n    box-shadow: 2px 2px 2px 2px lightsteelblue;\r\n    text-align: center;\r\n}\r\n#conu{\r\n    border-top : 4px solid palevioletred;\r\n    border-bottom : 4px solid palevioletred;\r\n    background: #590759;  \r\n}\r\n.card-img{\r\n    height: 40px;\r\n    width: 40px;\r\n    background: #ff4081;;\r\n    border:  #590759 2px solid;\r\n    border-radius: 50%;\r\n}\r\n.card:hover{\r\n    background: rgba(0, 0, 0, 0.04);\r\n}\r\n.card{\r\n    cursor: pointer;\r\n    margin: 10px;\r\n    /* background: white; */\r\n    display: flex;\r\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    position: relative;\r\n    padding: 16px;\r\n    border-radius: 4px;\r\n    box-shadow:0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBQ0E7SUFDSSwwQkFBMEI7S0FDekIsMkJBQW1CO0tBQW5CLHdCQUFtQjtLQUFuQixtQkFBbUI7QUFDeEI7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix5REFBeUQ7SUFDekQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0dBQWtHO0FBQ3RHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTkwNzU5OztcclxufVxyXG4jYmlnVGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KXtcclxuICAgICNiaWdUZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuI3BweyAgIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQ1JSk7XHJcbiAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxufVxyXG5cclxuI2NpcmNsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAzMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzU5MDc1OTtcclxuICAgIGNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBhZGRpbmc6IDJ2aDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCBsaWdodHN0ZWVsYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY29udXtcclxuICAgIGJvcmRlci10b3AgOiA0cHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuICAgIGJvcmRlci1ib3R0b20gOiA0cHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuICAgIGJhY2tncm91bmQ6ICM1OTA3NTk7ICBcclxufVxyXG4uY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZjQwODE7O1xyXG4gICAgYm9yZGVyOiAgIzU5MDc1OSAycHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcbi5jYXJke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgLyogYmFja2dyb3VuZDogd2hpdGU7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6MCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(r) {
        _classCallCheck(this, HomeComponent);

        this.r = r;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "routeTo",
        value: function routeTo(route) {
          this.r.navigateByUrl(route);
        }
      }, {
        key: "gotoPremHis",
        value: function gotoPremHis() {
          this.r.navigateByUrl('premium-history');
        }
      }, {
        key: "gotoPayPremium",
        value: function gotoPayPremium() {
          this.r.navigateByUrl('pay-premium');
        }
      }, {
        key: "gotoUpdateMetrics",
        value: function gotoUpdateMetrics() {
          this.r.navigateByUrl('update-metric');
        }
      }, {
        key: "gotoAgriMetriics",
        value: function gotoAgriMetriics() {
          this.r.navigateByUrl('agric-metrics');
        }
      }, {
        key: "gotoPayAgricPrem",
        value: function gotoPayAgricPrem() {
          this.r.navigateByUrl('payAgricPrem');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card{\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    margin: 20px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUFzQjtJQUF0QiwyQkFBc0I7SUFBdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../reg-log.service */
    "./src/app/reg-log.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(document, fb, s, r) {
        _classCallCheck(this, LoginComponent);

        this.document = document;
        this.fb = fb;
        this.s = s;
        this.r = r;
        this.addressForm = this.fb.group({
          id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "goto",
        value: function goto() {
          this.r.navigateByUrl('/register');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var cred;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.document.getElementById('bk').innerHTML = "Please Wait . . .";
                    this.document.getElementById('bk').disabled = true;
                    this.document.getElementById('ppp').disabled = true;
                    cred = {
                      id: this.addressForm.get('id').value,
                      pwd: this.addressForm.get('pwd').value
                    };
                    _context.next = 6;
                    return this.s.login(cred);

                  case 6:
                    _context.t0 = function (c) {
                      console.info(c); // alert(c.toString().slice(0,15));

                      if (c.toString().slice(0, 15) == 'Unable to Login') {
                        alert(c);
                        _this4.document.getElementById('bk').innerHTML = "login";

                        _this4.document.getElementById('bk').removeAttribute('disabled');

                        _this4.document.getElementById('ppp').removeAttribute('disabled');
                      } else {
                        var d = Object.values(c).pop();

                        _this4.s.maker(d);

                        if (d.fullName.length > 0) {
                          _this4.r.navigateByUrl('/home');
                        }
                      }
                    };

                    _context.sent.subscribe(_context.t0);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_5__["RegLogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], LoginComponent);
    /***/
  },

  /***/
  "./src/app/make-claim-history/make-claim-history.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/make-claim-history/make-claim-history.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMakeClaimHistoryMakeClaimHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ha2UtY2xhaW0taGlzdG9yeS9tYWtlLWNsYWltLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/make-claim-history/make-claim-history.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/make-claim-history/make-claim-history.component.ts ***!
    \********************************************************************/

  /*! exports provided: MakeClaimHistoryComponent */

  /***/
  function srcAppMakeClaimHistoryMakeClaimHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MakeClaimHistoryComponent", function () {
      return MakeClaimHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MakeClaimHistoryComponent =
    /*#__PURE__*/
    function () {
      function MakeClaimHistoryComponent() {
        _classCallCheck(this, MakeClaimHistoryComponent);
      }

      _createClass(MakeClaimHistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MakeClaimHistoryComponent;
    }();

    MakeClaimHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-make-claim-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./make-claim-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/make-claim-history/make-claim-history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./make-claim-history.component.css */
      "./src/app/make-claim-history/make-claim-history.component.css")).default]
    })], MakeClaimHistoryComponent);
    /***/
  },

  /***/
  "./src/app/make-claims/make-claims.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/make-claims/make-claims.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMakeClaimsMakeClaimsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21ha2UtY2xhaW1zL21ha2UtY2xhaW1zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/make-claims/make-claims.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/make-claims/make-claims.component.ts ***!
    \******************************************************/

  /*! exports provided: MakeClaimsComponent */

  /***/
  function srcAppMakeClaimsMakeClaimsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MakeClaimsComponent", function () {
      return MakeClaimsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MakeClaimsComponent =
    /*#__PURE__*/
    function () {
      function MakeClaimsComponent() {
        _classCallCheck(this, MakeClaimsComponent);
      }

      _createClass(MakeClaimsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MakeClaimsComponent;
    }();

    MakeClaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-make-claims',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./make-claims.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/make-claims/make-claims.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./make-claims.component.css */
      "./src/app/make-claims/make-claims.component.css")).default]
    })], MakeClaimsComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.css":
  /*!***************************************!*\
    !*** ./src/app/nav/nav.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\nnav{\r\n    min-height: 2.5em;\r\n    background-color: aquamarine;\r\n    padding: 0 10%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    box-shadow: #ccc -1px 3px 6px 1px;\r\n    position: fixed;\r\n    min-width: 100%;\r\n    top:0;\r\n    z-index:1;\r\n}\r\n.carryLink{\r\n    align-self: center; \r\n}\r\n.link{\r\n    min-height: 100%;\r\n    min-width: 10em;    \r\n    text-align: center;\r\n}\r\na.anchor:hover{\r\n    border-bottom:.5em solid  blueviolet;\r\n}\r\na.anchor{\r\n    text-decoration: none;\r\n}\r\n.active{\r\n    background-color:  blueviolet;\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixlQUFlO0lBQ2YsS0FBSztJQUNMLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubmF2e1xyXG4gICAgbWluLWhlaWdodDogMi41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG4gICAgcGFkZGluZzogMCAxMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJveC1zaGFkb3c6ICNjY2MgLTFweCAzcHggNnB4IDFweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgei1pbmRleDoxO1xyXG59XHJcbi5jYXJyeUxpbmt7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IFxyXG59XHJcbi5saW5re1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTBlbTsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuYS5hbmNob3I6aG92ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tOi41ZW0gc29saWQgIGJsdWV2aW9sZXQ7XHJcbn1cclxuYS5hbmNob3J7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICBibHVldmlvbGV0O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/app/pay-agric-prem/pay-agric-prem.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pay-agric-prem/pay-agric-prem.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPayAgricPremPayAgricPremComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheS1hZ3JpYy1wcmVtL3BheS1hZ3JpYy1wcmVtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pay-agric-prem/pay-agric-prem.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pay-agric-prem/pay-agric-prem.component.ts ***!
    \************************************************************/

  /*! exports provided: PayAgricPremComponent */

  /***/
  function srcAppPayAgricPremPayAgricPremComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayAgricPremComponent", function () {
      return PayAgricPremComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tortuga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tortuga.service */
    "./src/app/tortuga.service.ts");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../reg-log.service */
    "./src/app/reg-log.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var PayAgricPremComponent =
    /*#__PURE__*/
    function () {
      function PayAgricPremComponent(document, s, sR) {
        _classCallCheck(this, PayAgricPremComponent);

        this.document = document;
        this.s = s;
        this.sR = sR;
      }

      _createClass(PayAgricPremComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ref = "".concat(Math.ceil(Math.random() * 10e13));
          this.test();
          this.chkDate();
        }
      }, {
        key: "test",
        value: function test() {
          var _this5 = this;

          this.s.payAgricPrem().subscribe(function (d) {
            _this5.aa = d + "00";
            _this5.a = d;
            console.log(d);
          }, function (e) {
            console.info(e);
          }, function () {});
        }
      }, {
        key: "chkDate",
        value: function chkDate() {
          var _this6 = this;

          this.s.chkMthPaid("Agriculture").subscribe(function (d) {
            if (d == "doNotPay") {
              console.log(d);
              _this6.document.getElementById("informer").innerHTML = 'Your premium for this month has not expried';
              _this6.document.getElementById('paystackButton').disabled = true;
            }
          });
        }
      }, {
        key: "paymentCancel",
        value: function paymentCancel() {
          console.log('payment failed');
        }
      }, {
        key: "paymentDone",
        value: function paymentDone() {
          this.s.saveToDB(this.aa, this.ref, 'Agriculture').subscribe(function (r) {
            console.info(r + " We see you oh");
          });
        }
      }]);

      return PayAgricPremComponent;
    }();

    PayAgricPremComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _tortuga_service__WEBPACK_IMPORTED_MODULE_2__["TortugaService"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"]
      }];
    };

    PayAgricPremComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pay-agric-prem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pay-agric-prem.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-agric-prem/pay-agric-prem.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pay-agric-prem.component.css */
      "./src/app/pay-agric-prem/pay-agric-prem.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], PayAgricPremComponent);
    /***/
  },

  /***/
  "./src/app/pay-premium/pay-premium.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pay-premium/pay-premium.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPayPremiumPayPremiumComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#modal{\r\n    background-color: rgb(43 43 43 / 92%);\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    width: -webkit-fill-available;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXByZW1pdW0vcGF5LXByZW1pdW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBZTtJQUFmLHNCQUFlO0lBQWYsZUFBZTtJQUNmLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvcGF5LXByZW1pdW0vcGF5LXByZW1pdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA0MyA0MyAvIDkyJSk7XHJcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pay-premium/pay-premium.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pay-premium/pay-premium.component.ts ***!
    \******************************************************/

  /*! exports provided: PayPremiumComponent */

  /***/
  function srcAppPayPremiumPayPremiumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PayPremiumComponent", function () {
      return PayPremiumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tortuga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../tortuga.service */
    "./src/app/tortuga.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../reg-log.service */
    "./src/app/reg-log.service.ts");

    var PayPremiumComponent =
    /*#__PURE__*/
    function () {
      function PayPremiumComponent(document, r, s, sR) {
        _classCallCheck(this, PayPremiumComponent);

        this.document = document;
        this.r = r;
        this.s = s;
        this.sR = sR;
      }

      _createClass(PayPremiumComponent, [{
        key: "vrr",
        value: function vrr() {
          return Math.floor(Math.random() * 100000000).toString();
        }
      }, {
        key: "vr",
        value: function vr() {
          this.document.getElementById('ps').setAttribute('ref', this.vrr());
        }
      }, {
        key: "gotoUMT",
        value: function gotoUMT() {
          this.r.navigateByUrl('update-metric');
        }
      }, {
        key: "paymentInit",
        value: function paymentInit() {
          console.log('Payment initialized');
        }
      }, {
        key: "checkUpd",
        value: function checkUpd() {
          var _this7 = this;

          this.s.chkUpd().subscribe(function (w) {
            console.log(w);

            if (w == 'updated') {
              console.log(w + 'modal block');
              _this7.document.getElementById('modal').style.display = 'none';
            }
          });
        }
      }, {
        key: "calcPremium",
        value: function calcPremium() {
          var d = new Date(this.sR.u.DOB);
          var diff = new Date().getFullYear() - d.getFullYear();
          console.log(diff + ": " + this.amt);
          if (diff > 79) this.amt = 2000000;else if (diff > 59 && diff < 80) this.amt = 1800000;else if (diff > 39 && diff < 60) this.amt = 1500000;else if (diff > 19 && diff < 40) this.amt = 1200000;else if (diff > 9 && diff < 20) this.amt = 1000000;else this.amt = 800000;
        }
      }, {
        key: "paymentDone",
        value: function paymentDone(ref) {
          var title = 'Payment for premium successfull';
          this.s.saveToDB(this.amt.toString(), this.ref, 'general').subscribe(function (s) {});
        }
      }, {
        key: "paymentCancel",
        value: function paymentCancel() {
          console.log('payment failed');
        }
      }, {
        key: "chkDate",
        value: function chkDate() {
          var _this8 = this;

          this.s.chkMthPaid("general").subscribe(function (d) {
            if (d == "doNotPay") {
              console.log(d);
              _this8.document.getElementById("informer").innerHTML = 'Your premium for this month has not expried';
              _this8.document.getElementById('paystackButton').disabled = true;
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ref = "".concat(Math.ceil(Math.random() * 10e13));
          this.calcPremium();
          this.checkUpd();
          this.chkDate();
        }
      }]);

      return PayPremiumComponent;
    }();

    PayPremiumComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _tortuga_service__WEBPACK_IMPORTED_MODULE_3__["TortugaService"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_5__["RegLogService"]
      }];
    };

    PayPremiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pay-premium',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pay-premium.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-premium/pay-premium.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pay-premium.component.css */
      "./src/app/pay-premium/pay-premium.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], PayPremiumComponent);
    /***/
  },

  /***/
  "./src/app/portal/portal.component.css":
  /*!*********************************************!*\
    !*** ./src/app/portal/portal.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPortalPortalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/portal/portal.component.ts":
  /*!********************************************!*\
    !*** ./src/app/portal/portal.component.ts ***!
    \********************************************/

  /*! exports provided: PortalComponent */

  /***/
  function srcAppPortalPortalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortalComponent", function () {
      return PortalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PortalComponent =
    /*#__PURE__*/
    function () {
      function PortalComponent() {
        _classCallCheck(this, PortalComponent);
      }

      _createClass(PortalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortalComponent;
    }();

    PortalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-portal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./portal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/portal/portal.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./portal.component.css */
      "./src/app/portal/portal.component.css")).default]
    })], PortalComponent);
    /***/
  },

  /***/
  "./src/app/premium-history/premium-history.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/premium-history/premium-history.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPremiumHistoryPremiumHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media screen and (max-width:600px){\r\n    section{\r\n     padding: 2px 10px!important;\r\n    }\r\n}\r\nsection{\r\n    padding: 2px 51px;\r\n}\r\n.d{\r\n    position: absolute;\r\n    right: 5%;\r\n}\r\n.s{\r\n    margin: 0 15px;\r\n}\r\ndetails::before,details::after, summary::before, summary::after{\r\n    content: none;\r\n    padding: 0%;\r\n    height: 0;\r\n    width: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlbWl1bS1oaXN0b3J5L3ByZW1pdW0taGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7S0FDQywyQkFBMkI7SUFDNUI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcmVtaXVtLWhpc3RvcnkvcHJlbWl1bS1oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIHNlY3Rpb257XHJcbiAgICAgcGFkZGluZzogMnB4IDEwcHghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbnNlY3Rpb257XHJcbiAgICBwYWRkaW5nOiAycHggNTFweDtcclxufVxyXG4uZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxufVxyXG4uc3tcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG59XHJcbmRldGFpbHM6OmJlZm9yZSxkZXRhaWxzOjphZnRlciwgc3VtbWFyeTo6YmVmb3JlLCBzdW1tYXJ5OjphZnRlcntcclxuICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/premium-history/premium-history.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/premium-history/premium-history.component.ts ***!
    \**************************************************************/

  /*! exports provided: PremiumHistoryComponent */

  /***/
  function srcAppPremiumHistoryPremiumHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PremiumHistoryComponent", function () {
      return PremiumHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tortuga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tortuga.service */
    "./src/app/tortuga.service.ts");

    var PremiumHistoryComponent =
    /*#__PURE__*/
    function () {
      function PremiumHistoryComponent(s) {
        _classCallCheck(this, PremiumHistoryComponent);

        this.s = s;
      }

      _createClass(PremiumHistoryComponent, [{
        key: "rtrPrem",
        value: function rtrPrem() {
          var _this9 = this;

          this.s.retrivePmts().subscribe(function (s) {
            _this9.j = s;
            console.info(_this9.j);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.rtrPrem();
        }
      }]);

      return PremiumHistoryComponent;
    }();

    PremiumHistoryComponent.ctorParameters = function () {
      return [{
        type: _tortuga_service__WEBPACK_IMPORTED_MODULE_2__["TortugaService"]
      }];
    };

    PremiumHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-premium-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./premium-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/premium-history/premium-history.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./premium-history.component.css */
      "./src/app/premium-history/premium-history.component.css")).default]
    })], PremiumHistoryComponent);
    /***/
  },

  /***/
  "./src/app/reg-log.service.ts":
  /*!************************************!*\
    !*** ./src/app/reg-log.service.ts ***!
    \************************************/

  /*! exports provided: RegLogService */

  /***/
  function srcAppRegLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegLogService", function () {
      return RegLogService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegLogService =
    /*#__PURE__*/
    function () {
      // server = 'http://localhost:3000/';
      function RegLogService(Http, r) {
        _classCallCheck(this, RegLogService);

        this.Http = Http;
        this.r = r; // public uq;

        this.server = 'https://insurebeta.herokuapp.com/';
      }

      _createClass(RegLogService, [{
        key: "createHP",
        value: function createHP(userr) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'applicatiion/json');
          return this.Http.post(this.server + 'registerHP', userr, {
            headers: headers
          });
        }
      }, {
        key: "createClient",
        value: function createClient(userr) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'applicatiion/json');
          return this.Http.post(this.server + 'registerClient', userr, {
            headers: headers
          });
        }
      }, {
        key: "createAgent",
        value: function createAgent(userr) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'applicatiion/json');
          return this.Http.post(this.server + 'registerAgent', userr, {
            headers: headers
          });
        }
      }, {
        key: "login",
        value: function login(cred) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var headers;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                    headers.append('Content-Type', 'applicatiion/json');
                    return _context2.abrupt("return", this.Http.post(this.server + 'reg', cred, {
                      headers: headers
                    }));

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "maker",
        value: function maker(s) {
          this.u = s;
          console.log(this.u);
          console.log(s);
        }
      }]);

      return RegLogService;
    }();

    RegLogService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegLogService);
    /***/
  },

  /***/
  "./src/app/register/register.component.css":
  /*!*************************************************!*\
    !*** ./src/app/register/register.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".full-width {\n  width: 100%;\n}\n\n.shipping-card {\n  min-width: 120px;\n  margin: 20px auto;\n}\n\n.mat-radio-button {\n  display: block;\n  margin: 5px 0;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n\nform{\n  padding: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaGlwcGluZy1jYXJkIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5mb3Jte1xuICBwYWRkaW5nOiAxMnB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../reg-log.service */
    "./src/app/reg-log.service.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(fb, s, r) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.s = s;
        this.r = r;
        this.addressForm = this.fb.group({
          company: null,
          firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          contact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          pwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)],
          conpwd: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          typ: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          DOB: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          postalCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(5)],
          shipping: ['free', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.hasUnitNumber = false;
        this.states = [{
          name: 'Alabama',
          abbreviation: 'AL'
        }, {
          name: 'Alaska',
          abbreviation: 'AK'
        }, {
          name: 'American Samoa',
          abbreviation: 'AS'
        }, {
          name: 'Arizona',
          abbreviation: 'AZ'
        }, {
          name: 'Arkansas',
          abbreviation: 'AR'
        }, {
          name: 'California',
          abbreviation: 'CA'
        }, {
          name: 'Colorado',
          abbreviation: 'CO'
        }, {
          name: 'Connecticut',
          abbreviation: 'CT'
        }, {
          name: 'Delaware',
          abbreviation: 'DE'
        }, {
          name: 'District Of Columbia',
          abbreviation: 'DC'
        }, {
          name: 'Federated States Of Micronesia',
          abbreviation: 'FM'
        }, {
          name: 'Florida',
          abbreviation: 'FL'
        }, {
          name: 'Georgia',
          abbreviation: 'GA'
        }, {
          name: 'Guam',
          abbreviation: 'GU'
        }, {
          name: 'Hawaii',
          abbreviation: 'HI'
        }, {
          name: 'Idaho',
          abbreviation: 'ID'
        }, {
          name: 'Illinois',
          abbreviation: 'IL'
        }, {
          name: 'Indiana',
          abbreviation: 'IN'
        }, {
          name: 'Iowa',
          abbreviation: 'IA'
        }, {
          name: 'Kansas',
          abbreviation: 'KS'
        }, {
          name: 'Kentucky',
          abbreviation: 'KY'
        }, {
          name: 'Louisiana',
          abbreviation: 'LA'
        }, {
          name: 'Maine',
          abbreviation: 'ME'
        }, {
          name: 'Marshall Islands',
          abbreviation: 'MH'
        }, {
          name: 'Maryland',
          abbreviation: 'MD'
        }, {
          name: 'Massachusetts',
          abbreviation: 'MA'
        }, {
          name: 'Michigan',
          abbreviation: 'MI'
        }, {
          name: 'Minnesota',
          abbreviation: 'MN'
        }, {
          name: 'Mississippi',
          abbreviation: 'MS'
        }, {
          name: 'Missouri',
          abbreviation: 'MO'
        }, {
          name: 'Montana',
          abbreviation: 'MT'
        }, {
          name: 'Nebraska',
          abbreviation: 'NE'
        }, {
          name: 'Nevada',
          abbreviation: 'NV'
        }, {
          name: 'New Hampshire',
          abbreviation: 'NH'
        }, {
          name: 'New Jersey',
          abbreviation: 'NJ'
        }, {
          name: 'New Mexico',
          abbreviation: 'NM'
        }, {
          name: 'New York',
          abbreviation: 'NY'
        }, {
          name: 'North Carolina',
          abbreviation: 'NC'
        }, {
          name: 'North Dakota',
          abbreviation: 'ND'
        }, {
          name: 'Northern Mariana Islands',
          abbreviation: 'MP'
        }, {
          name: 'Ohio',
          abbreviation: 'OH'
        }, {
          name: 'Oklahoma',
          abbreviation: 'OK'
        }, {
          name: 'Oregon',
          abbreviation: 'OR'
        }, {
          name: 'Palau',
          abbreviation: 'PW'
        }, {
          name: 'Pennsylvania',
          abbreviation: 'PA'
        }, {
          name: 'Puerto Rico',
          abbreviation: 'PR'
        }, {
          name: 'Rhode Island',
          abbreviation: 'RI'
        }, {
          name: 'South Carolina',
          abbreviation: 'SC'
        }, {
          name: 'South Dakota',
          abbreviation: 'SD'
        }, {
          name: 'Tennessee',
          abbreviation: 'TN'
        }, {
          name: 'Texas',
          abbreviation: 'TX'
        }, {
          name: 'Utah',
          abbreviation: 'UT'
        }, {
          name: 'Vermont',
          abbreviation: 'VT'
        }, {
          name: 'Virgin Islands',
          abbreviation: 'VI'
        }, {
          name: 'Virginia',
          abbreviation: 'VA'
        }, {
          name: 'Washington',
          abbreviation: 'WA'
        }, {
          name: 'West Virginia',
          abbreviation: 'WV'
        }, {
          name: 'Wisconsin',
          abbreviation: 'WI'
        }, {
          name: 'Wyoming',
          abbreviation: 'WY'
        }];
      }

      _createClass(RegisterComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          var e = this.addressForm.get('pwd').value;
          var y = this.addressForm.get('conpwd').value;
          var form = {
            fullname: this.addressForm.get('firstName').value + " " + this.addressForm.get('lastName').value,
            address: this.addressForm.get('address').value,
            contact: this.addressForm.get('contact').value,
            email: this.addressForm.get('email').value,
            company: this.addressForm.get('company').value,
            pwd: this.addressForm.get('pwd').value,
            DOB: this.addressForm.get('DOB').value
          }; // console.log(this.addressForm.value)

          if (this.addressForm.get('typ').value == 'agent') {
            this.s.createAgent(form).subscribe(function (de) {
              alert(de + '\n Keep It Safe');

              _this10.r.navigateByUrl('login');
            }, function (error) {
              console.error(error);
              alert(error);
            });
          } else if (this.addressForm.get('typ').value == 'healthPraticioner') {
            this.s.createHP(form).subscribe(function (de) {
              alert(de + '\n Keep It Safe');

              _this10.r.navigateByUrl('login');
            }, function (error) {
              console.error(error);
              alert(error);
            });
          } else if (this.addressForm.get('typ').value == 'client') {
            this.s.createClient(form).subscribe(function (de) {
              alert(de + '\n Keep It Safe');

              _this10.r.navigateByUrl('login');
            }, function (error) {
              console.error(error);
              alert(error);
            });
          } else {
            alert('complete the form');
          } // alert('Thanks!');

        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/tortuga.service.ts":
  /*!************************************!*\
    !*** ./src/app/tortuga.service.ts ***!
    \************************************/

  /*! exports provided: TortugaService */

  /***/
  function srcAppTortugaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TortugaService", function () {
      return TortugaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reg-log.service */
    "./src/app/reg-log.service.ts");

    var TortugaService =
    /*#__PURE__*/
    function () {
      // server = 'http://localhost:3000/';
      function TortugaService(Http, sR) {
        _classCallCheck(this, TortugaService);

        this.Http = Http;
        this.sR = sR;
        this.server = 'https://insurebeta.herokuapp.com/';
      }

      _createClass(TortugaService, [{
        key: "chkUpd",
        value: function chkUpd() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.post(this.server + 'chkUpdMet', {
            id: this.sR.u.id
          }, {
            headers: headers
          });
        }
      }, {
        key: "upd",
        value: function upd() {
          console.log(this.sR.u.id);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.post(this.server + 'updateMetrics', {
            id: this.sR.u.id
          }, {
            headers: headers
          });
        }
      }, {
        key: "saveToDB",
        value: function saveToDB(a, c, tag) {
          console.info('sent . . .');
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.post(this.server + 'savePremPMT', {
            amount: a,
            tag: tag,
            phone: this.sR.u.contact,
            email: this.sR.u.email,
            uid: this.sR.u.id,
            refNo: c,
            status: true
          }, {
            headers: headers
          });
        }
      }, {
        key: "retrivePmts",
        value: function retrivePmts() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          return this.Http.post(this.server + 'retrievePmts', {
            id: this.sR.u.id
          }, {
            headers: headers
          });
        }
      }, {
        key: "chkMthPaid",
        value: function chkMthPaid(category) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.get(this.server + 'chkLstPaid/' + this.sR.u.id + "/" + category, {
            headers: headers
          });
        }
      }, {
        key: "agriMetrics",
        value: function agriMetrics(f) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.post(this.server + 'addMachine', {
            uid: this.sR.u.id,
            f: f
          }, {
            headers: headers
          });
        }
      }, {
        key: "deleteMachine",
        value: function deleteMachine(d) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.get(this.server + 'deleteMachine/' + d, {
            headers: headers
          });
        }
      }, {
        key: "retrieveMachines",
        value: function retrieveMachines() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.get(this.server + 'retrieveMachines/' + this.sR.u.id, {
            headers: headers
          });
        }
      }, {
        key: "payAgricPrem",
        value: function payAgricPrem() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.Http.post(this.server + 'payAgriPrem', {
            id: this.sR.u.id
          }, {
            headers: headers
          });
        }
      }]);

      return TortugaService;
    }();

    TortugaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_3__["RegLogService"]
      }];
    };

    TortugaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TortugaService);
    /***/
  },

  /***/
  "./src/app/update-metrics/update-metrics.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/update-metrics/update-metrics.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateMetricsUpdateMetricsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#modal{\r\n    background-color: rgb(43 43 43 / 92%);\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    width: -webkit-fill-available;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 0;\r\n    padding: 0 40px;\r\n}\r\n#ty{\r\n    float: right;\r\n    padding: 12px;\r\n}\r\nh3{\r\n    color: red;\r\n    -webkit-margin-before: 0;\r\n            margin-block-start: 0;\r\n    -webkit-margin-after: 0;\r\n            margin-block-end: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLW1ldHJpY3MvdXBkYXRlLW1ldHJpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBZTtJQUFmLHNCQUFlO0lBQWYsZUFBZTtJQUNmLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysd0JBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQix1QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLW1ldHJpY3MvdXBkYXRlLW1ldHJpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtb2RhbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MyA0MyA0MyAvIDkyJSk7XHJcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxufVxyXG4jdHl7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/update-metrics/update-metrics.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/update-metrics/update-metrics.component.ts ***!
    \************************************************************/

  /*! exports provided: UpdateMetricsComponent */

  /***/
  function srcAppUpdateMetricsUpdateMetricsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateMetricsComponent", function () {
      return UpdateMetricsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tortuga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../tortuga.service */
    "./src/app/tortuga.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _reg_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../reg-log.service */
    "./src/app/reg-log.service.ts");

    var UpdateMetricsComponent =
    /*#__PURE__*/
    function () {
      function UpdateMetricsComponent(document, s, sR) {
        _classCallCheck(this, UpdateMetricsComponent);

        this.document = document;
        this.s = s;
        this.sR = sR;
      }

      _createClass(UpdateMetricsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkUpd();
        }
      }, {
        key: "checkUpd",
        value: function checkUpd() {
          var _this11 = this;

          this.s.chkUpd().subscribe(function (w) {
            console.log(w);

            if (w == 'updated') {
              _this11.document.getElementById('upd').disabled = true;
              _this11.document.getElementById('upd').innerHTML = "Updated";
              _this11.document.getElementById('upd').style.background = 'green';
            }
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          this.document.getElementById('modal').style.display = 'none';
        }
      }, {
        key: "update",
        value: function update() {
          var _this12 = this;

          this.s.upd().subscribe(function (w) {
            console.info(w);

            _this12.checkUpd();
          });
        }
      }]);

      return UpdateMetricsComponent;
    }();

    UpdateMetricsComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }, {
        type: _tortuga_service__WEBPACK_IMPORTED_MODULE_2__["TortugaService"]
      }, {
        type: _reg_log_service__WEBPACK_IMPORTED_MODULE_4__["RegLogService"]
      }];
    };

    UpdateMetricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-metrics',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-metrics.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-metrics/update-metrics.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-metrics.component.css */
      "./src/app/update-metrics/update-metrics.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))], UpdateMetricsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angular\InsureBetai\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map