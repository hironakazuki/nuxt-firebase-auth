<template>
  <footer class="bg-yellow-300 text-gray-600 body-font">
    <div class="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <nuxt-link
        to="/"
        class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
      >
        <div
          class="h-14 w-14 bg-indigo-200 rounded-full flex flex-shrink-0 justify-center items-center text-indigo-500 text-2xl font-mono"
        >
          <i class="mdi mdi-pencil" />
        </div>
        <span class="ml-3 text-xl">nuxt-firebase-auth</span>
      </nuxt-link>
      <p
        class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
      >
        © {{ new Date().getFullYear() }} —
        <a
          href="https://twitter.com/hironazuki1"
          class="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
          >@hironazuki1</a
        >
      </p>
      <span
        class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
      >
        <a class="text-gray-500">
          <i class="mdi mdi-24px mdi-facebook" />
        </a>
        <a class="ml-3 text-gray-500">
          <i class="mdi mdi-24px mdi-twitter" />
        </a>
        <a class="ml-3 text-gray-500">
          <i class="mdi mdi-24px mdi-instagram" />
        </a>
        <a class="ml-3 text-gray-500">
          <i class="mdi mdi-24px mdi-linkedin" />
        </a>
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'TheFooter',
})
</script>
