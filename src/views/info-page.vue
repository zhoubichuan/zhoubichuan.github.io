<template>
    <div class="page-container">
        <div class="page-title">学习文档</div>
        <div class="content-section">
            <div class="item-group" v-for="(item, index) in options" :key="index">
                <div class="group-desc">{{ item.desc }}</div>
                <div class="group-wrapper">
                    <div class="card-box" v-for="(child, i) in item.data" :key="i">
                        <a class="card-link" :href="child.link" target="_blank">
                            <div class="card-icon">
                                <img :src="logoUrl" alt="" />
                            </div>
                            <span class="card-text">{{ child.label }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import logoUrl from '../assets/logo.png';

const options = [
    {
        desc: '开发工具',
        data: [
            { image: '', link: '/web-npm/', label: 'npm' },
            { image: '', link: '/web-git/', label: 'git' },
            { image: '', link: '/web-vscode/', label: 'vscode' },
            { image: '', link: '/web-chrome/', label: 'chrome' }
        ]
    },
    {
        desc: 'javascript',
        data: [
            { image: '', link: '/web-html/', label: 'html' },
            { image: '', link: '/web-css/', label: 'css' },
            { image: '', link: '/web-javascript/', label: 'javascript' },
            { image: '', link: '/web-typescript/', label: 'typescript' }
        ]
    },
    {
        desc: 'vue2.x框架',
        data: [
            { image: '', link: '/web-vue2x/', label: 'vue2.x' },
            { image: '', link: '/web-elementui/', label: 'element' },
            { image: '', link: '/web-nuxt/', label: 'nuxt' }
        ]
    },
    {
        desc: 'vue3.x框架',
        data: [
            { image: '', link: '/web-vue3x/', label: 'vue3.x' },
            { image: '', link: '/web-elementplus/', label: 'element+' }
        ]
    },
    {
        desc: 'react框架',
        data: [
            { image: '', link: '/web-react/', label: 'react' },
            { image: '', link: '/web-antd/', label: 'antd' },
            { image: '', link: '/web-next/', label: 'next' }
        ]
    },
    {
        desc: '构建工具',
        data: [
            { image: '', link: '/web-webpack/', label: 'webpack' },
            { image: '', link: '/web-vite/', label: 'vite' },
            { image: '', link: '/web-gulp/', label: 'gulp' },
            { image: '', link: '/web-rollup/', label: 'rollup' }
        ]
    },
    {
        desc: '客户端',
        data: [
            { image: '', link: '/web-ionic/', label: 'ionic' },
            { image: '', link: '/web-electron/', label: 'electron' },
            { image: '', link: '/web-cordova/', label: 'cordova' }
        ]
    },
    {
        desc: 'node后端',
        data: [
            { image: '', link: '/web-node/', label: 'node' },
            { image: '', link: '/web-express/', label: 'express' },
            { image: '', link: '/web-koa/', label: 'koa' },
            { image: '', link: '/web-egg/', label: 'egg' }
        ]
    },
    {
        desc: '数据库',
        data: [
            { image: '', link: '/web-redis/', label: 'redis' },
            { image: '', link: '/web-mysql/', label: 'mysql' },
            { image: '', link: '/web-mongodb/', label: 'mongodb' },
            { image: '', link: '/web-postgresql/', label: 'postgresql' }
        ]
    },
    {
        desc: '部署相关',
        data: [
            { image: '', link: '/web-devops/', label: 'devops' },
            { image: '', link: '/web-nginx/', label: 'nginx' },
            { image: '', link: '/web-docker/', label: 'docker' },
            { image: '', link: '/web-tools/', label: 'tools' }
        ]
    },
    {
        desc: '数据可视化',
        data: [
            { image: '', link: '/web-zrender/', label: 'zrender' },
            { image: '', link: '/web-echarts/', label: 'echarts' },
            { image: '', link: '/web-openlayers/', label: 'openlayers' },
            { image: '', link: '/web-cesium/', label: 'cesium' }
        ]
    },
    {
        desc: '图形学',
        data: [
            { image: '', link: '/web-webgl/', label: 'webgl' },
            { image: '', link: '/web-d3/', label: 'd3.js' },
            { image: '', link: '/web-three/', label: 'three.js' }
        ]
    },
    {
        desc: '其他',
        data: [
            { image: '', link: '/web-java/', label: 'java' },
            { image: '', link: '/web-rust/', label: 'rust' },
            { image: '', link: '/web-arithmetic/', label: '算法' },
            { image: '', link: '/web-interview/', label: '面试' }
        ]
    }
];

localStorage.informationNames = JSON.stringify(options);
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';
</style>
