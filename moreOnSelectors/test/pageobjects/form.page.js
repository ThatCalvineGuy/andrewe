import page from './page.js'
class FormPage extends Page {
     //define multiple selectors using getter methods
    get header() {
        return $('#wb-cont'); //uses Element with certain text selector
    }
     // Email Selector
     get inputEmail() {
          return $("#mail"); //uses CSS query selector
     }
    get submit()
    {
        return (${'input.btn:nth-child(10)'});
    }
    get errortext()
    {
        return (${'#errors-validation-example > h2:nth-child(1)'});
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to enter in a valid email
     */
    async emailInput() {
        await this.emailInput.setValue(input);
        await this.submit.click();
    }
     /**
      * overwrite specific options to adapt it to page object
      */
     open() {
          return super.open('');
     }
}
export default new FormPage();