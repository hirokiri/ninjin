const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.yaml$/,
        use: [
          {loader: 'json-loader'},
          {loader: 'yaml-ts-loader'},
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
    mainFields: ['browser', 'module', 'main'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    alias: {
      assert: 'assert',
      buffer: 'buffer',
      console: 'console-browserify',
      constants: 'constants-browserify',
      crypto: 'crypto-browserify',
      domain: 'domain-browser',
      events: 'events',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      path: 'path-browserify',
      punycode: 'punycode',
      process: 'process/browser',
      querystring: 'querystring-es3',
      stream: 'stream-browserify',
      _stream_duplex: 'readable-stream/duplex',
      _stream_passthrough: 'readable-stream/passthrough',
      _stream_readable: 'readable-stream/readable',
      _stream_transform: 'readable-stream/transform',
      _stream_writable: 'readable-stream/writable',
      string_decoder: 'string_decoder',
      sys: 'util',
      timers: 'timers-browserify',
      tty: 'tty-browserify',
      url: 'url',
      util: 'util',
      vm: 'vm-browserify',
      zlib: 'browserify-zlib',
    },
    fallback: {
      child_process: false,
      fs: false,
      crypto: false,
      net: false,
      tls: false,
    },
  },
  target: [
    'web', 'es5',
  ],

};
