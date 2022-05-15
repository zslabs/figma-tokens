const esbuild = require('esbuild');

// sandbox

esbuild
  .build({
    entryPoints: ['index.ts'],
    bundle: true,
    platform: 'node',
    target: ['node10.4'],
    outfile: 'index.js'
  })
  .catch(() => process.exit(1));