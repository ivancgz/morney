<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
  .nav-wrapper{
    flex-direction: column;
    display: flex;
    height: 100vh;
  }
  .content{
    flex-grow: 1;
    overflow: auto;
  }
</style>