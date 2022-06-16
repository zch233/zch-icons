<template>
    <div class="home">
        <div class="home-search"><IconSearchOutlined /><input type="text" /></div>
    </div>
</template>

<script setup>
import { IconSearchOutlined } from 'icon-vue3';

useHead({
    title: '😍',
});

onMounted(() => {
    console.log(1111);
});
</script>

<style scoped lang="less">
.home {
    &-search {
    }
}
</style>
