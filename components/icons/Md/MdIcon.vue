<template>
  <component :is="name"></component>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
</style>