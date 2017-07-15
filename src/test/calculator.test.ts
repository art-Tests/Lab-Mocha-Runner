import * as chai from 'chai';
import * as mocha from 'mocha'
import {Calculator}  from '../calculator';

chai.should();

describe("Calculator", () => {
    describe("#add", () => {
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
    })
})