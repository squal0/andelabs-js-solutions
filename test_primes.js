describe('Prime Time', function() {

  it('should return all prime numbers before 11, inclusive', function() {
    expect(prime(11)).toEqual([2, 3, 5, 7, 11]);
  });

  it('should return all prime numbers before 22, inclusive', function() {
    expect(prime(22)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
  });

  it('should return all prime numbers before 30, inclusive', function() {
    expect(prime(30)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
  });

  it('should return all prime numbers before 40, inclusive', function() {
    expect(prime(40)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37 ]);
  });
  
  
  it('should return all prime numbers before 100, inclusive', function() {
    expect(prime(100)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);
  });

  it('should return all prime numbers before 154, inclusive', function() {
    expect(prime(154)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151]);
  });

});