var Person = function(firstAndLast) {
    var firstName, lastName;                // Initialize both variables.

    this.getFirstName = function() {
        return firstName;
    };

    this.getLastName = function() {
        return lastName;
    };

    this.getFullName = function() {
        return firstName + ' ' + lastName;  // Concatenate the first and last name to get the full name.
    };

    this.setFirstName = function(first) {
        firstName = first;
    };

    this.setLastName = function(last) {
        lastName = last;
    };

    this.setFullName = function(firstAndLast) {     // We place this logic in the setFullName method
        firstAndLast = firstAndLast.split(' ');
        firstName = firstAndLast[0];
        lastName = firstAndLast[1];
    };

    this.setFullName(firstAndLast);     // We call the setFullName method as soon as a person is created.
}
