if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const u=s=>i(s,l),o={module:{uri:l},exports:t,require:u};e[l]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/css-shim-8775d9ad-556f0cc2-5afc7d29.js",revision:null},{url:"assets/focus-visible-56d4fbba.js",revision:null},{url:"assets/hardware-back-button-77fd2980.js",revision:null},{url:"assets/index-204b983d.css",revision:null},{url:"assets/index-91431273.js",revision:null},{url:"assets/index8-15d107a8.js",revision:null},{url:"assets/index9-b5be80bd.js",revision:null},{url:"assets/input-shims-6e319001.js",revision:null},{url:"assets/ios.transition-12a7b852.js",revision:null},{url:"assets/keyboard-78b51126.js",revision:null},{url:"assets/md.transition-2ee0cca7.js",revision:null},{url:"assets/shadow-css-d7d058ec-d59cb009-e3ca5375.js",revision:null},{url:"assets/status-tap-58b20548.js",revision:null},{url:"assets/swipe-back-b637cc07.js",revision:null},{url:"index.html",revision:"57f5bb6a599880101accd5b029ec15ea"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"4acf00101dc7a7631f6167ac1c6a7c76"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
