import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./dist/*.js'],
  bundle: false,
  minify: true,
  outdir: './output',
});