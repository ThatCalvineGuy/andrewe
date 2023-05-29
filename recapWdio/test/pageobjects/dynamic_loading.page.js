import Page from './page.js';

class dynamic_loadingPage extends Page {

constructor() {
    super();
    this.createGetter('startButton', '#start > button');
    this.createGetter('finishText', '#finish > h4');
    this.createGetter('loadingBar', '#loading > img');
  }
open () {
    return super.open('dynamic_loading/1');
}}
export default new dynamic_loadingPage();
