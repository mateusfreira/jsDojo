module.exports = function(grunt) {
  var srcPath = 'src/**/*.js';
  var specsPath = 'specs/**/*spec.js';
  var helperPath = 'specs/helpers/*.js';
  grunt.initConfig({
    uglify: { 
      options: {
        mangle: false,
        report : 'min',
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
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        autoWatch: true
      }
  },
    watch: {
       pivotal : {
            files: [specsPath, srcPath], 
            tasks: ['jshint','jasmine', 'uglify']
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  // Default task.
  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test']);
};