parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r,a,o=document.querySelector("table"),i=o.querySelector("thead"),l=o.querySelector("tbody"),c=o.tBodies[0].rows;function u(e){return+e.substr(1).split(",").join("")}function d(n,t,r){var o=Array.from(c);a="Salary"===n.textContent?o.sort(function(e,n){return u(n.children[t].innerText)-u(e.children[t].innerText)}):o.sort(function(e,n){return e.children[t].innerText<n.children[t].innerText?1:-1}),r&&a.reverse();var i,d=e(c);try{for(d.s();!(i=d.n()).done;){var s=i.value;l.removeChild(s)}}catch(m){d.e(m)}finally{d.f()}var f,v=e(a);try{for(v.s();!(f=v.n()).done;){var p=f.value;l.appendChild(p)}}catch(m){v.e(m)}finally{v.f()}}i.addEventListener("click",function(e){var n=e.target.cellIndex;d(e.target,n,(r=r===n?-1:n)===n)}),o.addEventListener("click",function(e){if(!e.target.closest("th")){var n=e.target.closest("tr"),t=o.querySelector(".active");t&&t.classList.remove("active"),n.classList.add("active")}});var s=document.createElement("form");s.classList.add("new-employee-form"),s.insertAdjacentHTML("afterbegin",'\n  <label>Name:\n  <input name="name" type="text" data-qa="name" required>\n  </label>\n  <label>Position:\n  <input name="position" type="text" data-qa="position" required>\n  </label>\n  <label>Office:\n  <select name="office" data-qa="office" required>\n  <option value="Tokyo">Tokyo</option>\n  <option value="Singapore">Singapore</option>\n  <option value="London">London</option>\n  <option value="New York">New York</option>\n  <option value="Edinburgh">Edinburgh</option>\n  <option value="San Francisco">San Francisco</option>\n  </select>\n  </label>\n  <label>Age:\n  <input name="age" type="number" data-qa="age" required>\n  </label>\n  <label>Salary:\n  <input name="salary" type="number" data-qa="salary" required>\n  </label>\n  <button type="submit">Save to table</button>\n'),document.body.append(s);var f=s.querySelector("button"),v=document.querySelector(".new-employee-form");function p(e){return e[0].toUpperCase()+e.slice(1)}function m(e,n,t,r,a){var o=document.createElement("tr"),i="$"+a.value.replace(/\B(?=(\d{3})+(?!\d))/g,",");o.insertAdjacentHTML("beforeend","\n  <td>".concat(p(e.value),"</td>\n  <td>").concat(p(n.value),"</td>\n  <td>").concat(t.value,"</td>\n  <td>").concat(r.value,"</td>\n  <td>").concat(i,"</td> \n  ")),l.appendChild(o)}function y(e,n,t,r,a){var o=document.createElement("div");o.dataset.qa="notification",o.classList.add("notification",a),o.insertAdjacentHTML("beforeend","\n  <h2 class='title'>".concat(t,"</h2>\n  <p>").concat(r,"</p>\n  ")),o.style.top=e+"px",o.style.right=n+"px",document.body.append(o),setTimeout(function(){return o.remove()},2e3)}f.addEventListener("click",function(e){e.preventDefault();var n=v.children[0].firstElementChild,t=v.children[1].firstElementChild,r=v.children[2].firstElementChild,a=v.children[3].firstElementChild,o=v.children[4].firstElementChild;return n.value.length<4||!n.value?y(10,30,"Too short name","Your name should be more then 4 letters","error"):t.value.length?+a.value<18||+a.value>90||!a.value?y(220,30,"Error","Your age < 18 or more then 90","error"):o.value.length<2||!o.value?y(330,30,"This salary is too small","Fill salary field","error"):(m(n,t,r,a,o),y(10,30,"Success","New Employee added","success"),n.value="",t.value="",a.value="",void(o.value="")):y(110,30,"Fill your position","This field should be fill","error")}),l.addEventListener("dblclick",function(e){var n=e.target,t=n.innerHTML;n.innerHTML="",n.insertAdjacentHTML("beforeend",'\n    <input class="cell-input">\n  ');var r=n.querySelector("input");r.focus();var a=function(){""===r.value?n.innerHTML=t:n.innerHTML=r.value};r.addEventListener("focusout",a),r.addEventListener("keydown",function(e){"Enter"===e.key&&a()})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.fb24f9fc.js.map