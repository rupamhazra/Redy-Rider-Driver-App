(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{v0jP:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("gIcY"),o=u("57ec"),i=u("ZgVV"),a=u("WTUP"),s=u("S0jo"),g=u("ZZ/e"),r=u("y8gV"),b=function(){function n(n,l,u,t,e,o,i,a,s,g){this.loginRegisterService=n,this.router=l,this.formBuilder=u,this.toasterService=t,this.loadingService=e,this.modalService=o,this.storage=i,this.pass_event=a,this.authenticationService=s,this.menuCtrl=g,this.OTP="",this.passwordShown=!1,this.otp1="",this.otp2="",this.otp3="",this.otp4="",this.potp1="",this.potp2="",this.potp3="",this.potp4=""}return n.prototype.ngOnInit=function(){var n=this;this.form=this.formBuilder.group({potp1:["",e.q.required],potp2:["",e.q.required],potp3:["",e.q.required],potp4:["",e.q.required]}),this.start(),this.storage.get("user_details").then(function(l){console.log("val",l),l?n.contact=l.contact:n.storage.get("USER_INFO").then(function(l){n.contact=l.mobile,n.from_which_page="myaccount"})})},n.prototype.start=function(){var n=this;SMSReceive.startWatch(function(){document.addEventListener("onSMSArrive",function(l){n.processSMS(l.data)})},function(){console.log("watch start failed")})},n.prototype.stop=function(){SMSReceive.stopWatch(function(){console.log("watch stopped")},function(){console.log("watch stop failed")})},n.prototype.processSMS=function(n){this.loadingService.dismiss(),n.body&&(this.OTP=n.body.slice(0,4),this.otp1=this.OTP[0],this.otp2=this.OTP[1],this.otp3=this.OTP[2],this.otp4=this.OTP[3],this.stop())},n.prototype.saveNewPassword=function(){var n=this;this.loadingService.present(),this.request_data={pass:this.form.value.potp1+this.form.value.potp2+this.form.value.potp3+this.form.value.potp4,contact:this.contact,type:"reset"},console.log("this.request_data",this.request_data),this.loginRegisterService.resetPasswordService(this.request_data).subscribe(function(l){n.loadingService.dismiss(),"myaccount"==n.from_which_page?(n.menuCtrl.enable(!1),n.authenticationService.logout()):n.router.navigateByUrl("/login"),n.toasterService.showToast(l.msg,2e3)},function(l){n.loadingService.dismiss(),n.toasterService.showToast(l.error.msg,2e3)})},n.prototype.togglePassword=function(){this.passwordShown=!this.passwordShown},n.prototype.closeForgotPasswordModal=function(){this.modalService.closeModal()},n.prototype.moveFocus=function(n,l,u){n&&n.setFocus(),("Backspace"==l.key&&8==l.keyCode||"Delete"==l.key&&46==l.keyCode)&&u.setFocus()},n}(),p=function(){return function(){}}(),h=u("pMnS"),d=u("oBZk"),c=u("jWFl"),m=u("OOyK"),C=u("ZYCi"),f=u("iw74"),v=u("jKJn"),y=u("xoVG"),A=u("Ht5U"),x=u("cGva"),k=u("Ip0R"),w=t.ob({encapsulation:0,styles:[[".otp-input2[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{display:inline-block;text-align:center;line-height:30px;font-size:30px;border-bottom:2px solid #86888f;width:20%;cursor:none!important}.otp-input2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-align:center}.rotp[_ngcontent-%COMP%]{font-size:20px;margin-top:12px}.otp-input2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:5%}.item-md.item-input.input-has-focus[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%], .item-md.item-input.item-input-has-focus[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%], .item-md.item-input.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%], .item-md.item-input[_ngcontent-%COMP%]:not(.input-has-focus):not(.item-input-has-focus)   .item-inner[_ngcontent-%COMP%]{border-bottom-color:transparent;box-shadow:none}.phone-no[_ngcontent-%COMP%]{background:0 0;height:100%}.item-ios.item-block[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%]{border:none}.otp-margin-right[_ngcontent-%COMP%]{margin-right:10px}.grid_border_top[_ngcontent-%COMP%]{border-top:1px solid #ddd}"]],data:{}});function P(n){return t.Kb(0,[(n()(),t.qb(0,0,null,null,2,"ion-text",[["name","eye"],["slot","end"],["style","    margin-left: 0px;"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.togglePassword()&&t),t},d.Fb,d.M)),t.pb(1,49152,null,0,g.yb,[t.h,t.k,t.z],null,null),(n()(),t.Ib(-1,0,["Show"]))],null,null)}function M(n){return t.Kb(0,[(n()(),t.qb(0,0,null,null,2,"ion-text",[["name","eye"],["slot","end"],["style","    margin-left: 0px;"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.togglePassword()&&t),t},d.Fb,d.M)),t.pb(1,49152,null,0,g.yb,[t.h,t.k,t.z],null,null),(n()(),t.Ib(-1,0,["HIde"]))],null,null)}function S(n){return t.Kb(0,[(n()(),t.qb(0,0,null,null,1,"app-header",[],null,null,null,c.b,c.a)),t.pb(1,114688,null,0,m.a,[C.m,g.f,f.b,v.a,y.a,A.a,i.a,x.a],null,null),(n()(),t.qb(2,0,null,null,125,"ion-content",[],null,null,null,d.db,d.k)),t.pb(3,49152,null,0,g.w,[t.h,t.k,t.z],null,null),(n()(),t.qb(4,0,null,0,123,"div",[["class","inner_div"]],null,null,null,null,null)),(n()(),t.qb(5,0,null,null,112,"div",[["class","ion-text-center ion-padding"]],null,null,null,null,null)),(n()(),t.qb(6,0,null,null,5,"ion-text",[],null,null,null,d.Fb,d.M)),t.pb(7,49152,null,0,g.yb,[t.h,t.k,t.z],null,null),(n()(),t.qb(8,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Reset Password"])),(n()(),t.qb(10,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["4 digit OTP code"])),(n()(),t.qb(12,0,null,null,40,"ion-item",[["class","ion-text-center ion-margin-bottom"],["lines","none"]],null,null,null,d.sb,d.x)),t.pb(13,49152,null,0,g.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(n()(),t.qb(14,0,null,0,36,"div",[["class","otp-input2"]],null,null,null,null,null)),(n()(),t.qb(15,0,null,null,8,"ion-input",[["class","otp-margin-right"],["maxlength","1"],["readonly",""],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,18)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,18)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.otp1=u)&&e),e},d.pb,d.w)),t.pb(16,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(18,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(20,671744,null,0,e.m,[[8,null],[6,e.h],[8,null],[6,e.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.m]),t.pb(22,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(23,49152,[["Field1",4]],0,g.I,[t.h,t.k,t.z],{maxlength:[0,"maxlength"],readonly:[1,"readonly"],type:[2,"type"]},null),(n()(),t.qb(24,0,null,null,8,"ion-input",[["class","otp-margin-right"],["maxlength","1"],["readonly",""],["type","tel"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,27)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,27)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.otp2=u)&&e),e},d.pb,d.w)),t.pb(25,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(27,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(29,671744,null,0,e.m,[[8,null],[6,e.h],[8,null],[6,e.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.m]),t.pb(31,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(32,49152,[["Field2",4]],0,g.I,[t.h,t.k,t.z],{maxlength:[0,"maxlength"],readonly:[1,"readonly"],type:[2,"type"]},null),(n()(),t.qb(33,0,null,null,8,"ion-input",[["class","otp-margin-right"],["maxlength","1"],["readonly",""]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,36)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,36)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.otp3=u)&&e),e},d.pb,d.w)),t.pb(34,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(36,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(38,671744,null,0,e.m,[[8,null],[6,e.h],[8,null],[6,e.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.m]),t.pb(40,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(41,49152,[["Field3",4]],0,g.I,[t.h,t.k,t.z],{maxlength:[0,"maxlength"],readonly:[1,"readonly"]},null),(n()(),t.qb(42,0,null,null,8,"ion-input",[["maxlength","1"],["readonly",""]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,45)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,45)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.otp4=u)&&e),e},d.pb,d.w)),t.pb(43,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(45,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(47,671744,null,0,e.m,[[8,null],[6,e.h],[8,null],[6,e.i]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.m]),t.pb(49,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(50,49152,[["Field4",4]],0,g.I,[t.h,t.k,t.z],{maxlength:[0,"maxlength"],readonly:[1,"readonly"]},null),(n()(),t.qb(51,0,null,0,1,"ion-icon",[["name","chatbubbles"],["slot","start"],["style"," margin-right: 0px;"]],null,null,null,d.lb,d.s)),t.pb(52,49152,null,0,g.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(n()(),t.qb(53,0,null,null,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var e=!0;return"submit"===l&&(e=!1!==t.Ab(n,55).onSubmit(u)&&e),"reset"===l&&(e=!1!==t.Ab(n,55).onReset()&&e),e},null,null)),t.pb(54,16384,null,0,e.s,[],null,null),t.pb(55,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Fb(2048,null,e.a,null,[e.d]),t.pb(57,16384,null,0,e.l,[[4,e.a]],null,null),(n()(),t.qb(58,0,null,null,59,"ion-grid",[],null,null,null,d.jb,d.q)),t.pb(59,49152,null,0,g.C,[t.h,t.k,t.z],null,null),(n()(),t.qb(60,0,null,0,57,"ion-row",[["class","ion-justify-content-center"]],null,null,null,d.Bb,d.I)),t.pb(61,49152,null,0,g.kb,[t.h,t.k,t.z],null,null),(n()(),t.qb(62,0,null,0,55,"ion-col",[["class","ion-align-self-center"]],null,null,null,d.cb,d.j)),t.pb(63,49152,null,0,g.v,[t.h,t.k,t.z],null,null),(n()(),t.qb(64,0,null,0,53,"div",[["style","padding-top: 10px;"]],null,null,null,null,null)),(n()(),t.qb(65,0,null,null,3,"ion-text",[],null,null,null,d.Fb,d.M)),t.pb(66,49152,null,0,g.yb,[t.h,t.k,t.z],null,null),(n()(),t.qb(67,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Ib(-1,null,["Set new 4 digit password"])),(n()(),t.qb(69,0,null,null,44,"ion-item",[["class","ion-text-center ion-margin-bottom"],["lines","none"]],null,null,null,d.sb,d.x)),t.pb(70,49152,null,0,g.J,[t.h,t.k,t.z],{lines:[0,"lines"]},null),(n()(),t.qb(71,0,null,0,36,"div",[["class","otp-input2"]],null,null,null,null,null)),(n()(),t.qb(72,0,null,null,8,"ion-input",[["autofocus","true"],["class","otp-margin-right"],["formControlName","potp1"],["maxlength","1"],["tabindex","1"],["type","tel"]],[[4,"-webkit-text-security",null],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,75)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,75)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.potp1=u)&&e),"keyup"===l&&(e=!1!==o.moveFocus(t.Ab(n,89),u,t.Ab(n,80))&&e),e},d.pb,d.w)),t.pb(73,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(75,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(77,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.c]),t.pb(79,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(80,49152,[["pField1",4]],0,g.I,[t.h,t.k,t.z],{autofocus:[0,"autofocus"],maxlength:[1,"maxlength"],type:[2,"type"]},null),(n()(),t.qb(81,0,null,null,8,"ion-input",[["autofocus","true"],["class","otp-margin-right"],["formControlName","potp2"],["maxlength","1"],["tabindex","2"],["type","tel"]],[[4,"-webkit-text-security",null],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,84)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,84)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.potp2=u)&&e),"keyup"===l&&(e=!1!==o.moveFocus(t.Ab(n,98),u,t.Ab(n,80))&&e),e},d.pb,d.w)),t.pb(82,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(84,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(86,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.c]),t.pb(88,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(89,49152,[["pField2",4]],0,g.I,[t.h,t.k,t.z],{autofocus:[0,"autofocus"],maxlength:[1,"maxlength"],type:[2,"type"]},null),(n()(),t.qb(90,0,null,null,8,"ion-input",[["autofocus","true"],["class","otp-margin-right"],["formControlName","potp3"],["maxlength","1"],["tabindex","3"],["type","tel"]],[[4,"-webkit-text-security",null],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,93)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,93)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.potp3=u)&&e),"keyup"===l&&(e=!1!==o.moveFocus(t.Ab(n,107),u,t.Ab(n,89))&&e),e},d.pb,d.w)),t.pb(91,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(93,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(95,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.c]),t.pb(97,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(98,49152,[["pField3",4]],0,g.I,[t.h,t.k,t.z],{autofocus:[0,"autofocus"],maxlength:[1,"maxlength"],type:[2,"type"]},null),(n()(),t.qb(99,0,null,null,8,"ion-input",[["autofocus","true"],["formControlName","potp4"],["maxlength","1"],["tabindex","4"],["type","tel"]],[[4,"-webkit-text-security",null],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Ab(n,102)._handleBlurEvent()&&e),"ionChange"===l&&(e=!1!==t.Ab(n,102)._handleInputEvent(u.target.value)&&e),"ngModelChange"===l&&(e=!1!==(o.potp4=u)&&e),"keyup"===l&&(e=!1!==o.moveFocus(t.Ab(n,107),u,t.Ab(n,98))&&e),e},d.pb,d.w)),t.pb(100,540672,null,0,e.f,[],{maxlength:[0,"maxlength"]},null),t.Fb(1024,null,e.h,function(n){return[n]},[e.f]),t.pb(102,16384,null,0,g.Sb,[t.k],null,null),t.Fb(1024,null,e.i,function(n){return[n]},[g.Sb]),t.pb(104,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,e.j,null,[e.c]),t.pb(106,16384,null,0,e.k,[[4,e.j]],null,null),t.pb(107,49152,[["pField4",4]],0,g.I,[t.h,t.k,t.z],{autofocus:[0,"autofocus"],maxlength:[1,"maxlength"],type:[2,"type"]},null),(n()(),t.qb(108,0,null,0,1,"ion-icon",[["name","lock"],["slot","start"],["style"," margin-right: 0px;"]],null,null,null,d.lb,d.s)),t.pb(109,49152,null,0,g.E,[t.h,t.k,t.z],{name:[0,"name"]},null),(n()(),t.hb(16777216,null,0,1,null,P)),t.pb(111,16384,null,0,k.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.hb(16777216,null,0,1,null,M)),t.pb(113,16384,null,0,k.j,[t.P,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(114,0,null,null,3,"div",[["style","margin-top: 15px;"]],null,null,null,null,null)),(n()(),t.qb(115,0,null,null,2,"ion-button",[["size","default"],["type","button"]],null,[[null,"click"]],function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.saveNewPassword()&&t),t},d.X,d.e)),t.pb(116,49152,null,0,g.m,[t.h,t.k,t.z],{disabled:[0,"disabled"],size:[1,"size"],type:[2,"type"]},null),(n()(),t.Ib(-1,0,["Save"])),(n()(),t.qb(118,0,null,null,9,"ion-grid",[["class","grid_border_top"]],null,null,null,d.jb,d.q)),t.pb(119,49152,null,0,g.C,[t.h,t.k,t.z],null,null),(n()(),t.qb(120,0,null,0,7,"ion-row",[["margin-bottom",""]],null,null,null,d.Bb,d.I)),t.pb(121,49152,null,0,g.kb,[t.h,t.k,t.z],null,null),(n()(),t.qb(122,0,null,0,5,"ion-col",[],null,null,null,d.cb,d.j)),t.pb(123,49152,null,0,g.v,[t.h,t.k,t.z],null,null),(n()(),t.qb(124,0,null,0,3,"ion-text",[["text-center",""]],null,null,null,d.Fb,d.M)),t.pb(125,49152,null,0,g.yb,[t.h,t.k,t.z],null,null),(n()(),t.qb(126,0,null,0,1,"p",[["class","no_text_decoration"]],null,null,null,null,null)),(n()(),t.Ib(-1,null,[" Copyright \xa9 2020 Saha Tour & Travels. "]))],function(n,l){var u=l.component;n(l,1,0),n(l,13,0,"none"),n(l,16,0,"1"),n(l,20,0,u.otp1),n(l,23,0,"1","","tel"),n(l,25,0,"1"),n(l,29,0,u.otp2),n(l,32,0,"1","","tel"),n(l,34,0,"1"),n(l,38,0,u.otp3),n(l,41,0,"1",""),n(l,43,0,"1"),n(l,47,0,u.otp4),n(l,50,0,"1",""),n(l,52,0,"chatbubbles"),n(l,55,0,u.form),n(l,70,0,"none"),n(l,73,0,"1"),n(l,77,0,"potp1",u.potp1),n(l,80,0,"true","1","tel"),n(l,82,0,"1"),n(l,86,0,"potp2",u.potp2),n(l,89,0,"true","1","tel"),n(l,91,0,"1"),n(l,95,0,"potp3",u.potp3),n(l,98,0,"true","1","tel"),n(l,100,0,"1"),n(l,104,0,"potp4",u.potp4),n(l,107,0,"true","1","tel"),n(l,109,0,"lock"),n(l,111,0,!u.passwordShown),n(l,113,0,u.passwordShown),n(l,116,0,u.form.invalid,"default","button")},function(n,l){var u=l.component;n(l,15,0,t.Ab(l,16).maxlength?t.Ab(l,16).maxlength:null,t.Ab(l,22).ngClassUntouched,t.Ab(l,22).ngClassTouched,t.Ab(l,22).ngClassPristine,t.Ab(l,22).ngClassDirty,t.Ab(l,22).ngClassValid,t.Ab(l,22).ngClassInvalid,t.Ab(l,22).ngClassPending),n(l,24,0,t.Ab(l,25).maxlength?t.Ab(l,25).maxlength:null,t.Ab(l,31).ngClassUntouched,t.Ab(l,31).ngClassTouched,t.Ab(l,31).ngClassPristine,t.Ab(l,31).ngClassDirty,t.Ab(l,31).ngClassValid,t.Ab(l,31).ngClassInvalid,t.Ab(l,31).ngClassPending),n(l,33,0,t.Ab(l,34).maxlength?t.Ab(l,34).maxlength:null,t.Ab(l,40).ngClassUntouched,t.Ab(l,40).ngClassTouched,t.Ab(l,40).ngClassPristine,t.Ab(l,40).ngClassDirty,t.Ab(l,40).ngClassValid,t.Ab(l,40).ngClassInvalid,t.Ab(l,40).ngClassPending),n(l,42,0,t.Ab(l,43).maxlength?t.Ab(l,43).maxlength:null,t.Ab(l,49).ngClassUntouched,t.Ab(l,49).ngClassTouched,t.Ab(l,49).ngClassPristine,t.Ab(l,49).ngClassDirty,t.Ab(l,49).ngClassValid,t.Ab(l,49).ngClassInvalid,t.Ab(l,49).ngClassPending),n(l,53,0,t.Ab(l,57).ngClassUntouched,t.Ab(l,57).ngClassTouched,t.Ab(l,57).ngClassPristine,t.Ab(l,57).ngClassDirty,t.Ab(l,57).ngClassValid,t.Ab(l,57).ngClassInvalid,t.Ab(l,57).ngClassPending),n(l,72,0,!1===u.passwordShown?"disc":"",t.Ab(l,73).maxlength?t.Ab(l,73).maxlength:null,t.Ab(l,79).ngClassUntouched,t.Ab(l,79).ngClassTouched,t.Ab(l,79).ngClassPristine,t.Ab(l,79).ngClassDirty,t.Ab(l,79).ngClassValid,t.Ab(l,79).ngClassInvalid,t.Ab(l,79).ngClassPending),n(l,81,0,!1===u.passwordShown?"disc":"",t.Ab(l,82).maxlength?t.Ab(l,82).maxlength:null,t.Ab(l,88).ngClassUntouched,t.Ab(l,88).ngClassTouched,t.Ab(l,88).ngClassPristine,t.Ab(l,88).ngClassDirty,t.Ab(l,88).ngClassValid,t.Ab(l,88).ngClassInvalid,t.Ab(l,88).ngClassPending),n(l,90,0,!1===u.passwordShown?"disc":"",t.Ab(l,91).maxlength?t.Ab(l,91).maxlength:null,t.Ab(l,97).ngClassUntouched,t.Ab(l,97).ngClassTouched,t.Ab(l,97).ngClassPristine,t.Ab(l,97).ngClassDirty,t.Ab(l,97).ngClassValid,t.Ab(l,97).ngClassInvalid,t.Ab(l,97).ngClassPending),n(l,99,0,!1===u.passwordShown?"disc":"",t.Ab(l,100).maxlength?t.Ab(l,100).maxlength:null,t.Ab(l,106).ngClassUntouched,t.Ab(l,106).ngClassTouched,t.Ab(l,106).ngClassPristine,t.Ab(l,106).ngClassDirty,t.Ab(l,106).ngClassValid,t.Ab(l,106).ngClassInvalid,t.Ab(l,106).ngClassPending)})}function q(n){return t.Kb(0,[(n()(),t.qb(0,0,null,null,1,"app-forgot-password",[],null,null,null,S,w)),t.pb(1,114688,null,0,b,[o.a,C.m,e.b,i.a,a.a,s.a,f.b,g.f,r.a,g.Ib],null,null)],function(n,l){n(l,1,0)},null)}var _=t.mb("app-forgot-password",b,q,{},{},[]),F=u("Hf/j"),I=u("qxEu");u.d(l,"ForgotPasswordPageModuleNgFactory",function(){return O});var O=t.nb(p,[],function(n){return t.xb([t.yb(512,t.j,t.cb,[[8,[h.a,_]],[3,t.j],t.x]),t.yb(4608,k.l,k.k,[t.u,[2,k.u]]),t.yb(4608,e.t,e.t,[]),t.yb(4608,e.b,e.b,[]),t.yb(4608,g.c,g.c,[t.z,t.g]),t.yb(4608,g.Jb,g.Jb,[g.c,t.j,t.q]),t.yb(4608,g.Ob,g.Ob,[g.c,t.j,t.q]),t.yb(1073742336,k.b,k.b,[]),t.yb(1073742336,e.r,e.r,[]),t.yb(1073742336,e.e,e.e,[]),t.yb(1073742336,e.o,e.o,[]),t.yb(1073742336,g.Fb,g.Fb,[]),t.yb(1073742336,C.q,C.q,[[2,C.w],[2,C.m]]),t.yb(1073742336,F.f,F.f,[]),t.yb(1073742336,I.a,I.a,[]),t.yb(1073742336,p,p,[]),t.yb(1024,C.k,function(){return[[{path:"",component:b}]]},[])])})}}]);