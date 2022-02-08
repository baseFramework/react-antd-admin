/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path')

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#374151',
        },
      },
    },
  ],
  webpack:{
    alias:{
      '@': path.resolve(__dirname,'src'),
      'components': path.resolve(__dirname,'components'),
      'store': path.resolve(__dirname,'store'),
      'pages': path.resolve(__dirname,'pages'),
    }
  }
};
