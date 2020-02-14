module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,   //如果样稿是1080px,这个地方要改
      propList: ['*']
    }
  }
}