<template>
  <div
      v-if="visible"
      class="modal"
      style="z-index:1;"
      tabindex="-1"
      role="dialog"
      data-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-scrollable" role="document" :class="modalClass">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ modalTitle }}
          </h5>
        </div>
        <div class="modal-body">
          <slot name="modalBody" />
        </div>
        <div class="modal-footer">
          <slot name="modalFooter" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',

  props: {
    modalTitle: {
      type: String,
      default: 'Delete',
    },

    show: {
      type: Boolean,
      default: false
    },

    modalClass: {
      type: String,
      default: '',
    },

  },

  data: (self = this) => ({
    visible: self.show,
  }),

  watch: {
    visible(val) {
      this.$emit('update:show', val);
    },

    show(val) {
      this.visible = val;
    }
  },
}
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.4);
  display: table;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
