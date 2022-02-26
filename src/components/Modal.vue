<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modalDialog"
        id="exampleModal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header"> Your date </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <h3>{{ TaskDate }}</h3>
          </slot>
        </section>

        <footer class="modal-footer">
          <button
            type="button"
            class="btn-green"
            @click="close"
            aria-label="Close modal"
          >
            Close me!
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["TaskDate"],
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
