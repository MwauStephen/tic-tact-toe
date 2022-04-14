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

## `Passing props` is how information flows in React apps, from parents to children.

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

## React components can have state by setting `this.state` in their constructors when using class components

## `this.state` should be considered as private to a React component that it’s defined in.

## When you call` setState` in a component, React automatically updates the child components inside of it too.

<!--
render() {
    const addSquareHandler = () => {
      this.setState({ value: "X" });
    };
 -->

<!------------------------------------------------ LFITING STATES UP------------------------------------>

## To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.

## Lifting state into a parent component is common when React components are refactored

## `state `is considered to be private to a component that defines it.To “remember” things, components `use state`

<!--  Immutability Is Important -->

## There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes

## `Data Change with Mutation`

<!--

var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

 -->

## `Data Change without Mutation`

<!--

var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};
 -->

## The end result is the same but by not mutating (or changing the underlying data) directly, we gain several benefits described below.

## `Complex Features Become Simple`-Immutability makes complex features much easier to implement.

## `Detecting Changes`- Detecting changes in mutable objects is difficult because they are modified directly.

## Detecting changes in immutable objects is considerably easier. If the immutable object that is being referenced is different than the previous one, then the object has changed.

## `Determining When to Re-Render in React`-The main benefit of immutability is that it helps you build pure components in React

## `Picking a Key` When we render a list, React stores some information about each rendered list item. When we update a list, React needs to determine what has changed. We could have added, removed, re-arranged, or updated the list’s items.

## Imagine transitioning from

<!--

 <li>Alexa: 7 tasks left</li>
<li>Ben: 5 tasks left</li>
to

<li>Ben: 9 tasks left</li>
<li>Claudia: 8 tasks left</li>
<li>Alexa: 5 tasks left</li>

 -->

## React is a computer program and does not know what we intended. Because React cannot know our intentions, we need to specify a key property for each list item to differentiate each list item from its siblings.

## When a list is re-rendered, React takes each list item’s key and searches the previous list’s items for a matching key.

## If the current list has a key that didn’t exist before, React creates a component. If the current list is missing a key that existed in the previous list, React destroys the previous component.

## If two keys match, the corresponding component is moved

## Keys tell React about the identity of each component which allows React to maintain state between re-renders.

## If a component’s key changes, the component will be destroyed and re-created with a new state.
