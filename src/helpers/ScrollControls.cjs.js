"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@babel/runtime/helpers/extends"),t=require("three"),r=require("react"),o=require("react-dom/client"),s=require("@react-three/fiber"),n=require("react-merge-refs");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var c=l(e),a=i(t),f=i(r),u=i(o),d=l(n);const h=f.createContext(null);function p(){return f.useContext(h)}const m=f.forwardRef((({children:e},t)=>{const r=f.useRef(null),o=p(),{width:n,height:l}=s.useThree((e=>e.viewport));return s.useFrame((()=>{r.current.position.x=o.horizontal?-n*(o.pages-1)*o.offset:0,r.current.position.y=o.horizontal?0:l*(o.pages-1)*o.offset})),f.createElement("group",{ref:d.default([t,r])},e)})),v=f.forwardRef((({children:e,style:t,...r},o)=>{const n=p(),l=f.useRef(null),{width:i,height:a}=s.useThree((e=>e.size)),m=f.useContext(s.context),v=f.useMemo((()=>u.createRoot(n.fixed)),[n.fixed]);return s.useFrame((()=>{n.delta>n.eps&&(l.current.style.transform=`translate3d(${n.horizontal?-i*(n.pages-1)*n.offset:0}px,${n.horizontal?0:a*(n.pages-1)*-n.offset}px,0)`)})),v.render(f.createElement("div",c.default({ref:d.default([o,l]),style:{...t,position:"absolute",top:0,left:0,willChange:"transform"}},r),f.createElement(h.Provider,{value:n},f.createElement(s.context.Provider,{value:m},e)))),null})),y=f.forwardRef((({html:e,...t},r)=>{const o=e?v:m;return f.createElement(o,c.default({ref:r},t))}));exports.Scroll=y,exports.ScrollControls=function({eps:e=1e-5,enabled:t=!0,infinite:r,horizontal:o,pages:n=1,distance:l=1,damping:i=4,style:c={},children:u}){const{get:d,setEvents:p,gl:m,size:v,invalidate:y,events:g}=s.useThree(),[w]=f.useState((()=>document.createElement("div"))),[x]=f.useState((()=>document.createElement("div"))),[E]=f.useState((()=>document.createElement("div"))),b=m.domElement.parentNode,z=f.useRef(0),C=f.useMemo((()=>{const t={el:w,eps:e,fill:x,fixed:E,horizontal:o,damping:i,offset:0,delta:0,scroll:z,pages:n,range(e,t,r=0){const o=e-r,s=o+t+2*r;return this.offset<o?0:this.offset>s?1:(this.offset-o)/(s-o)},curve(e,t,r=0){return Math.sin(this.range(e,t,r)*Math.PI)},visible(e,t,r=0){const o=e-r,s=o+t+2*r;return this.offset>=o&&this.offset<=s}};return t}),[e,i,o,n]);f.useEffect((()=>{w.style.position="absolute",w.style.width="100%",w.style.height="100%",w.style[o?"overflowX":"overflowY"]="auto",w.style[o?"overflowY":"overflowX"]="hidden",w.style.top="0px",w.style.left="0px";for(const e in c)w.style[e]=c[e];E.style.position="sticky",E.style.top="0px",E.style.left="0px",E.style.width="100%",E.style.height="100%",E.style.overflow="hidden",w.appendChild(E),x.style.height=o?"100%":n*l*100+"%",x.style.width=o?n*l*100+"%":"100%",x.style.pointerEvents="none",w.appendChild(x),b.appendChild(w),w[o?"scrollLeft":"scrollTop"]=1;const e=g.connected||m.domElement;requestAnimationFrame((()=>null==g.connect?void 0:g.connect(w)));const t=d().events.compute;return p({compute(e,t){const r=e.clientX-b.offsetLeft,o=e.clientY-b.offsetTop;t.pointer.set(r/t.size.width*2-1,-o/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),()=>{b.removeChild(w),p({compute:t}),null==g.connect||g.connect(e)}}),[n,l,o,w,x,E,b]),f.useEffect((()=>{if(g.connected===w){const e=v[o?"width":"height"],s=w[o?"scrollWidth":"scrollHeight"],n=s-e;let l=0,i=!0,c=!0;const a=()=>{if(t&&!c&&(y(),l=w[o?"scrollLeft":"scrollTop"],z.current=l/n,r)){if(!i)if(l>=n){const e=1-C.offset;w[o?"scrollLeft":"scrollTop"]=1,z.current=C.offset=-e,i=!0}else if(l<=0){const e=1+C.offset;w[o?"scrollLeft":"scrollTop"]=s,z.current=C.offset=e,i=!0}i&&setTimeout((()=>i=!1),40)}};w.addEventListener("scroll",a,{passive:!0}),requestAnimationFrame((()=>c=!1));const f=e=>w.scrollLeft+=e.deltaY/2;return o&&w.addEventListener("wheel",f,{passive:!0}),()=>{w.removeEventListener("scroll",a),o&&w.removeEventListener("wheel",f)}}}),[w,g,v,r,C,y,o,t]);let L=0;return s.useFrame(((t,r)=>{C.offset=a.MathUtils.damp(L=C.offset,z.current,i,r),C.delta=a.MathUtils.damp(C.delta,Math.abs(L-C.offset),i,r),C.delta>e&&y()})),f.createElement(h.Provider,{value:C},u)},exports.useScroll=p;
