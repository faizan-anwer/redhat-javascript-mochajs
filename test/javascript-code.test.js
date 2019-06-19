// Set chai.expect as a global variable
var expect = require("chai").expect;
var mocha = require("mocha");
var remoteMathService = require("../javascript-code");
// Setup Mocha to use the BDD interface
mocha.setup('bdd');

describe('Test remoteMathService function', function () {
    let error, one, two, sum, cb;
    beforeEach(function () {
        error = undefined;
        one = 1;
        two = 2;
        sum = one + two;
        cb = (error, sum) => { }
    })

    context('with callOneService function as argument', function () {
        it('should compute callOneService functions', function (done) {
            // set a 1 seconds timeout for this suite
            this.timeout(1000);
            callOneService('calling callOneService function to test', function (error, one) {
                // call the done() callback with the error if any
                // to terminate the test with an error
                if (error) {

                    // add an assertion to check the error
                    expect(function () { throw error })
                        .to.throw(TypeError, 'Data must be a number');

                    // finally call the done() callback
                    // to terminate the test and return
                    return done();

                }

                // add some assertions
                expect(one)
                    .to.be.a('number')
                    .that.matches(/^[0-9]$/)
                    .and.equal(1);

                // finally call the done() callback
                // to terminate the test
                setTimeout(done, 1000);
            })

        })
    })

    context('with callTwoService function as argument', function () {
        it('should compute callTwoService functions', function (done) {
            // set a 1.5 seconds timeout for this suite
            this.timeout(1500);
            callTwoService('calling callTwoService function to test', function (error, two) {
                // call the done() callback with the error if any
                // to terminate the test with an error
                if (error) {

                    // add an assertion to check the error
                    expect(function () { throw error })
                        .to.throw(TypeError, 'Data must be a number');

                    // finally call the done() callback
                    // to terminate the test and return
                    return done();

                }

                // add some assertions
                expect(two)
                    .to.be.a('number')
                    .that.matches(/^[0-9]$/)
                    .and.equal(2);

                // finally call the done() callback
                // to terminate the test
                setTimeout(done, 1500);
            })

        })
    })

    context('with cb function as argument', function () {
        it('should compute remoteMathService functions', function (done) {
            // set a 1.5 seconds timeout for this suite
            const sinon = require('sinon');
            const assert = require('assert');

            it('should log the correct value to console', () => {
                // "spy" on `console.log()`
                let spy = sinon.spy(console, 'log');

                // call the function that needs to be tested
                remoteMathService(error, 3);

                // assert that it was called with the correct value
                assert(spy.calledWith(3).to.have("correct"));

                // restore the original function
                spy.restore();
            });
            it('should log the correct value to console', () => {
                // "spy" on `console.log()`
                let spy = sinon.spy(console, 'log');

                // call the function that needs to be tested
                remoteMathService(error, 1);

                // assert that it was called with the correct value
                assert(spy.calledWith(1).to.have("wrong answer"));

                // restore the original function
                spy.restore();
            });
            remoteMathService('calling callTwoService function to test', function (error, sum) {
                // call the done() callback with the error if any
                // to terminate the test with an error
                if (error) {

                    // add an assertion to check the error
                    expect(function () { throw error })
                        .to.throw(TypeError, 'Data must be a number');

                    // finally call the done() callback
                    // to terminate the test and return

                }

                // add some assertions
                expect(sum)
                    .to.be.a('number')
                    .that.matches(/^[0-9]$/)
                    .and.equal(3);
            })

            it('should log the correct value to console', () => {
                // "spy" on `console.log()`
                let spy = sinon.spy(console, 'log');

                // call the function that needs to be tested
                consoleOutput(3);

                // assert that it was called with the correct value
                assert(spy.calledWith(3));

                // restore the original function
                spy.restore();
            });

        })
    })
});