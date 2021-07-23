<template>
  <div class="categories">
    <Links v-for="data of categories"
           :key="data.slug"
           :data="data"
           class="category" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

interface IData {
  categories: IContentDocument[]
}

export default Vue.extend({
  data: (): IData => ({
    categories: []
  }),

  mounted() {
    this.fetch()
  },

  methods: {
    async fetch() {
      this.categories = await this.$content('projects/categories').fetch() as IContentDocument[]
    }
  }
})
</script>

<style lang="scss" scoped>
.categories {
  @apply gap-x-9 space-y-9;

  @screen lg {
    column-count: 2;

    .category {
      -webkit-column-break-inside: avoid;
      page-break-inside: avoid;
      break-inside: avoid;
      overflow: hidden;
    }
  }
}
</style>
