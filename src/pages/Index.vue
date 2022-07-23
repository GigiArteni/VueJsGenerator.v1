<template>
  <q-page class="flex q-pa-md">
    <div><Quasar /></div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Quasar from '../components/generator/Quasar'
export default defineComponent({
  name: 'PageIndex',
  components:{
    Quasar
  }
})
</script>
