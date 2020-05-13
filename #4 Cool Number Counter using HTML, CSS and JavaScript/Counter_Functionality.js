function increment_Counter()
{
	var cnt = document.getElementById("Show_Number").innerHTML;
	cnt++;		// Increase value by 1
	document.getElementById("Show_Number").innerHTML = cnt;
	document.getElementById("Show_Number").style.backgroundColor = "LightGreen";
	document.getElementById("Show_Number").style.color = "Green";
}

function decrement_Counter()
{
	var cnt = document.getElementById("Show_Number").innerHTML;
	cnt--;		// Decrease value by 1
	document.getElementById("Show_Number").innerHTML = cnt;
	document.getElementById("Show_Number").style.backgroundColor = "Pink";
	document.getElementById("Show_Number").style.color = "Red";
}

function reset_Counter()
{
	var cnt = document.getElementById("Show_Number").innerHTML = 0;
	document.getElementById("Show_Number").innerHTML = cnt;
	document.getElementById("Show_Number").style.backgroundColor = "Gray";
	document.getElementById("Show_Number").style.color = "Black";
}
