<template>
  <div class="about">
    <div class="title">项目资料</div>
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
        link: "/jump/",
        label: "微信跳一跳",
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
      {
        image: "",
        link: "/antdpro-demo/",
        label: "数据管理系统",
      },
      {
        image: "",
        link: "/abstract-umi/",
        label: "abstract-umi",
      },
      {
        image: "",
        link: "/abstract-react/",
        label: "abstract-react",
      },
      {
        image: "",
        link: "/abstract-vue/",
        label: "abstract-vue",
      },
      {
        image: "",
        link: "/order/",
        label: "我的菜单",
      },
      {
        image: "",
        link: "/umi-blog/",
        label: "我的博客",
      },
      {
        image: "",
        link: "/wechat-react/",
        label: "wechat-react",
      },
      {
        image: "",
        link: "/wechat-vue/",
        label: "wechat-vue",
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
      {
        image: "",
        link: "/smart-agriculture/",
        label: "智慧农业",
      },
      {
        image: "",
        link: "/agricultural-iot/",
        label: "农机iot",
      },
      {
        image: "",
        link: "/agricultural-machinery-network/",
        label: "农机车联网",
      },
      {
        image: "",
        link: "/agricultural-smart-farm/",
        label: "智慧农业-农场",
      },
      {
        image: "",
        link: "/agricultural-smart-dispatch/",
        label: "智慧农业-调度",
      },
      {
        image: "",
        link: "/agricultural-smart-source/",
        label: "智慧农业-溯源",
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