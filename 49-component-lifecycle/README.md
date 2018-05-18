# Component Lifecycle

Methods will get called
- at particular moments in the life of the component
- with particular arguments

How to know when to use which method?

## Methods
- `componentDidMount()`
  - called once after component is first mounted to the DOM
  - initial fetch of data
  - set up timers
  - set up event listeners that aren't on your components, e.g. navigation events, window resize
  - do things that require the DOM component (attach a Chart or Map, read the position of the element)
- `componentWillUnmount()`
  - teardown and cleanup of anything set up in `componentDidMount`
- `shouldComponentUpdate()`
  - decide whether or not to render
  - for performance, won't need to implement otherwise
- `static getDerivedStateFromProps()`
  - best practice is to compute in render
  - usually violates single source of truth to have a component state initialized from props
- `getSnapshotBeforeUpdate()`
  - to collect some values (like a scroll position) before an update
  - result is passed as the third arg to `componentDidUpdate`
- `componentDidUpdate()`
  - called after update
  - gets result of `getSnapshotBeforeUpdate`
- `componentDidCatch()`
  - Used to set up error boundaries around children
  - Can display a fallback UI


## Deprecated Methods
Might see these, don't use them.

- `componentWillMount()`
- `componentWillReceiveProps()`
- `componentWillUpdate()`
