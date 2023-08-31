Initially, the website input, username input, and password input should be empty, and the No Passwords View should be displayed.

When non-empty values are provided for the website, username, and password, and the Add button is clicked:
- A new password item should be added to the list of passwords.
- The passwords count should be incremented by one.
- The stars image should be displayed in the password items instead of the actual passwords.
- The value of the input fields for website, username, and password should be updated to their initial values.

When the Show Password checkbox is checked:
- The password should be displayed instead of the stars image.

When a non-empty value is provided in the search input field:
- Password items whose website matches the search input value, irrespective of the case, should be displayed.
- If the website of any password item does not match the value given in the search input, the No Passwords View should be displayed.

When the delete button of a password item is clicked:
- The respective password item should be deleted from the list of passwords.
- The passwords count should be decremented by one.
- When all password items are deleted, the No Passwords View should be displayed.
