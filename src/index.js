module.exports = {
  shuffle: shuffle
};

function shuffle(array) {
  var len = array.length;
  if (len < 1) return array;

  var result = [];
  for (var i=0;i<len;i++) {
    var item = Math.floor(Math.random()*array.length);
    result.push(array.splice(item,1)[0]);
  }
  return result;
}
