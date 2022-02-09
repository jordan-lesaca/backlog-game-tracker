class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.integer :year
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
