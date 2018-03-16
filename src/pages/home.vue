<template>
  <q-page padding>
    <div class="layout-padding" style="max-width: 800px">
      <q-chat-message v-for="msg in clips" :key="msg.id" :label="msg.label" :sent="msg.sent" :text-color="msg.textColor" :bg-color="msg.bgColor" :name="msg.name" :avatar="msg.avatar" :text="msg.text" :stamp="msg.stamp" />
    </div>
  </q-page>
</template>

<script>
import { db } from '../firebase'
import timeago from 'timeago.js'

export default {
  computed: {
    clips() {
      const clips = this.clipsRef.map(clipRef => {
        return {
          name: clipRef.senderEmail,
          text: [clipRef.text],
          stamp: timeago().format(clipRef.timestamp),
          id: clipRef.id,
          avatar: 'statics/phone_black.png'
        }
      })
      return clips
    }
  },
  firebase() {
    return {
      clipsRef: db
        .ref('sessions')
        .child(this.$route.params.session)
        .child('clips')
    }
  },
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style>

</style>
