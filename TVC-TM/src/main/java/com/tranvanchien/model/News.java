package com.tranvanchien.model;



import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
@Entity
public class News {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 250)	
	private String title;
	
	@Column(length = 5000)
	private String des;
	
	@Column(length = 145)
	private String image;
	


	@Column(length = 15000)
	private String content;
	
	@Column(length = 5000)
	private String type;
	
	
	
	public News() {	
	}
	

	
	
	
	





	public News(String title, String des, String image, String content, String type) {
		super();
		this.title = title;
		this.des = des;
		this.image = image;
	
		this.content = content;
		this.type = type;
	}











	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDes() {
		return des;
	}
	public void setDes(String des) {
		this.des = des;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}





	public String getContent() {
		return content;
	}





	public void setContent(String content) {
		this.content = content;
	}





	public String getType() {
		return type;
	}





	public void setType(String type) {
		this.type = type;
	}











	
	
	
	

	
}


