package com.tranvanchien.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "orderdetails")
public class OrderDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id_detail_order;
	@Column(name = "id")
	private long id;
	@Column(name = "id_order")
	private String id_order;
	@Column(name = "quantity")
	private long quantity;
	@Column(name = "name")
	private String name;
	@Column(name = "color")
	private String color;
	@Column(name = "image")
	private String image;
	@Column(name = "price") 
	private long price;

	

	public OrderDetails() {
		// TODO Auto-generated constructor stub
	}

	




	






	public OrderDetails(long id, String id_order, long quantity, String name, String color, String image, long price) {
		super();
		this.id = id;
		this.id_order = id_order;
		this.quantity = quantity;
		this.name = name;
		this.color = color;
		this.image = image;
		this.price = price;
	}













	public long getId_detail_order() {
		return id_detail_order;
	}

	public void setId_detail_order(long id_detail_order) {
		this.id_detail_order = id_detail_order;
	}

	public long getId() { 
		return id;
	} 

	public void setId(long id) {
		this.id = id;
	}

	public String getId_order() {
		return id_order;
	}

	public void setId_order(String id_order) {
		this.id_order = id_order;
	}


	public long getQuantity() {
		return quantity;
	}

	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}













	public String getColor() {
		return color;
	}













	public void setColor(String color) {
		this.color = color;
	}
	
	
}
