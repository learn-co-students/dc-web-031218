require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it 'validates that name is unique' do
      # create more than one user with the same name
      # check that there's an error
      first = User.create(name: "Rob")
      second = User.create(name: "Rob") # expect that this will fail
      # expect - creates some expectation
      expect(second.persisted?).to eq false
      expect(second.errors.messages[:name]).to include("has already been taken")
    end
  end
end
