import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useBasicsDatasStore = defineStore('basics', () => {
   const name = ref('Matthieu Gauthier');
   const initials = ref(name.value.split(' ').map(n => n.charAt(0)).join(''));
   const label = ref('Full-Stack Developer');
   const email = ref('mattthieu.gauthier@me.com');
   const phone = ref('(514) 996-6183');
   const website = ref('http://matthieugauthier.com');
   const summary = ref('I am front-end developer that specializes in Vue and Veutify development. Consectetur adipisicing elit, sed do eiusmod tempor. Quisque viverra quam urna, ac commodo augue convallis et. In vel nisl imperdiet, cursus elit ac, efficitur sem. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quom placerat facer possim assum.');
   const location = ref({
      city: 'Montreal',
      country: 'Canada',
      region: 'Quebec'
   });
   const profiles = ref([
      {
         network: 'LinkedIn',
         icon: 'mdi-linkedin',
         username: 'Matthieu Gauthier',
         url: 'https://www.linkedin.com/in/matthieugauthierca/'
      },
      {
         network: 'Github',
         icon: 'mdi-github',
         username: 'Matthieu Gauthier',
         url: 'https://github.com/Matthieu-Gauthier'
      }
   ]);
   return { name, initials, label, email, phone, website, summary, location, profiles };
});
