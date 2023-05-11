<template>
  <div class="RecordAddressMapSection">
    <l-map
      :zoom="6"
      :style="{ height: 'calc(100vh - 160px)', width: '100%' }"
      :center="center"
      :use-global-leaflet="false"
    >
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
