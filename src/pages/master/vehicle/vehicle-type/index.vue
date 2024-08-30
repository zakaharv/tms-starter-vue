<script setup lang="ts">
import AddEditVehicleTypeDialog from "./AddEditVehicleTypeDialog.vue";

const isAddEditVehicleTypeDialogVisible = ref(false);

//👉 - Dummy Interface Data
interface Items {
  id: number;
  name: string;
  maxVolume: number;
  maxWeight: number;
  wheel: number;
  temperature: string;
  fuel: string;
  isactive: boolean;
  createdat: string;
  createdby: string;
  updatedat: string;
  updatedby: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    name: "Truk Bak",
    maxVolume: 1000,
    maxWeight: 2000,
    wheel: 4,
    temperature: "Ambient",
    fuel: "Pertalite",
    isactive: true,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 2,
    name: "Van Tertutup",
    maxVolume: 1000,
    maxWeight: 2000,
    wheel: 4,
    temperature: "Ambient",
    fuel: "Pertalite",
    isactive: true,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
]);

// 👉 Headers
const headers = [
  { title: "Actions", key: "actions", sortable: false },
  { title: "Name", key: "name" },
  { title: "Max Volume", key: "maxVolume" },
  { title: "Max Weight", key: "maxWeight" },
  { title: "Wheel", key: "wheel" },
  { title: "Temperature", key: "temperature" },
  { title: "Fuel", key: "fuel" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Filter
const temperature = [
  { title: "Ambience", value: "Ambience" },
  { title: "Cool", value: "Cool" },
  { title: "Hot", value: "Hot" },
];

const fuel = [
  { title: "Pertalite", value: "Pertalite" },
  { title: "Bio Solar", value: "Bio Solar" },
];
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Vehicle Type</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select Temperature-->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Temperature"
              :items="temperature"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Fuel -->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Fuel"
              :items="fuel"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Wheel -->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Fuel"
              :items="[2, 4, 6, 8]"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Apply Button -->
          <VCol cols="12" sm="2">
            <div class="d-flex align-items-center gap-2">
              <VBtn variant="outlined" color="info"> Apply </VBtn>
              <VBtn variant="text" color="error"> Reset </VBtn>
            </div>
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect
            :model-value="itemsPerPage"
            :items="[
              { value: 10, title: '10' },
              { value: 25, title: '25' },
              { value: 50, title: '50' },
              { value: 100, title: '100' },
              { value: -1, title: 'All' },
            ]"
            style="inline-size: 6.25rem"
            @update:model-value="itemsPerPage = parseInt($event, 10)"
          />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem">
            <AppTextField placeholder="Search Vehicle Type" />
          </div>
          <VBtn
            color="primary"
            prepend-icon="tabler-plus"
            @click="isAddEditVehicleTypeDialogVisible = true"
          >
            Add Data
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <VDataTable
        :items="items"
        key="items.id"
        v-model:items-per-page="itemsPerPage"
        v-model:model-value="selectedRows"
        v-model:page="page"
        item-value="id"
        :headers="headers"
        class="text-no-wrap"
      >
        <!-- 👉 Action -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            color="info"
            variant="text"
            @click="isAddEditVehicleTypeDialogVisible = true"
          >
            <VIcon size="24" icon="tabler-edit" />

            <VTooltip location="top" activator="parent"> Edit </VTooltip>
          </VBtn>
        </template>

        <!-- 👉 Status -->
        <template #item.isactive="{ item }">
          <VChip
            :color="resolveStatusVariant(item.isactive)?.color"
            class="font-weight-medium"
            size="small"
          >
            {{ resolveStatusVariant(item.isactive)?.text }}
          </VChip>
        </template>

        <!-- 👉 Created -->
        <template #item.createdat="{ item }">
          {{ item.createdby }}, {{ item.createdat }}
        </template>

        <!-- 👉 Updated -->
        <template #item.updatedat="{ item }">
          {{ item.updatedby }}, {{ item.updatedat }}
        </template>
      </VDataTable>
    </VCard>

    <!-- add/edit Modal -->
    <AddEditVehicleTypeDialog
      v-model:isDialogVisible="isAddEditVehicleTypeDialogVisible"
    />
  </section>
</template>
