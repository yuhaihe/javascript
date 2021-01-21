<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.name}}
                <button @click="$emit('change', index)">{{item.name2}}</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['list']
}
</script>