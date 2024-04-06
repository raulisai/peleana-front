import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path'; // Importa 'path'

export default defineConfig({
  plugins: [sveltekit()],
  resolve: { // Añade la configuración de resolución de Vite aquí
    alias: {
      // Define tus alias aquí
      $components: path.resolve('./src/components'),
	  $stores: path.resolve('./src/stores')
	  
    },
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});