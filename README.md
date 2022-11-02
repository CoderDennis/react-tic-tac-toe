# React-tic-tac-toe

Implementing the old familiar game in React.

## Implementation details

- Uses React function components.
- Saves state in local storage.
- Uses svg for game graphics for automatic scaling to any browser size. Each square of the grid is 100 x 100 user coordinate units to make the math easy.
- Uses media queries to adjust the layout of the menu for different browser sizes and aspect ratios. It isn't perfect for every possible screen resolution, but works well on common desktop and mobile browser sizes.
- Grid size (3x3, 4x4, 5x5, etc.) is dynamic and has no real limit. However, larger grids don't make for engaging game play. There probably should be additional win conditions for larger grids. 42x42 is included in the UI to show off what is possible.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
