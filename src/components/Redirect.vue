<template>
  <div id="redirect">
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push({ path: "/" });
  },
};
</script>

<style scoped>

</style>