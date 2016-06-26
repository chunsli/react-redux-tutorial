exports.config = {
  hot: true,

  files: {
    javascripts: { joinTo: 'app.js' }
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] }
  }
};
