// rollup.config.js
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import path from 'path'

const packages = require('./scripts/packages')
const configs = []

for (const [pkg, options] of packages) {
  configs.push({
    input: `packages/${pkg}/index.ts`,
    output: [
      {
        file: `dist/${pkg}/index.cjs.js`,
        format: 'cjs',
      },
    ],
    plugins: [
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.rollup.json'),
        tsconfigOverride: {
          declaration: false,
          declarationDir: null,
          declarationMap: false,
        },
        rollupCommonJSResolveHack: true,
        clean: true,
      }),
      vue(),
    ],
    external: [
      'vue-demi',
      'vue',
      '@vue/composition-api',
      '@vue/runtime-dom',
      ...(options.external || []),
    ],
  })

  configs.push({
    input: `./typings/${pkg}/index.d.ts`,
    output: {
      file: `dist/${pkg}/index.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  })
}

export default configs
