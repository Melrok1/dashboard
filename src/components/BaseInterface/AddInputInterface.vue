<template>
  <div class="create-note-wrapper max-w-xl max-h-14 mx-auto rounded-lg shadow-border flex items-center justify-between">
    <input
      class="p-3 rounded-lg"
      type="text"
      placeholder="Add note..."
      readonly
    />
    <icon name="checkbox" :showTooltip="true" :tooltipText="tooltipText" class="mr-3" />
  </div>
</template>

<script>
import Icon from '@/components/Icons/Icon.vue';

export default {
  components: {
    Icon
  },
  data() {
    return {
			tooltipText: 'Create new list',
    }
  },
}

</script>