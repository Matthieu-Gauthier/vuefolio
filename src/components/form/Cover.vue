<template>
   <section id="hero">
      <v-img :src="image"
             class="sectionBackgroundHeight"
             cover>
         <v-row :justify="mdAndUp ? 'end' : undefined"
                align="end"
                class="fill-height text-right pa-md-5 pa-3 mx-0">
            <div class="upText">
               <div :class="`text-h${!mdAndUp ? '4' : '2'}`"
                    class="text-uppercase"
                    v-text="name"/>

               <h1 :class="`text-h${!mdAndUp ? '3' : '1'}`"
                   class="text-primary text-uppercase"
                   v-text="label"/>
            </div>
         </v-row>
      </v-img>

      <core-abstract-4 />
   </section>
</template>

<script>
import { useDisplay } from 'vuetify';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import image from '../../assets/hero.png';
import { useBasicsDatasStore } from '../../stores/basics';
import CoreAbstract4 from '../core/Abstract4.vue';

export default defineComponent({
   name: 'FormHero',
   components: { CoreAbstract4 },
   setup() {
      const { t } = useI18n();
      const { mdAndUp } = useDisplay();
      const { name, label } = useBasicsDatasStore();
      return { t, name, label, mdAndUp, image };
   }
});
</script>

<style>
.sectionBackgroundHeight {
   height: 100vh;
}
</style>
