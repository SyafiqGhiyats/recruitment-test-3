<template>
  <div class="center min-h-screen p-3">
    <div class="title">
      <h1 class="text-3xl">Country</h1>
      <div class="glass absolute"></div>
    </div>

    <auto-complete v-model="text"></auto-complete>
  </div>
</template>

<script>
import AutoComplete from "../components/AutoComplete.vue";
export default {
  name: "Home",
  components: { AutoComplete },
  data: () => ({
    text: "",
  }),
};
</script>
