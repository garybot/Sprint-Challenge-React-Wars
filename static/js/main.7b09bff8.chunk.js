(window.webpackJsonpstarwars=window.webpackJsonpstarwars||[]).push([[0],{26:function(e,n,t){e.exports=t(54)},31:function(e,n,t){},33:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(19),u=t.n(c),o=(t(31),t(4)),i=t.n(o),l=t(20),s=t(8),f=(t(33),t(21)),p=t.n(f),m=t(2),d=t(3);function b(){var e=Object(m.a)(["\n  width: 45%;\n"]);return b=function(){return e},e}function h(){var e=Object(m.a)(["\n  width: 100%;\n  text-align: center;\n"]);return h=function(){return e},e}function w(){var e=Object(m.a)(["\n  margin: 5px auto;\n  width: 350px;\n  border-radius: 8px;\n  background-color: rgba(255,255,255,0.5);\n  display: flex;\n  flex-flow: row wrap;\n"]);return w=function(){return e},e}var v=d.a.article(w()),g=d.a.h2(h()),x=d.a.span(b());function E(e){return r.a.createElement(v,null,r.a.createElement(g,null,e.character.name),r.a.createElement(x,null,"Height: ",e.character.height),r.a.createElement(x,null,"Weight: ",e.character.mass))}function j(){var e=Object(m.a)(["\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;  \n"]);return j=function(){return e},e}var k=d.a.div(j());function O(e){return r.a.createElement(k,null,"      ",e.characters.map((function(e){return r.a.createElement(E,{character:e,key:e.name})})))}function y(){var e=Object(m.a)(["\n  background-color: rgba(255,255,255,0.5);\n  border: 2px solid black;\n  color: black;\n  margin: 0 10px;\n  font-size: 1.2em;\n  border-radius: 3px;\n"]);return y=function(){return e},e}var N=d.a.button(y());function C(e){return r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){e.func("left")}},"\u2190 Prev"),r.a.createElement(N,{onClick:function(){e.func("right")}},"Next \u2192"))}var H=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(1),o=Object(s.a)(u,2),f=o[0],m=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://swapi.co/api/people/?page=".concat(f));case 3:n=e.sent,c(n.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"Header"},"React Wars"),r.a.createElement(C,{func:function(e){"left"===e&&f>1?m(f-1):"right"===e&&f<9&&m(f+1)}}),r.a.createElement(O,{characters:t}))};u.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7b09bff8.chunk.js.map