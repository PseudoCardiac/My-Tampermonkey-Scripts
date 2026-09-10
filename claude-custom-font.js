// ==UserScript==
// @name         Cluade Custom Font
// @namespace    https://github.com/PseudoCardiac
// @version      2026-09-10
// @description  adds a custom font to Claude
// @author       42@PseudoCardiac
// @match        https://claude.ai/*
// ==/UserScript==

const AGENT_FONT = "Orbit Regular";
const USER_FONT = "Orbit Regular";
const CODE_FONT = "Iosevka";

setTimeout( () => {
    document.documentElement.style.setProperty( '--font-claude-response', AGENT_FONT );
    document.documentElement.style.setProperty( '--font-mono', CODE_FONT );
}, 1000 );

const style = document.createElement('style');

style.textContent = `
  .font-sans {
     font-family: ${ USER_FONT }
  }

  code {
     font-family: ${ CODE_FONT }
  }
`;

document.head.appendChild( style );
