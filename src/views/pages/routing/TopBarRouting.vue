<script setup lang="ts"></script>

<template>
  <div class="topbar-wrapper">
    <div class="topbar-action">
      <VBtn
        icon="tabler-arrow-left"
        color="warning"
        rounded
        to="/routing/task"
      />
      <div class="text-white">BANDUNG • 22 September 2024</div>
    </div>
    <div class="topbar-overview">
      <OverviewCard icon="tabler-truck" title="Vehicles" amount="15" />
      <OverviewCard icon="tabler-package" title="Orders" amount="54" />
      <OverviewCard icon="tabler-coin" title="Sales" amount="2,344,567,888" />

      <div style="background: #5f5f5f; width: 1px; height: 22px"></div>
      <div class="topbar-overview-assign assigned">
        <div style="color: #7edda9; font-weight: 700; line-height: 1.2rem">
          24
        </div>
        <label class="text-body-2 text-white">Assigned</label>
      </div>
      <div class="topbar-overview-assign unassign">
        <div style="color: #ec9da0; font-weight: 700; line-height: 1.2rem">
          24
        </div>
        <label class="text-body-2 text-white">Unassign</label>
      </div>
    </div>
  </div>
</template>

<style></style>
