<template>
    <el-config-provider namespace="base">
        <el-container class="main-container">
            <el-header class="main-header">
                <div class="header-left">
                    <img
                        class="logo"
                        width="40"
                        height="40"
                        :src="logoUrl"
                        alt="Vue logo"
                    />
                    <span class="logo-title">资料管理系统</span>
                </div>
                <svg
                    @click="handleToggleMenu"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    viewBox="0 0 448 512"
                    class="menu-toggle"
                >
                    <path
                        fill="currentColor"
                        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                    ></path>
                </svg>
                <el-form :inline="true" :model="formInline" class="header-form">
                    <el-form-item label="选择子项目">
                        <el-cascader
                            :disabled="formInline.all"
                            :options="options"
                            @change="handleSelect"
                            :show-all-levels="false"
                            placeholder="请选择"
                        />
                    </el-form-item>
                    <el-form-item label="显示菜单">
                        <el-switch v-model="formInline.user" />
                    </el-form-item>
                    <el-form-item label="显示全部菜单">
                        <el-switch v-model="formInline.all" />
                    </el-form-item>
                    <el-form-item label="显示类型">
                        <el-input 
                            @input="handleChange" 
                            v-model="formInline.type"
                            placeholder="输入类型"
                        />
                    </el-form-item>
                </el-form>
            </el-header>
            <el-container class="main-body">
                <transition name="slide">
                    <el-aside v-if="formInline.user" class="main-aside" :class="{ 'aside-visible': isMenuVisible }">
                        <el-menu 
                            :router="true" 
                            default-active="/base" 
                            class="side-menu"
                            :collapse="isMenuCollapsed"
                            background-color="#ffffff"
                            text-color="#1e293b"
                            active-color="#4f46e5"
                        >
                            <div class="menu-header">
                                <span v-if="!isMenuCollapsed" class="menu-title">资料管理系统</span>
                            </div>
                            <template v-for="(group, groupIndex) in menusData" :key="groupIndex">
                                <el-menu-item-group v-if="group.title" :title="group.title">
                                    <el-menu-item
                                        v-for="(item, itemIndex) in group.menuItem"
                                        :key="itemIndex"
                                        :index="item.index"
                                        @click="handleMenuClick(item)"
                                    >
                                        <span>{{ item.title }}</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item
                                    v-else
                                    v-for="(item, itemIndex) in group.menuItem"
                                    :key="itemIndex"
                                    :index="item.index"
                                    @click="handleMenuClick(item)"
                                >
                                    <span>{{ item.title }}</span>
                                </el-menu-item>
                            </template>
                        </el-menu>
                    </el-aside>
                </transition>
                <el-main class="main-content">
                    <router-view v-show="$route.name" />
                    <div id="subapp" v-show="!$route.name"></div>
                    <div id="resume" v-show="!$route.name"></div>
                </el-main>
            </el-container>
        </el-container>
    </el-config-provider>
</template>

<script setup lang="ts">
import { ref, computed, reactive, toRefs } from 'vue';
import logoUrl from './assets/logo.png';

const defaultData = [
    {
        title: '',
        key: 'base',
        menuItem: [
            { index: '/base', title: '知识图谱' },
            { index: '/base/about', title: '文档资料' }
        ]
    }
];

if (localStorage.projectType === '321456') {
    defaultData[0].menuItem.push({
        index: '/base/project',
        title: '线上项目'
    });
}

const targetArr = [
    {
        title: 'jump项目菜单',
        key: 'jump',
        menuItem: [{ index: '/jump', title: '页面1' }]
    },
    {
        title: 'froce项目菜单',
        key: 'force',
        menuItem: [{ index: '/force', title: '页面1' }]
    },
    {
        title: 'sub2项目菜单',
        key: 'sub2',
        menuItem: [
            { index: '/sub2', title: '页面1' },
            { index: '/sub2/about2', title: '页面2' }
        ]
    },
    {
        title: 'resume项目菜单',
        key: 'resume',
        menuItem: [
            { index: '/resume', title: '页面1' },
            { index: '/resume/about3', title: '页面2' }
        ]
    }
];

const microOptions = JSON.parse(localStorage.microOptions || '{}');
const options = Array.isArray(microOptions)
    ? microOptions
    : [
          {
              value: 'js',
              label: 'js相关项目',
              children: [{ value: 'jump', label: 'jump' }]
          },
          {
              value: 'react',
              label: 'react相关项目',
              children: [{ value: 'sub2', label: 'sub2' }]
          },
          {
              value: 'vue2.x',
              label: 'vue2.x相关项目',
              children: [{ value: 'resume', label: 'resume' }]
          }
      ];

const formInline = reactive({
    user: true,
    all: true,
    region: '',
    type: localStorage.projectType || ''
});

const isMenuVisible = ref(false);
const isMenuCollapsed = ref(false);
const selectedProject = ref<string>('');

const menusData = computed(() => {
    const baseData = JSON.parse(JSON.stringify(defaultData));
    
    if (formInline.all) {
        return baseData.concat(targetArr);
    }
    
    if (selectedProject.value) {
        const target = targetArr.filter(item => item.key === selectedProject.value);
        return baseData.concat(target);
    }
    
    return baseData;
});

const handleSelect = (val: string[]) => {
    if (val && val.length > 0) {
        selectedProject.value = val[val.length - 1];
        formInline.all = false;
    } else {
        selectedProject.value = '';
        formInline.all = true;
    }
};

const handleToggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};

const handleMenuClick = (item: { index: string }) => {
    isMenuVisible.value = false;
};

const handleChange = (val: string) => {
    localStorage.projectType = val;
};

defineExpose({
    formInline: toRefs(formInline),
    options,
    handleSelect,
    handleToggleMenu,
    handleChange,
    menusData
});
</script>

<style lang="scss" scoped>
@import './styles/variables.scss';

.main-container {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: $font-family;
}

.main-header {
    background: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 $spacing-xl;
    box-shadow: $shadow-sm;
    position: relative;
    z-index: 100;
    height: 60px;
    flex-shrink: 0;
    border-bottom: 1px solid $border-color;
}

.header-left {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
}

.logo {
    width: 36px;
    height: 36px;
    border-radius: $border-radius-md;
    background: $primary-gradient;
    padding: $spacing-xs;
    box-sizing: border-box;
    transition: transform $transition-normal;
    
    &:hover {
        transform: scale(1.05);
    }
}

.logo-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    display: none;
    
    @media screen and (min-width: $breakpoint-md) {
        display: block;
    }
}

.menu-toggle {
    width: 36px;
    height: 36px;
    cursor: pointer;
    padding: $spacing-sm;
    border-radius: $border-radius-md;
    transition: all $transition-normal;
    margin-right: $spacing-sm;
    color: $text-secondary;
    
    &:hover {
        background: $bg-hover;
        color: $text-primary;
    }
    
    @media screen and (min-width: $breakpoint-md) {
        display: none;
    }
}

.header-form {
    margin-left: auto;
    display: none;
    
    @media screen and (min-width: $breakpoint-lg) {
        display: flex;
        align-items: center;
        gap: 32px;
    }
    
    :deep(.el-form-item) {
        margin-bottom: 0;
        
        :deep(.el-form-item__label) {
            color: $text-regular;
            font-size: $font-size-sm;
            padding-right: $spacing-sm;
        }
        
        :deep(.el-input),
        :deep(.el-cascader) {
            width: 140px;
            
            :deep(.el-input__wrapper) {
                border-radius: $border-radius-md;
                border: 1px solid $border-color;
                
                &:hover {
                    border-color: $primary-light;
                }
                
                &.is-focus {
                    border-color: $primary-color;
                    box-shadow: 0 0 0 2px rgba($primary-color, 0.1);
                }
            }
        }
        
        :deep(.el-switch) {
            margin-left: $spacing-sm;
        }
    }
}

.main-body {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.main-aside {
    width: 220px;
    background: #ffffff;
    flex-shrink: 0;
    transition: width $transition-slow;
    position: relative;
    transform: translateX(0) !important;
    border-right: 1px solid $border-color;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

@media screen and (max-width: $breakpoint-md - 1px) {
    .main-aside {
        position: fixed;
        left: 0;
        top: 60px;
        bottom: 0;
        z-index: 99;
        transform: translateX(-100%) !important;
        width: 260px;
        transition: transform $transition-normal;
        
        &.aside-visible {
            transform: translateX(0) !important;
        }
    }
}

.menu-header {
    padding: $spacing-xl;
    border-bottom: 1px solid $border-color;
}

.menu-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
}

.side-menu {
    background: transparent;
    border: none;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: $spacing-md 0;
    
    &::-webkit-scrollbar {
        width: 4px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.08);
        border-radius: 2px;
    }
    
    :deep(.el-menu-item-group) {
        :deep(.el-menu-item-group__title) {
            color: $text-primary !important;
            font-size: $font-size-xs !important;
            padding: $spacing-xl $spacing-lg $spacing-sm !important;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 700 !important;
            border-left: 3px solid $primary-color;
            margin-left: $spacing-md;
        }
    }
    
    :deep(.el-menu-item) {
        color: $text-primary !important;
        border-radius: $border-radius-md;
        margin: $spacing-xs $spacing-lg;
        transition: all $transition-normal;
        position: relative;
        background: transparent !important;
        height: 44px;
        line-height: 44px;
        padding-left: $spacing-xl !important;
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%) scaleY(0);
            width: 3px;
            height: 20px;
            background: $primary-gradient;
            border-radius: 0 2px 2px 0;
            transition: transform $transition-normal;
        }
        
        &:hover {
            background: rgba($primary-color, 0.05) !important;
            color: $primary-color !important;
            
            &::before {
                transform: translateY(-50%) scaleY(1);
            }
        }
        
        &.is-active {
            background: rgba($primary-color, 0.08) !important;
            color: $primary-color !important;
            font-weight: 600;
            
            &::before {
                transform: translateY(-50%) scaleY(1);
            }
        }
    }
}

.main-content {
    flex: 1;
    background: $bg-color;
    overflow-y: auto;
    padding: $spacing-xl;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.08);
        border-radius: 3px;
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: transform $transition-normal;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}

@media screen and (max-width: $breakpoint-md - 1px) {
    .main-header {
        padding: 0 $spacing-lg;
        height: 56px;
    }
    
    .main-content {
        padding: $spacing-lg;
    }
}

:global(body) {
    margin: 0;
    padding: 0;
    font-family: $font-family;
    background: $bg-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
