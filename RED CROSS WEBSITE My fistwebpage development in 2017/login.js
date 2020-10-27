function checkpass()
{
	var mail=document.getElementById("mll");
	var pass=document.getElementById("pwd");
	if(mail=="")
	{
		alert("please enter your email or phone");
		return false;
	}
	
	if(pwd!="abcd")
	{
		alert ("you have the correct user please regester know");
		return false;
	}
	else
		return true;
	
}
var pass=document.getElementById("inside").onsubmit=checkpass;
