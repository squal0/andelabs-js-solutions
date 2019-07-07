(function(){
  'use strict';
  describe("Prime Checker", function() {
    it("should be defined", function() {
      expect(PrimeChecker).toBeDefined();
    });

    it("should be a typeof function", function() {
      expect(typeof PrimeChecker).toBe(typeof (function(){}));
    });

    it('should return true for 41', function() {
      var prime = new PrimeChecker('41');
      expect(prime.isPrime()).toBe(true);
    });
    
    it('should return true for 1001', function() {
      var prime = new PrimeChecker('1001');
      expect(prime.isPrime()).toBe(false);
    });
    
    it('should return false for 68', function() {
      var prime = new PrimeChecker('68');
      expect(prime.isPrime()).toBe(false);
    });

    it('should return true for 3', function() {
      var prime = new PrimeChecker('3');
      expect(prime.isPrime()).toBe(true);
    });

    it('should return false for ""', function() {
      var prime = new PrimeChecker('');
      expect(prime.isPrime()).toBe(false);
    });

  });
})();