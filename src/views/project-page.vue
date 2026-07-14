<template>
    <div class="page-container">
        <div class="page-header">
            <div class="page-title">项目资料</div>
            <p class="page-subtitle">线上项目与实战案例集合</p>
        </div>
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
        <div class="copy-right">
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022012824号-1</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import logoUrl from '../assets/logo.png';

const options = [
    {
        desc: '数据管理',
        data: [
            { image: '', link: '/umi-blog/', label: '我的博客' },
            { image: '', link: '/resume/', label: '简历介绍' },
            { image: '', link: '/classroom/', label: '学习课堂' },
            { image: '', link: '/website/', label: '门户网站' }
        ]
    },
    {
        desc: '组件项目',
        data: [
            { image: '', link: '/antdpro-demo/', label: '数据管理' },
            { image: '', link: '/order/', label: '菜单管理' },
            { image: '', link: '/map-manager/', label: '地图管理' }
        ]
    },
    {
        desc: '抽象数据',
        data: [
            { image: '', link: '/abstract-umi/', label: '表格数据' },
            { image: '', link: '/abstract-react/', label: 'react' },
            { image: '', link: '/abstract-vue/', label: 'vue' }
        ]
    },
    {
        desc: '聊天项目',
        data: [
            { image: '', link: '/wechat-react/', label: 'AI聊天' },
            { image: '', link: '/wechat-vue/', label: '通信工具' }
        ]
    },
    {
        desc: '游戏项目',
        data: [
            { image: '', link: '/jump/', label: '跳一跳' },
            { image: '', link: '/flybird/', label: '飞鸟游戏' },
            { image: '', link: '/elementsell/', label: '外卖' }
        ]
    },
    {
        desc: '移动端',
        data: [
            { image: '', link: '/force/', label: '力图' },
            { image: '', link: '/managment/', label: 'managment' },
            { image: '', link: '/zhoubichuan-vue-ui/', label: 'vue-ui' },
            { image: '', link: '/zhoubichuan-react-ui/', label: 'react-ui' }
        ]
    },
    {
        desc: '智慧农业3.0',
        data: [
            { image: '', link: '/agricultural-machinery-working/', label: '农机作业' },
            { image: '', link: '/agricultural-iot/', label: '农机iot' },
            { image: '', link: '/agricultural-machinery-network/', label: '车联网' }
        ]
    },
    {
        desc: '智慧农业2.0',
        data: [
            { image: '', link: '/agricultural-smart-farm/', label: '农场' },
            { image: '', link: '/agricultural-smart-condition/', label: '农情' },
            { image: '', link: '/agricultural-smart-water/', label: '灌溉' },
            { image: '', link: '/agricultural-smart-dispatch/', label: '调度' }
        ]
    },
    {
        desc: '智慧农业1.0',
        data: [
            { image: '', link: '/agricultural-smart/', label: '智慧农业' },
            { image: '', link: '/agricultural-smart-source/', label: '溯源' }
        ]
    }
];

localStorage.projectNames = JSON.stringify(options);
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';
</style>
