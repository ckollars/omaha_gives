module.exports = {
  options: {
    livereload: true
  },
  sass: {
    files: ['<%= pkg.config.src %>/scss/**/*.scss'],
    tasks: ['build-styles']
  },
  js: {
    files: ['<%= pkg.config.src %>/js/*.js'],
    tasks: ['build-scripts']
  },
  assets: {
    files: ['<%= pkg.config.src %>/img/**'],
    tasks: ['copy:images']
  },
  html: {
    files: ['<%= pkg.config.src %>/*.html'],
    tasks: ['copy:html']
  },
  patterns: {
    files: ['<%= pkg.config.src %>/patterns/*.html', '<%= pkg.config.src %>/patterns.php'],
    tasks: ['copy:patterns']
  }
  // TODO: implement new svg watch tastk
  // svg: {
  //   files: ['<%= pkg.config.src %>/svg/**'],
  //   tasks: ['grunticon:icons', 'copy:grunticon']
  // }
};
