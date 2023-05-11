<template>
  <div class="Layout">
    <!-------- Header -------->
    <BaseHeader />
    <!-------- Main content -------->
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "./modules/BaseHeader.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: calc(100vh - 74px);
  margin-top: 74px;
}
</style>
