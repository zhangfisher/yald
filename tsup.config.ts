import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/*.ts'],
  dts: false,
  clean: true,
  format: ['cjs'],
  minify: true,
  sourcemap: false,
  splitting: false,
  outDir: 'dist',
})
