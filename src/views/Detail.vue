<template>
  <div class="p-2 sm:p-16 xl:p-20 relative">
    <div v-if="loading">
      <div class="fixed inset-0 center bg-black bg-opacity-50">
        <span class="animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-14 w-14"
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
    </div>
    <div v-else-if="error">
      <div class="center fixed inset-0">
        <h1 class="text-9xl">404</h1>
        <router-link
          to="/"
          class="
            glass
            inline-flex
            font-bold
            justify-center
            items-center
            py-2
            px-4
            rounded-md
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Homepage
        </router-link>
      </div>
    </div>
    <div v-else>
      <router-link
        to="/"
        class="
          bg-purple-600
          inline-flex
          hover:bg-purple-500
          font-bold
          justify-center
          items-center
          py-2
          px-4
          rounded-md
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Homepage
      </router-link>
      <h1 class="text-5xl font-bold mt-6 flex items-center">
        {{ country.name }}

        <img :src="country.flag" class="h-12 w-12 ml-2" alt="" />
      </h1>
      <span
        v-for="(altSpelling, i) in country.altSpellings"
        :key="i"
        class="
          inline-block
          rounded-full
          bg-green-400
          px-2
          py-1
          text-xs
          font-bold
          mr-2
        "
      >
        {{ altSpelling }}
      </span>
      <div
        class="mx-4 mt-10 flex justify-between flex-wrap flex-col md:flex-row"
        style="flex-basis: 50%"
      >
        <div class="w-full wrapper lg:1/2">
          <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
            <p class="text-lg">LatLong</p>
            <h2
              :title="`${country.latlng[0]}, ${country.latlng[1]}`"
              class="text-5xl text-purple-800 mt-3"
            >
              {{ `${country.latlng[0]}, ${country.latlng[1]}` }}
            </h2>
          </div>
        </div>
        <div class="w-full wrapper lg:1/2 mt-4 md:mt-0">
          <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
            <p>
              Capital: <span class="font-semibold">{{ country.capital }}</span>
            </p>
            <p>
              Region: <span class="font-semibold">{{ country.region }}</span>
            </p>
            <p>
              Subregion:
              <span class="font-semibold">{{ country.subregion }}</span>
            </p>
          </div>
        </div>
        <div class="glass p-3 mt-4">
          <p>Calling Code</p>
          <h1 class="text-5xl font-bold my-2 text-purple-700">
            {{ country.callingCodes[0] }}
          </h1>
          <div class="flex flex-row">
            <v-popover
              placement="auto"
              trigger="hover"
              popover-class="bg-purple-700 rounded-lg px-2 py-1"
            >
              <span class="text-purple-800 cursor-pointer tooltip-target"
                >{{ country.callcodeCountries.length }} country</span
              >
              <template slot="popover">
                <ul class="bg-purple-700 pl-4 max-h-40 overflow-y-scroll">
                  <li
                    class="list-disc"
                    v-for="callcode in country.callcodeCountries"
                    :key="callcode"
                  >
                    {{ callcode }}
                  </li>
                </ul>
              </template>
            </v-popover>
            <span class="ml-1.5"> with this calling code </span>
          </div>
        </div>
        <div class="w-full wrapper lg:1/2 mt-4">
          <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
            <p>Currency</p>
            <h1 class="text-5xl font-bold my-2 text-purple-700">
              {{ country.currencies[0].code }}
            </h1>
            <div class="flex flex-row">
              <v-popover
                placement="auto"
                trigger="hover"
                popover-class="bg-purple-700 rounded-lg px-2 py-1"
              >
                <span class="text-purple-800 cursor-pointer tooltip-target"
                  >{{ country.currencyCountries.length }} country</span
                >
                <template slot="popover">
                  <ul class="bg-purple-700 pl-4 max-h-40 overflow-y-scroll">
                    <li
                      class="list-disc"
                      v-for="callcode in country.currencyCountries"
                      :key="callcode"
                    >
                      {{ callcode }}
                    </li>
                  </ul>
                </template>
              </v-popover>
              <span class="ml-1.5"> with this currency </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Detail",
  data: () => ({
    error: false,
    loading: true,
  }),
  methods: {
    ...mapActions(["getCountryData"]),
  },
  computed: {
    ...mapState(["country"]),
  },
  async created() {
    const countryName = this.$route.params.country;
    try {
      await this.getCountryData(countryName);
    } catch (error) {
      this.error = true;
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style lang="scss">
@screen md {
  .wrapper {
    width: 48%;
  }
}
.tooltip {
  max-width: 150px;
  & .wrapper {
    width: 100%;
  }
}
</style>