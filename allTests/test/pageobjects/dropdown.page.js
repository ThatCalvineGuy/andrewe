import Page from './page.js'
class DropdownPage extends Page {
    get dDown() {
        return $('#dropdown')
    }
    get option1() {
        return $('#dropdown > option:nth-child(2)')
    }
    get option2() {
        return $('#dropdown > option:nth-child(3)')
    }
    open(){
        return super.open('dropdown');
    }
}
export default new DropdownPage();