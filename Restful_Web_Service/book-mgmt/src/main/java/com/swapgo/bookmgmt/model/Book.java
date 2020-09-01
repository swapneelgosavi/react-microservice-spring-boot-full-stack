package com.swapgo.bookmgmt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	@Column(name="AUTHORNAME")
	private String authorName;
	@Column(name="isbn")
	private String isbn;
	@Column(name="PUBLISHERNAME")
	private String publisherName;
	@Column(name="Price")
	private float price;
	
	public Book() {
		super();
	}
	
	
	
	public Book(long id, String name, String authorName, String isbn, String publisherName, float price) {
		super();
		this.id = id;
		this.name = name;
		this.authorName = authorName;
		this.isbn = isbn;
		this.publisherName = publisherName;
		this.price = price;
	}



	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getPublisherName() {
		return publisherName;
	}
	public void setPublisherName(String publisherName) {
		this.publisherName = publisherName;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
}
