import assert from 'node:assert/strict';
import {format} from '../utils/format.js'

describe('format test', () => {
    it('0,00 should return true', () => {
        assert.equal("0,00", format(undefined));
    });
    it('2,56 should return true', () => {
        assert.equal("2,56", format(2.555));
    });
    it('10.000,556 should return true', () => {
        assert.equal("10.000,556", format(10000.5555, 3));
    });
    it('100.000,28 should return true', () => {
        assert.equal("100.000,28", format(100000.28374, 2, ",", "."));
    });
    it('100,000.6 should return true', () => {
        assert.equal("100,000.6", format(100000.55555, 1, ".", ","));
    });
    it('1,5550000000 should return true', () => {
        assert.equal("1,5550000000", format(1.555, 10, ",", "."));
    });
    it('-1,5555 should return true', () => {
        assert.equal("-1,5555", format(-1.55555, 4));
    });
    it('-1,5555 should return true', () => {
        assert.equal("-1,5555", format("-1.55555", 4));
    });
    it('1,555 should return true', () => {
        assert.equal("1,555", format(1.55555, 3, ",", ".", false));
    });
    it('1,56 should return true', () => {
        assert.equal("1,56", format("1.5555", 2));
    });
    // additional tests that I needed are below
    it('1,00 should return true', () => {
        assert.equal("1,00", format("1", 2));
    });
    it('1,0 should return true', () => {
        assert.equal("1,0", format("1", 1));
    });
    it('-1,00 should return true', () => {
        assert.equal("-1,00", format(-1, 2));
    });
    it('-1,00 should return true', () => {
        assert.equal("-1,00", format("-1", 2));
    });
    it('-1,0 should return true', () => {
        assert.equal("-1,0", format(-1,1));
    });
    it('-1,1 should return true', () => {
        assert.equal("-1,1", format(-1.1,1));
    });
});
