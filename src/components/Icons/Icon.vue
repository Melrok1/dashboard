<template>
  <div 
    class="icon-wrapper relative" 
    @mouseenter="hoverDisplayTooltip = true"
		@mouseleave="hoverDisplayTooltip = false"
    v-bind="$attrs"
  >
    <svg :class="`icon-lg icon-${name}`">
      <use :href="iconUrl"/>
    </svg>

    <tooltip :visible="showTooltip && hoverDisplayTooltip">
      <span>{{ tooltipText }}</span>
    </tooltip>

  </div>
</template>

<script>
import icons from '@/assets/svg/icons.svg';
import Tooltip from '@/components/BaseInterface/Tooltip.vue';

export default {
  name: "Icon",
  components: {
    Tooltip
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    showTooltip: {
      type: Boolean,
      required: true,
    },
    tooltipText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hoverDisplayTooltip: false
    }
  },
  computed: {
    iconUrl() {
      return `${icons}#icon-${this.name}`;
    }
  }
};
</script>

<style scoped>
 .icon-wrapper {
  transition: all 0.5s;
 }
</style>
