const app = require('../main/main');

describe('main()', () => {
    it('should return 4A0B when seq1 equals seq2', () => {
        expect(app.guess('1234','1234')).toEqual('4A0B')
    })
});