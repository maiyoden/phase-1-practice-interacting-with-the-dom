const { expect } = require('chai');

describe('My Test Suite', function() {
    before(function(done) {
        // Simulate async setup
        setTimeout(() => {
            console.log('Setup complete');
            done(); // Call done when setup is complete
        }, 1000); // Simulate a 1 second delay
    });

    it('should pass a simple test', function() {
        expect(true).to.be.true;
    });
});