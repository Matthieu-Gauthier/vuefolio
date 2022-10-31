<template>
   <core-section id="who-i-am">
      <core-abstract-1 />

      <core-heading>{{ t('whoiam') }}</core-heading>

      <v-col cols="12"
             md="10">
         <v-row justify="space-between">
            <v-col cols="12"
                   md="7">
               <core-text class="mb-4">
                  <p v-text="summary" />
               </core-text>
            </v-col>

            <v-col cols="12"
                   md="4">
               <v-row align="center">
                  <v-col cols="6"
                         class="text-uppercase text-primary font-weight-medium">
                     <div class="mb-3"
                          v-text="$t('location')"/>
                     <div class="mb-3"
                          v-text="$t('email')"/>
                     <div class="mb-3"
                          v-text="$t('phone')"/>
                  </v-col>
                  <v-col cols="6"
                         class="subheading text-no-wrap">
                     <div class="mb-3"
                          v-text="location.country"/>
                     <div class="mb-3"
                          v-text="email"/>
                     <div class="mb-3"
                          v-text="phone"/>
                  </v-col>
               </v-row>
            </v-col>
         </v-row>
      </v-col>

      <v-col class="hidden-sm-and-down text-right text-uppercase">
         <div class="display-1"
              v-text="label"/>

         <span class="text-primary headline font-weight-light"
               v-text="name"/>
      </v-col>

      <v-col v-if=educations
             id="my-education"
             cols="12"
             md="3"
             tag="section">
         <h3 class="headline font-weight-medium mb-4 text-primary">
            {{ t('mystudies') }}
         </h3>

         <education-card v-for="(degree, i) in educations"
                         :key="i"
                         :value="degree"/>
      </v-col>
   </core-section>
</template>

<script>
import { useDisplay } from 'vuetify';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useBasicsDatasStore } from '../../../stores/basics';
import { useEducationsDatasStore } from '../../../stores/educations';
import CoreAbstract1 from '../../core/Abstract1.vue';
import CoreText from '../../core/Text.vue';
import CoreSection from '../../core/Section.vue';
import CoreHeading from '../../core/Heading.vue';
import signature from '../../../assets/signature.png';

import EducationCard from './EducationCard.vue';

export default defineComponent({
   name: 'FormResumes',

   components: {
      CoreAbstract1,
      CoreText,
      EducationCard,
      CoreSection,
      CoreHeading
   },

   setup() {
      const { t } = useI18n();
      const { mdAndUp } = useDisplay();
      const { name, label, phone, email, location, summary } = useBasicsDatasStore();
      const { educations } = useEducationsDatasStore();
      return { t, name, label, mdAndUp, phone, email, location, summary, educations, signature };
   }
});
</script>
