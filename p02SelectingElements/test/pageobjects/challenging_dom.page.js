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

    open () {
        return super.open('challenging_dom');
    }
}
export default new challenging_domPage();
