import { createApp } from 'vue';
import { createPinia } from 'pinia';

import i18n from './plugins/i18n';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const piniaStore = createPinia();

createApp(App)
   .use(router)
   .use(vuetify)
   .use(i18n)
   .use(piniaStore)
   .mount('#app');
