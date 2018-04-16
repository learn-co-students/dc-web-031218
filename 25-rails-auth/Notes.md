Key takeaway: Do not roll your own auth!

What that means:
- if you are setting up your app, do not assume you are doing things correctly. attackers are clever!
- follow the instructions and be patient and set up the auth following a guide
- get your security checked by someone who knows what they are doing - a senior engineer, a security auditor / tester / expert

- Authentication
  1. Let's have users with names and passwords!
  2. class User / columns / form / sign up / sign in
  3. This is bad! Why?
     1. maliciousness
     2. stupidity
     3. risk
  4. Strategy 2: encrypt passwords
     1. bad hash algorithm
     2. good hash algorithm
     3. login == check that the passwords match
     4. Oh no, rainbow!
        1. rainbow table = compressed hash table w/ cleverness
     5. Strategy 2a: hashed passwords + salt
     6. Use bcrypt + has_secure_password and we get nice helper functions
        1. need password_digest column
        2. gives us password=, password_confirmation=, and .authenticate(string)

- Sessions and Cookies
  1. So you don't have to log in every time
  2. Rails: session[:user_id] = x
  3. This is, under the hood:
     1. encrypting the value with your secret_key_base
     2. Setting the value in a Set-Cookie header
     3. Chrome sends back a Cookie header on subsequent requests
     4. Rails decrypts and you can use the values as if it were key-value pairs. Lovely!

- Authorization
  1. Who can access which pages?
  2. What do they see there?
  3. There are gems that can help
- Further reading: labs + rails guide on security + wikipedia Cryptographic hash function
