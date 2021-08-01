package com.tranvanchien.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.OneToMany;



@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 45, nullable = false, unique = true)
	private String name;
	@Column(length = 45)
	private String link;
	@Column(length = 125)
	private String image;
	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL)
	private List<Product> product = new ArrayList<>();

	

	
	public Category() {	
	}
	
	

	public Category(Integer id) {
		super();
		this.id = id;
	}



	public Category(String name, String link, String image) {
		this.name = name;
		this.link = link;
		this.image = image;
	
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}
	

	

	

}

	


