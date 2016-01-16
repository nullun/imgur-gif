// ==UserScript==
// @name        imgur-gif
// @namespace   imgur-gif
// @description Redirect Imgur's .gifv extension to .gif
// @include     http://*.imgur.com/*.gifv
// @include     https://*.imgur.com/*.gifv
// @version     1
// @grant       none
// ==/UserScript==

var domain  = location.origin // *imgur.com
var urlPath = location.pathname // /*.ext
location.replace(domain + urlPath.substr(0, urlPath.lastIndexOf(".")) + ".gif"); // Replace the .gifv extension with .gif
