/*jshint node:true*/
module.exports = function(grunt) {

"use strict";

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	concat: {
		// used to copy to dist folder
		dist: {
			files: {
				'dist/jquery.validate.js': ['src/core.js', 'src/*.js'],
				'dist/additional-methods.js': ['src/additional/additional.js', 'src/additional/*.js']
			}
		}
	},
	uglify: {
		options: {
			preserveComments: false,
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("m/d/yyyy") %>\\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},
		all: {
			files: {
				'dist/jquery.validate.min.js': ['dist/jquery.validate.js'],
				'dist/additional-methods.min.js': ['dist/additional-methods.js']
			}
		}
	},
	compress: {
		dist: {
			options: {
				mode: 'zip',
				level: 1,
				archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip',
				pretty: true
			},
			src: [
				'dist/*.js',
				'README.md',
				'changelog.txt',
				'Gruntfile.js',
				'package.json',
				'demo/**/*.*',
				'lib/**/*.*',
				'src/localization/**/*.*',
				'test/**/*.*'
			]
		}
	},
	qunit: {
		files: ['test/index.html']
	},
	jshint: {
		options: {
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			sub: true,
			undef: true,
			eqnull: true,
			browser: true,
			globals: {
				jQuery: true,
				$: true,
				console: true
			}
		},
		files: [
			'src/**/*.js'
		],
		test: {
			options: {
				globals: {
					jQuery: true,
					$: true,
					QUnit: true,
					module: true,
					test: true,
					start: true,
					stop: true,
					expect: true,
					ok: true,
					equal: true,
					deepEqual: true,
					strictEqual: true
				}
			},
			files: {
				src: [
					'test/*.js'
				]
			}
		},
		grunt: {
			files: {
				src: [
					'Gruntfile.js'
				]
			}
		}
	},
	watch: {
		gruntfile: {
			files: 'Gruntfile.js',
			tasks: ['jshint:grunt']
		},
		src: {
			files: '<%= jshint.files %>',
			tasks: ['concat', 'qunit']
		},
		test: {
			files: ['<%= jshint.test.files.src %>', 'test/index.html'],
			tasks: ['jshint:test']
		}
	},
	connect: {
		server: {
			options: {
				base: '.',
				port: 8000
			}
		}
	},
	'saucelabs-qunit': {
		all: {
			options: {
				urls: ['http://127.0.0.1:8000/test/index.html'],
				tunnelTimeout: 5,
				build: process.env.TRAVIS_JOB_ID ,
				concurrency: 3,
				browsers: grunt.file.readJSON('browsers.json'),
				testname: 'jQuery Validation Travis Build #' + process.env.TRAVIS_BUILD_NUMBER,
				tags: [
					process.env.TRAVIS_BRANCH,
					process.env.TRAVIS_COMMIT
				]
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');

if (process.env.TRAVIS_SECURE_ENV_VARS && process.env.TRAVIS_REPO_SLUG === "nschonni/jquery-validation") {
	grunt.loadNpmTasks('grunt-saucelabs');
	grunt.registerTask('default', ['concat', 'jshint', 'qunit', 'connect', 'saucelabs-qunit']);
} else {
	grunt.registerTask('default', ['concat', 'jshint', 'qunit']);
}
grunt.registerTask('release', ['default', 'uglify', 'compress']);

};
