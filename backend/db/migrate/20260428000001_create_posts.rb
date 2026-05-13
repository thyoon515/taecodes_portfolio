class CreatePosts < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :slug, null: false
      t.string :category, null: false, default: "digest"
      t.text :summary
      t.text :body, null: false
      t.string :tags, array: true, default: []
      t.datetime :published_at

      t.timestamps
    end

    add_index :posts, :slug, unique: true
    add_index :posts, :category
    add_index :posts, :published_at
  end
end
