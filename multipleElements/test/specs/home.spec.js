import homePage from "../pageobjects/home.page.js";
describe('Home Page', () => {
    it('should verify list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize(44);
    });
});