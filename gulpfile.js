const { task, src, dest, watch, series, parallel} = require('gulp');
const load = require('gulp-load-plugins') ();

//合并压缩css
task('concatCss', function(){
    return src(['./css/*.css','!./css/cssre*.css'])
    // .pipe(load.concat('index.css'))
    .pipe(load.minifyCss())
    .pipe(dest('./dist/css'))
    .pipe(load.connect.reload())
});
// 合并压缩JS
task('concatJs',function(){
    return src(['./js/*.js','!./js/jquery*.js'])
    .pipe(load.babel({ presets: ['@babel/preset-env'] }))
    // .pipe(load.concat('index.js'))
    .pipe(load.uglify())
    .pipe(dest('./dist/js'))
    .pipe(load.connect.reload())
});
//压缩jq
task('ungifyJq',function(){
    return src('./js/jquery*.js')
    .pipe(load.ungify())
    .pipe(load.rename('jquery.min.js'))
    .pipe(dest('./dist/js'))
});
// task('uglifyJq', function () {//压缩jq
//     return src(['./js/jquery*.js'])
//         .pipe(load.uglify())
//         .pipe(load.rename('jquery.1.8.3.mim.js'))
//         .pipe(dest('./dist/js'));
// });
//压缩html
task('minifyHtml',function(){
    return src('./*.html')
    .pipe(load.minifyHtml())
    .pipe(dest('./dist'))
    .pipe(load.connect.reload())
});
//压缩图片
task('imagemin',function(){
    return src('./img/*.*')
    .pipe(load.imagemin())
    .pipe(dest('./dist/img'))
    .pipe(load.connect.reload())
});
task('sass', function(){
    return src('./sass/*.scss')
    .pipe(load.sass())
    .pipe(dest('./css'))
})
task('reload',function(cb){//自动刷新
    load.connect.server({
        root:'./dist',
        livereload: true
    });
    cb();
});
task('watchs', function (cb) {
    watch('./sass/*.scss',series('sass'));
    watch('./css/*.css',series('concatCss'));
    watch('./js/*.js',series('concatJs'));
    watch('./*.html',series('minifyHtml'));
    watch('./img/*.*',series('imagemin'));
    cb();
})

task('start', series('reload', 'watchs'));

task('build', parallel(// 打包
    series('concatCss'),
    series('concatJs','ungifyJq'),
    series('minifyHtml'),
    series('imagemin')
));