class Items < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :image, null: false
      t.string :url, null: false
      t.string :category, null: false
      t.float :price
      t.float :msrp
      t.string :reviews

      t.timestamps
    end

    add_index :items, :brand
  end
end
