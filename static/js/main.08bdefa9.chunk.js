(this.webpackJsonpcourses_react=this.webpackJsonpcourses_react||[]).push([[0],{33:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},41:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=(a(35),a(12)),r=a.n(o),l=(a(39),a(40),a(41),a(69)),s=a(79),i=a(80),u=a(10),m=a(68),d=function(){return Object(n.useEffect)((function(){document.title="Home"})),c.a.createElement("div",null,c.a.createElement(m.a,{className:"text-center bg-success"},c.a.createElement("h1",null,"This is my React Application"),c.a.createElement(l.a,null,c.a.createElement("a",{href:"/add-course",className:"btn-get-started"},"Get Started"))))},E=a(70),p=a(71),f=a(72),g=a(73),b=a(74),h=a(17),v=a.n(h),C="http://localhost/8081",w=function(e){var t=e.course,a=e.update;return c.a.createElement(E.a,{className:"text-center"},c.a.createElement(p.a,null,c.a.createElement(f.a,{className:"font-weight-bold"},t.title),c.a.createElement(g.a,null,t.description)),c.a.createElement(l.a,{className:"text-center"},c.a.createElement(b.a,{color:"danger",onClick:function(){var e;e=t.id,v.a.delete("".concat(C,"/Courses/").concat(e)).then((function(t){u.b.success("Course has been deleted"),a(e)}),(function(e){u.b.success("Server Down")}))}},"Delete"),c.a.createElement(b.a,{color:"warning m1-8"},"Update")))},N=a(18),x=function(){Object(n.useEffect)((function(){document.title="All Courses"}),[]);Object(n.useEffect)((function(){v.a.get("".concat(C,"/getCourses")).then((function(e){console.log(e),console.log(e.data),u.b.success("Courses has been loaded",{position:"bottom-center"}),o(e.data)}),(function(e){console.log("hi"),console.log(e),u.b.error("Server down",{position:"bottom-center"})}))}),[]);var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],o=t[1],r=function(e){o(a.filter((function(t){return t.id!=e})))};return c.a.createElement("div",null,c.a.createElement("h1",null,"All Courses"),c.a.createElement("p",null,"List of Courses are as follows:"),a.length>0?a.map((function(e){return c.a.createElement(w,{key:e.id,course:e,update:r})})):"No Courses")},j=a(15),O=a(75),y=a(76),A=a(77),S=function(){Object(n.useEffect)((function(){document.title="Add Course"}));var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],o=t[1],r=function(e){v.a.post("".concat(C,"/Courses")).then((function(e){console.log(e),u.b.success("Course has been added"),o({id:"",title:"",description:""})}),(function(e){console.log(e),u.b.error("Server Down",{position:"bottom-center"}),o({id:"",title:"",description:""})}))};return c.a.createElement(n.Fragment,null,c.a.createElement("h1",{className:"text-center"},"Fill Course Detail"),c.a.createElement(O.a,{onSubmit:function(e){console.log(a),r(a),e.preventDefault()}},c.a.createElement(y.a,null,c.a.createElement("label",{for:"courseId"},"Course Id "),c.a.createElement(A.a,{type:"text",placeholder:"Enter Course Id",name:"courseid",id:"courseId",required:!0,onChange:function(e){o(Object(j.a)(Object(j.a)({},a),{},{id:e.target.value}))}})),c.a.createElement(y.a,null,c.a.createElement("label",{for:"title"},"Title"),c.a.createElement(A.a,{type:"text",placeholder:"Enter title",required:!0,name:"title",id:"title",onChange:function(e){o(Object(j.a)(Object(j.a)({},a),{},{title:e.target.value}))}})),c.a.createElement(y.a,null,c.a.createElement("label",{for:"description"},"Description "),c.a.createElement(A.a,{type:"textarea",placeholder:"Enter description",required:!0,name:"description",id:"description",style:{height:100},onChange:function(e){o(Object(j.a)(Object(j.a)({},a),{},{description:e.target.value}))}})),c.a.createElement(l.a,{className:"text-center"},c.a.createElement(b.a,{type:"submit",color:"success"},"Add Course"),c.a.createElement(b.a,{type:"reset",color:"warning ml-2"},"Clear"))))};var k=function(){return c.a.createElement("div",null,c.a.createElement(E.a,{className:"my-3 bg-warning"},c.a.createElement(p.a,null,c.a.createElement("h1",{className:"text-center my-3"},"Welcome to Courses Application"))))},D=a(78),I=a(14),_=function(){return c.a.createElement(D.a,null,c.a.createElement(I.b,{activeClassName:"menu_active",exact:!0,className:"list-group-item list-group-item-action",tag:"a",to:"/courses_react",action:!0},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)")),c.a.createElement(I.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/add-course",action:!0},"Add Course"),c.a.createElement(I.b,{className:"list-group-item list-group-item-action",tag:"a",to:"/view-courses",action:!0},"View Courses"),c.a.createElement(I.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",action:!0},"About"),c.a.createElement(I.b,{className:"list-group-item list-group-item-action",tag:"a",to:"#!",action:!0},"Contact"))},q=a(6);var W=function(){return c.a.createElement(I.a,null,c.a.createElement("div",null,c.a.createElement(u.a,null),c.a.createElement(k,null),c.a.createElement(l.a,null,c.a.createElement(s.a,null,c.a.createElement(i.a,{md:4},c.a.createElement(_,null)),c.a.createElement(i.a,{md:8},c.a.createElement(q.a,{path:"/courses_react",component:d,exact:!0}),c.a.createElement(q.a,{path:"/add-course",component:S,exact:!0}),c.a.createElement(q.a,{path:"/view-courses",component:x,exact:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(64);r.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.08bdefa9.chunk.js.map