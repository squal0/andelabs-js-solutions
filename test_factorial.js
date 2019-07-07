(function(){
  'use strict';
  describe("Factorial", function() {
    it("5 factorial should be 120", function() {
      expect(factorial(5)).toBe(120);
    });

    it("2 factorial should be 2", function() {
      expect(factorial(2)).toBe(2);
    });

    it("10 factorial should be 3628800", function() {
      expect(factorial(10)).toBe(3628800);
    });
  });
})();
