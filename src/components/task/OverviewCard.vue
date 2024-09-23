<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
  title: string;
  icon?: string;
  amount: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="topbar-overview-card">
    <VIcon :icon="icon" color="white" />
    <div>
      <label class="text-body-2 text-white"> {{ title }}</label>
      <div style="color: #ffc58e; font-weight: 700; line-height: 1.2rem">
        {{ amount }}
      </div>
    </div>
  </div>
</template>

<style></style>
