"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const Homepage_1 = require('./pages/Homepage');
var homepage = new Homepage_1.HomePage();
describe("Test Write", () => {
    /* it("test should pass",()=>{
    
        homepage.OpenBrowser("http://localhost:8808");
    
        homepage.GetHeaderText();
    
        homepage.ClickHeader();
    
    
    let a=12;
    expect(a).toBe(12);
    }); */
    it("test should pass", () => __awaiter(this, void 0, void 0, function* () {
        yield homepage.OpenBrowser("http://localhost:8808");
        yield homepage.GetHeaderText();
        yield homepage.ClickHeader();
        let a = 12;
        expect(a).toBe(12);
    }));
    //browser.sleep(10000);
    // expect(a).toBe(14);
});
//# sourceMappingURL=FirstTestspec.js.map