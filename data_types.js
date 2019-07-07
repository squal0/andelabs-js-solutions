function dataTypes(args){
  if(typeof(args) === "string"){
    return args.length;
  }
  if(args === null || args === undefined){
    return "no value";
  }
  if(typeof(args) === "boolean"){
    return args;
  }
  if(typeof(args) === "number"){
    if (args < 100){
      return "less than 100";
    }
    else if(args > 100){
      return "more than 100";
    }
    else{
      return "equal to 100";
    }
  }
  if(Array.isArray(args)){
    if(args.indexOf(2) === -1){
      return undefined;
    }
  else{
    return args.indexOf(2);
  }
  }
  if(typeof(args) === "function"){
    var arg = args(true);
    return arg;
  }
}