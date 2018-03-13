# More Notes

## Speed up your feedback cycle

### fail fast

`rspec --fail-fast` - run until the first failing test
same as `rspec --f-f`

Even faster if you create a bash alias, as described here:

https://flatiron-school.slack.com/archives/C9F44FE3T/p1520461466000285
https://flatiron-school.slack.com/archives/C9F44FE3T/p1520461593000488

### pry

```
require 'pry' # includes the pry library

binding.pry # stops execution at that point
```

`exit!` takes you out of _all_ pry sessions you are in, no matter how deep you are nested.

Lots of ruby methods use the `!` to mean something like 'do this more'. Because 'exclamation mark' is long to say, and `!` is a commonly used symbol, you might hear rubyists call it `bang`. (So, `exit!` would be "exit bang" out loud)

## Keyboard shortcuts

Atom keyboard shortcuts:

* Command + d selects other matching words
* Command + Control + up / down move a line up or down

http://d2wy8f7a9ursnm.cloudfront.net/atom-editor-cheat-sheet.pdf

## Slack

Use the `` `character to mark off code in slack. Three of them (` ``` ` ) will start a code block, another three end it.

## Links from Avi's talk

Some stats about different language use:
https://insights.stackoverflow.com/survey/2017

Flatiron Building: https://en.wikipedia.org/wiki/Flatiron_Building
Daniel Burnham quote: https://en.wikiquote.org/wiki/Daniel_Burnham
Paradox of choice: https://www.amazon.com/Paradox-Choice-More-Less-Revised-ebook/dp/B000TDGGVU
