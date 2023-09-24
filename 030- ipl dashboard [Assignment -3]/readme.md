**App Functionalities**

- **Home Route**:
  - When the app is opened, it displays the Home Route.
  - Upon opening the Home Route:
    - An HTTP GET request is made to the specified `teamsApiUrl` to fetch team data.
    - A loader is displayed during the data retrieval process.
    - After fetching the data, the app displays a list of teams.
  - Clicking on a team card in the Home Route navigates to the Team Matches Route with a URL like `/team-matches/:id`.

- **Team Matches Route**:
  - When the Team Matches Route is opened:
    - An HTTP GET request is made to the specified `teamMatchesApiUrl` with the team id to retrieve recent match data for the team.
    - A loader is displayed while fetching the data.
    - After fetching the data, the Team Matches Route displays:
      - Team banner.
      - Details of the latest match.
      - A list of recent matches for the team.
