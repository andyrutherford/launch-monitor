(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,a,n){e.exports=n.p+"static/media/rocket.8c852621.svg"},40:function(e,a,n){e.exports=n(53)},45:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);var t=n(1),l=n.n(t),c=n(32),r=n.n(c),s=(n(45),n(39)),m=n(7),u=n(20),i=n(6),o=n(21),d=n(18),h=n.n(d),g=n(54),E=function(e){var a=e.launch,n=Object(i.e)(),t=a.flight_number,c=a.mission_name,r=a.launch_date_local,s=a.launch_success;return l.a.createElement("div",{className:"card card-body mb-3"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-9"},l.a.createElement("div",{className:"d-flex align-items-center"},l.a.createElement("h4",null,"Mission: ",c),l.a.createElement("span",{className:"badge badge-pill badge-".concat(s?"success":"danger"," ml-2")},s?"Success":"Failed")),l.a.createElement("p",null,"Date: ",r.slice(0,10))),l.a.createElement("div",{className:"col-md-3 d-flex justify-content-center align-items-center"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return n.push("/launch/".concat(t))}},"Details"))))};function p(){var e=Object(o.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return p=function(){return e},e}var b=h()(p()),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"display-5 my-3"},"Launches"),l.a.createElement(g.a,{query:b},(function(e){return function(e){var a=e.loading,n=e.error,t=e.data;return a?l.a.createElement("h4",null,"Loading..."):n?l.a.createElement("p",null,n.message):(console.log(t),t.launches.map((function(e,a){return l.a.createElement(E,{key:a,launch:e})})))}({loading:e.loading,error:e.error,data:e.data})})))};function _(){var e=Object(o.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return _=function(){return e},e}var y=h()(_()),N=function(){var e=Object(i.e)(),a=Object(i.f)().flight_number;a=Number(a);return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{query:y,variables:{flight_number:a}},(function(n){return function(n){var t=n.loading,c=n.error,r=n.data;if(t)return l.a.createElement("h4",null,"Loading...");if(c)return l.a.createElement("p",null,c.message);var s=r.launch,m=s.mission_name,u=s.launch_year,i=s.launch_success,o=(s.launch_date_local,s.rocket),d=o.rocket_id,h=o.rocket_name,g=o.rocket_type;return l.a.createElement("div",null,l.a.createElement("h1",{className:"display-4 my-3"},m),l.a.createElement("h4",{className:"mb-3"},"Launch Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"Flight Number: ",a),l.a.createElement("li",{className:"list-group-item"},"Launch Year: ",u),l.a.createElement("li",{className:"list-group-item"},"Launch Status:"," ",l.a.createElement("span",{className:"badge badge-pill badge-".concat(i?"success":"danger"," ml-2")},i?"Success":"Failed"))),l.a.createElement("h4",{className:"my-3"},"Rocket Details"),l.a.createElement("ul",{className:"list-group"},l.a.createElement("li",{className:"list-group-item"},"ID: ",d),l.a.createElement("li",{className:"list-group-item"},"Name: ",h),l.a.createElement("li",{className:"list-group-item"},"Type: ",g)),l.a.createElement("button",{className:"btn btn-secondary my-3",onClick:function(){return e.push("/")}},"Go Back"))}({loading:n.loading,error:n.error,data:n.data})})))},v=n(38),k=n.n(v),L=new s.a({uri:"/graphql"});var x=function(){return l.a.createElement(m.a,{client:L},l.a.createElement(u.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("img",{src:k.a,alt:"Launch Monitor",style:{display:"block",width:"60px",marginRight:"1rem"}}),l.a.createElement("h1",{className:"display-4"},"Launch Monitor")),l.a.createElement(i.a,{exact:!0,path:"/",component:f}),l.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:N}))))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.d9d9a8fc.chunk.js.map