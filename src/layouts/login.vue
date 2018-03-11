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
                <q-input type="number" float-label="Enter token" />
              </div>
              <div class="row justify-center">
                <q-btn label="Submit Token"></q-btn>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 q-pa-sm">
              <div class="row justify-center">
                <q-btn label="Generate Token"></q-btn>
              </div>
            </div>

          </div>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data() {
    return {}
  }
}
</script>

<style>

</style>
