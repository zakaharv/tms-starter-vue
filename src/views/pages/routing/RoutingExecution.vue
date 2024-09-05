<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import AssignRouteDialog from "./dialogs/AssignRouteDialog.vue";
import InfoDetailDrawer from "./dialogs/InfoDetailDrawer.vue";

//👉 - Dummy Interface Data
interface Items {
  id: number;
  tripId: string;
  vehicle: string;
  sales: number;
  vol: number;
  kg: number;
  dps: number;
  total: string;
  lock: boolean;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    tripId: "V1",
    vehicle: "Gran max",
    sales: 480969974,
    vol: 295,
    kg: 7476,
    dps: 11,
    total: "9h 10m",
    lock: true,
  },
  {
    id: 2,
    tripId: "V2",
    vehicle: "Motorcycle",
    sales: 480969974,
    vol: 295,
    kg: 7476,
    dps: 11,
    total: "9h 10m",
    lock: false,
  },
]);

// 👉 Headers
const headers = [
  { title: "Vehicle", key: "vehicle" },
  { title: "Sales", key: "sales" },
  { title: "Vol", key: "vol" },
  { title: "Kg", key: "kg" },
  { title: "DPS", key: "dps" },
  { title: "Total", key: "total" },
  { title: "#", key: "lock" },
];

// 👉 Resolve isDepot
const resolveLockedVariant = (lock: boolean) => {
  if (lock === false)
    return { variant: "error", icon: "tabler-lock-open", title: "Open" };
  if (lock === true)
    return { variant: "secondary", icon: "tabler-lock", title: "Locked" };

  return { variant: "secondary", icon: "tabler-x" };
};

const isAssignRouteDialogVisible = ref(false);
const isInfoDetailDrawerVisible = ref(false);
</script>

<template>
  <!-- 👉 Toolbar -->
  <div class="routing-execution-toolbar">
    <VRow>
      <VCol cols="6">
        <div class="d-flex align-center gap-1">
          <VBtn color="white" variant="text">
            <VIcon start icon="tabler-arrow-back-up" />
            Undo
          </VBtn>
          <div
            style="background-color: #5f5f5f; width: 1px; height: 15px"
          ></div>
          <VBtn color="white" variant="text">
            <VIcon start icon="tabler-arrow-forward-up" />
            Redo
          </VBtn>
        </div>
      </VCol>
      <VCol cols="6" class="text-end">
        <VBtn color="success" min-width="220px">
          <VIcon start icon="tabler-lock" />
          Lock All
          <VTooltip activator="parent" location="top" open-delay="500">
            Lock All Vehicle's Route
          </VTooltip>
        </VBtn>
      </VCol>
    </VRow>
    <VRow class="mt-2">
      <VCol cols="6">
        <div class="d-flex align-center gap-2">
          <div class="text-body-1 text-white">15 Selected</div>
          <VBtn color="info" variant="outlined">
            Timeline
            <VTooltip activator="parent" location="top" open-delay="500">
              View Timeline Selected
            </VTooltip>
          </VBtn>
        </div>
      </VCol>
      <VCol cols="6">
        <div
          class="d-flex align-center gap-2"
          style="justify-content: flex-end"
        >
          <VBtn color="warning" variant="tonal">
            <VIcon start icon="tabler-route" />
            Reroute
            <VTooltip activator="parent" location="top" open-delay="500">
              Re-Optimize Route
            </VTooltip>
          </VBtn>
          <VBtn color="warning">
            <VIcon start icon="tabler-device-floppy" />
            Save
            <VTooltip activator="parent" location="top" open-delay="500">
              Save Progress
            </VTooltip>
          </VBtn>
        </div>
      </VCol>
    </VRow>
  </div>
  <!-- 👉 Table -->
  <PerfectScrollbar>
    <VDataTable
      :items="items"
      key="items.id"
      item-value="id"
      :headers="headers"
      class="text-wrap text-body-2 routing-table"
      show-select
      hide-default-footer
      height="calc(100svh - 202px)"
      density="compact"
      fixed-header
    >
      <!-- 👉 Vehicle -->
      <template #item.vehicle="{ item }">
        <div class="vehicle-set">
          <VChip
            class="text-body-1 font-weight-bold px-0"
            color="success"
            variant="text"
            >V1</VChip
          >
          <VBtn
            color="secondary"
            variant="text"
            size="30"
            rounded
            @click="isAssignRouteDialogVisible = true"
          >
            <VIcon icon="tabler-settings" />
            <VTooltip open-delay="500" location="top" activator="parent">
              <span>Assign Driver</span>
            </VTooltip>
          </VBtn>
        </div>
        <div class="body-text-2">{{ item.vehicle }}</div>
      </template>

      <!-- 👉 Sales -->
      <template #item.sales="{ item }"> Rp{{ item.sales }} </template>

      <!-- 👉 DPS -->
      <template #item.dps="{ item }">
        <span class="link-underline" @click="isInfoDetailDrawerVisible = true"
          >{{ item.dps }}
          <VTooltip open-delay="500" location="top" activator="parent">
            <span>View Detail</span>
          </VTooltip></span
        >
      </template>

      <!-- 👉 Locked -->
      <template #item.lock="{ item }">
        <VTooltip>
          <template #activator="{ props }">
            <VBtn
              size="32"
              v-bind="props"
              variant="tonal"
              :color="resolveLockedVariant(item.lock)?.variant"
              rounded
            >
              <VIcon :size="16" :icon="resolveLockedVariant(item.lock)?.icon" />
            </VBtn>
          </template>
          <p class="mb-0">
            {{ resolveLockedVariant(item.lock)?.title }}
          </p>
        </VTooltip>
      </template>
    </VDataTable>
  </PerfectScrollbar>

  <!-- 👉 Modal Assign Route -->
  <AssignRouteDialog v-model:isDialogVisible="isAssignRouteDialogVisible" />

  <InfoDetailDrawer v-model:isDrawerOpen="isInfoDetailDrawerVisible" />
</template>

<style></style>
