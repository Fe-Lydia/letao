define(['jquery'], function($) {
    //判断员工是否登录 发送请求
    $.ajax({
        // /api http://localhost:3000
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function(info) {
            if (info.error) {
                // location.href = '/login.html';
            }
        }
    })
});