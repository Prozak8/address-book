!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=window.localStorage,o=function(){var e=JSON.parse(r.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("ul");n.className="list-reset",e.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n      <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">\n        <div class="sm:flex sm:items-center px-6 py-4">\n          <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://www.bestfunnies.com/wp-content/uploads/2012/11/Ugly-Face-Man-2.jpg" />\n          <div class="text-center sm:text-left sm:flex-grow content">\n            <div class="mb-4">\n              <h1 class="text-xl leading-tight">'+e.name+'</h1>\n              <h2 class="text-sm leading-tight text-grey-dark">'+e.company+'</h2>\n              <p class="text-sm leading-tight text-grey-dark">'+e.notes+'</p>\n              <p class="text-sm leading-tight text-red">'+e.email+'</p>\n              <a class="text-sm leading-tight text-grey-dark" href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    ",n.appendChild(t)}),t.appendChild(n)}else t.innerHTML="<p>You have no contacts in your address book</p>"};document.addEventListener("DOMContentLoaded",function(){o();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=e.elements,a=n.name,i=n.email,l=n.phone,s=n.company,c=n.notes,u=n.twitter,d={id:Date.now(),name:a.value,email:i.value,phone:l.value,company:s.value,notes:c.value,twitter:u.value};console.log("Saving the following contact: "+JSON.stringify(d));var m=JSON.parse(r.getItem("contacts"))||[];m.push(d),r.setItem("contacts",JSON.stringify(m)),o(),e.reset()})})}]);