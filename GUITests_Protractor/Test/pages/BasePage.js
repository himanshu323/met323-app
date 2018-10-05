"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Name"] = 0] = "Name";
    IdentificationType[IdentificationType["ID"] = 1] = "ID";
    IdentificationType[IdentificationType["ClassName"] = 2] = "ClassName";
    IdentificationType[IdentificationType["Xpath"] = 3] = "Xpath";
    IdentificationType[IdentificationType["Css"] = 4] = "Css";
    IdentificationType[IdentificationType["LinkText"] = 5] = "LinkText";
    IdentificationType[IdentificationType["PartialLinkText"] = 6] = "PartialLinkText";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
class BasePage {
    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.className(obj.value));
        }
    }
    ElementsLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element.all(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element.all(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element.all(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.ID]:
                return protractor_1.element.all(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element.all(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element.all(protractor_1.by.partialLinkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element.all(protractor_1.by.className(obj.value));
        }
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map