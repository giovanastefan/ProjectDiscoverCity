package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.discoverCity.backend.model.Establishment;

public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {
	
	//@Query(value= "SELECT * FROM estabelecimento WHERE id=1")
	//List<Establishment> findByNumero(Long id);
	

}
