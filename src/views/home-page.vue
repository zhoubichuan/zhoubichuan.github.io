<template>
    <div class="home">
        <hello-world msg="前端知识图谱" />
        <img class="img" src="../assets/main.jpg" alt="知识图谱" />
        <div class="copy-right">
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022012824号-1</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HelloWorld from "@/components/hello-world.vue";
</script>

<style lang="scss" scoped>
.img {
    width: 100%;
}

.copy-right {
    font-size: 16px;
}
</style>
