<template>
  <div
    class="create-note-wrapper max-w-xl max-h-14 mx-auto rounded-lg shadow-border flex items-center justify-between"
  >
    <input
      class="p-3 rounded-lg text-base font-light"
      type="text"
      placeholder="Add note..."
      readonly
      @click="openModal('addNewNoteModal')"
    />
    <icon
      name="checkbox"
      class="mr-3"
      :showTooltip="true"
      :tooltipText="tooltipText"
      @click="openModal('addNewListModal')"
    />
  </div>
</template>

<script>

import Icon from "@/components/Icons/Icon.vue";
import { useModalStore } from "@/stores/modalStore";

export default {

  components: {
    Icon,
  },

  data() {
    return {
      tooltipText: "Create new list",
    };
  },

  computed: {
    modalStore() {
      return useModalStore();
    },
  },

  methods: {
    openModal(modalName) {
      this.modalStore.openModal(modalName);
    },
  },
};

</script>
