(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(3),n=c.n(o),s=c(6),a=c(4),d=c(5),r=c(8),l=c(7),i=c(1),u=c.n(i),p=(c(13),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var o=arguments.length,n=new Array(o),d=0;d<o;d++)n[d]=arguments[d];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:[]},e.itemHandler=function(t){e.setState((function(c){return e.state.selectedGood.includes(t)?{selectedGood:c.selectedGood.filter((function(e){return e!==t}))}:{selectedGood:[].concat(Object(s.a)(c.selectedGood),[t])}}))},e.generateTitle=function(){switch(e.state.selectedGood.length){case 0:return"No goods selected";case 1:return"".concat(e.state.selectedGood[0]," is selected");case 2:return"".concat(e.state.selectedGood[0]," and ").concat(e.state.selectedGood[1]," are selected");default:return"".concat(e.state.selectedGood.slice(0,-1).join(", ")," and ").concat(e.state.selectedGood.slice(-1)," are selected")}},e.handleDelete=function(t){e.setState((function(e){return{selectedGood:e.selectedGood.filter((function(e){return e!==t}))}}))},e}return Object(d.a)(c,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("div",{className:"App__title",children:Object(p.jsxs)("h1",{className:"App__title__goods",children:["Selected good:"," ",this.generateTitle()," ",this.state.selectedGood&&Object(p.jsx)("button",{className:"clear",type:"button",onClick:function(){return e.setState({selectedGood:""})},children:"CLEAR"})]})}),Object(p.jsx)("div",{className:"App__goods-container",children:j.map((function(t){return Object(p.jsxs)("div",{className:"App__goods-container__good",children:[Object(p.jsx)("div",{className:"App__goods-container__good-item",children:t}),Object(p.jsx)("button",{className:"btn",type:"button",onClick:function(){return e.itemHandler(t)},children:e.state.selectedGood.includes(t)?"Remove":"Add"})]},t)}))})]})}}]),c}(u.a.Component),b=h;n.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ce8a5560.chunk.js.map