import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import sveltePreprocess from 'svelte-preprocess';
import image from 'svelte-iamge';
import alias from '@rollup/plugin-alias';

const production = !process.env.ROLLUP_WATCH;

const aliases = alias({
  resolve: ['.svelte', '.js'],
  entries: [
    { find: 'components', replacement: 'src/components' },
    { find: 'styles', replacement: 'src/styles' },
    { find: 'utils', replacement: 'src/utils' },
    { find: 'routes', replacement: 'src/routes' },
    { find: 'partials', replacement: 'src/partials' },
    { find: 'api', replacement: 'src/api' },
  ]
});

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true,
      });

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/build/bundle.js',
  },
  plugins: [
    aliases,
    svelte({
      preprocess: [
        sveltePreprocess({ postcss: true, }),
        image()
      ],
      compilerOptions: {
        dev: !production,
      },
    }),
    css({ output: 'bundle.css' }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
