const Nightmare = require('nightmare');
const expect = require('chai').expect;

describe('Park Place', function() {
    // Extending it to 30 seconds to have time to load the pages
    this.timeout(5000);
    it('should open the new space creation page', function(done) {
        // Timeout to 10 seconds to load page
        // this.timeout(10000);
        Nightmare({show: true})
            // go to locally hosted site index for testing
            .goto('https://limitless-peak-93129.herokuapp.com/')
            // Click the catalog link
            .click('a[href="../new"]')
            // Evaluate the title
            .evaluate(function() {
                return document.title;
            })
            .end()
            // Assert the title is as expected
            .then(function(title) {
                expect(title).to.equal('Create new space!');
                done();
            });
    });
    it('should open the rent a space page', function(done) {
        // Timeout to 10 seconds to load page
        // this.timeout(10000);
        Nightmare({show: true})
            // go to locally hosted site index for testing
            .goto('https://limitless-peak-93129.herokuapp.com/')
            // Click the catalog link
            .click('a[href="../rent"]')
            // Evaluate the title
            .evaluate(function() {
                return document.title;
            })
            .end()
            // Assert the title is as expected
            .then(function(title) {
                expect(title).to.equal('Rent a space!');
                done();
            });
    });
    it('should open the rent a space page', function(done) {
        // Timeout to 10 seconds to load page
        // this.timeout(10000);
        Nightmare({show: true})
            // go to locally hosted site index for testing
            .goto('https://limitless-peak-93129.herokuapp.com/checkout/1')
            // Evaluate the title
            .evaluate(function() {
                return document.title;
            })
            .end()
            // Assert the title is as expected
            .then(function(title) {
                expect(title).to.equal('Checkout!');
                done();
            });
    });
});
