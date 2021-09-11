<template>
  <div class="flex items-center pt-40 flex-col min-h-screen max-w-2xl mx-auto">
    <div class="title">
      <h1 class="text-5xl font-bold">Country</h1>
      <div class="glass absolute"></div>
    </div>

    <auto-complete></auto-complete>
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
