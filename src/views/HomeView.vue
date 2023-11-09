<template>
  <main>

    <div class="inputs-wrapper">
      <add-input-interface v-if="modalStore.currentModal === null"/>
      <add-new-note v-else-if="modalStore.currentModal === 'addNewNoteModal'" />
      <add-new-list v-else-if="modalStore.currentModal === 'addNewListModal'" />
    </div>

    <div class="notes-wrapper">
      <div v-for="note in notes" :key="note.id">
        <span>{{ note.id }}</span>
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>

  </main>
</template>

<script>

import AddNewNote from '@/components/Modal/AddNewNote.vue';
import AddNewList from '@/components/Modal/AddNewList.vue';
import AddInputInterface from '@/components/BaseInterface/AddInputInterface.vue';
import { useModalStore } from '@/stores/modalStore';
import { useNoteStore } from '@/stores/noteStore';

export default {
  components: {
    AddNewNote,
    AddInputInterface,
    AddNewList
  },
  data() {
    return {

    }
  },
  computed: {
    modalStore() {
      return useModalStore();
    },
    notes() {
      const noteStore = useNoteStore();
      return noteStore.notes;
    }
  },
}

</script>