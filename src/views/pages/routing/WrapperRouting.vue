<script setup lang="ts">
import RoutingExecution from "@/views/pages/routing/RoutingExecution.vue";
import RoutingMap from "@/views/pages/routing/RoutingMap.vue";
</script>

<template>
  <div class="routing-wrapper">
    <div class="routing-map" style="position: relative">
      <RoutingMap />
    </div>
    <div class="routing-execution">
      <RoutingExecution />
    </div>
  </div>
</template>

<style></style>
