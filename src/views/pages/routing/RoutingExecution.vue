<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import AssignRouteDialog from "./dialogs/AssignRouteDialog.vue";
import InfoDetailDrawer from "./dialogs/InfoDetailDrawer.vue";
import TimelineDrawer from "./dialogs/TimelineDrawer.vue";

//👉 - Dummy Interface Data
interface Items {
  id: number;
  tripId: string;
  vehicle: string;
  vehicleNumber: string;
  driver: string;
  sales: string;
  vol: number;
  kg: number;
  km: number;
  dps: number;
  total: string;
  lock: boolean;
  status: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    tripId: "V1",
    vehicle: "GM",
    vehicleNumber: "AG1234YT",
    driver: "Jhon Buffed",
    sales: "480 jt",
    vol: 295,
    kg: 7476,
    km: 125,
    dps: 11,
    total: "9h 10m",
    lock: true,
    status: "new",
  },
  {
    id: 2,
    tripId: "V2",
    vehicle: "Motorcycle",
    vehicleNumber: "AG1234YT",
    driver: "Jhon Buffed",
    sales: "480 rb",
    vol: 295,
    kg: 7476,
    km: 125,
    dps: 11,
    total: "9h 10m",
    lock: false,
    status: "confirmed",
  },
]);

// 👉 Headers
const headers = [
  { title: "Vehicle", key: "vehicle" },
  { title: "Sales", key: "sales" },
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
const isTimelineDrawerVisible = ref(false);
</script>

<template>
  <!-- 👉 Toolbar -->
  <div class="routing-execution-toolbar">
    <VRow>
      <VCol cols="12" md="7">
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
      <VCol cols="12" md="5">
        <VBtn color="success" class="w-100">
          <VIcon start icon="tabler-route" />
          Re-Optimze Route
          <VTooltip activator="parent" location="top" open-delay="500">
            Re-Optimize Route
          </VTooltip>
        </VBtn>
      </VCol>
    </VRow>
    <VRow class="mt-1">
      <VCol cols="12" md="7">
        <div class="d-flex align-center gap-2">
          <div class="text-body-1 text-white">15 Selected</div>
          <VBtn
            color="info"
            variant="outlined"
            @click="isTimelineDrawerVisible = true"
          >
            Timeline
            <VTooltip activator="parent" location="top" open-delay="500">
              View Timeline Selected
            </VTooltip>
          </VBtn>
        </div>
      </VCol>
      <VCol cols="12" md="5">
        <div
          class="d-flex align-center gap-2"
          style="justify-content: flex-end"
        >
          <VBtn color="success" variant="tonal" class="flex-1-0">
            <VIcon start icon="tabler-lock" />
            Lock All
            <VTooltip activator="parent" location="top" open-delay="500">
              Lock All Vehicle's Route
            </VTooltip>
          </VBtn>
          <VBtn color="warning" variant="tonal">
            <VIcon start icon="tabler-device-floppy" />
            Export
            <VTooltip activator="parent" location="top" open-delay="500">
              Export All Task
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
      class="text-wrap text-body-2 routing-table overflow-auto"
      show-select
      hide-default-footer
      height="calc(100svh - 202px)"
      density="compact"
      fixed-header
    >
      <!-- 👉 Vehicle -->
      <template #item.vehicle="{ item }">
        <div class="vehicle-set">
          <div class="trip-title">
            <VChip
              class="text-body-1 font-weight-bold px-0"
              color="success"
              variant="text"
              >V1</VChip
            >
            <span class="trip-status">
              <span>{{ item.status }}</span>
            </span>
          </div>
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
        <div class="body-text-2 vehicle-info">
          <span> {{ item.vehicle }} </span> • {{ item.vehicleNumber }}
        </div>
        <div class="body-text-2">{{ item.driver }}</div>
      </template>

      <!-- 👉 Sales -->
      <template #item.sales="{ item }"> Rp{{ item.sales }} </template>

      <!-- 👉 Total -->
      <template #item.total="{ item }">
        <div class="text-body-2">{{ item.total }} • {{ item.km }} km</div>
        <div class="d-flex align-items-center gap-1">
          <VChip size="small" color="error" variant="outlined">
            {{ item.vol }} Vol
          </VChip>
          <VChip size="small" color="warning" variant="outlined">
            {{ item.kg }} Kg
          </VChip>
          <VChip
            size="small"
            color="success"
            variant="outlined"
            @click="isInfoDetailDrawerVisible = true"
          >
            {{ item.vol }} Point
            <VTooltip open-delay="500" location="top" activator="parent">
              <span>View Detail</span>
            </VTooltip>
          </VChip>
        </div>
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

  <!-- 👉 Info Detail Drawer -->
  <InfoDetailDrawer v-model:isDrawerOpen="isInfoDetailDrawerVisible" />

  <!-- 👉 Timeline Drawer -->
  <TimelineDrawer v-model:isDrawerOpen="isTimelineDrawerVisible" />
</template>

<style lang="scss" scoped>
.trip {
  &-title {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &-status {
    display: flex;
    min-width: 24px;
    max-width: 72px;
    height: 16px;

    padding: 0px 6px;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #e6e5e7;

    span {
      width: 100%;
      color: #444151;
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      text-transform: uppercase; /* 160% */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.vehicle-info {
  span {
    max-width: 72px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
