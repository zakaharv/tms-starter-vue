<script setup lang="ts">
//👉 - Dummy Interface Data
interface Items {
  id: number;
  invoice: string;
  batch: string;
  storeCode: string;
  invDate: string;
  batchDate: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    invoice: "INV12345",
    batch: "BATCH-1",
    storeCode: "123123123",
    invDate: "20/20/2020",
    batchDate: "20/20/2020",
  },
  {
    id: 2,
    invoice: "INV12345",
    batch: "BATCH-1",
    storeCode: "123123123",
    invDate: "20/20/2020",
    batchDate: "20/20/2020",
  },
]);

// 👉 Headers
const headers = [
  { title: "Order No", key: "invoice" },
  { title: "Store Code", key: "storeCode" },
  { title: "Batch", key: "batch" },

  { title: "Order date", key: "invDate" },
  { title: "Batch Date", key: "batchDate" },
];

// Data table options
const itemsPerPage = ref(10);
const page = ref(1);
const sortBy = ref();
const orderBy = ref();
const selectedRows = ref([]);

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
        <h4 class="text-h4 text-center mb-6">Upload Order</h4>

        <!-- 👉 Instruction -->
        <VList lines="two" border>
          <VListItem>
            <VListItemTitle>1. Download Template</VListItemTitle>
            <VListItemSubtitle
              >Download and fill in the form according to the
              template</VListItemSubtitle
            >
            <template #append>
              <VBtn color="secondary"> Donwload Template</VBtn>
            </template>
          </VListItem>
        </VList>
        <VList lines="two" border>
          <VListItem>
            <VListItemTitle>2. Upload</VListItemTitle>
            <VListItemSubtitle>Upload the filled template</VListItemSubtitle>
            <template #append>
              <VFileInput label="File input" width="250" />
              <VBtn color="success" class="ms-2"> Upload</VBtn>
            </template>
          </VListItem>
        </VList>

        <!-- 👉 Result Upload -->
        <VCard class="mb-6 mt-6">
          <VCardItem class="pb-4">
            <VCardTitle>Upload Result</VCardTitle>
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

            <div
              class="app-user-search-filter d-flex align-center flex-wrap gap-4"
            >
              <!-- 👉 Search  -->
              <div style="inline-size: 15.625rem">
                <AppTextField placeholder="Search Order" />
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

        <!-- 👉 Actions button -->
        <div class="d-flex align-center justify-center gap-4">
          <VBtn> Submit </VBtn>

          <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.refer-link-input {
  .v-field--appended {
    padding-inline-end: 0;
  }

  .v-field__append-inner {
    padding-block-start: 0.125rem;
  }
}
</style>
