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
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Register the default tasks. Run them when "grunt" is run 
  grunt.registerTask('default', ['browser_sync','watch']);
  grunt.registerTask('build', ['compass']);

};