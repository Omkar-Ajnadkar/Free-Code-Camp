function permAlone(string) {

  var consecutive = /(.)\1/;

  return heap(string).filter(function(currentPerm) {
    return !consecutive.test(currentPerm);
  }).length;  // We return the length of the filtered array.

  function heap(string) {
    var arr = string.split(''),
      permutations = [];

    function swap(a, b) {
      var tmp = arr[a];
      arr[a] = arr[b];
      arr[b] = tmp;
    }

    function gen(n) {
      if (n === 1) {
        permutations.push(arr.join(''));
      } else {
        for (var i = 0; i != n; i++) {
          gen(n - 1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
    }

    gen(arr.length);
    return permutations;
  }
}
permAlone('aab');
