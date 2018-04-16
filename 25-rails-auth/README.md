# Authentication in Rails

Key takeaway: Do not roll your own auth!

## Authentication

Verify who you are
credentials - username + password
  - other factors - checking ip / which device
  - 2 factor auth
  - verification

class User
  attr_accessor :username, :password

  def self.authenticate(username, password)
    # if there is a user with this username and password, return the user
    # otherwise, fail somehow
  end
end


### Problems
Sessions - using cookies
- doesn't remember who you are (usability rather than security)

Authorization
- anyone could just navigate to the 'secure' route!
- everyone goes to the same page when signed in!


- not encrypted 'over the wire' - in transmission (someone who is on your network could see your password!)
  - ssl - https://


- plaintext passwords in the logs
  - liability on your own team
- if the same password always hashed to the same value, then an attacker could precompute the values for lots of common passwords
  - rainbow table

The big issue!!!
- passwords are in the database
- an attacker with access to the database gets all the usernames and passwords

solved using bcrypt + has_secure_password

## Encryption
'garbles' text
jumble it up in the database
when a user submits a password again
jumble that password up the same way, test against the jumbled up version in the database

'prevent someone from decrypting'
strategies for encrypting passwords are a bad idea

infeasible to decrypt
hash
  function from text to other text
  same text as input should always generate the same output
  'conflicts'
  nearby inputs should never generate the same output
one-way hash
  input is difficult to generate from the output

expensive is better than cheap

Use bcrypt
'Adding a salt'
adds a random string of 22 characters, encrypts that,
password digest = hash(pwd + salt) + salt

## Sessions and Cookies

### Cookies
store information about you / your 'session' in your browser
send that information back to the server with each request
  uses http header
    Set-Cookie - header you set on the response
    Cookie - header that the browser will send back with the same information on each subsequent request

  session

1. In your controller, you use session[:user_id] = 5
2. Rails encrypts your session data using the secret_key_base
3. Rails sets the Set-Cookie header on the response
4. On subsequent requests, Chrome sends the Cookie header with the information from Set-Cookie
5. Rails decrypts the Cookie
6. you can use session[:user_id] as if it were a ruby Hash

Set-Cookie
T0h4ek96T0RISWhZeGE5RlQveERlcmN3anZGTFBPM2tta0g1WUVJanRFcmI4dXVOY3NQdjhOSmRyNUIzOGdMUTJmM3ErY2VTcWd5WFN6U09sNDRPMGs5b3VVQitJWDRKNFI5YVc0SzlqQjZwR2hxZU42U3B6ODYya1RHZVRMQ1R4bEdFWWFtcG5wRGN1VG5KLy9sV1NCWmlUMEJVV003czlKYk0wQ0V5aGljPS0tVWs4TU5kWlcrNEJ4QkUxSE1hU293UT09--842955684984fd22884c0f7dd79cba1c99960e69

Cookie
T0h4ek96T0RISWhZeGE5RlQveERlcmN3anZGTFBPM2tta0g1WUVJanRFcmI4dXVOY3NQdjhOSmRyNUIzOGdMUTJmM3ErY2VTcWd5WFN6U09sNDRPMGs5b3VVQitJWDRKNFI5YVc0SzlqQjZwR2hxZU42U3B6ODYya1RHZVRMQ1R4bEdFWWFtcG5wRGN1VG5KLy9sV1NCWmlUMEJVV003czlKYk0wQ0V5aGljPS0tVWs4TU5kWlcrNEJ4QkUxSE1hU293UT09--842955684984fd22884c0f7dd79cba1c99960e69


Indicator that they've signed in
On subsequent requests, they shouldn't have to authenticate again

## Authorization
What can you access?
Which users can access what on what pages?

Check before doing things that the user has the correct Authorization
Set up different 'roles'
gem 'cancancan'
gem 'pundit'
