package com.tranvanchien.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.tranvanchien.model.Product;
@Service
public interface ProductService {
	  public List<Product> listAll(String keyword);
	  public Product createProduct(@PathVariable(value = "id") Integer Id,@RequestBody Product product);
	
}
