function findMinMax(num_list){
  var len = num_list.length;
  var large_small = [];
  var smallest = Math.min.apply(null, num_list);
  var largest = Math.max.apply(null, num_list);
  
  if(largest === smallest){
    large_small.push(len);
    return large_small;
  }
  large_small.push(smallest);
  large_small.push(largest);
  
  return large_small;
  
}
