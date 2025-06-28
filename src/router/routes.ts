import type { RouteRecordRaw } from 'vue-router';

import microApp from '@/extends/micro-app';

export const routes: RouteRecordRaw[] = [
    {
        path: `/${microApp.name}`,
        component: () => import('@/view/Home.vue'),
        meta: {
        
        },
     
    }
];
