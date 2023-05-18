package com.discoverCity.backend.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="categoria")
public class Category implements Serializable {
	private static final long serialVersionUID = 1L;
	
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String categoria;
    
    @JsonIgnore
	@OneToMany(mappedBy = "categoria")
    private List<Establishment> estabelecimentos = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    

	public List<Establishment> getEstabelecimentos() {
		return estabelecimentos;
	}    

	public void setEstabelecimentos(List<Establishment> estabelecimentos) {
		this.estabelecimentos = estabelecimentos;
	}

}
