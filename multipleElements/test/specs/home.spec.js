import homePage from "../pageobjects/home.page.js";
describe('Home Page', () => {
    it('should have 44 list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize(44);
    });
    it('should not have 45 list items or more', async () => {
        await homePage.open();
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize({gte: 45});
    });
    it('should not have 43 list items or fewer', async () => {
        await homePage.open();
        await expect(homePage.listExamples).not.toBeElementsArrayOfSize({lte: 43});
    });
;
});