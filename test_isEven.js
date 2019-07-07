describe('Even numbers', function() {

  it('should return true for 2', function() {
    expect(isEven(2)).toBe(true);
  });
  
  it('should return true for 0', function() {
    expect(isEven(0)).toBe(true);
  });
  
  it('should return true for -2', function() {
    expect(isEven(-2)).toBe(true);
  });
  
  it('should return true for 4', function() {
    expect(isEven(4)).toBe(true);
  });
  
  it('should return true for -10', function() {
    expect(isEven(-10)).toBe(true);
  });

  it('should return false for -0.2', function() {
    expect(isEven(-0.2)).toBe(false);
  });
  
  it('should return false for -0.16', function() {
    expect(isEven(-0.16)).toBe(false);
  });

});