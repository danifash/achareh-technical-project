<template>
  <div class="DoneSection">
    <img src="../../assets/icons/done.svg" alt="" />
    <h2>اطلاعات شما با موفقیت ثبت شد</h2>
    <button @click="router.replace('/')">مشاهده اطلاعات</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// plugins and composable variables -------------------------------
const router = useRouter();

// props ----------------------------------------------------------

// data variables -------------------------------------------------

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.DoneSection {
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 120px;
    margin-bottom: 13px;
    width: 37px;
  }
  h2 {
    margin-bottom: 40px;
  }
  button {
    width: 100%;
    border: 1px solid var(--color-primary);
    background: transparent;
    color: var(--color-primary);
  }
}

@media screen and (min-width: 900px) {
  .DoneSection {
    button {
      width: auto;
      padding: 12px 60px;
    }
  }
}
</style>
