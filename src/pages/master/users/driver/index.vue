<script setup lang="ts">
import AddEditVehicleDataDialog from "./AddEditDriverDialog.vue";

const isAddEditDriverDialogVisible = ref(false);
const isForceLogoutDialogVisible = ref(false);

//👉 - Dummy Interface Data
interface Items {
  id: number;
  name: string;
  employeeId: string;
  userName: string;
  online: boolean;
  city: string;
  isactive: boolean;
  address: string;
  email: string;
  phone: string;
  simType: string;
  simNo: number;
  deviceID: string;
  lastLogin: string;
  lastLogout: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    name: "Rodger Struck",
    employeeId: "201928482939",
    userName: "rodger123",
    online: true,
    city: "Bandung",
    isactive: true,
    address: "Jl Raya Taman No 42",
    email: "r.struick@mail.com",
    phone: "081234567890",
    simType: "A",
    simNo: 1234567890,
    deviceID: "123124112",
    lastLogin: "22/02/2022 20:20",
    lastLogout: "22/02/2022 20:20",
  },
  {
    id: 2,
    name: "Daniel Hamilton",
    employeeId: "201928482939",
    userName: "rodger123",
    online: false,
    city: "Bandung",
    isactive: false,
    address: "Jl Raya Taman No 42",
    email: "r.struick@mail.com",
    phone: "081234567890",
    simType: "A",
    simNo: 1234567890,
    deviceID: "123124112",
    lastLogin: "22/02/2022 20:20",
    lastLogout: "22/02/2022 20:20",
  },
]);

// 👉 Headers
const headers = [
  { title: "", key: "data-table-expand" },
  { title: "Actions", key: "actions", sortable: false },
  { title: "Name", key: "name" },
  { title: "Employee ID", key: "employeeId" },
  { title: "Username", key: "userName" },
  { title: "Online", key: "online" },
  { title: "City", key: "city" },
  { title: "Status", key: "isactive" },
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

const isOnline = [
  { title: "Online", value: "true" },
  { title: "Offline", value: "false" },
];

const status = [
  { title: "Active", value: "true" },
  { title: "Inactive", value: "false" },
];

// 👉 Resolve Online
const resolveOnlineVariant = (online: boolean) => {
  if (online === true) return { color: "success", text: "• ONLINE" };
  else if (online === false) return { color: "error", text: "• OFFLINE" };
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
        <VCardTitle>Driver</VCardTitle>
      </VCardItem>

      <!-- 👉 Filter -->
      <VCardText>
        <VRow>
          <!-- 👉 Select City-->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Select Type"
              :items="city"
              clearable
              clear-icon="tabler-x"
            />
          </VCol>
          <!-- 👉 Select Online Status-->
          <VCol cols="12" sm="3">
            <AppSelect
              placeholder="Online Status"
              :items="isOnline"
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
            @click="isAddEditDriverDialogVisible = true"
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
        <!-- 👉 Action -->
        <template #item.actions="{ item }">
          <VBtn
            icon
            color="info"
            variant="text"
            @click="isAddEditDriverDialogVisible = true"
          >
            <VIcon size="24" icon="tabler-edit" />
            <VTooltip location="top" activator="parent"> Edit </VTooltip>
          </VBtn>
          <VBtn
            icon
            color="error"
            variant="text"
            @click="isForceLogoutDialogVisible = true"
          >
            <VIcon size="24" icon="tabler-logout" />
            <VTooltip location="top" activator="parent">
              Force Logout
            </VTooltip>
          </VBtn>
        </template>

        <!-- 👉 Expand -->
        <template #expanded-row="slotProps">
          <tr class="v-data-table__tr">
            <td :colspan="4" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Address :</span>
                {{ slotProps.item.address }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Email :</span>
                {{ slotProps.item.email }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Phone Number :</span>
                {{ slotProps.item.phone }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">SIM Type :</span>
                {{ slotProps.item.simType }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">SIM No :</span>
                {{ slotProps.item.simNo }}
              </p>
            </td>
            <td :colspan="4" style="vertical-align: top">
              <p class="my-1">
                <span class="font-weight-bold">Device ID :</span>
                {{ slotProps.item.deviceID }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Last Login :</span>
                {{ slotProps.item.lastLogin }}
              </p>
              <p class="my-1">
                <span class="font-weight-bold">Last Logout :</span>
                {{ slotProps.item.lastLogout }}
              </p>
            </td>
          </tr>
        </template>

        <!-- 👉 ONLINE -->
        <template #item.online="{ item }">
          <VChip
            :color="resolveOnlineVariant(item.online)?.color"
            class="font-weight-medium"
            variant="text"
          >
            {{ resolveOnlineVariant(item.online)?.text }}
          </VChip>
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
      </VDataTable>
    </VCard>

    <!-- 👉 add/edit Modal -->
    <AddEditVehicleDataDialog
      v-model:isDialogVisible="isAddEditDriverDialogVisible"
    />

    <!-- 👉 Forcelogout Modal -->
    <VDialog
      v-model="isForceLogoutDialogVisible"
      persistent
      class="v-dialog-sm"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn
        @click="isForceLogoutDialogVisible = !isForceLogoutDialogVisible"
      />

      <!-- Dialog Content -->
      <VCard title="Confirmation">
        <VCardText>
          Are you sure you want to force logout for this driver?
        </VCardText>

        <VCardText class="d-flex justify-end gap-3 flex-wrap">
          <VBtn
            color="secondary"
            variant="tonal"
            @click="isForceLogoutDialogVisible = false"
          >
            No, cancel
          </VBtn>
          <VBtn @click="isForceLogoutDialogVisible = false">
            Yes, Logout.
          </VBtn>
        </VCardText>
      </VCard>
    </VDialog>
  </section>
</template>
