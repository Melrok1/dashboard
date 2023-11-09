<template>
  <div 
		v-if="visible"
		class="tooltip-wrapper"
	>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
	data() {
		return {
			
		}
	}
};
</script>

<style scoped>
.tooltip-wrapper {
  position: absolute;
	top: 100%;
	left: 0;
	transform: translateY(3px);
	width: max-content;
	max-width: 25rem;	
  z-index: 100;
  padding: 5px;
  color: #fff;
  background-color: #333;
  border-radius: 4px;
  font-size: 14px;
	opacity: 0.75;
}
</style>