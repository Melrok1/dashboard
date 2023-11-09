<template>
  <div
    class="add-new-note-wrapper p-3 max-w-xl mx-auto rounded-lg shadow-border flex flex-col items-center justify-between"
  >
    <div class="new-note-inputs-wrapper w-full flex flex-col">
      <input v-model="title" type="text" placeholder="Title" class="text-lg" />
      <textarea
        ref="textarea"
				v-model="content"
        rows="1"
        placeholder="Add note..."
        class="mt-4 text-base font-light"
        @input="autoResize"
      ></textarea>
    </div>

    <div class="new-note-buttons-wrapper">
      <button 
				class="btn save-button" 
				@click="saveNote"
			>
				Save
			</button>
      <button 
				class="btn close-button" 
				@click="modalStore.closeModal()"
			>
        Close
      </button>
    </div>

  </div>
</template>

<script>
import { useModalStore } from "@/stores/modalStore";
import { useNoteStore, NoteType } from "@/stores/noteStore"; 

export default {

	data() {
		return {
			title: '',
			content: ''
		}
	},

  computed: {
    modalStore() {
      return useModalStore();
    },
		noteStore() {
      return useNoteStore();
    }
  },

  methods: {
		saveNote() {
      const note = {
        title: this.title,
        content: this.content,
				noteType: NoteType.NOTE,
        date: new Date().toLocaleString('en-US', {
					year: 'numeric', 
					month: '2-digit', 
					day: '2-digit',
					hour: '2-digit',
					minute: '2-digit',
					second: '2-digit',
					hour12: false
      	})
      };
      this.noteStore.addNote(note);
      this.modalStore.closeModal();

      this.title = '';
      this.content = '';
    },
    autoResize(event) {
      const target = event.target;
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.$refs.textarea.focus();
    });
  },
};
</script>
