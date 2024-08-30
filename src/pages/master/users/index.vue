<script setup lang="ts">
import UserAdmin from "./admin/index.vue";
import UserDriver from "./driver/index.vue";

const userTab = ref(null);

const tabs = [
  { title: "Admin", icon: "tabler-users" },
  { title: "Driver", icon: "tabler-steering-wheel" },
];
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab v-for="tab in tabs" :key="tab.title">
            <VIcon size="20" start :icon="tab.icon" />
            {{ tab.title }}
          </VTab>
        </VTabs>
        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <UserAdmin />
          </VWindowItem>
          <VWindowItem>
            <UserDriver />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </div>
</template>
