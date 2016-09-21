module.exports = function(grunt) {

	grunt.initConfig({

	});

	grunt.loadNpmTasks('grunt-styledown');
	grunt.loadNpmTasks('grunt-serve');

	grunt.registerTask('deploy', ['styledown']);
	grunt.registerTask('default', ['styledown', 'serve']);

};