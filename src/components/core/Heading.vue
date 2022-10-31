<template>
   <v-col :cols="cols">
      <h2 class="font-weight-bold text-primary mb-4 text-h4">
         <slot />
      </h2>
   </v-col>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

export default defineComponent({
   name: 'CoreHeading',

   props: {
      cols: {
         type: String,
         default: '12',
      },
   },

   setup() {
      const { t } = useI18n(); // use as global scope
      const { mdAndUp } = useDisplay(); // use as global scope
      return { t, mdAndUp };
   }
});
</script>

