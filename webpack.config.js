const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.vue'], // 프로젝트 경로에서 생략할 확장자를 지정
    alias: {
      // 경로 별칭을 추가
      '@': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "@/scss/main";'

            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './index.html',
      favicon: './src/static/favicon.ico'
    }),
    new VueLoaderPlugin()
  ],
  devServer: {
    // 개발 서버 포트(port)를 1234로 변경
      host:'localhost',
      port: 1234, 
      hot:true
  }
}