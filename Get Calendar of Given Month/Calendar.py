# My 3rd YouTube Video
# Display Calendar of Given Month

# Import the Module
import calendar

year = int(input("\n* Enter the Year : "))
month = int(input("* Enter the Month : "))

# calendar.month accepts 2 Parameters YEAR AND MONTH
resultant_calendar = calendar.month(year, month)

# Print the Calendar
print("\n", resultant_calendar, "\n")
