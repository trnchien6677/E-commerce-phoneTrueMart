package com.tranvanchien.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.Param;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tranvanchien.exception.ResourceNotFoundException;
import com.tranvanchien.model.Category;
import com.tranvanchien.model.News;
import com.tranvanchien.model.Product;
import com.tranvanchien.model.ProductImage;
import com.tranvanchien.model.Rdproduct;
import com.tranvanchien.payload.response.ApiResponse;
import com.tranvanchien.repository.CategoryRepository;
import com.tranvanchien.repository.ProductImageRepository;
import com.tranvanchien.repository.ProductRepository;
import com.tranvanchien.repository.RdproductRepository;
import com.tranvanchien.service.ProductService;

import javassist.NotFoundException;

@CrossOrigin(origins = "*")
@RestController
public class ProductController {

	private static String imageDirectory = System.getProperty("user.dir") + "/images/";
	@Autowired
	private ProductRepository repoPro;
	@Autowired
	private CategoryRepository repoCate;
	@Autowired
	private ProductImageRepository repoProImage;
	@Autowired
	private ProductService productService;
//	@Autowired
//	private ProductService proService;
	@Autowired
	private RdproductRepository repoReproduct;

	@GetMapping("/product")
	public List<Product> getAllProduct() {
		return repoPro.findAll();
	}
	
//	@GetMapping("/product/search")
//	public ResponseEntity<List<Product>> getAllSearch(@RequestParam(required = false) String name) {
//		try {
//			List<Product> product = new ArrayList<Product>();
//
//			if (name == null)
//				repoPro.findAll().forEach(product::add);
//			else
//				repoPro.findByNameContainsIgnoreCase(name).forEach(product::add);
//
//			if (product.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//
//			return new ResponseEntity<>(product, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
	//xoa product
	@DeleteMapping("/product/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Integer id){
		Product product = repoPro.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		repoPro.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	//update 
	/**
	 * @param id
	 * @param productUpdate
	 * @return
	 */
	@PutMapping("/product/{id}/{idcate}")
	public ResponseEntity<Product> updateProduct(@PathVariable Integer id,@PathVariable Integer idcate, @RequestBody Product productUpdate){
		Product product = repoPro.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		Category cate = repoCate.findById(idcate)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + idcate));
		product.setName(productUpdate.getName());
		product.setPrice(productUpdate.getPrice());
		product.setTotal(productUpdate.getTotal());
		product.setDiscount(productUpdate.getDiscount());
		product.setCamera(productUpdate.getCamera());
		product.setContent(productUpdate.getContent());
		product.setCpu(productUpdate.getCpu());
		product.setDescription(productUpdate.getDescription());
		product.setDisplay(productUpdate.getDisplay());
		product.setHeight(productUpdate.getHeight());
		product.setImage(productUpdate.getImage());
		product.setOperating(productUpdate.getOperating());
		product.setThick(productUpdate.getThick());
		product.setWidth(productUpdate.getWidth());
		product.setCategory(cate);
		Product updatedProduct = repoPro.save(product);
		return ResponseEntity.ok(updatedProduct);
	}
	
	@GetMapping("/product/detail/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
		Product product = repoPro.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
		
		return ResponseEntity.ok(product);
	}
	
//	@PostMapping("/product")
//	public Product createProduct(@RequestBody Product product) {
//		return repoPro.save(product);
//	}
	 @GetMapping("/product/{categoryId}")
	    public List<Product> getContactByCategoryId(@PathVariable Integer categoryId) throws NotFoundException {
	    	
	        if(!repoCate.existsById(categoryId)) {
	            throw new NotFoundException("Category not found!");
	        }	
	    	return repoPro.findByCategoryId(categoryId);
	    }
	 
//	 @GetMapping("/product/hi")
//	    public Product findDiscount(String discount) {
//		 Product p = proService.findByDiscount("231");
//		 return repoPro.findByDiscount(p);
//	 }
//	 
	    
	    @PostMapping("/product/{categoryId}")
	    public Product addPro(@PathVariable Integer categoryId,@RequestBody Product product) throws NotFoundException {
	        return repoCate.findById(categoryId)
	                .map(category -> {
	                	product.setCategory(category);
	                    return repoPro.save(product);
	                }).orElseThrow(() -> new NotFoundException("Category not found!"));
	    }
	    
	    @GetMapping("product/product-image/{id}")
		public List<ProductImage> getContactByProductId(@PathVariable Integer id) throws NotFoundException {
	    	return repoProImage.findByProductId(id);
	    }
	    
	    @GetMapping("/product/pt")
	    Page<Product> getAllProduct(
	            @RequestParam Optional<Integer> page,
	            @RequestParam Optional<String> sortBy
	    ) {
	        return repoPro.findAll(
	                PageRequest.of(
	                        page.orElse(1),
	                        8,
	                        Sort.Direction.ASC, sortBy.orElse("id")
	                )
	        );
	    }
	    
	    @GetMapping("/product/samsung")
		Page<Product> getSamsung(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
			return repoPro.listSamSung(PageRequest.of(page.orElse(1), 3, Sort.Direction.ASC, sortBy.orElse("id")));
		}
	    
	    @GetMapping("/product/oppo")
		public List<Product> listOppo() {
			return repoPro.listOppo();
		}
	    @GetMapping("/product/xiaomi")
		public List<Product> listXiaomi() {
			return repoPro.listXiaomi();
		}
	    
	    @GetMapping("/product/allxiaomi")
		public List<Product> listAllXiaomi() {
			return repoPro.listAllXiaomi();
		}
	    
	    @GetMapping("/product/limitVivo")
		public List<Product> listLimitVivo1() {
			return repoPro.listlimitVivo();
		}
	    
	    
	    @GetMapping("/product/allanother")
		Page<Product> getAllProductPro(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
			return repoPro.listAllProductAnother(PageRequest.of(page.orElse(1), 8, Sort.Direction.ASC, sortBy.orElse("id")));
		}
	    
	    @GetMapping("/product/vivo")
		public List<Product> listAllvivo() {
			return repoPro.listAllVivo();
		}
	    
	    @GetMapping("/product/nokia")
		public List<Product> listAllnokia() {
			return repoPro.listAllNokia();
	    }
	   
	    @GetMapping("/product/phukien")
		public List<Product> listPhukien() {
			return repoPro.listPhukien();
		}
	    @GetMapping("/product/allsamsung")
		public List<Product> listAllSamsung() {
			return repoPro.listAllSamsung();
		}
	    //san pham lien quan
	    @GetMapping("/product/detail-product/{id}")
		public List<Product> getAllProductRelated(@PathVariable(value = "id") Long id){
			return repoPro.listProductRelated(id);
		}
	    
	  //Search Product
		 @RequestMapping("/product/search")
		    public  List<Product> viewSearch(@Param("keyword") String keyword) {
		        List<Product> listProducts = productService.listAll(keyword);
		        return listProducts;
		    }
		 
		 //Tao product
			@PostMapping("/product/add/{id}")
		    public Product createProduct(@PathVariable(value = "id") Integer Id,@RequestBody Product product) {	
		        return productService.createProduct(Id,product);
		    }
			
			
			
			

			@PostMapping(value = "/add-product-image/{id}", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
			public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file,
				
				@RequestParam("type") int type, @PathVariable("id") int productId) {
				makeDirectoryIfNotExist(imageDirectory);
				String fileName = file.getOriginalFilename();
				System.out.println("fileName: " + fileName);
				Path fileNamePath = Paths.get(imageDirectory, fileName);
				try {
					Files.write(fileNamePath, file.getBytes());
					
					if (type == 0) {

						ProductImage imageProduct = new ProductImage(fileName, new Product(productId));
						repoProImage.save(imageProduct);
					} if(type==1) {
						
						Product product = repoPro.findById(productId).get();
						product.setImage(fileName);
						repoPro.save(product);
					}
					if(type==2) {
					
						Product product = repoPro.findById(productId).get();
						product.setContent(fileName);
						repoPro.save(product);
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
			
			//update image
			@PostMapping(value = "/addimage", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
			public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file) {
				makeDirectoryIfNotExist(imageDirectory);
				String fileName = file.getOriginalFilename();
				System.out.println("fileName: " + fileName);
				Path fileNamePath = Paths.get(imageDirectory, fileName);
				try {
					Files.write(fileNamePath, file.getBytes());
					return new ResponseEntity<>(HttpStatus.CREATED);
				} catch (IOException ex) {
					return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
				}

			}
			
			//lam-lại
			
			//ad-updated-nhieu-hinh-anh
			@PutMapping("/product-images/{id}")
			public ResponseEntity<?> setProductImage(@PathVariable(value = "id") Integer Id,
					@RequestBody List<ProductImage> images) {
				Product product = repoPro.findById(Id)
						.orElseThrow(() -> new ResourceNotFoundException("Product not found for this id : " + Id));
				product.getProductimage().clear();
				for (ProductImage news2 : images) {
					product.getProductimage().add(news2);
				}
				repoProImage.saveAll(images);
				return ResponseEntity.ok(new ApiResponse("Save productImage successfully", ""));
			}
		
			


	

}
