
// login part

var base_url = 'http://localhost/knowledgecityCompanyTest/';
$(document).ready(function () {
    var myCookie = getCookie("user_id");

    if (myCookie != null) {
        window.location = 'user_list.html';
    }
    var cook_username = getCookie("user_name");
    var cook_pass = getCookie("user_pass");
    if (cook_username != null) {
        $('#login-username').val(cook_username);
    }
    if (cook_pass != null) {
        $('#login-password').val(cook_pass);
    }

});
$("#login_btn").click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: base_url + "api/auth.php",
        data: {
            username: $('#login-username').val(), 
            password: $("#login-password").val()
        },
        success: function (result) {
            if (result.status == 200) {
                var d = new Date();
                d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = 'user_id' + "=" + result.data.id + ";" + expires + ";path=/";
                if ($('input[name="remember"]:checked').length) {
                    document.cookie = 'user_name' + "=" + result.data.username + ";" + expires + ";path=/";
                    document.cookie = 'user_pass' + "=" + $("#login-password").val() + ";" + expires + ";path=/";
                }
                else {
                    document.cookie = 'user_name' + "=;" + expires + ";path=/";
                    document.cookie = 'user_pass' + "=;" + expires + ";path=/";
                }
                window.location = 'user_list.html';
            } else {
                $('#error').html('Username/Password incorrect');
            }
            console.log('ok', result);
        },
        error: function (result) {
            console.log('error', result)
        }
    });
});

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
            end = dc.length;
        }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
}
