import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();
export const USER_EMAIL = process.env.ALISON_EMAIL ?? '';
export const USER_PASSWORD = process.env.ALISON_PASSWORD ?? '';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: 'https://alison.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
});
