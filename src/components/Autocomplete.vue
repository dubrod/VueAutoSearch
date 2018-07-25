<template>
  <div class="auto-c-wrapper">
      <input v-model="$root.acvalue" placeholder="Quick Search" type="text" />
      <button v-if="$root.acvalue" v-on:click="$root.emptySearch()" class="auto-c-close">X</button>
  </div>
</template>

<script>
export default {
  name: 'auto-complete'
}
</script>
