package com.discoverCity.backend.model;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="cupons")
public class Coupon {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long id;
	
	@Column(name = "codigo")
	public String code;
	
	@Column(name = "data_inicio")
	public Date initialDate;
	
	@Column(name = "data_validade")	
	public Date expirationDate;
	
	@Column(name = "descricao")
	public String description;
	
	@Column(name = "valido")
	public boolean isValid;
	
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_estabelecimento")
	public Establishment establishment;

	/*public Coupon() {
		
	}
	
	public Coupon(Long id, String code, Date initialDate, Date expirationDate, String description, boolean isValid,
			Establishment establishment) {
		super();
		this.id = id;
		this.code = code;
		this.initialDate = initialDate;
		this.expirationDate = expirationDate;
		this.description = description;
		this.isValid = isValid;
		this.establishment = establishment;
	}*/

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public Date getInitialDate() {
		return initialDate;
	}

	public void setInitialDate(Date initialDate) {
		this.initialDate = initialDate;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isValid() {
		return isValid;
	}

	public void setValid(boolean isValid) {
		this.isValid = isValid;
	}

	public Establishment getEstablishment() {
		return establishment;
	}

	public void setEstablishment(Establishment establishment) {
		this.establishment = establishment;
	}	

}
