package com.tranvanchien.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tranvanchien.model.ProductImage;
@Repository
public interface ProductImageRepository extends JpaRepository<ProductImage, Integer>{
	List<ProductImage> findByProductId(Integer productId);	

}
