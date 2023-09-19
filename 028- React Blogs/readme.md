**App Functionality**

- **Home Route**:
  - The app starts with the Home Route.
  - It initiates an HTTP GET request to the specified `blogsApiUrl` to fetch blog data.
  - While fetching data, a loader is displayed.
  - Once the data is fetched, it displays a list of blogs.
  - Clicking on a blog item takes you to the Blog Item Details Route with a URL like `/blogs/:id`.

- **Blog Item Details Route**:
  - In this route, an HTTP GET request is made to the specified `blogItemDetailsApiUrl` with the blog id to retrieve detailed blog information.
  - A loader is displayed during the data fetching process.
  - After fetching the data, it presents the details of the blog.
