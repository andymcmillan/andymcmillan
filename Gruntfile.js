/*global module:false*/
module.exports = function(grunt) {
  
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    
    // Read Metadata
    pkg: grunt.file.readJSON('package.json'),
    
    // CSS:
    // * Sass
    // * Minify
    sass: {
      dist: {
        options: { style: 'expanded' },
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
      dist: {
        expand: true,
        cwd:  'assets/css/build/',
        src:  ['*.css', '!*.min.css'],
        dest: 'assets/css/build/',
        ext:  '.min.css'
      }
    },

    // Jekyll
    jekyll: {
      dist:   { options: { drafts: true } }
    },

    // Watch
    watch: {
      css: {
        files: 'assets/css/src/**/*',
        tasks: ['sass', 'cssmin'],
      },
      jekyll: {
        files: ["*.{yml,md,html,xml}", "*/**", "!{_site,node_modules}/**/*"],
        tasks: ['jekyll'],
      }
    }

  });

  // Default task.
  grunt.registerTask('default', ['sass', 'cssmin', 'jekyll']);

};