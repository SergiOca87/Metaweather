parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"mpVp":[function(require,module,exports) {
function t(t,e,n,r,o,a,c){try{var i=t[a](c),s=i.value}catch(u){return void n(u)}i.done?e(s):Promise.resolve(s).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(o,a){var c=e.apply(n,r);function i(e){t(c,o,a,i,s,"next",e)}function s(e){t(c,o,a,i,s,"throw",e)}i(void 0)})}}function n(t){return r.apply(this,arguments)}function r(){return(r=e(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(e,"/"));case 3:return n=t.sent,t.next=6,n.json();case 6:for(r=t.sent,o=0;o<4;o++)a=r.consolidated_weather[o],document.querySelectorAll("i")[o].innerHTML='<img src="https://www.metaweather.com/static/img/weather/'.concat(a.weather_state_abbr,'.svg">'),document.querySelectorAll("h2")[o].innerHTML="The weather state for the ".concat(a.applicable_date," in ").concat(r.title," is <br><strong>").concat(a.weather_state_name,"</strong>"),document.querySelectorAll("p")[o].innerHTML="Min temp: <strong>".concat(Math.round(a.min_temp),"º C</strong> <br>Max temp: <strong>").concat(Math.round(a.max_temp),"º C</strong>");t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),document.querySelector("h2").textContent="Sorry, something went wrong";case 13:case"end":return t.stop()}},t,this,[[0,10]])}))).apply(this,arguments)}n(753692);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.95f0943e.map