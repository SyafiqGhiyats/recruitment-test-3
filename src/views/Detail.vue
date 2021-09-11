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
      <div class="fixed inset-0 center pointer-events-none">
        <svg
          width="496"
          height="512"
          viewBox="0 0 496 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M248 8C111.03 8 0 119.03 0 256C0 392.97 111.03 504 248 504C384.97 504 496 392.97 496 256C496 119.03 384.97 8 248 8ZM408 223.5V230.43C408 236.3 404.68 241.67 399.43 244.29L384.04 251.99C381.596 253.213 378.872 253.768 376.144 253.597C373.417 253.427 370.783 252.538 368.51 251.02L350.3 238.88C348.336 237.572 346.099 236.729 343.759 236.415C341.42 236.101 339.04 236.325 336.8 237.07L334.15 237.95C324.45 241.18 320.49 252.74 326.16 261.25L339.4 281.11C342.27 285.42 347.11 288.01 352.29 288.01H360.5C369.06 288.01 376 294.95 376 303.51V314.85C376 318.2 374.91 321.47 372.9 324.15L354.16 349.13C352.74 351.03 351.77 353.23 351.33 355.56L347.03 378.39C346.41 381.68 344.74 384.68 342.27 386.95C332.793 395.628 324.399 405.419 317.27 416.11L304.24 435.66C301.706 439.461 298.272 442.578 294.244 444.735C290.217 446.891 285.719 448.019 281.15 448.02C270.64 448.02 261.03 442.08 256.33 432.68C250.851 421.723 247.999 409.641 248 397.39V367.5C248 358.94 241.06 352 232.5 352H206.62C192.13 352 178.24 346.24 167.99 336C157.748 325.753 151.993 311.858 151.99 297.37V283.31C151.99 266.12 160.09 249.93 173.84 239.61L201.42 218.92C210.877 211.828 222.379 207.993 234.2 207.99H235.09C243.57 207.99 251.94 209.96 259.52 213.76L274.24 221.12C277.92 222.96 282.17 223.26 286.07 221.96L333.38 206.19C339.71 204.08 343.98 198.16 343.98 191.49C343.98 182.93 337.04 175.99 328.48 175.99H318.39C314.28 175.99 310.34 174.36 307.43 171.45L300.51 164.53C299.071 163.09 297.362 161.948 295.482 161.169C293.601 160.39 291.586 159.99 289.55 159.99H199.5C190.94 159.99 184 153.05 184 144.49V140.09C184 132.98 188.84 126.78 195.74 125.05L210.19 121.44C213.93 120.5 217.19 118.21 219.33 115L227.41 102.89C230.28 98.58 235.12 95.99 240.3 95.99H264.51C273.07 95.99 280.01 89.05 280.01 80.49V58.79C359.23 71.63 422.86 131.02 441.93 208H423.5C414.94 208 408 214.94 408 223.5Z"
            fill="black"
            fill-opacity="0.05"
          />
        </svg>
      </div>
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
          <div class="p-3 lg:p-5 glass w-full overflow-x-auto lg:w-4/5">
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
                <ul class="bg-purple-700 pl-4 max-h-40 overflow-y-auto">
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
                  <ul class="bg-purple-700 pl-4 max-h-40 overflow-y-auto">
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