(this.webpackJsonpconcentration=this.webpackJsonpconcentration||[]).push([[0],{70:function(e,a,t){e.exports={App:"App_App__2cf9q","App-logo":"App_App-logo__2p6QD","App-logo-spin":"App_App-logo-spin__3tI7N","App-header":"App_App-header__3u9Ox","App-link":"App_App-link__jhVBd"}},84:function(e,a,t){e.exports=t(94)},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),c=t(15),i=t(41),s=t(31),m=t(64),f=t(65),d=t(72),u=t(147),p=t(71),h=t(50),g=t(34),b=t(11),E=t(124),C=t(74),y=t(150),v=t(39),S=t(128),k=t(129),w=Object(E.a)((function(e){return{Box:{cursor:"pointer",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",textDecoration:"none"},Icon:{fontSize:e.typography.h1.fontSize,color:e.palette.primary.main}}}));function x(){var e=w(),a=Object(g.f)(),t=r.a.useState(!0),n=Object(b.a)(t,2),l=n[0],o=n[1],c=r.a.useState(!1),i=Object(b.a)(c,2),s=i[0],m=i[1];return r.a.useEffect((function(){setTimeout((function(){m(!0)}),5e3)}),[m]),r.a.createElement(C.a,{in:l,timeout:2e3},r.a.createElement(y.a,{className:e.Box,p:2,onClick:function(e){return function(e){e.preventDefault(),o(!l),setTimeout((function(){a.push("/game")}),2e3)}(e)}},r.a.createElement(v.a,{variant:"button",style:{visibility:"hidden"}},"Click anywhere to continue"),r.a.createElement(S.a,{in:!0,timeout:4e3},r.a.createElement(k.a,{className:"".concat(e.Icon," fas fa-bullseye animated logo")})),r.a.createElement(C.a,{in:s,timeout:2e3},r.a.createElement(v.a,{variant:"button",color:"textPrimary"},"Click anywhere to continue"))))}var N=t(130),B=t(131),O=t(132),j=t(133),T=t(152),M=t(134),L=t(135),I=t(136),D=Object(E.a)((function(e){return{Selected:{background:e.palette.primary.main,color:e.palette.common.white,"&:hover":{background:e.palette.primary.main,color:e.palette.common.white}},Avatar:{width:e.spacing(6),height:e.spacing(6),background:e.palette.grey[300]}}}));function A(e){var a=e.cardType,t=e.cardTypes,n=e.random,l=e.onClickSelectCard,o=e.handleDialogClose,c=D();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{maxHeight:"500px"}},r.a.createElement(B.a,null,t.map((function(e){return r.a.createElement(O.a,{key:e.id,button:!0,className:null!==a&&a.index===e.index||null===a&&0===e.index?c.Selected:"",onMouseDown:o,onClick:function(){return l(e)}},r.a.createElement(j.a,null,r.a.createElement(T.a,{alt:e.title,className:c.Avatar,variant:"rounded"},r.a.createElement(k.a,{className:"Brands"===e.title?"fab ".concat(e.icons[n]):"fas ".concat(e.icons[n]),style:{width:"auto"},color:"primary"}))),r.a.createElement(M.a,{primary:e.title,variant:"h1"}))})))),r.a.createElement(L.a,null,r.a.createElement(I.a,{onClick:o,color:"inherit"},"Cancel"),r.a.createElement(I.a,{onClick:function(){return l(t[n])},color:"primary"},"Random")))}var F=t(151),z=Object(E.a)((function(e){return{Selected:{background:e.palette.primary.main,color:e.palette.common.white,"&:hover":{background:e.palette.primary.main,color:e.palette.common.white}},Container:{display:"flex",alignItems:"center",justifyContent:"space-between"},Button:{color:e.palette.error.main}}}));function G(e){var a=e.leaderboard,t=e.handleDialogClose,n=e.onClickClearLeaderboard,l=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(B.a,null,a.map((function(e,t){return r.a.createElement(O.a,{key:e.id,className:e.id===a[0].id?"".concat(l.Selected," ").concat(l.Container):l.Container,divider:!0},r.a.createElement("div",{className:l.Container,style:{justifyContent:"stretch"}},r.a.createElement(v.a,{variant:"h6",color:"textSecondary",style:{marginRight:"0.5rem",fontWeight:"normal"}},"".concat(t+1,")")),r.a.createElement(F.a,{smUp:!0},r.a.createElement(v.a,{variant:"h6"},e.name.length>5?function(e){var a=e.split("").slice(0,5).join("");return"".concat(a,"...")}(e.name):e.name)),r.a.createElement(F.a,{xsDown:!0},r.a.createElement(v.a,{variant:"h6"},e.name))),r.a.createElement(v.a,{variant:"h6",style:{marginLeft:"2.25rem"}},e.time,"s"))})))),r.a.createElement(L.a,null,r.a.createElement(I.a,{onClick:t,color:"inherit"},"Cancel"),r.a.createElement(I.a,{className:l.Button,onMouseDown:t,onClick:function(){return n()},disabled:a.length<=0},"Clear")))}var _=t(137),W=Object(E.a)((function(e){return{Button:{color:e.palette.error.main}}}));function q(e){var a=e.handleDialogClose,t=W();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(_.a,{id:"alertDescription"},"Are you sure you want to stop the game?")),r.a.createElement(L.a,null,r.a.createElement(I.a,{onClick:a,color:"inherit"},"No"),r.a.createElement(I.a,{className:t.Button,onMouseDown:a,onClick:function(){window.location.reload(!1)}},"Yes")))}var H=[{id:Math.random(),title:"Animals",icons:["fa-cat","fa-cat","fa-dog","fa-dog","fa-hippo","fa-hippo","fa-fish","fa-fish","fa-horse","fa-horse","fa-dove","fa-dove","fa-frog","fa-frog","fa-crow","fa-crow"],index:0},{id:Math.random(),title:"Brands",icons:["fa-apple","fa-apple","fa-amazon","fa-amazon","fa-facebook-f","fa-facebook-f","fa-behance","fa-behance","fa-react","fa-react","fa-js","fa-js","fa-github","fa-github","fa-google","fa-google"],index:1},{id:Math.random(),title:"Buildings",icons:["fa-campground","fa-campground","fa-church","fa-church","fa-hospital","fa-hospital","fa-igloo","fa-igloo","fa-industry","fa-industry","fa-monument","fa-monument","fa-mosque","fa-mosque","fa-vihara","fa-vihara"],index:2},{id:Math.random(),title:"Construction",icons:["fa-brush","fa-brush","fa-drafting-compass","fa-drafting-compass","fa-hammer","fa-hammer","fa-hard-hat","fa-hard-hat","fa-paint-roller","fa-paint-roller","fa-screwdriver","fa-screwdriver","fa-wrench","fa-wrench","fa-ruler","fa-ruler"],index:3},{id:Math.random(),title:"Currency",icons:["fa-dollar-sign","fa-dollar-sign","fa-euro-sign","fa-euro-sign","fa-pound-sign","fa-pound-sign","fa-yen-sign","fa-yen-sign","fa-won-sign","fa-won-sign","fa-rupee-sign","fa-rupee-sign","fa-tenge","fa-tenge","fa-ruble-sign","fa-ruble-sign"],index:4},{id:Math.random(),title:"Emoji",icons:["fa-grin","fa-grin","fa-angry","fa-angry","fa-dizzy","fa-dizzy","fa-flushed","fa-flushed","fa-grimace","fa-grimace","fa-grin-beam","fa-grin-beam","fa-grin-hearts","fa-grin-hearts","fa-grin-tongue-squint","fa-grin-tongue-squint"],index:5},{id:Math.random(),title:"Food",icons:["fa-bacon","fa-bacon","fa-carrot","fa-carrot","fa-drumstick-bite","fa-drumstick-bite","fa-egg","fa-egg","fa-hamburger","fa-hamburger","fa-hotdog","fa-hotdog","fa-ice-cream","fa-ice-cream","fa-pizza-slice","fa-pizza-slice"],index:6},{id:Math.random(),title:"Maths",icons:["fa-divide","fa-divide","fa-equals","fa-equals","fa-infinity","fa-infinity","fa-minus","fa-minus","fa-percentage","fa-percentage","fa-plus","fa-plus","fa-times","fa-times","fa-square-root-alt","fa-square-root-alt"],index:7},{id:Math.random(),title:"Sports",icons:["fa-baseball-ball","fa-baseball-ball","fa-basketball-ball","fa-basketball-ball","fa-bowling-ball","fa-bowling-ball","fa-football-ball","fa-football-ball","fa-table-tennis","fa-table-tennis","fa-volleyball-ball","fa-volleyball-ball","fa-futbol","fa-futbol","fa-golf-ball","fa-golf-ball"],index:8},{id:Math.random(),title:"Vehicles",icons:["fa-bus","fa-bus","fa-car","fa-car","fa-subway","fa-subway","fa-ship","fa-ship","fa-taxi","fa-taxi","fa-train","fa-train","fa-wheelchair","fa-wheelchair","fa-bicycle","fa-bicycle"],index:9}],J=t(138),R=t(139),V=t(153),Y=t(142),P=t(143),U=t(144),K=Object(E.a)((function(e){return{AppBar:{position:"relative",zIndex:10,background:e.palette.background.default},Toolbar:{display:"flex",justifyContent:"space-between"},Icon:{width:"100%"},Orange:{color:"#F39C12"},Yellow:{color:"#F1C40F"},Teal:{color:"#1ABC9C"},Red:{color:"#E74C3C"},Button:{color:e.palette.error.main}}}));function Q(e){var a=e.cardType,t=e.gameState,n=e.leaderboard,l=e.onClickSelectCard,o=e.handleGetSeconds,c=e.onClickClearLeaderboard,i=K(),s=r.a.useState(!1),m=Object(b.a)(s,2),f=m[0],d=m[1],u=r.a.useState(null),p=Object(b.a)(u,2),h=p[0],g=p[1],E=r.a.useState(null),C=Object(b.a)(E,2),y=C[0],S=C[1],w=r.a.useState(!1),x=Object(b.a)(w,2),N=x[0],B=x[1],O=r.a.useState(0),j=Object(b.a)(O,2),T=j[0],M=j[1],L=function(e){d(!0),g(e)},D=function(){d(!1),S(null)},F=Math.floor(Math.random()*Math.floor(15));return r.a.useEffect((function(){var e,n;return"Started"!==t&&(n=setInterval((function(){var e=Math.floor(Math.random()*Math.floor(15));S((function(){return null===a?"fas ".concat(H[0].icons[e]):"Brands"===a.title?"fab ".concat(a.icons[e]):"fas ".concat(a.icons[e])}))}),null===y?50:5e3)),"Started"===t?setTimeout((function(){B(!0)}),5e3):"Stop"===t&&setTimeout((function(){B(!1),o(T)}),0),!0===N&&(e=setInterval((function(){M((function(e){return e+1}))}),1e3)),function(){clearInterval(n),clearInterval(e)}}),[t,S,a,F,y,N,M,T,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:i.AppBar,color:"transparent",position:"static",variant:"outlined",square:!0},r.a.createElement(R.a,{className:i.Toolbar},"Started"===t||"Stop"===t?r.a.createElement(v.a,{color:"primary",variant:"h6"},T,r.a.createElement("span",null,"s")):r.a.createElement(V.a,{title:"Change Card Type",placement:"right"},r.a.createElement("span",null,r.a.createElement(Y.a,{"aria-label":"Change Card Type",color:"primary",variant:"text",edge:"start",onClick:function(){return L("Edit")}},r.a.createElement(k.a,{className:y,style:{width:"auto"},color:"primary"})))),r.a.createElement(I.a,{"aria-label":"Logo",color:"inherit",disableFocusRipple:!0,size:"large",variant:"text"},r.a.createElement("span",{className:i.Orange},"Con"),r.a.createElement("span",{className:i.Yellow},"cen"),r.a.createElement("span",{className:i.Teal},"tra"),r.a.createElement("span",{className:i.Red},"tion")),r.a.createElement(V.a,{title:"Started"===t||"Stop"===t?"Stop Game":"Leaderboard",placement:"left"},r.a.createElement("span",null,"Started"===t||"Stop"===t?r.a.createElement(Y.a,{"aria-label":"Stop Game",className:i.Button,variant:"text",edge:"end",onClick:function(){return L("Stop")}},r.a.createElement(k.a,{className:"".concat(i.Icon," fas fa-ban")})):r.a.createElement(Y.a,{"aria-label":"Leaderboard",color:"secondary",variant:"text",edge:"end",onClick:function(){return L("Leaderboard")}},r.a.createElement(k.a,{className:"".concat(i.Icon," fas fa-trophy")})))))),r.a.createElement(P.a,{open:f,onClose:D,"aria-labelledby":"dialogTitle"},r.a.createElement(U.a,{id:"dialogTitle"},"Edit"===h?"Change Card Type":"Leaderboard"===h?"Leaderboard":"Stop"===h?"Stop Game":""),"Edit"===h?r.a.createElement(A,{cardType:a,cardTypes:H,random:Math.floor(Math.random()*Math.floor(9)),onClickSelectCard:l,handleDialogClose:D}):"Leaderboard"===h?r.a.createElement(G,{leaderboard:n,handleDialogClose:D,onClickClearLeaderboard:c}):"Stop"===h?r.a.createElement(q,{leaderboard:n,handleDialogClose:D,onClickClearLeaderboard:c}):""))}var X=t(95),Z=t(75),$=t(145),ee=t(146),ae=t(149),te=Object(E.a)((function(e){return{Backdrop:{zIndex:"1"},Countdown:{height:[["100%"],"!important"],display:"flex",alignItems:"center",justifyContent:"center"},CountdownHeader:{fontWeight:"500",fontSize:"7.5rem"},DispNone:{display:"none"},Disp:{display:""},Hidden:{visibility:"hidden"},Visible:{visibility:"visible"},Button:{color:e.palette.primary.main,boxShadow:e.shadows[0],"&:hover":{boxShadow:e.shadows[0]}},ButtonSmall:{padding:e.spacing(2.5,1)},ButtonLarge:{padding:e.spacing(4,1)},Icon:{width:"100%"},Close:{"& span":{visibility:"hidden"}},Open:{"& span":{visibility:"visible"}},Match:{backgroundColor:e.palette.success.main,color:e.palette.common.white,"&:hover":{backgroundColor:e.palette.success.main,color:e.palette.common.white}},Wrong:{backgroundColor:e.palette.error.main,color:e.palette.common.white,"&:hover":{backgroundColor:e.palette.error.main,color:e.palette.common.white}}}}));function ne(e){var a=e.cardType,t=e.handleGame,n=e.onClickEnterName,l=te(),o=r.a.useState(!0),c=Object(b.a)(o,2),i=c[0],s=c[1],m=r.a.useState(5),f=Object(b.a)(m,2),d=f[0],u=f[1],p=[],h=[],g=null===a?["fa-cat","fa-cat","fa-dog","fa-dog","fa-hippo","fa-hippo","fa-fish","fa-fish","fa-horse","fa-horse","fa-dove","fa-dove","fa-frog","fa-frog","fa-crow","fa-crow"]:a.icons,E=function(e,a,t){if(e.preventDefault(),p.length<=1){var n=document.querySelectorAll(".Card")[a-1],r=n.firstChild,o=r.classList;if(!o.contains(l.Open)&&!o.contains(l.Match)&&(r.classList.remove(l.Close),r.classList.add(l.Open),p.push(n),p.length>1)){var c=p[0].firstChild;c.firstChild.firstChild.classList.contains(t)?(r.classList.add(l.Match),c.classList.add(l.Match),h.push(c),h.push(r),p=[]):(r.classList.add(l.Wrong),c.classList.add(l.Wrong),setTimeout((function(){r.classList.remove(l.Open,l.Wrong),c.classList.remove(l.Open,l.Wrong),r.classList.add(l.Close),c.classList.add(l.Close),p=[]}),500))}}};r.a.useEffect((function(){var e;return e=setInterval((function(){16===h.length&&(clearInterval(e),t("Stop"),W("Name"))}),500),function(){return clearInterval(e)}}),[h,t]);var w=r.a.useState(!1),x=Object(b.a)(w,2),B=x[0],O=x[1],j=r.a.useState(null),T=Object(b.a)(j,2),M=T[0],D=T[1],A=r.a.useState(""),z=Object(b.a)(A,2),G=z[0],_=z[1],W=function(e){O(!0),D(e)},q=function(e){O(!1),"Name"===e&&(t(""),s(!0))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{className:l.Backdrop,open:i},r.a.createElement(Z.a,{variant:"outlined"},r.a.createElement(y.a,{p:6},r.a.createElement(I.a,{"aria-label":"Start",color:"primary",size:"large",variant:"contained",onClick:function(){return function(){s(!1),W("Countdown");var e=0;setTimeout((function(){t("Started")}),750);var a=setInterval((function(){u(--d),e=++e,d<=0&&(clearInterval(a),setTimeout((function(){q()}),750))}),1e3)}()}},"Start Game")))),r.a.createElement(C.a,{in:!0!==i,timeout:2e3},r.a.createElement(y.a,{className:!0===i?l.Hidden:l.Visible,m:2},r.a.createElement($.a,{maxWidth:"sm",disableGutters:!0},r.a.createElement(ee.a,{container:!0,spacing:1,variant:"outlined",alignContent:"center",alignItems:"center"},function(e){for(var a,t,n=e.length;0!==n;)t=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[t],e[t]=a;return e}(g).map((function(e,t){return r.a.createElement(ee.a,{className:"Card",key:Math.random(),item:!0,xs:3},r.a.createElement(F.a,{smUp:!0},r.a.createElement(I.a,{className:"".concat(l.Button," ").concat(l.ButtonSmall," ").concat(l.Close),variant:"contained",size:"large",fullWidth:!0,onMouseDown:function(a){return E(a,t+1,e)}},r.a.createElement(k.a,{className:null===a?"fas ".concat(e," ").concat(l.Icon):"Brands"===a.title?"fab ".concat(e," ").concat(l.Icon):"fas ".concat(e," ").concat(l.Icon),style:{fontSize:"2.25rem"}}))),r.a.createElement(F.a,{xsDown:!0},r.a.createElement(I.a,{className:"".concat(l.Button," ").concat(l.ButtonLarge," ").concat(l.Close),variant:"contained",size:"large",fullWidth:!0,onMouseDown:function(a){return E(a,t+1,e)}},r.a.createElement(k.a,{className:null===a?"fas ".concat(e," ").concat(l.Icon):"Brands"===a.title?"fab ".concat(e," ").concat(l.Icon):"fas ".concat(e," ").concat(l.Icon),style:{fontSize:"3.375rem"}}))))})))))),r.a.createElement(P.a,{open:B,fullScreen:"Name"!==M,"aria-labelledby":"dialogTitle",TransitionComponent:C.a,transitionDuration:1e3},"Name"===M?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{maxHeight:"500px"}},r.a.createElement(v.a,{color:"secondary",variant:"h4"},"Congratulations"),r.a.createElement(v.a,{color:"textPrimary",variant:"body1"},"You have set a new time"),r.a.createElement(y.a,{pt:2}),r.a.createElement(ae.a,{margin:"dense",id:"name",label:"Enter Name",type:"text",onChange:function(e){return _(e.target.value)},onKeyDown:function(e){return function(e){G.length>18&&("Backspace"===e.key||"Delete"===e.key?(_(""),e.target.value=""):e.target.value="Limit of 18 Characters reached.")}(e)},value:G,placeholder:'Try "John"',variant:"outlined",fullWidth:!0})),r.a.createElement(L.a,null,r.a.createElement(I.a,{onClick:function(){return q("Name")},color:"inherit"},"Cancel"),r.a.createElement(I.a,{onClick:function(){q("Name"),n(G)},color:"primary"},"Submit"))):"Countdown"===M?r.a.createElement(N.a,{className:l.Countdown},["#3498DB","#F39C12","#F1C40F","#1ABC9C","#E74C3C","#3498DB"].map((function(e,a){return r.a.createElement(S.a,{key:a,in:d===-1*(a-5),timeout:1e3},r.a.createElement(v.a,{className:"".concat(l.CountdownHeader," ").concat(d===-1*(a-5)?l.Disp:l.DispNone),variant:"h1",style:{color:e}},0===d?"GO":d))}))):""))}var re=t(148),le=t(70),oe=t.n(le),ce=Object(p.a)({palette:{primary:{light:"#85C1E9",main:"#3498DB",dark:"#2874A6"},secondary:{light:"#F7DC6F",main:"#F1C40F",dark:"#B7950B"},success:{light:"#82E0AA",main:"#2ECC71",dark:"#239B56"},error:{light:"#F1948A",main:"#E74C3C",dark:"#B03A2E"}}}),ie=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(f.a)(a).call(this,e))).handleGame=function(e){console.log(e),t.setState({gameState:e})},t.handleClickSelectCard=function(e){t.setState({cardType:e})},t.handleGetSeconds=function(e){t.setState({gameTime:e})},t.handleClickEnterName=function(e){if(""!==e){var a=t.state.gameTime,n=Object(c.a)(t.state.leaderboard),r={id:Math.random(),name:e,time:a};n.push(r),n.sort((function(e,a){return parseFloat(e.time)-parseFloat(a.time)})),localStorage.setItem("Leaderboard",JSON.stringify(n)),t.setState({cardType:null,gameState:"",gameTime:null,leaderboard:n})}},t.handleClickClearLeaderboard=function(){localStorage.removeItem("Leaderboard"),t.setState({leaderboard:[]})},t.state={cardType:null,gameState:"",gameTime:null,leaderboard:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("Leaderboard")||"[]");this.setState({leaderboard:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null),r.a.createElement(re.a,{theme:ce},r.a.createElement(h.a,null,r.a.createElement($.a,{className:oe.a.Container,maxWidth:"md",disableGutters:!0},r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/game"},r.a.createElement(C.a,{in:!0,timeout:2e3},r.a.createElement("div",null,r.a.createElement(Q,{cardType:this.state.cardType,gameState:this.state.gameState,leaderboard:this.state.leaderboard,onClickSelectCard:this.handleClickSelectCard,handleGetSeconds:this.handleGetSeconds,onClickClearLeaderboard:this.handleClickClearLeaderboard}),r.a.createElement(ne,{cardType:this.state.cardType,handleGame:this.handleGame,onClickEnterName:this.handleClickEnterName})))),r.a.createElement(g.a,{exact:!0,path:"/"},r.a.createElement(x,null)))))))}}]),a}(r.a.Component);t(93);o.a.render(r.a.createElement(ie,null),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.fb1b2204.chunk.js.map