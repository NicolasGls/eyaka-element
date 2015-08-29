module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'jef_element.js': 'jef_element.es6'
                }
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            scripts: {
                files: {
                    'jef_element.min.js': 'jef_element.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'babel',
        'uglify'
    ]);

};