(()=>{var e={736:()=>{"use strict";(()=>{const e=()=>{const e=new Error("not implemented");return e.code="ENOSYS",e};if(!globalThis.fs){let t="";globalThis.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(e,i){t+=n.decode(i);const s=t.lastIndexOf("\n");return-1!=s&&(console.log(t.substr(0,s)),t=t.substr(s+1)),i.length},write(t,n,i,s,o,r){0===i&&s===n.length&&null===o?r(null,this.writeSync(t,n)):r(e())},chmod(t,n,i){i(e())},chown(t,n,i,s){s(e())},close(t,n){n(e())},fchmod(t,n,i){i(e())},fchown(t,n,i,s){s(e())},fstat(t,n){n(e())},fsync(e,t){t(null)},ftruncate(t,n,i){i(e())},lchown(t,n,i,s){s(e())},link(t,n,i){i(e())},lstat(t,n){n(e())},mkdir(t,n,i){i(e())},open(t,n,i,s){s(e())},read(t,n,i,s,o,r){r(e())},readdir(t,n){n(e())},readlink(t,n){n(e())},rename(t,n,i){i(e())},rmdir(t,n){n(e())},stat(t,n){n(e())},symlink(t,n,i){i(e())},truncate(t,n,i){i(e())},unlink(t,n){n(e())},utimes(t,n,i,s){s(e())}}}if(globalThis.process||(globalThis.process={getuid:()=>-1,getgid:()=>-1,geteuid:()=>-1,getegid:()=>-1,getgroups(){throw e()},pid:-1,ppid:-1,umask(){throw e()},cwd(){throw e()},chdir(){throw e()}}),!globalThis.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!globalThis.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!globalThis.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!globalThis.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const t=new TextEncoder("utf-8"),n=new TextDecoder("utf-8");globalThis.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=e=>{0!==e&&console.warn("exit code:",e)},this._exitPromise=new Promise((e=>{this._resolveExitPromise=e})),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const e=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/4294967296),!0)},i=e=>this.mem.getUint32(e+0,!0)+4294967296*this.mem.getInt32(e+4,!0),s=e=>{const t=this.mem.getFloat64(e,!0);if(0===t)return;if(!isNaN(t))return t;const n=this.mem.getUint32(e,!0);return this._values[n]},o=(e,t)=>{const n=2146959360;if("number"==typeof t&&0!==t)return isNaN(t)?(this.mem.setUint32(e+4,n,!0),void this.mem.setUint32(e,0,!0)):void this.mem.setFloat64(e,t,!0);if(void 0===t)return void this.mem.setFloat64(e,0,!0);let i=this._ids.get(t);void 0===i&&(i=this._idPool.pop(),void 0===i&&(i=this._values.length),this._values[i]=t,this._goRefCounts[i]=0,this._ids.set(t,i)),this._goRefCounts[i]++;let s=0;switch(typeof t){case"object":null!==t&&(s=1);break;case"string":s=2;break;case"symbol":s=3;break;case"function":s=4}this.mem.setUint32(e+4,n|s,!0),this.mem.setUint32(e,i,!0)},r=e=>{const t=i(e+0),n=i(e+8);return new Uint8Array(this._inst.exports.mem.buffer,t,n)},a=e=>{const t=i(e+0),n=i(e+8),o=new Array(n);for(let e=0;e<n;e++)o[e]=s(t+8*e);return o},l=e=>{const t=i(e+0),s=i(e+8);return n.decode(new DataView(this._inst.exports.mem.buffer,t,s))},c=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":e=>{e>>>=0;const t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{const t=i(8+(e>>>=0)),n=i(e+16),s=this.mem.getInt32(e+24,!0);fs.writeSync(t,new Uint8Array(this._inst.exports.mem.buffer,n,s))},"runtime.resetMemoryDataView":e=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{e(8+(t>>>=0),1e6*(c+performance.now()))},"runtime.walltime":t=>{t>>>=0;const n=(new Date).getTime();e(t+8,n/1e3),this.mem.setInt32(t+16,n%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;const t=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(t,setTimeout((()=>{for(this._resume();this._scheduledTimeouts.has(t);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()}),i(e+8)+1)),this.mem.setInt32(e+16,t,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;const t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(r(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;const t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,0===this._goRefCounts[t]){const e=this._values[t];this._values[t]=null,this._ids.delete(e),this._idPool.push(t)}},"syscall/js.stringVal":e=>{o(24+(e>>>=0),l(e+8))},"syscall/js.valueGet":e=>{e>>>=0;const t=Reflect.get(s(e+8),l(e+16));e=this._inst.exports.getsp()>>>0,o(e+32,t)},"syscall/js.valueSet":e=>{e>>>=0,Reflect.set(s(e+8),l(e+16),s(e+32))},"syscall/js.valueDelete":e=>{e>>>=0,Reflect.deleteProperty(s(e+8),l(e+16))},"syscall/js.valueIndex":e=>{o(24+(e>>>=0),Reflect.get(s(e+8),i(e+16)))},"syscall/js.valueSetIndex":e=>{e>>>=0,Reflect.set(s(e+8),i(e+16),s(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{const t=s(e+8),n=Reflect.get(t,l(e+16)),i=a(e+32),r=Reflect.apply(n,t,i);e=this._inst.exports.getsp()>>>0,o(e+56,r),this.mem.setUint8(e+64,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{const t=s(e+8),n=a(e+16),i=Reflect.apply(t,void 0,n);e=this._inst.exports.getsp()>>>0,o(e+40,i),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{const t=s(e+8),n=a(e+16),i=Reflect.construct(t,n);e=this._inst.exports.getsp()>>>0,o(e+40,i),this.mem.setUint8(e+48,1)}catch(t){e=this._inst.exports.getsp()>>>0,o(e+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":t=>{e(16+(t>>>=0),parseInt(s(t+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const i=t.encode(String(s(n+8)));o(n+16,i),e(n+24,i.length)},"syscall/js.valueLoadString":e=>{const t=s(8+(e>>>=0));r(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,s(e+8)instanceof s(e+16)?1:0)},"syscall/js.copyBytesToGo":t=>{const n=r(8+(t>>>=0)),i=s(t+32);if(!(i instanceof Uint8Array||i instanceof Uint8ClampedArray))return void this.mem.setUint8(t+48,0);const o=i.subarray(0,n.length);n.set(o),e(t+40,o.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{const n=s(8+(t>>>=0)),i=r(t+16);if(!(n instanceof Uint8Array||n instanceof Uint8ClampedArray))return void this.mem.setUint8(t+48,0);const o=i.subarray(0,n.length);n.set(o),e(t+40,o.length),this.mem.setUint8(t+48,1)},debug:e=>{console.log(e)}}}}async run(e){if(!(e instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=e,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,globalThis,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[globalThis,5],[this,6]]),this._idPool=[],this.exited=!1;let n=4096;const i=e=>{const i=n,s=t.encode(e+"\0");return new Uint8Array(this.mem.buffer,n,s.length).set(s),n+=s.length,n%8!=0&&(n+=8-n%8),i},s=this.argv.length,o=[];this.argv.forEach((e=>{o.push(i(e))})),o.push(0),Object.keys(this.env).sort().forEach((e=>{o.push(i(`${e}=${this.env[e]}`))})),o.push(0);const r=n;if(o.forEach((e=>{this.mem.setUint32(n,e,!0),this.mem.setUint32(n+4,0,!0),n+=8})),n>=12288)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(s,r),this.exited&&this._resolveExitPromise(),await this._exitPromise}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(e){const t=this;return function(){const n={id:e,this:this,args:arguments};return t._pendingEvent=n,t._resume(),n.result}}}})()},390:e=>{var t={exports:{}};function n(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var i=e[t];"object"!=typeof i||Object.isFrozen(i)||n(i)})),e}t.exports=n,t.exports.default=n;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function s(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const r=e=>!!e.scope||e.sublanguage&&e.language;class a{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=s(e)}openNode(e){if(!r(e))return;let t="";t=e.sublanguage?`language-${e.language}`:((e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(e.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(e){r(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const l=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class c{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=l({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.sublanguage=!0,n.language=t,this.add(n)}toHTML(){return new a(this,this.options).value()}finalize(){return!0}}function h(e){return e?"string"==typeof e?e:e.source:null}function g(e){return p("(?=",e,")")}function d(e){return p("(?:",e,")*")}function f(e){return p("(?:",e,")?")}function p(...e){return e.map((e=>h(e))).join("")}function m(...e){const t=function(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e);return"("+(t.capture?"":"?:")+e.map((e=>h(e))).join("|")+")"}function b(e){return new RegExp(e.toString()+"|").exec("").length-1}const w=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function y(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let i=h(e),s="";for(;i.length>0;){const e=w.exec(i);if(!e){s+=i;break}s+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?s+="\\"+String(Number(e[1])+t):(s+=e[0],"("===e[0]&&n++)}return s})).map((e=>`(${e})`)).join(t)}const _="[a-zA-Z]\\w*",x="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",v="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",T="\\b(0b[01]+)",O={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[O]},R={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[O]},N=function(e,t,n={}){const i=o({scope:"comment",begin:e,end:t,contains:[]},n);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const s=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:p(/[ ]+/,"(",s,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},M=N("//","$"),S=N("/\\*","\\*/"),j=N("#","$"),I={scope:"number",begin:E,relevance:0},A={scope:"number",begin:v,relevance:0},L={scope:"number",begin:T,relevance:0},U={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[O,{begin:/\[/,end:/\]/,relevance:0,contains:[O]}]}]},D={scope:"title",begin:_,relevance:0},B={scope:"title",begin:x,relevance:0};var C=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:_,UNDERSCORE_IDENT_RE:x,NUMBER_RE:E,C_NUMBER_RE:v,BINARY_NUMBER_RE:T,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=p(t,/.*\b/,e.binary,/\b.*/)),o({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:O,APOS_STRING_MODE:k,QUOTE_STRING_MODE:R,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:N,C_LINE_COMMENT_MODE:M,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:j,NUMBER_MODE:I,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:L,REGEXP_MODE:U,TITLE_MODE:D,UNDERSCORE_TITLE_MODE:B,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function P(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function H(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function $(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=P,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function G(e,t){Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function W(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function z(e,t){void 0===e.relevance&&(e.relevance=1)}const K=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=p(n.beforeMatch,g(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},F=["of","and","for","in","not","or","if","then","parent","list","value"];function V(e,t,n="keyword"){const i=Object.create(null);return"string"==typeof e?s(n,e.split(" ")):Array.isArray(e)?s(n,e):Object.keys(e).forEach((function(n){Object.assign(i,V(e[n],t,n))})),i;function s(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");i[n[0]]=[e,X(n[0],n[1])]}))}}function X(e,t){return t?Number(t):function(e){return F.includes(e.toLowerCase())}(e)?0:1}const Z={},q=e=>{console.error(e)},J=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Y=(e,t)=>{Z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Z[`${e}/${t}`]=!0)},Q=new Error;function ee(e,t,{key:n}){let i=0;const s=e[n],o={},r={};for(let e=1;e<=t.length;e++)r[e+i]=s[e],o[e+i]=!0,i+=b(t[e-1]);e[n]=r,e[n]._emit=o,e[n]._multi=!0}function te(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw q("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if("object"!=typeof e.beginScope||null===e.beginScope)throw q("beginScope must be object"),Q;ee(e,e.begin,{key:"beginScope"}),e.begin=y(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw q("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if("object"!=typeof e.endScope||null===e.endScope)throw q("endScope must be object"),Q;ee(e,e.end,{key:"endScope"}),e.end=y(e.end,{joinWith:""})}}(e)}function ne(e){function t(t,n){return new RegExp(h(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(y(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=o(e.classNameAliases||{}),function n(s,r){const a=s;if(s.isCompiled)return a;[H,W,te,K].forEach((e=>e(s,r))),e.compilerExtensions.forEach((e=>e(s,r))),s.__beforeBegin=null,[$,G,z].forEach((e=>e(s,r))),s.isCompiled=!0;let l=null;return"object"==typeof s.keywords&&s.keywords.$pattern&&(s.keywords=Object.assign({},s.keywords),l=s.keywords.$pattern,delete s.keywords.$pattern),l=l||/\w+/,s.keywords&&(s.keywords=V(s.keywords,e.case_insensitive)),a.keywordPatternRe=t(l,!0),r&&(s.begin||(s.begin=/\B|\b/),a.beginRe=t(a.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(a.endRe=t(a.end)),a.terminatorEnd=h(a.end)||"",s.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(s.end?"|":"")+r.terminatorEnd)),s.illegal&&(a.illegalRe=t(s.illegal)),s.contains||(s.contains=[]),s.contains=[].concat(...s.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return o(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:ie(e)?o(e,{starts:e.starts?o(e.starts):null}):Object.isFrozen(e)?o(e):e}("self"===e?s:e)}))),s.contains.forEach((function(e){n(e,a)})),s.starts&&n(s.starts,r),a.matcher=function(e){const t=new i;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(a),a}(e)}function ie(e){return!!e&&(e.endsWithParent||ie(e.starts))}class se extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const oe=s,re=o,ae=Symbol("nomatch");var le=function(e){const n=Object.create(null),s=Object.create(null),o=[];let r=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function h(e){return c.noHighlightRe.test(e)}function b(e,t,n){let i="",s="";"object"==typeof t?(i=e,n=t.ignoreIllegals,s=t.language):(Y("10.7.0","highlight(lang, code, ...args) has been deprecated."),Y("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),s=e,i=t),void 0===n&&(n=!0);const o={code:i,language:s};k("before:highlight",o);const r=o.result?o.result:w(o.language,o.code,n);return r.code=o.code,k("after:highlight",r),r}function w(e,t,s,o){const l=Object.create(null);function u(){if(!O.keywords)return void R.addText(N);let e=0;O.keywordPatternRe.lastIndex=0;let t=O.keywordPatternRe.exec(N),n="";for(;t;){n+=N.substring(e,t.index);const s=x.case_insensitive?t[0].toLowerCase():t[0],o=(i=s,O.keywords[i]);if(o){const[e,i]=o;if(R.addText(n),n="",l[s]=(l[s]||0)+1,l[s]<=7&&(M+=i),e.startsWith("_"))n+=t[0];else{const n=x.classNameAliases[e]||e;R.addKeyword(t[0],n)}}else n+=t[0];e=O.keywordPatternRe.lastIndex,t=O.keywordPatternRe.exec(N)}var i;n+=N.substring(e),R.addText(n)}function h(){null!=O.subLanguage?function(){if(""===N)return;let e=null;if("string"==typeof O.subLanguage){if(!n[O.subLanguage])return void R.addText(N);e=w(O.subLanguage,N,!0,k[O.subLanguage]),k[O.subLanguage]=e._top}else e=y(N,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(M+=e.relevance),R.addSublanguage(e._emitter,e.language)}():u(),N=""}function g(e,t){let n=1;const i=t.length-1;for(;n<=i;){if(!e._emit[n]){n++;continue}const i=x.classNameAliases[e[n]]||e[n],s=t[n];i?R.addKeyword(s,i):(N=s,u(),N=""),n++}}function d(e,t){return e.scope&&"string"==typeof e.scope&&R.openNode(x.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(R.addKeyword(N,x.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),N=""):e.beginScope._multi&&(g(e.beginScope,t),N="")),O=Object.create(e,{parent:{value:O}}),O}function f(e,t,n){let s=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(s){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.isMatchIgnored&&(s=!1)}if(s){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return f(e.parent,t,n)}function p(e){return 0===O.matcher.regexIndex?(N+=e[0],1):(I=!0,0)}function m(e){const n=e[0],i=t.substring(e.index),s=f(O,e,i);if(!s)return ae;const o=O;O.endScope&&O.endScope._wrap?(h(),R.addKeyword(n,O.endScope._wrap)):O.endScope&&O.endScope._multi?(h(),g(O.endScope,e)):o.skip?N+=n:(o.returnEnd||o.excludeEnd||(N+=n),h(),o.excludeEnd&&(N=n));do{O.scope&&R.closeNode(),O.skip||O.subLanguage||(M+=O.relevance),O=O.parent}while(O!==s.parent);return s.starts&&d(s.starts,e),o.returnEnd?0:n.length}let b={};function _(n,o){const a=o&&o[0];if(N+=n,null==a)return h(),0;if("begin"===b.type&&"end"===o.type&&b.index===o.index&&""===a){if(N+=t.slice(o.index,o.index+1),!r){const t=new Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=b.rule,t}return 1}if(b=o,"begin"===o.type)return function(e){const t=e[0],n=e.rule,s=new i(n),o=[n.__beforeBegin,n["on:begin"]];for(const n of o)if(n&&(n(e,s),s.isMatchIgnored))return p(t);return n.skip?N+=t:(n.excludeBegin&&(N+=t),h(),n.returnBegin||n.excludeBegin||(N=t)),d(n,e),n.returnBegin?0:t.length}(o);if("illegal"===o.type&&!s){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"');throw e.mode=O,e}if("end"===o.type){const e=m(o);if(e!==ae)return e}if("illegal"===o.type&&""===a)return 1;if(j>1e5&&j>3*o.index)throw new Error("potential infinite loop, way more iterations than matches");return N+=a,a.length}const x=v(e);if(!x)throw q(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const E=ne(x);let T="",O=o||E;const k={},R=new c.__emitter(c);!function(){const e=[];for(let t=O;t!==x;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>R.openNode(e)))}();let N="",M=0,S=0,j=0,I=!1;try{for(O.matcher.considerAll();;){j++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=S;const e=O.matcher.exec(t);if(!e)break;const n=_(t.substring(S,e.index),e);S=e.index+n}return _(t.substring(S)),R.closeAllNodes(),R.finalize(),T=R.toHTML(),{language:e,value:T,relevance:M,illegal:!1,_emitter:R,_top:O}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:oe(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:S,context:t.slice(S-100,S+100),mode:n.mode,resultSoFar:T},_emitter:R};if(r)return{language:e,value:oe(t),illegal:!1,relevance:0,errorRaised:n,_emitter:R,_top:O};throw n}}function y(e,t){t=t||c.languages||Object.keys(n);const i=function(e){const t={value:oe(e),illegal:!1,relevance:0,_top:l,_emitter:new c.__emitter(c)};return t._emitter.addText(e),t}(e),s=t.filter(v).filter(O).map((t=>w(t,e,!1)));s.unshift(i);const o=s.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(v(e.language).supersetOf===t.language)return 1;if(v(t.language).supersetOf===e.language)return-1}return 0})),[r,a]=o,u=r;return u.secondBest=a,u}function _(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=c.languageDetectRe.exec(t);if(n){const t=v(n[1]);return t||(J(a.replace("{}",n[1])),J("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||v(e)))}(e);if(h(n))return;if(k("before:highlightElement",{el:e,language:n}),e.children.length>0&&(c.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),c.throwUnescapedHTML))throw new se("One of your code blocks includes unescaped HTML.",e.innerHTML);t=e;const i=t.textContent,o=n?b(i,{language:n,ignoreIllegals:!0}):y(i);e.innerHTML=o.value,function(e,t,n){const i=t&&s[t]||n;e.classList.add("hljs"),e.classList.add(`language-${i}`)}(e,n,o.language),e.result={language:o.language,re:o.relevance,relevance:o.relevance},o.secondBest&&(e.secondBest={language:o.secondBest.language,relevance:o.secondBest.relevance}),k("after:highlightElement",{el:e,result:o,text:i})}let x=!1;function E(){"loading"!==document.readyState?document.querySelectorAll(c.cssSelector).forEach(_):x=!0}function v(e){return e=(e||"").toLowerCase(),n[e]||n[s[e]]}function T(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{s[e.toLowerCase()]=t}))}function O(e){const t=v(e);return t&&!t.disableAutodetect}function k(e,t){const n=e;o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){x&&E()}),!1),Object.assign(e,{highlight:b,highlightAuto:y,highlightAll:E,highlightElement:_,highlightBlock:function(e){return Y("10.7.0","highlightBlock will be removed entirely in v12.0"),Y("10.7.0","Please use highlightElement now."),_(e)},configure:function(e){c=re(c,e)},initHighlighting:()=>{E(),Y("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){E(),Y("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let s=null;try{s=i(e)}catch(e){if(q("Language definition for '{}' could not be registered.".replace("{}",t)),!r)throw e;q(e),s=l}s.name||(s.name=t),n[t]=s,s.rawDefinition=i.bind(null,e),s.aliases&&T(s.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const t of Object.keys(s))s[t]===e&&delete s[t]},listLanguages:function(){return Object.keys(n)},getLanguage:v,registerAliases:T,autoDetection:O,inherit:re,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)}}),e.debugMode=function(){r=!1},e.safeMode=function(){r=!0},e.versionString="11.6.0",e.regex={concat:p,lookahead:g,either:m,optional:f,anyNumberOfTimes:d};for(const e in C)"object"==typeof C[e]&&t.exports(C[e]);return Object.assign(e,C),e}({});e.exports=le,le.HighlightJS=le,le.default=le}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}(()=>{"use strict";n(736);const e=n(390);e.registerLanguage("go",(function(e){const t={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:t,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:t,illegal:/["']/}]}]}}));class t{constructor(e,t){this.success=e,this.error=t}}const i=document.getElementById("input"),s=document.getElementById("output"),o=document.getElementById("sample"),r=document.getElementById("inline"),a=new class{constructor(e){this.inline=e}}(r.checked);function l(){const n=(i.innerText.trim(),new t("",""));var o;n.success?s.innerHTML=(o=n.success,e.highlight(o,{language:"go"}).value):s.innerHTML=n.error}i.addEventListener("keyup",l),r.addEventListener("change",(function(){a.inline=r.checked,l()})),o.addEventListener("click",(function(){i.innerText=c,l()}));const c="<note>\n    <to>Tove</to>\n    <from>Jani</from>\n    <heading>Reminder</heading>\n    <body>Don't forget me this weekend!</body>\n</note>",u=new globalThis.Go;WebAssembly.instantiateStreaming(fetch("http://localhost:8080/xml-to-go.wasm"),u.importObject).then((function(e){u.run(e.instance)}))})()})();