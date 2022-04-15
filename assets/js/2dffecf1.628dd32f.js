"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[7256],{3905:function(e,t,r){r.d(t,{Zo:function(){return g},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,g=h(e,["components","mdxType","originalType","parentName"]),u=s(r),d=i,p=u["".concat(l,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(p,o(o({ref:t},g),{},{components:r})):n.createElement(p,o({ref:t},g))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var h={};for(var l in t)hasOwnProperty.call(t,l)&&(h[l]=t[l]);h.originalType=e,h.mdxType="string"==typeof e?e:i,o[1]=h;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},643:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return h},metadata:function(){return s},toc:function(){return c}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],h={id:"highlight-manager",title:"HighlightManager",hide_title:!0},l="HighlightManager",s={unversionedId:"systems/runtime/highlight-manager",id:"systems/runtime/highlight-manager",title:"HighlightManager",description:"The HighlightManager will take an object and display an outline highlight effect for that object. This system wraps VRChat\u2019s HighlightFX class. HighlightFX only takes a single renderer, whereas the HighlightManager takes a GameObject. Matching how VRChat handles highlighting objects, all renderers on the object and on its children are used for highlighting. Renderers that are disabled, have a null mesh, or are part of a static batch are ignored. If an object has no valid renderers, then a Highlight Proxy is used based on the first collider on the object. The Highlight Proxy will copy the transform values of the original mesh and also apply the collider size and scale to make it appear that the collider is being highlighted. The HighlightManager is used to visualize the results from the PlayerRaycaster system. There is no set limit to the number of objects that can be highlighted, but only 2 objects are expected to be highlighted at once through ClientSim, one object per player hand. The HighlightManager links to the VRCSDK API for InputManager.EnableObjectHighlight. This hook only takes in renderers though and does not go through the full steps of finding children objects and creating proxies.",source:"@site/docs/systems/runtime/highlight-manager.md",sourceDirName:"systems/runtime",slug:"/systems/runtime/highlight-manager",permalink:"/systems/runtime/highlight-manager",editUrl:"https://github.com/vrchat-community/ClientSim/Docs/Source/docs/systems/runtime/highlight-manager.md",tags:[],version:"current",frontMatter:{id:"highlight-manager",title:"HighlightManager",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"VRCSDK Helpers",permalink:"/systems/runtime/helpers"},next:{title:"Input",permalink:"/systems/runtime/input"}},g={},c=[],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"highlightmanager"},"HighlightManager"),(0,a.kt)("p",null,"The HighlightManager will take an object and display an outline highlight effect for that object. This system wraps VRChat\u2019s HighlightFX class. HighlightFX only takes a single renderer, whereas the HighlightManager takes a GameObject. Matching how VRChat handles highlighting objects, all renderers on the object and on its children are used for highlighting. Renderers that are disabled, have a null mesh, or are part of a static batch are ignored. If an object has no valid renderers, then a Highlight Proxy is used based on the first collider on the object. The Highlight Proxy will copy the transform values of the original mesh and also apply the collider size and scale to make it appear that the collider is being highlighted. The HighlightManager is used to visualize the results from the ",(0,a.kt)("a",{parentName:"p",href:"/systems/runtime/player#playerraycaster"},"PlayerRaycaster")," system. There is no set limit to the number of objects that can be highlighted, but only 2 objects are expected to be highlighted at once through ClientSim, one object per player hand. The HighlightManager links to the VRCSDK API for InputManager.EnableObjectHighlight. This hook only takes in renderers though and does not go through the full steps of finding children objects and creating proxies. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!NOTE]","\nThe HighlightManager currently shows only a preview for how the object will look on Quest. A style matching Windows systems is forthcoming.")))}d.isMDXComponent=!0}}]);