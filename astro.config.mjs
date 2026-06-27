// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://MVomito.github.io',
  base: '/polygraph-astro',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // English at /, French at /fr/
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});