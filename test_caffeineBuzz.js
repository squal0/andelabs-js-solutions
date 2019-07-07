describe('Caffeine Script', function() {

  it('should return mocha_missing! for 1', function() {
    expect(caffeineBuzz(1)).toEqual('mocha_missing!');
  });

  it('should return Java for 3', function() {
    expect(caffeineBuzz(3)).toEqual('Java');
  });
  
  it('should return CoffeeScript for 36', function() {
    expect(caffeineBuzz(36)).toEqual('CoffeeScript');
  });
  
  it('should return JavaScript for 6', function() {
    expect(caffeineBuzz(6)).toEqual('JavaScript');
  });
  
  it('should return mocha_missing! for 8', function() {
    expect(caffeineBuzz(8)).toEqual('mocha_missing!');
  });


});
