<template>
 <a :href="url">
   <header>
     <!-- 具名插槽 -->
     <slot name="header"></slot>
   </header>
   <main>main</main>
   <footer><slot name="footer"></slot></footer>
 </a>
</template>

<script>
export default {
props: ['url'],
data() {
  return {

  }
}
}
</script>

<style>

</style>