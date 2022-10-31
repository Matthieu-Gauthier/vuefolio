<template>
   <core-section id="what-i-know">
      <v-col cols="12">
         <v-row>
            <core-heading cols="auto">
               {{ t('myskills') }}
            </core-heading>
         </v-row>
      </v-col>

      <v-col v-for="(skill, i) in skills"
             :key="i"
             class="ma-0"
             cols="12"
             md="4">
         <skill :value="skill"/>
      </v-col>
   </core-section>
</template>

<script>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useSkillsDatasStore } from '../../../stores/skills';
import CoreSection from '../../core/Section.vue';
import CoreHeading from '../../core/Heading.vue';

import Skill from './Skill.vue';

export default defineComponent({
   name: 'FormSkills',

   components: {
      Skill,
      CoreSection,
      CoreHeading,
   },

   setup() {
      const { t } = useI18n();
      const { skills } = useSkillsDatasStore();
      return { skills, t };
   }
});
</script>
