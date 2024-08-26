import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // 工具库入口
      name: 'Utils', // 工具库名称
      fileName: (format) => `index.${format}.js`, // 工具库名称
      // formats: ['es', 'umd', 'cjs'], // 打包模式，默认是es和umd
    }
  },
  plugins: [dts()], // 启用插件 vite-plugin-dts
  // outDir: "lib", // 自定义构建输出目录 默认为 dist
});