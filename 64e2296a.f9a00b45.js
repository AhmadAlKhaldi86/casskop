(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),a=r(9),o=(r(0),r(193)),c={id:"1_casskop",title:"Casskop",sidebar_label:"Casskop"},s={id:"5_operations/4_uninstall/1_casskop",title:"Casskop",description:"## Uninstaling the Charts",source:"@site/docs/5_operations/4_uninstall/1_casskop.md",permalink:"/casskop/docs/5_operations/4_uninstall/1_casskop",editUrl:"https://github.com/Orange-OpenSource//casskop/edit/master/website/docs/5_operations/4_uninstall/1_casskop.md",sidebar_label:"Casskop",sidebar:"docs",previous:{title:"Upgrade Bootstrap Image",permalink:"/casskop/docs/5_operations/3_upgrading/2_upgrade_bootstrap_image"},next:{title:"Cassandra Cluster",permalink:"/casskop/docs/5_operations/5_multicasskop/1_cassandra_cluster"}},l=[{value:"Uninstaling the Charts",id:"uninstaling-the-charts",children:[]}],i={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),Object(o.b)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ helm delete casskop\n")),Object(o.b)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),Object(o.b)("p",null,"Manually delete the CRD:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl delete crd cassandraclusters.dfy.orange.com\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\ud83d\udea9 If you delete the CRD then it will delete ",Object(o.b)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very very good care")))}p.isMDXComponent=!0},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,s({ref:t},i,{components:r})):a.a.createElement(m,s({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);