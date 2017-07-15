import * as chai from 'chai';
import * as mocha from 'mocha'
import { expect } from 'chai';
import { Calculator } from '../calculator';
import { Math } from '../Math';

chai.should();
describe("Math File", () => {
    it("add 1 and 1 should return 2", () => {
        // Arrange
        let calculator = new Calculator();
        let a = 1;
        let b = 1;
        let expect = 2;

        // Act
        let actual = calculator.Add(a, b);

        // Assert
        expect.should.eq(actual);
    })
        it('Success', function () {
        var math = new Math();
        expect(math.sum(1, 2)).to.equal(3);
    });

    it('Arrow function will work too', () => {
        var math = new Math();
        expect(math.sum(1, 2)).to.equal(3);
    });
}); 