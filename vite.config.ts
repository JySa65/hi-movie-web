import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import tsconfigAlias from './tsconfig.paths.json';

const getAlias = () => {
  const paths = tsconfigAlias.compilerOptions.paths as Record<string, string[]>;
  return Object.keys(paths).map((alia) => {
    const folderLocation = paths[alia][0].replace('/*', '');
    alia = alia.replace('/*', '');
    return { find: alia, replacement: path.resolve(__dirname, folderLocation) };
  });
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: getAlias()
  }
});
