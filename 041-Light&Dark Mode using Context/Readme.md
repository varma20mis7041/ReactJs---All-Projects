The app must have the following functionalities:

1. **Initial Theme:**
   - Initially, the app should consist of the light theme.

2. **Dark Theme Switch:**
   - When the dark theme image is clicked in the respective route:
     - The dark theme image should be changed to the light theme image.
     - The app should be changed to dark mode.

3. **Light Theme Switch:**
   - When the light theme image is clicked in the respective route:
     - The light theme image should be changed to the dark theme image.
     - The app should be changed to light mode.

4. **Theme Context:**
   - The `Theme Context` has an object as a value with the following properties:
     - `isDarkTheme`: This key is used to change the theme.
     - `toggleTheme`: This method is used to update the value of `isDarkTheme`.
