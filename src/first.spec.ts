//initial commit
import { leapwork } from "./leapwork";
 

  await page.goto('https://demoapps.leapwork.ai/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByLabel('Retail demo resources').getByRole('link', { name: 'Open demo' }).click();
  const page1 = await page1Promise as Page;
  await page1.getByRole('button', { name: 'View details for Window Perch' }).click();
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page1.getByRole('button', { name: 'Checkout' }).click();
  await page1.getByRole('textbox', { name: 'Recipient name' }).click();
  await page1.getByRole('textbox', { name: 'Recipient name' }).fill('satpal');
  await page1.getByRole('textbox', { name: 'Recipient name' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Email address' }).fill('sasn@leapwork.com');
  await page1.getByRole('textbox', { name: 'Email address' }).press('Tab');
  await page1.getByRole('textbox', { name: 'Street address' }).fill('42');
  await page1.getByRole('textbox', { name: 'Street address' }).press('ArrowDown');
  await page1.getByRole('option', { name: '42 Parkside Mews 10024 New' }).click();
  await page1.getByRole('button', { name: 'Continue to payment' }).click();
  await page1.getByRole('button', { name: 'Review order' }).click();
  await page1.getByRole('button', { name: 'Place order' }).click();
  await page1.getByRole('button', { name: 'Back to home' }).click();