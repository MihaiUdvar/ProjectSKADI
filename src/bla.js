function getDevJob(studying, hardWork, luck) {
  var isPrepared = studying && hardWork && luck;
  if (isPrepared) {
    return true;
  } else {
    return false;
  }
}
