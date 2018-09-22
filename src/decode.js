const emojiStart = require('./config').config.codeStrat;
const numBit = require('./config').config.numBit;
const emoji = require('./config').config.emoji;

const decode = (sentence, key) => {
    // the sentence from slack is transformed into words, we need to deal with that
    const isFromSlack = /^(:\w+:)+$/.test(sentence);

    if (isFromSlack) {
        sentence = sentence.replace(/^:(.+):$/, '$1').split('::');
        sentence = sentence.map(key => emoji[`:${key}:`]);
    }

    const strArr = Array.from(sentence);
    const checkCode = strArr.shift();
    let offsetCode = strArr.splice(-1)[0];
    let offset = offsetCode.codePointAt() - emojiStart;

    if (strArr.length % 2 !== 0) {
        return 'Error Input, Please do not try to change any character';
    } else {

        //
        let strCodeSingleArr = [];
        for (var i = 0; i < strArr.length; i += 4) {
            const firstCode = (strArr[i].codePointAt() - emojiStart).toString(numBit);
            const secondCode = (strArr[i + 1].codePointAt() - emojiStart).toString(numBit);
            const thridCode = (strArr[i + 2].codePointAt() - emojiStart).toString(numBit);
            const fourthCode = (strArr[i + 3].codePointAt() - emojiStart).toString(numBit);
            strCodeSingleArr.push(firstCode + secondCode + thridCode + fourthCode);
        }

        // console.log(strCodeSingleArr)
        let err = false;
        try {
            strCodeSingleArr = strCodeSingleArr.map(code => {
                return String.fromCodePoint(parseInt(code, numBit) - offset)
            });
        } catch (e) {
            err = true;
        }
        if (err) {
            return 'Error Input, Please do not try to change any character!';
        }

        const retStr = strCodeSingleArr.join('');

        let checkNum = offset;
        strCodeSingleArr.forEach((str, index) => {
            checkNum += str.codePointAt() + index;
        });

        const usedCheckCode = checkNum.toString(numBit).slice(-1);
        const checkCodeEmoji = String.fromCodePoint(parseInt(usedCheckCode, numBit) + emojiStart);

        if (checkCode !== checkCodeEmoji) {
            return 'Error Input, Please do not try to change any character';
        } else {
            return retStr;
        }
    }
}

module.exports = decode;