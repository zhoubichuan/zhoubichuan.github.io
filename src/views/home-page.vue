<template>
    <div class="home-container">
        <div class="hero-section">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-kicker">Frontend Learning Atlas</div>
                <hello-world msg="前端知识图谱" />
                <p class="hero-subtitle">把工具、框架、工程化与实战项目串成一张清晰可探索的技术地图。</p>
                <div class="hero-stats">
                    <div
                        class="stat-item"
                        v-for="(stat, index) in stats"
                        :key="stat.label"
                        :style="{ animationDelay: `${0.5 + index * 0.1}s` }"
                    >
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
    { value: '10+', label: '技术栈' }
];

const features = [
    { icon: '📚', title: '知识图谱', desc: '系统化整理前端知识体系', color: 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)' },
    { icon: '🔗', title: '关联学习', desc: '知识点相互关联，深度理解', color: 'linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)' },
    { icon: '💻', title: '实战演练', desc: '丰富的代码示例和项目实战', color: 'linear-gradient(135deg, #10b981 0%, #84cc16 100%)' },
    { icon: '📈', title: '进阶路径', desc: '清晰的学习路线，循序渐进', color: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)' }
];
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.home-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 $spacing-md;
    background: transparent;
    box-sizing: border-box;
}

.hero-section {
    width: 100%;
    max-width: 1180px;
    padding: $spacing-xxxl $spacing-xl $spacing-xxl;
    text-align: center;
    position: relative;
    overflow: hidden;
    isolation: isolate;

    .hero-bg {
        position: absolute;
        inset: $spacing-md;
        background:
            linear-gradient(135deg, rgba($primary-color, 0.12), rgba(#0f766e, 0.08) 48%, rgba(#f59e0b, 0.1)),
            linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.68));
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: $border-radius-xl;
        box-shadow: $shadow-glow;
        z-index: -1;

        &::after {
            content: '';
            position: absolute;
            inset: 1px;
            border-radius: inherit;
            background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.58), transparent 35%),
                linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.5));
        }
    }

    .hero-content {
        position: relative;
        z-index: 1;
    }

    :deep(.hello-world) {
        h1 {
            font-size: 48px;
            font-weight: 800;
            background: $primary-gradient;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin: 0 0 $spacing-md;
            animation: fadeInUp 0.6s ease-out;
            letter-spacing: 0;
            line-height: 1.12;
        }
    }
}

.hero-kicker {
    display: inline-flex;
    align-items: center;
    height: 30px;
    padding: 0 $spacing-md;
    margin-bottom: $spacing-lg;
    border: 1px solid rgba($primary-color, 0.16);
    border-radius: $border-radius-full;
    background: rgba(255, 255, 255, 0.66);
    color: $primary-dark;
    font-size: $font-size-xs;
    font-weight: 700;
    letter-spacing: 0;
    animation: fadeInUp 0.6s ease-out both;
}

.hero-subtitle {
    max-width: 600px;
    font-size: $font-size-lg;
    color: $text-regular;
    margin: 0 auto $spacing-xl;
    animation: fadeInUp 0.6s ease-out 0.2s both;
    line-height: 1.8;
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: $spacing-lg;
    animation: fadeInUp 0.6s ease-out 0.4s both;
}

.stat-item {
    min-width: 116px;
    text-align: center;
    padding: $spacing-lg $spacing-xl;
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: $border-radius-md;
    box-shadow: $shadow-md;
    backdrop-filter: blur(12px);
    transition: all $transition-normal;
    animation: fadeInUp 0.6s ease-out both;

    &:hover {
        transform: translateY(-3px);
        box-shadow: $shadow-lg;
        border-color: rgba($primary-color, 0.18);
    }
}

.stat-number {
    font-size: $font-size-display;
    font-weight: 800;
    color: $primary-color;
}

.stat-label {
    font-size: $font-size-xs;
    color: $text-secondary;
    margin-top: $spacing-xs;
}

.image-container {
    width: 100%;
    max-width: 1040px;
    border-radius: $border-radius-xl;
    overflow: hidden;
    box-shadow: $shadow-xl;
    animation: fadeInUp 0.6s ease-out 0.6s both;
    position: relative;
    margin-top: $spacing-lg;
    margin-bottom: $spacing-xxl;
    border: 1px solid rgba(255, 255, 255, 0.72);
    background: $bg-white;
}

.image-overlay {
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(15, 23, 42, 0.05), transparent 28%),
        linear-gradient(135deg, rgba($primary-color, 0.1) 0%, transparent 54%, rgba(#f59e0b, 0.08) 100%);
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
    max-width: 1100px;
    margin-top: $spacing-sm;
    animation: fadeInUp 0.6s ease-out 0.8s both;
}

.section-title {
    font-size: $font-size-display;
    font-weight: 800;
    color: $text-primary;
    text-align: center;
    margin-bottom: $spacing-xxl;
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
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: $spacing-xl;
}

.feature-card {
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: $border-radius-md;
    padding: $spacing-xl;
    box-shadow: $shadow-md;
    transition: all $transition-normal;
    text-align: left;
    backdrop-filter: blur(12px);

    &:hover {
        transform: translateY(-4px);
        box-shadow: $shadow-lg;
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
    margin: 0 0 $spacing-lg;
    transition: transform $transition-normal;
    overflow: hidden;
    flex-shrink: 0;
    font-size: 24px;
    line-height: 1;

    .feature-card:hover & {
        transform: scale(1.05);
    }
}

.icon-text {
    font-size: inherit;
    line-height: 1;
    display: block;
}

.feature-title {
    font-size: $font-size-lg;
    font-weight: 700;
    color: $text-primary;
    margin: 0 0 $spacing-sm;
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
}

@media screen and (max-width: $breakpoint-lg - 1px) {
    .feature-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media screen and (max-width: $breakpoint-md - 1px) {
    .hero-section {
        width: calc(100% + 32Px);
        max-width: none;
        margin: -16Px -16Px 0;
        padding: 34Px 16Px 28Px;
        border-radius: 0 0 $border-radius-xl $border-radius-xl;

        .hero-bg {
            inset: 0;
            border-radius: inherit;
        }

        :deep(.hello-world) {
            h1 {
                font-size: 34Px;
                line-height: 1.14;
            }
        }
    }

    .hero-kicker {
        height: 30Px;
        padding: 0 12Px;
        margin-bottom: 16Px;
        font-size: 12Px;
    }

    .hero-subtitle {
        font-size: 14Px;
        line-height: 1.7;
        margin-bottom: 16Px;
    }

    .hero-stats {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12Px;
    }

    .stat-item {
        min-width: 0;
        padding: 12Px 8Px;
    }

    .stat-number {
        font-size: 18Px;
    }

    .stat-label {
        font-size: 12Px;
    }

    .image-container {
        width: 100%;
        max-width: none;
        margin-top: 0;
        margin-bottom: 20Px;
        border-radius: $border-radius-md;
    }

    .feature-section {
        max-width: none;
    }

    .section-title {
        font-size: 20Px;
        margin-bottom: 28Px;
    }

    .feature-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12Px;
    }

    .feature-card {
        min-height: 150Px;
        padding: 16Px;
    }

    .feature-icon {
        width: 42Px;
        height: 42Px;
        margin-bottom: 12Px;
        font-size: 20Px;
    }

    .feature-title {
        font-size: 16Px;
    }

    .feature-desc {
        font-size: 13Px;
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
