<template>
  <main>
    <div class="create-note-wrapper max-w-xl max-h-14 mx-auto rounded-lg shadow-border flex items-center justify-between">
      <input class="p-3 rounded-lg" type="text" placeholder="Add note..." readonly>
      <icon name="checkbox" class="mr-3"/>
    </div>
  </main>
</template>

<script>

import Icon from '../components/icons/Icon.vue'

export default {
  components: {
    Icon
  }
}

</script>