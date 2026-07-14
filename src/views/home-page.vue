<template>
    <div class="home-container">
        <div class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <hello-world msg="前端知识图谱" />
                <p class="hero-subtitle">探索前端技术的无限可能</p>
                <div class="hero-stats">
                    <div class="stat-item" v-for="(stat, index) in stats" :key="stat.label" :style="{ animationDelay: `${0.5 + index * 0.1}s` }">
                        <div class="stat-number">{{ stat.value }}</div>
                        <div class="stat-label">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-container">
            <div class="image-overlay"></div>
            <img class="main-image" :src="mainImage" alt="知识图谱" />
        </div>
        <div class="feature-section">
            <h2 class="section-title">核心功能</h2>
            <div class="feature-grid">
                <div class="feature-card" v-for="feature in features" :key="feature.title">
                    <div class="feature-icon" :style="{ background: feature.color }">
                        <span class="icon-text">{{ feature.icon }}</span>
                    </div>
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <p class="feature-desc">{{ feature.desc }}</p>
                </div>
            </div>
        </div>
        <div class="copy-right">
            <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2022012824号-1</a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/hello-world.vue';
import mainImage from '../assets/main.jpg';

const stats = [
    { value: '500+', label: '技术文档' },
    { value: '50+', label: '学习路线' },
    { value: '20+', label: '实战项目' },
    { value: '10+', label: '技术栈' },
];

const features = [
    { icon: '📚', title: '知识图谱', desc: '系统化整理前端知识体系', color: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)' },
    { icon: '🔗', title: '关联学习', desc: '知识点相互关联，深度理解', color: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)' },
    { icon: '💻', title: '实战演练', desc: '丰富的代码示例和项目实战', color: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' },
    { icon: '📈', title: '进阶路径', desc: '清晰的学习路线，循序渐进', color: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' },
];
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.home-container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 $spacing-xl $spacing-md;
    background: $bg-color;
    box-sizing: border-box;

    @media screen and (max-width: $breakpoint-md - 1px) {
        padding: 0 $spacing-lg $spacing-md;
    }
}

.hero-section {
    width: 100%;
    padding: $spacing-lg $spacing-xl $spacing-md;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    .hero-bg {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $primary-gradient;
        opacity: 0.05;
    }
    
    .hero-content {
        position: relative;
        z-index: 1;
    }
    
    :deep(.hello-world) {
        h1 {
            font-size: 40px;
            font-weight: 700;
            background: $primary-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: $spacing-sm;
            animation: fadeInUp 0.6s ease-out;
            letter-spacing: -1px;
            
            @media screen and (max-width: $breakpoint-md - 1px) {
                font-size: 28px;
            }
        }
    }
}

.hero-subtitle {
    font-size: $font-size-lg;
    color: $text-secondary;
    margin: 0 0 $spacing-lg 0;
    animation: fadeInUp 0.6s ease-out 0.2s both;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        font-size: $font-size-base;
    }
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: $spacing-xxl;
    animation: fadeInUp 0.6s ease-out 0.4s both;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        gap: $spacing-lg;
        flex-wrap: wrap;
    }
}

.stat-item {
    text-align: center;
    padding: $spacing-md $spacing-lg;
    background: $bg-white;
    border: 1px solid $border-light;
    border-radius: $border-radius-md;
    box-shadow: $shadow-sm;
    transition: all $transition-normal;
    animation: fadeInUp 0.6s ease-out both;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: $shadow-md;
        border-color: rgba($primary-color, 0.15);
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        padding: $spacing-sm $spacing-md;
        flex: 1;
        min-width: calc(50% - #{$spacing-md});
    }
}

.stat-number {
    font-size: $font-size-xl;
    font-weight: 700;
    color: $primary-color;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        font-size: $font-size-lg;
    }
}

.stat-label {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin-top: $spacing-xs;
}

.image-container {
    width: 100%;
    max-width: 900px;
    border-radius: $border-radius-lg;
    overflow: hidden;
    box-shadow: $shadow-lg;
    animation: fadeInUp 0.6s ease-out 0.6s both;
    position: relative;
    margin-top: $spacing-md;
    margin-bottom: $spacing-xxl;
    border: 1px solid $border-light;
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        border-radius: $border-radius-md;
        margin-bottom: $spacing-xl;
    }
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba($primary-color, 0.08) 0%, transparent 50%, rgba($primary-light, 0.05) 100%);
    pointer-events: none;
    z-index: 1;
}

.main-image {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
    transition: transform $transition-slow;
    
    .image-container:hover & {
        transform: scale(1.02);
    }
}

.feature-section {
    width: 100%;
    max-width: 1000px;
    margin-top: $spacing-sm;
    animation: fadeInUp 0.6s ease-out 0.8s both;
}

.section-title {
    font-size: $font-size-xxl;
    font-weight: 700;
    color: $text-primary;
    text-align: center;
    margin-bottom: $spacing-xl;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -$spacing-sm;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: $primary-gradient;
        border-radius: $border-radius-sm;
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        font-size: $font-size-xl;
    }
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: $spacing-lg;
    
    @media screen and (max-width: $breakpoint-lg - 1px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        grid-template-columns: 1fr;
    }
}

.feature-card {
    background: $bg-white;
    border: 1px solid $border-light;
    border-radius: $border-radius-md;
    padding: $spacing-xl $spacing-lg;
    box-shadow: $shadow-sm;
    transition: all $transition-normal;
    text-align: center;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: $shadow-md;
        border-color: rgba($primary-color, 0.15);
    }
}

.feature-icon {
    width: 48px;
    height: 48px;
    border-radius: $border-radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto $spacing-md;
    transition: transform $transition-normal;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 24px;
    line-height: 1;
    
    .feature-card:hover & {
        transform: scale(1.05);
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        width: 40px;
        height: 40px;
        font-size: 20px;
    }
}

.icon-text {
    font-size: inherit;
    line-height: 1;
    display: block;
}

.feature-title {
    font-size: $font-size-lg;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: $spacing-sm;
}

.feature-desc {
    font-size: $font-size-sm;
    color: $text-secondary;
    margin: 0;
    line-height: 1.6;
}

.copy-right {
    margin-top: $spacing-xxxl;
    text-align: center;
    padding-bottom: $spacing-xxl;
    
    a {
        display: inline-flex;
        align-items: center;
        padding: $spacing-sm $spacing-lg;
        font-size: $font-size-sm;
        font-weight: 500;
        color: $primary-color;
        background: rgba($primary-color, 0.06);
        border: 1px solid rgba($primary-color, 0.18);
        border-radius: $border-radius-full;
        text-decoration: none;
        transition: all $transition-normal;
        
        &:hover {
            color: $primary-dark;
            background: rgba($primary-color, 0.1);
            border-color: rgba($primary-color, 0.35);
            box-shadow: $shadow-sm;
        }
    }
    
    @media screen and (max-width: $breakpoint-md - 1px) {
        margin-top: $spacing-xl;
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
