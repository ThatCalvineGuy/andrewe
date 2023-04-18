import Page from '../pageobjects/page.js'
class FormPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
    get inputFirstName() {
        return $('#fname1');
    }
    get inputLastName() {
        return $('#lname1');
    }
    get inputPhoneNumber() {
        return $('#tel1');
    }
    get inputPostalCode() {
        return $('#pcodeca1');
    }
     // Email Selector
    get inputEmail() {
        return $('#email1'); //uses CSS query selector
    }
    get checkAgree() {
        return $('#agree1');
    }
    get selectPetFish() {
        return $('#animal3');
    }
    get selectCitizen() {
        return $('#status1');
    } 
    get submit()
    {
        return $('#validation-example > input.btn.btn-primary');
    }
    get errortext()
    {
        return $('#errors-validation-example > h2');
    }
    get title() {
        return $('#title1')
    }
    get titleesq() {
        return $('#title1 > option:nth-child(3)')
    }
    get titlemr() {
        return $('#title1 > option:nth-child(4)')
    }
     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
}
export default new FormPage();