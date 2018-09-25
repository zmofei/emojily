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


for (let round = 0; round < 1; round += 1) {
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

test('test decode with error input', (assert) => {
    assert.equal('Error Input, Please do not try to change any character!', decode('😈😀😀😀😀😜'));
    assert.end();
});


test('test decode with changed input', (assert) => {
    assert.equal('Error Input, Please do not try to change any character', decode('😌😀😀😃😐😀😃😀😍😀😀😃😔😀😀😃😔😀😀😃😗😀😀😀😘😎'));
    assert.end();
});



test(`test commend from slack`, (assert) => {
    const slackText = ':unamused::grinning::grinning::joy::smiling_imp::grinning::grinning::grin::smiley::stuck_out_tongue:';
    // const encoded = encode(testwords);
    assert.equal('Error Input, Please do not try to change any character', decode(slackText));
    assert.end();
});