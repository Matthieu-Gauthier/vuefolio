<template>
   <div>
      <cover />
      <v-container class="py-5 px-0"
                   fluid>
         <!--         <resumes />-->
         <skills />
         <experiences />
      </v-container>
   </div>
</template>
<script>
import { defineComponent } from 'vue';

import Cover from '../components/form/Cover.vue';
import Resumes from '../components/form/Resumes/index.vue';
import Experiences from '../components/form/Experiences/index.vue';
import Skills from '../components/form/Skills/index.vue';

export default defineComponent({
   name: 'HomeView',

   components: {
      Cover,
      Resumes,
      Experiences,
      Skills
   },
});
</script>
