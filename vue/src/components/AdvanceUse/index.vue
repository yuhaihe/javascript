<template>
  <div>
    <p>vue高级特性</p>
    <!-- 自定义v-model -->
    <p>{{name}}</p>
    <CustomVModel v-model="name" @focus="name='focus'"/>
    <!-- <NextTick/> -->
    <!-- <SlotDemo :url="website.url">
        <template #header>
          <div> 
              header-slot
          </div>
        </template>        
        <template v-slot:footer>
          <div> 
              footer-slot
          </div>
        </template>
    </SlotDemo> -->
    <!-- <ScopeSlot :url="website.url">
        <template v-slot="slotProps">
            {{slotProps.slotData.title}}
        </template>
    </ScopeSlot> -->

    <!-- 动态组件 -->
    <!-- <component :is="NextTickName" /> -->

  <!-- <KeepAlive/> -->
  <!-- <Mixin/> -->
  </div>
</template>

<script>
import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import SlotDemo from './Slot'
// import ScopeSlot from './ScopeSlot'
// import KeepAlive from './KeepAlive';
// import Mixin from './Mixin';

export default {
  components: {CustomVModel},
  data() {
    return {
      name: 'hayho',
      website: {
        url: 'http://www.baidu.com',
        title: 'baidu',
        subTitle: '中文最大的搜索引擎'
      },
      NextTickName: 'NextTick'
    }
  }
}
</script>

<style>

</style>