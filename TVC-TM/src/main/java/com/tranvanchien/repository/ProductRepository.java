package com.tranvanchien.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tranvanchien.model.News;
import com.tranvanchien.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	List<Product> findByCategoryId(Integer categoryId);	
	
	
	@Query(value = "select * from Product P where P.category_id = 11", nativeQuery = true)
	public Page<Product> listSamSung(PageRequest pageRequest);
	
//	List<Product> findByNameContainsIgnoreCase(String name);
	
	@Query(value="SELECT * FROM Product LEFT JOIN Rdproduct ON (Product.id = Rdproduct.product_re) where product_id=?1 ", nativeQuery = true)
	public List<Product> listProductRelated(Long id);
	
	@Query("SELECT p FROM Product p WHERE CONCAT(LOWER(p.name)) LIKE  %?1%  ")
	public List<Product> SearchContainsIgnoreCase(String keyword);
	
//	,LOWER(p.price),LOWER(p.brands)
	
	@Query(value = "select * from Product P where P.category_id = 3", nativeQuery = true)
	public List<Product> listOppo();
	
	@Query(value = "select * from Product P where P.category_id = 6 limit 6", nativeQuery = true)
	public List<Product> listXiaomi();
	
	@Query(value = "select * from Product P where P.category_id = 27", nativeQuery = true)
	public List<Product> listAllVivo();

	@Query(value = "select * from Product P where P.category_id = 28", nativeQuery = true)
	public List<Product> listAllNokia();

//	Page<Product> listOppo(PageRequest of);

	@Query(value = "select * from Product P where P.category_id = 10", nativeQuery = true)
	public List<Product> listPhukien();
	
	@Query(value = "select * from Product P where P.category_id = 11", nativeQuery = true)
	public List<Product> listAllSamsung();
	
	@Query(value = "select * from Product P where P.category_id = 6", nativeQuery = true)
	public List<Product> listAllXiaomi();
	
	@Query(value = "select * from Product P where P.category_id != 10", nativeQuery = true)
	public Page<Product> listAllProductAnother(PageRequest pageRequest);
	
	@Query(value = "select * from Product P where P.category_id = 27 limit 6", nativeQuery = true)
	public List<Product> listlimitVivo();
	

	
	
}
