<script setup lang="ts">
const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
</script>

<template>
  <!-- ➡️ Remove this -->
  <div class="text-white">Mapnya nanti disini</div>

  <!-- 👉 Example Dot with Popover -->
  <VMenu v-model="menu" :close-on-content-click="false" location="top center">
    <template v-slot:activator="{ props }">
      <VBtn
        color="primary"
        rounded
        variant="outlined"
        size="32"
        v-bind="props"
        style="background-color: #fff; border-width: 3px"
      >
        1
      </VBtn>
    </template>

    <VCard min-width="300">
      <VCardText class="px-3 py-3 d-flex">
        <h5 style="font-size: 18px; line-height: 1.7rem">48/01/035822</h5>
        <VSpacer />
        <DialogCloseBtn @click="menu = !menu" />
      </VCardText>

      <VDivider></VDivider>

      <VList>
        <VListItem>
          <p class="text-body-2 mb-0">Customer Sequence</p>
          <p class="text-body-1 font-weight-bold mb-0">8</p>
        </VListItem>
        <VListItem>
          <p class="text-body-2 mb-0">Customer Name</p>
          <p class="text-body-1 font-weight-bold mb-0">Toko Maju Jaya Abadi</p>
        </VListItem>
        <VListItem>
          <p class="text-body-2 mb-0">Address</p>
          <p class="text-body-1 font-weight-bold mb-0">
            Jl ABC 123 qwert, 56 57
          </p>
        </VListItem>
      </VList>

      <VCardActions>
        <VBtn
          variant="outlined"
          color="error"
          size="small"
          @click="menu = false"
          class="w-100"
        >
          UNASSIGNED
        </VBtn>
      </VCardActions>
    </VCard>
  </VMenu>
</template>

<style></style>
