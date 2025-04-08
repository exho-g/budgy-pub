try{self["workbox:core:7.2.0"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:7.2.0"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}setCatchHandler(e){this.catchHandler=s(e)}}class i extends n{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class r{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:i,route:r}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:s});let a=r&&r.handler;const c=e.method;if(!a&&this.i.has(c)&&(a=this.i.get(c)),!a)return;let o;try{o=a.handle({url:s,request:e,event:t,params:i})}catch(e){o=Promise.reject(e)}const h=r&&r.catchHandler;return o instanceof Promise&&(this.o||h)&&(o=o.catch((async n=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:i})}catch(e){e instanceof Error&&(n=e)}if(this.o)return this.o.handle({url:s,request:e,event:t});throw n}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:n}){const i=this.t.get(s.method)||[];for(const r of i){let i;const a=r.match({url:e,sameOrigin:t,request:s,event:n});if(a)return i=a,(Array.isArray(i)&&0===i.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(i=void 0),{route:r,params:i}}return{}}setDefaultHandler(e,t="GET"){this.i.set(t,s(e))}setCatchHandler(e){this.o=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let a;const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[c.prefix,e,c.suffix].filter((e=>e&&e.length>0)).join("-"),h=e=>e||o(c.precache),f=e=>e||o(c.runtime);function u(e,t){const s=t();return e.waitUntil(s),s}try{self["workbox:precaching:7.2.0"]&&_()}catch(e){}function l(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class d{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class w{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this.h.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this.h=e}}let b;async function p(e,s){let n=null;if(e.url){n=new URL(e.url).origin}if(n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const i=e.clone(),r={headers:new Headers(i.headers),status:i.status,statusText:i.statusText},a=s?s(r):r,c=function(){if(void 0===b){const e=new Response("");if("body"in e)try{new Response(e.body),b=!0}catch(e){b=!1}b=!1}return b}()?i.body:await i.blob();return new Response(c,a)}function v(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class y{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;try{self["workbox:strategies:7.2.0"]&&_()}catch(e){}function R(e){return"string"==typeof e?new Request(e):e}class m{constructor(e,t){this.u={},Object.assign(this,t),this.event=t.event,this.l=e,this.p=new y,this.v=[],this.R=[...e.plugins],this.m=new Map;for(const e of this.R)this.m.set(e,{});this.event.waitUntil(this.p.promise)}async fetch(e){const{event:s}=this;let n=R(e);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const i=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const r=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this.l.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=R(e);let s;const{cacheName:n,matchOptions:i}=this.l,r=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},i),{cacheName:n});s=await caches.match(r,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:n,matchOptions:i,cachedResponse:s,request:r,event:this.event})||void 0;return s}async cachePut(e,s){const n=R(e);var i;await(i=0,new Promise((e=>setTimeout(e,i))));const r=await this.getCacheKey(n,"write");if(!s)throw new t("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const c=await this.q(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this.l,f=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(e,t,s,n){const i=v(t.url,s);if(t.url===i)return e.match(t,n);const r=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await e.keys(t,r);for(const t of a)if(i===v(t.url,s))return e.match(t,n)}(f,r.clone(),["__WB_REVISION__"],h):null;try{await f.put(r,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:l,newResponse:c.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this.u[s]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=R(await e({mode:t,request:n,event:this.event,params:this.params}));this.u[s]=n}return this.u[s]}hasCallback(e){for(const t of this.l.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this.l.plugins)if("function"==typeof t[e]){const s=this.m.get(t),n=n=>{const i=Object.assign(Object.assign({},n),{state:s});return t[e](i)};yield n}}waitUntil(e){return this.v.push(e),e}async doneWaiting(){let e;for(;e=this.v.shift();)await e}destroy(){this.p.resolve(null)}async q(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class q{constructor(e={}){this.cacheName=f(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,i=new m(this,{event:t,request:s,params:n}),r=this.U(i,s,t);return[r,this.j(r,i,s,t)]}async U(e,s,n){let i;await e.runCallbacks("handlerWillStart",{event:n,request:s});try{if(i=await this.L(s,e),!i||"error"===i.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:t,event:n,request:s}),i)break;if(!i)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))i=await t({event:n,request:s,response:i});return i}async j(e,t,s,n){let i,r;try{i=await e}catch(r){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:s,response:i}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:s,response:i,error:r}),t.destroy(),r)throw r}}class U extends q{constructor(e={}){e.cacheName=h(e.cacheName),super(e),this.C=!1!==e.fallbackToNetwork,this.plugins.push(U.copyRedirectedCacheableResponsesPlugin)}async L(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._(e,t):await this.O(e,t))}async O(e,s){let n;const i=s.params||{};if(!this.C)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=i.integrity,r=e.integrity,a=!r||r===t;n=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||t:void 0})),t&&a&&"no-cors"!==e.mode&&(this.N(),await s.cachePut(e,n.clone()))}return n}async _(e,s){this.N();const n=await s.fetch(e);if(!await s.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}N(){let e=null,t=0;for(const[s,n]of this.plugins.entries())n!==U.copyRedirectedCacheableResponsesPlugin&&(n===U.defaultPrecacheCacheabilityPlugin&&(e=s),n.cacheWillUpdate&&t++);0===t?this.plugins.push(U.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}U.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},U.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await p(e):e};class j{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this.k=new Map,this.D=new Map,this.T=new Map,this.l=new U({cacheName:h(e),plugins:[...t,new w({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(e){this.addToCacheList(e),this.F||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.F=!0)}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=l(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(i)&&this.k.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.T.has(e)&&this.T.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.T.set(e,n.integrity)}if(this.k.set(i,e),this.D.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return u(e,(async()=>{const t=new d;this.strategy.plugins.push(t);for(const[t,s]of this.k){const n=this.T.get(s),i=this.D.get(t),r=new Request(t,{integrity:n,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:e}))}const{updatedURLs:s,notUpdatedURLs:n}=t;return{updatedURLs:s,notUpdatedURLs:n}}))}activate(e){return u(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}getIntegrityForCacheKey(e){return this.T.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}let L;const x=()=>(L||(L=new j),L);class C extends n{constructor(e,t){super((({request:s})=>{const n=e.getURLsToCacheKeys();for(const i of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:n=!0,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(s.url,t)){const t=n.get(i);if(t){return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}}),e.strategy)}}function E(e){const s=x();!function(e,s,c){let o;if("string"==typeof e){const t=new URL(e,location.href);o=new n((({url:e})=>e.href===t.href),s,c)}else if(e instanceof RegExp)o=new i(e,s,c);else if("function"==typeof e)o=new n(e,s,c);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=e}(a||(a=new r,a.addFetchListener(),a.addCacheListener()),a).registerRoute(o)}(new C(s,e))}var O;self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),O={},function(e){x().precache(e)}([{url:"assets/AboutView-eSI3sINO.js",revision:"6a24bf5739f7b2e9ec7faa76d8474a46"},{url:"assets/AccountsView-Dhdc3F73.js",revision:"94ce213a1c1eb557f41283e67f2b3ba9"},{url:"assets/AccountsView-yiTt-FMD.js",revision:"0442826e36cef4eb00c10d53c99a99d0"},{url:"assets/CalendarView-BlDkaHwT.js",revision:"4d8e4bb2dffb101e06586c6a152484f7"},{url:"assets/CategoriesView-Do0Jmk3_.js",revision:"58564118101b111ba31dd6cfd84cd4d7"},{url:"assets/dateUtils-7C3-rwdx.js",revision:"2c6d2e15f3266c05e5259fda11318ba9"},{url:"assets/FAB-D7cOWKlR.js",revision:"a60b64710ce5a5e44f3ddecb95cca7b6"},{url:"assets/FavoritesView-DjEO1WxT.js",revision:"847c80727abfa761c9e2e5fbb7413640"},{url:"assets/HomeView-BLo8PxSL.js",revision:"832231df83d20152322728d6e094ae63"},{url:"assets/index-C34JLIwx.js",revision:"ec16ea0660f12f16e3f1be296d99c984"},{url:"assets/index-DcjXhx6u.css",revision:"76388e04fda51ffa58fdd479222ec351"},{url:"assets/ManageView-CIy4x3UH.js",revision:"a9e0fb0d0772b5657d2c38e56190169d"},{url:"assets/Modal-BU7d6uVz.js",revision:"a055cbf2e75be7b309b88e357d606739"},{url:"assets/RadioField-BGl_JRGz.js",revision:"5a5166a71dc0de5a8f732fef3391b99d"},{url:"assets/SelectField-CuppK2vP.js",revision:"51851ca5c52b1e5017ce09293742fbf8"},{url:"assets/star-BER9agZ1.js",revision:"e0f437100ce51e9a4ecdbe1ceb672107"},{url:"assets/SubPageLayout-Bikzxv4Z.js",revision:"054f3cad2bb18430bb09561a8c513468"},{url:"assets/TextField-C9Z7Pkn8.js",revision:"8a2c1b93626ca19b894d9c417f5672ab"},{url:"assets/TransactionsView-D_rZuKVp.js",revision:"f1b8943e0baa1a9c081581335c060fac"},{url:"assets/trash-2-xXJy6a33.js",revision:"5a8b00e407d01d55b3b0aa2b5cc19c1e"},{url:"assets/useIconGetter-BffgHyQ9.js",revision:"eecaf857cf478dbad0c47401450b0e58"},{url:"assets/View-Cqc6EySf.js",revision:"4eefba22014657d808e807d446fd70e0"},{url:"exho.jpg",revision:"ddd55a8ed6886abdd28f66e41b1c7141"},{url:"icon-192.png",revision:"65d7f57ce669af3e02e9dd5f6554cce7"},{url:"icons/amex.svg",revision:"e5bf0c8d41264fbea2c6f5dbd1065a28"},{url:"icons/bank.svg",revision:"b6d33e2c7519495b265c19629ccf6826"},{url:"icons/bankcom.png",revision:"b6a76cdaa4d184b9b38b4ef506ac16ac"},{url:"icons/bdo.svg",revision:"cc3978516a9311aed33707dc72d92384"},{url:"icons/bpi.svg",revision:"317cf120e64947f11e229f3770ee726a"},{url:"icons/ew.png",revision:"b4ba26feb2eea10db69ba911c5819ad8"},{url:"icons/jcb.svg",revision:"b7f84708140b64189d2f4eb824ec9069"},{url:"icons/mastercard.svg",revision:"55c42d54937583ac3f242da371c2e16d"},{url:"icons/mb.svg",revision:"110857a644701db9f72074fa2e55f1cf"},{url:"icons/my.svg",revision:"f4900fccc2d411d5396805e70c6a9aac"},{url:"icons/pp.svg",revision:"bf2a223eddba3464b8c0bfc8bc703728"},{url:"icons/sp.svg",revision:"3b7158bffb59acd4dccb28bdc7c7f448"},{url:"icons/ub.svg",revision:"446c8d6db5b3eee643f4be4fca395f4b"},{url:"icons/visa.svg",revision:"b16848209b48b1ce4e95aed6ccb91cf3"},{url:"index.html",revision:"f5ca81b4baf2f66ed08e53b1b0ee6b9b"},{url:"logo-512.png",revision:"2c406d4bb31d34217f84b308a71ca16b"},{url:"logo.png",revision:"ef7f48cc4f6d1170f157ab7a9af9e056"},{url:"logo.svg",revision:"a1cf7873f7c2bd3e8487086da01f9062"}]),E(O);
