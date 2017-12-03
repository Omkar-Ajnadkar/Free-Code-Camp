function destroyer(arr) {
// Create an array of arguments using the arguments object
var myArguments = [];
for (var i = 1; i < arguments.length; i++) {
myArguments.push(arguments[i]);
}
// Return arr after filtering values in myArguments
return arr.filter( function(remove) {
  return myArguments.indexOf(remove) < 0;
});
 }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
