<template>
  <div class="RecordAddressMapSection">
    <h2>انتخاب آدرس</h2>
    <l-map
      :zoom="6"
      :style="{ height: 'calc(100vh - 240px)', width: '100%' }"
      :center="center"
      :use-global-leaflet="false"
      class="map"
    >
      <div class="map__header">
        <h3 class="text-desktop">موقعیت مورد نظر خود را روی نقشه مشخص کنید</h3>
        <h3 class="text-mobile">انتخاب موقعیت</h3>
      </div>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker
        :lat-lng="deviceLatLng"
        draggable
        @moveend="setLatLng"
      ></l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import type { PropType, Ref } from "vue";
import { ref } from "vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import { IAddressFields } from "../../constants/types";

// plugins and composable variables -------------------------------

// props ----------------------------------------------------------
const props = defineProps({
  addressData: {
    type: Object as PropType<IAddressFields>,
    required: true,
  },
});

// data variables -------------------------------------------------
const deviceLatLng: Ref<number[]> = ref([32.4279, 53.688]);
const center: Ref<number[]> = ref([32.4279, 53.688]);

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------
const setLatLng = (a: any) => {
  props.addressData.lat = a.target._latlng.lat;
  props.addressData.lng = a.target._latlng.lng;
};

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.RecordAddressMapSection {
  padding: 0;
  h2 {
    display: none;
  }
  .map {
    position: relative;

    &__header {
      padding: 9px 0;
      position: absolute;
      z-index: 999;
      top: 0;
      right: 0;
      width: 100%;
      background: white;
      display: flex;
      justify-content: center;
      .text-desktop {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .RecordAddressMapSection {
    padding: 22px 15%;
  }
  h2 {
    display: block !important;
    margin-bottom: 20px;
  }

  .map {
    filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));

    &__header {
      display: block !important;
      padding: 10px 48px !important;
      .text-desktop {
        display: block !important;
      }
      .text-mobile {
        display: none;
      }
    }
  }
}
</style>
