<template>
   <v-sheet class="mb-5"
            color="transparent">
      <v-row class="mx-0">
         <v-sheet class="mr-3"
                  color="primary"
                  width="1"
                  height="100"
                  tile/>

         <v-col>
            <div class="mb-3"
                 v-text="value.institution"/>

            <div class="text-right">
               <span class="title primary--text"
                     v-text="value.studyType"/>

               <footer>
                  <div v-text="years" />
               </footer>
            </div>
         </v-col>
      </v-row>
   </v-sheet>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
   name: 'EducationCard',

   props: {
      value: {
         type: Object,
         required: true
      }
   },

   setup(props) {
      const { t } = useI18n(); // use as global scope

      const years = computed(() => {
         return `${props.value.startDate.slice(0, 4)} -
            ${props.value.endDate.slice(0, 4)}
            `.trim();
      });
      return { t, years };
   }
});
</script>
