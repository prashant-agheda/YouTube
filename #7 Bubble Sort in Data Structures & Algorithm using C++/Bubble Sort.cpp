// Bubble sort program in Data structures and algorithms using c++ language

// Include the necessary Header Files
#include<iostream>
using namespace std;

// Function with 2 parameters ARRAY NAME and its SIZE
void bubble_Sort(int myarray[], int size)
{
	// Declare the Variables
	int i, j, temp;
	
	// Loop through the array to sort the elements
	for(i = 0; i < size; i++)
	{
		for(j = 0; j < (size-i-1); j++)
		{
			// Check if element at previous position is greater than element at next position
			if(myarray[j] > myarray[j+1])
			{
				// If it is TRUE the Swap the element
				
				// Swapping Logic is here
				temp = myarray[j];				// assign value of myarray[j] to temp variable
				myarray[j] = myarray[j+1];		// assign value of myarray[j+1] to myarray[j]
				myarray[j+1] = temp;			// Again assign value of temp to myarray[j+1]
				
				// So here array is swapped means Sorted in correct manner
			}
		}
	}
}

// Main Function
int main()
{
	int size;			// size variable to define size of array
	int myarray[size];	// array of the size number of elements which is provided by user
	int i;
	
	// cout : used to display on console or commandline window
	cout << endl << " * Enter the Total Number of Elements in Array : ";
	// cin : used to accept the input from user
	cin >> size;
	
	// Now use loop to accept numbers/elements from user
	cout << endl << " * Enter " << size << " Elements : ";
	for(i = 0; i < size; i++)
	{
		// Accepting the array elements
		cin >> myarray[i];
	}
	
	// Display Data before and after sorting of array
	cout << endl << " * Before Sorting Array is : \n";
	cout << endl;		// endl is used to end the line and bring the cursor on next line like '\n'
	for(i = 0; i < size; i++)
	{
		cout << "\t\t" << myarray[i] << " " << "\n";
	}
	
	// Function Call Here
	bubble_Sort(myarray, size);				// Pass the ARRAY NAME and SIZE as the parameters
	
	// Display the Sorted Data
	cout << endl << " * After Sorting Array is : \n";
	cout << endl;		// endl is used to end the line and bring the cursor on next line like '\n'
	for(i = 0; i < size; i++)
	{
		cout << "\t\t" << myarray[i] << " " << "\n";
	}
	cout << endl;
	
	// At last Return 0 from the Main Function
	return 0;
}

// Now Lets RUN the Program...
