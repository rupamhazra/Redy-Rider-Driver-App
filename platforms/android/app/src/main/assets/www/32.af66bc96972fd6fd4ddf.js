(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{GfnE:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("gIcY"),o=t("ZgVV"),i=t("ElRG"),r=t("S0jo"),s=t("ZZ/e"),a=t("WTUP"),c=t("8jtY"),b=t("Ht5U"),p=function(){function l(l,n,t,u,e,o,i,r,s){var a=this;this.router=l,this.formBuilder=n,this.toasterService=t,this.device=u,this.modalService=e,this.bus_route_details_event=o,this.storage=i,this.loadingService=r,this.officePoolCarService=s,this.net_connection_check=!1,this.disabled_button=!1,this.disabled_button_text="SELECT THIS CAR",this.car_count=0,this.select_class="",this.mode="2",this.progress_bar=!1,this.no_bus_saturday=!1,this.no_bus_saturday_msg="",this.progress_bar=!0,this.storage.get("route_search_parameters").then(function(l){var n=l;a.mode=l.single_or_round,n.cars_details=[],a.storage.set("route_search_parameters",n),a.request_data=n,a.routeDetails()})}return l.prototype.ngOnInit=function(){var l=this;this.progress_bar=!0,this.bus_route_details_event.subscribe("check_net_connection",function(n){"connect"==n&&(l.net_connection_check=!1),"disconnect"==n&&(l.net_connection_check=!0)}),this.form=this.formBuilder.group({journey_date:["",e.q.required],journey_time:["",e.q.required]})},l.prototype.routeDetails=function(){var l=this;this.officePoolCarService.commonSearchService(this.request_data).subscribe(function(n){null!=n.result&&0!=n.result.length||(l.dataList=[],l.dataList_show=!0,l.progress_bar=!1),l.dataList=n.result,l.progress_bar=!1},function(n){l.progress_bar=!1,l.no_bus_saturday=!0,l.no_bus_saturday_msg=n.error.msg})},l.prototype.reserveSeat=function(l,n){var t=this;l.car_selected=!l.car_selected,this.storage.get("route_search_parameters").then(function(u){var e=u,o={car_id:l.car_id,route_master_id:l.route_master_id,route_timing_id:l.route_timing_id,journy_date:l.traval_date,journy_time:l.traval_time,seats:[],start_point_id:l.start_point_id,end_point_id:l.end_point_id};l.car_selected?(n.target.textContent="SELECTED",e.cars_details.push(o)):(n.target.textContent="SELECT THIS CAR",e.cars_details.pop(o)),t.car_count=e.cars_details.length,t.storage.set("route_search_parameters",e)})},l.prototype.goToNextPage=function(){"1"==this.mode&&this.car_count<2?this.toasterService.showToast("Please select two cars for your round trip",3e3):"0"==this.mode&&this.car_count<1?this.toasterService.showToast("Please select one car for your single trip",3e3):this.router.navigateByUrl("/seat-layout-details")},l.prototype.loadData=function(l){},l.prototype.toggleInfiniteScroll=function(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled},l.prototype.viewRoute=function(l,n,t){this.modalService.openModal(c.a,{route_id:l,from_which_page:"bus-route-details-page",start_point:n,end_point:t},"stoppage_modal_css")},l}(),d=function(){return function(){}}(),g=t("pMnS"),_=t("oBZk"),f=t("fNgX"),m=t("Hf/j"),h=t("ZYjt"),y=t("Ip0R"),x=t("jWFl"),v=t("OOyK"),k=t("ZYCi"),z=t("iw74"),q=t("jKJn"),I=t("xoVG"),P=t("cGva"),C=u.ob({encapsulation:0,styles:[[".inner_div[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}ion-icon[_ngcontent-%COMP%]{font-size:24px}.cs-p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.background-gif[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{border-bottom:3px solid #33b5e5}._c_col_back[_ngcontent-%COMP%]{background:#0d47a1}._c_p_text_color[_ngcontent-%COMP%]{color:#757575;letter-spacing:1px}.rstar-margin[_ngcontent-%COMP%]{margin:0 0 10px}.rstar-icon[_ngcontent-%COMP%]{font-size:17px}.inner-scroll[_ngcontent-%COMP%], .top-div[_ngcontent-%COMP%]{height:50px!important}.card_back[_ngcontent-%COMP%]{background-color:#fff;margin:10px 0}ion-toolbar[_ngcontent-%COMP%]{--background:transparent}.footer-bus-route-details[_ngcontent-%COMP%]{background:#0a5999;color:#fff}ion-button[_ngcontent-%COMP%]{--background:#0ec254;color:#fff;--border-color:#0ec254;font-size:13px;padding:0;margin:0}.car_selected[_ngcontent-%COMP%]{--background:#0ec254;color:#fff;--border-color:#0ec254;font-size:13px;padding:0;margin:0;opacity:.5}.p_location[_ngcontent-%COMP%]{margin:0}"]],data:{animation:[{type:7,name:"fadein",definitions:[{type:0,name:"void",styles:{type:6,styles:{opacity:0},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"900ms ease-out"}],options:null}],options:{}},{type:7,name:"slidelefttitle",definitions:[{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translateX(150%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)",opacity:1},offset:null},timings:"900ms 300ms ease-out"}],options:null}],options:{}}]}});function S(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"ion-progress-bar",[["class","progress_bar"],["type","indeterminate"]],null,null,null,_.yb,_.F)),u.pb(1,49152,null,0,s.ab,[u.h,u.k,u.z],{type:[0,"type"]},null)],function(l,n){l(n,1,0,"indeterminate")},null)}function M(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,5,"ion-card",[],null,null,null,_.ab,_.g)),u.pb(1,49152,null,0,s.o,[u.h,u.k,u.z],null,null),(l()(),u.qb(2,0,null,0,3,"ion-text",[["color","danger"],["text-center",""]],null,null,null,_.Fb,_.M)),u.pb(3,49152,null,0,s.yb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,1,"p",[["style","padding: 10px;"]],null,null,null,null,null)),(l()(),u.Ib(5,null,["",""]))],function(l,n){l(n,3,0,"danger")},function(l,n){l(n,5,0,n.component.no_bus_saturday_msg)})}function w(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,5,"ion-card",[],null,null,null,_.ab,_.g)),u.pb(1,49152,null,0,s.o,[u.h,u.k,u.z],null,null),(l()(),u.qb(2,0,null,0,3,"ion-text",[["color","danger"],["text-center",""]],null,null,null,_.Fb,_.M)),u.pb(3,49152,null,0,s.yb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.qb(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),u.Ib(-1,null,["No car has been available "]))],function(l,n){l(n,3,0,"danger")},null)}function j(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,69,"ion-card",[["class","card_back"]],null,null,null,_.ab,_.g)),u.pb(1,49152,null,0,s.o,[u.h,u.k,u.z],{disabled:[0,"disabled"]},null),(l()(),u.qb(2,0,null,0,67,"ion-grid",[["margin-top",""],["no-padding",""]],null,null,null,_.jb,_.q)),u.pb(3,49152,null,0,s.C,[u.h,u.k,u.z],null,null),(l()(),u.qb(4,0,null,0,20,"ion-row",[["style","margin: 0 8px 0 10px;"]],null,null,null,_.Bb,_.I)),u.pb(5,49152,null,0,s.kb,[u.h,u.k,u.z],null,null),(l()(),u.qb(6,0,null,0,7,"ion-col",[["size","1"],["style","padding: 0px;"],["text-center",""]],null,null,null,_.cb,_.j)),u.pb(7,49152,null,0,s.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.qb(8,0,null,0,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;margin-top: 5px;"]],null,null,null,_.mb,_.t)),u.pb(9,49152,null,0,s.F,[u.h,u.k,u.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),u.qb(10,0,null,0,1,"ion-img",[["alt","."],["src","./assets/svg/dot.svg"],["style","width: 3px;margin: 10px 0 10px 8px;"]],null,null,null,_.mb,_.t)),u.pb(11,49152,null,0,s.F,[u.h,u.k,u.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),u.qb(12,0,null,0,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;"]],null,null,null,_.mb,_.t)),u.pb(13,49152,null,0,s.F,[u.h,u.k,u.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),u.qb(14,0,null,0,10,"ion-col",[["size","11"],["style","padding: 0px;"],["text-left",""]],null,null,null,_.cb,_.j)),u.pb(15,49152,null,0,s.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.qb(16,0,null,0,1,"p",[["class","p_location"]],null,null,null,null,null)),(l()(),u.Ib(17,null,["",""])),(l()(),u.qb(18,0,null,0,4,"p",[["style","margin: 10px 0 10px 0;color:#02A1EB;"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.viewRoute(l.context.$implicit.route_master_id,l.context.$implicit.start_point_id,l.context.$implicit.end_point_id)&&u),u},null,null)),(l()(),u.qb(19,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),u.pb(20,573440,null,0,m.a,[h.c,m.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),u.Bb(21,2),(l()(),u.Ib(-1,null,["\xa0View Route"])),(l()(),u.qb(23,0,null,0,1,"p",[["class","p_location"]],null,null,null,null,null)),(l()(),u.Ib(24,null,["",""])),(l()(),u.qb(25,0,null,0,19,"ion-row",[["no-margin",""],["no-padding",""],["style","margin-left: 10px;"]],null,null,null,_.Bb,_.I)),u.pb(26,49152,null,0,s.kb,[u.h,u.k,u.z],null,null),(l()(),u.qb(27,0,null,0,17,"ion-col",[["no-margin",""],["no-padding",""]],null,null,null,_.cb,_.j)),u.pb(28,49152,null,0,s.v,[u.h,u.k,u.z],null,null),(l()(),u.qb(29,0,null,0,13,"ion-toolbar",[["style","--min-height:35px;"]],null,null,null,_.Kb,_.R)),u.pb(30,49152,null,0,s.Db,[u.h,u.k,u.z],null,null),(l()(),u.qb(31,0,null,0,1,"ion-icon",[["name","bus"],["slot","start"]],null,null,null,_.lb,_.s)),u.pb(32,49152,null,0,s.E,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.qb(33,0,null,0,1,"p",[["style","margin:0px;"]],null,null,null,null,null)),(l()(),u.Ib(34,null,["\xa0",""])),(l()(),u.qb(35,0,null,0,7,"p",[["slot","end"],["style","margin:0 26px 0px 0px;font-size: 13px;"]],null,null,null,null,null)),(l()(),u.qb(36,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),u.pb(37,573440,null,0,m.a,[h.c,m.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),u.Bb(38,2),(l()(),u.Ib(-1,null,["\xa0\xa0Available Seats : "])),(l()(),u.qb(40,0,null,null,2,"ion-text",[["color","success"]],null,null,null,_.Fb,_.M)),u.pb(41,49152,null,0,s.yb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Ib(42,0,["",""])),(l()(),u.qb(43,0,null,0,1,"p",[["style","margin:-7px 0px 2px 24px;"]],null,null,null,null,null)),(l()(),u.Ib(44,null,["\xa0",""])),(l()(),u.qb(45,0,null,0,15,"ion-row",[],null,null,null,_.Bb,_.I)),u.pb(46,49152,null,0,s.kb,[u.h,u.k,u.z],null,null),(l()(),u.qb(47,0,null,0,3,"ion-col",[["size","6"]],null,null,null,_.cb,_.j)),u.pb(48,49152,null,0,s.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.qb(49,0,null,0,1,"p",[["style","font-size: 19px;margin: 0 0 0 30px;color:#000000;"]],null,null,null,null,null)),(l()(),u.Ib(50,null,["",""])),(l()(),u.qb(51,0,null,0,9,"ion-col",[["size","6"]],null,null,null,_.cb,_.j)),u.pb(52,49152,null,0,s.v,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.qb(53,0,null,0,5,"ion-toolbar",[["style","--min-height:24px;"]],null,null,null,_.Kb,_.R)),u.pb(54,49152,null,0,s.Db,[u.h,u.k,u.z],null,null),(l()(),u.qb(55,0,null,0,1,"ion-icon",[["name","alarm"],["slot","start"],["style","font-size: 20px;opacity: 0.6;"]],null,null,null,_.lb,_.s)),u.pb(56,49152,null,0,s.E,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.qb(57,0,null,0,1,"p",[["style","opacity: 0.6;margin: 0 0px 0 0;"]],null,null,null,null,null)),(l()(),u.Ib(-1,null,["\xa0 You will reach by"])),(l()(),u.qb(59,0,null,0,1,"p",[["style","margin:0px 0px 5px 27px;opacity: 0.6;font-size: 13px;"]],null,null,null,null,null)),(l()(),u.Ib(60,null,["",""])),(l()(),u.qb(61,0,null,0,8,"ion-row",[["no-margin",""],["no-padding",""]],null,null,null,_.Bb,_.I)),u.pb(62,49152,null,0,s.kb,[u.h,u.k,u.z],null,null),(l()(),u.qb(63,0,null,0,6,"ion-col",[],null,null,null,_.cb,_.j)),u.pb(64,49152,null,0,s.v,[u.h,u.k,u.z],null,null),(l()(),u.qb(65,0,null,0,4,"ion-button",[["expand","block"],["size","large"],["type","button"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.reserveSeat(l.context.$implicit,t)&&u),u},_.X,_.e)),u.pb(66,278528,null,0,y.h,[u.s,u.t,u.k,u.D],{ngClass:[0,"ngClass"]},null),u.Db(67,{car_selected:0}),u.pb(68,49152,null,0,s.m,[u.h,u.k,u.z],{expand:[0,"expand"],size:[1,"size"],type:[2,"type"]},null),(l()(),u.Ib(-1,0,[" SELECT THIS CAR "]))],function(l,n){l(n,1,0,n.component.net_connection_check),l(n,7,0,"1"),l(n,9,0,"redy rider","./assets/svg/logo.svg"),l(n,11,0,".","./assets/svg/dot.svg"),l(n,13,0,"redy rider","./assets/svg/logo.svg"),l(n,15,0,"11");var t=l(n,21,0,"fas","route");l(n,20,0,t,"1x"),l(n,32,0,"bus");var u=l(n,38,0,"fas","chair");l(n,37,0,u,"1x"),l(n,41,0,"success"),l(n,48,0,"6"),l(n,52,0,"6"),l(n,56,0,"alarm");var e=l(n,67,0,n.context.$implicit.car_selected);l(n,66,0,e),l(n,68,0,"block","large","button")},function(l,n){l(n,17,0,n.context.$implicit.start_point),l(n,19,0,u.Ab(n,20).renderedIconHTML),l(n,24,0,n.context.$implicit.end_point),l(n,34,0,n.context.$implicit.carname),l(n,36,0,u.Ab(n,37).renderedIconHTML),l(n,42,0,n.context.$implicit.available_seat),l(n,44,0,n.context.$implicit.carno),l(n,50,0,n.context.$implicit.start_time),l(n,60,0,n.context.$implicit.arrival_time)})}function O(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,8,"ion-footer",[["class","footer-bus-route-details"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.goToNextPage()&&u),u},_.ib,_.p)),u.pb(1,49152,null,0,s.B,[u.h,u.k,u.z],null,null),(l()(),u.qb(2,0,null,0,6,"ion-toolbar",[],null,null,null,_.Kb,_.R)),u.pb(3,49152,null,0,s.Db,[u.h,u.k,u.z],null,null),(l()(),u.qb(4,0,null,0,4,"p",[["style","margin: 0px 20px 0px 0px;color: white;text-align: center;"]],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),u.pb(6,573440,null,0,m.a,[h.c,m.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),u.Bb(7,2),(l()(),u.Ib(-1,null,[" \xa0RESERVE YOUR SEAT"]))],function(l,n){var t=l(n,7,0,"fas","chair");l(n,6,0,t,"1x")},function(l,n){l(n,5,0,u.Ab(n,6).renderedIconHTML)})}function T(l){return u.Kb(0,[u.Gb(402653184,1,{infiniteScroll:0}),u.Gb(402653184,2,{virtualScroll:0}),(l()(),u.qb(2,0,null,null,1,"app-header",[],null,null,null,x.b,x.a)),u.pb(3,114688,null,0,v.a,[k.m,s.f,z.b,q.a,I.a,b.a,o.a,P.a],null,null),(l()(),u.hb(16777216,null,null,1,null,S)),u.pb(5,16384,null,0,y.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(6,0,null,null,13,"ion-content",[],null,null,null,_.db,_.k)),u.pb(7,49152,null,0,s.w,[u.h,u.k,u.z],null,null),(l()(),u.qb(8,0,null,0,11,"div",[["class","inner_div"]],null,null,null,null,null)),(l()(),u.hb(16777216,null,null,1,null,M)),u.pb(10,16384,null,0,y.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.hb(16777216,null,null,1,null,w)),u.pb(12,16384,null,0,y.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.qb(13,0,null,null,6,"ion-virtual-scroll",[],[[24,"@fadein",0]],null,null,_.Lb,_.S)),u.pb(14,835584,[[2,4]],3,s.Eb,[u.z,u.s,u.k],{items:[0,"items"]},null),u.Gb(335544320,3,{itmTmp:0}),u.Gb(335544320,4,{hdrTmp:0}),u.Gb(335544320,5,{ftrTmp:0}),(l()(),u.hb(16777216,null,0,1,null,j)),u.pb(19,16384,[[3,4]],0,s.Vb,[u.L,u.P],null,null),(l()(),u.hb(16777216,null,null,1,null,O)),u.pb(21,16384,null,0,y.j,[u.P,u.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,3,0),l(n,5,0,t.progress_bar),l(n,10,0,t.no_bus_saturday),l(n,12,0,t.dataList_show),l(n,14,0,t.dataList),l(n,21,0,!t.no_bus_saturday)},function(l,n){l(n,13,0,void 0)})}function L(l){return u.Kb(0,[(l()(),u.qb(0,0,null,null,1,"app-bus-route-details",[],null,null,null,T,C)),u.pb(1,114688,null,0,p,[k.m,e.b,o.a,i.a,r.a,s.f,z.b,a.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var E=u.mb("app-bus-route-details",p,L,{},{},[]),R=t("qxEu");t.d(n,"BusRouteDetailsPageModuleNgFactory",function(){return B});var B=u.nb(d,[],function(l){return u.xb([u.yb(512,u.j,u.cb,[[8,[g.a,E]],[3,u.j],u.x]),u.yb(4608,y.l,y.k,[u.u,[2,y.u]]),u.yb(4608,e.t,e.t,[]),u.yb(4608,s.c,s.c,[u.z,u.g]),u.yb(4608,s.Jb,s.Jb,[s.c,u.j,u.q]),u.yb(4608,s.Ob,s.Ob,[s.c,u.j,u.q]),u.yb(4608,e.b,e.b,[]),u.yb(1073742336,y.b,y.b,[]),u.yb(1073742336,e.r,e.r,[]),u.yb(1073742336,e.e,e.e,[]),u.yb(1073742336,s.Fb,s.Fb,[]),u.yb(1073742336,k.q,k.q,[[2,k.w],[2,k.m]]),u.yb(1073742336,m.f,m.f,[]),u.yb(1073742336,R.a,R.a,[]),u.yb(1073742336,e.o,e.o,[]),u.yb(1073742336,d,d,[]),u.yb(1024,k.k,function(){return[[{path:"",component:p}]]},[])])})}}]);