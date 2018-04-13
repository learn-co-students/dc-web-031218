class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :address
      t.string :description
      t.string :listing_type
      t.decimal :price
      t.string :title
      t.references :neighborhood, index: true, foreign_key: true
      t.references :host, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
