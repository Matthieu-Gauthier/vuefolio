import { createI18n } from 'vue-i18n';

import en from '../locales/en';
import fr from '../locales/fr';

export default createI18n({
   locale: 'fr', // TODO for multi language in storage
   allowComposition: true,
   messages: {
      en,
      fr,
   }
});
