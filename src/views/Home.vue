<template>
  <div class="home">
    <HelloWorld msg="这里是基座Home页面，页面基于vue3.x开发" />
    <el-table :data="tableData" :span-method="objectSpanMethod" border>
      <el-table-column prop="type" label="web相关资料" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="address" label="地址" />
    </el-table>
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
  setup() {
    const objectSpanMethod = ({ rowIndex, columnIndex }) => {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    };
    const tableData = [
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-vue/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-react/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-webpack/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-ionic/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-rollup/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-electorn/",
      },
      {
        type: "前端框架",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-elementui/",
      },
      {
        type: "地图相关",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-openlayers/",
      },
      {
        type: "地图相关",
        name: "Tom",
        address: "https://zhoubichuan.github.io/web-cesium/",
      },
    ];
    return {
      objectSpanMethod,
      tableData,
    };
  },
};
</script>
