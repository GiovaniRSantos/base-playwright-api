import { defineConfig } from '@playwright/test';

const config = defineConfig({
  reporter: [['allure-playwright']],
  projects: [
    {
      name: 'web',
      use: {
        baseURL: 'https://fakestoreapi.com/', 
      },
    },
  ],
});

export default config;
