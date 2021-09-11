<template>
  <div class="p-2 sm:p-16 xl:p-20 relative">
    <button
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
    </button>
    <h1 class="text-5xl font-bold mt-6">Indonesia</h1>
    <span
      class="
        inline-block
        rounded-full
        bg-green-400
        px-2
        py-1
        text-xs
        font-bold
        mr-3
      "
    >
      AU
    </span>
    <div
      class="mx-4 mt-10 flex justify-between flex-wrap flex-col md:flex-row"
      style="flex-basis: 50%"
    >
      <div class="w-full wrapper lg:1/2">
        <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
          <p class="text-lg">LatLong</p>
          <h2 class="text-5xl text-purple-800 mt-3">-27.0,133.0</h2>
        </div>
      </div>
      <div class="w-full wrapper lg:1/2 mt-4 md:mt-0">
        <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
          <p>Capital: <span class="font-semibold">Canberra</span></p>
          <p>Region: Oceania</p>
          <p>Capital: Australia and new Zealand</p>
        </div>
      </div>
      <div class="glass p-3 mt-4">
        <p>Calling Code</p>
        <h1 class="text-5xl font-bold my-2 text-purple-700">62</h1>
        <p>
          <span class="text-purple-800">1 country</span>
          with this calling code
        </p>
      </div>
      <div class="w-full wrapper lg:1/2 mt-4">
        <div class="p-3 lg:p-5 glass w-full lg:w-4/5">
          <p>Currency</p>
          <h1 class="text-5xl font-bold my-2 text-purple-700">IDR</h1>
          <p>
            <span class="text-purple-800">1 country</span>
            with this currency
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@screen md {
  .wrapper {
    width: 48%;
  }
}
</style>