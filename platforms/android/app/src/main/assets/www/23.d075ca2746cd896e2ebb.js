(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"47M8":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=u("S0jo"),a=u("ZgVV"),s=u("Ht5U"),e=u("WTUP"),i=u("gTw3"),r=u("hnS/"),b=u("6oYy"),c=u("Z4xi"),p=u("zA0m"),m=u("CjQN"),h=function(){function l(l,n,u,o,t,a,s,e,i,r,b,c){var p=this;this.storage=l,this.modalService=n,this.toasterService=u,this.officePoolCarService=o,this.loadingService=t,this.route=a,this.geolocation=s,this.callNumber=e,this.sms=i,this.emailComposer=r,this.barcodeScanner=b,this.socialSharing=c,this.markers=[],this.result_data={},this.coupan_div=!0,this.storage.get("USER_INFO").then(function(l){l&&(p.userId=l.id,p.name=l.name,p.userType=l.user_type_id,p.sos_number=l.sos_details.contact_no,p.sos_email=l.sos_details.contact_email)})}return l.prototype.ngOnInit=function(){this.booking_id=this.route.snapshot.params.id,console.log("this.booking_id",this.booking_id),this.getData(this.booking_id)},l.prototype.loadMap=function(){this.map=new google.maps.Map(this.mapElement.nativeElement,{center:{lat:-34.9011,lng:-56.1645},zoom:13,mapTypeId:google.maps.MapTypeId.ROADMAP,mapTypeControl:!0,streetViewControl:!0,fullscreenControl:!0});var l=new google.maps.Marker({position:{lat:22.5764753,lng:88.4306861},map:this.map,title:"you are here!"}),n=new google.maps.Marker({position:{lat:22.583979,lng:88.415482},map:this.map,title:"you are here!"});this.markers.push(l),this.map.setCenter({lat:22.5764753,lng:88.4306861}),this.markers.push(n),this.map.setCenter({lat:22.583979,lng:88.415482})},l.prototype.callNow=function(){this.callNumber.callNumber(this.sos_number,!0).then(function(l){return console.log("Launched dialer!",l)}).catch(function(l){return console.log("Error launching dialer",l)})},l.prototype.smsNow=function(){this.sms.hasPermission()&&this.sms.send(this.sos_number,"This is an emergency in bus.Please look into it immediately.").then(function(l){console.log("val",l)})},l.prototype.sendMail=function(){var l=this,n={to:this.sos_email,cc:"vicbro.arise@gmail.com",bcc:["vicbro.arise@gmail.com","rupamhazra@gmail.com"],attachments:[],subject:"This an Emergency email",body:"This is an emergency in bus.Please look into it immediately",isHtml:!1,app:"gmail"};this.emailComposer.isAvailable().then(function(u){u&&l.emailComposer.open(n)})},l.prototype.scanQrCode=function(){var l=this;this.barcodeScanner.scan().then(function(n){l.toasterService.showToast(n.text==l.result_data.seat_qr?"Your seats has been confirmed, have a safe journey":"Qr code does not match! please contact to Redy Rider Help Line",3e3)}).catch(function(l){console.log("Error",l)})},l.prototype.shareYourRoute=function(){var l="Booking Details \n -----------------\n";this.socialSharing.shareViaWhatsApp(l=(l=(l=(l=(l=(l=(l=(l=l+"Pick Up : "+this.result_data.pick_up+"\nDrop : "+this.result_data.drop+"\n")+"Seat No: "+this.result_data.seats+"\n")+"Journy date: "+this.result_data.journy_date+"\n")+"Journy time: "+this.result_data.journy_time+"\n")+"Total Fare Amount: "+this.result_data.amount+"/-\n")+"Car: "+this.result_data.car_name+"\n")+"Car No: "+this.result_data.car_no+"\n")+"Invoice No: "+this.result_data.order_no+"\n","","")},l.prototype.getData=function(l){var n=this;console.log("getData myaccount-personal"),this.loadingService.present(),this.officePoolCarService.applyCouponService({type:"booking_history",booking_id:l}).subscribe(function(l){n.result_data=l.result,n.loadingService.dismiss()},function(l){n.loadingService.dismiss(),n.toasterService.showToast(l.error.msg,2e3)})},l}(),d=function(){return function(){}}(),g=u("pMnS"),f=u("oBZk"),k=u("ZZ/e"),y=u("fNgX"),_=u("Hf/j"),z=u("ZYjt"),q=u("jWFl"),v=u("OOyK"),x=u("ZYCi"),I=u("iw74"),P=u("jKJn"),w=u("xoVG"),C=u("cGva"),M=u("Ip0R"),T=o.ob({encapsulation:0,styles:[["#map[_ngcontent-%COMP%]{width:100%;height:300px}#markerLayer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{animation:.5s infinite alternate pulse;-webkit-animation:.5s infinite alternate pulse;transform-origin:center;-webkit-transform-origin:center}ion-item[_ngcontent-%COMP%]{--background:white}.toolbar-class[_ngcontent-%COMP%]{--background:transparent;margin-left:5px;padding:0 10px 0 5px;--min-height:30px}.card_class[_ngcontent-%COMP%]{background-color:#fff;color:#fff;margin:0;border-radius:0;border-bottom:1px solid #b0b1af;border-top:1px solid #b0b1af}.no_margin_p_travel_details[_ngcontent-%COMP%]{margin:0;opacity:.7}.footer-bus-route-details[_ngcontent-%COMP%]{background:#0a5999;color:#fff}"]],data:{}});function j(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,2,"ion-badge",[["style","margin-right: 5px;"]],null,null,null,f.W,f.d)),o.pb(1,49152,null,0,k.l,[o.h,o.k,o.z],null,null),(l()(),o.Ib(2,0,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit)})}function S(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(1,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(2,0,null,0,1,"p",[["class","no_margin_p"],["color","tertiary"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Coupon Amount"])),(l()(),o.qb(4,0,null,0,4,"p",[["class","no_margin_p"],["color","tertiary"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(5,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(6,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(7,2),(l()(),o.Ib(-1,null,[" -20.00 "]))],function(l,n){var u=l(n,7,0,"fas","rupee-sign");l(n,6,0,u,"1x")},function(l,n){l(n,5,0,o.Ab(n,6).renderedIconHTML)})}function B(l){return o.Kb(0,[o.Gb(402653184,1,{mapElement:0}),(l()(),o.qb(1,0,null,null,1,"app-header",[],null,null,null,q.b,q.a)),o.pb(2,114688,null,0,v.a,[x.m,k.f,I.b,P.a,w.a,s.a,a.a,C.a],null,null),(l()(),o.qb(3,0,null,null,20,"div",[["slot","fixed"]],null,null,null,null,null)),(l()(),o.qb(4,0,null,null,19,"ion-fab",[["horizontal","start"],["slot","fixed"],["vertical","center"]],null,null,null,f.hb,f.m)),o.pb(5,49152,null,0,k.y,[o.h,o.k,o.z],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),o.qb(6,0,null,0,3,"ion-fab-button",[["color","danger"]],null,null,null,f.fb,f.n)),o.pb(7,49152,null,0,k.z,[o.h,o.k,o.z],{color:[0,"color"]},null),(l()(),o.qb(8,0,null,0,1,"ion-img",[["src","/assets/svg/sos.svg"]],null,null,null,f.mb,f.t)),o.pb(9,49152,null,0,k.F,[o.h,o.k,o.z],{src:[0,"src"]},null),(l()(),o.qb(10,0,null,0,13,"ion-fab-list",[["side","top"]],null,null,null,f.gb,f.o)),o.pb(11,49152,null,0,k.A,[o.h,o.k,o.z],{side:[0,"side"]},null),(l()(),o.qb(12,0,null,0,3,"ion-fab-button",[["color","success"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.callNow()&&o),o},f.fb,f.n)),o.pb(13,49152,null,0,k.z,[o.h,o.k,o.z],{color:[0,"color"],type:[1,"type"]},null),(l()(),o.qb(14,0,null,0,1,"ion-icon",[["ios","ios-call"],["md","md-call"]],null,null,null,f.lb,f.s)),o.pb(15,49152,null,0,k.E,[o.h,o.k,o.z],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o.qb(16,0,null,0,3,"ion-fab-button",[["color","warning"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.smsNow()&&o),o},f.fb,f.n)),o.pb(17,49152,null,0,k.z,[o.h,o.k,o.z],{color:[0,"color"],type:[1,"type"]},null),(l()(),o.qb(18,0,null,0,1,"ion-icon",[["ios","ios-chatbubbles"],["md","md-chatbubbles"]],null,null,null,f.lb,f.s)),o.pb(19,49152,null,0,k.E,[o.h,o.k,o.z],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o.qb(20,0,null,0,3,"ion-fab-button",[["color","light"],["type","button"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.sendMail()&&o),o},f.fb,f.n)),o.pb(21,49152,null,0,k.z,[o.h,o.k,o.z],{color:[0,"color"],type:[1,"type"]},null),(l()(),o.qb(22,0,null,0,1,"ion-img",[["src","/assets/svg/gmail.svg"]],null,null,null,f.mb,f.t)),o.pb(23,49152,null,0,k.F,[o.h,o.k,o.z],{src:[0,"src"]},null),(l()(),o.qb(24,0,null,null,102,"ion-content",[],null,null,null,f.db,f.k)),o.pb(25,49152,null,0,k.w,[o.h,o.k,o.z],null,null),(l()(),o.qb(26,0,null,0,23,"ion-card",[["class","card_class"]],null,null,null,f.ab,f.g)),o.pb(27,49152,null,0,k.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(28,0,null,0,21,"ion-grid",[],null,null,null,f.jb,f.q)),o.pb(29,49152,null,0,k.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(30,0,null,0,19,"ion-row",[],null,null,null,f.Bb,f.I)),o.pb(31,49152,null,0,k.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(32,0,null,0,7,"ion-col",[],null,null,null,f.cb,f.j)),o.pb(33,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(34,0,null,0,5,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(35,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(36,0,null,0,1,"ion-icon",[["name","bus"],["slot","start"],["style","font-size: 30px;"]],null,null,null,f.lb,f.s)),o.pb(37,49152,null,0,k.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(38,0,null,0,1,"p",[["class","no_margin_p_travel_details"],["style","margin-left: 10px;"]],null,null,null,null,null)),(l()(),o.Ib(39,null,[""," \xa0-\xa0",""])),(l()(),o.qb(40,0,null,0,9,"ion-col",[],null,null,null,f.cb,f.j)),o.pb(41,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(42,0,null,0,7,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(43,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(44,0,null,0,2,"fa-icon",[["class","icon-margin-top ng-fa-icon"],["size","1x"],["slot","start"],["style","font-size: 20px;margin-right: 5px;"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(45,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(46,2),(l()(),o.qb(47,0,null,0,2,"p",[["class",""],["style","margin: 5px 0 0 0;"]],null,null,null,null,null)),(l()(),o.hb(16777216,null,null,1,null,j)),o.pb(49,278528,null,0,M.k,[o.P,o.L,o.s],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(50,0,null,0,22,"ion-item",[["lines","none"]],null,null,null,f.sb,f.x)),o.pb(51,49152,null,0,k.J,[o.h,o.k,o.z],{lines:[0,"lines"]},null),(l()(),o.qb(52,0,null,0,20,"ion-label",[],null,null,null,f.tb,f.A)),o.pb(53,49152,null,0,k.P,[o.h,o.k,o.z],null,null),(l()(),o.qb(54,0,null,0,6,"div",[["style","padding-bottom: 10px;"]],null,null,null,null,null)),(l()(),o.qb(55,0,null,null,1,"p",[["style","float: left;"]],null,null,null,null,null)),(l()(),o.Ib(56,null,[""," \xa0"])),(l()(),o.qb(57,0,null,null,1,"ion-icon",[["color","success"],["name","locate"],["style","font-size: 16px;float: left;"]],null,null,null,f.lb,f.s)),o.pb(58,49152,null,0,k.E,[o.h,o.k,o.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.qb(59,0,null,null,1,"p",[["style","margin-left: 85px;opacity: 0.7;font-size: 13px;"],["text-wrap",""]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\xa034, Rishi Bankim Chandra Rd, Naihati Urban, Naihati, Kolkata, West Bengal 743165, India"])),(l()(),o.qb(61,0,null,0,4,"p",[["style","margin-left: 67px;opacity: 0.9;"]],null,null,null,null,null)),(l()(),o.qb(62,0,null,null,1,"ion-icon",[["name","more"],["style","opacity: 0.5;position: absolute;\n            top: 33px;"]],null,null,null,f.lb,f.s)),o.pb(63,49152,null,0,k.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(64,0,null,null,1,"ion-icon",[["name","more"],["style","opacity: 0.5;position: absolute;\n          top: 50px;"]],null,null,null,f.lb,f.s)),o.pb(65,49152,null,0,k.E,[o.h,o.k,o.z],{name:[0,"name"]},null),(l()(),o.qb(66,0,null,0,6,"div",[["class","div_elipse_class"]],null,null,null,null,null)),(l()(),o.qb(67,0,null,null,1,"p",[["style","float: left;"]],null,null,null,null,null)),(l()(),o.Ib(68,null,[""," \xa0"])),(l()(),o.qb(69,0,null,null,1,"ion-icon",[["color","danger"],["name","locate"],["style","font-size: 16px;float: left;"]],null,null,null,f.lb,f.s)),o.pb(70,49152,null,0,k.E,[o.h,o.k,o.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),o.qb(71,0,null,null,1,"p",[["style","margin-left: 85px;opacity: 0.7; font-size: 13px;"],["text-wrap",""]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["\xa036, Raja Subodh Chandra Mallick Rd, Dhakuria, South End Park, Jodhpur Park, Kolkata, West Bengal 700068, India"])),(l()(),o.qb(73,0,null,0,47,"ion-card",[["class","card_class"]],null,null,null,f.ab,f.g)),o.pb(74,49152,null,0,k.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(75,0,null,0,45,"ion-grid",[],null,null,null,f.jb,f.q)),o.pb(76,49152,null,0,k.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(77,0,null,0,43,"ion-row",[],null,null,null,f.Bb,f.I)),o.pb(78,49152,null,0,k.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(79,0,null,0,41,"ion-col",[],null,null,null,f.cb,f.j)),o.pb(80,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(81,0,null,0,1,"h5",[["style","color: initial;margin-left: 10px;"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Fare Details"])),(l()(),o.qb(83,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(84,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(85,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Base Fare"])),(l()(),o.qb(87,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(88,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(89,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(90,2),(l()(),o.Ib(-1,null,[" 10.00 "])),(l()(),o.qb(92,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(93,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(94,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["GST"])),(l()(),o.qb(96,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(97,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(98,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(99,2),(l()(),o.Ib(-1,null,[" 5.67 "])),(l()(),o.qb(101,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(102,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(103,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Total Fare"])),(l()(),o.qb(105,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"]],null,null,null,null,null)),(l()(),o.qb(106,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(107,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(108,2),(l()(),o.Ib(-1,null,[" 20.00 "])),(l()(),o.hb(16777216,null,0,1,null,S)),o.pb(111,16384,null,0,M.l,[o.P,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(112,0,null,0,8,"ion-toolbar",[["class","toolbar-class"]],null,null,null,f.Kb,f.R)),o.pb(113,49152,null,0,k.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(114,0,null,0,1,"p",[["class","no_margin_p"],["size","small"],["slot","start"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["TOTAL PAID"])),(l()(),o.qb(116,0,null,0,4,"p",[["class","no_margin_p"],["size","small"],["slot","end"],["style","font-weight: bold;"]],null,null,null,null,null)),(l()(),o.qb(117,0,null,null,2,"fa-icon",[["class","rstar-icon ng-fa-icon"],["size","1x"]],[[8,"innerHTML",1]],null,null,y.b,y.a)),o.pb(118,573440,null,0,_.a,[z.c,_.b],{iconProp:[0,"iconProp"],size:[1,"size"]},null),o.Bb(119,2),(l()(),o.Ib(-1,null,[" 30.00 "])),(l()(),o.qb(121,0,null,0,5,"ion-grid",[],null,null,null,f.jb,f.q)),o.pb(122,49152,null,0,k.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(123,0,null,0,3,"ion-row",[],null,null,null,f.Bb,f.I)),o.pb(124,49152,null,0,k.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(125,0,null,0,1,"ion-col",[],null,null,null,f.cb,f.j)),o.pb(126,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(127,0,null,null,17,"ion-footer",[["class","footer-bus-route-details"]],null,null,null,f.ib,f.p)),o.pb(128,49152,null,0,k.B,[o.h,o.k,o.z],null,null),(l()(),o.qb(129,0,null,0,15,"ion-grid",[["no-padding",""]],null,null,null,f.jb,f.q)),o.pb(130,49152,null,0,k.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(131,0,null,0,13,"ion-row",[],null,null,null,f.Bb,f.I)),o.pb(132,49152,null,0,k.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(133,0,null,0,5,"ion-col",[["text-center",""]],null,null,null,f.cb,f.j)),o.pb(134,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(135,0,null,0,1,"ion-icon",[["ios","ios-qr-scanner"],["md","md-qr-scanner"],["style","font-size: 30px;"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.scanQrCode()&&o),o},f.lb,f.s)),o.pb(136,49152,null,0,k.E,[o.h,o.k,o.z],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o.qb(137,0,null,0,1,"p",[["class","no_margin_p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Scan & Ride"])),(l()(),o.qb(139,0,null,0,5,"ion-col",[["text-center",""]],null,null,null,f.cb,f.j)),o.pb(140,49152,null,0,k.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(141,0,null,0,1,"ion-icon",[["ios","ios-share"],["md","md-share"],["style","font-size: 30px;"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.shareYourRoute()&&o),o},f.lb,f.s)),o.pb(142,49152,null,0,k.E,[o.h,o.k,o.z],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o.qb(143,0,null,0,1,"p",[["class","no_margin_p"]],null,null,null,null,null)),(l()(),o.Ib(-1,null,["Share Booking Info."]))],function(l,n){var u=n.component;l(n,2,0),l(n,5,0,"start","center"),l(n,7,0,"danger"),l(n,9,0,"/assets/svg/sos.svg"),l(n,11,0,"top"),l(n,13,0,"success","button"),l(n,15,0,"ios-call","md-call"),l(n,17,0,"warning","button"),l(n,19,0,"ios-chatbubbles","md-chatbubbles"),l(n,21,0,"light","button"),l(n,23,0,"/assets/svg/gmail.svg"),l(n,37,0,"bus");var o=l(n,46,0,"fas","chair");l(n,45,0,o,"1x"),l(n,49,0,u.result_data.seats),l(n,51,0,"none"),l(n,58,0,"success","locate"),l(n,63,0,"more"),l(n,65,0,"more"),l(n,70,0,"danger","locate");var t=l(n,90,0,"fas","rupee-sign");l(n,89,0,t,"1x");var a=l(n,99,0,"fas","rupee-sign");l(n,98,0,a,"1x");var s=l(n,108,0,"fas","rupee-sign");l(n,107,0,s,"1x"),l(n,111,0,u.coupan_div);var e=l(n,119,0,"fas","rupee-sign");l(n,118,0,e,"1x"),l(n,136,0,"ios-qr-scanner","md-qr-scanner"),l(n,142,0,"ios-share","md-share")},function(l,n){var u=n.component;l(n,39,0,u.result_data.car_name,u.result_data.car_no),l(n,44,0,o.Ab(n,45).renderedIconHTML),l(n,56,0,u.result_data.journy_time),l(n,68,0,u.result_data.journy_time),l(n,88,0,o.Ab(n,89).renderedIconHTML),l(n,97,0,o.Ab(n,98).renderedIconHTML),l(n,106,0,o.Ab(n,107).renderedIconHTML),l(n,117,0,o.Ab(n,118).renderedIconHTML)})}function R(l){return o.Kb(0,[(l()(),o.qb(0,0,null,null,1,"app-booking-history-details",[],null,null,null,B,T)),o.pb(1,114688,null,0,h,[I.b,t.a,a.a,s.a,e.a,x.a,i.a,r.a,b.a,c.a,p.a,m.a],null,null)],function(l,n){l(n,1,0)},null)}var E=o.mb("app-booking-history-details",h,R,{},{},[]),L=u("gIcY"),O=u("qxEu");u.d(n,"BookingHistoryDetailsPageModuleNgFactory",function(){return A});var A=o.nb(d,[],function(l){return o.xb([o.yb(512,o.j,o.cb,[[8,[g.a,E]],[3,o.j],o.x]),o.yb(4608,M.n,M.m,[o.u,[2,M.v]]),o.yb(4608,L.t,L.t,[]),o.yb(4608,k.c,k.c,[o.z,o.g]),o.yb(4608,k.Jb,k.Jb,[k.c,o.j,o.q]),o.yb(4608,k.Ob,k.Ob,[k.c,o.j,o.q]),o.yb(1073742336,M.c,M.c,[]),o.yb(1073742336,L.r,L.r,[]),o.yb(1073742336,L.e,L.e,[]),o.yb(1073742336,k.Fb,k.Fb,[]),o.yb(1073742336,x.q,x.q,[[2,x.w],[2,x.m]]),o.yb(1073742336,_.f,_.f,[]),o.yb(1073742336,O.a,O.a,[]),o.yb(1073742336,d,d,[]),o.yb(1024,x.k,function(){return[[{path:"",component:h}]]},[])])})}}]);