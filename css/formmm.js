function cId() {

	var a=document.getElementById('uid').value;
	var exp=/\w/
	if(a.length>6||(!a.match(exp)))
	{
		document.getElementById('iderror').innerHTML="id should not be more than 6 characters<br>and has at least one character with no special symbol";

	}
	else
	{
		document.getElementById('iderror').innerHTML="";
	}
}
function cName()
{
	var a=document.getElementById('uname').value;
	var exp=/[a-zA-Z]/
	if(a.length<3||!a.match(exp))
	{
		document.getElementById('nameerror').innerHTML="name should have more than 3 characters and only alphabets";

	}
	
	else
	{
		document.getElementById('nameerror').innerHTML="";
	}
}
