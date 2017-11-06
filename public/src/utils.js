define(['jquery'], function($) {
    //判断员工是否登录 发送请求
    $.ajax({
            // /api http://localhost:3000
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function(info) {
                if (info.error) {
                    location.href = '/login.html';
                }
            }
        })
<<<<<<< HEAD
        //退出
=======
        // 退出登录
>>>>>>> feature-product
    $('.logout').on('click', function() {
        $.ajax({
            url: '/api/employee/employeeLogout',
            type: 'get',
            success: function(info) {
                if (info.success) {
                    location.href = '/login.html';
                }
            }
        })
    })

});