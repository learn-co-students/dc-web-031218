require 'pry'

class Account
  attr_reader :owner_name, :balance
  ALL = []
  # OR
  # @@all = []
  ACCOUNT_TYPES = ['GOLD', 'PREMIER']

  def initialize(owner_name, balance)
    @owner_name = owner_name
    @balance = balance
    ALL << self
  end

  def transfer_account(new_owner)
    @owner_name = new_owner
  end

  def self.whale
    self.all.max_by{|obj| obj.balance}
    # OR
    # self.all.sort_by{|obj| obj.balance}[-1]
  end

  def self.overdraw_warning
    # look through all accounts and find any with balance under 300

    # compare each account balance to minimum
    # self.all.select {|account| account.balance < 300}

    # create a helper method on each instance which returns true if it is under the min balance
    self.all.select {|account| account.under_min_balance?}
  end

  def self.gold_accounts
    # all accounts with balances under $10000
    self.all.select {|account| account.under_balance?(10000)}
  end

  def deposit(amount)
    self.balance=(self.balance + amount)
  end

  def withdraw(amount)
    self.balance=(self.balance - amount)
  end

  # THIS IS WHAT YOUR ATTR ACCESSORS ARE WRITING FOR YOU:
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

  def under_balance?(min_balance)
    balance < min_balance
  end

  def under_min_balance?
    under_balance?(300)
  end

  def self.all
    ALL
  end

  private
  # The balance writer method is private
  # it can only be called by other instance methods
  def balance=(balance)
    @balance = balance
  end
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
