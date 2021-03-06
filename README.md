# The Boxscore Challenge

The Boxscore is the goto widget on any sports site to get quick information about a game. ESPN, Fox Sports, theScore, and many others have solutions.

Here is ESPN’s solution. They even went ahead and added pitchers info.
![ESPN Box Score](https://dl.dropboxusercontent.com/s/jvbqjkgyspt5p5u/Screenshot%202018-07-16%2020.32.21.png 'ESPN Box Score')
[View on ESPN's site](http://www.espn.com/mlb/boxscore?gameId=380715102)

The Boxscore challenge gives you the opportunity to use newer concepts and forces you to use best practices when it comes to its design and engineering.

### We want you to do the following:

- Build an API using NodeJS to consume the Feeds below.
  _ Feed 1: https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/one
  _ Feed 2: https://2ncp9is1k8.execute-api.us-east-1.amazonaws.com/dev/feed/game/two
  _ Each feed should be hit at most every 15 seconds by our API, therefore...
  _ The data needs to be cached in a database. (Suggestion: MongoDB) \* Each request to our API should check the database for cached data: If it's last updated time is < 15 seconds then return it. Otherwise fetch fresh data from the feed and cache it in the database.
- Build a small React project.  
   \* The HTML & CSS is provided for you in this repo.

### Things to Consider

- The various states that the box score widget would be in during the lifespan of the game. (ie. pre-game, in-game, and post-game)
- The types of data displayed and how data is organized for different types of sports. (ie. football has 4 quarters and displays the total score, while baseball has 9 innings, sometimes more, and displays not only the total score, but hits and errors.)
- The assets, elements, and concepts shared between the box scores for any number of different types of sports. (ie. all sports have two teams playing against one another. The away is on top, and the home team is on the bottom. There is always a spot that communicates the progress of the game (Top 3rd, 1st Qtr, 3rd Period, Final).

- In order to maintain a streamlined, maintainable, and easily testable codebase, we should strive to build components that are highly adaptable. We don't want to build a box score component for every type of sport we are covering, but instead, create a component that can be used any time we want to display a box score for a game.

### Deliverables

Links to both the NodeJS Server repo, and the React App repo.

- The NodeJS Server should:
  _ Consume and store the feed data from the feeds above, in a database.
  _ Contain endpoints that allowing the React app to consume data from the database. \* Be simple and straightforward to run. Think `yarn start` or `npm start`.
- The React app should:
  _ Consume the NodeJS API, and will feed data into the components.
  _ Also, be simple and straighforward to get running.

### Notes from Developer

This Box Score is hyper-focused on consuming the API via Axios and uses Flux to control the Data Store which is the 'truth' for the UI.

- All of the API consumed data could be stored in DB if needed, but we can also empower the UI to cache data if needed in our Flux > Actions. // Set to 60 seconds as proof of concept
- `npm install` and `npm run start` installs the modules and launches the application.
- Webpack / React / Flux were all set up from scratch, reducing the clutter and speeding up the overall application. (i.e. no Starter kit needed)
- Projects employs airBnB esLint rules and uses Prettier rules to keep 'formatting' consistent.
- Vanilla Javascript and JSX only.
- React Carbon Components added for better experience.
- Cache Busting and Dynamic Index generation are incuded in Webpack build. (Vendors and Main JS split up assuming HTTP2 on Server being active)
- CSS Converted to SCSS

#### Components Structure

- ClientApp.jsx is the starter point which initiates our App.jsx
- ViewBoxScore.jsx is our parent level component for the challenge
- AppConfig.jsx holds global rules which could be used to read environment specific variables for easier deployment
- Flux > Actions > DataFeedActions is where our API calls are launched using the globally stored API URL.
- Flux > Store > DataFeedStore is where our API is stored after success
