<template>
  <div class="AddressesPage">
    <h2>آدرس ها و مشخصات</h2>
    <div class="loading-container" v-if="loading">
      <img src="../assets/icons/loading2.svg" alt="" />
    </div>
    <template v-else>
      <template v-if="isDesktopMode">
        <div class="input-card" v-for="item in addressData" :key="item.id">
          <div class="input-card__item">
            <h3>نام</h3>
            <h2>{{ item.first_name }}</h2>
          </div>
          <div class="input-card__item">
            <h3>نام خانوادگی</h3>
            <h2>{{ item.last_name }}</h2>
          </div>
          <div class="input-card__item">
            <h3>شماره تلفن همراه</h3>
            <h2>{{ item.coordinate_mobile }}</h2>
          </div>
          <div class="input-card__item">
            <h3>شماره تلفن ثابت</h3>
            <h2>{{ item.coordinate_phone_number }}</h2>
          </div>
          <div class="input-card__item">
            <h3>جنسیت</h3>
            <h2>{{ item.gender === "male" ? "آقا" : "خانم" }}</h2>
          </div>
          <div class="input-card__item">
            <h3>آدرس</h3>
            <h2>{{ item.address }}</h2>
          </div>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { onMounted, ref } from "vue";

import { getAddresses } from "../api/address";
import { IAddressData } from "../constants/types";
// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------
const addressData: Ref<IAddressData[]> = ref([]);
const loading: Ref<boolean> = ref(false);
const isDesktopMode: Ref<boolean> = ref(false);

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------
onMounted(async () => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) isDesktopMode.value = true;
    else isDesktopMode.value = false;
  });
  await getApiAddresses();
});

// computed methods -----------------------------------------------

// internal events ------------------------------------------------
const getApiAddresses = async () => {
  loading.value = true;
  await getAddresses()
    .then((res) => {
      addressData.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });
};

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.AddressesPage {
  padding: 18px 5%;
  padding-bottom: 100px;
  & > h2 {
    margin-bottom: 8px;
  }

  .loading-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 300px);
  }

  img {
    width: 100px;
    margin: auto;
  }
  .input-card {
    background: var(--color-white);
    padding: 16px;
    border: 1px solid #edf0f2;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    display: grid;
    grid-template-columns: 25% 25% 50%;
    margin-bottom: 20px;
    & > h2 {
      margin-bottom: 16px;
    }
    &__item {
      h3 {
        color: var(--color-gray);
      }
      h2 {
        margin-top: 14px;
        margin-bottom: 35px;
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .AddressesPage {
    padding: 32px 15%;
    .input-card {
      padding: 32px 40px;
    }
  }
}
</style>
