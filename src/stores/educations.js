import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useEducationsDatasStore = defineStore('educations', () => {
   const educations = ref([
      {
         institution: 'Brevet de Technicien Supérieur',
         studyType: 'SIO (Service Informatique aux Organisations)',
         startDate: '2011-09-01',
         endDate: '2013-09-01',
         gpa: '3.2'
      },
      {
         institution: 'Baccalauréat Professionnel',
         studyType: 'MRIM (Micro-informatique et Réseaux, Installation et Maintenance)',
         startDate: '2009-09-01',
         endDate: '2011-09-01',
         gpa: '3.4'
      }
   ]);
   return { educations };
});
