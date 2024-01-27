<template>
  <div class="about">
    <div class="title">学习文档</div>
    <div class="content">
      <div class="box" v-for="(item, index) in options" :key="index">
        <a :href="item.link">
          <img
            width="40"
            height="40"
            style="margin-top: 10px"
            src="../assets/logo.png"
          />
          <span>{{ item.label }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const options = [
      {
        image: "",
        link: "/web-vue/",
        label: "Vue2.x资料",
      },
      {
        image: "",
        link: "/web-react/",
        label: "React资料",
      },
      {
        image: "",
        link: "/web-webpack/",
        label: "Webpack资料",
      },
      {
        image: "",
        link: "/web-ionic/",
        label: "Ionic资料",
      },
      {
        image: "",
        link: "/web-rollup/",
        label: "Rollup资料",
      },
      {
        image: "",
        link: "/web-electorn/",
        label: "Electorn",
      },
      {
        image: "",
        link: "/web-elementui/",
        label: "ElementUI",
      },
      {
        image: "",
        link: "/web-openlayers/",
        label: "Openlayers",
      },
      {
        image: "",
        link: "/web-cesium/",
        label: "Cesium",
      },
      {
        image: "",
        link: "/web-three/",
        label: "Three.js",
      },
      {
        image: "",
        link: "/web-webgl/",
        label: "Webgl",
      },
      {
        image: "",
        link: "/web-mysql/",
        label: "MySql",
      },
      {
        image: "",
        link: "/web-nginx/",
        label: "Nginx",
      },
      {
        image: "",
        link: "/web-redis/",
        label: "Redis",
      },
      {
        image: "",
        link: "/web-mongodb/",
        label: "MongoDB",
      },
      {
        image: "",
        link: "/web-browser/",
        label: "Browser",
      },
      {
        image: "",
        link: "/web-arithmetic/",
        label: "arithmetic",
      },
      {
        image: "",
        link: "/web-javascript/",
        label: "JavaScript",
      },
      {
        image: "",
        link: "/web-typescript/",
        label: "TypeScript",
      },
      {
        image: "",
        link: "/web-mobile/",
        label: "Mobile",
      },
      {
        image: "",
        link: "/web-node/",
        label: "node",
      },
      {
        image: "",
        link: "/web-devops/",
        label: "DevOps",
      },
      {
        image: "",
        link: "/web-docker/",
        label: "Docker",
      },
      {
        image: "",
        link: "/web-tools/",
        label: "tools",
      },
      {
        image: "",
        link: "/web-koa/",
        label: "Koa",
      },
      {
        image: "",
        link: "/web-express/",
        label: "Express",
      },
      {
        image: "",
        link: "/web-egg/",
        label: "Egg",
      },
      {
        image: "",
        link: "/web-java/",
        label: "Java",
      },
    ];
    const data = reactive({
      options,
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