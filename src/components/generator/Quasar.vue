<template>
  <div class="row col-sm-8">
    <div class="row full-width q-col-gutter-sm">
      <div class="col-sm-6">
        <q-input outlined label="* Project name" dense />
      </div>
      <div class="col-sm-6">
        <q-input outlined label="* API URL" dense />
      </div>
      <div class="col-sm-6">
        <q-input outlined label="* Section" dense />
      </div>
      <div class="col-sm-6">
        <q-input outlined label="* Container" dense />
      </div>
      <div class="col-sm-12 q-mt-sm">
        <q-separator class="full-width q-gutter-sm" style="height:1px;" />
      </div>
    </div>
    <div class="row full-width q-col-gutter-sm">
      <div class="text-right full-width">+ Add new project</div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuasarGenerator',
})
</script>
