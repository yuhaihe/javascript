<template>
    <div>
        <input type="text" v-model="noDeep">
        <br>
        <br>
        <br>
        <input type="text" v-model="deeps.info.value">
    </div>
</template>
<script>
export default {
    data() {
        return {
            noDeep: 'noDeep',
            deeps: {
                info: {
                    value: 'deep'
                }
            }
        }
    },
    watch: {
        noDeep(val, oldVal) {
            console.log(val, oldVal)
        },
        deeps: {
            handler(val, oldVal) {
                 console.log(val.info.value, oldVal)
            },
            deep: true
        }
    }
}
</script>