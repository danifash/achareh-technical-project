<template>
  <div class="Layout">
    <!-------- Header -------->
    <BaseHeader />
    <!-------- Main content -------->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "./modules/BaseHeader.vue";
</script>
