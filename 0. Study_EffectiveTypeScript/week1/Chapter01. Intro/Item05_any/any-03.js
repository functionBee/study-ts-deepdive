"use strict";
let age;
age = '12';
// ~~~ Type '"12"' is not assignable to type 'number'
age = '12'; // OK
function calculateAge(birthDate) {
    // COMPRESS
    return 0;
    // END
}
let birthDate = '1990-01-19';
calculateAge(birthDate); // OK
