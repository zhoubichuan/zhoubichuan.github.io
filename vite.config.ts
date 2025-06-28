import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import basicSsl from '@vitejs/plugin-basic-ssl';
// import zipPack from 'vite-plugin-zip-pack';
import postCssPxToRem from 'postcss-pxtorem';
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    /**
     * 根据当前工作目录中的 `mode` 加载 .env 文件
     * 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
     */
    const env = loadEnv(mode, process.cwd(), "");
    return {
        css: {
            // preprocessorOptions: {
            //     scss: {ƒ
            //         additionalData: `
            //         @use "@/styles/element-plus.scss" as *;
            //     `
            //     }
            // },
            postcss: {
                plugins: [
                    postCssPxToRem({
                        rootValue: 192, // 指定转换基准值，通常是设计稿宽度的1/10
                        propList: ['*'], // 可以从px转换为rem的属性，这里是所有属性
                        unitPrecision: 5, // 允许REM单位增长到的十进制数
                        selectorBlackList: [], // 选择器黑名单，忽略转换的选择器
                        replace: true, // 替换包含rem的规则，而不是添加回退
                        mediaQuery: false, // 允许在媒体查询中转换px
                        minPixelValue: 0, // 设置要替换的最小像素值
                        exclude: /node_modules/i,
                    })
                ]
            }
        },
        build: {
            outDir: 'dist',
            cssCodeSplit: false
        },
        // 开发或生产环境服务的公共基础路径
        base: env.VITE_BASE_URL,

        // 插件配置
        plugins: [
            vue(),
            vueJsx(),
            basicSsl(),
            // zipPack({
            //     outFileName: 'dist.zip',
            //     outDir: 'dist',
            //     inDir: 'dist'
            // })
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        server: {
            port: 3000,
            open: true,
            // 配置自定义代理规则
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: "http://localhost:8080",
                    changeOrigin: true,
                    rewrite: (path) =>
                        path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ""),
                },
            },
        },
    };
});
