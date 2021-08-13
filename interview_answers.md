# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
ANS:The Context API was created to solve a specific problem in react.Sharing state down a component tree. Similar to the solution that Redux and React-Redux libraries solve, this solution prevents prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
ANS:ACTION IN REDUX:

An action, is an object that contains the payload of information. They are the only source of information for the Redux store to be updated. Reducers update store based on the value of the action.

REDUCER IN REDUX:

In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.

STORE IN REDUX:

A store is an immutable object tree in Redux. A store is a state container which holds the application's state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer. Let us see how we can create a store using the createStore method from Redux.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Ans:Redux Thunk is a middleware that allows you to call the action creators that return a function(thunk) which takes the store's dispatch method as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects has been finished

4. What is your favorite state management system you've learned and this sprint? Please explain why!
ANS:My favorite state management system which I've learned during this sprint is REDUX. 
Redux allows us to manage your app's state in a single place and keep changes in our app more predictable and traceable.