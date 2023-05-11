<template>
  <div class="RecordAddressInputSection">
    <h2>ثبت آدرس</h2>
    <div class="input-card">
      <h2>لطفا مشخصات و آدرس خود را وارد کنید</h2>
      <div class="input-card__name_fileds">
        <TextInput
          title="نام"
          placeholder="مثال: محمد"
          type="text"
          input-name="first_name"
          class="first-filed"
        />
        <TextInput
          title="نام خانوادگی"
          placeholder="مثال: رضایی"
          type="text"
          input-name="last_name"
          class="first-filed"
        />
        <TextInput
          title="شماره تلفن همراه"
          placeholder="مثال: 091212345678"
          type="number"
          input-name="phone_number"
          class="first-filed"
        />
      </div>
      <div class="input-card__name_fileds address">
        <TextInput
          title="شماره تلفن ثبات (اختیاری)"
          placeholder="مثال: 0211234567"
          type="text"
          input-name="phone"
          class="first-filed"
        />
        <TextInput
          title="آدرس"
          type="text"
          input-name="address"
          class="second-filed"
        />
      </div>
      <div class="input-card__radio-group">
        <h3>جنسیت</h3>
        <div class="radio-group">
          <label>
            <input type="radio" name="gender" value="male" />
            خانم
          </label>

          <label>
            <input type="radio" name="gender" value="female" />
            آقا
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextInput from "../Base/TextInput.vue";

// plugins and composable variables -------------------------------

// props ----------------------------------------------------------

// data variables -------------------------------------------------

// emits events ---------------------------------------------------

// lifecycle hooks ------------------------------------------------

// computed methods -----------------------------------------------

// internal events ------------------------------------------------

// watchers -------------------------------------------------------
</script>

<style scoped lang="scss">
.RecordAddressInputSection {
  padding: 18px 5%;
  padding-bottom: 100px;
  & > h2 {
    margin-bottom: 8px;
  }
  .input-card {
    background: var(--color-white);
    padding: 16px;
    border: 1px solid #edf0f2;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    & > h2 {
      margin-bottom: 16px;
    }
    & .address {
      margin-top: 26px;
    }
    &__name_fileds {
      display: flex;
      flex-direction: column;
      gap: 26px;
    }
    &__radio-group {
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .radio-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        label {
          display: block;
          margin-right: 20px;
          font-size: 14px;
          input {
            accent-color: var(--color-primary);
            width: 16px;
            height: 16px;
            margin-top: 4px;
            border-color: white;
          }
        }
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .RecordAddressInputSection {
    padding: 32px 15%;
    .input-card {
      padding: 22px 48px;
      &__name_fileds {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        & .first-filed {
          width: 32%;
        }
        & .second-filed {
          width: 66%;
        }
      }
      &__radio-group {
        width: 35%;
      }
    }
  }
}
</style>
