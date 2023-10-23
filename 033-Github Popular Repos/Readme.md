The app must have the following functionalities:

1. **Initial App Load:**
   - When the app is opened initially,
   - An HTTP GET request should be made to `githubReposApiUrl` with a query parameter as "language," and its initial value should be "ALL."
   - A loader should be displayed while fetching the data.
   - After the data is successfully fetched, display the list of repositories received from the response.

2. **Language Filter Active:**
   - When a language filter is active,
   - An HTTP GET request should be made to the same `githubReposApiUrl` with the "id" of the active language.
   - A loader should be displayed while fetching the data.
   - After the data is successfully fetched, display the list of repositories received from the response.

The `GithubPopularRepos` component is provided with `languageFiltersData`. It consists of a list of language filter objects with the following properties in each language filter object:

- `id`: String
- `language`: String


