package com.tranvanchien.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
import com.tranvanchien.repository.NewsRepository;

@CrossOrigin(origins = "*")
@RestController
public class NewsController {
	private static String imageDirectory = System.getProperty("user.dir") + "/images/";
	@Autowired
	private NewsRepository repoNew;
	
	@GetMapping("/news")
	public List<News> listNews(){
		return repoNew.listNews();
	}
	@GetMapping("/news/{id}")
	public ResponseEntity<News> getNewsById(@PathVariable Integer id) {
		News news = repoNew.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("News not exist with id :" + id));
		return ResponseEntity.ok(news);
	}
	
	@PostMapping("/news")
	public News createNews(@RequestBody News news) {
		return repoNew.save(news);
	}
	
	
	@PostMapping(value = "/add-image/{id}", produces = { MediaType.IMAGE_PNG_VALUE, "application/json" })
	public ResponseEntity<?> uploadImage(@RequestParam("imageFile") MultipartFile file, @PathVariable("id") int newsId,@RequestParam("type") int type) {
		makeDirectoryIfNotExist(imageDirectory);
		String fileName = file.getOriginalFilename();
		System.out.println("fileName: " + fileName);
		Path fileNamePath = Paths.get(imageDirectory, fileName);
		try {
			Files.write(fileNamePath, file.getBytes());
			if (type == 0) {
			News news = repoNew.findById(newsId).get();
			news.setImage(fileName);
			repoNew.save(news);
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
	
	
	@DeleteMapping("/news/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteNews(@PathVariable Integer id){
		News news = repoNew.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("News not exist with id :" + id));
		
		repoNew.delete(news);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	 @GetMapping("/news/event")
		public List<News> listEvent() {
			return repoNew.listEvent();
		}
	 @GetMapping("/news/ni")
		public List<News> getAllNews(){
			return repoNew.findAll();
		}
	 
	 @GetMapping("/news/top")
		public List<News> getTop1News(){
			return repoNew.listTopNews();
		}
//	 lay-su-kien
	@GetMapping("/events")
	Page<News> getEvents(@RequestParam Optional<Integer> page, @RequestParam Optional<String> sortBy) {
		return repoNew.listNews1(PageRequest.of(page.orElse(1), 4, Sort.Direction.ASC, sortBy.orElse("id")));
	}
	
	@GetMapping("/news/another/{id}")
	public List<News> getNewsAnother(@PathVariable Integer id){
		return repoNew.listNewsAnother(id);
		
	}
	//update
	@PutMapping("/news/update/{id}")
	public ResponseEntity<News> updateNews(@PathVariable Integer id, @RequestBody News newsUpdate){
		News news = repoNew.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("News not exist with id :" + id));
		
		news.setTitle(newsUpdate.getTitle());
		news.setDes(newsUpdate.getDes());
		news.setImage(newsUpdate.getImage());
		news.setContent(newsUpdate.getContent());
	
		news.setType(newsUpdate.getType());
		
		News updatedNews = repoNew.save(news);
		return ResponseEntity.ok(updatedNews);
	}
	
	@GetMapping("/news/pt")
    Page<News> getAllNews(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<String> sortBy
    ) {
        return repoNew.findAll(
                PageRequest.of(
                        page.orElse(1),
                        8,
                        Sort.Direction.ASC, sortBy.orElse("id")
                )
        );
    }
	
	

}
