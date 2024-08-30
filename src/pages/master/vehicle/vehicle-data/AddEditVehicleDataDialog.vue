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

const timeLeave = ref("");
const timeReturn = ref("");
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
        <h4 class="text-h4 text-center mb-6">Add Vehicle Data</h4>

        <!-- 👉 Form -->
        <VForm class="mt-6">
          <VRow>
            <!-- 👉 Organization -->
            <VCol cols="12" md="6">
              <AppSelect
                :items="['Organization 1', 'Organization 2', 'Organization 3']"
                label="Organization"
                placeholder="Organization"
              />
            </VCol>
            <!-- 👉 Vehicle Type -->
            <VCol cols="12" md="6">
              <AppSelect
                :items="['Type 1', 'Type 2', 'Type 3']"
                label="Vehicle Type"
                placeholder="Vehicle Type"
              />
            </VCol>
            <!-- 👉 Vehicle ID -->
            <VCol cols="12" md="6">
              <AppTextField label="Vehicle ID" placeholder="Vehicle ID" />
            </VCol>
            <!-- 👉 License Plate -->
            <VCol cols="12" md="6">
              <AppTextField label="Vehicle No." placeholder="License Plate" />
            </VCol>

            <!-- 👉 Leave -->
            <VCol cols="12" md="6">
              <AppDateTimePicker
                v-model="timeLeave"
                label="Time to Leave"
                placeholder="Select time"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
            </VCol>

            <!-- 👉 Return -->
            <VCol cols="12" md="6">
              <AppDateTimePicker
                v-model="timeReturn"
                label="Time to Return"
                placeholder="Select time"
                :config="{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                }"
              />
            </VCol>

            <!-- 👉 KIR -->
            <VCol cols="12" md="6">
              <AppTextField label="KIR Number" placeholder="KIR Number" />
            </VCol>

            <!-- 👉 KIR End Date-->
            <VCol cols="12" md="6">
              <AppDateTimePicker
                v-model="date"
                label="KIR End Date"
                placeholder="Select date"
              />
            </VCol>

            <!-- 👉 STNK -->
            <VCol cols="12" md="6">
              <AppTextField label="STNK Number" placeholder="STNK Number" />
            </VCol>

            <!-- 👉 STNK End Date-->
            <VCol cols="12" md="6">
              <AppDateTimePicker
                v-model="date"
                label="STNK End Date"
                placeholder="Select date"
              />
            </VCol>

            <!-- 👉 Vendor Name -->
            <VCol cols="12" md="4">
              <AppTextField label="Vendor Name" placeholder="Vendor Name" />
            </VCol>

            <!-- 👉 Vendor Price -->
            <VCol cols="12" md="4">
              <AppTextField label="Vendor Price" placeholder="Vendor Price" />
            </VCol>

            <!-- 👉 Vendor End Date-->
            <VCol cols="12" md="4">
              <AppDateTimePicker
                v-model="date"
                label="STNK End Date"
                placeholder="Select date"
              />
            </VCol>

            <!-- 👉 Switch Asset -->
            <VCol cols="3">
              <VSwitch density="compact" label="Is Asset?" />
            </VCol>

            <!-- 👉 Switch Status -->
            <VCol cols="3">
              <VSwitch density="compact" label="Is Active?" />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit"> Add Data </VBtn>

              <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style></style>
