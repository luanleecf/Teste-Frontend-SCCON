import{$ as g,Aa as Pr,Ab as wi,B as ht,Ba as xi,Bb as Ie,C as _e,Ca as Nr,Cb as z,Cc as to,D as fn,Db as H,Ea as Vr,Eb as Yr,Fb as Wr,G as pi,Gb as vn,H as _i,Ha as v,Hb as et,I as pn,Ja as Ve,Jb as U,Ka as Ci,Kb as bt,La as ke,Lb as he,M as _n,Ma as oe,Mb as Le,Na as ee,Nb as vt,O as gn,Ob as ue,P as gi,Pa as ft,Q as ze,Qa as Lr,Qb as $r,R as bi,S as Z,Sb as me,T as Ar,Ta as Y,Tb as Te,U as Rr,Ua as R,V as vi,Va as E,Vb as Zr,Wa as de,Wb as Kr,X as ut,Xa as pt,Xb as O,Y as b,Yb as Pt,Z as A,Za as Ft,Zb as Xr,_a as Br,_b as yn,a as x,ac as ye,b as se,ba as c,bb as _t,cb as zr,cc as F,d as Sr,db as te,dc as Ae,e as be,ea as mt,eb as V,ec as qr,fb as L,fc as Ei,g as dt,ga as Xe,gb as Hr,h as wr,ha as qe,hb as jr,hc as xn,i as S,ia as Qe,ib as Ur,j as Er,ja as Fr,jb as X,k as Mr,ka as K,kb as C,la as j,lb as w,lc as Qr,mb as ae,nb as Ue,nc as Jr,o as kr,oa as N,ob as Je,p as fi,pa as D,pb as Ge,pc as eo,sa as P,t as ve,ta as He,tb as gt,u as Dr,ua as Me,ub as Si,va as je,vb as $,wb as Gr,x as Or,xa as M,xb as B,y as Ir,ya as bn,yb as De,z as Tr,za as yi,zb as q}from"./chunk-JHBTSVCP.js";var co=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(ee(oe),ee(M))};static \u0275dir=E({type:n})}return n})(),us=(()=>{class n extends co{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=E({type:n,features:[de]})}return n})(),Ni=new g("");var ms={provide:Ni,useExisting:ut(()=>ho),multi:!0};function fs(){let n=xn()?xn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var ps=new g(""),ho=(()=>{class n extends co{_compositionMode;_composing=!1;constructor(e,t,r){super(e,t),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!fs())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(ee(oe),ee(M),ee(ps,8))};static \u0275dir=E({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){t&1&&$("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ue([ms]),de]})}return n})();function Mn(n){return n==null||kn(n)===0}function kn(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var jt=new g(""),Dn=new g(""),_s=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Di=class{static min(i){return gs(i)}static max(i){return bs(i)}static required(i){return vs(i)}static requiredTrue(i){return ys(i)}static email(i){return xs(i)}static minLength(i){return Cs(i)}static maxLength(i){return Ss(i)}static pattern(i){return ws(i)}static nullValidator(i){return uo()}static compose(i){return bo(i)}static composeAsync(i){return vo(i)}};function gs(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<n?{min:{min:n,actual:i.value}}:null}}function bs(n){return i=>{if(i.value==null||n==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>n?{max:{max:n,actual:i.value}}:null}}function vs(n){return Mn(n.value)?{required:!0}:null}function ys(n){return n.value===!0?null:{required:!0}}function xs(n){return Mn(n.value)||_s.test(n.value)?null:{email:!0}}function Cs(n){return i=>{let e=i.value?.length??kn(i.value);return e===null||e===0?null:e<n?{minlength:{requiredLength:n,actualLength:e}}:null}}function Ss(n){return i=>{let e=i.value?.length??kn(i.value);return e!==null&&e>n?{maxlength:{requiredLength:n,actualLength:e}}:null}}function ws(n){if(!n)return uo;let i,e;return typeof n=="string"?(e="",n.charAt(0)!=="^"&&(e+="^"),e+=n,n.charAt(n.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=n.toString(),i=n),t=>{if(Mn(t.value))return null;let r=t.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function uo(n){return null}function mo(n){return n!=null}function fo(n){return Br(n)?kr(n):n}function po(n){let i={};return n.forEach(e=>{i=e!=null?x(x({},i),e):i}),Object.keys(i).length===0?null:i}function _o(n,i){return i.map(e=>e(n))}function Es(n){return!n.validate}function go(n){return n.map(i=>Es(i)?i:e=>i.validate(e))}function bo(n){if(!n)return null;let i=n.filter(mo);return i.length==0?null:function(e){return po(_o(e,i))}}function On(n){return n!=null?bo(go(n)):null}function vo(n){if(!n)return null;let i=n.filter(mo);return i.length==0?null:function(e){let t=_o(e,i).map(fo);return Tr(t).pipe(ve(po))}}function In(n){return n!=null?vo(go(n)):null}function io(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function yo(n){return n._rawValidators}function xo(n){return n._rawAsyncValidators}function Cn(n){return n?Array.isArray(n)?n:[n]:[]}function Oi(n,i){return Array.isArray(n)?n.includes(i):n===i}function no(n,i){let e=Cn(i);return Cn(n).forEach(r=>{Oi(e,r)||e.push(r)}),e}function ro(n,i){return Cn(i).filter(e=>!Oi(n,e))}var Ii=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=On(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=In(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Ye=class extends Ii{name;get formDirective(){return null}get path(){return null}},tt=class extends Ii{_parent=null;name=null;valueAccessor=null},Ti=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Jc=(()=>{class n extends Ti{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ee(tt,2))};static \u0275dir=E({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){t&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[de]})}return n})(),ed=(()=>{class n extends Ti{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(ee(Ye,10))};static \u0275dir=E({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,r){t&2&&U("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[de]})}return n})();var Nt="VALID",Mi="INVALID",yt="PENDING",Vt="DISABLED",We=class{},Ai=class extends We{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Bt=class extends We{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},zt=class extends We{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},xt=class extends We{status;source;constructor(i,e){super(),this.status=i,this.source=e}},Ri=class extends We{source;constructor(i){super(),this.source=i}},Ht=class extends We{source;constructor(i){super(),this.source=i}};function Tn(n){return(Vi(n)?n.validators:n)||null}function Ms(n){return Array.isArray(n)?On(n):n||null}function An(n,i){return(Vi(i)?i.asyncValidators:n)||null}function ks(n){return Array.isArray(n)?In(n):n||null}function Vi(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Co(n,i,e){let t=n.controls;if(!(i?Object.keys(t):t).length)throw new vi(1e3,"");if(!t[e])throw new vi(1001,"")}function So(n,i,e){n._forEachChild((t,r)=>{if(e[r]===void 0)throw new vi(1002,"")})}var Ct=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return me(this.statusReactive)}set status(i){me(()=>this.statusReactive.set(i))}_status=Te(()=>this.statusReactive());statusReactive=P(void 0);get valid(){return this.status===Nt}get invalid(){return this.status===Mi}get pending(){return this.status===yt}get disabled(){return this.status===Vt}get enabled(){return this.status!==Vt}errors;get pristine(){return me(this.pristineReactive)}set pristine(i){me(()=>this.pristineReactive.set(i))}_pristine=Te(()=>this.pristineReactive());pristineReactive=P(!0);get dirty(){return!this.pristine}get touched(){return me(this.touchedReactive)}set touched(i){me(()=>this.touchedReactive.set(i))}_touched=Te(()=>this.touchedReactive());touchedReactive=P(!1);get untouched(){return!this.touched}_events=new S;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(no(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(no(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ro(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ro(i,this._rawAsyncValidators))}hasValidator(i){return Oi(this._rawValidators,i)}hasAsyncValidator(i){return Oi(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(se(x({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new zt(!0,t))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:t})}),i.onlySelf||this._parent?._updateTouched(i,t),e&&i.emitEvent!==!1&&this._events.next(new zt(!1,t))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let t=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(se(x({},i),{sourceControl:t})),e&&i.emitEvent!==!1&&this._events.next(new Bt(!1,t))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,t),e&&i.emitEvent!==!1&&this._events.next(new Bt(!0,t))}markAsPending(i={}){this.status=yt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new xt(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(se(x({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Vt,this.errors=null,this._forEachChild(r=>{r.disable(se(x({},i),{onlySelf:!0}))}),this._updateValue();let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ai(this.value,t)),this._events.next(new xt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(se(x({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Nt,this._forEachChild(t=>{t.enable(se(x({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(se(x({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Nt||this.status===yt)&&this._runAsyncValidator(t,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ai(this.value,e)),this._events.next(new xt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(se(x({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Vt:Nt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=yt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let t=fo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this)}getError(i,e){let t=e?this.get(e):this;return t?.errors?t.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,t){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||t)&&this._events.next(new xt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,t)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Vt:this.errors?Mi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(yt)?yt:this._anyControlsHaveStatus(Mi)?Mi:Nt}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Bt(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new zt(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Vi(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Ms(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=ks(this._rawAsyncValidators)}},St=class extends Ct{constructor(i,e,t){super(Tn(e),An(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,t={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){So(this,!0,i),Object.keys(i).forEach(t=>{Co(this,!0,t),this.controls[t].setValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(t=>{let r=this.controls[t];r&&r.patchValue(i[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((t,r)=>{t.reset(i?i[r]:null,se(x({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ht(this))}getRawValue(){return this._reduceChildren({},(i,e,t)=>(i[t]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&i(t,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&i(t))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(i,e){let t=i;return this._forEachChild((r,o)=>{t=e(t,r,o)}),t}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Sn=class extends St{};var Rn=new g("",{factory:()=>Fn}),Fn="always";function Ds(n,i){return[...i.path,n]}function wn(n,i,e=Fn){Pn(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),Is(n,i),As(n,i),Ts(n,i),Os(n,i)}function oo(n,i,e=!0){let t=()=>{};i?.valueAccessor?.registerOnChange(t),i?.valueAccessor?.registerOnTouched(t),Pi(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Fi(n,i){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Os(n,i){if(i.valueAccessor.setDisabledState){let e=t=>{i.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Pn(n,i){let e=yo(n);i.validator!==null?n.setValidators(io(e,i.validator)):typeof e=="function"&&n.setValidators([e]);let t=xo(n);i.asyncValidator!==null?n.setAsyncValidators(io(t,i.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let r=()=>n.updateValueAndValidity();Fi(i._rawValidators,r),Fi(i._rawAsyncValidators,r)}function Pi(n,i){let e=!1;if(n!==null){if(i.validator!==null){let r=yo(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=xo(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,n.setAsyncValidators(o))}}}let t=()=>{};return Fi(i._rawValidators,t),Fi(i._rawAsyncValidators,t),e}function Is(n,i){i.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&wo(n,i)})}function Ts(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&wo(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function wo(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function As(n,i){let e=(t,r)=>{i.valueAccessor.writeValue(t),r&&i.viewToModelUpdate(t)};n.registerOnChange(e),i._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Eo(n,i){n==null,Pn(n,i)}function Rs(n,i){return Pi(n,i)}function Fs(n,i){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Ps(n){return Object.getPrototypeOf(n.constructor)===us}function Mo(n,i){n._syncPendingControls(),i.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ns(n,i){if(!i)return null;Array.isArray(i);let e,t,r;return i.forEach(o=>{o.constructor===ho?e=o:Ps(o)?t=o:r=o}),r||t||e||null}function Vs(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}var Ls={provide:Ye,useExisting:ut(()=>Nn)},Lt=Promise.resolve(),Nn=(()=>{class n extends Ye{callSetDisabledState;get submitted(){return me(this.submittedReactive)}_submitted=Te(()=>this.submittedReactive());submittedReactive=P(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new St({},On(e),In(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Lt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),wn(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Lt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Lt.then(()=>{let t=this._findContainer(e.path),r=new St({});Eo(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Lt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Lt.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Mo(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Ri(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(ee(jt,10),ee(Dn,10),ee(Rn,8))};static \u0275dir=E({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&$("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([Ls]),de]})}return n})();function ao(n,i){let e=n.indexOf(i);e>-1&&n.splice(e,1)}function so(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ki=class extends Ct{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,t){super(Tn(e),An(t,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Vi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(so(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ht(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){ao(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){ao(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){so(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Bs=n=>n instanceof ki;var id=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var En=class extends Ct{constructor(i,e,t){super(Tn(e),An(t,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(t=>{this.controls.push(t),this._registerControl(t)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,t={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(i,e={}){let t=this._adjustIndex(i);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,t={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){So(this,!1,i),i.forEach((t,r)=>{Co(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((t,r)=>{t.reset(i[r],se(x({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ht(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,t)=>t._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,t)=>{i(e,t)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var zs=(()=>{class n extends Ye{callSetDisabledState;get submitted(){return me(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Te(()=>this._submittedReactive());_submittedReactive=P(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Pi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return wn(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){oo(e.control||null,e,!1),Vs(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Mo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Ri(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(oo(t||null,e),Bs(r)&&(wn(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);Eo(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Rs(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Pn(this.form,this),this._oldForm&&Pi(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(t){return new(t||n)(ee(jt,10),ee(Dn,10),ee(Rn,8))};static \u0275dir=E({type:n,features:[de,Me]})}return n})();var ko=new g("");var Hs={provide:tt,useExisting:ut(()=>js)},js=(()=>{class n extends tt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new N;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(r),this.valueAccessor=Ns(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Fs(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Ds(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(t){return new(t||n)(ee(Ye,13),ee(jt,10),ee(Dn,10),ee(Ni,10),ee(ko,8))};static \u0275dir=E({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ue([Hs]),de,Me]})}return n})();var Us={provide:Ye,useExisting:ut(()=>Vn)},Vn=(()=>{class n extends zs{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275dir=E({type:n,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&$("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ue([Us]),de]})}return n})();var Gs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({})}return n})();function lo(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var Ys=(()=>{class n{useNonNullable=!1;get nonNullable(){let e=new n;return e.useNonNullable=!0,e}group(e,t=null){let r=this._reduceControls(e),o={};return lo(t)?o=t:t!==null&&(o.validators=t.validator,o.asyncValidators=t.asyncValidator),new St(r,o)}record(e,t=null){let r=this._reduceControls(e);return new Sn(r,t)}control(e,t,r){let o={};return this.useNonNullable?(lo(t)?o=t:(o.validators=t,o.asyncValidators=r),new ki(e,se(x({},o),{nonNullable:!0}))):new ki(e,t,r)}array(e,t,r){let o=e.map(a=>this._createControl(a));return new En(o,t,r)}_reduceControls(e){let t={};return Object.keys(e).forEach(r=>{t[r]=this._createControl(e[r])}),t}_createControl(e){if(e instanceof ki)return e;if(e instanceof Ct)return e;if(Array.isArray(e)){let t=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(t,r,o)}else return this.control(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),nd=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:()=>c(Ys).nonNullable,providedIn:"root"})}return n})();var rd=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ko,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Rn,useValue:e.callSetDisabledState??Fn}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[Gs]})}return n})();var s=(function(n){return n.SEPARATOR="separator",n.PERCENT="percent",n.IP="IP",n.CPF_CNPJ="CPF_CNPJ",n.MONTH="M",n.MONTHS="M0",n.MINUTE="m",n.HOUR="h",n.HOURS="H",n.MINUTES="m0",n.HOURS_HOUR="Hh",n.SECONDS="s0",n.HOURS_MINUTES_SECONDS="Hh:m0:s0",n.EMAIL_MASK="A*@A*.A*",n.HOURS_MINUTES="Hh:m0",n.MINUTES_SECONDS="m0:s0",n.DAYS_MONTHS_YEARS="d0/M0/0000",n.DAYS_MONTHS="d0/M0",n.DAYS="d0",n.DAY="d",n.SECOND="s",n.LETTER_S="S",n.DOT=".",n.COMMA=",",n.CURLY_BRACKETS_LEFT="{",n.CURLY_BRACKETS_RIGHT="}",n.MINUS="-",n.OR="||",n.HASH="#",n.EMPTY_STRING="",n.SYMBOL_STAR="*",n.SYMBOL_QUESTION="?",n.SLASH="/",n.WHITE_SPACE=" ",n.NUMBER_ZERO="0",n.NUMBER_NINE="9",n.BACKSPACE="Backspace",n.DELETE="Delete",n.ARROW_LEFT="ArrowLeft",n.ARROW_UP="ArrowUp",n.DOUBLE_ZERO="00",n})(s||{}),Li=new g("ngx-mask config"),Do=new g("new ngx-mask config"),Oo=new g("initial ngx-mask config"),Ws={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showMaskTyped:!1,instantPrefix:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:!1,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,apm:!1,leadZero:!1,keepCharacterPositions:!1,triggerOnMaskChange:!1,inputTransformFn:n=>n,outputTransformFn:n=>n,maskFilled:new N,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}},$s=[s.HOURS_MINUTES_SECONDS,s.HOURS_MINUTES,s.MINUTES_SECONDS],Zs=[s.PERCENT,s.HOURS_HOUR,s.SECONDS,s.MINUTES,s.SEPARATOR,s.DAYS_MONTHS_YEARS,s.DAYS_MONTHS,s.DAYS,s.MONTHS],Ks=(()=>{class n{_config=c(Li);dropSpecialCharacters=this._config.dropSpecialCharacters;hiddenInput=this._config.hiddenInput;clearIfNotMatch=this._config.clearIfNotMatch;specialCharacters=this._config.specialCharacters;patterns=this._config.patterns;prefix=this._config.prefix;suffix=this._config.suffix;thousandSeparator=this._config.thousandSeparator;decimalMarker=this._config.decimalMarker;customPattern;showMaskTyped=this._config.showMaskTyped;placeHolderCharacter=this._config.placeHolderCharacter;validation=this._config.validation;separatorLimit=this._config.separatorLimit;allowNegativeNumbers=this._config.allowNegativeNumbers;leadZeroDateTime=this._config.leadZeroDateTime;leadZero=this._config.leadZero;apm=this._config.apm;inputTransformFn=this._config.inputTransformFn;outputTransformFn=this._config.outputTransformFn;keepCharacterPositions=this._config.keepCharacterPositions;instantPrefix=this._config.instantPrefix;triggerOnMaskChange=this._config.triggerOnMaskChange;_shift=new Set;plusOnePosition=!1;maskExpression="";actualValue="";showKeepCharacterExp="";shownMaskExpression=this._config.shownMaskExpression;deletedSpecialCharacter=!1;ipError;cpfCnpjError;applyMask(e,t,r=0,o=!1,a=!1,h=()=>{}){if(!t||typeof e!="string")return s.EMPTY_STRING;let l=0,u="",m=!1,p=!1,y=1,k=!1,d=e,f=r,ne=d.slice(0,this.prefix.length)===this.prefix,ge=o&&d.length===this.prefix.length+t.length,we=d===this.prefix+d.slice(this.prefix.length);ne&&(ge||we)&&(d=d.slice(this.prefix.length)),this.suffix&&d.length>0&&(d=this.checkAndRemoveSuffix(d)),d==="("&&this.prefix&&(d="");let ce=d.toString().split(s.EMPTY_STRING);if(this.allowNegativeNumbers&&d.slice(l,l+1)===s.MINUS&&(u+=d.slice(l,l+1)),t===s.IP){let T=d.split(s.DOT);this.ipError=this._validIP(T),t="099.099.099.099"}let Pe=[];for(let T=0;T<d.length;T++)d[T]?.match("\\d")&&Pe.push(d[T]??s.EMPTY_STRING);if(t===s.CPF_CNPJ&&(this.cpfCnpjError=Pe.length!==11&&Pe.length!==14,Pe.length>11?t="00.000.000/0000-00":t="000.000.000-00"),t.startsWith(s.PERCENT)){if(d.match("[a-z]|[A-Z]")||d.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)&&!a){d=this._stripToDecimal(d);let Ee=this.getPrecision(t);d=this.checkInputPrecision(d,Ee,this.decimalMarker)}let T=typeof this.decimalMarker=="string"?this.decimalMarker:s.DOT;if(d.indexOf(T)>0&&!this.percentage(d.substring(0,d.indexOf(T)))){let Ee=d.substring(0,d.indexOf(T)-1);this.allowNegativeNumbers&&d.slice(l,l+1)===s.MINUS&&!a&&(Ee=d.substring(0,d.indexOf(T))),d=`${Ee}${d.substring(d.indexOf(T),d.length)}`}let _="";this.allowNegativeNumbers&&d.slice(l,l+1)===s.MINUS?_=`${s.MINUS}${d.slice(l+1,l+d.length)}`:_=d,this.percentage(_)?u=this._splitPercentZero(d):u=this._splitPercentZero(d.substring(0,d.length-1))}else if(t.startsWith(s.SEPARATOR)){(d.match("[w\u0430-\u044F\u0410-\u042F]")||d.match("[\u0401\u0451\u0410-\u044F]")||d.match("[a-z]|[A-Z]")||d.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\]:";<>.?/]/)||d.match("[^A-Za-z0-9,]"))&&(d=this._stripToDecimal(d));let T=this.getPrecision(t),_=this.decimalMarker;if(Array.isArray(this.decimalMarker)&&(this.actualValue.includes(this.decimalMarker[0])||this.actualValue.includes(this.decimalMarker[1])?_=this.actualValue.includes(this.decimalMarker[0])?this.decimalMarker[0]:this.decimalMarker[1]:_=this.decimalMarker.find(G=>G!==this.thousandSeparator)),a){let{decimalMarkerIndex:G,nonZeroIndex:J}=this._findFirstNonZeroAndDecimalIndex(d,_),Ne=d[0]===s.MINUS,ui=d[0]===s.NUMBER_ZERO,mi=d[0]===_,Rt=d[1]===_;(mi&&!J||Ne&&Rt&&!J||ui&&!G&&!J)&&(d=s.NUMBER_ZERO),G&&J&&Ne&&f===1&&(G<J||G>J)&&(d=s.MINUS+d.slice(J)),!G&&J&&d.length>J&&(d=Ne?s.MINUS+d.slice(J):d.slice(J)),G&&J&&f===0&&(G<J&&(d=d.slice(G-1)),G>J&&(d=d.slice(J)))}T===0?d=this.allowNegativeNumbers?d.length>2&&d[0]===s.MINUS&&d[1]===s.NUMBER_ZERO&&d[2]!==this.thousandSeparator&&d[2]!==s.COMMA&&d[2]!==s.DOT?"-"+d.slice(2,d.length):d[0]===s.NUMBER_ZERO&&d.length>1&&d[1]!==this.thousandSeparator&&d[1]!==s.COMMA&&d[1]!==s.DOT?d.slice(1,d.length):d:d.length>1&&d[0]===s.NUMBER_ZERO&&d[1]!==this.thousandSeparator&&d[1]!==s.COMMA&&d[1]!==s.DOT?d.slice(1,d.length):d:(d[0]===_&&d.length>1&&!a&&(d=s.NUMBER_ZERO+d.slice(0,d.length+1),this.plusOnePosition=!0),d[0]===s.NUMBER_ZERO&&d[1]!==_&&d[1]!==this.thousandSeparator&&!a&&(d=d.length>1?d.slice(0,1)+_+d.slice(1,d.length+1):d,this.plusOnePosition=!0),this.allowNegativeNumbers&&!a&&d[0]===s.MINUS&&(d[1]===_||d[1]===s.NUMBER_ZERO)&&(d=d[1]===_&&d.length>2?d.slice(0,1)+s.NUMBER_ZERO+d.slice(1,d.length):d[1]===s.NUMBER_ZERO&&d.length>2&&d[2]!==_?d.slice(0,2)+_+d.slice(2,d.length):d,this.plusOnePosition=!0));let Ee=this._charToRegExpExpression(this.thousandSeparator),pe='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(Ee,"");if(Array.isArray(this.decimalMarker))for(let G of this.decimalMarker)pe=pe.replace(this._charToRegExpExpression(G),s.EMPTY_STRING);else pe=pe.replace(this._charToRegExpExpression(this.decimalMarker),"");let ct=new RegExp("["+pe+"]");d.match(ct)&&(d=d.substring(0,d.length-1)),d=this.checkInputPrecision(d,T,this.decimalMarker);let Ke=d.replace(new RegExp(Ee,"g"),"");u=this._formatWithSeparators(Ke,this.thousandSeparator,this.decimalMarker,T);let mn=u.indexOf(s.COMMA)-d.indexOf(s.COMMA),Oe=u.length-d.length,hi=a&&u.length<e.length-this.suffix.length&&this.separatorLimit;if((u[f-1]===this.thousandSeparator||u[f-this.prefix.length])&&this.prefix&&a)f=f-1;else if(Oe>0&&u[f]!==this.thousandSeparator||hi){p=!0;let G=0;do this._shift.add(f+G),G++;while(G<Oe)}else u[f-1]===this.thousandSeparator||Oe===-4||Oe===-3||u[f]===this.thousandSeparator?(this._shift.clear(),this._shift.add(f-1)):mn!==0&&f>0&&!(u.indexOf(s.COMMA)>=f&&f>3)||!(u.indexOf(s.DOT)>=f&&f>3)&&Oe<=0?(this._shift.clear(),p=!0,y=Oe,f+=Oe,this._shift.add(f)):this._shift.clear()}else for(let T=0,_=ce[0];T<ce.length&&l!==t.length;T++,_=ce[T]??s.EMPTY_STRING){let Ee=s.SYMBOL_STAR in this.patterns;if(this._checkSymbolMask(_,t[l]??s.EMPTY_STRING)&&t[l+1]===s.SYMBOL_QUESTION)u+=_,l+=2;else if(t[l+1]===s.SYMBOL_STAR&&m&&this._checkSymbolMask(_,t[l+2]??s.EMPTY_STRING))u+=_,l+=3,m=!1;else if(this._checkSymbolMask(_,t[l]??s.EMPTY_STRING)&&t[l+1]===s.SYMBOL_STAR&&!Ee)u+=_,m=!0;else if(t[l+1]===s.SYMBOL_QUESTION&&this._checkSymbolMask(_,t[l+2]??s.EMPTY_STRING))u+=_,l+=3;else if(this._checkSymbolMask(_,t[l]??s.EMPTY_STRING)){if(t[l]===s.HOURS&&(this.apm?Number(_)>9:Number(_)>2)){f=this.leadZeroDateTime?f:f+1,l+=1,this._shiftStep(l),T--,this.leadZeroDateTime&&(u+="0");continue}if(t[l]===s.HOUR&&(this.apm?u.length===1&&Number(u)>1||u==="1"&&Number(_)>2||d.slice(l-1,l).length===1&&Number(d.slice(l-1,l))>2||d.slice(l-1,l)==="1"&&Number(_)>2:u==="2"&&Number(_)>3||(u.slice(l-2,l)==="2"||u.slice(l-3,l)==="2"||u.slice(l-4,l)==="2"||u.slice(l-1,l)==="2")&&Number(_)>3&&l>10)){f=f+1,l+=1,T--;continue}if((t[l]===s.MINUTE||t[l]===s.SECOND)&&Number(_)>5){f=this.leadZeroDateTime?f:f+1,l+=1,this._shiftStep(l),T--,this.leadZeroDateTime&&(u+="0");continue}let pe=31,ct=d[l],Ke=d[l+1],mn=d[l+2],Oe=d[l-1],hi=d[l-2],G=d.slice(l-3,l-1),J=d.slice(l-1,l+1),Ne=d.slice(l,l+2),ui=d.slice(l-2,l);if(t[l]===s.DAY){let mi=t.slice(0,2)===s.MONTHS,Rt=t.slice(0,2)===s.MONTHS&&this.specialCharacters.includes(hi);if(Number(_)>3&&this.leadZeroDateTime||!mi&&(Number(Ne)>pe||Number(J)>pe||this.specialCharacters.includes(Ke))||(Rt?Number(J)>pe||!this.specialCharacters.includes(ct)&&this.specialCharacters.includes(mn)||this.specialCharacters.includes(ct):Number(Ne)>pe||this.specialCharacters.includes(Ke)&&!a)){f=this.leadZeroDateTime?f:f+1,l+=1,this._shiftStep(l),T--,this.leadZeroDateTime&&(u+="0");continue}}if(t[l]===s.MONTH){let Rt=l===0&&(Number(_)>2||Number(Ne)>12||this.specialCharacters.includes(Ke)&&!a),os=t.slice(l+2,l+3),as=G.includes(os)&&t.includes("d0")&&(this.specialCharacters.includes(hi)&&Number(J)>12&&!this.specialCharacters.includes(ct)||this.specialCharacters.includes(ct)),ss=Number(G)<=pe&&!this.specialCharacters.includes(G)&&this.specialCharacters.includes(Oe)&&(Number(Ne)>12||this.specialCharacters.includes(Ke)),ls=Number(Ne)>12&&l===5||this.specialCharacters.includes(Ke)&&l===5,cs=Number(G)>pe&&!this.specialCharacters.includes(G)&&!this.specialCharacters.includes(ui)&&Number(ui)>12&&t.includes("d0"),ds=Number(G)<=pe&&!this.specialCharacters.includes(G)&&!this.specialCharacters.includes(Oe)&&Number(J)>12;if(Number(_)>1&&this.leadZeroDateTime||Rt||as||ds||cs||ss||ls&&!this.leadZeroDateTime){f=this.leadZeroDateTime?f:f+1,l+=1,this._shiftStep(l),T--,this.leadZeroDateTime&&(u+="0");continue}}u+=_,l++}else if(this.specialCharacters.includes(_)&&t[l]===_)u+=_,l++;else if(this.specialCharacters.indexOf(t[l]??s.EMPTY_STRING)!==-1)u+=t[l],l++,this._shiftStep(l),T--;else if(t[l]===s.NUMBER_NINE&&this.showMaskTyped)this._shiftStep(l);else if(this.patterns[t[l]??s.EMPTY_STRING]&&this.patterns[t[l]??s.EMPTY_STRING]?.optional){if(_.trim()===s.EMPTY_STRING)continue;ce[l]&&t!=="099.099.099.099"&&t!=="000.000.000-00"&&t!=="00.000.000/0000-00"&&!t.match(/^9+\.0+$/)&&!this.patterns[t[l]??s.EMPTY_STRING]?.optional&&(u+=ce[l]),t.includes(s.NUMBER_NINE+s.SYMBOL_STAR)&&t.includes(s.NUMBER_ZERO+s.SYMBOL_STAR)&&l++,l++,T--}else this.maskExpression[l+1]===s.SYMBOL_STAR&&this._findSpecialChar(this.maskExpression[l+2]??s.EMPTY_STRING)&&this._findSpecialChar(_)===this.maskExpression[l+2]&&m||this.maskExpression[l+1]===s.SYMBOL_QUESTION&&this._findSpecialChar(this.maskExpression[l+2]??s.EMPTY_STRING)&&this._findSpecialChar(_)===this.maskExpression[l+2]&&m?(l+=3,u+=_):this.showMaskTyped&&this.specialCharacters.indexOf(_)<0&&_!==this.placeHolderCharacter&&this.placeHolderCharacter.length===1&&(k=!0)}u[f-1]&&u.length+1===t.length&&this.specialCharacters.indexOf(t[t.length-1]??s.EMPTY_STRING)!==-1&&(u+=t[t.length-1]);let Tt=f+1;for(;this._shift.has(Tt);)y++,Tt++;let st=o&&!t.startsWith(s.SEPARATOR)?l:this._shift.has(f)?y:0;k&&st--,h(st,p),y<0&&this._shift.clear();let At=!1;a&&(At=ce.every(T=>this.specialCharacters.includes(T)));let lt=`${this.prefix}${At?s.EMPTY_STRING:u}${this.showMaskTyped?"":this.suffix}`;u.length===0&&(lt=this.instantPrefix?`${this.prefix}${u}`:`${u}`);let di=d.length===1&&this.specialCharacters.includes(t[0])&&d!==t[0];if(!this._checkSymbolMask(d,t[1])&&di)return"";if(u.includes(s.MINUS)&&this.prefix&&this.allowNegativeNumbers){if(a&&u===s.MINUS)return"";lt=`${s.MINUS}${this.prefix}${u.split(s.MINUS).join(s.EMPTY_STRING)}${this.suffix}`}return lt}_findDropSpecialChar(e){return Array.isArray(this.dropSpecialCharacters)?this.dropSpecialCharacters.find(t=>t===e):this._findSpecialChar(e)}_findSpecialChar(e){return this.specialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.patterns=this.customPattern?this.customPattern:this.patterns,(this.patterns[t]?.pattern&&this.patterns[t]?.pattern.test(e))??!1}_formatWithSeparators=(e,t,r,o)=>{let a=[],h="";if(Array.isArray(r)){let y=new RegExp(r.map(k=>"[\\^$.|?*+()".indexOf(k)>=0?`\\${k}`:k).join("|"));a=e.split(y),h=e.match(y)?.[0]??s.EMPTY_STRING}else a=e.split(r),h=r;let l=a.length>1?`${h}${a[1]}`:s.EMPTY_STRING,u=a[0]??s.EMPTY_STRING,m=this.separatorLimit.replace(/\s/g,s.EMPTY_STRING);m&&+m&&(u[0]===s.MINUS?u=`-${u.slice(1,u.length).slice(0,m.length)}`:u=u.slice(0,m.length));let p=/(\d+)(\d{3})/;for(;t&&p.test(u);)u=u.replace(p,"$1"+t+"$2");return typeof o>"u"?u+l:o===0?u:u+l.substring(0,o+1)};percentage=e=>{let t=e.replace(",","."),r=Number(this.allowNegativeNumbers&&e.includes(s.MINUS)?t.slice(1,e.length):t);return!isNaN(r)&&r>=0&&r<=100};getPrecision=e=>{let t=e.split(s.DOT);return t.length>1?Number(t[t.length-1]):1/0};checkAndRemoveSuffix=e=>{for(let t=this.suffix?.length-1;t>=0;t--){let r=this.suffix.substring(t,this.suffix?.length);if(e.includes(r)&&t!==this.suffix?.length-1&&(t-1<0||!e.includes(this.suffix.substring(t-1,this.suffix?.length))))return e.replace(r,s.EMPTY_STRING)}return e};checkInputPrecision=(e,t,r)=>{let o=e,a=r;if(t<1/0){if(Array.isArray(a)){let m=a.find(p=>p!==this.thousandSeparator);a=m||a[0]}let h=new RegExp(this._charToRegExpExpression(a)+`\\d{${t}}.*$`),l=o.match(h),u=(l&&l[0]?.length)??0;if(u-1>t){let m=u-1-t;o=o.substring(0,o.length-m)}t===0&&this._compareOrIncludes(o[o.length-1],a,this.thousandSeparator)&&(o=o.substring(0,o.length-1))}return o};_stripToDecimal(e){return e.split(s.EMPTY_STRING).filter((t,r)=>{let o=typeof this.decimalMarker=="string"?t===this.decimalMarker:this.decimalMarker.includes(t);return t.match("^-?\\d")||t===this.thousandSeparator||o||t===s.MINUS&&r===0&&this.allowNegativeNumbers}).join(s.EMPTY_STRING)}_charToRegExpExpression(e){return e&&(e===" "?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e){this._shift.add(e+this.prefix.length||0)}_compareOrIncludes(e,t,r){return Array.isArray(t)?t.filter(o=>o!==r).includes(e):e===t}_validIP(e){return!(e.length===4&&!e.some((t,r)=>e.length!==r+1?t===s.EMPTY_STRING||Number(t)>255:t===s.EMPTY_STRING||Number(t.substring(0,3))>255))}_splitPercentZero(e){if(e===s.MINUS&&this.allowNegativeNumbers)return e;let t=typeof this.decimalMarker=="string"?e.indexOf(this.decimalMarker):e.indexOf(s.DOT),r=this.allowNegativeNumbers&&e.includes(s.MINUS)?"-":"";if(t===-1){let o=parseInt(r?e.slice(1,e.length):e,10);return isNaN(o)?s.EMPTY_STRING:`${r}${o}`}else{let o=parseInt(e.replace("-","").substring(0,t),10),a=e.substring(t+1),h=isNaN(o)?"":o.toString(),l=typeof this.decimalMarker=="string"?this.decimalMarker:s.DOT;return h===s.EMPTY_STRING?s.EMPTY_STRING:`${r}${h}${l}${a}`}}_findFirstNonZeroAndDecimalIndex(e,t){let r=null,o=null;for(let a=0;a<e.length;a++){let h=e[a];if(h===t&&r===null&&(r=a),h&&h>="1"&&h<="9"&&o===null&&(o=a),r!==null&&o!==null)break}return{decimalMarkerIndex:r,nonZeroIndex:o}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac})}return n})(),Ln=(()=>{class n extends Ks{isNumberValue=!1;maskIsShown="";selStart=null;selEnd=null;maskChanged=!1;maskExpressionArray=[];previousValue="";currentValue="";writingValue=!1;isInitialized=!1;_emitValue=!1;_start;_end;onChange=e=>{};_elementRef=c(M,{optional:!0});document=c(j);_config=c(Li);_renderer=c(oe,{optional:!0});applyMask(e,t,r=0,o=!1,a=!1,h=()=>{}){if(!t)return e!==this.actualValue?this.actualValue:e;if(this.maskIsShown=this.showMaskTyped?this.showMaskInInput():s.EMPTY_STRING,this.maskExpression===s.IP&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||s.HASH)),this.maskExpression===s.CPF_CNPJ&&this.showMaskTyped&&(this.maskIsShown=this.showMaskInInput(e||s.HASH)),!e&&this.showMaskTyped)return this.formControlResult(this.prefix),`${this.prefix}${this.maskIsShown}${this.suffix}`;let l=e&&typeof this.selStart=="number"?e[this.selStart]??s.EMPTY_STRING:s.EMPTY_STRING,u="",m=r;if((this.hiddenInput||e&&e.indexOf(s.SYMBOL_STAR)>=0)&&!this.writingValue){let f=e&&e.length===1?e.split(s.EMPTY_STRING):this.actualValue.split(s.EMPTY_STRING);a&&(f=f.slice(0,r).concat(f.slice(r+1))),this.showMaskTyped&&(e=this.removeMask(e),f=this.removeMask(f.join("")).split(s.EMPTY_STRING)),typeof this.selStart=="object"&&typeof this.selEnd=="object"?(this.selStart=Number(this.selStart),this.selEnd=Number(this.selEnd)):e!==s.EMPTY_STRING&&f.length?typeof this.selStart=="number"&&typeof this.selEnd=="number"&&(e.length>f.length?f.splice(this.selStart,0,l):e.length<f.length&&(f.length-e.length===1?a?f.splice(this.selStart-1,1):f.splice(e.length-1,1):f.splice(this.selStart,this.selEnd-this.selStart))):f=[],this.showMaskTyped&&!this.hiddenInput&&(u=this.removeMask(e)),this.actualValue.length?f.length<e.length?u=this.shiftTypedSymbols(f.join(s.EMPTY_STRING)):f.length===e.length?u=f.join(s.EMPTY_STRING):u=e:u=e}if(o&&(this.hiddenInput||!this.hiddenInput)&&(u=e),a&&this.specialCharacters.indexOf(this.maskExpression[m]??s.EMPTY_STRING)!==-1&&this.showMaskTyped&&!this.prefix&&(u=this.currentValue),this.deletedSpecialCharacter&&m&&(this.specialCharacters.includes(this.actualValue.slice(m,m+1))?m=m+1:t.slice(m-1,m+1)!==s.MONTHS&&(m=m-2),this.deletedSpecialCharacter=!1),this.showMaskTyped&&this.placeHolderCharacter.length===1&&!this.leadZeroDateTime&&(u=this.removeMask(u)),this.maskChanged?u=e:u=u&&u.length?u:e,this.showMaskTyped&&this.keepCharacterPositions&&this.actualValue&&!o&&!this.writingValue){let f=this.dropSpecialCharacters?this.removeMask(this.actualValue):this.actualValue;return this.formControlResult(f),this.actualValue?this.actualValue:`${this.prefix}${this.maskIsShown}${this.suffix}`}let p=super.applyMask(u,t,m,o,a,h);if(this.actualValue=this.getActualValue(p),this.thousandSeparator===s.DOT&&this.decimalMarker===s.DOT&&(this.decimalMarker=s.COMMA),this.maskExpression.startsWith(s.SEPARATOR)&&this.dropSpecialCharacters===!0&&(this.specialCharacters=this.specialCharacters.filter(f=>!this._compareOrIncludes(f,this.decimalMarker,this.thousandSeparator))),(p||p==="")&&(this.previousValue=this.currentValue,this.currentValue=p,this._emitValue=this.previousValue!==this.currentValue||this.previousValue===this.currentValue&&o),this._emitValue&&(!this.maskChanged||this.triggerOnMaskChange)&&this.formControlResult(p),this.maskChanged&&!this.triggerOnMaskChange&&(this.maskChanged=!1),!this.showMaskTyped||this.showMaskTyped&&this.hiddenInput)return this.hiddenInput?`${this.hideInput(p,this.maskExpression)}${this.maskIsShown.slice(p.length)}`:p;let k=p.length,d=`${this.prefix}${this.maskIsShown}${this.suffix}`;if(this.maskExpression.includes(s.HOURS)){let f=this._numberSkipedSymbols(p);return`${p}${d.slice(k+f)}`}else if(this.maskExpression===s.IP||this.maskExpression===s.CPF_CNPJ)return`${p}${d}`;return`${p}${d.slice(k)}`}_numberSkipedSymbols(e){let t=/(^|\D)(\d\D)/g,r=t.exec(e),o=0;for(;r!=null;)o+=1,r=t.exec(e);return o}applyValueChanges(e,t,r,o=()=>{}){let a=this._elementRef?.nativeElement;a&&(a.value=this.applyMask(a.value,this.maskExpression,e,t,r,o),a!==this._getActiveElement()&&this.clearIfNotMatchFn())}hideInput(e,t){return e.split(s.EMPTY_STRING).map((r,o)=>this.patterns&&this.patterns[t[o]??s.EMPTY_STRING]&&this.patterns[t[o]??s.EMPTY_STRING]?.symbol?this.patterns[t[o]??s.EMPTY_STRING]?.symbol:r).join(s.EMPTY_STRING)}getActualValue(e){let t=e.split(s.EMPTY_STRING).filter((r,o)=>{let a=this.maskExpression[o]??s.EMPTY_STRING;return this._checkSymbolMask(r,a)||this.specialCharacters.includes(a)&&r===a});return t.join(s.EMPTY_STRING)===e?t.join(s.EMPTY_STRING):e}shiftTypedSymbols(e){let t="";return(e&&e.split(s.EMPTY_STRING).map((o,a)=>{if(this.specialCharacters.includes(e[a+1]??s.EMPTY_STRING)&&e[a+1]!==this.maskExpression[a+1])return t=o,e[a+1];if(t.length){let h=t;return t=s.EMPTY_STRING,h}return o})||[]).join(s.EMPTY_STRING)}numberToString(e){return!e&&e!==0||this.maskExpression.startsWith(s.SEPARATOR)&&(this.leadZero||!this.dropSpecialCharacters)||this.maskExpression.startsWith(s.SEPARATOR)&&this.separatorLimit.length>14&&String(e).length>14?String(e):Number(e).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:20}).replace(`/${s.MINUS}/`,s.MINUS)}showMaskInInput(e){if(this.showMaskTyped&&this.shownMaskExpression){if(this.maskExpression.length!==this.shownMaskExpression.length)throw new Error("Mask expression must match mask placeholder length");return this.shownMaskExpression}else if(this.showMaskTyped){if(e){if(this.maskExpression===s.IP)return this._checkForIp(e);if(this.maskExpression===s.CPF_CNPJ)return this._checkForCpfCnpj(e)}return this.placeHolderCharacter.length===this.maskExpression.length?this.placeHolderCharacter:this.maskExpression.replace(/\w/g,this.placeHolderCharacter)}return""}clearIfNotMatchFn(){let e=this._elementRef?.nativeElement;e&&this.clearIfNotMatch&&this.prefix.length+this.maskExpression.length+this.suffix.length!==e.value.replace(this.placeHolderCharacter,s.EMPTY_STRING).length&&(this.formElementProperty=["value",s.EMPTY_STRING],this.applyMask("",this.maskExpression))}set formElementProperty([e,t]){!this._renderer||!this._elementRef||queueMicrotask(()=>{this._renderer?.setProperty(this._elementRef?.nativeElement,e,t)})}checkDropSpecialCharAmount(e){return e.split(s.EMPTY_STRING).filter(r=>this._findDropSpecialChar(r)).length}removeMask(e){return this._removeMask(this._removeSuffix(this._removePrefix(e)),this.specialCharacters.concat("_").concat(this.placeHolderCharacter))}_checkForIp(e){if(e===s.HASH)return`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;let t=[];for(let r=0;r<e.length;r++){let o=e[r]??s.EMPTY_STRING;o&&o.match("\\d")&&t.push(o)}return t.length<=3?`${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>3&&t.length<=6?`${this.placeHolderCharacter}.${this.placeHolderCharacter}`:t.length>6&&t.length<=9?this.placeHolderCharacter:(t.length>9&&t.length<=12,"")}_checkForCpfCnpj(e){let t=`${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`,r=`${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}.${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}/${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}${this.placeHolderCharacter}-${this.placeHolderCharacter}${this.placeHolderCharacter}`;if(e===s.HASH)return t;let o=[];for(let a=0;a<e.length;a++){let h=e[a]??s.EMPTY_STRING;h&&h.match("\\d")&&o.push(h)}return o.length<=3?t.slice(o.length,t.length):o.length>3&&o.length<=6?t.slice(o.length+1,t.length):o.length>6&&o.length<=9?t.slice(o.length+2,t.length):o.length>9&&o.length<11?t.slice(o.length+3,t.length):o.length===11?"":o.length===12?e.length===17?r.slice(16,r.length):r.slice(15,r.length):o.length>12&&o.length<=14?r.slice(o.length+4,r.length):""}_getActiveElement(e=this.document){let t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}formControlResult(e){let t=this.outputTransformFn?this.outputTransformFn:r=>r;this.writingValue=!1,this.maskChanged=!1,!(!this.isInitialized&&this._emitValue)&&(Array.isArray(this.dropSpecialCharacters)?this.onChange(t(this._toNumber(this._checkSymbols(this._removeMask(this._removeSuffix(this._removePrefix(e)),this.dropSpecialCharacters))))):this.dropSpecialCharacters||!this.dropSpecialCharacters&&this.prefix===e?this.onChange(t(this._toNumber(this._checkSymbols(this._removeSuffix(this._removePrefix(e)))))):this.onChange(t(this._toNumber(e))))}_toNumber(e){if(!this.isNumberValue||e===s.EMPTY_STRING||this.maskExpression.startsWith(s.SEPARATOR)&&(this.leadZero||!this.dropSpecialCharacters))return e;if(String(e).length>14&&this.maskExpression.startsWith(s.SEPARATOR))return String(e);let t=Number(e);if(this.maskExpression.startsWith(s.SEPARATOR)&&Number.isNaN(t)){let r=String(e).replace(",",".");return Number(r)}return Number.isNaN(t)?e:t}_removeMask(e,t){return this.maskExpression.startsWith(s.PERCENT)&&e.includes(s.DOT)?e:e&&e.replace(this._regExpForRemove(t),s.EMPTY_STRING)}_removePrefix(e){return this.prefix?e&&e.replace(this.prefix,s.EMPTY_STRING):e}_removeSuffix(e){return this.suffix?e&&e.replace(this.suffix,s.EMPTY_STRING):e}_retrieveSeparatorValue(e){let t=Array.isArray(this.dropSpecialCharacters)?this.specialCharacters.filter(r=>this.dropSpecialCharacters.includes(r)):this.specialCharacters;return!this.deletedSpecialCharacter&&this._checkPatternForSpace()&&e.includes(s.WHITE_SPACE)&&this.maskExpression.includes(s.SYMBOL_STAR)&&(t=t.filter(r=>r!==s.WHITE_SPACE)),this._removeMask(e,t)}_regExpForRemove(e){return new RegExp(e.map(t=>/[.*+?^${}()|[\]\\/-]/.test(t)?`\\${t}`:t).join("|"),"gi")}_replaceDecimalMarkerToDot(e){let t=Array.isArray(this.decimalMarker)?this.decimalMarker:[this.decimalMarker];return e.replace(this._regExpForRemove(t),s.DOT)}_checkSymbols(e){let t=e;if(t===s.EMPTY_STRING)return t;this.maskExpression.startsWith(s.PERCENT)&&this.decimalMarker===s.COMMA&&(t=t.replace(s.COMMA,s.DOT));let r=this._retrieveSeparatorPrecision(this.maskExpression),o=this.specialCharacters.length===0?this._retrieveSeparatorValue(t):this._replaceDecimalMarkerToDot(this._retrieveSeparatorValue(t));return this.isNumberValue&&r?t===this.decimalMarker?null:o.length>14?String(o):this._checkPrecision(this.maskExpression,o):o}_checkPatternForSpace(){for(let e in this.patterns)if(this.patterns[e]&&this.patterns[e]?.hasOwnProperty("pattern")){let t=this.patterns[e]?.pattern.toString(),r=this.patterns[e]?.pattern;if(t?.includes(s.WHITE_SPACE)&&r?.test(this.maskExpression))return!0}return!1}_retrieveSeparatorPrecision(e){let t=e.match(new RegExp("^separator\\.([^d]*)"));return t?Number(t[1]):null}_checkPrecision(e,t){let r=this.getPrecision(e),o=t;return e.indexOf("2")>0||this.leadZero&&Number(r)>0&&Number.isFinite(r)?(this.decimalMarker===s.COMMA&&this.leadZero&&(o=o.replace(",",".")),this.leadZero?Number(o).toFixed(Number(r)):Number(o).toFixed(2)):this.numberToString(o)}_repeatPatternSymbols(e){return e.match(/{[0-9]+}/)&&e.split(s.EMPTY_STRING).reduce((t,r,o)=>{if(this._start=r===s.CURLY_BRACKETS_LEFT?o:this._start,r!==s.CURLY_BRACKETS_RIGHT)return this._findSpecialChar(r)?t+r:t;this._end=o;let a=Number(e.slice(this._start+1,this._end)),h=new Array(a+1).join(e[this._start-1]);if(e.slice(0,this._start).length>1&&e.includes(s.LETTER_S)){let l=e.slice(0,this._start-1);return l.includes(s.CURLY_BRACKETS_LEFT)?t+h:l+t+h}else return t+h},"")||e}currentLocaleDecimalMarker(){return 1.1.toLocaleString().substring(1,2)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=b({token:n,factory:n.\u0275fac})}return n})();function Xs(){let n=c(Oo),i=c(Do);return i instanceof Function?x(x({},n),i()):x(x({},n),i)}function gd(n){return[{provide:Do,useValue:n},{provide:Oo,useValue:Ws},{provide:Li,useFactory:Xs},Ln]}var bd=(()=>{class n{mask=O("");specialCharacters=O([]);patterns=O({});prefix=O("");suffix=O("");thousandSeparator=O(" ");decimalMarker=O(".");dropSpecialCharacters=O(null);hiddenInput=O(null);showMaskTyped=O(null);placeHolderCharacter=O(null);shownMaskExpression=O(null);clearIfNotMatch=O(null);validation=O(null);separatorLimit=O("");allowNegativeNumbers=O(null);leadZeroDateTime=O(null);leadZero=O(null);triggerOnMaskChange=O(null);apm=O(null);inputTransformFn=O(null);outputTransformFn=O(null);keepCharacterPositions=O(null);instantPrefix=O(null);value=yn("");errors=O([]);disabled=O(!1);touched=yn(!1);dirty=O(!1);invalid=O(!1);pending=O(!1);readonly=O(!1);required=O(!1);name=O("");maskFilled=Kr();_maskValue=P("");_inputValue=P("");_position=P(null);_code=P("");_maskExpressionArray=P([]);_justPasted=P(!1);_isFocused=P(!1);_isComposing=P(!1);_isSignalFormsMode=P(!1);_maskService=c(Ln,{self:!0});document=c(j);_config=c(Li);onChange=e=>{};onTouch=()=>{};constructor(){He(()=>{let e=this.value();this._isSignalFormsMode()&&e!==me(()=>this._inputValue())&&me(()=>{this.writeValue(e)})}),He(()=>{let e=this.disabled();me(()=>{this.setDisabledState(e)})})}ngOnInit(){this.value()!==""&&this._isSignalFormsMode.set(!0)}ngOnChanges(e){let{mask:t,specialCharacters:r,patterns:o,prefix:a,suffix:h,thousandSeparator:l,decimalMarker:u,dropSpecialCharacters:m,hiddenInput:p,showMaskTyped:y,placeHolderCharacter:k,shownMaskExpression:d,clearIfNotMatch:f,validation:ne,separatorLimit:ge,allowNegativeNumbers:we,leadZeroDateTime:ce,leadZero:Pe,triggerOnMaskChange:Tt,apm:st,inputTransformFn:At,outputTransformFn:lt,keepCharacterPositions:di,instantPrefix:T}=e;if(t&&(t.currentValue!==t.previousValue&&!t.firstChange&&(this._maskService.maskChanged=!0),t.currentValue&&t.currentValue.split(s.OR).length>1?(this._maskExpressionArray.set(t.currentValue.split(s.OR).sort((_,Ee)=>_.length-Ee.length)),this._setMask()):(this._maskExpressionArray.set([]),this._maskValue.set(t.currentValue||s.EMPTY_STRING),this._maskService.maskExpression=this._maskValue())),r){if(!r.currentValue||!Array.isArray(r.currentValue))return;this._maskService.specialCharacters=r.currentValue||[]}if(we&&(this._maskService.allowNegativeNumbers=we.currentValue,this._maskService.allowNegativeNumbers&&(this._maskService.specialCharacters=this._maskService.specialCharacters.filter(_=>_!==s.MINUS))),o&&o.currentValue&&(this._maskService.patterns=o.currentValue),st&&st.currentValue&&(this._maskService.apm=st.currentValue),T&&(this._maskService.instantPrefix=T.currentValue),a&&(this._maskService.prefix=a.currentValue),h&&(this._maskService.suffix=h.currentValue),l&&(this._maskService.thousandSeparator=l.currentValue,l.previousValue&&l.currentValue)){let _=this._maskService.decimalMarker;l.currentValue===this._maskService.decimalMarker&&(this._maskService.decimalMarker=l.currentValue===s.COMMA?s.DOT:s.COMMA),this._maskService.dropSpecialCharacters===!0&&(this._maskService.specialCharacters=this._config.specialCharacters),typeof _=="string"&&typeof this._maskService.decimalMarker=="string"&&(this._inputValue.set(this._inputValue().split(l.previousValue).join("").replace(_,this._maskService.decimalMarker)),this._maskService.actualValue=this._inputValue()),this._maskService.writingValue=!0}u&&(this._maskService.decimalMarker=u.currentValue),m&&(this._maskService.dropSpecialCharacters=m.currentValue),p&&(this._maskService.hiddenInput=p.currentValue,p.previousValue===!0&&p.currentValue===!1&&this._inputValue.set(this._maskService.actualValue)),y&&(this._maskService.showMaskTyped=y.currentValue,y.previousValue===!1&&y.currentValue===!0&&this._isFocused()&&requestAnimationFrame(()=>{this._maskService._elementRef?.nativeElement.click()})),k&&(this._maskService.placeHolderCharacter=k.currentValue),d&&(this._maskService.shownMaskExpression=d.currentValue),f&&(this._maskService.clearIfNotMatch=f.currentValue),ne&&(this._maskService.validation=ne.currentValue),ge&&(this._maskService.separatorLimit=ge.currentValue),ce&&(this._maskService.leadZeroDateTime=ce.currentValue),Pe&&(this._maskService.leadZero=Pe.currentValue),Tt&&(this._maskService.triggerOnMaskChange=Tt.currentValue),At&&(this._maskService.inputTransformFn=At.currentValue),lt&&(this._maskService.outputTransformFn=lt.currentValue),di&&(this._maskService.keepCharacterPositions=di.currentValue),this._applyMask()}validate({value:e}){let t=typeof e=="number"?String(e):e,r=this._maskValue();if(!this._maskService.validation||!r)return null;if(this._maskService.ipError)return this._createValidationError(t);if(this._maskService.cpfCnpjError)return this._createValidationError(t);if(r.startsWith(s.SEPARATOR)||Zs.includes(r)||this._maskService.clearIfNotMatch)return null;if($s.includes(r))return this._validateTime(t);if(r===s.EMAIL_MASK)return!/^[^@]+@[^@]+\.[^@]+$/.test(t)&&t?this._createValidationError(t):null;if(t&&t.length>=1){let o=0;if(r.includes(s.CURLY_BRACKETS_LEFT)&&r.includes(s.CURLY_BRACKETS_RIGHT))return r.slice(r.indexOf(s.CURLY_BRACKETS_LEFT)+1,r.indexOf(s.CURLY_BRACKETS_RIGHT))===String(t.length)?null:this._createValidationError(t);if(r.startsWith(s.PERCENT))return null;for(let a in this._maskService.patterns)if(this._maskService.patterns[a]?.optional){if(r.indexOf(a)!==r.lastIndexOf(a)){let h=r.split(s.EMPTY_STRING).filter(l=>l===a).join(s.EMPTY_STRING);o+=h.length}else r.indexOf(a)!==-1&&o++;if(r.indexOf(a)!==-1&&t.length>=r.indexOf(a)||o===r.length)return null}if(r.indexOf(s.SYMBOL_STAR)>1&&t.length<r.indexOf(s.SYMBOL_STAR)||r.indexOf(s.SYMBOL_QUESTION)>1&&t.length<r.indexOf(s.SYMBOL_QUESTION))return this._createValidationError(t);if(r.indexOf(s.SYMBOL_STAR)===-1||r.indexOf(s.SYMBOL_QUESTION)===-1){let a=r.split("*"),h=this._maskService.dropSpecialCharacters?r.length-this._maskService.checkDropSpecialCharAmount(r)-o:this.prefix()?r.length+this.prefix().length-o:r.length-o;if(a.length===1&&t.length<h)return this._createValidationError(t);if(a.length>1){let l=a[a.length-1];if(l&&this._maskService.specialCharacters.includes(l[0])&&String(t).includes(l[0]??"")&&!this.dropSpecialCharacters()){let u=e.split(l[0]);return u[u.length-1].length===l.length-1?null:this._createValidationError(t)}else return(l&&!this._maskService.specialCharacters.includes(l[0])||!l||this._maskService.dropSpecialCharacters)&&t.length>=h-1?null:this._createValidationError(t)}}if(r.indexOf(s.SYMBOL_STAR)===1||r.indexOf(s.SYMBOL_QUESTION)===1)return null}return e&&this.maskFilled.emit(),null}onPaste(){this._justPasted.set(!0)}onFocus(){this._isFocused.set(!0)}onModelChange(e){(e===s.EMPTY_STRING||e===null||typeof e>"u")&&this._maskService.actualValue&&(this._maskService.actualValue=this._maskService.getActualValue(s.EMPTY_STRING))}onInput(e){if(this._maskService.isInitialized=!0,this._isComposing())return;let t=e.target,r=this._maskService.inputTransformFn?this._maskService.inputTransformFn(t.value):t.value;if(t.type!=="number")if(typeof r=="string"||typeof r=="number"){if(t.value=r.toString(),this._inputValue.set(t.value),this._setMask(),!this._maskValue()){this.onChange(t.value);return}let o=t.selectionStart===1?t.selectionStart+this._maskService.prefix.length:t.selectionStart;if(this.showMaskTyped()&&this.keepCharacterPositions()&&this._maskService.placeHolderCharacter.length===1){let u=this.suffix(),m=this.prefix(),p=t.value.slice(o-1,o),y=m.length,k=this._maskService._checkSymbolMask(p,this._maskService.maskExpression[o-1-y]??s.EMPTY_STRING),d=this._maskService._checkSymbolMask(p,this._maskService.maskExpression[o+1-y]??s.EMPTY_STRING),f=this._maskService.selStart===this._maskService.selEnd,ne=Number(this._maskService.selStart)-y,ge=Number(this._maskService.selEnd)-y,we=this._code()===s.BACKSPACE||this._code()===s.DELETE;if(we){if(!f)this._maskService.selStart===y?this._maskService.actualValue=`${m}${this._maskService.maskIsShown.slice(0,ge)}${this._inputValue().split(m).join("")}`:this._maskService.selStart===this._maskService.maskIsShown.length+y?this._maskService.actualValue=`${this._inputValue()}${this._maskService.maskIsShown.slice(ne,ge)}`:this._maskService.actualValue=`${m}${this._inputValue().split(m).join("").slice(0,ne)}${this._maskService.maskIsShown.slice(ne,ge)}${this._maskService.actualValue.slice(ge+y,this._maskService.maskIsShown.length+y)}${u}`;else if(!this._maskService.specialCharacters.includes(this._maskService.maskExpression.slice(o-y,o+1-y))&&f)if(ne===1&&m)this._maskService.actualValue=`${m}${this._maskService.placeHolderCharacter}${t.value.split(m).join("").split(u).join("")}${u}`,o=o-1;else{let ce=t.value.substring(0,o),Pe=t.value.substring(o);this._maskService.actualValue=`${ce}${this._maskService.placeHolderCharacter}${Pe}`}o=this._code()===s.DELETE?o+1:o}we||(!k&&!d&&f?o=Number(t.selectionStart)-1:this._maskService.specialCharacters.includes(t.value.slice(o,o+1))&&d&&!this._maskService.specialCharacters.includes(t.value.slice(o+1,o+2))?(this._maskService.actualValue=`${t.value.slice(0,o-1)}${t.value.slice(o,o+1)}${p}${t.value.slice(o+2)}`,o=o+1):k?t.value.length===1&&o===1?this._maskService.actualValue=`${m}${p}${this._maskService.maskIsShown.slice(1,this._maskService.maskIsShown.length)}${u}`:this._maskService.actualValue=`${t.value.slice(0,o-1)}${p}${t.value.slice(o+1).split(u).join("")}${u}`:m&&t.value.length===1&&o-y===1&&this._maskService._checkSymbolMask(t.value,this._maskService.maskExpression[o-1-y]??s.EMPTY_STRING)&&(this._maskService.actualValue=`${m}${t.value}${this._maskService.maskIsShown.slice(1,this._maskService.maskIsShown.length)}${u}`))}let a=0,h=!1;if(this._code()===s.DELETE&&s.SEPARATOR&&(this._maskService.deletedSpecialCharacter=!0),this._inputValue().length>=this._maskService.maskExpression.length-1&&this._code()!==s.BACKSPACE&&this._maskService.maskExpression===s.DAYS_MONTHS_YEARS&&o<10){let u=this._inputValue().slice(o-1,o);t.value=this._inputValue().slice(0,o-1)+u+this._inputValue().slice(o+1)}if(this._maskService.maskExpression===s.DAYS_MONTHS_YEARS&&this.leadZeroDateTime()&&(o<3&&Number(t.value)>31&&Number(t.value)<40||o===5&&Number(t.value.slice(3,5))>12)&&(o=o+2),this._maskService.maskExpression===s.HOURS_MINUTES_SECONDS&&this.apm()&&(this._justPasted()&&t.value.slice(0,2)===s.DOUBLE_ZERO&&(t.value=t.value.slice(1,2)+t.value.slice(2,t.value.length)),t.value=t.value===s.DOUBLE_ZERO?s.NUMBER_ZERO:t.value),this._maskService.applyValueChanges(o,this._justPasted(),this._code()===s.BACKSPACE||this._code()===s.DELETE,(u,m)=>{this._justPasted.set(!1),a=u,h=m}),this._getActiveElement()!==t)return;if(this._maskService.plusOnePosition&&(o=o+1,this._maskService.plusOnePosition=!1),this._maskExpressionArray().length)if(this._code()===s.BACKSPACE){let u=this.specialCharacters().includes(this._maskService.actualValue.slice(o-1,o)),m=this._maskService.removeMask(this._inputValue())?.length===this._maskService.removeMask(this._maskService.maskExpression)?.length,p=this.specialCharacters().includes(this._maskService.actualValue.slice(o,o+1));m&&!p?o=t.selectionStart+1:o=u?o-1:o}else o=t.selectionStart===1?t.selectionStart+this._maskService.prefix.length:t.selectionStart;this._position.set(this._position()===1&&this._inputValue().length===1?null:this._position());let l=this._position()?this._inputValue().length+o+a:o+(this._code()===s.BACKSPACE&&!h?0:a);l>this._getActualInputLength()&&(l=t.value===this._maskService.decimalMarker&&t.value.length===1?this._getActualInputLength()+1:this._getActualInputLength()),l<0&&(l=0),t.setSelectionRange(l,l),this._position.set(null)}else console.warn("Ngx-mask writeValue work with string | number, your current value:",typeof r);else{if(!this._maskValue()){this.onChange(t.value);return}this._maskService.applyValueChanges(t.value.length,this._justPasted(),this._code()===s.BACKSPACE||this._code()===s.DELETE)}}onCompositionStart(){this._isComposing.set(!0)}onCompositionEnd(e){this._isComposing.set(!1),this._justPasted.set(!0),this.onInput(e)}onBlur(e){if(this._maskValue()){let t=e.target;if(this._maskService.leadZero&&t.value.length>0&&typeof this._maskService.decimalMarker=="string"){let r=this._maskService.maskExpression,o=this._maskService.decimalMarker,a=this._maskService.suffix,h=Number(this._maskService.maskExpression.slice(r.length-1,r.length));if(h>0){t.value=a?t.value.split(a).join(""):t.value;let l=t.value.split(o)[1];t.value=t.value.includes(o)?t.value+s.NUMBER_ZERO.repeat(h-l.length)+a:t.value+o+s.NUMBER_ZERO.repeat(h)+a,this._maskService.actualValue=t.value}}this._maskService.clearIfNotMatchFn()}this._isFocused.set(!1),this.onTouch()}onClick(e){if(!this._maskValue())return;let t=e.target,r=0,o=0;t!==null&&t.selectionStart!==null&&t.selectionStart===t.selectionEnd&&t.selectionStart>this._maskService.prefix.length&&e.keyCode!==38&&this._maskService.showMaskTyped&&!this.keepCharacterPositions()&&(this._maskService.maskIsShown=this._maskService.showMaskInInput(),t.setSelectionRange&&this._maskService.prefix+this._maskService.maskIsShown===t.value?(t.focus(),t.setSelectionRange(r,o)):t.selectionStart>this._maskService.actualValue.length&&t.setSelectionRange(this._maskService.actualValue.length,this._maskService.actualValue.length));let a=t&&(t.value===this._maskService.prefix?this._maskService.prefix+this._maskService.maskIsShown:t.value);if(t&&t.value!==a&&(t.value=a),t&&t.type!=="number"&&(t.selectionStart||t.selectionEnd)<=this._maskService.prefix.length){let h=this._maskService.maskExpression.match(new RegExp(`^[${this._maskService.specialCharacters.map(l=>`\\${l}`).join("")}]+`))?.[0].length||0;t.selectionStart=this._maskService.prefix.length+h;return}t&&t.selectionEnd>this._getActualInputLength()&&(t.selectionEnd=this._getActualInputLength())}onKeyDown(e){let t=e;if(!this._maskValue())return;if(this._isComposing()){t.key==="Enter"&&this.onCompositionEnd(e);return}this._code.set(t.code?t.code:t.key);let r=t.target;this._inputValue.set(r.value),this._setMask();let o=r.tagName.toLowerCase()==="textarea";if(r.type!=="number"){if(t.key===s.ARROW_UP&&!o&&t.preventDefault(),t.key===s.ARROW_LEFT||t.key===s.BACKSPACE||t.key===s.DELETE){if(t.key===s.BACKSPACE&&r.value.length===0&&(r.selectionStart=r.selectionEnd),t.key===s.BACKSPACE&&r.selectionStart!==0){let h=this.prefix().length,l=this.specialCharacters().length?this.specialCharacters():this._config.specialCharacters;if(h>1&&r.selectionStart<=h)r.setSelectionRange(h,r.selectionEnd);else if(this._inputValue().length!==r.selectionStart&&r.selectionStart!==1)for(;l.includes((this._inputValue()[r.selectionStart-1]??s.EMPTY_STRING).toString())&&(h>=1&&r.selectionStart>h||h===0);)r.setSelectionRange(r.selectionStart-1,r.selectionEnd)}this.checkSelectionOnDeletion(r),this._maskService.prefix.length&&r.selectionStart<=this._maskService.prefix.length&&r.selectionEnd<=this._maskService.prefix.length&&t.preventDefault();let a=r.selectionStart;t.key===s.BACKSPACE&&!r.readOnly&&a===0&&r.selectionEnd===r.value.length&&r.value.length!==0&&(this._position.set(this._maskService.prefix?this._maskService.prefix.length:0),this._maskService.applyMask(this._maskService.prefix,this._maskService.maskExpression,this._position()))}this.suffix()&&this.suffix().length>1&&this._inputValue().length-this.suffix().length<r.selectionStart?r.setSelectionRange(this._inputValue().length-this.suffix().length,this._inputValue().length):(t.code==="KeyA"&&t.ctrlKey||t.code==="KeyA"&&t.metaKey)&&(r.setSelectionRange(0,this._getActualInputLength()),t.preventDefault()),this._maskService.selStart=r.selectionStart,this._maskService.selEnd=r.selectionEnd}}writeValue(e){return Sr(this,null,function*(){let t=e,r=this._maskService.inputTransformFn;if(typeof t=="object"&&t!==null&&"value"in t&&("disable"in t&&this.setDisabledState(!!t.disable),t=t.value),t!==null&&(t=r?r(t):t),typeof t=="string"||typeof t=="number"||t===null||typeof t>"u"){(t===null||typeof t>"u"||t==="")&&(this._maskService.currentValue="",this._maskService.previousValue="");let o=t;if(typeof o=="number"||this._maskValue().startsWith(s.SEPARATOR)){o=String(o);let a=this._maskService.currentLocaleDecimalMarker();if(Array.isArray(this._maskService.decimalMarker)||(o=this._maskService.decimalMarker!==a?o.replace(a,this._maskService.decimalMarker):o),this._maskService.leadZero&&o&&this.mask()&&this.dropSpecialCharacters()!==!1&&(o=this._maskService._checkPrecision(this._maskService.maskExpression,o)),(this._maskService.decimalMarker===s.COMMA||Array.isArray(this._maskService.decimalMarker)&&this._maskService.thousandSeparator===s.DOT)&&(o=o.toString().replace(s.DOT,s.COMMA)),this.mask()?.startsWith(s.SEPARATOR)&&this.leadZero()){let h=!this._maskService.isInitialized;requestAnimationFrame(()=>{h&&(this._maskService.isInitialized=!1),this._maskService.applyMask(o?.toString()??"",this._maskService.maskExpression),h&&(this._maskService.isInitialized=!0)})}this._maskService.isNumberValue=!0}(typeof o!="string"||t===null||typeof t>"u")&&(o=""),this._inputValue.set(o),this._setMask(),o&&this._maskService.maskExpression||this._maskService.maskExpression&&(this._maskService.prefix||this._maskService.showMaskTyped)?(this._maskService.writingValue=!0,this._maskService.formElementProperty=["value",this._maskService.applyMask(o,this._maskService.maskExpression)],this._maskService.writingValue=!1,this._maskService.isInitialized=!0):(this._maskService.formElementProperty=["value",o],this._maskService.isInitialized=!0),this._inputValue.set(o)}else console.warn("Ngx-mask writeValue work with string | number, your current value:",typeof t)})}registerOnChange(e){let t=e;this._maskService.onChange=this.onChange=r=>{if(t(r),this._isSignalFormsMode()){let o=r===null||typeof r>"u"?"":String(r);this.value()!==o&&this.value.set(o)}}}registerOnTouched(e){this.onTouch=()=>{e(),this._isSignalFormsMode()&&!this.touched()&&this.touched.set(!0)}}focus(){this._maskService._elementRef?.nativeElement?.focus()}_getActiveElement(e=this.document){let t=e?.activeElement?.shadowRoot;return t?.activeElement?this._getActiveElement(t):e.activeElement}checkSelectionOnDeletion(e){let t=this.prefix().length,r=this.suffix().length,o=this._inputValue().length;e.selectionStart=Math.min(Math.max(t,e.selectionStart),o-r),e.selectionEnd=Math.min(Math.max(t,e.selectionEnd),o-r)}setDisabledState(e){this._maskService.formElementProperty=["disabled",e]}_applyMask(){this._maskService.maskExpression=this._maskService._repeatPatternSymbols(this._maskValue()||""),this._maskService.formElementProperty=["value",this._maskService.applyMask(this._inputValue(),this._maskService.maskExpression)]}_validateTime(e){let t=this._maskValue().split(s.EMPTY_STRING).filter(r=>r!==":").length;return e&&(+(e[e.length-1]??-1)==0&&e.length<t||e.length<=t-2)?this._createValidationError(e):null}_getActualInputLength(){return this._maskService.actualValue.length||this._maskService.actualValue.length+this._maskService.prefix.length}_createValidationError(e){return{mask:{requiredMask:this._maskValue(),actualValue:e}}}_setMask(){this._maskExpressionArray().some(e=>{if(e.split(s.EMPTY_STRING).some(r=>this._maskService.specialCharacters.includes(r))&&this._inputValue()&&this._areAllCharactersInEachStringSame(this._maskExpressionArray())||e.includes(s.CURLY_BRACKETS_LEFT)){let r=this._maskService.removeMask(this._inputValue())?.length<=this._maskService.removeMask(e)?.length;if(r){let o=e.includes(s.CURLY_BRACKETS_LEFT)?this._maskService._repeatPatternSymbols(e):e;return this._maskValue.set(o),this._maskService.maskExpression=o,r}else{let o=this._maskExpressionArray()[this._maskExpressionArray().length-1]??s.EMPTY_STRING,a=o.includes(s.CURLY_BRACKETS_LEFT)?this._maskService._repeatPatternSymbols(o):o;this._maskValue.set(a),this._maskService.maskExpression=a}}else{let r=this._maskService.removeMask(e),o=this._maskService.removeMask(this._inputValue())?.split(s.EMPTY_STRING).every((a,h)=>{let l=r.charAt(h);return this._maskService._checkSymbolMask(a,l)});if(o||this._justPasted())return this._maskValue.set(e),this._maskService.maskExpression=e,o}})}_areAllCharactersInEachStringSame(e){let t=this._maskService.specialCharacters;function r(a){let h=new RegExp(`[${t.map(l=>`\\${l}`).join("")}]`,"g");return a.replace(h,"")}return e.map(r).every(a=>new Set(a).size===1)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["input","mask",""],["textarea","mask",""]],hostBindings:function(t,r){t&1&&$("paste",function(){return r.onPaste()})("focus",function(){return r.onFocus()})("ngModelChange",function(a){return r.onModelChange(a)})("input",function(a){return r.onInput(a)})("compositionstart",function(){return r.onCompositionStart()})("compositionend",function(a){return r.onCompositionEnd(a)})("blur",function(a){return r.onBlur(a)})("click",function(a){return r.onClick(a)})("keydown",function(a){return r.onKeyDown(a)})},inputs:{mask:[1,"mask"],specialCharacters:[1,"specialCharacters"],patterns:[1,"patterns"],prefix:[1,"prefix"],suffix:[1,"suffix"],thousandSeparator:[1,"thousandSeparator"],decimalMarker:[1,"decimalMarker"],dropSpecialCharacters:[1,"dropSpecialCharacters"],hiddenInput:[1,"hiddenInput"],showMaskTyped:[1,"showMaskTyped"],placeHolderCharacter:[1,"placeHolderCharacter"],shownMaskExpression:[1,"shownMaskExpression"],clearIfNotMatch:[1,"clearIfNotMatch"],validation:[1,"validation"],separatorLimit:[1,"separatorLimit"],allowNegativeNumbers:[1,"allowNegativeNumbers"],leadZeroDateTime:[1,"leadZeroDateTime"],leadZero:[1,"leadZero"],triggerOnMaskChange:[1,"triggerOnMaskChange"],apm:[1,"apm"],inputTransformFn:[1,"inputTransformFn"],outputTransformFn:[1,"outputTransformFn"],keepCharacterPositions:[1,"keepCharacterPositions"],instantPrefix:[1,"instantPrefix"],value:[1,"value"],errors:[1,"errors"],disabled:[1,"disabled"],touched:[1,"touched"],dirty:[1,"dirty"],invalid:[1,"invalid"],pending:[1,"pending"],readonly:[1,"readonly"],required:[1,"required"],name:[1,"name"]},outputs:{value:"valueChange",touched:"touchedChange",maskFilled:"maskFilled"},exportAs:["mask","ngxMask"],features:[ue([{provide:Ni,useExisting:n,multi:!0},{provide:jt,useExisting:n,multi:!0},Ln]),Me]})}return n})();var wt=(function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n})(wt||{}),xd="*";function Cd(n,i){return{type:wt.Trigger,name:n,definitions:i,options:{}}}function Sd(n,i=null){return{type:wt.Animate,styles:i,timings:n}}function wd(n,i=null){return{type:wt.Sequence,steps:n,options:i}}function Ed(n){return{type:wt.Style,styles:n,offset:null}}function Md(n,i,e=null){return{type:wt.Transition,expr:n,animation:i,options:e}}var Io=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(i=0,e=0){this.totalTime=i+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}onStart(i){this._originalOnStartFns.push(i),this._onStartFns.push(i)}onDone(i){this._originalOnDoneFns.push(i),this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(i=>i()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(i){this._position=this.totalTime?i*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},To=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(i){this.players=i;let e=0,t=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(a=>{a.onDone(()=>{++e==o&&this._onFinish()}),a.onDestroy(()=>{++t==o&&this._onDestroy()}),a.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((a,h)=>Math.max(a,h.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(i=>i()),this._onDoneFns=[])}init(){this.players.forEach(i=>i.init())}onStart(i){this._onStartFns.push(i)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(i=>i()),this._onStartFns=[])}onDone(i){this._onDoneFns.push(i)}onDestroy(i){this._onDestroyFns.push(i)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(i=>i.play())}pause(){this.players.forEach(i=>i.pause())}restart(){this.players.forEach(i=>i.restart())}finish(){this._onFinish(),this.players.forEach(i=>i.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(i=>i.destroy()),this._onDestroyFns.forEach(i=>i()),this._onDestroyFns=[])}reset(){this.players.forEach(i=>i.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(i){let e=i*this.totalTime;this.players.forEach(t=>{let r=t.totalTime?Math.min(1,e/t.totalTime):1;t.setPosition(r)})}getPosition(){let i=this.players.reduce((e,t)=>e===null||t.totalTime>e.totalTime?t:e,null);return i!=null?i.getPosition():0}beforeDestroy(){this.players.forEach(i=>{i.beforeDestroy&&i.beforeDestroy()})}triggerCallback(i){let e=i=="start"?this._onStartFns:this._onDoneFns;e.forEach(t=>t()),e.length=0}},kd="!";var qs=new g("cdk-dir-doc",{providedIn:"root",factory:()=>c(j)}),Qs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ao(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Qs.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var Re=(()=>{class n{get value(){return this.valueSignal()}valueSignal=P("ltr");change=new N;constructor(){let e=c(qs,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ao(t||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ie=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({})}return n})();var Bn;try{Bn=typeof Intl<"u"&&Intl.v8BreakIterator}catch(n){Bn=!1}var W=(()=>{class n{_platformId=c(Pr);isBrowser=this._platformId?eo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Bn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Et(n){return Array.isArray(n)?n:[n]}var Ro=new Set,it,Mt=(()=>{class n{_platform=c(W);_nonce=c(Nr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):el}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Js(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Js(n,i){if(!Ro.has(n))try{it||(it=document.createElement("style"),i&&it.setAttribute("nonce",i),it.setAttribute("type","text/css"),document.head.appendChild(it)),it.sheet&&(it.sheet.insertRule(`@media ${n} {body{ }}`,0),Ro.add(n))}catch(e){console.error(e)}}function el(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var zn=(()=>{class n{_mediaMatcher=c(Mt);_zone=c(D);_queries=new Map;_destroySubject=new S;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Fo(Et(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Fo(Et(e)).map(a=>this._registerQuery(a).observable),o=Dr(r);return o=Or(o.pipe(_i(1)),o.pipe(gi(1),pi(0))),o.pipe(ve(a=>{let h={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:u})=>{h.matches=h.matches||l,h.breakpoints[u]=l}),h}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new dt(a=>{let h=l=>this._zone.run(()=>a.next(l));return t.addListener(h),()=>{t.removeListener(h)}}).pipe(ze(t),ve(({matches:a})=>({query:e,matches:a})),Z(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fo(n){return n.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}var tl=new g("MATERIAL_ANIMATIONS"),Po=null;function il(){return c(tl,{optional:!0})?.animationsDisabled||c(xi,{optional:!0})==="NoopAnimations"?"di-disabled":(Po??=c(Mt).matchMedia("(prefers-reduced-motion)").matches,Po?"reduced-motion":"enabled")}function le(){return il()!=="enabled"}function Ut(n){return n.buttons===0||n.detail===0}function Gt(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Hn;function No(){if(Hn==null){let n=typeof document<"u"?document.head:null;Hn=!!(n&&(n.createShadowRoot||n.attachShadow))}return Hn}function jn(n){if(No()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function re(n){return n.composedPath?n.composedPath()[0]:n.target}var Yt;function Vo(){if(Yt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Yt=!0}))}finally{Yt=Yt||!1}return Yt}function kt(n){return Vo()?n:!!n.capture}function Wt(n,i=0){return Lo(n)?Number(n):arguments.length===2?i:0}function Lo(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Fe(n){return n instanceof M?n.nativeElement:n}var Bo=new g("cdk-input-modality-detector-options"),zo={ignoreKeys:[18,17,224,91,16]},Ho=650,Un={passive:!0,capture:!0},jo=(()=>{class n{_platform=c(W);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Er(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=re(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Ho||(this._modality.next(Ut(e)?"keyboard":"mouse"),this._mostRecentTarget=re(e))};_onTouchstart=e=>{if(Gt(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=re(e)};constructor(){let e=c(D),t=c(j),r=c(Bo,{optional:!0});if(this._options=x(x({},zo),r),this.modalityDetected=this._modality.pipe(gi(1)),this.modalityChanged=this.modalityDetected.pipe(pn()),this._platform.isBrowser){let o=c(ke).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,Un),o.listen(t,"mousedown",this._onMousedown,Un),o.listen(t,"touchstart",this._onTouchstart,Un)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),$t=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})($t||{}),Uo=new g("cdk-focus-monitor-default-options"),Bi=kt({passive:!0,capture:!0}),Zt=(()=>{class n{_ngZone=c(D);_platform=c(W);_inputModalityDetector=c(jo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(j);_stopInputModalityDetector=new S;constructor(){let e=c(Uo,{optional:!0});this._detectionMode=e?.detectionMode||$t.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=re(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,t=!1){let r=Fe(e);if(!this._platform.isBrowser||r.nodeType!==1)return fi();let o=jn(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let h={checkChildren:t,subject:new S,rootNode:o};return this._elementInfo.set(r,h),this._registerGlobalListeners(h),h.subject}stopMonitoring(e){let t=Fe(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r))}focusVia(e,t,r){let o=Fe(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([h,l])=>this._originChanged(h,t,l)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$t.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===$t.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Ho:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,t){let r=this._elementInfo.get(t),o=re(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r)}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Bi),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Bi)}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Z(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Bi),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Bi),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var zi=new WeakMap,xe=(()=>{class n{_appRef;_injector=c(K);_environmentInjector=c(mt);load(e){let t=this._appRef=this._appRef||this._injector.get(_t),r=zi.get(t);r||(r={loaders:new Set,refs:[]},zi.set(t,r),t.onDestroy(()=>{zi.get(t)?.refs.forEach(o=>o.destroy()),zi.delete(t)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Ei(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Kt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Hi;function nl(){if(Hi===void 0&&(Hi=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Hi=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Hi}function rl(n){return nl()?.createHTML(n)||n}function Go(n,i,e){let t=e.sanitize(Vr.HTML,i);n.innerHTML=rl(t||"")}var ol=(()=>{class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ji=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({providers:[ol]})}return n})();var $o=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Zo=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),al=0,Yn=(()=>{class n{_ngZone=c(D);_defaultOptions=c(Zo,{optional:!0});_liveElement;_document=c(j);_sanitizer=c(to);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c($o,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(h=>this._currentResolve=h)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Go(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${al++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $e=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})($e||{}),Yo="cdk-high-contrast-black-on-white",Wo="cdk-high-contrast-white-on-black",Gn="cdk-high-contrast-active",Ko=(()=>{class n{_platform=c(W);_hasCheckedHighContrastMode=!1;_document=c(j);_breakpointSubscription;constructor(){this._breakpointSubscription=c(zn).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return $e.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,r=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return $e.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return $e.BLACK_ON_WHITE}return $e.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Gn,Yo,Wo),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===$e.BLACK_ON_WHITE?e.add(Gn,Yo):t===$e.WHITE_ON_BLACK&&e.add(Gn,Wo)}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Wn=(()=>{class n{constructor(){c(Ko)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ji]})}return n})();var sl=200,Ui=class{_letterKeyStream=new S;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new S;selectedItem=this._selectedItem;constructor(i,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:sl;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Rr(e=>this._pressedLetters.push(e)),pi(i),_e(()=>this._pressedLetters.length>0),ve(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ce(n,...i){return i.length?i.some(e=>n[e]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var Gi=class{_items;_activeItemIndex=P(-1);_activeItem=P(null);_wrap=!1;_typeaheadSubscription=be.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof bn?this._itemChangesSubscription=i.changes.subscribe(t=>this._itemsChanged(t.toArray())):Ft(i)&&(this._effectRef=He(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new S;change=new S;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ui(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||Ce(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),t=typeof i=="number"?i:e.indexOf(i),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+i*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let t=this._getItemsArray();if(t[i]){for(;this._skipPredicateFn(t[i]);)if(i+=e,!t[i])return;this.setActiveItem(i)}}_getItemsArray(){return Ft(this._items)?this._items():this._items instanceof bn?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let t=i.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Xt=class extends Gi{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Kn={},fe=class n{_appId=c(yi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Kn.hasOwnProperty(i)||(Kn[i]=0),`${i}${e?n._infix+"-":""}${Kn[i]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})};var ea=" ";function Qn(n,i,e){let t=Wi(n,i);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),n.setAttribute(i,t.join(ea)))}function $i(n,i,e){let t=Wi(n,i);e=e.trim();let r=t.filter(o=>o!==e);r.length?n.setAttribute(i,r.join(ea)):n.removeAttribute(i)}function Wi(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var ta="cdk-describedby-message",Yi="cdk-describedby-host",qn=0,ia=(()=>{class n{_platform=c(W);_document=c(j);_messageRegistry=new Map;_messagesContainer=null;_id=`${qn++}`;constructor(){c(xe).load(Kt),this._id=c(yi)+"-"+qn++}describe(e,t,r){if(!this._canBeDescribed(e,t))return;let o=Xn(t,r);typeof t!="string"?(Jo(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,r){if(!t||!this._isElementNode(e))return;let o=Xn(t,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${Yi}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(Yi);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let r=this._document.createElement("div");Jo(r,this._id),r.textContent=e,t&&r.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Xn(e,t),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let t=Wi(e,"aria-describedby").filter(r=>r.indexOf(ta)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let r=this._messageRegistry.get(t);Qn(e,"aria-describedby",r.messageElement.id),e.setAttribute(Yi,this._id),r.referenceCount++}_removeMessageReference(e,t){let r=this._messageRegistry.get(t);r.referenceCount--,$i(e,"aria-describedby",r.messageElement.id),e.removeAttribute(Yi)}_isElementDescribedByMessage(e,t){let r=Wi(e,"aria-describedby"),o=this._messageRegistry.get(t),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let r=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Xn(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Jo(n,i){n.id||(n.id=`${ta}-${i}-${qn++}`)}var nt;function na(){if(nt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return nt=!1,nt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)nt=!0;else{let n=Element.prototype.scrollTo;n?nt=!/\{\s*\[native code\]\s*\}/.test(n.toString()):nt=!1}}return nt}function Jn(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function Q(n){return n==null?"":typeof n=="string"?n:`${n}px`}function qt(n){return n!=null&&`${n}`!="false"}var Se=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Se||{}),er=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Se.HIDDEN;constructor(i,e,t,r=!1){this._renderer=i,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},ra=kt({passive:!0,capture:!0}),tr=class{_events=new Map;addHandler(i,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]))}else this._events.set(e,new Map([[t,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,ra)})}removeHandler(i,e,t){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,ra)))}_delegateEventHandler=i=>{let e=re(i);e&&this._events.get(i.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(i))})}},Qt={enterDuration:225,exitDuration:150},ll=800,oa=kt({passive:!0,capture:!0}),aa=["mousedown","touchstart"],sa=["mouseup","mouseleave","touchend","touchcancel"],cl=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),Jt=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new tr;constructor(i,e,t,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Fe(t)),o&&o.get(xe).load(cl)}fadeInRipple(i,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=x(x({},Qt),t.animation);t.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||dl(i,e,r),h=i-r.left,l=e-r.top,u=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${h-a}px`,m.style.top=`${l-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(m);let p=window.getComputedStyle(m),y=p.transitionProperty,k=p.transitionDuration,d=y==="none"||k==="0s"||k==="0s, 0s"||r.width===0&&r.height===0,f=new er(this,m,t,d);m.style.transform="scale3d(1, 1, 1)",f.state=Se.FADING_IN,t.persistent||(this._mostRecentTransientRipple=f);let ne=null;return!d&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ge=()=>{ne&&(ne.fallbackTimer=null),clearTimeout(ce),this._finishRippleTransition(f)},we=()=>this._destroyRipple(f),ce=setTimeout(we,u+100);m.addEventListener("transitionend",ge),m.addEventListener("transitioncancel",we),ne={onTransitionEnd:ge,onTransitionCancel:we,fallbackTimer:ce}}),this._activeRipples.set(f,ne),(d||!u)&&this._finishRippleTransition(f),f}fadeOutRipple(i){if(i.state===Se.FADING_OUT||i.state===Se.HIDDEN)return;let e=i.element,t=x(x({},Qt),i.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",i.state=Se.FADING_OUT,(i._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Fe(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,aa.forEach(t=>{n._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{sa.forEach(e=>{this._triggerElement.addEventListener(e,this,oa)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Se.FADING_IN?this._startFadeOutTransition(i):i.state===Se.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:t}=i.config;i.state=Se.VISIBLE,!t&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Se.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Ut(i),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ll;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Gt(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Se.VISIBLE||i.config.terminateOnPointerUp&&i.state===Se.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(aa.forEach(e=>n._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(sa.forEach(e=>i.removeEventListener(e,this,oa)),this._pointerUpEventsRegistered=!1))}};function dl(n,i,e){let t=Math.max(Math.abs(n-e.left),Math.abs(n-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(t*t+r*r)}var ir=new g("mat-ripple-global-options"),la=(()=>{class n{_elementRef=c(M);_animationsDisabled=le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(D),t=c(W),r=c(ir,{optional:!0}),o=c(K);this._globalOptions=r||{},this._rippleRenderer=new Jt(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:x(x(x({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,x(x({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,x(x({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&U("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var hl={capture:!0},ul=["focus","mousedown","mouseenter","touchstart"],nr="mat-ripple-loader-uninitialized",rr="mat-ripple-loader-class-name",ca="mat-ripple-loader-centered",Zi="mat-ripple-loader-disabled",da=(()=>{class n{_document=c(j);_animationsDisabled=le();_globalRippleOptions=c(ir,{optional:!0});_platform=c(W);_ngZone=c(D);_injector=c(K);_eventCleanups;_hosts=new Map;constructor(){let e=c(ke).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ul.map(t=>e.listen(this._document,t,this._onInteraction,hl)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(nr,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(rr))&&e.setAttribute(rr,t.className||""),t.centered&&e.setAttribute(ca,""),t.disabled&&e.setAttribute(Zi,"")}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(Zi,""):e.removeAttribute(Zi)}_onInteraction=e=>{let t=re(e);if(t instanceof HTMLElement){let r=t.closest(`[${nr}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(rr)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Qt.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Qt.exitDuration,h={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Zi),rippleConfig:{centered:e.hasAttribute(ca),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Jt(h,this._ngZone,t,this._platform,this._injector),u=!h.rippleDisabled;u&&l.setupTriggerEvents(e),this._hosts.set(e,{target:h,renderer:l,hasSetUpEvents:u}),e.removeAttribute(nr)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ki=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ml=["mat-icon-button",""],fl=["*"],pl=new g("MAT_BUTTON_CONFIG");function ha(n){return n==null?void 0:Ae(n)}var ua=(()=>{class n{_elementRef=c(M);_ngZone=c(D);_animationsDisabled=le();_config=c(pl,{optional:!0});_focusMonitor=c(Zt);_cleanupClick;_renderer=c(oe);_rippleLoader=c(da);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(xe).load(Ki);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(te("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),bt(r.color?"mat-"+r.color:""),U("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",F],disabled:[2,"disabled","disabled",F],ariaDisabled:[2,"aria-disabled","ariaDisabled",F],disabledInteractive:[2,"disabledInteractive","disabledInteractive",F],tabIndex:[2,"tabIndex","tabIndex",ha],_tabindex:[2,"tabindex","_tabindex",ha]}})}return n})(),or=(()=>{class n extends ua{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[de],attrs:ml,ngContentSelectors:fl,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(De(),Ge(0,"span",0),q(1),Ge(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Xi=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ie]})}return n})();var ma=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[Xi,ie]})}return n})();var ar=class{_box;_destroyed=new S;_resizeSubject=new S;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new dt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),t.unsubscribe(),this._elementObservables.delete(i)}}).pipe(_e(e=>e.some(t=>t.target===i)),gn({bufferSize:1,refCount:!0}),Z(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},fa=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=c(D);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ar(r)),this._observers.get(r).observe(e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var _l=["notch"],gl=["matFormFieldNotchedOutline",""],bl=["*"],pa=["iconPrefixContainer"],_a=["textPrefixContainer"],ga=["iconSuffixContainer"],ba=["textSuffixContainer"],vl=["textField"],yl=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],xl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Cl(n,i){n&1&&ae(0,"span",21)}function Sl(n,i){if(n&1&&(C(0,"label",20),q(1,1),V(2,Cl,1,0,"span",21),w()),n&2){let e=B(2);X("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),te("for",e._control.disableAutomaticLabeling?null:e._control.id),v(2),L(!e.hideRequiredMarker&&e._control.required?2:-1)}}function wl(n,i){if(n&1&&V(0,Sl,3,5,"label",20),n&2){let e=B();L(e._hasFloatingLabel()?0:-1)}}function El(n,i){n&1&&ae(0,"div",7)}function Ml(n,i){}function kl(n,i){if(n&1&&pt(0,Ml,0,0,"ng-template",13),n&2){B(2);let e=et(1);X("ngTemplateOutlet",e)}}function Dl(n,i){if(n&1&&(C(0,"div",9),V(1,kl,1,1,null,13),w()),n&2){let e=B();X("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),v(),L(e._forceDisplayInfixLabel()?-1:1)}}function Ol(n,i){n&1&&(C(0,"div",10,2),q(2,2),w())}function Il(n,i){n&1&&(C(0,"div",11,3),q(2,3),w())}function Tl(n,i){}function Al(n,i){if(n&1&&pt(0,Tl,0,0,"ng-template",13),n&2){B();let e=et(1);X("ngTemplateOutlet",e)}}function Rl(n,i){n&1&&(C(0,"div",14,4),q(2,4),w())}function Fl(n,i){n&1&&(C(0,"div",15,5),q(2,5),w())}function Pl(n,i){n&1&&ae(0,"div",16)}function Nl(n,i){n&1&&(C(0,"div",18),q(1,6),w())}function Vl(n,i){if(n&1&&(C(0,"mat-hint",22),he(1),w()),n&2){let e=B(2);X("id",e._hintLabelId),v(),Le(e.hintLabel)}}function Ll(n,i){if(n&1&&(C(0,"div",19),V(1,Vl,2,2,"mat-hint",22),q(2,7),ae(3,"div",23),q(4,8),w()),n&2){let e=B();v(),L(e.hintLabel?1:-1)}}var sr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-label"]]})}return n})(),Bl=new g("MatError");var lr=(()=>{class n{align="start";id=c(fe).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(Si("id",r.id),te("align",null),U("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return n})(),zl=new g("MatPrefix");var Hl=new g("MatSuffix");var Ea=new g("FloatingLabelParent"),va=(()=>{class n{_elementRef=c(M);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(fa);_ngZone=c(D);_parent=c(Ea);_resizeSubscription=new be;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return jl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&U("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return n})();function jl(n){let i=n;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var ya="mdc-line-ripple--active",qi="mdc-line-ripple--deactivating",xa=(()=>{class n{_elementRef=c(M);_cleanupTransitionEnd;constructor(){let e=c(D),t=c(oe);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(qi),e.add(ya)}deactivate(){this._elementRef.nativeElement.classList.add(qi)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(qi);e.propertyName==="opacity"&&r&&t.remove(ya,qi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return n})(),Ca=(()=>{class n{_elementRef=c(M);_ngZone=c(D);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&Ie(_l,5),t&2){let o;z(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&U("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:gl,ngContentSelectors:bl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(De(),Ge(0,"div",1),Ue(1,"div",2,0),q(3),Je(),Ge(4,"div",3))},encapsulation:2,changeDetection:0})}return n})(),cr=(()=>{class n{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n})}return n})();var dr=new g("MatFormField"),Ul=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Sa="fill",Gl="auto",wa="fixed",Yl="translateY(-50%)",Qi=(()=>{class n{_elementRef=c(M);_changeDetectorRef=c(ye);_platform=c(W);_idGenerator=c(fe);_ngZone=c(D);_defaults=c(Ul,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Pt("iconPrefixContainer");_textPrefixContainerSignal=Pt("textPrefixContainer");_iconSuffixContainerSignal=Pt("iconSuffixContainer");_textSuffixContainerSignal=Pt("textSuffixContainer");_prefixSuffixContainers=Te(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Xr(sr);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=qt(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Gl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Sa;this._appearanceSignal.set(t)}_appearanceSignal=P(Sa);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||wa}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||wa}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new S;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=le();constructor(){let e=this._defaults,t=c(Re);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),He(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Te(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(ze([void 0,void 0]),ve(()=>[t.errorState,t.userAriaDescribedBy]),_n(),_e(([[o,a],[h,l]])=>o!==h||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(Z(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ht(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){qr({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Te(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(h=>h.align==="start"):null,a=this._hintChildren?this._hintChildren.find(h=>h.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,h=t?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,u=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",p=`${a+h}px`,k=`calc(${m} * (${p} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,d=`var(--mat-mdc-form-field-label-transform, ${Yl} translateX(${k}))`,f=a+h+l+u;return[d,f]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(Yr(o,r._labelChild,sr,5),wi(o,cr,5)(o,zl,5)(o,Hl,5)(o,Bl,5)(o,lr,5)),t&2){vn();let a;z(a=H())&&(r._formFieldControl=a.first),z(a=H())&&(r._prefixChildren=a),z(a=H())&&(r._suffixChildren=a),z(a=H())&&(r._errorChildren=a),z(a=H())&&(r._hintChildren=a)}},viewQuery:function(t,r){if(t&1&&(Wr(r._iconPrefixContainerSignal,pa,5)(r._textPrefixContainerSignal,_a,5)(r._iconSuffixContainerSignal,ga,5)(r._textSuffixContainerSignal,ba,5),Ie(vl,5)(pa,5)(_a,5)(ga,5)(ba,5)(va,5)(Ca,5)(xa,5)),t&2){vn(4);let o;z(o=H())&&(r._textField=o.first),z(o=H())&&(r._iconPrefixContainer=o.first),z(o=H())&&(r._textPrefixContainer=o.first),z(o=H())&&(r._iconSuffixContainer=o.first),z(o=H())&&(r._textSuffixContainer=o.first),z(o=H())&&(r._floatingLabel=o.first),z(o=H())&&(r._notchedOutline=o.first),z(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&U("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ue([{provide:dr,useExisting:n},{provide:Ea,useExisting:n}])],ngContentSelectors:xl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(De(yl),pt(0,wl,1,1,"ng-template",null,0,$r),C(2,"div",6,1),$("click",function(a){return r._control.onContainerClick(a)}),V(4,El,1,0,"div",7),C(5,"div",8),V(6,Dl,2,2,"div",9),V(7,Ol,3,0,"div",10),V(8,Il,3,0,"div",11),C(9,"div",12),V(10,Al,1,1,null,13),q(11),w(),V(12,Rl,3,0,"div",14),V(13,Fl,3,0,"div",15),w(),V(14,Pl,1,0,"div",16),w(),C(15,"div",17),V(16,Nl,2,0,"div",18)(17,Ll,5,1,"div",19),w()),t&2){let o;v(2),U("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),v(2),L(!r._hasOutline()&&!r._control.disabled?4:-1),v(2),L(r._hasOutline()?6:-1),v(),L(r._hasIconPrefix?7:-1),v(),L(r._hasTextPrefix?8:-1),v(2),L(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),v(2),L(r._hasTextSuffix?12:-1),v(),L(r._hasIconSuffix?13:-1),v(),L(r._hasOutline()?-1:14),v(),U("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();v(),L((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[va,Ca,Jr,xa,lr],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return n})();var hr=class{};function Wl(n){return n&&typeof n.connect=="function"&&!(n instanceof wr)}var Be=(function(n){return n[n.REPLACED=0]="REPLACED",n[n.INSERTED=1]="INSERTED",n[n.MOVED=2]="MOVED",n[n.REMOVED=3]="REMOVED",n})(Be||{}),Ma=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,t,r,o){i.forEachOperation((a,h,l)=>{let u,m;if(a.previousIndex==null){let p=()=>t(a,h,l);u=this._insertView(p,l,e,r(a)),m=u?Be.INSERTED:Be.REPLACED}else l==null?(this._detachAndCacheView(h,e),m=Be.REMOVED):(u=this._moveView(h,l,e,r(a)),m=Be.MOVED);o&&o({context:u?.context,operation:m,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,t,r){let o=this._insertViewFromCache(e,t);if(o){o.context.$implicit=r;return}let a=i();return t.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let t=e.detach(i);this._maybeCacheView(t,e)}_moveView(i,e,t,r){let o=t.get(i);return t.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let t=e.indexOf(i);t===-1?i.destroy():e.remove(t)}}_insertViewFromCache(i,e){let t=this._viewCache.pop();return t&&e.insert(t,i),t||null}};var ei=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new S;constructor(i=!1,e,t=!0,r){this._multiple=i,this._emitChanges=t,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,t=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(i,t))return t;return i}else return i}};var ka=class{applyChanges(i,e,t,r,o){i.forEachOperation((a,h,l)=>{let u,m;if(a.previousIndex==null){let p=t(a,h,l);u=e.createEmbeddedView(p.templateRef,p.context,p.index),m=Be.INSERTED}else l==null?(e.remove(h),m=Be.REMOVED):(u=e.get(h),e.move(u,l),m=Be.MOVED);o&&o({context:u?.context,operation:m,record:a})})}detach(){}};var $l=20,Dt=(()=>{class n{_ngZone=c(D);_platform=c(W);_renderer=c(ke).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new S;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$l){return this._platform.isBrowser?new dt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(fn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):fi()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(_e(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let r=Fe(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Zl=20,Ze=(()=>{class n{_platform=c(W);_listeners;_viewportSize=null;_change=new S;_document=c(j);constructor(){let e=c(D),t=c(ke).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,h=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:h}}change(e=Zl){return e>0?this._change.pipe(fn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Sf=new g("CDK_VIRTUAL_SCROLL_VIEWPORT");var rt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({})}return n})(),ur=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ie,rt,ie,rt]})}return n})();var ti=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},ii=class extends ti{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,t,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null}},ni=class extends ti{templateRef;viewContainerRef;context;injector;constructor(i,e,t,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=t,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},mr=class extends ti{element;constructor(i){super(),this.element=i instanceof M?i.nativeElement:i}},fr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof ii)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof ni)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof mr)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Ji=class extends fr{outletElement;_appRef;_defaultInjector;constructor(i,e,t){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=t}attachComponentPortal(i){let e;if(i.viewContainerRef){let t=i.injector||i.viewContainerRef.injector,r=t.get(Lr,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,r=i.injector||this._defaultInjector||K.NULL,o=r.get(mt,t.injector);e=Ei(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,t=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r)}),this._attachedPortal=i,t}attachDomPortal=i=>{let e=i.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Da=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({})}return n})();var Oa=na();function Na(n){return new en(n.get(Ze),n.get(j))}var en=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(i,e){this._viewportRuler=i,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let i=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=i.style.left||"",this._previousHTMLStyles.top=i.style.top||"",i.style.left=Q(-this._previousScrollPosition.left),i.style.top=Q(-this._previousScrollPosition.top),i.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let i=this._document.documentElement,e=this._document.body,t=i.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,i.classList.remove("cdk-global-scrollblock"),Oa&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Oa&&(t.scrollBehavior=o,r.scrollBehavior=a)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Va(n,i){return new tn(n.get(Dt),n.get(D),n.get(Ze),i)}var tn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(i,e,t,r){this._scrollDispatcher=i,this._ngZone=e,this._viewportRuler=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(this._scrollSubscription)return;let i=this._scrollDispatcher.scrolled(0).pipe(_e(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=i.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=i.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ri=class{enable(){}disable(){}attach(){}};function pr(n,i){return i.some(e=>{let t=n.bottom<e.top,r=n.top>e.bottom,o=n.right<e.left,a=n.left>e.right;return t||r||o||a})}function Ia(n,i){return i.some(e=>{let t=n.top<e.top,r=n.bottom>e.bottom,o=n.left<e.left,a=n.right>e.right;return t||r||o||a})}function at(n,i){return new nn(n.get(Dt),n.get(Ze),n.get(D),i)}var nn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,t,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=t,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();pr(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},La=(()=>{class n{_injector=c(K);constructor(){}noop=()=>new ri;close=e=>Va(this._injector,e);block=()=>Na(this._injector);reposition=e=>at(this._injector,e);static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oi=class{positionStrategy;scrollStrategy=new ri;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let t of e)i[t]!==void 0&&(this[t]=i[t])}}};var rn=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var Ba=(()=>{class n{_attachedOverlays=[];_document=c(j);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),za=(()=>{class n extends Ba{_ngZone=c(D);_renderer=c(ke).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ha=(()=>{class n extends Ba{_platform=c(W);_ngZone=c(D);_renderer=c(ke).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=re(e)};_clickListener=e=>{let t=re(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let h=o[a],l=h._outsidePointerEvents;if(!(!h.hasAttached()||!this.canReceiveEvent(h,e,l))){if(Ta(h.overlayElement,t)||Ta(h.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(n)))(r||n)}})();static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ta(n,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=i;for(;t;){if(t===n)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var ja=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ua=(()=>{class n{_platform=c(W);_containerElement;_document=c(j);_styleLoader=c(xe);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Jn()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let t=this._document.createElement("div");t.classList.add(e),Jn()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(ja)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),_r=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,t,r){this._renderer=e,this._ngZone=t,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function gr(n){return n&&n.nodeType===1}var on=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new S;_attachments=new S;_detachments=new S;_positionStrategy;_scrollStrategy;_locationChanges=be.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new S;_outsidePointerEvents=new S;_afterNextRenderRef;constructor(i,e,t,r,o,a,h,l,u,m=!1,p,y){this._portalOutlet=i,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=h,this._location=l,this._outsideClickDispatcher=u,this._animationsDisabled=m,this._injector=p,this._renderer=y,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ve(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=x(x({},this._config),i),this._updateElementSize()}setDirection(i){this._config=se(x({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Q(this._config.width),i.height=Q(this._config.height),i.minWidth=Q(this._config.minWidth),i.minHeight=Q(this._config.minHeight),i.maxWidth=Q(this._config.maxWidth),i.maxHeight=Q(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;gr(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(i){}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new _r(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,t){let r=Et(e||[]).filter(o=>!!o);r.length&&(t?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=Ve(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},Aa="cdk-overlay-connected-position-bounding-box",Kl=/([A-Za-z%]+)$/;function ai(n,i){return new an(i,n.get(Ze),n.get(j),n.get(W),n.get(Ua))}var an=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new S;_resizeSubscription=be.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(Aa),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let h of this._preferredPositions){let l=this._getOriginPoint(i,r,h),u=this._getOverlayPoint(l,e,h),m=this._getOverlayFit(u,e,t,h);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(h,l);return}if(this._canFitWithFlexibleDimensions(m,u,t)){o.push({position:h,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,h)});continue}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:u,originPoint:l,position:h,overlayRect:e})}if(o.length){let h=null,l=-1;for(let u of o){let m=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);m>l&&(l=m,h=u)}this._isPushed=!1,this._applyPosition(h.position,h.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&ot(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Aa),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:gr(this._origin)?this._origin:null}_getOriginPoint(i,e,t){let r;if(t.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,h=this._isRtl()?i.left:i.right;r=t.originX=="start"?a:h}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=i.top+i.height/2:o=t.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,t,r){let o=Fa(e),{x:a,y:h}=i,l=this._getOffset(r,"x"),u=this._getOffset(r,"y");l&&(a+=l),u&&(h+=u);let m=0-a,p=a+o.width-t.width,y=0-h,k=h+o.height-t.height,d=this._subtractOverflows(o.width,m,p),f=this._subtractOverflows(o.height,y,k),ne=d*f;return{visibleArea:ne,isCompletelyWithinViewport:o.width*o.height===ne,fitsInViewportVertically:f===o.height,fitsInViewportHorizontally:d==o.width}}_canFitWithFlexibleDimensions(i,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=Ra(this._overlayRef.getConfig().minHeight),h=Ra(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,u=i.fitsInViewportHorizontally||h!=null&&h<=o;return l&&u}return!1}_pushOverlayOnScreen(i,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=Fa(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),h=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-t.top-i.y,0),u=Math.max(o.left-t.left-i.x,0),m=0,p=0;return r.width<=o.width?m=u||-a:m=i.x<this._getViewportMarginStart()?o.left-t.left-i.x:0,r.height<=o.height?p=l||-h:p=i.y<this._getViewportMarginTop()?o.top-t.top-i.y:0,this._previousPushAmount={x:m,y:p},{x:i.x+m,y:i.y+p}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!Xl(this._lastScrollVisibility,t)){let r=new rn(i,t);this._positionChanges.next(r)}this._lastScrollVisibility=t}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=i.overlayY;i.overlayX==="center"?t="center":this._isRtl()?t=i.overlayX==="start"?"right":"left":t=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`}_calculateBoundingBoxRect(i,e){let t=this._viewportRect,r=this._isRtl(),o,a,h;if(e.overlayY==="top")a=i.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")h=t.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-h+this._getViewportMarginTop();else{let k=Math.min(t.bottom-i.y+t.top,i.y),d=this._lastBoundingBoxSize.height;o=k*2,a=i.y-k,o>d&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-d/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,u=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,m,p,y;if(u)y=t.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=i.x-this._getViewportMarginStart();else if(l)p=i.x,m=t.right-i.x-this._getViewportMarginEnd();else{let k=Math.min(t.right-i.x+t.left,i.x),d=this._lastBoundingBoxSize.width;m=k*2,p=i.x-k,m>d&&!this._isInitialRender&&!this._growAfterOpen&&(p=i.x-d/2)}return{top:a,left:p,bottom:h,right:y,width:m,height:o}}_setBoundingBoxStyles(i,e){let t=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Q(t.width),r.height=Q(t.height),r.top=Q(t.top)||"auto",r.bottom=Q(t.bottom)||"auto",r.left=Q(t.left)||"auto",r.right=Q(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Q(o)),a&&(r.maxWidth=Q(a))}this._lastBoundingBoxSize=t,ot(this._boundingBox.style,r)}_resetBoundingBoxStyles(){ot(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){ot(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let m=this._viewportRuler.getViewportScrollPosition();ot(t,this._getExactOverlayY(e,i,m)),ot(t,this._getExactOverlayX(e,i,m))}else t.position="static";let h="",l=this._getOffset(e,"x"),u=this._getOffset(e,"y");l&&(h+=`translateX(${l}px) `),u&&(h+=`translateY(${u}px)`),t.transform=h.trim(),a.maxHeight&&(r?t.maxHeight=Q(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=Q(a.maxWidth):o&&(t.maxWidth="")),ot(this._pane.style,t)}_getExactOverlayY(i,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Q(o.y);return r}_getExactOverlayX(i,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let h=this._document.documentElement.clientWidth;r.right=`${h-(o.x+this._overlayRect.width)}px`}else r.left=Q(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ia(i,t),isOriginOutsideView:pr(i,t),isOverlayClipped:Ia(e,t),isOverlayOutsideView:pr(e,t)}}_subtractOverflows(i,...e){return e.reduce((t,r)=>t-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+i-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&Et(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof M)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,t=i.height||0;return{top:i.y,bottom:i.y+t,left:i.x,right:i.x+e,height:t,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let t=e.getBoundingClientRect();return i&&(e.style.display=""),t}};function ot(n,i){for(let e in i)i.hasOwnProperty(e)&&(n[e]=i[e]);return n}function Ra(n){if(typeof n!="number"&&n!=null){let[i,e]=n.split(Kl);return!e||e==="px"?parseFloat(i):null}return n||null}function Fa(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Xl(n,i){return n===i?!0:n.isOriginClipped===i.isOriginClipped&&n.isOriginOutsideView===i.isOriginOutsideView&&n.isOverlayClipped===i.isOverlayClipped&&n.isOverlayOutsideView===i.isOverlayOutsideView}var Pa="cdk-global-overlay-wrapper";function Ga(n){return new sn}var sn=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(i){let e=i.getConfig();this._overlayRef=i,this._width&&!e.width&&i.updateSize({width:this._width}),this._height&&!e.height&&i.updateSize({height:this._height}),i.hostElement.classList.add(Pa),this._isDisposed=!1}top(i=""){return this._bottomOffset="",this._topOffset=i,this._alignItems="flex-start",this}left(i=""){return this._xOffset=i,this._xPosition="left",this}bottom(i=""){return this._topOffset="",this._bottomOffset=i,this._alignItems="flex-end",this}right(i=""){return this._xOffset=i,this._xPosition="right",this}start(i=""){return this._xOffset=i,this._xPosition="start",this}end(i=""){return this._xOffset=i,this._xPosition="end",this}width(i=""){return this._overlayRef?this._overlayRef.updateSize({width:i}):this._width=i,this}height(i=""){return this._overlayRef?this._overlayRef.updateSize({height:i}):this._height=i,this}centerHorizontally(i=""){return this.left(i),this._xPosition="center",this}centerVertically(i=""){return this.top(i),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:h}=t,l=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),u=(o==="100%"||o==="100vh")&&(!h||h==="100%"||h==="100vh"),m=this._xPosition,p=this._xOffset,y=this._overlayRef.getConfig().direction==="rtl",k="",d="",f="";l?f="flex-start":m==="center"?(f="center",y?d=p:k=p):y?m==="left"||m==="end"?(f="flex-end",k=p):(m==="right"||m==="start")&&(f="flex-start",d=p):m==="left"||m==="start"?(f="flex-start",k=p):(m==="right"||m==="end")&&(f="flex-end",d=p),i.position=this._cssPosition,i.marginLeft=l?"0":k,i.marginTop=u?"0":this._topOffset,i.marginBottom=this._bottomOffset,i.marginRight=l?"0":d,e.justifyContent=f,e.alignItems=u?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let i=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Pa),t.justifyContent=t.alignItems=i.marginTop=i.marginBottom=i.marginLeft=i.marginRight=i.position="",this._overlayRef=null,this._isDisposed=!0}},Ya=(()=>{class n{_injector=c(K);constructor(){}global(){return Ga()}flexibleConnectedTo(e){return ai(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),si=new g("OVERLAY_DEFAULT_CONFIG");function li(n,i){n.get(xe).load(ja);let e=n.get(Ua),t=n.get(j),r=n.get(fe),o=n.get(_t),a=n.get(Re),h=n.get(oe,null,{optional:!0})||n.get(ke).createRenderer(null,null),l=new oi(i),u=n.get(si,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in t.body?l.usePopover=i?.usePopover??u:l.usePopover=!1;let m=t.createElement("div"),p=t.createElement("div");m.id=r.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),p.appendChild(m),l.usePopover&&(p.setAttribute("popover","manual"),p.classList.add("cdk-overlay-popover"));let y=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return gr(y)?y.after(p):y?.type==="parent"?y.element.appendChild(p):e.getContainerElement().appendChild(p),new on(new Ji(m,o,n),p,m,l,n.get(D),n.get(za),t,n.get(Qr),n.get(Ha),i?.disableAnimations??n.get(xi,null,{optional:!0})==="NoopAnimations",n.get(mt),h)}var Wa=(()=>{class n{scrollStrategies=c(La);_positionBuilder=c(Ya);_injector=c(K);constructor(){}create(e){return li(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ql=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Ql=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(K);return()=>at(n)}}),Ot=(()=>{class n{elementRef=c(M);constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),$a=new g("cdk-connected-overlay-default-config"),cn=(()=>{class n{_dir=c(Re,{optional:!0});_injector=c(K);_overlayRef;_templatePortal;_backdropSubscription=be.EMPTY;_attachSubscription=be.EMPTY;_detachSubscription=be.EMPTY;_positionSubscription=be.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(Ql);_ngZone=c(D);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new N;positionChange=new N;attach=new N;detach=new N;overlayKeydown=new N;overlayOutsideClick=new N;constructor(){let e=c(Ci),t=c(ft),r=c($a,{optional:!0}),o=c(si,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new ni(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ql);let e=this._overlayRef=li(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ce(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=re(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new oi({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=ai(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Ot?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Ot?this.origin.elementRef.nativeElement:this.origin instanceof M?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ar(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",F],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",F],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",F],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",F],push:[2,"cdkConnectedOverlayPush","push",F],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",F],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",F],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Me]})}return n})(),ci=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({providers:[Wa],imports:[ie,Da,ur,ur]})}return n})();var Za=(()=>{class n{_animationsDisabled=le();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&U("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Jl=["text"],ec=[[["mat-icon"]],"*"],tc=["mat-icon","*"];function ic(n,i){if(n&1&&ae(0,"mat-pseudo-checkbox",1),n&2){let e=B();X("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function nc(n,i){if(n&1&&ae(0,"mat-pseudo-checkbox",3),n&2){let e=B();X("disabled",e.disabled)}}function rc(n,i){if(n&1&&(C(0,"span",4),he(1),w()),n&2){let e=B();v(),vt("(",e.group.label,")")}}var vr=new g("MAT_OPTION_PARENT_COMPONENT"),yr=new g("MatOptgroup");var br=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},It=(()=>{class n{_element=c(M);_changeDetectorRef=c(ye);_parent=c(vr,{optional:!0});group=c(yr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(fe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=P(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new N;_text;_stateChanges=new S;constructor(){let e=c(xe);e.load(Ki),e.load(Kt),this._signalDisableRipple=!!this._parent&&Ft(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ce(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new br(this,e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&Ie(Jl,7),t&2){let o;z(o=H())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&$("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),t&2&&(Si("id",r.id),te("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),U("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",F]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:tc,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(De(ec),V(0,ic,1,2,"mat-pseudo-checkbox",1),q(1),C(2,"span",2,0),q(4,1),w(),V(5,nc,1,1,"mat-pseudo-checkbox",3),V(6,rc,2,1,"span",4),ae(7,"div",5)),t&2&&(L(r.multiple?0:-1),v(5),L(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),v(),L(r.group&&r.group._inert?6:-1),v(),X("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Za,la],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function Ka(n,i,e){if(e.length){let t=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<n+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o}return 0}function Xa(n,i,e,t){return n<e?n:n+i>e+t?Math.max(0,n-t+i):e}var qa=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var un=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,t,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Qa=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ji,Qi,ie]})}return n})();var Ja=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ie]})}return n})();var xr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[Xi,Ja,It,ie]})}return n})();var oc=["trigger"],ac=["panel"],sc=[[["mat-select-trigger"]],"*"],lc=["mat-select-trigger","*"];function cc(n,i){if(n&1&&(C(0,"span",4),he(1),w()),n&2){let e=B();v(),Le(e.placeholder)}}function dc(n,i){n&1&&q(0)}function hc(n,i){if(n&1&&(C(0,"span",11),he(1),w()),n&2){let e=B(2);v(),Le(e.triggerValue)}}function uc(n,i){if(n&1&&(C(0,"span",5),V(1,dc,1,0)(2,hc,2,1,"span",11),w()),n&2){let e=B();v(),L(e.customTrigger?1:2)}}function mc(n,i){if(n&1){let e=gt();C(0,"div",12,1),$("keydown",function(r){Xe(e);let o=B();return qe(o._handleKeydown(r))}),q(2,1),w()}if(n&2){let e=B();bt(e.panelClass),U("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),te("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var fc=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(K);return()=>at(n)}}),pc=new g("MAT_SELECT_CONFIG"),_c=new g("MatSelectTrigger"),Cr=class{source;value;constructor(i,e){this.source=i,this.value=e}},es=(()=>{class n{_viewportRuler=c(Ze);_changeDetectorRef=c(ye);_elementRef=c(M);_dir=c(Re,{optional:!0});_idGenerator=c(fe);_renderer=c(oe);_parentFormField=c(dr,{optional:!0});ngControl=c(tt,{self:!0,optional:!0});_liveAnnouncer=c(Yn);_defaultOptions=c(pc,{optional:!0});_animationsDisabled=le();_popoverLocation;_initialized=new S;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Ka(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=Xa(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Cr(this,e)}_scrollStrategyFactory=c(fc);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new S;_errorStateTracker;stateChanges=new S;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=P(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Di.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Ir(()=>{let e=this.options;return e?e.changes.pipe(ze(e),bi(()=>ht(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(bi(()=>this.optionSelectionChanges))});openedChange=new N;_openedStream=this.openedChange.pipe(_e(e=>e),ve(()=>{}));_closedStream=this.openedChange.pipe(_e(e=>!e),ve(()=>{}));selectionChange=new N;valueChange=new N;constructor(){let e=c(qa),t=c(Nn,{optional:!0}),r=c(Vn,{optional:!0}),o=c(new Zr("tabindex"),{optional:!0}),a=c(si,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new un(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new ei(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(Z(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(Z(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(ze(null),Z(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(_i(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$i(this._trackedModal,"aria-owns",t),Qn(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$i(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!Ce(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let h=this.selected;a.onKeydown(e);let l=this.selected;l&&h!==l&&this._liveAnnouncer.announce(l.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!Ce(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let h=this.options.some(l=>!l.disabled&&!l.selected);this.options.forEach(l=>{l.disabled||(h?l.select():l.deselect())})}else{let h=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==h&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!Ce(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e)}catch(o){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Ot?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Xt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=ht(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Z(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),ht(...this.options.map(t=>t._stateChanges)).pipe(Z(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=re(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&wi(o,_c,5)(o,It,5)(o,yr,5),t&2){let a;z(a=H())&&(r.customTrigger=a.first),z(a=H())&&(r.options=a),z(a=H())&&(r.optionGroups=a)}},viewQuery:function(t,r){if(t&1&&Ie(oc,5)(ac,5)(cn,5),t&2){let o;z(o=H())&&(r.trigger=o.first),z(o=H())&&(r.panel=o.first),z(o=H())&&(r._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&$("keydown",function(a){return r._handleKeydown(a)})("focus",function(){return r._onFocus()})("blur",function(){return r._onBlur()}),t&2&&(te("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),U("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",F],disableRipple:[2,"disableRipple","disableRipple",F],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ae(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",F],placeholder:"placeholder",required:[2,"required","required",F],multiple:[2,"multiple","multiple",F],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",F],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ae],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",F]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[ue([{provide:cr,useExisting:n},{provide:vr,useExisting:n}]),Me],ngContentSelectors:lc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(De(sc),C(0,"div",2,0),$("click",function(){return r.open()}),C(3,"div",3),V(4,cc,2,1,"span",4)(5,uc,3,1,"span",5),w(),C(6,"div",6)(7,"div",7),Qe(),C(8,"svg",8),ae(9,"path",9),w()()()(),pt(10,mc,3,16,"ng-template",10),$("detach",function(){return r.close()})("backdropClick",function(){return r.close()})("overlayKeydown",function(a){return r._handleOverlayKeydown(a)})),t&2){let o=et(1);v(3),te("id",r._valueId),v(),L(r.empty?4:5),v(6),X("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation)}},dependencies:[Ot,cn],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var ts=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ci,xr,ie,rt,Qa,xr]})}return n})();var gc=["tooltip"],bc=20;var vc=new g("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=c(K);return()=>at(n,{scrollThrottle:bc})}}),yc=new g("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var is="tooltip-panel",xc={passive:!0},Cc=8,Sc=8,wc=24,Ec=200,ns=(()=>{class n{_elementRef=c(M);_ngZone=c(D);_platform=c(W);_ariaDescriber=c(ia);_focusMonitor=c(Zt);_dir=c(Re);_injector=c(K);_viewContainerRef=c(ft);_mediaMatcher=c(Mt);_document=c(j);_renderer=c(oe);_animationsDisabled=le();_defaultOptions=c(yc,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Mc;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=qt(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=qt(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Wt(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Wt(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new S;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Cc}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Z(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(t);this._detach(),this._portal=this._portal||new ii(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Z(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&a._origin instanceof M)return this._overlayRef;this._detach()}let t=this._injector.get(Dt).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${is}`,o=ai(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(Z(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=li(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(vc)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Z(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Z(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Z(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Z(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(x(x({},r.main),o.main)),this._addOffset(x(x({},r.fallback),o.fallback))])}_addOffset(e){let t=Sc,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=r?-t:t:e.originX==="end"&&(e.offsetX=r?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"||t=="below"?r={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,r;t=="above"?r={overlayX:"center",overlayY:"bottom"}:t=="below"?r={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ve(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:r,originY:o}=e,a;if(t==="center"?this._dir&&this._dir.value==="rtl"?a=r==="end"?"left":"right":a=r==="start"?"left":"right":a=t==="bottom"&&o==="top"?"above":"below",a!==this._currentPosition){let h=this._overlayRef;if(h){let l=`${this._cssClassPrefix}-${is}-`;h.removePanelClass(l+this._currentPosition),h.addPanelClass(l+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],r=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;t!==r&&!r.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,xc))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,r=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!t.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ve({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!Ce(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=E({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,r){t&2&&U("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),Mc=(()=>{class n{_changeDetectorRef=c(ye);_elementRef=c(M);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=le();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new S;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>wc&&e.width>=Ec}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:r),t.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let a=getComputedStyle(t);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,r){if(t&1&&Ie(gc,7),t&2){let o;z(o=H())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,r){t&1&&$("mouseleave",function(a){return r._handleMouseLeave(a)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,r){t&1&&(Ue(0,"div",1,0),Gr("animationend",function(a){return r._handleAnimationEnd(a)}),Ue(2,"div",2),he(3),Je()()),t&2&&(bt(r.tooltipClass),U("mdc-tooltip--multiline",r._isMultiline),v(3),Le(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var rs=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[Wn,ci,ie,rt]})}return n})();function kc(n,i){if(n&1&&(C(0,"mat-option",17),he(1),w()),n&2){let e=i.$implicit;X("value",e),v(),vt(" ",e," ")}}function Dc(n,i){if(n&1){let e=gt();C(0,"mat-form-field",14)(1,"mat-select",16,0),$("selectionChange",function(r){Xe(e);let o=B(2);return qe(o._changePageSize(r.value))}),jr(3,kc,2,2,"mat-option",17,Hr),w(),C(5,"div",18),$("click",function(){Xe(e);let r=et(2);return qe(r.open())}),w()()}if(n&2){let e=B(2);X("appearance",e._formFieldAppearance)("color",e.color),v(),X("value",e.pageSize)("disabled",e.disabled),zr("aria-labelledby",e._pageSizeLabelId),X("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),v(2),Ur(e._displayedPageSizeOptions)}}function Oc(n,i){if(n&1&&(C(0,"div",15),he(1),w()),n&2){let e=B(2);v(),Le(e.pageSize)}}function Ic(n,i){if(n&1&&(C(0,"div",3)(1,"div",13),he(2),w(),V(3,Dc,6,7,"mat-form-field",14),V(4,Oc,2,1,"div",15),w()),n&2){let e=B();v(),te("id",e._pageSizeLabelId),v(),vt(" ",e._intl.itemsPerPageLabel," "),v(),L(e._displayedPageSizeOptions.length>1?3:-1),v(),L(e._displayedPageSizeOptions.length<=1?4:-1)}}function Tc(n,i){if(n&1){let e=gt();C(0,"button",19),$("click",function(){Xe(e);let r=B();return qe(r._buttonClicked(0,r._previousButtonsDisabled()))}),Qe(),C(1,"svg",8),ae(2,"path",20),w()()}if(n&2){let e=B();X("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),te("aria-label",e._intl.firstPageLabel)}}function Ac(n,i){if(n&1){let e=gt();C(0,"button",21),$("click",function(){Xe(e);let r=B();return qe(r._buttonClicked(r.getNumberOfPages()-1,r._nextButtonsDisabled()))}),Qe(),C(1,"svg",8),ae(2,"path",22),w()()}if(n&2){let e=B();X("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),te("aria-label",e._intl.lastPageLabel)}}var Rc=(()=>{class n{changes=new S;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,r)=>{if(r==0||t==0)return`0 of ${r}`;r=Math.max(r,0);let o=e*t,a=o<r?Math.min(o+t,r):o+t;return`${o+1} \u2013 ${a} of ${r}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=b({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fc=50;var Pc=new g("MAT_PAGINATOR_DEFAULT_OPTIONS"),Nc=(()=>{class n{_intl=c(Rc);_changeDetectorRef=c(ye);_formFieldAppearance;_pageSizeLabelId=c(fe).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Mr(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>Ae(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new N;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=c(Pc,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:r,pageSizeOptions:o,hidePageSize:a,showFirstLastButtons:h}=t;r!=null&&(this._pageSize=r),o!=null&&(this._pageSizeOptions=o),a!=null&&(this.hidePageSize=a),h!=null&&(this.showFirstLastButtons=h)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,r=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(r)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Fc),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=Y({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",Ae],length:[2,"length","length",Ae],pageSize:[2,"pageSize","pageSize",Ae],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",F],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",F],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",F]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,r){t&1&&(C(0,"div",1)(1,"div",2),V(2,Ic,5,4,"div",3),C(3,"div",4)(4,"div",5),he(5),w(),V(6,Tc,3,5,"button",6),C(7,"button",7),$("click",function(){return r._buttonClicked(r.pageIndex-1,r._previousButtonsDisabled())}),Qe(),C(8,"svg",8),ae(9,"path",9),w()(),Fr(),C(10,"button",10),$("click",function(){return r._buttonClicked(r.pageIndex+1,r._nextButtonsDisabled())}),Qe(),C(11,"svg",8),ae(12,"path",11),w()(),V(13,Ac,3,5,"button",12),w()()()),t&2&&(v(2),L(r.hidePageSize?-1:2),v(3),vt(" ",r._intl.getRangeLabel(r.pageIndex,r.pageSize,r.length)," "),v(),L(r.showFirstLastButtons?6:-1),v(),X("matTooltip",r._intl.previousPageLabel)("matTooltipDisabled",r._previousButtonsDisabled())("disabled",r._previousButtonsDisabled())("tabindex",r._previousButtonsDisabled()?-1:null),te("aria-label",r._intl.previousPageLabel),v(3),X("matTooltip",r._intl.nextPageLabel)("matTooltipDisabled",r._nextButtonsDisabled())("disabled",r._nextButtonsDisabled())("tabindex",r._nextButtonsDisabled()?-1:null),te("aria-label",r._intl.nextPageLabel),v(3),L(r.showFirstLastButtons?13:-1))},dependencies:[Qi,es,It,or,ns],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),gg=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=R({type:n});static \u0275inj=A({imports:[ma,ts,rs,Nc]})}return n})();export{wt as a,xd as b,Cd as c,Sd as d,wd as e,Ed as f,Md as g,Io as h,To as i,kd as j,ho as k,Di as l,Jc as m,ed as n,id as o,js as p,Vn as q,nd as r,rd as s,gd as t,bd as u,W as v,Lo as w,rl as x,Re as y,ie as z,il as A,hr as B,Wl as C,Be as D,Ma as E,ka as F,Ze as G,Sf as H,ur as I,or as J,ma as K,Rc as L,Nc as M,gg as N};
