The app must have the following functionalities:

Initially, the page should have the "No Active Event View."

When the image of an event item with `registrationStatus` as "YET_TO_REGISTER" is clicked:
- The "Yet To Register View" should be displayed.

When the image of an event item with `registrationStatus` as "REGISTERED" is clicked:
- The "Registered View" should be displayed.

When the image of an event item with `registrationStatus` as "REGISTRATIONS_CLOSED" is clicked:
- The "Registrations Closed View" should be displayed.

The `Events` component is provided with `eventsList`. It consists of a list of event objects with the following properties in each event object:

- `id`: String
- `imageUrl`: String
- `name`: String
- `location`: String
- `registrationStatus`: String
