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


			// // validate the first email address
			// if (emailAddress1 == "") { 
			// 	$("#email_address1").next().text("This field is required.");
			// 	isValid = false;
			// } else {
			// 	$("#email_address1").next().text("");
			// } 
			
			// // validate the second email address
			// if (emailAddress2 == "") { 
			// 	$("#email_address2").next().text("This field is required.");
			// 	isValid = false; 
			// } else if (emailAddress1 !== emailAddress2) { 
			// 	$("#email_address2").next().text("This entry must equal first entry.");
			// 	isValid = false;
			// } else {
			// 	$("#email_address2").next().text("");
			// }
			
			// // validate the first name entry  
			// if ($("#first_name").val() == "") {
			// 	$("#first_name").next().text("This field is required.");
			// 	isValid = false;
			// } 
			// else {
			// 	$("#first_name").next().text("");
			// }
			
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
