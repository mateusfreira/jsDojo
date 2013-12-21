module.exports = function(grunt) {
  var srcPath = 'src/**/*.js';
  var specsPath = 'specs/**/*spec.js';
  var helperPath = 'specs/helpers/*.js';
  grunt.initConfig({
   jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'src/**/*.js']
    },    
    jasmine : {
      pivotal:{
          // Your project's source files
          src : srcPath,
          // Your Jasmine spec files
          options: {
            specs : specsPath,
            // Your spec helper files
            helpers : helperPath
          }
      }
    },
    watch: {
       pivotal : {
            files: [specsPath, srcPath], 
            tasks: ['jshint','jasmine']
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');  
  // Default task.
  grunt.registerTask('default', ['jasmine', 'jshint', 'watch']);
};