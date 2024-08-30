<script setup lang="ts">
import AddEditVehicleDataDialog from "./AddEditAdminDialog.vue";

const isAddEditAdminDialogVisible = ref(false);

//👉 - Dummy Interface Data
interface Items {
  id: number;
  name: string;
  employeeId: string;
  userName: string;
  city: string;
  isactive: boolean;
  address: string;
  email: string;
  phone: string;
  organization: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    name: "Rodger Struck",
    employeeId: "201928482939",
    userName: "rodger123",
    city: "Bandung",
    isactive: true,
    address: "Jl Raya Taman No 42",
    email: "r.struick@mail.com",
    phone: "081234567890",
    organization: "Bandung, Jakarta, Malang, Surabaya, Kediri, Jember, Palopo",
  },
  {
    id: 2,
    name: "Daniel Hamilton",
    employeeId: "201928482939",
    userName: "rodger123",
    city: "Bandung",
    isactive: false,
    address: "Jl Raya Taman No 42",
    email: "r.struick@mail.com",
    phone: "081234567890",
    organization: "Bandung, Jakarta, Malang, Surabaya, Kediri, Jember, Palopo",
  },
]);

// 👉 Headers
const headers = [
  { title: "", key: "data-table-expand" },
  { title: "Actions", key: "actions", sortable: false },
  { title: "Name", key: "name" },
  { title: "Employee ID", key: "employeeId" },
  { title: "Username", key: "userName" },
  { title: "City", key: "city" },
  { title: "Address", key: "address" },
  { title: "Email", key: "email" },
  { title: "Phone Number", key: "phone" },
];
// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

// Filter
const city = [
  { title: "city 1", value: "city 1" },
  { title: "city 2", value: "city 2" },
  { title: "city 3", value: "city 3" },
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
        <VCardTitle>Admin</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select City-->
          <VCol cols="12" sm="6">
            <AppSelect
              placeholder="Select City"
              :items="city"
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
            @click="isAddEditAdminDialogVisible = true"
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
            <td :colspan="headers.length" style="vertical-align: top">
              <p class="mb-1 text-muted">Organization</p>
              <p class="my-1">{{ slotProps.item.organization }}</p>
            </td>
          </tr>
        </template>

        <!-- 👉 Action -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            color="info"
            variant="text"
            @click="isAddEditAdminDialogVisible = true"
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
      v-model:isDialogVisible="isAddEditAdminDialogVisible"
    />
  </section>
</template>
