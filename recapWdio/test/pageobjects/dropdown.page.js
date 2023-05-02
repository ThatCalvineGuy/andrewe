import Page from './page.js'
class dropdownPage extends Page {
    get dDown() {
        return $('#dropdown')
    }
    get option1() {
        return $('#dropdown > option:nth-child(2)')
    }
    get option2() {
        return $('#dropdown > option:nth-child(3)')
    }
    async dDownPicker(thatOne) {
        await this.dDown.click()
        if (thatOne == 1) {
            await this.option1.click()
        } else if (thatOne == 2) {
            await this.option2.click()
        }
    }
    open() {
        return super.open('dropdown');
    }
}
export default new dropdownPage();