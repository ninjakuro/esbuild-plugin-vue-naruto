[![name](https://user-images.githubusercontent.com/499550/176823239-f59d75de-1d24-4b2d-b04b-fcc95db2903e.png)](https://blog.vuejs.org/posts/vue-2-7-naruto.html)

# esbuild-plugin-vue-naruto
> Note: this plugin only works with Vue@^2.7.x.

Based on [esbuild-plugin-vue-next](https://github.com/Bigfish8/esbuild-plugin-vue-next)

## Example

```js
// build.js
const { build } = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue-naruto')

build({
    entryPoints: ['index.ts'],
    bundle: true,
    outdir: 'dist',
    plugins: [vuePlugin()],
}).catch(() => process.exit(1));
```

## Options

```ts
export interface Options {
  extractCss?: boolean
  
  isProduction?: boolean

  // options to pass on to vue/compiler-sfc
  script?: Partial<Pick<SFCScriptCompileOptions, 'babelParserPlugins'>>
  template?: Partial<
    Pick<
      SFCTemplateCompileOptions,
      | 'compiler'
      | 'compilerOptions'
      | 'preprocessOptions'
      | 'transpileOptions'
      | 'transformAssetUrls'
      | 'transformAssetUrlsOptions'
    >
  >
  style?: Partial<
      Pick<
        SFCStyleCompileOptions, 
        | 'preprocessLang' 
        | 'preprocessOptions' 
        | 'postcssOptions' 
        | 'postcssPlugins'
        | 'trim'
      >
  >
}
```

## Example for passing options to `vue/compiler-sfc`:

```ts
const { build } = require('esbuild')
const vuePlugin = require('esbuild-plugin-vue-naruto')

build({
    entryPoints: ['index.ts'],
    bundle: true,
    outdir: 'dist',
    plugins: [vuePlugin({
        template: {
            compilerOptions: {
                // ...
            },
            transformAssetUrls: {
                // ...
            }
        }
    })],
}).catch(() => process.exit(1));
```

## License

[MIT License](https://opensource.org/licenses/MIT)
