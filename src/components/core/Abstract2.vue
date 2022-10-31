<template>
   <v-img :src="image"
          class="abstract-2"
          height="711"
          width="778"/>

</template>

<script>
import { defineComponent } from 'vue';

import image from '../../assets/abstract2.png';

export default defineComponent({
   name: 'CoreAbstract2',
   setup() {
      return { image };
   }
});
</script>

<style lang="sass">
.abstract-2
  position: absolute !important
  right: 0
  top: -128px
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
