import { build } from 'esbuild'
import { resolve } from 'path';
import { promises, rmSync } from 'fs'
import pluginVue from '../src'

const assertNoCompileError = async () => {
    const testDir = 'examples'
    const compileDirList = await promises.readdir(testDir)
    const onError = jest.fn()
    await Promise.all(
        compileDirList.map(subDir =>
            build({
                entryPoints: [`${testDir}/${subDir}/App.vue`],
                bundle: true,
                external: ['vue'],
                plugins: [pluginVue()],
                sourcemap: false,
                format: 'esm',
                outdir: `${testDir}/${subDir}/build`
            }).catch(() => onError())
        )
    )
    expect(onError).not.toHaveBeenCalled()
    compileDirList.forEach(subDir => {
        rmSync(resolve(__dirname, '..', `${testDir}/${subDir}/build`), { recursive: true, force: true });
    })
}

describe('compile', () => {
    it('can transfrom .vue file', async () => {
        await assertNoCompileError()
    })
})
