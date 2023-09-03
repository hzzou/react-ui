import { defineConfig } from 'dumi';
import * as process from 'process';

// 仓库地址
const gitPath = '/react-ui';

const baseUrl = process.env.NODE_ENV === 'production' ? gitPath : '';
export default defineConfig({
  outputPath: 'docs',
  base: baseUrl,
  publicPath: `${baseUrl}/`,
  resolve: {
    docDirs: ['dumDocs'],
  },
  themeConfig: {
    name: 'react-ui',
    nav: [
      { title: '介绍', link: '/' },
      { title: '组件', link: '/components/virtual-list' },
    ],
    footer: 'Powered by hzlzh',
  },
});
