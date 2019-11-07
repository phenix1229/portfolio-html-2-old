const birthDate = prompt("What is your birth date (mmddyyyy)?\n")

const optionNum = prompt("What would you like to know?\n1 = Age\n2 = Zodiac sign\n3 = Birthstone\n4 = All of the above\nPress any other key and 'Enter' to exit\n")

const result = yourInfo(optionNum);

document.querySelector('#result').innerText = result