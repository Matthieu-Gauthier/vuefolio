<template>
   <v-navigation-drawer app
                        class="text-center"
                        color="tertiary"
                        permanent>
      <v-row align="center"
             class="flex-column fill-height py-5 mx-0"
             justify="center">
         <h2 class="text-h2 font-weight-black text-primary mb-2"
             v-text="initials"/>
         <div class="text-h4 mb-2"
              v-text="name"/>
         <span class="text-button font-weight-medium mb-10"
               v-text="label"/>
         <!--         <v-container v-for="(item, i) in items"-->
         <!--                      :key="i"-->
         <!--                      class="py-0">-->
         <!--            <v-btn class="subtitle-2 font-weight-light mb-3"-->
         <!--                   variant="text"-->
         <!--                   block-->
         <!--                   @click="() => console.log('gotoVuetify')">-->
         <!--               <span v-text="item.text" />-->
         <!--            </v-btn>-->
         <!--         </v-container>-->
         <div class="mt-auto">
            <!--            <v-tooltip top-->
            <!--                       color="primary">-->
            <!--               <template v-slot:activator="{ on, attrs }">-->
            <!--                  <v-btn icon="mdi-file-download-outline"-->
            <!--                         variant="text"-->
            <!--                         color="primary"-->
            <!--                         v-bind="attrs"-->
            <!--                         v-on="on" />-->
            <!--               </template>-->
            <!--               <span v-text="t('downloadCv')" />-->
            <!--            </v-tooltip>-->
            <form-social-contacts />

            <v-btn variant="text"
                   @click="toggleLocale">
               {{ changeLocaleTo }}
            </v-btn>
         </div>
      </v-row>
   </v-navigation-drawer>
</template>

<script>

import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useBasicsDatasStore } from '../../stores/basics';
import FormSocialContacts from '../form/SocialContacts.vue';

export default defineComponent({
   name: 'CoreDrawer',
   components: { FormSocialContacts },
   setup() {
      const { t, locale } = useI18n();
      const { initials, name, label } = useBasicsDatasStore();
      const items = computed(() => [
         {
            text: t('aboutMe'),
            to: '#who-i-am',
         },
         {
            text: t('skills'),
            to: '#what-i-know',
         },
         {
            text: t('experience'),
            to: '#where-ive-been',
         },
      ]);

      const toggleLocale = () => {
         locale.value = (locale.value === 'en') ? 'fr' : 'en';
      };

      const changeLocaleTo = computed(() => locale.value === 'en' ? 'fr' : 'en');
      return { items, initials, name, label, t, toggleLocale, changeLocaleTo };
   }
});
</script>
