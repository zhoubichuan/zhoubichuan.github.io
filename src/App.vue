<template>
    <el-container class="main">
        <el-header class="head">
            <img class="logo" width="40" height="40" style="margin-top: 10px; margin-right: 100px" alt="Vue logo"
                src="./assets/logo.png" />
            <svg @click="handleShow" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"
                viewBox="0 0 448 512" class="icon">
                <path fill="currentColor"
                    d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z">
                </path>
            </svg>
            <el-form :inline="true" :model="formInline">
                <el-form-item label="选择子项目">
                    <el-cascader :disabled="formInline.all" :options="options" @change="handleSelect"
                        :show-all-levels="false" />
                </el-form-item>
                <el-form-item label="显示菜单">
                    <el-switch v-model="formInline.user"></el-switch>
                </el-form-item>
                <el-form-item label="显示全部菜单">
                    <el-switch v-model="formInline.all"></el-switch>
                </el-form-item>
                <el-form-item label="显示类型">
                    <el-input @input="handleChange" v-model="formInline.type"></el-input>
                </el-form-item>
            </el-form>
        </el-header>
        <el-container>
            <el-aside :class="{ menu: true, show: show }" v-if="formInline.user">
                <el-menu :router="true" default-active="/base" class="el-menu-vertical-demo">
                    <li class="menu-title">资料管理系统</li>
                    <el-menu-item-group :title="menus.title" v-for="(menus, index) in menusData" :key="index">
                        <el-menu-item v-for="(n, i) in menus.menuItem" :key="i" :index="n.index" @click="handleShow">{{
                            n.title }}</el-menu-item>
                    </el-menu-item-group>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view v-show="$route.name" />
                <div id="subapp" v-show="!$route.name"></div>
                <div id="resume" v-show="!$route.name"></div>
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
                title: "知识图谱",
            },
            {
                index: "/base/about",
                title: "文档资料",
            },
        ],
    },
];
if (localStorage.projectType === "321456") {
    defaultData[0].menuItem.push({
        index: "/base/project",
        title: "线上项目",
    });
}
let targetArr = [
    {
        title: "jump项目菜单",
        key: "jump",
        menuItem: [
            {
                index: "/jump",
                title: "页面1",
            },
        ],
    },
    {
        title: "froce项目菜单",
        key: "force",
        menuItem: [
            {
                index: "/force",
                title: "页面1",
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
                index: "/resume",
                title: "页面1",
            },
            {
                index: "/resume/about3",
                title: "页面2",
            },
        ],
    },
];
export default defineComponent({
    setup() {
        let microOptions = JSON.parse(localStorage.microOptions || "{}");
        const options = Array.isArray(microOptions)
            ? microOptions
            : [
                {
                    value: "js",
                    label: "js相关项目",
                    children: [
                        {
                            value: "jump",
                            label: "jump",
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
                type: localStorage.projectType || "",
            },
            options,
            show: false,
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
        const handleShow = () => {
            data.show = !data.show;
        };
        const handleChange = (val) => {
            localStorage.projectType = val;
        };
        return {
            ...toRefs(data),
            handleSelect,
            handleShow,
            handleChange,
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


body {
    margin: 0;
    padding: 0;
}

body>.el-container {
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

@media screen and (max-width: 768px) {
    .el-main {
        background-color: #e9eef3;
        color: var(--el-text-color-primary);
        text-align: center;
        line-height: 160px;
        height: calc(100vh - 240px);
    }

    .menu-title {
        font-size: 100px;
        line-height: 180px;
        text-align: center;
    }


    /* 移动端 */
    .head {}

    .logo {
        display: none;
    }

    .icon {
        display: block;
        width: 80px;
    }

    .head .el-form {
        display: none;
    }

    .menu {
        display: none;
        position: absolute;
    }

    .show {
        display: block;
    }
}

@media screen and (min-width: 769px) {
    .el-main {
        background-color: #e9eef3;
        color: var(--el-text-color-primary);
        text-align: center;
        line-height: 160px;
        height: calc(100vh - 60px);
    }

    .menu-title {
        font-size: 34px;
        line-height: 80px;
        text-align: center;
    }

    /* 桌面端 */
    .head {}

    .logo {
        display: block;
    }

    .icon {
        display: none;
    }

    .head .el-form {
        display: block;
    }

    .menu {
        display: block;
    }
}
</style>
