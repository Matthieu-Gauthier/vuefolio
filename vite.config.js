import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

import vueI18n from './src/plugins/i18n';


// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      vuetify({
         autoImport: true,
         styles: { configFile: 'src/styles/vuetify.scss' }
      }),
      vueI18n,
   ],
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      }
   }
});
