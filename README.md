# oclif-config
Provides ES Module (ESM) / CommonJS loading of plugins and hooks for Oclif - temporary replacement for @oclif/config version 1.17.0

Please see the associated [pull request](https://github.com/oclif/config/pull/221) that will introduce these changes to @oclif/config. 

In the meantime you are able to use these changes now by using `"@oclif/config": "typhonjs-node-bundle/oclif-config#main"` in your package.json to load this modified version of @oclif/config with ESM / CommonJS support. This repo will stay active for ~6 months after this pull request is potentially merged. A warning notice will be added to execution about any official update / support in a future version of @oclif/config providing ample time to upgrade your CLI.

----

To convert your Oclif CLI to ESM. 

- For main core CLI code add `"type": "module"` to package.json
- then change `./bin/run` to `./bin/run.js` so Node can associate it as ESM
- add the following to the top of `./bin/run.js`:
```
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```
- Write the rest of your CLI code in standard ESM with `.js` file extension

To convert any Oclif plugins to ESM by adding `"type": "module"` to the plugin package.json and write all your code with standard ESM w/ `.js` file extension.

----

Presently I am working on a full ESM based CLI using these changes and you can follow that progress here for a working example:
https://github.com/typhonjs-fvtt/fvttdev

 
