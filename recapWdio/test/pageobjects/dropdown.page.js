import Page from './page.js'
class dropdownPage extends Page {
    constructor() {
        super();
        this.createGetter('dDown', '#dropdown');
        this.createGetter('option1', '#dropdown > option:nth-child(2)');
        this.createGetter('option2', '#dropdown > option:nth-child(3)');
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