The app must have the following functionalities:

1. **Initial Timeline Display:**
   - Initially, the page should display the timeline items list using Chrono custom rendering based on the `categoryId`.

2. **Timeline Items Data:**
   - The `TimelineView` component is provided with `timelineItemsList`. It consists of a list of timeline item objects with the following properties in each timeline item object:

   - For timeline items with `categoryId` as "COURSE," they will have the following properties:
     - `id`: String
     - `categoryId`: String
     - `title`: String
     - `courseTitle`: String
     - `description`: String
     - `duration`: String
     - `tagsList`: Array

     - The `tagsListObject` will have the following properties:
       - `id`: String
       - `name`: String

   - For timeline items with `categoryId` as "PROJECT," they will have the following properties:
     - `id`: String
     - `categoryId`: String
     - `title`: String
     - `projectTitle`: String
     - `description`: String
     - `imageUrl`: String
     - `duration`: String
     - `projectUrl`: String

3. **Custom Rendering Based on Category:**
   - If the value of the key `categoryId` in `timelineItemObject` is "PROJECT," then a "Project card" should be rendered.
   - The "ProjectTimelineCard" should consist of a "Visit link," and when a user clicks on it, the page should be navigated to the respective project.
   - The "ProjectTimelineCard" should consist of a "Calendar icon" with respective duration text.

   - If the value of the key `categoryId` in `timelineItemObject` is "COURSE," then a "Course card" should be rendered.
   - The "CourseTimelineCard" should consist of a "Clock icon" with respective duration text.

4. **Using Chrono Component:**
   - Give the timeline items list data as a value to the `items` prop for the `Chrono` component from `react-chrono` so that the title will be displayed beside each card.
