<script setup lang="ts">
//👉 - Dummy Interface Data
interface Items {
  id: number;
  code: string;
  name: string;
  address: string;
  long: string;
  lat: string;
  phone: string;
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
    code: "BCP",
    name: "Borwita Citra Prima",
    address: "Jl. Raya Taman No",
    long: "1.2038923",
    lat: "1.2038923",
    phone: "081234567890",
    isactive: true,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 2,
    code: "BCA",
    name: "Borwita Citra Arima",
    address: "Jl. Raya Taman No",
    long: "1.2038923",
    lat: "1.2038923",
    phone: "081234567890",
    isactive: false,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 3,
    code: "BCR",
    name: "Borwita Citra Rrima",
    address: "Jl. Raya Taman No",
    long: "1.2038923",
    lat: "1.2038923",
    phone: "081234567890",
    isactive: true,
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
  { title: "Address", key: "address" },
  { title: "Geotag", key: "long" },
  { title: "Phone Number", key: "phone" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Update data table options
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Company</VCardTitle>
      </VCardItem>

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
        <!-- 👉 Long, lat -->
        <template #item.long="{ item }">
          {{ item.long }}, {{ item.lat }}
        </template>
      </VDataTable>
    </VCard>
  </section>
</template>
