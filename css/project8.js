function change()
{
	var city=document.getElementById('sel').value;
	if(city=="ban")
	{
		document.getElementById('ak1').src="img51.jpg";
		document.getElementById('ak2').src="img52.jpg";
		document.getElementById('ak3').src="img53.jpg";
		document.getElementById('ak4').src="img54.jpg";
	}
	if(city=="pun")
	{
		document.getElementById('ak1').src="img41.jpg";
		document.getElementById('ak2').src="img42.jpg";
		document.getElementById('ak3').src="img43.jpg";
		document.getElementById('ak4').src="img44.jpg";
	}
	if(city=="mum")
	{
		document.getElementById('ak1').src="img56.jpg";
		document.getElementById('ak2').src="img57.jpg";
		document.getElementById('ak3').src="img58.jpg";
		document.getElementById('ak4').src="img59.jpg";
	}
}
function mov1(){
		var a=document.getElementById('ak1').src;
		localStorage.setItem("link",a);
}
function mov2(){
		var a=document.getElementById('ak2').src;
		localStorage.setItem("link",a);
}
function mov3(){
		var a=document.getElementById('ak3').src;
		localStorage.setItem("link",a);
}
function mov4(){
		var a=document.getElementById('ak4').src;
		localStorage.setItem("link",a);
}
function getLink()
{
		var src=localStorage.getItem("link");
		document.getElementById('img').src=src;
}
