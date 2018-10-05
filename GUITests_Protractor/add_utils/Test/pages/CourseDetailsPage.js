"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const BasePage_1 = require('../../utilities/BasePage');
const chai_1 = require('chai');
const Locators = {
    courseHeader: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//h2"
    }
};
class CourseDetailsPage extends BasePage_1.BasePage {
    constructor() {
        super(...arguments);
        this.courseHeader = this.ElementLocator(Locators.courseHeader);
    }
    GetHeaderText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log("inside");
            // await expect(this.courseHeader.getText()).to.be.not.null;
            yield this.courseHeader.getText().then((text) => {
                console.log(text);
                chai_1.expect(text).to.be.not.null;
            });
        });
    }
}
exports.CourseDetailsPage = CourseDetailsPage;
//# sourceMappingURL=CourseDetailsPage.js.map