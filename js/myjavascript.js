var prev_x="-1"; 
			
function display_desc(x)
{
	//alert(x);
	document.getElementById(x).style.display="block";
	document.getElementById(prev_x).style.display="none";
	if(prev_x == x)
		prev_x='-1';
	else
		prev_x = x;
}

function addToCart(x)
  {
    //alert("Item Successfully Added to Cart...");
    document.getElementById("mycart").innerHTML+="<br>"+x;
  }