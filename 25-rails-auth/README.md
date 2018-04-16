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
- anyone could just navigate to the 'secure' route!
- everyone goes to the same page when signed in!
- doesn't remember who you are (usability rather than security)

- not encrypted 'over the wire' - in transmission (someone who is on your network could see your password!)
  - ssl - https://


- plaintext passwords in the logs
  - liability on your own team
- if the same password always hashed to the same value, then an attacker could precompute the values for lots of common passwords
  - rainbow table

The big issue!!!
- passwords are in the database
- an attacker with access to the database gets all the usernames and passwords

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

## Authorization
