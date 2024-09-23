<template>
  <h4 class="text-h4 font-weight-medium">Report</h4>
  <VRow class="mt-4">
    <VCol cols="12" sm="6" xl="4">
      <VCard>
        <VCardText>
          <VAvatar color="primary" variant="tonal" rounded size="44">
            <VIcon icon="tabler-file-analytics" size="28" />
          </VAvatar>
          <h5 class="text-h5 mt-3">Visit Summary Report</h5>
          <VForm class="mt-3">
            <VRow>
              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <AppSelect
                  :items="[
                    'Organization 1',
                    'Organization 2',
                    'Organization 3',
                  ]"
                  placeholder="Select Organization"
                />
              </VCol>
              <!-- 👉 Range Date-->
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  v-model="date"
                  placeholder="Select date"
                  :config="{ mode: 'range' }"
                  prepend-inner-icon="tabler-calendar-event"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn color="primary" variant="tonal" class="w-100">
                  Export
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" sm="6" xl="4">
      <VCard>
        <VCardText>
          <VAvatar color="primary" variant="tonal" rounded size="44">
            <VIcon icon="tabler-file-analytics" size="28" />
          </VAvatar>
          <h5 class="text-h5 mt-3">Visit Detail Report</h5>
          <VForm class="mt-3">
            <VRow>
              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <AppSelect
                  :items="[
                    'Organization 1',
                    'Organization 2',
                    'Organization 3',
                  ]"
                  placeholder="Select Organization"
                />
              </VCol>
              <!-- 👉 Range Date-->
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  v-model="date"
                  placeholder="Select date"
                  :config="{ mode: 'range' }"
                  prepend-inner-icon="tabler-calendar-event"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn color="primary" variant="tonal" class="w-100">
                  Export
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
    <VCol cols="12" sm="6" xl="4">
      <VCard>
        <VCardText>
          <VAvatar color="primary" variant="tonal" rounded size="44">
            <VIcon icon="tabler-file-analytics" size="28" />
          </VAvatar>
          <h5 class="text-h5 mt-3">OPEX Report</h5>
          <VForm class="mt-3">
            <VRow>
              <!-- 👉 Organization -->
              <VCol cols="12" md="6">
                <AppSelect
                  :items="[
                    'Organization 1',
                    'Organization 2',
                    'Organization 3',
                  ]"
                  placeholder="Select Organization"
                />
              </VCol>
              <!-- 👉 Range Date-->
              <VCol cols="12" md="6">
                <AppDateTimePicker
                  v-model="date"
                  placeholder="Select date"
                  :config="{ mode: 'range' }"
                  prepend-inner-icon="tabler-calendar-event"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn color="primary" variant="tonal" class="w-100">
                  Export
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup lang="ts">
const date = ref("");
</script>
