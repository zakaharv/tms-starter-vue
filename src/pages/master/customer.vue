<script setup lang="ts">
//👉 - Dummy Interface Data
interface Items {
  id: number;
  code: string;
  name: string;
  organization: string;
  city: string;
  channel: string;
  group: string;
  isdepot: boolean;
  isactive: boolean;
  phone: string;
  lat: string;
  long: string;
  address: string;
  open1: string;
  close1: string;
  open2: string;
  close2: string;
  servicetime: string;
  createdat: string;
  createdby: string;
  updatedat: string;
  updatedby: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    code: "48/BCPCLL",
    name: "Depo Cililin",
    organization: "Bandung",
    city: "Bandung",
    channel: "01/Wholesale",
    group: "Modern Trade",
    isdepot: true,
    isactive: true,
    phone: "081234567890",
    lat: "0.384300",
    long: "0.384300",
    address: "591 Joanne Lane, Wilmington, MA 01887",
    open1: "08:00",
    close1: "17:00",
    open2: "08:00",
    close2: "17:00",
    servicetime: "20",
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 2,
    code: "01/01/203021",
    name: "Toko Maju Jaya Abadi",
    organization: "Bandung",
    city: "Bandung",
    channel: "01/Wholesale",
    group: "Traditional Trade",
    isdepot: false,
    isactive: false,
    phone: "081234567890",
    lat: "0.384300",
    long: "0.384300",
    address: "591 Joanne Lane, Wilmington, MA 01887",
    open1: "08:00",
    close1: "17:00",
    open2: "08:00",
    close2: "17:00",
    servicetime: "20",
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
]);

// 👉 Headers
const headers = [
  { title: "", key: "data-table-expand" },
  { title: "Store Code", key: "code" },
  { title: "Store Name", key: "name" },
  { title: "Organization", key: "organization" },
  { title: "City", key: "city" },
  { title: "Channel", key: "channel" },
  { title: "Group", key: "group" },
  { title: "Depot?", key: "isdepot" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Update data table options

// 👉 search filters
const channels = [
  { title: "Channel 1", value: "channel 1" },
  { title: "Channel 2", value: "channel 2" },
  { title: "Channel 3", value: "channel 3" },
];

const city = [
  { title: "city 1", value: "city 1" },
  { title: "city 2", value: "city 2" },
  { title: "city 3", value: "city 3" },
];

const group = [
  { title: "Modern Trade", value: "modern" },
  { title: "Traditional Trade", value: "traditional" },
];

const depot = [
  { title: "Yes", value: "true" },
  { title: "No", value: "false" },
];

// 👉 Resolve isDepot
const resolveDepotVariant = (isdepot: boolean) => {
  if (isdepot === false) return { variant: "warning", icon: "tabler-x" };
  if (isdepot === true) return { variant: "success", icon: "tabler-check" };

  return { variant: "secondary", icon: "tabler-x" };
};
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Customer</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select Channel -->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Channel"
              :items="channels"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select City -->
          <VCol cols="12" sm="2">
            <AppSelect
              placeholder="Select City"
              :items="city"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Is Depot -->
          <VCol cols="12" sm="2">
            <AppSelect
              placeholder="Is Depot?"
              :items="depot"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Group -->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Group"
              :items="group"
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
            <AppTextField placeholder="Search Customer" />
          </div>
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
            <td :colspan="3" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Phone Number :</span>
                {{ slotProps.item.phone }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Latitude :</span>
                {{ slotProps.item.lat }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Longitude :</span>
                {{ slotProps.item.long }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Address :</span>
                {{ slotProps.item.address }}
              </p>
            </td>
            <td :colspan="3" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Open - Close 1 :</span>
                {{ slotProps.item.open1 }} -
                {{ slotProps.item.close1 }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Open - Close 2 :</span>
                {{ slotProps.item.open2 }} -
                {{ slotProps.item.close2 }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Service Time :</span>
                {{ slotProps.item.servicetime }}
              </p>
            </td>
            <td :colspan="3" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Created :</span>
                {{ slotProps.item.createdby }},
                {{ slotProps.item.createdat }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Updated :</span>
                {{ slotProps.item.updatedby }},
                {{ slotProps.item.updatedat }}
              </p>
            </td>
          </tr>
        </template>

        <!-- 👉 Is Depot -->
        <template #item.isdepot="{ item }">
          <VTooltip>
            <template #activator="{ props }">
              <VAvatar
                :size="28"
                v-bind="props"
                variant="tonal"
                :color="resolveDepotVariant(item.isdepot)?.variant"
              >
                <VIcon
                  :size="16"
                  :icon="resolveDepotVariant(item.isdepot)?.icon"
                />
              </VAvatar>
            </template>
            <p class="mb-0">
              {{ item.isdepot }}
            </p>
          </VTooltip>
        </template>
      </VDataTable>
    </VCard>
  </section>
</template>
