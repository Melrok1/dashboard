<template>
  <div class="icon-wrapper" v-bind="$attrs">
    <svg :class="`icon-lg icon-${name}`">
      <use :href="iconUrl"/>
    </svg>
  </div>
</template>

<script>
import icons from '@/assets/svg/icons.svg';

export default {
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    iconUrl() {
      return `${icons}#icon-${this.name}`;
    }
  }
};
</script>

<style scoped>

</style>
