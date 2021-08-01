package com.tranvanchien.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tranvanchien.exception.ResourceNotFoundException;
import com.tranvanchien.model.Category;
import com.tranvanchien.model.Order;
import com.tranvanchien.model.OrderDetails;
import com.tranvanchien.model.Product;
import com.tranvanchien.repository.OrderDetailRepository;
import com.tranvanchien.repository.OrderRepository;
import com.tranvanchien.repository.UserRepository;

import javassist.NotFoundException;


@RestController
@CrossOrigin
public class OrderController {
	@Autowired
	private OrderRepository orderReponsitory;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/")
	public Order createForm(@RequestBody Order order) {
		return orderReponsitory.save(order);
	}

	@DeleteMapping("/info_order/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable String id) {
		Order order = orderReponsitory.getOrder(id);

		orderReponsitory.delete(order);
		Map<String, Boolean> response = new HashMap<>();
		response.put("delete", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	//order detail
	@Autowired
	private OrderDetailRepository orderDetailRepository;

	@PostMapping("/order")
	public void Test(@RequestBody List<OrderDetails> myOrder) {
		orderDetailRepository.saveAll(myOrder);
	}
	// get list product order
		@GetMapping("/order_detail/listorder/{id}")
		public List<OrderDetails> getListOrderDetail(@PathVariable(value = "id") String id) {
			return orderDetailRepository.getOrderDetail(id);
		}
		
		@DeleteMapping("/order_detail/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteOrderDe(@PathVariable String id) {
			List<OrderDetails> orderDetail= orderDetailRepository.getOrderDetail(id);

			orderDetailRepository.deleteAll(orderDetail);
			Map<String, Boolean> response = new HashMap<>();
			response.put("delete", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
		@GetMapping("/order/{id}")
	    public List<Order> ListOrderdetail(@PathVariable (value = "id") Long id) throws NotFoundException {
	    	return orderReponsitory.ListOrder(id);
	    }
		
		@GetMapping("/order/all")
	    public List<Order> ListOrderAll(){
	    	return orderReponsitory.findAll();
	    }
		
		
		@GetMapping("/order_detail/{id}")
		public Order getOrderdetail(@PathVariable (value = "id") String id) throws NotFoundException {
	    	return orderReponsitory.getOrder(id);
	    }
		
		@DeleteMapping("/order/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id){
			Order order = orderReponsitory.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
			
			orderReponsitory.delete(order);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	



}

