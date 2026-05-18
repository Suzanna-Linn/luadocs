import { defineConfig } from 'astro/config';
// import starlight from '@astrojs/starlight';

import slua from './src/grammars/slua.tmLanguage.json';
import lsl from './src/grammars/lsl.tmLanguage.json';

export default defineConfig({
  base: '/luadocs',
  
  // integrations: [
  //   starlight({
  //     title: 'Lua/LSL Docs',
  //   })
  // ],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      }, 
      langs: [
        slua,
        lsl,
      ]
    }
  }
});