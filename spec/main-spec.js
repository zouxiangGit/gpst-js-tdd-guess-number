const app = require('../main/main');

describe('main()', () => {
    it('should return 4A0B when seq1 equals seq2', () => {
        expect(app.guess('1234', '1234')).toEqual('4A0B');
    });

    it('should return 2A2B when different two number for seq1 with seq2', () => {
        expect(app.guess('1234', '1243')).toEqual('2A2B');
    });

    it('should return 1A3B when different three number for seq1 with seq2', () => {
        expect(app.guess('1234', '1423')).toEqual('1A3B');
    });
});