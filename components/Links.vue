<template>
  <Box :title="data.title" :subtitle="data.description">
    <div v-for="item of items" :key="item.slug" class="project">
      <p v-if="item.urls.length === 0" class="title">
        {{ item.title }}
      </p>

      <a v-else
         :href="item.urls[0].url"
         target="_blank"
         class="title">{{ item.title }}</a>

      <div class="prose project__description">
        <NuxtContent :document="item" />
      </div>

      <div class="project__urls">
        <a v-for="uitem of item.urls"
           :key="uitem.label"
           :href="uitem.url"
           target="_blank">
          {{ uitem.label }}
        </a>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

interface IData {
  items: IContentDocument[]
}

export default Vue.extend({
  props: {
    data: {
      type: Object as () => IContentDocument,
      required: true
    }
  },

  data: (): IData => ({
    items: []
  }),

  created() {
    this.fetch()
  },

  methods: {
    async fetch() {
      this.items = await this.$content('projects').where({ category: this.data.slug }).fetch() as IContentDocument[]
    }
  }
})
</script>

<style lang="scss" scoped>
.project {
  @apply border-menus-lighten;

  &:not(:last-child) {
    @apply pb-6 border-b;
  }

  &:not(:first-child) {
    @apply pt-6;
  }

  a.title:hover {
    @apply text-primary-light;
  }
}

.project__description::v-deep {
  @apply text-sm mb-2;

  p {
    @apply m-0;
  }
}

.project__urls {
  @apply text-xs space-x-3 font-semibold;

  a {
    @apply inline-block text-snow-dark;

    &:hover {
      @apply text-primary underline;
    }
  }
}

.censor {
  @apply absolute top-0 left-0 bottom-0 right-0 backdrop-blur-lg z-40;
  @apply flex flex-col gap-6 justify-center items-center text-xl font-bold;
}
</style>
