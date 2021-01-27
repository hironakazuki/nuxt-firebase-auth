<template>
  <div>
    <client-only>
      <slot
        v-if="!$auth.currentUser"
        name="twitter"
        :signIn="twitterSignIn"
        :isProcessing="isProcessing"
      />
      <slot
        v-if="!$auth.currentUser"
        name="google"
        :signIn="googleSignIn"
        :isProcessing="isProcessing"
      />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type LocalData = {
  isProcessing: Boolean
}

export default Vue.extend({
  data(): LocalData {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async twitterSignIn(): Promise<void> {
      this.isProcessing = true
      const result = await this.$auth.signInWithPopup(
        new this.$firebase.auth.TwitterAuthProvider()
      )
      if (result.user) {
        await this.$firestore
          .collection('users')
          .doc(result.user.uid)
          .set({
            displayName: result.user.displayName,
            photoUrl: result.user.photoURL as string,
            username: (result.additionalUserInfo as firebase.default.auth.AdditionalUserInfo)
              .username,
          })
        location.reload()
      }
    },
    async googleSignIn(): Promise<void> {
      this.isProcessing = true
      const result = await this.$auth.signInWithPopup(
        new this.$firebase.auth.GoogleAuthProvider()
      )
      if (result.user) {
        await this.$firestore
          .collection('users')
          .doc(result.user.uid)
          .set({
            displayName: result.user.displayName,
            photoUrl: result.user.photoURL as string,
            username: result.user.displayName,
          })
        location.reload()
      }
    },
  },
})
</script>
