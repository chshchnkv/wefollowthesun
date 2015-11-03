"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  
  var config = {
    pkg: grunt.file.readJSON("package.json"),
    
    sass: {
      style: {
        files: {
          "build/css/style.css": "src/sass/style.scss"
        }
      }
    },
    
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },
    
    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    cssmin: {
      options: {
        keepSpecialComments: 0,
        report: "gzip"
      },
      target: {
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    
    watch: {
      configFiles: {
        files: [ "Gruntfile.js", "config/*.js" ],
        options: {
          reload: true
        }
      },
      
      options: {
        livereload: true,
      },
      
      html: {
        files: ["src/*.html"],
        tasks: ["clean:html", "copy:html"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      
      fonts: {
        files: ["src/fonts/**/*.*", "src/fonts/*.*"],
        tasks: ["copy:fonts"],
        options: {
          spawn: false,
          livereload: true
        }
      },

      style: {
        files: ["src/sass/**/*.scss", "src/sass/*.scss"],
        tasks: ["sass", "cmq", "postcss", "cssmin"],
        options: {
          spawn: false,
          livereload: true
        }
      },
      
      script: {
        files: ["src/js/**/*.js"],
        tasks: ["concat", "uglify"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    
    clean: {
      build: ["build"],
      html: ["build/*.html"]
    },
    
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src",
          src: [
            "fonts/**",
            "img/**",
            "*.html"
          ],
          dest: "build"
        }]
      },
      
      html: {
        files: [{
          expand: true,
          cwd: "src",
          src: ["*.html"],
          dest: "build"
        }]
      },
      
      fonts: {
        files: [{
          expand: true,
          cwd: "src/fonts",
          src: "*.*",
          dest: "build/fonts"
        }]
      }
    },
    
    googlefonts: {
      build: {
        options: {
          fontPath: "src/fonts",
          fonts: [
            {
              family: "PT Sans Narrow",
              styles: [
                400, 700
              ]
            }
          ]
        }
      }
    }
  };
  
  grunt.initConfig(config);
  
}