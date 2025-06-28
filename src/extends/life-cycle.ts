import type { App } from 'vue';

export default {
    // 挂载前回调
    beforeLoad: [
        (app:App) => {
            console.log("beforeload", app);
            return Promise.resolve();
        },
    ],
    // 挂载后回调
    beforeMount: [
        (app:App) => {
            console.log("beforeMount", app);
            return Promise.resolve();
        },
    ],
    // 卸载后回调
    afterUnmount: [
        (app:App) => {
            console.log("afterMount", app);
            return Promise.resolve();
        },
    ],
};