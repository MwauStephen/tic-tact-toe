## `what is react` React is a declarative, efficient, and flexible JavaScript library for building user interfaces

## It lets you compose complex UIs from small and isolated pieces of code called “components”.

## React has a few different kinds of components, but we’ll start with React.Component subclasses:

## The following is the syntax of using sub classes components.Inisded the return statement is where your code is written.

<!--
class ComponentName extends React.Component {
  render() {
    return ();
  }
}
 -->

## We use `components` to tell React what we want to see on the screen. A component takes in parameters, called `props (short for “properties”)`, and returns a hierarchy of views to display via the render method.

## The` render method` returns a description of what you want to see on the screen.React takes the description and displays the result

## In particular, render returns a `React element`, which is a lightweight description of what to render. Most React developers use a special syntax called `(“JSX”)` which makes these structures easier to write.

## You can create elements in react using the following inbuilt methods from react

<!--

return React.createElement('div', {className: 'shopping-list'},-creates a div with a className of shopping-list

  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
 -->

## Instead of using the above method for creating elements we opt to use` jsx`

## `JSX`comes with the full power of JavaScript. You can put any JavaScript expressions within braces inside JSX. Each React element is a JavaScript object that you can store in a variable or pass around in your program.

## You can compose and render custom React components too(own created components)
