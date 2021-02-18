<template>
  <client-only>
    <div class="relative group inline-block">
      <button
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 overflow-hidden"
      >
        ログイン
        <i class="mdi mdi-menu-down -mr-1 ml-2 h-5 w-5" />
      </button>
      <div>
        <div class="hidden group-hover:block absolute right-0 z-50">
          <div
            class="mt-2 py-2 w-48 bg-white rounded shadow-xl divide-y divide-gray-500"
          >
            <div class="py-2 pl-3">
              <twitter-sign-in-button />
            </div>
            <div class="py-2 pl-3">
              <google-sign-in-button />
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import twitterSignInButton from '~/components/common/signIn/TwitterSignInButton.vue'
import googleSignInButton from '~/components/common/signIn/GoogleSignInButton.vue'

export default Vue.extend({
  name: 'SignInDropdown',
  components: {
    twitterSignInButton,
    googleSignInButton,
  },
})
</script>
