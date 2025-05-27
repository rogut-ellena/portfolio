// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devServer: {
    port: 4000,     // 👈 your custom port
  },

  devtools: { enabled: true },
   site: { 
    url: 'https://example.com', 
    name: 'My Awesome Website' 
    }, 
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
    '@nuxtjs/seo',
  ],
  content: {
    build: {
      markdown: {
        highlight: {
        
          theme: {
            // Default theme (same as single string)
            default: 'min-light',
            // Theme used if `html.dark`
            dark: 'min-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    },
  },

  colorMode: {
    classSuffix: ''
  },

  compatibilityDate: '2025-04-23',
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

})