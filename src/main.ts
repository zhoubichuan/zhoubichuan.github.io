import { createApp, type App } from 'vue'
// import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { registerMicroApps, start } from 'qiankun';
import microApps from "./micro-app";
import 'amfe-flexible'
import AppComponent from '@/App.vue';
import router from '@/router';
import GlobalDirective from '@/directives';
import microApp from '@/extends/micro-app';
// import lifeCycle from '@/extends/life-cycle';
import type { MicroAppProps } from '@/extends/micro-app';
const app: App = createApp(AppComponent)
app.use(ElementPlus)

// app.use(store)
app.use(router).mount('#template-project')

registerMicroApps(microApps()
// , lifeCycle
);

start({
    prefetch: false
});