(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(299)),c={title:"Form / Toggle"},l={unversionedId:"examples/toggle",id:"examples/toggle",isDocsHomePage:!1,title:"Form / Toggle",description:"Use a toggle to present users with two mutually exclusive options (to turn settings on and off).",source:"@site/docs/examples/toggle.md",slug:"/examples/toggle",permalink:"/wave/docs/examples/toggle",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/toggle.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Combobox",permalink:"/wave/docs/examples/combobox"},next:{title:"Form / Spinbox",permalink:"/wave/docs/examples/spinbox"}},i=[],u={rightToc:i};function s(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a toggle to present users with two mutually exclusive options (to turn settings on and off)."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(432).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'toggle_unchecked={q.args.toggle_unchecked}'),\n            ui.text(f'toggle_checked={q.args.toggle_checked}'),\n            ui.text(f'toggle_unchecked_disabled={q.args.toggle_unchecked_disabled}'),\n            ui.text(f'toggle_checked_disabled={q.args.toggle_checked_disabled}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.toggle(name='toggle_unchecked', label='Not checked'),\n            ui.toggle(name='toggle_checked', label='Checked', value=True),\n            ui.toggle(name='toggle_unchecked_disabled', label='Not checked (Disabled)', disabled=True),\n            ui.toggle(name='toggle_checked_disabled', label='Checked (Disabled)', value=True, disabled=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n")))}s.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||a;return n?o.a.createElement(m,l(l({ref:t},u),{},{components:n})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},432:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/toggle-5e565e1d5a735ee4a481835a4e53ee43.png"}}]);