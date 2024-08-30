<script setup lang="ts">
//👉 - Dummy Interface Data
interface Items {
  id: number;
  code: string;
  name: string;
  category: string;
  variant: string;
  weight: number;
  volume: number;
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
    code: "01/01/203020",
    name: "PANTENE ANTI LEPEK",
    category: "HAIRCARE",
    variant: "Anti Lepek",
    weight: 10,
    volume: 20,
    isactive: true,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 2,
    code: "01/01/203020",
    name: "PANTENE ANTI LEPEK 2",
    category: "HAIRCARE",
    variant: "Anti Lepek",
    weight: 10,
    volume: 20,
    isactive: false,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
]);

// 👉 Headers
const headers = [
  { title: "Code", key: "code" },
  { title: "Name", key: "name" },
  { title: "Category", key: "category" },
  { title: "Variant", key: "variant" },
  { title: "Weight", key: "weight" },
  { title: "Volume", key: "volume" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Update data table options

// 👉 search filters
const category = [
  { title: "category 1", value: "category 1" },
  { title: "category 2", value: "category 2" },
  { title: "category 3", value: "channel 3" },
];
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Product</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select Category -->
          <VCol cols="12" sm="6">
            <AppSelect
              placeholder="Select Category"
              :items="category"
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
            <AppTextField placeholder="Search Product" />
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
      >
      </VDataTable>
    </VCard>
  </section>
</template>
