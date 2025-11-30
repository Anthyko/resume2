import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { portfolioIcons } from './utils/portfolio-icons.js';

// https://astro.build/config
export default defineConfig({
    //site: "https://anthonyhengy.fr",
    site: "https://anthyko.github.io/resume2/",
    integrations: [
        icon({
            include: portfolioIcons,
        }),
    sitemap()],
});
