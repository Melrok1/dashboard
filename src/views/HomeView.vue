<template>
  <main>
    <add-input-interface v-if="showmodal"/>
    <add-new-note v-else />
  </main>
</template>

<script>

import Icon from '@/components/Icons/Icon.vue';
import AddNewNote from '@/components/Modal/AddNewNote.vue';
import AddInputInterface from '@/components/BaseInterface/AddInputInterface.vue';

export default {
  components: {
    Icon,
    AddNewNote,
    AddInputInterface
  },
  data() {
    return {
      showmodal: false
    }
  },
}

</script>