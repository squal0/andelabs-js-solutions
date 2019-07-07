describe("Caps", function() {
  it('should return UPPERCASED', function() {
    var caps = new Caps('ANDELA');
    expect(caps.isCapped()).toBe('UPPERCASED');
  });

  it('should return SOME', function() {
    var caps = new Caps('Andela');
    expect(caps.isCapped()).toBe('SOME');
  });

  it('should return LOWERCASED', function() {
    var caps = new Caps('andela');
    expect(caps.isCapped()).toBe('LOWERCASED');
  });

  it('should return the number of lowercased letters', function() {
    var caps = new Caps('andela');
    expect(caps.lower()).toBe(6);
  });

  it('should return the number of uppercased letters', function() {
    var caps = new Caps('ANDELA');
    expect(caps.upper()).toBe(6);
  });
});