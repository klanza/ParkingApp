const Nightmare = require('nightmare');
const expect = require('chai').expect;

describe('Park Place', function() {
    this.timeout(20000);
    it('should create a new parking space, and log it to the database', function(done) {
        Nightmare({show: true})
            .goto('https://limitless-peak-93129.herokuapp.com/new')
            // Enter email for space creator
            .type('#InputEmail', 'nightmaretest@fakesite.com')
            // Enter address for space.
            .type('#newSpaceAddress', '732 E. University Blvd.')
            // Enter coordinates for space.
            .click('#map')
            // .type('#newCoordinate', '32.23123662280256 -110.95997386642557')
            // Enter price for space.
            .type('#newSpacePrice', '5.00')
            // Click the submit button to enter location into datbase
            .click('#submit')
            .then(function(newSpace) {
                expect(newSpace.availability).to.equal(true);
                expect(newSpace.owner_username).to.equal('nightmaretest@fakesite.com');
                expect(newSpace.address).to.equal('732 E. University Blvd.');
                expect(newSpace.price).to.equal('5.00');
                done();
            });
    });
});
