package com.tranvanchien.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tranvanchien.model.News;


public interface NewsRepository extends JpaRepository<News, Integer> {
	
	@Query(value = "select * from News P where P.type = 'event' limit 3", nativeQuery = true)
	public List<News> listEvent();
	
	@Query(value = "select * from News P where P.type = 'news'", nativeQuery = true)
	public List<News> listNews();
	
	@Query(value = "select * from News P where P.type = 'news' and id=(select MAX(id) from News)", nativeQuery = true)
	public List<News> listTopNews();
	
	@Query(value = "select * from News P where P.type = 'news'", nativeQuery = true)
	public Page<News> listNews1(PageRequest pageRequest);
	
	@Query(value = "select * from News P where P.type = 'news' and P.id != ?1", nativeQuery = true)
	public List<News> listNewsAnother(Integer id);
	

}
