package com.tranvanchien.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tranvanchien.model.OrderDetails;

public interface OrderDetailRepository extends JpaRepository<OrderDetails, Long>{
	@Query(value = "SELECT * FROM orderdetails where orderdetails.id_order=?1 ", nativeQuery = true)
	public List<OrderDetails> getOrderDetail(String id);
}
