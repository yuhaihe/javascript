import Vue from 'vue';
const Index2 = () => import('./components/index2')

const app = new Vue({
    components: { Index2 }
}).$mount('#app');