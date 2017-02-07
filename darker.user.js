// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.1
// @description  change of volafile experience
// @author       Your mom
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @resource style https://rawgit.com/Szero/darker-side-of-vola/ac4d6d97d45793d1a6adc3ff1518215fa6b705f6/as%20dark%20as%20my%20soul.css
// @match        https://*.volafile.io/r/*
// @run-at       document-idle
// ==/UserScript==

(function() {
    var UI = document.getElementById("show_search_ui");
    var topBar = document.getElementById("header_row1");
    var bottomBar = document.getElementById("header_row2");
    var holdUI = bottomBar.removeChild(UI);
    topBar.appendChild(holdUI);
    GM_addStyle(GM_getResourceText("style"));
})();
