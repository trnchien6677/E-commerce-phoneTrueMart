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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tranvanchien.exception.ResourceNotFoundException;
import com.tranvanchien.model.Category;
import com.tranvanchien.model.Report;
import com.tranvanchien.repository.ReportRepository;

@CrossOrigin(origins = "*")
@RestController
public class ReportController {
	
	@Autowired
	private ReportRepository repoReport;
	
	@PostMapping("/report")
	public Report createReport(@RequestBody Report report) {
		return repoReport.save(report);
	}
	
	@GetMapping("/report")
	public List<Report> getAllReport(){
		return repoReport.findAll();
	}
	
	@DeleteMapping("/report/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteReport(@PathVariable Integer id){
		Report report = repoReport.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Report not exist with id :" + id));
		
		repoReport.delete(report);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
