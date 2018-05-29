# JWT and Token  Auth

- Understand why authentication tokens are commonly used when interacting with APIs
- Add a token strategy to an application
- Authenticate a user based on their token

## Authentication

Different strategies
Basic Auth - send the username and password every time
Cookie Auth - use the Set-Cookie header, browser will send the cookie on subsequent requests
Token Auth - use a token to authenticate

Verify _who_

2-step
1 - username  password
2 - later, 'hand stamp' (cookie, token)

```
session[:user_id] = 7

...

if session[:user_id]
  ...
end
```

## Authorization

Verify _what permissions_

## JWT

Securely sign some key value pairs

## Let's build a login!

Login
- `gem bcrypt`
- `has_secure_password`
- `get '/login' to: 'auth#login'`
- issue token

Subsequent Requests
- include token in request
- verify token
- `current_user`
- before_action
