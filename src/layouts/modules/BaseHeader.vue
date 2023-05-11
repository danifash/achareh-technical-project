<template>
  <div class="BaseHeader">
    <img src="../../assets/icons/achare-icon.svg" alt="" />
    <ul>
      <li v-for="item in routes" :key="item.id">
        <router-link
          :class="{ active: activeMenu === item.enName }"
          :to="item.path"
          >{{ item.faName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { Ref } from "vue";
import { useRouter } from "vue-router";

import { ROUTES, Route } from "../../constants/routers";

// plugins and composable variables -------------------------------
const router = useRouter();

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const activeMenu: Ref<string> = ref("");
const routes: Ref<Route[]> = ref(ROUTES);

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------
onMounted(() => {
  activeMenu.value = String(
    router.currentRoute.value.matched[
      router.currentRoute.value.matched.length - 1
    ].name
  );
});

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
watch(
  () => router.currentRoute.value,
  (val) => {
    activeMenu.value = String(val.name);
  }
);
</script>

<style scoped lang="scss">
.BaseHeader {
  padding: 0 5%;
  position: fixed;
  top: 0;
  left: 0;
  height: 74px;
  width: 100%;
  z-index: 999;
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);

  & ul {
    list-style: none;
    display: flex;
    gap: 21px;
  }
}

.active {
  color: var(--color-text) !important;
}
</style>
