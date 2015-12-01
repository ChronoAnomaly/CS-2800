$(document).ready(function() {
	$("#log_in").click(function() {
			var password1 = $("#password1").val();
			var password2 = $("#password2").val();
			var isValid = true;
			
			// validate the username
			if($("#username").val() == "") {
				$("#username").next().text("Username is required.");
				isValid = false;
			} else {
				$("#username").next().text("");
			}


			// validate the first password
			if (password1 == "") {
				$("#password1").next().text("Password required.");
				isValid = false;
			} else if (!checkPassword(password1)) {
				$("#password1").next().text("Password requires one digit, one uppercase, one lowercase and is at least 8 characters.");
			} else {
				$("#password1").next().text("");
			}


			// validate the second password
			if (password2 == "") { 
				$("#password2").next().text("Password required.");
				isValid = false; 
			} else if (password1 !== password2) { 
				$("#password2").next().text("The passwords must match.");
				isValid = false;
			} else {
				$("#password2").next().text("");
			}
			
			// submit the form if all entries are valid
			if (isValid) {
				$("#email_form").submit(); 
				alert("Log in successful.");
			}
	});	// end click

	function checkPassword(str)
	{
		var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return re.test(str);
	}
}); // end ready
