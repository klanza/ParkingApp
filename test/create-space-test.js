const Nightmare = require('nightmare');
const expect = require('chai').expect;

describe('Park Place', function() {
    this.timeout(20000)
    it('should create a new parking space, and log it to the database', function(done) {
        Nightmare({show: true})
            .goto('https://limitless-peak-93129.herokuapp.com/new')
            // Enter email for space creator
            .type('#InputEmail', 'nightmaretest@fakesite.com')
            // Enter address for space.
            .type('#newSpaceAddress', '732 E. University Blvd.')
            // Enter coordinates for space.
            .type('#newCoordinate', '32.23123662280256 -110.95997386642557')
            // Enter price for space.
            .type('#newSpacePrice', '5.00')
            // Click the submit button to enter location into datbase
            .click('#submit')
            .evaluate(function() {
                return dbSpace.dataValues
            })
            .then(function(space) {
                expect(space.availability).to.equal(true);
                expect(space.availability.location_lat).to.equal('32.22992152310982');
                expect(space.availability.location_lng).to.equal('-110.96134382019045');
                done();
            });
    });
});
