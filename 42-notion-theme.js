// ==UserScript==
// @name         42's Notion Theme
// @namespace    https://github.com/PseudoCardiac
// @version      2026-06-09
// @description  42's Notion Theme
// @author       42@PseudoCardiac
// @match        https://app.notion.com/*
// ==/UserScript==

const style = document.createElement("style");

style.textContent = `
.notion-dark-theme {
    --c-bluBacSec: #579cbb;
    --c-broBacSec: #849db3;
    --c-greBacSec: #91bd6e;
    --c-oraBacSec: #f0a554;
    --c-pinBacSec: #e5a3c3;
    --c-purBacSec: #ac93be;
    --c-redBacSec: #e16668;
    --c-teaBacSec: #79c1a9;
    --c-yelBacSec: #efc500;

    --c-texSec: #6f6f6f;
`;

document.head.appendChild(style);