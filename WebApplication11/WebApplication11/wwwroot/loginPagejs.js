function loginPage(id) {
	
	this.btnLoginOrSingupCliced = function (event) {
		let container = event.target.container;
		let userName = container.txtUserName.value;
		let password = container.txtPassword.value;
		container.userName = userName;
		container.password = password;
		if (userName.length == 0 || password.length == 0) {
			container.message("must type sumthing", "red");
			return;
		}
		container.btnLogin.style.disabled = true;
		container.btnSingup.style.disabled = true;
		httpRequest("api/user/" + event.target.loginOrSingup + "?userName=" + userName + "?password=" + password, function (success, response) {
			container.btnLogin.style.disabled = false;
			container.btnSingup.style.disabled = false;
			if (success) {
				if (response) {
					container.message("success", "green");
				} else {
					container.message("error the user name is ronge","red");
				}
			}

		}, this);
		
	};

	this.message = function (msg, color) {
		this.divMessage.innerHTML = msg;
		this.divMessage.style.color = color ? color: "black";
	};

	httpRequest("login.html", function (success, response, obj) {
		if (success) {

			document.getElementById(id).innerHTML = response;
			idProp(obj, document.getElementById(id));
			obj.btnLogin.loginOrSingup = "login";

			obj.btnSingup.LoginOrSingup = "singup";

		}

	}, this);
}