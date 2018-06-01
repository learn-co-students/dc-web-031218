# Redux (and react-redux) from Scratch

## createStore

store needs to
- store the state
- have a method 'getState' that returns the current state
- have a method 'dispatch'
- call the reducer with the state and the action
- have a method 'subscribe'
- calls the listeners with the after each action is dispatched
- dispatches an INIT action

## Provider
- provides the store through 'context'

## connect
- takes in functions, returns a function
- function takes a component, returns a component with state

## combineReducers
- takes an object of reducers
- turns them into a bigger reducer
