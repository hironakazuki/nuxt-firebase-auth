<template>
  <sign-in>
    <template v-slot:twitter="{ signIn, isProcessing }">
      <button
        class="bg-blue-400 hover:bg-blue-500 text-white py-1 px-2 rounded text-base shadow-md"
        @click="signIn()"
      >
        <template v-if="!isProcessing">
          <i class="mdi mdi-twitter" />
          Twitterでログイン
        </template>
        <template v-if="isProcessing">
          <i class="animate-spin mdi mdi-loading inline-block" />
        </template>
      </button>
    </template>
  </sign-in>
</template>

<script>
import signIn from './SignIn'
export default {
  components: {
    signIn,
  },
}
</script>
