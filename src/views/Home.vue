<template>
  <div class="home">
    <HelloWorld msg="前端知识图谱" />
    <img class="img" src="../assets/main.jpg" alt="知识图谱" />
    <div>
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >鄂ICP备2022012824号-1</a
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {},
};
</script>
<style>
.img {
  width: 100%;
}
</style>
