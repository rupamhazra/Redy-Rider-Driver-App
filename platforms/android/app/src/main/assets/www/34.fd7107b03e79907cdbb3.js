(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{GfnE:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=t("gIcY"),o=t("ZgVV"),i=t("ElRG"),r=t("S0jo"),s=t("ZZ/e"),a=t("WTUP"),c=t("8jtY"),b=t("Ht5U"),p=function(){function l(l,n,t,e,u,o,i,r,s){var a=this;this.router=l,this.formBuilder=n,this.toasterService=t,this.device=e,this.modalService=u,this.bus_route_details_event=o,this.storage=i,this.loadingService=r,this.officePoolCarService=s,this.net_connection_check=!1,this.disabled_button=!1,this.disabled_button_text="SELECT THIS CAR",this.car_count=0,this.select_class="",this.mode="2",this.progress_bar=!1,this.progress_bar=!0,this.storage.get("route_search_parameters").then(function(l){var n=l;a.mode=l.single_or_round,n.cars_details=[],a.storage.set("route_search_parameters",n),a.request_data=n,a.routeDetails()})}return l.prototype.ngOnInit=function(){var l=this;this.progress_bar=!0,this.bus_route_details_event.subscribe("check_net_connection",function(n){"connect"==n&&(l.net_connection_check=!1),"disconnect"==n&&(l.net_connection_check=!0)}),this.form=this.formBuilder.group({journey_date:["",u.q.required],journey_time:["",u.q.required]})},l.prototype.routeDetails=function(){var l=this;this.officePoolCarService.commonSearchService(this.request_data).subscribe(function(n){null!=n.result&&0!=n.result.length||(l.dataList=[],l.dataList_show=!0,l.progress_bar=!1),l.dataList=n.result,l.progress_bar=!1},function(n){l.progress_bar=!1,l.toasterService.showToast(n.error.msg,2e3)})},l.prototype.reserveSeat=function(l,n){var t=this;l.car_selected=!l.car_selected,this.storage.get("route_search_parameters").then(function(e){var u=e,o={car_id:l.car_id,route_master_id:l.route_master_id,route_timing_id:l.route_timing_id,journy_date:l.traval_date,journy_time:l.traval_time,seats:[],start_point:l.start_point,end_point:l.end_point};l.car_selected?(n.target.textContent="SELECTED",u.cars_details.push(o)):(n.target.textContent="SELECT THIS CAR",u.cars_details.pop(o)),t.car_count=u.cars_details.length,t.storage.set("route_search_parameters",u)})},l.prototype.goToNextPage=function(){"1"==this.mode&&this.car_count<2?this.toasterService.showToast("Please select two cars for your round trip",3e3):"0"==this.mode&&this.car_count<1?this.toasterService.showToast("Please select one car for your single trip",3e3):this.router.navigateByUrl("/seat-layout-details")},l.prototype.loadData=function(l){},l.prototype.toggleInfiniteScroll=function(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled},l.prototype.viewRoute=function(l,n,t){this.modalService.openModal(c.a,{route_id:l,from_which_page:"bus-route-details-page",start_point:n,end_point:t},"stoppage_modal_css")},l}(),d=function(){return function(){}}(),g=t("pMnS"),_=t("oBZk"),f=t("fNgX"),h=t("Hf/j"),m=t("ZYjt"),y=t("Ip0R"),x=t("jWFl"),v=t("OOyK"),z=t("ZYCi"),k=t("iw74"),q=t("jKJn"),C=t("xoVG"),P=t("cGva"),w=e.ob({encapsulation:0,styles:[[".inner_div[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}ion-icon[_ngcontent-%COMP%]{font-size:24px}.cs-p[_ngcontent-%COMP%]{font-size:13px;font-weight:500}.background-gif[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{border-bottom:3px solid #33b5e5}._c_col_back[_ngcontent-%COMP%]{background:#0d47a1}._c_p_text_color[_ngcontent-%COMP%]{color:#757575;letter-spacing:1px}.rstar-margin[_ngcontent-%COMP%]{margin:0 0 10px}.rstar-icon[_ngcontent-%COMP%]{font-size:17px}.inner-scroll[_ngcontent-%COMP%], .top-div[_ngcontent-%COMP%]{height:50px!important}.card_back[_ngcontent-%COMP%]{background-color:#fff;margin:10px 0}ion-toolbar[_ngcontent-%COMP%]{--background:transparent}.footer-bus-route-details[_ngcontent-%COMP%]{background:#0a5999;color:#fff}ion-button[_ngcontent-%COMP%]{--background:#0ec254;color:#fff;--border-color:#0ec254;font-size:13px;padding:0;margin:0}.car_selected[_ngcontent-%COMP%]{--background:#0ec254;color:#fff;--border-color:#0ec254;font-size:13px;padding:0;margin:0;opacity:.5}.p_location[_ngcontent-%COMP%]{margin:0}"]],data:{animation:[{type:7,name:"fadein",definitions:[{type:0,name:"void",styles:{type:6,styles:{opacity:0},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"900ms ease-out"}],options:null}],options:{}},{type:7,name:"slidelefttitle",definitions:[{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translateX(150%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateX(0%)",opacity:1},offset:null},timings:"900ms 300ms ease-out"}],options:null}],options:{}}]}});function S(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"ion-progress-bar",[["class","progress_bar"],["type","indeterminate"]],null,null,null,_.wb,_.E)),e.pb(1,49152,null,0,s.ab,[e.h,e.k,e.z],{type:[0,"type"]},null)],function(l,n){l(n,1,0,"indeterminate")},null)}function E(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,5,"ion-card",[],null,null,null,_.Y,_.f)),e.pb(1,49152,null,0,s.o,[e.h,e.k,e.z],null,null),(l()(),e.qb(2,0,null,0,3,"ion-text",[["color","danger"],["text-center",""]],null,null,null,_.Db,_.L)),e.pb(3,49152,null,0,s.yb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["No car has been available "]))],function(l,n){l(n,3,0,"danger")},null)}function M(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,69,"ion-card",[["class","card_back"]],null,null,null,_.Y,_.f)),e.pb(1,49152,null,0,s.o,[e.h,e.k,e.z],{disabled:[0,"disabled"]},null),(l()(),e.qb(2,0,null,0,67,"ion-grid",[["margin-top",""],["no-padding",""]],null,null,null,_.hb,_.p)),e.pb(3,49152,null,0,s.C,[e.h,e.k,e.z],null,null),(l()(),e.qb(4,0,null,0,20,"ion-row",[["style","margin: 0 8px 0 10px;"]],null,null,null,_.zb,_.H)),e.pb(5,49152,null,0,s.kb,[e.h,e.k,e.z],null,null),(l()(),e.qb(6,0,null,0,7,"ion-col",[["size","1"],["style","padding: 0px;"],["text-center",""]],null,null,null,_.ab,_.i)),e.pb(7,49152,null,0,s.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.qb(8,0,null,0,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;margin-top: 5px;"]],null,null,null,_.kb,_.s)),e.pb(9,49152,null,0,s.F,[e.h,e.k,e.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),e.qb(10,0,null,0,1,"ion-img",[["alt","."],["src","./assets/svg/dot.svg"],["style","width: 3px;margin: 10px 0 10px 8px;"]],null,null,null,_.kb,_.s)),e.pb(11,49152,null,0,s.F,[e.h,e.k,e.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),e.qb(12,0,null,0,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;"]],null,null,null,_.kb,_.s)),e.pb(13,49152,null,0,s.F,[e.h,e.k,e.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),e.qb(14,0,null,0,10,"ion-col",[["size","11"],["style","padding: 0px;"],["text-left",""]],null,null,null,_.ab,_.i)),e.pb(15,49152,null,0,s.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.qb(16,0,null,0,1,"p",[["class","p_location"]],null,null,null,null,null)),(l()(),e.Gb(17,null,["",""])),(l()(),e.qb(18,0,null,0,4,"p",[["style","margin: 10px 0 10px 0;color:#02A1EB;"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.viewRoute(l.context.$implicit.route_master_id,l.context.$implicit.start_point_id,l.context.$implicit.end_point_id)&&e),e},null,null)),(l()(),e.qb(19,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),e.pb(20,573440,null,0,h.a,[m.c,h.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Bb(21,2),(l()(),e.Gb(-1,null,["\xa0View Route"])),(l()(),e.qb(23,0,null,0,1,"p",[["class","p_location"]],null,null,null,null,null)),(l()(),e.Gb(24,null,["",""])),(l()(),e.qb(25,0,null,0,19,"ion-row",[["no-margin",""],["no-padding",""],["style","margin-left: 10px;"]],null,null,null,_.zb,_.H)),e.pb(26,49152,null,0,s.kb,[e.h,e.k,e.z],null,null),(l()(),e.qb(27,0,null,0,17,"ion-col",[["no-margin",""],["no-padding",""]],null,null,null,_.ab,_.i)),e.pb(28,49152,null,0,s.v,[e.h,e.k,e.z],null,null),(l()(),e.qb(29,0,null,0,13,"ion-toolbar",[["style","--min-height:35px;"]],null,null,null,_.Ib,_.Q)),e.pb(30,49152,null,0,s.Db,[e.h,e.k,e.z],null,null),(l()(),e.qb(31,0,null,0,1,"ion-icon",[["name","bus"],["slot","start"]],null,null,null,_.jb,_.r)),e.pb(32,49152,null,0,s.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.qb(33,0,null,0,1,"p",[["style","margin:0px;"]],null,null,null,null,null)),(l()(),e.Gb(34,null,["\xa0",""])),(l()(),e.qb(35,0,null,0,7,"p",[["slot","end"],["style","margin:0 26px 0px 0px;font-size: 13px;"]],null,null,null,null,null)),(l()(),e.qb(36,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),e.pb(37,573440,null,0,h.a,[m.c,h.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Bb(38,2),(l()(),e.Gb(-1,null,["\xa0\xa0Available Seats : "])),(l()(),e.qb(40,0,null,null,2,"ion-text",[["color","success"]],null,null,null,_.Db,_.L)),e.pb(41,49152,null,0,s.yb,[e.h,e.k,e.z],{color:[0,"color"]},null),(l()(),e.Gb(42,0,["",""])),(l()(),e.qb(43,0,null,0,1,"p",[["style","margin:-7px 0px 2px 24px;"]],null,null,null,null,null)),(l()(),e.Gb(44,null,["\xa0",""])),(l()(),e.qb(45,0,null,0,15,"ion-row",[],null,null,null,_.zb,_.H)),e.pb(46,49152,null,0,s.kb,[e.h,e.k,e.z],null,null),(l()(),e.qb(47,0,null,0,3,"ion-col",[["size","6"]],null,null,null,_.ab,_.i)),e.pb(48,49152,null,0,s.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.qb(49,0,null,0,1,"p",[["style","font-size: 19px;margin: 0 0 0 30px;color:#000000;"]],null,null,null,null,null)),(l()(),e.Gb(50,null,["",""])),(l()(),e.qb(51,0,null,0,9,"ion-col",[["size","6"]],null,null,null,_.ab,_.i)),e.pb(52,49152,null,0,s.v,[e.h,e.k,e.z],{size:[0,"size"]},null),(l()(),e.qb(53,0,null,0,5,"ion-toolbar",[["style","--min-height:24px;"]],null,null,null,_.Ib,_.Q)),e.pb(54,49152,null,0,s.Db,[e.h,e.k,e.z],null,null),(l()(),e.qb(55,0,null,0,1,"ion-icon",[["name","alarm"],["slot","start"],["style","font-size: 20px;opacity: 0.6;"]],null,null,null,_.jb,_.r)),e.pb(56,49152,null,0,s.E,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.qb(57,0,null,0,1,"p",[["style","opacity: 0.6;margin: 0 0px 0 0;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["\xa0 You will reach by"])),(l()(),e.qb(59,0,null,0,1,"p",[["style","margin:0px 0px 5px 27px;opacity: 0.6;font-size: 13px;"]],null,null,null,null,null)),(l()(),e.Gb(60,null,["",""])),(l()(),e.qb(61,0,null,0,8,"ion-row",[["no-margin",""],["no-padding",""]],null,null,null,_.zb,_.H)),e.pb(62,49152,null,0,s.kb,[e.h,e.k,e.z],null,null),(l()(),e.qb(63,0,null,0,6,"ion-col",[],null,null,null,_.ab,_.i)),e.pb(64,49152,null,0,s.v,[e.h,e.k,e.z],null,null),(l()(),e.qb(65,0,null,0,4,"ion-button",[["expand","block"],["size","large"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reserveSeat(l.context.$implicit,t)&&e),e},_.V,_.d)),e.pb(66,278528,null,0,y.h,[e.s,e.t,e.k,e.D],{ngClass:[0,"ngClass"]},null),e.Cb(67,{car_selected:0}),e.pb(68,49152,null,0,s.m,[e.h,e.k,e.z],{expand:[0,"expand"],size:[1,"size"],type:[2,"type"]},null),(l()(),e.Gb(-1,0,[" SELECT THIS CAR "]))],function(l,n){l(n,1,0,n.component.net_connection_check),l(n,7,0,"1"),l(n,9,0,"redy rider","./assets/svg/logo.svg"),l(n,11,0,".","./assets/svg/dot.svg"),l(n,13,0,"redy rider","./assets/svg/logo.svg"),l(n,15,0,"11");var t=l(n,21,0,"fas","route");l(n,20,0,t,"1x"),l(n,32,0,"bus");var e=l(n,38,0,"fas","chair");l(n,37,0,e,"1x"),l(n,41,0,"success"),l(n,48,0,"6"),l(n,52,0,"6"),l(n,56,0,"alarm");var u=l(n,67,0,n.context.$implicit.car_selected);l(n,66,0,u),l(n,68,0,"block","large","button")},function(l,n){l(n,17,0,n.context.$implicit.start_point),l(n,19,0,e.Ab(n,20).renderedIconHTML),l(n,24,0,n.context.$implicit.end_point),l(n,34,0,n.context.$implicit.carname),l(n,36,0,e.Ab(n,37).renderedIconHTML),l(n,42,0,n.context.$implicit.available_seat),l(n,44,0,n.context.$implicit.carno),l(n,50,0,n.context.$implicit.start_time),l(n,60,0,n.context.$implicit.arrival_time)})}function O(l){return e.Hb(0,[e.Eb(402653184,1,{infiniteScroll:0}),e.Eb(402653184,2,{virtualScroll:0}),(l()(),e.qb(2,0,null,null,1,"app-header",[],null,null,null,x.b,x.a)),e.pb(3,114688,null,0,v.a,[z.m,s.f,k.b,q.a,C.a,b.a,o.a,P.a],null,null),(l()(),e.hb(16777216,null,null,1,null,S)),e.pb(5,16384,null,0,y.j,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(6,0,null,null,11,"ion-content",[],null,null,null,_.bb,_.j)),e.pb(7,49152,null,0,s.w,[e.h,e.k,e.z],null,null),(l()(),e.qb(8,0,null,0,9,"div",[["class","inner_div"]],null,null,null,null,null)),(l()(),e.hb(16777216,null,null,1,null,E)),e.pb(10,16384,null,0,y.j,[e.P,e.L],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(11,0,null,null,6,"ion-virtual-scroll",[],[[24,"@fadein",0]],null,null,_.Jb,_.R)),e.pb(12,835584,[[2,4]],3,s.Eb,[e.z,e.s,e.k],{items:[0,"items"]},null),e.Eb(335544320,3,{itmTmp:0}),e.Eb(335544320,4,{hdrTmp:0}),e.Eb(335544320,5,{ftrTmp:0}),(l()(),e.hb(16777216,null,0,1,null,M)),e.pb(17,16384,[[3,4]],0,s.Vb,[e.L,e.P],null,null),(l()(),e.qb(18,0,null,null,8,"ion-footer",[["class","footer-bus-route-details"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.goToNextPage()&&e),e},_.gb,_.o)),e.pb(19,49152,null,0,s.B,[e.h,e.k,e.z],null,null),(l()(),e.qb(20,0,null,0,6,"ion-toolbar",[],null,null,null,_.Ib,_.Q)),e.pb(21,49152,null,0,s.Db,[e.h,e.k,e.z],null,null),(l()(),e.qb(22,0,null,0,4,"p",[["style","margin: 0px 20px 0px 0px;color: white;text-align: center;"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,f.b,f.a)),e.pb(24,573440,null,0,h.a,[m.c,h.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),e.Bb(25,2),(l()(),e.Gb(-1,null,[" \xa0RESERVE YOUR SEAT"]))],function(l,n){var t=n.component;l(n,3,0),l(n,5,0,t.progress_bar),l(n,10,0,t.dataList_show),l(n,12,0,t.dataList);var e=l(n,25,0,"fas","chair");l(n,24,0,e,"1x")},function(l,n){l(n,11,0,void 0),l(n,23,0,e.Ab(n,24).renderedIconHTML)})}function T(l){return e.Hb(0,[(l()(),e.qb(0,0,null,null,1,"app-bus-route-details",[],null,null,null,O,w)),e.pb(1,114688,null,0,p,[z.m,u.b,o.a,i.a,r.a,s.f,k.b,a.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var H=e.mb("app-bus-route-details",p,T,{},{},[]),L=t("qxEu");t.d(n,"BusRouteDetailsPageModuleNgFactory",function(){return j});var j=e.nb(d,[],function(l){return e.xb([e.yb(512,e.j,e.cb,[[8,[g.a,H]],[3,e.j],e.x]),e.yb(4608,y.l,y.k,[e.u,[2,y.t]]),e.yb(4608,u.t,u.t,[]),e.yb(4608,s.c,s.c,[e.z,e.g]),e.yb(4608,s.Jb,s.Jb,[s.c,e.j,e.q]),e.yb(4608,s.Ob,s.Ob,[s.c,e.j,e.q]),e.yb(4608,u.b,u.b,[]),e.yb(1073742336,y.b,y.b,[]),e.yb(1073742336,u.r,u.r,[]),e.yb(1073742336,u.e,u.e,[]),e.yb(1073742336,s.Fb,s.Fb,[]),e.yb(1073742336,z.q,z.q,[[2,z.w],[2,z.m]]),e.yb(1073742336,h.f,h.f,[]),e.yb(1073742336,L.a,L.a,[]),e.yb(1073742336,u.o,u.o,[]),e.yb(1073742336,d,d,[]),e.yb(1024,z.k,function(){return[[{path:"",component:p}]]},[])])})}}]);