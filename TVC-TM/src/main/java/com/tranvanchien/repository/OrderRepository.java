package com.tranvanchien.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tranvanchien.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	@Query(value="SELECT * FROM orders where orders.user_id=?1 ", nativeQuery = true)
	public List<Order> ListOrder(Long id);
	//get-order
	@Query(value="SELECT * FROM orders where orders.id_order=?1 ", nativeQuery = true)
	public Order getOrder(String id);
	
	
}
