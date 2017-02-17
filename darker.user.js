// ==UserScript==
// @name         Darker Side of Volafile
// @namespace    i have none
// @version      0.4
// @description  change of volafile experience
// @author       Your mom
// @match        https://volafile.io/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    "use strict";
    try {
    var UI,header,frame,bottomBar;
    function bigRes() {
        UI = document.getElementById("show_search_ui");
        let roomSh = document.getElementById("room_search");
        let topBar = document.getElementById("header_row1");
        bottomBar = document.getElementById("header_row2");
        let uploadBt = document.getElementById("upload_container");
        topBar.appendChild(bottomBar.removeChild(UI));
        if (screen.width > 1650) {
            let filters = document.getElementById("room_filters");
            topBar.appendChild(bottomBar.removeChild(filters));
        }
        topBar.appendChild(bottomBar.removeChild(roomSh));
        topBar.appendChild(bottomBar.removeChild(uploadBt));
        header = document.getElementById("header");
        frame = document.getElementById("files_frame");
        bottomBar.style.display = "none";
        header.style.height = "1.5em";
        frame.style.top = "1.8em";
    }
    if (screen.width < 1650) {
        bigRes();
        function close() {
           frame.style.top = "1.8em";
            header.style.height = "1.5em";
            bottomBar.style.display = "none";
        }
        function filter() {
            bottomBar.style.display = "block";
            frame.style.top = "3.5em";
            header.style.height = "3.5em";
        }
        let clear = document.getElementById("clearsearch");
        clear.addEventListener("click", close);
        UI.addEventListener("click", filter);
    } else {
        bigRes();
    }
    } catch (err) { console.log("this is just for pages other than vola rooms") }
    //GM will do this: http://unixpapa.com/js/dyna.html
    let newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.href = "https://rawgit.com/Szero/darker-side-of-vola/master/as%20dark%20as%20my%20soul.css";
    let head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(newLink);
}) ();
