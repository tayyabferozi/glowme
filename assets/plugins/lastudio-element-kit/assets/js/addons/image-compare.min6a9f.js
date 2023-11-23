class LaStudioKit_ImageCompare{constructor(t,e={}){this.settings=Object.assign({controlColor:"#FFFFFF",controlShadow:!0,addCircle:!1,addCircleBlur:!0,showLabels:!1,labelOptions:{before:"Before",after:"After",onHover:!1},smoothing:!0,smoothingAmount:100,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!1,controlType:"arrow"},e),this.safariAgent=-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),this.el=t,this.images={},this.wrapper=null,this.control=null,this.arrowContainer=null,this.arrowAnimator=[],this.active=!1,this.slideWidth=50,this.lineWidth=2,this.arrowCoordinates={circle:[5,3],standard:[8,0]}}mount(){this.safariAgent&&(this.settings.smoothing=!1),this._shapeContainer(),this._getImages(),this._buildControl(),this._events()}_events(){this.el.addEventListener("mousedown",(t=>{this._activate(!0),document.body.classList.add("lakit-icv__body"),this._slideCompare(t)})),this.el.addEventListener("mousemove",(t=>this.active&&this._slideCompare(t))),this.el.addEventListener("mouseup",(()=>this._activate(!1))),document.body.addEventListener("mouseup",(()=>{document.body.classList.remove("lakit-icv__body"),this._activate(!1)})),this.control.addEventListener("touchstart",(t=>{this._activate(!0),document.body.classList.add("lakit-icv__body")})),this.el.addEventListener("touchmove",(t=>{this.active&&this._slideCompare(t)})),this.el.addEventListener("touchend",(()=>{this._activate(!1),document.body.classList.remove("lakit-icv__body")})),this.el.addEventListener("mouseenter",(()=>{this.settings.hoverStart&&this._activate(!0);let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((e,i)=>{e.style.cssText=`${this.settings.verticalMode?`transform: translateY(${t[1]*(0===i?1:-1)}px);`:`transform: translateX(${t[1]*(0===i?1:-1)}px);`}`}))})),this.el.addEventListener("mouseleave",(()=>{let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((e,i)=>{e.style.cssText=`${this.settings.verticalMode?`transform: translateY(${0===i?`${t[0]}px`:`-${t[0]}px`});`:`transform: translateX(${0===i?`${t[0]}px`:`-${t[0]}px`});`}`}))}))}_slideCompare(t){let e=this.el.getBoundingClientRect(),i=void 0!==t.touches?t.touches[0].clientX-e.left:t.clientX-e.left,s=void 0!==t.touches?t.touches[0].clientY-e.top:t.clientY-e.top,a=this.settings.verticalMode?s/e.height*100:i/e.width*100;a>=0&&a<=100&&(this.settings.verticalMode?this.control.style.top=`calc(${a}% - ${this.slideWidth/2}px)`:this.control.style.left=`calc(${a}% - ${this.slideWidth/2}px)`,this.settings.fluidMode?this.settings.verticalMode?this.wrapper.style.clipPath=`inset(0 0 ${100-a}% 0)`:this.wrapper.style.clipPath=`inset(-1px 0 0 ${a}%)`:this.settings.verticalMode?this.wrapper.style.height=`calc(${a}%)`:this.wrapper.style.width=`calc(${100-a}%)`)}_activate(t){this.active=t}_shapeContainer(){let t=document.createElement("div"),e=document.createElement("span"),i=document.createElement("span");e.classList.add("lakit-icv__label","lakit-icv__label-before","lakit-icv---keep"),i.classList.add("lakit-icv__label","lakit-icv__label-after","lakit-icv---keep"),this.settings.labelOptions.onHover&&(e.classList.add("on-hover"),i.classList.add("on-hover")),this.settings.verticalMode&&(e.classList.add("vertical"),i.classList.add("vertical")),e.innerHTML=this.settings.labelOptions.before||"Before",i.innerHTML=this.settings.labelOptions.after||"After",this.settings.showLabels&&(this.el.appendChild(e),this.el.appendChild(i)),this.el.classList.add("lakit-icv",this.settings.verticalMode?"lakit-icv__is--vertical":"lakit-icv__is--horizontal",this.settings.fluidMode?"lakit-icv__is--fluid":"lakit-icv__is--standard"),t.classList.add("lakit-icv__imposter"),this.el.appendChild(t)}_buildControl(){let t=document.createElement("div"),e=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");i.classList.add("lakit-icv__theme-wrapper");for(var a=0;a<=1;a++){let t=document.createElement("div"),e=`<svg height="15" width="15" style="transform: scale(${"arrow"===this.settings.controlType?.7:1.5}) rotateZ(${0===a?this.settings.verticalMode?"-90deg":"180deg":this.settings.verticalMode?"90deg":"0deg"});" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"> <path ${"arrow"===this.settings.controlType?'fill="transparent"':`fill="${this.settings.controlColor}"`} stroke="${this.settings.controlColor}" stroke-linecap="round" stroke-width="${"arrow"===this.settings.controlType?2:0}" d="M4.5 1.9L10 7.65l-5.5 5.4"/></svg>`;t.innerHTML+=e,this.arrowAnimator.push(t),i.appendChild(t)}let n=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach(((t,e)=>{t.classList.add("lakit-icv__arrow-wrapper"),t.style.cssText=`${this.settings.verticalMode?`transform: translateY(${0===e?`${n[0]}px`:`-${n[0]}px`});`:`transform: translateX(${0===e?`${n[0]}px`:`-${n[0]}px`});`}`})),t.classList.add("lakit-icv__control"),t.style.cssText=`${this.settings.verticalMode?"height":"width "}: ${this.slideWidth}px;${this.settings.verticalMode?"top":"left "}: calc(${this.settings.startingPoint}% - ${this.slideWidth/2}px);${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}`,e.classList.add("lakit-icv__control-line"),e.style.cssText=`${this.settings.verticalMode?"height":"width "}: ${this.lineWidth}px;${this.settings.controlShadow?"box-shadow: 0px 0px 15px rgba(0,0,0,0.33);":""}`;let o=e.cloneNode(!0);s.classList.add("lakit-icv__circle"),s.style.cssText=`${this.settings.addCircleBlur&&"-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)"};${this.settings.controlShadow&&"box-shadow: 0px 0px 15px rgba(0,0,0,0.33)"};`,t.appendChild(e),this.settings.addCircle&&t.appendChild(s),t.appendChild(i),t.appendChild(o),this.arrowContainer=i,this.control=t,this.el.appendChild(t)}_getImages(){let t=this.el.querySelectorAll("img, video, .lakit-icv---keep");this.el.innerHTML="",t.forEach((t=>{this.el.appendChild(t)}));let e=[...t].filter((t=>["img","video"].includes(t.nodeName.toLowerCase())));this.settings.verticalMode&&e.reverse();for(let t=0;t<=1;t++){let i=e[t];if(i.classList.add("lakit-icv__img"),i.classList.add(0===t?"lakit-icv__img-a":"lakit-icv__img-b"),1===t){let t=document.createElement("div"),s=e[1].src;t.classList.add("lakit-icv__wrapper"),t.style.cssText=`width: ${100-this.settings.startingPoint}%; height: ${this.settings.startingPoint}%;${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}${this.settings.fluidMode&&`background-image: url(${s}); clip-path: inset(${this.settings.verticalMode?` 0 0 ${100-this.settings.startingPoint}% 0`:`-1px 0 0 ${this.settings.startingPoint}%`})`}`,t.appendChild(i),this.wrapper=t,this.el.appendChild(this.wrapper)}}if(this.settings.fluidMode){let t=e[0].src,i=document.createElement("div");i.classList.add("lakit-icv__fluidwrapper"),i.style.cssText=`background-image: url(${t});`,this.el.appendChild(i)}}}jQuery(window).on("elementor/frontend/init",(()=>{const t={controlColor:"currentColor",controlShadow:!1,addCircle:!1,addCircleBlur:!1,showLabels:!1,labelOptions:{before:"",after:"",onHover:!1},smoothing:!0,smoothingAmount:50,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!0};elementorFrontend.hooks.addAction("frontend/element_ready/lakit-image-compare.default",(e=>{const i=jQuery(".lakit-image-compare",e);new LaStudioKit_ImageCompare(i.get(0),jQuery.extend(t,i.data("settings")||{})).mount()})),jQuery(document).on("lastudio-kit/carousel/init_success",(function(t,{swiperContainer:e,SwiperInstance:i}){e.find(".elementor-lakit-image-compare").length&&jQuery(".swiper-slide-duplicate .elementor-lakit-image-compare",e).each((function(){window.elementorFrontend.hooks.doAction("frontend/element_ready/lakit-image-compare.default",jQuery(this),jQuery)}))}))}));