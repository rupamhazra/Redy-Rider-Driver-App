(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{mYw3:function(l,n,e){"use strict";e.r(n);var o=e("CcnG"),t=e("S0jo"),a=e("ZgVV"),u=e("WTUP"),i=e("8jtY"),r=e("57ec"),s=e("Ht5U"),c=e("ZZ/e"),b=e("01F9"),p=e("gRf5"),d=e("iWj2"),h=e("Pn9U"),f=e("AytR"),g=function(){function l(l,n,e,o,t,a,u,i,r,s,c,b,p,d){this.modalService=l,this.storage=n,this.router=e,this.loginRegisterService=o,this.toasterService=t,this.loadingService=a,this.officePoolCarService=u,this.myaccount_event=i,this.actionSheetCtrl=r,this.camera=s,this.transfer=c,this.platform=b,this.filePath=p,this.file=d,this.name="",this.user_details={},this.device_details=[],this.address_details={},this.progress_bar=!0}return l.prototype.ngOnInit=function(){var l=this;this.myaccount_event.subscribe("profile_update",function(n){console.log("data",n),l.getData("personal"==n.which?"myaccount-personal":"myaccount-address",n.user_id)}),this.storage.get("USER_INFO").then(function(n){n?(l.userId=n.id,l.name=n.name,l.contact=n.mobile,l.device_details=n.user_device,l.getData("myaccount-address",n.id),l.getData("myaccount-personal",n.id),l.visible_myaccount_details_div=!0):l.visible_myaccount_details_div=!1})},l.prototype.openModal=function(l){this.modalService.openModal(i.a,{from_which_page:l,userId:this.userId},"stoppage_modal_css")},l.prototype.openModal1=function(l){console.log("which",l),this.modalService.openModal(i.a,{from_which_page:l,userId:this.userId},"stoppage_modal_css")},l.prototype.goToMyaddress=function(){console.log("ssss"),this.router.navigateByUrl("/myaccount/address")},l.prototype.locateMe=function(){console.log("ssss"),this.router.navigateByUrl("/myaccount/location-tracking")},l.prototype.firebase=function(){console.log("ssss"),this.router.navigateByUrl("/myaccount/firebase")},l.prototype.changePassword=function(l){var n=this;void 0===l&&(l=!1),this.loadingService.present(),this.loginRegisterService.loginService({type:"log_by_otp",contact:this.contact}).subscribe(function(l){n.loadingService.dismiss(),n.router.navigateByUrl("/forgot-password")},function(l){n.loadingService.dismiss(),n.toasterService.showToast(l.error.msg,2e3)})},l.prototype.getData=function(l,n){var e=this;"myaccount-personal"==l?(this.progress_bar=!0,this.officePoolCarService.personalService({user_id:n}).subscribe(function(l){e.user_details=l.result,e.progress_bar=!1},function(l){e.progress_bar=!1,e.toasterService.showToast(l.error.msg,2e3)})):this.officePoolCarService.addressService({user_id:n}).subscribe(function(l){e.address_details=l.result,e.progress_bar=!1},function(l){e.progress_bar=!1,e.toasterService.showToast(l.error.msg,2e3)})},l.prototype.presentActionSheet=function(){var l=this;this.actionSheetCtrl.create({header:"Select Image Source",buttons:[{text:"Load from Library",handler:function(){l.takePicture(l.camera.PictureSourceType.PHOTOLIBRARY)}},{text:"Use Camera",handler:function(){l.takePicture(l.camera.PictureSourceType.CAMERA)}},{text:"Cancel",role:"cancel"}]}).then(function(l){l.present()})},l.prototype.takePicture=function(l){var n=this;this.camera.getPicture({allowEdit:!0,quality:100,sourceType:l,saveToPhotoAlbum:!1,correctOrientation:!0}).then(function(e){if(n.platform.is("android")&&l===n.camera.PictureSourceType.PHOTOLIBRARY)n.filePath.resolveNativePath(e).then(function(l){var o=l.substr(0,l.lastIndexOf("/")+1),t=e.substring(e.lastIndexOf("/")+1,e.lastIndexOf("?"));n.copyFileToLocalDir(o,t,n.createFileName())});else{var o=e.substr(e.lastIndexOf("/")+1),t=e.substr(0,e.lastIndexOf("/")+1);n.copyFileToLocalDir(t,o,n.createFileName())}},function(l){n.toasterService.showToast("Error while selecting image.",5e3)})},l.prototype.copyFileToLocalDir=function(l,n,e){var o=this;this.file.copyFile(l,n,cordova.file.dataDirectory,e).then(function(l){o.lastImage=e,o.uploadImage()},function(l){o.toasterService.showToast("Error while storing file.",6e3)})},l.prototype.createFileName=function(){return(new Date).getTime()+".jpg"},l.prototype.uploadImage=function(){var l=this,n=this.pathForImage(this.lastImage),e=this.lastImage,o=new Date;this.currentDate=o.getFullYear()+"-"+(o.getMonth()+1)+"-"+o.getDate();var t={type:"update",fileKey:"profile_pic",fileName:e,chunkedMode:!1,mimeType:"multipart/form-data",params:{fileName:e,upload_date:this.currentDate,user_id:this.userId}},a=this.transfer.create();this.loadingService.present(),a.upload(n,f.a.apiEndpoint+"profile/",t).then(function(n){l.loadingService.dismiss(),l.toasterService.showToast("Image succesful uploaded.");var e=JSON.parse(n.response);console.log("userUpdateImg",e)},function(n){l.loadingService.dismiss(),l.toasterService.showToast("Error while uploading file.")})},l.prototype.pathForImage=function(l){return null===l?"":cordova.file.dataDirectory+l},l}(),m=function(){return function(){}}(),y=e("pMnS"),v=e("bAmN"),_=e("oBZk"),k=e("jWFl"),P=e("OOyK"),q=e("ZYCi"),S=e("iw74"),I=e("jKJn"),x=e("xoVG"),M=e("cGva"),z=e("Ip0R"),w=e("fNgX"),C=e("Hf/j"),O=e("ZYjt"),T=o.ob({encapsulation:0,styles:[["._c_top_image[_ngcontent-%COMP%]{--size:90px;--border-radius:50%!important;margin-left:auto;margin-right:auto;border:2px solid #fff;position:relative}.top_div[_ngcontent-%COMP%]{background:linear-gradient(45deg,#0a5999 0,#02a1eb 100%);color:#fff;padding:25px;text-align:center}.f-icons[_ngcontent-%COMP%]{margin-top:70px;margin-left:15px}.sch-pool-car[_ngcontent-%COMP%]{margin:70px 15px 35px;background:#fff}.select-tour-sector[_ngcontent-%COMP%]{padding:15px 0}.card_class[_ngcontent-%COMP%]{margin-left:0;margin-right:0;background-color:#fff}.toolbar-class-top[_ngcontent-%COMP%]{--background:transparent;--color:white}.toolbar-class[_ngcontent-%COMP%]{--background:transparent}ion-title[_ngcontent-%COMP%]{font-size:15px;font-weight:400}ion-toolbar[_ngcontent-%COMP%]{--min-height:30px}"],v.a],data:{}});function D(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"ion-progress-bar",[["color","success"],["type","indeterminate"]],null,null,null,_.wb,_.E)),o.pb(1,49152,null,0,c.ab,[o.h,o.k,o.z],{color:[0,"color"],type:[1,"type"]},null)],function(l,n){l(n,1,0,"success","indeterminate")},null)}function H(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"app-header",[],null,null,null,k.b,k.a)),o.pb(1,114688,null,0,P.a,[q.m,c.f,S.b,I.a,x.a,s.a,a.a,M.a],null,null),(l()(),o.hb(16777216,null,null,1,null,D)),o.pb(3,16384,null,0,z.j,[o.P,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(4,0,null,null,85,"ion-content",[],null,null,null,_.bb,_.j)),o.pb(5,49152,null,0,c.w,[o.h,o.k,o.z],null,null),(l()(),o.qb(6,0,null,0,16,"div",[["class","top_div"]],null,null,null,null,null)),(l()(),o.qb(7,0,null,null,4,"ion-thumbnail",[["class","_c_top_image"]],null,null,null,_.Fb,_.N)),o.pb(8,49152,null,0,c.Ab,[o.h,o.k,o.z],null,null),(l()(),o.qb(9,0,null,0,0,"img",[["alt",""],["src","/assets/images/logo-form.jpg"],["style","opacity: 0.8;"]],null,null,null,null,null)),(l()(),o.qb(10,0,null,0,1,"ion-icon",[["ios","ios-camera"],["md","md-camera"],["style","    position: absolute;\n      top: 55px;\n      right: 28px;\n      font-size: 25px;\n  "]],null,[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.presentActionSheet()&&o),o},_.jb,_.r)),o.pb(11,49152,null,0,c.E,[o.h,o.k,o.z],{ios:[0,"ios"],md:[1,"md"]},null),(l()(),o.qb(12,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),o.Gb(13,null,["",""])),(l()(),o.qb(14,0,null,null,1,"p",[["style","font-size: 13px;margin: 15px 0 4px 0;"]],null,null,null,null,null)),(l()(),o.Gb(15,null,["",""])),(l()(),o.qb(16,0,null,null,6,"ion-toolbar",[["class","toolbar-class-top"]],null,null,null,_.Ib,_.Q)),o.pb(17,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(18,0,null,0,1,"p",[["style","font-size: 13px;margin: 0 0 0 0;"]],null,null,null,null,null)),(l()(),o.Gb(19,null,["",""])),(l()(),o.qb(20,0,null,0,2,"fa-icon",[["class","fa-icon-input ng-fa-icon"],["slot","end"]],[[8,"innerHTML",1]],[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openModal("myaccount-personal")&&o),o},w.b,w.a)),o.pb(21,573440,null,0,C.a,[O.c,C.b],{iconProp:[0,"iconProp"]},null),o.Bb(22,2),(l()(),o.qb(23,0,null,0,66,"div",[["class","inner_div"]],null,null,null,null,null)),(l()(),o.qb(24,0,null,null,45,"ion-card",[["class","card_class"]],null,null,null,_.Y,_.f)),o.pb(25,49152,null,0,c.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(26,0,null,0,43,"ion-grid",[],null,null,null,_.hb,_.p)),o.pb(27,49152,null,0,c.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(28,0,null,0,41,"ion-row",[],null,null,null,_.zb,_.H)),o.pb(29,49152,null,0,c.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(30,0,null,0,39,"ion-col",[],null,null,null,_.ab,_.i)),o.pb(31,49152,null,0,c.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(32,0,null,0,12,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(33,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(34,0,null,0,6,"ion-text",[["class","ion-text-center"]],null,null,null,_.Db,_.L)),o.pb(35,49152,null,0,c.yb,[o.h,o.k,o.z],null,null),(l()(),o.qb(36,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),o.qb(37,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["style","font-size: 15px;opacity: 0.4;margin-bottom: 15px;"]],[[8,"innerHTML",1]],null,null,w.b,w.a)),o.pb(38,573440,null,0,C.a,[O.c,C.b],{iconProp:[0,"iconProp"]},null),o.Bb(39,2),(l()(),o.Gb(-1,null,["\xa0ADDRESS"])),(l()(),o.qb(41,0,null,0,0,"hr",[["class","hr-border"]],null,null,null,null,null)),(l()(),o.qb(42,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"],["style","font-size: 17px;opacity: 0.4;margin-bottom: 15px;"]],[[8,"innerHTML",1]],[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.openModal1("myaccount-address")&&o),o},w.b,w.a)),o.pb(43,573440,null,0,C.a,[O.c,C.b],{iconProp:[0,"iconProp"]},null),o.Bb(44,2),(l()(),o.qb(45,0,null,0,4,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(46,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(47,0,null,0,2,"ion-title",[],null,null,null,_.Gb,_.O)),o.pb(48,49152,null,0,c.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Gb(49,0,["Address : "," "])),(l()(),o.qb(50,0,null,0,4,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(51,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(52,0,null,0,2,"ion-title",[],null,null,null,_.Gb,_.O)),o.pb(53,49152,null,0,c.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Gb(54,0,["Country : ",""])),(l()(),o.qb(55,0,null,0,4,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(56,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(57,0,null,0,2,"ion-title",[],null,null,null,_.Gb,_.O)),o.pb(58,49152,null,0,c.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Gb(59,0,["City : ",""])),(l()(),o.qb(60,0,null,0,4,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(61,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(62,0,null,0,2,"ion-title",[],null,null,null,_.Gb,_.O)),o.pb(63,49152,null,0,c.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Gb(64,0,["State : ",""])),(l()(),o.qb(65,0,null,0,4,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(66,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(67,0,null,0,2,"ion-title",[],null,null,null,_.Gb,_.O)),o.pb(68,49152,null,0,c.Bb,[o.h,o.k,o.z],null,null),(l()(),o.Gb(69,0,["Pincocde : ",""])),(l()(),o.qb(70,0,null,null,19,"ion-card",[["class","card_class"]],null,null,null,_.Y,_.f)),o.pb(71,49152,null,0,c.o,[o.h,o.k,o.z],null,null),(l()(),o.qb(72,0,null,0,17,"ion-grid",[],null,null,null,_.hb,_.p)),o.pb(73,49152,null,0,c.C,[o.h,o.k,o.z],null,null),(l()(),o.qb(74,0,null,0,15,"ion-row",[],null,null,null,_.zb,_.H)),o.pb(75,49152,null,0,c.kb,[o.h,o.k,o.z],null,null),(l()(),o.qb(76,0,null,0,13,"ion-col",[],null,null,null,_.ab,_.i)),o.pb(77,49152,null,0,c.v,[o.h,o.k,o.z],null,null),(l()(),o.qb(78,0,null,0,11,"ion-toolbar",[["class","toolbar-class"]],null,null,null,_.Ib,_.Q)),o.pb(79,49152,null,0,c.Db,[o.h,o.k,o.z],null,null),(l()(),o.qb(80,0,null,0,6,"ion-text",[["class","ion-text-center"]],null,null,null,_.Db,_.L)),o.pb(81,49152,null,0,c.yb,[o.h,o.k,o.z],null,null),(l()(),o.qb(82,0,null,0,4,"p",[["style","margin: 0 0 0 0;"]],null,null,null,null,null)),(l()(),o.qb(83,0,null,null,2,"fa-icon",[["class","ng-fa-icon"],["style","font-size: 15px;opacity: 0.4;"]],[[8,"innerHTML",1]],null,null,w.b,w.a)),o.pb(84,573440,null,0,C.a,[O.c,C.b],{iconProp:[0,"iconProp"]},null),o.Bb(85,2),(l()(),o.Gb(-1,null,["\xa0CHANGE PASSWORD"])),(l()(),o.qb(87,0,null,0,2,"fa-icon",[["class","ng-fa-icon"],["slot","end"],["style","font-size: 17px;opacity: 0.4;"]],[[8,"innerHTML",1]],[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.changePassword()&&o),o},w.b,w.a)),o.pb(88,573440,null,0,C.a,[O.c,C.b],{iconProp:[0,"iconProp"]},null),o.Bb(89,2)],function(l,n){var e=n.component;l(n,1,0),l(n,3,0,e.progress_bar),l(n,11,0,"ios-camera","md-camera");var o=l(n,22,0,"fas","edit");l(n,21,0,o);var t=l(n,39,0,"fas","address-card");l(n,38,0,t);var a=l(n,44,0,"fas","edit");l(n,43,0,a);var u=l(n,85,0,"fas","key");l(n,84,0,u);var i=l(n,89,0,"fas","edit");l(n,88,0,i)},function(l,n){var e=n.component;l(n,13,0,e.user_details.name),l(n,15,0,e.user_details.mobile),l(n,19,0,e.user_details.email),l(n,20,0,o.Ab(n,21).renderedIconHTML),l(n,37,0,o.Ab(n,38).renderedIconHTML),l(n,42,0,o.Ab(n,43).renderedIconHTML),l(n,49,0,e.address_details.address),l(n,54,0,e.address_details.country_name),l(n,59,0,e.address_details.city_name),l(n,64,0,e.address_details.state_name),l(n,69,0,e.address_details.pin_code),l(n,83,0,o.Ab(n,84).renderedIconHTML),l(n,87,0,o.Ab(n,88).renderedIconHTML)})}function L(l){return o.Hb(0,[(l()(),o.qb(0,0,null,null,1,"app-myaccount",[],null,null,null,H,T)),o.pb(1,114688,null,0,g,[t.a,S.b,q.m,r.a,a.a,u.a,s.a,c.f,c.a,h.a,p.a,c.Nb,d.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var A=o.mb("app-myaccount",g,L,{},{},[]),B=e("gIcY"),G=e("qxEu"),F=function(){return function(){}}();e.d(n,"MyaccountPageModuleNgFactory",function(){return j});var j=o.nb(m,[],function(l){return o.xb([o.yb(512,o.j,o.cb,[[8,[y.a,A]],[3,o.j],o.x]),o.yb(4608,z.l,z.k,[o.u,[2,z.t]]),o.yb(4608,B.t,B.t,[]),o.yb(4608,c.c,c.c,[o.z,o.g]),o.yb(4608,c.Jb,c.Jb,[c.c,o.j,o.q]),o.yb(4608,c.Ob,c.Ob,[c.c,o.j,o.q]),o.yb(4608,B.b,B.b,[]),o.yb(1073742336,z.b,z.b,[]),o.yb(1073742336,B.r,B.r,[]),o.yb(1073742336,B.e,B.e,[]),o.yb(1073742336,c.Fb,c.Fb,[]),o.yb(1073742336,B.o,B.o,[]),o.yb(1073742336,q.q,q.q,[[2,q.w],[2,q.m]]),o.yb(1073742336,C.f,C.f,[]),o.yb(1073742336,G.a,G.a,[]),o.yb(1073742336,F,F,[]),o.yb(1073742336,m,m,[]),o.yb(1024,q.k,function(){return[[{path:"address",loadChildren:"./customeraddress/customeraddress.module#CustomeraddressPageModule"},{path:"location-tracking",loadChildren:"./location-tracking/location-tracking.module#LocationTrackingPageModule"},{path:"wallet",loadChildren:"./wallet/wallet.module#WalletPageModule"},{path:"refer-earn",loadChildren:"./refer-earn/refer-earn.module#ReferEarnPageModule"},{path:"notification",loadChildren:"./notification/notification.module#NotificationPageModule"},{path:"booking-history",loadChildren:"./booking-history/booking-history.module#BookingHistoryPageModule"},{path:"booking-history-details/:id",loadChildren:"./booking-history-details/booking-history-details.module#BookingHistoryDetailsPageModule"}],[{path:"",component:g}]]},[])])})}}]);