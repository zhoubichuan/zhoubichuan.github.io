<template>
  <el-container class="main">
    <el-header>
      <img
        width="40"
        height="40"
        style="margin-top: 10px; margin-right: 100px"
        alt="Vue logo"
        src="./assets/logo.png"
      />
      <el-form :inline="true" :model="formInline">
        <el-form-item label="选择子项目">
          <el-cascader
            :disabled="formInline.all"
            :options="options"
            @change="handleSelect"
            :show-all-levels="false"
          />
        </el-form-item>
        <el-form-item label="显示菜单">
          <el-switch v-model="formInline.user"></el-switch>
        </el-form-item>
        <el-form-item label="显示全部菜单">
          <el-switch v-model="formInline.all"></el-switch>
        </el-form-item>
      </el-form>
    </el-header>
    <el-container>
      <el-aside width="200px" v-if="formInline.user">
        <el-menu
          :router="true"
          default-active="/base"
          class="el-menu-vertical-demo"
        >
          <li style="text-align: center; line-height: 50px">xxxx系统</li>
          <el-menu-item-group
            :title="menus.title"
            v-for="(menus, index) in menusData"
            :key="index"
          >
            <el-menu-item
              v-for="(n, i) in menus.menuItem"
              :key="i"
              :index="n.index"
              >{{ n.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view v-show="$route.name" />
        <div id="subapp" v-show="!$route.name"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { reactive, toRefs, defineComponent, computed } from "vue";
let defaultData = [
  {
    title: "",
    key: "base",
    menuItem: [
      {
        index: "/base",
        title: "首页",
      },
      {
        index: "/base/about",
        title: "About",
      },
    ],
  },
];
let targetArr = [
  {
    title: "sub1项目菜单",
    key: "sub1",
    menuItem: [
      {
        index: "/sub1",
        title: "页面1",
      },
      {
        index: "/sub1/about1",
        title: "页面2",
      },
    ],
  },
  {
    title: "sub2项目菜单",
    key: "sub2",
    menuItem: [
      {
        index: "/sub2",
        title: "页面1",
      },
      {
        index: "/sub2/about2",
        title: "页面2",
      },
    ],
  },
  {
    title: "resume项目菜单",
    key: "resume",
    menuItem: [
      {
        index: "/child-resume/",
        title: "页面1",
      },
      {
        index: "/child-resume/about3",
        title: "页面2",
      },
    ],
  }
];
export default defineComponent({
  setup() {
    let microOptions = JSON.parse(localStorage.microOptions || "{}");
    const options = Array.isArray(microOptions)
      ? microOptions
      : [
          {
            value: "vue",
            label: "vue相关项目",
            children: [
              {
                value: "sub1",
                label: "sub1",
              },
            ],
          },
          {
            value: "react",
            label: "react相关项目",
            children: [
              {
                value: "sub2",
                label: "sub2",
              },
            ],
          },
          {
            value: "vue2.x",
            label: "vue2.x相关项目",
            children: [
              {
                value: "resume",
                label: "resume",
              },
            ],
          },
        ];
    const data = reactive({
      formInline: {
        user: true,
        all: true,
        region: "",
      },
      options,
    });
    let menusData = computed(() => {
      if (data.formInline.all) {
        return JSON.parse(JSON.stringify(defaultData)).concat(targetArr);
      } else {
        return defaultData;
      }
    });
    const handleSelect = (val) => {
      data.menusData = defaultData;
      let target = JSON.parse(JSON.stringify(targetArr)).filter(
        (item) => item.key === val[val.length - 1]
      );
      data.menusData = data.menusData.concat(target);
    };
    return {
      ...toRefs(data),
      handleSelect,
      menusData,
    };
  },
});
</script>
<style>
.main {
  height: 100vh;
  overflow: hidden;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.el-header {
  display: flex;
}
.el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
  height: calc(100vh - 60px);
}
body {
  margin: 0;
  padding: 0;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-form-item {
  margin-top: 14px;
}
</style>