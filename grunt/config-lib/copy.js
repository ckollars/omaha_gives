module.exports = {
  images: {
    files: [
      { expand: true, flatten: true, cwd: '/images', src: '**', dest: '/images' }
    ]
  },
  js: {
    files: [
      { expand: true, flatten: true, cwd: '/js', src: 'modernizr.js', dest: '/js' }
    ]
  },
  jsdev: {
    files: [
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js/libs', src: 'modernizr.min.js', dest: '<%= pkg.config.dev %>/js' },
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/bower_components/respond-minmax/dest', src: 'respond.min.js', dest: '<%= pkg.config.dev %>/js' }
      // { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js/*.js', src: 'compiled.js', dest: '<%= pkg.config.dev %>/js' }
      // { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js', src: 'compiled-dev.js', dest: '<%= pkg.config.dev %>/js' },
      // { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/js', src: 'compiled-vendor.js', dest: '<%= pkg.config.dev %>/js' }
    ]
  },
  html: {
    files: [
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>', src: '*.html', dest: '<%= pkg.config.dev %>' }
    ]
  },
  patterns: {
    files: [
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>/patterns', src: '*.html', dest: '<%= pkg.config.dev %>/patterns' },
      { expand: true, flatten: true, cwd: '<%= pkg.config.src %>', src: 'patterns.php', dest: '<%= pkg.config.dev %>' }
    ]
  }
};
