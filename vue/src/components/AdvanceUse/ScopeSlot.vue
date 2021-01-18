<template>
 <a :href="url">
   <slot :slotData="website">
     {{website.subTitle}}
   </slot>
 </a>
</template>

<script>
export default {
props: ['url'],
data() {
  return {
      website: {
        url: 'http://www.google.com',
        title: 'google',
        subTitle: '全球最大的搜索引擎'
      }
  }
}
}
</script>

<style>

</style>