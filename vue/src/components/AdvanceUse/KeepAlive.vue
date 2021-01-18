<template>
  <div>
    <button @click="state='A'">A</button>
    <button @click="state='B'">B</button>
    <keep-alive :include="['KeepAliveStateA']">
      <KeepAliveStateA v-if="state==='A'"/>
      <KeepAliveStateB v-if="state==='B'"/>
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveStateA from './KeepAliveStateA'
import KeepAliveStateB from './KeepAliveStateB'
export default {
  components: {KeepAliveStateA, KeepAliveStateB},
  data() {
    return {
      state: 'A'
    }
  },
}
</script>

<style>

</style>