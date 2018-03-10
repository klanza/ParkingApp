const Nightmare = require('nightmare');
const expect = require('chai').expect;

describe('Park Place', function() {
    this.timeout(20000);
    it('should checkout of a parking space', function(done) {
        Nightmare({show: true})
            // Opens website with specific space
            .goto('https://limitless-peak-93129.herokuapp.com/checkout/1')
            // Click the checkout button to sign out of space
            .click('.btn')
            .then((result) => {
                done();
            })
            .catch(done);
    });
});
