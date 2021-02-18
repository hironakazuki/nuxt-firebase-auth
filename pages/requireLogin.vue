<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold mb-8">ログインが必要なページ</h1>
    <Logo />

    <aside
      v-show="!$auth.currentUser"
      class="w-full h-full fixed left-0 top-0 bg-gray-800 bg-opacity-75 rounded z-50 flex items-center justify-center"
    >
      <div class="bg-white p-10 rounded">
        <p class="font-bold">ログインして〇〇をしよう</p>
        <p class="mb-8 mt-1 text-gray-600">このページにはログインが必要です</p>
        <TwitterSignInButton class="mb-4" />
        <GoogleSignInButton class="mb-4" />
        <nuxt-link to="/" class="text-xs underline text-red-600">
          トップへ
        </nuxt-link>
      </div>
    </aside>
  </div>
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
