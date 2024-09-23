<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

interface Emit {
  (e: "update:isDrawerOpen", value: boolean): void;
}

interface Props {
  isDrawerOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit("update:isDrawerOpen", false);

  nextTick(() => {
    refForm.value?.reset();
    refForm.value?.resetValidation();
  });
};

// 👉 Header Time
const times = Array.from({ length: 36 }, (v, i) => {
  const hour = Math.floor(i / 2) + 6;
  const minute = i % 2 === 0 ? "00" : "30";
  const formattedHour = hour < 10 ? `0${hour}` : hour;
  return `${formattedHour}:${minute}`;
});
</script>

<template>
  <VNavigationDrawer
    temporary
    location="bottom"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    style="max-height: 575px"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Timeline View"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <PerfectScrollbar>
          <div class="timeline-wrapper">
            <!-- 👉 Header -->
            <div class="timeline-header">
              <div class="timeline-header-vehicle"><span>Vehicle</span></div>
              <div class="timeline-header-time">
                <div
                  class="timeline-header-time-clock"
                  v-for="(time, index) in times"
                  :key="index"
                >
                  <span> {{ time }}</span>
                </div>
              </div>
            </div>
            <!-- 👉 Line -->
            <div class="timeline-line">
              <!-- 👉 List -->
              <div class="timeline-line-list">
                <div class="timeline-line-vehicle">
                  <div class="timeline-line-vehicle-card">
                    <div class="d-flex gap-1 align-center">
                      <VChip
                        variant="text"
                        color="success"
                        class="px-0 py-0 text-body-1 font-weight-bold"
                        >V1</VChip
                      >
                      <span
                        class="text-body-2"
                        style="
                          text-overflow: ellipsis;
                          width: 180px;
                          white-space: nowrap;
                          overflow: hidden;
                        "
                        >• Gran Max • John Doe</span
                      >
                    </div>
                    <h4>12 Drop Points</h4>
                    <div class="d-flex gap-2 align-center w-100">
                      <div class="d-flex gap-1 align-center">
                        <VIcon
                          icon="tabler-package"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-secondary" style="white-space: nowrap"
                          >Vol 124%</span
                        >
                      </div>
                      <div class="d-flex gap-1 align-center">
                        <VIcon
                          icon="tabler-scale-outline"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-secondary" style="white-space: nowrap"
                          >31 Kg</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-line-time">
                  <!-- 👉 Kotak2 pada timeline background -->
                  <div class="timeline-line-time-divider">
                    <span
                      v-for="index in times.length"
                      :key="index"
                      class="timeline-line-time-divider-square"
                    ></span>
                  </div>
                  <!-- 👉 List Route - Width diatur dg Inline style -->
                  <div
                    class="timeline-line-time-route"
                    style="width: 680px; left: 400px"
                  >
                    <!-- 👉 Border -->
                    <div
                      class="timeline-line-time-route-border"
                      style="background-color: #28c76f"
                    ></div>
                    <!-- 👉 Route -->
                    <div style="position: relative; height: 40px">
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 0"
                      >
                        <VIcon
                          icon="tabler-building-warehouse"
                          color="primary"
                          size="16"
                        />
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 102px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >1</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 150px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >2</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 200px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >3</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 248px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >4</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 348px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >5</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 400px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >6</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: unset; right: 0"
                      >
                        <VIcon
                          icon="tabler-building-warehouse"
                          color="primary"
                          size="16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="timeline-line-list">
                <div class="timeline-line-vehicle">
                  <div class="timeline-line-vehicle-card">
                    <div class="d-flex gap-1 align-center">
                      <VChip
                        variant="text"
                        color="success"
                        class="px-0 py-0 text-body-1 font-weight-bold"
                        >V1</VChip
                      >
                      <span
                        class="text-body-2"
                        style="
                          text-overflow: ellipsis;
                          width: 180px;
                          white-space: nowrap;
                          overflow: hidden;
                        "
                        >• Gran Max • John Doe</span
                      >
                    </div>
                    <h4>12 Drop Points</h4>
                    <div class="d-flex gap-2 align-center w-100">
                      <div class="d-flex gap-1 align-center">
                        <VIcon
                          icon="tabler-package"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-secondary" style="white-space: nowrap"
                          >Vol 124%</span
                        >
                      </div>
                      <div class="d-flex gap-1 align-center">
                        <VIcon
                          icon="tabler-scale-outline"
                          size="14"
                          color="secondary"
                        />
                        <span class="text-secondary" style="white-space: nowrap"
                          >31 Kg</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timeline-line-time">
                  <!-- 👉 Kotak2 pada timeline background -->
                  <div class="timeline-line-time-divider">
                    <span
                      v-for="index in times.length"
                      :key="index"
                      class="timeline-line-time-divider-square"
                    ></span>
                  </div>
                  <!-- 👉 List Route - Width diatur dg Inline style -->
                  <div
                    class="timeline-line-time-route"
                    style="width: 680px; left: 800px"
                  >
                    <!-- 👉 Border -->
                    <div
                      class="timeline-line-time-route-border"
                      style="background-color: #ff4c51"
                    ></div>
                    <!-- 👉 Route -->
                    <div style="position: relative; height: 40px">
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 0"
                      >
                        <VIcon
                          icon="tabler-building-warehouse"
                          color="primary"
                          size="16"
                        />
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 102px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >1</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 150px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >2</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 200px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >3</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 248px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >4</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 348px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >5</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: 400px"
                      >
                        <span class="text-body-2 font-500 text-secondary"
                          >6</span
                        >
                      </div>
                      <div
                        class="timeline-line-time-route-point"
                        style="width: 36px; left: unset; right: 0"
                      >
                        <VIcon
                          icon="tabler-building-warehouse"
                          color="primary"
                          size="16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
