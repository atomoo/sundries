// ==UserScript==
// @name         back to top
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Atom
// @match        https://v2ex.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.position = 'fixed';
    div.style.bottom = '50px';
    div.style.right = '50px';
    div.style.boxSizing = 'border-box';
    div.style.padding = '12.5px';
    div.style.backgroundColor = '#FFF';
    div.style.boxShadow = '0px 0px 5px 2px #CCC';
    div.style.borderRadius = '5px';
    div.style.cursor = 'pointer';
    div.addEventListener('click', function() {
        window.scrollTo(0, 0);
    });
    const triangle = document.createElement('div');
    triangle.style.width = '0';
    triangle.style.height = '0';
    triangle.style.borderColor = 'transparent';
    triangle.style.borderStyle = 'solid';
    triangle.style.borderWidth = '0 12.5px 21.7px';
    triangle.style.borderBottomColor = '#CCC';
    div.appendChild(triangle);
    document.documentElement.appendChild(div);
})();