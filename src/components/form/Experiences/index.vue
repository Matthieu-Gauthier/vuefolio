<template>
   <core-section id="#experiences">
      <core-heading>{{ t('myexperiences') }}</core-heading>

      <v-col>
         <v-timeline v-if="!smAndDown"
                     :density="mdAndDown ? 'comfortable' : 'default'"
                     line-thickness="1"
                     truncate-line="start"
                     line-color="tertiary">
            <v-timeline-item v-for="(item, i) in works"
                             :key="i"
                             class="custom-timeline-item"
                             width="100%"
                             dot-color="primary"
                             :size="!mdAndDown ? Math.floor(Math.random() * (40 - 20) + 20) : 10">
               <template v-slot:default>
                  <experience :value="item" />
               </template>
            </v-timeline-item>
         </v-timeline>
         <div v-else>
            <div v-for="(item, i) in works"
                 :key="i"
                 class="mb-4">
               <experience :value="item" />
            </div>
         </div>
      </v-col>
   </core-section>
</template>

<script>
import { useDisplay } from 'vuetify';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useWorksDatasStore } from '../../../stores/works';
import CoreSection from '../../core/Section.vue';
import CoreHeading from '../../core/Heading.vue';

import Experience from './Experience.vue';

export default defineComponent({
   name: 'FormExperiences',

   components: {
      Experience,
      CoreSection,
      CoreHeading
   },

   setup() {
      const { t } = useI18n();
      const { mdAndDown, smAndDown } = useDisplay();
      const { works } = useWorksDatasStore();
      return { works, t, mdAndDown, smAndDown };
   }
});
</script>
<style>
.custom-timeline-item .v-timeline-item__opposite {
   justify-self: auto !important;
}
.v-timeline--vertical.v-timeline.v-timeline--side-start .v-timeline-item .v-timeline-item__opposite {
   grid: 4
}
</style>
