<template>
   <div class="my-4">
      <v-btn v-for="(p, i) in profiles"
             :key="i"
             :href="p.url"
             variant="text"
             :icon="p.icon">
      </v-btn>
   </div>
</template>


<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useBasicsDatasStore } from '../../stores/basics';

export default defineComponent({
   name: 'FormSocialContacts',

   setup() {
      const { profiles } = useBasicsDatasStore();
      const { t } = useI18n(); // use as global scope
      return { t, profiles };
   }
});
</script>


<style scoped>
  a {
    text-decoration: none;
  }
</style>
