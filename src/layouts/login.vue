<template>
  <q-layout>
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header>
      <q-toolbar>
        <q-toolbar-title>
          PasteIt Anywhere
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <q-page padding class="row justify-center items-center">
        <div style="width: 800px; max-width: 90vw;">
          <div class="row">

            <div class="col-xs-12 col-sm-6 q-pa-sm">
              <div class="row justify-center q-mb-sm">
                <q-input type="number" v-model="inputSessionId" float-label="Enter token" />
              </div>
              <div class="row justify-center">
                <q-btn label="Submit Token" @click="join()"></q-btn>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 q-pa-sm">
              <div class="row justify-center">
                <q-btn label="Generate Token" @click="generate()"></q-btn>
              </div>
            </div>

          </div>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
import { db } from '../firebase'

export default {
  // name: 'LayoutName',
  data() {
    return {
      inputSessionId: ''
    }
  },
  firebase: {
    firesbaseSessionCount: {
      source: db.ref('count'),
      asObject: true
    }
  },
  methods: {
    join() {
      if (this.inputSessionId === '') {
        this.$q.notify({ message: 'Enter a session id', timeout: 3000 })
        return
      }
      this.$router.push(`/home/${this.inputSessionId.toString()}`)
    },
    generate() {
      if (this.firesbaseSessionCount !== undefined) {
        const session = this.firesbaseSessionCount['.value'] + 1

        db.ref('count').set(session)

        let firstClipRef = db
          .ref('sessions')
          .child(session)
          .child('clips')
          .push()
        firstClipRef.set({
          deviceType: 'PHONE',
          id: firstClipRef.key,
          senderEmail: 'cloud',
          text: 'Welcome',
          timestamp: new Date().getTime()
        })

        this.$router.push(`/home/adhoc/${session}`)
      }
    }
  }
}
</script>

<style>

</style>
