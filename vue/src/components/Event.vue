<template>
    <div>
       {{num}}
        <button @click="increment1">+1</button>
        <button @click="increment2($event, 2)">+2</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    methods: {
        increment1(e) {
            console.log(e.__proto__.constructor);
            console.log(e.target);
            console.log(e.currentTarget);
            this.num++;
        },
        increment2(e, val) {
            console.log(val ,e);
            this.num += val;
        }
    },
}
</script>