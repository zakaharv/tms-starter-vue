<script setup lang="ts">
//👉 - Dummy Interface Data
interface Items {
  id: number;
  name: string;
}

//👉 - Dummy Object Data
const items = ref<Items[]>([
  {
    id: 1,
    name: "Surabaya",
  },
  {
    id: 2,
    name: "Bandung",
  },
]);

// 👉 Headers
const headers = [{ title: "All Organization", key: "name" }];

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

const userFormTab = ref(null);

const formTabs = [
  { title: "Information", icon: "tabler-info-circle" },
  { title: "Organization Mapping", icon: "tabler-git-branch" },
];
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
          Add User <span class="text-primary">Admin</span>
        </h4>

        <VRow>
          <VCol cols="12">
            <VTabs
              v-model="userFormTab"
              class="v-tabs-pill mb-3 disable-tab-transition"
            >
              <VTab v-for="tab in formTabs" :key="tab.title">
                <VIcon size="20" start :icon="tab.icon" />
                {{ tab.title }}
              </VTab>
            </VTabs>
            <VWindow
              v-model="userFormTab"
              class="disable-tab-transition"
              :touch="false"
            >
              <!-- 👉 Info -->
              <VWindowItem>
                <!-- 👉 Form -->
                <VForm class="mt-6">
                  <VRow>
                    <!-- 👉 NAME -->
                    <VCol cols="12" md="6">
                      <AppTextField label="Name" placeholder="Name" />
                    </VCol>
                    <!-- 👉 Employee ID -->
                    <VCol cols="12" md="6">
                      <AppTextField
                        label="Employee ID"
                        placeholder="Employee ID"
                      />
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
                      <AppTextField
                        label="Phone Number"
                        placeholder="Phone Number"
                      />
                    </VCol>
                    <!-- 👉 Username -->
                    <VCol cols="12" md="6">
                      <AppTextField label="Username" placeholder="Username" />
                    </VCol>
                    <!-- 👉 Password -->
                    <VCol cols="12" md="6">
                      <AppTextField
                        v-model="confirmPassword"
                        :append-inner-icon="
                          show2 ? 'tabler-eye-off' : 'tabler-eye'
                        "
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
                  </VRow>
                </VForm>
              </VWindowItem>

              <!-- 👉 Mapping -->
              <VWindowItem>
                <VDataTable
                  :items="items"
                  key="items.id"
                  item-value="id"
                  :headers="headers"
                  class="text-no-wrap"
                  show-select
                  hide-default-footer
                >
                </VDataTable>
              </VWindowItem>
            </VWindow>
          </VCol>
        </VRow>
        <VRow>
          <!-- 👉 Submit and Cancel -->
          <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
            <VBtn type="submit"> Add Data </VBtn>

            <VBtn color="secondary" variant="tonal"> Cancel </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<style></style>
