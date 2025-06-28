<template>
  <div class="about">
    <div class="title">学习文档</div>
    <div class="content">
      <div v-for="(item, index) in data.options" :key="index">
        <div class="desc">{{ item.desc }}</div>
        <div class="wrapper">
          <div class="box" v-for="(child, i) in item.data" :key="i">
            <a :href="child.link">
              <img
                width="38"
                height="38"
                src="../assets/logo.png"
              />
              <span class="text">{{ child.label }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const options = [
  {
    desc: "开发工具",
    data: [
      {
        image: "",
        link: "/web-npm/",
        label: "npm",
      },
      {
        image: "",
        link: "/web-git/",
        label: "git",
      },
      {
        image: "",
        link: "/web-vscode/",
        label: "vscode",
      },
      {
        image: "",
        link: "/web-chrome/",
        label: "chrome",
      },
    ],
  },
  {
    desc: "javascript",
    data: [
      {
        image: "",
        link: "/web-html/",
        label: "html",
      },
      {
        image: "",
        link: "/web-css/",
        label: "css",
      },
      {
        image: "",
        link: "/web-javascript/",
        label: "javascript",
      },
      {
        image: "",
        link: "/web-typescript/",
        label: "typescript",
      },
    ],
  },
  {
    desc: "vue2.x框架",
    data: [
      {
        image: "",
        link: "/web-vue2x/",
        label: "vue2.x",
      },
      {
        image: "",
        link: "/web-elementui/",
        label: "element",
      },
      {
        image: "",
        link: "/web-nuxt/",
        label: "nuxt",
      },
    ],
  },
  {
    desc: "vue3.x框架",
    data: [
      {
        image: "",
        link: "/web-vue3x/",
        label: "vue3.x",
      },
      {
        image: "",
        link: "/web-elementplus/",
        label: "element+",
      },
    ],
  },
  {
    desc: "react框架",
    data: [
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
      {
        image: "",
        link: "/web-next/",
        label: "next",
      },
    ],
  },
  {
    desc: "构建工具",
    data: [
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
  },
  {
    desc: "客户端",
    data: [
      {
        image: "",
        link: "/web-ionic/",
        label: "ionic",
      },
      {
        image: "",
        link: "/web-electron/",
        label: "electorn",
      },
      {
        image: "",
        link: "/web-cordova/",
        label: "cordova",
      },
    ],
  },
  {
    desc: "node后端",
    data: [
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
  },
  {
    desc: "数据库",
    data: [
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
      {
        image: "",
        link: "/web-postgresql/",
        label: "postgresql",
      },
    ],
  },
  {
    desc: "部署相关",
    data: [
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
  },
  {
    desc: "数据可视化",
    data: [
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
  },
  {
    desc: "图形学",
    data: [
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
  },
  {
    desc: "其他",
    data: [
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
      {
        image: "",
        link: "/web-arithmetic/",
        label: "算法",
      },
      {
        image: "",
        link: "/web-interview/",
        label: "面试",
      },
    ],
  },
];
localStorage.informationNames = JSON.stringify(options);
const data = reactive({
  options: JSON.parse(localStorage.informationNames),
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  /* 移动端 */
  .box {
    border: 1px solid transparent;
    width: calc(25% - 2px);
    min-width: 60px;
    display: block;
    float: left;
    line-height: 40px;
    text-align: center;
  }
}

@media screen and (min-width: 769px) {
  /* 桌面端 */
  .box {
    border: 1px solid transparent;
    width: calc(25% - 2px);
    min-width: 100px;
    display: block;
    float: left;
    line-height: 40px;
    text-align: center;
  }
}

.title {
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 20px;
}

.desc {
  text-align: left;
  height: 20px;
  line-height: 20px;
  text-indent: 10px;
  padding: 10px 0;
  color: #000;
  font-size: 24px;
}

.wrapper {
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 90px;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #fff;
}

.box:hover {
  border: 1px solid transparent;
  border-radius: 8px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(
      45deg,
      #e2eef1,
      rgba(205, 238, 255, 0.2) 99%
    ),
    linear-gradient(
      45deg,
      rgb(160, 178, 183),
      rgba(82.00000271201134, 218.00000220537186, 255, 0.18000000715255737),
      rgba(82.00000271201134, 218.00000220537186, 255, 0.4000000059604645),
      rgba(82.00000271201134, 218.00000220537186, 255, 0.75)
    );
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
  img{
    margin-top: 10px;
  }
  .text{
    font-size: 20px;
  }
}
</style>
