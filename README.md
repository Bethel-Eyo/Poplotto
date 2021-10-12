# Overview

A simple mobile application to interact with a lottery system API.

### `Features`

1. The app displays a list of lottery tickets returned from the API. Selecting any one of those lottery tickets navigates to a detail screen which displays the lottery ticket and result according to the lottery rules.

2. The app displays a running total of this users ‘Total Wins: €\_’, calculated by adding the result of each line based on the lottery rules. i.e. €10, €5, €1 or 0. Every result added to the previous total.

3. The Total Wins is persisted when the application is killed and restored.

### `Lottery Rules`

Each lottery ticket has 3 numbers, each of which has a value of 0, 1, or 2. For each ticket if the sum of the values on a line is 2, the result for that line is €10. Otherwise if they are all the same, the result is €5. Otherwise so long as both 2nd and 3rd numbers are different from the 1st, the result is €1. Otherwise the result is €0

# Technologies used

1. React native for building native mobile apps for android and ios devices.
2. React hooks used with functional components.
3. Redux for state management accross the app.
4. jest and @testing-library/react-native for unit tests.
5. Typescript: A superset of Javascript (to help with type declarations).
6. Eslint for linting.
7. AsyncStorage for persisting data.

### `Design pattern`

I used an architecture similar to MVP (model-view-presenter) architecture. the model had to do with the data which was in the redux store, the view was the file that has all the jsx properties and the logic had all the functions/methods i.e. src/screens/Lottos -> Lottos.tsx, src/screens/Lottos -> LottosLogic.ts

### `Tests`

For unit tests, they can be found in src/screens/Lottos -> Lottos.test.tsx, and src/screens/LottoDetails -> LottoDetails.test.tsx run the 'yarn test' command in terminal to run the tests
