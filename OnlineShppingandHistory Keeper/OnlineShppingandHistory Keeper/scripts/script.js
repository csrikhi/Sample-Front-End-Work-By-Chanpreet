function validateForm () {
	var userid = document.login_form.user_id.value;
	var password = document.login_form.password.value;
	if(userid == "" && userid != "admin") {
		var x = document.getElementById("id_error");
		x.style.visibility = "visible";
		return false;
	}
	if(password == "" && password != "admin") {
		var y = document.getElementById("pass_error");
		y.style.visibility = "visible";
		return false;
	}
	return true;

}
function adminForm (x) {
	var count = 0;
	var inputs = document.getElementById(x).getElementsByTagName('input');
	for (var i = 0; i<inputs.length; i++) {
		if(inputs[i].value == "") {
			count++;
			break;
		}
	}
	if (count == 1) {
		alert("Please fill all the fields in "+x+" block before you save.");
		return false;
	}
	else {
		alert("All inputs have been saved!");
		return false;
	}
}