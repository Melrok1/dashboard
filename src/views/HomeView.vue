<template>
  <main>
    <add-input-interface v-if="modalStore.currentModal === null"/>
    <add-new-note v-else-if="modalStore.currentModal === 'addNewNoteModal'" />
    <add-new-list v-else-if="modalStore.currentModal === 'addNewListModal'" />
  </main>
</template>

<script>

import AddNewNote from '@/components/Modal/AddNewNote.vue';
import AddNewList from '@/components/Modal/AddNewList.vue';
import AddInputInterface from '@/components/BaseInterface/AddInputInterface.vue';
import { useModalStore } from '@/stores/modalStore';

export default {
  components: {
    AddNewNote,
    AddInputInterface,
    AddNewList
  },
  data() {
    return {
      showmodal: true
    }
  },
  computed: {
    modalStore() {
      return useModalStore();
    },
  },
}

</script>