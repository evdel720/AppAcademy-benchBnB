class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    Bench.where("bench.lat < ?", bounds["northEast"]["lat"])
         .where("bench.lat > ?", bounds["southWest"]["lat"])
         .where("bench.lng > ?", bounds["northEast"]["lng"])
         .where("bench.lng > ?", bounds["southWest"]["lng"])
  end
end
