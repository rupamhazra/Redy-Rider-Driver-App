(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{GQVx:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),a=u("ZZ/e"),e=u("Ht5U"),i=u("WTUP"),s=u("ZgVV"),t=u("gIcY"),r=function(){function l(l,n,u,o,a,e,i){var s=this;this.router=l,this.booked_details_event=n,this.toasterService=u,this.officePoolCarService=o,this.loadingService=a,this.storage=e,this.formBuilder=i,this.net_connection_check=!1,this.total_seat_fare_details={},this.payId=[],this.progress_bar=!1,this.progress_bar=!0,this.storage.get("select_location").then(function(l){s.bookedDetails_res=l.booking_details,s.pickup_location=l.pickup_location,s.drop_location=l.drop_location}),this.storage.get("bookingDetails").then(function(l){s.bookedDetails_res=l.booking_details,s.total_seat_fare_details=l.total_fare_details;for(var n=0;n<l.booking_details.length;n++)s.payId.push(l.booking_details[n].fare_details.pay_id)}),this.progress_bar=!1,this.storage.get("USER_INFO").then(function(l){s.userId=l.id})}return l.prototype.ngOnInit=function(){var l=this;this.booked_details_event.subscribe("check_net_connection",function(n){"connect"==n&&(l.net_connection_check=!1),"disconnect"==n&&(l.net_connection_check=!0)}),this.form=this.formBuilder.group({coupon_code:["",t.q.required]})},l.prototype.goPaymentPage=function(){this.router.navigateByUrl("payment-details")},l.prototype.applyCoupon=function(){var l=this;this.loadingService.present();var n={type:"coupan",pay_id:this.payId,user_id:this.userId,coupan_id:this.form.value.coupon_code};console.log("request_data",n),this.officePoolCarService.applyCouponService(n).subscribe(function(n){console.log("res.result",n),l.total_seat_fare_details=n.result.total_fare_details,l.bookedDetails_res=n.result.booking_details,l.storage.remove("bookingDetails"),l.storage.set("bookingDetails",n.result),l.coupan_div=!0,l.form.reset(),l.loadingService.dismiss(),l.toasterService.showToast("Your coupon code applied successfully",2e3)},function(n){l.loadingService.dismiss(),l.toasterService.showToast(n.error.msg,2e3)})},l}(),b=function(){return function(){}}(),c=u("pMnS"),p=u("oBZk"),d=u("fNgX"),g=u("Hf/j"),_=u("ZYjt"),f=u("Ip0R"),m=u("jWFl"),h=u("OOyK"),z=u("ZYCi"),q=u("iw74"),k=u("jKJn"),v=u("xoVG"),x=u("cGva"),y=o.ob({encapsulation:0,styles:[[".inner_div[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px}.card_class[_ngcontent-%COMP%]{margin-left:0;margin-right:0;background-color:#fff}.toolbar-class[_ngcontent-%COMP%]{--background:transparent;margin-left:5px;padding:3px}ion-title[_ngcontent-%COMP%]{font-size:15px;font-weight:400;padding-left:5px}ion-toolbar[_ngcontent-%COMP%]{--min-height:18px}ion-badge[_ngcontent-%COMP%]{margin-bottom:-5px;margin-right:3px;border-radius:10px;padding:3px 2px 3px 5px;background:#0a5999}ion-icon[_ngcontent-%COMP%]{font-size:20px}.rstar-icon[_ngcontent-%COMP%]{font-size:15px}.no_margin_p[_ngcontent-%COMP%]{margin:0 15px 0 0!important;color:#fff}.no_margin_p_travel_details[_ngcontent-%COMP%]{margin:0;opacity:.7}.fare_details_class[_ngcontent-%COMP%]{background:#b0b1af;color:#fff!important;border-radius:5px;margin:0 5px 5px}hr[_ngcontent-%COMP%]{border-top:1px solid #fff!important}ion-button[_ngcontent-%COMP%]{padding:0 0 10px;--background:linear-gradient(45deg, #0A5999 0%, #02A1EB 100%);margin:0}"]],data:{}});function P(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"ion-progress-bar",[["color","success"],["type","indeterminate"]],null,null,null,p.wb,p.E)),o.pb(1,49152,null,0,a.ab,[o.h,o.k,o.z],{color:[0,"color"],type:[1,"type"]},null)],function(l,n){l(n,1,0,"success","indeterminate")},null)}function I(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,2,"ion-badge",[],null,null,null,p.U,p.c)),o.pb(1,49152,null,0,a.l,[o.h,o.k,o.z],null,null),(l()(),o.Gb(2,0,["","\xa0 "]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function A(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,97,"div",[],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,96,"ion-card",[["class","card_class"]],null,null,null,p.Y,p.f)),o.pb(2,49152,null,0,a.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(3,0,null,0,94,"ion-grid",[["margin-top",""],["no-padding",""]],null,null,null,p.hb,p.p)),o.pb(4,49152,null,0,a.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(5,0,null,0,20,"ion-row",[["style","margin-left: 5px;"]],null,null,null,p.zb,p.H)),o.pb(6,49152,null,0,a.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(7,0,null,0,18,"ion-col",[],null,null,null,p.ab,p.i)),o.pb(8,49152,null,0,a.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(9,0,null,0,6,"div",[["class","desti"]],null,null,null,null,null)),(l()(),o.qb(10,0,null,null,2,"div",[["class","eb_left"]],null,null,null,null,null)),(l()(),o.qb(11,0,null,null,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;margin-right: 5px;"]],null,null,null,p.kb,p.s)),o.pb(12,49152,null,0,a.F,[o.h,o.k,o.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),o.qb(13,0,null,null,1,"div",[["class","eb_padding"]],null,null,null,null,null)),(l()(),o.Gb(14,null,["",""])),(l()(),o.qb(15,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),o.qb(16,0,null,0,2,"div",[["style","margin: -8px 0px 4px 8px;"]],null,null,null,null,null)),(l()(),o.qb(17,0,null,null,1,"ion-img",[["alt","."],["src","./assets/svg/dot.svg"],["style","width: 3px;"]],null,null,null,p.kb,p.s)),o.pb(18,49152,null,0,a.F,[o.h,o.k,o.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),o.qb(19,0,null,0,6,"div",[["class","desti"]],null,null,null,null,null)),(l()(),o.qb(20,0,null,null,2,"div",[["class","eb_left"]],null,null,null,null,null)),(l()(),o.qb(21,0,null,null,1,"ion-img",[["alt","redy rider"],["src","./assets/svg/logo.svg"],["style","width: 20px;margin-right: 5px;"]],null,null,null,p.kb,p.s)),o.pb(22,49152,null,0,a.F,[o.h,o.k,o.z],{alt:[0,"alt"],src:[1,"src"]},null),(l()(),o.qb(23,0,null,null,1,"div",[["class","eb_padding"]],null,null,null,null,null)),(l()(),o.Gb(24,null,["",""])),(l()(),o.qb(25,0,null,null,0,"div",[["class","clear"]],null,null,null,null,null)),(l()(),o.qb(26,0,null,0,31,"ion-row",[],null,null,null,p.zb,p.H)),o.pb(27,49152,null,0,a.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(28,0,null,0,13,"ion-col",[["size","6"]],null,null,null,p.ab,p.i)),o.pb(29,49152,null,0,a.v,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.qb(30,0,null,0,5,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(31,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(32,0,null,0,1,"ion-icon",[["class","icon-margin-top"],["name","bus"],["slot","start"]],null,null,null,p.jb,p.r)),o.pb(33,49152,null,0,a.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(34,0,null,0,1,"p",[["class","no_margin_p_travel_details"]],null,null,null,null,null)),(l()(),o.Gb(35,null,["",""])),(l()(),o.qb(36,0,null,0,5,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(37,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(38,0,null,0,1,"ion-icon",[["class","icon-margin-top"],["name","calendar"],["slot","start"]],null,null,null,p.jb,p.r)),o.pb(39,49152,null,0,a.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(40,0,null,0,1,"p",[["class","no_margin_p_travel_details"]],null,null,null,null,null)),(l()(),o.Gb(41,null,["",""])),(l()(),o.qb(42,0,null,0,15,"ion-col",[["size","6"]],null,null,null,p.ab,p.i)),o.pb(43,49152,null,0,a.v,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.qb(44,0,null,0,7,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(45,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(46,0,null,0,2,"fa-icon",[["class","icon-margin-top ng-fa-icon"],["size","1x"],["slot","start"],["style","font-size: 15px;margin-right: 5px;margin-left: 5px;"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(47,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(48,2),(l()(),o.qb(49,0,null,0,2,"p",[["class","no_margin_p_travel_details"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,I)),o.pb(51,278528,null,0,f.i,[o.P,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(52,0,null,0,5,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(53,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(54,0,null,0,1,"ion-icon",[["class","icon-margin-top"],["name","clock"],["slot","start"]],null,null,null,p.jb,p.r)),o.pb(55,49152,null,0,a.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(56,0,null,0,1,"p",[["class","no_margin_p_travel_details"]],null,null,null,null,null)),(l()(),o.Gb(57,null,["",""])),(l()(),o.qb(58,0,null,0,39,"ion-row",[["class","fare_details_class"]],null,null,null,p.zb,p.H)),o.pb(59,49152,null,0,a.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(60,0,null,0,37,"ion-col",[],null,null,null,p.ab,p.i)),o.pb(61,49152,null,0,a.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(62,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(63,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(64,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Base Fare"])),(l()(),o.qb(66,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(67,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(68,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(69,2),(l()(),o.Gb(70,null,[" "," "])),(l()(),o.qb(71,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(72,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(73,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Total Fare"])),(l()(),o.qb(75,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(76,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(77,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(78,2),(l()(),o.Gb(79,null,[" "," "])),(l()(),o.qb(80,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(81,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(82,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["GST"])),(l()(),o.qb(84,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(85,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(86,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(87,2),(l()(),o.Gb(88,null,[" "," "])),(l()(),o.qb(89,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(90,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(91,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["TOTAL PAYABLE"])),(l()(),o.qb(93,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.qb(94,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(95,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(96,2),(l()(),o.Gb(97,null,[" "," "]))],function(l,n){l(n,12,0,"redy rider","./assets/svg/logo.svg"),l(n,18,0,".","./assets/svg/dot.svg"),l(n,22,0,"redy rider","./assets/svg/logo.svg"),l(n,29,0,"6"),l(n,33,0,"bus"),l(n,39,0,"calendar"),l(n,43,0,"6");var u=l(n,48,0,"fas","chair");l(n,47,0,u,"1x"),l(n,51,0,n.context.$implicit.seat_details.seats),l(n,55,0,"clock");var o=l(n,69,0,"fas","rupee-sign");l(n,68,0,o,"1x");var a=l(n,78,0,"fas","rupee-sign");l(n,77,0,a,"1x");var e=l(n,87,0,"fas","rupee-sign");l(n,86,0,e,"1x");var i=l(n,96,0,"fas","rupee-sign");l(n,95,0,i,"1x")},function(l,n){var u=n.component;l(n,14,0,u.pickup_location),l(n,24,0,u.drop_location),l(n,35,0,n.context.$implicit.travel_details.Bus_no),l(n,41,0,n.context.$implicit.travel_details.journy_date),l(n,46,0,o.Ab(n,47).renderedIconHTML),l(n,57,0,n.context.$implicit.travel_details.journy_time),l(n,67,0,o.Ab(n,68).renderedIconHTML),l(n,70,0,n.context.$implicit.fare_details.base_fare),l(n,76,0,o.Ab(n,77).renderedIconHTML),l(n,79,0,n.context.$implicit.fare_details.total_fare),l(n,85,0,o.Ab(n,86).renderedIconHTML),l(n,88,0,n.context.$implicit.fare_details.gst),l(n,94,0,o.Ab(n,95).renderedIconHTML),l(n,97,0,n.context.$implicit.fare_details.payable_fare)})}function C(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(1,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(2,0,null,0,1,"p",[["class","no_margin_p"],["color","tertiary"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Coupon Amount"])),(l()(),o.qb(4,0,null,0,4,"p",[["class","no_margin_p"],["color","tertiary"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(5,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(6,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(7,2),(l()(),o.Gb(8,null,[" -"," "]))],function(l,n){var u=l(n,7,0,"fas","rupee-sign");l(n,6,0,u,"1x")},function(l,n){var u=n.component;l(n,5,0,o.Ab(n,6).renderedIconHTML),l(n,8,0,u.total_seat_fare_details.coupan_rs)})}function M(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"app-header",[],null,null,null,m.b,m.a)),o.pb(1,114688,null,0,h.a,[z.m,a.f,q.b,k.a,v.a,e.a,s.a,x.a],null,null),(l()(),o.hb(16777216,null,null,1,null,P)),o.pb(3,16384,null,0,f.j,[o.P,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(4,0,null,null,76,"ion-content",[],null,null,null,p.bb,p.j)),o.pb(5,49152,null,0,a.w,[o.h,o.k,o.z],null,null),(l()(),o.qb(6,0,null,0,74,"div",[["class","inner_div"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,A)),o.pb(8,278528,null,0,f.i,[o.P,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(9,0,null,null,41,"ion-card",[["class","card_class"],["style","background: #02A1EB;"]],null,null,null,p.Y,p.f)),o.pb(10,49152,null,0,a.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(11,0,null,0,39,"ion-grid",[],null,null,null,p.hb,p.p)),o.pb(12,49152,null,0,a.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(13,0,null,0,37,"ion-row",[["class",""]],null,null,null,p.zb,p.H)),o.pb(14,49152,null,0,a.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(15,0,null,0,35,"ion-col",[],null,null,null,p.ab,p.i)),o.pb(16,49152,null,0,a.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(17,0,null,0,3,"ion-text",[["class","ion-text-center"]],null,null,null,p.Db,p.L)),o.pb(18,49152,null,0,a.yb,[o.h,o.k,o.z],null,null),(l()(),o.qb(19,0,null,0,1,"p",[["class","no_margin_p"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["TOTAL FARE DETAILS"])),(l()(),o.qb(21,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),o.qb(22,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(23,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(24,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["Total Fare"])),(l()(),o.qb(26,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(27,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(28,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(29,2),(l()(),o.Gb(30,null,[" "," "])),(l()(),o.qb(31,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(32,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(33,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["GST"])),(l()(),o.qb(35,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(36,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(37,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(38,2),(l()(),o.Gb(39,null,[" "," "])),(l()(),o.hb(16777216,null,0,1,null,C)),o.pb(41,16384,null,0,f.j,[o.P,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(42,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,p.Ib,p.Q)),o.pb(43,49152,null,0,a.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(44,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["TOTAL PAYABLE"])),(l()(),o.qb(46,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.qb(47,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,d.b,d.a)),o.pb(48,573440,null,0,g.a,[_.c,g.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(49,2),(l()(),o.Gb(50,null,[" "," "])),(l()(),o.qb(51,0,null,null,24,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var a=!0;return"submit"===n&&(a=!1!==o.Ab(l,53).onSubmit(u)&&a),"reset"===n&&(a=!1!==o.Ab(l,53).onReset()&&a),a},null,null)),o.pb(52,16384,null,0,t.s,[],null,null),o.pb(53,540672,null,0,t.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Db(2048,null,t.a,null,[t.d]),o.pb(55,16384,null,0,t.l,[[4,t.a]],null,null),(l()(),o.qb(56,0,null,null,19,"ion-grid",[],null,null,null,p.hb,p.p)),o.pb(57,49152,null,0,a.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(58,0,null,0,17,"ion-row",[],null,null,null,p.zb,p.H)),o.pb(59,49152,null,0,a.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(60,0,null,0,10,"ion-col",[["size","8"],["style","padding-right: 0px;"]],null,null,null,p.ab,p.i)),o.pb(61,49152,null,0,a.v,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.qb(62,0,null,0,8,"ion-input",[["autofocus","on"],["clearInput","true"],["color","primary"],["formControlName","coupon_code"],["inputmode","text"],["required",""],["style","background: #ffffff;height:45px;font-size: 18px;"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var a=!0;return"ionBlur"===n&&(a=!1!==o.Ab(l,65)._handleBlurEvent()&&a),"ionChange"===n&&(a=!1!==o.Ab(l,65)._handleInputEvent(u.target.value)&&a),a},p.nb,p.v)),o.pb(63,16384,null,0,t.p,[],{required:[0,"required"]},null),o.Db(1024,null,t.h,function(l){return[l]},[t.p]),o.pb(65,16384,null,0,a.Sb,[o.k],null,null),o.Db(1024,null,t.i,function(l){return[l]},[a.Sb]),o.pb(67,671744,null,0,t.c,[[3,t.a],[6,t.h],[8,null],[6,t.i],[2,t.u]],{name:[0,"name"]},null),o.Db(2048,null,t.j,null,[t.c]),o.pb(69,16384,null,0,t.k,[[4,t.j]],null,null),o.pb(70,49152,null,0,a.I,[o.h,o.k,o.z],{autofocus:[0,"autofocus"],clearInput:[1,"clearInput"],color:[2,"color"],inputmode:[3,"inputmode"],required:[4,"required"],type:[5,"type"]},null),(l()(),o.qb(71,0,null,0,4,"ion-col",[["size","4"],["style","padding: 0 0 0 0;"]],null,null,null,p.ab,p.i)),o.pb(72,49152,null,0,a.v,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.qb(73,0,null,0,2,"ion-button",[["class","ion-margin-top"],["color","success"],["size","large"],["style","margin-top: 0px;border-radius:0px;padding: 4px 0px 6px 0px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.applyCoupon()&&o),o},p.V,p.d)),o.pb(74,49152,null,0,a.m,[o.h,o.k,o.z],{color:[0,"color"],disabled:[1,"disabled"],size:[2,"size"],type:[3,"type"]},null),(l()(),o.Gb(-1,0,[" APPLY "])),(l()(),o.qb(76,0,null,null,4,"ion-button",[["class","ion-margin-top"],["expand","full"],["size","large"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goPaymentPage()&&o),o},p.V,p.d)),o.pb(77,49152,null,0,a.m,[o.h,o.k,o.z],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"],type:[3,"type"]},null),(l()(),o.Gb(-1,0,[" CONFIRM YOUR BOOKING "])),(l()(),o.qb(79,0,null,0,1,"ion-icon",[["name","arrow-round-forward"]],null,null,null,p.jb,p.r)),o.pb(80,49152,null,0,a.E,[o.h,o.k,o.z],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,3,0,u.progress_bar),l(n,8,0,u.bookedDetails_res);var o=l(n,29,0,"fas","rupee-sign");l(n,28,0,o,"1x");var a=l(n,38,0,"fas","rupee-sign");l(n,37,0,a,"1x"),l(n,41,0,u.coupan_div);var e=l(n,49,0,"fas","rupee-sign");l(n,48,0,e,"1x"),l(n,53,0,u.form),l(n,61,0,"8"),l(n,63,0,""),l(n,67,0,"coupon_code"),l(n,70,0,"on","true","primary","text","","text"),l(n,72,0,"4"),l(n,74,0,"success",u.net_connection_check||u.form.invalid,"large","button"),l(n,77,0,u.net_connection_check,"full","large","button"),l(n,80,0,"arrow-round-forward")},function(l,n){var u=n.component;l(n,27,0,o.Ab(n,28).renderedIconHTML),l(n,30,0,u.total_seat_fare_details.total_fare),l(n,36,0,o.Ab(n,37).renderedIconHTML),l(n,39,0,u.total_seat_fare_details.gst),l(n,47,0,o.Ab(n,48).renderedIconHTML),l(n,50,0,u.total_seat_fare_details.payable_fare),l(n,51,0,o.Ab(n,55).ngClassUntouched,o.Ab(n,55).ngClassTouched,o.Ab(n,55).ngClassPristine,o.Ab(n,55).ngClassDirty,o.Ab(n,55).ngClassValid,o.Ab(n,55).ngClassInvalid,o.Ab(n,55).ngClassPending),l(n,62,0,o.Ab(n,63).required?"":null,o.Ab(n,69).ngClassUntouched,o.Ab(n,69).ngClassTouched,o.Ab(n,69).ngClassPristine,o.Ab(n,69).ngClassDirty,o.Ab(n,69).ngClassValid,o.Ab(n,69).ngClassInvalid,o.Ab(n,69).ngClassPending)})}function T(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"app-booked-details",[],null,null,null,M,y)),o.pb(1,114688,null,0,r,[z.m,a.f,s.a,e.a,i.a,q.b,t.b],null,null)],function(l,n){l(n,1,0)},null)}var G=o.mb("app-booked-details",r,T,{},{},[]),H=u("qxEu");u.d(n,"BookedDetailsPageModuleNgFactory",function(){return L});var L=o.nb(b,[],function(l){return o.xb([o.yb(512,o.j,o.cb,[[8,[c.a,G]],[3,o.j],o.x]),o.yb(4608,f.l,f.k,[o.u,[2,f.t]]),o.yb(4608,t.t,t.t,[]),o.yb(4608,t.b,t.b,[]),o.yb(4608,a.c,a.c,[o.z,o.g]),o.yb(4608,a.Jb,a.Jb,[a.c,o.j,o.q]),o.yb(4608,a.Ob,a.Ob,[a.c,o.j,o.q]),o.yb(1073742336,f.b,f.b,[]),o.yb(1073742336,t.r,t.r,[]),o.yb(1073742336,t.e,t.e,[]),o.yb(1073742336,t.o,t.o,[]),o.yb(1073742336,a.Fb,a.Fb,[]),o.yb(1073742336,z.q,z.q,[[2,z.w],[2,z.m]]),o.yb(1073742336,g.f,g.f,[]),o.yb(1073742336,H.a,H.a,[]),o.yb(1073742336,b,b,[]),o.yb(1024,z.k,function(){return[[{path:"",component:r}]]},[])])})}}]);