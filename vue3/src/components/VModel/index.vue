<template>
  <div>{{name}} {{age}}</div>
  <UserInfo v-model:name="name" v-model:age="name"/>
</template>

<script>
import { reactive, toRefs } from 'vue'
import UserInfo from './UserInfo.vue'
export default {
  components: {UserInfo},
  setup() {
    const state = reactive({
      name: 'hay',
      age:20
    })

    return toRefs(state)
  }
}
</script>