import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isModalOpen: false,
    currentModal: null,
  }),
  actions: {
    openModal(modalName) {
      this.currentModal = modalName;
      this.isModalOpen = true;
    },
    closeModal() {
      this.currentModal = null;
      this.isModalOpen = false;
    },
  },
});
