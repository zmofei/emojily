# emojily

[![Build Status](https://travis-ci.com/zmofei/emojily.svg?branch=master)](https://travis-ci.com/zmofei/emojily) [![codecov](https://codecov.io/gh/zmofei/emojily/branch/master/graph/badge.svg)](https://codecov.io/gh/zmofei/emojily) [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE) [![npm](https://img.shields.io/npm/v/emojily.svg)](https://www.npmjs.com/package/emojily)


Encode/Decode engine for text to emoji

[Try it online 😛](https://zmofei.github.io/emojily/example/index.html) 

# Usage


1. Install 

```Javascript
npm install emojily --save
```

or use from CDN for browser

```html
<srcipt type="text/javascript" src="https://cdn.rawgit.com/zmofei/emojily/master/dist/emojily.js"></script>
```

2. encode text to emoji

```javascript
const {encode} = require('emojily');
encode('hello');
// the output will be: 😎😃😜😃😙😃😠😃😠😄😁😚
// every time it wil return defferent output even you encode same word.
// eg:
// > encode('hello');
// '😋😃😙😃😖😃😝😃😝😃😠😗'
// > encode('hello');
// '😄😃😒😃😏😃😖😃😖😃😙😐'
// > encode('hello');
// '😡😃😍😃😊😃😑😃😑😃😔😋'
```

3. decode from emoji

```javascript
const {decode} = require('emojily');
decode('😋😃😙😃😖😃😝😃😝😃😠😗');
// the output will be: 'hello'
// tips: the emoji text must from encode, and you can not change any letter in the text.
// eg:
// if you are try to switch the last 2 letter 😋😃😙😃😖😃😝😃😝😃😠😗 => 😋😃😙😃😖😃😝😃😝😃😗😠
// then you tru decode('😋😃😙😃😖😃😝😃😝😃😗😠');
// it will throw an error like: 'Error Input, Please do not try to change any character'
```
