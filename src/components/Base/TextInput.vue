<template>
  <div class="TextInput">
    <h3 v-if="title">{{ title }}</h3>
    <div class="relative">
      <input
        v-model="inputValue"
        :id="inputName"
        :name="inputName"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :style="{
          borderColor: errorMessage
            ? 'var(--color-secondary)'
            : 'var(--color-border)',
        }"
        autoComplete="off"
      />
      <img
        v-if="inputValue.length !== 0"
        src="../../assets/icons/close.svg"
        alt=""
        class="close_icon"
        @click="inputValue = ''"
      />
    </div>
    <h4 v-if="errorMessage" class="error_message">
      {{ errorMessage }}
    </h4>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  errorMessage: String,
  succeedMessage: String,
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  initValue: {
    type: String,
    default: "",
  },
  inputName: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onValueChange"]);

const inputValue = ref<string>(props.initValue);

watch(
  () => inputValue.value,
  (val) => {
    emits("onValueChange", val);
  }
);
</script>

<style scoped lang="scss">
.TextInput {
  h3 {
    margin-bottom: 9px;
  }

  & input {
    width: 100%;
    padding: 12px 10px;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    &:focus {
      border-color: var(--color-primary) !important;
    }
    &::placeholder {
      color: var(--color-border);
      font-weight: 400;
    }
  }

  .error_message {
    color: var(--color-secondary);
    margin-top: 2px;
  }
  .close_icon {
    position: absolute;
    left: 12px;
    top: 15px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
