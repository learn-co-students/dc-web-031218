# Testing

### Why?
Predictability
Edge cases (extremes) are accounted for
  - can tell that your code is robust if the tests are robust
Good for exploration
Clear end result - let us know that our code works - TDD
Prevent bugs from getting into your live app
Helpful for debugging - do all of the setup to get into some broken place in our code

### When?
All the time!
running your Unit tests as you develop
`learn` or `rspec` or `npm test`
BDD - flipping to the console / browser to check whether the code is working

Before you deploy - run all of the tests (full Suite of tests)

### How?

Get to red _before_ our code is in place
Might always come back green!

## Unit, Integration, Smoke, Acceptance, Regression
### Unit
tests for one behavior
tests one _unit_ of code at a time
don't want to test everything at once
isolate the code under test
preventing the dependencies from affecting the test
  mocks, stubs, spies

### Integration test
(slower)
run before deploy
testing whether your units are communicating properly
don't mock - use the actual units

## Smoke (Sanity)

Whole application
testing that the basic run works

## Mocks, Doubles, and Stubs

## Spies

## RSpec

fails on error
fails on unmet expectation

docs are helpful for discovering matchers

## Jest
expectations and cli runner for javascript

## Enzyme
shallow render React components for unit testing
