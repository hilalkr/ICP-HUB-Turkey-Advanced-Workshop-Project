import Array "mo:base/Array";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

actor {
    public type Product = {
        id: Nat;
        name: Text;
        price: Nat;
        description: Text;
        inStock: Bool;
    };

    private stable var products : [Product] = [];
    private stable var nextId : Nat = 0;

    public func createProduct(product : Product) : async Nat {
        let newProduct : Product = {
            id = nextId;
            name = product.name;
            price = product.price;
            description = product.description;
            inStock = true;
        };
        products := Array.append(products, [newProduct]);
        nextId += 1;
        return (nextId - 1);
    };

    public query func getAllProducts() : async [Product] {
        products
    };

    // Basitleştirilmiş update fonksiyonu
    public func updateProduct(id: Nat, name: Text, price: Nat, description: Text, inStock: Bool) : async Bool {
        products := Array.map<Product, Product>(products, func(p) {
            if (p.id == id) {
                return {
                    id = id;
                    name = name;
                    price = price;
                    description = description;
                    inStock = inStock;
                };
            };
            p
        });
        return true;
    };

    public func deleteProduct(id : Nat) : async Bool {
        products := Array.filter<Product>(products, func(p) { p.id != id });
        return true;
    };
}