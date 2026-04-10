import{A as Jt,B as en,C as Pe,D as tn,E as nn,F as rn,G as on,H as an,I as sn,J as cn,K as ln,M as Ae,N as dn,c as Je,d as et,f as Ne,g as tt,k as Ht,l as nt,m as Ut,n as $t,o as Vt,p as Wt,q as qt,r as Qt,s as Gt,u as Yt,v as Kt,w as Xt,x as he,y as Zt,z as pe}from"./chunk-IMNS4QNX.js";import{$ as J,A as Dt,Ab as Ze,B as Ye,Bb as Ce,Cb as x,Cc as jt,D as Rt,Db as M,E as oe,Ea as ce,H as St,Ha as f,Hb as Ot,Ib as ue,J as Se,Ja as ve,Jb as P,Ka as W,Kb as Ee,Lb as b,Mb as Ie,N as kt,Nb as Te,Ob as A,Pa as le,Pb as Nt,Qb as Pt,R as xt,S as $,Ta as C,Tb as At,U as V,Ua as ee,Va as p,Vb as Fe,Wa as v,Xa as j,Y as X,Z,a as Qe,aa as we,ac as Bt,b as Ge,ba as s,bc as me,cc as F,db as H,dc as Oe,e as gt,eb as S,fb as k,g as _t,ga as Mt,ha as Et,i as z,ia as Ke,j as Y,ja as It,jb as D,ka as Xe,kb as u,l as yt,la as ae,lb as m,m as wt,ma as se,mb as T,n as vt,nc as zt,oa as Tt,p as E,q as ye,qa as ke,qb as ne,r as Ct,rb as ie,sa as te,sb as _,t as L,tb as Ft,u as K,ua as xe,va as N,vb as Me,wc as Lt,xa as I,xb as q,yb as de,yc as fe,z as bt,zb as U}from"./chunk-JHBTSVCP.js";function be(i){i||(i=s(se));let r=new _t(e=>{if(i.destroyed){e.next();return}return i.onDestroy(e.next.bind(e))});return e=>e.pipe($(r))}var Hn=["determinateSpinner"];function Un(i,r){if(i&1&&(Ke(),u(0,"svg",11),T(1,"circle",12),m()),i&2){let e=q();H("viewBox",e._viewBox()),f(),ue("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),H("r",e._circleRadius())}}var $n=new J("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:un})}),un=100,Vn=10,mn=(()=>{class i{_elementRef=s(I);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s($n),t=Jt(),n=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=n.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&n.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=un;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Vn)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,n){if(t&1&&Ce(Hn,5),t&2){let o;x(o=M())&&(n._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,n){t&2&&(H("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),Ee("mat-"+n.color),ue("width",n.diameter,"px")("height",n.diameter,"px")("--mat-progress-spinner-size",n.diameter+"px")("--mat-progress-spinner-active-indicator-width",n.diameter+"px"),P("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",Oe],diameter:[2,"diameter","diameter",Oe],strokeWidth:[2,"strokeWidth","strokeWidth",Oe]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,n){if(t&1&&(j(0,Un,2,8,"ng-template",null,0,Pt),u(2,"div",2,1),Ke(),u(4,"svg",3),T(5,"circle",4),m()(),It(),u(6,"div",5)(7,"div",6)(8,"div",7),_(9,8),m(),u(10,"div",9),_(11,8),m(),u(12,"div",10),_(13,8),m()()()),t&2){let o=Ot(1);f(4),H("viewBox",n._viewBox()),f(),ue("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),H("r",n._circleRadius()),f(4),D("ngTemplateOutlet",o),f(2),D("ngTemplateOutlet",o),f(2),D("ngTemplateOutlet",o)}},dependencies:[zt],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var fn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[pe]})}return i})();var qn=[[["caption"]],[["colgroup"],["col"]],"*"],Qn=["caption","colgroup, col","*"];function Gn(i,r){i&1&&U(0,2)}function Yn(i,r){i&1&&(u(0,"thead",0),_(1,1),m(),u(2,"tbody",0),_(3,2)(4,3),m(),u(5,"tfoot",0),_(6,4),m())}function Kn(i,r){i&1&&_(0,1)(1,2)(2,3)(3,4)}var B=new J("CDK_TABLE");var Le=(()=>{class i{template=s(W);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkCellDef",""]]})}return i})(),je=(()=>{class i{template=s(W);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkHeaderCellDef",""]]})}return i})(),gn=(()=>{class i{template=s(W);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkFooterCellDef",""]]})}return i})(),ge=(()=>{class i{_table=s(B,{optional:!0});_hasStickyChanged=!1;get name(){return this._name}set name(e){this._setNameInput(e)}_name;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;get stickyEnd(){return this._stickyEnd}set stickyEnd(e){e!==this._stickyEnd&&(this._stickyEnd=e,this._hasStickyChanged=!0)}_stickyEnd=!1;cell;headerCell;footerCell;cssClassFriendlyName;_columnCssClassName;constructor(){}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,n,o){if(t&1&&Ze(o,Le,5)(o,je,5)(o,gn,5),t&2){let a;x(a=M())&&(n.cell=a.first),x(a=M())&&(n.headerCell=a.first),x(a=M())&&(n.footerCell=a.first)}},inputs:{name:[0,"cdkColumnDef","name"],sticky:[2,"sticky","sticky",F],stickyEnd:[2,"stickyEnd","stickyEnd",F]}})}return i})(),ze=class{constructor(r,e){e.nativeElement.classList.add(...r._columnCssClassName)}},_n=(()=>{class i extends ze{constructor(){super(s(ge),s(I))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[v]})}return i})();var yn=(()=>{class i extends ze{constructor(){let e=s(ge),t=s(I);super(e,t);let n=e._table?._getCellRole();n&&t.nativeElement.setAttribute("role",n)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[v]})}return i})();var rt=(()=>{class i{template=s(W);_differs=s(me);columns;_columnsDiffer;constructor(){}ngOnChanges(e){if(!this._columnsDiffer){let t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof Re?e.headerCell.template:this instanceof ot?e.footerCell.template:e.cell.template}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,features:[xe]})}return i})(),Re=(()=>{class i extends rt{_table=s(B,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(W),s(me))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:[0,"cdkHeaderRowDef","columns"],sticky:[2,"cdkHeaderRowDefSticky","sticky",F]},features:[v,xe]})}return i})(),ot=(()=>{class i extends rt{_table=s(B,{optional:!0});_hasStickyChanged=!1;get sticky(){return this._sticky}set sticky(e){e!==this._sticky&&(this._sticky=e,this._hasStickyChanged=!0)}_sticky=!1;constructor(){super(s(W),s(me))}ngOnChanges(e){super.ngOnChanges(e)}hasStickyChanged(){let e=this._hasStickyChanged;return this.resetStickyChanged(),e}resetStickyChanged(){this._hasStickyChanged=!1}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:[0,"cdkFooterRowDef","columns"],sticky:[2,"cdkFooterRowDefSticky","sticky",F]},features:[v,xe]})}return i})(),He=(()=>{class i extends rt{_table=s(B,{optional:!0});when;constructor(){super(s(W),s(me))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkRowDef",""]],inputs:{columns:[0,"cdkRowDefColumns","columns"],when:[0,"cdkRowDefWhen","when"]},features:[v]})}return i})(),re=(()=>{class i{_viewContainer=s(le);cells;context;static mostRecentCellOutlet=null;constructor(){i.mostRecentCellOutlet=this}ngOnDestroy(){i.mostRecentCellOutlet===this&&(i.mostRecentCellOutlet=null)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","cdkCellOutlet",""]]})}return i})(),at=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&_(0,0)},dependencies:[re],encapsulation:2})}return i})();var st=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&_(0,0)},dependencies:[re],encapsulation:2})}return i})(),wn=(()=>{class i{templateRef=s(W);_contentClassNames=["cdk-no-data-row","cdk-row"];_cellClassNames=["cdk-cell","cdk-no-data-cell"];_cellSelector="td, cdk-cell, [cdk-cell], .cdk-cell";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["ng-template","cdkNoDataRow",""]]})}return i})(),hn=["top","bottom","left","right"],it=class{_isNativeHtmlTable;_stickCellCss;_isBrowser;_needsPositionStickyOnElement;direction;_positionListener;_tableInjector;_elemSizeCache=new WeakMap;_resizeObserver=globalThis?.ResizeObserver?new globalThis.ResizeObserver(r=>this._updateCachedSizes(r)):null;_updatedStickyColumnsParamsToReplay=[];_stickyColumnsReplayTimeout=null;_cachedCellWidths=[];_borderCellCss;_destroyed=!1;constructor(r,e,t=!0,n=!0,o,a,c){this._isNativeHtmlTable=r,this._stickCellCss=e,this._isBrowser=t,this._needsPositionStickyOnElement=n,this.direction=o,this._positionListener=a,this._tableInjector=c,this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(r,e){(e.includes("left")||e.includes("right"))&&this._removeFromStickyColumnReplayQueue(r);let t=[];for(let n of r)n.nodeType===n.ELEMENT_NODE&&t.push(n,...Array.from(n.children));ve({write:()=>{for(let n of t)this._removeStickyStyle(n,e)}},{injector:this._tableInjector})}updateStickyColumns(r,e,t,n=!0,o=!0){if(!r.length||!this._isBrowser||!(e.some(O=>O)||t.some(O=>O))){this._positionListener?.stickyColumnsUpdated({sizes:[]}),this._positionListener?.stickyEndColumnsUpdated({sizes:[]});return}let a=r[0],c=a.children.length,l=this.direction==="rtl",d=l?"right":"left",h=l?"left":"right",g=e.lastIndexOf(!0),y=t.indexOf(!0),w,ft,ht;o&&this._updateStickyColumnReplayQueue({rows:[...r],stickyStartStates:[...e],stickyEndStates:[...t]}),ve({earlyRead:()=>{w=this._getCellWidths(a,n),ft=this._getStickyStartColumnPositions(w,e),ht=this._getStickyEndColumnPositions(w,t)},write:()=>{for(let O of r)for(let R=0;R<c;R++){let pt=O.children[R];e[R]&&this._addStickyStyle(pt,d,ft[R],R===g),t[R]&&this._addStickyStyle(pt,h,ht[R],R===y)}this._positionListener&&w.some(O=>!!O)&&(this._positionListener.stickyColumnsUpdated({sizes:g===-1?[]:w.slice(0,g+1).map((O,R)=>e[R]?O:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:y===-1?[]:w.slice(y).map((O,R)=>t[R+y]?O:null).reverse()}))}},{injector:this._tableInjector})}stickRows(r,e,t){if(!this._isBrowser)return;let n=t==="bottom"?r.slice().reverse():r,o=t==="bottom"?e.slice().reverse():e,a=[],c=[],l=[];ve({earlyRead:()=>{for(let d=0,h=0;d<n.length;d++){if(!o[d])continue;a[d]=h;let g=n[d];l[d]=this._isNativeHtmlTable?Array.from(g.children):[g];let y=this._retrieveElementSize(g).height;h+=y,c[d]=y}},write:()=>{let d=o.lastIndexOf(!0);for(let h=0;h<n.length;h++){if(!o[h])continue;let g=a[h],y=h===d;for(let w of l[h])this._addStickyStyle(w,t,g,y)}t==="top"?this._positionListener?.stickyHeaderRowsUpdated({sizes:c,offsets:a,elements:l}):this._positionListener?.stickyFooterRowsUpdated({sizes:c,offsets:a,elements:l})}},{injector:this._tableInjector})}updateStickyFooterContainer(r,e){this._isNativeHtmlTable&&ve({write:()=>{let t=r.querySelector("tfoot");t&&(e.some(n=>!n)?this._removeStickyStyle(t,["bottom"]):this._addStickyStyle(t,"bottom",0,!1))}},{injector:this._tableInjector})}destroy(){this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._resizeObserver?.disconnect(),this._destroyed=!0}_removeStickyStyle(r,e){if(!r.classList.contains(this._stickCellCss))return;for(let n of e)r.style[n]="",r.classList.remove(this._borderCellCss[n]);hn.some(n=>e.indexOf(n)===-1&&r.style[n])?r.style.zIndex=this._getCalculatedZIndex(r):(r.style.zIndex="",this._needsPositionStickyOnElement&&(r.style.position=""),r.classList.remove(this._stickCellCss))}_addStickyStyle(r,e,t,n){r.classList.add(this._stickCellCss),n&&r.classList.add(this._borderCellCss[e]),r.style[e]=`${t}px`,r.style.zIndex=this._getCalculatedZIndex(r),this._needsPositionStickyOnElement&&(r.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(r){let e={top:100,bottom:10,left:1,right:1},t=0;for(let n of hn)r.style[n]&&(t+=e[n]);return t?`${t}`:""}_getCellWidths(r,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;let t=[],n=r.children;for(let o=0;o<n.length;o++){let a=n[o];t.push(this._retrieveElementSize(a).width)}return this._cachedCellWidths=t,t}_getStickyStartColumnPositions(r,e){let t=[],n=0;for(let o=0;o<r.length;o++)e[o]&&(t[o]=n,n+=r[o]);return t}_getStickyEndColumnPositions(r,e){let t=[],n=0;for(let o=r.length;o>0;o--)e[o]&&(t[o]=n,n+=r[o]);return t}_retrieveElementSize(r){let e=this._elemSizeCache.get(r);if(e)return e;let t=r.getBoundingClientRect(),n={width:t.width,height:t.height};return this._resizeObserver&&(this._elemSizeCache.set(r,n),this._resizeObserver.observe(r,{box:"border-box"})),n}_updateStickyColumnReplayQueue(r){this._removeFromStickyColumnReplayQueue(r.rows),this._stickyColumnsReplayTimeout||this._updatedStickyColumnsParamsToReplay.push(r)}_removeFromStickyColumnReplayQueue(r){let e=new Set(r);for(let t of this._updatedStickyColumnsParamsToReplay)t.rows=t.rows.filter(n=>!e.has(n));this._updatedStickyColumnsParamsToReplay=this._updatedStickyColumnsParamsToReplay.filter(t=>!!t.rows.length)}_updateCachedSizes(r){let e=!1;for(let t of r){let n=t.borderBoxSize?.length?{width:t.borderBoxSize[0].inlineSize,height:t.borderBoxSize[0].blockSize}:{width:t.contentRect.width,height:t.contentRect.height};n.width!==this._elemSizeCache.get(t.target)?.width&&Xn(t.target)&&(e=!0),this._elemSizeCache.set(t.target,n)}e&&this._updatedStickyColumnsParamsToReplay.length&&(this._stickyColumnsReplayTimeout&&clearTimeout(this._stickyColumnsReplayTimeout),this._stickyColumnsReplayTimeout=setTimeout(()=>{if(!this._destroyed){for(let t of this._updatedStickyColumnsParamsToReplay)this.updateStickyColumns(t.rows,t.stickyStartStates,t.stickyEndStates,!0,!1);this._updatedStickyColumnsParamsToReplay=[],this._stickyColumnsReplayTimeout=null}},0))}};function Xn(i){return["cdk-cell","cdk-header-cell","cdk-footer-cell"].some(r=>i.classList.contains(r))}var De=new J("STICKY_POSITIONING_LISTENER");var ct=(()=>{class i{viewContainer=s(le);elementRef=s(I);constructor(){let e=s(B);e._rowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","rowOutlet",""]]})}return i})(),lt=(()=>{class i{viewContainer=s(le);elementRef=s(I);constructor(){let e=s(B);e._headerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","headerRowOutlet",""]]})}return i})(),dt=(()=>{class i{viewContainer=s(le);elementRef=s(I);constructor(){let e=s(B);e._footerRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","footerRowOutlet",""]]})}return i})(),ut=(()=>{class i{viewContainer=s(le);elementRef=s(I);constructor(){let e=s(B);e._noDataRowOutlet=this,e._outletAssigned()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=p({type:i,selectors:[["","noDataRowOutlet",""]]})}return i})(),mt=(()=>{class i{_differs=s(me);_changeDetectorRef=s(Bt);_elementRef=s(I);_dir=s(Zt,{optional:!0});_platform=s(Kt);_viewRepeater;_viewportRuler=s(on);_injector=s(Xe);_virtualScrollViewport=s(an,{optional:!0,host:!0});_positionListener=s(De,{optional:!0})||s(De,{optional:!0,skipSelf:!0});_document=s(ae);_data;_renderedRange;_onDestroy=new z;_renderRows;_renderChangeSubscription=null;_columnDefsByName=new Map;_rowDefs;_headerRowDefs;_footerRowDefs;_dataDiffer;_defaultRowDef=null;_customColumnDefs=new Set;_customRowDefs=new Set;_customHeaderRowDefs=new Set;_customFooterRowDefs=new Set;_customNoDataRow=null;_headerRowDefChanged=!0;_footerRowDefChanged=!0;_stickyColumnStylesNeedReset=!0;_forceRecalculateCellWidths=!0;_cachedRenderRowsMap=new Map;_isNativeHtmlTable;_stickyStyler;stickyCssClass="cdk-table-sticky";needsPositionStickyOnElement=!0;_isServer;_isShowingNoDataRow=!1;_hasAllOutlets=!1;_hasInitialized=!1;_headerRowStickyUpdates=new z;_footerRowStickyUpdates=new z;_disableVirtualScrolling=!1;_getCellRole(){if(this._cellRoleInternal===void 0){let e=this._elementRef.nativeElement.getAttribute("role");return e==="grid"||e==="treegrid"?"gridcell":"cell"}return this._cellRoleInternal}_cellRoleInternal=void 0;get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}_trackByFn;get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&(this._switchDataSource(e),this._changeDetectorRef.markForCheck())}_dataSource;_dataSourceChanges=new z;_dataStream=new z;get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=e,this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}_multiTemplateDataRows=!1;get fixedLayout(){return this._virtualScrollEnabled()?!0:this._fixedLayout}set fixedLayout(e){this._fixedLayout=e,this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}_fixedLayout=!1;recycleRows=!1;contentChanged=new Tt;viewChange=new Y({start:0,end:Number.MAX_VALUE});_rowOutlet;_headerRowOutlet;_footerRowOutlet;_noDataRowOutlet;_contentColumnDefs;_contentRowDefs;_contentHeaderRowDefs;_contentFooterRowDefs;_noDataRow;constructor(){s(new Fe("role"),{optional:!0})||this._elementRef.nativeElement.setAttribute("role","table"),this._isServer=!this._platform.isBrowser,this._isNativeHtmlTable=this._elementRef.nativeElement.nodeName==="TABLE",this._dataDiffer=this._differs.find([]).create((t,n)=>this.trackBy?this.trackBy(n.dataIndex,n.data):n)}ngOnInit(){this._setupStickyStyler(),this._viewportRuler.change().pipe($(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentInit(){this._viewRepeater=this.recycleRows||this._virtualScrollEnabled()?new nn:new rn,this._virtualScrollEnabled()&&this._setupVirtualScrolling(this._virtualScrollViewport),this._hasInitialized=!0}ngAfterContentChecked(){this._canRender()&&this._render()}ngOnDestroy(){this._stickyStyler?.destroy(),[this._rowOutlet?.viewContainer,this._headerRowOutlet?.viewContainer,this._footerRowOutlet?.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e?.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._headerRowStickyUpdates.complete(),this._footerRowStickyUpdates.complete(),this._onDestroy.next(),this._onDestroy.complete(),Pe(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();let e=this._dataDiffer.diff(this._renderRows);if(!e){this._updateNoDataRow(),this.contentChanged.next();return}let t=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,t,(n,o,a)=>this._getEmbeddedViewArgs(n.item,a),n=>n.item.data,n=>{n.operation===tn.INSERTED&&n.context&&this._renderCellTemplateForItem(n.record.item.rowDef,n.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(n=>{let o=t.get(n.currentIndex);o.context.$implicit=n.item.data}),this._updateNoDataRow(),this.contentChanged.next(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){let e=this._getRenderedRows(this._headerRowOutlet);if(this._isNativeHtmlTable){let n=pn(this._headerRowOutlet,"thead");n&&(n.style.display=e.length?"":"none")}let t=this._headerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,t,"top"),this._headerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyFooterRowStyles(){let e=this._getRenderedRows(this._footerRowOutlet);if(this._isNativeHtmlTable){let n=pn(this._footerRowOutlet,"tfoot");n&&(n.style.display=e.length?"":"none")}let t=this._footerRowDefs.map(n=>n.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,t,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,t),this._footerRowDefs.forEach(n=>n.resetStickyChanged())}updateStickyColumnStyles(){let e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),n=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this.fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...t,...n],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((o,a)=>{this._addStickyColumnStyles([o],this._headerRowDefs[a])}),this._rowDefs.forEach(o=>{let a=[];for(let c=0;c<t.length;c++)this._renderRows[c].rowDef===o&&a.push(t[c]);this._addStickyColumnStyles(a,o)}),n.forEach((o,a)=>{this._addStickyColumnStyles([o],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(o=>o.resetStickyChanged())}stickyColumnsUpdated(e){this._positionListener?.stickyColumnsUpdated(e)}stickyEndColumnsUpdated(e){this._positionListener?.stickyEndColumnsUpdated(e)}stickyHeaderRowsUpdated(e){this._headerRowStickyUpdates.next(e),this._positionListener?.stickyHeaderRowsUpdated(e)}stickyFooterRowsUpdated(e){this._footerRowStickyUpdates.next(e),this._positionListener?.stickyFooterRowsUpdated(e)}_outletAssigned(){!this._hasAllOutlets&&this._rowOutlet&&this._headerRowOutlet&&this._footerRowOutlet&&this._noDataRowOutlet&&(this._hasAllOutlets=!0,this._canRender()&&this._render())}_canRender(){return this._hasAllOutlets&&this._hasInitialized}_render(){this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&this._rowDefs.length;let t=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||t,this._forceRecalculateCellWidths=t,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}_getAllRenderRows(){if(!Array.isArray(this._data)||!this._renderedRange)return[];let e=[],t=Math.min(this._data.length,this._renderedRange.end),n=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let o=this._renderedRange.start;o<t;o++){let a=this._data[o],c=this._getRenderRowsForData(a,o,n.get(a));this._cachedRenderRowsMap.has(a)||this._cachedRenderRowsMap.set(a,new WeakMap);for(let l=0;l<c.length;l++){let d=c[l],h=this._cachedRenderRowsMap.get(d.data);h.has(d.rowDef)?h.get(d.rowDef).push(d):h.set(d.rowDef,[d]),e.push(d)}}return e}_getRenderRowsForData(e,t,n){return this._getRowDefs(e,t).map(a=>{let c=n&&n.has(a)?n.get(a):[];if(c.length){let l=c.shift();return l.dataIndex=t,l}else return{data:e,rowDef:a,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),Be(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(t=>{this._columnDefsByName.has(t.name),this._columnDefsByName.set(t.name,t)})}_cacheRowDefs(){this._headerRowDefs=Be(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=Be(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=Be(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);let e=this._rowDefs.filter(t=>!t.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){let e=(a,c)=>{let l=!!c.getColumnsDiff();return a||l},t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();let n=this._headerRowDefs.reduce(e,!1);n&&this._forceRenderHeaderRows();let o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||n||o}_switchDataSource(e){this._data=[],Pe(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet&&this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Pe(this.dataSource)?e=this.dataSource.connect(this):Ct(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=E(this.dataSource)),this._renderChangeSubscription=K([e,this.viewChange]).pipe($(this._onDestroy)).subscribe(([t,n])=>{this._data=t||[],this._renderedRange=n,this._dataStream.next(t),this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){let n=Array.from(t?.columns||[]).map(c=>{let l=this._columnDefsByName.get(c);return l}),o=n.map(c=>c.sticky),a=n.map(c=>c.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,a,!this.fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){let t=[];for(let n=0;n<e.viewContainer.length;n++){let o=e.viewContainer.get(n);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(this._rowDefs.length===1)return[this._rowDefs[0]];let n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter(o=>!o.when||o.when(t,e));else{let o=this._rowDefs.find(a=>a.when&&a.when(t,e))||this._defaultRowDef;o&&n.push(o)}return n.length,n}_getEmbeddedViewArgs(e,t){let n=e.rowDef,o={$implicit:e.data};return{templateRef:n.template,context:o,index:t}}_renderRow(e,t,n,o={}){let a=e.viewContainer.createEmbeddedView(t.template,o,n);return this._renderCellTemplateForItem(t,o),a}_renderCellTemplateForItem(e,t){for(let n of this._getCellTemplates(e))re.mostRecentCellOutlet&&re.mostRecentCellOutlet._viewContainer.createEmbeddedView(n,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){let e=this._rowOutlet.viewContainer;for(let t=0,n=e.length;t<n;t++){let a=e.get(t).context;a.count=n,a.first=t===0,a.last=t===n-1,a.even=t%2===0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[t].dataIndex,a.renderIndex=t):a.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return!e||!e.columns?[]:Array.from(e.columns,t=>{let n=this._columnDefsByName.get(t);return e.extractCellTemplate(n)})}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){let e=(t,n)=>t||n.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){let e=this._dir?this._dir.value:"ltr",t=this._injector;this._stickyStyler=new it(this._isNativeHtmlTable,this.stickyCssClass,this._platform.isBrowser,this.needsPositionStickyOnElement,e,this,t),(this._dir?this._dir.change:E()).pipe($(this._onDestroy)).subscribe(n=>{this._stickyStyler.direction=n,this.updateStickyColumnStyles()})}_setupVirtualScrolling(e){let t=typeof requestAnimationFrame<"u"?wt:yt;this.viewChange.next({start:0,end:0}),e.renderedRangeStream.pipe(Rt(0,t),$(this._onDestroy)).subscribe(this.viewChange),e.attach({dataStream:this._dataStream,measureRangeSize:(n,o)=>this._measureRangeSize(n,o)}),K([e.renderedContentOffset,this._headerRowStickyUpdates]).pipe($(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let c=o.elements[a];if(c){let l=o.offsets[a],d=n!==0?Math.max(n-l,l):-l;for(let h of c)h.style.top=`${-d}px`}}}),K([e.renderedContentOffset,this._footerRowStickyUpdates]).pipe($(this._onDestroy)).subscribe(([n,o])=>{if(!(!o.sizes||!o.offsets||!o.elements))for(let a=0;a<o.elements.length;a++){let c=o.elements[a];if(c)for(let l of c)l.style.bottom=`${n+o.offsets[a]}px`}})}_getOwnDefs(e){return e.filter(t=>!t._table||t._table===this)}_updateNoDataRow(){let e=this._customNoDataRow||this._noDataRow;if(!e)return;let t=this._rowOutlet.viewContainer.length===0;if(t===this._isShowingNoDataRow)return;let n=this._noDataRowOutlet.viewContainer;if(t){let o=n.createEmbeddedView(e.templateRef),a=o.rootNodes[0];if(o.rootNodes.length===1&&a?.nodeType===this._document.ELEMENT_NODE){a.setAttribute("role","row"),a.classList.add(...e._contentClassNames);let c=a.querySelectorAll(e._cellSelector);for(let l=0;l<c.length;l++)c[l].classList.add(...e._cellClassNames)}}else n.clear();this._isShowingNoDataRow=t,this._changeDetectorRef.markForCheck()}_measureRangeSize(e,t){if(e.start>=e.end||t!=="vertical")return 0;let n=this.viewChange.value,o=this._rowOutlet.viewContainer;e.start<n.start||e.end>n.end;let a=e.start-n.start,c=e.end-e.start,l,d;for(let y=0;y<c;y++){let w=o.get(y+a);if(w&&w.rootNodes.length){l=d=w.rootNodes[0];break}}for(let y=c-1;y>-1;y--){let w=o.get(y+a);if(w&&w.rootNodes.length){d=w.rootNodes[w.rootNodes.length-1];break}}let h=l?.getBoundingClientRect?.(),g=d?.getBoundingClientRect?.();return h&&g?g.bottom-h.top:0}_virtualScrollEnabled(){return!this._disableVirtualScrolling&&this._virtualScrollViewport!=null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,n,o){if(t&1&&Ze(o,wn,5)(o,ge,5)(o,He,5)(o,Re,5)(o,ot,5),t&2){let a;x(a=M())&&(n._noDataRow=a.first),x(a=M())&&(n._contentColumnDefs=a),x(a=M())&&(n._contentRowDefs=a),x(a=M())&&(n._contentHeaderRowDefs=a),x(a=M())&&(n._contentFooterRowDefs=a)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(t,n){t&2&&P("cdk-table-fixed-layout",n.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:[2,"multiTemplateDataRows","multiTemplateDataRows",F],fixedLayout:[2,"fixedLayout","fixedLayout",F],recycleRows:[2,"recycleRows","recycleRows",F]},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[A([{provide:B,useExisting:i},{provide:De,useValue:null}])],ngContentSelectors:Qn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(de(qn),U(0),U(1,1),S(2,Gn,1,0),S(3,Yn,7,0)(4,Kn,4,0)),t&2&&(f(2),k(n._isServer?2:-1),f(),k(n._isNativeHtmlTable?3:4))},dependencies:[lt,ct,ut,dt],styles:[`.cdk-table-fixed-layout {
  table-layout: fixed;
}
`],encapsulation:2})}return i})();function Be(i,r){return i.concat(Array.from(r))}function pn(i,r){let e=r.toUpperCase(),t=i.viewContainer.element.nativeElement;for(;t;){let n=t.nodeType===1?t.nodeName:null;if(n===e)return t;if(n==="TABLE")break;t=t.parentNode}return null}var vn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[sn]})}return i})();var Zn=[[["caption"]],[["colgroup"],["col"]],"*"],Jn=["caption","colgroup, col","*"];function ei(i,r){i&1&&U(0,2)}function ti(i,r){i&1&&(u(0,"thead",0),_(1,1),m(),u(2,"tbody",2),_(3,3)(4,4),m(),u(5,"tfoot",0),_(6,5),m())}function ni(i,r){i&1&&_(0,1)(1,3)(2,4)(3,5)}var Cn=(()=>{class i extends mt{stickyCssClass="mat-mdc-table-sticky";needsPositionStickyOnElement=!1;static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(t,n){t&2&&P("mat-table-fixed-layout",n.fixedLayout)},exportAs:["matTable"],features:[A([{provide:mt,useExisting:i},{provide:B,useExisting:i},{provide:De,useValue:null}]),v],ngContentSelectors:Jn,decls:5,vars:2,consts:[["role","rowgroup"],["headerRowOutlet",""],["role","rowgroup",1,"mdc-data-table__content"],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(t,n){t&1&&(de(Zn),U(0),U(1,1),S(2,ei,1,0),S(3,ti,7,0)(4,ni,4,0)),t&2&&(f(2),k(n._isServer?2:-1),f(),k(n._isNativeHtmlTable?3:4))},dependencies:[lt,ct,ut,dt],styles:[`.mat-mdc-table-sticky {
  position: sticky !important;
}

mat-table {
  display: block;
}

mat-header-row {
  min-height: var(--mat-table-header-container-height, 56px);
}

mat-row {
  min-height: var(--mat-table-row-item-container-height, 52px);
}

mat-footer-row {
  min-height: var(--mat-table-footer-container-height, 52px);
}

mat-row, mat-header-row, mat-footer-row {
  display: flex;
  border-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  align-items: center;
  box-sizing: border-box;
}

mat-cell:first-of-type, mat-header-cell:first-of-type, mat-footer-cell:first-of-type {
  padding-left: 24px;
}
[dir=rtl] mat-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:first-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type) {
  padding-left: 0;
  padding-right: 24px;
}
mat-cell:last-of-type, mat-header-cell:last-of-type, mat-footer-cell:last-of-type {
  padding-right: 24px;
}
[dir=rtl] mat-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-header-cell:last-of-type:not(:only-of-type), [dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type) {
  padding-right: 0;
  padding-left: 24px;
}

mat-cell, mat-header-cell, mat-footer-cell {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  word-wrap: break-word;
  min-height: inherit;
}

.mat-mdc-table {
  min-width: 100%;
  border: 0;
  border-spacing: 0;
  table-layout: auto;
  white-space: normal;
  background-color: var(--mat-table-background-color, var(--mat-sys-surface));
}

.mat-table-fixed-layout {
  table-layout: fixed;
}

.mdc-data-table__cell {
  box-sizing: border-box;
  overflow: hidden;
  text-align: start;
  text-overflow: ellipsis;
}

.mdc-data-table__cell,
.mdc-data-table__header-cell {
  padding: 0 16px;
}

.mat-mdc-header-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-header-container-height, 56px);
  color: var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));
  line-height: var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));
  font-size: var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));
  font-weight: var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500));
}

.mat-mdc-row {
  height: var(--mat-table-row-item-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
}

.mat-mdc-row,
.mdc-data-table__content {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight));
}

.mat-mdc-footer-row {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: var(--mat-table-footer-container-height, 52px);
  color: var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));
  line-height: var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));
  font-weight: var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}

.mat-mdc-header-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));
  font-weight: inherit;
  line-height: inherit;
  box-sizing: border-box;
  text-overflow: ellipsis;
  overflow: hidden;
  outline: none;
  text-align: start;
}
.mdc-data-table__row:last-child > .mat-mdc-header-cell {
  border-bottom: none;
}

.mat-mdc-cell {
  border-bottom-color: var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));
  border-bottom-width: var(--mat-table-row-item-outline-width, 1px);
  border-bottom-style: solid;
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
  line-height: inherit;
}
.mdc-data-table__row:last-child > .mat-mdc-cell {
  border-bottom: none;
}

.mat-mdc-footer-cell {
  letter-spacing: var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));
}

mat-row.mat-mdc-row,
mat-header-row.mat-mdc-header-row,
mat-footer-row.mat-mdc-footer-row {
  border-bottom: none;
}

.mat-mdc-table tbody,
.mat-mdc-table tfoot,
.mat-mdc-table thead,
.mat-mdc-cell,
.mat-mdc-footer-cell,
.mat-mdc-header-row,
.mat-mdc-row,
.mat-mdc-footer-row,
.mat-mdc-table .mat-mdc-header-cell {
  background: inherit;
}

.mat-mdc-table mat-header-row.mat-mdc-header-row,
.mat-mdc-table mat-row.mat-mdc-row,
.mat-mdc-table mat-footer-row.mat-mdc-footer-cell {
  height: unset;
}

mat-header-cell.mat-mdc-header-cell,
mat-cell.mat-mdc-cell,
mat-footer-cell.mat-mdc-footer-cell {
  align-self: stretch;
}
`],encapsulation:2})}return i})(),bn=(()=>{class i extends Le{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["","matCellDef",""]],features:[A([{provide:Le,useExisting:i}]),v]})}return i})(),Dn=(()=>{class i extends je{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["","matHeaderCellDef",""]],features:[A([{provide:je,useExisting:i}]),v]})}return i})();var Rn=(()=>{class i extends ge{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["","matColumnDef",""]],inputs:{name:[0,"matColumnDef","name"]},features:[A([{provide:ge,useExisting:i}]),v]})}return i})(),Sn=(()=>{class i extends _n{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[v]})}return i})();var kn=(()=>{class i extends yn{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[v]})}return i})();var xn=(()=>{class i extends Re{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["","matHeaderRowDef",""]],inputs:{columns:[0,"matHeaderRowDef","columns"],sticky:[2,"matHeaderRowDefSticky","sticky",F]},features:[A([{provide:Re,useExisting:i}]),v]})}return i})();var Mn=(()=>{class i extends He{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275dir=p({type:i,selectors:[["","matRowDef",""]],inputs:{columns:[0,"matRowDefColumns","columns"],when:[0,"matRowDefWhen","when"]},features:[A([{provide:He,useExisting:i}]),v]})}return i})(),En=(()=>{class i extends at{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[A([{provide:at,useExisting:i}]),v],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&_(0,0)},dependencies:[re],encapsulation:2})}return i})();var In=(()=>{class i extends st{static \u0275fac=(()=>{let e;return function(n){return(e||(e=N(i)))(n||i)}})();static \u0275cmp=C({type:i,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[A([{provide:st,useExisting:i}]),v],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,n){t&1&&_(0,0)},dependencies:[re],encapsulation:2})}return i})();var Tn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[vn,pe]})}return i})(),ii=9007199254740991,Ue=class extends en{_data;_renderData=new Y([]);_filter=new Y("");_internalPageChanges=new z;_renderChangesSubscription=null;filteredData;get data(){return this._data.value}set data(r){r=Array.isArray(r)?r:[],this._data.next(r),this._renderChangesSubscription||this._filterData(r)}get filter(){return this._filter.value}set filter(r){this._filter.next(r),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(r){this._sort=r,this._updateChangeSubscription()}_sort;get paginator(){return this._paginator}set paginator(r){this._paginator=r,this._updateChangeSubscription()}_paginator;sortingDataAccessor=(r,e)=>{let t=r[e];if(Xt(t)){let n=Number(t);return n<ii?n:t}return t};sortData=(r,e)=>{let t=e.active,n=e.direction;return!t||n==""?r:r.sort((o,a)=>{let c=this.sortingDataAccessor(o,t),l=this.sortingDataAccessor(a,t),d=typeof c,h=typeof l;d!==h&&(d==="number"&&(c+=""),h==="number"&&(l+=""));let g=0;return c!=null&&l!=null?c>l?g=1:c<l&&(g=-1):c!=null?g=1:l!=null&&(g=-1),g*(n=="asc"?1:-1)})};filterPredicate=(r,e)=>{let t=e.trim().toLowerCase();return Object.values(r).some(n=>`${n}`.toLowerCase().includes(t))};constructor(r=[]){super(),this._data=new Y(r),this._updateChangeSubscription()}_updateChangeSubscription(){let r=this._sort?Ye(this._sort.sortChange,this._sort.initialized):E(null),e=this._paginator?Ye(this._paginator.page,this._internalPageChanges,this._paginator.initialized):E(null),t=this._data,n=K([t,this._filter]).pipe(L(([c])=>this._filterData(c))),o=K([n,r]).pipe(L(([c])=>this._orderData(c))),a=K([o,e]).pipe(L(([c])=>this._pageData(c)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(c=>this._renderData.next(c))}_filterData(r){return this.filteredData=this.filter==null||this.filter===""?r:r.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(r){return this.sort?this.sortData(r.slice(),this.sort):r}_pageData(r){if(!this.paginator)return r;let e=this.paginator.pageIndex*this.paginator.pageSize;return r.slice(e,e+this.paginator.pageSize)}_updatePaginator(r){Promise.resolve().then(()=>{let e=this.paginator;if(e&&(e.length=r,e.pageIndex>0)){let t=Math.ceil(e.length/e.pageSize)-1||0,n=Math.min(e.pageIndex,t);n!==e.pageIndex&&(e.pageIndex=n,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}};function Fn(i){return Error(`Unable to find icon with the name "${i}"`)}function oi(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function On(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Nn(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var G=class{url;svgText;options;svgElement=null;constructor(r,e,t){this.url=r,this.svgText=e,this.options=t}},An=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,o){return this._addSvgIconConfig(e,t,new G(n,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,o){let a=this._sanitizer.sanitize(ce.HTML,n);if(!a)throw Nn(n);let c=he(a);return this._addSvgIconConfig(e,t,new G("",c,o))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new G(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let o=this._sanitizer.sanitize(ce.HTML,t);if(!o)throw Nn(t);let a=he(o);return this._addSvgIconSetConfig(e,new G("",a,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(ce.RESOURCE_URL,e);if(!t)throw On(e);let n=this._cachedIconsByUrl.get(t);return n?E($e(n)):this._loadSvgIconFromConfig(new G(e,null)).pipe(V(o=>this._cachedIconsByUrl.set(t,o)),L(o=>$e(o)))}getNamedSvgIcon(e,t=""){let n=Pn(t,e),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):ye(Fn(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?E($e(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(L(t=>$e(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return E(n);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(oe(c=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(ce.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(d)),E(null)})));return bt(o).pipe(L(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw Fn(e);return a}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let o=t[n];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,e,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(V(t=>e.svgText=t),L(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?E(null):this._fetchIcon(e).pipe(V(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,n);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),n);let c=this._svgElementFromString(he("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(he("<svg></svg>")),n=e.attributes;for(let o=0;o<n.length;o++){let{name:a,value:c}=n[o];a!=="id"&&t.setAttribute(a,c)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,o=n?.withCredentials??!1;if(!this._httpClient)throw oi();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(ce.RESOURCE_URL,t);if(!a)throw On(t);let c=this._inProgressUrlFetches.get(a);if(c)return c;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(L(d=>he(d)),Se(()=>this._inProgressUrlFetches.delete(a)),kt());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(Pn(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](t,e);if(o)return ai(o)?new G(o.url,null,o.options):new G(o,null)}}static \u0275fac=function(t){return new(t||i)(we(fe,8),we(jt),we(ae,8),we(ke))};static \u0275prov=X({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function $e(i){return i.cloneNode(!0)}function Pn(i,r){return i+":"+r}function ai(i){return!!(i.url&&i.options)}var si=["*"],ci=new J("MAT_ICON_DEFAULT_OPTIONS"),li=new J("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(ae),r=i?i.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),Bn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],di=Bn.map(i=>`[${i}]`).join(", "),ui=/^url\(['"]?#(.*?)['"]?\)$/,zn=(()=>{class i{_elementRef=s(I);_iconRegistry=s(An);_location=s(li);_errorHandler=s(ke);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=gt.EMPTY;constructor(){let e=s(new Fe("aria-hidden"),{optional:!0}),t=s(ci,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,o)=>{n.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(di),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<t.length;o++)Bn.forEach(a=>{let c=t[o],l=c.getAttribute(a),d=l?l.match(ui):null;if(d){let h=n.get(c);h||(h=[],n.set(c,h)),h.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(St(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(H("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),Ee(n.color?"mat-"+n.color:""),P("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",F],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:si,decls:1,vars:0,template:function(t,n){t&1&&(de(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),Ln=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=ee({type:i});static \u0275inj=Z({imports:[pe]})}return i})();var Ve=class i{apiUrl="api/buscas";http=s(fe);listar(){return this.http.get(this.apiUrl)}salvar(r){return this.http.post(this.apiUrl,r)}deletar(r){return this.http.delete(`${this.apiUrl}/${r}`)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=X({token:i,factory:i.\u0275fac,providedIn:"root"})};var _e=class i{api=s(Ve);historicoSubject=new Y([]);historico$=this.historicoSubject.asObservable();constructor(){this.carregarHistorico()}carregarHistorico(){this.api.listar().subscribe({next:r=>this.historicoSubject.next(r),error:()=>this.historicoSubject.next([])})}adicionarBusca(r){this.api.salvar(r).pipe(V(()=>this.carregarHistorico())).subscribe()}removerBusca(r){this.api.deletar(r).pipe(V(()=>{let e=this.historicoSubject.value.filter(t=>t.id!==r);this.historicoSubject.next(e)})).subscribe()}obterHistorico(){return this.historico$}static \u0275fac=function(e){return new(e||i)};static \u0275prov=X({token:i,factory:i.\u0275fac,providedIn:"root"})};var hi=()=>[5,10,25];function pi(i,r){i&1&&(u(0,"mat-header-cell"),b(1,"CEP"),m())}function gi(i,r){if(i&1&&(u(0,"mat-cell"),b(1),m()),i&2){let e=r.$implicit;f(),Ie(e.cep)}}function _i(i,r){i&1&&(u(0,"mat-header-cell"),b(1,"Endere\xE7o"),m())}function yi(i,r){if(i&1&&(u(0,"mat-cell"),b(1),m()),i&2){let e=r.$implicit;f(),Ie(e.endereco)}}function wi(i,r){i&1&&(u(0,"mat-header-cell"),b(1,"Data"),m())}function vi(i,r){if(i&1&&(u(0,"mat-cell"),b(1),m()),i&2){let e=r.$implicit;f(),Ie(e.dataFormatada)}}function Ci(i,r){i&1&&T(0,"mat-header-cell",13)}function bi(i,r){if(i&1){let e=Ft();u(0,"mat-cell",14)(1,"button",15),Me("click",function(){let n=Mt(e).$implicit,o=q(2);return Et(o.deletarBusca(n.id))}),u(2,"mat-icon",16),b(3,"close"),m()()()}if(i&2){let e=r.$implicit;f(),H("aria-label","Remover busca "+e.cep)}}function Di(i,r){i&1&&T(0,"mat-header-row")}function Ri(i,r){i&1&&T(0,"mat-row"),i&2&&D("@linhaAnimada",void 0)}function Si(i,r){if(i&1&&(u(0,"section",0)(1,"mat-table",1),ne(2,2),j(3,pi,2,0,"mat-header-cell",3)(4,gi,2,1,"mat-cell",4),ie(),ne(5,5),j(6,_i,2,0,"mat-header-cell",3)(7,yi,2,1,"mat-cell",4),ie(),ne(8,6),j(9,wi,2,0,"mat-header-cell",3)(10,vi,2,1,"mat-cell",4),ie(),ne(11,7),j(12,Ci,1,0,"mat-header-cell",8)(13,bi,4,1,"mat-cell",9),ie(),j(14,Di,1,0,"mat-header-row",10)(15,Ri,1,1,"mat-row",11),m(),T(16,"mat-paginator",12),m()),i&2){let e=q();f(),D("dataSource",e.dataSource),f(13),D("matHeaderRowDef",e.colunas),f(),D("matRowDefColumns",e.colunas),f(),D("pageSize",e.pageSize)("pageSizeOptions",Nt(5,hi))}}var We=class i{historicoService=s(_e);destroyRef=s(se);FORMATO_HORA={hour:"2-digit",minute:"2-digit"};colunas=["cep","endereco","dataBusca","acao"];dataSource=new Ue;pageSize=5;totalBuscas=te(0);temBuscas=At(()=>this.totalBuscas()>0);set paginator(r){r&&(this.dataSource.paginator=r)}constructor(){this.configurarHistorico()}configurarHistorico(){this.historicoService.obterHistorico().pipe(be(this.destroyRef)).subscribe(r=>{this.dataSource.data=r.map(e=>this.paraBuscaView(e)),this.totalBuscas.set(r.length)})}paraBuscaView(r){let e=new Date(r.dataBusca),t=e.toLocaleDateString("pt-BR"),n=e.toLocaleTimeString("pt-BR",this.FORMATO_HORA);return Ge(Qe({},r),{dataFormatada:`${t} - ${n}`})}deletarBusca(r){this.historicoService.removerBusca(r)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["sccon-listagem-buscas"]],viewQuery:function(e,t){if(e&1&&Ce(Ae,5),e&2){let n;x(n=M())&&(t.paginator=n.first)}},decls:1,vars:1,consts:[["aria-label","Hist\xF3rico de buscas realizadas",1,"listagem-wrapper"],[1,"tabela-buscas",3,"dataSource"],["matColumnDef","cep"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","endereco"],["matColumnDef","dataBusca"],["matColumnDef","acao"],["aria-label","A\xE7\xF5es",4,"matHeaderCellDef"],["class","cel-acao",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Navegar pelas buscas",3,"pageSize","pageSizeOptions"],["aria-label","A\xE7\xF5es"],[1,"cel-acao"],["type","button","mat-icon-button","",1,"btn-deletar",3,"click"],["aria-hidden","true"]],template:function(e,t){e&1&&S(0,Si,17,6,"section",0),e&2&&k(t.temBuscas()?0:-1)},dependencies:[Tn,Cn,Dn,xn,Rn,bn,Mn,Sn,kn,En,In,ln,cn,Ln,zn,dn,Ae],styles:[".listagem-wrapper[_ngcontent-%COMP%]{margin-top:1.5rem}.tabela-buscas[_ngcontent-%COMP%]{width:100%}.tabela-buscas[_ngcontent-%COMP%]   .mat-mdc-header-cell[_ngcontent-%COMP%]{font-weight:600;font-size:.875rem;color:#333;background-color:#f5f5f5}.tabela-buscas[_ngcontent-%COMP%]   .mat-mdc-cell[_ngcontent-%COMP%]{font-size:.875rem;color:#444}.tabela-buscas[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f5f5f5}.tabela-buscas[_ngcontent-%COMP%]   .mat-mdc-row[_ngcontent-%COMP%]:hover{background-color:#e0e0e0}.tabela-buscas[_ngcontent-%COMP%]   .cel-acao[_ngcontent-%COMP%]{width:48px;justify-content:flex-end}.tabela-buscas[_ngcontent-%COMP%]   .cel-acao[_ngcontent-%COMP%]   .btn-deletar[_ngcontent-%COMP%]{background:none;border:none;color:#666;font-size:.875rem;font-weight:700;cursor:pointer;padding:2px 6px;border-radius:4px;transition:color .3s}.tabela-buscas[_ngcontent-%COMP%]   .cel-acao[_ngcontent-%COMP%]   .btn-deletar[_ngcontent-%COMP%]:hover{color:#d32f2f}"],data:{animation:[Je("linhaAnimada",[tt(":enter",[Ne({opacity:0,transform:"translateY(-6px)"}),et("180ms ease-out",Ne({opacity:1,transform:"translateY(0)"}))])])]}})};var qe=class i{apiUrl="https://viacep.com.br/ws";http=new fe(s(Lt));buscarEndereco(r){let e=r.replace(/\D/g,"");return!e||e.length!==8?ye(()=>new Error("CEP inv\xE1lido")):this.http.get(`${this.apiUrl}/${e}/json/`).pipe(oe(t=>(console.error("Erro ao buscar CEP:",t),ye(()=>new Error("Erro ao consultar ViaCEP")))))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=X({token:i,factory:i.\u0275fac,providedIn:"root"})};function ki(i,r){i&1&&T(0,"mat-spinner",8)}function xi(i,r){i&1&&b(0," Buscar ")}function Mi(i,r){i&1&&(u(0,"small",10),b(1,"CEP \xE9 obrigat\xF3rio"),m())}function Ei(i,r){i&1&&(u(0,"small",10),b(1,"Formato inv\xE1lido. Use: 00000-000"),m())}function Ii(i,r){if(i&1&&(u(0,"div",12),b(1),m()),i&2){let e=q();P("alerta-sucesso",e.tipoMensagem()==="sucesso")("alerta-erro",e.tipoMensagem()==="erro"),f(),Te(" ",e.mensagem()," ")}}var jn=class i{fb=s(Qt);cepService=s(qe);historicoService=s(_e);destroyRef=s(se);CEP_PATTERN=/^\d{5}-\d{3}$/;MENSAGENS={formularioInvalido:"Preencha o CEP corretamente",cepNaoEncontrado:"CEP n\xE3o encontrado",sucesso:"Busca realizada com sucesso",erroPadrao:"Erro ao buscar CEP"};carregando=te(!1);mensagem=te("");tipoMensagem=te("");formularioBusca=this.fb.group({cep:["",[nt.required,nt.pattern(this.CEP_PATTERN)]]});buscarTrigger$=new z;constructor(){this.configurarFluxoBusca()}configurarFluxoBusca(){this.buscarTrigger$.pipe(V(()=>this.carregando.set(!0)),xt(r=>this.cepService.buscarEndereco(r).pipe(Se(()=>this.carregando.set(!1)),oe(()=>(this.exibirMensagem(this.MENSAGENS.erroPadrao,"erro"),vt)))),be(this.destroyRef)).subscribe(r=>this.processarResposta(r))}buscar(){if(this.formularioBusca.invalid){this.formularioBusca.markAllAsTouched(),this.exibirMensagem(this.MENSAGENS.formularioInvalido,"erro");return}this.buscarTrigger$.next(this.formularioBusca.controls.cep.value)}processarResposta(r){if(r.erro){this.exibirMensagem(this.MENSAGENS.cepNaoEncontrado,"erro");return}this.historicoService.adicionarBusca({cep:r.cep,endereco:this.montarEnderecoCompleto(r),dataBusca:new Date}),this.exibirMensagem(this.MENSAGENS.sucesso,"sucesso"),this.formularioBusca.reset()}montarEnderecoCompleto(r){return`${r.logradouro}, ${r.bairro} - ${r.localidade}, ${r.uf}`}exibirMensagem(r,e){this.mensagem.set(r),this.tipoMensagem.set(e),Dt(4e3).pipe(be(this.destroyRef)).subscribe(()=>{this.mensagem.set(""),this.tipoMensagem.set("")})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=C({type:i,selectors:[["sccon-busca-cep"]],decls:16,vars:9,consts:[["cepMask","mask"],[1,"busca-page"],[1,"titulo-pagina"],[1,"form-busca-wrapper"],[1,"form-busca",3,"ngSubmit","formGroup"],[1,"input-group"],["type","text","id","cep","formControlName","cep","placeholder","00000-000","autocomplete","postal-code","mask","00000-000","aria-describedby","erro-cep",1,"input-cep",3,"dropSpecialCharacters"],["type","submit",1,"btn-buscar",3,"disabled"],["diameter","18","aria-label","Carregando..."],["id","erro-cep","aria-live","polite"],[1,"msg-erro"],["role","alert",1,"alerta",3,"alerta-sucesso","alerta-erro"],["role","alert",1,"alerta"]],template:function(e,t){e&1&&(u(0,"section",1)(1,"h2",2),b(2,"Busca de Endere\xE7os"),m(),u(3,"div",3)(4,"form",4),Me("ngSubmit",function(){return t.buscar()}),u(5,"div",5),T(6,"input",6,0),u(8,"button",7),S(9,ki,1,0,"mat-spinner",8)(10,xi,1,0),m()(),u(11,"div",9),S(12,Mi,2,0,"small",10),S(13,Ei,2,0,"small",10),m()(),S(14,Ii,2,5,"div",11),m(),T(15,"sccon-listagem-buscas"),m()),e&2&&(f(4),D("formGroup",t.formularioBusca),f(2),P("is-invalid",t.formularioBusca.controls.cep.invalid&&t.formularioBusca.controls.cep.touched),D("dropSpecialCharacters",!1),f(2),D("disabled",t.carregando()),f(),k(t.carregando()?9:10),f(3),k(t.formularioBusca.controls.cep.errors!=null&&t.formularioBusca.controls.cep.errors.required&&t.formularioBusca.controls.cep.touched?12:-1),f(),k(t.formularioBusca.controls.cep.errors!=null&&t.formularioBusca.controls.cep.errors.pattern&&t.formularioBusca.controls.cep.touched?13:-1),f(),k(t.mensagem()?14:-1))},dependencies:[We,Gt,Vt,Ht,Ut,$t,qt,Wt,fn,mn,Yt],styles:[".visually-hidden[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.busca-page[_ngcontent-%COMP%]{padding:2rem;max-width:1000px;margin:0 auto}.titulo-pagina[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:400;color:#333;margin-bottom:1.5rem;padding-bottom:.5rem;border-bottom:1px solid #e0e0e0}.form-busca-wrapper[_ngcontent-%COMP%]{margin-bottom:2rem}.form-busca[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.75rem;flex-wrap:wrap}.form-busca[_ngcontent-%COMP%]   .label-cep[_ngcontent-%COMP%]{font-size:1rem;color:#333;white-space:nowrap}.form-busca[_ngcontent-%COMP%]   .input-cep[_ngcontent-%COMP%]{width:220px;padding:.4rem .65rem;border:1px solid #aaaaaa;border-radius:4px;font-size:1rem;background-color:#fff;transition:border-color .2s ease,box-shadow .2s ease}.form-busca[_ngcontent-%COMP%]   .input-cep[_ngcontent-%COMP%]:focus{outline:none;border-color:#670000;box-shadow:0 0 0 2px #6700001a}.form-busca[_ngcontent-%COMP%]   .input-cep.is-invalid[_ngcontent-%COMP%]{border-color:#d32f2f}.form-busca[_ngcontent-%COMP%]   .input-cep[_ngcontent-%COMP%]::placeholder{color:#666}.form-busca[_ngcontent-%COMP%]   .btn-buscar[_ngcontent-%COMP%]{background-color:#d7dbdd;color:#333;border:1px solid #aaaaaa;padding:.4rem 1.25rem;font-size:1rem;font-weight:500;border-radius:4px;cursor:pointer;transition:background-color .3s ease;display:flex;align-items:center;gap:.4rem;white-space:nowrap}.form-busca[_ngcontent-%COMP%]   .btn-buscar[_ngcontent-%COMP%]:hover:not(:disabled){background-color:#c6cccf}.form-busca[_ngcontent-%COMP%]   .btn-buscar[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.form-busca[_ngcontent-%COMP%]   .msg-erro[_ngcontent-%COMP%]{display:block;width:100%;text-align:center;margin-top:.35rem;font-size:.875rem;color:#d32f2f}.alerta[_ngcontent-%COMP%]{margin-top:1rem;padding:.75rem 1rem;border-radius:4px;font-size:.875rem;animation:_ngcontent-%COMP%_slideDown .3s ease}.alerta.alerta-sucesso[_ngcontent-%COMP%]{background-color:#d4edda;color:#155724;border:1px solid #c3e6cb}.alerta.alerta-erro[_ngcontent-%COMP%]{background-color:#f8d7da;color:#721c24;border:1px solid #f5c6cb}@keyframes _ngcontent-%COMP%_slideDown{0%{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}@media(max-width:576px){.busca-page[_ngcontent-%COMP%]{padding:1rem}.form-busca[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{max-width:100%}}"]})};export{jn as Busca};
