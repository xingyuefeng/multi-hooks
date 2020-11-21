import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'multi-hooks',
  favicon: '/images/img.jpeg',
  logo: '/images/img.jpeg',
  outputPath: 'docs-dist',
  publicPath: '/multi-hooks/',
  base: '/multi-hooks/',
  // more config: https://d.umijs.org/config

  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
});
