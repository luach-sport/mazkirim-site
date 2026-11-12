import{x as l,y as f,z as u,A as n,B as d,C as m,D as b,F as g,H as h}from"./index.esm2017-D1AIFHA2.js";var y="firebase",I="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */l(y,I,"app");const i={apiKey:"AIzaSyCLGbxYwx9vZB8WjFxSQvUoeddpDSXSnls",authDomain:"mazkirim.firebaseapp.com",projectId:"mazkirim",storageBucket:"mazkirim.firebasestorage.app",messagingSenderId:"730733764982",appId:"1:730733764982:web:bffebaa4920b392c099a57"},D="730733764982-3ceqqokkr9qja9ttk739e60s60jp1vt8.apps.googleusercontent.com",r=f(i),c=u(r);g(c,h).catch(()=>{});function k(s=2500){return typeof indexedDB>"u"?Promise.resolve(!1):new Promise(p=>{let o=!1;const a=e=>{o||(o=!0,p(e))};try{const e=indexedDB.open("firestore/[DEFAULT]/"+i.projectId+"/main");e.onupgradeneeded=()=>{try{e.transaction.abort()}catch{}},e.onsuccess=()=>{try{e.result.close()}catch{}a(!0)},e.onerror=()=>a(!0),e.onblocked=()=>a(!1)}catch{a(!1)}setTimeout(()=>a(!1),s)})}let t=null;const v=k().then(s=>{try{t=n(r,{localCache:s?d({tabManager:m()}):b()})}catch{t=n(r,{})}return t}),S=Object.freeze(Object.defineProperty({__proto__:null,app:r,auth:c,get fs(){return t},fsReady:v},Symbol.toStringTag,{value:"Module"}));export{D as G,c as a,v as b,S as c,t as f};
