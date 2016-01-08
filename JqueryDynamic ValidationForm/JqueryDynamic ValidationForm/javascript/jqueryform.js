function Validationcheck(){
	$("#nextForm").on("click",function(e){
		e.preventDefault();
		var  nameRegex=/^[A-Za-z_ ]+$/;
		var emailRegex=/[A-Za-z0-9._ ]*\@[A-Za-z]*\.[A-Za-z]{2,5}/;
		var firstName=$("#firstName").val();
		var lastName=$("#lastName").val();
		var email=$("#email").val();


		if((firstName=="")|| !firstName.match(nameRegex))
		{ 
			$("#firstName").focus();
			$("#firstName").css('background-color','red');
			$("#Error-Output").text(" Error in the FirstName")	;
			return true;
		}else if((lastName==null||lastName=="")||!lastName.match(nameRegex))
		{
			$("#lastName").focus();
			$("#Error-Output").text(" Error in the LastName");
			$("#lastName").css('background-color','red');
			$("#firstName").css('background-color','#fff');
			return false;
		}else if((email==""||email==null)||!email.match(emailRegex))
		{
			$("#lastName").css('background-color','#fff');
			$("#email").focus();
			$("#Error-Output").text(" Error in the Email");
			$("#email").css('background-color','red');
			return false;	
		}
		else if(!$('input[name="country"]:checked').val()){
			$("#firstName").css('background-color','#fff');
			$("#lastName").css('background-color','#fff');
			$("#email").css('background-color','#fff');
			$("#Error-Output").text(" Country Not Selected ");


			return false;
		}

		else{

			$("#firstName").prop("disabled",true);
			$("#lastName").prop("disabled",true);
			$("#email").prop("disabled",true);
			$("#countryName").prop("disabled",true);
			$("#education-form-Block").show(2000);
		}
	});

$("#nextStep").on("click",function(e){
	e.preventDefault(); 

	var collegeName=$("#collegeName").val();
	var year=$("#Year").val();
	var degree=$("#DegreeName").val();;
	var nameRegex=/^[A-Za-z_ ]+$/;
	var yearRegex=/^[0-9]{4}$/;
//console.log($("#collegeName").val());
if((collegeName=="")||!collegeName.match(nameRegex)){
	$("#collegeName").focus();
	$("#collegeName").css('background-color','red');
	$("#Error-Output1").text("CollegeName field  has Error");	
	return false;	
}else if(year==""||!year.match(yearRegex)){
	$("#Error-Output1").text("Year field  has Error");
	$("#collegeName").css('background-color','#fff');
	$("#Year").css('background-color',"red");
	return false;
}else if(degree==""||!degree.match(nameRegex)){

	$("#Error-Output1").text("Degree field  has Error");
	$("#Year").css('background-color','#fff');
	$("#DegreeName").css('background-color',"red");

	return false;

}else{


	$(".display-Info").fadeIn(5000);
	$("#personaldetails-Show-Hide").hide();
	$("#educationalform-Show-Hide").hide();
	var FirstName=$("#firstName").val();
	var LastName=$("#lastName").val();
	var Email=$("#email").val();
	var College=$("#collegeName").val();
	var Degree=$("#DegreeName").val();
	var Year=$("#Year").val();
	var Country=$("input:radio[name='country']:checked").val();
	$("#firstnameasOutput").text(FirstName);
	$("#lastnameasOutput").text(LastName);
	$("#emailasOutput").text(Email);
	$("#collegeasOutput").text(College);
	$("#yearasOutput").text(Year);
	$("#degreeasOutput").text(Degree);
	$("#countryasOutput").text(Country);



}

});


$("#finalStep").on("click",function(e){
	e.preventDefault(); 
	$(".display-Message").show();
	$("#userdata-Show-Hide").hide();
	$("#personaldetails-Show-Hide").hide();
	$("#educationalform-Show-Hide").hide();
	var Country=$("input:radio[name='country']:checked").val();
	$("#messageDisplayed").text(Country);
});
}