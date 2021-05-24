<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld @onSayHello="sayHello" msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <LifeCycles v-if="flag" :msg="msg"/> -->
  <!-- <button @click="changeHandler">change msg</button> -->
  <!-- <button @click="flag = !flag">change flag</button> -->

  <!-- <Ref /> -->
  <!-- <RefTemplate/> -->
  <!-- <ToRef/> -->
  <!-- <ToRefs/> -->
  <!-- <WhyRef/> -->
  <!-- <MouseMove v-if="flag"/> -->
  <!-- <VModel/> -->
  <!-- <Watch/> -->
  <GetInstance/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// import LifeCycles from './components/LifeCycles.vue'
// import Ref from './components/Ref.vue'
// import RefTemplate from './components/RefTemplate.vue'
// import ToRef from './components/ToRef.vue'
// import ToRefs from './components/ToRefs.vue'
// import WhyRef from './components/WhyRef.vue'
// import MouseMove from './components/MouseMove.vue'
// import VModel from './components/VModel/index.vue'
// import Watch from './components/Watch.vue'
import GetInstance from './components/GetInstance.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    // LifeCycles,
    // Ref,
    // RefTemplate,
    // ToRef,
    // ToRefs,
    // WhyRef,
    // MouseMove
    // VModel
    // Watch
    GetInstance
  },
  data() {
    return {
      msg: 'Hello vue3',
      flag: true
    }
  },
  methods: {
    changeHandler() {
      this.msg = 'Hello vue3' + Date.now()
    },
    sayHello(msg) {
      console.log('hello')
      console.log(msg)
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
