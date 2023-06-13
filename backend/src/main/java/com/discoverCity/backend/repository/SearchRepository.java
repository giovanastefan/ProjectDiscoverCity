package com.discoverCity.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.discoverCity.backend.model.Establishment;

public interface SearchRepository extends JpaRepository<Establishment, Long> {
	
    List<Establishment> findByNameContaining(String name);
    List<Establishment> findByCategory_CategoryIn(List<String> category);
    
    

}
