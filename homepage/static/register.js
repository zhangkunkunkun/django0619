
$(function () {

    // 用户名预检测
    var $username = $("#username_input");
    $username.change(function () {
        var username = $username.val().trim();
        if (username.length > 0) {
            $.getJSON('checkuser/', { 'username': username }, function (data) {
                var $username_info = $("#username_info");
                if (data['status'] === 200) {
                    $username_info.html("ok").css("color", 'green');
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
        if (useremail.length >= 0) {
            var re = /\S+@\S+\.\S+/;
            var $useremail_info = $("#useremail_info");
            if (!re.test(useremail)) {
                $useremail_info.html("邮箱格式不对").css("color", 'red');
                return
            }
            $.getJSON('checkmail/', { 'useremail': useremail }, function (data) {
                var $useremail_info = $("#useremail_info");
                if (data['status'] === 200) {
                    $useremail_info.html("ok").css("color", 'green');
                } else if (data['status'] === 901) {
                    $useremail_info.html("邮箱已注册").css("color", 'red');
                }
            })
        }
    })

    // 验证码
    var $checkcode = $("#checkcode_input");
    $checkcode.change(function () {
        var checkcode = $checkcode.val().trim();
        if (checkcode.length > 0) {
            $.getJSON('checkcode/', { 'checkcode': checkcode }, function (data) {
                var $checkcode_info = $("#checkcode_info");
                if (data['status'] === 901) {
                    $checkcode_info.html("验证码有误").css("color", 'red');
                } else {
                    $checkcode_info.html("ok").css("color", 'green');
                }
            })
        }
    })

    // 确认两次密码是否一致(第一次密码变更时)
    var $firstpassword = $("#userpassword_input1");
    $firstpassword.change(function () {
        var secondpassword = $secondpassword.val().trim();
        var firstpassword = $firstpassword.val().trim();

        var $userpassword1_info = $("#userpassword1_info");
        if (firstpassword.length < 6) {
            $userpassword1_info.html("密码过短").css("color", 'red');
        }
        else {
            $userpassword1_info.html("ok").css("color", 'green');
            if (secondpassword.length > 0) {
                var $userpassword2_info = $("#userpassword2_info");
                if (secondpassword != firstpassword) {
                    $userpassword2_info.html("密码不一致").css("color", 'red');
                }
                else {
                    $userpassword2_info.html("ok").css("color", 'green');
                }
            }
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
                $userpassword2_info.html("密码不一致").css("color", 'red');
            }
            else {
                $userpassword2_info.html("ok").css("color", 'green');
            }
        }
    })
})

// 注册按钮时check
function check() {
    var $username = $("#username_input");
    var $useremail = $("#useremail_input");
    var $checkcode = $("#checkcode_info");
    var $firstpassword = $("#userpassword_input1");
    var $secondpassword = $("#userpassword_input2");

    var $submit_info = $("#submit_info");
    var username = $username.val().trim();
    var useremail = $useremail.val().trim();
    var checkcode = $checkcode.val().trim();
    var firstpassword = $firstpassword.val().trim();
    var secondpassword = $secondpassword.val().trim();

    if (username.length == 0 || useremail.length == 0) {
        $submit_info.html("请填写注册信息").css("color", 'red');
        return false
    }

    if ($("#username_info").css("color") == 'rgb(0, 128, 0)'
        && $("#useremail_info").css("color") == 'rgb(0, 128, 0)'
        && $("#checkcode_info").css("color") == 'rgb(0, 128, 0)'
        && $("#userpassword1_info").css("color") == 'rgb(0, 128, 0)'
        && $("#userpassword2_info").css("color") == 'rgb(0, 128, 0)'
    ) {
        return true
    }
    else {
        $submit_info.html("请核对注册信息").css("color", 'red');
        return false
    }
}

// 点击获取验证码按钮按下时
function getcheckcode() {
    var $useremail = $("#useremail_input");
    var $useremail_info = $("#useremail_info");
    var useremail = $useremail.val().trim();
    if ($useremail_info.css("color") != 'rgb(255, 0, 0)'
        && $useremail != "") {
        $.getJSON('getcheckcode/', { 'useremail': useremail }, function (data) {
            if (data['status'] === 200) {
                console.log("success");
                document.getElementById("getcheckcode").innerHTML = "验证码已发送";
            } else if (data['status'] === 901) {
                console.log("failed");
            }
        })
    }
}


