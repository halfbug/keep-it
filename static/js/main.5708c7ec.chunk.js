(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e){e.exports=[{id:1,domain:"http://wp.apgen.com/login",username:"admin2",password:"12345",detail:"nathing special"},{id:2,domain:"http://newgen.com/login",username:"admin3",password:"12345",detail:"nathing special"},{id:3,domain:"http://somegen.com/login",username:"admin4",password:"12345",detail:"nathing special"}]},143:function(e,a,t){e.exports=t(305)},148:function(e,a,t){},149:function(e,a,t){},305:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(27),l=t.n(i),c=(t(148),t(16)),o=t(17),s=t(19),m=t(18),d=t(20),u=(t(149),t(33)),p=t(31),h=t(5),E=t.n(h),g=t(21),f=t(133),b=t.n(f),v=t(139),w=t.n(v),y=t(134),C=t.n(y),O=t(135),j=t.n(O),S=t(66),x=t.n(S),N=t(45),k=t.n(N),D=t(24),A=t.n(D),B=t(137),I=t.n(B),L=t(136),P=t.n(L),T=t(140),R=t.n(T),z=t(138),F=t.n(z),U=t(46),W=t.n(U),_=t(47),G=t.n(_),M=t(48),H=t.n(M),J=t(119),X=t.n(J),q=t(65),K=t.n(q),Y=t(120),$=t.n(Y),Q=t(121),V=t.n(Q),Z=t(306),ee=r.a.createElement("div",null,r.a.createElement(Z.a,{to:"/"},r.a.createElement(W.a,{button:!0},r.a.createElement(G.a,null,r.a.createElement(X.a,null)),r.a.createElement(H.a,{primary:"Dashboard"}))),r.a.createElement(Z.a,{to:"/add"},r.a.createElement(W.a,{button:!0},r.a.createElement(G.a,null,r.a.createElement($.a,null)),r.a.createElement(H.a,{primary:"Add "}))),r.a.createElement(Z.a,{to:"/Search"},r.a.createElement(W.a,{button:!0},r.a.createElement(G.a,null,r.a.createElement(K.a,null)),r.a.createElement(H.a,{primary:"Search"}))),r.a.createElement(Z.a,{to:"/Settings"},r.a.createElement(W.a,{button:!0},r.a.createElement(G.a,null,r.a.createElement(V.a,null)),r.a.createElement(H.a,{primary:"Settings"})))),ae=r.a.createElement("div",null),te=t(307),ne=t(28),re=t.n(ne),ie=t(12),le=t.n(ie),ce=t(44),oe=t.n(ce),se=t(122),me=t.n(se),de=Object(g.withStyles)(function(e){return{title:{flexGrow:1,fontFamily:"Candal"},logo:{backgroundColor:"#fff",color:e.palette.secondary.main,borderRadius:"15%",padding:"3px",margin:"2px",marginBottom:"-3px"}}})(function(e){var a=e.classes;return r.a.createElement(re.a,{component:e.component,variant:e.variant,color:e.color,noWrap:!0,className:a.title,align:e.align},r.a.createElement(me.a,{className:a.logo,fontSize:"inherit"}),"Keep it")}),ue=Object(g.withStyles)(function(e){return{icon:{marginRight:2*e.spacing.unit},heroTitle:{fontFamily:"Candal",color:e.primary},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit}}})(function(e){var a=e.classes;return r.a.createElement("div",{className:a.heroUnit},r.a.createElement("div",{className:a.heroContent},r.a.createElement(de,{component:"h1",variant:"h2",align:"center",color:"textPrimary"}),r.a.createElement(re.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"A faster way to keep all yours credentials with security. Easy to use and quick to execute."),r.a.createElement("div",{className:a.heroButtons},r.a.createElement(le.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(le.a,{item:!0},r.a.createElement(oe.a,{variant:"contained",color:"primary"},"Main call to action")),r.a.createElement(le.a,{item:!0},r.a.createElement(oe.a,{variant:"outlined",color:"primary"},"Secondary action"))))))}),pe=function(){return r.a.createElement("div",null,r.a.createElement(ue,null))},he=t(49),Ee=t.n(he),ge=t(123),fe=t.n(ge),be=t(125),ve=t.n(be),we=t(124),ye=t.n(we),Ce=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={id:"",domain:"",username:"",multiline:"Controlled",password:"",detail:"",showPassword:!1},t.handleChange=function(e){t.setState(Object(u.a)({},e.target.id,e.target.value))},t.handleClickShowPassword=function(){t.setState(function(e){return{showPassword:!e.showPassword}})},t.handleSubmit=function(e){e.preventDefault(),t.props.saveCredential(t.state)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.credential&&(console.log(this.state),console.log(this.props.credential),this.setState(function(a){return e.props.credential}),console.log("newState"),console.log(this.state))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.container,onSubmit:this.handleSubmit},r.a.createElement("div",{className:e.full},r.a.createElement(le.a,{container:!0,spacing:8},r.a.createElement(le.a,{item:!0}),r.a.createElement(le.a,{item:!0,className:e.full90},r.a.createElement(Ee.a,{id:"domain",label:"Web Address",onChange:this.handleChange,value:this.state.domain,className:e.textField100,placeholder:"https/:www.somedomain.com/login",margin:"normal"})))),r.a.createElement("div",{className:e.margin},r.a.createElement(le.a,{container:!0,spacing:8},r.a.createElement(le.a,{item:!0}),r.a.createElement(le.a,{item:!0},r.a.createElement(Ee.a,{id:"username",label:"User Name",className:e.textField,placeholder:"admin",onChange:this.handleChange,value:this.state.username,margin:"normal"})))),r.a.createElement("div",{className:e.margin},r.a.createElement(le.a,{container:!0,spacing:8},r.a.createElement(le.a,{item:!0}),r.a.createElement(le.a,{item:!0},r.a.createElement(Ee.a,{id:"password",className:e.textField,margin:"normal",type:this.state.showPassword?"text":"password",label:"Password",value:this.state.password,onChange:this.handleChange,InputProps:{endAdornment:r.a.createElement(fe.a,{position:"end"},r.a.createElement(A.a,{"aria-label":"Toggle password visibility",onClick:this.handleClickShowPassword},this.state.showPassword?r.a.createElement(ye.a,null):r.a.createElement(ve.a,null)))}})))),r.a.createElement("div",{className:e.full},r.a.createElement(le.a,{container:!0,spacing:8},r.a.createElement(le.a,{item:!0}),r.a.createElement(le.a,{item:!0,className:e.full90},r.a.createElement(Ee.a,{id:"detail",label:"Detail",multiline:!0,rowsMax:"4",value:this.state.detail,onChange:this.handleChange,className:e.textField100,margin:"normal"})))),r.a.createElement("div",{className:e.full},r.a.createElement(le.a,{container:!0,spacing:24,alignItems:"center"},r.a.createElement(le.a,{item:!0,className:e.full},r.a.createElement(oe.a,{variant:"contained",type:"submit",color:"primary",align:"center",id:"submit-btn",style:{marginTop:"2em"}},"Save")))))}}]),a}(r.a.Component),Oe=Object(g.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap",backgroundColor:e.palette.background.paper},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:500},textField100:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"100%"},dense:{marginTop:19},menu:{width:200},full:{width:"100%",display:"block"},full90:{width:"89%"},icon:{color:e.palette.secondary.main,fontSize:50},iconHover:{margin:2*e.spacing.unit,"&:hover":{color:e.palette.secondary.main}}}})(Ce),je=t(30),Se=t.n(je);var xe=Object(g.withStyles)(function(e){return{root:{width:"100%",padding:1,backgroundColor:e.palette.background.paper},chip:{marginRight:e.spacing.unit},section1:{margin:"".concat(3*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px"),paddingTop:3},section2:{margin:2*e.spacing.unit},section3:{margin:"".concat(6*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px ").concat(2*e.spacing.unit,"px")}}})(function(e){var a=e.classes,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Se.a,{className:a.root},r.a.createElement("div",{className:a.section1,align:"left"},r.a.createElement(le.a,{container:!0},r.a.createElement(le.a,{item:!0,xs:!0},r.a.createElement(re.a,{gutterBottom:!0,variant:"h4"},t[0])),r.a.createElement(le.a,{item:!0},r.a.createElement(re.a,{gutterBottom:!0,variant:"h6"}))),r.a.createElement(re.a,{color:"textSecondary"},t[1])),r.a.createElement(k.a,{variant:"middle"}),r.a.createElement("div",{className:a.section2},t[2]),r.a.createElement("div",{className:a.section3},t[3])))}),Ne=t(29),ke=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).addCredential=function(e){e.id=t.props.credentials.length+1,console.log(t.props.credentials.length),t.props.addCredential(e),t.props.history.push("/Search")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(xe,null,"Add Credential",r.a.createElement("span",null,"Add Website and login information here."),r.a.createElement(Oe,{saveCredential:this.addCredential}))}}]),a}(r.a.Component),De=Object(Ne.b)(function(e){return{credentials:e.credentials}},function(e){return{addCredential:function(a){return e(function(e){return Object(p.a)({type:"ADD_CREDENTIAL"},e)}(a))}}})(ke),Ae=t(126),Be=t.n(Ae),Ie=t(128),Le=t.n(Ie),Pe=t(71),Te=t.n(Pe),Re=t(127),ze=t.n(Re),Fe=t(88),Ue=t.n(Fe),We=t(69),_e=t.n(We),Ge=t(68),Me=t.n(Ge),He=t(129),Je=t.n(He),Xe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleDeleteClick=function(){console.log(t.props),t.props.deleteCredential(t.props.cid)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(A.a,{size:"small","aria-label":"Delete",onClick:this.handleDeleteClick},r.a.createElement(Me.a,{fontSize:"small"}))}}]),a}(n.Component),qe=Object(Ne.b)(null,function(e){return{deleteCredential:function(a){return e(function(e){return{type:"DELETE_CREDENTIAL",id:e}}(a))}}})(Xe),Ke=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes,t=this.props,n=t.records,i=t.headers;return r.a.createElement(Se.a,{className:a.root},r.a.createElement(Be.a,{className:a.table},r.a.createElement(ze.a,null,r.a.createElement(Ue.a,null,i.map(function(e){return r.a.createElement(Te.a,null,e)}))),r.a.createElement(Le.a,null,n.map(function(t){return r.a.createElement(Ue.a,{key:t.id},r.a.createElement(Te.a,{component:"th",scope:"row"},t.domain),r.a.createElement(Te.a,{align:"left"},r.a.createElement("div",null,r.a.createElement(Z.a,{to:"/detail/"+t.id},r.a.createElement(A.a,{size:"small",color:"primary","aria-label":"Add",className:a.fab},r.a.createElement(Je.a,null))),r.a.createElement(Z.a,{to:"/update/"+t.id},r.a.createElement(A.a,{size:"small",color:"secondary","aria-label":"Edit",className:a.fab},r.a.createElement(_e.a,null))),r.a.createElement(qe,{size:"small","aria-label":"Delete",className:a.fab,cid:t.id,reverseSearch:e.props.reverseSearch},r.a.createElement(Me.a,{fontSize:"small"})))))}))))}}]),a}(n.Component),Ye=Object(g.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto"},table:{minWidth:"80%"},fab:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(Ke),$e=t(43),Qe=t.n($e),Ve=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={searchtxt:""},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.searchCredential(t.state)},t.handleChange=function(e){t.setState(Object(u.a)({},e.target.id,e.target.value)),e.target.value||t.props.reverseSearch()},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.container,onSubmit:this.handleSubmit},r.a.createElement(Se.a,{className:e.root,elevation:1},r.a.createElement(Qe.a,{className:e.input,placeholder:"Search Credential",id:"searchtxt",onChange:this.handleChange}),r.a.createElement(A.a,{className:e.iconButton,"aria-label":"Search",type:"submit"},r.a.createElement(K.a,null))))}}]),a}(r.a.Component),Ze=Object(g.withStyles)({root:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4}})(Ve),ea=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={credentials:t.props.credentials,action:"default"},t.searchCredential=function(e){var a=t.props.credentials.filter(function(a){return!!a.domain.toLowerCase().includes(e.searchtxt.toLowerCase())&&a});console.log(a),t.setState({credentials:a,action:"search"})},t.reverseSearch=function(){t.setState({credentials:t.props.credentials,action:"default"}),console.log("Updated internal search results")},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.credentials;return r.a.createElement(xe,null,r.a.createElement(Ze,{searchCredential:this.searchCredential,reverseSearch:this.reverseSearch}),r.a.createElement(Ye,{records:e,headers:["Domains","Options"],reverseSearch:this.reverseSearch}))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.credentials.length!==a.credentials.length&&"default"===a.action?{credentials:e.credentials}:null}}]),a}(n.Component),aa=Object(Ne.b)(function(e){return{credentials:e.credentials}})(ea),ta=function(){return r.a.createElement("div",null)},na=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.record,a=Object.keys(e).filter(function(e){return"id"!==e}).map(function(a){return r.a.createElement(le.a,{container:!0,direction:"row",alignItems:"flex-start"},r.a.createElement(le.a,{item:!0,xs:2,justify:"flex-start"},r.a.createElement(re.a,{variant:"body1",gutterBottom:!0,autoCapitalize:"true",color:"primary",align:"left",hidden:!0},a.toUpperCase())),r.a.createElement(le.a,{item:!0,alignItems:"flex-start"},r.a.createElement(re.a,{variant:"body2",gutterBottom:!0},e[a])))});return r.a.createElement("div",{fullWidth:!0},a)}}]),a}(n.Component),ra=t(130),ia=t.n(ra),la=t(131),ca=t.n(la),oa=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleClick",value:function(){alert("You clicked the Chip.")}},{key:"componentDidUpdate",value:function(){this.props.credential||this.props.history.push("/Search")}},{key:"render",value:function(){var e=this.props.credential?r.a.createElement("div",null,r.a.createElement(na,{record:this.props.credential}," ")):r.a.createElement("div",{className:"center"},"Loading credential..."),a=this.props.credential?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Detail",r.a.createElement(Z.a,{to:"/update/"+this.props.credential.id},r.a.createElement(A.a,{size:"small",color:"secondary","aria-label":"Edit"},r.a.createElement(_e.a,null))),r.a.createElement(qe,{size:"small","aria-label":"Delete",cid:this.props.credential.id})),r.a.createElement(ia.a,{icon:r.a.createElement(ca.a,null),label:"Copy to Clipboard",onClick:this.handleClick,variant:"outlined"})):r.a.createElement("div",{onLo:!0,className:"center"},"No Record found ...");return r.a.createElement(xe,null,a,r.a.createElement("span",null),e)}}]),a}(n.Component),sa=Object(Ne.b)(function(e,a){var t=parseInt(a.match.params.cre_id);return{credential:e.credentials.find(function(e){return e.id===t})}})(oa),ma=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).updateCredential=function(e){t.props.updateCredential(e),t.props.history.push("/detail/"+e.id)},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.credential?r.a.createElement(Oe,{saveCredential:this.updateCredential,credential:this.props.credential}):r.a.createElement("div",{className:"center"},"Record not found...");return r.a.createElement(xe,null,"Update Credential",r.a.createElement("span",null,"Update Website and login information here."),e)}}]),a}(r.a.Component),da=Object(Ne.b)(function(e,a){var t=parseInt(a.match.params.cre_id);return{credential:e.credentials.find(function(e){return e.id===t})}},function(e){return{updateCredential:function(a){return e(function(e){return Object(p.a)({type:"UPDATE_CREDENTIAL"},e)}(a))}}})(ma),ua=function(){return r.a.createElement("div",{className:"content"},r.a.createElement(te.a,{exact:!0,path:"/",component:pe}),r.a.createElement(te.a,{path:"/add",component:De}),r.a.createElement(te.a,{path:"/search",component:aa}),r.a.createElement(te.a,{path:"/settings",component:ta}),r.a.createElement(te.a,{path:"/detail/:cre_id",component:sa}),r.a.createElement(te.a,{path:"/update/:cre_id",component:da}))},pa=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={open:!1},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(b.a,null),r.a.createElement(C.a,{position:"absolute",className:E()(e.appBar,this.state.open&&e.appBarShift)},r.a.createElement(j.a,{disableGutters:!this.state.open,className:e.toolbar},r.a.createElement(A.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:E()(e.menuButton,this.state.open&&e.menuButtonHidden)},r.a.createElement(P.a,null)),r.a.createElement(de,{component:"h1",variant:"h6",color:"inherit",align:"left"}),r.a.createElement(A.a,{color:"inherit"},r.a.createElement(I.a,{badgeContent:4,color:"secondary"},r.a.createElement(F.a,null))))),r.a.createElement(w.a,{variant:"permanent",classes:{paper:E()(e.drawerPaper,!this.state.open&&e.drawerPaperClose)},open:this.state.open},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(A.a,{onClick:this.handleDrawerClose},r.a.createElement(R.a,null))),r.a.createElement(k.a,null),r.a.createElement(x.a,null,ee),r.a.createElement(k.a,null),r.a.createElement(x.a,null,ae)),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(ua,null)))}}]),a}(r.a.Component),ha=Object(g.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1,fontFamily:"Candal"},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(u.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(pa),Ea=t(87),ga=t.n(Ea),fa=t(308),ba=Object(g.createMuiTheme)({palette:{type:"dark",primary:{main:"#00838e"},secondary:{main:"#f57f17"}}}),va=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(fa.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ga.a,{theme:ba},r.a.createElement(ha,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var wa=t(67),ya=t(142),Ca={credentials:t(141),credential:""},Oa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ca,a=arguments.length>1?arguments[1]:void 0;console.log(a);var t=a.id,n=a.domain,r=a.username,i=a.password,l=a.detail;switch(a.type){case"UPDATE_CREDENTIAL":var c=e.credentials.map(function(e){return e.id===a.id&&(e={id:t,domain:n,username:r,password:i,detail:l}),e});return Object(p.a)({},e,{credentials:c});case"ADD_CREDENTIAL":return Object(p.a)({},e,{credentials:[].concat(Object(ya.a)(e.credentials),[{id:t,domain:n,username:r,password:i,detail:l}])});case"DELETE_CREDENTIAL":var o=e.credentials.filter(function(e){return e.id!==a.id});return Object(p.a)({},e,{credentials:o});default:return e}},ja=Object(wa.b)(Oa);l.a.render(r.a.createElement(Ne.a,{store:ja},r.a.createElement(va,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[143,1,2]]]);
//# sourceMappingURL=main.5708c7ec.chunk.js.map