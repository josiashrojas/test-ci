import { test, expect } from '@playwright/test';
import { testEnv } from 'e2e/enviroments/enviroment';

test('flaky test', async ({ page }, testInfo) => {
  await page.goto('/');

  console.log("CI:", testEnv.ci);

  let name = 'fake title'
  if(testInfo.retry){
    name = 'Hello 1, test-ci'
  }
  console.log("name:", name)
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name, exact: true })).toBeVisible();
});
