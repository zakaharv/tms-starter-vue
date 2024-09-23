<script setup lang="ts">
const props = defineProps<{
  isDialogVisible: boolean;
}>();

const emit = defineEmits<{
  (e: "update:isDialogVisible", val: boolean): void;
  (e: "updatedData", val: unknown): void;
}>();

const currentStep = ref(0);

const createApp = [
  {
    icon: "tabler-file-text",
    title: "SETTING",
    subtitle: "Set Org & Date",
  },
  {
    icon: "tabler-id",
    title: "ORDER",
    subtitle: "Select Order",
  },
  {
    icon: "tabler-check",
    title: "SUBMIT",
    subtitle: "Summary & Create",
  },
];

const date = ref("");

//👉 - Dummy Interface Data
interface Items {
  id: number;
  batch: string;
  invoice: string;
  customer: string;
  amount: number;
  status: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    batch: "BATCH-1",
    invoice: "INV12345890",
    customer: "Toko Maju Jaya Abadi",
    amount: 154000000,
    status: "NOT DELIVERED",
  },
  {
    id: 2,
    batch: "BATCH-2",
    invoice: "INV12345890",
    customer: "Toko Maju Jaya Abadi",
    amount: 154000000,
    status: "NEW",
  },
  {
    id: 3,
    batch: "BATCH-3",
    invoice: "INV12345890",
    customer: "Toko Maju Jaya Abadi",
    amount: 154000000,
    status: "NEW",
  },
]);

// 👉 Headers
const headers = [
  { title: "Batch", key: "batch" },
  { title: "Invoice", key: "invoice" },
  { title: "Customer", key: "customer" },
  { title: "Amount", key: "amount" },
  { title: "Status", key: "status" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

const dialogVisibleUpdate = (val: boolean) => {
  emit("update:isDialogVisible", val);
  currentStep.value = 0;
};

watch(
  () => props,
  () => {
    if (!props.isDialogVisible) currentStep.value = 0;
  }
);
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    max-width="1200"
    min-height="590"
    @update:model-value="dialogVisibleUpdate"
  >
    <!-- 👉 dialog close btn -->
    <DialogCloseBtn
      size="small"
      @click="emit('update:isDialogVisible', false)"
    />
    <VCard class="create-app-dialog" min-height="590">
      <VCardText class="pa-5 pa-sm-16">
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-2">Create Task</h4>
        <p class="text-body-1 text-center mb-6">
          Provide data with this form to create new task route.
        </p>

        <VRow>
          <VCol cols="12" sm="5" md="4" lg="3">
            <AppStepper
              v-model:current-step="currentStep"
              direction="vertical"
              :items="createApp"
              icon-size="22"
              class="stepper-icon-step-bg"
            />
          </VCol>

          <VCol cols="12" sm="7" md="8" lg="9">
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition stepper-content"
            >
              <!-- 👉 Setting -->
              <VWindowItem>
                <AppSelect
                  :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                  label="Organization"
                  placeholder="Select Organization"
                  class="mb-4"
                />

                <AppDateTimePicker
                  v-model="date"
                  label="Date"
                  placeholder="Select date"
                  prepend-inner-icon="tabler-calendar-event"
                />
              </VWindowItem>

              <!-- 👉 Invoices -->
              <VWindowItem>
                <VCard class="mb-6">
                  <VCardItem class="pb-4">
                    <div class="d-flex align-items-center gap-3">
                      <VCardTitle class="mb-0" style="line-height: 2rem"
                        >Select Order</VCardTitle
                      >
                      <AppDateTimePicker
                        v-model="date"
                        placeholder="Select date"
                        prepend-inner-icon="tabler-calendar-event"
                        style="width: 220px"
                      />
                    </div>
                  </VCardItem>

                  <!-- 👉 Filter -->
                  <VCardText>
                    <VRow>
                      <!-- 👉 Select Batch -->
                      <VCol cols="12" sm="6">
                        <AppSelect
                          placeholder="Select Batch"
                          :items="['foo', 'bar']"
                          clearable
                          clear-icon="tabler-x"
                        />
                      </VCol>
                      <VCol cols="12" sm="6">
                        <AppSelect
                          placeholder="Select Status"
                          :items="['foo', 'bar']"
                          clearable
                          clear-icon="tabler-x"
                        />
                      </VCol>
                    </VRow>
                  </VCardText>
                  <VDivider />
                  <VCardText style="padding: 12px 24px">
                    <VChip color="primary" variant="outlined">
                      125 Selected
                    </VChip>
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
                    show-select
                  >
                  </VDataTable>
                </VCard>
              </VWindowItem>

              <!-- 👉 Summary -->
              <VWindowItem>
                <VRow>
                  <VCol cols="12" md="6" class="pb-4 pb-sm-0">
                    <h4 class="text-h4 mb-4">Almost done! 🚀</h4>

                    <p>Confirm your deal details and submit to create it.</p>

                    <table class="text-base">
                      <tr>
                        <td style="inline-size: 150px">
                          <p class="font-weight-medium mb-2">Organization</p>
                        </td>
                        <td>
                          <p class="mb-2" style="color: #111111">BANDUNG</p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p class="font-weight-medium mb-2">Date</p>
                        </td>
                        <td>
                          <p class="mb-2" style="color: #111111">
                            22 Agustus 2024
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <p class="font-weight-medium mb-2">
                            Selected Invoice
                          </p>
                        </td>
                        <td>
                          <p class="mb-2" style="color: #111111">
                            120 Selected Invoices
                          </p>
                        </td>
                      </tr>
                    </table>
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex justify-space-between mt-6">
              <VBtn
                variant="tonal"
                color="secondary"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon icon="tabler-arrow-left" start class="flip-in-rtl" />
                Previous
              </VBtn>

              <VBtn
                v-if="createApp.length - 1 === currentStep"
                color="success"
                to="/routing/task/route-plan"
              >
                Submit & Optimize Route
              </VBtn>

              <VBtn v-else @click="currentStep++">
                Next

                <VIcon icon="tabler-arrow-right" end class="flip-in-rtl" />
              </VBtn>
            </div>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.stepper-content .card-list {
  --v-card-list-gap: 16px;
}
</style>
