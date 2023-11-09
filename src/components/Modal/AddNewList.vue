<template>
  <div
    class="add-new-note-wrapper p-3 max-w-xl mx-auto rounded-lg shadow-border flex flex-col items-center justify-between"
  >
    <div class="new-note-inputs-wrapper flex flex-col">
      <input type="text" placeholder="new title..." />
      <input type="text" placeholder="new note..." />
    </div>

    <div class="new-note-buttons-wrapper">
      <button class="btn save-button">Save</button>
      <button class="btn close-button" @click="modalStore.closeModal()">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { useModalStore } from "@/stores/modalStore";

export default {
  computed: {
    modalStore() {
      return useModalStore();
    },
  },
};
</script>
