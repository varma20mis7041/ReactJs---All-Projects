The app must have the following functionalities:

1. **Initial Page Load:**
   - When the page is opened,
   - An HTTP GET request should be made to `covidVaccinationDataApiUrl`.
   - A loader should be displayed while the HTTP request is fetching the data.
   - After the data is successfully fetched, the response received should be displayed using different charts from Recharts.

2. **Display of Vaccination Data:**
   - The last 7 days' vaccination data should be displayed using the `BarChart` component from Recharts.
   - The data for vaccination by gender and vaccination by age should be displayed as two different pie charts using the `PieChart` component from Recharts.

3. **Handling Unsuccessful Request:**
   - If the HTTP GET request made is unsuccessful, then the "FailureView" should be displayed.
