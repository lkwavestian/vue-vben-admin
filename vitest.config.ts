/*
 * @Author: lkwavestian lkwavestian@gmail.com
 * @Date: 2024-12-01 14:55:05
 * @LastEditors: lkwavestian lkwavestian@gmail.com
 * @LastEditTime: 2024-12-01 15:07:37
 * @FilePath: \vue-vben-admin\vitest.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [Vue(), VueJsx()],
  test: {
    environment: 'happy-dom',
    exclude: [...configDefaults.exclude, '**/e2e/**'],
  },
});
