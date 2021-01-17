<template>
  <div>
    {{ main }}
    <button @click="changeList">改变数据</button>
    <p v-for="(i, index) in list" :key="index">{{i.value.value || i.value}}</p>
    <count/>
  </div>
</template>

<script>
import count from './count';

export default {
  name: 'index',
  components:{count},
  data() {
    return {
      main: "我是组件",
      list: [
        {key: 0, value: 0},
        {key: 1, value: {value: 1}},
        {key: 2, value: 2},
        {key: 3, value: 3},
        {key: 4, value: 4},
      ]
    };
  },
  methods: {
    changeList() {
      this.list[1].value.value = 100
    }
  },
};
</script>
