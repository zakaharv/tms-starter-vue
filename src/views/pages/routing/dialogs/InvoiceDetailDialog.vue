<script setup lang="ts">
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

//👉 Statistics
const statistics = [
  {
    title: "Original Amount",
    stats: "Rp 134,601.00",
    icon: "tabler-currency-dollar",
    color: "info",
  },
  {
    title: "Delivered Amount",
    stats: "Rp 134,601.00",
    icon: "tabler-currency-dollar",
    color: "error",
  },
  {
    title: "Total Collected",
    stats: "Rp 134,601.00",
    icon: "tabler-currency-dollar",
    color: "success",
  },
];

//👉 - Dummy Interface Data
interface Items {
  id: number;
  productCode: string;
  product: string;
  price: number;
  qtyOriginal: number;
  subtotalOriginal: number;
  qtyDelivered: number;
  subtotalDelivered: number;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    productCode: "01/01/203020",
    product: "PANTENE ANTI LEPEK",
    price: 24000,
    qtyOriginal: 2,
    subtotalOriginal: 24000,
    qtyDelivered: 2,
    subtotalDelivered: 24000,
  },
  {
    id: 2,
    productCode: "01/01/203020",
    product: "PANTENE ANTI LEPEK",
    price: 24000,
    qtyOriginal: 2,
    subtotalOriginal: 24000,
    qtyDelivered: 2,
    subtotalDelivered: 24000,
  },
]);

// 👉 Headers
const headers = [
  { title: "Product Code", key: "productCode" },
  { title: "Product", key: "product" },
  { title: "Price", key: "price" },
  { title: "Original", key: "qtyOriginal" },
  { title: "Delivered", key: "qtyDelivered" },
];
</script>

<template>
  <VDialog
    :model-value="props.isDialogVisible"
    :width="$vuetify.display.smAndDown ? 'auto' : 1140"
    @update:model-value="dialogVisibleUpdate"
  >
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />

    <VCard class="pa-2 pa-sm-10">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-6">Invoice Detail</h4>
        <!-- 👉 Stats -->
        <VRow>
          <VCard title="TOKO RIZKY GANG BAHAGIA SEKALI NO 25" class="w-100">
            <VCardText>
              <VRow>
                <VCol
                  v-for="item in statistics"
                  :key="item.title"
                  cols="12"
                  md="4"
                >
                  <div class="d-flex align-center gap-4 mt-md-3 mt-0">
                    <VAvatar
                      :color="item.color"
                      variant="tonal"
                      rounded
                      size="40"
                    >
                      <VIcon :icon="item.icon" />
                    </VAvatar>

                    <div class="d-flex flex-column">
                      <h5 class="text-h5">
                        {{ item.stats }}
                      </h5>
                      <div class="text-sm">
                        {{ item.title }}
                      </div>
                    </div>
                  </div>
                </VCol>
              </VRow>
            </VCardText>
          </VCard>
        </VRow>
        <!-- 👉 Table -->
        <VRow>
          <VCard class="mt-6 mb-6 w-100">
            <VCardItem class="pb-4">
              <VCardTitle>Items</VCardTitle>
            </VCardItem>

            <VDivider />

            <VDataTable
              :items="items"
              key="items.id"
              item-value="id"
              :headers="headers"
              class="text-no-wrap"
            >
              <!-- 👉 Price -->
              <template #item.price="{ item }"> Rp {{ item.price }} </template>

              <!-- 👉 Original -->
              <template #item.qtyOriginal="{ item }">
                <div>
                  Qty: <span class="text-info">{{ item.qtyOriginal }}</span>
                </div>
                <div>
                  Subtotal :
                  <span class="text-info">Rp {{ item.subtotalOriginal }}</span>
                </div>
              </template>

              <!-- 👉 Delivered -->
              <template #item.qtyDelivered="{ item }">
                <div>
                  Qty: <span class="text-success">{{ item.qtyDelivered }}</span>
                </div>
                <div>
                  Subtotal :
                  <span class="text-success"
                    >Rp {{ item.subtotalDelivered }}</span
                  >
                </div>
              </template>
            </VDataTable>
          </VCard>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style></style>
