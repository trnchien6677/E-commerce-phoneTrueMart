package com.tranvanchien.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tranvanchien.exception.ResourceNotFoundException;
import com.tranvanchien.model.Category;
import com.tranvanchien.model.News;
import com.tranvanchien.model.Product;
import com.tranvanchien.model.ProductImage;
import com.tranvanchien.repository.CategoryRepository;



@CrossOrigin(origins = "*")
@RestController
public class CategoryController {
	private static String imageDirectory = System.getProperty("user.dir") + "/images/";
	@Autowired
	private CategoryRepository repoCategory;
	
	@GetMapping("/category")
	public List<Category> getAllEmployees(){
		return repoCategory.findAll();
	}		
	

	@PostMapping("/category")
	public Category createCategory(@RequestBody Category category) {
		return repoCategory.save(category);
	}
	

	@GetMapping("/category/{id}")
	public ResponseEntity<Category> getCategoryById(@PathVariable Integer id) {
		Category category = repoCategory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
		return ResponseEntity.ok(category);
	}
	
	
	@PutMapping("/category/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category categoryUpdate){
		Category category = repoCategory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
		
		category.setName(categoryUpdate.getName());
		category.setLink(categoryUpdate.getLink());
		category.setImage(categoryUpdate.getImage());
		
		Category updatedCategory = repoCategory.save(category);
		return ResponseEntity.ok(updatedCategory);
	}
	

	@DeleteMapping("/category/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Integer id){
		Category category = repoCategory.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
		
		repoCategory.delete(category);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping(value = "/add-category-image/{id}", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
	public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file, @PathVariable("id") int categoryId,@RequestParam("type") int type) {
		makeDirectoryIfNotExist(imageDirectory);
		String fileName = file.getOriginalFilename();
		System.out.println("fileName: " + fileName);
		Path fileNamePath = Paths.get(imageDirectory, fileName);
		try {
			Files.write(fileNamePath, file.getBytes());
			if (type == 0) {
			Category category = repoCategory.findById(categoryId).get();
			category.setImage(fileName);
			repoCategory.save(category);
			}
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (IOException ex) {
			return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
		}
	}
	private void makeDirectoryIfNotExist(String imageDirectory) {
		File directory = new File(imageDirectory);
		if (!directory.exists()) {
			directory.mkdir();
		}
	}
	


}
