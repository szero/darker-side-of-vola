// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.1
// @description  change of volafile experience
// @author       Your mom
// @match        https://*.volafile.io/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    "use strict";
    let UI = document.getElementById("show_search_ui");
    let topBar = document.getElementById("header_row1");
    let bottomBar = document.getElementById("header_row2");
    let holdUI = bottomBar.removeChild(UI);
    topBar.appendChild(holdUI);
    //GM will do this: http://unixpapa.com/js/dyna.html
    let style = document.getElementsByTagName("style")[0];
    let parentTag = style.parentNode;
    let newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.href = "https://rawgit.com/Szero/darker-side-of-vola/master/as%20dark%20as%20my%20soul.css";
    parentTag.insertBefore(newLink,style.nextSibling);
}) ();
