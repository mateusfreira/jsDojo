module.exports = function(grunt) {
  var srcPath = 'src/**/*.js';
  var specsPath = 'specs/**/*spec.js';
  var helperPath = 'specs/helpers/*.js';
  grunt.initConfig({
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/main.min.js': ['src/*']
        }
      }
    },
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Default task.
  //grunt.registerTask('default', ['jasmine', 'jshint', 'watch']);
  grunt.registerTask('test', ['jshint', 'jasmine'])
  grunt.registerTask('default', ['test'])  
};