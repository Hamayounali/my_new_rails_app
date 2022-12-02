class Message < ApplicationRecord
  validates :title, presence: true, uniqueness: true
end
