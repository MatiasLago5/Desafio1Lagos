class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {
      if (
        !product.title ||
        !product.description ||
        !product.price ||
        !product.thumbnail ||
        !product.code ||
        !product.stock
      ) {
        console.log("Todos los campos son obligatorios.");
        return;
      }
  
      const existingProduct = this.products.find((p) => p.code === product.code);
      if (existingProduct) {
        console.log("El código del producto ya existe.");
        return;
      }
  
      product.id = this.nextId++;
      this.products.push(product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Producto no encontrado.");
      }
    }
}
  
const productManager = new ProductManager();
  
const product1 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
};
productManager.addProduct(product1);
  
const product2 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
};
productManager.addProduct(product2);
  
const allProducts = productManager.getProducts();
console.log(allProducts);
  
const foundProduct = productManager.getProductById(1);
console.log(foundProduct);

const nonExistentProduct = productManager.getProductById("prod");