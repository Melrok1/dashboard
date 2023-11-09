import { defineStore } from "pinia";

export const NoteType = Object.freeze({
  NOTE: "note",
  LIST: "list",
});

export const useNoteStore = defineStore("note", {
  state: () => ({
    notes: JSON.parse(localStorage.getItem("notes")) || [],
  }),
  actions: {
    addNote(note) {
      this.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
});
