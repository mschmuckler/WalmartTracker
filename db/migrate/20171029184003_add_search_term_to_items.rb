class AddSearchTermToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :search_query, :string
  end
end
