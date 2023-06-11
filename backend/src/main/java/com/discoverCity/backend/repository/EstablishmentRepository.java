package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.discoverCity.backend.model.Establishment;

public interface EstablishmentRepository extends JpaRepository<Establishment, Long> {
	
	@Query(value= "SELECT e FROM Establishment e JOIN e.address en WHERE en.city = :city")
	List<Establishment> findByCity(@Param("city") String city);
	
}
