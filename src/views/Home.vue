<template>
  <div class="home">
    <HelloWorld msg="这里是基座Home页面，页面基于vue3.x开发" />
<<<<<<< HEAD
    <el-table :data="tableData" :span-method="objectSpanMethod" border>
      <el-table-column prop="type" label="web相关资料" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="address" label="地址" />
=======
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
    >
      <el-table-column prop="id" label="分类" width="180" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="amount1" label="链接" />
      <el-table-column prop="amount2" label="Amount 2" />
      <el-table-column prop="amount3" label="Amount 3" />
>>>>>>> c0b393934a01cbffdca645ce9ed2c8d7aa3d777f
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
<<<<<<< HEAD
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
=======
        id: "12987122",
        name: "Tom",
        amount1: "234",
        amount2: "3.2",
        amount3: 10,
      },
      {
        id: "12987123",
        name: "Tom",
        amount1: "165",
        amount2: "4.43",
        amount3: 12,
      },
      {
        id: "12987124",
        name: "Tom",
        amount1: "324",
        amount2: "1.9",
        amount3: 9,
      },
      {
        id: "12987125",
        name: "Tom",
        amount1: "621",
        amount2: "2.2",
        amount3: 17,
      },
      {
        id: "12987126",
        name: "Tom",
        amount1: "539",
        amount2: "4.1",
        amount3: 15,
>>>>>>> c0b393934a01cbffdca645ce9ed2c8d7aa3d777f
      },
    ];
    return {
      objectSpanMethod,
      tableData,
    };
  },
};
</script>
