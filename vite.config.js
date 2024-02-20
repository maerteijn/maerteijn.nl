import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>maerteijn</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
  </head>
  <body>
  </body>
</html>
`

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "bulma/sass/utilities/initial-variables.sass" as bulma;
          @use "./src/scss/variables.scss" as variables;
          @use "./src/scss/animation.scss" as *;
          `,
      },
    },
  },
  plugins: [vue()],
  resolve: {
    extensions: ['.js', '.vue', '.scss'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    environmentOptions: { jsdom: {html: html, url: "http://localhost" } },
    include: ['**.js'],
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },

  },


})
