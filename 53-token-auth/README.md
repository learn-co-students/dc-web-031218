# JWT and Token  Auth

- Understand why authentication tokens are commonly used when interacting with APIs
- Add a token strategy to an application
- Authenticate a user based on their token

## Authentication

Verify _who_

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
