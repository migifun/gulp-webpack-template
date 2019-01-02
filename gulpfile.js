const gulp              = require( "gulp" );
const webpackStream     = require( "webpack-stream" );
const webpack           = require( "webpack" );
const pug               = require( "gulp-pug" );
const styl              = require( "gulp-stylus" );
const sync              = require( "browser-sync" );

const webpackConfig     = require( "./webpack.config" );
const buildCmds         = ['webpack', 'pug', 'styl', 'reload'];

//
// js
gulp.task( "webpack", () =>
{
  return webpackStream( webpackConfig, webpack )
    .pipe( gulp.dest( "./dist/js" ) );
});

//
// html
gulp.task( "pug", ()=>
{
    gulp.src( [ "./src/pug/**/*.pug", "!./src/pug/**/_*.pug" ] )
    .pipe( pug( { pretty: true } ) )
    .pipe( gulp.dest( "./dist" ) );
});

//
// css
gulp.task( "styl", ()=>
{
    gulp.src( [ "./src/styl/**/*.styl", "!./src/styl/**/_*.styl" ] )
    .pipe( styl( { pretty: true } ) )
    .pipe( gulp.dest( "./dist/css" ) );
});

//
// brower-sync
gulp.task( "sync", ()=>
{
    sync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

//
// brower-reload
gulp.task( "reload", ()=>
{
    sync.reload();
});

//
// run
gulp.task( "default", [ "sync" ], () =>
{
    gulp.watch('./src/babel/**/*.es6', buildCmds);
    gulp.watch('./src/pug/**/*.pug', buildCmds);
    gulp.watch('./src/styl/**/*.styl', buildCmds);
});