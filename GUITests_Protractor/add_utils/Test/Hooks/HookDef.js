"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const config_1 = require('../steps/config');
cucumber_1.BeforeAll(() => __awaiter(this, void 0, void 0, function* () {
    yield console.log("Before everyfeature");
}));
cucumber_1.AfterAll(() => __awaiter(this, void 0, void 0, function* () {
    yield console.log(" After every feature");
}));
cucumber_1.Before(() => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get(config_1.config.baseUrl);
}));
cucumber_1.After(function (testcase) {
    var world = this;
    if (testcase.result.status === cucumber_1.Status.FAILED) {
        return protractor_1.browser.takeScreenshot().then(function (screenShot) {
            // screenShot is a base-64 encoded PNG
            world.attach(screenShot, 'image/png');
        });
    }
});
//# sourceMappingURL=HookDef.js.map