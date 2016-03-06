module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './',
                    keepalive: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'public/css/app.css' : 'src/scss/main.scss'
                }
            }
        },
        typescript: {
            base: {
                src: ['src/ts/**/*.ts'],
                dest: 'public/js/app.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        }
        
	});
	
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-typescript');
	grunt.registerTask('default',[]);

}