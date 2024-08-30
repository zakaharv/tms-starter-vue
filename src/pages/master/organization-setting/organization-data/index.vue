<script setup lang="ts">
import AddEditOrganizationDialog from "./AddEditOrganizationDialog.vue";

const isAddEditOrganizationDialogVisible = ref(false);

//👉 - Dummy Interface Data
interface Items {
  id: number;
  code: string;
  name: string;
  address: string;
  phone: string;
  open: string;
  close: string;
  long: string;
  lat: string;
  parent: string;
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
    code: "BCP-BDG",
    name: "BANDUNG",
    address: "Jl. Raya Taman No",
    phone: "081234567890",
    open: "08:00",
    close: "17:00",
    long: "-1.0932032",
    lat: "-2.0932032",
    parent: "Parent 1",
    isactive: true,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
  {
    id: 2,
    code: "BCP-BDG",
    name: "SURABAYA",
    address: "Jl. Raya Taman No",
    phone: "081234567890",
    open: "08:00",
    close: "17:00",
    long: "-1.0932032",
    lat: "-2.0932032",
    parent: "Parent 2",
    isactive: false,
    createdat: "20/20/2024",
    createdby: "Admin",
    updatedat: "20/20/2024",
    updatedby: "Admin",
  },
]);

// 👉 Headers
const headers = [
  { title: "Actions", key: "actions", sortable: false },
  { title: "Code", key: "code" },
  { title: "Name", key: "name" },
  { title: "Address", key: "address" },
  { title: "Phone Number", key: "phone" },
  { title: "Open - Close", key: "open" },
  { title: "Long, Lat", key: "long" },
  { title: "Parent", key: "parent" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>Organization</VCardTitle>
      </VCardItem>

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
            <AppTextField placeholder="Search Organization" />
          </div>
          <VBtn
            color="primary"
            prepend-icon="tabler-plus"
            @click="isAddEditOrganizationDialogVisible = true"
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
            @click="isAddEditOrganizationDialogVisible = true"
          >
            <VIcon size="24" icon="tabler-edit" />

            <VTooltip location="top" activator="parent"> Edit </VTooltip>
          </VBtn>
        </template>

        <!-- 👉 Open - Close -->
        <template #item.open="{ item }">
          {{ item.open }} - {{ item.close }}
        </template>

        <!-- 👉 Long, lat -->
        <template #item.long="{ item }">
          {{ item.long }}, {{ item.lat }}
        </template>
      </VDataTable>
    </VCard>

    <!-- add/edit Modal -->
    <AddEditOrganizationDialog
      v-model:isDialogVisible="isAddEditOrganizationDialogVisible"
    />
  </section>
</template>
