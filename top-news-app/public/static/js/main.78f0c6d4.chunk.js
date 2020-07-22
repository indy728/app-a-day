(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(n,e,t){n.exports=t(55)},55:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(27),o=t.n(i),c=t(7),l=t(8),u=576,d=768,s=992,m=1200,h={xs:"".concat(450,"px"),sm:"".concat(u,"px"),md:"".concat(d,"px"),lg:"".concat(s,"px"),xl:"".concat(m,"px")},p={sm:"(min-width: ".concat(h.sm,")"),md:"(min-width: ".concat(h.md,")"),lg:"(min-width: ".concat(h.lg,")"),xl:"(min-width: ".concat(h.xl,")"),maxSm:"(max-width: ".concat(u-1,"px)"),maxMd:"(max-width: ".concat(d-1,"px)"),maxLg:"(max-width: ".concat(s-1,"px)"),maxXL:"(max-width: ".concat(m-1,"px)")};function f(){var n=Object(c.a)(["\n  * { \n    margin: 0;\n    padding: 0;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n    -moz-box-sizing: inherit; \n    -webkit-box-sizing: inherit;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 50%;\n\n    @media "," {\n      font-size: 62.5%; \n    }\n\n    @media "," {\n      font-size: 75%; \n    }\n  }\n\n  body {\n    background-image: linear-gradient(165deg, grey, white);\n    background-size: cover;\n    background-repeat: no-repeat;\n    min-height: 100vh;\n    font-size: 1.8rem;\n\n    address, h1, h2, h3, h4, h5, h6 {\n    }\n    \n    * {\n      display: flex;\n      flex-flow: column;\n      align-items: center;\n      text-align: center;\n    }\n    \n    h1 {\n    }\n\n    h2 {\n    }\n\n    @media "," {\n      font-size: 1.4rem;\n    }\n  }\n"]);return f=function(){return n},n}var g=Object(l.a)(f(),p.md,p.xl,p.md),v=t(24),b=t(31),x=t(32),w=t(40),y=t(39),k=t(56),E=t(14),O=t.n(E);function j(){var n=Object(c.a)(["\n  width: 24rem;\n  height: calc(5 / 7 * 20rem);\n  background-image: ",";\n  background-size: cover;\n  border: 1px solid black;\n"]);return j=function(){return n},n}function z(){var n=Object(c.a)(["\n  font-size: 1.4rem;\n  font-family: sans-serif;\n\n  a {\n    display: inline-block;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n  a {\n    font-size: 1.8rem;\n  }\n"]);return C=function(){return n},n}function S(){var n=Object(c.a)(["\n  padding: .2rem .5rem;\n  background-color: red;\n  color: white;\n  border: 2px outset white;\n  border-radius: 4px;\n  position: absolute;\n  top: .5rem;\n  left: .5rem;\n"]);return S=function(){return n},n}function I(){var n=Object(c.a)(["\n  width: 30rem;\n  padding: 2rem 3rem;\n  border: 1px solid black;\n  background-color: white;\n  box-shadow: 2px 2px 4px 0 black;\n  position: relative;\n\n  &:not(:first-child) {\n    margin-top: 5rem;\n  }\n\n  > :not(.source):not(:first-child) {\n    margin-top: 2rem;\n  }\n\n  @media "," {\n    width: 50rem;\n  }\n\n  @media "," {\n  }\n\n  @media "," {\n    width: 80rem;\n  }\n\n  @media "," {}\n"]);return I=function(){return n},n}var H=l.b.div(I(),p.sm,p.md,p.lg,p.xl),T=l.b.div(S()),$=l.b.div(C()),q=l.b.div(z()),B=l.b.div(j(),(function(n){var e=n.src;return"url(".concat(e,")")})),N=function(n){var e,t=n.source,r=n.title,i=n.description,o=n.url,c=n.image;return a.a.createElement(H,null,a.a.createElement(B,{src:c}),a.a.createElement($,null,(e=r,a.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},e))),a.a.createElement(q,null,i),a.a.createElement(T,{className:"source"},t))},R=t(33),A=t(23);function D(){var n=Object(c.a)(["\n  width: 4rem;\n  height: 4rem;\n  position: fixed;\n  top: 3rem;\n  right: 3rem;\n  border-radius: 50%;\n  background-color: white;\n  box-shadow: 0 0 4px 0 black;\n  cursor: pointer;\n  transition: .2s all ease-out;\n  justify-content: center;\n  z-index: 9999;\n\n  :hover {\n    transform: scale(1.1) translateY(-.2rem);\n  }\n\n  :active {\n    transform: translateY(0);\n  }\n\n\n  @media "," {}\n\n  @media "," {}\n\n  @media "," {}\n\n  @media "," {}\n"]);return D=function(){return n},n}var J=l.b.div(D(),p.sm,p.md,p.lg,p.xl),L=function(n){var e=n.display,t=n.clicked;return a.a.createElement(J,{onClick:t},a.a.createElement(R.a,{icon:e?A.b:A.a,size:"1x"}))};function Q(){var n=Object(c.a)(["\n  flex-direction: row;\n\n  > :first-child {\n    margin-right: 1rem;\n  }\n"]);return Q=function(){return n},n}function W(){var n=Object(c.a)(["\n  width: 10rem;\n  background-color: lightgreen;\n  padding: .5rem 1rem;\n  border: 2px solid white;\n  border-radius: 2px;\n"]);return W=function(){return n},n}function Y(){var n=Object(c.a)(["\n  width: 30rem;\n\n  > div {\n    width: 100%;\n    margin: .5rem 0;\n  }\n\n  @media "," {\n    width: 50rem;\n  }\n\n  @media "," {}\n\n  @media "," {\n  }\n"]);return Y=function(){return n},n}function F(){var n=Object(c.a)(["\n  input {\n    width: 30rem;\n    height: 3rem;\n    font-size: 1.8rem;\n    color: black;\n    padding: 0 1rem;\n  }\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-evenly;\n\n    input {\n      text-align: left;\n    }\n  }\n"]);return F=function(){return n},n}function G(){var n=Object(c.a)(["\n\n  @media "," {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n"]);return G=function(){return n},n}function K(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(4, 30, 21, .8);\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  flex-direction: column-reverse;\n\n  * {\n    color: white;\n  }\n\n  @media "," {\n    height: 11rem;\n    flex-direction: column;\n  }\n\n  @media "," {}\n\n  @media "," {}\n\n  @media "," {}\n"]);return K=function(){return n},n}var M=l.b.div(K(),p.sm,p.md,p.lg,p.xl),X=l.b.div(G(),p.sm),_=l.b.div(F(),p.sm),P=l.b.form(Y(),p.sm,p.md,p.lg),U=l.b.div(W()),V=l.b.label(Q()),Z=function(n){var e=n.submit,t=n.value,r=n.searchChanged,i=n.searchOption,o=n.searchOptionChanged;return a.a.createElement(M,null,a.a.createElement(P,{id:"search-form"},a.a.createElement(_,null,a.a.createElement("input",{type:"text",value:t,onChange:function(n){return r(n)}}),a.a.createElement(U,{onClick:function(n){return e(n)}},"Go")),a.a.createElement(X,null,a.a.createElement(V,null,a.a.createElement("input",{type:"radio",name:"searchType",value:"top",checked:"top"===i,onChange:o}),a.a.createElement("p",null,"Search Top Stories")),a.a.createElement(V,null,a.a.createElement("input",{type:"radio",name:"searchType",value:"everything",checked:"everything"===i,onChange:o}),a.a.createElement("p",null,"Search Everything")))))};function nn(){var n=Object(c.a)(["\n  margin: 5rem 0;\n\n  @media "," {}\n\n  @media "," {}\n\n  @media "," {}\n\n  @media "," {}\n"]);return nn=function(){return n},n}function en(){var n=Object(c.a)(["\n  query AllQuery($keyword: String) {\n    everything(keyword: $keyword) {\n      status\n      totalResults\n      articles{\n        source {\n          name\n        }\n        title\n        description\n        url\n        urlToImage\n      }\n    }\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n  query TopQuery($keyword: String) {\n    topHeadlines(keyword: $keyword) {\n      status\n      totalResults\n      articles{\n        source {\n          name\n        }\n        title\n        description\n        url\n        urlToImage\n      }\n    }\n  }\n"]);return tn=function(){return n},n}var rn=O()(tn()),an=O()(en()),on=l.b.div(nn(),p.sm,p.md,p.lg,p.xl),cn=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(b.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={search:!1,keyword:"",searchInput:{value:"",radio:"top"},searchOption:"top"},n.toggleSearchHandler=function(){n.setState((function(n){return{search:!n.search}}))},n.searchInputChangeHandler=function(e){var t=Object(v.a)({},n.state.searchInput);t.value=e.target.value,n.setState({searchInput:t})},n.searchSubmitHandler=function(e){e.preventDefault();var t=n.state.searchInput,r=t.value,a=t.radio;n.setState({search:!1,keyword:r,searchOption:a})},n.searchOptionChangedHandler=function(e){var t=Object(v.a)({},n.state.searchInput);t.radio=e.target.value,n.setState({searchInput:t})},n}return Object(x.a)(t,[{key:"render",value:function(){var n=this.state,e=n.search,t=n.keyword,r=n.searchInput,i=r.value,o=r.radio,c=n.searchOption,l="top"===c?"topHeadlines":"everything",u="top"===c?"top headlines":"any current articles",d=a.a.createElement(k.a,{query:"top"===c?rn:an,variables:{keyword:t}},(function(n){var e=n.loading,r=n.error,i=n.data;if(e)return a.a.createElement("h1",null,"...loading");if(r)return console.error(r),a.a.createElement("h1",null,"There was an error receiving data");if(!i[l])return a.a.createElement("h1",null,"No Data");var o=i[l],c=o.totalResults,d=o.articles;return 0===c?a.a.createElement("h1",null,'No results found for "'.concat(t,'" in ').concat(u)):d.slice(0,10).map((function(n){var e=n.source,t=(e=void 0===e?{}:e).name,r=n.title,i=n.description,o=n.url,c=n.urlToImage;return a.a.createElement(N,{key:o,source:t,title:r,description:i,url:o,image:c})}))}));return a.a.createElement(on,null,d,a.a.createElement(L,{display:e,clicked:this.toggleSearchHandler}),e?a.a.createElement(Z,{submit:this.searchSubmitHandler,value:i,searchChanged:this.searchInputChangeHandler,searchOption:o,searchOptionChanged:this.searchOptionChangedHandler}):null)}}]),t}(r.Component);var ln=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(cn,null),a.a.createElement("a",{href:"https://kyledevlinmurray.com"},"Back to Kyle's Homepage"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var un=t(38),dn=t(6),sn=new un.a({uri:"/graphql"}),mn=a.a.createElement(dn.a,{client:sn},a.a.createElement(ln,null));o.a.render(mn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.78f0c6d4.chunk.js.map