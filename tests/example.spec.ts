import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Wait for load
  await page.locator('button:has-text("One")').waitFor();

  await page.keyboard.press("Tab");
  await expect(page.locator('button:has-text("One")')).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator('button:has-text("Two")')).toBeFocused();

  await page.keyboard.press("Tab"); // Reset to url / body

  // Lets go again
  await page.keyboard.press("Tab");
  await expect(page.locator('button:has-text("One")')).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator('button:has-text("Two")')).toBeFocused();
});
