<script setup lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import ListVisit from "../ListVisit.vue";

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

// 👉 Widget Data

const widgetData = ref([
  {
    title: "Total Store",
    value: "24",
    icon: "tabler-building-store",
    color: "warning",
  },
  {
    title: "Visited",
    value: "24",
    icon: "tabler-login",
    color: "success",
  },
  {
    title: "Unvisited",
    value: "24",
    icon: "tabler-logout",
    color: "error",
  },
]);
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="700"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Info Detail"
      @cancel="closeNavigationDrawer"
    />

    <VDivider />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VRow>
            <VCol cols="12">
              <div class="trip-detail">
                <div class="trip-wrapper">
                  <div class="body-text-1 font-weight-medium">
                    V1 • Motorcycle
                  </div>
                  <div class="body-text-1">22 August 2024</div>
                </div>
                <div class="trip-drive">
                  <h5>Ricky Smith</h5>
                  <div class="trip-drive-info">
                    <div class="trip-drive-info-list">
                      <VIcon icon="tabler-relation-one-to-many" />
                      <span class="text-body-1 font-weight-medium"
                        >L3123BCG</span
                      >
                    </div>
                    <span>•</span>
                    <div class="trip-drive-info-list">
                      <VIcon icon="tabler-scale-outline" />
                      <span class="text-body-1 font-weight-medium">31 Kg</span>
                    </div>
                    <span>•</span>
                    <div class="trip-drive-info-list">
                      <VIcon icon="tabler-temperature" />
                      <span class="text-body-1 font-weight-medium"
                        >Ambient</span
                      >
                    </div>
                  </div>
                </div>
                <div class="trip-status">
                  <div class="trip-status-time">
                    <VChip color="success">
                      Start : <span class="font-weight-bold">09:00</span>
                    </VChip>
                    <VChip color="error">
                      Close : <span class="font-weight-bold">19:00</span>
                    </VChip>
                  </div>
                  <div class="body-text-1">
                    NEW • <span class="text-success">ONLINE</span>
                  </div>
                </div>
                <!-- 👉 widgets -->
                <VCard class="mb-6">
                  <VCardText class="px-2 py-3">
                    <VRow>
                      <template v-for="(data, id) in widgetData" :key="id">
                        <VCol cols="12" sm="6" md="4" class="px-4 py-4">
                          <div
                            class="d-flex justify-space-between"
                            :class="
                              $vuetify.display.xs
                                ? id !== widgetData.length - 1
                                  ? 'border-b pb-4'
                                  : ''
                                : $vuetify.display.sm
                                ? id < widgetData.length / 2
                                  ? 'border-b pb-4'
                                  : ''
                                : ''
                            "
                          >
                            <div class="d-flex flex-column gap-y-1">
                              <h4 class="text-h4">
                                {{ data.value }}
                              </h4>
                              <div class="text-body-1 text-capitalize">
                                {{ data.title }}
                              </div>
                            </div>

                            <VAvatar
                              variant="tonal"
                              rounded
                              size="44"
                              :color="data.color"
                            >
                              <VIcon
                                :icon="data.icon"
                                :color="data.color"
                                size="28"
                                class="text-high-emphasis"
                              />
                            </VAvatar>
                          </div>
                        </VCol>
                        <VDivider
                          v-if="
                            $vuetify.display.mdAndUp
                              ? id !== widgetData.length - 1
                              : $vuetify.display.smAndUp
                              ? id % 2 === 0
                              : false
                          "
                          vertical
                          inset
                          length="92"
                        />
                      </template>
                    </VRow>
                  </VCardText>
                </VCard>
              </div>
            </VCol>
          </VRow>
          <VRow>
            <VCol cols="12">
              <ListVisit />
            </VCol>
          </VRow>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
