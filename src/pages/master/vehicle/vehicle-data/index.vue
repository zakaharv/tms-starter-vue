<script setup lang="ts">
import AddEditVehicleDataDialog from "./AddEditVehicleDataDialog.vue";

const isAddEditVehicleDataDialogVisible = ref(false);

//👉 - Dummy Interface Data
interface Items {
  id: number;
  licensePlate: string;
  organization: string;
  type: string;
  leave: string;
  return: string;
  isAsset: boolean;
  isactive: boolean;
  kir: string;
  kirEnd: string;
  stnk: string;
  stnkEnd: string;
  vendorName: string;
  vendorPrice: number;
  vendorEnd: string;
  createdat: string;
  createdby: string;
  updatedat: string;
  updatedby: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 456745,
    licensePlate: "AG1234DA",
    organization: "Bandung",
    type: "Truk Bak",
    leave: "09:00",
    return: "17:00",
    isAsset: true,
    isactive: true,
    kir: "2234132123",
    kirEnd: "22/02/2022",
    stnk: "1241223123",
    stnkEnd: "22/02/2024",
    vendorName: "PT Vendor Jaya",
    vendorPrice: 9000000,
    vendorEnd: "20/20/2024",
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 342137,
    licensePlate: "AB1234DA",
    organization: "Bandung",
    type: "Van",
    leave: "09:00",
    return: "17:00",
    isAsset: false,
    isactive: false,
    kir: "2234132123",
    kirEnd: "22/02/2022",
    stnk: "1241223123",
    stnkEnd: "22/02/2024",
    vendorName: "PT Vendor Jaya",
    vendorPrice: 9000000,
    vendorEnd: "20/20/2024",
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
]);

// 👉 Headers
const headers = [
  { title: "", key: "data-table-expand" },
  { title: "Actions", key: "actions", sortable: false },
  { title: "Vehicle No", key: "licensePlate" },
  { title: "Organization", key: "organization" },
  { title: "Type", key: "type" },
  { title: "Time to Leave", key: "leave" },
  { title: "Time to Return", key: "return" },
  { title: "Asset", key: "isAsset" },
  { title: "Status", key: "isactive" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Filter
const type = [
  { title: "type 1", value: "type 1" },
  { title: "type 2", value: "type 2" },
  { title: "type 3", value: "type 3" },
];

const asset = [
  { title: "Yes", value: "true" },
  { title: "No", value: "false" },
];

const status = [
  { title: "Active", value: "true" },
  { title: "Inactive", value: "false" },
];

// 👉 Resolve isAsset
const resolveAssetVariant = (isdepot: boolean) => {
  if (isdepot === false) return { variant: "warning", icon: "tabler-x" };
  if (isdepot === true) return { variant: "success", icon: "tabler-check" };

  return { variant: "secondary", icon: "tabler-x" };
};

// 👉 Resolve Status
const resolveStatusVariant = (isactive: boolean) => {
  if (isactive === true) return { color: "success", text: "Active" };
  else if (isactive === false) return { color: "error", text: "Inactive" };
};
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Vehicle Data</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select Type-->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Type"
              :items="type"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Asset-->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Is Asset"
              :items="asset"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Status -->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Status"
              :items="status"
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
            @click="isAddEditVehicleDataDialogVisible = true"
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
        expand-on-click
      >
        <!-- 👉 Expand -->
        <template #expanded-row="slotProps">
          <tr class="v-data-table__tr">
            <td :colspan="5" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">KIR :</span>
                {{ slotProps.item.kir }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">KIR End Date :</span>
                {{ slotProps.item.kirEnd }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">STNK :</span>
                {{ slotProps.item.stnk }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">STNK End Date :</span>
                {{ slotProps.item.stnkEnd }}
              </p>
            </td>
            <td :colspan="4" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Vendor Name :</span>
                {{ slotProps.item.vendorName }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Vendor Price :</span>
                {{ slotProps.item.vendorPrice }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Vendor End Date :</span>
                {{ slotProps.item.vendorEnd }}
              </p>
            </td>
          </tr>
        </template>

        <!-- 👉 Action -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            color="info"
            variant="text"
            @click="isAddEditVehicleDataDialogVisible = true"
          >
            <VIcon size="24" icon="tabler-edit" />

            <VTooltip location="top" activator="parent"> Edit </VTooltip>
          </VBtn>
        </template>

        <!-- 👉 Is Asset -->
        <template #item.isAsset="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="28"
                v-bind="props"
                variant="tonal"
                :color="resolveAssetVariant(item.isAsset)?.variant"
              >
                <VIcon
                  :size="16"
                  :icon="resolveAssetVariant(item.isAsset)?.icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.isAsset }}
            </p>
          </VTooltip>
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
    <AddEditVehicleDataDialog
      v-model:isDialogVisible="isAddEditVehicleDataDialogVisible"
    />
  </section>
</template>
