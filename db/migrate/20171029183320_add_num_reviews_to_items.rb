class AddNumReviewsToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :num_of_reviews, :integer
  end
end
