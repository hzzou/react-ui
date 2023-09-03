import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'lib/esm',
  },
  cjs: {
    output: 'lib/cjs',
  },
  umd: {
    output: 'lib/umd',
  },
});
