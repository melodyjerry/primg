importScripts("./BigInteger.min.js")

self.addEventListener('message', function(e) {
  number = bigInt(e.data)

  var is = number.isProbablePrime()
  console.log(is)

  self.postMessage(is)
}, false)
