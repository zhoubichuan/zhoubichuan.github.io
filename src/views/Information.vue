<template>
  <div class="about">
    <div class="title">学习文档</div>
    <div class="content">
      <div v-for="(item, index) in options" :key="index">
        <div class="desc">{{ item.desc }}</div>
        <div class="wrapper">
          <div class="box" v-for="(child, i) in item.data" :key="i">
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
  </div>
</template>
<script>
import { reactive, toRefs, defineComponent } from "vue";
export default defineComponent({
  setup() {
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
            label: "ide",
          },
          {
            image: "",
            link: "/web-browser/",
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
            link: "/web-vue2/",
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
            link: "/web-electorn/",
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

    return {
      ...toRefs(data),
    };
  },
});
</script>
<style scoped>
@media screen and (max-width: 768px) {
  /* 移动端 */
  .box {
    width: 25%;
    min-width: 80px;
    display: block;
    float: left;
    line-height: 40px;
    text-align: center;
  }
}

@media screen and (min-width: 769px) {
  /* 桌面端 */
  .box {
    width: 25%;
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
  padding-top: 10px;
}
.wrapper {
  border: 1px solid red;
  border-radius: 5px;
  height: 90px;
  margin: 10px;
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