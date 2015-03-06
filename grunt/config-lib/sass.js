module.exports = {
  build: {
    options: {
      style: 'expanded',
      debugInfo: false,
      sourcemap: 'none'
    },
    files: {
      '<%= pkg.config.dev %>/css/main.css': '<%= pkg.config.src %>/scss/main.scss'
    }
  },
  dist: {
    options: {
      style: 'expanded',
      debugInfo: false,
      sourcemap: 'none'
    },
    files: {
      '<%= pkg.config.dist %>/css/main.css': '<%= pkg.config.src %>/scss/main.scss'
    }
  }
};
