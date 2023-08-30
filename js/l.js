!function(){try{var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};i.prototype.init=function(){var t,i,e=this,n="init";try{this.n&&!0!==this.s&&(this.s=!0,(t=document.createElement("div")).id="crisp-loader",document.getElementsByTagName("body")[0].appendChild(t),i=function(){return"none"===window.getComputedStyle(t).getPropertyValue("display")},function o(){e.f=setTimeout((function(){e.f=null,e.y-=e.w,void 0!==window[e.v]&&"function"==typeof window[e.v].__init&&!0===i()?(e.x.info(e.ns+"."+n,"Dependencies loaded"),t.parentNode.removeChild(t),window[e.v].__init({dollar_crisp:window[e.v],project_name:e.on,url_go:e.fn,url_image:e._n,url_game:e.fs,url_relay_client:e.ms,url_relay_stream:e.ws,url_website:e.$s,url_assets:e._e,rtc_ice:e.io,socket_affinity:e.do,client_environment:e._a,client_revision:e._f,website_domain:e.el,website_id:e.n,token_id:e.t_,cookie_expire:e.Fn,cookie_domain:e.i_,page_url:e.n_,page_domain:e.s_,browser_useragent:e.e_,browser_timezone:e.o_,browser_capabilities:e.r_,browser_locales:e.c_,ready_trigger:e.h_,runtime_configuration:e.a_,reset_handler:function(){e.reset()}})):0<e.y?o():e.x.error(e.ns+"."+n,"Could not load dependencies")}),e.w)}())}catch(t){}},i.prototype.reset=function(){try{null!==this.f&&clearTimeout(this.f),this.u_(),this.init()}catch(t){}},i.prototype.d_=function(){try{this.f_("dns-prefetch",this.ms),this.f_("preconnect",this._e),this.l_(),this.p_()}catch(t){}},i.prototype.f_=function(t,i){try{var e=document.createElement("link");e.setAttribute("href",i),e.setAttribute("rel",t),e.setAttribute("crossorigin",""),this.__(e),document.getElementsByTagName("head")[0].appendChild(e)}catch(t){}},i.prototype.l_=function(){try{var t=document.createElement("script");t.src=[this._e+"/",this.y_+"/","client.js?"+this._f].join(""),t.type="text/javascript",t.async=1,this.__(t),document.getElementsByTagName("head")[0].appendChild(t)}catch(t){}},i.prototype.p_=function(){try{var t=this.m_(),i=document.createElement("link");i.href=[this._e+"/",this.w_+"/","client_"+t+".css?"+this._f].join(""),i.type="text/css",i.rel="stylesheet",this.__(i),document.getElementsByTagName("head")[0].appendChild(i)}catch(t){}},i.prototype.u_=function(){this.I_(),this.v_(),this.C_()},i.prototype.I_=function(){this.s=!1,this.f=null,this.y=this.S_,this.el=document.domain,this.n_=document.location.href,this.s_=document.location.hostname,this.e_=window.navigator.userAgent,this.o_=(new Date).getTimezoneOffset(),this.c_=this.R_(),"string"==typeof CRISP_WEBSITE_ID&&CRISP_WEBSITE_ID?this.n=CRISP_WEBSITE_ID:this.n=this.g_(),"string"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.t_=CRISP_TOKEN_ID:"number"==typeof CRISP_TOKEN_ID&&CRISP_TOKEN_ID?this.t_=CRISP_TOKEN_ID.toString():this.t_=null,"number"==typeof CRISP_COOKIE_EXPIRE&&0<CRISP_COOKIE_EXPIRE?this.Fn=CRISP_COOKIE_EXPIRE:this.Fn=null,"string"==typeof CRISP_COOKIE_DOMAIN&&CRISP_COOKIE_DOMAIN?this.i_=CRISP_COOKIE_DOMAIN:this.i_=null,"function"==typeof CRISP_READY_TRIGGER?this.h_=CRISP_READY_TRIGGER:this.h_={},"object"===("undefined"==typeof CRISP_RUNTIME_CONFIG?"undefined":t(CRISP_RUNTIME_CONFIG))?this.a_=CRISP_RUNTIME_CONFIG:this.a_={},"object"===("undefined"==typeof CRISP_INCLUDE_ATTRS?"undefined":t(CRISP_INCLUDE_ATTRS))?this.E_=CRISP_INCLUDE_ATTRS:this.E_={}},i.prototype.v_=function(){try{this.r_=[],"function"==typeof window.MutationObserver&&"function"==typeof JSON.stringify&&this.r_.push("browsing"),("function"==typeof window.RTCPeerConnection&&"object"===t(navigator.mediaDevices)&&"https:"===document.location.protocol&&(window.innerWidth||0)>=this.b_&&(window.innerHeight||0)>=this.P_||!0===this.T_)&&this.r_.push("call")}catch(t){}},i.prototype.C_=function(){var t;try{this.a_.locale&&(-1!==(t=this.c_.indexOf(this.a_.locale))&&this.c_.splice(t,1),this.c_.unshift(this.a_.locale))}catch(t){}},i.prototype.__=function(t){try{for(var i in this.E_)this.E_.hasOwnProperty(i)&&t.setAttribute(i,this.E_[i])}catch(t){}},i.prototype.g_=function(){var t=null;try{for(var i=document.querySelectorAll("script[src]"),e=0;e<i.length;e++){var n=this.D_.exec(i[e].src);if(n&&"string"==typeof n[1]){t=n[1];break}}}catch(t){}finally{return t}},i.prototype.m_=function(){var t="default";try{var i=(navigator.userAgent||"").toLowerCase(),e=(navigator.appVersion||"").toLowerCase(),n=!1;if(!0!==n&&(-1===i.indexOf("opera mini/")&&-1===i.indexOf("msie")&&-1===e.indexOf("trident/")||(n=!0)),!0!==n)for(var o=0;o<this.O_.length;o++){var r=this.O_[o],s=i.match(r.pattern);if(s&&s[1]&&parseInt(s[1],10)<=r.version){n=!0;break}}!0===n&&(t="legacy")}catch(t){}finally{return t}},i.prototype.N_=function(){var t=!0;try{(window.innerWidth&&window.innerWidth<this.k_||!0!==this.K_()||!0===this.A_(this.s_)||!0===this.j_(this.e_)||!window.WebSocket||window.__nativePerformance&&window.__nativePromise)&&(t=!1)}catch(t){}finally{return t}},i.prototype.K_=function(){var t,i,e=!1;try{!0===navigator.cookieEnabled?e=!0:window.localStorage&&"function"==typeof window.localStorage.setItem&&"function"==typeof window.localStorage.getItem&&"function"==typeof window.localStorage.removeItem&&(t=""+(new Date).getTime(),i="crisp-client/loader/storage/check",window.localStorage.setItem(i,t),e=window.localStorage.getItem(i)===t)}catch(t){}finally{return e}},i.prototype.A_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var e=0;e<this.B_.domains.length;e++){var n=this.B_.domains[e],o="."+n;if(t===n||t.slice(-1*o.length)===o){i=!0;break}}}catch(t){}finally{return i}},i.prototype.j_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i=!1;try{if(t)for(var e=0;e<this.B_.agents.length;e++)if(-1!==t.indexOf(this.B_.agents[e])){i=!0;break}}catch(t){}finally{return i}},i.prototype.R_=function(){var t=[];try{for(var i=navigator.languages&&0<navigator.languages.length?navigator.languages:[navigator.language||navigator.userLanguage],e=0;e<i.length;e++)i[e]&&t.push(i[e])}catch(t){}finally{return t}},new i}catch(t){}function i(){var t,i=this;try{this.ns="CrispLoader",this.x={warn:function(){},error:function(){},info:function(){},log:function(){},debug:function(){}},this.T_=!1,this.on="crisp-client",this.G_="client.crisp.chat",this.U_="client.relay.crisp.chat",this.x_="stream.relay.crisp.chat",this._f="015ee76",this._a="production",this.L_="https:",this.$s="https://crisp.chat",this.fn="https://go.crisp.chat",this._n="https://image.crisp.chat",this.fs="https://game.crisp.chat",this.ms=this.L_+"//"+this.U_,this.ws=this.L_+"//"+this.x_,this._e=this.L_+"//"+this.G_,this.io=[{urls:["stun:stun.media.crisp.chat:3478","stun:stun.media.crisp.chat:3479"]},{urls:["turn:turn.media.crisp.chat:3478?transport=udp","turn:turn.media.crisp.chat:3478?transport=tcp","turn:turn.media.crisp.chat:3479?transport=udp","turn:turn.media.crisp.chat:3479?transport=tcp","turns:turn.media.crisp.chat:443?transport=tcp"],username:"client_9F9kh",credential:"DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"}],this.do=!0,this.B_={domains:[],agents:["Trident","Googlebot","Bingbot","Slurp","DuckDuckBot","Baiduspider","YandexBot","GTmetrix","Lighthouse","Acunetix","Ahrefs","SemrushBot","SiteAuditBot","SplitSignalBot"]},this.y_="static/javascripts",this.w_="static/stylesheets",this.v="$__CRISP_INSTANCE",this.M_="$__CRISP_INCLUDED",this.w=100,this.S_=3e4,this.F_=1e3,this.k_=280,this.b_=320,this.P_=420,this.O_=[{pattern:/edg(?:e)?\/([0-9\.]+)/,version:79},{pattern:/chrom(?:e|ium)\/([0-9\.]+)/,version:53},{pattern:/firefox\/([0-9\.]+)/,version:49},{pattern:/version\/([0-9\.]+)(?: mobile\/(?:[^\s]+))? safari\//,version:10},{pattern:/android ([0-9\.]+)/,version:5}],this.D_=/(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i,this.u_(),!0===window[this.M_]||void 0!==window[this.v]&&"function"==typeof window[this.v].__init||!0!==this.N_()||(window[this.M_]=!0,"interactive"===document.readyState||"complete"===document.readyState?this.init():(t=document.onreadystatechange||function(){},window.addEventListener("DOMContentLoaded",(function(){i.init()})),document.onreadystatechange=function(){"function"==typeof t&&t(),"interactive"!==document.readyState&&"complete"!==document.readyState||setTimeout((function(){i.init()}),i.F_)}),this.d_())}catch(t){}}}();