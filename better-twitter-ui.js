// ==UserScript==
// @name         Better Twitter UI
// @namespace    https://github.com/PseudoCardiac
// @version      2026-09-11
// @description  tweaks twitter's various UI
// @author       42@PseudoCardiac
// @match        https://x.com/*
// ==/UserScript==

const style = document.createElement('style');

style.textContent = `
    [data-testid="AppTabBar_Home_Link"] {
        display: none
    }
    [data-testid="AppTabBar_Explore_Link"] {
        display: none
    }
    [href="/i/grok"] {
        display: none
    }
    [href="/i/jf/creators/studio"] {
        display: none
    }
    [data-testid="premium-signup-tab"] {
        display: none
    }
    [data-testid="AppTabBar_Profile_Link"] {
        display: none
    }
    [data-testid="SideNav_NewTweet_Button"] {
        display: none
    }
    [data-testid="chat-drawer-main"] {
        display: none
    }
    [data-testid="GrokDrawerHeader"] {
        display: none
    }
    .css-g5y9jx.r-1kqtdi0.r-1867qdf.r-1phboty.r-le4sbl.r-1udh08x.r-1niwhzg.r-1yadl64 {
        display: none   /* 오른쪽 사이드바 맨 밑 자잘한 글씨 숨기기 */
    }
    .css-g5y9jx.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-le4sbl.r-1udh08x {
        display: none   /* 오른쪽 사이드바 숨기기 */
    }
`;

document.head.appendChild( style );