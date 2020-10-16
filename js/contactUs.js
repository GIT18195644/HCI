/*contact us form fields visibility*/

/*function changeStatus() 
{
    var status = document.getElementById("jobcat");
	if(status.value == "7")
	{

		document.getElementById("company_hide").style.visibility = "visible";
		document.getElementById("jobtitle_hide").style.visibility = "visible";
		document.getElementById("type_hide").style.visibility = "visible";
		document.getElementById("location_hide").style.visibility = "visible";


	}
	else
	{
		document.getElementById("company_hide").style.visibility = "hidden";
		document.getElementById("jobtitle_hide").style.visibility = "hidden";
		document.getElementById("type_hide").style.visibility = "hidden";
		document.getElementById("location_hide").style.visibility = "hidden";
	}
};*/


/*top employers page search function*/
function searchJobsTopEmp() {
  var input, filter, table, tr, td, i, txtValue;
  
  input = document.getElementById("searchJobsInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("top-emp-cat-table");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

/*top employers pages tabs*/
function openJobMenu(evt, JobmenuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("job");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }
  document.getElementById(JobmenuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();


/*contact us form validation*/

/*required fields*/

/*function validateForm() {
	/*for name*/
 /* var name = document.forms["contact-us"]["yourName"].value;
  if (name == "") {
    alert("Enter your name");
    return false;
  }*/
  
  /*for email*/
 /* var mail = document.forms["contact-us"]["email"].value;
  if (mail== ""){
	  alert("Enter the email address");
	  return false;
  }*/
  
  /*for phone number*/
  /*var phnNo = document.forms["contact-us"]["no"].value;
  if (phnNo == ""){
	  alert("Enter the phone number");
	  return false;
  }*/
  
  
  /*for job category*/
  /*var category = document.forms["contact-us"]["jobcat"].value;
  if (category == "-1"){
	  alert("Choose a Category");
	  return false;
  }*/
  
  /*if(category == "7"){
  
	  /*for user type*/
	/*  var type = document.forms["contact-us"]["type"].value;
	  if (type == "-1"){
		  alert("Choose a user type");
		  return false;
		
	  }
	  
	  /*for company*/
	 /* var company = document.forms["contact-us"]["company"].value;
	  if (company == ""){
		  alert("Enter a company name");
		  return false;
	  }
	  
	  /*for job title*/
	 /* var title = document.forms["contact-us"]["jobtitle"].value;
	  if (title == ""){
		  alert("Enter a job title");
		  return false;
	  }
	  
	  /*for location*/
	  /*var location = document.forms["contact-us"]["location"].value;
	  if (location == ""){
		  alert("Enter a location");
		  return false;
	  }
  }*/
  
  /*for the message*/
  /*var message = document.forms["contact-us"]["msg"].value;
  if (message== ""){
	  alert("Enter the message");
	  return false;
  }*/
  
  /*name letters only
  var abc = document.getElementById("yourName").value;
  var letters = /^[A-Za-z]+$/
	if (letters.test(abc)){
		return true;
	}
	else{
		alert("Invalid Name")
		return false;
	}*/  
/*}*/

 /*email format*/
 /*function validEmail(){
  var mail = document.getElementById("email").value;
 
	
	var expression = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
	if (expression.test(mail)){
		return true;
	}
	else{
		 
		alert("Invalid EMail")
		return false;
		
	}
 }*/

/*phone number format*/
/*function validPhoneNumber(){
 var num = document.getElementById("pno").value;
 
	var numbers = /^[0-9]{10}$/;
	if (numbers.test(num)){
		return true;
	}
	else{
		alert("Invalid Phone number")
		return false;
	
	}
}*/

/*function doAllThses(){
	var retvalue;
 
	retvalue = validateForm();
	if(retvalue == false){
		return retvalue;
	}
	retvalue = validEmail();
	if (retvalue == false){
		return retvalue;
	}
	return validPhoneNumber();
}*/

