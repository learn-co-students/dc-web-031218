require 'pry'

class Account
  attr_reader :owner_name, :balance
  # @@all = []
  ALL = []

  def initialize(owner_name, balance)
    @owner_name = owner_name
    @balance = balance
    ALL << self
  end

  def transfer_account(new_owner)
    # owner_name = new_owner
    @owner_name = new_owner
  end

  # # reader, getter
  # def owner_name
  #   @owner_name
  # end
  #
  # # writer, setter
  # def owner_name=(owner_name)
  #   @owner_name = name
  # end

  def print_balance
    # $50.00
    # "$" + balance.to_s + ".00"
    "$#{balance}.00"
  end

  def self.all
    ALL
  end

  # def balance=(balance)
  #   @balance = balance
  # end

end

accounts = [
  {owner_name: 'andrew', balance: 50},
  {owner_name: 'rob', balance: 5000},
  {owner_name: 'niky', balance: 250},
  {owner_name: 'avi', balance: 50000}
]

andrew = Account.new(accounts[0][:owner_name], accounts[0][:balance])
rob =  Account.new(accounts[1][:owner_name], accounts[1][:balance])
niky = Account.new(accounts[2][:owner_name], accounts[2][:balance])
avi = Account.new(accounts[3][:owner_name], accounts[3][:balance])


Pry.start
