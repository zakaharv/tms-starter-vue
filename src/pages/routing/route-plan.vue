<script setup lang="ts">
import TopBarRouting from "@/views/pages/routing/TopBarRouting.vue";
import WrapperRouting from "@/views/pages/routing/WrapperRouting.vue";

definePage({
  meta: {
    layout: "blank",
    public: true,
  },
});
</script>

<template>
  <div class="routing-layout">
    <TopBarRouting />
    <WrapperRouting />
  </div>
</template>

<style></style>
