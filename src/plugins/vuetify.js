// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
// Vuetify
import { createVuetify } from 'vuetify';

const myCustomTheme = {
   dark: true,
   colors: {
      primary: '#FFAA00',
      accent: '#FFD277',
      tertiary: '#181818',
   }
};

export default createVuetify({
   theme: {
      defaultTheme: 'myCustomTheme',
      themes: {
         myCustomTheme,
      }
   }
});

