<template>
    <div class="home-container">
        <div class="hero-section">
            <hello-world msg="前端知识图谱" />
            <p class="hero-subtitle">探索前端技术的无限可能</p>
        </div>
        <div class="image-container">
            <img class="main-image" :src="mainImage" alt="知识图谱" />
        </div>
        <div class="copy-right">
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022012824号-1</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/hello-world.vue';
import mainImage from '../assets/main.jpg';
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.home-container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $spacing-xl $spacing-lg;
    background: linear-gradient(180deg, $bg-color 0%, rgba($primary-color, 0.05) 100%);
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        padding: $spacing-lg $spacing-md;
    }
}

.hero-section {
    text-align: center;
    margin-bottom: $spacing-xl;
    
    :deep(.hello-world) {
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, $primary-color 0%, $primary-light 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: $spacing-md;
            animation: fadeInUp 0.6s ease-out;
            
            @media screen and (max-width: $breakpoint-md - 1px) {
                font-size: 1.8rem;
            }
        }
    }
}

.hero-subtitle {
    font-size: $font-size-lg;
    color: $text-secondary;
    margin: 0;
    animation: fadeInUp 0.6s ease-out 0.2s both;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        font-size: $font-size-base;
    }
}

.image-container {
    width: 100%;
    max-width: 800px;
    border-radius: $border-radius-xl;
    overflow: hidden;
    box-shadow: $shadow-lg;
    animation: fadeInUp 0.6s ease-out 0.4s both;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        border-radius: $border-radius-lg;
    }
}

.main-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform $transition-slow;
    
    &:hover {
        transform: scale(1.02);
    }
}

.copy-right {
    margin-top: $spacing-xl;
    font-size: $font-size-xs;
    color: $text-secondary;
    
    a {
        color: $text-secondary;
        text-decoration: none;
        
        &:hover {
            color: $primary-color;
            text-decoration: underline;
        }
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        margin-top: $spacing-lg;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
