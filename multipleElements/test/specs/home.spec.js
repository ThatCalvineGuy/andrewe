import homePage from "../pageobjects/home.page.js";
describe('Home Page', () => {
    it('should have 44 list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize(44);
    });
    it('should not have 45 list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize(45);
    });
    it('should not have 43 list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize(43);
    });
;
});