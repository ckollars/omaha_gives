module.exports = {
  build: {
    options: {
      style: 'expanded',
      debugInfo: true
    },
    files: {
      '<%= pkg.config.dev %>/css/main.css': '<%= pkg.config.src %>/scss/main.scss',
      '<%= pkg.config.dev %>/css/prism.css': '<%= pkg.config.src %>/scss/vendors/prism.css',
    }
  }
};
