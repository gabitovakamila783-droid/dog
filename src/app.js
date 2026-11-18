function sum(a, b) {
    return a + b;
}

module.exports = { sum };
const test = require('node:test');
const assert = require('node:assert');
const { sum } = require('../src/app');

test('Проверка сложения', () => {
    assert.strictEqual(sum(2, 3), 5);
});