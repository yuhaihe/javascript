<template>
    <div>
        list
       <p  v-for="item in list" :key="item">{{item}}</p>
       obj
        <p  v-for="(value, key, index) in listObj" :key="key">
            {{index}} -{{key}}--{{value.title}}
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: true,
            list: [1,2,3,4,5],
            listObj: {
                a: {id: 'a', title: '标题a'},
                b: {id: 'b', title: '标题b'},
                c: {id: 'c', title: '标题c'},
            }
        }
    }
}
</script>