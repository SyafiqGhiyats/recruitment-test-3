<template>
  <div class="w-full">
    <div class="input-box">
      <input
        type="text"
        ref="input"
        @input="onInput"
        @focus="inputFocused = true"
        @blur="inputFocused = false"
        class="input glass"
        placeholder="Search Country..."
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 input-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span class="h-6 w-6 input-icon input-icon--right" v-show="loading">
        <svg
          class="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </span>
    </div>
    <ul class="glass w-full overflow-x-hidden overflow-y-auto mt-2 max-h-72">
      <slot name="list" :items="items"></slot>
      <li
        v-for="(item, i) in items"
        :key="i"
        @click="select(i)"
        class="hover:bg-white text-lg cursor-pointer hover:bg-opacity-10 p-3"
      >
        {{ item }}
      </li>
      <li
        v-if="inputFocused"
        class="hover:bg-white text-lg cursor-pointer hover:bg-opacity-10 p-3"
      >
        No data available
      </li>
    </ul>
  </div>
</template>

<script>
import { debounce } from "lodash";
export default {
  name: "AutoComplete",
  model: { prop: "value", event: "input" },
  props: {
    value: String,
    loading: Boolean,
    items: Array,
  },
  data: () => ({
    inputFocused: false,
  }),
  methods: {
    onInput: debounce(function (e) {
      this.$emit("input", e.target.value);
    }, 500),
    select(item) {
      console.log(item);
    },
  },
  computed: {
    showNoData() {
      return this.$refs.input ? true : false;
    },
  },
};
</script>

<style>
</style>