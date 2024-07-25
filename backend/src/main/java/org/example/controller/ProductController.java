package org.example.controller;

import org.example.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final List<Product> products = new ArrayList<>();
    private long idCounter = 1;

    @GetMapping
    public List<Product> getAllProducts() {
        return products;
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return products.stream()
                .filter(product -> product.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        System.out.println(product.getId());
        System.out.println(product.getName());
        System.out.println(product.getPrice());
        System.out.println(product.getDescription());
        return product;
    }

    @PutMapping("/{id}")
    public Product updateProduct(@PathVariable Long id, @RequestBody Product product) {
        System.out.println("ID recebido na URL: " + id);
        System.out.println("Dados do produto recebido: ");
        System.out.println("ID do Produto: " + product.getId());
        System.out.println("Nome do Produto: " + product.getName());
        System.out.println("Preço do Produto: " + product.getPrice());
        System.out.println("Descrição do Produto: " + product.getDescription());

        return product;
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        System.out.println(id);
    }
}
