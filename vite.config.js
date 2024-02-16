import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
})
