import { IdentificationType, BasePage } from '../../utilities/BasePage';
import { element, by } from 'protractor';
import { expect } from 'chai';





const Locators={

courseHeader:{
    type:IdentificationType[IdentificationType.Xpath],
    value : "//h2"
}

}
export class CourseDetailsPage extends BasePage{


courseHeader=this.ElementLocator(Locators.courseHeader);

async GetHeaderText(){
   await console.log("inside") ;

  // await expect(this.courseHeader.getText()).to.be.not.null;
   await  this.courseHeader.getText().then((text)=>{
   
  console.log(text);  
  expect(text).to.be.not.null

});  

    
}
}