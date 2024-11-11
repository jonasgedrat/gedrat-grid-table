import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  target: 'es2019',
  format: ['esm', 'cjs'],
})
