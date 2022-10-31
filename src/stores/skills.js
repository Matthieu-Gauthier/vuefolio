import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSkillsDatasStore = defineStore('skills', () => {
   const skills = ref( [
      {
         name: 'Language & Framework',
         keywords: [
            { icon: 'mdi-vuejs', name: 'VueJS', level: 5 },
            { icon: 'mdi-vuetify', name: 'Vuetify', level: 6 },
            { icon: 'mdi-nodejs', name: 'NodeJS', level: 5 },
            { icon: 'mdi-language-javascript', name: 'Javascript', level: 5 },
            { icon: 'mdi-language-typescript', name: 'Typescript', level: 4 },
            { icon: 'mdi-language-css3', name: 'CSS', level: 5 },
            { icon: 'mdi-language-html5', name: 'HTML5', level: 5 },
            { icon: 'mdi-sass', name: 'Sass', level: 5 }
         ]
      },
      {
         name: 'Database',
         keywords: [
            { icon: 'mdi-database', name: 'MongoDB', level: 6 },
            { icon: 'mdi-database', name: 'PostgreSQL', level: 4 },
            { icon: 'mdi-database', name: 'MySQL', level: 4 }
         ]
      },
      {
         name: 'Autres',
         keywords: [
            { icon: 'mdi-linux', name: 'Linux', level: 6 },
            { icon: 'mdi-aws', name: 'Windows', level: 6 },
            { icon: 'mdi-git', name: 'Git', level: 6 },
            { icon: 'mdi-github', name: 'Github', level: 6 },
            { icon: 'mdi-docker', name: 'Docker', level: 3 },
            { icon: 'mdi-microsoft', name: 'AWS', level: 3 }
         ]
      }
   ]);
   return { skills };
});
