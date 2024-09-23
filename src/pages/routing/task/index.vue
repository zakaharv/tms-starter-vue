<script setup lang="ts">
import CreateRouteDialog from "@/views/pages/routing/CreateRouteDialog.vue";

const date = ref("");

const isCreateAppVisible = ref(false);
</script>

<template>
  <!-- Header -->
  <div
    class="d-flex flex-wrap justify-start justify-sm-space-between gap-y-4 gap-x-6 mb-6"
  >
    <div class="d-flex flex-column justify-center">
      <h4 class="text-h4 font-weight-medium">Task</h4>
      <div class="text-body-1">Optimizing Delivery Paths</div>
    </div>

    <div class="d-flex gap-4 align-center flex-wrap">
      <AppDateTimePicker
        v-model="date"
        placeholder="Select date"
        prepend-inner-icon="tabler-calendar-event"
        style="width: 240px"
      />
      <VBtn color="primary" @click="isCreateAppVisible = !isCreateAppVisible">
        <VIcon start icon="tabler-plus" /> Create New Task
      </VBtn>
    </div>
  </div>
  <!-- List -->
  <VCard
    class="logistics-card-statistics cursor-pointer"
    style="border-block-end-color: #fb6e1e"
  >
    <VCardText>
      <div class="d-flex align-center gap-x-4 mb-1">
        <VAvatar variant="tonal" color="primary" rounded>
          <VIcon icon="tabler-route" size="28" />
        </VAvatar>
        <h4 class="text-h4">
          Task Plan
          <span class="text-secondary"> • Senin, 22 Agustus 2024</span>
        </h4>
      </div>
      <div
        class="d-flex align-center mt-5 w-100"
        style="justify-content: space-between"
      >
        <div class="d-flex align-center gap-4">
          <div class="d-flex align-center">
            <i
              class="tabler tabler-truck"
              style="color: #444151; font-size: 24px"
            ></i>
            <div
              class="text-body-1 font-weight-medium ms-2"
              style="color: #444151"
            >
              24 <span class="text-secondary">Vehicles</span>
            </div>
          </div>
          <div class="d-flex align-center">
            <i
              class="tabler tabler-file-invoice"
              style="color: #444151; font-size: 24px"
            ></i>
            <div
              class="text-body-1 font-weight-medium ms-2"
              style="color: #444151"
            >
              30 <span class="text-secondary">Invoices</span>
            </div>
          </div>
          <div class="d-flex align-center">
            <i
              class="tabler tabler-building-store"
              style="color: #444151; font-size: 24px"
            ></i>
            <div
              class="text-body-1 font-weight-medium ms-2"
              style="color: #444151"
            >
              24/99 <span class="text-secondary">- Visited/Target</span>
            </div>
          </div>
        </div>
        <VBtn color="secondary" variant="outlined"> View Detail Task </VBtn>
      </div>
    </VCardText>
  </VCard>

  <CreateRouteDialog v-model:is-dialog-visible="isCreateAppVisible" />
</template>

<style lang="scss" scoped>
@use "@core/scss/base/mixins" as mixins;

.logistics-card-statistics {
  border-block-end-style: solid;
  border-block-end-width: 2px;

  &:hover {
    border-block-end-width: 3px;
    margin-block-end: -1px;

    @include mixins.elevation(8);

    transition: all 0.1s ease-out;
  }
}

.skin--bordered {
  .logistics-card-statistics {
    border-block-end-width: 2px;

    &:hover {
      border-block-end-width: 3px;
      margin-block-end: -2px;
      transition: all 0.1s ease-out;
    }
  }
}
</style>
