  //open wrapper function
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Watch Changes in files and run tasks on them

    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass']
      },
      js: {
        files: [
          'assets/js/*.js',
          'Gruntfile.js'
        ],
        tasks: ['jshint']
      }
    },

    // Compile SASS to CSS including the Compass Library

    compass: {
      dist: {
        options: {
          sassDir: 'assets/style/sass',
          cssDir: 'assets/style/css',
          outputStyle: 'nested'
        }
      }
    },

    //  lint Javascript files

    jshint: {
      options: {
        jshintrc: '.jshintrc'
    },
      all: ['app/*.js']
    },

    // Syncs css the browser so dont have to reload 

    browser_sync: {
      files: {
        src : [
          'assets/style/css'
        ],
      },
      options: {
        watchTask: true
      }
    },

    // creates a simple connect webserver to delelop on

    connect: {
      uses_defaults: {}
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register the default tasks. Run them when "grunt" is run 
  grunt.registerTask('default', ['connect','browser_sync','watch']);
  grunt.registerTask('build', ['compass']);

};