package com.dl.users;

import org.springframework.data.repository.CrudRepository;
import com.dl.users.Product;

// This will be AUTO IMPLEMENTED by Spring into a Bean called ProductRepository
// CRUD refers Create, Read, Update, Delete

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
