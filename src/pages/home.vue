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
        let clip = {}
        clip.name = clipRef.senderEmail
        clip.text = [clipRef.text]
        clip.stamp = timeago().format(clipRef.timestamp)
        clip.id = clipRef.id
        clip.avatar = 'statics/phone_black.png'
        return clip
      })
      return clips
    }
  },
  firebase: {
    clipsRef: db.refFromURL(
      'https://pasteit-84c04.firebaseio.com' +
        '/clip_items' +
        '/AIxmhazt6lg0S8VZdEaJxwOvof13'
    )
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
