class Task < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 255 }
  validates :description, length: { maximum: 1000 }
end
