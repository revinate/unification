module.exports = function(grunt) {

	grunt.initConfig({
		styledown: {
			build: {
				files: {
					'styleguide.html': ['styleguide-markdown.md']
				},
				options: {
					config: 'styleguide-config.md',
					title: 'Revinate Styleguide'
				}
			}
		},
		serve: {
			options: {
				port: 9000
			}
		}
	});

	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('default', ['styledown']);
	grunt.registerTask('serve', ['styledown', 'serve']);

};