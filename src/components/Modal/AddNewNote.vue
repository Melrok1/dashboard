<template>
  <div
    class="add-new-note-wrapper p-3 max-w-xl mx-auto rounded-lg shadow-border flex flex-col items-center justify-between"
  >
    <div class="new-note-inputs-wrapper w-full flex flex-col">
      <input type="text" placeholder="Title" class="text-lg" />
			<textarea 
				ref="textarea"
				rows="1"
				placeholder="Add note..."
				autofocus
				class="mt-4 text-base font-light"
				@input="autoResize" 
			></textarea>
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
	methods: {
    autoResize(event) {
      const target = event.target;
      target.style.height = 'auto';
      target.style.height = `${target.scrollHeight}px`;
    }
  },
	mounted() {
    this.$nextTick(() => {
      this.$refs.textarea.focus();
    });
  },
};
</script>
