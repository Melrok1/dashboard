<template>
  <main>
    <add-input-interface v-if="showmodal"/>
    <add-new-note v-else />
  </main>
</template>

<script>

import AddNewNote from '@/components/Modal/AddNewNote.vue';
import AddInputInterface from '@/components/BaseInterface/AddInputInterface.vue';

export default {
  components: {
    AddNewNote,
    AddInputInterface
  },
  data() {
    return {
      showmodal: true
    }
  },
}

</script>