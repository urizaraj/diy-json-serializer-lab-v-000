class ProductSerializer
  require 'json'
  def self.serialize(product)
    result = {
      name: product.name,
      id: product.id,
      price: product.price,
      description: product.description,
      inventory: product.inventory
    }
    result.to_json
  end
end