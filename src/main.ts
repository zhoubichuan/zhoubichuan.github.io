import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { registerMicroApps, start } from "qiankun";
import microApps from "./micro-app";
import "./registerServiceWorker";

const app = createApp(App);
app.use(ElementPlus);
app.use(store).use(router).mount("#app");

const config: any = {
  // 挂载前回调
  beforeLoad: [
    (app: any) => {
      console.log("beforeload", app);
    },
  ],
  // 挂载后回调
  beforeMount: [
    (app: any) => {
      console.log("beforeMount", app);
    },
  ],
  // 卸载后回调
  afterUnmount: [
    (app: any) => {
      console.log("afterMount", app);
    },
  ],
};

registerMicroApps(microApps(ElementPlus), config);
start({
  prefetch: false,
});
