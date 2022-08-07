"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
// HIDE
exports.foo = true;
const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
    // ...
];
// END
for (const state of states) {
    console.log(state.capitol);
    // ~~~~~~~ Property 'capitol' does not exist on type
    //         '{ name: string; capital: string; }'.
    //         Did you mean 'capital'?
}
