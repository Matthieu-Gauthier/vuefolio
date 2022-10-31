import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useWorksDatasStore = defineStore('works', () => {
   const works = ref( [
      {
         company: 'Grics',
         position: 'CONSULTANT DÉVELOPPEUR FULLSTACK JS',
         website: 'https://grics.ca/',
         date: '11/2021 - 11/2022',
         resumes : [
            {
               name: 'frontend',
               summaries :  [
                  'works.grics.resumes.summary_frontend_0',
                  'works.grics.resumes.summary_frontend_1',
                  'works.grics.resumes.summary_frontend_2',
                  'works.grics.resumes.summary_frontend_3',
                  'works.grics.resumes.summary_frontend_4',
               ],
               technologies: ['Javascript ES6+', 'VueJs', 'Vuetify', 'Storybook', 'Jest', 'Sass']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.grics.resumes.summary_orgmeth_0',
                  'works.grics.resumes.summary_orgmeth_1',
                  'works.grics.resumes.summary_orgmeth_2',
               ],
               technologies: ['Azure DevOps']
            }
         ],
         // eslint-disable-next-line max-len
         summaries: [
            'works.grics.summaries.line_1',
            'works.grics.summaries.line_2',
         ]
      },
      {
         company: 'Garda World',
         position: 'CONSULTANT DÉVELOPPEUR FULLSTACK JS',
         website: 'https://www.garda.com/',
         date: '06/2020 - 11/2021',
         resumes : [
            {
               name: 'frontend',
               summaries :  [
                  'works.garda.resumes.summary_frontend_0',
                  'works.garda.resumes.summary_frontend_1',
                  'works.garda.resumes.summary_frontend_2',
                  'works.garda.resumes.summary_frontend_3',
               ],
               technologies: ['Typescript', 'VueJs', 'Vuex','Vuetify', 'Cypress']
            },
            {
               name: 'backend',
               summaries : [
                  'works.garda.resumes.summary_backend_0',
                  'works.garda.resumes.summary_backend_1',
                  'works.garda.resumes.summary_backend_2',
               ],
               technologies: ['NodeJs', 'FeathersJs', 'MongoDB', 'Sequelize']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.garda.resumes.summary_orgmeth_0',
                  'works.garda.resumes.summary_orgmeth_1',
                  'works.garda.resumes.summary_orgmeth_2',
               ],
               technologies: ['Jira', 'Github']
            }
         ],
         summaries: [
            'works.garda.summaries.line_1',
         ]
      },
      {
         company: 'Magik-Net',
         position: 'CONSULTANT DÉVELOPPEUR FULLSTACK JS',
         website: 'https://www.magik-net.com/',
         date: '06/2019 - 06/2020',
         resumes : [
            {
               name: 'frontend',
               summaries :  [
                  'works.magiknet.resumes.summary_frontend_0',
                  'works.magiknet.resumes.summary_frontend_1',
               ],
               technologies: ['Javascript ES6+', 'VueJs', 'Vuex', 'Vuetify']
            },
            {
               name: 'backend',
               summaries : [
                  'works.magiknet.resumes.summary_backend_0',
                  'works.magiknet.resumes.summary_backend_1',
                  'works.magiknet.resumes.summary_backend_2',
               ],
               technologies: ['NodeJs', 'FeathersJs', 'MongoDB']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.magiknet.resumes.summary_orgmeth_0',
                  'works.magiknet.resumes.summary_orgmeth_1',
                  'works.magiknet.resumes.summary_orgmeth_2',
               ],
               technologies: ['Jira', 'Github']
            }
         ],
         summaries: [
            'works.magiknet.summaries.line_1',
         ]
      },
      {
         company: 'Groupe Master',
         position: 'CONSULTANT DÉVELOPPEUR / ANALYSTE',
         website: 'https://www.master.ca/',
         date: '01/2019 - 06/2019',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.master.resumes.summary_condev_0',
                  'works.master.resumes.summary_condev_1',
                  'works.master.resumes.summary_condev_2',
                  'works.master.resumes.summary_condev_3',
               ],
               technologies: ['Windev', 'Windev Mobile', 'Webdev', 'SQL Server']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.master.resumes.summary_orgmeth_0',
               ],
               technologies: ['Jira']
            }
         ],
         summaries: [
            'works.master.summaries.line_1',
         ]
      },
      {
         company: 'Shell O Matic',
         position: 'CONSULTANT DÉVELOPPEUR / ANALYSTE',
         website: 'https://www.shellomatic.com/',
         date: '10/2018 - 01/2019',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.shellomatic.resumes.summary_condev_0',
                  'works.shellomatic.resumes.summary_condev_1',
               ],
               technologies: ['POO', 'Windev', 'Webdev', 'XML', 'C#']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.shellomatic.resumes.summary_orgmeth_0',
               ],
               technologies: ['Trello']
            }
         ],
         summaries: [
            'works.shellomatic.summaries.line_1',
         ]
      },
      {
         company: 'F-Menard',
         position: 'CONSULTANT DÉVELOPPEUR / ANALYSTE',
         website: 'https://fmenard.com/',
         date: '03/2018 - 10/2018',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.fmenard.resumes.summary_condev_0',
                  'works.fmenard.resumes.summary_condev_1',
                  'works.fmenard.resumes.summary_condev_2',
                  'works.fmenard.resumes.summary_condev_3',
               ],
               technologies: ['POO', 'Windev Mobile', 'SOAP']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.fmenard.resumes.summary_orgmeth_0',
               ],
               technologies: ['Redmine']
            }
         ],
         summaries: [
            'works.fmenard.summaries.line_1',
         ]
      },
      {
         company: 'CDMV',
         position: 'CONSULTANT DÉVELOPPEUR / ANALYSTE',
         website: 'https://www.cdmv.com/en/',
         date: '09/2017 - 10/2018',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.cdmv.resumes.summary_condev_0',
                  'works.cdmv.resumes.summary_condev_1',
               ],
               technologies: ['POO', 'Webdev', 'Oracle SQL']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.cdmv.resumes.summary_orgmeth_0',
               ],
               technologies: ['Redmine']
            }
         ],
         summaries: [
            'works.cdmv.summaries.line_1',
         ]
      },
      {
         company: 'GA',
         position: 'CONSULTANT DÉVELOPPEUR / ANALYSTE',
         website: 'https://www.ga.fr/',
         date: '09/2016 - 09/2017',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.ga.resumes.summary_condev_0',
                  'works.ga.resumes.summary_condev_1',
               ],
               technologies: ['POO', 'Webdev', 'Windev', 'Windev Mobile']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.ga.resumes.summary_orgmeth_0',
               ],
               technologies: ['Redmine']
            }
         ],
         summaries: [
            'works.ga.summaries.line_1',
         ]
      },
      {
         company: 'Avilon Consulting',
         position: 'CONSULTANT DÉVELOPPEUR / Technicien',
         website: 'https://www.avilon-consulting.com/',
         date: '02/2013 - 07/2016',
         resumes : [
            {
               name: 'condev',
               summaries :  [
                  'works.avilon.resumes.summary_condev_0',
                  'works.avilon.resumes.summary_condev_1',
                  'works.avilon.resumes.summary_condev_2',
                  'works.avilon.resumes.summary_condev_3',
                  'works.avilon.resumes.summary_condev_4',
               ],
               technologies: ['Webdev', 'Windev', 'Windev Mobile', 'VMWare', 'Windows Server']
            },
            {
               name: 'orgmeth',
               summaries : [
                  'works.avilon.resumes.summary_orgmeth_0',
               ],
               technologies: ['Redmine']
            }
         ],
         summaries: [
            'works.avilon.summaries.line_1',
         ]
      },
   ]);
   return { works };
});
