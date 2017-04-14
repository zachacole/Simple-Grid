/**
 * Simple build file for the sass.
 * 1 - npm install -g quilk
 * 2 - quilk (builds the non minified version)
 * 3 - quilk release=prod (builds the minified version)
 */


module.exports = {
    modules: [
        {
            name: 'To CSS',
            module: 'sass_std',
            outputStyle: 'nested',
            sourceComments: false,
            input_path: '/simple-grid.scss',
            target: '/simple-grid.css'
        }
    ],

    dont_watch: [
        'simple-grid.css'
    ],

    release_commands_or_modules: {
        prod: {
            post: [{
                name: "Minify the css",
                module: "node_minify",
                type: "sqwish",
                input: [
                    "/simple-grid.css"
                ],
                target: "/simple-grid.min.css"
            }]
        }
    },

    developers: {
        default: {
            platform: "windows",
            notifier: {
                on: false
            }
        }
    }
};