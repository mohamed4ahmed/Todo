(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(7),r=n.n(c),l=(n(14),n(2)),d=n(3),o=n(5),h=n(4),u=(n(15),function(e){var t=e.items,n=e.handelDelete,s=t.length?t.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"name",children:e.name}),Object(a.jsx)("span",{className:"age",children:e.age}),Object(a.jsx)("span",{className:"action icon",onClick:function(){return n(e.id)},children:"\xd7"})]},e.id)})):Object(a.jsx)("p",{children:"There Is No Items To Show"});return Object(a.jsxs)("div",{className:"ListItems",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"name title",children:"Name"}),Object(a.jsx)("span",{className:"age title",children:"Age"}),Object(a.jsx)("span",{className:"action title",children:"Action"})]}),s]})}),j=n(8),m=(n(16),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={name:"",age:""},e.handleChange=function(t){e.setState(Object(j.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),""===t.target.name.value||""===t.target.age.value)return!1;e.props.addItem(e.state),e.setState({name:"",age:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter your name",id:"name",onChange:this.handleChange,value:this.state.name}),Object(a.jsx)("input",{type:"number",placeholder:"Enter your age",id:"age",onChange:this.handleChange,value:this.state.age}),Object(a.jsx)("input",{type:"submit",value:"Add"})]})})}}]),n}(s.Component)),b=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={items:[{id:1,name:"Mohamed",age:25},{id:2,name:"Ahmed",age:26},{id:3,name:"Abdelsalam",age:27}]},e.handelDelete=function(t){var n=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:n})},e.addItem=function(t){t.id=Math.random();var n=e.state.items;n.push(t),e.setState({items:n})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App container",children:[Object(a.jsx)("h1",{className:"text-center",children:"Todo List"}),Object(a.jsx)(u,{items:this.state.items,handelDelete:this.handelDelete}),Object(a.jsx)(m,{addItem:this.addItem})]})}}]),n}(s.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.e4821648.chunk.js.map