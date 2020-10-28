import { defineConfig } from 'umi';

export default defineConfig({
  qiankun: {
    slave: {}
  },
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  base: '/'
});
