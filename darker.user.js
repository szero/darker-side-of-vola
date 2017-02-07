// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.1
// @description  change of volafile experience
// @author       Your mom
// @match        https://*.volafile.io/r/*
// @run-at       document-start
// ==/UserScript==

(function() {
    console.log("i shiggy diggy");
        var UI = document.getElementById("show_search_ui");
        var topBar = document.getElementById("header_row1");
        var bottomBar = document.getElementById("header_row2");
        var holdUI = bottomBar.removeChild(UI);
        topBar.appendChild(holdUI);
})();
