<template>
   <v-img :src="image"
          class="abstract-4"
          width="100%"/>
</template>

<script>
import { defineComponent } from 'vue';

import image from '../../assets/abstract4.png';

export default defineComponent({
   name: 'CoreAbstract4',
   setup() {
      return { image };
   }
});
</script>

<style lang="sass">
.abstract-4
   position: absolute !important
   left: 0
   right: 0
   top: 50%
   z-index: 0 !important

   ~ *
      z-index: 1 !important
</style>
