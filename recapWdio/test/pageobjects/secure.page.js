

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    constructor() {
        super();
        this.createGetter('flashAlert', '#flash');
        this.createGetter('btnLogout', '.button.secondary.radius');
      }
    async logout() {
        await this.btnLogout.click();
    }
}


export default new SecurePage();
