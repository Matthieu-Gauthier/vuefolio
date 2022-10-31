<template>
   <v-app>
      <core-drawer v-if="!mdAndDown" />

      <v-main>
         <router-view/>
      </v-main>
   </v-app>
</template>

<script>
import { useDisplay } from 'vuetify';
import { defineComponent } from 'vue';
import './styles';

import CoreDrawer from './components/core/Drawer.vue';

export default defineComponent({
   name: 'App',
   components: { CoreDrawer },
   setup() {
      const { mdAndDown } = useDisplay();
      return { mdAndDown };
   }
});
</script>
