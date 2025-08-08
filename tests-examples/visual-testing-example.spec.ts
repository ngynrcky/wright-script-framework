import { test, expect } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('https://www.example.com');
  await expect(page).toHaveScreenshot('homepage.png'); // Compares the full page
});