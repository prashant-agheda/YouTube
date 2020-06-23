# Functions should be defined first as it is a Good Practice in Python
def add():
    a = int(input("\nEnter 1st Number : "))
    b = int(input("Enter 2nd Number : "))
    c = a + b
    print("\n\tResult = ", c)


def sub():
    a = int(input("\nEnter 1st Number : "))
    b = int(input("Enter 2nd Number : "))
    c = a - b
    print("\n\tResult = ", c)


def mul():
    a = int(input("\nEnter 1st Number : "))
    b = int(input("Enter 2nd Number : "))
    c = a * b
    print("\n\tResult = ", c)


def div():
    a = int(input("\nEnter 1st Number : "))
    b = int(input("Enter 2nd Number : "))
    c = a / b
    print("\n\tResult = ", c)


print("\n------------------")
print("\t* Menu *")
print("------------------")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")
print("5. Exit")
print("------------------")

# int used to convert input to INTEGER as BY DEFAULT IT is in STRING FORMAT
# This method is called as TYPECASTING
choice = int(input("Select Your Choice : "))

if choice == 1:
    # Call the Function
    add()
elif choice == 2:
    sub()
elif choice == 3:
    mul()
elif choice == 4:
    div()
elif choice == 5:
    # exit() is by default BUILT-IN Function in Python to exit
    exit()
else:
    print("\n !!! Please Select a Choice From Given Options !!!")
