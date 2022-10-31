<template>
   <v-card class="pa-2">
      <v-card-title class="text-h4">
         {{ value.company }}
         <v-btn icon="mdi-information-outline"
                size="x-small"
                variant="flat"
                target="_blank"
                :href="value.website"/>
      </v-card-title>

      <v-card-subtitle>
         {{ value.date }}
      </v-card-subtitle>

      <v-card-text>
         <div class="text-body-1 mb-4">
            <div v-for="s in value.summaries">
               {{ t(s) }}
            </div>
         </div>
         <div v-for="data
                 in value.resumes"
              class="ml-2"
              :key="data">
            <span class="mr-3 px-2 banner-div mon-texte fuzzy-font">
               {{ t(data.name) }}
            </span>
            <v-card class="my-1"
                    variant="flat"
                    color="transparent">

               <v-row class="ma-0">
                  <v-col class="pa-0">
                     <li v-for="summary in data.summaries"
                         :key="summary"
                         v-text="t(summary)" />

                     <footer class="d-flex justify-end mb-2">
                        <v-chip v-for="tech in data.technologies"
                                :key="tech"
                                class="ml-1"
                                color="primary"
                                variant="outlined"
                                size="small">
                           {{ tech }}
                        </v-chip>
                     </footer>
                  </v-col>
               </v-row>
            </v-card>
         </div>
      </v-card-text>
   </v-card>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
   name: 'Experience',
   components: {},


   props: {
      value: {
         type: Object,
         default: () => ({
            date: '',
            company: '',
            summary: '',
            resumes: '',
         }),
      },
   },

   setup() {
      const { t } = useI18n();
      return { t };
   }
});
</script>
<style>
.mon-texte {
   color: var(--color-darken-black);
}
.banner-div {
   padding-top: 2px;
   padding-bottom: 2px;
   background-color: #FFAA00;
   border-radius: 4px;
   opacity: 0.5;
}
</style>
