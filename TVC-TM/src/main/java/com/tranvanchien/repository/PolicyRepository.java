package com.tranvanchien.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tranvanchien.model.Policy;


public interface PolicyRepository extends JpaRepository<Policy, Integer>{

	@Query(value = "select * from Policy P where P.id = 3", nativeQuery = true)
	public List<Policy> baohanh();
	
	@Query(value = "select * from Policy P where P.id = 4", nativeQuery = true)
	public List<Policy> doitra();
	
	@Query(value = "select * from Policy P where P.id = 5", nativeQuery = true)
	public List<Policy> xuhuong();
	
	@Query(value = "select * from Policy P where P.id = 6", nativeQuery = true)
	public List<Policy> tindocongnghe();
}
