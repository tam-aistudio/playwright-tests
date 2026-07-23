import { leapwork } from "./leapwork";

import { NewTypescript } from "@assets/New typescript";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});
// comment
// ai-studio-step-id: SISi5pu8
await leapwork.step("Click the iPhone link in Apple’s global navigation.", async () => {
    // Click span
    await page.getByLabel('iPhone', { exact: true }).click();
}, { action: "click", relativeXpath: ".//div/div[4]/ul/li[1]/a[@aria-label=\"iPhone\"]/span[1]" ,enableSelfHeal: false});

// ai-studio-step-id: CXD9Wcnh
await leapwork.step("Click the iPhone 17 Pro link in the iPhone family navigation.", async () => {
    // Click link "iPhone 17 Pro"
    await page.getByLabel('iPhone family').getByRole('link', { name: 'iPhone 17 Pro' }).click();
}, { action: "click", relativeXpath: ".//div/div/div/ul/li[1]/a", enableSelfHeal: false });

// ai-studio-step-id: OoK9YJVZ
await leapwork.step("Click the Buy button for iPhone 17 Pro 񟿿", async () => {
    // Click link "Buy, iPhone 17 Pro"
    await page.locator('section').filter({ hasText: 'iPhone 17 Pro Buy From $1099' }).getByLabel('Buy, iPhone 17 Pro').click();
}, { action: "click", relativeXpath: "//*[@id=\"main\"]/section[1]/div[2]/div[2]/div/a[@aria-label=\"Buy, iPhone 17 Pro\"]" });

// ai-studio-step-id: 3AjwQFVe
await leapwork.step("Click the iPhone 17 Pro model option in the “Model. Which is best for you?” section", async () => {
    // Click div
    await page.locator('div').filter({ hasText: 'Buy iPhone 17 Pro From $1099' }).nth(4).click();
}, { action: "click", relativeXpath: "//*[@id=\"root\"]/div[3]/div[1]" });

// ai-studio-step-id: RbC9FMQe
await leapwork.step("Select \"iPhone 17 Pro Max\n6.9-inch display Footnote 2 From $1199  or $49.95/mo. per month  for 24 mo.months Footnote ‡\" radio option", async () => {
    // Check radio "iPhone 17 Pro Max 6.9-inch display Footnote 2 From $1199 or $49.95 per month for 24 months Footnote ‡"
    await page.getByRole('radio', { name: 'iPhone 17 Pro Max 6.9-inch' }).check({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_b_\"]" });

// ai-studio-step-id: Y0rcfcoz
await leapwork.step("Select \"Cosmic Orange\" radio option", async () => {
    // Check radio "Cosmic Orange"
    await page.getByRole('radio', { name: 'Cosmic Orange' }).check({ force: true });
}, { action: "click", relativeXpath: "//*[@id=\"_r_e_\"]" });
