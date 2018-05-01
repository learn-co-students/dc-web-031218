### Fetch

* Request/ Response cycle

  * RestClient

  ```ruby
  require 'rest-client'
  # Client makes request, waits for response
  response = RestClient.get('http://swapi.co/api/people/1')
  # When client receives response, puts it to console
  puts response
  ```

#### How do we normally make HTTP requests as users?

* Through the browser with:
  * forms
  * typing a url into the browser
  * clicking a link

#### How do we make a network request without a full page reload?

* [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) _used to_ be the standard:
  * XHR, XMLHttpRequest, allows us to make HTTP requests without a full page reload. It allows us to communicate with our server asynchronously
* [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) utilizes [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to make asynchronous network requests
  * We can think of promise objects as the _promise_ of some value that we will get in the future. We can then write code around this promised value.
