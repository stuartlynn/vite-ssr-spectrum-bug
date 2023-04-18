# vite-ssr-spectrum-bug
A quick repo to show the issue with react-spectrum and vite-ssr

## To recreate the bug 

```bash
pnpm install
pnpm dev 
```

then navigate to http://localhost:3000/ 

error message that it gives is 

```bash
Error: ERR_UNKNOWN_FILE_EXTENSION .css /home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/@react-spectrum+actiongroup@3.8.2_@react-spectrum+provider@3.7.1_react-dom@18.2.0_react@18.2.0/node_modules/@react-spectrum/actiongroup/dist/main.css
    at defaultGetFormat (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/dist-raw/node-internal-modules-esm-get_format.js:93:15)
    at defer (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:296:7)
    at entrypointFallback (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:304:22)
    at getFormat (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:338:26)
    at /home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:245:17
    at addShortCircuitFlag (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:409:21)
    at load (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/esm.ts:239:12)
    at load (/home/stuart/tmp/vite-ssr-example/node_modules/.pnpm/ts-node@10.9.1_@types+node@18.15.11_typescript@4.9.5/node_modules/ts-node/src/child/child-loader.ts:18:36)
    at nextLoad (node:internal/modules/esm/loader:163:28)
    at ESMLoader.load (node:internal/modules/esm/loader:605:26)

```
