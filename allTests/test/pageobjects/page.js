/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
    generateGetFunction(selector, name, isMultiple = false) {
      return {
        get [name]() {
          const element = isMultiple ? $$(selector) : $(selector);
          expect(element).not.toBe(null);
          if (isMultiple) {
            expect(element.length).toBeGreaterThan(0);
          }
          return element;
        },
      };
    }
  }
  