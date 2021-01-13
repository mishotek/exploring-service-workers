import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import {terser} from 'rollup-plugin-terser';
import {Utils} from "./src/app/app-v1/utils/utils";

const versions = 3;

const configs = Utils.getArrayOfLength(versions).map((index) => {
    const version = index + 1;
    const dir = `src/app/app-v${version}`;
    const dest = `public/app-v${version}/`;

    return {
        input: `${dir}/app-root.js`,
        output: {
            dir: `${dest}/`,
            format: 'es',
        },
        plugins: [
            minifyHTML(),
            copy({
                targets: [
                    { src: 'node_modules/@webcomponents', dest: `${dest}/node_modules` },
                    { src: 'node_modules/lit-elem-components/public/index.css', dest: `${dest}/assets` },
                    { src: `${dir}/main.css`, dest: dest },
                    { src: `${dir}/index.html`, dest: dest },
                    { src: `${dir}/sw.js`, dest: dest },
                    { src: `${dir}/NotoSerif-BoldItalic.ttf`, dest: dest },
                ],
            }),
            resolve(),
            terser(),
        ],
        preserveEntrySignatures: false,
        watch: {},
    };
});

export default configs;
