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
        <h4 class="text-h4 text-center mb-6">Add Vehicle Type</h4>

        <!-- 👉 Form -->
        <VForm class="mt-6">
          <VRow>
            <!-- 👉 Vehicle Type Name -->
            <VCol cols="12">
              <AppTextField
                label="Vehicle Type Name"
                placeholder="Vehicle Type Name"
              />
            </VCol>

            <!-- 👉 Max Volume -->
            <VCol cols="12" md="3">
              <AppTextField label="Max Volume" placeholder="Max Volume" />
            </VCol>
            <!-- 👉 Max Weight -->
            <VCol cols="12" md="3">
              <AppTextField label="Max Weight" placeholder="Max Weight" />
            </VCol>
            <!-- 👉 Wheel -->
            <VCol cols="12" md="3">
              <AppTextField label="Wheel" placeholder="Wheel" />
            </VCol>
            <!-- 👉 Wheel -->
            <VCol cols="12" md="3">
              <AppSelect
                :items="['Ambient', 'Cool', 'Warm']"
                label="Temperature"
                placeholder="Temperature"
              />
            </VCol>

            <!-- 👉 Switch Status -->
            <VCol cols="12">
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
