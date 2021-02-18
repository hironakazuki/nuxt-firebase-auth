import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import _firebase from 'firebase/app'
import * as Firebase from '../utils/firebase'

declare module '@nuxt/types' {
  interface Context {
    $firebase: typeof _firebase
    $firestore: _firebase.firestore.Firestore
    $storage: _firebase.storage.Storage
    $functions: _firebase.functions.Functions
    $messaging: _firebase.messaging.Messaging
    $analytics: _firebase.analytics.Analytics
  }
  interface NuxtAppOptions {
    $firebase: typeof _firebase
    $firestore: _firebase.firestore.Firestore
    $storage: _firebase.storage.Storage
    $functions: _firebase.functions.Functions
    $messaging: _firebase.messaging.Messaging
    $analytics: _firebase.analytics.Analytics
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: _firebase.auth.Auth & {
      user: _firebase.User
      currentUser: _firebase.User
    }
    $firebase: typeof _firebase
    $firestore: _firebase.firestore.Firestore
    $storage: _firebase.storage.Storage
    $functions: _firebase.functions.Functions
    $messaging: _firebase.messaging.Messaging
    $analytics: _firebase.analytics.Analytics
  }
}

const _auth = (Firebase.auth as any) as _firebase.auth.Auth & {
  __defineGetter__: any
  _vm: any
}
if (!_auth._vm) {
  _auth._vm = new Vue({
    data() {
      return {
        currentUser: _auth.currentUser !== null ? _auth.currentUser : undefined,
      }
    },
    created() {
      _auth.onAuthStateChanged((user: any) => {
        this.currentUser = user
      })
    },
  })
  _auth.__defineGetter__('currentUser', () => {
    return _auth._vm.$data.currentUser
  })
  _auth.__defineGetter__('user', () => {
    return _auth._vm.$data.currentUser
  })
}

const FirebasePlugin: Plugin = (_context, inject) => {
  inject('firebase', Firebase.firebase)
  inject('app', Firebase.app)
  inject('firestore', Firebase.firestore)
  inject('storage', Firebase.storage)
  inject('functions', Firebase.functions)
  inject('auth', _auth as _firebase.auth.Auth)
  inject('analytics', Firebase.analytics)
}

export default FirebasePlugin
