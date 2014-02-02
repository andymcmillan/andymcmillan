/*global module:false*/
module.exports = function(grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    // CSS:
    // * Sass
    // * Minify
    sass: {
      dev: {
        options: {
          style:      'expanded'
        },
        files: [
          {
            expand: true,
            cwd:  'assets/css/src/',
            src:  ['*.scss', '!_*.scss'],
            dest: 'assets/css/build/',
            ext:  '.css'
          }
        ]
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd:  'assets/css/build/',
        src:  ['*.css', '!*.min.css'],
        dest: 'assets/css/build/',
        ext:  '.min.css'
      }
    }

  });

  // Default task.
  grunt.registerTask('default', ['sass', 'cssmin']);

};