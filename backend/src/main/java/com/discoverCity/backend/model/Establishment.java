package com.discoverCity.backend.model;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "estabelecimento")
public class Establishment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "nome")
	private String name;

	@Column(name = "media_nota")
	private double averageRating;

	@Column(name = "descricao")
	private String description;

	@Column(name = "site")
	private String site;

	@Column(name = "imagem")
	private String image;

	@Column(name = "inicio_funcionamento")
	private LocalTime startOperation;

	@Column(name = "fim_funcionamento")
	private LocalTime endOperation;

	@Column(name = "dias_funcionamento")
	private String workingDays;

	@Column(name = "menu_url")
	private String menuUrl;

	@Column(name = "tipo_pagamento")
	private String paymentTypes;

	@ManyToOne
	@JoinColumn(name = "id_categoria")
	private Category category;

	@OneToMany(mappedBy = "establishment")
	private List<Address> address = new ArrayList<>();

	@OneToMany(mappedBy = "establishment")
	private List<Review> reviews = new ArrayList<>();
	
	@OneToMany(mappedBy = "establishment")
	private List<Coupon> coupon = new ArrayList<>();
	
	@OneToMany(mappedBy = "establishment")
	private List<Contact> contacts = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getAverageRating() {
		return averageRating;
	}

	public void setAverageRating(double averageRating) {
		this.averageRating = averageRating;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalTime getStartOperation() {
		return startOperation;
	}

	public void setStartOperation(LocalTime startOperation) {
		this.startOperation = startOperation;
	}

	public LocalTime getEndOperation() {
		return endOperation;
	}

	public void setEndOperation(LocalTime endOperation) {
		this.endOperation = endOperation;
	}

	public String getWorkingDays() {
		return workingDays;
	}

	public void setWorkingDays(String workingDays) {
		this.workingDays = workingDays;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getPaymentTypes() {
		return paymentTypes;
	}

	public void setPaymentTypes(String paymentTypes) {
		this.paymentTypes = paymentTypes;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<Address> getAddress() {
		return address;
	}

	public void setAddress(List<Address> address) {
		this.address = address;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}

	public List<Coupon> getCoupon() {
		return coupon;
	}

	public void setCoupon(List<Coupon> coupon) {
		this.coupon = coupon;
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}
	
}
