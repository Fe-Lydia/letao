//模板公共配置
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min'
    },
    //如果某个第三方的类库不支持AMD,通过shim可以实现类似模块的用吗
    shim: {
        //模块特点：
        // uploadify 没有返回值
        uploadify: {
            //1.通过exports可以将非模块的方法或者属性公开出来（相当于标准模块中的return的作用）

            //2.通过deps可以依赖其他模块

            deps: ['jquery']
        }
    }
});