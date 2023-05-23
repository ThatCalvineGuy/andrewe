import Page from './page.js';
class challenging_domPage extends Page {

    get linkText() { 
        return $('=Elemental Selenium') 
    }
    get partialLinkText() { 
        return $('*=Selenium') 
    }
    get ape() {
        return $('//*[@id="content"]//tr[1]/td[2]')
    }
    get blueButton() {
        return $('/html/body/div[2]/div/div/div/div/div[1]/a[1]')
    }
    get greenButton() {
        return $('/html/body/div[2]/div/div/div/div/div[1]/a[3]')
    }
    async greenText() {
        return await this.greenButton.getText() 
    }
    open () {
        return super.open('challenging_dom');
    }
}
export default new challenging_domPage();
