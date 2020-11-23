import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'yhooks',
  favicon: '/multi-hooks/images/img.jpeg',
  logo: '/multi-hooks/images/img.jpeg',
  outputPath: 'docs-dist',
  publicPath: '/multi-hooks/',
  base: '/multi-hooks/',
  description: 'react hooks集合',
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
