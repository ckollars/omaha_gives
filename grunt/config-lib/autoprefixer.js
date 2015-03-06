module.exports = {
  dev: {
    options: {
      browsers: ['last 6 versions', 'ie 8', 'ie 9']
    },
    files: {
      '<%= pkg.config.dev %>/css/main.css': '<%= pkg.config.dev %>/css/main.css'
    }
  }
};
