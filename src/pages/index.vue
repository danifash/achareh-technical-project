<template>
  <div class="RecordAddress">
    <TextInput
      title="نام"
      type="text"
      placeholder="مثال: محمد"
      error-message="این فیلد الزامی است"
      @on-value-change="changeName"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import TextInput from "../components/Base/TextInput.vue";
// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const addressData = ref({ name: "" });

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------
const changeName = (name: string) => {
  addressData.value.name = name;
  console.log(name);
};

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.RecordAddress {
  padding: 20px;
}
</style>
