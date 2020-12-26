// Code By Prashant Agheda (YouTube - @Coder Prashant)

function displayTime()
{
	// Create Instance of Date Object
	var date = new Date();
	
	// Storing hours, minutes and seconds into variables
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	// For AM and PM
	var period = "AM";
	
	/* The Date Object works only on 24 Hour Format so we
	   can change the hours to 1 when value is GREATER than 12 */
	if(hours > 12)
	{
		hours = hours - 12;
		period = "PM";
	}
	
	if(hours == 0)
	{
		hours = 12;
		period = "AM";
	}
	
	/* Here we are using TERNARY OPERATOR to check that
       if hours, minutes and seconds are < 10, if YES then
	   add 0 before digit and if NO then display the respective
	   values */
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	
	// Storing the time in variable in below format
	// format as = hours : minutes : seconds period
	// example = 12 : 23 : 45 PM
	var time = hours + ":" + minutes + ":" + seconds + " " + period;
													
	/* Displaying the Time in Display_Area div */
	document.getElementById("Display_Area").innerHTML = time;
}

// Time is not displayed because we haven't called the function
// Call the function in HTML File using onload event on Body 

// We need to update the time every second so we will use below way

/*
	setInterval() has 2 parameters as
	setInterval(functionToExecute, timeInMilliseconds);
	and is used to execute the function every second.
	1000 milliseconds = 1 second
*/
setInterval(displayTime, 1000);
