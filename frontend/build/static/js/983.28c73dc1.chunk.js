"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[983],{88983:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(65043),s=a(72200),n=a(20737),r=a(41538),c=a(70579);const i=()=>{const[e,t]=(0,l.useState)([]),[a,i]=(0,l.useState)(!0),o=localStorage.getItem("isOwner");return console.log("IsOwner",o),(0,l.useEffect)((()=>{(async()=>{try{const e=await n.A.get("/allImages");t(e.data),i(!1)}catch(e){console.error("Error fetching slider images",e),i(!1)}})()}),[]),a?(0,c.jsx)("div",{className:"flex items-center bg-white justify-center min-h-screen font-poppins",children:(0,c.jsx)(r.h,{width:"200",height:"200"})}):(0,c.jsx)("div",{className:"w-full h-[36vh] md:h-[56vh] mx-auto",children:(0,c.jsx)(s.Carousel,{autoplay:!0,loop:!0,navigation:e=>{let{setActiveIndex:t,activeIndex:a,length:l}=e;return(0,c.jsx)("div",{className:"absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2",children:new Array(l).fill("").map(((e,l)=>(0,c.jsx)("span",{className:"block h-1 cursor-pointer rounded-2xl transition-all content-[''] ".concat(a===l?"w-8 bg-white":"w-4 bg-white/50"),onClick:()=>t(l)},l)))})},children:e.map(((e,t)=>o?(0,c.jsx)("img",{src:e.imageUrl,alt:"image ".concat(t+1),className:"h-full w-full"},t):(0,c.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)("img",{src:e.imageUrl,alt:"image ".concat(t+1),className:"h-full w-full"})},t)))})})}}}]);
//# sourceMappingURL=983.28c73dc1.chunk.js.map