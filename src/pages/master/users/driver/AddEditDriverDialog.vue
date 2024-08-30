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

const show2 = ref(true);
const confirmPassword = ref("wqfasds");
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
        <h4 class="text-h4 text-center mb-6">
          Add User <span class="text-primary">Driver</span>
        </h4>

        <!-- 👉 Form -->
        <VForm class="mt-6">
          <VRow>
            <!-- 👉 NAME -->
            <VCol cols="12" md="6">
              <AppTextField label="Name" placeholder="Name" />
            </VCol>
            <!-- 👉 Employee ID -->
            <VCol cols="12" md="6">
              <AppTextField label="Employee ID" placeholder="Employee ID" />
            </VCol>
            <!-- 👉 Address -->
            <VCol cols="12" md="6">
              <AppTextField label="Address" placeholder="Address" />
            </VCol>
            <!-- 👉 City -->
            <VCol cols="12" md="6">
              <AppSelect
                :items="['City 1', 'City 2', 'City 3']"
                label="City"
                placeholder="City"
              />
            </VCol>
            <!-- 👉 Email -->
            <VCol cols="12" md="6">
              <AppTextField label="Email" placeholder="Email" />
            </VCol>
            <!-- 👉 Phone -->
            <VCol cols="12" md="6">
              <AppTextField label="Phone Number" placeholder="Phone Number" />
            </VCol>
            <!-- 👉 SIM Type -->
            <VCol cols="12" md="6">
              <AppSelect
                :items="['A', 'B', 'C']"
                label="SIM Type"
                placeholder="SIM Type"
              />
            </VCol>
            <!-- 👉 SIM Number -->
            <VCol cols="12" md="6">
              <AppTextField label="SIM Number" placeholder="SIM Number" />
            </VCol>
            <!-- 👉 Username -->
            <VCol cols="12" md="6">
              <AppTextField label="Username" placeholder="Username" />
            </VCol>
            <!-- 👉 Password -->
            <VCol cols="12" md="6">
              <AppTextField
                v-model="confirmPassword"
                :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye'"
                :type="show2 ? 'text' : 'password'"
                name="input-10-2"
                placeholder="············"
                label="Visible"
                @click:append-inner="show2 = !show2"
              />
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
