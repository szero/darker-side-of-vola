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
// @match        https://*.volafile.io/*
// @run-at       document-idle
// ==/UserScript==
//(function () {
//window.setTimeout(function() {
  var UI = document.getElementById("show_search_ui");
    var topBar = document.getElementById("header_row1");
    var bottomBar = document.getElementById("header_row2");
    var holdUI = bottomBar.removeChild(UI);
    topBar.appendChild(holdUI);
    //GM will do this: http://unixpapa.com/js/dyna.html
    var font = "Terminus (TTF)"
    //var fontURL = "url(\"https://rawgit.com/Szero/darker-side-of-vola/master/fonts/TerminusTTF-4.40.1.ttf\")";
    //var fontURL = GM_getResourceURL("font") ;
    var fontURL = "https://rawgit.com/Szero/darker-side-of-vola/master/fonts/TerminusTTF-4.40.1.ttf";
    var cssURL = "https://cdn.rawgit.com/Szero/darker-side-of-vola/9a1103703f8cc3ae6f94ee121f71c990a99c5d1c/as%20dark%20as%20my%20soul.css";
    //console.log(fontURL)
    var css =
   /* "@font-face {" +
    "font-family: \"" + font + "\" !important;" +
    "src: " + fontURL + ";" +
    "}" +
    "* {" +
    "font-family:\"" + font + "\"!important;" +
    "}" + */ GM_getResourceText("style") ;
    //var head = document.head || document.getElementsByTagName("head") [0];
    var style = document.getElementsByTagName("style")[0];
    var parentTag = style.parentNode;
    //html = document.getElementsByTagName("html")[0];
    newLink = document.createElement("link");
    newLink.rel = "stylesheet";
    newLink.type = "text/css";
    newLink.href = cssURL;
    newStyle = document.createElement("style");
    newStyle.type = "text/css";
    //if (style.styleSheet) {
      //  style.styleSheet.cssText = css;
    //} else {
    newStyle.appendChild(document.createTextNode(css));
    //}
    parentTag.insertBefore(newLink,style.nextSibling);
    //parentTag.insertBefore(newStyle,style.nextSibling);
    //html.appendChild(style);
    /*
    GM_addStyle(
     "@font-face {" +
    "font-family: "" + font + "" !important;" +
    "src: " + fontURL + ";" +
    "}" +
    "* {" +
    "font-family:"" + font + "" !important;" +
    "}"
    );
    GM_addStyle(GM_getResourceText("style")); */
//                  }, 2000);

//}) ();
