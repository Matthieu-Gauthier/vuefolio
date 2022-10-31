<template>
   <v-img :src="image"
          class="abstract-3"
          height="100%"
          width="100%"/>

</template>

<script>
import { defineComponent } from 'vue';

import image from '../../assets/abstract3.png';

export default defineComponent({
   name: 'CoreAbstract3',
   setup() {
      return { image };
   }
});
</script>

<style lang="sass">
.abstract-3
  position: absolute !important
  left: 0
  right: 0
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
