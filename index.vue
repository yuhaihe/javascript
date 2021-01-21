<template>
  <div>
    <child @change="change" :list = "list"/>
  </div>
</template>
<script>
import child from './child';
export default {
components: {child},
  data() {
    return {
      list: [
          {name:'zhangsan'},
          {name:'lisui'},
          {name:'wangwu'},
      ],
    };
  },
  methods: {
    change(index) {
      this.list[index].name2 = 'hay';
      this.list[index].name = 'zhangsan ';
    //   this.list.push({});
    //   this.list.pop();
    },
  },
};
</script>
