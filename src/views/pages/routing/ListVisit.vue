<script setup lang="ts">
import StoreDialog from "./dialogs/StoreDialog.vue";

const visitData = ref([
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "visited",
    task: 123,
  },
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "unvisited",
    task: 456,
  },
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "outstanding",
    task: 789,
  },
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "null",
    task: 123,
  },
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "visited",
    task: 567,
  },
  {
    store: "TOKO RIZKY GANG BAHAGIA NO 25",
    storeCode: "48/01/060573",
    time: "11:29",
    status: "visited",
    task: 123,
  },
]);

const isStoreDialogVisible = ref(false);
</script>

<template>
  <VTimeline
    side="end"
    align="start"
    line-inset="8"
    truncate-line="start"
    density="compact"
    class="v-timeline--variant-outlined"
  >
    <!-- SECTION Timeline Item: Flight -->
    <VTimelineItem
      dot-color="rgb(var(--v-theme-surface))"
      size="x-small"
      v-for="(data, id) in visitData"
      :key="id"
    >
      <template #icon>
        <VIcon
          icon="tabler-map-pin"
          :color="
            data.status === 'visited'
              ? 'success'
              : data.status === 'unvisited'
              ? 'error'
              : data.status === 'outstanding'
              ? 'warning'
              : 'secondary'
          "
        />
      </template>
      <!-- 👉 Header -->
      <div
        class="d-flex justify-space-between align-center gap-2 flex-wrap mb-1"
      >
        <span
          class="app-timeline-title text-uppercase"
          :class="
            data.status === 'visited'
              ? 'text-success'
              : data.status === 'unvisited'
              ? 'text-error'
              : data.status === 'outstanding'
              ? 'text-warning'
              : 'text-secondary'
          "
        >
          {{ data.status }}
        </span>
        <span class="app-timeline-meta">{{ data.time }}</span>
      </div>
      <div class="app-timeline-title">{{ data.store }}</div>
      <div class="app-timeline-text mb-1">
        {{ data.storeCode }} • Task #{{ data.task }}
      </div>

      <VBtn
        variant="outlined"
        color="info"
        size="small"
        @click="isStoreDialogVisible = true"
        >View Detail</VBtn
      >
    </VTimelineItem>
    <!-- !SECTION -->
  </VTimeline>

  <StoreDialog v-model:isDialogVisible="isStoreDialogVisible" />
</template>

<style></style>
