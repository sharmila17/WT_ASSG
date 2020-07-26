function myfun() {
    var a = document.getElementById("p-number").value;
    if (a = " ") {
        document.getElementById("message2").innerHTML = "**mobile no can't be of 0 digit";
        return false;
    }
    if (isNaN(a)) {

        document.getElementById("message2").innerHTML = "**Enter only Numeric value";
        return false;
    }
    if (a.length < 10) {
        document.getElementById("message2").innerHTML = "**mobile no must be of 10 digit";
        return false;
    }
    if (a.length > 10) {
        document.getElementById("message2").innerHTML = "**mobile no can't be of > 10 digit";
        return false;
    }
}
function Myfun1() {
    var a = document.Myform.Email.value;
    if (a.indexOf('@') <= 0) {
        document.getElementById("Message").innerHTML = "** Invalid @ position";
        return false;
    }

    if ((a.charAt(a.length - 4) != '.') && (a.charAt(a.length - 3) != '.')) {
        document.getElementById("Message").innerHTML = "**  Invalid @ position at 3";
        return false;
    }
}
function Myfun2()
	{
	var a=document.getElementById("user_name").value;
	if(a=="")
	{
	  document.getElementById("Message1").innerHTML="** Please fill user name";
	  return false;
	}
	if(a.length<3)
	{
	  document.getElementById("Message1").innerHTML="** user name must be 3 characters";
	  return false;
	}
	if(a.length>20)
	{
	  document.getElementById("Message1").innerHTML="** user name must b/w 3 to 20 characters";
	  return false;
	}
    }
    



