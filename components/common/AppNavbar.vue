<template>
  <header>
    <div
      class="bg-yellow-300 shadow border-b border-gray-200 h-12 md:h-16 flex items-center fixed top-0 inset-x-0 z-100"
    >
      <div
        class="mx-auto w-full max-w-screen-lg flex items-center justify-between px-4 py-2"
      >
        <nuxt-link to="/">
          <span class="text-gray-900 font-bold text-sm md:text-lg">
            nuxt-firebase-auth
          </span>
        </nuxt-link>
        <client-only>
          <div class="flex items-center">
            <nuxt-link to="/requireLogin" class="mr-5 hover:text-gray-900">
              <i class="mdi mdi-pencil" />
              <span class="hidden md:inline-block">要ログイン</span>
            </nuxt-link>
            <nuxt-link to="/about" class="mr-5 hover:text-gray-900">
              <i class="mdi mdi-pencil" />
              <span class="hidden md:inline-block">About</span>
            </nuxt-link>

            <account-dropdown
              v-if="$auth.currentUser"
              :photo-url="$auth.currentUser.photoURL"
            />
            <sign-in-dropdown v-else />
          </div>
        </client-only>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import accountDropdown from '~/components/partials/AccountDropdown.vue'
import signInDropdown from '~/components/common/signIn/SignInDropdown.vue'

export default Vue.extend({
  name: 'AppNavbar',
  components: {
    accountDropdown,
    signInDropdown,
  },
})
</script>

<style scoped>
.z-100 {
  z-index: 100;
}
</style>
