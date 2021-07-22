<template>
  <div class="layout">
    <!-- Header -->
    <LayoutHeader />

    <!-- Body -->
    <Nuxt class="container body" />

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  @apply space-y-10;

  @screen md {
    @apply space-y-20;
  }
}
</style>

<style lang="scss">
.container {
  @apply mx-auto px-2;
}
</style>
