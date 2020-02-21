# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React tries to make it easier to make a easy-to-read component based webapp, while also
not moving too far away from the structure of Javascript or forcing you to do things a 
particular way.

2. What does it mean to think in react?

It means to think in terms of components, state, and props and to plan for the data flow
that React asks you to use.

3. Describe state.

State is a set of data representing the status of your app.

4. Describe props.

Props are data a component uses within itself, usually passed down from the state of its parent

5. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are any effect a function has that mutates data outside the function, and you
prevent it by using useEffect and the dependency array within.