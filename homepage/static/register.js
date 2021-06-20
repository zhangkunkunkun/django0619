$(function () {

    // 用户名预检测
    var $username = $("#username_input");
    $username.change(function () {
        var username = $username.val().trim();
        if (username.length > 0) {
            $.getJSON('checkuser/', { 'username': username }, function (data) {
                var $username_info = $("#username_info");
                if (data['status'] === 200) {
                    $username_info.html("用户名可用").css("color", 'green');
                } else if (data['status'] === 901) {
                    $username_info.html("用户名已存在").css("color", 'red');
                }
            })
        }
    })

    // 邮件预检测
    var $useremail = $("#useremail_input");
    $useremail.change(function () {
        var useremail = $useremail.val().trim();
        if (useremail.length > 0) {
            var re = /\S+@\S+\.\S+/;
            var $useremail_info = $("#useremail_info");
            if (!re.test(useremail)) {
                $useremail_info.html("邮箱格式不对").css("color", 'red');
                return
            }
            $.getJSON('checkmail/', { 'useremail': useremail }, function (data) {
                var $useremail_info = $("#useremail_info");
                if (data['status'] === 200) {
                    $useremail_info.html("邮箱可用").css("color", 'green');
                } else if (data['status'] === 901) {
                    $useremail_info.html("邮箱已注册").css("color", 'red');
                }
            })
        }
    })

    // 确认两次密码是否一致
    var $secondpassword = $("#userpassword_input2");
    $secondpassword.change(function () {
        var $firstpassword = $("#userpassword_input1");
        var secondpassword = $secondpassword.val().trim();
        var firstpassword = $firstpassword.val().trim();
        if (secondpassword.length > 0) {
            var $userpassword2_info = $("#userpassword2_info");
            if (secondpassword != firstpassword) {
                $userpassword2_info.html("两次密码不一致").css("color", 'red');
            }
            else {
                $userpassword2_info.html("密码可用").css("color", 'green');
            }
        }
    })
})

function check() {
    var $username = $("#username_input");
    var $useremail = $("#useremail_input");
    var $firstpassword = $("#userpassword_input1");
    var $secondpassword = $("#userpassword_input2");

    var $submit_info = $("#submit_info");
    var username = $username.val().trim();
    var useremail = $useremail.val().trim();
    var firstpassword = $firstpassword.val().trim();
    var secondpassword = $secondpassword.val().trim();

    if (username.length == 0 || useremail.length == 0) {
        $submit_info.html("请填写注册信息").css("color", 'red');
        return false
    }

    var info_color_username = $("#username_info").css('color');
    var info_color_useremail = $("#useremail_info").css('color');
    var info_color_userfirstpassword = $("#userpassword1_info").css('color');
    var info_color_usersecondpassword = $("#userpassword2_info").css('color');

    if (info_color_username == 'rgb(255, 0, 0)'
        || info_color_useremail == 'rgb(255, 0, 0)'
        || info_color_userfirstpassword === 'rgb(255, 0, 0)'
        || info_color_usersecondpassword === 'rgb(255, 0, 0)') {
        $submit_info.html("请核对注册信息").css("color", 'red');
        return false
    }
    return true
}