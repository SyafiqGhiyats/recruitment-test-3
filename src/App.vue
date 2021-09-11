<template>
  <div class="app p-3 min-h-screen">
    <div
      v-for="i in 20"
      :key="i"
      class="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        class="glass absolute"
        :style="{
          left: `${genNumber(40, 1440)}px`,
          top: `${genNumber(20, 1107)}px`,
          width: `${genNumber(70, 200)}px`,
          height: `${genNumber(70, 200)}px`,
          transform: `rotate(${genNumber(0, 360)}deg)`,
          opacity: `${genNumber(10, 70)}%`,
        }"
      ></div>
    </div>
    <!-- <div class=""> -->
    <router-view />
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  methods: {
    genNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
<style lang="scss">
.app {
  background-image: linear-gradient(to top left, #cc208e 0%, #6713d2 100%);
}
</style>
