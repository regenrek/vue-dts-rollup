<template>
  <div
    id="burger"
    class="menu-button menu-toggle md:hidden burger"
    :class="{ 'active': active }"
    v-on="$listeners"
  >
    <slot>
      <button type="button" class="relative block z-999 border-0 cursor-pointer focus:outline-none" title="Menu">
        <span class="burger-bar--1" />
        <span class="burger-bar--2" />
        <span class="burger-bar--3" />
      </button>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'NjBurger',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
})
</script>
<style>
</style>
