import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useLocaleStore = defineStore('locale', () => {
   const language = ref('fr');
   const changeLocaleTo = computed(() => language.value === 'en' ? 'fr' : 'en');
   const currentLanguage = computed(() => language.value);
   const toggleLocale = () => {
      if (language.value === 'en') {
         language.value = 'fr';
      } else {
         language.value = 'en';
      }
   };
   return { currentLanguage, toggleLocale, changeLocaleTo };
});
