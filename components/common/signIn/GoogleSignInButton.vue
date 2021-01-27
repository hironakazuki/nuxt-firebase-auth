<template>
  <sign-in>
    <template v-slot:google="{ signIn, isProcessing }">
      <button
        class="hover:bg-gray-100 text-black py-1 px-2 rounded text-base shadow-md"
        @click="signIn()"
      >
        <template v-if="!isProcessing">
          <i class="mdi mdi-google" />
          Googleでログイン
        </template>
        <template v-else>
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
