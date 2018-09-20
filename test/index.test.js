'use strict';

const test = require('tape');
const index = require('..');
const encode = require('../src/encode');
const decode = require('../src/decode');

const makeid = () => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';

    for (let round = 0; round < 20; round += 1) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}


for (let round = 0; round < 10; round += 1) {
    test(`test emoji encoding/decodeing round ${round + 1} for ${makeid()}`, (assert) => {
        const testwords = 'hello, nice to meet you';
        const encoded = encode(testwords);
        assert.equal(testwords, decode(encoded));
        assert.end();
    });
}

test('test decode with error input', (assert) => {
    assert.equal('Error Input, Please do not try to change any character', decode('😘😃😐😄😌😃😜😄😀😃😠😡😡'));
    assert.end();
});

test('test decode with changed input', (assert) => {
    assert.equal('Error Input, Please do not try to change any character', decode('😘😃😐😄😌😃😄😜😀😃😠😡'));
    assert.end();
});



test(`test commend from slack`, (assert) => {
    const slackText = ':smiley::smiley::expressionless::smiley::sunglasses::smiley::confused::smiley::confused::smiley::kissing_heart::smirk:';
    const emojiText = '😃😃😑😃😎😃😕😃😕😃😘😏'
    // const encoded = encode(testwords);
    assert.equal(decode(slackText), decode(emojiText));
    assert.end();
});