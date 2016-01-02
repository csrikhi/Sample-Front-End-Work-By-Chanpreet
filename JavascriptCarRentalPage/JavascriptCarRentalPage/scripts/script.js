function feature_block(x) {
	document.getElementById("faster_full").style.display = "none";
	document.getElementById("more_value_full").style.display = "none";
	document.getElementById("more_rewarding_full").style.display = "none";
	
	//document.getElementById("faster").style.display = "block";
	//document.getElementById("more_value").style.display = "block";
	//document.getElementById("more_rewarding").style.display = "block";
	
	//document.getElementById("faster").style.border = "10px solid #e1e1e1";
	//document.getElementById("more_value").style.border = "10px solid #e1e1e1";
	//document.getElementById("more_rewarding").style.border = "10px solid #e1e1e1";
	switch(x) {
		case 1: var showDiv = document.getElementById("faster_full");
		var hideDiv = document.getElementById("faster");
		var hideDiv1 = document.getElementById("more_value");
		var hideDiv2 = document.getElementById("more_rewarding");
		showDiv.style.display = "block";
		hideDiv.style.display = "none";
		hideDiv1.style.borderRight = "10px solid #e1e1e1";
		showDiv.style.border = "10px solid #e1e1e1";
		hideDiv2.style.borderLeft = "none";
		hideDiv2.style.borderTop = "none";
		hideDiv1.style.borderLeft = "none";
		break;
		case 2: var showDiv = document.getElementById("more_value_full");
		var hideDiv = document.getElementById("more_value");
		var hideDiv1 = document.getElementById("faster");
		var hideDiv2 = document.getElementById("more_rewarding");
		showDiv.style.display = "block";
		hideDiv.style.display = "none";
		showDiv.style.border = "10px solid #e1e1e1";
		hideDiv1.style.borderBottom = "10px solid #e1e1e1";
		hideDiv1.style.borderLeft = "none";
		hideDiv1.style.borderBottom = "none";
		hideDiv2.style.borderLeft = "none";
		break;
		case 3: var showDiv = document.getElementById("more_rewarding_full");
		var hideDiv = document.getElementById("more_rewarding");
		var hideDiv1 = document.getElementById("faster");
		var hideDiv2 = document.getElementById("more_value");
		showDiv.style.display = "block";
		hideDiv.style.display = "none";
		showDiv.style.border = "10px solid #e1e1e1";
		hideDiv2.style.borderRight = "10px solid #e1e1e1";
		hideDiv1.style.borderLeft = "none";
		hideDiv2.style.borderTop = "none";
		hideDiv2.style.borderLeft = "none";
		break;
	}
	return false;
}