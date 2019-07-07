describe('Addition Chain', function() {

  it('should return 1', function() {
    expect(add(1) == 1).toBe(true);
  });

  it('should return the sum', function() {
    expect(add(1)(10) == 11).toBe(true);
  });

  it('should return the sum', function() {
    expect(add(1)(1)(1)(20) == 23).toBe(true);
  });
  
  it('should return the sum', function() {
    expect(add(11)(11)(11)(67) == 100).toBe(true);
  });

});