<template>
  <q-page padding class="row justify-center">
    <div style="width: 650px; max-width: 95vw;">
      <q-scroll-area class="q-pr-md q-pl-sm" style="height: 80vh; padding-bottom: 3vh;" :thumb-style="{
          borderRadius: '5px',
          width: '10px',
          opacity: 0.1
        }">
        <q-chat-message v-for="msg in clips" :key="msg.id" :label="msg.label" :sent="msg.sent" :text-color="msg.textColor" :bg-color="msg.bgColor" :name="msg.name" :avatar="msg.avatar" :text="msg.text" :stamp="msg.stamp" />
      </q-scroll-area>
      <q-page-sticky position="bottom" :offset="[0, 20]">
        <q-input style="width: 80vw; max-width: 430px" inverted v-model="inputText" float-label="Enter text" :after="[{icon: 'arrow_forward', handler: this.addClip}]" />
      </q-page-sticky>
    </div>

  </q-page>
</template>

<script>
import { db } from '../firebase'
import timeago from 'timeago.js'

export default {
  methods: {
    addClip() {
      const clipRef = this.clipsRef.push()
      clipRef.set({
        deviceType: this.$q.platform.is.desktop ? 'WEB' : 'PHONE',
        id: clipRef.key,
        senderEmail: this.$route.query.host ? 'host' : 'client',
        text: this.inputText,
        timestamp: new Date().getTime()
      })
      this.inputText = ''
    }
  },
  computed: {
    clips() {
      return this.dbClips.map(clipRef => {
        return {
          name: clipRef.senderEmail,
          text: [clipRef.text],
          stamp: timeago().format(clipRef.timestamp),
          id: clipRef.id,
          avatar:
            clipRef.deviceType === 'PHONE'
              ? 'statics/phone_black.png'
              : 'statics/chrome.png',
          sent: clipRef.senderEmail === 'host'
        }
      })
    }
  },
  firebase() {
    return {
      dbClips: this.clipsRef
    }
  },
  data() {
    return {
      inputText: '',
      clipsRef: db
        .ref('sessions')
        .child(this.$route.params.session)
        .child('clips')
    }
  }
}
</script>
