!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){t.config={codeStrat:128512,numBit:34,emoji:{":grinning:":"😀",":grin:":"😁",":joy:":"😂",":smiley:":"😃",":smile:":"😄",":sweat_smile:":"😅",":laughing:":"😆",":innocent:":"😇",":smiling_imp:":"😈",":wink:":"😉",":blush:":"😊",":yum:":"😋",":relieved:":"😌",":heart_eyes:":"😍",":sunglasses:":"😎",":smirk:":"😏",":neutral_face:":"😐",":expressionless:":"😑",":unamused:":"😒",":sweat:":"😓",":pensive:":"😔",":confused:":"😕",":confounded:":"😖",":kissing:":"😗",":kissing_heart:":"😘",":kissing_smiling_eyes:":"😙",":kissing_closed_eyes:":"😚",":stuck_out_tongue:":"😛",":stuck_out_tongue_winking_eye:":"😜",":stuck_out_tongue_closed_eyes:":"😝",":disappointed:":"😞",":worried:":"😟",":angry:":"😠",":rage:":"😡",":cry:":"😢",":persevere:":"😣",":triumph:":"😤",":disappointed_relieved:":"😥",":frowning:":"😦",":anguished:":"😧",":fearful:":"😨",":weary:":"😩",":sleepy:":"😪",":tired_face:":"😫",":grimacing:":"😬",":sob:":"😭",":open_mouth:":"😮",":hushed:":"😯",":cold_sweat:":"😰",":scream:":"😱",":astonished:":"😲",":flushed:":"😳",":sleeping:":"😴",":dizzy_face:":"😵",":no_mouth:":"😶",":mask:":"😷",":smile_cat:":"😸",":joy_cat:":"😹",":smiley_cat:":"😺",":heart_eyes_cat:":"😻",":smirk_cat:":"😼",":kissing_cat:":"😽",":pouting_cat:":"😾",":crying_cat_face:":"😿",":scream_cat:":"🙀",":slightly_frowning_face:":"🙁",":slightly_smiling_face:":"🙂",":upside_down_face:":"🙃",":face_with_rolling_eyes:":"🙄",":no_good:":"🙅",":ok_woman:":"🙆",":bow:":"🙇",":see_no_evil:":"🙈",":hear_no_evil:":"🙉",":speak_no_evil:":"🙊",":raising_hand:":"🙋",":raised_hands:":"🙌",":person_frowning:":"🙍",":person_with_pouting_face:":"🙎",":pray:":"🙏"}}},function(e,t,n){"use strict";e.exports={decode:n(2),encode:n(3)}},function(e,t,n){const o=n(0).config.codeStrat,r=n(0).config.numBit,i=n(0).config.emoji;e.exports=((e,t)=>{/^(:\w+:)+$/.test(e)&&(e=(e=e.replace(/^:(.+):$/,"$1").split("::")).map(e=>i[`:${e}:`]));const n=Array.from(e),s=n.shift();let c=n.splice(-1)[0].codePointAt()-o;if(n.length%2!=0)return"Error Input, Please do not try to change any character";{let e=[];for(var a=0;a<n.length;a+=2){const t=(n[a].codePointAt()-o).toString(r),i=(n[a+1].codePointAt()-o).toString(r);e.push(t+i)}const t=(e=e.map(e=>String.fromCodePoint(parseInt(e,r)-c))).join("");let i=c;e.forEach(e=>{i+=e.codePointAt()});const u=i.toString(r).slice(-1);return s!==String.fromCodePoint(parseInt(u,r)+o)?"Error Input, Please do not try to change any character":t}})},function(e,t,n){const o=n(0).config.codeStrat,r=n(0).config.numBit;e.exports=((e,t)=>{let n=e.split(""),i=Math.round(Math.random()*r),s=String.fromCodePoint(i+o),c=i;const a=n.map(e=>{const t=e.codePointAt();c+=t;let n=(e.codePointAt()+i).toString(r);return(n=`0${n}`.slice(-2)).split("").map(e=>{const t=parseInt(e,r)+o;return String.fromCodePoint(t)}).join("")}),u=c.toString(r).slice(-1),l=String.fromCodePoint(parseInt(u,r)+o);return a.unshift(l),a.join("")+s})}]);