<template>
  <div class="RecordAddress">
    <InputSection v-if="section === 1" :address-data="addressData" />
    <MapSection v-if="section === 2" />
    <div class="footer">
      <button @click="countinue" class="continue-btn">ثبت و ادامه</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";

import { IAddressFields } from "../constants/types";
import InputSection from "../components/RecordAddress/InputSection.vue";
import MapSection from "../components/RecordAddress/MapSection.vue";
// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const section: Ref<number> = ref(1);
const addressData: Ref<IAddressFields> = ref({
  address: { value: "", error: "" },
  last_name: { value: "", error: "" },
  first_name: { value: "", error: "" },
  gender: { value: "male", error: "" },
  lat: { value: 0, error: "" },
  lng: { value: 0, error: "" },
  coordinate_mobile: { value: "", error: "" },
  coordinate_phone_number: { value: "", error: "" },
});

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------
const countinue = () => {
  section.value = section.value + 1;
};

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
