package com.tranvanchien.model;


import java.util.HashSet;
import java.util.Set;

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
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(length = 128, nullable = false, unique = true)
	private String name;
	
	@Column(length = 128, nullable = false)
	private float price;
	
	
	
	
	@Column(length = 128, nullable = false)
	private String content;
	
	@Column(length = 128, nullable = false)
	private float discount;
	
	@Column(length = 128, nullable = false)
	private int total;
	
	@Column(length = 128, nullable = false)
	private String image;
	
	@Column(length = 5000)
	private String description;
	
	@Column(length = 128)
	private String camera;
	
	@Column(length = 128)
	private String display;
	
	@Column(length = 128)
	private String operating;
	
	@Column(length = 128)
	private String cpu;
	
	@Column(length = 128)
	private String height;
	
	@Column(length = 128)
	private String width;
	
	@Column(length = 128)
	private String thick;


	@ManyToOne()
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

	
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "product_id",nullable = true)
	private Set<ProductImage> productimage = new HashSet<>();

	public Product() {
		
	}

	public Product(Integer id) {
		this.id = id;
	}



	public Product(String name, float price, String content, float discount, int total, String image,
			String description, String camera, String display, String operating, String cpu, String height,
			String width, String thick, Category category) {
		super();
		this.name = name;
		this.price = price;
		this.content = content;
		this.discount = discount;
		this.total = total;
		this.image = image;
		this.description = description;
		this.camera = camera;
		this.display = display;
		this.operating = operating;
		this.cpu = cpu;
		this.height = height;
		this.width = width;
		this.thick = thick;
		this.category = category;
	}
	

	public Product(Integer id, String name, float price, String content, float discount, int total, String image,
			String description, String camera, String display, String operating, String cpu, String height,
			String width, String thick, Category category, Set<ProductImage> productimage) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.content = content;
		this.discount = discount;
		this.total = total;
		this.image = image;
		this.description = description;
		this.camera = camera;
		this.display = display;
		this.operating = operating;
		this.cpu = cpu;
		this.height = height;
		this.width = width;
		this.thick = thick;
		this.category = category;
		this.productimage = productimage;
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

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public float getDiscount() {
		return discount;
	}

	public void setDiscount(float discount) {
		this.discount = discount;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	



	public Category getCategory() {
		return category;
	}



	public void setCategory(Category category) {
		this.category = category;
	}






	public Set<ProductImage> getProductimage() {
		return productimage;
	}

	public void setProductimage(Set<ProductImage> productimage) {
		this.productimage = productimage;
	}

	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getCamera() {
		return camera;
	}



	public void setCamera(String camera) {
		this.camera = camera;
	}



	public String getDisplay() {
		return display;
	}



	public void setDisplay(String display) {
		this.display = display;
	}



	public String getOperating() {
		return operating;
	}



	public void setOperating(String operating) {
		this.operating = operating;
	}



	public String getCpu() {
		return cpu;
	}



	public void setCpu(String cpu) {
		this.cpu = cpu;
	}



	public String getHeight() {
		return height;
	}



	public void setHeight(String height) {
		this.height = height;
	}



	public String getWidth() {
		return width;
	}



	public void setWidth(String width) {
		this.width = width;
	}



	public String getThick() {
		return thick;
	}



	public void setThick(String thick) {
		this.thick = thick;
	}







	



	
	
	
	
	

}
