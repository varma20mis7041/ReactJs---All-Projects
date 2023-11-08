The app must have the following functionalities:

1. **Displaying Movie Lists:**
   - Action Movies List and Comedy Movies List should be displayed using React Slick.

2. **Movies Data:**
   - The App is provided with `moviesList`. It consists of a list of `movieItem` objects with the following properties in each `movieItem` object:

   - `id`: String
   - `thumbnailUrl`: String
   - `videoUrl`: String
   - `categoryId`: String

3. **Navigation Buttons:**
   - When the "next" button is clicked in any of the sliders, the next movie item's thumbnail in the corresponding `moviesList` should be displayed.
   - When the "previous" button is clicked in any of the sliders, the previous movie item's thumbnail in the corresponding `moviesList` should be displayed.

4. **Opening and Closing Popup:**
   - When you click on the thumbnail, then the popup should be opened, and the corresponding video should be displayed using React player component from react-player.

5. **Popup Closure:**
   - When the close button is clicked, then the popup should be closed.
