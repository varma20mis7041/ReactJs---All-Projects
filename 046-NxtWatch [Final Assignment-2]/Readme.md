# Video Sharing Web App

## Initial Theme

- The app should initially be in the Light theme.

## Login Route

- When invalid credentials are provided, and the "Login" button is clicked, display the respective error message received from the response.
- When valid credentials are provided, and the "Login" button is clicked, navigate the page to the Home route.
- Unauthenticated users attempting to access the HomeRoute, TrendingRoute, GamingRoute, SavedVideosRoute, VideoDetailsRoute should be navigated to the Login route.
- Authenticated users attempting to access the HomeRoute, TrendingRoute, GamingRoute, SavedVideosRoute, VideoDetailsRoute should be navigated to the respective route.
- When an authenticated user tries to access the LoginRoute, navigate the page to the Home route.
- When the "Show Password" checkbox is checked, display the password.
- When the "Show Password" checkbox is unchecked, mask the password.

## Home Route

- When an authenticated user opens the Home Route:
  - Make an HTTP GET request to homeVideosApiUrl with the query parameter search and its initial value as an empty string.
  - Display a loader while fetching the data.
  - After the data is fetched successfully, display the list of videos received in the response.
  - If the HTTP GET request is unsuccessful, display the Failure view.
  - When the Retry button is clicked, make another HTTP GET request to homeVideosApiUrl.
  - When a non-empty value is provided in the Search Input and the button with the search icon is clicked:
    - Make an HTTP GET request to the homeVideosApiUrl with jwt_token in the Cookies and query parameter search with a value as the text provided in the Search Input.
    - Display a loader while fetching the data.
    - After the data is fetched successfully, display the list of videos received in the response.
  - When the HTTP GET request made to the homeVideosApiUrl returns an empty list for videos, display the No Videos View.
  - When the website logo image is clicked, navigate the page to the Home route.
  - When a Video is clicked, navigate the page to the Video Item Details route.
  - Clicks on the Trending link in the Sidebar should navigate the page to the Trending route.
  - Clicks on the Gaming link in the Sidebar should navigate the page to the Gaming route.
  - Clicks on the Saved Videos link in the Sidebar should navigate the page to the SavedVideos route.

## Trending Route

- When an authenticated user opens the Trending Route:
  - Make an HTTP GET request to trendingVideosApiUrl.
  - Display a loader while fetching the data.
  - After the data is fetched successfully, display the list of videos received in the response.
  - If the HTTP GET request is unsuccessful, display the Failure view.
  - When the Retry button is clicked, make another HTTP GET request to trendingVideosApiUrl.
  - When the website logo image is clicked, navigate the page to the Home route.
  - When a Video is clicked, navigate the page to the Video Item Details route.
  - Clicks on the Home link in the Sidebar should navigate the page to the Home route.
  - Clicks on the Gaming link in the Sidebar should navigate the page to the Gaming route.
  - Clicks on the Saved Videos link in the Sidebar should navigate the page to the SavedVideos route.

## Gaming Route

- When an authenticated user opens the Gaming Route:
  - Make an HTTP GET request to gamingVideosApiUrl.
  - Display a loader while fetching the data.
  - After the data is fetched successfully, display the list of videos received in the response.
  - If the HTTP GET request is unsuccessful, display the Failure view.
  - When the Retry button is clicked, make another HTTP GET request to gamingVideosApiUrl.
  - When the website logo image is clicked, navigate the page to the Home route.
  - When a Video is clicked, navigate the page to the Video Item Details route.
  - Clicks on the Home link in the Sidebar should navigate the page to the Home route.
  - Clicks on the Trending link in the Sidebar should navigate the page to the Trending route.
  - Clicks on the Saved Videos link in the Sidebar should navigate the page to the SavedVideos route.

## Video Item Details Route

- When an authenticated user opens the Video Item Details route:
  - Make an HTTP GET request to videoItemDetailsApiUrl with jwt_token in the Cookies and video_id as a path parameter.
  - Display a loader while fetching the data.
  - After the HTTP request is successful, display the response received.
  - If the HTTP GET request is unsuccessful, display the Failure view.
  - When the Retry button is clicked, make another HTTP GET request to videoItemDetailsApiUrl.
  - Corresponding video should be displayed using the react-player package.
  - Initially, all three buttons (Like, Dislike, Save) will be inactive.
  - When the Like button is clicked:
    - It will change to an active state.
    - If the Dislike button is already in the active state, then the Dislike button needs to be changed to the inactive state.
  - When the Dislike button is clicked:
    - It will change to an active state.
    - If the Like button is already in the active state, then the Like button needs to be changed to the inactive state.
  - When the Save button is clicked:
    - The button will change to an active state, and the respective video details should be added to the list of saved videos.
    - Save button text will be changed to "Saved".
  - When the Saved button is clicked:
    - The button will change to an inactive state, and the respective video details will be removed from the list of saved videos.
    - Saved button text will be changed to "Save".

## SavedVideos Route

- When an authenticated user opens the SavedVideos Route:
  - If the list of saved videos is empty, display the No Saved Videos Found View.
  - The videos in the list of saved videos should be displayed as a list of videos.
  - When the website logo image is clicked, navigate the page to the Home route.
  - When a Video is clicked, navigate the page to the Video Item Details route.
  - Clicks on the Home link in the Sidebar should navigate the page to the Home route.
  - Clicks on the Trending link in the Sidebar should navigate the page to the Trending route.
  - Clicks on the Gaming link in the Sidebar should navigate the page to the Gaming route.

## Not Found Route

- When a random path is provided in the URL, the page should navigate to the "Not Found" route.

## Theme Toggle

- When the theme button in the header is clicked, change the theme accordingly.

## Logout

- When the Logout button in the header is clicked, display the Logout Popup.
  - When the Cancel button is clicked, close the popup, and the page should not be navigated.
  - When the Confirm button is clicked, navigate the page to the Login route.
