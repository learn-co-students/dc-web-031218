require 'rails_helper'

describe Review do
  let(:nyc) { City.create(name: 'NYC') }
  let(:fidi) { Neighborhood.create(name: 'Fi Di', city: nyc) }
  let(:amanda) { User.create(name: 'Amanda') }
  let(:logan) { User.create(name: 'Logan') }
  let(:listing) do
    Listing.create(
      address: '123 Main Street',
      listing_type: 'private room',
      title: 'Beautiful Apartment on Main Street',
      description: "My apartment is great. there's a bedroom. close to subway....blah blah",
      price: 50.00,
      neighborhood: fidi,
      host: amanda
    )
  end
  let(:reservation) do
    Reservation.create(
      checkin: '2014-04-25',
      checkout: '2014-04-30',
      listing: listing,
      guest: logan
    )
  end
  let(:review) do
    Review.create(
      description: 'This place was great!',
      rating: 5,
      guest: logan,
      reservation: reservation
    )
  end

  it 'has a description' do
    expect(review.description).to eq('This place was great!')
  end

  it 'has a rating' do
    expect(review.rating).to eq(5)
  end

  it 'belongs to a guest' do
    expect(review.guest).to eq(logan)
  end

  it 'belongs to a reservation' do
    expect(review.reservation).to be(reservation)
  end

  # describe 'review validations' do
  #   before(:each) do
  #     @invalidrating = Review.new(description: 'hi', rating: nil)
  #     @invaliddescription = Review.new(description: nil, rating: 5)
  #   end
  #
  #   it 'is valid with a rating and description' do
  #     expect(@review1).to be_valid
  #   end
  #
  #   it 'is invalid without a rating' do
  #     expect(@invalidrating).to_not be_valid
  #   end
  #
  #   it 'is invalid without a description' do
  #     expect(@invaliddescription).to_not be_valid
  #   end
  #
  #   it 'is invalid without an associated reservation, has been accepted, and checkout has happened' do
  #     no_res = Review.create(description: 'Meh', rating: 2, guest_id: User.find_by(id: 6).id)
  #     res = Reservation.create(checkin: '2014-04-05', checkout: '2014-04-29', listing_id: 1, guest_id: 5, status: 'pending')
  #     new_res = Reservation.create(checkin: '2014-08-01', checkout: Date.today + 1, listing_id: 1, guest_id: 5, status: 'accepted')
  #     res_not_accepted = Review.create(description: 'Hi!', rating: 3, guest_id: User.find_by(id: 5).id, reservation_id: res.id)
  #     res_not_passed = Review.create(description: 'Hi!', rating: 3, guest_id: User.find_by(id: 5).id, reservation_id: new_res.id)
  #     expect(no_res).to_not be_valid
  #     expect(res_not_accepted).to_not be_valid
  #     expect(res_not_passed).to_not be_valid
  #   end
  # end
end
