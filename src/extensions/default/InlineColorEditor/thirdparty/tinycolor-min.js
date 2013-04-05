// TinyColor.js - <https://github.com/bgrins/TinyColor> - 2011 Brian Grinstead - v0.5
(function(e){function a(e){if("object"==typeof e&&e.hasOwnProperty("_tc_id"))return e;var e=f(e),t=e.r,n=e.g,r=e.b,i=parseFloat(e.a),s=w(100*i)/100,o=e.format;1>t&&(t=w(t));1>n&&(n=w(n));1>r&&(r=w(r));return{ok:e.ok,format:o,_tc_id:y++,alpha:i,toHsv:function(){var e=h(t,n,r);return{h:360*e.h,s:e.s,v:e.v,a:i}},toHsvString:function(){var e=h(t,n,r),o=w(360*e.h),u=w(100*e.s),e=w(100*e.v);return 1==i?"hsv("+o+", "+u+"%, "+e+"%)":"hsva("+o+", "+u+"%, "+e+"%, "+s+")"},toHsl:function(){var e=l(t,n,r);return{h:360*e.h,s:e.s,l:e.l,a:i}},toHslString:function(){var e=l(t,n,r),o=w(360*e.h),u=w(100*e.s),e=w(100*e.l);return 1==i?"hsl("+o+", "+u+"%, "+e+"%)":"hsla("+o+", "+u+"%, "+e+"%, "+s+")"},toHex:function(){return p(t,n,r)},toHexString:function(){return"#"+p(t,n,r)},toRgb:function(){return{r:w(t),g:w(n),b:w(r),a:i}},toRgbString:function(){return 1==i?"rgb("+w(t)+", "+w(n)+", "+w(r)+")":"rgba("+w(t)+", "+w(n)+", "+w(r)+", "+s+")"},toName:function(){return N[p(t,n,r)]||!1},toFilter:function(){var e=p(t,n,r),s=Math.round(255*parseFloat(i)).toString(16);return"progid:DXImageTransform.Microsoft.gradient(startColorstr=#"+s+e+",endColorstr=#"+s+e+")"},toString:function(e){var e=e||this.format,t=!1;"rgb"===e&&(t=this.toRgbString());"hex"===e&&(t=this.toHexString());"name"===e&&(t=this.toName());"hsl"===e&&(t=this.toHslString());"hsv"===e&&(t=this.toHsvString());return t||this.toHexString()}}}function f(e){var a={r:255,g:255,b:255},f=1,l=!1,h=!1;if("string"==typeof e)e:{var e=e.replace(m,"").replace(g,"").toLowerCase(),p=!1;if(T[e])e=T[e],p=!0;else if("transparent"==e){e={r:0,g:0,b:0,a:0};break e}var y,e=(y=t.exec(e))?{r:y[1],g:y[2],b:y[3]}:(y=n.exec(e))?{r:y[1],g:y[2],b:y[3],a:y[4]}:(y=r.exec(e))?{h:y[1],s:y[2],l:y[3]}:(y=i.exec(e))?{h:y[1],s:y[2],l:y[3],a:y[4]}:(y=s.exec(e))?{h:y[1],s:y[2],v:y[3]}:(y=o.exec(e))?{r:parseInt(y[1],16),g:parseInt(y[2],16),b:parseInt(y[3],16),format:p?"name":"hex"}:(y=u.exec(e))?{r:parseInt(y[1]+""+y[1],16),g:parseInt(y[2]+""+y[2],16),b:parseInt(y[3]+""+y[3],16),format:p?"name":"hex"}:!1}if("object"==typeof e){if(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b"))a={r:255*d(e.r,255),g:255*d(e.g,255),b:255*d(e.b,255)},l=!0,h="rgb";else if(e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")){e.s=v(e.s);e.v=v(e.v);var h=e.h,p=e.s,a=e.v,h=6*d(h,360),p=d(p,100),a=d(a,100),l=b.floor(h),w=h-l,h=a*(1-p);y=a*(1-w*p);p=a*(1-(1-w)*p);l%=6;a={r:255*[a,y,h,h,p,a][l],g:255*[p,a,a,y,h,h][l],b:255*[h,h,p,a,a,y][l]};l=!0;h="hsv"}else e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=v(e.s),e.l=v(e.l),a=c(e.h,e.s,e.l),l=!0,h="hsl");e.hasOwnProperty("a")&&(f=e.a)}return{ok:l,format:e.format||h,r:E(255,S(a.r,0)),g:E(255,S(a.g,0)),b:E(255,S(a.b,0)),a:f}}function l(e,t,n){var e=d(e,255),t=d(t,255),n=d(n,255),r=S(e,t,n),i=E(e,t,n),s,o=(r+i)/2;if(r==i)s=i=0;else{var u=r-i,i=.5<o?u/(2-r-i):u/(r+i);switch(r){case e:s=(t-n)/u+(t<n?6:0);break;case t:s=(n-e)/u+2;break;case n:s=(e-t)/u+4}s/=6}return{h:s,s:i,l:o}}function c(e,t,n){function r(e,t,n){0>n&&(n+=1);1<n&&(n-=1);return n<1/6?e+6*(t-e)*n:.5>n?t:n<2/3?e+6*(t-e)*(2/3-n):e}e=d(e,360);t=d(t,100);n=d(n,100);if(0==t)n=t=e=n;else var i=.5>n?n*(1+t):n+t-n*t,s=2*n-i,n=r(s,i,e+1/3),t=r(s,i,e),e=r(s,i,e-1/3);return{r:255*n,g:255*t,b:255*e}}function h(e,t,n){var e=d(e,255),t=d(t,255),n=d(n,255),r=S(e,t,n),i=E(e,t,n),s,o=r-i;if(r==i)s=0;else{switch(r){case e:s=(t-n)/o+(t<n?6:0);break;case t:s=(n-e)/o+2;break;case n:s=(e-t)/o+4}s/=6}return{h:s,s:0==r?0:o/r,v:r}}function p(e,t,n){function r(e){return 1==e.length?"0"+e:""+e}e=[r(w(e).toString(16)),r(w(t).toString(16)),r(w(n).toString(16))];return e[0][0]==e[0][1]&&e[1][0]==e[1][1]&&e[2][0]==e[2][1]?e[0][0]+e[1][0]+e[2][0]:e.join("")}function d(e,t){"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)&&(e="100%");var n="string"==typeof e&&-1!=e.indexOf("%"),e=E(t,S(0,parseFloat(e)));n&&(e=parseInt(e*t)/100);return 1e-6>b.abs(e-t)?1:e%t/parseFloat(t)}function v(e){1>=e&&(e=100*e+"%");return e}var t,n,r,i,s,o,u,m=/^[\s,#]+/,g=/\s+$/,y=0,b=Math,w=b.round,E=b.min,S=b.max,x=b.random;a.fromRatio=function(e){if("object"==typeof e){var t={},n;for(n in e)t[n]=v(e[n]);e=t}return a(e)};a.equals=function(e,t){return!e||!t?!1:a(e).toHex()==a(t).toHex()};a.random=function(){return a.fromRatio({r:x(),g:x(),b:x()})};a.desaturate=function(e,t){var n=a(e).toHsl();n.s-=(t||10)/100;n.s=E(1,S(0,n.s));return a(n)};a.saturate=function(e,t){var n=a(e).toHsl();n.s+=(t||10)/100;n.s=E(1,S(0,n.s));return a(n)};a.greyscale=function(e){return a.desaturate(e,100)};a.lighten=function(e,t){var n=a(e).toHsl();n.l+=(t||10)/100;n.l=E(1,S(0,n.l));return a(n)};a.darken=function(e,t){var n=a(e).toHsl();n.l-=(t||10)/100;n.l=E(1,S(0,n.l));return a(n)};a.complement=function(e){e=a(e).toHsl();e.h=(e.h+180)%360;return a(e)};a.triad=function(e){var t=a(e).toHsl(),n=t.h;return[a(e),a({h:(n+120)%360,s:t.s,l:t.l}),a({h:(n+240)%360,s:t.s,l:t.l})]};a.tetrad=function(e){var t=a(e).toHsl(),n=t.h;return[a(e),a({h:(n+90)%360,s:t.s,l:t.l}),a({h:(n+180)%360,s:t.s,l:t.l}),a({h:(n+270)%360,s:t.s,l:t.l})]};a.splitcomplement=function(e){var t=a(e).toHsl(),n=t.h;return[a(e),a({h:(n+72)%360,s:t.s,l:t.l}),a({h:(n+216)%360,s:t.s,l:t.l})]};a.analogous=function(e,t,n){var t=t||6,n=n||30,r=a(e).toHsl(),n=360/n,e=[a(e)];for(r.h=(r.h-(n*t>>1)+720)%360;--t;)r.h=(r.h+n)%360,e.push(a(r));return e};a.monochromatic=function(e,t){for(var t=t||6,n=a(e).toHsv(),r=n.h,i=n.s,n=n.v,s=[],o=1/t;t--;)s.push(a({h:r,s:i,v:n})),n=(n+o)%1;return s};a.readable=function(e,t){var n=a(e).toRgb(),r=a(t).toRgb();return 10404<(r.r-n.r)*(r.r-n.r)+(r.g-n.g)*(r.g-n.g)+(r.b-n.b)*(r.b-n.b)};var T=a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},N=a.hexNames=function(e){var t={},n;for(n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(T);t=RegExp("rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");n=RegExp("rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");r=RegExp("hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");i=RegExp("hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");s=RegExp("hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?");u=/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;o=/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/;"undefined"!=typeof module&&module.exports?module.exports=a:e.tinycolor=a})(this);