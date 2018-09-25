const emojiStart = require('./config').config.codeStrat;
const numBit = require('./config').config.numBit;

/**
 * to encode an string to emoji
 * TBD: need more detail to explain how it's works
 */
const encode = (sentence, key) => {
    let strArr = sentence.split('');

    // this random code is to make sure return different value with the same centences, to make it more safe.
    let offset = Math.round(Math.random() * numBit);
    let offsetEmoji = String.fromCodePoint(offset + emojiStart);
    let checkCode = offset;

    // checkcode: the sum number of all the code, to mark this privite centence is made by us.
    const codes = strArr.map((str, index) => {
        // this step is to get the char code
        const strCodeNum = str.codePointAt();
        

        checkCode += (strCodeNum + index);
        let strCodeStr = (strCodeNum + offset).toString(numBit);

        // to make the str at 2 bit, like 1 -> 01
        strCodeStr = `0000${strCodeStr}`.slice(-4);
        console.log(str, strCodeNum, strCodeStr);

        // return like "😃😕"
        return strCodeStr.split('').map(item => {
            const code = parseInt(item, numBit) + emojiStart;
            const emoji = String.fromCodePoint(code);
            return emoji;
        }).join('');
    });

    const usedCheckCode = checkCode.toString(numBit).slice(-1);
    const checkCodeEmoji = String.fromCodePoint(parseInt(usedCheckCode, numBit) + emojiStart);
    codes.unshift(checkCodeEmoji);
    return codes.join('') + offsetEmoji;
}

module.exports = encode;