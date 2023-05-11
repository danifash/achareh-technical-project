<template>
  <div class="RecordAddress">
    <InputSection v-if="section === 1" :address-data="addressData" />
    <MapSection v-if="section === 2" :address-data="addressData" />
    <div class="footer">
      <button @click="countinue" class="continue-btn">
        <img
          v-if="loading"
          src="../assets/icons/loading.svg"
          height="25"
          width="200"
          alt=""
        />
        <h2 v-else>ثبت و ادامه</h2>
      </button>
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
const loading: Ref<boolean> = ref(true);
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
  if (!checkErrors()) return;
  section.value = section.value + 1;
};

const checkErrors = () => {
  return (
    addressData.value.address.error === "" &&
    addressData.value.first_name.error === "" &&
    addressData.value.last_name.error === "" &&
    addressData.value.coordinate_phone_number.error === "" &&
    addressData.value.coordinate_mobile.error === ""
  );
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
