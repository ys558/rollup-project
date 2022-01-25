import json from "rollup-plugin-json";
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: 'src/main.js',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [ 
      json(),
      // Rollup仅支持ES6模块，此插件是将外部依赖CommonJS模块转换为ES6模块的插件
      commonjs({
        include: 'node_modules/**',
      }),
      babel({
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                browsers: 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
                node: '0.10'
              },
              // 是否将ES6模块转为CommonJS模块，必须为false
              // 否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败
              // 例如rollup-plugin-commonjs插件，将 CommonJS 转换成 ES6 模块
              modules: false,
              // 松散模式，源码不同时使用export和export default时可开启，更好兼容ie8以下
              loose: false,
              // 按需进行polyfill
              useBuiltIns: 'usage'
            }
          ]
        ],
        plugins: ['@babel/plugin-transform-runtime'],
        runtimeHelpers: true,
        exclude: 'node_modules/**'
      })
    ]
  };