(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"R/c5":function(t,o,i){"use strict";i.r(o),i.d(o,"ion_backdrop",function(){return r});var n=i("24pd"),a=(i("lSdy"),i("i1UR")),e=i("qrm+"),r=function(){function t(t){Object(n.m)(this,t),this.lastClick=-1e4,this.blocker=e.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(n.d)(this,"ionBackdropTap",7)}return t.prototype.componentDidLoad=function(){this.stopPropagation&&this.blocker.block()},t.prototype.componentDidUnload=function(){this.blocker.destroy()},t.prototype.onTouchStart=function(t){this.lastClick=Object(a.i)(t),this.emitTap(t)},t.prototype.onMouseDown=function(t){this.lastClick<Object(a.i)(t)-2500&&this.emitTap(t)},t.prototype.emitTap=function(t){this.stopPropagation&&(t.preventDefault(),t.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},t.prototype.hostData=function(){var t;return{tabindex:"-1",class:(t={},t[Object(n.e)(this)]=!0,t["backdrop-hide"]=!this.visible,t["backdrop-no-tappable"]=!this.tappable,t)}},t.prototype.render=function(){return Object(n.i)(n.a,this.hostData())},Object.defineProperty(t,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),t}()}}]);