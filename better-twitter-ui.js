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
    [data-testid="AppTabBar_Follow_Link"] {
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
    [data-testid="AppTabBar_More_Menu"] {
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

setTimeout( () => {
    document.querySelector("nav").insertAdjacentHTML("beforeend",　`
        <a
            href="/settings/account"
            aria-label="settings"
            role="link"
            class="css-g5y9jx r-6koalj r-eqz5dr r-16y2uox r-1habvwh r-cnw61z r-13qz1uu r-1ny4l3l r-1loqt21"
            data-testid="AppTabBar_Settings">
                <div class="css-g5y9jx r-sdzlij r-dnmrzs r-1awozwy r-18u37iz r-1777fci r-kq9wsh r-o7ynqc r-6416eg">
                    <div class="css-g5y9jx">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e">
                            <g>
                                <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z"></path>
                            </g>
                        </svg>
                    </div>
                    <div dir="ltr" class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1ttztb7 r-qvutc0 r-1tl8opc r-evnaw r-eaezby r-16dba41 r-1wbh5a2 r-1fqalh9 r-19o66xi r-bcqeeo"
                        style="color: rgb(231, 233, 234);">
                            <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc">설정</span>
                            <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc"> </span>
                    <span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-1tl8opc"></span>
                </div>
            </div>
        </a>
    `);
}, 1000 );
