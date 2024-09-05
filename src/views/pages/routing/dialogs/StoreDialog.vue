<script setup lang="ts">
import InvoiceDetailDialog from "./InvoiceDetailDialog.vue";

const props = defineProps<Props>();
const emit = defineEmits<Emit>();

interface Props {
  isDialogVisible: boolean;
}

interface Emit {
  (e: "update:isDialogVisible", val: boolean): void;
}

const dialogVisibleUpdate = (val: boolean) => {
  emit("update:isDialogVisible", val);
};

//👉 - Dummy Interface Data
interface Items {
  id: number;
  invoice: string;
  product: string;
  amount: number;
  collected: number;
  status: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    invoice: "INV12345",
    product: "10",
    amount: 13460100,
    collected: 13460100,
    status: "new",
  },
  {
    id: 1,
    invoice: "INV12345",
    product: "10",
    amount: 13460100,
    collected: 13460100,
    status: "routed",
  },
]);

// 👉 Headers
const headers = [
  { title: "Invoice", key: "invoice" },
  { title: "Product", key: "product" },
  { title: "Amount", key: "amount" },
  { title: "Collected", key: "collected" },
  { title: "Status", key: "status" },
];

const isInvoiceDetailDialogVisible = ref(false);
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    :width="$vuetify.display.smAndDown ? 'auto' : 900"
    @update:model-value="dialogVisibleUpdate"
  >
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />

    <VCard class="pa-2 pa-sm-10">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-6">Store Detail</h4>

        <VRow>
          <VCol cols="12" md="6">
            <div style="height: 200px; width: 100%; border-radius: 8px">
              <img
                src="https://images.unsplash.com/photo-1624740222602-e3088aa641eb?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
          </VCol>
          <VCol cols="12" md="6">
            <div class="store-dialog-heading">
              <div>
                <span class="text-body-1">48/01/060573</span>
                <h4>TOKO RIZKY GANG BAHAGIA SEKALI NO 25</h4>
              </div>
              <div>
                <div class="text-shade-black font-weight-medium">
                  541 HIGH ST NO. 148 RT04 RW11
                </div>
                <div class="text-info">-7.08430430 0.4384930</div>
              </div>
            </div>
            <div class="store-dialog-address"></div>
          </VCol>
        </VRow>

        <VRow>
          <VCard class="mt-6 mb-6 w-100">
            <VCardItem class="pb-4">
              <VCardTitle>List Invoices</VCardTitle>
            </VCardItem>

            <VDivider />

            <VDataTable
              :items="items"
              key="items.id"
              item-value="id"
              :headers="headers"
              class="text-no-wrap"
            >
              <!-- 👉 Invoice -->
              <template #item.invoice="{ item }">
                <VBtn
                  variant="text"
                  class="px-0 text-decoration-underline"
                  @click="isInvoiceDetailDialogVisible = true"
                  >{{ item.invoice }}</VBtn
                >
              </template>

              <!-- 👉 Status -->
              <template #item.status="{ item }">
                <div class="text-uppercase font-weight-bold">
                  • {{ item.status }}
                </div>
              </template>
            </VDataTable>
          </VCard>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>

  <InvoiceDetailDialog v-model:isDialogVisible="isInvoiceDetailDialogVisible" />
</template>

<style></style>
