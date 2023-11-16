The app must have the following functionalities:

1. **Login Route:**
   - When invalid credentials are provided, and the Login button is clicked, then the error message received from the response should be displayed.
   - When valid credentials are provided, and the Login button is clicked, then the page should be navigated to the Home Route.
   - When an unauthenticated user tries to access the Home, Jobs, and Job Item Details Route, then the page should be navigated to the Login Route.
   - When an authenticated user tries to access the Home, Jobs, and Job Item Details Route, then the page should be navigated to the respective route.
   - When an authenticated user tries to access the Login Route, then the page should be navigated to the Home Route.

2. **Home Route:**
   - When an authenticated user opens the Home Route and clicks on the "Find Jobs" button, then the page should be navigated to the Jobs Route.

3. **Jobs Route:**
   - When an authenticated user opens the Jobs Route:
     - An HTTP GET request should be made to Profile API URL.
     - Loader should be displayed while fetching the data.
     - After the data is fetched successfully, the response received should be displayed.
     - If the HTTP GET request made is unsuccessful, then the Failure View should be displayed.
     - When the Retry button is clicked, an HTTP GET request should be made to the Profile API URL.
     - An HTTP GET request should be made to Jobs API URL with employment_type, minimum_package, and search as query parameters with empty strings as initial values.
     - Loader should be displayed while fetching the data.
     - After the data is fetched successfully, display the list of jobs received from the response.
     - If the HTTP GET request made is unsuccessful, then the Failure View should be displayed.
     - When the Retry button is clicked, an HTTP GET request should be made to Jobs API URL.
     - When a value is provided in the search input, and the search icon button is clicked:
       - Make an HTTP GET request to the Jobs API URL with jwt_token in the Cookies and query parameter search with the value as the text provided in the search input.
       - Loader should be displayed while fetching the data.
       - After the data is fetched successfully, display the list of jobs received from the response.
     - When Employment Types options are selected:
       - Make an HTTP GET request to the Jobs API URL with jwt_token in the Cookies and query parameter employment_type with the value as a list of selected employment type id's as a single string separated by commas.
       - Loader should be displayed while fetching the data.
       - After the data is fetched successfully, display the list of jobs received from the response.
     - When Salary Range is selected:
       - Make an HTTP GET request to the Jobs API URL with jwt_token in the Cookies and query parameter minimum_package with the value as the id of the selected salary range.
       - Loader should be displayed while fetching the data.
       - After the data is fetched successfully, display the list of jobs received from the response.
     - When the HTTP GET request made to the Jobs API URL returns an empty list for jobs, then the No Jobs View should be displayed.
     - When multiple filters are applied, then the HTTP GET request should be made with all the filters that are applied.

4. **Job Item Details Route:**
   - When an authenticated user opens the Job Item Details Route:
     - An HTTP GET request should be made to Job Details API URL with jwt_token in the Cookies and job id as a path parameter.
     - Loader should be displayed while fetching the data.
     - After the data is fetched successfully, the response received should be displayed.
     - The list of similar jobs should be displayed.
     - If the HTTP GET request made is unsuccessful, then the Failure View should be displayed.
     - When the Retry button is clicked, an HTTP GET request should be made to Job Details API URL.
     - When the Visit button is clicked, then the corresponding company website URL should be opened in a new tab.

5. **Not Found Route:**
   - When a random path is provided as the URL path, then the page should be navigated to the Not Found Route.

6. **Header:**
   - When the website logo image is clicked, then the page should be navigated to the Home Route.
   - When the Home link is clicked, then the page should be navigated to the Home Route.
   - When the Jobs link is clicked, then the page should be navigated to the Jobs Route.
   - When the Logout button is clicked, then the page should be navigated to the Login Route.

7. **Additional Information:**
   - The App is provided with `employmentTypesList`. It consists of a list of employment type objects with the following properties in each employment type object:
     - `employmentTypeId`: String
     - `label`: String

   - The App is provided with `salaryRangesList`. It consists of a list of salary range objects with the following properties in each salary range object:
     - `salaryRangeId`: String
     - `label`: String
