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
                            background-color="transparent"
                            text-color="#334155"
                            active-color="#2563eb"
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
                <div
                    v-if="formInline.user && isMenuVisible"
                    class="mobile-mask"
                    @click="handleToggleMenu"
                ></div>
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
    color: $text-primary;
    background:
        radial-gradient(circle at top left, rgba($primary-light, 0.14), transparent 34%),
        linear-gradient(180deg, #ffffff 0%, $bg-color 34%, #eef4f8 100%);
}

.main-header {
    background: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(18px);
    display: flex;
    align-items: center;
    padding: 0 $spacing-xxl;
    box-shadow: 0 1px 0 rgba(15, 23, 42, 0.06);
    position: sticky;
    top: 0;
    z-index: 100;
    height: 68px;
    flex-shrink: 0;
    border-bottom: 1px solid rgba(219, 227, 238, 0.78);
}

.header-left {
    display: flex;
    align-items: center;
    gap: $spacing-lg;
}

.logo {
    width: 40px;
    height: 40px;
    border-radius: $border-radius-md;
    background:
        linear-gradient(#ffffff, #ffffff) padding-box,
        $primary-gradient border-box;
    border: 1px solid transparent;
    padding: 6px;
    box-sizing: border-box;
    box-shadow: 0 12px 28px rgba($primary-color, 0.15);
    transition: transform $transition-normal, box-shadow $transition-normal;
    
    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 16px 32px rgba($primary-color, 0.2);
    }
}

.logo-title {
    font-size: $font-size-xl;
    font-weight: 700;
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
    color: $text-regular;
    
    &:hover {
        background: $bg-hover;
        color: $text-primary;
    }
    
    @media screen and (min-width: $breakpoint-md) {
        display: none;
    }

    @media screen and (max-width: $breakpoint-md - 1px) {
        order: -1;
        flex-shrink: 0;
    }
}

.header-form {
    margin-left: auto;
    display: none;
    
    @media screen and (min-width: $breakpoint-lg) {
        display: flex;
        align-items: center;
        gap: $spacing-lg;
        height: 40px;
    }
    
    :deep(.el-form-item),
    :deep(.base-form-item) {
        display: flex;
        align-items: center;
        height: 40px;
        margin-bottom: 0;
        margin-right: 0;
        
        :deep(.el-form-item__label),
        :deep(.base-form-item__label) {
            display: inline-flex;
            align-items: center;
            height: 32px;
            line-height: 32px;
            color: $text-secondary;
            font-size: $font-size-sm;
            padding: 0 $spacing-sm 0 0;
        }

        :deep(.el-form-item__content),
        :deep(.base-form-item__content) {
            display: inline-flex;
            align-items: center;
            min-height: 32px;
            line-height: 32px;
        }
        
        :deep(.el-input),
        :deep(.base-input),
        :deep(.el-cascader),
        :deep(.base-cascader) {
            width: 136px;
            height: 32px;
            
            :deep(.el-input__wrapper),
            :deep(.base-input__wrapper) {
                min-height: 32px;
                border-radius: $border-radius-md;
                border: 1px solid $border-color;
                box-shadow: none;
                background: rgba(255, 255, 255, 0.78);
                
                &:hover {
                    border-color: $primary-light;
                }
                
                &.is-focus {
                    border-color: $primary-color;
                    box-shadow: 0 0 0 2px rgba($primary-color, 0.1);
                }
            }
        }
        
        :deep(.el-switch),
        :deep(.base-switch) {
            height: 24px;
            line-height: 24px;
            margin-left: 0;
            vertical-align: middle;
        }
    }
}

.main-body {
    flex: 1;
    display: flex;
    overflow: hidden;
    min-height: 0;
}

.main-aside {
    width: 236px;
    background: rgba(255, 255, 255, 0.76);
    backdrop-filter: blur(18px);
    flex-shrink: 0;
    transition: width $transition-slow;
    position: relative;
    transform: translateX(0) !important;
    border-right: 1px solid rgba(219, 227, 238, 0.78);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

@media screen and (max-width: $breakpoint-md - 1px) {
    .main-aside {
        position: fixed;
        left: 0;
        top: 60Px;
        bottom: 0;
        z-index: 99;
        transform: translateX(-100%) !important;
        width: 260Px;
        transition: transform $transition-normal;
        box-shadow: 24Px 0 60Px rgba(15, 23, 42, 0.2);
        
        &.aside-visible {
            transform: translateX(0) !important;
        }
    }
}

.mobile-mask {
    display: none;
}

.menu-header {
    padding: $spacing-xl $spacing-xl $spacing-lg;
    border-bottom: 1px solid rgba(219, 227, 238, 0.72);
}

.menu-title {
    font-size: $font-size-lg;
    font-weight: 700;
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
    
    :deep(.el-menu-item-group),
    :deep(.base-menu-item-group) {
        :deep(.el-menu-item-group__title),
        :deep(.base-menu-item-group__title) {
            color: $text-secondary !important;
            font-size: $font-size-xs !important;
            padding: $spacing-xl $spacing-lg $spacing-sm !important;
            text-transform: uppercase;
            letter-spacing: 0;
            font-weight: 700 !important;
            border-left: 3px solid $primary-light;
            margin-left: $spacing-md;
        }
    }
    
    :deep(.el-menu-item),
    :deep(.base-menu-item) {
        color: $text-regular !important;
        border-radius: $border-radius-md;
        margin: $spacing-xs $spacing-md;
        transition: all $transition-normal;
        position: relative;
        background: transparent !important;
        height: 42px;
        line-height: 42px;
        padding-left: $spacing-xl !important;
        font-weight: 500;
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%) scaleY(0);
            width: 3px;
            height: 18px;
            background: $primary-gradient;
            border-radius: 0 2px 2px 0;
            transition: transform $transition-normal;
        }
        
        &:hover {
            background: rgba($primary-color, 0.07) !important;
            color: $primary-color !important;
            
            &::before {
                transform: translateY(-50%) scaleY(1);
            }
        }
        
        &.is-active {
            background:
                linear-gradient(90deg, rgba($primary-color, 0.12), rgba($primary-light, 0.06)) !important;
            color: $primary-color !important;
            font-weight: 700;
            
            &::before {
                transform: translateY(-50%) scaleY(1);
            }
        }
    }
}

.main-content {
    flex: 1;
    background:
        radial-gradient(circle at 88% 0%, rgba(#f59e0b, 0.12), transparent 28%),
        radial-gradient(circle at 4% 100%, rgba($primary-light, 0.12), transparent 32%),
        transparent;
    overflow-y: auto;
    padding: $spacing-xxl;
    min-width: 0;
    
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
        gap: 8Px;
        padding: 0 12Px;
        height: 60Px;
    }

    .header-left {
        min-width: 0;
        gap: 8Px;
    }

    .logo {
        width: 34Px;
        height: 34Px;
        padding: 5Px;
    }
    
    .main-content {
        padding: 16Px;
    }

    .mobile-mask {
        display: block;
        position: fixed;
        inset: 60Px 0 0;
        z-index: 98;
        background: rgba(15, 23, 42, 0.34);
        backdrop-filter: blur(3Px);
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

:global(*) {
    box-sizing: border-box;
}
</style>
