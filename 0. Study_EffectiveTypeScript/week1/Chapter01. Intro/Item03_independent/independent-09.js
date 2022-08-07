"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function turnLightOn() { }
function turnLightOff() { }
function setLightSwitch(value) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        default:
            console.log(`I'm afraid I can't do that.`);
    }
}
function setLight() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('/light');
        const result = yield response.json();
        setLightSwitch(result.lightSwitchValue);
    });
}
