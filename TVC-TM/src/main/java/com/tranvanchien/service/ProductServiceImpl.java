package com.tranvanchien.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.tranvanchien.exception.ResourceNotFoundException;
import com.tranvanchien.model.Category;
import com.tranvanchien.model.Product;
import com.tranvanchien.model.ProductImage;
import com.tranvanchien.model.Rdproduct;
import com.tranvanchien.repository.CategoryRepository;
import com.tranvanchien.repository.ProductRepository;
@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	private ProductRepository repoPro;
	@Autowired
	private CategoryRepository repoCate;

	public List<Product> listAll(String keyword) {
        if (keyword != null) {
            return repoPro.SearchContainsIgnoreCase(keyword);
        }
        return repoPro.findAll();
    }
	
	public Product createProduct(@PathVariable(value = "id") Integer Id,@RequestBody Product product) {	
		List<ProductImage> productimage = new ArrayList<ProductImage>();
		Category cate =  repoCate.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + Id));
		product.setProductimage(new HashSet<ProductImage>() {
			/**
			 * 
			 */
			private static final long serialVersionUID = -5619441967802709713L;

			{
				for (ProductImage news2 : productimage) {

					add(news2);
				}

			}
		});
		product.setCategory(cate);
        return repoPro.save(product);
    }

}
