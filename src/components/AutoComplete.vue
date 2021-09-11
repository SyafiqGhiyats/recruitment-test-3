<template>
  <div class="w-full relative">
    <div class="input-box">
      <input
        type="text"
        ref="input"
        @input="onInput"
        @focus="inputFocused = true"
        @blur="blur"
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
    <ul
      v-if="inputFocused"
      class="
        glass
        w-full
        overflow-x-hidden
        absolute
        overflow-y-auto
        mt-2
        max-h-72
      "
    >
      <li
        v-for="(item, i) in countries"
        :key="i"
        class="hover:bg-white text-lg cursor-pointer hover:bg-opacity-10"
      >
        <router-link
          class="w-full h-full p-3 block"
          :to="`detail/${encodeURI(item)}`"
        >
          {{ item }}
        </router-link>
      </li>
      <li
        v-if="!countries.length"
        class="
          hover:bg-white
          text-lg
          transition
          cursor-pointer
          hover:bg-opacity-10
          p-3
        "
      >
        No data available
      </li>
    </ul>
  </div>
</template>

<script>
import { debounce } from "lodash";
import axios from "axios";
export default {
  name: "AutoComplete",
  props: {},
  data: () => ({
    loading: false,
    countries: [],
    inputFocused: false,
  }),
  methods: {
    blur() {
      setTimeout(() => {
        this.inputFocused = false;
      }, 300);
    },
    onInput: debounce(async function (e) {
      //eslint-disable-next-line
      const value = e.target.value;
      this.loading = true;
      try {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/name/${value}`
        );
        this.countries = [];
        data.forEach((country) => {
          this.countries.length < 5 && this.countries.push(country.name);
        });
      } catch {
        this.countries = [];
      } finally {
        this.loading = false;
      }
    }, 500),
  },
  computed: {
    showList() {
      return this.inputFocused;
    },
  },
};
</script>

<style>
</style>