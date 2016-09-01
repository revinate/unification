module.exports = function(grunt) {

	grunt.initConfig({
		styledown: {
			build: {
				files: {
					'index.html': ['styleguide-markdown.md'],
					'principles.html': ['principles-markdown.md'],
					'resources.html': ['resources-markdown.md']
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

	grunt.registerTask('deploy', ['styledown']);
	grunt.registerTask('default', ['styledown', 'serve']);

};