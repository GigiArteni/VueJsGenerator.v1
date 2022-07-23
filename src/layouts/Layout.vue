<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        Generator
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <Sidebar />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Sidebar from 'components/Sidebar.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    Sidebar
  },

  setup () {

    return {

    }
  }
})
</script>
