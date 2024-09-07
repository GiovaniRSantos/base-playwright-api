import { defineConfig } from '@playwright/test';

const config = defineConfig({
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
