function findNextPower(val, pow_) {
    for(var i = 1; i < 100; i++) {
  if(Math.pow(i,pow_) > val) break;
}
return Math.pow(i,pow_);
}