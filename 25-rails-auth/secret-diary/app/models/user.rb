class User < ApplicationRecord
  has_secure_password
  # #authenticate
  # password=, password_confirmation=
end
