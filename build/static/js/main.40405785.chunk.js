(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),s=n.n(o),c=(n(200),n(26)),i=n.n(c),l=n(51),u=n(23),h=n(31),d=n(24),p=n(25),f=(n(202),n(203),n(3)),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!0===e.state.showDetails?e.setState({showDetails:!1}):e.setState({showDetails:!0})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return Object(f.jsxs)("div",{className:"event",children:[Object(f.jsx)("h2",{className:"event-summary",children:n.summary}),Object(f.jsx)("p",{className:"event-location",children:n.location}),t&&Object(f.jsxs)("div",{className:"expanded",children:[Object(f.jsx)("p",{className:"description",children:n.description}),Object(f.jsx)("a",{className:"link",href:n.htmlLink,children:"See details on Google Calendar"})]}),Object(f.jsx)("button",{className:"detailsButton",onClick:function(){return e.handleShowDetails()},children:t?"Hide":"Show more"})]})}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("div",{className:"event-list-card",children:Object(f.jsx)("div",{className:"event-list-card-box",children:Object(f.jsx)("li",{children:Object(f.jsx)(v,{event:e})})})},e.id)}))})}}]),n}(a.Component),b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(h.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Alert",children:Object(f.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(b),g=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(b),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a}return n}(b),O=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return 0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"CitySearch",children:[Object(f.jsx)(j,{text:this.state.infoText}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,placeholder:"Name of city",onChange:this.handleInputChanged}),Object(f.jsxs)("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none",children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1||n>32?e.setState({infoText:"Please, pick a number between 1 and 32"}):e.setState({infoText:""})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(f.jsxs)("div",{className:"numberOfEvents",children:[Object(f.jsx)("input",{type:"number",className:"event-number-input",value:e,onChange:this.handleInputChanged}),Object(f.jsx)(g,{text:this.state.infoText})]})}}]),n}(a.Component),y=n(18),k=n(357),S=n(364),T=n(181),C=n(93),E=n(74),N=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(y.a)(n,2),o=r[0],s=r[1];Object(a.useEffect)((function(){s((function(){return c()}))}),[t]);var c=function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}}))},i=["#008744","#0057E7","#D62D20","#FFA700","#000000"];return Object(f.jsx)(k.a,{height:400,children:Object(f.jsxs)(S.a,{width:400,height:400,children:[Object(f.jsx)(T.a,{data:o,cx:"50%",cy:"50%",labelLine:!1,LegendType:"square",outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(f.jsx)(C.a,{fill:i[t%i.length],name:e.name},"cell-".concat(t))}))}),Object(f.jsx)(E.a,{layout:"horizontal",align:"center",verticalAlign:"top"})]})})};var A=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:" Welcome to the Web Development Meet App"}),Object(f.jsx)("h4",{children:"Want to improve yor dev skills? Search for upcoming events in Web Development from around the world!"}),Object(f.jsx)("div",{className:"button_cont",align:"center",children:Object(f.jsxs)("div",{class:"google-btn",children:[Object(f.jsx)("div",{class:"google-icon-wrapper",children:Object(f.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(f.jsx)("a",{href:"https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=793105675417-msvbkhh8j3e64gc3vnbp4ap1asg06o02.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fanthropovixen.github.io%2Fmeet%2F",rel:"nofollow noopener",class:"btn-text",children:Object(f.jsx)("b",{children:"Sign in with your Google account"})})]})}),Object(f.jsx)("a",{href:"https://anthropovixen.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy Policy"})]})},W=n(120),Z=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],D=n(119),L=n.n(D),I=n(77),F=n.n(I),M=function(e){var t=e.map((function(e){return e.location}));return Object(W.a)(new Set(t))},q=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,J(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,L.a.get("https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-auth-url");case 19:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 22:return e.abrupt("return",r&&U(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return F.a.done(),e.abrupt("return",Z);case 4:if(navigator.onLine){e.next=11;break}return e.next=7,localStorage.getItem("lastEvents");case 7:return t=e.sent,n=t.events,F.a.done(),e.abrupt("return",{events:JSON.parse(n),locations:M(n)});case 11:return e.next=13,q();case 13:if(!(a=e.sent)){e.next=23;break}return B(),r="https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/get-events/"+a,e.next=19,L.a.get(r);case 19:return(o=e.sent).data&&(s=M(o.data.events),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(s))),F.a.done(),e.abrupt("return",{events:o.data.events,locations:s});case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},U=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(),n=encodeURIComponent(t),e.next=4,fetch("https://rl6mfyisw7.execute-api.ap-southeast-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=n(361),P=n(362),z=n(186),G=n(187),H=n(78),Y=n(190),K=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",tokenCheck:!1},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?R().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);e.setState({events:a,currentLocation:t,locations:n.locations})})):R().then((function(a){var o=("all"===t?a.events:a.events.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:o,numberOfEvents:n,locations:a.locations})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=localStorage.getItem("access_token"))){e.next=7;break}return e.next=4,J(t);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!1;case 8:n=e.t0,this.setState({tokenCheck:n}),!0===n&&this.updateEvents(),a=new URLSearchParams(window.location.search),r=a.get("code"),this.mounted=!0,r&&!0===this.mounted&&!1===n&&(this.setState({tokenCheck:!0}),this.updateEvents()),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"Cached data is being displayed."});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.tokenCheck,n=e.events;return!1===t?Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(A,{})}):Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet App"}),Object(f.jsx)("h4",{children:" Find your nearest city"}),Object(f.jsx)(O,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(f.jsx)("h4",{children:"Choose the number of events you want to see"}),Object(f.jsx)(x,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(f.jsx)(w,{text:this.state.warningText}),Object(f.jsxs)("div",{className:"data-vis-wrapper",children:[Object(f.jsx)(N,{events:n}),Object(f.jsx)("h4",{children:"Events in each city"}),Object(f.jsx)(k.a,{height:400,children:Object(f.jsxs)(_.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(f.jsx)(P.a,{}),Object(f.jsx)(z.a,{type:"category",dataKey:"city",name:"city"}),Object(f.jsx)(G.a,{type:"number",dataKey:"number",name:"number of events"}),Object(f.jsx)(H.a,{cursor:{strokeDasharray:"3 3"}}),Object(f.jsx)(Y.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(f.jsx)(m,{events:this.state.events})]})}}]),n}(a.Component),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(188).config("716f15c3c59f431aa2686132ec63f711").install(),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(K,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");V?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}(),Q()}},[[356,1,2]]]);
//# sourceMappingURL=main.40405785.chunk.js.map