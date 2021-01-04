import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import {Utils} from "./src/app/app-v1/utils/utils";

const versions = 1;

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
            copy({
                targets: [
                    { src: 'node_modules/@webcomponents', dest: `${dest}/node_modules` },
                    { src: 'node_modules/lit-elem-components/public/index.css', dest: `${dest}/node_modules/lit-elem-components/public/` },
                    { src: `${dir}/main.css`, dest: dest },
                    { src: `${dir}/index.html`, dest: dest },
                ],
            }),
            resolve(),
        ],
        preserveEntrySignatures: false,
        watch: {},
    };
});

export default configs;
