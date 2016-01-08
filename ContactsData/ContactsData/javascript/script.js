/*var selector,elems,makeActive;
selector="#cnameDisplay>li";
elems=document.querySelectorAll(selector)    ;*/
document.body.onload=abc;

function abc(){
  //var x=document.getElementBYId();
  var contactsDisplay=document.getElementsByClassName('headingInfo');
  var container1=document.createElement("container");
  var x=document.createTextNode("Contacts");
  container1.appendChild(x);
  contactsDisplay[0].parentNode.insertBefore(container1,contactsDisplay[0]);
  container1.style.marginLeft="10px";
  container1.style.fontWeight="bold";
  container1.style.fontSize="17px";
  container1.style.display="inline-block";
  container1.style.paddingTop ="3%";
};
function hoveringMenu(){

	var x=document.getElementsByClassName("cdelta");
	x[0].style.background=" #efefef";
	return false;
}


function displayData() {

	var email = document.getElementById("email");
	var phoneno = document.getElementById("phoneNo");
	var choosingData = document.getElementById("displayType");
	if (choosingData.value == "email") {
		email.style.display = "block";
		phoneno.style.display = "none";


	} else if (choosingData.value == "phoneNo") {
		email.style.display = "none";
		phoneno.style.display = "block";


	}

}

/*makeActive=function(e)
{
  e.preventDefault;
for(var i=0;i<elems.length;i++){
   elems[i].classList.remove('active');
this.classList.add('active');
};
}
for(var i=0;i<elems.length;i++){

elems[i].addEventListener('mouseover',makeActive);

}*/

