import ElementsPage from "../pageobjects/add_remove_elements.page.js";

describe('Elements page', () => {
    it('should have 5 elements', async () => {
        await ElementsPage.open()
        await ElementsPage.setButtons(5);
        await expect(ElementsPage.buttoncount).toBe(5);
    });
    it('should have 3 elements', async () => {
        await ElementsPage.setButtons(3);
        await expect(ElementsPage.buttoncount).toBe(3);
    });
    it('should have 10 elements', async () => {
        await ElementsPage.setButtons(10);
        await expect(ElementsPage.buttoncount).toBe(10);
    });
    it('should throw an error for negative numbers', async () => {
        try {
            await ElementsPage.setButtons(-1);
            fail('Expected an error to be thrown');
        } catch (error) {
            expect(error.message).toContain('Number must be greater than or equal to zero');
        }
    });
    it('should throw an error for non-integer numbers', async () => {
        try {
            await ElementsPage.setButtons(1.5);
            fail('Expected an error to be thrown');
        } catch (error) {
            expect(error.message).toContain('Number must be an integer');
        }
    });
});