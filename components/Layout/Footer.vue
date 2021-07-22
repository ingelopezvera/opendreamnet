<template>
  <footer class="footer">
    <div class="container">
      <!-- Copyright -->
      <div class="footer__copyright">
        <p>
          © {{ new Date().getFullYear() }} OpenDreamNet. All rights reserved.
        </p>
      </div>

      <div class="w-10 h-10" />

      <!-- Social -->
      <nav class="nav">
        <a v-if="$config.githubURL"
           :href="$config.githubURL"
           target="_blank"
           class="item">
          GitHub
        </a>

        <a v-if="$config.twitterURL"
           :href="$config.twitterURL"
           target="_blank"
           class="item">
          Twitter
        </a>

        <a v-if="$config.patreonURL"
           :href="$config.patreonURL"
           target="_blank"
           class="item">
          Patreon
        </a>

        <a href="https://forum.opendreamnet.com" target="_blank" class="item">
          Forum
        </a>
      </nav>

      <!-- Links -->
      <nav class="nav">
        <NuxtLink to="/docs/tos" class="item">
          Terms of Service
        </NuxtLink>

        <NuxtLink to="/docs/privacy" class="item">
          Privacy Policy
        </NuxtLink>

        <a href="https://status.dreamnet.tech/" target="_blank" class="item">
          Status
        </a>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply border-t border-menus p-10;
  @apply mt-40 #{!important};

  @screen md {
    @apply text-sm;
  }

  .container {
    @apply flex flex-col-reverse justify-between gap-6;

    @screen lg {
      @apply flex-row;
    }
  }
}

.nav {
  @apply space-y-2;

  a {
    @apply block font-semibold text-white;

    &:hover {
      @apply text-primary underline;
    }
  }
}

.footer__copyright {
  @apply space-y-1;

  a {
    @apply text-white;

    &:hover {
      @apply text-primary underline;
    }
  }

  .version {
    @apply font-semibold;
  }

  .cid {
    @apply text-xs text-snow-darker cursor-default;
    @apply mb-6 #{!important};
  }
}
</style>
