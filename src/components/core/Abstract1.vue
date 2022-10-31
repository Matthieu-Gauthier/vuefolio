<template>
   <v-img :src="image"
          class="abstract-1"
          height="528"
          width="613"/>

</template>

<script>
import { defineComponent } from 'vue';

import image from '../../assets/abstract1.png';

export default defineComponent({
   name: 'CoreAbstract1',
   setup() {
      return { image };
   }
});
</script>

<style lang="sass">
.abstract-1
  position: absolute !important
  left: -48px
  top: -48px
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
