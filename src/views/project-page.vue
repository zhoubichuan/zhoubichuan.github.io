<template>
  <div class="about">
    <div class="title">项目资料</div>
    <div class="content">
      <div v-for="(item, index) in data.options" :key="index">
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
<script lang="ts" setup>
import { reactive } from "vue";
const options = [
  {
    desc: "数据管理",
    data: [
      {
        image: "",
        link: "/umi-blog/",
        label: "我的博客",
      },
      {
        image: "",
        link: "/resume/",
        label: "我的简历",
      },
      {
        image: "",
        link: "/classroom/",
        label: "我的课堂",
      },
      {
        image: "",
        link: "/website/",
        label: "我的网站",
      },
    ],
  },
  {
    desc: "组件项目",
    data: [
      {
        image: "",
        link: "/antdpro-demo/",
        label: "数据管理",
      },
      {
        image: "",
        link: "/order/",
        label: "我的菜单",
      },
    ],
  },
  {
    desc: "抽象数据",
    data: [
      {
        image: "",
        link: "/abstract-umi/",
        label: "umi",
      },
      {
        image: "",
        link: "/abstract-react/",
        label: "react",
      },
      {
        image: "",
        link: "/abstract-vue/",
        label: "vue",
      },
    ],
  },
  {
    desc: "微信项目",
    data: [
      {
        image: "",
        link: "/wechat-react/",
        label: "react微信",
      },
      {
        image: "",
        link: "/wechat-vue/",
        label: "vue微信",
      },
    ],
  },
  {
    desc: "游戏项目",
    data: [
      {
        image: "",
        link: "/jump/",
        label: "跳一跳",
      },
      {
        image: "",
        link: "/flybird/",
        label: "飞鸟游戏",
      },
      {
        image: "",
        link: "/elementsell/",
        label: "外卖",
      },
    ],
  },
  {
    desc: "移动端",
    data: [
      {
        image: "",
        link: "/force/",
        label: "力图",
      },
      {
        image: "",
        link: "/managment/",
        label: "managment",
      },
      {
        image: "",
        link: "/zhoubichuan-vue-ui/",
        label: "vue-ui",
      },
      {
        image: "",
        link: "/zhoubichuan-react-ui/",
        label: "react-ui",
      },
    ],
  },
  {
    desc: "智慧农业3.0",
    data: [
      {
        image: "",
        link: "/agricultural-machinery-working/",
        label: "农机作业",
      },
      {
        image: "",
        link: "/agricultural-iot/",
        label: "农机iot",
      },
      {
        image: "",
        link: "/agricultural-machinery-network/",
        label: "车联网",
      },
    ],
  },
  {
    desc: "智慧农业2.0",
    data: [
      {
        image: "",
        link: "/agricultural-smart-farm/",
        label: "农场",
      },
      {
        image: "",
        link: "/agricultural-smart-condition/",
        label: "农情",
      },
      {
        image: "",
        link: "/agricultural-smart-water/",
        label: "灌溉",
      },
      {
        image: "",
        link: "/agricultural-smart-dispatch/",
        label: "调度",
      },
    ],
  },
  {
    desc: "智慧农业1.0",
    data: [
      {
        image: "",
        link: "/agricultural-smart/",
        label: "智慧农业",
      },
      {
        image: "",
        link: "/agricultural-smart-source/",
        label: "溯源",
      },
    ],
  },
];
localStorage.projectNames = JSON.stringify(options);
const data = reactive({
  options: JSON.parse(localStorage.projectNames),
});
</script>
<style scoped>
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
}
</style>
