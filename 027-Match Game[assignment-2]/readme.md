Initially:
- Score should be 0, and the time should be 60 seconds.
- The image to be matched should have the `src` attribute value as the value of the key `imageUrl` from the first object in `imagesList` provided.
- The "Fruits" tab should be active, and the thumbnails with "FRUIT" as their category should be displayed.
- The timer should start running backward from 60 seconds.

When a tab is clicked:
- The thumbnails in the corresponding category should be displayed.

When a thumbnail is clicked:
- If it matches the image to be matched, the Score is incremented by one.
- A new image to be matched should be generated randomly from the values of the key `imageUrl` from the `imagesList` provided.
- If the thumbnail is not matched with the image to be matched, the game should end, and the Scorecard view should be displayed.

When the "PLAY AGAIN" button is clicked:
- The player should be able to play the game again.
- The score and time values should be reset to 0 and 60 seconds, respectively.
- The image to be matched should reset to the value of the key `imageUrl` from the first object in `imagesList` provided.
- The active tab should reset to "Fruits," and the thumbnails with "FRUIT" as their category should be displayed.

When the timer reaches 0 seconds:
- The game should end, and the Scorecard view should be displayed.

The `App` is provided with `tabsList`. It consists of a list of `tabItem` objects with the following properties in each `tabItem` object:
- `tabId`: String
- `displayText`: String

The `App` is also provided with `imagesList`. It consists of a list of `imageItem` objects with the following properties in each `imageItem` object:
- `id`: String
- `imageUrl`: String
- `thumbnailUrl`: String
- `category`: String
