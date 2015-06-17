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
		}
	});

	grunt.loadNpmTasks('grunt-styledown');

	grunt.registerTask('default', ['styledown']);

};