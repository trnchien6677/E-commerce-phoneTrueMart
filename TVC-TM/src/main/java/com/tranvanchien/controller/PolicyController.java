package com.tranvanchien.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.tranvanchien.model.Policy;
import com.tranvanchien.model.Product;
import com.tranvanchien.repository.PolicyRepository;

@CrossOrigin(origins = "*")
@RestController
public class PolicyController {
	
	@Autowired
	private PolicyRepository repoPoli;
	
	@PostMapping("/policy")
	public Policy createPolicy(@RequestBody Policy policy) {
		return repoPoli.save(policy);
	}
	
	@GetMapping("/policy")
	public List<Policy> getAllPolicy(){
		return repoPoli.findAll();
	}
	
	@DeleteMapping("/policy/{id}")
	public ResponseEntity<Map<String, Boolean>> deletePolicy(@PathVariable Integer id){
		Policy policy = repoPoli.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
		
		repoPoli.delete(policy);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	@GetMapping("/policy/{id}")
	public ResponseEntity<Policy> getPolicyById(@PathVariable Integer id) {
		Policy policy = repoPoli.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
		return ResponseEntity.ok(policy);
	}
	
	 @GetMapping("/policy/baohanh")
		public List<Policy> listBaohanh() {
			return repoPoli.baohanh();
		}
	 
	 @GetMapping("/policy/doitra")
		public List<Policy> listDoitra() {
			return repoPoli.doitra();
		}
	 @GetMapping("/policy/xuhuong")
		public List<Policy> listXuhuong() {
			return repoPoli.xuhuong();
		}
	 
	 @GetMapping("/policy/tindo")
		public List<Policy> listTindo() {
			return repoPoli.tindocongnghe();
		}
	 
	 @PutMapping("/policy/{id}")
		public ResponseEntity<Policy> updatePolicy(@PathVariable Integer id, @RequestBody Policy policyUpdate){
		 Policy policy = repoPoli.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));
			
		 policy.setName(policyUpdate.getName());
		 policy.setContent(policyUpdate.getContent());
		
			
		 Policy updatedPolicy = repoPoli.save(policy);
			return ResponseEntity.ok(updatedPolicy);
		}
	 
	
	

}
