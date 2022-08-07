"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
// HIDE
exports.foo = true;
// END
const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capitol: 'Juneau' },
    // ~~~~~~~~~~~~~~~~~ Did you mean to write 'capital'?
    { name: 'Arizona', capital: 'Phoenix' },
    // ...
];
