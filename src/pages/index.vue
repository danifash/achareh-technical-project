<template>
  <div class="RecordAddress">
    <InputSection />
    <div class="footer">
      <button class="continue-btn">ثبت و ادامه</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";

import InputSection from "../components/RecordAddress/InputSection.vue";
// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
// const addressData = ref({ name: "" });

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.footer {
  padding: 16px;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  button {
    width: 100%;
  }
}

@media screen and (min-width: 900px) {
  .footer {
    button {
      width: auto;
      padding: 12px 60px;
    }
  }
}
</style>
