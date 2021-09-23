(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{152:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t);var r,a,c,o,i,s,u=n(0),b=n.n(u),j=n(38),l=n.n(j),d=(n(152),n(9)),p=n(6),x=n(29),O=n(4),h=n(5),f=h.a.div(r||(r=Object(O.a)(["\n  padding: 20px;\n  text-align: center;\n"]))),g=(h.a.h2(a||(a=Object(O.a)(["\n  color: #000000;\n"]))),h.a.p(c||(c=Object(O.a)(["\n  color: #000000;\n  margin: 0;\n"]))),h.a.button(o||(o=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(i||(i=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),m=h.a.input(s||(s=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #000000;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),v=n(237),k=n(14),w=n.n(k),y=n(30),C=n(24),z=n.n(C),L=n(11);function S(){return A.apply(this,arguments)}function A(){return(A=Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}z.a.defaults.baseURL="https://connections-api.herokuapp.com";var F=Object(L.b)("contacts/fetchContacts",Object(y.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),N=Object(L.b)("contacts/addContact",function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("/contacts",t);case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(L.b)("contacts/deleteContact",function(){var e=Object(y.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.delete("/contacts/".concat(t));case 2:return e.next=4,S();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=function(e){return e.contacts.items},W=function(e){return e.contacts.filter},T=function(e){var t=I(e),n=W(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},U=n(236),E=n(39),R=n(1);var V,B,J,P=function(){var e=Object(p.b)(),t=Object(p.c)(I),n=Object(u.useState)(""),r=Object(x.a)(n,2),a=r[0],c=r[1],o=Object(u.useState)(""),i=Object(x.a)(o,2),s=i[0],b=i[1];Object(u.useEffect)((function(){e(F())}),[e]);var j=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":b(r)}},l=function(){c(""),b("")};return Object(R.jsx)(f,{children:Object(R.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=Object(v.a)();if(t.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," already exists in your contacts"));e(N({id:r,name:a,number:s})),E.b.success("".concat(a," successfully added")),l()},children:[Object(R.jsx)(g,{children:Object(R.jsx)(m,{type:"text",name:"name",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j,value:a,placeholder:"Name *"})}),Object(R.jsx)(g,{children:Object(R.jsx)(m,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j,value:s,placeholder:"Phone number *"})}),Object(R.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Add contact"})]})})},D=h.a.div(V||(V=Object(O.a)(["\n  text-align: center;\n"]))),M=h.a.ul(B||(B=Object(O.a)(["\n  margin: 0;\n  padding: 0;\n  color: #4b3b40;\n"]))),Z=h.a.li(J||(J=Object(O.a)(["\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n"]))),H=n(136),$=n.n(H);var G,K,Q=function(){var e=Object(p.b)(),t=Object(p.c)(T);return Object(R.jsx)(D,{children:Object(R.jsx)(M,{children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return Object(R.jsxs)(Z,{children:[r,": ",a,Object(R.jsx)($.a,{color:"primary",onClick:function(){return function(t){e(q(t)),E.b.success("Contact deleted")}(n)},cursor:"pointer",size:"large"})]},n)}))})})},X=h.a.div(G||(G=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Y=h.a.input(K||(K=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),_=n(70);var ee,te=function(){var e=Object(p.b)(),t=Object(p.c)(W);return Object(R.jsx)(X,{children:Object(R.jsx)(Y,{type:"text",name:"filter",onChange:function(t){e(_.changeFilter(t.target.value))},value:t,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",placeholder:"Find contacts by name"})})},ne=h.a.div(ee||(ee=Object(O.a)(["\n  margin: auto;\n  max-width: 1280px;\n"])));var re,ae,ce,oe,ie,se=function(e){var t=e.children;return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"background",children:[Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{}),Object(R.jsx)("span",{})]}),Object(R.jsx)(ne,{children:t})]})},ue=h.a.div(re||(re=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),be=(h.a.h2(ae||(ae=Object(O.a)(["\n  color: #4b3b40;\n"]))),h.a.p(ce||(ce=Object(O.a)(["\n  color: #82735c;\n  margin: 0;\n"]))),h.a.div(oe||(oe=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),je=h.a.input(ie||(ie=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"]))),le=function(e){return e.auth.isLoggedIn},de=function(e){return e.auth.user.name},pe=function(e){return e.auth.isFetchingCurrentUser};z.a.defaults.baseURL="https://connections-api.herokuapp.com";var xe=function(e){z.a.defaults.headers.common.Authorization="Bearer ".concat(e)},Oe=function(){z.a.defaults.headers.common.Authorization=""},he=Object(L.b)("auth/register",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/signup",t);case 3:return r=e.sent,a=r.data,xe(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),fe=Object(L.b)("auth/login",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/login",t);case 3:return r=e.sent,a=r.data,xe(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}()),ge=Object(L.b)("auth/logout",function(){var e=Object(y.a)(w.a.mark((function e(t,n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post("/users/logout");case 3:Oe(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",n.rejectWithValue(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()),me=Object(L.b)("auth/refresh",function(){var e=Object(y.a)(w.a.mark((function e(t,n){var r,a,c,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),a=r.auth.token,c=Object(p.c)(de),null!==a){e.next=5;break}return e.abrupt("return",n.rejectWithValue());case 5:return xe(a),e.prev=6,e.next=9,z.a.get("/users/current");case 9:return o=e.sent,i=o.data,Object(E.b)("Welcome back, ".concat(c)),e.abrupt("return",i);case 15:return e.prev=15,e.t0=e.catch(6),e.abrupt("return",n.rejectWithValue(e.t0.message));case 18:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t,n){return e.apply(this,arguments)}}());var ve,ke,we,ye,Ce=function(){var e=Object(p.b)(),t=Object(u.useState)(""),n=Object(x.a)(t,2),r=n[0],a=n[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=Object(u.useState)(""),j=Object(x.a)(b,2),l=j[0],d=j[1],O=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"email":s(r);break;case"password":d(r)}},h=function(){a(""),s(""),d("")};return Object(R.jsx)(ue,{children:Object(R.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(he({name:r,email:i,password:l})),h()},children:[Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"text",name:"name",required:!0,onChange:O,value:r,placeholder:"Name *"})}),Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"email",name:"email",required:!0,onChange:O,value:i,placeholder:"Email *"})}),Object(R.jsx)(be,{children:Object(R.jsx)(je,{type:"password",name:"password",required:!0,onChange:O,value:l,placeholder:"Password *"})}),Object(R.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Register"})]})})},ze=h.a.div(ve||(ve=Object(O.a)(["\n  text-align: center;\n  padding: 20px;\n"]))),Le=(h.a.button(ke||(ke=Object(O.a)(["\n  background-color: #9db17c;\n  color: white;\n  margin-top: 20px;\n  cursor: pointer;\n"]))),h.a.div(we||(we=Object(O.a)(["\n  .wrapper {\n    background-color: #fff;\n    border-radius: 2px;\n    box-shadow: 0px 2px 1px 0px #ddd;\n    box-sizing: border-box;\n    height: 300px;\n    left: 50%;\n    margin: -150px 0 0 -150px;\n    position: absolute;\n    top: 50%;\n    width: 300px;\n  }\n"])))),Se=h.a.input(ye||(ye=Object(O.a)(["\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #777777;\n  color: #555;\n  box-sizing: border-box;\n  font-size: 18px;\n  padding: 5px 0px;\n  width: 200px;\n  margin-bottom: 15px;\n  &:focus {\n    outline: none;\n  }\n"])));var Ae,Fe,Ne,qe,Ie=function(){var e=Object(p.b)(),t=Object(u.useState)(""),n=Object(x.a)(t,2),r=n[0],a=n[1],c=Object(u.useState)(""),o=Object(x.a)(c,2),i=o[0],s=o[1],b=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"email":a(r);break;case"password":s(r)}},j=function(){a(""),s("")};return Object(R.jsx)(ze,{children:Object(R.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(fe({email:r,password:i})),j()},children:[Object(R.jsx)(Le,{children:Object(R.jsx)(Se,{type:"email",name:"email",required:!0,onChange:b,value:r,placeholder:"Email *"})}),Object(R.jsx)(Le,{children:Object(R.jsx)(Se,{type:"password",name:"password",required:!0,onChange:b,value:i,placeholder:"Password *"})}),Object(R.jsx)(U.a,{variant:"outlined",color:"primary",type:"submit",children:"Log in"})]})})},We=n(43),Te=Object(h.a)(We.b)(Ae||(Ae=Object(O.a)(["\n  &.link {\n    text-decoration: none;\n    color: white;\n    margin-right: 10px;\n    text-align: center;\n    margin-left: 20px;\n  }\n  &.activeLink {\n    font-size: 20px;\n  }\n"]))),Ue=(h.a.nav(Fe||(Fe=Object(O.a)(["\n  /* text-align: center; */\n  padding: 10px;\n  border-bottom: solid 1px black;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),h.a.div(Ne||(Ne=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n"])))),Ee=h.a.div(qe||(qe=Object(O.a)(["\n  display: flex;\n  align-items: center;\n"])));var Re=function(){var e=Object(p.c)(le);return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(Ee,{children:[!e&&Object(R.jsx)(Te,{exact:!0,to:"/",className:"link",activeClassName:"activeLink",children:"Home"}),e&&Object(R.jsx)(Te,{to:"/contacts",className:"link",activeClassName:"activeLink",children:"Contacts"})]})})};var Ve,Be,Je=function(){return Object(R.jsxs)(Ee,{children:[Object(R.jsx)(Te,{to:"/login",className:"link",activeClassName:"activeLink",children:"Login"}),Object(R.jsx)(Te,{to:"/register",className:"link",activeClassName:"activeLink",children:"Register"})]})},Pe=h.a.div(Ve||(Ve=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n"]))),De=h.a.p(Be||(Be=Object(O.a)(["\n  margin: 0;\n  margin-right: 5px;\n"]))),Me=n(143),Ze=n(140),He=n.n(Ze);var $e=function(){var e=Object(p.b)(),t=Object(p.c)(de);return Object(R.jsxs)(Pe,{children:[Object(R.jsxs)(De,{children:["Welcome, ",t,"!"]}),Object(R.jsx)(Me.a,{round:!0,size:"40",src:"https://picsum.photos/200/300"}),Object(R.jsx)(He.a,{cursor:"pointer",fontSize:"medium",style:{color:"white"},onClick:function(){return e(ge())},children:"Logout"})]})},Ge=n(238);var Ke,Qe=function(){var e=Object(p.c)(le);return Object(R.jsx)(Ge.a,{position:"sticky",className:"Appbar",children:Object(R.jsxs)(Ue,{children:[Object(R.jsx)(Re,{}),e?Object(R.jsx)($e,{}):Object(R.jsx)(Je,{})]})})},Xe=h.a.div(Ke||(Ke=Object(O.a)(["\n  text-align: center;\n  max-width: 640px;\n  margin: 20px auto;\n"])));var Ye=function(){return Object(R.jsx)(Xe,{children:"Welcome to Phonebook Application!"})},_e=n(48),et=n(71),tt=["children","redirectTo"];var nt=function(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=Object(et.a)(e,tt),c=Object(p.c)(le);return Object(R.jsx)(d.b,Object(_e.a)(Object(_e.a)({},a),{},{children:c?t:Object(R.jsx)(d.a,{to:r})}))},rt=["children","restricted","redirectTo"];var at=function(e){var t=e.children,n=e.restricted,r=void 0!==n&&n,a=e.redirectTo,c=void 0===a?"/":a,o=Object(et.a)(e,rt),i=Object(p.c)(le)&&r;return Object(R.jsx)(d.b,Object(_e.a)(Object(_e.a)({},o),{},{children:i?Object(R.jsx)(d.a,{to:c}):t}))};var ct,ot,it,st,ut=function(){var e=Object(p.c)(I),t=Object(p.b)(),n=Object(p.c)(pe);return Object(u.useEffect)((function(){t(me())}),[t]),Object(R.jsx)(se,{children:!n&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(E.a,{}),Object(R.jsx)(Qe,{}),Object(R.jsx)(u.Suspense,{fallback:Object(R.jsx)("div",{children:"Loading..."}),children:Object(R.jsxs)(d.d,{children:[Object(R.jsx)(at,{exact:!0,path:"/",children:Object(R.jsx)(Ye,{})}),Object(R.jsx)(at,{path:"/register",restricted:!0,children:Object(R.jsx)(Ce,{})}),Object(R.jsx)(at,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(R.jsx)(Ie,{})}),Object(R.jsxs)(nt,{path:"/contacts",redirectTo:"/login",children:[Object(R.jsx)(P,{}),e.length>0&&Object(R.jsxs)(R.Fragment,{children:[e.length>1&&Object(R.jsx)(te,{}),Object(R.jsx)(Q,{})]})]})]})})]})})},bt=n(144),jt=n(8),lt=n(16),dt=Object(L.c)([],(ct={},Object(jt.a)(ct,F.fulfilled,(function(e,t){return t.payload})),Object(jt.a)(ct,N.fulfilled,(function(e,t){return t.payload})),Object(jt.a)(ct,q.fulfilled,(function(e,t){return t.payload})),ct)),pt=Object(L.c)(!1,(ot={},Object(jt.a)(ot,F.pending,(function(){return!0})),Object(jt.a)(ot,F.fulfilled,(function(){return!1})),Object(jt.a)(ot,F.rejected,(function(){return!1})),ot)),xt=Object(L.c)(null,(it={},Object(jt.a)(it,F.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,F.fulfilled,(function(){return null})),Object(jt.a)(it,N.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,N.pending,(function(){return null})),Object(jt.a)(it,q.rejected,(function(e,t){return t.payload})),Object(jt.a)(it,q.pending,(function(){return null})),it)),Ot=Object(L.c)("",Object(jt.a)({},_.changeFilter,(function(e,t){return t.payload}))),ht=Object(lt.b)({items:dt,isLoading:pt,filter:Ot,error:xt}),ft={user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},gt=Object(L.d)({name:"auth",initialState:ft,extraReducers:(st={},Object(jt.a)(st,he.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(jt.a)(st,fe.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(jt.a)(st,ge.fulfilled,(function(e){e.user=ft.user,e.token=ft.token,e.isLoggedIn=ft.isLoggedIn})),Object(jt.a)(st,me.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(jt.a)(st,me.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(jt.a)(st,me.rejected,(function(e){e.isFetchingCurrentUser=!1})),st)}).reducer,mt=n(36),vt=n(141),kt=n.n(vt),wt=Object(bt.a)(Object(L.e)({serializableCheck:{ignoredActions:[mt.a,mt.f,mt.b,mt.c,mt.d,mt.e]}})),yt={key:"auth",storage:kt.a,whitelist:["token"]},Ct=Object(L.a)({reducer:{contacts:ht,auth:Object(mt.g)(yt,gt)},middleware:wt,devTools:!1}),zt=Object(mt.h)(Ct),Lt=n(142);l.a.render(Object(R.jsx)(b.a.StrictMode,{children:Object(R.jsx)(p.a,{store:Ct,children:Object(R.jsx)(Lt.a,{loading:null,persistor:zt,children:Object(R.jsx)(We.a,{children:Object(R.jsx)(ut,{})})})})}),document.getElementById("root"))},70:function(e,t){}},[[218,1,2]]]);
//# sourceMappingURL=main.8ac692a5.chunk.js.map