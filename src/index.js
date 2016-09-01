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

console.log(shuffle([ 1,2,3,4,5,6,7,8,9 ]));
