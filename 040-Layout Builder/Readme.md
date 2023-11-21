The app contain following functionalities:

1. **Initial Display:**
   - Initially, the checkboxes for Content, Left Navbar, and Right Navbar should be checked, and all the elements in the layout should be displayed.

2. **Checkbox Actions:**
   - When the Content checkbox is unchecked, then the content element should not be displayed.
   - When the Left Navbar checkbox is unchecked, then the Left Navbar element should not be displayed.
   - When the Right Navbar checkbox is unchecked, then the Right Navbar element should not be displayed.
   - When any of the checkboxes is checked, then the respective element should be displayed accordingly.

3. **Configuration Context:**
   - The `Configuration Context` has an object as a value with the following properties:
     - `showContent`: This key is used to display the Content Element.
     - `showLeftNavbar`: This key is used to display the Left Navbar Element.
     - `showRightNavbar`: This key is used to display the Right Navbar Element.
     - `onToggleShowContent`: This method is used to update the value of the `showContent`.
     - `onToggleShowLeftNavbar`: This method is used to update the value of the `showLeftNavbar`.
     - `onToggleShowRightNavbar`: This method is used to update the value of the `showRightNavbar`.
