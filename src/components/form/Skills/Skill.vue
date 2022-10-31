<template>
   <div :id="value.name"
        class="mb-4">
      <h4 class="text-uppercase mb-3 primary--text"
          v-text="value.name"/>

      <div class="pl-md-4">
         <v-row v-for="(skill, i) in value.keywords"
                :key="i"
                align="center"
                class="my-1 mx-0">
            <v-col cols="1"
                   class="py-0">
               <v-icon color="primary"
                       :icon="skill.icon" />
            </v-col>

            <v-col cols="4"
                   class="py-0">
               <h5 class="subheading"
                   v-text="skill.name"/>
            </v-col>

            <v-col cols="7"
                   class="py-0">
               <v-rating length="6"
                         density="compact"
                         :model-value="skill.level"
                         color="primary"
                         readonly>
                  <template v-slot:item="props">
                     <v-icon :color="props.isFilled ? 'primary' : 'tertiary'"
                             large
                             @click="props.onClick">
                        mdi-record
                     </v-icon>
                  </template>
               </v-rating>
            </v-col>
         </v-row>
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
   name: 'FormSkill',

   props: {
      value: {
         type: Object,
         default: () => ({
            category: '',
            skills: [],
         }),
      },
   },

   setup() {
      const { t } = useI18n();
      return { t };
   }
});
</script>
