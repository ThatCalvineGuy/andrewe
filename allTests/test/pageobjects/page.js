export default class Page {

  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  createGetObj(objName, selector) {
    return {
        get [objName]() {
          return selector;
      }
    };
  }
  
}