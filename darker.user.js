// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.1
// @description  change of volafile experience
// @author       Your mom
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @resource style https://rawgit.com/Szero/darker-side-of-vola/master/as%20dark%20as%20my%20soul.css
// @resource font https://rawgit.com/Szero/darker-side-of-vola/master/fonts/TerminusTTF-4.40.1.ttf
// @resource bitfont https://rawgit.com/Szero/darker-side-of-vola/master/fonts/8-bit%20pusab.ttf
// @match        https://*.volafile.io/*
// @run-at       document-idle
// ==/UserScript==

(function() {
    var UI = document.getElementById("show_search_ui");
    var topBar = document.getElementById("header_row1");
    var bottomBar = document.getElementById("header_row2");
    var holdUI = bottomBar.removeChild(UI);
    topBar.appendChild(holdUI);
    var font = "8-bit pusab";
    GM_addStyle(
        "@fontface {" +
            "font-family: \""+ font +"\" !important;" +
            "src: local( \"" + font + "\") ," +
                  GM_getResourceURL("font") + ";" +
        "}" +
        "html, body {" +
            "font-family: \"" + font + "\" !important; " +
        "}"
    );
    GM_addStyle(GM_getResourceText("style"));
})();
