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
    :width="$vuetify.display.smAndDown ? 'auto' : 500"
    @update:model-value="dialogVisibleUpdate"
  >
    <DialogCloseBtn @click="emit('update:isDialogVisible', false)" />

    <VCard class="pa-2 pa-sm-10">
      <VCardText>
        <!-- 👉 Title -->
        <h4 class="text-h4 text-center mb-6">Assign Route</h4>

        <!-- 👉 Form -->
        <VForm class="mt-6">
          <VRow>
            <!-- 👉 Info -->
            <VCol cols="12">
              <h2 class="text-error">V9</h2>
              <label>Motor Cycle</label>
            </VCol>
            <!-- 👉 Driver -->
            <VCol cols="12">
              <AppSelect
                :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                label="Driver"
                placeholder="Select Driver"
              />
            </VCol>

            <!-- 👉 Vehicle -->
            <VCol cols="12">
              <AppSelect
                :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
                label="Vehicle"
                placeholder="Vehicle"
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit"> Assign </VBtn>
              <VBtn type="submit" variant="tonal"> Unassign </VBtn>

              <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style></style>
