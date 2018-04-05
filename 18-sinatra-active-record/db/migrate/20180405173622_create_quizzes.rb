class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :title
      t.integer :creator_id
      # questions
      t.integer :difficulty
      t.timestamps # created_at updated_at
    end

    create_table :questions do |t|
      # belongs_to quizzes => get the foreign key
      t.integer :quiz_id
      t.string :content
      t.string :answer
      t.timestamps
    end
  end
end
