<template>
  <div class="about">
    <div class="title">学习文档</div>
    <div class="content">
      <div class="wrapper" v-for="(item, index) in options" :key="index">
        <div class="box" v-for="(child, i) in item" :key="i">
          <a :href="child.link">
            <img
              width="40"
              height="40"
              style="margin-top: 10px"
              src="../assets/logo.png"
            />
            <span>{{ child.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const options = [
      [
        {
          image: "",
          link: "/web-javascript/",
          label: "javascript",
        },
        {
          image: "",
          link: "/web-arithmetic/",
          label: "arithmetic",
        },
        {
          image: "",
          link: "/web-typescript/",
          label: "typescript",
        },
        {
          image: "",
          link: "/web-browser/",
          label: "browser",
        },
      ],
      [
        {
          image: "",
          link: "/web-vue2/",
          label: "vue2.x",
        },
        {
          image: "",
          link: "/web-elementui/",
          label: "elementui",
        },
      ],
      [
        {
          image: "",
          link: "/web-vue3/",
          label: "vue3.x",
        },
        {
          image: "",
          link: "/web-elementplus/",
          label: "elementplus",
        },
      ],
      [
        {
          image: "",
          link: "/web-react/",
          label: "react",
        },
        {
          image: "",
          link: "/web-antd/",
          label: "antd",
        },
      ],
      [
        {
          image: "",
          link: "/web-webpack/",
          label: "webpack",
        },
        {
          image: "",
          link: "/web-vite/",
          label: "vite",
        },
        {
          image: "",
          link: "/web-gulp/",
          label: "gulp",
        },
        {
          image: "",
          link: "/web-rollup/",
          label: "rollup",
        },
      ],
      [
      {
          image: "",
          link: "/web-zrender/",
          label: "zrender",
        },
        {
          image: "",
          link: "/web-echarts/",
          label: "echarts",
        },
        {
          image: "",
          link: "/web-openlayers/",
          label: "openlayers",
        },
        {
          image: "",
          link: "/web-cesium/",
          label: "cesium",
        },
      ],
      [
        {
          image: "",
          link: "/web-redis/",
          label: "redis",
        },
        {
          image: "",
          link: "/web-mysql/",
          label: "mysql",
        },
        {
          image: "",
          link: "/web-mongodb/",
          label: "mongodb",
        },
      ],
      [
        {
          image: "",
          link: "/web-node/",
          label: "node",
        },
        {
          image: "",
          link: "/web-express/",
          label: "express",
        },
        {
          image: "",
          link: "/web-koa/",
          label: "koa",
        },

        {
          image: "",
          link: "/web-egg/",
          label: "egg",
        },
      ],
      [
        {
          image: "",
          link: "/web-ionic/",
          label: "ionic",
        },
        {
          image: "",
          link: "/web-electorn/",
          label: "electorn",
        },
        {
          image: "",
          link: "/web-mobile/",
          label: "mobile",
        },
      ],
      [
      {
          image: "",
          link: "/web-webgl/",
          label: "webgl",
        },
        {
          image: "",
          link: "/web-d3/",
          label: "d3.js",
        },
        {
          image: "",
          link: "/web-three/",
          label: "three.js",
        },
      ],
      [
        {
          image: "",
          link: "/web-devops/",
          label: "devops",
        },
        {
          image: "",
          link: "/web-nginx/",
          label: "nginx",
        },
        {
          image: "",
          link: "/web-docker/",
          label: "docker",
        },
        {
          image: "",
          link: "/web-tools/",
          label: "tools",
        },
      ],
      [
        {
          image: "",
          link: "/web-java/",
          label: "java",
        },
        {
          image: "",
          link: "/web-rust/",
          label: "rust",
        },
      ],
    ];
    localStorage.informationNames = JSON.stringify(options);
    const data = reactive({
      options: JSON.parse(localStorage.informationNames),
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>
<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 20px;
}
.wrapper {
  border: 1px solid red;
  border-radius: 5px;
  height: 90px;
  margin: 10px;
}
.box {
  width: 25%;
  min-width: 100px;
  display: block;
  float: left;
  line-height: 40px;
  text-align: center;
}
.box:hover {
  background-color: lightblue;
}
img {
  display: block;
  margin: 0 auto;
}
a {
  display: block;
  width: 100%;
  text-align: center;
  color: #333;
  text-decoration: none;
}
</style>