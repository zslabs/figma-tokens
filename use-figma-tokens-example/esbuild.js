const esbuild = require('esbuild');

// sandbox

esbuild
  .build({
    entryPoints: ['code.ts'],
    bundle: true,
    platform: 'node',
    target: ['node10.4'],
    outfile: 'code.js'
  })
  .catch(() => process.exit(1));