class CreateAttempts < ActiveRecord::Migration[5.1]
  def change
    create_table :attempts do |t|
      t.string :status
      t.text :submission
      t.integer :user_id
      t.timestamps
    end
  end
end
